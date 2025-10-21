// src/components/Hero.tsx
import { Button } from "@/components/ui/button";
import lumenLogo from "@/assets/lumen-logo.jpeg";
import heroBuilding from "@/assets/hero-building.jpg";
import AOS from 'aos';
import { useEffect } from 'react';

const Hero = () => {
    
    useEffect(() => { AOS.init({ duration: 800, once: true, offset: 100 }); }, []);

  const scrollToSection = (id: string) => {
    const elementId = id.startsWith('#') ? id.substring(1) : id;
    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 1. Imagem de fundo e Overlay (colocados primeiro no código, z-index negativo) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10" // Garante que fique atrás
        style={{ backgroundImage: `url(${heroBuilding})` }}
      />
      <div className="absolute inset-0 bg-primary/85 -z-10" /> {/* Garante que fique atrás */}

       {/* 2. Gradiente Inferior (colocado antes do conteúdo, z-index 0 ou 1) */}
       <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent z-0" />


      {/* 3. Conteúdo Principal (colocado por último no código, z-index maior) */}
      <div className="container mx-auto px-6 pb-24 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto" data-aos="fade-in">
          {/* ... Logo ... */}
          <img
            src={lumenLogo}
            alt="Lumen Consultoria Empresarial"
            className="w-40 h-40 mb-8 rounded-full shadow-2xl hover-scale"
            data-aos="zoom-in"
            data-aos-delay="100"
          />

          {/* ... Título ... */}
          <h1
             className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
             data-aos="fade-down"
             data-aos-delay="200"
          >
            Lumen Consultoria<br />Empresarial
          </h1>

          {/* ... Textos ... */}
          <p
             className="text-xl md:text-2xl text-primary-foreground/90 mb-4 max-w-2xl leading-relaxed font-light"
             data-aos="fade-up"
             data-aos-delay="300"
           >
            Iluminamos o caminho para a excelência empresarial com estratégias
            inovadoras e soluções personalizadas
          </p>
          <p
             className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl leading-relaxed italic"
             data-aos="fade-up"
             data-aos-delay="400"
          >
            "Crescer é uma escolha. Escolha dar o próximo passo."
          </p>

          {/* ... Botões ... */}
          <div
            className="flex flex-col sm:flex-row gap-4"
            data-aos="fade-up"
            data-aos-delay="500"
           >
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 hover-scale"
              onClick={() => scrollToSection('contact')}
            >
              Fale Conosco
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all hover-scale"
              onClick={() => scrollToSection('services')}
            >
              Nossos Serviços
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
import { Button } from "@/components/ui/button";
import lumenLogo from "@/assets/lumen-logo.jpeg";
import heroBuilding from "@/assets/hero-building.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBuilding})` }}
      />
      <div className="absolute inset-0 bg-primary/85" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto animate-fade-in">
          <img 
            src={lumenLogo} 
            alt="Lumen Consultoria Empresarial" 
            className="w-40 h-40 mb-8 rounded-full shadow-2xl hover-scale"
          />
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Lumen Consultoria<br />Empresarial
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 max-w-2xl leading-relaxed font-light">
            Iluminamos o caminho para a excelência empresarial com estratégias 
            inovadoras e soluções personalizadas
          </p>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl leading-relaxed italic">
            "Crescer é uma escolha. Escolha dar o próximo passo."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
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
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;

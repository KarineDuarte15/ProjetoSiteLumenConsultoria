// src/components/AreasOfExpertise.tsx
import { Target, Users, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from 'react'; // Import React if needed, although not strictly necessary for this component structure

// Informações para Áreas de Atuação (movido de Services.tsx)
const areas = [
  {
    name: "Gestão Estratégica",
    icon: Target,
    description: "Alinhamos sua visão de futuro com ações concretas para crescimento sustentável.",
    // imageSrc: "/path/to/estrategia.jpg", // TODO: Adicione o caminho da sua imagem
  },
  {
    name: "Gestão de Pessoas",
    icon: Users,
    description: "Desenvolvemos seu capital humano, o ativo mais valioso da sua empresa.",
    // imageSrc: "/path/to/pessoas.jpg", // TODO: Adicione o caminho da sua imagem
  },
  {
    name: "Gestão Tributária",
    icon: Landmark,
    description: "Otimizamos sua carga tributária com planejamento e conformidade fiscal.",
    // imageSrc: "/path/to/tributario.jpg", // TODO: Adicione o caminho da sua imagem
  },
];

const AreasOfExpertise = () => {
  return (
    // Adicione um ID para a navegação por âncora
    <section id="areas" className="py-24 bg-background"> {/* Fundo diferente para separar visualmente */}
      <div className="container mx-auto px-6">
        {/* Título da Seção */}
        <div className="text-center mb-16" data-aos="fade-up"> {/* Ajuste o delay se necessário */}
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6"> {/* Título principal */}
            Áreas de Atuação
          </h2>
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
             Nossa expertise aplicada para impulsionar seus resultados.
           </p>
        </div>

        {/* Grid com as Áreas */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          {areas.map((area, index) => (
             <div
                key={area.name}
                // Mantém o estilo azul primário que definimos antes
                className="flex flex-col items-center p-6 bg-primary text-primary-foreground rounded-lg shadow-md border border-primary hover:border-white/50 transition-colors duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 150} // Delay escalonado
              >
               {/* Ícone com fundo branco */}
               <div className="w-16 h-16 bg-primary-foreground rounded-full flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                  <area.icon size={32} />
               </div>
               <h4 className="text-xl font-semibold mb-2">{area.name}</h4>
               <p className="text-primary-foreground/80 text-center mb-5 flex-grow">{area.description}</p>
               <Button
                  variant="outline"
                  className="bg-white text-primary hover:bg-white/90 border-none hover:scale-105 transition-transform font-medium shadow-sm"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Saiba Mais
               </Button>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasOfExpertise;
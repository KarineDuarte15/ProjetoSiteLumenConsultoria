// src/components/Services.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Building2, Network, GitBranch } from "lucide-react";

const services = [
  // ... (array de serviços inalterado)
];

const areas = [
  { name: "Gestão Estratégica", bg: "bg-primary", text: "text-primary-foreground" },
  { name: "Gestão de Pessoas", bg: "bg-accent", text: "text-accent-foreground" },
  { name: "Gestão Tributária", bg: "bg-primary", text: "text-primary-foreground" },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up"> {/* Animação para o bloco do título */}
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções especializadas para cada desafio do seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              data-aos="fade-up" // Animação para cada card
              data-aos-delay={index * 100} // Delay escalonado
            >
              <CardHeader>
                <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="300"> {/* Animação para a seção Áreas */}
          <h3 className="text-2xl font-bold text-foreground mb-6">Áreas de Atuação</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {areas.map((area, index) => (
               <div
                  key={area.name}
                  className={`px-6 py-3 ${area.bg} ${area.text} rounded-full font-semibold hover-scale cursor-default`} // Adicionei cursor-default se não forem clicáveis
                  data-aos="zoom-in" // Animação de zoom para as áreas
                  data-aos-delay={index * 100} // Delay escalonado
                >
                 {area.name}
               </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
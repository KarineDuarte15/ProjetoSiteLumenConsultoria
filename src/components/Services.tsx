import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Building2, Network, GitBranch } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Planejamento Estratégico",
    description: "Desenvolvemos estratégias customizadas para impulsionar o crescimento sustentável do seu negócio."
  },
  {
    icon: Building2,
    title: "Governança Corporativa",
    description: "Estruturamos práticas de governança que fortalecem a gestão e garantem resultados consistentes."
  },
  {
    icon: Network,
    title: "Modelagem de Negócios",
    description: "Criamos modelos de negócios inovadores e adaptáveis às demandas do mercado."
  },
  {
    icon: GitBranch,
    title: "Gestão de Processos",
    description: "Otimizamos processos empresariais para maximizar eficiência e produtividade."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
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
              style={{ animationDelay: `${index * 100}ms` }}
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
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">Áreas de Atuação</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover-scale">
              Gestão Estratégica
            </div>
            <div className="px-6 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover-scale">
              Gestão de Pessoas
            </div>
            <div className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover-scale">
              Gestão Tributária
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

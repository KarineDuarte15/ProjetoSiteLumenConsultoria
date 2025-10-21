// src/components/Services.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Building2, Network, GitBranch, Users, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button"; // Import Button

// Descrições atualizadas baseadas nas imagens
const services = [
  {
    icon: Target,
    title: "Planejamento Estratégico",
    description: "Definição de objetivos, indicadores e planos de ação para alcançar metas organizacionais e vantagem competitiva sustentável."
  },
  {
    icon: Building2,
    title: "Governança Corporativa",
    description: "Implementação de estruturas e processos para garantir transparência, equidade, prestação de contas (accountability) e responsabilidade corporativa."
  },
  {
    icon: Network,
    title: "Modelagem de Negócios",
    description: "Criação e otimização de modelos de negócios inovadores, identificando propostas de valor, segmentos de clientes, canais e fontes de receita."
  },
  {
    icon: GitBranch,
    title: "Gestão de Processos (BPM)",
    description: "Mapeamento, análise, redesenho e monitoramento de processos de negócios para aumentar a eficiência operacional, reduzir custos e melhorar a qualidade."
  }
];

// Informações para Áreas de Atuação
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


const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary"> {/* Mudamos o fundo da seção para secondary para contraste */}
      <div className="container mx-auto px-6">
        {/* Título "Nossos Serviços" */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-4"> {/* Ajuste cor do título se necessário */}
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções especializadas para cada desafio do seu negócio
          </p>
        </div>

        {/* Grid de Cards de Serviços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              // Aplicar bg-primary e text-primary-foreground ao Card
              className="bg-primary text-primary-foreground border-primary hover:border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden pt-1" // Adicionado bg-primary, text-primary-foreground, ajustado border
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Aba no hover (agora branca para contrastar) */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              <CardHeader className="pt-5">
                {/* Ícone com fundo branco para contraste */}
                <div className="w-14 h-14 bg-primary-foreground rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-primary" /> {/* Ícone agora na cor primária */}
                </div>
                 {/* Título já herda text-primary-foreground */}
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                 {/* Descrição com cor slightly muted */}
                <p className="text-primary-foreground/80 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Services;
// src/components/Services.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Building2, Network, GitBranch, Users, Landmark } from "lucide-react"; // Importe mais ícones se necessário

// Descrições atualizadas baseadas nas imagens
const services = [
  {
    icon: Target, // image_a66f19.png
    title: "Planejamento Estratégico",
    description: "Definição de objetivos, indicadores e planos de ação para alcançar metas organizacionais e vantagem competitiva sustentável." // Descrição da imagem
  },
  {
    icon: Building2, // image_a66f12.png
    title: "Governança Corporativa",
    description: "Implementação de estruturas e processos para garantir transparência, equidade, prestação de contas (accountability) e responsabilidade corporativa." // Descrição da imagem
  },
  {
    icon: Network, // image_a66e75.png
    title: "Modelagem de Negócios",
    description: "Criação e otimização de modelos de negócios inovadores, identificando propostas de valor, segmentos de clientes, canais e fontes de receita." // Descrição da imagem
  },
  {
    icon: GitBranch, // image_a66b36.png
    title: "Gestão de Processos (BPM)",
    description: "Mapeamento, análise, redesenho e monitoramento de processos de negócios para aumentar a eficiência operacional, reduzir custos e melhorar a qualidade." // Descrição da imagem
  }
  // Se houver mais serviços baseados em outras imagens (ex: image_a66ad6.png), adicione aqui.
];

// Informações para Áreas de Atuação
const areas = [
  {
    name: "Gestão Estratégica",
    icon: Target, // Ícone representativo
    description: "Alinhamos sua visão de futuro com ações concretas para crescimento sustentável.",
    // imageSrc: "/path/to/estrategia.jpg", // TODO: Adicione o caminho da sua imagem
  },
  {
    name: "Gestão de Pessoas",
    icon: Users, // Ícone representativo
    description: "Desenvolvemos seu capital humano, o ativo mais valioso da sua empresa.",
    // imageSrc: "/path/to/pessoas.jpg", // TODO: Adicione o caminho da sua imagem
  },
  {
    name: "Gestão Tributária",
    icon: Landmark, // Ícone representativo
    description: "Otimizamos sua carga tributária com planejamento e conformidade fiscal.",
    // imageSrc: "/path/to/tributario.jpg", // TODO: Adicione o caminho da sua imagem
  },
];


const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Título "Nossos Serviços" */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
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
              className="border-2 border-transparent hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden pt-1" // pt-1 para espaço da "aba"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Elemento para simular a aba no hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              <CardHeader className="pt-5"> {/* Ajusta padding top */}
                <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Seção "Áreas de Atuação" Atualizada */}
        <div className="mt-24 text-center" data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Áreas de Atuação</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {areas.map((area, index) => (
               <div
                  key={area.name}
                  className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md border border-transparent hover:border-primary transition-colors duration-300" // Estilo base
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                >
                 {/* Placeholder para Imagem - Substitua pelo seu componente de imagem ou <img> */}
                 {/* Exemplo com placeholder: */}
                 {/* <img src={area.imageSrc || "/placeholder.svg"} alt={area.name} className="w-full h-40 object-cover rounded-md mb-4"/> */}
                 <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 text-primary-foreground">
                    <area.icon size={32} />
                 </div>
                 <h4 className="text-xl font-semibold text-foreground mb-2">{area.name}</h4>
                 <p className="text-muted-foreground text-center mb-5 flex-grow">{area.description}</p>
                 <Button
                    className="bg-primary hover:bg-primary/90 text-primary-foreground hover-scale animate-pulse-blue w-full md:w-auto" // Botão sempre azul e com animação
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} // Ex: Rola para contato
                  >
                    Saiba Mais
                 </Button>
               </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
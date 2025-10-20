import aboutBuilding from "@/assets/about-building.jpg";

const About = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aboutBuilding})` }}
      />
      <div className="absolute inset-0 bg-card/95" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre a Lumen
            </h2>
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">Missão</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Impulsionar empresas que almejam expansão através do desenvolvimento 
                  estratégico para incluí-las no mercado competitivo de forma sustentável.
                </p>
              </div>
              
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">Visão</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ser referência em promover crescimento do cliente de forma organizada 
                  e planejada, com uma cultura sólida e boas práticas sustentáveis.
                </p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">Valores</h3>
                <ul className="text-lg text-muted-foreground leading-relaxed space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Transparência
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Oportunidade
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Inovação
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Confraternidade
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Paixão pelo saber e pelo fazer
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-primary text-primary-foreground p-8 rounded-lg hover-scale group">
              <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">2</div>
              <div className="text-lg">Anos de Mercado</div>
            </div>
            <div className="bg-accent text-accent-foreground p-8 rounded-lg hover-scale group">
              <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">🇧🇷</div>
              <div className="text-lg">Atuação Nacional</div>
            </div>
            <div className="bg-accent text-accent-foreground p-8 rounded-lg hover-scale group">
              <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">3</div>
              <div className="text-lg">Áreas de Gestão</div>
            </div>
            <div className="bg-primary text-primary-foreground p-8 rounded-lg hover-scale group">
              <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">4</div>
              <div className="text-lg">Serviços Principais</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

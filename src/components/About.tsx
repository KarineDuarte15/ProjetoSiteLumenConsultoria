// src/components/About.tsx
import aboutBuilding from "@/assets/about-building.jpg";

const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aboutBuilding})` }}
      />
      <div className="absolute inset-0 bg-card/95" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna Esquerda: Texto */}
          <div data-aos="fade-right"> {/* Animação para a coluna de texto */}
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre a Lumen
            </h2>
            <div className="space-y-8">
              {/* Missão */}
              <div className="border-l-4 border-primary pl-6" data-aos="fade-right" data-aos-delay="100">
                <h3 className="text-2xl font-bold text-foreground mb-3">Missão</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Impulsionar empresas que almejam expansão através do desenvolvimento
                  estratégico para incluí-las no mercado competitivo de forma sustentável.
                </p>
              </div>
              {/* Visão */}
              <div className="border-l-4 border-accent pl-6" data-aos="fade-right" data-aos-delay="200">
                <h3 className="text-2xl font-bold text-foreground mb-3">Visão</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ser referência em promover crescimento do cliente de forma organizada
                  e planejada, com uma cultura sólida e boas práticas sustentáveis.
                </p>
              </div>
              {/* Valores */}
              <div className="border-l-4 border-primary pl-6" data-aos="fade-right" data-aos-delay="300">
                <h3 className="text-2xl font-bold text-foreground mb-3">Valores</h3>
                <ul className="text-lg text-muted-foreground leading-relaxed space-y-2">
                  {/* ... (lista de valores inalterada) ... */}
                </ul>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Cards com Números */}
          <div className="grid grid-cols-2 gap-6" data-aos="fade-left"> {/* Animação para a coluna de cards */}
            {/* Card 1 */}
            <div className="bg-primary text-primary-foreground p-8 rounded-lg hover-scale group" data-aos="zoom-in" data-aos-delay="100">
              <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">2</div>
              <div className="text-lg">Anos de Mercado</div>
            </div>
             {/* Card 2 */}
            <div className="bg-accent text-accent-foreground p-8 rounded-lg hover-scale group" data-aos="zoom-in" data-aos-delay="200">
              <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">🇧🇷</div>
              <div className="text-lg">Atuação Nacional</div>
            </div>
             {/* Card 3 */}
            <div className="bg-accent text-accent-foreground p-8 rounded-lg hover-scale group" data-aos="zoom-in" data-aos-delay="300">
              <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">3</div>
              <div className="text-lg">Áreas de Gestão</div>
            </div>
             {/* Card 4 */}
            <div className="bg-primary text-primary-foreground p-8 rounded-lg hover-scale group" data-aos="zoom-in" data-aos-delay="400">
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
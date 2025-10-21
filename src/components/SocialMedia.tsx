import { Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Placeholder para os posts do Instagram
const instagramPosts = [
  { id: 1, imageUrl: "/placeholder.svg", caption: "Post 1...", link: "#" }, // Use /placeholder.svg ou importe imagens reais
  { id: 2, imageUrl: "/placeholder.svg", caption: "Post 2...", link: "#" },
  { id: 3, imageUrl: "/placeholder.svg", caption: "Post 3...", link: "#" },
];

const SocialMedia = () => {
  return (
    <section id="social" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up"> {/* Animação título */}
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">
            Siga-nos no Instagram
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acompanhe nossas novidades e insights sobre gestão empresarial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {instagramPosts.map((post, index) => (
            <Card
               key={post.id}
               className="overflow-hidden hover:shadow-xl transition-shadow duration-300 hover-scale"
               data-aos="fade-up" // Animação card
               data-aos-delay={index * 100} // Delay escalonado
             >
              <CardContent className="p-0">
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={post.imageUrl}
                    alt={`Instagram Post ${post.id}`}
                    className="aspect-square w-full object-cover"
                  />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up" data-aos-delay="300"> {/* Animação botão */}
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground hover-scale">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-5 w-5" />
              Ver Perfil Completo
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
// src/components/SocialMedia.tsx
import { Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import postImage1 from "@/assets/placeholder1.png"; // Substitua pelo nome real se diferente
import postImage2 from "@/assets/placeholder2.png"; // Substitua pelo nome real se diferente
import postImage3 from "@/assets/placeholder3.png"; // Substitua pelo nome real se diferente

// Links fornecidos e placeholders para imagens
const instagramPosts = [
  {
    id: 1,
    imageUrl: postImage1, // TODO: Substitua por screenshot ou imagem real do post 1
    link: "https://www.instagram.com/p/DN8YnumjfK1/?img_index=1",
    alt: "Preview do post sobre planejamento estratégico no Instagram"
  },
  {
    id: 2,
    imageUrl: postImage2, // TODO: Substitua por screenshot ou imagem real do post 2
    link: "https://www.instagram.com/p/DOErxn0kY6x/?img_index=1",
    alt: "Preview do post sobre modelo de negócios no Instagram"
  },
  {
    id: 3,
    imageUrl: postImage3, // TODO: Substitua por screenshot ou imagem real do post 3
    link: "https://www.instagram.com/p/DPOi6nFkdkw/", // Link sem img_index se for o post principal
    alt: "Preview do post sobre processos no Instagram"
  },
];

const SocialMedia = () => {
  return (
    // Certifique-se que o ID "social" existe para a navegação funcionar
    <section id="social" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">
            Siga-nos no Instagram
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acompanhe nossas novidades e insights sobre gestão empresarial.
          </p>
        </div>

        {/* Grid para os posts */}
        <div className="grid md:grid-cols-3 gap-8 mb-12" data-aos="fade-up" data-aos-delay="100">
          {instagramPosts.map((post, index) => (
            <Card
               key={post.id}
               className="overflow-hidden group border-2 border-transparent hover:border-primary hover:shadow-xl transition-all duration-300 ease-in-out" // Efeito hover
               data-aos="zoom-in" // Animação diferente para os posts
               data-aos-delay={index * 100}
             >
              <CardContent className="p-0 relative">
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="block relative">
                  <img
                    src={post.imageUrl} // Use o placeholder ou a imagem real
                    alt={post.alt}
                    className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105" // Efeito zoom na imagem
                  />
                  {/* Overlay com ícone do Instagram no hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <Instagram className="h-12 w-12 text-white" />
                  </div>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Botão para ver perfil */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="400">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground hover-scale">
            <a href="https://www.instagram.com/lumenconsultoriaempresarial/" target="_blank" rel="noopener noreferrer"> {/* Link Atualizado */}
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
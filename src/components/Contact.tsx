import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para transformar seu negócio em todo o Brasil
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Fale Conosco</h3>
            <form className="space-y-6">
              <div>
                <Input 
                  placeholder="Nome completo" 
                  className="h-12"
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="E-mail corporativo" 
                  className="h-12"
                />
              </div>
              <div>
                <Input 
                  placeholder="Empresa" 
                  className="h-12"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Mensagem" 
                  className="min-h-32"
                />
              </div>
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover-scale"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>
          
          <div className="space-y-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
            
            <div className="flex items-start gap-4 hover-scale">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">E-mail</h4>
                <p className="text-muted-foreground">contato@lumenconsultoria.com.br</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 hover-scale">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">WhatsApp</h4>
                <p className="text-muted-foreground">(85) 99711-1727</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 hover-scale">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Atuação</h4>
                <p className="text-muted-foreground">
                  Atendemos empresas em todo o Brasil
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// src/components/Footer.tsx
import lumenLogo from "@/assets/lumen-logo.jpeg";
import { Button } from "@/components/ui/button"; // Importe o Button
import { Linkedin, Instagram } from "lucide-react"; // Importe os ícones

const Footer = () => {
  // Função para rolagem suave ao topo (opcional, pode ser usada aqui também)
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-8 md:py-12"> {/* Ajustei o padding se necessário */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8"> {/* Aumentei o gap */}

          {/* Logo e Info */}
          <div className="flex items-center gap-4">
            <button onClick={scrollToTop} className="hover-scale transition-transform duration-300"> {/* Logo clicável para voltar ao topo */}
               <img
                 src={lumenLogo}
                 alt="Lumen Logo"
                 className="w-12 h-12 rounded-full"
               />
            </button>
            <div>
              <div className="font-bold text-lg">Lumen Consultoria Empresarial LTDA</div>
              <div className="text-xs text-primary-foreground/70 mt-1">CNPJ: 59.905.650/0001-29</div>
            </div>
          </div>

          {/* Ícones Sociais (Novo Bloco) */}
          <div className="flex items-center space-x-3">
             <Button variant="ghost" size="icon" asChild className="text-primary-foreground hover:bg-white/10 hover:text-white rounded-full hover-scale">
               <a href="https://linkedin.com/company/lumenconsultoriaempresarial/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                 <Linkedin className="h-5 w-5" />
               </a>
             </Button>
             <Button variant="ghost" size="icon" asChild className="text-primary-foreground hover:bg-white/10 hover:text-white rounded-full hover-scale">
               <a href="https://www.instagram.com/lumenconsultoriaempresarial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                 <Instagram className="h-5 w-5" />
               </a>
             </Button>
             {/* Adicione mais botões aqui se necessário */}
          </div>

          {/* Direitos Autorais */}
          <div className="text-center md:text-right">
            <p className="text-sm text-primary-foreground/80">
              © {new Date().getFullYear()} Lumen Consultoria Empresarial. Todos os direitos reservados. {/* Ano dinâmico */}
            </p>
            <p className="text-sm text-primary-foreground/80"> {/* Aplica as mesmas classes */}
               Desenvolvido por{' '}
               <a
                   href="https://www.linkedin.com/in/karineduarte-desenvolvedora/" // Coloque o link correto aqui
                   target="_blank"
                   rel="noopener noreferrer"
                   className="underline hover:text-white transition-colors" // Estilo do link
               >
                   Karine Duarte Desenvolvedora
               </a>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
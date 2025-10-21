// src/components/Navbar.tsx
import { useState } from "react";
import { Link } from "react-router-dom"; // Ou use 'a' tags se não usar routing interno
import { Menu, X, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import lumenLogo from "@/assets/lumen-logo.jpeg"; // Reutilize o logo
import { useIsMobile } from "@/hooks/use-mobile"; // Assumindo que este hook existe

const navLinks = [
  { label: "Início", href: "#hero" }, // Use IDs das seções ou rotas
  { label: "Serviços", href: "#services" },
  { label: "Sobre Nós", href: "#about" },
  { label: "Redes Sociais", href: "#social" }, // Verifique se o ID existe na seção SocialMedia
  { label: "Contato", href: "#contact" },
];

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string, isMobileMenu = false) => {
     const elementId = id.startsWith('#') ? id.substring(1) : id;
     const element = document.getElementById(elementId);
     if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
         if (isMobileMenu) setIsOpen(false); // Fecha o menu mobile após clicar
     } else if (id === '/') { // Adicionado para lidar com o Link "Início" se for rota
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (isMobileMenu) setIsOpen(false);
     }
  };


  const renderNavLinks = (isMobileMenu = false) => (
    navLinks.map((link) => (
      <Button
        key={link.label}
        variant="ghost"
        className="text-foreground hover:bg-accent hover:text-accent-foreground justify-start md:justify-center text-base font-medium transition-colors duration-200" // Garante transição suave
        onClick={() => scrollToSection(link.href, isMobileMenu)}
        // Removido asChild condicional para simplificar, onClick cuida da rolagem
      >
         <span>{link.label}</span>
      </Button>
    ))
  );

  const renderSocialLinks = () => (
    <>
      <Button variant="ghost" size="icon" asChild className="text-foreground hover:text-primary hover-scale transition-colors duration-200">
        <a href="https://linkedin.com/company/lumenconsultoriaempresarial/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"> {/* LINK ATUALIZADO */}
          <Linkedin className="h-5 w-5" />
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild className="text-foreground hover:text-primary hover-scale transition-colors duration-200">
        <a href="https://www.instagram.com/lumenconsultoriaempresarial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"> {/* LINK ATUALIZADO */}
          <Instagram className="h-5 w-5" />
        </a>
      </Button>
    </>
  );

  return (
    // Header já configurado como sticky e com fundo translúcido/blur
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Link do Logo */}
        <button onClick={() => scrollToSection('#hero')} className="flex items-center gap-2 hover-scale transition-transform duration-300"> {/* Usando button para rolagem */}
          <img src={lumenLogo} alt="Lumen Logo" className="h-8 w-8 rounded-full" />
          <span className="font-bold text-lg hidden sm:inline text-foreground">Lumen Consultoria</span>
        </button>

        {/* Menu Mobile (Sheet) ou Desktop (Nav) */}
        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
               <div className="flex justify-between items-center mb-6">
                 <span className="font-bold text-lg text-foreground">Menu</span>
                 <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-foreground">
                     <X className="h-6 w-6" />
                     <span className="sr-only">Fechar menu</span>
                 </Button>
               </div>
              <nav className="flex flex-col space-y-4 mb-6">
                {renderNavLinks(true)}
              </nav>
              <div className="flex items-center justify-center space-x-2 border-t pt-4">
                 {renderSocialLinks()}
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="flex items-center space-x-1"> {/* Reduzi o espaço se necessário */}
            {renderNavLinks()}
            <div className="ml-2 flex items-center space-x-1"> {/* Div separada para ícones sociais */}
              {renderSocialLinks()}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
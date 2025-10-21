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
  { label: "Contato", href: "#contact" },
  { label: "Redes Sociais", href: "#social" },
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
     }
  };


  const renderNavLinks = (isMobileMenu = false) => (
    navLinks.map((link) => (
      <Button
        key={link.label}
        variant="ghost"
        className="text-foreground hover:bg-accent hover:text-accent-foreground justify-start md:justify-center text-base font-medium"
        onClick={() => scrollToSection(link.href, isMobileMenu)}
        asChild={!isMobileMenu && !link.href.startsWith('#')} // Use Link for actual routes
      >
         {link.href.startsWith('#') ? (
             <span>{link.label}</span>
         ) : (
             <Link to={link.href}>{link.label}</Link>
         )}
      </Button>
    ))
  );

  const renderSocialLinks = () => (
    <>
      <Button variant="ghost" size="icon" asChild className="hover:text-primary hover-scale">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="h-5 w-5" />
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild className="hover:text-primary hover-scale">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Instagram className="h-5 w-5" />
        </a>
      </Button>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 hover-scale" onClick={() => scrollToSection('#hero')}>
          <img src={lumenLogo} alt="Lumen Logo" className="h-8 w-8 rounded-full" />
          <span className="font-bold text-lg hidden sm:inline">Lumen Consultoria</span>
        </Link>

        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
               <div className="flex justify-between items-center mb-6">
                 <span className="font-bold text-lg">Menu</span>
                 <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
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
          <nav className="flex items-center space-x-2">
            {renderNavLinks()}
            {renderSocialLinks()}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
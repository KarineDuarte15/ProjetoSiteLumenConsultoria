import lumenLogo from "@/assets/lumen-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <img 
              src={lumenLogo} 
              alt="Lumen" 
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="font-bold text-lg">Lumen Consultoria Empresarial LTDA</div>
              <div className="text-xs text-primary-foreground/70 mt-1">CNPJ: 59.905.650/0001-29</div>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-primary-foreground/80">
              © 2025 Lumen Consultoria Empresarial. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

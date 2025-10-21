import Navbar from "./Navbar";
import BackToTopButton from "./BackToTopButton";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton"; // Importe o botão do WhatsApp*/

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <BackToTopButton />

      <main className="flex-grow">{children}</main>
      <Footer />
      <WhatsAppButton phoneNumber="5585997111727" /> {/* Adicione o botão flutuante */}
    </div>
  );
};

export default Layout;
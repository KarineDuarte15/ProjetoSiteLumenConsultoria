import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SocialMedia from "@/components/SocialMedia";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";
import AreasOfExpertise from "@/components/AreasOfExpertise";
import BackToTopButton from "@/components/BackToTopButton"; // Importe o novo componente


const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <AreasOfExpertise />
      <Services />
      <SocialMedia />
      <Contact />
      {/* @ts-expect-error */}
      <WhatsAppButton phoneNumber="5585997111727" message="Olá! Gostaria de saber mais sobre a Lumen Consultoria." />
      <BackToTopButton /> {/* Adicione o botão "Voltar ao topo" */}
      <Footer />
      

      
    </main>
  );
};

export default Index;

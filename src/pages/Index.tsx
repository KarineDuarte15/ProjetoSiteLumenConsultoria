import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SocialMedia from "@/components/SocialMedia";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <SocialMedia />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;

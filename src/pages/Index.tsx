import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuienesSomos from "@/components/QuienesSomos";
import MisionSection from "@/components/MisionSection";
import QueHacemos from "@/components/QueHacemos";
import ConfianzaSection from "@/components/ConfianzaSection";
import BibliotecaDigital from "@/components/BibliotecaDigital";
import ContactoSection from "@/components/ContactoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <QuienesSomos />
      <MisionSection />
      <QueHacemos />
      <ConfianzaSection />
      <BibliotecaDigital />
      <ContactoSection />
      <Footer />
    </div>
  );
};

export default Index;

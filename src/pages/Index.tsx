import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ChildrensLibrary from "@/components/ChildrensLibrary";
import Footer from "@/components/Footer";
import watercolorBg from "@/assets/watercolor-background.jpeg";

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${watercolorBg})` }}
    >
      <Header />
      <main>
        <HeroSection />
        <ChildrensLibrary />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

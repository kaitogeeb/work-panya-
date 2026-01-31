import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ChildrensLibrary from "@/components/ChildrensLibrary";
import LiteraryWorks from "@/components/LiteraryWorks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ChildrensLibrary />
        <LiteraryWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

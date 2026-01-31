import watercolorBg from "@/assets/watercolor-background.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${watercolorBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-soft-blue/30 via-transparent to-soft-blue/50" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 pt-20 animate-fade-in">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-sepia leading-relaxed max-w-2xl mx-auto">
          Books that invite reflection
          <br />
          and quiet curiosity
        </h1>
        
        <button className="btn-primary-teal mt-8">
          Explore Our Books
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

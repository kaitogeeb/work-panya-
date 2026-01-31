const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 flex items-center justify-center">
      {/* Content */}
      <div className="text-center px-6 animate-fade-in">
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

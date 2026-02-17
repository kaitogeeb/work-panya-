const HeroSection = () => {
  return (
    <section className="pt-28 md:pt-40 pb-6 md:pb-8 flex justify-center">
      {/* Content */}
      <div className="text-center px-6 animate-fade-in">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-sepia leading-relaxed max-w-2xl mx-auto">
          Books that invite reflection
          <br />
          and quiet curiosity
        </h1>
        <div className="mt-40 sm:mt-48 md:mt-56" aria-hidden="true" />
        <a href="/childrens-library" className="btn-primary-teal mt-3">
          Explore Our Books
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

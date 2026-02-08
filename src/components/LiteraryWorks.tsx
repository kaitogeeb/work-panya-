const LiteraryWorks = () => {
  return (
    <section className="py-16 px-6 md:px-12 border-t border-sepia/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-sepia mb-3">
            Literary & Reflective Works
          </h2>
          <p className="text-sepia-light text-lg font-serif italic">
            Fiction and Nonfiction for thoughtful readers
          </p>
        </div>

        <div className="flex flex-col items-center justify-center py-16 mb-12">
          <p className="text-sepia-light text-lg font-serif italic text-center">
            New titles coming soon...
          </p>
        </div>

        <div className="text-center">
          <button className="btn-primary-teal">
            View Literary Titles &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default LiteraryWorks;

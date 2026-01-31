import BookCard from "./BookCard";
import bookHiddenSeasons from "@/assets/book-hidden-seasons.jpeg";

const LiteraryWorks = () => {
  return (
    <section className="py-16 px-6 md:px-12 border-t border-sepia/20">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-sepia mb-3">
            Literary & Reflective Works
          </h2>
          <p className="text-sepia-light text-lg font-serif italic">
            Fiction and Nonfiction for thoughtful readers
          </p>
        </div>

        {/* Books Grid - 1 book */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 mb-12">
          <BookCard 
            image={bookHiddenSeasons}
            size="large"
            title="The Hidden Seasons of Panya"
            author="Suichi Makion"
            overlayText={true}
          />
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

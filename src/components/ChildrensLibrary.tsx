import BookCard from "./BookCard";
import bookQuietTales from "@/assets/book-quiet-tales.jpeg";
import bookHiddenSeasons from "@/assets/book-hidden-seasons.jpeg";
import bookQuietLawForest from "@/assets/book-quiet-law-forest.jpeg";

const ChildrensLibrary = () => {
  return (
    <section id="books" className="py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-sepia mb-2">
            Our Books
          </h2>
          <p className="text-sepia-light">
            Gentle stories for children and families
          </p>
        </div>

        {/* Books Grid - 3 books */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10">
          <BookCard 
            image={bookQuietTales}
            size="large"
          />
          <BookCard 
            image={bookHiddenSeasons}
            size="large"
          />
          <BookCard 
            image={bookQuietLawForest}
            size="large"
          />
        </div>
      </div>
    </section>
  );
};

export default ChildrensLibrary;

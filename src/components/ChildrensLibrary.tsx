import BookCard from "./BookCard";
import bookQuietTales from "@/assets/book-quiet-tales.jpeg";
import bookSecondTitle from "@/assets/book-second-title.jpg";
import { ChevronRight } from "lucide-react";

const ChildrensLibrary = () => {
  return (
    <section id="children" className="py-16 px-6 md:px-12 bg-soft-blue/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-sepia mb-2">
            Panya Children's Library
          </h2>
          <p className="text-sepia-light">
            Gentle stories for children and families
          </p>
        </div>

        {/* Books Grid */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Main Book - Quiet Tales */}
          <div className="relative">
            <BookCard 
              image={bookQuietTales}
              size="large"
            />
          </div>

          {/* Second Book */}
          <div className="relative">
            <BookCard 
              image={bookSecondTitle}
              isNewRelease={true}
              size="small"
            />
          </div>
        </div>

        {/* Explore Link */}
        <div className="text-center mt-10">
          <a href="#" className="link-teal inline-flex items-center gap-1 border border-teal-dark px-4 py-2 rounded hover:bg-teal-dark hover:text-primary-foreground transition-all">
            Explore Children's Books
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ChildrensLibrary;

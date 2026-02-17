import { Link } from "react-router-dom";
import BookCard from "./BookCard";
import bookQuietTales from "@/assets/book-quiet-tales.jpeg";
import bookQuietCourage from "@/assets/book-quiet-courage.jpeg";
import bookHiddenSeasons from "@/assets/book-hidden-seasons.jpeg";
import bookQuietLawForestNew from "@/components/WhatsApp Image 2026-02-17 at 2.48.22 PM.jpeg";

const ChildrensLibrary = () => {
  return (
    <section id="childrens-library" className="py-16 px-6 md:px-12 border-t border-sepia/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-sepia mb-3">
            Panya Children's Library
          </h2>
          <p className="text-sepia-light text-lg font-serif italic">
            Gentle stories for children and families
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-8 md:gap-10 mb-12">
          <BookCard 
            image={bookQuietTales}
            size="large"
            title="The Quiet Tales of Panya"
            author="Suichi Makion"
            overlayText={true}
            buyUrl="https://a.co/d/06jxg6Em"
          />
          <BookCard 
            image={bookQuietCourage}
            size="large"
            title="The Quiet Courage of Panya"
            author="Suichi Makion"
            overlayText={true}
            buyUrl="https://a.co/d/07hopgU0"
          />
          <BookCard 
            image={bookHiddenSeasons}
            size="large"
            title="The Hidden Seasons of Panya"
            author="Suichi Makion"
            overlayText={true}
            buyUrl="https://a.co/d/0dUARKQP"
          />
          
          <BookCard 
            image={bookQuietLawForestNew}
            size="large"
            title="The Quiet Law of the Forest"
            author="Suichi Makion"
            overlayText={true}
            buyUrl="https://a.co/d/0eBRDlcV"
          />

        </div>
        
        <div className="text-center">
          <Link to="/childrens-library" className="btn-primary-teal inline-block">
            Explore Children's Books &gt;
          </Link>
      </div>
      </div>
    </section>
  );
};

export default ChildrensLibrary;

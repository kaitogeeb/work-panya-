import BookCard from "./BookCard";
import bookQuietTales from "@/assets/book-quiet-tales.jpeg";
import bookQuietCourage from "@/assets/book-quiet-courage.jpeg";

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

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 mb-12">
          <BookCard 
            image={bookQuietTales}
            size="large"
            title="The Quiet Tales of Panya"
            author="Suichi Makion"
            overlayText={true}
          />
          <BookCard 
            image={bookQuietCourage}
            size="large"
            title="The Quiet Courage of Panya"
            author="Suichi Makion"
            isNewRelease={true}
            overlayText={true}
          />
        </div>
        
        <div className="text-center">
             <button className="btn-primary-teal">
                Explore Children's Books &gt;
             </button>
        </div>
      </div>
    </section>
  );
};

export default ChildrensLibrary;

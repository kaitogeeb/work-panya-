import BookCard from "./BookCard";
import bookThingsWeDo from "@/assets/book-things-we-do.jpg";
import bookForthcoming from "@/assets/book-forthcoming.jpg";
import { ChevronRight } from "lucide-react";

const LiteraryWorks = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-warm-cream">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-sepia mb-2">
            Literary & Reflective Works
          </h2>
          <p className="text-sepia-light">
            Fiction and Nonfiction for thoughtful readers
          </p>
        </div>

        {/* Books Grid */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Book 1 - The Things We Do Not Keep */}
          <div className="relative">
            <div className="book-card w-full max-w-[200px]">
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img 
                  src={bookThingsWeDo} 
                  alt="The Things We Do Not Keep" 
                  className="w-full h-auto object-cover aspect-[2/3]"
                />
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <div className="text-left">
                    <h3 className="font-serif text-xl font-bold text-sepia leading-tight">
                      The<br />Things<br />We Do<br />Not Keep
                    </h3>
                  </div>
                  <p className="text-sm text-sepia-light font-medium tracking-wide">
                    STEVEN MCKESOWN
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Book 2 - Forthcoming */}
          <div className="relative">
            <div className="book-card w-full max-w-[200px]">
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img 
                  src={bookForthcoming} 
                  alt="Title of Forthcoming Reads" 
                  className="w-full h-auto object-cover aspect-[2/3]"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center">
                  <h3 className="font-serif text-lg font-medium text-sepia leading-tight mb-4">
                    Title of<br />Forthcoming<br />Reads
                  </h3>
                  <p className="text-xs text-sepia-light font-semibold tracking-widest uppercase">
                    Curran_Meer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View Link */}
        <div className="text-center mt-10">
          <a href="#" className="link-teal inline-flex items-center gap-1 border border-teal-dark px-4 py-2 rounded hover:bg-teal-dark hover:text-primary-foreground transition-all">
            View Literary Titles
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LiteraryWorks;

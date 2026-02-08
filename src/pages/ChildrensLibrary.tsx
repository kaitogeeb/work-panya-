import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import watercolorBg from "@/assets/watercolor-background.jpeg";
import bookQuietTales from "@/assets/book-quiet-tales.jpeg";
import bookQuietCourage from "@/assets/book-quiet-courage.jpeg";
import bookHiddenSeasons from "@/assets/book-hidden-seasons.jpeg";
import bookQuietLawForest from "@/assets/book-quiet-law-forest.jpeg";

const books = [
  {
    image: bookQuietTales,
    title: "The Quiet Tales of Panya",
    description: "Follow Panya on gentle adventures through meadows and forests, discovering the magic in everyday moments.",
    age: "Ages 4–8",
  },
  {
    image: bookQuietCourage,
    title: "The Quiet Courage of Panya",
    description: "Panya finds bravery in the smallest of things — a story about facing fears with a gentle heart.",
    age: "Ages 4–8",
    isNew: true,
  },
  {
    image: bookHiddenSeasons,
    title: "The Hidden Seasons of Panya",
    description: "Through each changing season, Panya uncovers hidden wonders that only a patient eye can see.",
    age: "Ages 5–9",
  },
  {
    image: bookQuietLawForest,
    title: "The Quiet Law of the Forest",
    description: "A reflective journey into the forest where Panya learns the ancient, unspoken rules of nature.",
    age: "Ages 6–10",
  },
];

const ChildrensLibraryPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${watercolorBg})` }}
    >
      <Header />
      <main className="py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-5xl">📚</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-sepia mb-4">
              Panya's Children's Library
            </h1>
            <p className="text-sepia-light text-lg italic max-w-2xl mx-auto">
              Welcome to a world of gentle stories, quiet courage, and the beauty of nature — 
              perfect for young readers and family storytime.
            </p>
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {books.map((book, index) => (
              <div
                key={index}
                className="bg-warm-cream/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-sepia/10"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-2/5 relative">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-64 sm:h-full object-cover"
                    />
                    {book.isNew && (
                      <span className="badge-new-release absolute top-3 right-3">
                        New Release
                      </span>
                    )}
                  </div>
                  <div className="sm:w-3/5 p-6 flex flex-col justify-center">
                    <h2 className="font-serif text-xl md:text-2xl font-medium text-sepia mb-3">
                      {book.title}
                    </h2>
                    <p className="text-sepia-light text-sm leading-relaxed mb-2">
                      {book.description}
                    </p>
                    <p className="text-sepia-light text-xs italic">
                      By Suichi Makion
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-warm-cream/60 backdrop-blur-sm rounded-2xl p-10 border border-sepia/10">
            <span className="text-3xl mb-4 block">🌿</span>
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-sepia mb-3">
              More Stories on the Way
            </h2>
            <p className="text-sepia-light text-base italic mb-6 max-w-lg mx-auto">
              New tales from Panya's world are being written. Stay tuned for more gentle adventures.
            </p>
            <Link to="/" className="btn-primary-teal inline-block">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ChildrensLibraryPage;

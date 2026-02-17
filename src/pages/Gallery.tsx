import Header from "@/components/Header";
import Footer from "@/components/Footer";
import watercolorBg from "@/assets/watercolor-background.jpeg";

// Book Covers
import bookQuietTales from "@/assets/book-quiet-tales.jpeg";
import bookQuietCourage from "@/assets/book-quiet-courage.jpeg";
import bookHiddenSeasons from "@/assets/book-hidden-seasons.jpeg";
import bookQuietLawForestNew from "@/components/WhatsApp Image 2026-02-17 at 2.48.22 PM.jpeg";

const galleryItems = [
  { src: bookQuietTales, title: "The Quiet Tales of Panya", alt: "The Quiet Tales of Panya Book Cover", buyUrl: "https://a.co/d/06jxg6Em" },
  { src: bookQuietLawForestNew, title: "The Quiet Law of the Forest", alt: "The Quiet Law of the Forest Book Cover", buyUrl: "https://a.co/d/0eBRDlcV" },
  { src: bookHiddenSeasons, title: "The Hidden Seasons of Panya", alt: "The Hidden Seasons of Panya Book Cover", buyUrl: "https://a.co/d/0dUARKQP" },
  { src: bookQuietCourage, title: "The Quiet Courage of Panya", alt: "The Quiet Courage of Panya Book Cover", buyUrl: "https://a.co/d/07hopgU0" },
];

const Gallery = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${watercolorBg})` }}
    >
      <Header />
      <main className="py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-sepia mb-4">
              Gallery
            </h1>
            <p className="text-sepia-light text-lg italic">
              Moments of stillness and wonder
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {galleryItems.map((item, index) => {
              const content = (
                <>
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90 flex items-end justify-center pb-6 px-4">
                    <p className="text-white font-serif text-lg text-center font-medium drop-shadow-md">
                      {item.title}
                    </p>
                  </div>
                </>
              );
              return item.buyUrl ? (
                <a
                  key={index}
                  href={item.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-sepia/10 bg-white"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={index}
                  className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-sepia/10 bg-white"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;

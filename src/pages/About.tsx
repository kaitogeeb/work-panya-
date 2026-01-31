import Header from "@/components/Header";
import Footer from "@/components/Footer";
import watercolorBg from "@/assets/watercolor-background.jpeg";
import bookHiddenSeasons from "@/assets/book-hidden-seasons.jpeg";
import bookQuietLawForest from "@/assets/book-quiet-law-forest.jpeg";
import bookQuietTales from "@/assets/book-quiet-tales.jpeg";

const About = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${watercolorBg})` }}
    >
      <Header />
      <main className="py-12 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-sepia mb-8">
            About
          </h1>

          <p className="text-sepia text-lg leading-relaxed mb-8 font-serif italic">
            Deep in the quiet forests of imagination lives <em>Panya</em> — a little red panda with a 
            gentle heart and a curious spirit. His stories began as small whispers about 
            kindness, belonging, and the beauty hidden in ordinary moments.
          </p>

          {/* First circular image */}
          <div className="flex justify-center mb-8">
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
              <img 
                src={bookHiddenSeasons} 
                alt="Panya illustration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <p className="text-sepia text-lg leading-relaxed mb-8 font-serif italic">
            From those whispers grew Panya Books — a collection of stories and creations 
            that invite readers of all ages to slow down, breathe, and rediscover the quiet 
            magic of wonder. Each tale is written and illustrated with care, blending 
            watercolor worlds with simple truths about love, courage, and stillness.
          </p>

          {/* Second circular image */}
          <div className="flex justify-center mb-8">
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
              <img 
                src={bookQuietLawForest} 
                alt="Panya illustration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <p className="text-sepia text-lg leading-relaxed mb-8 font-serif italic">
            What began as one story became a journey — to remind us that gentleness is 
            strength, curiosity is courage, and that kindness, shared freely, can shape the 
            world we live in.
          </p>

          <p className="text-sepia text-lg leading-relaxed mb-8 font-serif italic">
            Every Panya story is a soft invitation: to listen more deeply, dream more kindly, 
            and find the extraordinary in the everyday.
          </p>

          {/* Third circular image */}
          <div className="flex justify-center mb-8">
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
              <img 
                src={bookQuietTales} 
                alt="Panya illustration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;

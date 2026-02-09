import { Link } from "react-router-dom";
import BookCard from "./BookCard";
import bookQuietTales from "@/assets/book-quiet-tales.jpeg";
import bookQuietCourage from "@/assets/book-quiet-courage.jpeg";
import bookHiddenSeasons from "@/assets/book-hidden-seasons.jpeg";
import bookQuietLawForest from "@/assets/book-quiet-law-forest.jpeg";

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
            buyUrl="https://www.amazon.com.au/dp/0645596213?ref_=cm_sw_r_ffobk_cp_ud_dp_M31E4WC3JHSHFY4FGEN5"
          />
          <BookCard 
            image={bookQuietCourage}
            size="large"
            title="The Quiet Courage of Panya"
            author="Suichi Makion"
            isNewRelease={true}
            overlayText={true}
          />
          <BookCard 
            image={bookHiddenSeasons}
            size="large"
            title="The Hidden Seasons of Panya"
            author="Suichi Makion"
            overlayText={true}
            buyUrl="https://www.amazon.com.au/dp/B0G5PCMPFB?ref=cm_sw_r_ffobk_cp_ud_dp_38XD4XWZ0H3RV83DMGKY&ref_=cm_sw_r_ffobk_cp_ud_dp_38XD4XWZ0H3RV83DMGKY&social_share=cm_sw_r_ffobk_cp_ud_dp_38XD4XWZ0H3RV83DMGKY&bestFormat=true"
          />
          <BookCard 
            image={bookQuietLawForest}
            size="large"
            title="The Quiet Law of the Forest"
            author="Suichi Makion"
            overlayText={true}
            buyUrl="https://www.amazon.com.au/dp/B0G49HNKDP?ref=cm_sw_r_ffobk_cp_ud_dp_RM8JM1R19DGYY8W2ENXR&ref_=cm_sw_r_ffobk_cp_ud_dp_RM8JM1R19DGYY8W2ENXR&social_share=cm_sw_r_ffobk_cp_ud_dp_RM8JM1R19DGYY8W2ENXR&bestFormat=true"
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

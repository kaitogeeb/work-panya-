import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-12 pb-8 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Divider */}
        <hr className="border-sepia/20 mb-12" />

        {/* Content Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* About the Press */}
          <div>
            <h3 className="font-serif text-xl text-sepia mb-4">About the Press</h3>
            <p className="text-sepia-light leading-relaxed">
              Independent publishing for beautiful, quiet, and reflective works. 
              We believe in the power of stories to nurture the soul.
            </p>
          </div>

          {/* In the News */}
          <div>
            <h3 className="font-serif text-xl text-sepia mb-4">In the News</h3>
            <p className="text-sepia-light leading-relaxed">
              Recent features, reviews, and updates from our authors and the press community.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-sepia-light/60">
          <p>
            Copyright © 2026 Panya's World | Powered by Panya's World Press
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

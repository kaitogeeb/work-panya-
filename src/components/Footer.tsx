const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 bg-soft-blue/30">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* About the Press */}
          <div>
            <h3 className="font-serif text-xl font-medium text-sepia mb-4">
              About the Press
            </h3>
            <p className="text-sepia-light text-sm leading-relaxed">
              Independent publishing for mindful books—
              <br />
              stories that invite reflection, wonder, and 
              <br />
              quiet moments of discovery.
            </p>
          </div>

          {/* In the News */}
          <div>
            <h3 className="font-serif text-xl font-medium text-sepia mb-4">
              In the News
            </h3>
            <p className="text-sepia-light text-sm leading-relaxed">
              Recent features and announcements
              <br />
              from Panya's World Press.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-sepia-light text-sm">
            © 2026 Panya's World Press. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

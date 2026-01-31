import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

const Header = () => {
  return (
    <header className="w-full py-3 px-6 md:px-12 flex items-center justify-between bg-white shadow-sm sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-3">
        <img 
          src={logo} 
          alt="Panya's World Press Logo" 
          className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-full"
        />
        <span className="font-serif text-lg md:text-xl font-semibold text-sepia">
          Panya's World Press
        </span>
      </Link>
      
      <nav className="hidden md:flex items-center gap-8">
        <a href="/#books" className="nav-link">Books</a>
        <a href="/#childrens-library" className="nav-link">Children's Library</a>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/gallery" className="nav-link">Gallery</Link>
      </nav>

      {/* Mobile menu button */}
      <button className="md:hidden text-sepia">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
};

export default Header;

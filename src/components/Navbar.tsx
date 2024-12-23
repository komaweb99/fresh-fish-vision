import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-ocean text-white p-4 shadow-lg">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-accent mb-4 md:mb-0">
            FreshFish Check
          </Link>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className={`hover:text-accent transition-colors ${
                isActive("/") ? "text-accent" : ""
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/upload"
              className={`hover:text-accent transition-colors ${
                isActive("/upload") ? "text-accent" : ""
              }`}
            >
              Analyser
            </Link>
            <Link
              to="/how-it-works"
              className={`hover:text-accent transition-colors ${
                isActive("/how-it-works") ? "text-accent" : ""
              }`}
            >
              Comment ça marche
            </Link>
            <Link
              to="/about"
              className={`hover:text-accent transition-colors ${
                isActive("/about") ? "text-accent" : ""
              }`}
            >
              À propos
            </Link>
            <Link
              to="/faq"
              className={`hover:text-accent transition-colors ${
                isActive("/faq") ? "text-accent" : ""
              }`}
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Button from "./Button";
import ContactModal from "./ContactModal";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  // Inicializamos hooks
  const location = useLocation();
  const navigate = useNavigate();
  
  const hamburgerLine = `h-1 w-6 my-1 rounded-full bg-linear-to-r from-brand-cyan to-brand-purple transition ease transform duration-300`;
  const links = ["Servicios", "Nosotros", "Proyectos", "FAQ"];

  // --- Scroll lock inteligente ---
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else if (!contactOpen) {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen, contactOpen]); 

  const handleMobileContact = () => {
    setMenuOpen(false);
    setContactOpen(true);
  };

  // Función de Navegación Limpia
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);

    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-brand-black py-3 px-4 pb-3 flex justify-between items-center border-b border-gray-900/50 font-orbitron">
        
        {/* Logo Area */}
        <div className="relative z-50 flex items-center lg:text-4xl md:text-2xl text-3xl tracking-tighter">
          <span className="text-cyan-400 mr-2">&gt;</span>
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, "inicio")}
            className="font-orbitron font-bold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mr-12"
          >
            ByteLand
          </Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center">
          {links.map((item) => (
            <Link
              key={item}
              to={`/#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item.toLowerCase())}
              className="text-gray-100 hover:text-cyan-400 transition-colors duration-300 text-base mr-10"
            >
              {item}
            </Link>
          ))}
          <Button nombre="Contactar" onClick={() => setContactOpen(true)} />
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden flex flex-col h-12 w-12 justify-center items-center group relative z-50"
          aria-label="Abrir menú de navegación"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={`${hamburgerLine} ${menuOpen ? "rotate-45 translate-y-3 opacity-100" : "opacity-100"}`} />
          <div className={`${hamburgerLine} ${menuOpen ? "opacity-0" : "opacity-100"}`} />
          <div className={`${hamburgerLine} ${menuOpen ? "-rotate-45 -translate-y-3 opacity-100" : "opacity-100"}`} />
        </button>

        {/* --- MENÚ MÓVIL --- */}
        <div
          className={`
            fixed inset-0 h-screen w-screen
            bg-black/50 backdrop-blur-xl
            flex flex-col items-center justify-start pt-32 gap-10 md:hidden z-40
            transition-all duration-300 ease-in-out
            ${menuOpen 
              ? "translate-x-0 opacity-100 visible" 
              : "translate-x-full opacity-0 invisible"
            }
          `}
        >
          {links.map((item) => (
            <Link
              key={item}
              to={`/#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item.toLowerCase())}
              className="text-gray-200 text-2xl font-light tracking-widest relative pb-1 hover:text-cyan-400 transition-all duration-300"
            >
              {item}
            </Link>
          ))}

          {/* Optimización: Pasamos onClick directo al componente Button */}
          <Button nombre="Contactar" onClick={handleMobileContact} />
        </div>

      </header>

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
};

export default Header;
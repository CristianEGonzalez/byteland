import { useState } from "react";
import Button from "./Button";
import ContactButton from "./ContactButton";
import ContactModal from "./ContactModal";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const hambugerLine = `h-1 w-6 my-1 rounded-full bg-linear-to-r from-brand-cyan to-brand-purple transition ease transform duration-300`;

  const links = ["Servicios", "Nosotros", "Proyectos", "FAQ"];

  const handleMobileContact = () => {
    setMenuOpen(false);
    setContactOpen(true);
  };

  return (
    <>
      <header className="sticky top-0 z-100 w-full bg-brand-black py-3 px-4 pb-3 flex justify-between items-center border-b border-gray-900/50 font-mono">
        {/* Logo Area */}
        <div className="flex items-center lg:text-4xl md:text-2xl text-3xl tracking-tighter">
          <span className="text-cyan-400 mr-2">&gt;</span>
          <a
            href="#inicio"
            className="font-orbitron font-bold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mr-12"
          >
            ByteLand
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center ">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-100 hover:text-cyan-400 transition-colors duration-300 text-base mr-10"
            >
              {item}
            </a>
          ))}

          {/* Presupuesto Botón */}
          <ContactButton />
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden flex flex-col h-12 w-12 justify-center items-center group"
          aria-label="Abrir menú de navegación"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div
            className={`${hambugerLine} ${
              menuOpen
                ? "rotate-45 translate-y-3 opacity-100 group-hover:opacity-100"
                : "opacity-100 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${hambugerLine} ${
              menuOpen ? "opacity-0" : "opacity-100 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${hambugerLine} ${
              menuOpen
                ? "-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-100"
                : "opacity-100 group-hover:opacity-100"
            }`}
          />
        </button>

        {menuOpen && (
          <div className="absolute top-full right-0 h-screen w-full backdrop-blur-xl bg-black/10 border-l border-gray-700 flex flex-col items-center gap-10 pt-14 md:hidden">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-gray-200 text-xl font-light tracking-widest relative pb-1 hover:text-cyan-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-linear-to-r from-cyan-400 to-purple-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {item}
              </a>
            ))}

            <div onClick={handleMobileContact}>
              <Button nombre="Contactar" />
            </div>
          </div>
        )}
      </header>
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
};

export default Header;

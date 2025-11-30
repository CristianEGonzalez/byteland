import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const hambugerLine = `h-1 w-6 my-1 rounded-full bg-linear-to-r from-brand-cyan to-brand-purple transition ease transform duration-300`;

  const links = ['Servicios', 'Nosotros', 'Proyectos', 'FAQ']

  return (
    <header className="sticky top-0 z-100 w-full bg-brand-black py-3 px-4 pb-3 flex justify-between items-center border-b border-gray-900/50 font-mono">
      {/* Logo Area */}
      <div className="flex items-center text-4xl tracking-tighter">
        <span className="text-cyan-400 mr-2">&gt;</span>
        <a href="#inicio" className="font-orbitron font-bold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mr-12">
          ByteLand
        </a>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center ">
        {links.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-gray-100 hover:text-cyan-400 transition-colors duration-300 text-base mr-12"
          >
            {item}
          </a>
        ))}

        {/* Presupuesto Botón */}
        <a
          href="mailto:contacto@byteland.com?subject=Solicitud de Presupuesto&body=Hola equipo de Byteland, me gustaría cotizar un proyecto..."
          className="bg-linear-to-r from-cyan-400 to-purple-500 text-black font-bold py-2 px-6 rounded-full hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300 transform hover:scale-105">
          Solicitar presupuesto
        </a>
      </nav>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden flex flex-col h-12 w-12 justify-center items-center group"
        aria-label="Abrir menú de navegación"
        onClick={() => setOpen(!open)}
      >
        <div
          className={`${hambugerLine} ${open
            ? "rotate-45 translate-y-3 opacity-100 group-hover:opacity-100"
            : "opacity-100 group-hover:opacity-100"
            }`}
        />
        <div
          className={`${hambugerLine} ${open ? "opacity-0" : "opacity-100 group-hover:opacity-100"
            }`}
        />
        <div
          className={`${hambugerLine} ${open
            ? "-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-100"
            : "opacity-100 group-hover:opacity-100"
            }`}
        />
      </button>

      {open && (
        <div className="absolute top-full right-0 h-screen w-[100%] backdrop-blur-xl bg-black/10 border-l border-gray-700 flex flex-col items-center gap-10 pt-14 md:hidden">

          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-gray-200 text-xl font-light tracking-widest relative pb-1 hover:text-cyan-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-gradient-to-r from-cyan-400 to-purple-500 hover:after:w-full after:transition-all after:duration-300">
              {item}
            </a>
          ))}

          <a
            href="mailto:contacto@byteland.com?subject=Solicitud de Presupuesto&body=Hola equipo de Byteland, me gustaría cotizar un proyecto..."
            className="bg-linear-to-r from-cyan-400 to-purple-500 text-black font-bold py-3 px-2 rounded-full hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300 transform hover:scale-105"
            onClick={() => setOpen(false)}
          >
            Solicitar presupuesto
          </a>

        </div>
      )}



    </header>
  );
};

export default Header
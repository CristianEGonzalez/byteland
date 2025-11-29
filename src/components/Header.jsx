const Header = () => {
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
        {['Servicios', 'Proyectos', 'Nosotros', 'FAQ'].map((item) => (
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
        className="md:hidden text-white cursor-pointer"
        aria-label="Abrir menú de navegación">
        ☰
      </button>
    </header>
  );
};

export default Header
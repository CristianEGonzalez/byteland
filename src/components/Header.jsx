const Header = () => {
return (
    <header className="sticky top-0 z-100 w-full bg-brand-black py-3 px-4 pb-3 flex justify-between items-center border-b border-gray-900/50 font-mono">
      {/* Logo Area */}
      <div className="flex items-center text-4xl tracking-tighter">
        <span className="text-cyan-400 mr-2">&gt;</span>
        <span className="font-orbitron font-bold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mr-12">
          ByteLand
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center ">
        {['Servicios', 'Proyectos', 'Nosotros'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-gray-100 hover:text-cyan-400 transition-colors duration-300 text-base mr-12"
          >
            {item}
          </a>
        ))}
        
        {/* Presupuesto Botón */}
        <button className="bg-linear-to-r from-cyan-400 to-purple-500 text-black font-bold py-2 px-6 rounded-full hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300 transform hover:scale-105">
          Solicitar presupuesto
        </button>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-white cursor-pointer">
        ☰
      </div>
    </header>
  );
};

export default Header
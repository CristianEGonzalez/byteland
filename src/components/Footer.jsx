import cityLogo from "../assets/city.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#020202] pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden">
      
      {/* Línea superior con gradiente */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-brand-purple to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* Marca y Bio */}
        <div className="md:col-span-2 space-y-4">
          <a href="#inicio" className="flex items-center gap-2 group w-fit">
            <img src={cityLogo} alt="Logo Byteland" className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="text-2xl font-orbitron font-bold text-white tracking-wider group-hover:text-brand-cyan transition-colors">
              ByteLand
            </span>
          </a>
          <p className="text-gray-400 font-mono text-sm max-w-sm leading-relaxed">
            Transformamos ideas complejas en experiencias digitales simples, potentes y memorables.
            <br />
            <span className="text-brand-purple text-xs mt-2 block">// Ready to code the future?</span>
          </p>
        </div>

        {/* Explorar */}
        <div className="md:pl-10">
          <h3 className="text-white font-orbitron font-bold mb-6 border-l-2 border-brand-cyan pl-3">
            Explorar
          </h3>
          <nav>
            <ul className="space-y-3 font-mono text-sm text-gray-400 pl-3">
              {['Inicio', 'Servicios', 'Proyectos', 'Nosotros'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="hover:text-brand-green hover:translate-x-2 transition-all duration-300 block w-fit"
                  >
                    &gt; {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Conectar */}
        <div className="md:pl-10">
          <h3 className="text-white font-orbitron font-bold mb-6 border-l-2 border-brand-purple pl-3">
            Conectar
          </h3>
          <ul className="space-y-3 font-mono text-sm text-gray-400 pl-3">
            <li>
              <a href="mailto:contacto@byteland.com" className="hover:text-white transition-colors flex items-center gap-2 w-fit">
                <span className="text-brand-purple">@</span> Email
              </a>
            </li>
            <li>
              <a href="https://t.me/byteland_ok" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2 w-fit">
                <span className="text-brand-cyan">#</span> Telegram
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/byteland_ok/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2 w-fit">
                <span className="text-brand-green">$</span> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-600">
        <p>
          &copy; {currentYear} ByteLand Development. Todos los derechos reservados.
        </p>
        <div className="flex gap-6">
          <a href="/privacidad" className="hover:text-gray-400">Privacidad</a>
          <a href="/terminos" className="hover:text-gray-400">Términos</a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
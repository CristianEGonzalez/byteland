import fondo from "../assets/galaxy.jpg";
import ContactButton from "./ContactButton";
import SlidesCarrousel from "./SlidesCarrousel";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-[85vh] flex items-center justify-center px-6 py-16 lg:px-12 overflow-hidden bg-[#0a0a0c]"
    >
      {/* FONDO */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-25 mix-blend-luminosity scale-110 filter saturate-50"
        style={{ backgroundImage: `url('${fondo}')` }}
      />
      
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0a0a0c]/95 via-[#0a0a0c]/85 to-[#0a0a0c]" />
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />

      {/* Contenedor Principal */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 max-w-6xl w-full z-10 items-center">
        
        {/* COLUMNA IZQUIERDA: Texto Principal */}
        <div className="text-left lg:col-span-7 flex flex-col items-start">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 font-mono text-cyan-400 text-xs mb-6 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
            <span className="tracking-widest uppercase font-medium text-[11px] text-cyan-300">diseño - desarrollo - producción</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-orbitron font-medium text-white tracking-tight leading-[1.2] mb-6">
            Sistemas digitales para <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-cyan to-brand-purple font-bold">
              marcas de alta exigencia.
            </span>
          </h1>

          {/* Párrafo Descriptivo */}
          <p className="text-gray-400 font-sans text-sm sm:text-base mb-8 leading-relaxed max-w-lg font-light tracking-wide">
            Diseñamos y desarrollamos plataformas web de alto rendimiento. Estética sofisticada combinada con ingeniería precisa para escalar tu negocio.
          </p>

          {/* Botones de Acción */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <a
              href="#servicios"
              className="bg-white text-gray-950 font-orbitron font-semibold py-3 px-7 rounded-md text-xs tracking-wider uppercase text-center hover:bg-cyan-400 transition-all duration-300 shadow-sm"
            >
              Explorar Servicios
            </a>
            
            <ContactButton
              nombre="Iniciar Proyecto"
              className="bg-transparent border border-white/15 text-gray-300 font-orbitron font-medium py-3 px-7 rounded-md text-xs tracking-wider uppercase text-center hover:bg-white/[0.05] hover:border-white/30 hover:text-white transition-all duration-300 backdrop-blur-md"
            />
          </div>

          <div className="mt-12 pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-6 w-full max-w-md font-mono text-xs">
          <div>
            <span className="text-white font-semibold block text-sm tracking-tight">25+</span>
            <span className="text-gray-500 font-light">Proyectos Entregados</span>
          </div>
          <div>
            <span className="text-white font-semibold block text-sm tracking-tight">100%</span>
            <span className="text-gray-500 font-light">A Medida</span>
          </div>
          <div>
            <span className="text-white font-semibold block text-sm tracking-tight">24/7</span> 
            <span className="text-gray-500 font-light">En Piloto Auto.</span>
          </div>
        </div>

        </div>

        {/* COLUMNA DERECHA: CAROUSEL HOLOGRÁFICO */}
        <div className="lg:col-span-5 w-full flex justify-center">
          <div className="w-full max-w-sm bg-white/[0.015] border border-white/10 rounded-xl p-4 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] relative group">
            
            {/* Elemento decorativo superior */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
              </div>
              <span className="text-[10px] font-mono text-gray-500 tracking-wider">PREVIEW_ENGINE.jsx</span>
            </div>

            <div className="overflow-hidden rounded-lg">
              <SlidesCarrousel />
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
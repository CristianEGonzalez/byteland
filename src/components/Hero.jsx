import cityLogo from "../assets/city.png";
import fondo from "../assets/galaxy.jpg";
import ContactButton from "./ContactButton";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-[90vh] flex items-center justify-center px-4 py-12 lg:px-8 overflow-hidden"
    >
      {/* FONDO */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('${fondo}')` }}
      />
      <div className="absolute inset-0 z-0 bg-linear-to-b from-black/70 via-black/80 to-[#020202]" />

      {/* Contenedor Principal */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl w-full z-10 items-center">
        
        {/* Tarjeta Principal */}
        <div className="group relative">
          <div className="absolute -inset-1 bg-linear-to-r from-brand-cyan to-brand-purple rounded-[30px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

          <article
            className="relative bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-[25px] 
            p-8 lg:p-12 text-left shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent"></div>

            <small className="inline-block font-mono text-brand-cyan text-xs sm:text-sm mb-6 tracking-wider bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
              &lt; diseño - desarrollo - producción /&gt;
            </small>

            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Construimos la web que tu marca <br className="hidden"/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-cyan to-brand-purple animate-pulse">
                 necesita
              </span>
            </h1>

            <p className="text-gray-300 font-mono text-base sm:text-lg mb-10 leading-relaxed max-w-lg">
              Confiabilidad asegurada para tu empresa. Transformamos código en resultados de negocio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#servicios"
                className="bg-linear-to-r from-brand-cyan to-brand-purple text-black font-bold py-3 px-8 rounded-xl text-center hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all transform hover:scale-105"
              >
                Ver servicios
              </a>
              <ContactButton
                className="bg-white/5 border border-white/20 text-white font-bold py-3 px-8 rounded-xl text-center hover:bg-white/10 hover:border-brand-purple hover:text-brand-purple transition-all backdrop-blur-md"
              />
            </div>
          </article>
        </div>

        {/* Visuales */}
        <div className="flex flex-col gap-12 items-center w-full mt-12 lg:mt-0">
          
          {/* Terminal Flotante */}
          <div
            role="presentation"
            className="w-full max-w-md bg-black/80 backdrop-blur-md border border-gray-700 rounded-xl p-6 shadow-2xl font-mono text-sm text-gray-300 relative z-20 border-l-4 border-l-brand-purple"
          >
            <div className="flex justify-between items-center mb-4 border-b border-gray-800 pb-2">
              <span className="text-xs text-gray-500">bash — 80x24</span>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
            </div>

            <div className="space-y-3 font-mono text-xs sm:text-sm">
              <div className="flex">
                <span className="text-brand-purple mr-2 select-none">$</span>
                <code className="text-white">git clone https://byteland/future</code>
              </div>
              <div className="flex">
                <span className="text-brand-purple mr-2 select-none">$</span>
                <code className="text-white">npm run deploy</code>
              </div>
              <div className="text-brand-green mt-2">
                <span className="select-none">&gt; </span>
                <samp className="font-bold drop-shadow-[0_0_5px_rgba(0,255,157,0.8)]">
                  Success! Project launched 🚀
                </samp>
              </div>
            </div>
          </div>

          {/* Ciudad Holográfica */}
          <div className="relative w-full max-w-lg z-10 group flex justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-cyan/20 blur-[60px] rounded-full"></div>
            
            <img
              src={cityLogo}
              alt="Byteland Holographic City"
              className="relative w-full h-auto object-contain drop-shadow-[0_0_25px_rgba(34,211,238,0.3)] animate-[pulse_4s_ease-in-out_infinite]"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
import cityLogo from "../assets/Byteland-city.png";
import fondo from "../assets/galaxy.jpg";

const Hero = () => {
  const heroCardGradient =
    "bg-gradient-to-br from-[#272731]/20 to-[#787897]/40";

  const buttonGradientClasses = `bg-gradient-to-r from-[#5AEFFF] to-[#8A2BE2]`;

  return (
    <section
      className="relative w-full min-h-[90vh] flex items-center justify-center px-4 py-12 lg:px-8"
      style={{
        backgroundColor: "#0A0A0F",
        backgroundImage: `url('${fondo}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* Contenedor Principal (Grid) */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 max-w-7xl w-full px-4 lg:px-8 z-10">
        {/* === TARJETA IZQUIERDA (Principal) === */}
        <div
          className={`${heroCardGradient} border border-white/30 rounded-[25px] 
          p-8  lg:p-12 relative overflow-hidden group text-left`}
        >
          {/* Etiqueta superior */}
          <div className="font-mono text-[#5AEFFF] text-xs sm:text-sm mb-4 sm:mb-6 tracking-wide">
            &lt; diseño - desarrollo - producción /&gt;
          </div>

          {/* Título Principal */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-mono text-white leading-tight mb-4">
            Construimos la web que tu marca necesita
            <span>/&gt;</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-10 font-light">
            Confiabilidad asegurada para tu empresa
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              className={`${buttonGradientClasses} text-black font-bold py-1 px-8 rounded-lg text-sm sm:text-base hover:shadow-[0_0_20px_rgba(90,239,255,0.8)] transition-all hover:scale-[1.03] w-full sm:w-auto`}
            >
              Ver servicios
            </button>

            <button className="bg-transparent border border-gray-600 text-white font-bold py-2 px-8 rounded-lg text-sm sm:text-base hover:bg-white/10 hover:border-[#5AEFFF] transition-all w-full sm:w-auto">
              Contactar
            </button>
          </div>
        </div>

        {/* === COLUMNA DERECHA === */}
        <div className="flex flex-col gap-8 items-center lg:items-start">
          {/* Tarjeta de Código (Terminal) */}
          <div className="w-full lg:max-w-[500px] bg-linear-to-br from-[#272731]/10 to-[#787897]/30 backdrop-blur-md border border-gray-800 rounded-xl p-4 sm:p-6 shadow-xl font-mono text-xs sm:text-sm text-gray-300 relative">
            {/* Botones de ventana (decorativo) */}
            <div className="flex gap-2 mb-3 sm:mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            <div className="space-y-1">
              <p>
                <span className="text-[#8A2BE2]">$</span> git clone
                https://byteland/template
              </p>
              <p>
                <span className="text-[#8A2BE2]">$</span> npm run dev
              </p>
              <p className="text-green-400 pt-2">
                &gt; Ready on http://localhost:3000 🚀
              </p>
            </div>
          </div>

          {/* === ÁREA DEL LOGO (La Ciudad) === */}
          <div className="relative w-full lg:max-w-[500px]">
            {/* Logo de la ciudad con efectos */}
            <img
              src={cityLogo}
              alt="Byteland City Logo"
              className="h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

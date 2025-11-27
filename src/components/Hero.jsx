import React from 'react';
import cityLogo from '../assets/Byteland-city.png'; 

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center px-4 py-12 lg:px-8">
      
      {/* Contenedor Principal (Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl w-full items-center z-10">

        {/* === TARJETA IZQUIERDA (Principal) === */}
        <div className="bg-linear-to-b to-gray-600 border border-white rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden group">

          {/* Etiqueta superior */}
          <div className="font-mono text-cyan-400 text-sm mb-6 tracking-wide">
            &lt; diseño - desarrollo - producción /&gt;
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl lg:text-6xl font-mono text-white leading-tight mb-4">
            Construimos la web que tu marca necesita
            <span>/&gt;</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-gray-400 text-lg mb-10 font-light">
            Confiabilidad asegurada para tu empresa
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-linear-to-r from-cyan-400 to-purple-500 text-black font-bold py-3 px-8 rounded-full hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all duration-300 transform hover:scale-105">
              Ver servicios
            </button>
            
            <button className="bg-transparent border border-gray-600 text-white font-bold py-3 px-8 rounded-full hover:bg-white/10 hover:border-white transition-all duration-300">
              Contactar
            </button>
          </div>
        </div>

        {/* === COLUMNA DERECHA === */}
        <div className="flex flex-col gap-8 items-center lg:items-start">
          
          {/* Tarjeta de Código (Terminal) */}
          <div className="w-full bg-black/60 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-lg font-mono text-sm text-gray-300 relative">
            {/* Botones de ventana (decorativo) */}
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            
            <div className="space-y-2">
              <p>
                <span className="text-purple-400">$</span> git clone https://byteland/template
              </p>
              <p>
                <span className="text-purple-400">$</span> npm run dev
              </p>
              <p className="text-green-400 mt-2">
                &gt; Ready on http://localhost:3000 🚀
              </p>
            </div>
          </div>

          {/* === ÁREA DEL LOGO (La Ciudad) === */}
          <div className="relative w-full flex justify-center lg:justify-end mt-4">
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
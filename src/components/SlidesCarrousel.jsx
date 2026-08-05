import { useState, useEffect } from 'react';

const SlidesCarrousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      tag: "AUTOMATIZACIÓN // 01",
      title: "Piloto Automático",
      desc: "Sistemas inteligentes que capturan mensajes, responden consultas y optimizan conversiones de forma continua.",
      link: "/promo",
    },
    {
      id: 2,
      tag: "INGENIERÍA // 02",
      title: "Velocidad Extrema",
      desc: "Desarrollo a medida sin plantillas lentas. Rendimiento optimizado al milisegundo para máxima retención.",
      link: "#servicios",
    },
    {
      id: 3,
      tag: "SEGURIDAD // 03",
      title: "Soporte Proactivo",
      desc: "Infraestructura robusta con monitoreo constante, actualizaciones de seguridad y alta disponibilidad.",
      link: "#servicios",
    },
  ];

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[320px] flex flex-col justify-between">
      
      {/* Contenedor de Slides */}
      <div className="relative w-full h-[260px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-all duration-500 ease-out transform
              ${index === currentSlide 
                ? "opacity-100 translate-y-0 scale-100 z-10 pointer-events-auto" 
                : "opacity-0 translate-y-4 scale-95 z-0 pointer-events-none"
              }
            `}
          >
            {/* Tarjeta Minimalista Pro */}
            <div className="h-full flex flex-col justify-between p-6 bg-white/[0.01] border border-white/5 rounded-xl backdrop-blur-xl relative overflow-hidden group">
              
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 blur-[60px] rounded-full pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-40" />

              <div>
                {/* Etiqueta Técnica */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-cyan-400 bg-cyan-950/30 px-2.5 py-1 rounded border border-cyan-500/20">
                    {slide.tag}
                  </span>
                  <span className="font-mono text-xs text-gray-600">0{slide.id} / 03</span>
                </div>

                {/* Título */}
                <h3 className="text-xl font-orbitron font-medium text-white tracking-tight mb-2">
                  {slide.title}
                </h3>

                {/* Descripción */}
                <p className="text-gray-400 font-sans text-xs sm:text-sm font-light leading-relaxed">
                  {slide.desc}
                </p>
              </div>

              {/* Enlace / Acción Interna */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <a 
                  href={slide.link}
                  className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-gray-300 hover:text-cyan-400 transition-colors group/link"
                >
                  <span className="uppercase">Ver especificaciones</span>
                  <span className="group-hover/link:translate-x-1 transition-transform text-cyan-400">→</span>
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* INDICADORES */}
      <div className="flex items-center gap-2 pt-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1 rounded-full transition-all duration-300 
              ${currentSlide === idx 
                ? "w-8 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]" 
                : "w-3 bg-white/10 hover:bg-white/20"
              }`}
            aria-label={`Ir al slide ${idx + 1}`}
          />
        ))}
      </div>

    </div>
  );
};

export default SlidesCarrousel;
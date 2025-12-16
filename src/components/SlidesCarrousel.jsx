import { useState, useEffect } from 'react';

const SlidesCarrousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
    {
      id: 1,
      tag: "OFERTA LANZAMIENTO",
      title: "50% OFF en tu Primera Web",
      desc: "Digitaliza tu negocio hoy. Incluye dominio, hosting por un año y diseño responsive.",
      color: "from-brand-cyan to-blue-600",
      icon: "🚀",
      link: "/promo",
    },
    {
      id: 2,
      tag: "TECNOLOGÍA",
      title: "Velocidad Extrema",
      desc: "No usamos plantillas lentas de Wordpress. Desarrollamos código a medida optimizado.",
      color: "from-brand-purple to-pink-600",
      icon: "⚡",
      link: "#servicios",
    },
    {
      id: 3,
      tag: "SOPORTE PREMIUM",
      title: "Mantenimiento 24/7",
      desc: "Tu web nunca duerme. Monitoreo constante y actualizaciones de seguridad incluidas.",
      color: "from-brand-green to-emerald-600",
      icon: "🛡️",
      link: "#servicios",
    },
    
    /* EJEMPLO DE SLIDE CON LINK EXTERNO
    {
      id: 4,
      tag: "OFERTA LANZAMIENTO",
      title: "50% OFF en tu Primera Web",
      desc: "Digitaliza tu negocio hoy. Incluye dominio, hosting por un año y diseño responsive.",
      color: "from-amber-300 to-yellow-300",
      icon: "🚀",
      link: "https://www.instagram.com/p/DR4lReUji0X/",
      target: "_blank",
      rel: "noopener noreferrer",
    },*/
  ];

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center lg:justify-end perspective-1000">
      
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 right-0 w-full max-w-md h-full transition-all duration-700 ease-in-out transform
            ${index === currentSlide 
              ? "opacity-100 translate-x-0 scale-100 z-20" 
              : "opacity-0 translate-x-10 scale-95 z-0 pointer-events-none"
            }
          `}
        >
          {/* Tarjeta del Slide */}
          <div className="relative h-full bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-center overflow-hidden shadow-2xl group">
            
            {/* Fondo gradiente sutil dinámico */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-linear-to-br ${slide.color} blur-[80px] opacity-20 rounded-full group-hover:opacity-30 transition-opacity`}></div>

            {/* Icono Flotante */}
            <div className="text-6xl mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-bounce-slow">
              {slide.icon}
            </div>

            {/* Etiqueta */}
            <span className={`inline-block w-fit mb-4 px-3 py-1 rounded text-xs font-bold font-mono bg-linear-to-r ${slide.color} text-white`}>
              {slide.tag}
            </span>

            {/* Título */}
            <h3 className="text-3xl font-orbitron font-bold text-white mb-4 leading-tight">
              {slide.title}
            </h3>

            {/* Descripción */}
            <p className="text-gray-300 font-mono text-sm leading-relaxed">
              {slide.desc}
            </p>

            {/* Call to Action pequeño */}
            <a 
              href={slide.link}
              target={slide.target || "_self"}
              rel={slide.rel || undefined}
              className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-brand-cyan text-sm font-bold cursor-pointer group-hover:text-white transition-colors w-fit"
            >
              <span>MÁS INFORMACIÓN</span>
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </a>

          </div>
        </div>
      ))}

      {/* INDICADORES (Puntos de control) */}
      <div className="absolute -bottom-8 lg:bottom-0 left-0 lg:left-auto lg:right-0 flex gap-3 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1 rounded-full transition-all duration-300 
              ${currentSlide === idx 
                ? `w-12 bg-linear-to-r ${slides[idx].color}` 
                : "w-4 bg-gray-700 hover:bg-gray-500"
              }`}
            aria-label={`Ir al slide ${idx + 1}`}
          />
        ))}
      </div>

    </div>
  );
};

export default SlidesCarrousel;
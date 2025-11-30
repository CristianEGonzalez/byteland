import { useState } from "react";
import fondoFAQ from "../assets/fondoFAQ.jpg";

function FAQ() {
  const preguntas = [
    {
      id: "01", // Cambié a string para estilo visual "01"
      pregunta: "¿Cómo puedo encargar un sitio web?",
      respuesta: "Podes contactarnos a través de nuestro formulario en línea, correo electrónico o redes sociales para discutir tus necesidades y comenzar el proceso de transformación digital.",
    },
    {
      id: "02",
      pregunta: "¿Qué información necesitan para comenzar?",
      respuesta: "Necesitaremos detalles sobre tu negocio, objetivos del sitio, contenido base (textos e imágenes) y referencias visuales de estilos que te gusten.",
    },
    {
      id: "03",
      pregunta: "¿Cuáles son las tarifas?",
      respuesta: "Nuestras tarifas varían según la complejidad del desarrollo. Contáctanos para recibir una cotización personalizada sin cargo.",
    },
    {
      id: "04",
      pregunta: "¿Ofrecen soporte post-lanzamiento?",
      respuesta: "Sí, ofrecemos planes de mantenimiento mensual que incluyen monitoreo, actualizaciones de seguridad y pequeños ajustes para que tu web siempre vuele.",
    },
  ];

  return (
    <section
      id="faq"
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* FONDO: Imagen con superposición oscura */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${fondoFAQ})` }}
      ></div>
      {/* Gradiente para fundir la imagen con el negro de la web */}
      <div className="absolute inset-0 z-0 bg-brand-black/70"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* HEADER DE SECCIÓN */}
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Preguntas <span className="text-brand-purple">Frecuentes</span>
          </h2>
          <div className="h-1 w-24 bg-brand-purple mx-auto rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
        </header>

        {/* LISTA DE DEFINICIONES */}
        <dl className="space-y-6">
          {preguntas.map((pregunta) => (
            <FAQCard key={pregunta.id} data={pregunta} />
          ))}
        </dl>
      </div>
    </section>
  );
}

const FAQCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group">
      <div 
        className={`relative bg-gray-900/40 backdrop-blur-md border rounded-2xl overflow-hidden transition-all duration-300 
        ${isOpen ? 'border-brand-purple shadow-[0_0_20px_rgba(168,85,247,0.15)]' : 'border-white/10 hover:border-brand-purple/50'}`}
      >
        
        {/* PREGUNTA (DT) */}
        <dt>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center gap-6 p-6 text-left focus:outline-none"
            aria-expanded={isOpen}
            aria-controls={`answer-${data.id}`}
          >
            {/* NÚMERO (Decorativo) */}
            <div className="shrink-0 hidden sm:flex">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300
                ${isOpen ? 'bg-brand-purple/20 border-brand-purple text-brand-purple' : 'bg-black/50 border-white/20 text-gray-500 group-hover:border-brand-purple/50'}`}>
                <span className="font-mono font-bold">{data.id}</span>
              </div>
            </div>

            {/* TEXTO PREGUNTA */}
            <span className={`grow text-lg font-orbitron font-medium transition-colors ${isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
              {data.pregunta}
            </span>

            {/* ICONO CHEVRON */}
            <div className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-purple' : 'text-gray-500'}`}>
              {/* SVG Chevron simple */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </dt>

        {/* RESPUESTA (DD) */}
        <dd 
          id={`answer-${data.id}`}
          className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="p-6 pt-0 pl-6 sm:pl-22">
            <p className="font-mono text-gray-400 text-sm leading-relaxed border-l-2 border-brand-cyan/30 pl-4">
              {data.respuesta}
            </p>
          </div>
        </dd>

      </div>
    </div>
  );
};

export default FAQ;
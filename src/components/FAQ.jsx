import { useState } from "react";
import fondoFAQ from "../assets/fondoFAQ3.jpg";

function Question() {
  const preguntas = [
    {
      id: 1,
      pregunta: "¿Cómo puedo encargar un sitio web con ByteLand?",
      respuesta:
        "Podes contactarnos a través de nuestro formulario en línea, correo electrónico o teléfono para discutir tus necesidades y comenzar el proceso.",
    },
    {
      id: 2,
      pregunta: "¿Qué información necesitan para comenzar con mi sitio web?",
      respuesta:
        "Necesitaremos detalles sobre tu negocio, objetivos del sitio web, contenido (textos e imágenes) y cualquier preferencia de diseño que tengas.",
    },
    {
      id: 3,
      pregunta: "¿Cuáles son las tarifas que ofrecen para cada servicio?",
      respuesta:
        "Nuestras tarifas varían según el tipo y la complejidad del sitio web. Contáctanos para una cotización personalizada.",
    },
    {
      id: 4,
      pregunta: "¿Ofrecen soporte después del lanzamiento del sitio web?",
      respuesta:
        "Sí, ofrecemos servicios de mantenimiento y soporte para asegurar que tu sitio web funcione correctamente después del lanzamiento.",
    },
  ];

  return (
    <section
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-start px-4 lg:px-8 pt-24 py-20"
      style={{
        backgroundColor: "#0A0A0F",
        backgroundImage: `url('${fondoFAQ}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <h2 className="text-4xl font-mono font-bold text-center z-10">
        Preguntas Frecuentes
      </h2>

      <div className="w-40 h-1 bg-brand-purple rounded-full mt-3 mb-10 z-10"></div>

      <div className="w-full max-w-4xl space-y-10">
        {preguntas.map((pregunta) => (
          <QuestionCard key={pregunta.id} pregunta={pregunta} />
        ))}
      </div>
    </section>
  );
}

const QuestionCard = ({ pregunta }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex items-center gap-10">
      <div className="shrink-0">
        <div className="p-[2.5px] rounded-full bg-linear-to-br from-brand-cyan via-brand-purple to-brand-green">
          <div className="w-12 h-12 rounded-full bg-brand-black flex items-center justify-center">
            <p className="text-white text-lg font-bold font-mono">
              {pregunta.id}
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="bg-white/5 border border-white/30 rounded-2xl p-5 backdrop-blur-sm hover:bg-white/10 transition">
          <button
            onClick={() => setOpen(!open)}
            className="w-full flex justify-between items-center"
          >
            <h3 className="text-xl font-regular">{pregunta.pregunta}</h3>

            <div
              className={`transform transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            >
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
            </div>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              open ? "max-h-40 mt-3" : "max-h-0"
            }`}
          >
            <p className="text-text-subtitle text-left">{pregunta.respuesta}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;

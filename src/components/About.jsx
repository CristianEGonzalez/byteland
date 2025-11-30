import ContactButton from "./ContactButton";
import cityLogo from "../assets/city.png";

function About() {
  return (
    <section 
      id="nosotros" 
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-brand-black via-[#0a0a0a] to-[#1a1a2e] overflow-hidden"
    >
      {/* Decoración de fondo de la ciudad: Un haz de luz sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-purple/10 blur-[120px] rounded-full pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* City Logo*/}
          <div className="flex flex-col items-center group">
             {/* Imagen con efecto de flotación y brillo */}
            <div className="relative">
              {/* Brillo trasero */}
              <div className="absolute inset-0 bg-brand-cyan/20 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              <img
                src={cityLogo}
                alt="Ilustración de la ciudad digital de Byteland"
                className="relative h-auto w-full max-w-md object-contain drop-shadow-[0_0_15px_rgba(34,211,238,0.3)] transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Texto Sobre Nosotros */}
          <article className="flex flex-col justify-start">
            
            <header className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Sobre <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-cyan to-brand-purple">Nosotros</span>
              </h2>
              {/* Línea decorativa estilo tech */}
              <div className="h-1 w-32 bg-linear-to-r from-brand-cyan to-transparent rounded-full"></div>
            </header>

            {/* Texto con mejor legibilidad y fuente mono */}
            <div className="space-y-6 font-mono text-gray-300 text-lg leading-relaxed">
              <p>
                En <strong className="text-white">ByteLand</strong> somos un equipo de desarrolladores y diseñadores
                profesionales con una visión clara: <span className="text-brand-cyan">transformar ideas en experiencias digitales impactantes.</span>
              </p>
              
              <p>
                Nos dedicamos a crear soluciones web que no solo cumplan, sino que 
                <span className="italic text-brand-purple"> superen las expectativas</span> de nuestros clientes, 
                impulsando su presencia online con una identidad única.
              </p>
            </div>

            {/* Botón de acción */}
            <div className="mt-10 flex w-full justify-center">
              <ContactButton/>
            </div>

          </article>

        </div>
      </div>
    </section>
  );
}

export default About;
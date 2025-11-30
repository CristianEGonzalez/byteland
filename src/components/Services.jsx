function Services() {
  const servicios = [
    {
      id: 1,
      nombre: "LANDING PAGE",
      descripcion:
        "Web de alto impacto en una sola sección. Optimizada para convertir visitas en clientes.",
      icono: ">>",
    },
    {
      id: 2,
      nombre: "PÁGINA EMPRESARIAL",
      descripcion:
        "Sitio corporativo con múltiples secciones. Profesionaliza tu marca y muestra tus servicios.",
      icono: "{ }",
    },
    {
      id: 3,
      nombre: "APLICACIONES WEB",
      descripcion:
        "Soluciones web personalizadas. Desarrollo de plataformas interactivas, gestión de usuarios, y paneles de control.",
      icono: "</>",
    },
    {
      id: 4,
      nombre: "MENÚ DIGITAL",
      descripcion:
        "Menú interactivo para restaurantes. Mejora la experiencia del cliente con un menú accesible desde cualquier dispositivo.",
      icono: "$$",
    },
    {
      id: 5,
      nombre: "MANTENIMIENTO",
      descripcion:
        "Monitoreo continuo y corrección de errores. Tu plataforma siempre activa y optimizada.",
      icono: "##",
    },
    {
      id: 6,
      nombre: "DISEÑOS WEB",
      descripcion:
        "Diseño de interfaces (UI) modernas e intuitivas. Prototipado enfocado en la experiencia de usuario (UX).",
      icono: "<*>",
    },
  ];

  return (
    <section id="servicios" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        
        <header className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
              Servicios
            </span>
            {/* animate-pulse que viene en Tailwind por defecto para el parpadeo */}
            <span className="text-brand-green ml-2 animate-pulse" aria-hidden="true">_</span>
          </h2>
          
          {/* Agregué este subtítulo estilo "comentario de código" */}
          <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
            // Soluciones tecnológicas escalables
          </p>
        </header>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0 m-0">
          {servicios.map((servicio) => (
            <ServicesCard key={servicio.id} servicio={servicio} />
          ))}
        </ul>

      </div>
    </section>
  );
}

const ServicesCard = ({ servicio }) => {
  return (
    <li className="h-full">
      
      <article className="group relative h-full bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 
                      transition-all duration-300 hover:border-brand-green/50 hover:bg-gray-900/60 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,255,157,0.1)]">
        
        {/* Icono: aria-hidden para que no lo lean los lectores de pantalla */}
        <div 
          className="font-mono text-5xl mb-6 text-brand-green drop-shadow-[0_0_8px_rgba(0,255,157,0.4)] transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-2"
          aria-hidden="true" 
        >
          {servicio.icono}
        </div>

        <h3 className="text-xl text-white font-bold mb-4 tracking-wide group-hover:text-brand-green transition-colors">
          {servicio.nombre}
        </h3>

        <p className="font-mono text-gray-400 text-sm leading-relaxed">
          {servicio.descripcion}
        </p>

        {/* Decoración de esquina, estilo tech */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-brand-green/20 rounded-full group-hover:bg-brand-green group-hover:shadow-[0_0_10px_#00ff9d] transition-all" aria-hidden="true"></div>
      </article>
      
    </li>
  );
};

export default Services;

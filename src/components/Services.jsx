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
    <div className="py-25 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-mono text-white mb-10 text-center">
          Servicios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicios.map((servicio) => (
            <ServicesCard key={servicio.id} servicio={servicio} />
          ))}
        </div>
      </div>
    </div>
  );
}

const ServicesCard = ({ servicio }) => {
  return (
    <div className="bg-gradient-to-br from-[#272731]/5 to-[#787897]/10 border border-white/30 rounded-[15px] p-8 shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-4xl mb-3 text-[#39ff9b]">{servicio.icono}</div>
      <h3 className="text-xl text-[#39ff9b] font-semibold mb-2">
        {servicio.nombre}
      </h3>
      <p className="text-gray-400 text-sm">{servicio.descripcion}</p>
    </div>
  );
};

export default Services;

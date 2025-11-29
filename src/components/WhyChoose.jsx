function WhyChoose() {
  const reasons = [
    {
      id: "01",
      title: "/foco_en_conversión",
      description: "No solo diseñamos bonito. Creamos estrategias visuales diseñadas específicamente para convertir visitantes en clientes leales."
    },
    {
      id: "02",
      title: "/entrega_a_tiempo",
      description: "Respetamos tu tiempo. Cumplimos los plazos establecidos con un cronograma transparente y comunicación constante."
    },
    {
      id: "03",
      title: "/soporte_dedicado",
      description: "No te dejamos solo. Ofrecemos seguimiento post-lanzamiento para asegurar que tu sitio funcione siempre perfecto."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Título de la sección */}
        <header className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-4">
            ¿Por qué elegir <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-cyan to-brand-purple">ByteLand?</span>
          </h2>
          <div className="h-1 w-24 bg-brand-cyan mx-auto rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
        </header>

        {/* Contenedor de la Línea de Tiempo */}
        <div className="relative">
          
          {/* LÍNEA CONECTORA (Solo visible en Desktop/Tablet) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-linear-to-r from-brand-cyan via-brand-purple to-brand-cyan opacity-50 shadow-[0_0_15px_rgba(168,85,247,0.5)] rounded-full"></div>

          {/* Grid de Items */}
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {reasons.map((item) => (
              <li key={item.id} className="group flex flex-row md:flex-col items-center md:items-start gap-6 relative">
                
                {/* CÍRCULO CON NÚMERO */}
                <div className="relative shrink-0 md:mx-auto">
                  
                  {/* Efecto Glow detrás del círculo */}
                  <div className="absolute inset-0 bg-brand-purple blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-500 rounded-full"></div>
                  
                  {/* Círculo contenedor */}
                  <div className="w-24 h-24 bg-brand-black border-2 border-gray-700 group-hover:border-brand-cyan rounded-full flex items-center justify-center relative z-10 transition-colors duration-300 shadow-lg">
                    {/* Anillo interior decorativo */}
                    <div className="w-20 h-20 border border-gray-800 rounded-full flex items-center justify-center group-hover:border-brand-purple/50 transition-colors">
                      <span className="font-mono text-3xl font-bold text-white group-hover:text-brand-cyan transition-colors drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
                        {item.id}
                      </span>
                    </div>
                  </div>
                </div>

                {/* TEXTOS */}
                <div className="flex flex-col md:text-center w-full">
                  <h3 className="font-mono text-lg font-bold text-brand-purple mb-3 group-hover:text-brand-cyan transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-gray-400 text-sm leading-relaxed px-2">
                    {item.description}
                  </p>
                </div>

              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

export default WhyChoose;
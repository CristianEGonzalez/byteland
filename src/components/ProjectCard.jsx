const ProjectCard = ({ pro }) => {
  return (
    <article className="group relative flex flex-col w-full h-full max-w-sm bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-brand-purple/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
      
      {/* Área de Imagen con Efecto Zoom */}
      <div className="h-48 w-full overflow-hidden relative border-b border-white/5">
        <img
          src={pro.imagen}
          alt={`Captura de pantalla de ${pro.titulo}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay al hover */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
        
        {/* Tags flotantes (Detalle tech) */}
        <div className="absolute bottom-3 left-3 flex gap-2">
           {pro.tags?.map(tag => (
             <span key={tag} className="text-[10px] font-mono bg-black/70 text-brand-cyan px-2 py-1 rounded border border-brand-cyan/30 backdrop-blur-sm">
               {tag}
             </span>
           ))}
        </div>
      </div>

      {/* Contenido de la Tarjeta */}
      <div className="p-6 flex flex-col grow">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
          {pro.titulo}
        </h3>

        <p className="text-gray-400 text-sm font-mono mb-6 leading-relaxed grow">
          {pro.descripcion}
        </p>

        {/* Botón Integrado (Ver Demo) */}
        <a
          href={pro.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center py-2.5 rounded-lg font-orbitron text-sm font-bold 
                     bg-white/5 border border-white/10 text-white 
                     hover:bg-brand-purple hover:border-brand-purple hover:text-black hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]
                     transition-all duration-300 flex items-center justify-center gap-2 group/btn"
        >
          <span>VER DEMO</span>
          <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
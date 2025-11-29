import poolclean from "../assets/poolclean.jpg";
import oldspringfield from "../assets/oldspringfield.jpg";
import medintegral from "../assets/medintegral.jpg";

function Projects() {
  const proyectos = [
    {
      id: 1,
      titulo: "Landing page - PoolClean",
      descripcion: "Sitio web para mantenimiento de piscinas.",
      imagen: poolclean,
      link: "https://poolclean.com.ar/",
    },
    {
      id: 2,
      titulo: "Menú digital - OldSpringfield",
      descripcion: "Sitio web para menú digital de una hamburguesería.",
      imagen: oldspringfield,
      link: "https://menu-digital-template.netlify.app/",
    },
    {
      id: 3,
      titulo: "Aplicación web - MedIntegral",
      descripcion: "Sitio web administrativo para manejar una obra social.",
      imagen: medintegral,
      link: "https://medintegral.vmdigitai.com/",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center mt-16 px-4">
      <div className="w-[95%] max-w-5xl border border-white/30 rounded-2xl py-4 px-6 mb-4">
        <h2 className="text-4xl font-mono font-bold text-center">
          <span className="bg-linear-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
            Proyectos
          </span>
        </h2>
      </div>

      <p className="text-text-subtitle text-center font-sans mb-10">
        Sitios web realizados por ByteLand
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center w-full max-w-7xl">
        {proyectos.map((pro) => (
          <ProjectCard key={pro.id} pro={pro} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ pro }) {
  return (
    <div className="flex flex-col items-center w-full pb-20">
      <div
        className="bg-brand-black rounded-3xl shadow-lg overflow-hidden border border-white/10 
                      w-full h-full flex flex-col"
      >
        <div className="h-48 w-full overflow-hidden relative">
          <img
            src={pro.imagen}
            alt={pro.titulo}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50"></div>
        
        </div>

        <div className="p-4 flex flex-col grow">
          <p className="font-mono text-base font-semibold text-left mb-2">
            {pro.titulo}
          </p>

          <p className="text-text-subtitle text-sm font-sans text-left grow">
            {pro.descripcion}
          </p>
        </div>
      </div>

      <a
        href={pro.link}
        target="_blank"
        className="mt-4 px-6 py-2 border border-white/30 rounded-xl font-mono text-sm hover:bg-white/10 transition"
      >
        DEMO
      </a>
    </div>
  );
}

export default Projects;

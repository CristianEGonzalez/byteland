import { useEffect } from 'react';

function Terms() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black text-white font-mono selection:bg-brand-cyan selection:text-black flex flex-col">
      
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40 bg-[url('/assets/stars.png')] bg-repeat"></div>

      <main className="relative z-10 grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          <header className="mb-12 border-b border-white/10 pb-8">
            <h1 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-4">
              Términos y <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-cyan to-brand-purple">Condiciones</span>
            </h1>
            <p className="text-gray-400 text-sm">
              Última actualización: {new Date().toLocaleDateString()}
            </p>
          </header>

          <article className="space-y-8 text-gray-300 leading-relaxed bg-gray-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 shadow-xl">
            
            <section>
              <h2 className="text-xl font-orbitron text-brand-purple mb-4">1. Aceptación de los términos</h2>
              <p>
                Al acceder y utilizar el sitio web de <strong>ByteLand</strong>, aceptas cumplir con estos términos y condiciones. 
                Si no estás de acuerdo con alguna parte de estos términos, te recomendamos no utilizar nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-orbitron text-brand-purple mb-4">2. Servicios</h2>
              <p>
                ByteLand ofrece servicios de desarrollo de aplicaciones y sitios web, diseño UI/UX y consultoría digital. 
                Nos reservamos el derecho de modificar o discontinuar cualquier servicio sin previo aviso, 
                aunque siempre intentaremos notificar a nuestros clientes activos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-orbitron text-brand-purple mb-4">3. Propiedad Intelectual</h2>
              <p>
                Todo el contenido, marcas, logos (incluido el logo de ByteLand) y código fuente de este sitio 
                son propiedad exclusiva de ByteLand o de sus respectivos dueños, y están protegidos por leyes de propiedad intelectual.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-orbitron text-brand-purple mb-4">4. Limitación de Responsabilidad</h2>
              <p>
                ByteLand no se hace responsable de daños directos, indirectos o incidentales que puedan surgir 
                del uso o la imposibilidad de uso de nuestro sitio web o servicios.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-orbitron text-brand-purple mb-4">5. Modificaciones</h2>
              <p>
                Podemos actualizar estos términos ocasionalmente. Te recomendamos revisar esta página periódicamente 
                para estar al tanto de cualquier cambio.
              </p>
            </section>

          </article>

        </div>
      </main>
    </div>
  );
}

export default Terms;
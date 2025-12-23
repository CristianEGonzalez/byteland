import { useEffect } from 'react';

function Privacy() {
  // Scroll al inicio al cargar la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black text-white font-mono selection:bg-brand-cyan selection:text-black flex flex-col">
      
      {/* Fondo Global (Opcional, si no lo tienes en el body) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40 bg-[url('/assets/stars.png')] bg-repeat"></div>

      <main className="relative z-10 grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Título con estilo Cyberpunk */}
          <header className="mb-12 border-b border-white/10 pb-8">
            <h1 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-4">
              Política de <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-cyan to-brand-purple">Privacidad</span>
            </h1>
            <p className="text-gray-400 text-sm">
              Última actualización: {new Date().toLocaleDateString()}
            </p>
          </header>

          {/* Contenido Legal */}
          <article className="space-y-8 text-gray-300 leading-relaxed bg-gray-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 shadow-xl">
            
            <section>
              <h2 className="text-xl font-orbitron text-brand-cyan mb-4">1. Introducción</h2>
              <p>
                En <strong>ByteLand</strong>, nos tomamos muy en serio la privacidad de tus datos. 
                Esta política describe cómo recopilamos, usamos y protegemos tu información personal 
                cuando visitas nuestro sitio web o utilizas nuestros servicios digitales.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-orbitron text-brand-cyan mb-4">2. Información que recopilamos</h2>
              <p className="mb-2">Podemos recopilar los siguientes tipos de información:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-brand-purple">
                <li>Información de contacto (nombre, email, teléfono) proporcionada voluntariamente en formularios.</li>
                <li>Datos técnicos de navegación (dirección IP, tipo de navegador, ubicación aproximada) para mejorar la seguridad y experiencia.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-orbitron text-brand-cyan mb-4">3. Uso de la información</h2>
              <p>
                Utilizamos tus datos exclusivamente para:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2 marker:text-brand-purple">
                <li>Responder a tus consultas y solicitudes de presupuesto.</li>
                <li>Mejorar la funcionalidad y seguridad de nuestro sitio web.</li>
                <li>Enviar comunicaciones relacionadas con el servicio (solo si has dado tu consentimiento).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-orbitron text-brand-cyan mb-4">4. Seguridad</h2>
              <p>
                Implementamos medidas de seguridad técnicas y organizativas (como cifrado SSL y firewalls) 
                para proteger tus datos contra accesos no autorizados, pérdida o alteración.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-orbitron text-brand-cyan mb-4">5. Contacto</h2>
              <p>
                Si tienes dudas sobre nuestra política de privacidad, contáctanos en: 
                <a href="mailto:legal@byteland.com" className="text-brand-purple hover:text-brand-cyan ml-2 transition-colors">
                  contacto@byteland.com
                </a>
              </p>
            </section>

          </article>

        </div>
      </main>
    </div>
  );
}

export default Privacy;
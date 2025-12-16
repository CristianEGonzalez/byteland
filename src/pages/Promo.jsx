import { useEffect } from 'react';
import ContactButton from '../components/ContactButton';

const Promo = () => {
  // Scroll al inicio al cargar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex justify-center py-20 px-4 sm:px-6 lg:px-8">
      
      {/* Contenedor Principal (Glass Card Gigante) */}
      <div className="relative w-full max-w-5xl bg-brand-black/60 backdrop-blur-xl border border-brand-purple/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(138,43,226,0.15)]">
        
        {/* Decoración: Barra Superior de Luz */}
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-brand-cyan via-brand-purple to-brand-green"></div>
        
        {/* Decoración: Círculos de luz ambiental */}
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-brand-purple/20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-brand-cyan/20 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* === COLUMNA IZQUIERDA: La Oferta === */}
          <div className="space-y-8">
            
            {/* Badge Urgencia */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple text-brand-purple font-mono text-xs font-bold animate-pulse">
              <span>⚠️</span>
              <span>CUPOS LIMITADOS: 5 DISPONIBLES</span>
            </div>

            {/* Título */}
            <div>
              <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-2 leading-tight">
                PACK <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-cyan to-brand-green">
                  IMPULSO DICIEMBRE
                </span>
                <p 
                className="animate-pulse">⚡</p> 
              </h1>
            </div>

            {/* Precio */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md">
              <p className="font-mono text-center text-gray-400 text-sm mb-1">Precio Único Final:</p>
              <div className="flex flex-col items-center justify-center">
                <span className="text-xl text-gray-500 font-mono line-through decoration-brand-purple">$300.000</span>
                <span className="text-5xl md:text-6xl font-mono font-bold text-white">$150.000</span>
                <p className="text-brand-green font-mono text-xs mt-3 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Listo para vender antes del 31/12
                </p>
              </div>
            </div>

            {/* Botón Contacto */}
            <div className="pt-2">
              <ContactButton
              nombre="RESERVAR MI LUGAR"
              className="group block w-full bg-linear-to-r from-brand-cyan to-brand-purple text-black font-orbitron font-bold text-xl py-4 px-8 rounded-xl text-center shadow-[0_0_20px_rgba(90,239,255,0.4)] hover:shadow-[0_0_35px_rgba(90,239,255,0.6)] hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
            />
            </div>

          </div>

          {/* === COLUMNA DERECHA: Detalles === */}
          <div className="space-y-6">
            
            <div className="font-mono text-sm text-brand-cyan mb-4">
              &gt; info_del_pack.json
            </div>

            {/* Tarjeta de Beneficio 1 */}
            <div className="group p-5 rounded-2xl bg-black/40 border border-white/10 hover:border-brand-cyan/50 transition-colors">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-brand-cyan/10 flex items-center justify-center text-2xl border border-brand-cyan/20 group-hover:scale-110 transition-transform">
                  💻
                </div>
                <div>
                  <h3 className="font-orbitron font-bold text-white mb-1 group-hover:text-brand-cyan transition-colors">Diseño de Impacto</h3>
                  <p className="text-sm text-gray-400 font-mono leading-relaxed">
                    Una web que hace que tu marca se vea gigante y confiable. Nada de plantillas aburridas.
                  </p>
                </div>
              </div>
            </div>

            {/* Tarjeta de Beneficio 2 */}
            <div className="group p-5 rounded-2xl bg-black/40 border border-white/10 hover:border-brand-green/50 transition-colors">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-2xl border border-brand-green/20 group-hover:scale-110 transition-transform">
                  📲
                </div>
                <div>
                  <h3 className="font-orbitron font-bold text-white mb-1 group-hover:text-brand-green transition-colors">Botón de WhatsApp</h3>
                  <p className="text-sm text-gray-400 font-mono leading-relaxed">
                    Integración directa para que las consultas te lleguen al celular sin intermediarios.
                  </p>
                </div>
              </div>
            </div>

            {/* Tarjeta de Beneficio 3 */}
            <div className="group p-5 rounded-2xl bg-black/40 border border-white/10 hover:border-brand-purple/50 transition-colors">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center text-2xl border border-brand-purple/20 group-hover:scale-110 transition-transform">
                  🚀
                </div>
                <div>
                  <h3 className="font-orbitron font-bold text-white mb-1 group-hover:text-brand-purple transition-colors">Velocidad Extrema</h3>
                  <p className="text-sm text-gray-400 font-mono leading-relaxed">
                    Carga al instante en cualquier teléfono. Optimizada para no perder ni un cliente.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Footer Legal de la Tarjeta */}
        <div className="bg-black/40 border-t border-white/5 p-6 text-center">
          <p className="text-[10px] text-gray-500 font-mono max-w-3xl mx-auto leading-relaxed">
            <span className="text-brand-purple">CONDICIONES:</span> Válido para contrataciones confirmadas hasta el 31/12/2025 o hasta agotar stock de 5 cupos. 
            El precio corresponde al desarrollo de una Landing Page estándar. No incluye costo de dominio (.com/.com.ar) ni hosting mensual.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Promo;
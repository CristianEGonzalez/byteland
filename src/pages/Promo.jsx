import { useEffect } from 'react';
import ContactButton from '../components/ContactButton';

const Promo = () => {
  // Scroll al inicio al cargar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex justify-center py-20 px-6 lg:px-12 bg-[#0a0a0c]">
      
      {/* Contenedor Principal (Glass Card Gigante Estilo Ejecutivo) */}
      <div className="relative w-full max-w-5xl bg-white/[0.015] backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_16px_50px_0_rgba(0,0,0,0.6)]">
        
        {/* Decoración: Barra Superior de Luz Minimalista */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400"></div>
        
        {/* Luz ambiental sutil superior */}
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* === COLUMNA IZQUIERDA: La Propuesta de Valor === */}
          <div className="space-y-8">
            
            {/* Badge Status */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 font-mono text-xs backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
              </span>
              <span className="tracking-widest uppercase font-medium">SISTEMA 100% AUTOMATIZADO</span>
            </div>

            {/* Título */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-orbitron font-medium text-white mb-4 tracking-tight leading-[1.15]">
                Escala tu negocio <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400 font-bold">
                  sin límites operativos
                </span>
              </h1>
              <p className="text-gray-400 font-sans text-sm sm:text-base font-light leading-relaxed">
                Transforma tu sitio web en una máquina automatizada de atracción y calificación de clientes potenciales.
              </p>
            </div>

            {/* Valor Clave / ROI */}
            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6 backdrop-blur-xl">
              <p className="font-mono text-center text-cyan-400 text-xs uppercase tracking-widest mb-3">
                // Objetivo del Sistema
              </p>
              <div className="flex flex-col items-center justify-center text-center">
                <span className="text-3xl sm:text-4xl font-orbitron font-medium text-white tracking-tight">
                  +20 Horas Libres
                </span>
                <span className="text-xs sm:text-sm font-sans font-light text-gray-400 mt-1">al mes eliminando tareas manuales</span>
                <p className="text-cyan-300 font-mono text-xs mt-4 flex items-center gap-2 justify-center bg-cyan-950/30 px-3 py-1.5 rounded border border-cyan-500/20">
                  <svg className="w-3.5 h-3.5 shrink-0 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Respuestas inmediatas a potenciales clientes
                </p>
              </div>
            </div>

            {/* Botón Contacto */}
            <div className="pt-2">
              <ContactButton
                nombre="AUTOMATIZAR MI NEGOCIO"
                className="group block w-full bg-white text-gray-950 font-orbitron font-semibold text-xs tracking-wider uppercase py-3.5 px-8 rounded-md text-center hover:bg-cyan-400 transition-all duration-300 shadow-sm relative overflow-hidden"
              />
            </div>

          </div>

          {/* === COLUMNA DERECHA: Pilares de Automatización === */}
          <div className="space-y-4">
            
            <div className="font-mono text-xs text-gray-500 mb-2 tracking-wider">
              &gt; sistema_de_automatizacion.config
            </div>

            {/* Tarjeta de Beneficio 1 */}
            <div className="group p-5 rounded-xl bg-white/[0.01] border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.03] transition-all duration-300 backdrop-blur-xl">
              <div className="flex gap-4 items-start">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-cyan-950/40 flex items-center justify-center text-lg border border-cyan-500/20 group-hover:scale-105 transition-transform">
                  🤖
                </div>
                <div>
                  <h3 className="font-orbitron font-medium text-white text-sm sm:text-base mb-1 group-hover:text-cyan-300 transition-colors">
                    Captura y Flujo Automático
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-sans font-light leading-relaxed">
                    Formularios inteligentes que filtran prospectos calificados y los derivan directo a tu agenda o WhatsApp con datos listos.
                  </p>
                </div>
              </div>
            </div>

            {/* Tarjeta de Beneficio 2 */}
            <div className="group p-5 rounded-xl bg-white/[0.01] border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.03] transition-all duration-300 backdrop-blur-xl">
              <div className="flex gap-4 items-start">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-cyan-950/40 flex items-center justify-center text-lg border border-cyan-500/20 group-hover:scale-105 transition-transform">
                  ⚡
                </div>
                <div>
                  <h3 className="font-orbitron font-medium text-white text-sm sm:text-base mb-1 group-hover:text-cyan-300 transition-colors">
                    Respuestas Inmediatas 24/7
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-sans font-light leading-relaxed">
                    Tus prospectos no esperan. Se envían respuestas personalizadas y confirmaciones al instante vía Email o WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            {/* Tarjeta de Beneficio 3 */}
            <div className="group p-5 rounded-xl bg-white/[0.01] border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.03] transition-all duration-300 backdrop-blur-xl">
              <div className="flex gap-4 items-start">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-cyan-950/40 flex items-center justify-center text-lg border border-cyan-500/20 group-hover:scale-105 transition-transform">
                  📊
                </div>
                <div>
                  <h3 className="font-orbitron font-medium text-white text-sm sm:text-base mb-1 group-hover:text-cyan-300 transition-colors">
                    Integración con tu CRM
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-sans font-light leading-relaxed">
                    Conectamos tu web con tus herramientas de gestión (CRM, Google Sheets, Notificaciones) para centralizar tus leads.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Footer Legal de la Tarjeta */}
        <div className="bg-black/20 border-t border-white/[0.06] p-6 text-center">
          <p className="text-[10px] text-gray-500 font-mono max-w-3xl mx-auto leading-relaxed">
            <span className="text-cyan-400 font-medium">SISTEMA INTEGRAL:</span> Incluye arquitectura web de alta velocidad, diseño UI/UX optimizado a conversión y configuración de flujos automáticos de captura de leads.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Promo;
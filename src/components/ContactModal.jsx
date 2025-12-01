import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { createPortal } from 'react-dom';

// REEMPLAZA ESTOS VALORES CON LOS DE TU CUENTA DE EMAILJS
const YOUR_SERVICE_ID = "service_kw9o14k";
const YOUR_TEMPLATE_ID = "template_2okjz7s";
const YOUR_PUBLIC_KEY = "1KgMV8Iwho8szM4jL";

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    motivo: "Consulta",
    servicio: "Landing Page",
    mensaje: "",
    pais: "Cargando...",
    trampa_bots: "", // EL HONEYPOT (Campo oculto)
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Detectar país
  useEffect(() => {
    if (isOpen) {
      fetch("https://ipapi.co/json/")
        .then((res) => res.json())
        .then((data) => {
          setFormData((prev) => ({
            ...prev,
            pais: `${data.country_name} (${data.country_code})`,
          }));
        })
        .catch(() => {
          setFormData((prev) => ({ ...prev, pais: "Ubicación desconocida" }));
        });
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true); // Si se abre, lo mostramos ya
    } else {
      // Si se cierra, esperamos 300ms (lo que dura la animación) antes de desmontarlo
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Validar Email con Regex
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Limpiar error de email si el usuario empieza a corregirlo
    if (name === "email" && errors.email) {
      setErrors({ ...errors, email: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. SEGURIDAD: Verificar Honeypot (Si tiene valor, es un bot)
    if (formData.trampa_bots) {
      console.log("Bot detectado, envío bloqueado.");
      setIsSuccess(true);
      setTimeout(() => { setIsSuccess(false); onClose(); }, 4000);
      return;
    }

    // 2. VALIDACIÓN: Verificar Email
    if (!validateEmail(formData.email)) {
      setErrors({ ...errors, email: "Por favor, ingresa un email válido." });
      return;
    }

    setIsSubmitting(true);

    // 3. ENVÍO REAL A EMAILJS
    const templateParams = {
      from_name: formData.nombre,
      from_email: formData.email,
      phone: formData.telefono,
      subject: formData.motivo,
      service_type: formData.servicio,
      message: formData.mensaje,
      country: formData.pais
    };

    emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, YOUR_PUBLIC_KEY)
      .then((response) => {
        console.log('ÉXITO!', response.status, response.text);
        setIsSubmitting(false);
        setIsSuccess(true);
        
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
          // Resetear form (menos el país que ya lo tenemos)
          setFormData(prev => ({ 
            ...prev, 
            mensaje: "", nombre: "", email: "", telefono: "", trampa_bots: "" 
          })); 
        }, 3000);
      })
      .catch((err) => {
        console.error('FALLÓ...', err);
        setIsSubmitting(false);
        alert("Hubo un error al enviar el mensaje. Por favor intenta nuevamente.");
      });
  };

  if (!isVisible) return null;

  return createPortal(
<div 
      className={`fixed inset-0 z-9999 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm 
      ${isOpen ? 'overlay-animation' : 'overlay-out'}`}
    >
      
      <div 
        className={`relative w-full max-w-2xl bg-[#0A0A0F] border border-brand-purple/30 rounded-2xl shadow-[0_0_50px_rgba(168,85,247,0.15)] overflow-hidden flex flex-col max-h-[75vh] 
        ${isOpen ? 'modal-animation' : 'modal-out'}`}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-brand-cyan via-brand-purple to-brand-green"></div>

        <div className="flex justify-between items-center p-6 border-b border-white/10 bg-white/5">
          <h2 className="text-2xl font-bold text-white">
            Iniciar <span className="text-brand-cyan">Contacto</span>
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-all">
            ✕
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar font-mono">
          
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-10 space-y-4 text-center animate-in zoom-in duration-300">
              <div className="w-16 h-16 rounded-full bg-brand-green/20 flex items-center justify-center border border-brand-green">
                <svg className="w-8 h-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-xl font-bold text-white">¡Mensaje Transmitido!</h3>
              <p className="text-gray-400">El equipo de ByteLand ha recibido tu señal.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* CAMPO HONEYPOT (Invisible) */}
              <input 
                type="text" 
                name="trampa_bots" 
                value={formData.trampa_bots} 
                onChange={handleChange} 
                style={{ display: "none" }} 
                autoComplete="off"
              />

              {/* Nombre */}
              <div className="space-y-2">
                <label className="text-xs text-brand-cyan uppercase tracking-wider">Nombre/Empresa</label>
                <input
                  type="text"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg p-3 text-white focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none transition-all placeholder:text-gray-600"
                  placeholder="Ej: Juan Pérez"
                />
              </div>

              {/* Teléfono */}
              <div className="space-y-2">
                <label className="text-xs text-brand-cyan uppercase tracking-wider">Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  required
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg p-3 text-white focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none transition-all placeholder:text-gray-600"
                  placeholder="+54 11 ..."
                />
              </div>

              {/* Email con Validación Visual */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs text-brand-cyan uppercase tracking-wider">Email</label>
                <input
                  type="text" // Cambiado a text para validar manualmente con regex
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-gray-900/50 border rounded-lg p-3 text-white focus:ring-1 outline-none transition-all placeholder:text-gray-600
                    ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-700 focus:border-brand-purple focus:ring-brand-purple'}`}
                  placeholder="juan@empresa.com"
                />
                {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
              </div>

              {/* Motivo */}
              <div className="space-y-2">
                <label className="text-xs text-brand-cyan uppercase tracking-wider">Motivo</label>
                <div className="relative">
                  <select
                    name="motivo"
                    value={formData.motivo}
                    onChange={handleChange}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg p-3 text-white focus:border-brand-purple outline-none appearance-none cursor-pointer"
                  >
                    <option>Consulta</option>
                    <option>Presupuesto</option>
                    <option>Contratar Servicio</option>
                    <option>Otro</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-brand-purple">▼</div>
                </div>
              </div>

              {/* Servicio */}
              <div className="space-y-2">
                <label className="text-xs text-brand-cyan uppercase tracking-wider">Servicio</label>
                <div className="relative">
                  <select
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg p-3 text-white focus:border-brand-purple outline-none appearance-none cursor-pointer"
                  >
                    <option>Landing Page</option>
                    <option>Aplicación Web</option>
                    <option>Página Empresarial</option>
                    <option>Menú Digital</option>
                    <option>Mantenimiento</option>
                    <option>Diseño Web</option>
                    <option>Otro</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-brand-purple">▼</div>
                </div>
              </div>

              {/* Mensaje */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs text-brand-cyan uppercase tracking-wider">Datos Adicionales</label>
                <textarea
                  name="mensaje"
                  rows="3"
                  required
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg p-3 text-white focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none transition-all placeholder:text-gray-600 resize-none"
                  placeholder="Cuéntanos más..."
                ></textarea>
              </div>

              {/* Info País Oculta */}
              <div className="hidden md:col-span-2 text-xs text-gray-500">
                <span className="text-brand-green">●</span> Origen detectado: {formData.pais}
              </div>

              {/* Submit */}
              <div className="md:col-span-2 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-linear-to-r from-brand-cyan to-brand-purple text-black font-bold py-3 px-6 rounded-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all transform hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                >
                  {isSubmitting ? "Procesando..." : "ENVIAR MENSAJE"}
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ContactModal;
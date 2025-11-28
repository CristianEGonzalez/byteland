import React from "react";
import Button from "./Button";
import cityLogo from "../assets/Byteland-city.png";

function About() {
  return (
    <div
      className="py-35 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-brand-black to-[#4E4E75]"
      style={{ width: "100%", marginLeft: "calc(50% - 50vw)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-4xl font-bold text-white font-mono text-center mb-2 w-full">
              Nosotros
            </h2>

            <div className="mx-auto w-56 h-1.5 rounded-full bg-brand-purple mb-8"></div>

            <img
              src={cityLogo}
              alt="Byteland City Logo"
              className="h-auto object-contain mb-8 border-white/30 rounded-xl shadow-lg"
            />
          </div>

          <div className="flex flex-col justify-start pt-24">
            <p className="text-text-subtitle text-lg font-semibold font-sans text-left mb-10">
              En ByteLand somos un equipo de desarrolladores y diseñadores
              profesionales, con una visión clara: transformar ideas en
              experiencias digitales impactantes. 
            </p>
            <p className="text-text-subtitle text-lg font-semibold font-sans text-left mb-10">
              Nos dedicamos a crear soluciones web que no solo cumplan, sino que superen las
              expectativas de nuestros clientes, impulsando su presencia online
              con una identidad única.
            </p>

            <div className="flex justify-center">
              <Button nombre="Contactanos" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

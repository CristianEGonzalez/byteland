function WhyChoose() {
  return (
    <>
      <div className="text-3xl font-bold text-white font-mono text-center mt-15 p-25 w-full">
        ¿Por qué elegir ByteLand?
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10 lg:gap-2 px-4 sm:px-6 lg:px-25 pb-20 mb-32 place-items-stretch">
        <div
          className="hidden md:block absolute h-1 bg-white z-0"
          style={{
            top: "calc(14% + 14px)",
            left: "10%",
            width: "calc(45% + 35%)",
          }}
        ></div>

        <div className="flex flex-row sm:flex-row md:flex-col items-center md:items-center gap-4 h-full relative z-10">
          <div className="w-30 h-30 sm:w-28 sm:h-28 bg-[#D9D9D9] rounded-full flex items-center justify-center shrink-0">
            <div className="w-26 h-26 sm:w-24 sm:h-24 bg-black rounded-full flex items-center justify-center border-4 border-purple-700">
              <p className="text-white text-2xl font-bold font-mono">01</p>
            </div>
          </div>

          <div className="text-left sm:text-left md:text-center w-full flex flex-col justify-start">
            <h3 className="text-purple-700 font-sans italic mb-2">
              /foco_en_conversión
            </h3>
            <p className="text-gray-400 text-sm md:px-4">
              Nos especializamos en crear sitios web que no solo son visualmente
              atractivos, sino que también están diseñados estratégicamente para
              convertir visitantes en clientes leales.
            </p>
          </div>
        </div>

        <div className="flex flex-row sm:flex-row md:flex-col items-center md:items-center gap-4 h-full relative z-10">
          <div className="w-30 h-30 sm:w-28 sm:h-28 bg-[#D9D9D9] rounded-full flex items-center justify-center shrink-0">
            <div className="w-26 h-26 sm:w-24 sm:h-24 bg-black rounded-full flex items-center justify-center border-4 border-purple-700">
              <p className="text-white text-2xl font-bold font-mono">02</p>
            </div>
          </div>

          <div className="text-left sm:text-left md:text-center w-full flex flex-col justify-start">
            <h3 className="text-purple-700 font-sans italic mb-2">
              /entrega_a_tiempo
            </h3>
            <p className="text-gray-400 text-sm md:px-4">
              Cumplimos con los plazos establecidos y mantenemos una
              comunicación clara durante todo el proceso.
            </p>
          </div>
        </div>

        <div className="flex flex-row sm:flex-row md:flex-col items-center md:items-center gap-4 h-full relative z-10">
          <div className="w-30 h-30 sm:w-28 sm:h-28 bg-[#D9D9D9] rounded-full flex items-center justify-center shrink-0">
            <div className="w-26 h-26 sm:w-24 sm:h-24 bg-black rounded-full flex items-center justify-center border-4 border-purple-700">
              <p className="text-white text-2xl font-bold font-mono">03</p>
            </div>
          </div>

          <div className="text-left sm:text-left md:text-center w-full flex flex-col justify-start">
            <h3 className="text-purple-700 font-sans italic mb-2">
              /soporte_dedicado
            </h3>
            <p className="text-gray-400 text-sm md:px-4">
              Ofrecemos seguimiento y soporte continuo para asegurar que tu
              sitio funcione siempre perfecto.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChoose;

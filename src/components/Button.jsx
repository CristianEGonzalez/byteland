import React from "react";

function Button({ nombre }) {
  const buttonGradientClasses = `bg-gradient-to-r from-[#5AEFFF] to-[#8A2BE2]`;

  return (
    <>
      <button
        className={`${buttonGradientClasses} text-black font-bold py-1 px-8 rounded-lg text-sm sm:text-base hover:shadow-[0_0_20px_rgba(90,239,255,0.8)] transition-all hover:scale-[1.03] w-full sm:w-auto`}
      >
        {nombre}
      </button>
    </>
  );
}

export default Button;

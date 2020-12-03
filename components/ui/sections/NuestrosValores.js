import React, { Component } from "react";

export const NuestrosValores = () => {
  return (
    <section className="py-8 lg:py-12 xl:py-16 relative z-10">
      <div className="w-full flex flex-row items-center">
        <div className="container flex flex-col items-center">
          <div className="w-full lg:w-5/6 lg:mb-10 px-5 lg:px-0 text-center">
            <h2 className="block text-blue-500 font-serif font-black text-xl lg:text-4xl leading-none mb-6 lg:mb-12">
              Nuestros valores
            </h2>
            <p className="mb-5 lg:mb-6 tracking-tightest text-lg lg:text-base">
              Estan siempre alli para guiarnos y son consistentemente aplicados
              en todo Intercorp:
            </p>
            <ul className="flex flex-col md:flex-row flex-wrap justify-center tracking-tightest text-lg lg:text-4xl text-blue-500">
              <li className="md:px-6">Transparencia</li>
              <li className="hidden md:flex">.</li>
              <li className="md:px-6">Espíritu de superación</li>
              <li className="md:px-6">Trabajo en equipo</li>
              <li className="hidden md:flex">.</li>
              <li className="md:px-6">Humildad</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

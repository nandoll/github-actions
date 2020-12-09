import React from "react";

export const DemoCard = () => {
  return (
    <>
      <article className="overflow-hidden rounded mx-0 shadow-lg">
        <figure className="relative">
          <img
            src="https://picsum.photos/seed/picsum/426/332"
            alt="Imagen demo"
          />
          <a className="block absolute inset-0 z-5" href="#"></a>
        </figure>
        <div className="px-4 pt-3 pb-4">
          <time
            className="text-xxs text-gray-500 mb-2 inline-block leading-none"
            dateTime="2020-09-02"
          >
            2 SEP 2020
          </time>
          <div className="min-h-24">
            <a
              href="#"
              title="La Beca Alto Potencial UTP se amplía a más ciudades del Perúmía"
            >
              <h3 className="inline-block leading-none text-lg font-bold text-black">
                La Beca Alto Potencial UTP se amplía a más ciudades del Perúmía
              </h3>
            </a>
          </div>
          <a
            className="font-semibold uppercase text-blue-500 text-xs half-dashed"
            href="#"
            title="Categoría Acciones"
          >
            Acciones
          </a>
        </div>
      </article>
    </>
  );
};

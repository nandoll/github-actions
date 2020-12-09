import React from "react";
import Link from "next/link";

import formatDistanceFromNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";

export const PostCard = ({ post, bloque }) => {
  const {
    titulo,
    slug,
    link_imagen_preview,
    fecha_hora_creacion,
    id_categoria,
    categoria,
  } = post;
  // const { name:catName, _id:catID } = cats.items;

  // const handleNameCategory = (id) => {
  //   const resultado = cats.filter((nombre, indice) => nombre._id === id);
  //   const { [0]: categoria } = resultado;
  //   const { name } = categoria;
  //   return name;
  // };
  return (
    <div className={`p-2 ${bloque}`}>
      {/* Card Paolo */}
      <article className="h-full overflow-hidden rounded mx-0 shadow-lg">
        <figure className="relative">
          <img
            src={link_imagen_preview}
            alt="Imagen demo"
            className="lg:h-40 md:h-36 w-full object-cover object-center"
          />
          <a className="block absolute inset-0 z-5" href="#"></a>
        </figure>
        <div className="px-4 pt-3 pb-4">
          <time
            className="text-xxs text-gray-500 mb-2 inline-block leading-none"
            dateTime="2020-09-02"
          >
            {formatDistanceFromNow(new Date(fecha_hora_creacion), {
              locale: es,
            })}
          </time>

          <div className="min-h-24">
            <Link
              href={{
                pathname: `/noticias/${encodeURIComponent(slug)}`,
                query: { cat: encodeURIComponent(id_categoria) },
              }}
              as={`/noticias/${encodeURIComponent(slug)}`}
            >
              <a
                title={titulo}
                className="inline-block leading-none text-lg font-bold text-black"
              >
                {titulo}
              </a>
            </Link>
          </div>
          <a
            className="font-semibold uppercase text-blue-500 text-xs half-dashed"
            href="#"
            title={categoria?.nombre}
          >
            {categoria?.nombre}
          </a>
        </div>
      </article>
    </div>
  );
};

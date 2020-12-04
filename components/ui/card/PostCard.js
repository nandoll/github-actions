import React from "react";
import Link from "next/link";

import formatDistanceFromNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";

export const PostCard = ({ post, cats, bloque }) => {
  const {
    featured,
    categoria,
    ["created-on"]: creacion,
    name,
    pagina,
    ["post-summary"]: extracto,
    slug,
    _id,
    ["main-image"]: image,
  } = post;
  // const { name:catName, _id:catID } = cats.items;

  const handleNameCategory = (id) => {
    const resultado = cats.filter((nombre, indice) => nombre._id === id);
    const { [0]: categoria } = resultado;
    const { name } = categoria;
    return name;
  };
  return (
    <div className={`p-2 ${bloque}`}>
      {/* Card Paolo */}
      <article className="h-full overflow-hidden rounded mx-0 shadow-lg">
        <figure className="relative">
          <img
            src={image?.url}
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
            {formatDistanceFromNow(new Date(creacion), { locale: es })}
          </time>
          <div className="min-h-24">
            <Link
              href={`/noticias/${encodeURIComponent(slug)}/${encodeURIComponent(
                _id
              )}`}
              as={`/noticias/${encodeURIComponent(slug)}/${encodeURIComponent(
                _id
              )}`}
            >
              <a
                title={name}
                className="inline-block leading-none text-lg font-bold text-black"
              >
                {name}
              </a>
            </Link>
          </div>
          <a
            className="font-semibold uppercase text-blue-500 text-xs half-dashed"
            href="#"
            title="Categoría Acciones"
          >
            {handleNameCategory(categoria)}
          </a>
        </div>
      </article>
    </div>
  );
};

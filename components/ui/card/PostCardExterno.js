import React from "react";
import Link from "next/link";

import formatDistanceFromNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";

export const PostCardExterno = ({ post, catID, bloque, handleOpenModal }) => {
  const {
    titulo,
    slug,
    link_imagen_preview,
    fecha_hora_creacion,
    link_noticia_medio,
  } = post;
  // const {
  //   ["enlace-hacia-medio"]: linkExterno,
  //   featured,
  //   categoria,
  //   ["created-on"]: creacion,
  //   name,
  //   pagina,
  //   ["post-summary"]: extracto,
  //   slug,
  //   _id,
  //   ["main-image"]: image,
  // } = post;
  // const { name:catName, _id:catID } = cats.items;

  // console.log(linkExterno);

  // const handleNameCategory = (id) => {
  //   const resultado = cats.filter((nombre, indice) => nombre._id === id);
  //   const { [0]: categoria } = resultado;
  //   const { name } = categoria;
  //   return name;
  // };
  return (
    <div className={`p-2 ${bloque}`}>
      <div className="h-full shadow-2xl border-gray-200 rounded-card overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={link_imagen_preview}
          alt="blog"
        />
        <div className="p-6">
          <h2 className="uppercase tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
            {formatDistanceFromNow(new Date(fecha_hora_creacion), {
              locale: es,
            })}
          </h2>

          <button
            className="title-font text-lg font-semibold text-gray-900 mb-3"
            style={{ cursor: "pointer" }}
            onClick={() => handleOpenModal(link_noticia_medio)}
          >
            {titulo}
          </button>

          {/* <p className="leading-relaxed mb-3">{ extracto }</p> */}
          <div className="flex items-center flex-wrap ">
            <h2 className="uppercase tracking-widest text-xs title-font font-semibold my-5 text-blue-500">
              {catID}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

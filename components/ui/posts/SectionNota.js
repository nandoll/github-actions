import React from "react";
import { LinkCats } from "../formats/LinkCats";

export const SectionNota = (props) => {
  const { img, category, title, link } = props;

  return (
    <>
      <article className="relative z-25 flex flex-row">
        <div className="w-full lg:w-1/2">
          <figure className="lg:rounded-tr-lg lg:rounded-br-lg overflow-hidden">
            <img src={img} alt={title} />
          </figure>
        </div>
        <div className="w-full lg:w-1/2 xl:w-5/12">
          <div className="text-white px-12 xl:px-20 py-5 xl:py-8 xl:w-5/6">
            <LinkCats text={category} link={link} />

            <h3 className="font-serif font-black text-3xl lg:text-4xl mb-8">
              {title}
            </h3>

            <a
              className="bg-black text-white text-lg leading-none rounded-xl px-5 py-2"
              href={link}
            >
              Ir <i className="icon-arrow-right"></i>
            </a>
          </div>
        </div>
      </article>
      <div className="absolute z-0 w-3/4 bg-blue-500 inset-y-0 -mt-20 -mb-20 right-0 lg:rounded-tl-lg lg:rounded-bl-lg"></div>
    </>
  );
};

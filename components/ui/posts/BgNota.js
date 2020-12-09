import React from "react";
import { LinkCats } from "../formats/LinkCats";
import Link from "next/link";

export const BgNota = (props) => {
  const { bg, title, link, category } = props;

  return (
    <section
      className="h-screen w-full relative z-10 bg-no-repeat bg-cover bg--overlay"
      id="blog-home"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="relative z-10 w-full h-full flex flex-row items-end lg:items-center">
        <div className="container flex flex-row items-end p-8 lg:p-0">
          <div className="w-full md:w-1/3 lg:w-1/2 text-white">
            <LinkCats text={category} link={link} />

            <h3 className="font-serif font-black text-3xl lg:text-4xl mb-8">
              {title}
            </h3>
            <Link href={link}>
              <a
                className="bg-blue-500 text-lg leading-none rounded-xl px-5 py-2"
                title={title}
              >
                Ir <i className="icon-arrow-right"></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from "react";

import { PostCard } from "../components/ui/card/PostCard";
import { MainLayout } from "../components/ui/layout/MainLayout";
import { CategoriesLeftSidebar } from "../components/ui/sidebar/CategoriesLeftSidebar";
import { RadioMediosLeftSidebar } from "../components/ui/sidebar/RadioMediosLeftSidebar";
import { getAllCats, getAllNews } from "../lib/api";

function Noticias({ data, cats }) {
  return (
    <MainLayout>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:full mx-auto flex flex-wrap">
            {/* Sidebar */}
            <div className="lg:w-1/4 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <RadioMediosLeftSidebar radioName="noticias" />
              <div className="flex">
                <div className="mt-2 w-1/2 flex md:hidden flex-col">
                  <div className=" flex">1 de {data?.length} resultados</div>
                </div>
                <h3 className="mt-2 w-1/2 md:mt-8 text-blue-500 text-sm md:text-lg mb-4 text-right md:text-left">
                  Categorias
                </h3>
              </div>
              {cats?.map((cat) => (
                <CategoriesLeftSidebar
                  key={cat?.id}
                  cat={cat?.nombre}
                  catID={cat?.id}
                />
              ))}
            </div>
            {/* Panel Cards */}
            <div className="lg:w-3/4 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 -mt-4">
              <div className="hidden md:flex">
                <div className="w-full h-12">
                  1 de {data?.length} resultados
                </div>
              </div>
              <div className="flex flex-wrap -m-4">
                {data?.map((post) => (
                  <PostCard key={post?.id} post={post} bloque={"md:w-1/3"} />
                ))}
              </div>
              {/* Contador/paginador */}
              <div className="w-full mt-20 text-center md:text-right ">
                <a className="inline-block rounded-card border border-dashed border-blue-500 text-blue-500 px-5 py-2 leading-none text-center">
                  <i className="inline-block  icon-arrow-left"></i>
                </a>
                <a className="inline-block mx-2  bg-gray-700 text-white leading-none text-sm font-semibold rounded-card px-5 py-3">
                  1
                </a>
                <a className="inline-block mr-2 border-blue-500  border   text-blue-500 text-sm font-semibold leading-none rounded-card py-2 px-3">
                  2
                </a>

                <a className="inline-block rounded-card border border-dashed border-blue-500 text-blue-500 px-5 py-2 leading-none text-center">
                  <i className="inline-block  icon-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export async function getStaticProps(context) {
  const idioma = context?.locale === "en" ? 1 : 0;

  const raw = {
    id_idioma: idioma,
    tipo_articulo: "N",
    categorias: [],
    pagina: 1,
    cantidad: 10,
  };

  const data = (await getAllNews(raw)) || [];
  console.log(data);
  const cats = (await getAllCats()) || [];

  return {
    props: {
      data,
      cats,
    },

    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
}

export default Noticias;

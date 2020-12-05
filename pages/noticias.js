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
                  key={cat.id}
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
                  <PostCard
                    key={post.id}
                    post={post}
                    catID={post?.id_categoria}
                    bloque={"md:w-1/3"}
                  />
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

export async function getStaticProps() {
  // API NOTICIAS
  // const myHeaders = new Headers();
  // myHeaders.append("Content-Type", "application/json");
  // const requestOptions = {
  //   method: "POST",
  //   headers: myHeaders,
  //   body: raw,
  // };
  // const requestHomeOptions = {
  //   method: "POST",
  //   headers: myHeaders,
  // };
  // const requestNoticiasPorSeccionOptions = {
  //   method: "POST",
  //   headers: myHeaders,
  //   body: JSON.stringify({
  //     id_idioma: 1,
  //     seccion: 1, //la pagina id
  //     destacado: 1,
  //   }),
  // };
  // const requestDetalleNoticiaOptions = {
  //   method: "POST",
  //   headers: myHeaders,
  //   body: JSON.stringify({
  //     slug: "noticia-nro-1",
  //     id_noticia: 1,
  //     id_idioma: 1,
  //   }),
  // };
  // const requestObtenerCategoriasOptions = {
  //   method: "GET",
  //   headers: myHeaders,
  // };
  // const requestInformacionFinancieraOptions = {
  //   method: "GET",
  //   headers: myHeaders,
  // };

  // // #1
  // const apiNoticias = await fetch(
  //   "https://modobetaintercorp.azurewebsites.net/api/obtener-noticias",
  //   requestOptions
  // );
  // // #2
  // const apiNoticiasHome = await fetch(
  //   "https://modobetaintercorp.azurewebsites.net/api/obtener-noticias-home",
  //   requestHomeOptions
  // );
  // // #3
  // const apiNoticiasPorSeccion = await fetch(
  //   "https://modobetaintercorp.azurewebsites.net/api/noticias-por-seccion",
  //   requestNoticiasPorSeccionOptions
  // );
  // // #4

  // const apiDetalleNoticia = await fetch(
  //   "https://modobetaintercorp.azurewebsites.net/api/detalle-noticia",
  //   requestDetalleNoticiaOptions
  // );

  // // #5

  // const apiObtenerCategorias = await fetch(
  //   "https://modobetaintercorp.azurewebsites.net/api/obtener-categorias",
  //   requestObtenerCategoriasOptions
  // );
  // // 6

  // const apiInformacionFinanciera = await fetch(
  //   "https://modobetaintercorp.azurewebsites.net/api/obtener-informacion-financiera",
  //   requestInformacionFinancieraOptions
  // );
  // const noticia = await apiInformacionFinanciera.json();
  // console.log("\nApi informacion-financiera: ");
  // console.log(noticia);

  const raw = {
    id_idioma: 1,
    tipo_articulo: "M",
    categorias: [],
    pagina: 1,
    cantidad: 10,
  };

  const data = await getAllNews(raw);
  const cats = await getAllCats();

  // const res = await fetch(
  //   "https://api.webflow.com/collections/5fa2c45087b41f0f9b713464/items?limit=9&offset=0&api_version=1.0.0&access_token=ed2770ed568f942e403fab9300fa760b97eadc3ea3bb5901e025deb8cd4cb3ee"
  // );

  // const posts = await res.json();

  // const resCat = await fetch(
  //   "https://api.webflow.com/collections/5fabfcf448583971dcbcc5c4/items?api_version=1.0.0&access_token=ed2770ed568f942e403fab9300fa760b97eadc3ea3bb5901e025deb8cd4cb3ee"
  // );
  // const cats = await resCat.json();

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

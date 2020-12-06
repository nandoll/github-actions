import React from "react";
import { MainLayout } from "../../components/ui/layout/MainLayout";
import { format } from "date-fns";
import { es } from "date-fns/locale";

import { getAllNews, getNewsDetail } from "../../lib/api";

function Noticia({ data }) {
  return (
    <MainLayout>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-full mx-auto flex flex-wrap">
            <div className="hidden md:flex md:fixed lg:w-1/6 w-auto lg:pr-10 mb-6 lg:mb-0  flex-col top-100 ">
              <a
                className=" text-blue-500 h-10 w-10 p-2 leading-none text-left"
                onClick={() => window.history.back()}
              >
                <i className="inline-block  icon-arrow-left"></i>
              </a>

              <div className="grid justify-items-start py-4 my-4 min-h-64 ">
                <a className="flex h-10 w-10 items-center justify-center border rounded-full border-gray-500 text-gray-700 px-5 py-2 leading-none">
                  <i className="inline-block  icon-linkedin"></i>
                </a>
                <a className="flex h-10 w-10 items-center justify-center border rounded-full border-gray-500 text-gray-700 px-5 py-2 leading-none">
                  <i className="inline-block icon-twitter"></i>
                </a>
                <a className="flex h-10 w-10 items-center justify-center border rounded-full border-gray-500 text-gray-700 px-5 py-2 leading-none">
                  <i className="inline-block icon-facebook"></i>
                </a>
                <a className="flex h-10 w-10 items-center justify-center border rounded-full border-gray-500 text-gray-700 px-5 py-2 leading-none">
                  <i className="inline-block icon-copy"></i>
                </a>
              </div>

              {/*  icon-facebook */}
              {/* <p>Redes sociales</p> */}
            </div>
            <div className="lg:w-5/6 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 mt-10 md:pl-40">
              <h1 className="text-blue-500 uppercase font-semibold text-base half-dashed">
                Reconocimientos
              </h1>
              <h1 className="font-serif text-4xl leading-snug my-5 text-black">
                {data?.titulo}
              </h1>
              <time className="flex my-8 text-gray-500 text-base font-sans uppercase ">
                {format(new Date(data?.fecha_hora_creacion), "d MMM yyyy", {
                  locale: es,
                })}
              </time>
              <div className="my-5">
                {/* <img src={ item["main-image"].url } alt=""/> */}
                <img src="/static/bg/bg2.png" alt="" />
              </div>
              <p className="font-serif text-2xl font-normal text-black">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                vitae? Obcaecati officiis odio ullam nemo dolore officia optio,
                veniam omnis natus, totam asperiores ea voluptatem at alias
                minima, nihil qui!{" "}
              </p>
              <div className="text-lg my-8">{data.texto}</div>

              {/* carrusel */}
              <h2 className="my-8 text-blue-500 font-serif font-black text-xl lg:text-2xl leading-none">
                Acciones de impacto
              </h2>
              {/* <Slider {...settings}>
                {posts.items.map((post) => (
                  <PostCard
                    key={post._id}
                    post={post}
                    cats={cats.items}
                    bloque=""
                  />
                ))}
              </Slider> */}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export async function getStaticProps({ params }) {
  const [slug] = params.slug;

  const raw = {
    slug: slug,
    id_noticia: 0,
    id_idioma: 0,
  };

  console.log(raw);
  const data = await getNewsDetail(raw);
  console.log(data);
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const raw = {
    id_idioma: 1,
    tipo_articulo: "N",
    categorias: [],
  };
  const allPosts = await getAllNews(raw);

  const paths = allPosts?.map(({ slug }) => ({
    params: { slug: [slug] },
  }));

  return {
    paths: paths,
    fallback: true,
  };
}

export default Noticia;

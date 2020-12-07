import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { format } from "date-fns";
import { es } from "date-fns/locale";

import { MainLayout } from "../../components/ui/layout/MainLayout";
import { getAllNews, getNewsDetail } from "../../lib/api";
import { Shared } from "../../components/ui/social/Shared";
import { PostCard } from "../../components/ui/card/PostCard";

function Noticia({ data, posts }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleFilterPost = () => {
    return posts?.filter(
      (post) =>
        post?.id_categoria === data?.id_categoria &&
        post?.id !== data?.id &&
        post
    );
  };

  const handleShowSlider = () => {
    const show = handleFilterPost();
    return show?.length > 0 ? true : false;
  };

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
              <Shared title={data?.titulo} />
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
              <div className="text-lg my-8">{data?.texto}</div>

              {/* carrusel */}

              {handleShowSlider() ? (
                <h2 className="my-8 text-blue-500 font-serif font-black text-xl lg:text-2xl leading-none">
                  Noticias similares
                </h2>
              ) : (
                ""
              )}
              <Slider {...settings}>
                {posts?.map(
                  (post) =>
                    post?.id_categoria === data?.id_categoria &&
                    post?.id !== data?.id && (
                      <PostCard key={post.id} post={post} bloque="" />
                    )
                )}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export async function getStaticProps(context) {
  const idioma = context?.locale === "en" ? 1 : 0;
  const [slug] = context?.params.slug || "";
  // console.log(context);
  const raw = {
    slug: slug,
    id_noticia: 0,
    id_idioma: 0,
  };
  const rawPost = {
    id_idioma: idioma,
    tipo_articulo: "N",
    categorias: [],
    pagina: 1,
    cantidad: 10,
  };

  const data = await getNewsDetail(raw);
  // TODO : Modificar para by Cat
  const posts = await getAllNews(rawPost);

  return {
    props: {
      data,
      posts,
    },
  };
}

export async function getStaticPaths({}) {
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

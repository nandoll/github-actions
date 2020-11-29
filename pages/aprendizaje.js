import React, { useState } from "react";
import Link from "next/link";
// Plugins
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import backgroundVideo from "reactjs-videobg";

import { MainLayout } from "../components/ui/layout/MainLayout";
import { PostCard } from "../components/ui/card/PostCard";
import FeaturedCard from "../components/ui/card/FeaturedCard";

import BackgroundVideo from "../components/ui/video/BackgroundVideo";

export default function aprendizaje({ posts, cats }) {
  const { items: noticias, count, total, limit } = posts;
  const { items: categorias } = cats;

  const rutaImagen = "/static/bg/bg6.png";
  const rutaImagenB = "/static/bg/bg2.png";
  const rutaImagenC = "/static/bg/bg3.png";

  const imagen = "/static/bg/bg4.png";
  const play = "/static/assets/play.png";
  const data = {
    cat: "Aprendizaje",
    title: "Revive el #SomosIntercorp LIVE: La digitalización de la educación",
    content:
      "En esta edición, tuvimos un panel con Aurelia Alvarado, Gerente de Experiencia al Usuario en Innova Schools y Álvaro Valdez, Director Académico General de la UTP quienes contaron principales aprendizajes de la educación virtual.",
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const [isEnded, setIsEnded] = useState(false);

  const handleOnEnded = () => {
    setIsEnded(true);
  };

  return (
    <MainLayout>
      <BackgroundVideo
        poster={`/static/bg/bg1.png`}
        onEnded={handleOnEnded}
        loop={true}
      >
        <source src="/static/videos/hero.mp4" type="video/mp4" />
      </BackgroundVideo>
      <div className="h-screen">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
          voluptas libero quidem id voluptatibus optio fuga voluptatum pariatur
          amet. Eaque iusto laborum a doloremque in tempora culpa exercitationem
          autem maiores.
        </p>
      </div>

      <FeaturedCard
        imagen={rutaImagen}
        justify="justify-start"
        bgColor="bg-black"
        data={data}
      />
      <div className="container">
        <h1 className="my-10 text-3xl font-serif text-blue-500">
          {" "}
          Conoce más{" "}
        </h1>
        <Slider {...settings}>
          {noticias.map((post) => (
            <PostCard key={post._id} post={post} cats={categorias} bloque="" />
          ))}
        </Slider>
        <Link href="/noticias">
          <a className="inline-block border border-dotted rounded-full mx-10 mb-20 py-2 px-10 border-blue-500 text-blue-500">
            Ver más noticias
          </a>
        </Link>
      </div>
      <div className="bg-gray-700 px-10 py-10">
        <p className="text-2xl text-white text-center md:mt-24 mb-10">
          Aprendiendo de los mejores con nuestro aliados internacionales.
        </p>
        <div className="container">
          <div className="lg:full mx-auto flex flex-wrap">
            <div className="w-full">
              <div className="flex flex-wrap">
                <div className="p-4 md:w-1/5">
                  <div className="w-full">
                    <img src="/static/assets/logo.png" alt="Logo" />
                    <p className="text-white text-sm my-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="p-4 md:w-1/5">
                  <div className="w-full">
                    <img src="/static/assets/logo.png" alt="Logo" />
                    <p className="text-white text-sm my-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="p-4 md:w-1/5">
                  <div className="w-full">
                    <img src="/static/assets/logo.png" alt="Logo" />
                    <p className="text-white text-sm my-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="p-4 md:w-1/5">
                  <div className="w-full">
                    <img src="/static/assets/logo.png" alt="Logo" />
                    <p className="text-white text-sm my-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="p-4 md:w-1/5">
                  <div className="w-full">
                    <img src="/static/assets/logo.png" alt="Logo" />
                    <p className="text-white text-sm my-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-500 px-10 py-10"></div>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://api.webflow.com/collections/5fa2c45087b41f0f9b713464/items?limit=9&offset=0&api_version=1.0.0&access_token=ed2770ed568f942e403fab9300fa760b97eadc3ea3bb5901e025deb8cd4cb3ee"
  );
  const posts = await res.json();

  const resCat = await fetch(
    "https://api.webflow.com/collections/5fabfcf448583971dcbcc5c4/items?api_version=1.0.0&access_token=ed2770ed568f942e403fab9300fa760b97eadc3ea3bb5901e025deb8cd4cb3ee"
  );
  const cats = await resCat.json();

  return {
    props: {
      posts,
      cats,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
}

import React from "react";
import FeaturedCard from "../components/ui/card/FeaturedCard";
import { ParallaxProvider } from "react-scroll-parallax";
import { ParallaxBanner } from "react-scroll-parallax";
import { MainLayout } from "../components/ui/layout/MainLayout";
import BackgroundVideo from "../components/ui/video/BackgroundVideo";

export default function innovacion() {
  const rutaImagen = "/static/bg/bg1.png";
  const rutaImagenB = "/static/bg/bg2.png";
  const rutaImagenC = "/static/bg/bg3.png";
  const imagen = "/static/bg/bg4.png";
  const play = "/static/assets/play.png";
  const data = {
    cat: "VALOR COMPARTIDO",
    title: "Alivia: tecnología al servicio de la salud de los peruanos",
    content:
      "Aviva y La Victoria Lab invita a todos los colaboradores a conocer Alivia y acceder a un 25% de descuento en la primera cita ingresando el código CLUBINTERCORP al momento de pagar.",
  };
  const dataB = {
    cat: "Nuevos Experimentos",
    title:
      "Interbank y Rappi firman alianza para desarrollar los mejores servicios financieros digitales en Perú",
    content:
      "Con esta decisión confirman su compromiso con el desarrollo y bienestar de nuestro país y contribuyen a la recuperación económica nacional.",
  };
  const dataC = {
    cat: "Acontecimientos",
    title:
      "Cónyuges y parejas/convivientes del mismo sexo podrán usar Benefíciate de Somos Intercorp",
    content:
      "Alineados a nuestro compromiso por la diversidad e inclusión, ahora l@s cónyuges y las parejas/convivientes del mismo sexo podrán acceder a las promociones exclusivas para colaborador@s de Benefíciate (poweredby Club Intercorp) en Somos Intercorp.",
  };
  const content = {
    titleParallax: "Innovación de impacto",
    bodyParallax:
      "Mejoramos las vida de las personas a través de la innovación centrada en las personas.",
  };
  return (
    <MainLayout>
      <ParallaxProvider>
        <div className=" lg:w-full lg:h-full flex flex-row md:min-h-64 items-center mb-40">
          <ParallaxBanner
            className="h-screen md:min-h-64"
            layers={[
              {
                children: (
                  <BackgroundVideo poster={`/static/bg/bg1.png`} loop={true}>
                    <source
                      src="/static/videos/loop-ultima-seccion.mp4"
                      type="video/mp4"
                    />
                  </BackgroundVideo>
                ),
                amount: 0.5,
              },
            ]}
          ></ParallaxBanner>
          <div className="parallaxChildren absolute lg:max-w-sm lg:ml-48">
            <h2 className="bg-black italic text-white text-slg  pl-4 pt-2 pr-8 pb-2 inline">
              {content.titleParallax}
            </h2>
            <p className=" font-serif text-3xl text-white leading-10 my-6 ">
              {content.bodyParallax}
            </p>
          </div>
        </div>
      </ParallaxProvider>
      <FeaturedCard
        imagen={rutaImagen}
        justify="justify-start"
        bgColor="bg-black"
        data={data}
      />
      <FeaturedCard
        imagen={rutaImagenB}
        justify="justify-end"
        bgColor="bg-blue-500"
        data={dataB}
      />
      <FeaturedCard
        imagen={rutaImagenC}
        justify="justify-start"
        bgColor="bg-black"
        data={dataC}
      />
      <div className="bg-gray-700 px-20 py-16">
        <h1 className="font-serif font-black text-4xl text-white ">Eventos</h1>
        <div className="-mb-48">
          <img src={"/static/assets/fest.png"} alt="Fest" />
        </div>
      </div>
      <div className="bg-gray-700">
        <div
          className="bg-cover bg-top bg-no-repeat flex justify-center"
          style={{ backgroundImage: `url(${imagen})` }}
        >
          <div className="h-80">
            <img className="mb-10" src={play} alt="Play" />
            <h2 className="text-center uppercase text-white text-lg">
              Ver programa{" "}
            </h2>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

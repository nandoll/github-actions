import Carrusel from "../components/ui/carousels/SlickCarousel";
import { MainLayout } from "../components/ui/layout/MainLayout";
import { SectionFullScreen } from "../components/ui/layout/SectionFullScreen";
import { DownCounter } from "../components/ui/sections/Counters";
import ParallaxVideo from "../components/ui/video/ParallaxVideo";

export default function NuestraGente() {
  const content = {
    sourceMP4: {
      video: "/static/videos/loop-ultima-seccion.mp4",
      poster: "/static/bg/bg6.png",
    },
    sourceIMG: "/static/bg/bg2.png",
    title: "Nuestra gente",
    body:
      "Generamos impacto real en la vida de millones de personas, resolviendo retos ambiciosos, en una cultura emprendedora.",
  };
  return (
    <MainLayout>
      <ParallaxVideo
        source={content.sourceMP4.video}
        // source={content.sourceIMG}
        poster={content.sourceMP4.poster}
        title={content.title}
        body={content.body}
      />
      {/* Seccion Contador */}
      <section className=" h-full w-full relative z-20" id="section-comunidad">
        <div className="w-full h-full flex flex-row items-center">
          <div className="container flex flex-col items-center">
            <div className="w-full lg:w-5/6 px-5 lg:px-0 text-center">
              <p className="lg:text-lg tracking-tightest">Somos más de</p>

              <DownCounter starCount={74000} endCount={75000} />

              <div>
                <p className="text-lg lg:text-2xl xl:text-3xl mb-4 lg:mb-6 leading-none">
                  personas{" "}
                  <span className="text-blue-500">
                    colaboradoras <br className="hidden lg:inline-block" />
                    en 34 empresas...
                  </span>
                </p>
                <p className="text-sm lg:text-lg xl:text-xl tracking-tightest">
                  trabajando por hacer del Perú el mejor lugar para formar una
                  familia en América Latina.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Seccion carrusel */}
      <SectionFullScreen
        containerclassName="flex flex-col items-center"
        ids="section-main"
      >
        <div className="w-full lg:w-5/6 mb-6 lg:mb-10 px-5 lg:px-3">
          <h2 className="text-blue-500 font-serif font-black text-xl lg:text-2xl leading-none">
            Historias
          </h2>
        </div>
        <div className="w-full lg:w-5/6 acciones">
          <div className="pb-5 lg:pb-8">
            <Carrusel seccion="historias" />
          </div>
        </div>
      </SectionFullScreen>

      <div className="w-full bg-blue-500 text-white">
        <div className="max-w-md mx-auto overflow-hidden md:max-w-5xl  ">
          <div className="md:flex self-center">
            <div className="md:flex-shrink-0">
              <p className="font-serif py-8 text-2xl md:max-w-xs">
                Resolvemos retos ambiciosos y audaces en equipos agiles
              </p>
            </div>
            <div className="p-8">
              <p className="mt-2">
                “Lo que más me gusta es el compromiso que tiene el equipo, lo
                que se siente muy ligado hacian un objetivo común”.
              </p>

              <div className="md:flex">
                <div className="md:flex-shrink-0 p-8">
                  <img
                    className="h-16  w-full object-cover md:w-16"
                    src="/static/img/comentarios/bruno.png"
                    alt="Bruno logistica"
                  />
                </div>
                <div className="p-8 px-4 font-serif">
                  <p className="tracking-wide text-sm text-indigo-500 font-semibold ">
                    Bruno
                  </p>
                  <p className="block mt-1 font-light ">
                    Logística, Intercorp Retail
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

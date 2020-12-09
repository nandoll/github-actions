import Link from "next/link";

import { MainLayout } from "../components/ui/layout/MainLayout";
import { VideoBg } from "../components/ui/video/VideoBg";
import { SectionFullScreen } from "../components/ui/layout/SectionFullScreen";
import SlickCarousel from "../components/ui/carousels/SlickCarousel";
import CarruselFade from "../components/ui/carousels/SlickCarouselFade";
import BgBlack from "../components/ui/backgrounds/BgBlack";
import HeroHome from "../components/ui/header/HeroHome";
import { NuestrosValores } from "../components/ui/sections/NuestrosValores";
import { DownCounter } from "../components/ui/sections/Counters";
import CollageEmployees from "../components/ui/sections/CollageEmployees";
import { NuestrasPlataformas } from "../components/ui/sections/NuestrasPlataformas";
import { SectionNota } from "../components/ui/posts/SectionNota";
import { BgNota } from "../components/ui/posts/BgNota";
import { getHomeNews } from "../lib/api";

function Home({ data }) {
  return (
    <MainLayout navType="home">
      <section className="fixed inset-0 z-0 video--hero" id="cnt-video-hero">
        <VideoBg
          src="/static/videos/hero.mp4"
          type="video/mp4"
          id="video-hero"
        />
      </section>

      <BgBlack classes="z-10" />

      <HeroHome />

      <SectionFullScreen
        containerclassName="flex flex-col items-center"
        ids="section-main"
      >
        <div className="w-full lg:w-5/6 mb-6 lg:mb-10 px-5 lg:px-3">
          <h2 className="text-blue-500 font-serif font-black text-xl lg:text-2xl leading-none">
            Acciones de impacto
          </h2>
        </div>
        <div className="w-full lg:w-5/6 acciones">
          <div className="pb-5 lg:pb-8">
            <SlickCarousel data={data} seccion="noticias" ruta={"/noticias"} />
          </div>
        </div>
      </SectionFullScreen>

      <NuestrosValores />

      <SectionFullScreen
        containerclassName="flex flex-col items-center"
        ids="section-plataformas-lg"
      >
        <NuestrasPlataformas />
      </SectionFullScreen>

      <section className="h-screen w-full relative z-20" id="section-comunidad">
        <div className="w-full h-full flex flex-row items-center">
          <div className="container flex flex-col items-center">
            <div className="w-full lg:w-5/6 px-5 lg:px-0 text-center">
              <p className="lg:text-lg tracking-tightest">
                En nuestra comunidad, somos más de
              </p>

              <DownCounter starCount={74000} endCount={75000} />

              <div>
                <CarruselFade classes="slick--dost__sm">
                  <div>
                    <div>
                      <p className="text-lg lg:text-2xl xl:text-3xl mb-4 lg:mb-6 leading-none">
                        personas{" "}
                        <span className="text-blue-500">transparentes</span>
                      </p>
                      <p className="text-sm lg:text-lg xl:text-xl tracking-tightest">
                        Creemos en la honestidad y siempre decimos
                        <br className="hidden lg:inline-block" />
                        lo que pensamos con empatía.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="text-lg lg:text-2xl xl:text-3xl mb-4 lg:mb-6 leading-none">
                        personas{" "}
                        <span className="text-blue-500">luchadoras</span>
                      </p>
                      <p className="text-sm lg:text-lg xl:text-xl tracking-tightest">
                        Tratamos de ser mejores, deseando hacer algo
                        <br className="hidden lg:inline-block" />
                        importante en nuestra vida profesional.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="text-lg lg:text-2xl xl:text-3xl mb-4 lg:mb-6 leading-none">
                        personas{" "}
                        <span className="text-blue-500">colaboradoras</span>
                      </p>
                      <p className="text-sm lg:text-lg xl:text-xl tracking-tightest">
                        Compartimos lo que sabemos y buscamos
                        <br className="hidden lg:inline-block" />
                        alcanzar nuestras metas juntos.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="text-lg lg:text-2xl xl:text-3xl mb-4 lg:mb-6 leading-none">
                        personas <span className="text-blue-500">humildes</span>
                      </p>
                      <p className="text-sm lg:text-lg xl:text-xl tracking-tightest">
                        Reconocemos lo que somos capaces de hacer,
                        <br className="hidden lg:inline-block" />y nos ponemos
                        al servicio de los demás.
                      </p>
                    </div>
                  </div>
                </CarruselFade>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CollageEmployees />

      <section
        className="hidden md:block h-screen w-full relative z-10 mb-40 video--hero"
        id="cnt-video-hero"
      >
        <VideoBg
          src="/static/videos/hero.mp4"
          type="video/mp4"
          id="video-hero-footer"
        />

        <div className="relative h-full w-full flex flex-row justify-center">
          <div className="container relative h-full flex flex-row justify-center items-center">
            <a className="play--animated" href="#">
              <span className="h-24 w-24 flex flex-row justify-center items-center border-2 border-white rounded-full">
                <i className="text-white text-lg icon-play"></i>
              </span>
            </a>
            <Link href="/nuestra-gente">
              <a className="absolute bottom-0 mx-auto mb-20 inline-block rounded-xl border border-blue-500 bg-blue-500 text-white text-lg px-8 py-2 leading-snug">
                Conocer más de nuestra gente{" "}
                <i className="inline-block ml-2 icon-arrow-right"></i>
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="hidden md:block relative z-20 mt-20 mb-8"
        id="blog-home"
      >
        <SectionNota
          img="/static/img/familia.jpg"
          category="Innovación de impacto"
          title="Nos incrustamos en la vida de las familias peruanas para
              comprender sus aspiraciones y necesidades."
          link="/innovacion"
        />
      </section>

      <BgNota
        bg="static/img/estudiantes.jpg"
        title="Aprendemos día a día para ofrecer siempre mejores servicios para los peruanos."
        category="Aprendizaje continuo"
        link="/aprendizaje"
      />
    </MainLayout>
  );
}

export async function getStaticProps(context) {
  try {
    const idioma = context?.locale === "en" ? 1 : 0;
    const raw = {
      id_idioma: idioma,
    };

    const data = await getHomeNews(raw);
    console.log(data);
    return {
      props: {
        data,
      },

      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every second
      revalidate: 1, // In seconds
    };
  } catch (error) {
    console.error(error);
  }
}

export default Home;

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals("ScrollTrigger", ScrollTrigger);
}

const sections = [
  {
    classes: "row-span-2 col-span-2",
    cntClasses: "p-2 w-1/2",
    text:
      "Junto a Nelson, brindamos bienestar a los peruanos dando acceso a productos de calidad todos los días.",
    bg: "/static/img/colaboradores/1.jpg",
    logo: "/static/img/logos/supermercados-logo.png",
    titulo: "Supermercados Peruanos",
    logoW: "239",
    logoH: "72",
    altura: "75",
  },
  {
    classes: "row-span-2",
    cntClasses: "p-4",
    text:
      "Junto a Tatiana, ayudamos a los peruanos a disfrutar el presente mientras construimos juntos su futuro.",
    bg: "/static/img/colaboradores/2.jpg",
    logo: "/static/img/logos/financiera-oh-logo.png",
    titulo: "Financiera Oh",
    logoW: "175",
    logoH: "72",
    altura: "-50",
  },
  {
    classes: "row-span-2",
    cntClasses: "p-4",
    text:
      "Junto a Luis, potenciamos a nuestros colaboradores (de Intercorp) para que transformen el futuro.",
    bg: "/static/img/colaboradores/15.jpg",
    logo: "/static/img/logos/ucic-logo.png",
    titulo: "UCIC",
    logoW: "160",
    logoH: "72",
    altura: "75",
  },
  {
    classes: "row-span-2",
    cntClasses: "p-4",
    text:
      "Junto a Daniel, hacemos posible que nuestros estudiantes en todo el Perú transformen sus vidas para siempre.",
    bg: "/static/img/colaboradores/4.jpg",
    logo: "/static/img/logos/zegel-logo.png",
    titulo: "Zegel",
    logoW: "97",
    logoH: "72",
    altura: "-250",
  },
  {
    classes: "row-span-2",
    cntClasses: "p-4",
    text:
      "Junto a Claudia, acompañamos a las personas a encontrar y vivir su estilo soñado.",
    bg: "/static/img/colaboradores/5.jpg",
    logo: "/static/img/logos/oeshle-logo.png",
    titulo: "Oeshle",
    logoW: "121",
    logoH: "72",
    altura: "250",
  },
  {
    classes: "h-screen-1/4",
    cntClasses: "p-4",
    text:
      "Junto a Jairo, creamos momentos únicos a través de la experiencia del sabor.",
    bg: "/static/img/colaboradores/8.jpg",
    logo: "/static/img/logos/ngr-logo.png",
    titulo: "NGR",
    logoW: "139",
    logoH: "72",
    altura: "-150",
  },
  {
    classes: "h-screen-1/4",
    cntClasses: "p-4",
    text:
      "Junto a Kethy, hacemos de un día común, una historia extraordinaria.",
    bg: "/static/img/colaboradores/8.jpg",
    logo: "/static/img/logos/cineplanet-logo.png",
    titulo: "Cineplanet",
    logoW: "247",
    logoH: "72",
    altura: "150",
  },
  {
    classes: "h-screen-1/4",
    cntClasses: "p-4",
    text: "Junto a Rocío, hacemos que el Perú supere toda expectativa.",
    bg: "/static/img/colaboradores/7.jpg",
    logo: "/static/img/logos/casa-andina-logo.png",
    titulo: "Casa Andina",
    logoW: "116",
    logoH: "72",
    altura: "-150",
  },
  {
    classes: "h-screen-1/4",
    cntClasses: "p-4",
    text:
      "Junto a Javier, acercamos a los peruanos a las mejores oportunidades de inversión para construir su futuro.",
    bg: "/static/img/colaboradores/9.jpg",
    logo: "/static/img/logos/interfondos-logo.png",
    titulo: "Interfondos",
    logoW: "180",
    logoH: "72",
    altura: "150",
  },
];

const sections_2 = [
  {
    classes: "h-screen-1/4",
    cntClasses: "p-2",
    text:
      "Junto a Mariela, transformamos los lugares donde existimos, buscando mejorar la calidad de vida de todos.",
    bg: "/static/img/colaboradores/10.jpg",
    logo: "/static/img/logos/intercorp-retail-logo.png",
    titulo: "Intercorp Retail",
    logoW: "199",
    logoH: "72",
    altura: "-75",
  },
  {
    classes: "row-span-2 col-span-2",
    cntClasses: "p-2 w-1/2",
    text:
      "Junto a Florencia, acompañamos a los peruanos a alcanzar sus sueños, hoy.",
    bg: "/static/img/colaboradores/12.jpg",
    logo: "/static/img/logos/interbank-logo.png",
    titulo: "Interbank",
    logoW: "162",
    logoH: "72",
    altura: "100",
  },
  {
    classes: "row-span-2",
    cntClasses: "p-4",
    text:
      "Junto a José Luis, creamos espacios públicos donde todos puedan ser felices.",
    bg: "/static/img/colaboradores/13.jpg",
    logo: "/static/img/logos/realplaza-logo.png",
    titulo: "Real Plaza",
    logoW: "208",
    logoH: "72",
    altura: "-75",
  },
  {
    classes: "h-screen-1/4",
    cntClasses: "p-4",
    text:
      "Junto a Erick, hacemos posible que nuestros estudiantes en todo el Perú transformen sus vidas para siempre.",
    bg: "/static/img/colaboradores/11.jpg",
    logo: "/static/img/logos/utp-logo.png",
    titulo: "UTP",
    logoW: "184",
    logoH: "72",
    altura: "250",
  },
  {
    classes: "row-span-2",
    cntClasses: "p-4",
    text:
      "Junto a Edith, acompañamos a las familias peruanas a lograr su hogar soñado.",
    bg: "/static/img/colaboradores/14.jpg",
    logo: "/static/img/logos/promart-logo.png",
    titulo: "Promart",
    logoW: "184",
    logoH: "72",
    altura: "-150",
  },
  {
    classes: "row-span-2",
    cntClasses: "p-4",
    text:
      "Junto a Orlando, hacemos más fácil que lxs peruanxs avancen segurxs.",
    bg: "/static/img/colaboradores/3.jpg",
    logo: "/static/img/logos/interseguro-logo.png",
    titulo: "Interseguro",
    logoW: "170",
    logoH: "72",
    altura: "150",
  },
  {
    classes: "row-span-2 col-span-2",
    cntClasses: "p-4 w-1/2",
    text:
      "Junto a Joselyn, inspiramos y formamos a nuestros estudiantes en todo el país, para que transformen el mundo.",
    bg: "/static/img/colaboradores/16.jpg",
    logo: "/static/img/logos/innova-logo.png",
    titulo: "Innova School",
    logoW: "170",
    logoH: "72",
    altura: "-150",
  },
];

const CollageEmployees = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  const revealRefs2 = useRef([]);
  revealRefs2.current = [];

  useEffect(() => {
    revealRefs.current.forEach((el, index, altura) => {
      let av = sections[index];
      let alt = av.altura;

      gsap.from(el, {
        duration: 0.5,
        y: alt,
        ease: "none",
        scrollTrigger: {
          id: `section-${index + 1}`,
          //trigger: el,
          trigger: "#colaboradores",
          start: "top center",
          end: "top top",
          toggleActions: "play reverse none none",
          //markers: true,
          scrub: 1,
        },
      });

      // gsap.from(el, {
      //   duration: 0.5,
      //   y: -{ alt },
      //   //autoAlpha: 1,
      //   ease: "none",
      //   scrollTrigger: {
      //     id: `section-${index + 1}`,
      //     //trigger: el,
      //     trigger: "#colaboradores",
      //     start: "top  top+=1px",
      //     end: "bottom top",
      //     toggleActions: "play reverse play reverse",
      //     markers: true,
      //     scrub: 1,
      //   },
      // });
    });

    revealRefs2.current.forEach((el, index, altura) => {
      let av = sections[index];
      let alt = av.altura;

      gsap.from(el, {
        duration: 0.5,
        y: alt,
        ease: "none",
        scrollTrigger: {
          id: `section-${index + 1}`,
          //trigger: el,
          trigger: "#colaboradores2",
          start: "top center",
          end: "top top",
          toggleActions: "play reverse none none",
          //markers: true,
          scrub: 1,
        },
      });

      // gsap.from(el, {
      //   duration: 0.5,
      //   y: -{ alt },
      //   //autoAlpha: 1,
      //   ease: "none",
      //   scrollTrigger: {
      //     id: `section-${index + 1}`,
      //     //trigger: el,
      //     trigger: "#colaboradores2",
      //     start: "top  top+=1px",
      //     end: "bottom top",
      //     toggleActions: "play none none none",
      //     //markers: true,
      //     scrub: 1,
      //   },
      // });
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const addToRefs2 = (el) => {
    if (el && !revealRefs2.current.includes(el)) {
      revealRefs2.current.push(el);
    }
  };

  return (
    <>
      {" "}
      <section className="relative z-20 App" id="colaboradores">
        <div className="hidden lg:grid grid-cols-4 grid-rows-4 text-white text-center colaboradores">
          {sections.map(
            ({ classes, cntClasses, text, bg, logo, titulo, logoW, logoH }) => (
              <div className={`${classes}`} key={titulo} ref={addToRefs}>
                <figure
                  className="relative w-full h-full bg-no-repeat bg-center bg-cover flex flex-row justify-center items-center"
                  style={{
                    backgroundImage: `url(${bg})`,
                  }}
                >
                  <figcaption className="absolute inset-0 m-auto flex flex-row justify-center items-center">
                    <div className={`${cntClasses}`}>
                      <p className="mb-1">{text}</p>
                      <img
                        className="inline-block"
                        src={logo}
                        alt={titulo}
                        width={logoW}
                        height={logoH}
                      />
                    </div>
                  </figcaption>
                </figure>
              </div>
            )
          )}
        </div>
      </section>
      <section className="relative z-30 App" id="colaboradores2">
        <div className="hidden lg:grid grid-cols-4 grid-rows-4 text-white text-center colaboradores">
          {sections_2.map(
            ({ classes, cntClasses, text, bg, logo, titulo, logoW, logoH }) => (
              <div className={`${classes}`} key={titulo} ref={addToRefs2}>
                <figure
                  className="relative w-full h-full bg-no-repeat bg-center bg-cover flex flex-row justify-center items-center"
                  style={{
                    backgroundImage: `url(${bg})`,
                  }}
                >
                  <figcaption className="absolute inset-0 m-auto flex flex-row justify-center items-center">
                    <div className={`${cntClasses}`}>
                      <p className="mb-1">{text}</p>
                      <img
                        className="inline-block"
                        src={logo}
                        alt={titulo}
                        width={logoW}
                        height={logoH}
                      />
                    </div>
                  </figcaption>
                </figure>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
};

export default CollageEmployees;

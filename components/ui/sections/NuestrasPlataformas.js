import React from "react";
import { render } from "react-dom";
import Tabs from "../tabs/Tabs";
import Tab from "../tabs/Tab";
import { ItemLogo } from "./ItemLogo";

const plataformas = [
  {
    title: "Financiero",
    subtitle: "Llegamos a más de xxx familias peruanas en x ciudades del Perú.",
    icon: "icon-columns",
    text: "Llegamos a más de xxx familias peruanas en x ciudades del Perú.",
    logos: [
      {
        nombre: "Interbank",
        img: "/static/img/logos/interbank.png",
        imgWidth: 152,
        imgHeight: 28,
      },
      {
        nombre: "Interseguro",
        img: "/static/img/logos/interseguro.png",
        imgWidth: 172,
        imgHeight: 29,
      },
      {
        nombre: "Interfondos",
        img: "/static/img/logos/interfondos.png",
        imgWidth: 178,
        imgHeight: 31,
      },
      {
        nombre: "Inteligo Bank",
        img: "/static/img/logos/inteligo-bank.png",
        imgWidth: 149,
        imgHeight: 30,
      },
      {
        nombre: "Inteligo SAB",
        img: "/static/img/logos/inteligo-sab.png",
        imgWidth: 143,
        imgHeight: 30,
      },
      {
        nombre: "Express Net",
        img: "/static/img/logos/express-net.png",
        imgWidth: 99,
        imgHeight: 49,
      },
      {
        nombre: "Tebca",
        img: "/static/img/logos/tebca.png",
        imgWidth: 85,
        imgHeight: 50,
      },
    ],
  },
  {
    title: "Retail",
    subtitle: "Llegamos a más de xxx familias peruanas en x ciudades del Perú.",
    icon: "icon-bags",
    text: "Llegamos a más de xxx familias peruanas en x ciudades del Perú.",
    logos: [
      {
        nombre: "InRetail",
        img: "/static/img/logos/inretail.png",
        imgWidth: 152,
        imgHeight: 34,
      },
      {
        nombre: "Supermercados Peruanos (Plaza Vea, Mass, Vivanda, Economax)",
        img: "/static/img/logos/supermercados-peruanos.png",
        imgWidth: 164,
        imgHeight: 40,
      },
      {
        nombre: "Real Plaza",
        img: "/static/img/logos/realplaza.png",
        imgWidth: 96,
        imgHeight: 80,
      },
      {
        nombre: "Promart",
        img: "/static/img/logos/promart.png",
        imgWidth: 160,
        imgHeight: 22,
      },
      {
        nombre: "Oechsle",
        img: "/static/img/logos/oechsle.png",
        imgWidth: 66,
        imgHeight: 48,
      },
      {
        nombre: "Financiera Oh!",
        img: "/static/img/logos/financiera-oh.png",
        imgWidth: 168,
        imgHeight: 23,
      },
    ],
  },
  {
    title: "Educación",
    subtitle: "Llegamos a más de xxx familias peruanas en x ciudades del Perú.",
    icon: "icon-toga",
    text: "Llegamos a más de xxx familias peruanas en x ciudades del Perú.",
    logos: [
      {
        nombre: "Innova Schools",
        img: "/static/img/logos/innnova-school.png",
        imgWidth: 103,
        imgHeight: 48,
      },
      {
        nombre: "Colectivo 23",
        img: "/static/img/logos/colectivo-23.png",
        imgWidth: 149,
        imgHeight: 38,
      },
      {
        nombre: "InLearning",
        img: "/static/img/logos/inlearning.png",
        imgWidth: 146,
        imgHeight: 50,
      },
      {
        nombre: "Zegel IPAE",
        img: "/static/img/logos/zegel-ipae.png",
        imgWidth: 40,
        imgHeight: 59,
      },
      {
        nombre: "UTP",
        img: "/static/img/logos/utp.png",
        imgWidth: 170,
        imgHeight: 45,
      },
      {
        nombre: "Idat",
        img: "/static/img/logos/idat.png",
        imgWidth: 36,
        imgHeight: 61,
      },
      {
        nombre: "Perú Champs",
        img: "/static/img/logos/peru-champs.png",
        imgWidth: 160,
        imgHeight: 21,
      },
    ],
  },
  {
    title: "Salud",
    subtitle: "Llegamos a más de xxx familias peruanas en x ciudades del Perú.",
    icon: "icon-hands",
    text: "Llegamos a más de xxx familias peruanas en x ciudades del Perú.",
    logos: [
      {
        nombre: "Farmacias Peruanas (Inkafarma, Mifarma)",
        img: "/static/img/logos/farmacias-peruanas.png",
        imgWidth: 248,
        imgHeight: 85,
      },
      {
        nombre: "Química Suiza",
        img: "/static/img/logos/quimica-suiza.png",
        imgWidth: 205,
        imgHeight: 23,
      },
      {
        nombre: "Cifarma",
        img: "/static/img/logos/cifarma.png",
        imgWidth: 164,
        imgHeight: 35,
      },
      {
        nombre: "Aviva",
        img: "/static/img/logos/aviva.png",
        imgWidth: 107,
        imgHeight: 40,
      },
    ],
  },
  {
    title: "Nexus",
    subtitle: "Llegamos a más de xxx familias peruanas en x ciudades del Perú.",
    icon: "icon-stats",
    text: "Llegamos a más de xxx familias peruanas en x ciudades del Perú.",
    logos: [
      {
        nombre: "Nexus Group",
        img: "/static/img/logos/nexus-group.png",
        imgWidth: 250,
        imgHeight: 80,
      },
      {
        nombre: "Cineplanet",
        img: "/static/img/logos/cineplanet.png",
        imgWidth: 159,
        imgHeight: 37,
      },
      {
        nombre: "Casa Andina",
        img: "/static/img/logos/casa-andina.png",
        imgWidth: 112,
        imgHeight: 63,
      },
      {
        nombre: "San Miguel Industrias",
        img: "/static/img/logos/san-miguel-industrias.png",
        imgWidth: 250,
        imgHeight: 80,
      },
      {
        nombre: "Intralot",
        img: "/static/img/logos/intralot.png",
        imgWidth: 143,
        imgHeight: 40,
      },
      {
        nombre:
          "NG Restaurants (Bembos, Popeyes, Dunkin Donuts, Don Belisario, Papa Johns, China Wok)",
        img: "/static/img/logos/ngr.png",
        imgWidth: 119,
        imgHeight: 48,
      },
    ],
  },
  {
    title: "Servicios Corporativos",
    subtitle: "Llegamos a más de xxx familias peruanas en x ciudades del Perú.",
    icon: "icon-columns",
    text: "Llegamos a más de xxx familias peruanas en x ciudades del Perú.",
    logos: [
      {
        nombre: "Urbi",
        img: "/static/img/logos/urbi.png",
        imgWidth: 77,
        imgHeight: 51,
      },
      {
        nombre: "UCIC",
        img: "/static/img/logos/ucic.png",
        imgWidth: 118,
        imgHeight: 36,
      },
      {
        nombre: "La Victoria Lab",
        img: "/static/img/logos/la-victoria-lab.png",
        imgWidth: 117,
        imgHeight: 56,
      },
      {
        nombre: "Intercorp Management",
        img: "/static/img/logos/interbank.png",
        imgWidth: 152,
        imgHeight: 28,
      },
      {
        nombre: "IR Management",
        img: "/static/img/logos/ir-management.png",
        imgWidth: 250,
        imgHeight: 80,
      },
    ],
  },
];

export const NuestrasPlataformas = () => (
  <>
    <div className="hidden lg:block w-full">
      <Tabs classes="mb-5">
        {plataformas.map(({ title, subtitle, icon, text, logos }) => (
          <Tab
            title={`${title}`}
            subtitle={`${subtitle}`}
            icon={`${icon}`}
            key={title}
          >
            <p className="mb-5">{text}</p>
            <div className="lg:flex lg:flex-row lg:flex-wrap plataformas">
              {logos.map(({ img, nombre, imgWith, imgHeight }) => (
                <ItemLogo
                  img={img}
                  imgW={imgWith}
                  imgH={imgHeight}
                  name={nombre}
                  key={nombre}
                />
              ))}
            </div>
          </Tab>
        ))}
      </Tabs>
      <div className="flex flex-row justify-center">
        <a
          className="inline-block rounded-xl border border-dashed border-blue-500 text-blue-500 px-5 py-2 leading-none"
          href="#"
        >
          Ver todas las empresas
        </a>
      </div>
    </div>

    <div className="lg:hidden w-full"></div>
  </>
);

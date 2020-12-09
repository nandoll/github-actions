import React, { useState } from "react";
import Modal from "react-modal";

import { MainLayout } from "../components/ui/layout/MainLayout";
import { CategoriesLeftSidebar } from "../components/ui/sidebar/CategoriesLeftSidebar";
import { PostCardExterno } from "../components/ui/card/PostCardExterno";
import { RadioMediosLeftSidebar } from "../components/ui/sidebar/RadioMediosLeftSidebar";
import { getAllCats, getAllNews } from "../lib/api";

Modal.setAppElement("body");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const EnLosMedios = ({ data, cats }) => {
  let subtitle;

  const [openModal, setOpenModal] = useState(false);
  const [externalLink, setexternalLink] = useState("");

  const handleOpenModal = (link) => {
    setOpenModal(true);
    setexternalLink(link);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleRequestExternalLink = (e) => {
    console.log(e.target);
    window.open(externalLink);
    setOpenModal(false);
  };

  const handleAfterOpenModal = () => {
    subtitle.style.color = "#f00";
  };

  return (
    <MainLayout>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:full mx-auto flex flex-wrap">
            {/* Sidebar */}
            <div className="lg:w-1/4 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <RadioMediosLeftSidebar radioName="en-los-medios" />
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
              <div className="flex">
                <div className="w-full h-12">1 resultados</div>
              </div>
              <div className="flex flex-wrap -m-4">
                {data?.map((post) => (
                  <PostCardExterno
                    key={post?.id}
                    post={post}
                    catID={post?.id_categoria}
                    bloque={"md:w-1/3"}
                    handleOpenModal={handleOpenModal}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={openModal}
        onAfterOpen={handleAfterOpenModal}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel="Ejemplo Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={handleCloseModal}>Seguir en intercorp</button>
        <button onClick={handleRequestExternalLink}>Sí</button>
        <div>Alerta</div>
      </Modal>
    </MainLayout>
  );
};

export async function getStaticProps(context) {
  try {
    const idioma = context?.locale === "en" ? 1 : 0;

    const raw = {
      id_idioma: idioma,
      tipo_articulo: "M",
      categorias: [],
    };

    const data = await getAllNews(raw);
    const cats = await getAllCats();

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
  } catch (error) {
    console.error(error);
  }
}

export default EnLosMedios;

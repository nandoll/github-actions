import React, { useState } from "react";
import { useRouter } from "next/router";
import { MainLayout } from "../components/ui/layout/MainLayout";
import { CategoriesLeftSidebar } from "../components/ui/sidebar/CategoriesLeftSidebar";
import { PostCardExterno } from "../components/ui/card/PostCardExterno";

const EnLosMedios = ({ posts, cats }) => {
  const router = useRouter();

  const { items: noticias, count, total, limit } = posts;
  const { items: categorias } = cats;

  const [radioArticle, setRadioArticle] = useState("en-los-medios");

  const handleMedios = (noticias) => {
    return noticias.filter((post) => post.featured && console.log(post));
  };

  handleMedios(noticias);

  const handleChangeArticle = (e) => {
    setRadioArticle(e.target.value);

    console.log(e.target.value);
    router.push(`/${e.target.value}`);
  };
  return (
    <MainLayout>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:full mx-auto flex flex-wrap">
            {/* Sidebar */}
            <div className="lg:w-1/4 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h1>Tipo de árticulo</h1>
              <form onSubmit={handleChangeArticle}>
                <label
                  htmlFor="radNoticias"
                  className="block uppercase cursor-pointer"
                >
                  <input
                    className="mr-2"
                    name="articulo"
                    checked
                    type="radio"
                    id="radNoticias"
                    value="noticias"
                    checked={radioArticle === "noticias"}
                    onChange={handleChangeArticle}
                  />
                  Noticias
                </label>
                <label
                  htmlFor="radMedios"
                  className="block uppercase cursor-pointer"
                >
                  <input
                    className="mr-2"
                    name="articulo"
                    type="radio"
                    id="radMedios"
                    value="en-los-medios"
                    checked={radioArticle === "en-los-medios"}
                    onChange={handleChangeArticle}
                  />
                  En los medios
                </label>
              </form>

              <h1 className="my-3">Categorias</h1>
              {categorias.map((cat) => (
                <CategoriesLeftSidebar key={cat._id} cat={cat} />
              ))}
            </div>
            {/* Panel Cards */}
            <div className="lg:w-3/4 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 -mt-4">
              <div className="flex">
                <div className="w-full h-12">1 de {total} resultados</div>
              </div>
              <div className="flex flex-wrap -m-4">
                {noticias.map(
                  (post) =>
                    post.featured && (
                      <PostCardExterno
                        key={post._id}
                        post={post}
                        cats={categorias}
                        bloque={"md:w-1/3"}
                      />
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

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

export default EnLosMedios;

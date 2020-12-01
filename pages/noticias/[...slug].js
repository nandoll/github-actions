import React from "react";
import { useRouter } from "next/router";
import { MainLayout } from "../../components/ui/layout/MainLayout";
import { format } from "date-fns";
import { es } from "date-fns/locale";
// import parse from 'html-react-parser';

function Noticia({ item }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:full mx-auto flex flex-wrap">
            <div className="lg:w-1/6 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <p>Redes sociales</p>
            </div>
            <div className="lg:w-5/6 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 -mt-4">
              <h1 className="text-blue-500 uppercase font-semibold text-base">
                {item?.categoria}
              </h1>
              <h1 className="font-serif text-4xl leading-tighter my-5">
                {" "}
                {item?.name}{" "}
              </h1>
              <div className="my-5">
                <h1 className="text-gray-500 text-base font-sans uppercase">
                  {format(new Date(Date.now()), "d MMM yyyy", { locale: es })}
                </h1>
                {/* <img src={ item["main-image"].url } alt=""/> */}
                <img src="/static/bg/bg2.png" alt="" />
              </div>
              <div className="text-lg">
                {/* { parse(item["post-body"]) } */}
                <p>
                  {" "}
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa, vitae? Obcaecati officiis odio ullam nemo dolore
                  officia optio, veniam omnis natus, totam asperiores ea
                  voluptatem at alias minima, nihil qui!{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export async function getStaticProps({ params }) {
  // console.log("\nparametros: " + JSON.stringify( params))
  // console.log("\nparametros tamaño: " + Object.keys(params).length)
  try {
    if (Object.keys(params).length) {
      const [, id] = params.slug;

      const res = await fetch(
        `https://api.webflow.com/collections/5fa2c45087b41f0f9b713464/items/${id}?api_version=1.0.0&access_token=ed2770ed568f942e403fab9300fa760b97eadc3ea3bb5901e025deb8cd4cb3ee`
      );

      const post = await res.json();

      const [item] = post?.items;

      return {
        props: {
          item,
        },
      };
    }
  } catch (error) {
    console.error();
  }
  return {
    props: {
      item: {
        name: "",
        categoria: "",
      },
    },
  };
}

export async function getStaticPaths() {
  try {
    const res = await fetch(
      `https://api.webflow.com/collections/5fa2c45087b41f0f9b713464/items?api_version=1.0.0&access_token=ed2770ed568f942e403fab9300fa760b97eadc3ea3bb5901e025deb8cd4cb3ee`
    );

    const posts = await res.json();

    const paths = posts?.items.map(({ slug, _id }) => ({
      params: { slug: [slug, _id] },
    }));

    return {
      fallback: true,
      paths,
    };
  } catch (error) {
    console.error();
  }
}

export default Noticia;

import React from "react";
import { useRouter } from "next/router";
import { MainLayout } from "../../components/ui/layout/MainLayout";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import parse from "html-react-parser";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PostCard } from "../../components/ui/card/PostCard";

function Noticia({ item, posts, cats }) {
  const settings = {
    dots: false,
    infinite: true,
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
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

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

              <div className="grid justify-items-start py-4 my-4 min-h-64 ">
                <a className="flex h-10 w-10 items-center justify-center border rounded-full border-gray-500 text-gray-700 px-5 py-2 leading-none">
                  <i className="inline-block  icon-linkedin"></i>
                </a>
                <a className="flex h-10 w-10 items-center justify-center border rounded-full border-gray-500 text-gray-700 px-5 py-2 leading-none">
                  <i className="inline-block icon-twitter"></i>
                </a>
                <a className="flex h-10 w-10 items-center justify-center border rounded-full border-gray-500 text-gray-700 px-5 py-2 leading-none">
                  <i className="inline-block icon-facebook"></i>
                </a>
                <a className="flex h-10 w-10 items-center justify-center border rounded-full border-gray-500 text-gray-700 px-5 py-2 leading-none">
                  <i className="inline-block icon-copy"></i>
                </a>
              </div>

              {/*  icon-facebook */}
              {/* <p>Redes sociales</p> */}
            </div>
            <div className="lg:w-5/6 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 mt-10 md:pl-40">
              <h1 className="text-blue-500 uppercase font-semibold text-base half-dashed">
                Reconocimientos
              </h1>
              <h1 className="font-serif text-4xl leading-snug my-5 text-black">
                {item?.name}
              </h1>
              <time className="flex my-8 text-gray-500 text-base font-sans uppercase ">
                {format(new Date(Date.now()), "d MMM yyyy", { locale: es })}
              </time>
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
              <div className="text-lg my-8">{parse(item["post-body"])}</div>

              {/* carrusel */}
              <h2 className="my-8 text-blue-500 font-serif font-black text-xl lg:text-2xl leading-none">
                Acciones de impacto
              </h2>
              <Slider {...settings}>
                {posts.items.map((post) => (
                  <PostCard
                    key={post._id}
                    post={post}
                    cats={cats.items}
                    bloque=""
                  />
                ))}
              </Slider>
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

  if (Object.keys(params).length) {
    const resPost = await fetch(
      "https://api.webflow.com/collections/5fa2c45087b41f0f9b713464/items?limit=9&offset=0&api_version=1.0.0&access_token=ed2770ed568f942e403fab9300fa760b97eadc3ea3bb5901e025deb8cd4cb3ee"
    );
    const posts = await resPost.json();

    const resCat = await fetch(
      "https://api.webflow.com/collections/5fabfcf448583971dcbcc5c4/items?api_version=1.0.0&access_token=ed2770ed568f942e403fab9300fa760b97eadc3ea3bb5901e025deb8cd4cb3ee"
    );
    const cats = await resCat.json();

    const [, id] = params.slug;

    const res = await fetch(
      `https://api.webflow.com/collections/5fa2c45087b41f0f9b713464/items/${id}?api_version=1.0.0&access_token=ed2770ed568f942e403fab9300fa760b97eadc3ea3bb5901e025deb8cd4cb3ee`
    );

    const post = await res.json();

    const [item] = post?.items;

    return {
      props: {
        item,
        posts,
        cats,
      },
    };
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
}

export default Noticia;

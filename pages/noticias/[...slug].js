import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { MainLayout } from '../../components/ui/layout/MainLayout';
// import formatDistanceFromNow from 'date-fns/formatDistanceToNow'
import { format } from 'date-fns';

import {es} from 'date-fns/locale';
import parse from 'html-react-parser';


function Noticia ({ post }) {
  // console.log(post)
  const router = useRouter();
  //ojo: slug[0:categoria - 1:slug - 2:id]
  // const { [0]:categoria } = router.query

  // console.log(categoria)

  if(router.isFallback){
    return <div>Loading...</div>
  };

  // const { name, ["created-on"]:creacion, ["post-body"]:cuerpo, ['main-image']:ruta, categoria } = items;
  
  

  return (
    <MainLayout>
      {/* <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto" >
          <div className="lg:full mx-auto flex flex-wrap" >
            <div className="lg:w-1/6 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0" >
              Lateral
            </div>
            <div className="lg:w-5/6 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 -mt-4" >
              <h1 className="text-blue-500 uppercase font-semibold text-base">{ categoria }</h1>
              

              <h1 className="font-serif text-4xl leading-tighter my-5"> {name} </h1>
              

              <h1 className="text-gray-500 text-base font-sans uppercase">{format(new Date(creacion), "d MMM yyyy" , {locale:es})}</h1>
              
              <div className="my-5">
                <img src={ruta.url} alt=""/>
              </div>
              <div className="text-lg">
                { cuerpo != null && parse(cuerpo) }
              </div>                                          
              
            </div>
          </div>          
        </div>
      </section>
      
      */}
    </MainLayout>
  );
};
// This also gets called at build time

export async function getStaticProps({ params }) {
  
  const { slug } = params;
  
  if(slug?.length ){
    try {
      const res = await fetch(`https://api.webflow.com/collections/5fa2c45087b41f0f9b713464/items/5fb27f393864732211ba2a20?api_version=1.0.0&access_token=ed2770ed568f942e403fab9300fa760b97eadc3ea3bb5901e025deb8cd4cb3ee`);
      const post = await res.json();
      
      return { props: { post }  };
      
      
    } catch (error) {
      // The Twitter API most likely died
      console.error(error);
      return { props: {} };
    }
  }
  else{
    return { props: {} };
  }
  
  // console.log(id)
  // const res = await fetch(`https://api.webflow.com/collections/5fa2c45087b41f0f9b713464/items/${id}?api_version=1.0.0&access_token=ed2770ed568f942e403fab9300fa760b97eadc3ea3bb5901e025deb8cd4cb3ee`);
  // const post = await res.json();
  // const [items] = post?.items;  
  // return { props: { items }  };
};

export async function getStaticPaths() {  

  const res = await fetch(`https://api.webflow.com/collections/5fa2c45087b41f0f9b713464/items?api_version=1.0.0&access_token=ed2770ed568f942e403fab9300fa760b97eadc3ea3bb5901e025deb8cd4cb3ee`);
  const posts = await res.json();
    
  const paths = posts?.items.map(( {slug, _id} ) => ({
    params: { slug: [slug, _id],}
    }));

  return { 
    fallback: true ,
    paths,
  }    
};


export default Noticia
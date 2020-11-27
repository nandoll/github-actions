import React from 'react'

import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'

import {es} from 'date-fns/locale'
import { format } from 'date-fns'

import parse from 'html-react-parser'

import { MainLayout } from '../../components/ui/layout/MainLayout';

function Noticia ( {items, locale, locales} ) {
  
  const router = useRouter();
  const { defaultLocale, isFallback, query } = router

  if(isFallback){
    return <div>Loading...</div>
  }

  const { name, ["created-on"]:creacion, ["post-body"]:cuerpo, ['main-image']:ruta, categoria } = items

  return (
    <MainLayout>
      <Head>
        <title>Noticia  </title>        
      </Head>

      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto" >
          <div className="lg:full mx-auto flex flex-wrap" >
            <div className="lg:w-1/6 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0" >
              Lateral
            </div>
            <div className="lg:w-5/6 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 -mt-4" >
            
              <p>Current slug: {query.slug}</p>
              <p>Current locale: {locale}</p>
              <p>Default locale: {defaultLocale}</p>
              <p>Configured locales: {JSON.stringify(locales)}</p>

              <h1 className="text-blue-500 uppercase font-semibold text-base">{ categoria }</h1>
              

              <h1 className="font-serif text-4xl leading-tighter my-5"> {name} </h1>
              

              <h1 className="text-gray-500 text-base font-sans uppercase">{format(new Date(creacion), "d MMM yyyy" , {locale:es})}</h1>
              
              <div className="my-5" >
                <Image
                  src={ruta?.url}
                  alt="Picture of the author"                                    
                  layout="responsive"
                  width='1920'
                  height='1080'
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                />                
              </div>
              <div className="text-lg">
                { cuerpo != null && parse(cuerpo) }
              </div>                                                        
            </div>
          </div>          
        </div>
      </section>           
    </MainLayout>
  )
}

export async function getStaticProps({ params, locale, locales }) {

  const [,id] = params.slug;
  const res = await fetch(`https://api.webflow.com/collections/5fa2c45087b41f0f9b713464/items/${id}?api_version=1.0.0&access_token=ed2770ed568f942e403fab9300fa760b97eadc3ea3bb5901e025deb8cd4cb3ee`);
  const post = await res.json();
  const [items] = post.items
  
  return { props: {
    items,
    locale,
    locales
  }}
}

export async function getStaticPaths({ locales }) {  

  const res = await fetch(`https://api.webflow.com/collections/5fa2c45087b41f0f9b713464/items?api_version=1.0.0&access_token=ed2770ed568f942e403fab9300fa760b97eadc3ea3bb5901e025deb8cd4cb3ee`)
  const posts = await res.json()
  const { items:noticias } = posts  
  const [es, en]  = locales

  const paths = noticias.map(( post ) => ({
    params: { 
      lang: es,
      slug: [post.slug],
      id: [post._id]
    }}))

  return{ 
    fallback: true ,
    paths,
  }
}

export default Noticia
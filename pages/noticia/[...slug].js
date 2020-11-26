import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

import { useRouter } from 'next/router'
import { MainLayout } from '../../components/ui/layout/MainLayout';
// import formatDistanceFromNow from 'date-fns/formatDistanceToNow'
import { format } from 'date-fns'

import {es} from 'date-fns/locale'
import parse from 'html-react-parser'



function Noticia ( props ) {
  //pinta en consola web
  const router = useRouter();
  const { defaultLocale, isFallback, query } = router

  //ojo: slug[0:categoria - 1:slug - 2:id]
  // const { [0]:categoria } = router.query

  // console.log(categoria)

  if(isFallback){
    return <div>Loading...</div>
  }

  const { name, ["created-on"]:creacion, ["post-body"]:cuerpo, ['main-image']:ruta, categoria } = props.post.items[0]  
  
  
  

  return (
    <MainLayout>
      <Head>
        <title>Noticia : {name} </title>        
      </Head>

      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto" >
          <div className="lg:full mx-auto flex flex-wrap" >
            <div className="lg:w-1/6 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0" >
              Lateral
            </div>
            <div className="lg:w-5/6 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 -mt-4" >
            
              <p>Current slug: {query.slug}</p>
              <p>Current locale: {props.locale}</p>
              <p>Default locale: {defaultLocale}</p>
              <p>Configured locales: {JSON.stringify(props.locales)}</p>

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
// This also gets called at build time
export async function getStaticProps({ params, locale, locales }) {
  // params contains the post `id`.  
  
  const [,id] = params.slug  
  
  // Pinta en consola node
  // console.log(params)
  // console.log(locale)
  // console.log(locales)
  
  
  
  
  
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://api.webflow.com/collections/5fa2c45087b41f0f9b713464/items/${id}?api_version=1.0.0&access_token=ed2770ed568f942e403fab9300fa760b97eadc3ea3bb5901e025deb8cd4cb3ee`)
  const post = await res.json()

  // Pass post data to the page via props
  
  return { props: {post,locale, locales}  }
}



export async function getStaticPaths( {params, locale, locales, post}) {  
  
  // Pinta en consola node
  const res = await fetch(`https://api.webflow.com/collections/5fa2c45087b41f0f9b713464/items?api_version=1.0.0&access_token=ed2770ed568f942e403fab9300fa760b97eadc3ea3bb5901e025deb8cd4cb3ee`)
  const posts = await res.json()
  const { items:noticias } = posts
  
  const [es, en]  = locales

  
  // console.log(es)
  // // Get the paths we want to pre-render based on posts
  const paths = noticias.map((post) => ({
    params: { 
      lang: es,
      slug: [post.slug],
      id: [post._id]
    },
    
  })  
  ) 
  // console.log(JSON.stringify(paths)) 

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  
  return { 
    fallback: true ,
    paths,
  }    
}


export default Noticia
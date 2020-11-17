import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import { MainLayout } from '../../components/ui/layout/MainLayout';
// import formatDistanceFromNow from 'date-fns/formatDistanceToNow'
import { format } from 'date-fns'

import {es} from 'date-fns/locale'
import parse from 'html-react-parser'


function Noticia ({ post }) {
  const router = useRouter();
  //ojo: slug[0:categoria - 1:slug - 2:id]
  // const { [0]:categoria } = router.query.slug

  if(router.isFallback){
    return <div>Loading...</div>
  }

  const { name, ["created-on"]:creacion, ["post-body"]:cuerpo, ['main-image']:ruta, categoria } = post.items[0]
  
  

  return (
    <MainLayout>
      <section className="text-gray-700 body-font">
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
      
     
    </MainLayout>
  )
}
// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.  
  const [,,id] = params.slug  
  
  
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://api.webflow.com/collections/5fa2c45087b41f0f9b713464/items/${id}?api_version=1.0.0&access_token=ed2770ed568f942e403fab9300fa760b97eadc3ea3bb5901e025deb8cd4cb3ee`)
  const post = await res.json()

  // Pass post data to the page via props
  
  return { props: {post}  }
}

export async function getStaticPaths() {  
  const res = await fetch(`https://api.webflow.com/collections/5fa2c45087b41f0f9b713464/items?api_version=1.0.0&access_token=ed2770ed568f942e403fab9300fa760b97eadc3ea3bb5901e025deb8cd4cb3ee`)
  const posts = await res.json()
  const { items:noticias } = posts

  // // Get the paths we want to pre-render based on posts
  const paths = noticias.map((post) => ({
    params: { 
      slug: [post.slug, post._id ]
    },         
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  
  return { 
    fallback: true ,
    paths,
  }    
}


export default Noticia
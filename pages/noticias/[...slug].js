import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import { MainLayout } from '../../components/ui/layout/MainLayout';
import parse from 'html-react-parser'


function Noticia ({ post }) {
  const router = useRouter();

  if(router.isFallback){
    return <div>Loading...</div>
  }

  
  

  return (
    <MainLayout>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto" style={{border: "1px solid black"}} >
          <div className="lg:full mx-auto flex flex-wrap" style={{border: "1px solid purple"}}>
            <div className="lg:w-1/4 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0" style={{border: "1px solid brown"}}>
              Lateral
            </div>
            <div className="lg:w-3/4 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 -mt-4" style={{border: "1px solid green"}}>
              {post.items[0].name}
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
  const [,id] = params.slug  
  
  
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
import React from 'react'
import { PostCard } from '../components/ui/card/PostCard'
import { MainLayout } from '../components/ui/layout/MainLayout'

function blog({ posts }){
  const { items:noticias } = posts
  // console.log(noticias)
  return(
    <MainLayout>
      <h1>Noticias</h1>
      {
      noticias.map( post => (
        <PostCard
          key={ post._id }
          post={ post }/>
      ))
      }
    </MainLayout>
  )
}

export async function getStaticProps() {  
  const res = await fetch("https://api.webflow.com/collections/5fa2c45087b41f0f9b713464/items?api_version=1.0.0&access_token=ed2770ed568f942e403fab9300fa760b97eadc3ea3bb5901e025deb8cd4cb3ee")
  const posts = await res.json()
  

  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  }
}

export default blog 
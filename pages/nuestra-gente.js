import { useEffect, useState } from "react";
import { PostCard } from "../components/ui/card/PostCard";
import { MainLayout } from "../components/ui/layout/MainLayout"
import { WebflowAPI } from "../helpers/WebflowAPI"


export default function NuestraGente() {

  const [post, setPost] = useState({
    data:[],
    loading: true,
  })

  const webflow  = WebflowAPI()

  useEffect(() => {
    const getPosts = () => {
      webflow.items({ collectionId: '5fa2c45087b41f0f9b713464' })
      .then(i => {
        setPost({
          data: i,
          loading: false
        })
      });      
    }
    getPosts();    
  }, [])
  
  const { data:posts, loading } = post

  // console.log(posts.items)
  
  return (
    <MainLayout>
      <h1>Nuestra Gente</h1>  
      {
        loading ? 'Cargando' : 
          <ul>
          {
          posts.items.map( post => (
            <PostCard 
              key={ post._id }
              post={ post }/>
          ))
          }
      </ul>
      }
      
    </MainLayout>
  )
}

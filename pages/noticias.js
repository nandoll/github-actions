import React from 'react'
import { PostCard } from '../components/ui/card/PostCard'
import { MainLayout } from '../components/ui/layout/MainLayout'


function Noticias({ posts }){
  
  const { items:noticias, count, total, limit } = posts

  const handleChangeArticle = (e) => {
    e.preventDefault();
    
  }
  
  return(
    <MainLayout>      
      
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:full mx-auto flex flex-wrap">
            {/* Sidebar */}
            <div className="lg:w-1/4 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h1>Tipo de árticulo</h1>
              <form onSubmit={handleChangeArticle}>
                <label htmlFor="radNoticias"className="block uppercase cursor-pointer">
                  <input className="mr-2" name="articulo" type="radio" id="radNoticias" />
                  Noticias
                </label>
                <label htmlFor="radMedios"className="block uppercase cursor-pointer">
                  <input  className="mr-2" name="articulo" type="radio" id="radMedios" />
                  En los medios
                </label>
              </form>   

              <h1>Categorias</h1>   
              <div className="md:flex md:items-left">
                <div className="md:w-1/6  md:text-right">                  
                  <input className="mr-2" name="chkCategoria" type="checkbox" id="inline-full-A"/>  
                </div>
                <div className="md:w-5/6">
                  <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" htmlFor="inline-full-A">
                    Todos
                  </label>
                </div>                
              </div>
              <div className="md:flex md:items-left">
                <div className="md:w-1/6  md:text-right">                  
                  <input className="mr-2" name="chkCategoria" type="checkbox" id="inline-full-B"/>  
                </div>
                <div className="md:w-5/6">
                  <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" htmlFor="inline-full-B">
                    Acciones
                  </label>
                </div>                
              </div>
              <div className="md:flex md:items-left">
                <div className="md:w-1/6  md:text-right">                  
                  <input className="mr-2" name="chkCategoria" type="checkbox" id="inline-full-C"/>  
                </div>
                <div className="md:w-5/6">
                  <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" htmlFor="inline-full-C">
                    Aprendizaje
                  </label>
                </div>                
              </div>
              
              
              

            </div>
            {/* Panel Cards */}
            <div className="lg:w-3/4 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 -mt-4">
              <div className="flex">
                <div className="w-full h-12">                  
                { count } - {limit} de {total} 
                </div>
              </div>
              <div className="flex flex-wrap -m-4">            
                {
                noticias.map( post => (
                  <PostCard
                    key={ post._id }
                    post={ post }/>
                ))
                }
              </div>
            </div>
          </div>          
        </div>
      </section>    
    </MainLayout>
  )
}

export async function getStaticProps() {  
  
  const res = await fetch("https://api.webflow.com/collections/5fa2c45087b41f0f9b713464/items?limit=10&offset=0&api_version=1.0.0&access_token=ed2770ed568f942e403fab9300fa760b97eadc3ea3bb5901e025deb8cd4cb3ee")
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

export default Noticias 
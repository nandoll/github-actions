import React from 'react'
import Link from 'next/link'

export const PostCard = ( { post, cats} ) => {
  const { featured, categoria, ['created-on']:creacion, name, pagina, ['post-summary']:extracto, slug, _id, ['main-image']:image } = post;  
  // const { name:catName, _id:catID } = cats.items;  

  const handleNameCategory = ( id ) => {
    
    const resultado = cats.filter( (nombre, indice ) => nombre._id === id )
    const { [0]:categoria } = resultado
    const { name } = categoria
    console.log( name )
    return name
  }
  
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full shadow-2xl border-gray-200 rounded-card overflow-hidden">
        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={image.url} alt="blog"/>
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
          <Link href={`/noticias/${encodeURIComponent(slug)}/${encodeURIComponent(_id)}`} as={`/noticias/${encodeURIComponent(slug)}/${encodeURIComponent(_id)}`} >              
            <a className="title-font text-lg font-medium text-gray-900 mb-3" style={{cursor:"pointer"}}>{ name }</a>
          </Link>
          <p className="leading-relaxed mb-3">{ extracto }</p>
          <div className="flex items-center flex-wrap ">
            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href={`/noticias/${encodeURIComponent(slug)}/${encodeURIComponent(_id)}`} as={`/noticias/${encodeURIComponent(slug)}/${encodeURIComponent(_id)}`} >              
  <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{ handleNameCategory( categoria )}</h2>
            </a>            
          </div>
        </div>
      </div>
    </div>    
  )
}
import React from 'react'
import Link from 'next/link'

import formatDistanceFromNow from 'date-fns/formatDistanceToNow'
import {es} from 'date-fns/locale'

export const PostCard = ( { post, cats} ) => {
  const { featured, categoria, ['created-on']:creacion, name, pagina, ['post-summary']:extracto, slug, _id, ['main-image']:image } = post;  
  // const { name:catName, _id:catID } = cats.items;  

  const handleNameCategory = ( id ) => {
    
    const resultado = cats.filter( (nombre, indice ) => nombre._id === id )
    const { [0]:categoria } = resultado
    const { name } = categoria    
    return name
  }
  
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full shadow-2xl border-gray-200 rounded-card overflow-hidden">
        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={image.url} alt="blog"/>
        <div className="p-6">
          <h2 className="uppercase tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{ formatDistanceFromNow( new Date(creacion), {locale:es})}</h2>
          <Link href={`/noticias/${encodeURIComponent(slug)}/${encodeURIComponent(_id)}`} as={`/noticias/${encodeURIComponent(slug)}/${encodeURIComponent(_id)}`} >              
            <a className="title-font text-lg font-medium text-gray-900 mb-3" style={{cursor:"pointer"}}>{ name }</a>
          </Link>
          {/* <p className="leading-relaxed mb-3">{ extracto }</p> */}
          <div className="flex items-center flex-wrap ">
            
            <h2 className="uppercase tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{ handleNameCategory( categoria )}</h2>
                
          </div>
        </div>
      </div>
    </div>    
  )
}
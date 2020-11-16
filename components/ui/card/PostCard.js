import React from 'react'
import Link from 'next/link'

export const PostCard = ( { post } ) => {
  const { featured, categoria, ['created-on']:creacion, name, pagina, ['post-summary']:extracto, slug, _id } = post;  
  return (
    <div>
      <Link href={`/noticias/${encodeURIComponent(slug)}/${encodeURIComponent(_id)}`} as={`/noticias/${encodeURIComponent(slug)}/${encodeURIComponent(_id)}`} >
        { name }
      </Link>
      <p>{ extracto }</p>
    </div>
  )
}
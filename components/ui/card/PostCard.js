import React from 'react'

export const PostCard = ( { post } ) => {
  const { featured, categoria, ['created-on']:creacion, name, pagina, ['post-summary']:extracto, slug, _id } = post
  return (
    <div>
      <h1>{ name }</h1>
      <p>{ extracto }</p>
    </div>
  )
}

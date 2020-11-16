import React from 'react'
import { useFetchWebflow } from '../hooks/useFetchWebflow'

function noticias (key, one, keyDetail) {
  const { data:noticias } = useFetchWebflow( key="5fa2c45087b41f0f9b713464",  one=true, keyDetail = "5fb15b58f5a782e6b8309a8e")
  const { data:categorias } = useFetchWebflow( key="5fabfcf448583971dcbcc5c4")
  console.log(noticias)
  console.log(categorias)
  return (
    <div>
      <h1>Noticias</h1>
    </div>
  )
}

export default noticias
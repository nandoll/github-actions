import React from 'react'
import  FeaturedCard  from '../components/ui/card/FeaturedCard'
import { MainLayout } from '../components/ui/layout/MainLayout'

export default function innovacion() {
  const rutaImagen = '/static/bg/bg1.png'
  const rutaImagenB = '/static/bg/bg2.png'
  const rutaImagenC = '/static/bg/bg3.png'
  const data = { 
    cat: "VALOR COMPARTIDO",
    title: "Alivia: tecnología al servicio de la salud de los peruanos",
    content: "Aviva y La Victoria Lab invita a todos los colaboradores a conocer Alivia y acceder a un 25% de descuento en la primera cita ingresando el código CLUBINTERCORP al momento de pagar."
  }
  const dataB = { 
    cat: "Nuevos Experimentos",
    title: "Interbank y Rappi firman alianza para desarrollar los mejores servicios financieros digitales en Perú",
    content: "Con esta decisión confirman su compromiso con el desarrollo y bienestar de nuestro país y contribuyen a la recuperación económica nacional."
  }
  const dataC = { 
    cat: "Acontecimientos",
    title: "Cónyuges y parejas/convivientes del mismo sexo podrán usar Benefíciate de Somos Intercorp",
    content: "Alineados a nuestro compromiso por la diversidad e inclusión, ahora l@s cónyuges y las parejas/convivientes del mismo sexo podrán acceder a las promociones exclusivas para colaborador@s de Benefíciate (poweredby Club Intercorp) en Somos Intercorp."
  }
  return (
    <MainLayout>    
    <FeaturedCard imagen={rutaImagen} justify="justify-start" bgColor="bg-black" data={ data }/>
    <FeaturedCard imagen={rutaImagenB} justify="justify-end" bgColor="bg-blue-500" data={ dataB }/>
    <FeaturedCard imagen={rutaImagenC} justify="justify-start" bgColor="bg-black" data={ dataC }/>
      
    </MainLayout>
  )
}
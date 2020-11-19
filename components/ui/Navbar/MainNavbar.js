import React from 'react'
import Link from 'next/link'

export const MainNavbar = () => {
    return (
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        
        <Link href="/proposito">
          <a className="mr-5">Nuestro propósito</a>
        </Link>
        <Link href="/nuestra-gente">
          <a className="mr-5">Nuestra gente</a>
        </Link>            
        <Link href="/innovacion"> 
          <a className="mr-5">Innovación de impacto</a>
        </Link>
        <Link href="/aprendizaje"> 
          <a className="mr-5">
            Aprendizaje continuo
          </a>
        </Link>
        <Link href="/noticias">
          <a className="mr-5">
            En los medios
          </a>           
        </Link>                        
       
      </nav>
    )
}

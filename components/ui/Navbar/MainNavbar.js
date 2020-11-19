import React from 'react'
import Link from 'next/link'

export const MainNavbar = () => {
    return (
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-gray-900" href="/"> Portada  </Link>
            <Link className="mr-5 hover:text-gray-900" href="/proposito"> Nuestro propósito  </Link>
            <Link className="mr-5 hover:text-gray-900" href="/nuestra-gente">Nuestra gente</Link>            
            <Link className="mr-5 hover:text-gray-900" href="/innovacion"> Innovación de impacto </Link>
            <Link className="mr-5 hover:text-gray-900" href="/aprendizaje"> Aprendizaje continuo  </Link>
            <Link className="mr-5 hover:text-gray-900" href="/noticias"> En los medios</Link>                        
            <Link className="mr-5 hover:text-gray-900" href="/"> Información corporativa </Link>
            <Link className="mr-5 hover:text-gray-900" href="/"> Enterate.SomosIntercorp.net</Link>
        </nav>
    )
}

import React from 'react'
import Link from 'next/link'

export const MainNavbar = () => {
    return (
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-gray-900" href="/"> Home  </Link>
            {/* <Link className="mr-5 hover:text-gray-900" href="/nuestra-gente">Nuestra gente</Link>             */}
            <Link className="mr-5 hover:text-gray-900" href="/noticias">Noticias</Link>                        
        </nav>
    )
}

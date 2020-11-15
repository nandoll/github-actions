import React from 'react'
import Link from 'next/link'

export const MainNavbar = () => {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/nuestra-gente">Nuestra gente</Link>
        </nav>
    )
}

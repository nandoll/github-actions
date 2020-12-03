import React from 'react'
import { MainNavbar } from '../Navbar/MainNavbar'

export const MainHeader = () => {
    return (
      <header className="text-gray-700 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="/static/img/logo-gray.png" alt="Intercorp"/>
            <span className="ml-3 text-xl hidden">Intercorp</span>
          </a>
          <MainNavbar/>
                              
          
        </div>
      </header>
    )
}

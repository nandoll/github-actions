import React from 'react'

export const FooterDark = () => {
  return (
    <footer className="bg-black text-white relative index-10 py-12">
      <div className="w-full h-full flex flex-row items-center">
        <div className="container flex flex-row justify-center">
          <div className="w-3/4 sm:w-full flex flex-row flex-wrap">
            <div className="w-full sm:w-1/3 lg:w-1/4">
              <a className="inline-block mb-5 logo logo--footer" href="#">
                <figure>
                  <img src="/static/img/logotipo.svg" alt="Intercorp" width="164" />
                </figure>
              </a>
            </div>
            <div className="w-full sm:w-2/3 lg:w-3/4 flex flex-row flex-wrap">
              <div className="w-full">
                <h3 className="font-semibold text-sm mb-5">Información Corporativa</h3>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 text-xs mb-3 sm:mb-0">
                <h4 className="font-semibold mb-2">Finanzas</h4>
                <nav className="underline flex flex-col text-gray-200">
                  <a href="#" className="block mb-1" title="Información financiera">Información financiera</a>
                  <a href="#" className="block mb-1" title="Hechos de importancia">Hechos de importancia</a>
                </nav>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 text-xs mb-3 sm:mb-0">
                <h4 className="font-semibold mb-2">Finanzas</h4>
                <nav className="underline flex flex-col text-gray-200">
                  <a href="#" className="block mb-1" title="Empresas de Intercorp y socios">Empresas de Intercorp y socios</a>
                  <a href="#" className="block mb-1" title="Términos y condiciones de uso">Términos y condiciones de uso</a>
                  <a href="#" className="block mb-1" title="Datos personales">Datos personales</a>
                  <a href="#" className="block mb-1" title="Miembros del Directorio">Miembros del Directorio</a>
                </nav>
              </div>
            </div>
            <div className="w-full">
              <a className="inline-block mb-1" href="#" target="_blank" title="Intercorp Linkedin"><i className="icon-linkedin text-lg"></i></a><br />
              <p className="text-xs">© 2018 Intercorp. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer> 
  )
}

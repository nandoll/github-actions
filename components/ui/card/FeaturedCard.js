import React from 'react'

export default function FeaturedCard ({ imagen, justify, bgColor, data }) {
  const {cat, title, content} = data
  return (
    <>
      <div className={`text-white bg-cover bg-no-repeat bg-center md:p-32 flex ${justify}`} style={{ backgroundImage: `url(${imagen})`}}> 
        <div className={`cardWidth sm:w-1/4 md:w-2/8 pt-32 md:pt-0 md:${bgColor} md:bg-opacity-50 md:rounded-md`}>
          <div className="ml-10 md:ml-0	p-8 md:p-10 text-white rounded-tl-lg rounded-bl-lg md:rounded-none  bg-black md:bg-opacity-0   relative" style={{backgroundColor : "#2E2E2E"}}>
            <div className="pb-3 text-sm	font-semibold uppercase" >{ cat }</div>
            <p className="pb-6 text-xl font-semibold">{ title }</p>
            <span className="text-sm">2 SEP 2020</span>
          </div>
          <div className="bg-blue-500 md:bg-opacity-0 -mt-20 md:mt-0">
          <p className="p-10 pt-32 md:pt-0">
          {content}
          </p>
          <div className="inline-block border border-dotted rounded-full mx-10 mb-5 py-2 px-10 border-white">Leer mas</div>
          </div>        
        </div>
      </div>
    </>
  )
}

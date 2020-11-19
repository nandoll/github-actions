import React from 'react'

export default function FeaturedCard ({ imagen, justify, bgColor, data }) {
  const {cat, title, content} = data
  const bgTitle = bgColor === "bg-black" ? "bg-gray-700" : "bg-blue-500"
  return (
    <>
      <div className={`text-white bg-cover bg-top bg-no-repeat md:p-32 flex ${justify}`} style={{ backgroundImage: `url(${imagen})`}}> 
        <div className={`cardWidth sm:w-1/4 md:w-2/8 md:pt-0 md:${bgColor} md:bg-opacity-50 md:rounded-md`}>
          <div className={`mt-48 md:mt-0 ml-10 md:ml-0	p-8 md:p-10 text-white rounded-tl-lg rounded-bl-lg md:rounded-none ${bgTitle} md:bg-opacity-0   relative`} >
            <div className="pb-3 text-sm	font-semibold uppercase" >{ cat }</div>
            <p className="pb-6 text-xl font-semibold">{ title }</p>
            <span className="text-sm">2 SEP 2020</span>
          </div>
          <div className="bg-blue-200  md:bg-opacity-0 -mt-20 md:mt-0">
          <p className="p-10 pt-32 md:pt-0">
          {content}
          </p>
          <div className="inline-block border border-dotted rounded-full mx-10 mb-20 py-2 px-10 border-white">Leer mas</div>
          </div>        
        </div>
      </div>
    </>
  )
}

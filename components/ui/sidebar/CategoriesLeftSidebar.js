import React from 'react'

export const CategoriesLeftSidebar = ( { cat } ) => {
  const { name, _id } = cat;  
  return (
    
      <div className="md:flex md:items-left">
        <div className="md:w-1/6  md:text-right">                  
          <input className="mr-2" name="chkCategoria" type="checkbox" id={_id}/>  
        </div>
        <div className="md:w-5/6">
          <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" htmlFor={_id}>
            {name}
          </label>
        </div>                
      </div>              
    
  )
}

import React from "react";

export const CategoriesLeftSidebar = ({ cat, catID }) => {
  const handleClickCheck = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="hidden md:flex md:items-left my-4 ml-8 ">
      <div className="md:w-1/8  md:text-left">
        <input
          className="mr-1"
          name="chkCategoria"
          value={cat}
          type="checkbox"
          id={catID}
          onChange={handleClickCheck}
        />
      </div>
      <div className="md:w-7/8">
        <label
          className="block text-gray-500 mb-1 md:mb-0 pl-2 cursor-pointer"
          htmlFor={catID}
        >
          {cat}
        </label>
      </div>
    </div>
  );
};

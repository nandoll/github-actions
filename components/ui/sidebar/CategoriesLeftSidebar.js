import React from "react";

export const CategoriesLeftSidebar = ({ cat }) => {
  const { name, _id } = cat;

  const handleClickCheck = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="hidden md:flex md:items-left my-4 ml-8 ">
      <div className="md:w-1/8  md:text-left">
        <input
          className="mr-1"
          name="chkCategoria"
          value={name}
          type="checkbox"
          id={_id}
          onChange={handleClickCheck}
        />
      </div>
      <div className="md:w-7/8">
        <label
          className="block text-gray-500 mb-1 md:mb-0 pl-2 cursor-pointer"
          htmlFor={_id}
        >
          {name}
        </label>
      </div>
    </div>
  );
};

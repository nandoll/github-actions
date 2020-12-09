import React, { useState } from "react";
import { useRouter } from "next/router";

export const RadioMediosLeftSidebar = ({ radioName }) => {
  const router = useRouter();
  const [radioArticle, setRadioArticle] = useState(radioName);

  const handleChangeArticle = (e) => {
    setRadioArticle(e.target.value);

    console.log(e.target.value);
    router.push(`/${e.target.value}`);
  };
  return (
    <>
      <h3 className=" text-blue-500 text-lg mb-6 hidden md:flex">
        Tipo de árticulo
      </h3>
      <form
        onSubmit={handleChangeArticle}
        className="md:ml-8 flex md:block justify-between border-b md:border-b-0"
      >
        <label
          htmlFor="radNoticias"
          className={`block uppercase cursor-pointer ${
            radioArticle === "noticias" ? "text-blue-500" : "text-gray-500"
          } font-semibold mb-4`}
        >
          <input
            className="mr-2 hidden md:inline-block"
            name="articulo"
            checked
            type="radio"
            id="radNoticias"
            value="noticias"
            checked={radioArticle === "noticias"}
            onChange={handleChangeArticle}
          />
          Noticias
        </label>
        <label
          htmlFor="radMedios"
          className={`block uppercase cursor-pointer ${
            radioArticle === "en-los-medios" ? "text-blue-500" : "text-gray-500"
          } font-semibold`}
        >
          <input
            className="mr-2 hidden md:inline-block"
            name="articulo"
            type="radio"
            id="radMedios"
            value="en-los-medios"
            checked={radioArticle === "en-los-medios"}
            onChange={handleChangeArticle}
          />
          En los medios
        </label>
      </form>
    </>
  );
};

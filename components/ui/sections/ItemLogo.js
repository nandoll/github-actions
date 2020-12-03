import React from "react";

export const ItemLogo = (props) => {
  const { img, imgW, imgH, name } = props;

  return (
    <div className="lg:mb-4 lg:mr-3" key={name}>
      <figure className="bg-white rounded px-4 h-24 flex flex-col justify-center">
        <img
          src={`${img}`}
          alt={`${name}`}
          width={`${imgW}`}
          height={`${imgH}`}
        />
      </figure>
    </div>
  );
};

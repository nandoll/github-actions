import React from "react";

export const LinkCats = (props) => {
  const { text, link } = props;

  return (
    <a
      className="inline-block bg-black leading-none px-4 py-2 mb-6 text-lg italic"
      href={link}
    >
      {text}
    </a>
  );
};

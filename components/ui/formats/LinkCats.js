import React from "react";
import Link from "next/link";

export const LinkCats = (props) => {
  const { text, link } = props;

  return (
    <Link href={link}>
      <a className="inline-block bg-black leading-none px-4 py-2 mb-6 text-lg italic">
        {text}
      </a>
    </Link>
  );
};

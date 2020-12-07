import React from "react";
import { useRouter } from "next/router";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

export const Shared = ({ title }) => {
  const router = useRouter();
  return (
    <div className="grid justify-items-start py-4 my-4 min-h-64 ">
      <LinkedinShareButton
        url={router?.asPath}
        className="flex h-10 w-10 items-center justify-center border rounded-full border-gray-500 text-gray-700 px-5 py-2 leading-none"
        style={{ border: "inherit" }}
      >
        <i className="inline-block  icon-linkedin"></i>
      </LinkedinShareButton>

      <TwitterShareButton
        url={router?.asPath}
        title={title}
        className="flex h-10 w-10 items-center justify-center border rounded-full border-gray-500 text-gray-700 px-5 py-2 leading-none"
        style={{ border: "inherit" }}
      >
        <i className="inline-block icon-twitter"></i>
      </TwitterShareButton>

      <FacebookShareButton
        url={router?.asPath}
        quote={title}
        className="flex h-10 w-10 items-center justify-center border rounded-full border-gray-500 text-gray-700 px-5 py-2 leading-none"
        style={{ border: "inherit" }}
      >
        <i className="inline-block icon-facebook"></i>
      </FacebookShareButton>

      <a className="flex h-10 w-10 items-center justify-center border rounded-full border-gray-500 text-gray-700 px-5 py-2 leading-none">
        <i className="inline-block icon-copy"></i>
      </a>
    </div>
  );
};

import React from "react";
import Image from "next/image";

import { grpahCMSImageLoader } from "../util";

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black hover:bg-opacity-20 shadow-lg">
      <div className="absolute left-2 right-2 top-4">
      {/* <h1 className="text-white">ACA ABAJO ESTAMOS EN Components.Author.</h1> */}

        <Image
          alt={author.name}
          unoptimized
          loader={grpahCMSImageLoader}
          height="60"
          width="60"
          className="align-middle"
          src={author.photo.url}
        />
      </div>
      <h3 className="text-white mt-4 mb-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-ls">{author.bio}</p>
    </div>
  );
};
export default Author;

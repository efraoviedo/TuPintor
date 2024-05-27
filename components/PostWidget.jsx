import React, { useState, useEffect } from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";

import { grpahCMSImageLoader } from "../util";
import { getSimilarPosts, getRecentPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="rounded-lg pb-12 mb-8 w-32 items-center">
      {/* <h3>ESTE ES PostWidget.jsx</h3> */}
      <h3 className="text-lg mb-8 font-semibold border-b pb-4 text-center">
        {slug ? "Posts Recientes" : "Posts Recientes"}
      </h3>
      {relatedPosts.map((post, index) => (
        <div
          key={index}
          className="hover:text-cyan-700 text-sm items-center w-full mb-4"
        >
          {/* <div className="w-16 flex-none"> */}
            {/* <Image */}
              {/* // loader={grpahCMSImageLoader} */}
              {/* // alt={post.title} */}
              {/* // height="60" */}
              {/* // width="60" */}
              {/* // unoptimized */}
              {/* // className="align-middle rounded-full" */}
              {/* // src={post.featuredImage.url} */}
            {/* // /> */}
          {/* </div> */}
          <div className="flex-grow ml-4">
            <p className="text-gray-500 text-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link href={`/post/${post.slug}`} key={index} className="text-md" >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;

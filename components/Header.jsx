import React, { useState, useEffect } from "react";
import Image from "next/image";

import Link from "next/link";
import { getCategories } from "../services";
import brochacolores4 from "../public/brochacolores4.png";
import { GrFacebookOption } from "react-icons/gr";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  const openInNewWindow = (e) => {
    e.preventDefault();
    window.open(
      "https://wa.me/573202937958?text=Me%20gustaría%20hacer%20una%20cotización",
      "_blank"
    );
  }

  const openInNewSlash = (e) => {
    e.preventDefault();
    window.open(
      "https://www.facebook.com/profile.php?id=61560455396608",
      "_blank"
    );
  };

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-2">
        <div className="md:float-left block">
          <Link href="/">
            <span className="flex items-center justify-between hover:text-cyan-500 cursor-pointer font-bold text-2xl md:text-5xl text-blue-900 ">
              Pintores Bogota
              <Image
                alt={brochacolores4}
                src={brochacolores4}
                // layout="fill"
                height="50"
                // width="40"
                className=" pl-2 pt-4 items-center"
              />
            </span>
            <p className="font-bold text-xl md:text-4xl text-blue-900 ">
              {" "}
              Tu Pintor
            </p>
            {/* <br /> */}
            <span
              className="cursor-pointer font-mono whitespace-nowrap
            border-right-4 w-12 animate-pulse overflow-visible text-xs md:text-sm text-blue-900"
            >
              Pintamos Casas Apartamentos...
            </span>
          </Link>
        </div>
        <div className=" md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span
                className="md:float-right mt-6 align-middle ml-2 md:ml-5 text-blue-500 md:text-blue-900 font-semibold cursor-pointer
               hover:text-cyan-500"
              >
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <span
        className="flex items-center justify-between font-thin text-xs md:text-base
        text-blue-900 pt-4 hover:text-black"
      >
        Atencion Inmediata..
        <p className="pl-4 hover:text-black hover:bg-blue-100">
          Bogota Colombia. Telf: 57 320 2937958
        </p>
        <Link
          href="https://wa.me/573202937958?text=Me%20gustaría%20hacer%20una%20cotización"
          passHref
          className="pl-6 pr-6"
        >
          <button
            className="pl-4 bg-green-700 text-white font-bold p-3 active:scale-95 active:bg-pink-100 rounded-lg cursor-pointer "
            onClick={openInNewWindow}
          >
            WhatsApp
          </button>
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=61560455396608"
          passHref
          className="rounded-lg p-1 w-11 h-11 bg-blue-700 active:scale-95 active:bg-blue-500  "
        >
          <GrFacebookOption
            className="text-white font-bold w-10 h-10 pt-1 pr-1"
            onClick={openInNewSlash}
          />
        </Link>
      </span>
    </div>
  );
};

export default Header;

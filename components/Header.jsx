import React, { useState, useEffect } from "react";
import Image from "next/image";

import Link from "next/link";
import { getCategories } from "../services";
// import brochacolores2 from "./public/brochacolores2.png";
import brochacolores4 from "../public/brochacolores4.png";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-2">
        <div className="md:float-left block">
          <Link href="/">
            <span className="flex items-center justify-between hover:text-cyan-500 cursor-pointer font-bold text-3xl md:text-5xl text-blue-900 ">
              {/* PintoYá */}
              {/* pintorenbogota */}
              Pintores Bogota
              <Image
                alt={brochacolores4}
                src={brochacolores4}
                // layout="fill"
                height="70"
                // width="40"
                className=" pl-4 items-center"
              />
            </span>
            <p className="font-bold text-2xl md:text-4xl text-blue-900 "> Tu Pintor</p>
            {/* <br /> */}
            <span
              className="cursor-pointer font-mono whitespace-nowrap
            border-right-4 w-12 animate-pulse overflow-visible text-sm md:text-lg text-blue-900"
            >
              
              Pintamos Casas Apartamentos...
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span
                className="md:float-right mt-4 align-middle text-blue-900 ml-4 font-semibold cursor-pointer
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
        Atencion Personalizada..
        <p className="hover:text-black hover:bg-blue-100">
          Contacto: Bogota Colombia. Telefono: 57 320 2937958
        </p>
      </span>
    </div>
  );
};

export default Header;

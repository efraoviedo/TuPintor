import React, { useState, useEffect } from "react";

import Link from "next/link";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="hover:text-cyan-500 cursor-pointer font-bold text-4xl text-blue-900 ">
              Tupintor
            </span>
            <br />
            <span
              className="cursor-pointer font-mono whitespace-nowrap
            border-right-4 w-12 animate-pulse overflow-visible text-blue-900"
            >
              Pintamos Casas Apartamentos...
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span
                className="md:float-right mt-2 align-middle text-blue-900 ml-4 font-semibold cursor-pointer
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
        <p className="hover:text-black hover:bg-blue-200">
          Contacto: Bogota Colombia. Telefono:57 320 2937958
        </p>
      </span>
    </div>
  );
};

export default Header;
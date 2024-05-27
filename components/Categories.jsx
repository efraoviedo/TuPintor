import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="rounded-lg pb-12 mb-8 w-32 items-center">
      {/* <h1>ESTE ES Categories.jsx</h1> */}
      <h3 className="text-lg mb-8 font-semibold border-b pb-4 text-center">Categorias</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span
            className={`cursor-pointer text-sm hover:bg-slate-100 hover:text-cyan-500 block ${
              index === categories.length - 1 ? "border-b-0" : "border-b"
            } pb-3 mb-3`}
          >
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;

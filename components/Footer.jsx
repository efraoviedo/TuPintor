import Image from "next/image";
import Link from "next/link";
import React from "react";
// import favicon from "../public/favicon.png"
import favicon from "../public/favicon.ico";

const Footer = () => {
  return (
    <footer className="w-full mt-6">
      <div
        className=" w-full pt4  bg-gray-900 h-48 md:h-32 text-white
          grid items-center justify-evenly text-xs md:flex lg:text-sm rounded-md"
      >
        {/* <nav className=""> */}
          {" "}
          Atencion Personalizada. {""}
          <h3 className="hover:text-cyan-500">Contacto: Bogota Colombia.</h3>
          <nav className="pl-16 md:pl-2">
          <Image
            unoptimized
            // loader={grpahCMSImageLoader}
            alt={favicon}
            className="w-8 shadow-lg lg:rounded-lg"
            //  layout="fill"
            src={favicon}
          />
          </nav>
          <p className="hover:text-cyan-500">WhatsApp: +57 320 2937958</p>
          <Link href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWtMmVFcwjHzqhkSffjxWhlNJPqqlFLVWSLKvldVnfkXTwCHZmCrBkmHLrKnrsBTsscfCGQPl">
            <span className="hover:text-cyan-500 cursor-pointer font-bold">
              Email: efraoviedo@gmail.com
            </span>
          </Link>
        {/* </nav> */}
      </div>
    </footer>
  );
};

export default Footer;

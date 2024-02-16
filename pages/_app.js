import React from "react";

import { Layout } from "../components";
import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
// import "../styles/tailwind.css"; // <---- aquí

function myApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default myApp;

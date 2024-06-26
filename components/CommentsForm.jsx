import React, { useState, useEffect } from "react";
import { submitComment } from "../services";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "", // lo cambie asi, a cadena ó string
    storeData: false,
  });

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initialFormData = {
      name: window.localStorage.getItem("name"),
      email: window.localStorage.getItem("email"),
      phone: window.localStorage.getItem("phone"),
      storeData:
        window.localStorage.getItem("name") ||
        window.localStorage.getItem("email")||
        window.localStorage.getItem("phone"),
    };
    setFormData(initialFormData);
  }, []);

  const onInputChange = (e) => {
    const { target } = e;
    if (target.type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  const handlePostSubmission = () => {
    setError(false);
    const { name, email, phone, comment, storeData } = formData;
    if (!name || !email || !phone || !comment) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      email,
      phone,
      comment,
      slug,
    };

    if (storeData) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("phone", phone);
    } else {
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      localStorage.removeItem("phone");
    }

    submitComment(commentObj).then((res) => {
      if (res.createComment) {
        if (!storeData) {
          formData.name = "";
          formData.email = "";
          formData.phone = "";
        }
        formData.comment = "";
        setFormData((prevState) => ({
          ...prevState,
          ...formData,
        }));
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      }
    });
  };

  return (
    <div className="shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Deja un Comentario
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          value={formData.comment ? formData.comment : ""}
          onChange={onInputChange}
          className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          name="comment"
          placeholder="Mi comentario es..."
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          value={formData.name ?? ""}
          onChange={onInputChange}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Name"
          name="name"
        />
        <input
          type="email"
          value={formData.email ?? ""}
          onChange={onInputChange}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Email"
          name="email"
        />
        <input
          type="text"
          value={formData.phone}
          onChange={onInputChange}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Teléfono"
          name="phone"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            checked={formData.storeData}
            onChange={onInputChange}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label className="text-gray-500 cursor-pointer" htmlFor="storeData">
            {" "}
            Guardar mis datos para un proximo comentario.
          </label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-500">
          Todos los campos deben ser compleatados
        </p>
      )}
      <div className="mt-8">
        <button
          type="button"
          onClick={handlePostSubmission}
          className="transition duration-500 ease hover:bg-violet-900 inline-block bg-blue-900 text-sm font-medium rounded-full text-white px-4 py-3 cursor-pointer"
        >
          Enviar Comentario
        </button>
        {showSuccessMessage && (
          <span className="text-xl float-right font-semibold mt-3 text-green-500">
            Comentario enviado
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;

     // Con este codigo de aca para abajo, ya funciona bien los comenterios
// import React, { useState, useEffect } from "react";
// import { submitComment } from "../services";
// 
// const CommentsForm = ({ slug }) => {
  // const [error, setError] = useState(false);
  // const [localStorage, setLocalStorage] = useState(null);
  // const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  // const [formData, setFormData] = useState({
    // name: "",
    // email: "",
    comment: null, // estabaa asi por advertencian en consola por comoponente controlado y no controlado
    // comment: "", // lo cambie asi, a cadena ó string
    // storeData: false,
  // });
// 
  // useEffect(() => {
    // setLocalStorage(window.localStorage);
    // const initialFormData = {
      // name: window.localStorage.getItem("name"),
      // email: window.localStorage.getItem("email"),
      // storeData:
        // window.localStorage.getItem("name") ||
        // window.localStorage.getItem("email"),
    // };
    // setFormData(initialFormData);
  // }, []);
// 
  // const onInputChange = (e) => {
    // const { target } = e;
    // if (target.type === "checkbox") {
      // setFormData((prevState) => ({
        // ...prevState,
        // [target.name]: target.checked,
      // }));
    // } else {
      // setFormData((prevState) => ({
        // ...prevState,
        // [target.name]: target.value,
      // }));
    // }
  // };
// 
  // const handlePostSubmission = () => {
    // setError(false);
    // const { name, email, comment, storeData } = formData;
    // if (!name || !email || !comment) {
      // setError(true);
      // return;
    // }
    // const commentObj = {
      // name,
      // email,
      // comment,
      // slug,
    // };
// 
    // if (storeData) {
      // localStorage.setItem("name", name);
      // localStorage.setItem("email", email);
    // } else {
      // localStorage.removeItem("name");
      // localStorage.removeItem("email");
    // }
// 
    // submitComment(commentObj).then((res) => {
      // if (res.createComment) {
        // if (!storeData) {
          // formData.name = "";
          // formData.email = "";
        // }
        // formData.comment = "";
        // setFormData((prevState) => ({
          // ...prevState,
          // ...formData,
        // }));
        // setShowSuccessMessage(true);
        // setTimeout(() => {
          // setShowSuccessMessage(false);
        // }, 3000);
      // }
    // });
  // };
// 
  // return (
    // <div className="shadow-lg rounded-lg p-8 pb-12 mb-8">
      {/* <h3 className="text-xl mb-8 font-semibold border-b pb-4"> */}
        {/* Deja un Comentario */}
      {/* </h3> */}
      {/* <div className="grid grid-cols-1 gap-4 mb-4"> */}
        {/* <textarea */}
          // value={formData.comment ? formData.comment : ""}
          // onChange={onInputChange}
          // className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          // name="comment"
          // placeholder="Mi comentario es..."
        // />
      {/* </div> */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4"> */}
        {/* <input */}
          // type="text"
          // value={formData.name ?? ""}
          // onChange={onInputChange}
          // className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          // placeholder="Name"
          // name="name"
        // />
        {/* <input */}
          // type="email"
          // value={formData.email ?? ""}
          // onChange={onInputChange}
          // className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          // placeholder="Email"
          // name="email"
        // />
      {/* </div> */}
      {/* <div className="grid grid-cols-1 gap-4 mb-4"> */}
        {/* <div> */}
          {/* <input */}
            // checked={formData.storeData}
            // onChange={onInputChange}
            // type="checkbox"
            // id="storeData"
            // name="storeData"
            // value="true"
          // />
          {/* <label className="text-gray-500 cursor-pointer" htmlFor="storeData"> */}
            {/* {" "} */}
            {/* Guardar mis datos para un proximo comentario. */}
          {/* </label> */}
        {/* </div> */}
      {/* </div> */}
      {/* {error && ( */}
        // <p className="text-xs text-red-500">
          {/* Todos los campos deben ser compleatados */}
        {/* </p> */}
      // )}
      {/* <div className="mt-8"> */}
        {/* <button */}
          // type="button"
          // onClick={handlePostSubmission}
          // className="transition duration-500 ease hover:bg-violet-900 inline-block bg-blue-900 text-sm font-medium rounded-full text-white px-4 py-3 cursor-pointer"
        // >
          {/* Enviar Comentario */}
        {/* </button> */}
        {/* {showSuccessMessage && ( */}
          // <span className="text-xl float-right font-semibold mt-3 text-green-500">
            {/* Comentario enviado */}
          {/* </span> */}
        // )}
      {/* </div> */}
    {/* </div> */}
  // );
// };
// 
// export default CommentsForm;
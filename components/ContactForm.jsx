// import React, { useState } from "react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const onInputChange = (e) => {
//     const { target } = e;
//     setFormData((prevState) => ({
//       ...prevState,
//       [target.name]: target.value,
//     }));
//   };

//   const handleEmailClick = () => {
//     const { name, email, phone, message } = formData;
//     const subject = encodeURIComponent("Nuevo mensaje de contacto");
//     const body = encodeURIComponent(
//       `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`
//     );
//     window.location.href = `mailto:efraoviedo@gmail.com?subject=${subject}&body=${body}, "Pintores en Bogotá TuPintor"`;
//   };

//   const handleWhatsAppClick = () => {
//     const { phone, message } = formData;
//     const whatsappMessage = encodeURIComponent(
//       `Teléfono: ${phone}\nMensaje: ${message}`
//     );
//     window.open(`https://wa.me/573202937958?text={Hola, me gustaría contactar contigo para una cotizacion}`, "_blank");
//   };

//   return (
//     <div className="shadow-xl bg-slate-50 rounded-lg p-8 pb-12 mb-8 max-w-lg mx-auto">
//       <h3 className="text-xl mb-8 font-semibold border-b pb-4">Contáctanos</h3>
//       <div className="grid grid-cols-1 gap-4 mb-4">
//         <input
//           type="text"
//           value={formData.name}
//           onChange={onInputChange}
//           className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
//           placeholder="Nombre"
//           name="name"
//         />
//         <input
//           type="email"
//           value={formData.email}
//           onChange={onInputChange}
//           className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
//           placeholder="Email"
//           name="email"
//         />
//         <input
//           type="text"
//           value={formData.phone}
//           onChange={onInputChange}
//           className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
//           placeholder="Teléfono"
//           name="phone"
//         />
//         <textarea
//           value={formData.message}
//           onChange={onInputChange}
//           className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
//           placeholder="Mensaje"
//           name="message"
//         ></textarea>
//       </div>
//       <div className="mt-8 flex gap-4">
//         <button
//           type="button"
//           onClick={handleEmailClick}
//           className="transition duration-500 ease hover:bg-violet-900 inline-block bg-blue-900 text-sm font-medium rounded-full text-white px-4 py-3 cursor-pointer"
//         >
//           Enviar Email
//         </button>
//         <button
//           type="button"
//           onClick={handleWhatsAppClick}
//           className="transition duration-500 ease hover:bg-green-600 inline-block bg-green-500 text-sm font-medium rounded-full text-white px-4 py-3 cursor-pointer"
//         >
//           Enviar WhatsApp
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

import React, { useState } from "react";
import { submitContact } from "../services"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [error, setError] = useState(false);

  const onInputChange = (e) => {
    const { target } = e;
    setFormData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handlePostSubmission = async () => {
    setError(false);
    const { name, email, phone, message } = formData;
    if (!name || !email || !phone || !message) {
      setError(true);
      return;
    }

    const contactData = { name, email, phone, message };

  try {
    const response = await submitContact(contactData);
    if (response.createContact) {
      setShowSuccessMessage(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    } else {
      setError(true);
    }
  } catch (error) {
    setError(true);
  }
};


  const handleEmailClick = () => {
    const { name, email, phone, message } = formData;
    const subject = encodeURIComponent("Nuevo mensaje de contacto");
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`
    );
    window.location.href = `mailto:efraoviedo@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppClick = () => {
    const { phone, message } = formData;
    const whatsappMessage = encodeURIComponent(
      `Teléfono: ${phone}\nMensaje: ${message}`
    );
     window.open(`https://wa.me/573202937958?text=Hola, me gustaría contactar contigo para una cotizacion`, "_blank");

    // window.open(`https://wa.me/573202937958?text=${whatsappMessage}`, "_blank");
  };

  return (
    <div className="shadow-xl bg-slate-50 rounded-lg p-8 pb-12 mb-8 max-w-lg mx-auto">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Contáctanos</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <input
          type="text"
          value={formData.name}
          onChange={onInputChange}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Nombre"
          name="name"
        />
        <input
          type="email"
          value={formData.email}
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
        <textarea
          value={formData.message}
          onChange={onInputChange}
          className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Mensaje"
          name="message"
        ></textarea>
      </div>
      <div className="mt-8 flex gap-4">
        <button
          type="button"
          onClick={handleEmailClick}
          className="transition duration-500 ease hover:bg-violet-900 inline-block bg-blue-900 text-sm font-medium rounded-full text-white px-4 py-3 cursor-pointer"
        >
          Enviar Email
        </button>
        <button
          type="button"
          onClick={handleWhatsAppClick}
          className="transition duration-500 ease hover:bg-green-600 inline-block bg-green-500 text-sm font-medium rounded-full text-white px-4 py-3 cursor-pointer"
        >
          Enviar WhatsApp
        </button>
      </div>
      {showSuccessMessage && (
        <span className="text-xl float-right font-semibold mt-3 text-green-500">
          Mensaje enviado
        </span>
      )}
      {error && (
        <span className="text-xl float-right font-semibold mt-3 text-red-500">
          Error al enviar el mensaje
        </span>
      )}
    </div>
  );
};

export default ContactForm;

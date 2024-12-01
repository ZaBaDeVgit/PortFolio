"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import TransitionPage from "@/components/transition-page";
import CircleImage from "@/components/circle-image";
import ContainerPage from "@/components/container";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kulr4zo",
        "template_oo2wnja",
        e.target as HTMLFormElement,
        "kYSi4Ul0jf8UDegcT"
      )
      .then((result) => {
        console.log("Mensaje enviado: ", result.text);
        Swal.fire({
          icon: "success",
          title: "¡Mensaje enviado!",
          text: "Tu mensaje ha sido enviado exitosamente. Te contactaremos pronto.",
          confirmButtonColor: "#3085d6",
        });
      })
      .catch((error) => {
        console.log("Error al enviar el mensaje: ", error.text);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.",
          confirmButtonColor: "#d33",
        });
      });
  };

  return (
    <ContainerPage>
      <TransitionPage />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <CircleImage />
        <h1 className="text-3xl font-bold mb-8 text-center">Contáctame</h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-3 w-full max-w-md p-7 bg-white shadow-lg rounded-lg"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
              Nombre
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Tu nombre"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Tu correo"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Escribe tu mensaje"
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-md text-gray-900"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Enviar mensaje
          </button>
        </form>
        <div className="mt-8 flex space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-lg font-semibold"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 text-lg font-semibold"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700 text-lg font-semibold"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 text-lg font-semibold"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </ContainerPage>
  );
};

export default Contact;

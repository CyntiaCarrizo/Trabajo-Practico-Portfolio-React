import React, { useState } from "react";
import "../styles/Contacto.css";

export default function Contacto() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);

    try {
      const formData = new FormData(e.target);
      const res = await fetch("https://formsubmit.co/ajax/your@email.com", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Error al enviar el formulario");
      await res.json();
      setResponse("¡Gracias por tu mensaje!");
      e.target.reset();
    } catch (error) {
      console.error(error); // Muestra el error en la consola del navegador
      setResponse("Ocurrió un error, intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contactos" className="contact">
      <div className="container">
        <h2 className="text-3xl font-bold text-rosa text-center">
          Contactame
        </h2>

        {/* TARJETAS DE CONTACTO */}
        <article className="contact-cards">
          {/* UBICACIÓN */}
          <aside className="contact-card box-shadow-1">
            <svg
              width="37"
              height="28"
              viewBox="0 0 37 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5 7.3125L7 16.8125V27C7 27.5625 7.4375 28 8 28H15C15.5 28 15.9375 27.5625 15.9375 27V21C15.9375 20.5 16.4375 20 16.9375 20H20.9375C21.5 20 21.9375 20.5 21.9375 21V27C21.9375 27.5625 22.4375 28 22.9375 28H30C30.5 28 31 27.5625 31 27V16.75L19.4375 7.3125C19.3125 7.1875 19.125 7.125 19 7.125C18.8125 7.125 18.625 7.1875 18.5 7.3125Z"
                fill="#D90062"
              />
            </svg>
            <h5>UBICACIÓN</h5>
            <small>S.M de Tuc, Tucumán, Argentina</small>
          </aside>

          {/* EMAIL */}
          <aside className="contact-card box-shadow-1">
            <svg
              width="32"
              height="24"
              viewBox="0 0 32 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.375 7.9375C29.9375 9.0625 28.125 10.4375 21.75 15.0625C20.5 16 18.1875 18.0625 16 18.0625C13.75 18.0625 11.5 16 10.1875 15.0625C3.8125 10.4375 2 9.0625 0.5625 7.9375C0.3125 7.75 0 7.9375 0 8.25V21C0 22.6875 1.3125 24 3 24H29C30.625 24 32 22.6875 32 21V8.25C32 7.9375 31.625 7.75 31.375 7.9375Z"
                fill="#D90062"
              />
            </svg>
            <h5>EMAIL</h5>
            <small>
              <a href="mailto:carrizocyntia22@gmail.com">
                carrizocyntia22@gmail.com
              </a>
            </small>
          </aside>

          {/* TELÉFONO */}
          <aside className="contact-card box-shadow-1">
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.8125 1.5625L25.3125 0.0625C24.625 -0.125 23.875 0.25 23.5625 0.9375L20.5625 7.9375C20.3125 8.5625 20.5 9.25 21 9.6875L24.8125 12.8125C22.5625 17.5625 18.625 21.5625 13.75 23.875L10.625 20.0625C10.1875 19.5625 9.5 19.375 8.875 19.625L1.875 22.625C1.1875 22.9375 0.875 23.6875 1 24.375L2.5 30.875C2.6875 31.5625 3.25 32 4 32C20 32 33 19.0625 33 3C33 2.3125 32.5 1.75 31.8125 1.5625Z"
                fill="#D90062"
              />
            </svg>
            <h5>TELÉFONO</h5>
            <small>
              <a href="tel:+54381xxxxxxx">(+54) 381-xxxxxxx</a>
            </small>
          </aside>

          {/* MEDIOS SOCIALES */}
          <aside className="contact-card box-shadow-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M16.018,3.815L15.232,8h-4.966l0.716-3.815L9.018,3.815L8.232,8H4v2h3.857l-0.751,4H3v2h3.731l-0.714,3.805l1.965,0.369 L8.766,16h4.966l-0.714,3.805l1.965,0.369L15.766,16H20v-2h-3.859l0.751-4H21V8h-3.733l0.716-3.815L16.018,3.815z M14.106,14H9.141 l0.751-4h4.966L14.106,14z" />
            </svg>
            <h5>MEDIOS SOCIALES</h5>
            <small className="social-media">
              <a href=""> {/* Íconos de redes aquí */}</a>
            </small>
          </aside>
        </article>

        {/* FORMULARIO */}
        <form className="contact-form box-shadow-1" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Ingresa tu nombre *"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Ingresa tu correo *"
            required
          />
          <textarea
            name="comments"
            cols="50"
            rows="10"
            placeholder="Déjame tus comentarios *"
            required
          ></textarea>

          {loading && (
            <div className="contact-form-loader text-center">
              <img src="assets/loader.svg" alt="Enviando..." />
            </div>
          )}

          {response && (
            <p className="text-center mt-2 text-rosa font-semibold">
              {response}
            </p>
          )}

          <input
            type="submit"
            value="ENVIAR MENSAJE"
            className="px-6 py-3 bg-rosa text-white font-semibold rounded-lg shadow-lg hover:bg-pink-700 transition-colors"
          />
        </form>
      </div>
    </section>
  );
}

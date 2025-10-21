import React from "react";
import "../styles/Experiencia.css";
import profileImg from "/CyntiaCarrizo.jpg";

export default function Experiencia() {
  const habilidades = [
    { nombre: "Desarrollo Web Frontend", nivel: 90 },
    { nombre: "Diseño Web", nivel: 80 },
    { nombre: "WPO y SEO", nivel: 50 },
    { nombre: "Desarrollo Web Backend", nivel: 40 },
    
  ];

  return (
    <section
      id="acerca"
      className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12"
    >
      {/* Texto principal */}
      <article className="flex-1 space-y-6 text-center lg:text-left">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Cyntia Carrizo</h1>
          <h5 className="text-xl text-rosa font-semibold mt-2">
            Programador@ <i>web</i>
          </h5>
        </div>

       
        <p>
         Colaboro en proyectos como <i>Freelance FullStack</i>. Estoy
          más orientada al <i>Frontend</i>, pero también hago <i>Backend</i>.
        </p>
        <p>
          Disfruto llevar a cabo la maquetación e interactividad de interfaces{" "}
          <i>web</i>, así como la optimización para el buen posicionamiento y
          rendimiento de carga de sitios y aplicaciones <i>web</i>.
        </p>
        <p>
          También cuento con experiencia en el área de <i>Social Media</i>,{" "}
          .
        </p>

        <div>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-rosa text-white rounded-lg shadow hover:bg-pink-700"
          >
            DESCARGA MI CV
          </a>
        </div>
      </article>

      {/* Imagen */}
      <article className="flex-1 flex justify-center">
        <img
          src={profileImg}
          alt="Foto de Cyntia Carrizo"
          className="rounded-2xl grayscale hover:grayscale-0 transition w-80 lg:w-96 shadow-lg"
        />
      </article>

      {/* Habilidades + botón GitHub */}
      <article className="flex-1 space-y-4">
        <h2 className="text-2xl font-bold text-center lg:text-left">
          Mis Habilidades
        </h2>

        {habilidades.map((h, i) => (
          <div key={i} className="w-full">
            <div className="flex justify-between text-sm font-medium">
              <span>{h.nombre}</span>
              <span>{h.nivel}%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-3 mt-1">
              <div
                className="bg-rosa h-3 rounded-full"
                style={{ width: `${h.nivel}%` }}
              ></div>
            </div>
          </div>
        ))}

        {/* Botón debajo de todas las skills */}
        <div className="text-center mt-6">
          <a
            href="https://github.com/CyntiaCarrizo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-rosa text-white rounded-lg shadow hover:bg-pink-700"
          >
            Ver proyectos en GitHub
          </a>
        </div>
      </article>
    </section>
  );
}


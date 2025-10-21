import { useState } from "react";

const imagenes = [
  "/DesarrolloWeb.png",
  "/Javascript.png",
  "/React.png",
];

export default function Certificados() {
  const [indice, setIndice] = useState(0);

  const siguiente = () => setIndice((indice + 1) % imagenes.length);
  const anterior = () => setIndice((indice - 1 + imagenes.length) % imagenes.length);

  return (
    <div className="text-center space-y-6">
      <h2 className="text-3xl font-bold text-rosa">Certificados</h2>
      <div className="relative w-full max-w-xl mx-auto">
        <img
          src={imagenes[indice]}
          alt={`Certificado ${indice + 1}`}
          className="w-full h-auto rounded-lg shadow-md"
        />
        <div className="flex justify-between mt-4">
          <button onClick={anterior} className="px-4 py-2 bg-rosa text-white rounded-lg hover:bg-pink-700">
            ← Anterior
          </button>
          <button onClick={siguiente} className="px-4 py-2 bg-rosa text-white rounded-lg hover:bg-pink-700">
            Siguiente →
          </button>
        </div>
      </div>
    </div>
  );
}

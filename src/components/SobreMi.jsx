export default function SobreMi() {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/hero-image-home.jpg')",
      }}
    >
      {/* Capa oscura sobre la imagen */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Contenido centrado */}
      <div className="relative z-10 text-center text-white px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-rosa mb-4">
          Carrizo Cyntia
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Bienvenidos a mi sitio
        </p>
        <button className="px-6 py-3 bg-rosa text-white font-semibold rounded-lg shadow-lg hover:bg-pink-700 transition-colors">
          CONTACTAME
        </button>
      </div>
    </section>
  );
}

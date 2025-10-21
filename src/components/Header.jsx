export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-rosa">Cyntia Carrizo</h1>
        <ul className="flex gap-4 text-gray-700 font-medium">
          <li><a href="#sobremi" className="hover:text-rosa">Sobre mí</a></li>
          <li><a href="#experiencia" className="hover:text-rosa">Experiencia</a></li>
          <li><a href="#certificados" className="hover:text-rosa">Certificados</a></li>
          <li><a href="#idiomas" className="hover:text-rosa">Idiomas</a></li>
          <li><a href="#contacto" className="hover:text-rosa">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

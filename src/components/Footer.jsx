export default function Footer() {
  return (
    <footer className="bg-white text-center py-6 mt-10 border-t border-gray-200">
      <p className="text-gray-600 text-sm">
        © {new Date().getFullYear()} Cyntia Carrizo. Todos los derechos reservados.
      </p>
    </footer>
  );
}

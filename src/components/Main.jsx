import SobreMi from "./SobreMi";
import Experiencia from "./Experiencia";
import Certificados from "./Certificados";
import Idiomas from "./Idiomas";
import Contacto from "./Contacto";
import "../styles/Contacto.css";
import "../styles/Variables.css";



export default function Main() {
  return (
    <main className="flex-1 container mx-auto p-6 space-y-16">
      <section id="sobremi"><SobreMi /></section>
      <section id="experiencia"><Experiencia /></section>
      <section id="certificados"><Certificados /></section>
      <section id="idiomas"><Idiomas /></section>
      <section id="contacto"><Contacto /></section>
    </main>
  );
}

# Portfolio - Trabajo Práctico (React)

> Portfolio personal desarrollado como trabajo práctico de la Tecnicatura Universitaria en Programación.  
> Proyecto realizado con React y Vite. **No usa ruteo** (no hay React Router) y los estilos son mayormente propios (CSS).

---

## 🔎 Descripción
Portfolio personal para mostrar información del autor: sección "Sobre mí", "Experiencia", "Certificados", "Idiomas" y "Contacto".  
La estructura del proyecto está pensada en componentes simples que se renderizan dentro de `Main.jsx` en un único SPA sin rutas.

---

## 🧩 Tecnologías / Herramientas
- React (con Vite como bundler/dev server)  
- JavaScript (ES6+)  
- CSS personalizado (archivos `.css` en `/src/styles`)  
- Node.js / npm (para instalar dependencias y correr scripts)
--Tailwind 

---

## 📁 Estructura principal 

```text
Trabajo-Practico-Portfolio-React/
├── public/
│   ├── hero-image-home.jpg
│   ├── Javascript.png
│   ├── React.png
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Certificados.jsx
│   │   ├── Contacto.jsx
│   │   ├── Experiencia.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Idiomas.jsx
│   │   ├── Main.jsx
│   │   └── SobreMi.jsx
│   ├── styles/
│   │   ├── App.css
│   │   ├── Contacto.css
│   │   └── Variables.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
├── postcss.config.js
├── tailwind.config.js
└── README.md
---

## ⚙️ Instalación y ejecución local

```bash
# 1. Clonar el repositorio
git clone https://github.com/CyntiaCarrizo/Trabajo-Practico-Portfolio-React.git

# 2. Entrar al proyecto
cd Trabajo-Practico-Portfolio-React

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm run dev

# 5. Abrir el navegador en la URL que Vite muestre (por ejemplo http://localhost:5173)

---

##  👩‍💻 Autora

Desarrollado por Cyntia Carrizo
- 📚 Tecnicatura Universitaria en Programación

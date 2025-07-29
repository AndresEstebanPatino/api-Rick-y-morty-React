# 🧪 Rick and Morty Explorer – React + Vite + Tailwind

Aplicación web construida con **React**, **Vite** y **Tailwind CSS**, que consume la API pública de [Rick and Morty](https://rickandmortyapi.com). El proyecto tiene un enfoque pedagógico, ideal para introducir temas como asincronía, consumo de APIs, estado en React, y buenas prácticas de desarrollo frontend moderno.

🔗 Repositorio: [github.com/AndresEstebanPatino/api-Rick-y-morty-React](https://github.com/AndresEstebanPatino/api-Rick-y-morty-React)

---

## 🎯 Objetivos del proyecto

- Aprender a consumir una API pública en React (`fetch`)
- Comprender y aplicar la programación asíncrona (`async/await`)
- Usar los hooks `useState` y `useEffect` de forma efectiva
- Aplicar estilos modernos con Tailwind CSS
- Entender cómo modularizar una app React (servicios, componentes, vistas)
- Mostrar visualmente datos de una API REST en tarjetas

---

## ⚙️ Tecnologías utilizadas

| Herramienta        | Descripción                                         |
|--------------------|-----------------------------------------------------|
| React              | Librería para construir interfaces de usuario       |
| Vite               | Bundler rápido para desarrollo moderno              |
| Tailwind CSS       | Framework de utilidades para estilos                |
| @tailwindcss/vite  | Plugin moderno para usar Tailwind directamente en Vite |
| Rick and Morty API | API REST pública sin autenticación                  |

---

## 📦 Instalación y uso

1. Clona el repositorio:
   ```bash
   git clone https://github.com/AndresEstebanPatino/api-Rick-y-morty-React.git
   cd api-Rick-y-morty-React
Instala las dependencias:

bash
Copiar
Editar
npm install
Ejecuta el servidor de desarrollo:

bash
Copiar
Editar
npm run dev
Abre http://localhost:5173 en tu navegador.

🧠 Configuración de Tailwind CSS
Este proyecto usa el plugin oficial @tailwindcss/vite, una alternativa moderna que simplifica la integración con Vite sin necesidad de configurar postcss.config.js ni tailwind.config.js.

📥 Instalación
bash
Copiar
Editar
npm install tailwindcss @tailwindcss/vite
⚙️ Configuración de vite.config.js
js
Copiar
Editar
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
});
🎨 Importación de estilos en index.css
css
Copiar
Editar
@import "tailwindcss";
🔎 Este método es válido para prototipos y proyectos simples. Si necesitas personalizar el tema de Tailwind, se recomienda usar la configuración clásica con tailwind.config.js.

📁 Estructura del proyecto
css
Copiar
Editar
src/
├── components/       → Componentes reutilizables (CharacterCard)
├── pages/            → Vistas principales (Home)
├── services/         → Lógica de llamadas a APIs
├── App.jsx           → Componente principal
└── main.jsx          → Punto de entrada de la aplicación
🌐 Sobre la API utilizada
API pública sin autenticación

Documentación: https://rickandmortyapi.com

Endpoint usado: https://rickandmortyapi.com/api/character

🔍 Cómo funciona la app
Al montar el componente Home, se ejecuta un useEffect

Se hace una llamada fetchCharacters() definida en /services/api.js

La respuesta se guarda en el estado local con useState

Se renderizan las tarjetas con .map() a partir de esos datos

🧠 Conceptos trabajados
Programación asíncrona con fetch y async/await

Ciclo de vida de un componente (useEffect)

Gestión de estado con useState

Separación de lógica (servicios) y presentación (componentes)

Estilos modernos con Tailwind CSS

💡 Posibles mejoras o ampliaciones
Filtros por especie, género o estado

Buscador por nombre

Paginación de resultados

Detalles individuales por personaje

Modo oscuro o cambio de tema

Integración de favoritos con localStorage

📸 Captura de pantalla
Aquí puedes incluir una imagen alojada en src/assets/screenshot.png o subirla al README vía GitHub.

✨ Autor
Andrés Esteban Patiño
Referente técnico pedagógico – Fundación Somos F5
📍 github.com/AndresEstebanPatino

📝 Licencia
Este proyecto puede ser reutilizado con fines educativos, personales y no comerciales.
Inspirado en la comunidad open source y adaptado para la formación en desarrollo web.
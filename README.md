# Holding 7 — App táctica

App táctica para el equipo **Holding 7** (fútbol 7). Cada jugador recibe un link único por WhatsApp y ve su posición, sus movimientos y las instrucciones según la situación de juego.

## Rutas

| Jugador | URL |
|---------|-----|
| Gato    | `/jugador/gato` |
| Lucho   | `/jugador/lucho` |
| Pana    | `/jugador/pana` |
| Nico    | `/jugador/nico` |
| Joe     | `/jugador/joe` |
| Agus    | `/jugador/agus` |
| Semilla | `/jugador/semilla` |
| Simón   | `/jugador/simon` |
| Primo   | `/jugador/primo` |
| César   | `/jugador/cesar` |
| Santi   | `/jugador/santi` |

---

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir `http://localhost:5173`.

---

## Deploy en Vercel

1. Subir el repo a GitHub
2. Importar en [vercel.com](https://vercel.com) → **Add New Project**
3. Vercel detecta Vite automáticamente, no hace falta configuración extra
4. El archivo `vercel.json` ya está configurado para el routing SPA

---

## Cómo editar las jugadas

Todo el contenido editable está en **`src/data/players.js`**.

### Cambiar la descripción de una jugada

Buscar el jugador y la situación:

```js
primo: {
  situations: {
    ataque: {
      description: 'Acá va el texto que ve el jugador en su celular.',
      arrows: [ ... ]
    },
  }
}
```

### Cambiar el recorrido de una flecha

Las flechas son paths SVG. El campo mide `300 × 440` unidades.
La **portería propia** está abajo (y ≈ 425) y la **portería rival** arriba (y ≈ 15).

```js
arrows: [
  { d: 'M 150 108 Q 128 88 112 70', color: '#22c55e' },
]
```

- `M x y` = punto de inicio (posición base del jugador)
- `L x y` = línea recta hasta ese punto
- `Q cx cy x y` = curva cuadrática (cx/cy = punto de control)

Herramienta útil para diseñar paths: [yqnn.github.io/svg-path-editor](https://yqnn.github.io/svg-path-editor/)

### Colores por situación

| Situación      | Color    |
|----------------|----------|
| ⚔️ Ataque      | `#22c55e` (verde) |
| 🛡️ Defensa     | `#ef4444` (rojo) |
| ⚡ Transición  | `#eab308` (amarillo) |
| 🎯 Pelota para | `#3b82f6` (azul) |

### Agregar un jugador nuevo

Copiar el bloque de cualquier jugador existente, cambiar el `id`, `name`, `role`, `position` y las 4 situaciones. El `id` debe coincidir con la URL: `/jugador/<id>`.

---

## Estructura del proyecto

```
src/
├── data/
│   └── players.js        ← TODO el contenido editable
├── pages/
│   ├── Home.jsx           ← Cancha principal con todos los jugadores
│   └── PlayerPage.jsx     ← Vista individual por jugador
├── components/
│   ├── Field.jsx          ← SVG de la cancha
│   └── AnimatedArrow.jsx  ← Flechas con animación de trazo
├── App.jsx                ← Router
└── index.css              ← Estilos globales
```

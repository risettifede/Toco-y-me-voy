// ─── Colores por situación ────────────────────────────────────────────────────
export const SITUATION_COLORS = {
  ataque:       '#22c55e',
  defensa:      '#ef4444',
  transicion:   '#eab308',
  pelotaParada: '#3b82f6',
}

// ─── Colores por línea ────────────────────────────────────────────────────────
export const LINE_COLORS = {
  arquero:    '#eab308',
  defensa:    '#60a5fa',
  mediocampo: '#fb923c',
  delantera:  '#f87171',
}

// ─── Situaciones (orden de los botones) ──────────────────────────────────────
export const SITUATIONS = [
  { id: 'ataque',       label: 'Ataque',       emoji: '⚔️' },
  { id: 'defensa',      label: 'Defensa',       emoji: '🛡️' },
  { id: 'transicion',   label: 'Transición',    emoji: '⚡' },
  { id: 'pelotaParada', label: 'Pelota parada', emoji: '🎯' },
]

// ─── Posiciones base en el SVG (viewBox "0 0 300 440") ───────────────────────
// La cancha corre de arriba (arco rival) hacia abajo (arco propio).
const P = {
  gato:    { x: 150, y: 410 },
  lucho:   { x: 248, y: 322 },
  pana:    { x: 178, y: 322 },
  nico:    { x: 102, y: 322 },
  joe:     { x: 140, y: 322 },
  agus:    { x: 118, y: 232 },
  semilla: { x: 182, y: 232 },
  simon:   { x: 62,  y: 192 },
  primo:   { x: 150, y: 108 },
  cesar:   { x: 212, y: 118 },
  santi:   { x: 90,  y: 118 },
}

const C = SITUATION_COLORS

// ─── Datos de jugadores ───────────────────────────────────────────────────────
export const PLAYERS = {
  gato: {
    id: 'gato',
    name: 'Gato',
    role: 'Arquero titular',
    line: 'arquero',
    starter: true,
    position: P.gato,
    situations: {
      ataque: {
        description: 'Si el partido lo pide, sale del área para ser opción de pase corto. Los dos centrales no suben — cubren el espacio central mientras él participa del juego.',
        arrows: [
          { d: 'M 150 410 L 150 378', color: C.ataque },
        ],
      },
      defensa: {
        description: 'Se mantiene en el arco. Achica el ángulo cuando el rival entra al área. Se desplaza por la línea de gol siguiendo la posición de la pelota.',
        arrows: [
          { d: 'M 150 410 L 126 410', color: C.defensa },
          { d: 'M 150 410 L 174 410', color: C.defensa },
        ],
      },
      transicion: {
        description: 'Salida rápida con la mano o el pie. Busca los laterales o los mediocampistas por los costados. Nunca al centro si hay presión.',
        arrows: [
          { d: 'M 150 410 Q 200 375 248 322', color: C.transicion },
          { d: 'M 150 410 Q 100 375 102 322', color: C.transicion },
        ],
      },
      pelotaParada: {
        description: 'En córners en contra, se para en el primer palo. Listo para cortar o rechazar el centro del rival.',
        arrows: [
          { d: 'M 150 410 L 118 410', color: C.pelotaParada },
        ],
      },
    },
  },

  lucho: {
    id: 'lucho',
    name: 'Lucho',
    role: 'Lateral derecho',
    line: 'defensa',
    starter: true,
    position: P.lucho,
    situations: {
      ataque: {
        description: 'Sube por la banda derecha hasta la línea de fondo, centra al área y retrocede de inmediato. Pana y Nico se cierran al centro para cubrir su ausencia — ninguno de los dos sube.',
        arrows: [
          { d: 'M 248 322 Q 272 240 272 158 L 265 105', color: C.ataque },
          { d: 'M 265 105 Q 240 72 195 65',             color: C.ataque },
        ],
      },
      defensa: {
        description: 'Baja a su carril derecho y cierra hacia adentro si el rival entra por el centro. No abandona su zona.',
        arrows: [
          { d: 'M 248 322 L 255 358', color: C.defensa },
        ],
      },
      transicion: {
        description: 'Primer pase disponible por la derecha. Da la opción de salida rápida y arranca a la espalda del rival.',
        arrows: [
          { d: 'M 248 322 Q 268 268 268 205', color: C.transicion },
        ],
      },
      pelotaParada: {
        description: 'En córners propios, se planta en el segundo palo para aprovechar el centro largo.',
        arrows: [
          { d: 'M 248 322 Q 238 205 202 75', color: C.pelotaParada },
        ],
      },
    },
  },

  pana: {
    id: 'pana',
    name: 'Pana',
    role: 'Defensor central',
    line: 'defensa',
    starter: true,
    position: P.pana,
    situations: {
      ataque: {
        description: 'No sube. Se cierra al centro junto a Nico para cubrir el espacio cuando Lucho ataca. Solo sale a presionar si la pelota está muy cerca.',
        arrows: [
          { d: 'M 178 322 L 158 322', color: C.ataque },
        ],
      },
      defensa: {
        description: 'Marca al delantero rival más cercano. No lo deja girar: cara a cara, siempre de frente.',
        arrows: [
          { d: 'M 178 322 L 178 300', color: C.defensa },
        ],
      },
      transicion: {
        description: 'Salida limpia al mediocampo. Busca a Agus o Semilla con un pase seguro sin arriesgar.',
        arrows: [
          { d: 'M 178 322 Q 152 278 118 232', color: C.transicion },
        ],
      },
      pelotaParada: {
        description: 'En córners en contra, marca en el área chica. Cero segundas pelotas.',
        arrows: [
          { d: 'M 178 322 L 155 400', color: C.pelotaParada },
        ],
      },
    },
  },

  nico: {
    id: 'nico',
    name: 'Nico',
    role: 'Central / Lateral izquierdo',
    line: 'defensa',
    starter: true,
    position: P.nico,
    situations: {
      ataque: {
        description: 'Espeja a Pana: se cierra al centro cuando Lucho sube. Puede subir por izquierda SOLO SI Simón le cubre la espalda.',
        arrows: [
          { d: 'M 102 322 L 120 322', color: C.ataque },
        ],
      },
      defensa: {
        description: 'Marca al segundo delantero rival. Mismo concepto que Pana: cara a cara, no lo deja girar.',
        arrows: [
          { d: 'M 102 322 L 102 300', color: C.defensa },
        ],
      },
      transicion: {
        description: 'Salida por izquierda hacia Simón o Semilla. Pase rápido y seguro para salir de la presión.',
        arrows: [
          { d: 'M 102 322 Q 82 262 62 192', color: C.transicion },
        ],
      },
      pelotaParada: {
        description: 'En córners en contra, cubre el área grande entre el palo y el área chica.',
        arrows: [
          { d: 'M 102 322 L 118 375', color: C.pelotaParada },
        ],
      },
    },
  },

  joe: {
    id: 'joe',
    name: 'Joe',
    role: 'Central / Lateral (variante)',
    line: 'defensa',
    starter: false,
    position: P.joe,
    situations: {
      ataque: {
        description: 'Mantiene la línea defensiva. Se cierra al medio para dar cobertura al lateral que sube. Disciplina posicional ante todo.',
        arrows: [
          { d: 'M 140 322 L 150 322', color: C.ataque },
        ],
      },
      defensa: {
        description: 'Marca al delantero más peligroso del rival. Agresivo en el uno a uno, nunca deja girar.',
        arrows: [
          { d: 'M 140 322 L 140 300', color: C.defensa },
        ],
      },
      transicion: {
        description: 'Pase corto al mediocampista libre. Salida segura sin riesgos.',
        arrows: [
          { d: 'M 140 322 Q 130 278 118 232', color: C.transicion },
        ],
      },
      pelotaParada: {
        description: 'Se suma a la marca en el área según dónde vaya el córner o tiro libre.',
        arrows: [
          { d: 'M 140 322 L 140 388', color: C.pelotaParada },
        ],
      },
    },
  },

  agus: {
    id: 'agus',
    name: 'Agus',
    role: 'Mediocampista 5 creativo',
    line: 'mediocampo',
    starter: true,
    position: P.agus,
    situations: {
      ataque: {
        description: 'Pivotea en el centro: da y pide la pelota constantemente en paredes y combinaciones. No sube más allá de la mitad de cancha rival.',
        arrows: [
          { d: 'M 118 232 Q 140 222 160 228', color: C.ataque },
          { d: 'M 118 232 Q 100 215 112 195', color: C.ataque },
        ],
      },
      defensa: {
        description: 'Baja a tapar el espacio entre la línea de 3 y el delantero rival. Corta líneas de pase — no persigue al portador.',
        arrows: [
          { d: 'M 118 232 L 118 278', color: C.defensa },
        ],
      },
      transicion: {
        description: 'Primer receptor de la salida defensiva. Recibe, controla y distribuye rápido sin dudar.',
        arrows: [
          { d: 'M 118 232 L 135 230', color: C.transicion },
        ],
      },
      pelotaParada: {
        description: 'Se ubica afuera del área rival para rechace o disparo de segunda. También puede tirarse al segundo palo.',
        arrows: [
          { d: 'M 118 232 Q 122 162 125 95', color: C.pelotaParada },
        ],
      },
    },
  },

  semilla: {
    id: 'semilla',
    name: 'Semilla',
    role: 'Mediocampista 5/10 ofensivo',
    line: 'mediocampo',
    starter: true,
    position: P.semilla,
    situations: {
      ataque: {
        description: 'Se proyecta al área cuando Primo o César generan espacio. Llega desde atrás al segundo palo para rematar. La llegada sorpresa es su arma.',
        arrows: [
          { d: 'M 182 232 Q 178 182 172 145 L 168 100', color: C.ataque },
        ],
      },
      defensa: {
        description: 'Acompaña a Agus, pero más orientado a presionar al mediocampista rival que tiene la pelota. No lo deja jugar con comodidad.',
        arrows: [
          { d: 'M 182 232 L 182 195', color: C.defensa },
        ],
      },
      transicion: {
        description: 'Arranca en carrera en el momento de recuperar. Busca el espacio entre líneas rivales antes de que cierren.',
        arrows: [
          { d: 'M 182 232 Q 175 192 162 155 L 158 132', color: C.transicion },
        ],
      },
      pelotaParada: {
        description: 'En córners propios entra al área al segundo palo con velocidad desde atrás. Especialista en llegadas tardías.',
        arrows: [
          { d: 'M 182 232 Q 198 162 202 78', color: C.pelotaParada },
        ],
      },
    },
  },

  simon: {
    id: 'simon',
    name: 'Simón',
    role: 'Volante por banda izquierda',
    line: 'mediocampo',
    starter: false,
    position: P.simon,
    situations: {
      ataque: {
        description: 'Sube por la banda izquierda en apoyo. Da opciones de pase, centra al área o combina con Semilla en triangulaciones.',
        arrows: [
          { d: 'M 62 192 Q 46 148 48 108 L 50 80', color: C.ataque },
        ],
      },
      defensa: {
        description: 'Cierra su banda: no permite que el rival suba con tiempo. Si el rival la tiene, presiona rápido.',
        arrows: [
          { d: 'M 62 192 L 50 245', color: C.defensa },
        ],
      },
      transicion: {
        description: 'Sale corriendo por izquierda en cuanto recuperamos. Opción de profundidad inmediata para el pase largo.',
        arrows: [
          { d: 'M 62 192 Q 44 148 46 102', color: C.transicion },
        ],
      },
      pelotaParada: {
        description: 'En córners propios se planta en el primer palo para definir de primera o generar confusión en el área.',
        arrows: [
          { d: 'M 62 192 Q 88 145 120 78', color: C.pelotaParada },
        ],
      },
    },
  },

  primo: {
    id: 'primo',
    name: 'Primo',
    role: 'Delantero goleador',
    line: 'delantera',
    starter: true,
    position: P.primo,
    situations: {
      ataque: {
        description: 'Diagonales cortas de 10-15 metros entre los centrales rivales, pidiendo el pase en profundidad. Siempre en movimiento — nunca parado.',
        arrows: [
          { d: 'M 150 108 Q 128 88 112 70', color: C.ataque },
          { d: 'M 150 108 Q 170 88 185 70', color: C.ataque },
        ],
      },
      defensa: {
        description: 'Se para entre los dos defensores rivales cortando el pase central. No corre al arquero. Presiona al central que tiene la pelota.',
        arrows: [
          { d: 'M 150 108 L 150 122', color: C.defensa },
        ],
      },
      transicion: {
        description: 'Arranca en diagonal al espacio apenas recuperamos. La primera opción de profundidad para el pase largo.',
        arrows: [
          { d: 'M 150 108 Q 128 88 110 68', color: C.transicion },
        ],
      },
      pelotaParada: {
        description: 'En córners propios, entra al área al primer palo. Remate directo o desvío al segundo palo para los que llegan.',
        arrows: [
          { d: 'M 150 108 Q 136 90 122 70', color: C.pelotaParada },
        ],
      },
    },
  },

  cesar: {
    id: 'cesar',
    name: 'César',
    role: 'Delantero de área',
    line: 'delantera',
    starter: false,
    position: P.cesar,
    situations: {
      ataque: {
        description: 'Se queda dentro del área o en sus cercanías esperando el centro o el pase filtrado. No baja a buscar la pelota — su trabajo es estar donde cae.',
        arrows: [
          { d: 'M 212 118 L 210 90', color: C.ataque },
        ],
      },
      defensa: {
        description: 'Presiona al lateral o central que sale jugando. Si está cerca, corre al portador con intensidad.',
        arrows: [
          { d: 'M 212 118 L 238 138', color: C.defensa },
        ],
      },
      transicion: {
        description: 'Se queda arriba como opción de pelota larga inmediata. No baja. Gana el duelo aéreo y baja para los que llegan.',
        arrows: [
          { d: 'M 212 118 L 212 102', color: C.transicion },
        ],
      },
      pelotaParada: {
        description: 'En córners propios, entra al área al segundo palo. Especialista en rematar de cabeza o técnica dentro del área.',
        arrows: [
          { d: 'M 212 118 Q 200 95 188 72', color: C.pelotaParada },
        ],
      },
    },
  },

  santi: {
    id: 'santi',
    name: 'Santi',
    role: 'Delantero con juego aéreo',
    line: 'delantera',
    starter: false,
    position: P.santi,
    situations: {
      ataque: {
        description: 'Se posiciona para ganar la pelota aérea en el área. Busca los centros de Lucho y Simón para bajar la pelota a Primo o César.',
        arrows: [
          { d: 'M 90 118 Q 118 100 148 85', color: C.ataque },
        ],
      },
      defensa: {
        description: 'Presiona al arquero rival en los saques largos. No lo deja poner el balón en juego con comodidad.',
        arrows: [
          { d: 'M 90 118 Q 118 90 148 58', color: C.defensa },
        ],
      },
      transicion: {
        description: 'Pide la pelota larga para ganar en el aire y bajar a Primo o César. Es el punto de apoyo aéreo en la salida rápida.',
        arrows: [
          { d: 'M 90 118 Q 115 98 148 82', color: C.transicion },
        ],
      },
      pelotaParada: {
        description: 'En córners propios, entra al área disputando el primer palo con su juego de cabeza. El más peligroso en el aire.',
        arrows: [
          { d: 'M 90 118 Q 106 95 122 70', color: C.pelotaParada },
        ],
      },
    },
  },
}

export const PLAYERS_LIST = Object.values(PLAYERS)
export const STARTERS    = PLAYERS_LIST.filter(p => p.starter)

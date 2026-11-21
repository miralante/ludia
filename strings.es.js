/* Ludia — es; Spanish is the editorial source of truth. */
window.App.i18n.register({
  "about": {
    "link": "Sobre la app",
    "title": "Sobre la app",
    "intro": "Ludia tiene ocho juegos. Cada juego tiene reglas, ejercicios y partidas. Aquí ves tus logros."
  },
  "core": {
    "chrome": {
      "appName": "Ludia"
    }
  },
  "ludia": {
    "games": "Juegos",
    "chess": "Ajedrez",
    "rules": "Reglas",
    "exercises": "Ejercicios",
    "play": "Jugar",
    "replaceTitle": "¿Empezar otra partida?",
    "replaceText": "Se sustituirá la partida guardada de este juego.",
    "confirm": "Empezar de nuevo"
  },
  "suiteBy": "Una app de",
  "lesson": {
    "board": {
      "title": "Conoce el tablero",
      "intro": "El tablero es el lugar donde juegas.",
      "step": {
        "0": "Este es el tablero. Tiene casillas claras y oscuras.",
        "1": "Cada casilla tiene una letra y un número. Esta es a1."
      },
      "locate": {
        "a1": {
          "text": "Toca a1.",
          "hint": "Abajo, a la izquierda."
        },
        "c3": {
          "text": "Toca c3.",
          "hint": "Busca la columna c y la fila 3."
        },
        "h1": {
          "text": "Toca h1.",
          "hint": "Abajo, a la derecha."
        }
      }
    },
    "turns": {
      "title": "Una jugada cada vez",
      "intro": "Cada persona tiene su turno.",
      "step": {
        "0": "Una persona lleva las piezas blancas. La otra lleva las negras.",
        "1": "Las blancas empiezan. Después juegan las negras.",
        "2": "Mueve una pieza en tu turno. Después espera el otro turno."
      },
      "q": {
        "0": {
          "text": "¿Qué piezas empiezan la partida?",
          "hint": "Primero juegan las blancas. Después juegan las negras.",
          "a": {
            "0": "Las blancas",
            "1": "Las negras",
            "2": "Las dos a la vez"
          }
        },
        "1": {
          "text": "Acabas de mover tus piezas blancas. ¿Qué haces ahora?",
          "hint": "Cada lado tiene su turno. No mueves dos veces seguidas.",
          "a": {
            "0": "Esperar a las negras",
            "1": "Mover otra pieza blanca",
            "2": "Mover una pieza negra también"
          }
        }
      }
    },
    "rook": {
      "title": "La torre va recta",
      "intro": "Arriba, abajo o hacia los lados.",
      "step": {
        "0": "La torre se mueve en línea recta.",
        "1": "Puede ir arriba, abajo, a la izquierda o a la derecha.",
        "2": "Puede avanzar varias casillas. No puede saltar otras piezas."
      },
      "q": {
        "0": {
          "text": "¿Cómo se mueve la torre?",
          "hint": "La torre va por una fila o por una columna.",
          "a": {
            "0": "En línea recta",
            "1": "En diagonal",
            "2": "Saltando en forma de L"
          }
        }
      },
      "target": {
        "text": "Mueve la pieza a d7.",
        "hint": "Toca la pieza. Después toca d7. Mira el camino."
      }
    },
    "bishop": {
      "title": "El alfil va en diagonal",
      "intro": "Sigue un camino inclinado.",
      "step": {
        "0": "El alfil se mueve en diagonal. Es un camino inclinado.",
        "1": "El alfil siempre sigue casillas del mismo color.",
        "2": "Puede avanzar varias casillas. No puede saltar otras piezas."
      },
      "q": {
        "0": {
          "text": "¿Cómo se mueve el alfil?",
          "hint": "Busca el camino inclinado. Sus casillas tienen el mismo color.",
          "a": {
            "0": "En diagonal",
            "1": "Solo hacia delante",
            "2": "En línea recta"
          }
        }
      },
      "target": {
        "text": "Mueve la pieza a f6.",
        "hint": "Toca la pieza. Después toca f6. Mira el camino."
      }
    },
    "queen": {
      "title": "La dama tiene dos caminos",
      "intro": "En línea recta y en diagonal.",
      "step": {
        "0": "La dama puede moverse en línea recta, como la torre.",
        "1": "También puede moverse en diagonal, como el alfil.",
        "2": "Puede avanzar varias casillas. No puede saltar otras piezas."
      },
      "q": {
        "0": {
          "text": "¿Qué caminos puede seguir la dama?",
          "hint": "La dama combina los caminos de la torre y del alfil.",
          "a": {
            "0": "Rectos y diagonales",
            "1": "Solo diagonales",
            "2": "Solo una casilla hacia delante"
          }
        }
      },
      "target": {
        "text": "Mueve la pieza a g7.",
        "hint": "Toca la pieza. Después toca g7. Mira el camino."
      }
    },
    "king": {
      "title": "Cuida a tu rey",
      "intro": "Un paso, con cuidado.",
      "step": {
        "0": "El rey se mueve una casilla en cualquier dirección.",
        "1": "El rey no puede ir a una casilla atacada.",
        "2": "Los dos reyes nunca pueden estar en casillas vecinas."
      },
      "q": {
        "0": {
          "text": "En un movimiento normal, ¿cuánto avanza el rey?",
          "hint": "El rey da un paso. Después espera su próximo turno.",
          "a": {
            "0": "Una casilla",
            "1": "Toda una fila",
            "2": "Tres casillas"
          }
        }
      },
      "target": {
        "text": "Mueve la pieza a e5.",
        "hint": "Toca la pieza. Después toca e5. Mira el camino."
      }
    },
    "knight": {
      "title": "El caballo salta",
      "intro": "Dos casillas y una al lado.",
      "step": {
        "0": "El caballo se mueve en forma de L.",
        "1": "Cuenta dos casillas en línea recta. Después, una hacia un lado.",
        "2": "El caballo puede saltar otras piezas. Es la única pieza que salta."
      },
      "q": {
        "0": {
          "text": "¿Qué pieza puede saltar otras piezas?",
          "hint": "Recuerda el salto en forma de L.",
          "a": {
            "0": "El caballo",
            "1": "La torre",
            "2": "El alfil"
          }
        }
      },
      "target": {
        "text": "Mueve la pieza a e6.",
        "hint": "Toca la pieza. Después toca e6. Mira el camino."
      }
    },
    "pawn": {
      "title": "El peón va hacia delante",
      "intro": "Avanza recto. Captura en diagonal.",
      "step": {
        "0": "El peón avanza una casilla hacia delante. No retrocede.",
        "1": "Desde su casilla inicial, puede avanzar dos casillas si están libres.",
        "2": "El peón captura una pieza contraria en la casilla diagonal de delante."
      },
      "q": {
        "0": {
          "text": "¿Cómo captura el peón?",
          "hint": "Para avanzar va recto. Para capturar va en diagonal.",
          "a": {
            "0": "Una casilla en diagonal hacia delante",
            "1": "Una casilla hacia atrás",
            "2": "Dos casillas hacia un lado"
          }
        }
      },
      "target": {
        "text": "Mueve la pieza a d3.",
        "hint": "Toca la pieza. Después toca d3. Mira el camino."
      }
    },
    "capture": {
      "title": "Capturar una pieza",
      "intro": "Ocupa la casilla de una pieza contraria.",
      "step": {
        "0": "Capturar es llegar a la casilla de una pieza contraria.",
        "1": "La pieza contraria sale del tablero. Tu pieza ocupa su lugar.",
        "2": "No puedes capturar tus propias piezas. El rey nunca se captura."
      },
      "q": {
        "0": {
          "text": "Tu torre encuentra una pieza de tu color. ¿Puede capturarla?",
          "hint": "Solo puedes capturar piezas del otro color. El rey nunca se captura.",
          "a": {
            "0": "No. Es una pieza de mi lado",
            "1": "Sí. Puede capturarla",
            "2": "Sí. Si es un peón"
          }
        }
      },
      "target": {
        "text": "Mueve la pieza a d7.",
        "hint": "Toca la pieza. Después toca d7. Mira el camino."
      }
    },
    "check": {
      "title": "Jaque: protege al rey",
      "intro": "El rey está atacado.",
      "step": {
        "0": "Hay jaque cuando una pieza contraria ataca a tu rey.",
        "1": "Debes quitar el jaque: mover el rey, tapar el ataque o capturar.",
        "2": "Si no hay ninguna salida, es jaque mate. La partida termina."
      },
      "q": {
        "0": {
          "text": "Tu rey está en jaque. ¿Qué debes hacer?",
          "hint": "Tu próxima jugada debe dejar a tu rey a salvo.",
          "a": {
            "0": "Quitar el ataque al rey",
            "1": "Mover cualquier peón",
            "2": "Esperar un turno"
          }
        },
        "1": {
          "text": "Hay jaque y no existe ninguna salida. ¿Qué ocurre?",
          "hint": "La partida termina antes de capturar al rey.",
          "a": {
            "0": "Es jaque mate. La partida termina",
            "1": "El rey salta sobre otra pieza",
            "2": "El otro lado captura al rey"
          }
        }
      }
    },
    "castle": {
      "title": "El enroque",
      "intro": "El rey y la torre se mueven juntos.",
      "step": {
        "0": "El enroque es una jugada especial del rey y una torre.",
        "1": "El rey avanza dos casillas hacia la torre. La torre queda junto al rey.",
        "2": "Ninguna de esas piezas puede haberse movido. El camino debe estar libre.",
        "3": "El rey no puede estar en jaque, pasar por un ataque ni acabar atacado."
      },
      "q": {
        "0": {
          "text": "¿Qué piezas participan en el enroque?",
          "hint": "Enrocar ayuda al rey a cambiar de lugar junto a una torre.",
          "a": {
            "0": "El rey y una torre",
            "1": "La dama y un caballo",
            "2": "Dos peones"
          }
        },
        "1": {
          "text": "Tu rey está en jaque. ¿Puedes enrocar ahora?",
          "hint": "El enroque no puede empezar con el rey en jaque.",
          "a": {
            "0": "No. Primero hay que quitar el jaque",
            "1": "Sí. Siempre",
            "2": "Sí. Si la torre no se ha movido"
          }
        }
      }
    },
    "promotion": {
      "title": "Un peón se transforma",
      "intro": "Llega al otro extremo del tablero.",
      "step": {
        "0": "Cuando un peón llega a la última fila, cambia de pieza.",
        "1": "Puedes elegir dama, torre, alfil o caballo. Esto se llama coronación.",
        "2": "No puedes elegir un rey ni dejarlo como peón."
      },
      "q": {
        "0": {
          "text": "Tu peón llega a la última fila. ¿En qué puede convertirse?",
          "hint": "Puedes elegir dama, torre, alfil o caballo.",
          "a": {
            "0": "En una dama",
            "1": "En otro rey",
            "2": "Debe seguir siendo peón"
          }
        },
        "1": {
          "text": "¿Cómo se llama el cambio del peón por otra pieza?",
          "hint": "Al llegar a la última fila, el peón se transforma.",
          "a": {
            "0": "Coronación",
            "1": "Enroque",
            "2": "Jaque"
          }
        }
      }
    },
    "enpassant": {
      "title": "La captura al paso",
      "intro": "Una captura especial entre peones.",
      "step": {
        "0": "Un peón contrario avanza dos casillas. Queda al lado de tu peón.",
        "1": "Puedes capturarlo como si hubiera avanzado solo una casilla.",
        "2": "Tu peón va en diagonal a la casilla que el otro peón saltó.",
        "3": "Solo puedes hacerlo en tu siguiente jugada. Después se pierde la oportunidad."
      },
      "q": {
        "0": {
          "text": "¿Cuándo puedes hacer una captura al paso?",
          "hint": "La oportunidad dura una sola jugada.",
          "a": {
            "0": "Justo después del avance de dos casillas",
            "1": "En cualquier turno posterior",
            "2": "Cuando un caballo salta"
          }
        },
        "1": {
          "text": "¿Qué piezas hacen la captura al paso?",
          "hint": "Es una jugada especial entre dos peones.",
          "a": {
            "0": "Los peones",
            "1": "Las torres",
            "2": "Los reyes"
          }
        }
      }
    },
    "draw": {
      "title": "Una partida también puede empatar",
      "intro": "A veces no gana ningún lado.",
      "step": {
        "0": "Un empate se llama tablas. No gana ningún lado.",
        "1": "Si no hay jugadas legales y no hay jaque, es ahogado. Son tablas.",
        "2": "También hay tablas si quedan solo los dos reyes.",
        "3": "Al repetir una posición tres veces, puedes pedir tablas."
      },
      "q": {
        "0": {
          "text": "No hay jaque. No puedes hacer ninguna jugada legal. ¿Qué ocurre?",
          "hint": "En el ahogado, el rey no está atacado.",
          "a": {
            "0": "Es ahogado. La partida queda en tablas",
            "1": "Es jaque mate",
            "2": "Puedes mover una pieza contraria"
          }
        },
        "1": {
          "text": "Solo quedan los dos reyes. ¿Quién gana?",
          "hint": "Un rey solo no puede dar jaque mate.",
          "a": {
            "0": "Nadie. Son tablas",
            "1": "Las blancas",
            "2": "Las negras"
          }
        }
      }
    }
  },
  "app": {
    "tagline": "Ajedrez, paso a paso.",
    "title": "Ludia — Juegos a tu manera",
    "description": "Ocho juegos con reglas visuales, ejercicios y partidas a tu ritmo."
  },
  "nav": {
    "home": "Inicio",
    "learn": "Inicio",
    "practice": "Retos",
    "play": "Partida",
    "settings": "Ajustes",
    "skip": "Ir al contenido",
    "suite": "Más apps de Apptonomia"
  },
  "common": {
    "back": "Volver",
    "next": "Siguiente",
    "previous": "Anterior",
    "done": "Visto",
    "pending": "Por descubrir",
    "cancel": "Cancelar",
    "close": "Cerrar",
    "continue": "Continuar",
    "offline": "Estás sin conexión. Puedes seguir jugando.",
    "storageUnavailable": "Puedes seguir. Este navegador no permite guardar tus avances.",
    "saved": "Tus avances se guardan en este dispositivo.",
    "again": "Repetir",
    "choose": "Elegir"
  },
  "learn": {
    "title": "Aprende una cosa cada vez.",
    "example": "Ver movimiento",
    "reset": "Volver",
    "diagram": "Ejemplo del tablero",
    "other": "Inicio"
  },
  "practice": {
    "title": "Vamos a probar lo aprendido.",
    "hint": "Pista",
    "understood": "Entendido",
    "lesson": "Ver de nuevo",
    "return": "Volver",
    "again": "Prueba otra casilla u opción.",
    "right": "¡Bien!",
    "choosePiece": "Toca la pieza.",
    "chooseSquare": "Elige una casilla.",
    "complete": "¡Listo!",
    "repeat": "Repetir",
    "toGame": "Una partida"
  },
  "play": {
    "title": "Una partida",
    "boardType": "Piezas",
    "mini": "Pocas piezas",
    "miniDesc": "Reyes, peones y una torre.",
    "full": "Todas las piezas",
    "fullDesc": "La posición inicial.",
    "partner": "Rival",
    "computer": "Ludia",
    "computerDesc": "Tú llevas las blancas.",
    "local": "Otra persona",
    "localDesc": "En este dispositivo.",
    "start": "Empezar",
    "resume": "Continuar mi partida",
    "new": "Nueva partida",
    "newTitle": "¿Empezar otra partida?",
    "newText": "Se sustituirá la partida actual.",
    "whiteTurn": "Turno de las blancas",
    "blackTurn": "Turno de las negras",
    "thinking": "Turno de Ludia",
    "select": "Toca una pieza de las {side}.",
    "destination": "Elige una casilla marcada.",
    "selected": "{piece} en {square}.",
    "noMoves": "Elige otra pieza.",
    "invalid": "Elige una casilla marcada.",
    "check": "Jaque. Tu próxima jugada debe proteger al rey.",
    "hint": "Pista",
    "undo": "Deshacer",
    "hintText": "{piece}: {from} → {to}.",
    "legend": "● Destino · ◎ Captura",
    "board": "Tablero de ajedrez. Usa las flechas para recorrer las casillas.",
    "keyboard": "Teclado: flechas para elegir casilla. Intro para tocar. Escape para soltar.",
    "empty": "{square}, vacía",
    "square": "{square}, {side}: {piece}",
    "destinationLabel": "destino posible",
    "captureLabel": "captura posible",
    "selectedLabel": "seleccionada",
    "white": "Blancas",
    "black": "Negras",
    "you": "Tú",
    "moved": "{side}: {piece}, de {from} a {to}.",
    "captured": "Captura {piece}.",
    "castled": "El rey y la torre han enrocado.",
    "promoted": "El peón se ha convertido en {piece}.",
    "enpassant": "Captura al paso: sale el peón de la casilla vecina.",
    "lastMove": "Última jugada",
    "noLastMove": "Las blancas empiezan.",
    "promotion": "Tu peón ha llegado. Elige su nueva pieza.",
    "mate": "Jaque mate. Ganan las {side}.",
    "stalemate": "Tablas por ahogado. No hay jaque ni jugadas posibles.",
    "material": "Tablas. Estas piezas no pueden dar jaque mate.",
    "fivefold": "Tablas. La misma posición se ha repetido cinco veces.",
    "seventyfive": "Tablas. Han pasado 75 turnos por lado sin mover peones ni capturar.",
    "fifty": "Tablas solicitadas tras 50 turnos por lado sin mover peones ni capturar.",
    "threefold": "Tablas solicitadas al repetir la misma posición tres veces.",
    "claim": "Pedir tablas",
    "claimAvailable": "Puedes pedir tablas por repetición o por muchos turnos sin avances.",
    "history": "Ver las jugadas de esta partida",
    "list": "Elegir por nombre",
    "from": "Elige una pieza",
    "to": "Elige su destino",
    "move": "Mover",
    "choose": "Elige una opción"
  },
  "piece": {
    "p": "peón",
    "r": "torre",
    "n": "caballo",
    "b": "alfil",
    "q": "dama",
    "k": "rey"
  },
  "settings": {
    "title": "Ajustes",
    "language": "Idioma",
    "text": "Tamaño del texto",
    "regular": "Normal",
    "large": "Grande",
    "contrast": "Contraste alto",
    "pieceNames": "Nombres de piezas",
    "data": "Datos guardados",
    "privacy": "Todo queda en este navegador. No necesitas una cuenta.",
    "delete": "Borrar datos",
    "confirmTitle": "¿Borrar tus datos de Ludia?",
    "confirmText": "Se borrarán tus avances, ajustes y partida en este dispositivo.",
    "confirm": "Sí, borrar mis datos",
    "deleted": "Tus datos de Ludia se han borrado.",
    "sounds": "Sonidos"
  },
  "footer": {
    "note": "Una app de Apptonomia."
  },
  "privacy": {
    "title": "Tus datos se quedan contigo.",
    "intro": "Ludia no pide tu nombre ni tu correo.",
    "storage": "Guarda tus avances y tu partida solo en este navegador.",
    "tracking": "No usa cookies, anuncios, cuentas ni seguimiento.",
    "reset": "Puedes borrar los datos desde Ajustes.",
    "link": "Privacidad"
  },
  "support": {
    "link": "Guía de acompañamiento"
  },
  "mini": {
    "title": "Retos",
    "open": "Ver retos",
    "summary": "{n} de {total} resueltos",
    "group": {
      "arrive": "A la bandera",
      "path": "Busca un camino",
      "protect": "Protege al rey"
    },
    "completed": "Resuelto",
    "boardSize": "{n} × {n}",
    "back": "Retos",
    "return": "Volver al reto",
    "goal": "Llega a {square}.",
    "captureGoal": "Captura en {square}.",
    "safeGoal": "Protege al rey.",
    "flag": "bandera: tu meta",
    "kingLabel": "rey que debes proteger",
    "attackerLabel": "pieza que ataca al rey",
    "movable": "puedes mover esta pieza",
    "flagLegend": "⚑ Meta",
    "safeLegend": "♔ Tu rey · ! Ataque",
    "board": "Tablero del minijuego. Las flechas recorren las casillas.",
    "success": "¡Hecho!",
    "select": "Toca tu {piece}.",
    "destination": "Elige una casilla.",
    "targetCount": "Bandera {n} de {total}.",
    "next": "Siguiente",
    "showMoves": "Ver movimientos",
    "supportChoice": "Puedes quitar los puntos para probar sin ellos. La ayuda sigue disponible.",
    "restart": "Repetir",
    "rules": {
      "text": "Reglas del reto",
      "move": "Solo mueves tu pieza blanca. Las otras piezas están quietas.",
      "protect": "Tu rey debe quedar fuera del ataque. Después termina el reto."
    },
    "reload": "Puedes volver desde la lección sin perder este tablero. Al recargar la página, el reto empieza de nuevo. Las metas resueltas quedan guardadas.",
    "undone": "Volvemos aquí.",
    "again": "Prueba otra casilla.",
    "nextFlag": "¡Bien! Ve a la siguiente bandera.",
    "moved": "{square}.",
    "rook-flag": {
      "title": "La torre va recta",
      "intro": "Lleva la torre a la bandera.",
      "rule": "La torre va en línea recta: arriba, abajo o hacia los lados."
    },
    "bishop-flag": {
      "title": "El camino del alfil",
      "intro": "Lleva el alfil a la bandera.",
      "rule": "El alfil va en diagonal: un camino inclinado. Sigue casillas del mismo color."
    },
    "knight-flag": {
      "title": "Un salto de caballo",
      "intro": "Lleva el caballo a la bandera. El peón se queda quieto.",
      "rule": "El caballo avanza dos casillas y una hacia un lado. Puede saltar por encima del peón."
    },
    "pawn-flag": {
      "title": "El peón avanza",
      "intro": "Lleva el peón a la bandera.",
      "rule": "El peón avanza hacia arriba. Puede dar un paso. Desde su casilla inicial puede dar dos si el camino está libre."
    },
    "rook-path": {
      "title": "Dobla la esquina",
      "intro": "Lleva la torre a las dos banderas, una después de otra. El peón se queda quieto.",
      "rule": "La torre no salta el peón. Usa una línea recta en cada jugada. La siguiente bandera aparece al llegar."
    },
    "bishop-path": {
      "title": "Rodea con el alfil",
      "intro": "Lleva el alfil a la bandera. Busca un camino alrededor del peón.",
      "rule": "El peón blanco se queda quieto. El alfil no puede saltarlo ni capturarlo. Prueba varias diagonales."
    },
    "knight-path": {
      "title": "Salto a salto",
      "intro": "Lleva el caballo hasta la bandera. Puedes necesitar varios saltos.",
      "rule": "En cada salto, cuenta dos casillas y una hacia un lado. El peón se queda quieto."
    },
    "pawn-capture": {
      "title": "Captura y avanza",
      "intro": "Mueve el peón de b2. Primero captura el peón negro. Después, llega a la nueva bandera.",
      "rule": "El peón captura una casilla en diagonal hacia arriba. Para avanzar sin capturar, va recto. El otro peón blanco se queda quieto."
    },
    "king-step": {
      "title": "Aparta al rey",
      "intro": "La torre negra ataca a tu rey. Mueve el rey a una casilla segura.",
      "rule": "El rey da un paso. La casilla elegida no puede estar atacada. Puedes probar distintos destinos seguros."
    },
    "rook-shield": {
      "title": "La torre hace de escudo",
      "intro": "Mueve tu torre para tapar el ataque al rey.",
      "rule": "Coloca la torre blanca entre la torre negra y tu rey. En este reto solo mueves la torre blanca."
    },
    "bishop-capture": {
      "title": "Captura para proteger",
      "intro": "Mueve el alfil para capturar la torre que ataca a tu rey.",
      "rule": "El alfil captura en diagonal. En este reto solo mueves el alfil blanco."
    },
    "choose-safety": {
      "title": "Elige cómo proteger",
      "intro": "Tu rey está en jaque. Puedes mover el rey, la torre o el alfil blancos.",
      "rule": "Busca una solución: apartar al rey o poner una pieza delante del ataque. Hay varias jugadas que sirven."
    },
    "selectAny": "Elige una pieza blanca."
  },
  "topics": {
    "board": "El tablero",
    "pieces": "Las piezas",
    "match": "En la partida"
  },
  "achievements": {
    "title": "Logros",
    "hint": "Los logros aparecen solos mientras juegas.",
    "count": "Tienes {n} de {total} logros.",
    "local": "Tus logros se guardan solo en este navegador."
  },
  "achievement": {
    "firstExercise": {
      "text": "Primer ejercicio",
      "desc": "Resuelve tu primer ejercicio o reto."
    },
    "tenExercises": {
      "text": "Diez ejercicios",
      "desc": "Resuelve diez ejercicios o retos."
    },
    "streak3": {
      "text": "Racha de 3",
      "desc": "Acierta tres ejercicios seguidos a la primera."
    },
    "allGames": {
      "text": "Todos los juegos",
      "desc": "Termina una partida en cada uno de los ocho juegos."
    },
    "completeGame": {
      "text": "Juego completo",
      "desc": "Resuelve todos los ejercicios de un juego."
    },
    "champion": {
      "text": "Ganas a Ludia",
      "desc": "Gana una partida contra Ludia."
    },
    "locked": "Todavía no",
    "unlockedAt": "Conseguido el {date}"
  }
}, 'es');

/* Ludia — en; Spanish is the editorial source of truth. */
window.App.i18n.register({
  "about": {
    "link": "About the app",
    "title": "About the app",
    "intro": "Ludia has eight games. Each game has rules, exercises and matches. Here you can see your achievements."
  },
  "core": {
    "chrome": {
      "appName": "Ludia"
    }
  },
  "ludia": {
    "games": "Games",
    "chess": "Chess",
    "rules": "Rules",
    "exercises": "Exercises",
    "play": "Play",
    "replaceTitle": "Start another game?",
    "replaceText": "This will replace the saved game for this game.",
    "confirm": "Start again"
  },
  "suiteBy": "An app by",
  "lesson": {
    "board": {
      "title": "Meet the board",
      "intro": "The board is where you play.",
      "step": {
        "0": "This is the board. It has light and dark squares.",
        "1": "Each square has a letter and a number. This is a1."
      },
      "locate": {
        "a1": {
          "text": "Tap a1.",
          "hint": "Bottom left."
        },
        "c3": {
          "text": "Tap c3.",
          "hint": "Find column c and row 3."
        },
        "h1": {
          "text": "Tap h1.",
          "hint": "Bottom right."
        }
      }
    },
    "turns": {
      "title": "One move at a time",
      "intro": "Each player takes a turn.",
      "step": {
        "0": "One player has the white pieces. The other has the black pieces.",
        "1": "White moves first. Then Black moves.",
        "2": "Move one piece on your turn. Then wait for the other turn."
      },
      "q": {
        "0": {
          "text": "Which pieces start the game?",
          "hint": "White moves first. Then Black moves.",
          "a": {
            "0": "White",
            "1": "Black",
            "2": "Both at once"
          }
        },
        "1": {
          "text": "You just moved a white piece. What do you do now?",
          "hint": "Each side has a turn. You do not move twice in a row.",
          "a": {
            "0": "Wait for Black",
            "1": "Move another white piece",
            "2": "Move a black piece too"
          }
        }
      }
    },
    "rook": {
      "title": "The rook moves straight",
      "intro": "Up, down or sideways.",
      "step": {
        "0": "The rook moves in a straight line.",
        "1": "It can move up, down, left or right.",
        "2": "It can move several squares. It cannot jump over other pieces."
      },
      "q": {
        "0": {
          "text": "How does the rook move?",
          "hint": "The rook follows a row or a column.",
          "a": {
            "0": "In a straight line",
            "1": "Diagonally",
            "2": "Jumping in an L shape"
          }
        }
      },
      "target": {
        "text": "Move the piece to d7.",
        "hint": "Select the piece. Then select d7. Look at the path."
      }
    },
    "bishop": {
      "title": "The bishop moves diagonally",
      "intro": "Follow a sloping path.",
      "step": {
        "0": "The bishop moves diagonally. This is a sloping path.",
        "1": "The bishop always stays on squares of the same color.",
        "2": "It can move several squares. It cannot jump over other pieces."
      },
      "q": {
        "0": {
          "text": "How does the bishop move?",
          "hint": "Look for the sloping path. Its squares have the same color.",
          "a": {
            "0": "Diagonally",
            "1": "Only forward",
            "2": "In a straight line"
          }
        }
      },
      "target": {
        "text": "Move the piece to f6.",
        "hint": "Select the piece. Then select f6. Look at the path."
      }
    },
    "queen": {
      "title": "The queen has two paths",
      "intro": "Straight and diagonal.",
      "step": {
        "0": "The queen can move in a straight line, like the rook.",
        "1": "It can also move diagonally, like the bishop.",
        "2": "It can move several squares. It cannot jump over other pieces."
      },
      "q": {
        "0": {
          "text": "Which paths can the queen follow?",
          "hint": "The queen combines the paths of the rook and bishop.",
          "a": {
            "0": "Straight and diagonal",
            "1": "Only diagonal",
            "2": "Only one square forward"
          }
        }
      },
      "target": {
        "text": "Move the piece to g7.",
        "hint": "Select the piece. Then select g7. Look at the path."
      }
    },
    "king": {
      "title": "Look after your king",
      "intro": "One careful step.",
      "step": {
        "0": "The king moves one square in any direction.",
        "1": "The king cannot move to an attacked square.",
        "2": "The two kings can never stand on neighboring squares."
      },
      "q": {
        "0": {
          "text": "In an ordinary move, how far can the king go?",
          "hint": "The king takes one step. Then it waits for its next turn.",
          "a": {
            "0": "One square",
            "1": "A whole row",
            "2": "Three squares"
          }
        }
      },
      "target": {
        "text": "Move the piece to e5.",
        "hint": "Select the piece. Then select e5. Look at the path."
      }
    },
    "knight": {
      "title": "The knight jumps",
      "intro": "Two squares, then one sideways.",
      "step": {
        "0": "The knight moves in an L shape.",
        "1": "Count two squares in a straight line. Then one to the side.",
        "2": "The knight can jump over other pieces. Only the knight can jump."
      },
      "q": {
        "0": {
          "text": "Which piece can jump over other pieces?",
          "hint": "Remember the L-shaped jump.",
          "a": {
            "0": "The knight",
            "1": "The rook",
            "2": "The bishop"
          }
        }
      },
      "target": {
        "text": "Move the piece to e6.",
        "hint": "Select the piece. Then select e6. Look at the path."
      }
    },
    "pawn": {
      "title": "The pawn moves forward",
      "intro": "Move straight. Capture diagonally.",
      "step": {
        "0": "The pawn moves one square forward. It cannot move backward.",
        "1": "From its starting square, it can move two squares if both are empty.",
        "2": "The pawn captures an opposing piece one square diagonally forward."
      },
      "q": {
        "0": {
          "text": "How does the pawn capture?",
          "hint": "It moves straight ahead. It captures diagonally.",
          "a": {
            "0": "One square diagonally forward",
            "1": "One square backward",
            "2": "Two squares sideways"
          }
        }
      },
      "target": {
        "text": "Move the piece to d3.",
        "hint": "Select the piece. Then select d3. Look at the path."
      }
    },
    "capture": {
      "title": "Capture a piece",
      "intro": "Take the square of an opposing piece.",
      "step": {
        "0": "To capture is to move onto an opposing piece’s square.",
        "1": "The opposing piece leaves the board. Your piece takes its place.",
        "2": "You cannot capture your own pieces. The king is never captured."
      },
      "q": {
        "0": {
          "text": "Your rook meets a piece of your color. Can it capture it?",
          "hint": "You can only capture pieces of the other color. The king is never captured.",
          "a": {
            "0": "No. It is on my side",
            "1": "Yes. It can capture it",
            "2": "Yes. If it is a pawn"
          }
        }
      },
      "target": {
        "text": "Move the piece to d7.",
        "hint": "Select the piece. Then select d7. Look at the path."
      }
    },
    "check": {
      "title": "Check: protect the king",
      "intro": "The king is attacked.",
      "step": {
        "0": "You are in check when an opposing piece attacks your king.",
        "1": "You must escape check: move the king, block or capture the attacker.",
        "2": "If there is no escape, it is checkmate. The game ends."
      },
      "q": {
        "0": {
          "text": "Your king is in check. What must you do?",
          "hint": "Your next move must make your king safe.",
          "a": {
            "0": "Get the king out of check",
            "1": "Move any pawn",
            "2": "Wait one turn"
          }
        },
        "1": {
          "text": "There is check and no possible escape. What happens?",
          "hint": "The game ends before the king is captured.",
          "a": {
            "0": "It is checkmate. The game ends",
            "1": "The king jumps over another piece",
            "2": "The other side captures the king"
          }
        }
      }
    },
    "castle": {
      "title": "Castling",
      "intro": "The king and rook move together.",
      "step": {
        "0": "Castling is a special move with the king and a rook.",
        "1": "The king moves two squares toward the rook. The rook lands beside the king.",
        "2": "Neither piece may have moved before. The path must be empty.",
        "3": "The king cannot be in check, cross an attack or finish under attack."
      },
      "q": {
        "0": {
          "text": "Which pieces take part in castling?",
          "hint": "Castling helps the king move together with a rook.",
          "a": {
            "0": "The king and a rook",
            "1": "The queen and a knight",
            "2": "Two pawns"
          }
        },
        "1": {
          "text": "Your king is in check. Can you castle now?",
          "hint": "You cannot start castling when your king is in check.",
          "a": {
            "0": "No. First you must escape check",
            "1": "Yes. Always",
            "2": "Yes. If the rook has not moved"
          }
        }
      }
    },
    "promotion": {
      "title": "A pawn transforms",
      "intro": "Reach the far end of the board.",
      "step": {
        "0": "When a pawn reaches the last row, it changes into another piece.",
        "1": "You can choose queen, rook, bishop or knight. This is called promotion.",
        "2": "You cannot choose a king or leave it as a pawn."
      },
      "q": {
        "0": {
          "text": "Your pawn reaches the last row. What can it become?",
          "hint": "You can choose queen, rook, bishop or knight.",
          "a": {
            "0": "A queen",
            "1": "Another king",
            "2": "It must stay a pawn"
          }
        },
        "1": {
          "text": "What is changing a pawn into another piece called?",
          "hint": "At the last row, the pawn transforms.",
          "a": {
            "0": "Promotion",
            "1": "Castling",
            "2": "Check"
          }
        }
      }
    },
    "enpassant": {
      "title": "En passant capture",
      "intro": "A special capture between pawns.",
      "step": {
        "0": "An opposing pawn moves two squares. It lands beside your pawn.",
        "1": "You can capture it as if it had moved only one square.",
        "2": "Your pawn moves diagonally to the square the other pawn skipped.",
        "3": "You must do this on your very next move. Then the chance is gone."
      },
      "q": {
        "0": {
          "text": "When can you make an en passant capture?",
          "hint": "The chance lasts for just one move.",
          "a": {
            "0": "Right after the two-square move",
            "1": "On any later turn",
            "2": "When a knight jumps"
          }
        },
        "1": {
          "text": "Which pieces make an en passant capture?",
          "hint": "It is a special move between two pawns.",
          "a": {
            "0": "Pawns",
            "1": "Rooks",
            "2": "Kings"
          }
        }
      }
    },
    "draw": {
      "title": "A game can also be a draw",
      "intro": "Sometimes neither side wins.",
      "step": {
        "0": "A draw means neither side wins.",
        "1": "If there are no legal moves and no check, it is stalemate: a draw.",
        "2": "It is also a draw when only the two kings remain.",
        "3": "When a position repeats three times, you can claim a draw."
      },
      "q": {
        "0": {
          "text": "There is no check. You have no legal move. What happens?",
          "hint": "In stalemate, the king is not attacked.",
          "a": {
            "0": "It is stalemate. The game is drawn",
            "1": "It is checkmate",
            "2": "You can move an opposing piece"
          }
        },
        "1": {
          "text": "Only the two kings remain. Who wins?",
          "hint": "A king alone cannot give checkmate.",
          "a": {
            "0": "Neither side. It is a draw",
            "1": "White",
            "2": "Black"
          }
        }
      }
    }
  },
  "app": {
    "tagline": "Chess, step by step.",
    "title": "Ludia — Games your way",
    "description": "Eight games with visual rules, exercises and play at your pace."
  },
  "nav": {
    "home": "Home",
    "learn": "Home",
    "practice": "Challenges",
    "play": "Match",
    "settings": "Settings",
    "skip": "Skip to content",
    "suite": "More Apptonomia apps"
  },
  "common": {
    "back": "Back",
    "next": "Next",
    "previous": "Previous",
    "done": "Read",
    "pending": "To discover",
    "cancel": "Cancel",
    "close": "Close",
    "continue": "Continue",
    "offline": "You are offline. You can keep playing.",
    "storageUnavailable": "You can continue. This browser cannot save your progress.",
    "saved": "Your progress is saved on this device.",
    "again": "Repeat",
    "choose": "Choose"
  },
  "learn": {
    "title": "Learn one thing at a time.",
    "example": "Show move",
    "reset": "Back",
    "diagram": "Example board",
    "other": "Home"
  },
  "practice": {
    "title": "Let’s try what you learned.",
    "hint": "Hint",
    "understood": "Understood",
    "lesson": "See again",
    "return": "Back",
    "again": "Try another square or option.",
    "right": "Well done!",
    "choosePiece": "Tap the piece.",
    "chooseSquare": "Choose a square.",
    "complete": "Done!",
    "repeat": "Repeat",
    "toGame": "A match"
  },
  "play": {
    "title": "A match",
    "boardType": "Pieces",
    "mini": "Fewer pieces",
    "miniDesc": "Kings, pawns and a rook.",
    "full": "All pieces",
    "fullDesc": "The starting position.",
    "partner": "Opponent",
    "computer": "Ludia",
    "computerDesc": "You have white.",
    "local": "Another person",
    "localDesc": "On this device.",
    "start": "Start",
    "resume": "Continue my game",
    "new": "New game",
    "newTitle": "Start another game?",
    "newText": "This will replace the current match.",
    "whiteTurn": "White to move",
    "blackTurn": "Black to move",
    "thinking": "Ludia’s turn",
    "select": "Tap one of the {side} pieces.",
    "destination": "Choose a marked square.",
    "selected": "{piece} on {square}.",
    "noMoves": "Choose another piece.",
    "invalid": "Choose a marked square.",
    "check": "Check. Your next move must protect the king.",
    "hint": "Hint",
    "undo": "Undo",
    "hintText": "{piece}: {from} → {to}.",
    "legend": "● Destination · ◎ Capture",
    "board": "Chessboard. Use the arrow keys to move between squares.",
    "keyboard": "Keyboard: arrows to choose a square. Enter to select. Escape to release.",
    "empty": "{square}, empty",
    "square": "{square}, {side}: {piece}",
    "destinationLabel": "possible destination",
    "captureLabel": "possible capture",
    "selectedLabel": "selected",
    "white": "White",
    "black": "Black",
    "you": "You",
    "moved": "{side}: {piece}, from {from} to {to}.",
    "captured": "Captures {piece}.",
    "castled": "The king and rook have castled.",
    "promoted": "The pawn has become a {piece}.",
    "enpassant": "En passant: the pawn on the neighboring square is removed.",
    "lastMove": "Last move",
    "noLastMove": "White moves first.",
    "promotion": "Your pawn has arrived. Choose its new piece.",
    "mate": "Checkmate. {side} wins.",
    "stalemate": "Draw by stalemate. There is no check and no possible move.",
    "material": "Draw. These pieces cannot give checkmate.",
    "fivefold": "Draw. The same position has repeated five times.",
    "seventyfive": "Draw. Each side has made 75 moves without a pawn move or capture.",
    "fifty": "Draw claimed after 50 moves per side without a pawn move or capture.",
    "threefold": "Draw claimed after the same position appeared three times.",
    "claim": "Claim a draw",
    "claimAvailable": "You can claim a draw for repetition or many turns without progress.",
    "history": "See this game’s moves",
    "list": "Choose by name",
    "from": "Choose a piece",
    "to": "Choose its destination",
    "move": "Move",
    "choose": "Choose an option"
  },
  "piece": {
    "p": "pawn",
    "r": "rook",
    "n": "knight",
    "b": "bishop",
    "q": "queen",
    "k": "king"
  },
  "settings": {
    "title": "Settings",
    "language": "Language",
    "text": "Text size",
    "regular": "Regular",
    "large": "Large",
    "contrast": "High contrast",
    "pieceNames": "Piece names",
    "data": "Saved data",
    "privacy": "Everything stays in this browser. You do not need an account.",
    "delete": "Delete data",
    "confirmTitle": "Delete your Ludia data?",
    "confirmText": "Your progress, settings and game on this device will be deleted.",
    "confirm": "Yes, delete my data",
    "deleted": "Your Ludia data has been deleted.",
    "sounds": "Sounds"
  },
  "footer": {
    "note": "An Apptonomia app."
  },
  "privacy": {
    "title": "Your data stays with you.",
    "intro": "Ludia does not ask for your name or email.",
    "storage": "It saves your progress and game only in this browser.",
    "tracking": "It uses no cookies, ads, accounts or tracking.",
    "reset": "You can delete your data in Settings.",
    "link": "Privacy"
  },
  "support": {
    "link": "Support guide"
  },
  "mini": {
    "title": "Challenges",
    "open": "See challenges",
    "summary": "{n} of {total} completed",
    "group": {
      "arrive": "To the flag",
      "path": "Find a path",
      "protect": "Protect the king"
    },
    "completed": "Completed",
    "boardSize": "{n} × {n}",
    "back": "Challenges",
    "return": "Back to the challenge",
    "goal": "Reach {square}.",
    "captureGoal": "Capture on {square}.",
    "safeGoal": "Protect the king.",
    "flag": "flag: your goal",
    "kingLabel": "king to protect",
    "attackerLabel": "piece attacking the king",
    "movable": "you can move this piece",
    "flagLegend": "⚑ Goal",
    "safeLegend": "♔ Your king · ! Attack",
    "board": "Mini-game board. Use the arrow keys to explore the squares.",
    "success": "Done!",
    "select": "Tap your {piece}.",
    "destination": "Choose a square.",
    "targetCount": "Flag {n} of {total}.",
    "next": "Next",
    "showMoves": "Show moves",
    "supportChoice": "You can hide the dots to try without them. Help is still available.",
    "restart": "Repeat",
    "rules": {
      "text": "Challenge rules",
      "move": "Only your white piece moves. Other pieces stay still.",
      "protect": "Your king must be out of check. Then the challenge ends."
    },
    "reload": "You can return from the lesson without losing this board. Reloading the page starts the challenge again. Completed goals stay saved.",
    "undone": "Back to this position.",
    "again": "Try another square.",
    "nextFlag": "Well done! Reach the next flag.",
    "moved": "{square}.",
    "rook-flag": {
      "title": "The rook goes straight",
      "intro": "Move the rook to the flag.",
      "rule": "The rook moves in a straight line: up, down or sideways."
    },
    "bishop-flag": {
      "title": "The bishop’s path",
      "intro": "Move the bishop to the flag.",
      "rule": "The bishop moves diagonally: along a sloping line. It stays on squares of the same colour."
    },
    "knight-flag": {
      "title": "A knight’s jump",
      "intro": "Move the knight to the flag. The pawn stays still.",
      "rule": "The knight moves two squares and one to the side. It can jump over the pawn."
    },
    "pawn-flag": {
      "title": "The pawn moves forward",
      "intro": "Move the pawn to the flag.",
      "rule": "The pawn moves up the board. It can take one step. From its starting square it can take two if the path is clear."
    },
    "rook-path": {
      "title": "Turn the corner",
      "intro": "Move the rook to the two flags, one after the other. The pawn stays still.",
      "rule": "The rook cannot jump over the pawn. Use a straight line for each move. The next flag appears when you arrive."
    },
    "bishop-path": {
      "title": "Go around with the bishop",
      "intro": "Move the bishop to the flag. Find a path around the pawn.",
      "rule": "The white pawn stays still. The bishop cannot jump over it or capture it. Try a sequence of diagonals."
    },
    "knight-path": {
      "title": "Jump by jump",
      "intro": "Move the knight to the flag. You may need several jumps.",
      "rule": "For each jump, count two squares and one to the side. The pawn stays still."
    },
    "pawn-capture": {
      "title": "Capture and move forward",
      "intro": "Move the pawn on b2. First capture the black pawn. Then reach the new flag.",
      "rule": "A pawn captures one square diagonally forward. To move without capturing, it goes straight forward. The other white pawn stays still."
    },
    "king-step": {
      "title": "Move the king away",
      "intro": "The black rook attacks your king. Move the king to a safe square.",
      "rule": "The king takes one step. The chosen square must not be attacked. You can try different safe destinations."
    },
    "rook-shield": {
      "title": "The rook makes a shield",
      "intro": "Move your rook to block the attack on the king.",
      "rule": "Put the white rook between the black rook and your king. In this challenge you only move the white rook."
    },
    "bishop-capture": {
      "title": "Capture to protect",
      "intro": "Move the bishop to capture the rook attacking your king.",
      "rule": "The bishop captures diagonally. In this challenge you only move the white bishop."
    },
    "choose-safety": {
      "title": "Choose how to protect",
      "intro": "Your king is in check. You can move the white king, rook or bishop.",
      "rule": "Find a solution: move the king away or put a piece in the path of the attack. Several moves work."
    },
    "selectAny": "Choose a white piece."
  },
  "topics": {
    "board": "The board",
    "pieces": "The pieces",
    "match": "In a match"
  },
  "achievements": {
    "title": "Achievements",
    "hint": "Achievements appear on their own while you play.",
    "count": "You have {n} of {total} achievements.",
    "local": "Your achievements are saved only in this browser."
  },
  "achievement": {
    "firstExercise": {
      "text": "First exercise",
      "desc": "Solve your first exercise or challenge."
    },
    "tenExercises": {
      "text": "Ten exercises",
      "desc": "Solve ten exercises or challenges."
    },
    "streak3": {
      "text": "Streak of 3",
      "desc": "Get three exercises in a row right the first time."
    },
    "allGames": {
      "text": "Every game",
      "desc": "Finish a match in each of the eight games."
    },
    "completeGame": {
      "text": "Complete game",
      "desc": "Solve every exercise in one game."
    },
    "champion": {
      "text": "You beat Ludia",
      "desc": "Win a match against Ludia."
    },
    "locked": "Not yet",
    "unlockedAt": "Unlocked on {date}"
  }
}, 'en');

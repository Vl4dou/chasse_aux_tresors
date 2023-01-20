
function translateToBraille() {
  // Récupération du texte à traduire
  var inputText = document.getElementById("inputText").value;

  // Traduction du texte en braille
  var brailleText = "";
  for (var i = 0; i < inputText.length; i++) {
    var brailleChar = translateCharToBraille(inputText[i]);
    brailleText += brailleChar;
  }

  // Affichage du texte traduit
  document.getElementById("brailleText").innerHTML = brailleText;
}

function translateCharToBraille(char) {
    // Mappage des caractères en braille
    var brailleMap = {
      'a': '\u2801', 'b': '\u2803', 'c': '\u2809', 'd': '\u2819', 'e': '\u2811',
      'f': '\u280b', 'g': '\u281b', 'h': '\u2813', 'i': '\u280a', 'j': '\u281a',
      'k': '\u2805', 'l': '\u2807', 'm': '\u280d', 'n': '\u281d', 'o': '\u2815',
      'p': '\u280f', 'q': '\u281f', 'r': '\u2817', 's': '\u280e', 't': '\u281e',
      'u': '\u2825', 'v': '\u2827', 'w': '\u2829', 'x': '\u282d', 'y': '\u283d',
      'z': '\u283f', '0': '\u2838\u281a', '1': '\u2838\u2801', '2': '\u2838\u2803', '3': '\u2838\u2809',
      '4': '\u2838\u2819', '5': '\u2838\u2811', '6': '\u2838\u280b', '7': '\u2838\u281b', '8': '\u2838\u2813',
      '9': '\u2838\u280a', ' ': '\u0020', 'é': '\u00e9', "'": "'"
    };
  
    // Retourne la traduction du caractère en braille
    return brailleMap[char.toLowerCase()];
  }
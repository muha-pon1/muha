const alphabet = ["А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я"]
const alphabetBox = document.querySelector('.alphabet_box')
for (let i = 0; i < alphabet.length; i++) {
  const bukva = alphabet[i];
  console.log(bukva);


const div = document.createElement("div");
alphabetBox.appendChild(div);
div.classList.add('alphabetLetter');
div.innerHTML = alphabet[i]
}

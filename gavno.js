const alphabet = ["А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я"]
const alphabetBox = document.querySelector('.alphabet_box')
for (let i = 0; i < alphabet.length; i++) {
  const bukva = alphabet[i];
  console.log(bukva);
const div = document.createElement("div");
alphabetBox.appendChild(div);
div.classList.add('alphabetLetter');
div.innerHTML = alphabet[i]
div.addEventListener('click', () => {
  console.log(div);
})
}

const wordBox = document.querySelector('.word')
const wordArray = ["гусь","бобр","суслик","макака"];
let randomindex = Math.floor(Math.random()*4);

let WORD = wordArray[randomindex];

for (let i = 0; i < WORD.length; i++) {
const div = document.createElement("div");
wordBox.appendChild(div); 
div.classList.add('let');
div.innerHTML = WORD[i]
}











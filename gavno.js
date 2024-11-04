const alphabet = ["А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я"]
const alphabetBox = document.querySelector('.alphabet_box')
for (let i = 0; i < alphabet.length; i++) {
  const bukva = alphabet[i];

creatingBlock(alphabetBox, alphabet,"alphabetLetter", "s", i)
}
const wordBox = document.querySelector('.word')
const wordArray = ["ГУСАК","БОБЕР","СУСЛИК","МАКАКА","БАНАН","ПИЦЦА"];
const chelParts = document.querySelectorAll(".hidechel")
const pop_up = document.querySelector(".pop_up")
const exitButton = document.querySelector("#exitButton")

exitButton.addEventListener("click", ()=>{
  location.reload();
})

console.log(chelParts)
let randomindex = Math.floor(Math.random()*6);
let misstakes = 0

let WORD = wordArray[randomindex];
for (let i = 0; i < WORD.length; i++) {
creatingBlock(wordBox, WORD, "let", "hide", i)
creatingBlock(wordBox, '', "cont", "ooo", i)
}
const wordLetters = document.querySelectorAll(".let")
const alpabetButtons = document.querySelectorAll(".alphabetLetter")
alpabetButtons.forEach((button) => {
button.addEventListener("click", ()=>{
    console.log(button.textContent)
    console.log(WORD.indexOf(button.textContent)) // перевірка наявності букви в слові
    if (WORD.indexOf(button.textContent)== -1) {
      console.log("ПОМИЛКА")
      chelParts[misstakes].classList.remove('hidechel')
      misstakes++
      console.log(misstakes)
      if ( misstakes >= 10) {
        pop_up.classList.remove('hide')
      }
    }else{
       FLIW(WORD, button.textContent)
    }
    });
});
function FLIW(array, letterToFind){
  for (let i = 0; i < array.length; i++) { 
    if (array[i] == letterToFind){
        wordLetters[i].classList.remove("hide")
        wordLetters[i].nextElementSibling.classList.add("hide")
    }

  }
}


function creatingBlock(parentBlock, slovo, newClass, secondClass, i){
  const div = document.createElement("div");
  parentBlock.appendChild(div);
  div.classList.add(newClass);
  div.classList.add(secondClass);
  div.textContent = slovo[i]
}






const cards = document.querySelectorAll('.card');
const gameboard = document.querySelector('.gameboard');

// querySelectorAll - тут написати що робить команда
console.log(cards);
// forEach - тут написати що робить команда
cards.forEach((card)=>{
    card.addEventListener('click', ()=>{
        card.querySelector('.card_front').classList.toggle("active_front");
        card.querySelector('.card_back').classList.toggle("active_back");
    });
});
// console.log("b" + "a" + + "a")

let amount = 8
const wordsForCard = ["A", "B", "C", "D"]

function geterateCards(amount, words){
    for (let j = 0; j < words.length; j++){
    for (let i = 0; i < 2; i++){
    const newCard = document.createElement("div");
    gameboard.appendChild(newCard);
    newCard.classList.add("card");

    const newCardFront = document.createElement("div");
    newCard.appendChild(newCardFront);
    newCardFront.classList.add("card_front");
    
    const newCardBack = document.createElement("div");
    newCard.appendChild(newCardBack);
    newCardBack.classList.add("card_back");
    newCardBack.textContent = words[j];

    newCard.addEventListener('click', ()=>{
        newCard.querySelector('.card_front').classList.toggle("active_front");
        newCard.querySelector('.card_back').classList.toggle("active_back");
    })}}
    const cards = [...gameboard.querySelectorAll(".card")]
    cards.sort(() => Math.random() - 0.5)
    .map(card => gameboard.appendChild(card))
    }
geterateCards(amount, wordsForCard)


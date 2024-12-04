const cardsBlocks = document.querySelectorAll('.card');
const gameboard = document.querySelector('.gameboard');
const cards = []
let amount = 8 
let misstakes = 0
const wordsForCard = ["🌈", "🌹", "😁", "🎈"]


function generateCards(amount, words ){
    for (let j = 0; j < words.length; j++) {
        for (let i = 0; i < 2; i++) {
            const newCard = document.createElement('div')
            newCard.classList.add("card")
            gameboard.appendChild(newCard);

            const newCardFront = document.createElement('div')
            newCard.appendChild(newCardFront)
            newCardFront.classList.add("card__front")
             
            const newCardBack = document.createElement('div')
            newCard.appendChild(newCardBack)
            newCardBack.classList.add("card__back")
            newCardBack.textContent = words[j]
            
            
            newCard.addEventListener('click', ()=>{
                newCard.querySelector('.card__front').classList.toggle("active__front");
                newCard.querySelector('.card__back').classList.toggle("active__back");
                checkCards(newCard)
            })}}
        const cards = [...gameboard.querySelectorAll(".card")]
        cards.sort(() => Math.random()- 0.5 )
    .map(card => gameboard.appendChild (card))
        }

generateCards(amount, wordsForCard)


function checkCards(mainCard){
    console.log(mainCard)
cards.push(mainCard)
setTimeout(()=>{
    if (cards.length == 2) {
        if(cards[0].textContent== cards[1].textContent){
           cards[0].remove()
           cards[1].remove()
        }else {
            cards.forEach(thisCard =>{
                console.log("попытка закрыть")
              thisCard.querySelector(".card__front").classList.remove("active__front")
              thisCard.querySelector(".card__back").classList.remove("active__back")
            })
            // misstakes++
            // console.log(misstakes)
        }
        cards.length = 0
    }

},1000)

}
const cards = document.querySelectorAll('.card');
console.log(cards);
cards.forEach((card)=>{
    card.addEventListener('click',()=>{
       card.querySelector('.card_front').classList.toggle('active_front');
       card.querySelector('.card_back').classList.toggle('active_back');
    });
});





const hoverBlock = document.querySelector('.block');
const activeBlock = document.querySelector('.block1')
const hoverText = document.querySelector('.text');
const activeText = document.querySelector('.text_active')
console.log(hoverBlock)

hoverBlock.addEventListener('mouseenter', function(){
    activeBlock.classList.add('block1_active');

});    
hoverBlock.addEventListener('mouseleave', function(){
    activeBlock.classList.remove('block1_active');
    hoverText.classList.remove('text_active')
});   
   
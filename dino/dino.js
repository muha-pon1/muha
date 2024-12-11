const dino = document.querySelector('.dino');
let isJumping = false;
document.addEventListener("keydown",(e) => {
    console.log(e.code);
    jump(e.code);
})



function jump(key){
    if(key == "Space" && !isJumping){
        isJumping = true;
        console.log('jump')
        dino.style.bottom = "200px"
        setTimeout(() => {
             dino.style.bottom = "50px"
        },400)
        setTimeout(() => {
            isJumping = false;
       },800)
   
    }
}

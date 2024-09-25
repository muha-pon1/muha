let arr1 = [];

for (let i = 0; i <= 100; i++) {
     arr1.push(1);
}
let sum = 0
for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
}
for (let i = 0; i < arr1.length; i++){
    if (i%2 == 0) { 
        sum = sum + arr1[i];
}
}
const array =[];

for (let i = 0; i < 100; i++) {
    let number = Math.ceil(Math.random()*100) ; 
    console.log(number);
    array.push(number);
    
}
console.log(array);
let suum = 0;
for (let i = 0; i < 100; i++) {
    console.log(Math.sqrt(array[i]))
    suum += Math.sqrt(array[i]);
}
console.log(suum)
let randomNum= Math.random() //generates between 0 to 0.999
let numBtnZeroAndTen=randomNum*11

console.log(numBtnZeroAndTen) //this gives:min0 and max 10.99

let randomNumRoundToFloor=Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor) // this gives between 0 to 10
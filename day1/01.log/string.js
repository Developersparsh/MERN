let space=' '
let firstName='Sparsh'
let lastName='Dixit'
let age='18'
let country='India'
let city='Kanpur'
let language='Javascript'
let job='student'

//concatenting using addition operator

let fullName= firstName+space+lastName
console.log(fullName)

let personInfoOne= fullName+'.I am'+age+'.I live in'+country
console.log(personInfoOne)

// concatenation:template literals(template strings)
let personInfoTwo= `I am ${fullName}. I am ${age}.I live in ${country}.`

//ES6 string interpolation method
let personInfoThree= `I am ${fullName}. I am ${age}.I live in ${country}. I am a ${job}.I am a ${job}`

console.log(personInfoTwo)
console.log(personInfoThree)
// this function takes array as a parameter and sum up the numbers in the array
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArrayValues(numbers));


//Unlimited number of parameters in regular function
// function sumAllNums() {
//     console.log(arguments)
//    }
   
// sumAllNums(1, 2, 3, 4)
// sumAllNums(1, 2)

function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    return sum
  }

  console.log(sumAllNums(1, 2, 3, 4))
  console.log(sumAllNums(10, 20, 13, 40, 10)) 
  console.log(sumAllNums(15, 20, 'Welcome to', 25, 10, 33, 40))

  
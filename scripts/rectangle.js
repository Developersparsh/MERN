// An area of a rectangle is calculated as follows:
//  area = length x width. Write a function which calculates areaOfRectangle

const areaOfRectangle = (length, width) => {
  return length * width;
}
const area = areaOfRectangle(5, 7);
console.log(`The area of the rectangle is: ${area}`);

// A volume of a rectangular prism is calculated as follows: 
// volume = length x width x height. Write a function which calculates volumeOfRectPrism.

const volumeOfRectPrism = (length, width, height) => {
  return length * width * height;
};
console.log(volumeOfRectPrism(2, 3, 4));


//Area of a circle is calculated as follows:
// area = π x r x r. Write a function which calculates areaOfCircle

const areaOfCircle=(r)=>{
  return 3.14*r*r;
};
console.log("Area of circle is:",areaOfCircle(4));

// Circumference of a circle is calculated as follows: 
// circumference = 2πr. Write a function which calculates circumOfCircle

const circumference=(radius)=>{
  return 2*3.14*radius
};
console.log("circumference of the circle is:",circumference(4));
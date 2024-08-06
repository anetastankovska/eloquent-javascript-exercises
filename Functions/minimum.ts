// Write a function min that takes two arguments and returns their minimum
// # By getting fixed number of arguments
const getMinValue = (firstNum: number, secondNum: number) => {
  return Math.min(firstNum, secondNum);
}

console.log(getMinValue(5, 10));

// # By getting any number of arguments
const getMinValue1 = (arrayOfNumbers: number[]) => {
  return Math.min(...arrayOfNumbers);
}

console.log(getMinValue1([1, 2, 3, 4, 5]));

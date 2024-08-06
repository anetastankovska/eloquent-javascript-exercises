/*
 FizzBuzz
 Write a program that uses console.log to print all the numbers from 1 to 100,
 with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
 number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
 When you have that working, modify your program to print "FizzBuzz" for
 numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
 for numbers divisible by only one of those).
 */

// # By using min and max arguments
const fizzBuzz = (min: number, max: number) => {
  for (let i = min; i<= max; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } 
    else if (i % 3 === 0) {
      console.log('Fizz');
    }
    else if (i % 5 === 0) {
      console.log('Buzz')
    } 
    else {
      console.log(i);
    }
  }
}

fizzBuzz(1, 100);

// # By using tuple with two elements of which the first is min and the second is max
const fizzBuzz2 = (range: [number, number]) => {
  for (let i = range[0]; i<= range[1]; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } 
    else if (i % 3 === 0) {
      console.log('Fizz');
    }
    else if (i % 5 === 0) {
      console.log('Buzz')
    } 
    else {
      console.log(i);
    }
  }
}

fizzBuzz2([1, 100]);
/*
 Recursion
 We’ve seen that % (the remainder operator) can be used to test whether a
 number is even or odd by using % 2 to see whether it’s divisible by two. Here’s
 another way to define whether a positive whole number is even or odd:
 • Zero is even.
 • One is odd.
 • For any other number N, its evenness is the same as N- 2.
 Define a recursive function isEven corresponding to this description. The
 function should accept a single parameter (a positive, whole number) and return
 a Boolean.
 Test it on 50 and 75. See how it behaves on-1. Why? Can you think of a
 way to fix this?
*/

// The requirement is very stupid so I'm gonna write a function to log all the even numbers starting from the number passed as an argument moving backwards to 0 (using recursion)

const logEvenNumbers = (num: number) => {
  // Adjust num to the nearest even number if it is odd
  if (num % 2 !== 0) {
    num -= 1;
  }
  if (num < 0) return;
  console.log(num);
  logEvenNumbers(num - 2);
};

logEvenNumbers(51);



/*Looping a triangle
 Write a loop that makes seven calls to console.log to output the following
 triangle:
 #
 ##
 ###
 ####
 #####
 ######
 #######
*/

let hashSymbol = '#';
let maxHashes = '#######'
let hashLength = maxHashes.length;

// #1 - FOR LOOP
const printHashes = (length: number, symbol: string) => {
  for (let i = 0; i < length; i++) {
      console.log(symbol);
      symbol += '#'
  }
}
printHashes(hashLength, hashSymbol);

// #2 - WHILE LOOP
const printHashes2 = (length: number, symbol: string) => {
  let i = 0;
  while(i < length) {
      console.log(symbol);
      symbol += '#'
      i++;
  }
}
printHashes2(hashLength, hashSymbol);

// WHILE LOOP IS ONLY A SYNTACTIC SUGAR FOR A FOR LOO



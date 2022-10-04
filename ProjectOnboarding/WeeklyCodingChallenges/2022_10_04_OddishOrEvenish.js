// 10/04 - 10/07/2022
// Monday Challenge: Oddish or Evenish
//   Create a function that determines whether a number is Oddish or Evenish.
//   A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even.
//   If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

function oddishOrEvenish(arr) {
  for (i=0; i<arr.length; i++) {
    var sum = 0, number = arr[i], result;
    // Find the sum of number's digits
    while (number) {
      sum += number % 10;
      number = Math.floor(number/10);
    }
    // Determine if sum is even or odd
    if (sum%2 == 0) {result = "Evenish";}
    else {result = "Oddish";}
    
    console.log(arr[i] + " ➞ " + result);
  }
}

// INPUT
var digits = [43, 373, 4433];

// OUTPUT
oddishOrEvenish(digits);
/* Exptected:
43 ➞ Oddish
373 ➞ Oddish
4433 ➞ Evenish
*/

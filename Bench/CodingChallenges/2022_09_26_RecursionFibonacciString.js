// 9/26 - 9/30/2022
// Monday Challenge: Recursion: Fibonacci String
//   A Fibonacci string is a precedence of the Fibonacci series.
//   It works with any two characters of the English alphabet (as opposed to the numbers 0 and 1 in the Fibonacci series)
//   as its initial items and concatenates them together as it progresses similarly to that of the Fibonacci series.

function generate(lengthFib, ...arr) {
  // Check if return sequence will at least contain first 2
  if (lengthFib<2) {
    console.log("invalid");
  } else {
    // Initiate return sequence with first 2 provided
    // then push into it the next in sequence by concatenation from index
    sequenceFib = [arr[0][0], arr[0][1]];
    for (i=1; i<=lengthFib-2; i++) {
      sequenceFib.push(sequenceFib[i].concat(sequenceFib[i-1]));
    }
    console.log('"'+ sequenceFib.join(', ') + '"');
  }
}

// OUTPUT
generate(3, ["j", "h"]);
generate(5, ["e", "a"]);
generate(6, ["n", "k"]);
generate(1, ["f", "g"]);
/* Exptected:
generate(3, ["j", "h"]) ➞ "j, h, hj"
generate(5, ["e", "a"]) ➞ "e, a, ae, aea, aeaae"
generate(6, ["n", "k"]) ➞ "n, k, kn, knk, knkkn, knkknknk"
generate(1, ["f", "g"]) ➞ "invalid"
return "invalid" if n is less than 2
*/

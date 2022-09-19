// 9/19 - 9/23/2022
// Monday Challenge: Validate PIN
//   Create a function that will test if a string is a valid PIN or not via a regular expression.
//   A valid PIN has:
//      Exactly 4 or 6 characters.
//      Only numeric characters (0-9).
//      No whitespace.

function validatePIN(str) {
  var validResult = [];
  for (i=0; i<str.length; i++) {
      // Rule 1: Exactly 4 or 6 characters
      if (str[i].length == 4 || str[i].length == 6) {
          // Rule 2: Only numeric characters (0-9)
          // Rule 3: No whitespace
          validResult[i] = 'validate("' + str[i] + '") ➞ ' + /^[0-9]+$/.test(str[i]);
      } else {
          validResult[i] = 'validate("' + str[i] + '") ➞ false';
      }
  }
  return validResult.join('\n');
}

// INPUT
var PINList = ['121317', '1234', '45135', '89abc1', '900876', ' 4983'];

// OUTPUT
console.log(validatePIN(PINList));
/* Exptected:
121317 ➞ true, 6 numbers
1234 ➞ true, 4 numbers
45135 ➞ false, 5 numbers
89abc1 ➞ false, 3 non-numbers
900876 ➞ true, 6 numbers
 4983 ➞ false, 1 whitespace
*/

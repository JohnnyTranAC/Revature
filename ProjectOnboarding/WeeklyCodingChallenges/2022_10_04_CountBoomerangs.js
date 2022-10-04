// 10/04 - 10/07/2022
// Monday Challenge: Count Boomerangs
//   A boomerang is a V-shaped sequence that is either upright or upside down.
//   Specifically, a boomerang can be defined as: sub-array of length 3,
//   with the first and last digits being the same and the middle digit being different.

function countBoomerangs(arr) {
  var cntr = 0;
  for (i=0; i<arr.length-2; i++) {
    // Check if element value is different 1 index ahead and same 2 indexes ahead
    if ((arr[i]!=arr[i+1]) && (arr[i]==arr[i+2])) {
      cntr += 1;
      // Uncomment to display found boomerangs
      // console.log(arr.slice(i,i+3));
    }
  }
  
  console.log(cntr);
}

// OUTPUT
countBoomerangs([9, 5, 9, 5, 1, 1, 1]);
countBoomerangs([5, 6, 6, 7, 6, 3, 9]);
countBoomerangs([4, 4, 4, 9, 9, 9, 9]);
/* Exptected:
[9, 5, 9, 5, 1, 1, 1] ➞ 2
[5, 6, 6, 7, 6, 3, 9] ➞ 1
[4, 4, 4, 9, 9, 9, 9] ➞ 0
*/

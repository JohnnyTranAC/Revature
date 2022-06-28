// 6/27 - 7/1/2022
// Q2: Your Name is Mine
//   In an attempt to control the rise in population, Archer was asked to come up with a plan. This time he is targeting marriages.
//   Archer, being as intelligent as he is, came up with the following plan:
//     A man with name M is allowed to marry a woman with name W, only if M is a subsequence of W or W is a subsequence of M.
//     A is said to be a subsequence of B, if A can be obtained by deleting some elements of B without changing the order of the remaining elements.
//   Your task is to determine whether a couple is allowed to marry or not, according to Archer's rule.

function isSpouse(T, M, W) {
    var result = [];
    var shortName = [];
    var longName =[];
    var checkOrder = [];
    
    for (let i=0; i<T; i++) {
        // Find shorter of 2 names
        if (M[i].length < W[i].length) {
            shortName = M;
            longName = W;
        } else {
            shortName = W;
            longName = M;
        }
        // Check if longer name contains shorter name
        if (longName[i].includes(shortName[i])) {
            result[i] = 'YES';
        } else {
            // Otherwise, check if letters can be found in order but between other letters
            for (let a=0; a<shortName[i].length; a++) {
                if (longName[i].indexOf(shortName[i].charAt(a)) > -1) {
                    checkOrder.push(longName[i].indexOf(shortName[i].charAt(a)));
                } else {
                    result[i] = 'NO';
                }
            }
            // Check if shorter name's letters between other letters are after the previous
            var falseOrder = 0;
            for(let b= 0; b<checkOrder.length; b++){
                if(checkOrder[b+1] - checkOrder[b] <= 0) falseOrder = 1;
            }
            if (falseOrder == 1) {
                result[i] = 'NO';
            } else { result[i] = 'YES'; }
        }
    }
    
    return result.join('\n');
}

// INPUT
var T = 3;
var M = ['john', 'ira', 'kayla'];
var W = ['johanna', 'ira', 'Jayla'];

// OUTPUT
console.log(isSpouse(T, M, W));

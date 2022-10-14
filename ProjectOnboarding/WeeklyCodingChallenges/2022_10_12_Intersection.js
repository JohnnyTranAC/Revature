// 10/12 - 10/14/2022
// Wednesday Challenge: Intersection
//   Given two (singly) linked lists, determine if the two lists intersect.
//   Return the intersecting node. Note that the intersection is defined based on reference, not value.
//   That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, then they are intersecting.

class Node {
    constructor(data) {
        this.data=data;
        this.next=null;
    }
}

function getCount(List) {
    let temp = List;
    var count = 0;
    while (temp != null) {
        count++;
        temp = temp.next;
    }
    return count;
}

function intersection(List1, List2, Count1, Count2) {
    let temp1 = List1,
        temp2 = List2;
    for (i=0; i<Count1; i++) {
        for (j=0; j<Count2; j++) {
            if ((temp1.data == temp2.data) && (getCount(temp1) == getCount(temp2))) {
                // console.log(temp1);
                // console.log(temp2);
                return("Yes, intersecting at " + temp2.data);
            }
            temp2 = temp2.next;
        }
        temp1 = temp1.next;
        temp2 = List2;
    }
}

// INPUT
let List1 = new Node('A');
List1.next = new Node('B');
List1.next.next = new Node('C');
List1.next.next.next = new Node('D');
List1.next.next.next.next = new Node('E');
// Uncomment to compare that ending nodes do not match
// List1.next.next.next.next.next = new Node('F');

let List2 = new Node('F');
List2.next = new Node('B');       // Shared value but not same remainders
List2.next.next = new Node('D');  // Shared value and same remainder of list
List2.next.next.next = new Node('E');

// OUTPUT
let result = intersection(List1, List2, getCount(List1), getCount(List2));
if (result == null) console.log("No, intersection does not exist");
else console.log(result);
/* Exptected:
Yes, intersecting at D
*/

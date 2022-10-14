// 10/12 - 10/14/2022
// Wednesday Challenge: Loop Detection
//   Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.
//   Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so as to make a loop in the linked list.
//   EXAMPLE
//      Input: A -> B -> C -> D -> E -> C [the same C as earlier]
//      Output: C

class Node {
    constructor(data) {
        this.data=data;
        this.next=null;
    }
}

function loopDetection(List) {
    // If list not long enough
    if (List == null || List.next == null) {return null;}
    
    // Look 1 and 2 nodes ahead
    let oneAhead = List,
        twoAhead = List;
    oneAhead = oneAhead.next;
    twoAhead = twoAhead.next.next;
    
    while (twoAhead != null && twoAhead.next != null) {
        if (oneAhead == twoAhead) {break;}
        oneAhead = oneAhead.next;
        twoAhead = twoAhead.next.next;
    }
    
    // Loop is not found
    if (oneAhead != twoAhead) return null;
    
    // Loop is found
    oneAhead = List;
    while (oneAhead != twoAhead) {
        oneAhead = oneAhead.next;
        twoAhead = twoAhead.next;
    }
    return oneAhead;
}

// INPUT
let circularList = new Node('A');
circularList.next = new Node('B');
circularList.next.next = new Node('C');
circularList.next.next.next = new Node('D');
circularList.next.next.next.next = new Node('E');
// Same node C instead of new node with same value
circularList.next.next.next.next.next = circularList.next.next;

// OUTPUT
let result = loopDetection(circularList);
if (result == null) console.log("Loop does not exist");
else console.log(result.data);
/* Exptected:
C
*/

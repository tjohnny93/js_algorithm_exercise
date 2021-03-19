/*
March 19, 2021  #4

Given the heads of two singly linked-lists headA and headB,
return the node at which the two lists intersect.
If the two linked lists have no intersection at all, return null.

1. listA = [4,1,8,4,5], listB = [5,6,1,8,4,5]; return 8
2. listA = [1,9,1,2,4], listB = [3,2,4]; return 2
3. listA = [2,6,4], listB = [1,5]; return null
*/

// var getIntersectionNode = function (headA, headB) {
//   if (!headA || !headB) return null;
//   // return headA;
//   var curA = headA;
//   var curB = headB;
//   while (curA != curB) {
//     curA = curA == null ? headB : curA.next;
//     curB = curB == null ? headA : curB.next;
//   }
//   return curA;
// };

// console.log(getIntersectionNode([4, 1, 8, 4, 5], [5, 6, 1, 8, 4, 5]));
// console.log(getIntersectionNode([1, 9, 1, 2, 4], [3, 2, 4]));
// console.log(getIntersectionNode([2, 6, 4], [1, 5]));

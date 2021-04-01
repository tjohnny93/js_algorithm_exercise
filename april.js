/* April 1 #1

Maximum Nesting Depth of the Parentheses

Example 1:

Input: s = "(1+(2*3)+((8)/4))+1"
Output: 3
Explanation: Digit 8 is inside of 3 nested parentheses in the string.
Example 2:

Input: s = "(1)+((2))+(((3)))"
Output: 3
Example 3:

Input: s = "1+(2*3)/(2-1)"
Output: 1
Example 4:

Input: s = "1"
Output: 0


*/

var maxDepth = function (s) {
  let count = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (count > max) max = count;
    if (s[i] === "(") count++;
    if (s[i] === ")") count--;
  }
  return max;
};

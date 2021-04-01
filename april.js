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

/* April 1 #1-2

Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.

Example 1:

Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.
Example 2:

Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false
Example 3:

Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
Output: true
*/

var arrayStringsAreEqual = function (word1, word2) {
  if (word1.join("") === word2.join("")) return true;
  return false;
};

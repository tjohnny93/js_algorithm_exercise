/*
Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.

We repeatedly make duplicate removals on S until we no longer can.

Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.

Input: "abbaca"
Output: "ca"
Explanation: 
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
*/

var removeDuplicates = function (S) {
  const result = [];
  for (const s of S) {
    if (result[result.length - 1] === s) {
      result.pop();
      continue;
    }
    result.push(s);
  }
  return result.join("");
};

/*
Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.

Input: ["bella","label","roller"]
Output: ["e","l","l"]

Input: ["cool","lock","cook"]
Output: ["c","o"]
*/

var commonChars = function (A) {
  let result = [];

  for (let i = 0; i < A[0].length; i++) {
    let char = A[0][i];

    if (char === undefined) return result;

    if (A.every((word) => word.indexOf(char) !== -1)) {
      result.push(char);
      A = A.map((word) => word.replace(char, ""));
      console.log(A);
      i--;
    }
  }

  return result;
};

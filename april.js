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

/* April 2 #2
Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

A subarray is a contiguous subsequence of the array.

Return the sum of all odd-length subarrays of arr.

Example 1:

Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:

Example 2:

Input: arr = [1,2]
Output: 3
Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.
Example 3:

Input: arr = [10,11,12]
Output: 66

*/

var sumOddLengthSubarrays = function (arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length + 1; j++) {
      if ((j - i) % 2 !== 0) {
        arr.slice(i, j).forEach((num) => (result += num));
      }
    }
  }
  return result;
};

/* April 3 # 3
You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

Return the sum of all the unique elements of nums.

 

Example 1:

Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.
Example 2:

Input: nums = [1,1,1,1,1]
Output: 0
Explanation: There are no unique elements, and the sum is 0.
Example 3:

Input: nums = [1,2,3,4,5]
Output: 15
Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.
*/

var sumOfUnique = function (nums) {
  let result = 0;
  let count = {};
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] ? (count[nums[i]] += 1) : (count[nums[i]] = 1);
  }
  let countEntries = Object.entries(count);
  for (let j = 0; j < countEntries.length; j++) {
    if (countEntries[j][1] === 1) {
      result += +countEntries[j][0];
    }
  }
  return result;
};

/* April 4 #4
You are given an integer n, the number of teams in a tournament that has strange rules:

If the current number of teams is even, each team gets paired with another team. A total of n / 2 matches are played, and n / 2 teams advance to the next round.
If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired. A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.
Return the number of matches played in the tournament until a winner is decided.

Example 1:

Input: n = 7
Output: 6
Explanation: Details of the tournament: 
- 1st Round: Teams = 7, Matches = 3, and 4 teams advance.
- 2nd Round: Teams = 4, Matches = 2, and 2 teams advance.
- 3rd Round: Teams = 2, Matches = 1, and 1 team is declared the winner.
Total number of matches = 3 + 2 + 1 = 6.
Example 2:

Input: n = 14
Output: 13
*/

var numberOfMatches = function (n) {
  let teams = n;
  let matches = 0;
  while (teams >= 2) {
    matches += Math.floor(teams / 2);
    teams -= Math.floor(teams / 2);
  }
  return matches;
};

/*
Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

 

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

Input: arr = [1,2]
Output: false
Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
*/

var uniqueOccurrences = function (arr) {
  let count = {};
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] ? (count[arr[i]] += 1) : (count[arr[i]] = 1);
  }
  let countArr = Object.values(count);
  // for (let i = 0; i < countArr.length; i++) {
  //   for (let j = i + 1; j < countArr.length; j++) {
  //     if (countArr[i] === countArr[j]) return false;
  //   }
  // }
  // return true;
  let set = new Set(countArr);
  return countArr.length === set; // cleaner solution using set found from discussion section.
};

/*
A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).

Return the number of indices where heights[i] != expected[i].

Input: heights = [1,1,4,2,1,3]
Output: 3
Explanation: 
heights:  [1,1,4,2,1,3]
expected: [1,1,1,2,3,4]
Indices 2, 4, and 5 do not match.

Input: heights = [5,1,2,3,4]
Output: 5
Explanation:
heights:  [5,1,2,3,4]
expected: [1,2,3,4,5]
All indices do not match.

Input: heights = [1,2,3,4,5]
Output: 0
Explanation:
heights:  [1,2,3,4,5]
expected: [1,2,3,4,5]
All indices match.
*/

var heightChecker = function (heights) {
  let sorted = [...heights].sort((a, b) => {
    if (a > b) return 1;
    else return -1;
  });
  let count = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sorted[i]) count += 1;
  }
  return count;
};

/*
Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

Input: mat = [[1,2,3],
              [4,5,6],
              [7,8,9]]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Notice that element mat[1][1] = 5 is counted only once.
Example 2:

Input: mat = [[1,1,1,1],
              [1,1,1,1],
              [1,1,1,1],
              [1,1,1,1]]
Output: 8
Example 3:

Input: mat = [[5]]
Output: 5
*/

var diagonalSum = function (mat) {
  let result = 0;
  for (let i = 0; i < mat.length; i++) {
    let front = i;
    let back = mat.length - 1 - front;
    result += mat[i][front];
    if (back !== front) result += mat[i][back];
  }
  return result;
};

/*
Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
 

Example 1:

Input: nums = [3,4,5,2]
Output: 12 
Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 
Example 2:

Input: nums = [1,5,4,5]
Output: 16
Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.
Example 3:

Input: nums = [3,7]
Output: 12
*/

var maxProduct = function (nums) {
  let highestIdx = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[highestIdx]) highestIdx = i;
  }
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (highestIdx === i) continue;
    let curr = (nums[i] - 1) * (nums[highestIdx] - 1);
    if (curr > result) result = curr;
  }
  return result;
};

/*
You are given an integer array nums (0-indexed). In one operation, you can choose an element of the array and increment it by 1.

For example, if nums = [1,2,3], you can choose to increment nums[1] to make nums = [1,3,3].
Return the minimum number of operations needed to make nums strictly increasing.

An array nums is strictly increasing if nums[i] < nums[i+1] for all 0 <= i < nums.length - 1. An array of length 1 is trivially strictly increasing.

Example 1:

Input: nums = [1,1,1]
Output: 3
Explanation: You can do the following operations:
1) Increment nums[2], so nums becomes [1,1,2].
2) Increment nums[1], so nums becomes [1,2,2].
3) Increment nums[2], so nums becomes [1,2,3].
Example 2:

Input: nums = [1,5,2,4,1]
Output: 14
Example 3:

Input: nums = [8]
Output: 0

*/

var minOperations = function (nums) {
  let result = 0;
  // my original solution
  // for (let i = 0; i < nums.length; i++) {
  //   while (nums[i] >= nums[i + 1]) {
  //     nums[i + 1] += 1;
  //     result += 1;
  //   }
  // }
  for (let i = 0; i < nums.length - 1; i++) {
    const diff = nums[i + 1] - nums[i];
    if (diff <= 0) {
      nums[i + 1] += Math.abs(diff) + 1;
      result += Math.abs(diff) + 1;
    }
  }
  return result;
};

/*
Given an integer n, return any array containing n unique integers such that they add up to 0.
Example 1:

Input: n = 5
Output: [-7,-1,1,3,4]
Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
Example 2:

Input: n = 3
Output: [-1,0,1]
Example 3:

Input: n = 1
Output: [0]
*/

var sumZero = function (n) {
  let result;
  if (n % 2 === 1) {
    result = [0];
    for (let i = 1; result.length < n; i++) {
      result.push(i, -i);
    }
  }
  if (n % 2 === 0) {
    result = [];
    for (let i = 1; result.length < n; i++) {
      result.push(i, -i);
    }
  }
  return result;
};

/*
A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

s[i] == 'I' if perm[i] < perm[i + 1], and
s[i] == 'D' if perm[i] > perm[i + 1].
Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.

Example 1:

Input: s = "IDID"
Output: [0,4,1,3,2]
Example 2:

Input: s = "III"
Output: [0,1,2,3]
Example 3:

Input: s = "DDI"
Output: [3,2,0,1]
*/

var diStringMatch = function (s) {
  let result = [];
  let min = 0;
  let max = s.length;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      result.push(min);
      min++;
    } else {
      result.push(max);
      max--;
    }
  }
  result.push(max);

  return result;
};

/*

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
*/

var mergeAlternately = function (word1, word2) {
  let result = "";
  let longerStr, shorterStr;
  if (word1.length > word2.length) {
    longerStr = word1;
    shorterStr = word2;
  } else {
    longerStr = word2;
    shorterStr = word1;
  }
  for (let i = 0; i < shorterStr.length; i++) {
    result += word1[i] + word2[i];
  }
  result += longerStr.slice(shorterStr.length);
  return result;
};

/*

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:

Input: s = "God Ding"
Output: "doG gniD"
*/

var reverseWords = function (s) {
  let arr = s.split(" ");
  return arr
    .map((word) => {
      return word.split("").reverse().join("");
    })
    .join(" ");
};

/*
You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.
Example 1:

Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
Output: "Sao Paulo" 
Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".
Example 2:

Input: paths = [["B","C"],["D","B"],["C","A"]]
Output: "A"
Explanation: All possible trips are: 
"D" -> "B" -> "C" -> "A". 
"B" -> "C" -> "A". 
"C" -> "A". 
"A". 
Clearly the destination city is "A".
Example 3:

Input: paths = [["A","Z"]]
Output: "Z"

*/

var destCity = function (paths) {
  // let places = {};
  // for (let i = 0; i < paths.length; i++) {
  //   for (let j = paths[i].length-1; j >= 0; j--) {
  //     places[paths[i][j]] ? places[paths[i][j]] += 1 : places[paths[i][j]] = 1
  //   }
  // }
  // let unique = Object.entries(places).filter(pair => pair[1] === 1)
  // let result
  //   for (let i = 0; i < paths.length; i++) {
  //     unique.forEach(el => {
  //       if (el[0] === paths[i][1]) result = el[0];
  //     })
  //   }
  // return result
  let dest = paths[0][1];
  while (true) {
    const newDest = paths.find((path) => path[0] === dest);
    if (!newDest) return dest;
    dest = newDest[1];
  }
};

/*
Given an integer n (in base 10) and a base k, return the sum of the digits of n after converting n from base 10 to base k.

After converting, each digit should be interpreted as a base 10 number, and the sum should be returned in base 10.
Example 1:

Input: n = 34, k = 6
Output: 9
Explanation: 34 (base 10) expressed in base 6 is 54. 5 + 4 = 9.
Example 2:

Input: n = 10, k = 10
Output: 1
Explanation: n is already in base 10. 1 + 0 = 1.
 
*/

var sumBase = function (n, k) {
  let res = n.toString(k); // .toString(input) with this I can convert n from base 10 to base input;
  let sum = 0;
  for (const e of res) sum += Number(e);
  return sum;
};

/*
Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

Return any answer array that satisfies this condition.
Example 1:

Input: nums = [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
Example 2:

Input: nums = [2,3]
Output: [2,3]
*/

var sortArrayByParityII = function (nums) {
  let result = [];
  let even = [];
  let odd = [];
  for (let i = 0; i < nums.length; i++) {
    nums[i] % 2 === 0 ? even.push(nums[i]) : odd.push(nums[i]);
  }
  while (result.length !== nums.length) {
    result.push(even.pop());
    result.push(odd.pop());
  }
  return result;
};

/*
Write a function that reverses a string. The input string is given as an array of characters s.
Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.
 

Follow up: Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
*/

var reverseString = function (s) {
  for (let i = 0; i < s.length / 2; i++) {
    [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
  }
};

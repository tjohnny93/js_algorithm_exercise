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

/*
The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a stack. At each step:

If the student at the front of the queue prefers the sandwich on the top of the stack, they will take it and leave the queue.
Otherwise, they will leave it and go to the queue's end.
This continues until none of the queue students want to take the top sandwich and are thus unable to eat.

You are given two integer arrays students and sandwiches where sandwiches[i] is the type of the i​​​​​​th sandwich in the stack (i = 0 is the top of the stack) and students[j] is the preference of the j​​​​​​th student in the initial queue (j = 0 is the front of the queue). Return the number of students that are unable to eat.

Input: students = [1,1,0,0], sandwiches = [0,1,0,1]
Output: 0 

Input: students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]
Output: 3
*/

var countStudents = function (students, sandwiches) {
  while (students.length > 0 && students.indexOf(sandwiches[0]) !== -1) {
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
    } else {
      students.push(students.shift());
    }
  }
  return students.length;
};

/*
Every valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters, the email may contain one or more '.' or '+'.

For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the domain name.
If you add periods '.' between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Note that this rule does not apply to domain names.

For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.
If you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does not apply to domain names.

For example, "m.y+name@email.com" will be forwarded to "my@email.com".
It is possible to use both of these rules at the same time.

Given an array of strings emails where we send one email to each email[i], return the number of different addresses that actually receive mails.

Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
Output: 2
Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.


Input: emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
Output: 3
*/

var numUniqueEmails = function (emails) {
  let result = [];

  for (let i = 0; i < emails.length; i++) {
    let parts = emails[i].split("@");
    let local = parts[0].replace(/\./g, "").split("+")[0];
    let completeEmail = `${local}@${parts[1]}`;

    if (result.indexOf(completeEmail) === -1) {
      result.push(completeEmail);
    }
  }
  return result.length;
};

/*
Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.
Return the sorted array.

Input: nums = [1,1,2,2,2,3]
Output: [3,1,1,2,2,2]
Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.

Input: nums = [2,3,1,3,2]
Output: [1,3,3,2,2]
Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.

Input: nums = [-1,1,-6,4,5,-6,1,4,1]
Output: [5,-1,4,4,-6,-6,1,1,1]
*/

var frequencySort = function (nums) {
  const map = new Map();
  for (let n of nums) {
    map.set(n, map.get(n) + 1 || 1);
  }
  return nums.sort((a, b) => map.get(a) - map.get(b) || b - a);
};

/*
Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.

Example 1:

Input: arr = [2,6,4,1]
Output: false
Explanation: There are no three consecutive odds.
Example 2:

Input: arr = [1,2,34,3,4,5,7,23,12]
Output: true
Explanation: [5,7,23] are three consecutive odds.
*/

var threeConsecutiveOdds = function (arr) {
  let result = false;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 1 ? (count += 1) : (count = 0);
    if (count === 3) result = true;
  }
  return result;
};

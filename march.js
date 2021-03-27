/*

March 16, 2021  #1

Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.
The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much,
and she wants to eat the maximum number of different types of candies while still following the doctor's advice.
Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

Input: candyType = [1,1,2,2,3,3]
Output: 3
Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.

Input: candyType = [1,1,2,3]
Output: 2
Explanation: Alice can only eat 4 / 2 = 2 candies. Whether she eats types [1,2], [1,3], or [2,3], she still can only eat 2 different types.

Input: candyType = [6,6,6,6]
Output: 1
Explanation: Alice can only eat 4 / 2 = 2 candies. Even though she can eat 2 candies, she only has 1 type.

Constraints:

n == candyType.length
2 <= n <= 104
n is even.
-105 <= candyType[i] <= 105

@param {number[]} candyType
@return {number}

*/

var distributeCandies = function (candyType) {
  let allowed = Math.floor(candyType.length / 2);
  // let types = {};

  // for (let i = 0; i < candyType.length; i++) {
  //   types[candyType[i]]
  //     ? (types[candyType[i]] += 1)
  //     : (types[candyType[i]] = 1);
  // }

  // return Math.min(Object.keys(types).length, allowed);

  let types = new Set(candyType); // returns Set(3) { 1, 2, 3 } for first input
  return Math.min(types.size, allowed); // By using Set and Set prototype.size I can get number of unique values. Which is simpler compare to my original answer
};

// console.log(distributeCandies([1, 1, 2, 2, 3, 3]));
// console.log(distributeCandies([1, 1, 2, 3]));
// console.log(distributeCandies([6, 6, 6, 6]));

/*

March 17, 2021  #2

You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately,

due to some error, one of the numbers in s got duplicated to another number in the set,

which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

Example 1:

Input: nums = [1,2,2,4]
Output: [2,3]

Example 2:

Input: nums = [1,1]
Output: [1,2]

*/

var findErrorNums = function (nums) {
  // my approach +edit: my approach was wrong since I only cared about sample case and would not pass more complex sample
  // let numCount = {};

  // for (let i = 0; i < nums.length; i++) {
  //   numCount[nums[i]] ? (numCount[nums[i]] += 1) : (numCount[nums[i]] = 1);
  // }

  // let numEntries = Object.entries(numCount);

  // for (let i = 0; i < numEntries.length; i++) {
  //   if (numEntries[i][1] === 2) {
  //     return [parseInt(numEntries[i]), parseInt(numEntries[i]) + 1];
  //   }
  // }

  // leet code discussion approach
  let x, y;
  let sum = 0;
  let times = new Array(nums.length).fill(0); // for example 1 [0, 0, 0, 0]
  for (let n of nums) {
    sum += n; // sum of all int in nums array
    times[n - 1]++;

    if (times[n - 1] === 2) {
      // conditional statement to check the duplicated int
      x = n;
    }
  }
  y = ((nums.length + 1) * nums.length) / 2 + x - sum;
  // complex calculation.
  // example 3 :  ((7+1) * 7) / 2 + 3 - 25 => 56/2 - 22 =>  28 - 22 => 6
  // without an error sum of nums should be ((nums.length + 1) * nums.length) / 2
  // then add duplicated int then subtract the actual sum of errored nums array to get the missing int

  return [x, y];
};

// console.log(findErrorNums([1, 2, 2, 4]));
// console.log(findErrorNums([1, 1]));
// console.log(findErrorNums([1, 2, 3, 3, 4, 5, 7]));

/*

March 18, 2021  #3

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
Example 4:

Input: nums = [0]
Output: 1
Explanation: n = 1 since there is 1 number, so all numbers are in the range [0,1]. 1 is the missing number in the range since it does not appear in nums.

*/

const missingNumber = (nums) => {
  // let sum = 0,
  //   total = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   sum += nums[i];
  //   total += i + 1;
  //   console.log(total-sum);
  // }
  // return total - sum;

  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result = result + i + 1 - nums[i];
  }
  return result;
};

// console.log(missingNumber([3, 0, 1]));
// console.log(missingNumber([0, 1]));
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
// console.log(missingNumber([0]));

/*
March 19, 2021  #4


Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]

*/

var runningSum = function (nums) {
  // let result = [];
  // nums.reduce((acc, cur) => {
  //   result.push(acc + cur);
  //   return acc + cur;
  // }, 0);
  // return result;

  let result = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    i === 0 ? (result[i] = nums[i]) : (result[i] = nums[i] + result[i - 1]);
  }
  return result; // faster
};

// console.log(runningSum([1, 2, 3, 4]));
// console.log(runningSum([1, 1, 1, 1, 1]));
// console.log(runningSum([3, 1, 2, 10, 1]));

/*

March 20, 2021  #5-1

Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

Example 1:

Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
Example 2:

Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"

*/

var defangIPaddr = function (address) {
  let arr = address.split("");
  return arr.map((char) => (char === "." ? "[.]" : char)).join("");
};

// console.log(defangIPaddr("1.1.1.1"));
// console.log(defangIPaddr("255.100.50.0"));

/*

March 20, 2021  #5-2

Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true] 

Input: candies = [4,2,1,1,2], extraCandies = 1
Output: [true,false,false,false,false] 

Input: candies = [12,1,12], extraCandies = 10
Output: [true,false,true]

*/

var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);
  return candies.map((el) => {
    return el + extraCandies >= max;
  });
};

// console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
// console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
// console.log(kidsWithCandies([12, 1, 12], 10));

/*
March 21, 2021  #6-1

You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.

Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation: 
1st customer has wealth = 6
2nd customer has wealth = 10 
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.

Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
Output: 17

*/

var maximumWealth = function (accounts) {
  let max = 0;
  for (let i = 0; i < accounts.length; i++) {
    // let cur = accounts[i].reduce((a, b) => a + b, 0);
    // cur > max ? (max = cur) : max;
    sum(accounts[i]) > max ? (max = sum(accounts[i])) : max;
  }
  return max;

  function sum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    return result;
  }
};

// console.log(
//   maximumWealth([
//     [1, 2, 3],
//     [3, 2, 1],
//   ])
// );
// console.log(
//   maximumWealth([
//     [1, 5],
//     [7, 3],
//     [3, 5],
//   ])
// );
// console.log(
//   maximumWealth([
//     [2, 8, 7],
//     [7, 1, 3],
//     [1, 9, 5],
//   ])
// );

/*

March 21, 2021  #6-2

Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].

Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7] 
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

Input: nums = [1,2,3,4,4,3,2,1], n = 4
Output: [1,4,2,3,3,2,4,1]

Input: nums = [1,1,2,2], n = 2
Output: [1,2,1,2]
*/

var shuffle = function (nums, n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(nums[i], nums[i + n]);
  }
  return result;
};

// console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
// console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));
// console.log(shuffle([1, 1, 2, 2], 2));

/*

March 22, 2021  #7-1

Given an array of integers nums.

A pair (i,j) is called good if nums[i] == nums[j] and i < j.

Return the number of good pairs.

 

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
Example 3:

Input: nums = [1,2,3]
Output: 0


*/

var numIdenticalPairs = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) count += 1;
    }
  }
  return count;
};

// console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
// console.log(numIdenticalPairs([1, 1, 1, 1]));
// console.log(numIdenticalPairs([1, 2, 3]));

/*

March 22, 2021  #7-1

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0

*/

var numJewelsInStones = function (jewels, stones) {
  let result = {};
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    result[stones[i]] ? result[stones[i]]++ : (result[stones[i]] = 1);
  }
  for (let j = 0; j < jewels.length; j++) {
    if (result[jewels[j]]) count += result[jewels[j]];
  }
  return count;
};

// console.log(numJewelsInStones("aA", "aAAbbbb"));
// console.log(numJewelsInStones("z", "ZZ"));

/*

March 23, 2021  #8-1

Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.

Example 1:

Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]

Example 2:

Input: nums = [6,5,4,8]
Output: [2,1,0,3]
Example 3:

Input: nums = [7,7,7,7]
Output: [0,0,0,0]

*/

var smallerNumbersThanCurrent = function (nums) {
  // let result = new Array(nums.length).fill(0);
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = 0; j < nums.length; j++) {
  //     if (nums[i] > nums[j]) result[i] += 1;
  //   }
  // }
  // return result;

  return nums.map(
    (numA, i) =>
      nums.reduce((total, numB, ii) => (numA > numB ? total + 1 : total), 0) // 1 line solve from discussion
  );
};

// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
// console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));
// console.log(smallerNumbersThanCurrent([7, 7, 7, 7]));

/*

March 23 #8-2

Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

Example 1:

Input: num = 14
Output: 6

Example 2:

Input: num = 8
Output: 4

Example 3:

Input: num = 123
Output: 12

*/

var numberOfSteps = function (num) {
  let count = 0;
  const countSteps = (count, num) => {
    if (num === 0) return count;
    return num % 2 === 0
      ? countSteps(count + 1, num / 2)
      : countSteps(count + 1, num - 1);
  };
  return countSteps(count, num);
};

// console.log(numberOfSteps(14));
// console.log(numberOfSteps(8));
// console.log(numberOfSteps(123));

/*

March 24 #9

Given a string s and an integer array indices of the same length.

The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string.

Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"


Input: s = "abc", indices = [0,1,2]
Output: "abc"


Input: s = "aiohn", indices = [3,1,4,2,0]
Output: "nihao"

Input: s = "aaiougrt", indices = [4,0,2,6,7,3,1,5]
Output: "arigatou"

Input: s = "art", indices = [1,0,2]
Output: "rat"
*/

var restoreString = function (s, indices) {
  const result = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let index = indices[i];
    result[index] = char;
  }

  return result.join("");
};

// console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
// console.log(restoreString("abc", [0, 1, 2]));
// console.log(restoreString("aiohn", [3, 1, 4, 2, 0]));
// console.log(restoreString("aaiougrt", [4, 0, 2, 6, 7, 3, 1, 5]));
// console.log(restoreString("art", [1, 0, 2]));

/*

March 25 #10-1

Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 

Example 1:

Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15
Example 2:

Input: n = 4421
Output: 21
Explanation: 
Product of digits = 4 * 4 * 2 * 1 = 32 
Sum of digits = 4 + 4 + 2 + 1 = 11 
Result = 32 - 11 = 21
*/

var subtractProductAndSum = function (n) {
  let str = n.toString();
  let product = 1;
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    product *= Number(str[i]);
    sum += Number(str[i]);
  }
  return product - sum;
};

// console.log(subtractProductAndSum(234));
// console.log(subtractProductAndSum(4421));

/*

March 25 #10-2

You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

The ith item is said to match the rule if one of the following is true:

ruleKey == "type" and ruleValue == typei.
ruleKey == "color" and ruleValue == colori.
ruleKey == "name" and ruleValue == namei.
Return the number of items that match the given rule.

 

Example 1:

Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
Output: 1
Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].
Example 2:

Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
Output: 2
Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"]. Note that the item ["computer","silver","phone"] does not match.
*/

var countMatches = function (items, ruleKey, ruleValue) {
  let keys = {
    type: 0,
    color: 1,
    name: 2,
  };

  let count = 0;

  for (let i = 0; i < items.length; i++) {
    if (items[i][keys[ruleKey]] === ruleValue) count += 1;
  }
  return count;
};

/* March 27 #11

We are given a list nums of integers representing a list compressed with run-length encoding.

Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

Return the decompressed list.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [2,4,4,4]
Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
At the end the concatenation [2] + [4,4,4] is [2,4,4,4].
Example 2:

Input: nums = [1,1,2,3]
Output: [1,3,3]

*/

var decompressRLElist = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length - 1; i += 2) {
    for (let j = nums[i]; j > 0; j--) {
      result.push(nums[i + 1]);
    }
  }
  return result;
};

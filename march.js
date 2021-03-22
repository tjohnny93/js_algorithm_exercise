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

console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));

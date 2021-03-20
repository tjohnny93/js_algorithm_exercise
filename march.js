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

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
console.log(kidsWithCandies([12, 1, 12], 10));

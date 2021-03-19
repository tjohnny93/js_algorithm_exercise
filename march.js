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

There are N rooms and you start in room 0.  Each room has a distinct number in 0, 1, 2, ..., N-1, and each room may have some keys to access the next room. 

Formally, each room i has a list of keys rooms[i], and each key rooms[i][j] is an integer in [0, 1, ..., N-1] where N = rooms.length.  A key rooms[i][j] = v opens the room with number v.

Initially, all the rooms start locked (except for room 0). 

You can walk back and forth between rooms freely.

Return true if and only if you can enter every room.

example #1 : Input: [[1],[2],[3],[]] / Output: true
example #2 : Input: [[1,3],[3,0,1],[2],[0]] / Output: false

*/

var canVisitAllRooms = function (rooms) {
  for (let i = 0; i < rooms.length; i++) {
    for (let j = 0; j < rooms[i].length; j++) {
      if (rooms[i].includes(i + 1)) {
        i++;
      } else {
        return false;
      }
    }
  }
  return true;
};

console.log(canVisitAllRooms([[1], [2], [3], []]));
console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]));

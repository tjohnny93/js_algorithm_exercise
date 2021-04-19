// let arr = [1, 5, 6, 8, 7, 2, 3, 4];
let arr = [1, 8, 6, 5, 2, 9, 12, 10, 3];

// bubbleSort: compare each pair then move larger value to the back
// since its nested time complexity will be O(n^2)
const bubbleSort = (nums) => {
  for (let i = nums.length; i > 0; i--) {
    let sorted = true; // ++ optimization to skip unneceesary looping (after everything is sorted);
    // reason why i is starting from the length of the array and descending is to remove the unnecessary repeated check even after larger num is sorted
    for (let j = 0; j < i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        sorted = false;
      }
    }
    if (sorted === true) break;
  }

  return nums;
};

// console.log(bubbleSort(arr));

// selectionSort: find the lowest value from each loop then place lowest value in order
// time complexity: O(n^2)
// selectionSort spend less time of swapping compare to bubbleSort since essentially bubbleSort would compare each pair and make swap everytime whereas selectionSort will make swap on end of each complete iteration
const selectionSort = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[lowest] > nums[j]) lowest = j;
    }
    if (i !== lowest) [nums[i], nums[lowest]] = [nums[lowest], nums[i]];
  }
  return nums;
};

// console.log(selectionSort(arr));

// insertionSort: check every item and based on the result of comparison place it in the right position
// time complexity: O(n^2);
// performance is good when array is already almost sorted

const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let currentVal = nums[i];
    let j = i - 1;
    while (j >= 0 && nums[j] > currentVal) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = currentVal;
  }
  return nums;
};

// console.log(insertionSort(arr));

// RECAP: bubble, selection, and insertion are all fairly similar O(n^2), on Almost already sorted situation insertion O(n) > bubble O(n) > selection O(n^2);

// O(n^2) to O(n log n)

// mergeSort:

// simple merge function for arr
let sorted_1 = [1, 6, 9, 12];
let sorted_2 = [2, 4, 8, 11, 13, 15];

const merge = (arr1, arr2) => {
  let result = [],
    i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      i++;
    }
  }
  while (i !== arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j !== arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
};

// console.log(merge(sorted_1, sorted_2));

const mergeSort = (nums) => {
  if (nums.length <= 1) return nums;
  let mid = Math.floor(nums.length / 2);
  let left = mergeSort(nums.slice(0, mid));
  let right = mergeSort(nums.slice(mid));

  return merge(left, right);
};

// console.log(mergeSort(arr));

// quickSort: picks pivot then seperate other nums to left if smaller right if bigger. recursion till its length hits 1 then combine it all together in order [left pivot right]
// time complexity: Worst case O(n^2), average & best case => O(n log n);
// space complexity: O(log n);

const pivot = (nums, start = 0, end = nums.length - 1) => {
  let piv = nums[start];
  let swapIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (piv > nums[i]) {
      swapIdx++;
      [nums[swapIdx], nums[i]] = [nums[i], nums[swapIdx]];
    }
  }
  [nums[start], nums[swapIdx]] = [nums[swapIdx], nums[start]];
  return swapIdx;
};

const quickSort = (nums, left = 0, right = nums.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(nums, left, right);
    quickSort(nums, left, pivotIndex - 1);
    quickSort(nums, pivotIndex + 1, right);
  }
  return nums;
};

// console.log(quickSort(arr));

const simpleQuickSort = (nums) => {
  if (nums.length <= 1) return nums;

  let pivot = nums[nums.length - 1],
    left = [],
    right = [];
  for (const num of nums.slice(0, nums.length - 1)) {
    pivot >= num ? left.push(num) : right.push(num);
  }

  return [...simpleQuickSort(left), pivot, ...simpleQuickSort(right)];
};

console.log(simpleQuickSort(arr));

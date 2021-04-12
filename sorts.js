let arr = [1, 5, 6, 8, 7, 2, 3, 4];

// bubbleSort: compare each pair then move larger value to the back
// since its nested time complexity will be O(n^2)
const bubbleSort = (nums) => {
  let sorted = true; // ++ optimization to skip unneceesary looping (after everything is sorted);
  for (let i = nums.length; i > 0; i--) {
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

console.log(insertionSort(arr));

// RECAP: bubble, selection, and insertion are all fairly similar O(n^2), on Almost already sorted situation insertion O(n) > bubble O(n) > selection O(n^2);

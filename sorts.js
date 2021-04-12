let arr = [1, 5, 6, 8, 7, 2, 3, 4];

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

console.log(selectionSort(arr));
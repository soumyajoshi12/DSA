// Modify Bubble Sort to sort only a specific range [L, R] in the array.
// Given two sorted arrays, merge them efficiently using Bubble Sort logic.
// Modify Bubble Sort to sort an array of objects based on a specific property.
// Implement a two-way Bubble Sort (shaker sort/cocktail sort) and analyze its complexity.

// 2
const bubbleSortMerge = (arr1, arr2) => {
  const mergedArray = arr1.concat(arr2);
  const n = mergedArray.length;
  for (let i = n - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (mergedArray[j] > mergedArray[j + 1]) {
        [mergedArray[j], mergedArray[j + 1]] = [
          mergedArray[j + 1],
          mergedArray[j],
        ];
      }
    }
  }
  return mergedArray;
};

const arr1 = [22, 44, 55, 1, 9, 58];
const arr2 = [4, 8, 4, 66, 8, 20, 99];

console.log(bubbleSortMerge(arr1, arr2));

// 3
const bubbleSortObject = (arr) => {
    const key = arr.map((key) => key);
    const n = key.length;
  for (let i = n - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

const arr = [
  {
    key: 5,
    value: "five",
  },
  {
    key: 1,
    value: "one",
  },
  {
    key: 8,
    value: "eight",
  },
  {
    key: 4,
    value: "four",
  },
];

console.log(bubbleSortObject(arr));

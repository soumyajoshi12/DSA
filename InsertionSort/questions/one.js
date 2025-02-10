// Sort an Array in Descending Order using Insertion Sort

const insertionSort = (array) => {
  const n = array.length;
  for (let i = 1; i < n; i++) {
    let j = i;
    while (j > 0 && array[j - 1] < array[j]) {
      let temp = array[j - 1];
      array[j - 1] = array[j];
      array[j] = temp;
      j--;
    }
  }
};

const array = [23,66,2,7,44,9]
insertionSort(array)
console.log(array)
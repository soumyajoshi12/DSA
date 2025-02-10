// Find the Number of Shifts in Insertion Sort:

const insertionSort = (array) => {
  const n = array.length;
  let count = 0;
  for (let i = 1; i < n; i++) {
    let j = i;
    
    while (j > 0 && array[j - 1] > array[j]) {
      let temp = array[j - 1];
      array[j - 1] = array[j];
      array[j] = temp;
      j--;
      count++;
    }
  }
  console.log(count);
};


insertionSort([23,66,2,7,44,9])
// Find the Kth Smallest/Largest Element:

const bubbleSort = (arr) => {
    const n = arr.length;
    for(let i =n-1 ; i>0 ; i--){
        for(let j = 0 ; j<i ; j++){
            if(arr[j+1]<arr[j]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    const smallest = arr[0];
    const largest = arr[n-1];

    console.log("smallest",smallest);
    console.log("largest",largest);
}

const arr = [6,33,5,22,80,21]
bubbleSort(arr)
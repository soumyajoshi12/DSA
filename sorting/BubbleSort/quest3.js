// Modify Bubble Sort to count and print the number of swaps required to sort the array.

const bubbleSort = (arr) => {
    const n = arr.length;
    let swapperno = 0;
    for(let i= n-1 ; i>0 ; i--){
        for(let j=0 ; j<i ; j++){
            if(arr[j+1]< arr[j]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                swapperno ++;
            }
        }
    }
    console.log(swapperno)
}

const arr = [7,2,77,3]
bubbleSort(arr)
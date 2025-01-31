const bubbleSort = (arr) =>{
    const n = arr.length;
    for(let i = n-1 ; i>0 ; i--){
        for(let j= 0 ; j< i; j++){
            if(arr[j+1]<arr[j]){
                [arr[j+1],arr[j]]=[arr[j],arr[j+1]]
            }
        }
    }
}

const arr1 = [22,44,55,1,9,58]
const arr2 = [4,8,4,66,8,20,99]

bubbleSort(arr1)
bubbleSort(arr2)

console.log("arr1",arr1)
console.log("arr1",arr1)

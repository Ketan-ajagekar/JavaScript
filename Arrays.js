// let arr=[]

// for (let i = 0; i <= 10; i++) {
//    arr[i]=i
    
//    console.log(i);
// }

// let arr=[32,62,35,46,92,45]
// let max = 0
// for (let i= 0; i< arr.length; i++){
//     max=Math.max(max,arr[i])
    
// }
// console.log(max);

// let differnce = Infinity
// let index =0 
// let secondlargest = 0
// for (let i= 0;i<arr.length;i++){
//     if(arr[i] == max)continue
//     else differnce = Math.min(differnce-max
// }

//Reverse arr 
let arr = [23,45,46,74,32]

let first =0
n = arr.length
let last = n-1

while (last >=first){
    let temp = arr[first]
    arr[first]=arr[last]
    arr[last]=temp
    first++
    last--
}
console.log(arr);

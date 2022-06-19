// function binary(arr, x,low,high){
//        if(high>=low){
//         let mid=low+Math.floor((high-low)/2);
//         if(arr[mid]==x)
//             return mid;
//         if(arr[mid]>x)
//             return binary(arr,x,low,mid-1);
        
//         return binary(arr,x,mid+1,high);
        
//     }
//     return -1;
// }

// // code driver 
// var arr=[2,4,6,3,9,10];
// var x=9;
// var result=binary(arr,x,0,arr.length-1);
// console.log(result);

function binary(arr,l,r,x){
    let mid;
    while(r>=l){
        mid=l+Math.floor((r-l)/2);

        if(arr[mid]==x)
            return mid;
        if(arr[mid]>x){
            r=mid-1;
        }else{
            l=mid+1;
        }
    }
    return -1;
}

var arr=[2,4,6,3,9,10];
var x=9;
var result=binary(arr,0,arr.length,x);
console.log(result);
// function ternary(arr, l, r, x) {
//   if (r >= l) {
//     let mid1 = l + parseInt((r - l) / 3);
//     let mid2 = mid1 + parseInt((r - l) / 3);

//     if (arr[mid1] == x) return mid1;

//     if (arr[mid2] == x) return mid2;

//     if (arr[mid1] > x) return ternary(arr, l, mid1 - 1, x);

//     if (arr[mid2] < x) return ternary(arr, mid2 + 1, r, x);
//     return ternary(arr, mid1 + 1, mid2 - 1, x);
//   }
//   return -1;
// }

// // driver code
// var arr = [4, 5, 7, 8, 9, 1, 2,11];
// var x = 1;
// var result = ternary(arr, 0, arr.length, x);
// console.log(result);

function ternary(arr,start,end,x){
    while(end>=start){
        let mid1=start+parseInt((end-start)/3);
        let mid2=end-parseInt((end-start)/3);

        if(arr[mid1]==x){
            return mid1;
        }else if(arr[mid2]==x){
            return mid2;
        }else if(arr[mid1]>x){
            r=mid1-1;
        }else if(arr[mid2]<x){
            l=mid2-1;
        }else{
            l=mid1+1;
            r=mid2-1;
        }

            
    }
    return -1;
}

var arr=[6,4,7,3,8,9];
var x=9;

var result=ternary(arr,0,arr.length-1,x);
console.log(result);

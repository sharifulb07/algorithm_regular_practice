// function linear(arr,n,x){
//     let i;
//     for(i=0;i<n;i++)
//         if(arr[i]==x)
//             return i;
//     return -1;
// }
// var arr=[10,30,40,50,60,70];
// var n=arr.length;
// var x=60;
// var result=linear(arr,n,x);
// console.log(result+1);


// another example of linear algorithms in 

// code declaring section

function linear(arr, search_element){
    let left;
    let length=arr.length;
    let right=arr.length-1;
    position=-1;
    for(left=0;left<=right;){
        if(arr[left]==search_element){
            position=left;
            console.log("Element is found in Array at "+(position+1)+"position");
        }

        if(arr[right]==search_element){
            position=right;
            console.log("Element is found in Array at "+ (position+1)+" position");
        }
        left++;
        right--;
    }
    if(position==-1){
        console.log("Element is not found in the Array");
    }
}


//Driver code section
var arr=[10,1,5,34,9];
var x=9;
linear(arr, x);

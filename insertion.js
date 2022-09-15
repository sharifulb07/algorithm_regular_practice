// function insert(arr){
//     let i,value,j;
//     for(i=1;i<arr.length;i++){
//         value=arr[i];
//         j=i-1;
//         while(j>=0 && arr[j]>value){
//             arr[j+1]=arr[j];
//             j=j-1;
//         }
//         arr[j+1]=value;
//     }
// }


// var arr=[5,1,6,21,90,14,35];
// insert(arr);
// console.log(arr);

// function print(arr){
//     for(var i=0;i<arr.length;i++){
//         console.log(arr[i]+"");
//         console.log("<br>");
//     }
// }

// print(arr);




// function insertion(arr,rIndex,value){
  
//     for(var j=rIndex;j>=0 && arr[j]>val;j--){
//         arr[j+1]=arr[j];

//     }
//     arr[j+1]=value;
// }



// function insertionSort(array){
//     for(var i=1;i<array.length;i++){
//         insertion(array,i-1, array[i]);
//     }
// }



// var arr=[5,3,2,7,8,30,9];
// insertionSort(arr);
// console.log(arr);


function insert(arr){
    for(var i=0;i<arr.length;i++){
        var temp=arr[i];
        for(var j=i-1;j>=0 && arr[j]>temp;j++){
            arr[j+1]=arr[j];
            j=j-1;

        }
        arr[j+1]=temp;
    }
}


var arr=[6,32,2,5,76,100,75];
insert(arr);
console.log(arr);

function cycle(arr){
    var i=0;
    while(i<arr.length){
        if(arr[i]!=i+1){
            var index=arr[i]-1;
            var temp=arr[i];
            arr[i]=arr[index];
            arr[index]=temp;
        }else{
            i++;
        }
    }
}


var arr=[6,8,2,9,3,7,1];
cycle(arr);
console.log(arr);
function linear(arr,n,x){
    let i;
    for(i=0;i<n;i++)
        if(arr[i]==x)
            return i;
    return -1;
}
var arr=[10,30,40,50,60,70];
var n=arr.length;
var x=60;
var result=linear(arr,n,x);
console.log(result+1);
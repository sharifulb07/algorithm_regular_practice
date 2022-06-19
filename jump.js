function jump(arr,x,n){
    let step=Math.sqrt(n);
    let pre=0;

    while(arr[Math.min(step,n)-1]<x){
        pre=step;
        step+=Math.sqrt(n);
        if(pre>=n)
            return -1;
    }

    // linear searching 

    while(arr[pre]<x){
        pre++;
        if(pre==Math.min(step,n))
            return  -1;
    }

    if(arr[pre]==x)
        return pre;
    return -1;
}



//Driver code 
var arr=[3,4,6,1,7,8,9];
var x=9;
var n=arr.length;
var result =jump(arr,x,n);
console.log(result);
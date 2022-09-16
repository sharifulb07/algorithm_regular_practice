
// this is simple recursion function

// function factorial(n){
//     if(n===0) return 1;
//     return factorial(n-1)*n;
// }

// var result=factorial(10);
// console.log(result);


// recursion func declare with memoization here

// var memo={};
// var factorial=function(n){
//     if(n===0){
//         return 1;
//     }else if(memo.hasOwnProperty(n)){
//         return memo[n];
//     }else{
//         var result=factorial(n-1)*n;
//         memo[n]=result;
//         return result;
//     }
// }


// //  code driver
// var finalResult=factorial(150);
// console.log(finalResult);



// bottom-up using iteration approach;

var fibonaci=function(n){
    if(n==0||n==1){
        return n;
    }
    var twoBehind=0;
    var oneBehind=1;

    var result=0;
    for(var i=0;i<n;i++){
        result=twoBehind+oneBehind;
        twoBehind=oneBehind;
        oneBehind=result;
    }
    return result;
}

var cool=fibonaci(5);
console.log(cool);



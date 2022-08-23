// dynamic programming is optimization over plain recursion.
//problem sub-structure
// overlapping problem

// recursion example

// function recTest(n){
//     if(n<=1)
//         return n;
//     else
//         return recTest(n-1)+recTest(n-2);
// };

// // let result=recTest(10);
// let result=recTest(1000);
// console.log(result);


// dynamic programming example over plain recursion

function dpFibonacci(){
    let result={};
    return function fib(n){
        // check if it already calculate 
        if(n in result){
            return
        }
    }
}
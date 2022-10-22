// const dfs=(graph,source)=>{
//     const stack=[source];

//     while(stack.length>0){
//         const current=stack.pop();
//         console.log("Value is: "+current);
//         for(const neighbor of graph[current]){
//             stack.push(neighbor);
//         }
//     }
   
// }



// const bfs3=(graph,source)=>{
//     const queue=[source];
//     while(queue.length>0){
//         const current=queue.shift();

//         console.log("Value is: "+current);
//         for(let neighbor of graph[current]){
//             queue.push(neighbor);
//         }
//     }

// }

//this is recursive approach here okay. 

// const recursiveDepthFirst=(graph,source)=>{
//     console.log(source);
//     for(let neighbor of graph[source]){
//         recursiveDepthFirst(graph,neighbor);
//     }

// }


// recursive approach here 

// const hasPath=(graph,source, dest)=>{
//     if(source===dest) return true;
//     for(let neighbor of graph[source]){
//         if(hasPath(graph,neighbor,dest)===true){
//             return true;
//         }
//     }
//     return false;
// }


// iterative approach here
const hasPath=(graph,source, dest)=>{
    const queue=[source];

    while(queue.length>0){
        const current=queue.shift();
        if(current===dest) return true;
        for(let neighbor of graph[current]){
            queue.push(neighbor);
        }
    }
}

const graph={
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:['d'],
    f:[]
}

hasPath(graph,'a',"d");
// bfs3(graph,'a',"d");
// recursiveDepthFirst(graph,'a');
// const bfs2=function(start){
//     // Initialize an empty stack, empty 'result & a 'visisted map
//     // add the starting vertex to the stack & visited map

//     const queue=[start];
//     const result=[];
//     const visited=[];
//     visited[start]=true;
//     let currentVertex;
//     // while queue is not empty
//     while(queue.length>0){
//         // shift and store current vertex
//         currentVertex=queue.shift();
//         // push current vertex to result array
//         result.push(currentVertex);
//         // iterate through current vertex's adjacency list
//         this.adjacentList[currentVertex].array.forEach(neighbour => {
//             if(!visited[true]){
//                 // add vertex to visited map
//                 visited[neighbour]=true;
//                 // Push vertex to stack 
//                 queue.push(neighbour);
//             }
//         });
//     }
//     // return result array
//     return result;
// }



// const bfsRecursive=function(start){
//     const result=[];
//     const visited={};
//     const adjacentList= this.adjacentList;

//     (function dfs(vertex){
//         if(!vertex) return null;
//         visited[vertex]=true;
//         result.push(vertex);
//         this.adjacentList[vertex].array.forEach(neighbor => {
//             if(!visited[neighbor]){
//                 return dfs(neighbor);
//             }
//         });
//     })(start);
//     return result;
// }



// dfsIterative

Graph.prototype.dfsIterative=function(start){
    const result=[];
    const stack=[start];
    const visisted={};
    visisted[start]=true;
    let currentVertex;
    while(stack.length){
        currentVertex=stack.pop();
        result.push(currentVertex);
        this.adjacencyList[currentVertex].array.forEach(neighbor => {
            if(!visisted[neighbor]){
                visisted[neighbor]=true;
                stack.push(neighbor);
            }
        });
    }
}



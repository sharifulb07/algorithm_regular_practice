// const hasPath=function(maze,start, destination){
//     maze[start[0]][start[1]]=1;
//     return searchHelper(maze,start,destination);
// }


// function searchHelper(maze,current,end){
//     if(current[0]==end[0] && current[1]==end[1]){
//         return true;
//     }
//     let neighbourIndices, neighbor;

//     let directions=[[0,1],[1,0],[0,-1[-1,0]]];
//     for( let direction of directions){
//         neighbourIndices=[current[0]+direction[0], current[1]+direction[1]];
//         if(isFeasible(maze,neighbourIndices)){
//             maze[neighbourIndices[0]][neighbourIndices[1]]=1;
//             if(searchHelper(maze,neighbourIndices,end)){
//                 return true;
//             }
//         }
//     }
//     return false;

// }

// function isFeasible(maze,indices,){
//     let x=indices[0], y=indices[1];
//     return x>=0 && x<maze.length && y>=0 && y<maze[x].length && maze[x][y]==0;
// }



// // cod driver
// var maze=[[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]];
// hasPath(maze,[0,4],[3,2]);




// function hasPath(graph,src,dist){
//     if(src===dist) return true;

//     for(let neighbor of graph[src]){

//         if(hasPath(graph,neighbor,dist)===true){
//             return true;
//         }

//     }
//     return false;
// }

function hasPath(graph,src,dist){
    const queue=[src];

    while(queue.length>0){
        const current=queue.shift();
        if(current===dist) return true;
        for(let neighbor of graph[current]){
            queue.push(neighbor);
        }
    }
    return false;
}


const graph={
    a:['b','c'],
    b:['d'],
    c:[],
    d:['e'],
    e:['f']
}

console.log(hasPath(graph,'a','b'));
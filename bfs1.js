// Graph.prototype.bfs=function(start){
//     const queue=[start];
//     const result=[];
//     const visited={};

//     visited[start]=true;
//     let currentVertex;
//     while(queue.length){
//         currentVertex=queue.shift();
//         result.push(currentVertex);
//         this.adjacencyList[currentVertex].forEach(element => {
//             if(!visited[element]){
//                 visited[element]=true;
//                 queue.push(element);
//             }
//         });
//     }

//     return result;
// }


// function dfs(graph,source){
//     const stack=[source];
//     while(stack.length>0){
//         const current =stack.pop();
//         console.log(current);
//         for(let neighbour of graph[current]){
//             stack.push(neighbour);
//         }
//     }
// }

// function bfs(graph,source){
//     const queue=[source];
//     while(queue.length>0){
//         const current=queue.shift();
//         console.log(current);
//         for(let neighbour of graph[current]){
//             queue.push(neighbour);
//         }
//     }
// }


// const graph={
//     a:['c','b'],
//     b:['d'],
//     c:['e'],
//     d:['f'],
//     e:[],
//     f:[]
// }

// bfs(graph,'a');


class Graph{
    constructor() {
        this.adjacencyList={};

    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=[];
        }
    }

    addEdge(source,destination){
        if(!this.adjacencyList[source]){
            this.addVertex(source);
        }

        if(!this.adjacencyList[destination]){
            this.addVertex(destination);
        }

        this.adjacencyList[source].push(destination);
        this.adjacencyList[destination].push(source);
    }


    removeEdge(source,destination){
        this.adjacencyList[source]=this.adjacencyList[source].filter(vertex=>vertex!=destination);
        this.adjacencyList[destination]=this.adjacencyList[destination].filter(vertex=>vertex!=source);
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex]){
            const adjacentVertex=this.adjacencyList[vertex].pop();
            this.removeEdge(vertex,adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
}



function bfs(graph,source){
    const queue=[source];

    while(queue.length>0){
        const current=queue.shift();
        console.log(current);
        for(let neighbour of graph[current]){
            queue.push(neighbour);
        }
    }
}

var ob=new Graph();
ob.addVertex('A');
ob.addVertex('B');
ob.addVertex('C');
ob.addVertex('D');
ob.addVertex('E');
ob.addVertex('F');
ob.addVertex('G');


ob.addEdge('A','B');
ob.addEdge('B','C');
ob.addEdge('E','F');
ob.addEdge('D', 'G');

const graph=bfs(ob,"A");
// console.log(ob);
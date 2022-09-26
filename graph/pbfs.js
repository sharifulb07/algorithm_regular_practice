// class Graph{
//     constructor(){
//         this.adjacentList={};
//     }

//     addVertex(vertex){
//         if(!this.adjacentList[vertex]){
//             this.adjacentList[vertex]=[];
//         }

//     }

//     addEdge(source, destination){
//         if(!this.adjacentList[source]){
//             this.addVertex(source);
//         }
//         if(!this.adjacentList[destination]){
//             this.addVertex(destination);
//         }

//         this.adjacentList[source].push(destination);
//         this.adjacentList[destination].push(source);
//     }

//     removeEdge(source,destination){
//         this.adjacentList[source]=this.adjacentList[source].filter(vertex=>vertex!=destination);
//         this.adjacentList[source]=this.adjacentList[destination].filter(vertex=>vertex!=source);
//     }

//     removeVertex(vertex){
//         while(this.adjacentList[vertex]){
//             const adjacentVertex=this.adjacentList[vertex].pop();
//             this.removeEdge(vertex,adjacentVertex);
//         }
//         delete this.adjacentList[vertex];
//     }
// }


// var ob=new Graph();
// ob.addVertex(9);
// ob.addVertex(5);
// ob.addVertex(4);
// ob.addVertex(8);
// ob.addVertex(6);
// ob.addVertex(1);

// ob.addEdge(9,5);
// ob.addEdge(9,4);
// ob.addEdge(4,5);
// ob.addEdge(1,5);
// ob.addEdge(8,4);
// ob.addEdge(9,6);


// console.log(ob);




class Graph{
    constructor(){
      this.adjacentList={};
    }
    
    addVertex(vertex){
      if(!this.adjacentList[vertex]){
      this.adjacentList[vertex]=[];
      }
    }
    
    addEdge(source, destination){
      if(!this.adjacentList[source]){
        this.addVertex(source);
      };
      if(!this.adjacentList[destination]){
        this.addVertex(destination);
      }
      this.adjacentList[source].push(destination);
      this.adjacentList[destination].push(source);
      
      
    }
    
    removeEdge(source, destination){
      this.adjacentList[source]=this.adjacentList[source].filter(vertex=>vertex!=destination);
      this.adjacentList[destination]=this.adjacentList[destination].filter(vertex=>vertex!=destination);
    }
    
    removeVertex(vertex){
      while(!this.adjacentList[vertex]){
        const adjacentVertex=this.adjacentList[vertex].pop();
        this.remove(vertex,adjacentVertex);
      }
      delete this.adjacentList[vertex];
    }

    

//  bfs(start){
//   const queue=[start];
//   const result=[];
//   const visited={};

//   visited[start]=true;
//   let currentVertex;
//   while(queue.length){
//       currentVertex=queue.shift();
//       result.push(currentVertex);
//       this.adjacencyList[currentVertex].forEach(element => {
//           if(!visited[element]){
//               visited[element]=true;
//               queue.push(element);
//           }
//       });
//   }

//   return result;
// }
    
  }


  // const dfs=function(Graph,source){
  //   for(let neighbour of Graph[source]){
  //     dfs(Graph,neighbour);
  //   }
  // }
  


  function dfs(graph, source){
    const stack=[source];
    while(stack.length>0){
      const current=stack.pop();
      console.log(current);
      for(let neighbour of graph[current]){
        stack.push(neighbour);
      }
    }
  }
  
  var ob=new Graph();
  ob.addVertex(5);
  ob.addVertex(10);
  ob.addVertex(15);
  ob.addVertex(25);
  ob.addVertex(20);
  ob.addVertex(25);

  ob.addEdge(10,25);
  ob.addEdge(15,25);
  ob.addEdge(15,20);
  ob.addEdge(5,20);

  const result=dfs(ob.adjacentList,5);
 console.log(result);
  



// const result=ob.bfs(5);


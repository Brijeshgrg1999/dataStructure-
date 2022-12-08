const graph = {
    a : ['c' ,'b' ],
      b: ['d'],
      c: ['e'],
      d : ['f'],
      e : [ ],
      f  : [],
    
      
  };



//   const depthFirst = (graph , sourceNode ) =>{
//     const stack = [ sourceNode ] ;

// while(stack.length > 0 ){

// currentNode = stack.pop() ;
// console.log(currentNode);




//  for ( let neighbor of graph[currentNode] ){

//     stack.push(neighbor);

//  }

// }


//   };












// const depthFirst = (graph , sourceNode )=>{

// console.log(sourceNode);
// for (let neigh of graph[sourceNode]){
//   depthFirst(graph , neigh);
// }


// }

//   depthFirst(graph , 'a' ) ;
  


const breadthFirst = ( graph , sourceNode )=>{
  const queue = [ sourceNode ] ;

    while( queue.length > 0 ){



        const current = queue.shift();
        console.log(current) ;


        for( let neigh of graph[current]){

            queue.push(neigh);
        }
    }

}

breadthFirst(graph , 'a' ) ; 
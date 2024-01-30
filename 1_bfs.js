class node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

function traverse(root) {
  // Implement
  const q = [];
  const output = [];

  q.push(root)

  while(q.length){
    const currentNode = q.shift()
    output.push(currentNode.value)

    if(currentNode.left){
      q.push(currentNode.left)
    }
    if(currentNode.right){
      q.push(currentNode.right)
    }
  }

  return output;
}

// Test cases:
const head = new node(6)
head.left = new node(3)
head.right = new node(9)

/*

      6
    /  \
  3     9

PLAN: 

Step 1: utilize an empty queue.
initialize and empty output list.

queue = []
output: [6, 3, 9]

Step 2: enqueue the head into the queue

Step 3: While we have value inside the queue,
then start serving the values inside the queue.
 by serving we mean 2 steps 
 a: remove the value/node from the queue and add it to the output.
 b: enqueue all the children {left & right} of the current node if it has children.

STep 4: repeat step three as long as we have values inside the queue.


Step 5: once the queue is empty return the output list.

*/
console.log(traverse(head)) // 6, 3, 9

// Implement a level-order breadth-first traversal for a binary tree using the provided class for a binary tree node.
// the return should be a list of values in the binary tree, based on a level-order (searching left to right at each "level") breadth-first traversal

// Hint: implementing BFS requires a queue data structure.
// For a quick and easy queue implementation:
// const queue = []
// then queue.push(value) to enqueue and queue.shift() to dequeue

function renderNodes(node) {
  console.log(node.value); // Render or print the current node
  // Render the child nodes recursively
  node.children.forEach((child) => {
    renderNodes(child);
  });
}

// Example usage
const rootNode = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        {
          value: 4,
          children: [],
        },
        {
          value: 5,
          children: [],
        },
      ],
    },
    {
      value: 3,
      children: [],
    },
  ],
};

// Render the nodes starting from the root node
renderNodes(rootNode);

function renderTreeIteratively(root) {
  const arr = []; // Create an empty stack
  arr.push(root); // Push the root node onto the stack

  while (arr.length > 0) {
    // Process nodes until the stack is empty
    const node = arr.pop(); // Pop the next node from the stack
    console.log(node.value); // Render or print the node's value
    // Push the node's children onto the arr, in reverse order
    for (let i = node.children.length - 1; i >= 0; i--) {
      arr.push(node.children[i]);
    }
  }
}

// Render the tree starting from the root node
renderTreeIteratively(rootNode);

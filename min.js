//Phil Hofer
//3/2/15
//min.js
//This program finds the minimum value in a BST.

//Declare function called min and pass it an argument called node.
function min(node) {
  //if nothing was passed in, return 0
  if (!node) {
    return 0;
  }
  //if node has something on its left
  if (node.left){
    //recursively call min on what was on the left of node
    return min(node.left)
  }
  //return the final minimum value of node
  return node.value
}


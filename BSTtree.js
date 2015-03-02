//Define a node object
function Node(data, left, right) {
  this.data = data;//actual data that is stored
  this.left = left;//link to data on the left of current node
  this.right = right;//link to data on the right of current node
  this.show = show;//shows the data stored in a node
}

//displays the data stored in a node
function show() {
  return this.data;
}


function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.preOrder = preOrder;
  this.postOrder = postOrder;
 }

//This function is used to insert new values into the tree.
function insert(data) {
 //declare a new node called 'n' and give it data.
 var n = new Node(data, null, null);
 //If there isn't already a root node, this will become the root node.
 if (this.root === null) {
   //this line gives the root the new node
   this.root = n;
   }//end if
 else {
   //declare variable called 'current', give it the root node
   var current = this.root;
   //create a variable called 'parent'
   var parent;
   //this while runs until broken out of or it retruns false
   while (true) {
     //give what is in current to parent.
     parent = current;
     //if data entered now is smaller than the current data
     if (data < current.data) {
       //give current what is on the left
       current = current.left;
       //if current is exactly equal to null
       if (current === null) {
	 //insert value of n into parent.left
         parent.left = n;
	 //break out of the while loop
         break;
         }//end if
     }//end if
   else {
     //give current what is on the right
     current = current.right;
     //if current is exactly equal to null
     if (current === null) {
       //insert value of n into parent.right
       parent.right = n;
       //break out of while loop
       break;
       }//end if
     }//end else
   }//end while
 }//end else
}//end insert(data)


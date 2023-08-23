//creating a Node class
 class Node {
  //constructor
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  // next setter
  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error("node must be a type Node");
    }
  }

  //next getter
  getNextNode() {
    return this.next;
  }
}
//creating instances of Node class
const firstNode = new Node("I am firstNode");
const secondNode = new Node("I am secondNode");
const thirdNode = new Node("I am thirdNode");
//error (next is not of type Node)
//firstNode.setNextNode("next");

firstNode.setNextNode(secondNode);
console.log(firstNode.getNextNode());

//firstNode pointer has been changed to thirdNode
firstNode.setNextNode(thirdNode)
console.log(firstNode.getNextNode());

module.exports = { Node }

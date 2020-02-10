import Node from './node';

export default class Tree {
  constructor() {
    this.root = null;
  }

  static Node() {
    const args = Array.prototype.slice.call(arguments, 0);
    const Constructor = Node.bind(null, ...args);
    return new Constructor();
  }

  insert(ele) {
    if(this.root === null) {
      this.root = new Node(ele);
    } else {
      const newNode = new Node(ele);
      _insertNode(this.root, newNode);
    }
  }
}

function _insertNode(oldNode, newNode) {
  if(newNode.value >= oldNode.value) {
    if(oldNode.right === null) {
      oldNode.right = newNode;
    } else {
      _insertNode(oldNode.right, newNode);
    }
  } else {
    if(oldNode.left === null) {
      oldNode.left = newNode;
    } else {
      _insertNode(oldNode.left, newNode);
    }
  }
}

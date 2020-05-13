import { TreeNode } from './treeNode';

class Tree {
  root: TreeNode;

  constructor() {
    this.root = null;
  }

  static Node() {
    const args = Array.prototype.slice.call(arguments, 0);
    const Constructor = TreeNode.bind(null, ...args);
    return new Constructor();
  }
}

export { Tree };

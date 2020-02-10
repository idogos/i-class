import Tree from '../base/tree';

export class BinaryTree extends Tree {
  constructor() {
    super();
    this.depth = -1;
    this.nodes = [];
    this.deepestNodeSum = 0;
  }

  /**
   * 获取每一层的节点
   * @returns {Array}
   */
  nodesOfLevels() {
    const queue = [];
    this.root && queue.push(this.root);
    while(queue.length) {
      const len = queue.length;
      const slot = [];
      for(let i = 0; i < len; i++) {
        const node = queue.shift();
        slot.push(node);
        if(node.left) {
          queue.push(node.left);
        }
        if(node.right) {
          queue.push(node.right);
        }
      }
      this.nodes.push(slot);
    }
    return this.nodes;
  }

  /**
   * 获取最底层节点的和
   * @returns {number}
   */
  deepestLeavesSum() {
    let maxDepth = -1;
    let sum = 0;
    _deepestSum(this.root, 0);
    this.deepestNodeSum = sum;
    return this.deepestNodeSum;
    function _deepestSum(node, dep) {
      if(!node) return;
      if(maxDepth === dep) {
        sum += node.value;
      }
      if(maxDepth < dep) {
        sum = node.value;
        maxDepth = dep;
      }
      _deepestSum(node.left, dep + 1);
      _deepestSum(node.right, dep + 1);
    }
  }

  /**
   * 返回二叉树层级
   * @returns {number}
   */
  deepestLeaves() {
    this.depth = this.depth === -1 ? _deepestLeaves(this.root) : this.depth;
    return this.depth;
  }

  /**
   * 构建一般二叉树
   * @param {Array} list
   * @returns {null}
   */
  constructTree(list) {
    this.root = null;
    if(!list || list.length === 0) return null;
    for(let i = 0, len = list.length; i < len; i++) {
      this.insert(list[i]);
    }
    return this.root;
  }

  /**
   * 构建最大二叉树
   * @param {Array} list
   * @returns {null}
   */
  constructMaxTree(list) {
    this.root = null;
    if(!list || list.length === 0) return null;
    for(let i = 0, len = list.length; i < len; i++) {
      const ele = list[i];
      if(!this.root) {
        this.root = Tree.Node(ele);
      } else {
        this.root = _MaxTree(this.root, ele);
      }
    }
    return this.root;
  }
}

// 递归形成最大二叉树
function _MaxTree(rootNode, ele) {
  if(!rootNode) return null;
  if(ele === null || ele === undefined) return null;
  const value = typeof ele === 'object' ? ele.value : ele;
  if(value === undefined || value === null) return null;
  if(rootNode.value < value) {
    const newNode = Tree.Node(ele);
    newNode.left = rootNode;
    return newNode;
  } else {
    if(!rootNode.right) {
      rootNode.right = Tree.Node(ele);
    } else {
      rootNode.right = _MaxTree(rootNode.right, ele);
    }
    return rootNode;
  }
}

// 遍历获取二叉树深度
function _deepestLeaves(node) {
  if(!node) return 0;
  let leftDepth = _deepestLeaves(node.left) + 1;
  let rightDepth = _deepestLeaves(node.right) + 1;
  return Math.max(leftDepth, rightDepth);
}

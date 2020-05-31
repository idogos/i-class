import { TreeNode, BinaryTree, Heap } from "../../dist/i-class.umd";

const objectElements = [{ value: 67 }, { value: 78 }, { value: 22 }, { value: 56 }, { value: 12 }, { value: 2 }];
const numberElements = [67, 78, 22, 56, 12, 2];
const payLoadElements = [{ value: 39, payLoad: 'Leo' }, { value: 32, payLoad: 'John' }, { value: 90, payLoad: 'Rose' }];

// 常规二叉树构建目标
const binaryTreeTarget = {
  value: 67,
  left: {
    value: 22,
    left: { value: 12, left: { value: 2, left: null, right: null }, right: null },
    right: { value: 56, left: null, right: null }
  },
  right: { value: 78, left: null, right: null }
};

// 最大二叉树构建目标
const maxBinaryTreeTarget = {
  value: 78,
  left: {
    value: 67,
    left: null,
    right: null
  },
  right: {
    value: 56,
    left: { value: 22, left: null, right: null },
    right: { value: 12, left: null, right: { value: 2, left: null, right: null } }
  }
};

const minHeapTarget = [2, 12, 22, 56, 78, 67];
const maxHeapTarget = [78, 67, 22, 56, 12, 2];


describe('TreeNode section', function() {
  it('[节点值是Number]获取正确的value', function() {
    const treeNode = new TreeNode(89);
    expect(treeNode.value).to.equal(89);
    expect(treeNode.left).to.equal(null);
    expect(treeNode.right).to.equal(null);
  });

  it('[节点值是String]获取正确的value', function() {
    const treeNode = new TreeNode('89');
    expect(treeNode.value).to.equal('89');
    expect(treeNode.value).to.not.equal(89);
  });

  it('[节点值是Object]获取正确的value', function() {
    const treeNode = new TreeNode({ value: 80 });
    expect(treeNode.value).to.equal(80);
  });

});

describe('BinaryTree section', function() {
  it('[常规二叉树]构造', function() {
    const binaryTree = new BinaryTree().constructTree(numberElements);
    expect(JSON.stringify(binaryTree)).to.equal(JSON.stringify(binaryTreeTarget));
    const binaryTreeObject = new BinaryTree().constructTree(objectElements);
    expect(JSON.stringify(binaryTreeObject)).to.equal(JSON.stringify(binaryTreeTarget));
  });

  it('[最大二叉树]构造', function() {
    const maxBinaryTree = new BinaryTree().constructMaxTree(numberElements);
    expect(JSON.stringify(maxBinaryTree)).to.equal(JSON.stringify(maxBinaryTreeTarget));
    const maxBinaryTreeObject = new BinaryTree().constructMaxTree(objectElements);
    expect(JSON.stringify(maxBinaryTreeObject)).to.equal(JSON.stringify(maxBinaryTreeTarget));
  });
});

describe('Heap section', function() {
  it('[堆]节点值为Number构造', function() {

    const maxHeap = new Heap({
      data: numberElements,
      type: 'max'
    });

    const minHeap = new Heap({
      data: numberElements,
      type: 'min'
    });
    expect(maxHeap.export()).to.eql(maxHeapTarget);
    expect(minHeap.export()).to.eql(minHeapTarget);
  });

  it('[堆]节点值为Object构造', function() {
    const minHeapHasPayload = new Heap({
      data: payLoadElements,
      type: 'max'
    });
    expect(JSON.stringify(minHeapHasPayload.export())).to.eql(JSON.stringify(
      [{
        value: 90, payLoad: 'Rose'
      }, {
        value: 32, payLoad: 'John'
      }, {
        value: 39, payLoad: 'Leo'
      }]
    ));
  })

});




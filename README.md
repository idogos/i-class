# i-class
Usually data structure constructor class.


## Install
```bash
npm install @idogo/i-class --save
```

## Usage

Browser

```html
<script src="url/i-class/dist/i-class.umd.js"></script>
<script>
  var TreeNode = iClass.TreeNode;
</script>
```

Es6

```js
import { TreeNode } from '@idogo/i-class';
const node = new TreeNode(10);
```

TreeNode

```js
const TreeNode = require('@idogo/i-class').TreeNode;
const node = new TreeNode(10);
```

## Interface class

 
### TreeNode
> construct tree node

Constructor instance:

```js
import { TreeNode } from '@idogo/i-class';
const node = new TreeNode(10);
```

Constructor by object element which has required key `value` and optional key `payLoad`:
```js
const ele = { value: 90 }; 
const node = new TreeNode(ele);
```
```js
const ele = { value: 90, payLoad: 'I am old man' }; 
const node = new TreeNode(ele);
```

Constructor chained instances:
```js
const root = new TreeNode(19);
root.left = new TreeNode(20);
root.right = new TreeNode(22);
```
```js
const root = new TreeNode(19, new TreeNode(29), new TreeNode(22));
```

Other api:
 - `left` default:null
 - `right`default:null
 - `payLoad`default:undefined
 
 
### Heap

Constructor instance:

```js
import { Heap } from '@idogo/i-class';
const heap = new Heap({
  data: [67, 78, 23, 56, 12, 2]
});
```

Constructor a min(default) or max heap with `type` in config:

```js
const heap = new Heap({
  data: [67, 78, 23, 56, 12, 2],
  type: 'max'
});
```

Shift top element:

```js
const heap = new Heap({
  data: [67, 78, 23, 56, 12, 2],
  type: 'max'
});
heap.shift(); // 78
heap.size(); // 5
```


Append an element:
```js
import { Heap } from '@idogo/i-class';
const heap = new Heap({
  data: [67, 78, 23, 56, 12, 2]
});
heap.append(88); // [88, 67, 78, 56, 12, 2, 23]
heap.append(6); // [88, 67, 78, 56, 12, 2, 23, 6]
heap.size(); // 8
```


### BinaryTree

Constructor instance:

```js
import { BinaryTree } from '@idogo/i-class';
const binaryTree = new BinaryTree();
```

Construct a ordinary binaryTree by Array fill with Number:

```js
const binaryTree = new BinaryTree();
const tree = binaryTree.constructTree([5, 56, 78, 8, 12]); 
```

Construct a ordinary binaryTree by Array fill with Object, element of Array has required key `value` and optional key `payLoad`:
```js
const binaryTree = new BinaryTree();
const tree = binaryTree.constructTree([{ value: 5 }, { value: 56, payLoad: null }, { value: 78}]);
```
```js
const source = [{ name: 'leo', age: 89 }, { name: 'jack', age: 12 }, { name: 'rose', age: 10 }, { name: 'john', age: 22 }];
const list = source.map(data => {
  const item = {};
  item.value = data.value;
  item.payLoad = data;
  return item;
});
const binaryTree = new BinaryTree();
const tree = binaryTree.constructTree(list);
```

Construct a Max binaryTree:
```js
const binaryTree = new BinaryTree();
const maxTree = binaryTree.constructMaxTree([5, 56, 78, 8, 12]);
```

Other api:
 - `insert` insert a node in already existed BinaryTree instance.if existed BinaryTree instance was MaxTree or other special tree, this handler would change construction. 
 - `deepestLeaves` return depth of BinaryTree instance.
 - `nodesOfLevels` return nodes of levels by Array.(eg: [[5], [6, 7], [12, 5, 7]])
 - `deepestLeavesSum` return sum of deepest nodes.

## License

[MIT](LICENSE).

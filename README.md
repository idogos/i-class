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
  var Node = iClass.Node;
</script>
```

Es6

```js
import { Node } from '@idogo/i-class';
const node = new Node(10);
```

Node

```js
const Node = require('@idogo/i-class').Node;
const node = new Node(10);
```

## Interface class

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
 
 
### Node
> construct tree node

Constructor instance:

```js
import { Node } from '@idogo/i-class';
const node = new Node(10);
```

Constructor by object element which has required key `value` and optional key `payLoad`:
```js
const ele = { value: 90 }; 
const node = new Node(ele);
```
```js
const ele = { value: 90, payLoad: 'I am old man' }; 
const node = new Node(ele);
```

Constructor chained instances:
```js
const root = new Node(19);
root.left = new Node(20);
root.right = new Node(22);
```
```js
const root = new Node(19, new Node(29), new Node(22));
```

Other api:
 - `left` default:null
 - `right`default:null
 - `payLoad`default:undefined

## License

[MIT](LICENSE).

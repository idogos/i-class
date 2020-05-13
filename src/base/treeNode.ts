import { isObject } from "../libs/util";

interface Value {
  value: string | number | null | undefined
}

class TreeNode {
  value: string | number | null | undefined;
  left: TreeNode;
  right: TreeNode;
  payLoad?: any;

  constructor(ele: Value | any, left = null, right = null, payLoad?) {
    this.value = isObject(ele) ? ele.value : ele;
    this.left = left;
    this.right = right;
    this.payLoad = payLoad;
  }
}

export { TreeNode };

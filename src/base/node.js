export default class Node {
  constructor(value = undefined, left = null, right = null, payLoad = null) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.payLoad = payLoad;
  }
}

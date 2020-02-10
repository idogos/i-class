
export default class Node {
  /**
   * @param ele {Object|Number}
   * @param left {Object}
   * @param right {Object}
   * @param payLoad {*}
   */
  constructor(ele = undefined, left = null, right = null, payLoad = null) {
    this.value = typeof ele === 'object' ? ele.value : ele;
    this.left = left;
    this.right = right;
    this.payLoad = payLoad || (ele && ele.payLoad);
  }
}

export { Node };

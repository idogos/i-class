import { isObject } from "../libs/util";

interface Value {
  value: string | number
}

class HeapNode {
  value: string | number;
  payLoad?: any;

  constructor(ele: Value | any, payLoad?) {
    this.value = isObject(ele) ? ele.value : ele;
    this.payLoad = payLoad;
  }
}

export { HeapNode };

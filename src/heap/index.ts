import { HeapAbout } from "./HeapAbout";
import { HeapNode } from "../base/heapNode";

interface Props {
  data: Array<HeapNode> | Array<number>,
  type: string
}

export class Heap {
  data: any[];
  type: string;
  isObjectElement: boolean;

  constructor(config: Props) {
    const {data = [], type = HeapAbout.MIN_TYPE} = config;
    this.isObjectElement = false;
    this.data = this.transformHeapNode(data);
    this.type = type;
    this.createHeap();
  }

  _adjustDown(start, length) {
    if (length <= 0) return;
    const data = this.data;
    const type = this.type;
    let next = start * 2 + 1;
    let temp = data[start];
    while (next < length) {
      if (type === HeapAbout.MIN_TYPE) {
        if (data[next + 1] && data[next].value > data[next + 1].value) next++; // 构建最小堆
        if (temp.value < data[next].value) break; // 构建最小堆
      } else {
        if (data[next + 1] && data[next].value < data[next + 1].value) next++; // 构建最大堆
        if (temp.value > data[next].value) break; // 构建最大堆
      }
      const parent = Math.floor((next - 1) / 2);
      data[parent] = data[next];
      next = next * 2 + 1;
    }
    data[Math.floor((next - 1) / 2)] = temp;
  }

  _adjustUp(last) {
    const data = this.data;
    const type = this.type;
    const temp = data[last];
    while (last > 0 && (type === HeapAbout.MIN_TYPE ? temp.value < data[Math.floor((last - 1) / 2)].value : temp.value > data[Math.floor((last - 1) / 2)].value)) {
      data[last] = data[Math.floor((last - 1) / 2)];
      last = Math.floor((last - 1) / 2);
    }
    data[last] = temp;
  }

  size() {
    return this.data.length;
  }

  export() {
    const data = this.data;
    return this.isObjectElement ? data : data.map(ele => ele.value);
  }

  transformHeapNode(data) {
    let result;
    if (isHeapNodeList(data)) {
      return data;
    } else {
      this.isObjectElement = typeof data[0] === 'object';
      result = data.map(ele => new HeapNode(ele, ele.payLoad));
    }
    return result;
  }

  createHeap() {
    const length = this.size();
    const top = length >= 2 ? Math.floor((length - 2) / 2) : 0;
    for (let i = top; i > -1; i--) {
      this._adjustDown(i, length);
    }
    return this.data;
  }

  shift() {
    if (this.size() <= 1) return this.data.shift();
    const result = this.data[0];
    this.data[0] = this.data[this.size() - 1];
    this.data.length--;
    this._adjustDown(0, this.size());
    return result;
  }

  append(element) {
    this.data.push(isHeapNode(element) ? element : new HeapNode(element, element.payLoad));
    this._adjustUp(this.size() - 1);
    return this.data;
  }

}

// 判断Heap的data是否为Array<HeapNode>
function isHeapNodeList(arg) {
  const ins = arg as Array<HeapNode>;
  return ins[0].constructor && ins[0].constructor.name === 'HeapNode';
}

// 判断是否为Heap节点
function isHeapNode(element) {
  return element.constructor && element.constructor.name === 'HeapNode';
}

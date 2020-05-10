/// <reference path="./HeapAbout.ts" />
type Data = {
  value: number
}

interface Props {
  data: Array<Data> | Array<number>,
  type: string
}

export class Heap {
  data: any[];
  type: string;

  constructor(config: Props) {
    const {data = [], type = HeapAbout.MIN_TYPE} = config;
    this.data = this.getProxyData(data);
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
        if (data[next] > data[next + 1]) next++; // 构建最小堆
        if (temp < data[next]) break; // 构建最小堆
      } else {
        if (data[next] < data[next + 1]) next++; // 构建最大堆
        if (temp > data[next]) break; // 构建最大堆
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
    while (last > 0 && (type === HeapAbout.MIN_TYPE ? temp < data[Math.floor((last - 1) / 2)] : temp > data[Math.floor((last - 1) / 2)])) {
      data[last] = data[Math.floor((last - 1) / 2)];
      last = Math.floor((last - 1) / 2);
    }
    data[last] = temp;
  }

  size() {
    return this.data.length;
  }

  getProxyData(data) {
    let proxyInstance;
    if(isDataType(data)) {
      proxyInstance = new Proxy(data, {
        get: function (target, key) {
          if (key.constructor.name !== 'Symbol') {
            if (key in target) {
              if (target.hasOwnProperty(Number(key))) {
                return target[key].value || null;
              }
              return target[key];
            }
          }
        }
      });
      return proxyInstance;
    }
    return data;
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
    this.data.push(element);
    this._adjustUp(this.size() - 1);
    return this.data;
  }

}

// 判断Heap的data是否为Array<Data>
function isDataType(arg) {
  return (arg as Array<Data>)[0].value !== undefined;
}

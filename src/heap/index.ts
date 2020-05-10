const MIN_TYPE = 'min';
const MAX_TYPE = 'max';

export class Heap {
  constructor(config = {}) {
    const { data = [], type = 'min' } = config;
    this.data = data;
    this.type = type;
    this.createHeap();
  }

  _adjustDown(start, length) {
    if(length <= 0) return;
    const data = this.data;
    const type = this.type;
    let next = start * 2 + 1;
    let temp = data[start];
    while(next < length) {
      if(type === MIN_TYPE) {
        if(data[next] > data[next + 1]) next++; // 构建最小堆
        if(temp < data[next]) break; // 构建最小堆
      } else {
        if(data[next] < data[next + 1]) next++; // 构建最大堆
        if(temp > data[next]) break; // 构建最大堆
      }
      const parent = parseInt((next - 1) / 2);
      data[parent] = data[next];
      next = next * 2 + 1;
    }
    data[parseInt((next - 1) / 2)] = temp;
  }

  _adjustUp(last) {
    const data = this.data;
    const type = this.type;
    const temp = data[last];
    while(last > 0 && (type === MIN_TYPE ? temp < data[parseInt((last - 1) / 2)] : temp > data[parseInt((last - 1) / 2)])) {
      data[last] = data[parseInt((last - 1) / 2)];
      last = parseInt((last - 1) / 2);
    }
    data[last] = temp;
  }

  size() {
    return this.data.length;
  }

  createHeap() {
    const length = this.size();
    const top = length >= 2 ? parseInt((length - 2) / 2) : 0;
    for(let i = top; i > -1; i--) {
      this._adjustDown(i, length);
    }
    return this.data;
  }

  shift() {
    if(this.size() <= 1) return this.data.shift();
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

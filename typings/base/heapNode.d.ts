interface Value {
    value: string | number;
}
declare class HeapNode {
    value: string | number;
    payLoad?: any;
    constructor(ele: Value | any, payLoad?: any);
}
export { HeapNode };

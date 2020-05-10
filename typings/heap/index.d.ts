/// <reference path="HeapAbout.d.ts" />
declare type Data = {
    value: number;
};
interface Props {
    data: Array<Data> | Array<number>;
    type: string;
}
export declare class Heap {
    data: any[];
    type: string;
    constructor(config: Props);
    _adjustDown(start: any, length: any): void;
    _adjustUp(last: any): void;
    size(): number;
    getProxyData(data: any): any;
    createHeap(): any[];
    shift(): any;
    append(element: any): any[];
}
export {};

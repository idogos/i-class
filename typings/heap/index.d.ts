import { HeapNode } from "../base/heapNode";
interface Props {
    data: Array<HeapNode> | Array<number>;
    type: string;
}
export declare class Heap {
    data: any[];
    type: string;
    isObjectElement: boolean;
    constructor(config: Props);
    _adjustDown(start: any, length: any): void;
    _adjustUp(last: any): void;
    size(): number;
    export(): any[];
    transformHeapNode(data: any): any;
    createHeap(): any[];
    shift(): any;
    append(element: any): any[];
}
export {};

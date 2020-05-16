interface Value {
    value: string | number | null | undefined;
}
declare class TreeNode {
    value: string | number | null | undefined;
    left: TreeNode;
    right: TreeNode;
    payLoad?: any;
    constructor(ele: Value | any, left?: any, right?: any, payLoad?: any);
}
export { TreeNode };

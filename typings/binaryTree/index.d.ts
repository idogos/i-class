import { Tree } from "../base/tree";
import { TreeNode } from "../base/treeNode";
export declare class BinaryTree extends Tree {
    depth: number;
    deepestNodeSum: number;
    nodes: Array<Array<TreeNode>>;
    constructor();
    insert(ele: any): void;
    /**
     * 获取每一层的节点
     * @returns {Array}
     */
    nodesOfLevels(): TreeNode[][];
    /**
     * 获取最底层节点的和
     * @returns {number}
     */
    deepestLeavesSum(): number;
    /**
     * 返回二叉树层级
     * @returns {number}
     */
    deepestLeaves(): number;
    /**
     * 构建一般二叉树
     * @param {Array} list
     * @returns {null}
     */
    constructTree(list: any): TreeNode;
    /**
     * 构建最大二叉树
     * @param {Array} list
     * @returns {null}
     */
    constructMaxTree(list: any): TreeNode;
}

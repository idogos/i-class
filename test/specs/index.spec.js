import chai from "chai";
import { TreeNode } from "../../dist/i-class.umd";
const expect = chai.expect;

describe('test1', function() {
  it('3', function() {
    const treeNode = new TreeNode();
    expect(treeNode.left).to.equal(null);
  });
});

/**
 * 递归
 * 因为是升序数组，而中序遍历也是升序的
 * 所以可以去数组的中位元素当作根节点左右两侧再分别递归取两侧的中间元素当根节点
 */
var sortedArrayToBST = function(nums) {
  return dps(nums, 0, nums.length-1);
  // 递归的函数
  function dps(numArr, low, hig){
    if(low > hig){
      return null;
    }
    // 取到该次函数执行范围的中间节点
    var mid = Math.floor(low + (hig - low)/ 2);
    // 以该节点生成根节点
    var root = new TreeNode(numArr[mid]);
    // 左右两边的范围再分别递归
    root.left = dps(numArr, low, mid-1);
    root.right = dps(numArr, mid+1, hig);
    return root;
  }
};

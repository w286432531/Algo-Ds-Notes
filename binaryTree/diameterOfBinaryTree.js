var diameter;
var diameterOfBinaryTree = function (root) {
  diameter = 0;
  longestPath(root);
  return diameter;
};
function longestPath(node) {
  if (!node) return 0;
  let leftPath = longestPath(node.left);
  let rightPath = longestPath(node.right);
  diameter = Math.max(diameter, leftPath + rightPath);
  return Math.max(leftPath, rightPath) + 1;
}

//hashMap solution
var cloneGraph = function (node) {
  if (!node) return node;
  let map = new Map();
  traverse(node, map);
  map.forEach((value, key) => {
    for (let neighbor of key.neighbors) {
      value.neighbors.push(map.get(neighbor));
    }
  });
  return map.get(node);
};
function traverse(node, map) {
  let tmpNode = new Node(node.val, []);
  map.set(node, tmpNode);
  for (let key in node.neighbors) {
    if (!map.has(node.neighbors[key])) {
      traverse(node.neighbors[key], map);
    }
  }
}

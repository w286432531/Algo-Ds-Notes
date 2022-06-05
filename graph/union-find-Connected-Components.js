var countComponents = function (n, edges) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }
  for (let i = 0; i < edges.length; i++) {
    let root1 = findParent(arr, edges[i][0]);
    let root2 = findParent(arr, edges[i][1]);
    if (root1 != root2) {
      arr[root1] = arr[root2];
      n--;
    }
  }
  return n;
};

function findParent(arr, num) {
  let parent = arr[num];
  while (parent != num) {
    num = parent;
    parent = arr[parent];
    arr[num] = parent;
  }
  return parent;
}

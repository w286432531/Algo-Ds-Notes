//dfs
var maxAreaOfIsland = function (grid) {
  let maxArea = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        let area = 0;
        area = dfs(i, j, grid, area);
        maxArea = Math.max(maxArea, area);
      }
    }
  }
  return maxArea;
};
function dfs(i, j, grid, area) {
  if (
    i < 0 ||
    j < 0 ||
    i == grid.length ||
    j == grid[i].length ||
    grid[i][j] === 0
  )
    return area;
  area += 1;
  grid[i][j] = 0;
  area = dfs(i - 1, j, grid, area);
  area = dfs(i + 1, j, grid, area);
  area = dfs(i, j - 1, grid, area);
  area = dfs(i, j + 1, grid, area);
  return area;
}

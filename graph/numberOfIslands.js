//dfs solution
var numIslands = function(grid) {
    let sum = 0;
    for (let i = 0; i < grid.length; i++) 
    {
        for (let j = 0; j < grid[i].length; j++) 
        {
            if (grid[i][j] === '1') 
            {
                dfs(i,j,grid);
                sum++;
            }
        }
    } 
    return sum;
};
function dfs(i,j,grid) {
    if (i < 0 || j < 0 || i == grid.length || j == grid[0].length || grid[i][j] != '1') return;
    grid[i][j] = '0';
    dfs(i-1, j, grid);
    dfs(i+1, j, grid);
    dfs(i, j-1, grid);
    dfs(i, j+1, grid);
}
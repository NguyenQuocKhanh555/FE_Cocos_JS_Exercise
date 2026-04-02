function FindPaths(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const result = [];

    function DFS(r, c, path, visited) {
        if (
            r < 0 || r >= rows ||
            c < 0 || c >= cols ||
            grid[r][c] === 1 ||
            visited[r][c]
        ) return;

        visited[r][c] = true;
        path.push(r);

        if (c === cols - 1) {
            result.push([...path]);
        }
        else {
            DFS(r, c + 1, path, visited);
            DFS(r - 1, c, path, visited);
            DFS(r + 1, c, path, visited);
        }

        path.pop();
        visited[r][c] = false;
    }

    for (let r = 0; r < rows; r++) {
        if (grid[r][0] === 0) {
            const visited = Array.from({length: rows}, () => Array(cols).fill(false));
            DFS(r, 0, [], visited);
        }
    }

    return result;
}

const grid = [
 [0,1,0],
 [0,0,0],
 [1,1,1],
 [0,0,0],
 [0,1,1]
];

console.log(FindPaths(grid));
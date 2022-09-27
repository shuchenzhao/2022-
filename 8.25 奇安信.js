/*function DagPathNum(nodes) {
    const stk = [],
        ans = [];

    function dfs(nodes, i, n) {
        if (i === n) {
            ans.push(stk.slice());
            return;
        }
        for (const x of nodes[i]) {
            stk.push(x);
            dfs(nodes, x, n);
            stk.pop();
        }
    }

    stk.push(0);
    dfs(nodes, 0, nodes.length - 1);
    console.log(ans);
    return ans.length;
}

DagPathNum([[1, 2, 3], [3], [3], [4], []]);*/

function solution(arr) {
    const n = arr.length;
    let max = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let w = Math.abs(j - i);
            let h = Math.min(arr[j], arr[i]);
            max = Math.max(max, w * h);
        }
    }
    return max;
}

const arr = [4, 1, 2, 7];
console.log(solution(arr)); //12

/* const n = 3,
    m = 3,
    k = 10;
const arr = [1, 2, 3];

function solution(arr, m, k) {
    const n = arr.length;
    let a = Math.trunc(k / n),
        b = k % n;
    console.log(a, b);
    if (a % 2 === 1 && b) {
        arr = arr.reverse();
    }
    console.log(arr);
    return arr[b - 1];
}

console.log(solution(arr, m, k));
 */

let arr = ["-6", "0", "2", "-2", "3"];
arr = arr.map(Number);
//console.log(arr);
function solution(arr) {
    arr.sort((a, b) => a - b);
    let ans1 = 0,
        ans2 = 0;
    let min1 = Infinity,
        min7 = Infinity;
    let index1 = 0,
        index7 = 0;
    for (let i = 0; i < arr.length; i++) {
        let abs1 = Math.abs(arr[i] - 1),
            abs7 = Math.abs(arr[i] - 7);
        if (abs1 < min1) {
            min1 = abs1;
            index1 = i;
        }
        if (abs7 < min7) {
            min7 = abs7;
            index7 = i;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (i !== index1 && i !== index7) {
            ans1 += Math.abs(arr[i] - 1);
        }
    }
    ans1 += min1 + min7;
    console.log(ans1);
    let min_1 = Infinity,
        min_7 = Infinity;
    let index_1 = 0,
        index_7 = 0;
    for (let i = 0; i < arr.length; i++) {
        let abs_1 = Math.abs(arr[i] + 1),
            abs_7 = Math.abs(arr[i] + 7);
        if (abs_1 < min_1) {
            min_1 = abs_1;
            index_1 = i;
        }
        if (abs_7 < min_7) {
            min_7 = abs_7;
            index_7 = i;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (i !== index_1 && i !== index_7) {
            ans2 += Math.abs(arr[i] - 1);
        }
    }
    ans2 += min_1 + min_7;
    console.log(ans2);

    let ans = Math.min(ans1, ans2);

    return ans;
}

console.log(solution(arr));

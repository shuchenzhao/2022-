/* let q = 4;
const arr = ["13", "123", "24", "2001"];

function solution(arr) {
    let ans = [];
    while (q--) {
        let num = arr.shift().split("");
        if (num % 2 === 0) {
            ans.push(num);
            break;
        }
        let flag = false;
        for (let i = 0; i < num.length; i++) {
            if (num[i] % 2 === 0) {
                flag = true;
                let t = num[i];
                num.splice(i, 1);
                num = num.join("");
                num += t;
                break;
            }
        }
        while (num[0] === "0") {
            num = num.slice(1, num.length);
            num += "0";
        }
        ans.push(flag ? num : -1);
    }
    return ans;
}

console.log(solution(arr));
 */

/* let q = 3;
const str = ["1 1 1", "2 3 2", "1 5 2"];
while (q--) {
    let line = str.shift().split(" ");
    let y = Number(line[0]),
        o = Number(line[1]),
        u = Number(line[2]);
    let count = 0;
    while (y > 0 && o > 0 && u > 0) {
        count += 2;
        y--, o--, u--;
    }
    if (o >= 2) {
        count += o - 1;
    }
    console.log(count);
} */

const arr = [-1, 1, 2, 5, 7];

function solution(arr) {
    const n = arr.length;
    const dif = [];
    let max = 0;
    for (let i = 1; i < n; i++) {
        dif.push(arr[i] - arr[i - 1]);
        max = Math.max(max, arr[i] - arr[i - 1]);
    }
    //找出次大增量
    let t = Array.from(dif).sort((a, b) => b - a);
    while (t[0] === max) {
        t.pop();
    }
    let second = t.pop();
    let ans = 0;

    for (let i = 0; i < n; i++) {}
    return ans;
}

console.log(solution(arr));

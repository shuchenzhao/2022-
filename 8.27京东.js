/* const n = 5,
    k = 3;
const str = "aBcBa".split("");

for (let i = 0; i < k; i++) {
    str[i] = str[i].toUpperCase();
}
for (let i = k; i < n; i++) {
    str[i] = str[i].toLowerCase();
}

console.log(str.join(""));
 */

/* const n = 3;
const odd = [],
    even = [];
for (let i = 1; i <= n * n; i++) {
    if (i % 2 === 0) {
        even.push(i);
    } else {
        odd.push(i);
    }
}
const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
for (let i = 0; i < n; i++) {
    //设m[0][0]为奇
    for (let j = 0; j < n; j++) {
        if (i % 2) {
            //奇数行从偶数开始
            if (j % 2 === 0) {
                matrix[i][j] = even.pop();
            } else {
                matrix[i][j] = odd.pop();
            }
        } else {
            if (j % 2) {
                matrix[i][j] = even.pop();
            } else {
                matrix[i][j] = odd.pop();
            }
        }
    }
}

for (let i = 0; i < n; i++) {
    let line = new Array(n).fill(0);
    for (let j = 0; j < n; j++) {
        line[j] = matrix[i][j];
    }
    line = line.join(" ");
    console.log(line);
} */

/* const n = 6,
    arr = [1, 1, 4, 5, 1, 4];

//思路：分别统计奇数位和偶数位上出现最多元素，且二者不能相同
function greatWall(arr, n) {
    if (n <= 2) {
        return 0;
    }

    const odd = new Map(),
        even = new Map();
    for (let i = 0; i < n; i++) {
        if (i % 2) {
            odd.set(arr[i], (odd.get(arr[i]) || 0) + 1);
        } else {
            even.set(arr[i], (even.get(arr[i]) || 0) + 1);
        }
    }
    let maxOdd = findMax(odd),
        maxEven = findMax(even);
    if (maxOdd === maxEven) {
        if (odd.get(maxOdd) > even.get(maxEven)) {
            maxEven = findSecondMax(even);
        } else if (odd.get(maxOdd) < even.get(maxEven)) {
            maxOdd = findSecondMax(odd);
        }
    }
    let res = 0;
    for (let i = 0; i < n; i++) {
        if (i % 2) {
            if (arr[i] !== maxOdd) {
                res++;
            }
        } else {
            if (arr[i] !== maxEven) {
                res++;
            }
        }
    }
    return res;
}

function findMax(map) {
    let maxCount = 0,
        maxNum = 0;
    for (const [key, value] of map.entries()) {
        if (value > maxCount) {
            maxCount = value;
            maxNum = key;
        }
    }
    return maxNum;
}

function findSecondMax(map, maxNum) {
    let secondMaxCount = 0,
        secondMaxNum = 0;
    for (const [key, value] of map.entries()) {
        if (value > secondMaxCount && key !== maxNum) {
            secondMaxCount = value;
            secondMaxNum = key;
        }
    }
    return secondMaxNum;
}

console.log(greatWall(arr, n)); */

const func = () => {
    return new Promise((res, rej) => {
        console.log(117);
        res(935);
    });
};
console.log(0);
func().then(res => {
    console.log(res);
});
console.log(10); //0 117 10 935

let res = ["1", "2", "100"].map(parseInt);
console.info(res); //[ 1, NaN, 4 ]

let obj = {
    num: 5,
    func: function () {
        console.log("this:", this); //obj
        let that = this;
        that.num *= 2;
        (function () {
            console.log("this:", this); //window
            this.num *= 3;
            that.num *= 4;
            return function () {
                this.num *= 5;
                that.num *= 6;
            };
        })();
    },
};
var num = 2;
obj.func();
console.log(num); //2
console.log(obj.num); //40

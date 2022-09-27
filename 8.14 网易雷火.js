/*function getLongestPalindrome(str) {
    const n = str.length;
    if (n <= 1) {
        return str;
    }
    str = Array.from(str);
    let res = new String();
    let max = 1;
    for (let i = 1; i < n - 1; i++) {
        console.log("-----i:", i);
        let l = i - 1,
            r = i + 1;
        let len = 1;
        while (l >= 0 && r <= n - 1) {
            console.log("l:", l, "r:", r);
            if (str[l] === str[r]) {
                len += 2;
                l--, r++;
                continue;
            } else {
                break;
            }
        }
        console.log("len:", len);
        if (len > max) {
            max = len;
            res = str.slice(l + 1, r);
            console.log(res);
        }
    }
    res = String(res).split(",").join("");
    return res;
}

const s1 = "",
    s2 = "a",
    s3 = "bcbeaebd",
    s4 = "abcdefedcba",
    s5 = "bcbcbeaebdb";
console.log(getLongestPalindrome(s1));
console.log(getLongestPalindrome(s2));
console.log(getLongestPalindrome(s3));
console.log(getLongestPalindrome(s4));
console.log(getLongestPalindrome(s5));*/

/*const Post = [];
function getPostOrderOfTree(preStr, midStr) {
    if (!preStr.length || !midStr.length) {
        return;
    }
    const root = preStr[0];
    Post.unshift(root);
    (midStr = Array.from(midStr)), (preStr = Array.from(preStr));
    let rightPre = preStr.slice(midStr.indexOf(root) + 1, preStr.length);
    let rightMid = midStr.slice(midStr.indexOf(root) + 1, midStr.length);
    //console.log("rightPre", rightPre, "rightMid:", rightMid);
    getPostOrderOfTree(rightPre, rightMid);
    let leftPre = preStr.slice(1, midStr.indexOf(root) + 1);
    let leftMid = midStr.slice(0, midStr.indexOf(root));
    //console.log("leftPre:", leftPre, "leftMid:", leftMid);
    getPostOrderOfTree(leftPre, leftMid);
    return Post.toString().split(",").join("");
}

const preStr = "ACDEFHGB",
    midStr = "DECAHFBG";
console.log(getPostOrderOfTree(preStr, midStr)); //"EDCHBGFA"*/

function test() {
    this.flag = false;
    this.change = () => {
        this.flag = true;
        console.log(button.flag);
    };
}
const button = new test();
document.addEventListener("click", button.change); //true

let [a, b, c, d, e] = "hello"; //['h', 'e', 'l', 'l', 'o']

typeof NaN; //Number

//数组的forEach无返回值，map方法有返回值。

(async () => {
    console.log(1);
    setTimeout(() => {
        console.log(2);
    });
    await new Promise((resolve, reject) => {
        console.log(3);
        resolve();
    }).then(() => console.log(4));
    console.log(5);
})(); //1 3 4 5 2

const obj = {
    foo: "foo1",
    bar1: function () {
        console.log(this, this.foo);
    },
    bar2: function () {
        var arrowDoSth = () => {
            console.log(this, this.foo);
        };
        arrowDoSth();
    },
    bar3: () => {
        console.log(this, this.foo);
    },
};
obj.bar1(); //obj foo1
obj.bar2(); //obj foo1
obj.bar3(); //window undefined
let foo = "foo2";
obj.bar3(); //window undefined

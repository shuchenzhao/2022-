/*function occurrences(str, c) {
    const arr = Array.from(str);
    console.log(arr);
    let res = 0;
    for (let a of arr) {
        if (a.charCodeAt() === c.charCodeAt()) {
            res++;
        }
    }
    return res;
}

const str = "ab c daa A aa";
const c = "a";
console.log(occurrences(str, c));*/

/*function minCoveringSubStr(s, t) {
    let minLen = s.length + 1;
    let start = s.length;
    let map = {};
    let missingType = 0;
    for (const c of t) {
        if (!map[c]) {
            missingType++;
            map[c] = 1;
        } else {
            map[c]++;
        }
    }
    //双指针滑动窗
    let l = 0,
        r = 0;
    for (; r < s.length; r++) {
        let rightChar = s[r];
        if (map[rightChar] !== undefined) {
            //是目标字符
            map[rightChar]--;
        }
        if (map[rightChar] === 0) {
            missingType--;
        }
        while (missingType === 0) {
            if (r - l + 1 < minLen) {
                minLen = r - l + 1;
                start = l;
            }
            let leftChar = s[l];
            if (map[leftChar] !== undefined) {
                map[leftChar]++;
            }
            if (map[leftChar] > 0) {
                missingType++;
            }
            l++;
        }
    }
    return start === s.length ? "" : s.substring(start, start + minLen);
}
const source = "JHKGYBJKDUIHHG",
    target = "BDU";
console.log(minCoveringSubStr(source, target)); //"BJKDU"*/

function validMountainArray(arr) {
    const len = arr.length;
    let i = 0;
    while (i + 1 < len && arr[i] < arr[i + 1]) {
        i++;
    }
    if (i === 0 || i === len - 1) {
        return false;
    }
    while (i + 1 < n && arr[i] > arr[i + 1]) {
        i++;
    }

    return i === n - 1;
}

console.log(!![], ![], [], !!"", !"", ""); //true false [] false true
Boolean(""); //false;
Boolean([]); //true;
Boolean({}); //true;

const arr = [1, 2, 3];
console.log(Math.max.call(Math, arr[0], arr[1], arr[2])); //ok
console.log(Math.max.apply(Math, arr)); //ok

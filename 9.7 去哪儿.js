/* const line = "http://www.qunar.com?a=aa&b=bb";

var input_arrays = line.split("?");
let query = input_arrays[1];
let arr = query.split("&");
const obj = new Object();
for (let a of arr) {
    let o = a.split("=");
    obj[o[0]] = o[1];
}
console.log(obj);
console.log(JSON.stringify(obj)); */

/* function makeChagne(change) {
    const map = new Map();
    map.set(100, 0);
    map.set(50, 0);
    map.set(20, 0);
    map.set(5, 0);
    map.set(1, 0);

    while (change > 0) {
        if (change - 100 >= 0) {
            change -= 100;
            map.set(100, map.get(100) + 1);
        } else if (change - 50 >= 0) {
            change -= 50;
            map.set(50, map.get(50) + 1);
        } else if (change - 20 >= 0) {
            change -= 20;
            map.set(20, map.get(20) + 1);
        } else if (change - 5 >= 0) {
            change -= 5;
            map.set(5, map.get(5) + 1);
        } else if (change - 1 >= 0) {
            change -= 1;
            map.set(1, map.get(1) + 1);
        } else {
            break;
        }
    }
    return map.values();
}
console.log(makeChagne(126));
console.log(makeChagne(99));
console.log(makeChagne(50));
console.log(makeChagne(100)); */

var a = 1;
setTimeout(function () {
    console.log("1", a++);
}, 0);
new Promise(function executor(resolve) {
    console.log("2", a++);
    for (var i = 0; i < 1000; i++) {
        resolve(a++);
    }
    console.log("3", a++);
}).then(function (a) {
    console.log("4", a++);
});
console.log("5", a++);
/* 
2 1
3 1002
5 1003
4 2
1 1004 
*/

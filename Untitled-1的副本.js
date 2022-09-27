function demo() {
    console.log(a);
    var a = 1;
    var a = function () {
        console.log(111);
    };
    function a() {
        console.log(222);
    }
}
demo(); //ƒ a() { console.log(222); }

const obj = {
    a: 1,
};
obj["c"] = 2;
obj[7] = 5;
obj["b"] = 4;
obj[012] = 5;
for (let k in obj) {
    console.log(obj[k]);
} //5 5 1 2 4

let str = "000500";
let res = +str.substr(2.2);
console.log(res);
getRes(res);
str = "O";
getRes(res);
console.log(res);
function getRes(res) {
    res = (str && (str = +str)) || "ok";
    console.log(res);
} //500 500 ok 500

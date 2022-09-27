var { foo: F, bar: B = "123" } = { foo: "aaa", bar: "bbb" };
console.log(F); //aaa
console.log(B); ///bbb
console.log(foo); //ReferenceError: foo is not defined

var boss = "Bob";
function otherDepart(boss) {
    if (typeof boss === "undefined") {
        console.log(teacher);
        let teacher = "Bill";
    } else {
        console.log(teacher);
    }
}
otherDepart(); //ReferenceError: Cannot access 'teacher' before initialization

async function async1() {
    console.log("1");
    await async2();
    console.log("2");
}
async function async2() {
    console.log("3");
}
console.log("4");
setTimeout(function () {
    console.log("5");
}, 0);
async1();
new Promise(function (resolve) {
    console.log("6");
    resolve();
}).then(function () {
    console.log("7");
}); //4136275 correct

function sayHi() {
    console.log(str); //undefined
    console.log(age); //ReferenceError: Cannot access 'age' before initialization
    var str = "hello pwrd";
    let age = 21;
}
sayHi();

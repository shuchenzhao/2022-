function cb(msg) {
    return function () {
        console.log(msg);
    };
}
setTimeout(cb("setTimeout"), 1000);
setImmediate(cb("setImmediate"));
process.nextTick(cb("process.nextTick"));
cb("Main process")();
// Main process
// process.nextTick
// setImmediate
// setTimeout

const getCache = (function () {
    let a = 0;
    return function () {
        return a++;
    };
})();
getCache();
getCache();
console.log(getCache()); //2

var b = 9;
var a = function* () {
    b = yield 10;
    return 11;
};
var f = a();
console.log(f.next().value, b, f.next().value, b); //10 9 11 undefined

try {
    Promise.reject(1)
        .catch(res => console.log(res))
        .finally(() => console.log(3));
    console.log(2);
} catch (error) {
    console.log(4);
} //2 1 3

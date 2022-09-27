Promise.resolve()
    .then(() => {
        throw new Error("err");
    })
    .then(data => {
        console.log(("then:", data));
    })
    .catch(err => {
        console.log("catch:", err);
    });
//catch: Error: err at /Users/zhaoshuchen/Desktop/Untitled-1.js:3:15

let p1 = new Promise((resolve, reject) => {
    resolve();
});
let p2 = [];
Promise.all([p1, p2])
    .then(val => {
        console.log(val);
    })
    .catch(err => {
        console.log(err);
    });
//[ undefined, [] ]

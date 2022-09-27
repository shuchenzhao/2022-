const stamp = 1660653659557;
const reg = "yyyy年MM月dd日 - HH: mm: ss";

let time = new Date(stamp).toLocaleString();
console.log(time);

let year = time.slice(11, 15),
    month = time.slice),
    day = time.slice(0,2);
let hour = time.slice(16, 18),
    minute = time.slice(19, 21),
    second = time.slice(22, 24);
console.log(year, month, day, hour, minute, second);

/* switch (month) {
    case Jan: month = 1;
    case Feb: month = 2;
    
} */

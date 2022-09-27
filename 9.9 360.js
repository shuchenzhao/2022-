const n = 3;
const arr = [1, 2, 3];

function solution(arr) {
    let sum = 0;
    for (const a of arr) {
        sum += a;
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr[i], arr[j], arr[i] | arr[j]);
            sum += arr[i] | arr[j];
        }
    }
    return sum;
}

console.log(solution(arr));
console.log(2 | 4);

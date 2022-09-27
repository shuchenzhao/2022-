const arr = [2, 3, 4, 5, 10];
const k = 2;

function solution(arr, k) {
    let sum = 0;
    for (let a of arr) {
        sum += a;
    }
    let n = arr.length;
    let max = (sum / n) * k;
    let heavy = arr[n - 1];
    while (heavy > max) {
        n--;
        let m1 = ((sum - arr[0]) / n) * k;
        let m2 = ((sum - heavy) / n) * k;

        if (m1 > m2) {
            //拿掉最轻的
            sum -= arr.shift();
        } else {
            //拿掉最重的
            sum -= arr.pop();
        }
        max = (sum / n) * k;
        heavy = arr[n - 1];
    }

    return arr.length;
}

console.log(solution(arr, k));

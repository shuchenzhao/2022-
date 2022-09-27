function minimumOperations(s) {
    const n = s.length;
    let ans1 = 0; //中间S全变L
    let i = 0,
        j = n - 1;
    while (s[i] === "S") {
        i++;
    }
    while (s[j] === "S") {
        j--;
    }
    for (let x = i; x <= j; x++) {
        if (s[x] === "S") {
            ans1++;
        }
    }
    return ans1;
    //return Math.min(ans1, ans2, ans3, ans4);
}
const s = "SSLSSLLLSSLS";
console.log(minimumOperations(s));

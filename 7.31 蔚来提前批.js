//["2.1.4.5", "3.1.5", "3.1.20.6", "2.20", "1.9.9"];
//"3.1.20.6";
/**
 * @param versions string字符串一维数组
 * @return string字符串
 */
/*function getLatestVersion(versions) {
    const n = versions.length;
    const arr = [];
    for (let version of versions) {
        arr.push(version.split("."));
    }
    let maxLen = 0;
    for (let i = 0; i < n; i++) {
        maxLen = Math.max(maxLen, arr[i].length);
    }
    for (let i = 0; i < n; i++) {
        while (arr[i].length < maxLen) {
            arr[i].push("00");
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < maxLen; j++) {
            if (arr[i][j].length === 1) {
                arr[i][j] = "0" + arr[i][j];
            }
        }
    }
    for (let i = 0; i < n; i++) {
        arr[i] = Number(arr[i].join(""));
    }
    let maxIndex = 0,
        maxVersion = arr[0];
    for (let i = 1; i < n; i++) {
        if (arr[i] > maxVersion) {
            (maxIndex = i), (maxVersion = arr[i]);
        }
    }

    return versions[maxIndex];
}
const versions = ["2.1.4.5", "3.1.5", "3.1.20.6", "2.20", "1.9.9"];
console.log(getLatestVersion(versions));
 */

/*function func(arg = 10) {
    console.log(this.p);
    console.log(arg);
}
func.p = 20;
const wrapper = func.bind({
    p: 30,
});
wrapper();*/ // 30，10 没毛病

/*var func = function test() {
    console.log(123);
};
console.log(typeof test, typeof test());*/ //报错，报错

/* function getSheep(year) {
    const arr = [1];
    while (year--) {
        for (let i = 0; i < arr.length; i++) {
            arr[i]++;
        }
        for (let a of arr) {
            if (a === 2 || a === 4) {
                arr.push(1);
            }
        }
        console.log("year:", year, "arr:", arr);
    }
    let ans = 0;
    for (let a of arr) {
        if (a < 5) {
            ans++;
        }
    }
    return ans;
}

console.log(getSheep(1));
console.log(getSheep(2));
console.log(getSheep(10)); */
var dataInfo = [
    {
        id: "100",
        name: "shanghai",
        child: [
            {
                id: "101",
                name: "pudong",
                child: [],
            },
            {
                id: "102",
                name: "puxi",
                child: [],
            },
        ],
    },
    {
        id: "200",
        name: "hangzhou",
        child: [
            {
                id: "201",
                name: "xihu",
                child: [
                    {
                        id: "221",
                        name: "huanglongshidai",
                        child: [],
                    },
                    {
                        id: "202",
                        name: "yuhang",
                        child: [],
                    },
                ],
            },
        ],
    },
];

function find(code) {
    function dfs(dataInfo, code) {
        for (let i = 0; i < dataInfo.length; i++) {
            let item = dataInfo[i];
            //console.log(item);
            if (item.id === code) {
                return item.name;
            }
            if (item.child) {
                let node = dfs(item.child, code);
                if (node !== undefined) {
                    return node.concat(item.name);
                }
            }
        }
    }
    let ans = "";
    //dataInfo = JSON.stringify(dataInfo);
    return dfs(dataInfo, code);
}
find("100");
find("202");

//console.log(JSON.stringify(dataInfo));
// console.log(dataInfo[0]);

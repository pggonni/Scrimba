let picture = [
    "abc",
    "ded"
];

let pic2 = [
    "abcde",
    "fghij",
    "klmno"
]

const addBorder = (arr) => {
    for (const line of arr) {
        arr.splice(arr.indexOf(line), 1, `*${line}*`)
    };
    let cap = "";
    for (let i = 0; i < arr[0].length; i++) {
        cap = `${cap}*`;
    }
    arr.unshift(cap);
    arr.push(cap);
};

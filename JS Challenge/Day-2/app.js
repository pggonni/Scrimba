const addTwoDigits = (n) => {
    const inputArray = n.toString().split('');
    const toNum = (nums) => {
        let arr = [];
        for (num of nums) {
            arr.push(parseInt(num, 10));
        };
        return arr;
    };
    const nums = toNum(inputArray);
    const addNums = nums.reduce((accumulator, currVal) => {
        return accumulator + currVal;
    }, 0);
    return addNums;
}

/* Answer:
function addTwoDigits(num) {
    const nums = num.toString().split('');

    return nums.reduce((total, value) => {
        return parseInt(total) + parseInt(value);
    }, 0);
};
*/
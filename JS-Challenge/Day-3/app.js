function firstDuplicate(nums) {
    let obj = {};
    for (let num of nums) {
        if (obj.hasOwnProperty(num)) {
            return num;
        };
        obj[num] = num;
    };
    return -1;
};

firstDuplicate([2, 1, 3, 5, 3, 2]);
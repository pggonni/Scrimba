function sumAllPrimes(num) {
  // Define empty array
  let arr = [];
  // for loop while i<=num
  for (let i = 1; i <= num; i++) {
    // add i to array
    arr.push(i);
  };
  console.log(arr);
};

const challenge = sumAllPrimes(10);
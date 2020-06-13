// function sumAllPrimes(num) {
//   //Define empty array
//   let arr = [];
//   //for loop while i<=num
//   for (let i = 1; i <= num; i++) {
//     //add i to array
//     arr.push(i);
//   };
//   console.log(arr);
//   //Define empty array to hold prime numbers
//   let primes = [];
//   //for of loop over array
//   for (let n of arr) {
//     for (let i = 2; i < n; i++) {
//       if (n % i != 0) {
//         primes.push(n);
//         break;
//       } else {
//         break;
//       };
//     };
//   };
//   console.log(primes);
//   let result = primes.reduce((accumulator, currVal) => {
//     return accumulator + currVal
//   }, 0);
//   console.log(result);
// };

//*********************************************************************
// SOLUTION         
//*********************************************************************

function sumAllPrimes(num) {
  let primesTotal = 0;

  for (let i = 2; i < num; i++) {
    for (let j = 2; j <= i; j++) {
      if (i === j) {
        primesTotal += i;
      };

      if (i % j === 0) {
        break;
      };
    };
  };
  return primesTotal;
};
function evenDigitsOnly(num) {
  const splitNums = num.toString().split('');
  let parsedNums = [];
  for (const n of splitNums) {
    parsedNums.push(parseInt(n, 0));
  }
  return parsedNums.every((n) => n % 2 === 0);
}

evenDigitsOnly(248622);
function processOdd(params) {
  let finalArr = [];

  for (let i = 0; i < params.length; i++) {
    if (i % 2 !== 0) {
      finalArr.push(params[i] * 2);
    }
  }

  return finalArr.reverse().join(" ");
}

processOdd([10, 15, 20, 25]);

function bigHalf(params) {
  let newArr = params.sort((a, b) => a - b);

  if (newArr.length % 2 === 0) {
    newArr = newArr.slice(newArr.length / 2);
  } else {
    newArr = newArr.slice(Math.ceil(newArr.length / 2) - 1);
  }

  return newArr;
}

bigHalf([3, 19, 14, 7, 2, 19, 6]);

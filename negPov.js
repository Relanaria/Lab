function negPov(params) {
  let newArr = [];

  for (const currrentEl of params) {
    if (currrentEl < 0) {
      newArr.unshift(currrentEl);
    } else {
      newArr.push(currrentEl);
    }
  }

  newArr.forEach((x) => console.log(x));
}

negPov([3, -2, 0, -1]);

function smallestTwo(params) {
  let newArr = params.sort((a, b) => a - b);

  console.log(`${newArr[0]} ${newArr[1]}`);
}

smallestTwo([30, 15, 50, 5]);

function diagSum(array) {
  let topLeft = 0;
  let topRight = 0;

  for (let i = 0; i < array.length; i++) {
    topLeft += Number(array[i][i]);
  }

  
  for (let i = 0; i < array.length; i++) {
    topRight += Number(array[i][array.length - 1 - i]);
  }
 

  console.log(`${topLeft} ${topRight}`);
}

diagSum([
  [20, 40],

  [10, 60],
]);

diagSum([
  [3, 5, 17],

  [-1, 7, 14],

  [1, -8, 89],
]);

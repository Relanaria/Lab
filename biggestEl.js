function biggestEl(arr) {
  let biggest = Number.NEGATIVE_INFINITY;



    arr.forEach(element => {
        element.forEach(cur => {
            if(cur > biggest){
                biggest = cur;
            }
        });
    });

  console.log(biggest);
}

biggestEl([
  [3, 5, 7, 12],

  [-1, 4, 33, 2],

  [8, 3, 0, 4,],
]);

biggestEl([[-1, -2 , -3],
[-1 ,-5 ,-4]])
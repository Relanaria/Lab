function pie(arr, start, end) {
  let startIndex = arr.indexOf(start);
  let endIndex = arr.indexOf(end);

  let newArr = arr.slice(startIndex, endIndex + 1);

  return newArr;
}

pie(
  [
    "Pumpkin Pie",

    "Key Lime Pie",

    "Cherry Pie",

    "Lemon Meringue Pie",

    "Sugar Cream Pie",
  ],

  "Key Lime Pie",

  "Lemon Meringue Pie"
);

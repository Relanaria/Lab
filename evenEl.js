function evenEl(params) {
  let str = "";
  for (let i = 0; i < params.length; i += 2) {
    str += params[i];

    str += " ";
  }

  console.log(str);
}

evenEl(["20", "30", "40", "50", "60"]);

function fancyArray(symb, reversed) {
  var arr = ["James", "Jill", "Jane", "Jack"];

  for (var i = 0; i < arr.length; i++) {
    if (reversed === true){
      break;
    }
    if (symb !== undefined) {
      console.log(i + " " + symb + " " + arr[i]);
    } else {
      console.log(i + " -> " + arr[i]);
    }
  }

  if (reversed === true) {
    for (var i = arr.length - 1; i >= 0; i--){
      console.log(i + " -> " + arr[i]);
    }
  }
}

console.log(fancyArray(">>", false));
console.log(fancyArray(undefined, true));

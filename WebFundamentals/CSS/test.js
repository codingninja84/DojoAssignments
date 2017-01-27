var arr = [1, 2, 3, 4, 5];

function functionName(arr) {
  var count = 0;
  for (var i = arr.length - 1; i >= count; i--) {
    var temp = arr[count];
      arr[count] = arr[i];
      arr[i] = temp;
      count++;
  }
  return arr;
}


console.log(functionName(arr));

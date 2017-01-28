function printRange(start, end, skip) {

  if (skip === undefined){
    var skip = 1;
  }

  if (end === undefined) {
    var end = start;
    var start = 0;
  }

  for (var i = start; i < end; i += skip){
    console.log(i);
  }
}

console.log(printRange(2, 20, 3)); //Skips by 3
console.log(printRange(2, 20));  //defaults to iterating by 1
console.log(printRange(-7, 20, 2)); //works for negative numbers
console.log(printRange(20, undefined, 2)); //defaults to start at 0 and use the first argument as the end

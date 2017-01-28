var idx = 4;

function fib(idx){
for (var i = idx - 1; i >0; i--) {
  idx *= i;
}
console.log(idx);
}

console.log(fib(idx));

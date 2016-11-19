var MultFunc = function(arg1) {
  return function(arg2) {
    var res = arg1 * arg2;
    console.log(res);
  };
};

var cache = {1:1, 2:2};
function fib(n) {
    if(!cache[n])
    {
       cache[n] = fib(n - 1) + fib(n - 2);
       var res = cache[n];
    console.log(res);
  }
    return cache[n];
}

function memfactorial(n) {
    if (!memfactorial.cache) {
        memfactorial.cache = {
            "0": 1,
                "1": 1
        };
    }
    if (!memfactorial.cache.hasOwnProperty(n)) {
        memfactorial.cache[n] = n * memfactorial(n - 1);
    }
    return  memfactorial.cache[n];
}

var multFunc2 = MultFunc(5)(2);
var result = memfactorial(5);
console.log(result);
fib(10);

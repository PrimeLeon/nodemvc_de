var value = 1;

var foo = {
  value: 2,
  bar: function () {
    return this.value;
  }
}

//1
console.log(foo.bar());
//2 
console.log((foo.bar)());
//3
console.log((foo.bar = foo.bar)());
//4
console.log((false || foo.bar)());
//5
console.log((foo.bar, foo.bar)());
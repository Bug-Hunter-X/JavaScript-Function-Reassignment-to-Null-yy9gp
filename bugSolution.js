function foo(a, b) {
  if (typeof foo !== 'function') {
    console.error("Function 'foo' is not defined.");
    return undefined; // Or throw an error
  }
  return a + b;
}

console.log(foo(2, 3)); // Output: 5
foo = null;
console.log(foo(2, 3)); // Output: Function 'foo' is not defined. undefined 
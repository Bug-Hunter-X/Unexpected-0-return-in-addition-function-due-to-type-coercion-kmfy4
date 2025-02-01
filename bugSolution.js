function foo(a, b) {
  // Check for null values explicitly
  if (a === null || b === null) {
    return 0; // Handle null values
  }

  //Explicitly convert to Number before addition
  a = Number(a);
  b = Number(b);
  if(isNaN(a) || isNaN(b)){
    return 0; // Handle NaN values
  }
  return a + b; // Perform addition
}

console.log(foo(10, null)); // Output: 0
console.log(foo(null, 20)); // Output: 0
console.log(foo(10, 20)); // Output: 30
console.log(foo(10, 0)); // Output: 10
console.log(foo(0, 20)); // Output: 20
console.log(foo('',20)); // Output: 20
console.log(foo(10,'')); // Output: 10
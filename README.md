# JavaScript Type Coercion Bug

This repository demonstrates a subtle bug in JavaScript related to type coercion when using the strict equality operator (===) in conjunction with null checks.  The bug can lead to unexpected 0 results in situations where you expect numerical addition.

## Bug Description
The `foo` function is intended to add two numbers. However, due to how JavaScript handles type coercion,  if either input is coerced to boolean false (0, '', false, etc), the null check will bypass the intended addition and incorrectly return 0.

## Solution
The solution involves more robust null and type checking before performing the addition to prevent unwanted type coercion issues and ensure the function behaves as expected.
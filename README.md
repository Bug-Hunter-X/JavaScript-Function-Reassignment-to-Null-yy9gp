# JavaScript Function Reassignment to Null

This repository demonstrates an uncommon yet important behavior in JavaScript concerning function reassignment.  The `bug.js` file shows that even after a function is reassigned to `null`, calling it still doesn't throw an error, but instead returns `undefined`. This is different from many other languages which may throw an error directly.

The `bugSolution.js` file offers a safer way to handle function calls, employing additional checks to prevent unexpected behavior.

This example highlights the importance of defensive coding practices in JavaScript where unexpected behavior from reassigning and null values can lead to unexpected results.  Always validate the values of functions before invocation where possible.

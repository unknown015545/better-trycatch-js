# Better Try-Catch

A try-catch wrapper for Javascript.

Example:
```js
import catchError from 'better-trycatch'
// Or `const catchError = require("better-trycatch")`

const [error, result] = await catchError(Promise.reject("An Error"))
```

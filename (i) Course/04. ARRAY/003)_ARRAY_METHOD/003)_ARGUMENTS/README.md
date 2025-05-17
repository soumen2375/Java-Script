# JavaScript Arguments Object

Within a function, you can access all the passed arguments using the `arguments` object. It's an **array-like object**, meaning it has a `length` property and can be accessed using indexes, but it doesn't have all the methods of a true array.

---

## Example

```javascript
function myFunction() {
  console.log(arguments.length); // Number of arguments passed
  console.log(arguments[0]); // First argument
  console.log(arguments[1]); // Second argument
}

myFunction(10, 20, 30);
// Output:
// 3
// 10
// 20
```

---

## Key Points

- The `arguments` object is available only inside **regular functions** (not arrow functions).
- It is **not** a real array, so array methods like `.forEach()` or `.map()` do not work directly on it.
- Useful for working with functions that accept a variable number of arguments.

---

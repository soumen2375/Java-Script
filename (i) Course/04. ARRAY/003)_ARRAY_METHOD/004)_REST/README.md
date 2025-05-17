# JavaScript Rest Parameter (`...`)

The rest parameter syntax in JavaScript allows a function to accept an indefinite number of arguments as an array. It is denoted by three dots (`...`) followed by a parameter name. The rest parameter must be the last parameter in a function's parameter list.

---

## 1. Basic Usage

When a function is called with more arguments than named parameters, the rest parameter collects the extra arguments into an array.

```javascript
function myFunc(a, b, ...rest) {
  console.log("a:", a);
  console.log("b:", b);
  console.log("rest:", rest);
}

myFunc(1, 2, 3, 4, 5);
// Output:
// a: 1
// b: 2
// rest: [3, 4, 5]
```

---

## 2. Rest Parameter with Destructuring

The rest parameter is often used with destructuring to extract specific values from an array or object.

```javascript
const arr = [1, 2, 3, 4, 5];
const [first, second, ...remaining] = arr;

console.log("first:", first); // Output: first: 1
console.log("second:", second); // Output: second: 2
console.log("remaining:", remaining); // Output: remaining: [3, 4, 5]
```

---

## 3. Important Notes

- The rest parameter creates a new array containing the remaining arguments; it does **not** modify the original `arguments` object.
- A function can only have **one** rest parameter, and it must be the **last** parameter.

---

# JavaScript Destructuring

Destructuring in JavaScript provides a concise way to extract values from arrays or objects and assign them to distinct variables. It simplifies accessing and using data within complex data structures. **Destructuring does not modify the original array or object.**

---

## 1. Array Destructuring

Extracts values based on their position.

```javascript
const numbers = [1, 2, 3];
const [first, ...args] = numbers;

console.log(first); // Output: 1
console.log(...args); // Output: 2 3
```

---

## 2. Object Destructuring

Extracts values based on property names.

```javascript
const person = { name: "Soumen", age: 21, city: "Kolkata" };
const { name, age, city } = person;

console.log(name); // Output: Soumen
console.log(age); // Output: 21
console.log(city); // Output: Kolkata
```

---

## 3. Default Values

Assign default values during destructuring in case a property or array element is missing.

```javascript
const settings = { sky: "Blue" };
const { sky, leaf = "Green" } = settings;

console.log(sky); // Output: Blue
console.log(leaf); // Output: Green
```

---

## 4. Nested Destructuring

Extract values from nested objects and arrays.

```javascript
const user = {
  id: 1,
  profile: {
    firstName: "Soumen",
    lastName: "Maity",
  },
};

const {
  id,
  profile: { firstName, lastName },
} = user;

console.log(id); // Output: 1
console.log(firstName); // Output: Soumen
console.log(lastName); // Output: Maity
```

---

## 5. Renaming Variables

Rename variables during destructuring using a colon.

```javascript
const product = { id: 101, itemName: "Laptop" };
const { id: productID, itemName: productName } = product;

console.log(productID); // Output: 101
console.log(productName); // Output: Laptop
```

---

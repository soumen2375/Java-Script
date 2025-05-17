# JavaScript Spread Operator (`...`)

The spread operator (`...`) in JavaScript expands an iterable (like an array, string, or object) into individual elements. It is commonly used for:

---

## 1. Copying Arrays

Create a shallow copy of an array.

```javascript
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
```

---

## 2. Concatenating Arrays

Merge multiple arrays into a new array.

```javascript
const array1 = [1, 2];
const array2 = [3, 4];
const combinedArray = [...array1, ...array2];
```

---

## 3. Passing Arguments to Functions

Pass elements of an array as individual arguments.

```javascript
function sum(a, b, c) {
  return a + b + c;
}
const numbers = [1, 2, 3];
const result = sum(...numbers);
```

---

## 4. Adding Elements to Arrays

Insert elements into an existing array without modifying the original.

```javascript
const originalArray = [2, 3];
const newArray = [1, ...originalArray, 4];
```

---

## 5. Copying Objects

Create shallow copies of objects.

```javascript
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };
```

---

## 6. Merging Objects

Combine properties from multiple objects into a new object. If there are same properties, the last one overrides the previous ones.

```javascript
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
const mergedObject = { ...object1, ...object2 };
```

---

## 7. Converting Strings to Arrays

Split a string into an array of characters.

```javascript
const str = "hello";
const charArray = [...str];
```

---

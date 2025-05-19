# JavaScript DOM (Document Object Model) Cheat Sheet

## 📚 What is the DOM?

The **DOM (Document Object Model)** is a tree-like structure that represents the content of a web page. It acts as an interface between HTML and JavaScript, allowing developers to dynamically access and update the content, structure, and style of a web page.

---

## 🧱 DOM Structure

Think of HTML like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello DOM!</h1>
  </body>
</html>
```

The browser turns this into a DOM tree:

```
Document
 └── html
     ├── head
     │    └── title
     └── body
          └── h1
```

---

## 🔍 Accessing DOM Elements

1. **By ID**

   ```javascript
   document.getElementById("myId");
   ```

2. **By Class**

   ```javascript
   document.getElementsByClassName("myClass");
   ```

3. **By Tag Name**

   ```javascript
   document.getElementsByTagName("p");
   ```

4. **Using Query Selector**
   ```javascript
   document.querySelector("#myId"); // Single match
   document.querySelectorAll(".myClass"); // NodeList
   ```

---

## 🛠️ DOM Manipulation

### ✅ Change Text or HTML

```javascript
element.textContent = "New Text";
element.innerHTML = "<strong>Bold</strong>";
```

### ✅ Change Attributes

```javascript
element.setAttribute("src", "image.jpg");
element.getAttribute("href");
element.removeAttribute("disabled");
```

### ✅ Change Styles

```javascript
element.style.color = "red";
element.style.backgroundColor = "#000";
```

---

## 📦 ClassList Handling

```javascript
element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("hidden");
element.classList.contains("visible");
```

---

## 🌲 Traversing the DOM

```javascript
element.parentElement; // Go up
element.children; // Go down
element.nextElementSibling; // Next sibling
element.previousElementSibling; // Previous sibling
```

---

## ➕ Creating & Inserting Elements

```javascript
const myDiv = document.createElement("div"); //create element
const myDiv2 = document.createElement("div");

myDiv.append("Hello!");// Add string
document.body.appendChild(myDiv); // Add at end
document.body.prepend(myDiv2); // Add at first
```

---

## ❌ Removing Elements

```javascript
const element = document.getElementById("myId");
element.remove(); // Modern way
```

# JavaScript Event Handling Practice

This project demonstrates the use of various JavaScript event listeners to handle user interactions and browser events. The following events are implemented:

---

## **Event Details**

### **Mouse Out**

- **Element**: Button with id `mouse-out`.
- **Event**: `mouseout`.
- **Action**: Logs a message to the console when the mouse leaves the button.

### **Keypress**

- **Element**: Button with id `keypress`.
- **Event**: `keydown` (listens for the "Enter" key).
- **Action**: Logs a message to the console when the "Enter" key is pressed.

### **Scroll**

- **Element**: `div` with id `scroll`.
- **Event**: `scroll`.
- **Action**: Logs the vertical scroll position (`scrollTop`) to the console.

### **Load**

- **Event**: `load`.
- **Action**: Logs a message to the console when the page is fully loaded.

---

## **Example Code Snippets**

### **Mouse Out Event**

```javascript
document.getElementById("mouse-out").addEventListener("mouseout", () => {
  console.log("Mouse has left the button!");
});
```

### **Keypress Event**

```javascript
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("Enter key pressed!");
  }
});
```

### **Scroll Event**

```javascript
document.getElementById("scroll").addEventListener("scroll", (event) => {
  console.log(event.target.scrollTop);
});
```

### **Load Event**

```javascript
window.addEventListener("load", () => {
  console.log("Page fully loaded!");
});
```

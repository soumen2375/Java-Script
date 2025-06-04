# JavaScript Event Listeners

## 📊 Difference Between `onclick` and `addEventListener`

| Feature                        | `onclick`                                      | `addEventListener()`                               |
| ------------------------------ | ---------------------------------------------- | -------------------------------------------------- |
| **Basic Usage**                | `element.onclick = function() {}`              | `element.addEventListener("click", function)`      |
| **Multiple Handlers**          | Only one at a time                             | Supports multiple event listeners                  |
| **Overwrites Previous?**       | Yes, each new assignment replaces the old      | No, adds in parallel                               |
| **Event Types Supported**      | Limited to direct properties (e.g., `onclick`) | Supports all standard events                       |
| **Advanced Options**           | Not supported                                  | Supports options like `{ once, capture, passive }` |
| **Attach Same Function Twice** | Replaces old function                          | Allowed (but you must manage duplicates)           |
| **Remove Listener Easily**     | Not straightforward                            | Use `removeEventListener()`                        |
| **Separation of Concerns**     | JS mixed with HTML (if inline)                 | Clean JS structure                                 |
| **Timing in Code**             | Must be after DOM is loaded                    | Same, but works well with `DOMContentLoaded`       |
| **Use in Modern Development**  | Outdated / Not scalable                        | Modern best practice                               |

---

Event listeners in JavaScript wait for specific events, like clicks or key presses, and execute a function in response.

The `addEventListener()` method is the primary way to attach event listeners to HTML elements. It takes the following arguments:

1. **Event type** (as a string, e.g., `'click'`).
2. **Function** to execute (the event handler).
3. **Optional third argument** specifying whether to use capturing or bubbling.

---

## Syntax

```javascript
element.addEventListener('event', function, useCapture);
```

---

## Example 1: Adding an Event Listener

To add an event listener to a button that logs a message to the console when clicked:

```javascript
const button = document.querySelector("button");

button.addEventListener("click", function () {
  console.log("Button clicked!");
});
```

---

## Example 2: Using a Separate Event Handler Function

You can also define the event handler as a separate function:

```javascript
const button = document.querySelector("button");

function handleClick() {
  console.log("Button clicked!");
}

button.addEventListener("click", handleClick);
```

---

## Removing an Event Listener

To remove an event listener, use the `removeEventListener()` method. You must provide the same event type and handler function:

```javascript
button.removeEventListener("click", handleClick);
```

---

## Common Event Types with Examples

### 🖱️ Mouse Event → `click`

| Event         | Description                          |
| ------------- | ------------------------------------ |
| `click`       | Single mouse click                   |
| `dblclick`    | Double mouse click                   |
| `mousedown`   | Mouse button is pressed              |
| `mouseup`     | Mouse button is released             |
| `mousemove`   | Mouse is moved                       |
| `mouseenter`  | Mouse enters the element (no bubble) |
| `mouseleave`  | Mouse leaves the element (no bubble) |
| `mouseover`   | Mouse goes over an element (bubbles) |
| `mouseout`    | Mouse leaves an element (bubbles)    |
| `contextmenu` | Right-click to open context menu     |

**Example:**

```javascript
document.getElementById("btn").addEventListener("click", () => {
  alert("Button clicked!");
});
```

---

### ⌨️ Keyboard Event → `keydown`

| Event      | Description                          |
| ---------- | ------------------------------------ |
| `keydown`  | Key is pressed down                  |
| `keypress` | Key is pressed and held (deprecated) |
| `keyup`    | Key is released                      |

**Example:**

```javascript
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("Enter key pressed");
  }
});
```

---

### 🧾 Form Event → `submit`

| Event      | Description                         |
| ---------- | ----------------------------------- |
| `submit`   | Form is submitted                   |
| `change`   | Input value is changed              |
| `input`    | Input value is changing (real-time) |
| `focus`    | Element receives focus              |
| `blur`     | Element loses focus                 |
| `focusin`  | Focus enters a descendant (bubbles) |
| `focusout` | Focus leaves a descendant (bubbles) |
| `reset`    | Form is reset                       |

**Example:**

```javascript
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submitted!");
});
```

---

### ⚡ Clipboard Event → `paste`

| Event   | Description    |
| ------- | -------------- |
| `copy`  | Content copied |
| `cut`   | Content cut    |
| `paste` | Content pasted |

**Example:**

```javascript
document.addEventListener("paste", (e) => {
  console.log("Pasted text:", e.clipboardData.getData("text"));
});
```

---

### 👆 Pointer Event → `pointerdown`

| Event                | Description                    |
| -------------------- | ------------------------------ |
| `pointerdown`        | Pointer makes contact          |
| `pointerup`          | Pointer is released            |
| `pointermove`        | Pointer is moved               |
| `pointerenter`       | Pointer enters element         |
| `pointerleave`       | Pointer leaves element         |
| `pointerover`        | Pointer hovers over element    |
| `pointerout`         | Pointer moves out of element   |
| `pointercancel`      | Pointer operation cancelled    |
| `gotpointercapture`  | Element captures pointer input |
| `lostpointercapture` | Pointer capture released       |

**Example:**

```javascript
document.getElementById("canvas").addEventListener("pointerdown", (e) => {
  console.log(`Pointer started at (${e.clientX}, ${e.clientY})`);
});
```

---

### 📱 Touch Event → `touchstart`

| Event         | Description                   |
| ------------- | ----------------------------- |
| `touchstart`  | Finger touches the screen     |
| `touchmove`   | Finger moves on screen        |
| `touchend`    | Finger is removed from screen |
| `touchcancel` | Touch is interrupted          |

**Example:**

```javascript
document.getElementById("box").addEventListener("touchstart", () => {
  console.log("Touch started on mobile");
});
```

---

### 📦 Drag & Drop Event → `drop`

| Event       | Description                     |
| ----------- | ------------------------------- |
| `drag`      | Element is being dragged        |
| `dragstart` | Dragging starts                 |
| `dragend`   | Dragging ends                   |
| `dragenter` | Draggable enters a drop target  |
| `dragover`  | Draggable is over a drop target |
| `dragleave` | Draggable leaves a drop target  |
| `drop`      | Element is dropped              |

**Example:**

```javascript
document.getElementById("dropZone").addEventListener("drop", (e) => {
  e.preventDefault();
  console.log("Item dropped");
});
```

---

### 🌐 Window/Document Event → `DOMContentLoaded`

| Event              | Description                           |
| ------------------ | ------------------------------------- |
| `load`             | Page or resource has loaded           |
| `DOMContentLoaded` | Initial HTML is loaded and parsed     |
| `resize`           | Window is resized                     |
| `scroll`           | Scrolling occurs                      |
| `unload`           | Page is unloading (deprecated)        |
| `beforeunload`     | Page is about to be unloaded          |
| `hashchange`       | URL hash (#) has changed              |
| `popstate`         | History entry changes (used with SPA) |

**Example:**

```javascript
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
});
```

---

### 📷 Media Event → `play`

| Event          | Description                       |
| -------------- | --------------------------------- |
| `play`         | Media starts playing              |
| `pause`        | Media is paused                   |
| `ended`        | Playback ends                     |
| `volumechange` | Volume changes                    |
| `timeupdate`   | Current playback position updates |
| `canplay`      | Media can start playing           |
| `loadeddata`   | Media data is loaded              |

**Example:**

```javascript
document.querySelector("video").addEventListener("play", () => {
  console.log("Video started playing");
});
```

---

### 🧪 Miscellaneous Event → `scroll`

| Event                                                                   | Description                    |
| ----------------------------------------------------------------------- | ------------------------------ |
| `animationstart`, `animationend`, `animationiteration`                  | CSS animation events           |
| `transitionstart`, `transitionend`, `transitionrun`, `transitioncancel` | CSS transition events          |
| `wheel`                                                                 | Mouse wheel is used            |
| `error`                                                                 | Error occurs                   |
| `abort`                                                                 | Loading aborted                |
| `toggle`                                                                | `<details>` element is toggled |

**Example:**

```javascript
window.addEventListener("scroll", () => {
  console.log("User is scrolling the page");
});
```

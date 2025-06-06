# Event Bubbling in JavaScript

## What is Event Bubbling?
Event bubbling is a mechanism in JavaScript where an event triggered on a child element propagates (or "bubbles up") to its parent elements. This means that if you click on a child element, the event can also trigger on its parent elements unless explicitly stopped.

---

## What Can We Do with Event Bubbling?
1. **Handle Events at Parent Level**: Use bubbling to manage events efficiently by attaching listeners to parent elements instead of individual child elements.
2. **Stop Propagation**: Prevent the event from propagating to parent elements using `event.stopPropagation()`.
3. **Capture Events**: Use the capturing phase to intercept events before they reach the target element.

---

## Key Points
- **Event Propagation**: Events bubble up from child to parent unless stopped.
- **Stop Bubbling**: Use `event.stopPropagation()` to prevent parent elements from receiving the event.
- **Efficient Event Handling**: Attach listeners to parent elements to handle events for multiple child elements.

Event bubbling is useful for managing events efficiently and controlling how events propagate through the DOM.
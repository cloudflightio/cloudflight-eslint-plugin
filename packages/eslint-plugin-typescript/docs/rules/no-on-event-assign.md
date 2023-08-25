# no-on-event-assign

Directly assigning to `on` events is not recommended. Use `addEventListener` instead, since that way multiple event listeners can be registered on the same element.
It also allows you to specify additional options for the event listener.

## ❌ Invalid Code

````ts
target.onclick = function(){}

target.onclick = () => {}
````

## ✔ Valid Code

```ts
target.addEventListener('click', () => {})
```

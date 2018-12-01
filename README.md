

## Sintaxis

```javascript
arrayForEachParallel(arr, maxParallel, function callback(currentValue[, index[, array]]) {
    //your handle
}[, thisArg])
```

**Parameters**
 - `arr`: The array that arrayForEachParallel() is being applied to.
 - `maxParallel`: The maximum of executions in parallel.
 - `callback`: Function to execute for each element, taking three arguments:
    - `currentValue`: The value of the current element being processed in the array.
    - `index` [**Optional**]: The index of the current element being processed in the array.
    - `array` [**Optional**]: The array that `arrayForEachParallel()` is being applied to.
- `thisArg` [**Optional**]: Value to use as `this` (i.e the reference `Object`) when executing `callback`.

**Return valueSection**
`undefined`.

## Description

`arrayForEachParallel()` executes the callback provided by `maxParallel` times for each element present in the array in ascending order.

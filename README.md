

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

## Description

`arrayForEachParallel()` executes the callback provided by `maxParallel` times for each element present in the array in ascending order.

## Example

**Feed two animals in parallel**

```javascript
const animals = [ 'peccary', 'goat', 'crow', 'blue crab', 'parrot', 'bighorn', 'budgerigar', 'hedgehog', 'oryx', 'giraffe' ];

animals.forEach(animal => console.time(`feed the ${animal}`));

async function feed (animal) {
    await new Promise(r => setTimeout(r, 1000));
    console.timeEnd(`feed the ${animal}`);
}

console.time('arrayForEachParallel');
await arrayForEachParallel(animals, 2, feed);
console.timeEnd('arrayForEachParallel');
// feed the peccary: 1004.807ms
// feed the goat: 1007.439ms
// feed the crow: 2012.636ms
// feed the blue crab: 2013.369ms
// feed the parrot: 3013.812ms
// feed the bighorn: 3014.082ms
// feed the budgerigar: 4019.548ms
// feed the hedgehog: 4019.773ms
// feed the oryx: 5022.371ms
// feed the giraffe: 5022.582ms
// arrayForEachParallel: 5022.913ms
```

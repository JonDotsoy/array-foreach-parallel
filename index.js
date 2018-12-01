const promiseStatusAsync = require('promise-status-async');

async function filterAsync(arr, callback, thisArg) {
  return arr.reduce(
    (accumulator, currentValue) =>
      accumulator.then(async (accumulator) => {
        if (await callback.call(thisArg, currentValue)) {
          accumulator.push(currentValue);
        }
        return accumulator;
      }),
    Promise.resolve([]),
  );
}

function arrayForEachParallel(iterable, maxParallel, handleFunction, thisArg) {
  const iterableValues = iterable[Symbol.iterator]();
  
  return new Promise(async (resolve, reject) => {
    let prosecutions = [];
    let indexElement = 0;

    function fillTailProcessing() {
        for (let _indexFor = prosecutions.length; _indexFor < maxParallel; _indexFor++) {
            const iteration = iterableValues.next();

            if (iteration.done === false) {
                prosecutions.push(
                    handleFunction.call(thisArg, iteration.value, indexElement++, iterable)
                );
            }
        }
    }

    try {
      while (true) {
        fillTailProcessing();

        if (!prosecutions.length) break;

        await Promise.race(prosecutions);
        prosecutions = await filterAsync(prosecutions, promiseStatusAsync.isPromisePending);
      };
      return resolve();
    } catch (error) {
      return reject(error);
    }
  })
}

module.exports = arrayForEachParallel;

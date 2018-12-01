const arrayForEachParallel = require('../..');

;(async () => {
    const animals = [ 'peccary', 'goat', 'crow', 'blue crab', 'parrot', 'bighorn', 'budgerigar', 'hedgehog', 'oryx', 'giraffe' ];

    animals.forEach(animal => console.time(`feed the ${animal}`));

    async function feed (animal) {
        await new Promise(r => setTimeout(r, 1000));
        console.timeEnd(`feed the ${animal}`);
    }

    console.time('arrayForEachParallel');
    await arrayForEachParallel(animals, 2, feed);
    console.timeEnd('arrayForEachParallel');
})();
import rna from 'rna.js'

const SAMPLES = 1000;

setInterval(() => {
    const rna = new rna(10, [5, 5, 5, 5, 1]);

    let total = 0;

    for (let i = 0; i < SAMPLES; i++) {
        const inputs = new array[10].fill().map(() => Math.random());
        const[r] = rna.compute(inputs);
        total += r;        
    }

    console.clear();
    console.log(total / SAMPLES);

}, 1000);
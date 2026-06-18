let i = 1;

let interval = setInterval(() => {
    console.log(`2 x ${i} = ${2 * i}`);
    i++;

    if (i > 10) {
        clearInterval(interval);
    }
}, 1000);
/////////////////////
// PROMISE THE LIMIT  (Medium)
////////////////////

function timeLimit(fn, t) {
    return async (...args) => {
        return new Promise((resolve, reject) => {
            // Buat timer untuk time limit
            const timeoutId = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            // Jalankan fungsi async dan resolve/reject jika selesai
            fn(...args)
                .then((res) => {
                    clearTimeout(timeoutId); // Jika berhasil, hentikan timer
                    resolve(res);
                })
                .catch((err) => {
                    clearTimeout(timeoutId); // Jika gagal, hentikan timer
                    reject(err);
                });
        });
    };
}

// Example 1:
const fn1 = async (n) => {
    await new Promise(res => setTimeout(res, 100));
    return n * n;
};

const limited1 = timeLimit(fn1, 50);
const start1 = performance.now();
limited1(5).then(result => {
    console.log({
        resolved: result,
        time: Math.floor(performance.now() - start1)
    });
}).catch(err => {
    console.log({
        rejected: err,
        time: Math.floor(performance.now() - start1)
    });
});

// Example 2:
const fn2 = async (n) => {
    await new Promise(res => setTimeout(res, 100));
    return n * n;
};

const limited2 = timeLimit(fn2, 150);
const start2 = performance.now();
limited2(5).then(result => {
    console.log({
        resolved: result,
        time: Math.floor(performance.now() - start2)
    });
}).catch(err => {
    console.log({
        rejected: err,
        time: Math.floor(performance.now() - start2)
    });
});

// Example 3:
const fn3 = async (a, b) => {
    await new Promise(res => setTimeout(res, 120));
    return a + b;
};

const limited3 = timeLimit(fn3, 150);
const start3 = performance.now();
limited3(5, 10).then(result => {
    console.log({
        resolved: result,
        time: Math.floor(performance.now() - start3)
    });
}).catch(err => {
    console.log({
        rejected: err,
        time: Math.floor(performance.now() - start3)
    });
});

// Example 4:
const fn4 = async () => {
    throw "Error";
};

const limited4 = timeLimit(fn4, 1000);
const start4 = performance.now();
limited4().then(result => {
    console.log({
        resolved: result,
        time: Math.floor(performance.now() - start4)
    });
}).catch(err => {
    console.log({
        rejected: err,
        time: Math.floor(performance.now() - start4)
    });
});
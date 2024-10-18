/////////////////////////
// INTERVAL CANCELLATION  (Easy)
////////////////////////

function cancellable(fn, args, t) {
    // Panggilan pertama fn di waktu 0
    fn(...args);

    // Mulai interval untuk memanggil fn setiap t milidetik
    const intervalId = setInterval(() => {
        fn(...args);
    }, t);

    // Fungsi cancelFn yang akan mematikan interval
    const cancelFn = () => clearInterval(intervalId);

    return cancelFn;
}

// Contoh penggunaan
const fn = (x) => x * 2;
const args = [4];
const t = 35;
const cancelFn = cancellable(fn, args, t);

// Menghentikan fungsi setelah cancelTimeMs milidetik
const cancelTimeMs = 190;
setTimeout(cancelFn, cancelTimeMs);

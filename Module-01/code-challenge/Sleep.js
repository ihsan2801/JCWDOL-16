/////////
// SLEEP  (Easy)
////////

// Kita diminta untuk menulis sebuah fungsu asinkron yang memungkinkan
// kita untuk menunggu selama beberapa milidetik sebelum melanjutkan
// eksekusi. Fungsi ini harus mengembalikan sebuah promise yang akan
// menyelesaikan (resolve) setelah waktu delay yang ditentukan.


/**
 * Tidur selama waktu yang diberikan dalam milidetik.
 * @param {number} millis - Jumlah milidetik untuk tidur.
 * @return {Promise} Sebuah promise yang akan selesai setelah waktu yang ditentukan.
 */
function sleep(millis) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(); // Menyelesaikan promise setelah delay yang ditentukan
        }, millis);
    });
}


///////////
// EXAMPLE
//////////
let t = Date.now();
sleep(100).then(() => {
    console.log(Date.now() - t); // Harusnya sekitar 100ms
});

sleep(200).then(() => {
    console.log('Tidur selama 200ms');
});

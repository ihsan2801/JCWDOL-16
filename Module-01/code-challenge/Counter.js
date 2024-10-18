///////////
// COUNTER
//////////

// Fungsi yang membuat counter
var createCounter = function(n) {
    // Mengembalikan sebuah fungsi yang menjadi counter
    return function() {
        // Kembalikan nilai n, kemudian tambahkan 1 pada n
        return n++
    }
}

// Contoh penggunaan
let counter = createCounter (10);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

counter = createCounter (-2);
console.log(counter()); 
console.log(counter());
console.log(counter());
console.log(counter());
// Tambahkan fungsi last ke Array.prototype
Array.prototype.last = function() {
    if (this.length === 0) {
        return -1; // Jika array kosong, return -1
    } else {
        return this[this.length - 1]; // Ambil elemen terakhir
    }
};

// Contoh 1: Input valid dengan JSON
let nums = JSON.parse('[null, {}, 3]');
console.log(nums.last());

// Contoh 2: Array kosong
let emptyArray = JSON.parse('[]');
console.log(emptyArray.last());
// --> Kalau [] nya kosong, console.log akan bernilai -1

/////////////
// EXAMPLE 1
////////////
console.log(nums.last());

/////////////
// EXAMPLE 2
////////////
console.log(emptyArray.last());
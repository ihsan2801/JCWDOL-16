/////////////////
// ARRAY WRAPPER
////////////////

class ArrayWrapper {
    constructor(nums) {
        this.nums = nums;
    }

    // Override untuk operator +
    valueOf() {
        // Saat operator + digunakan, jumlahkan seluruh elemen array
        return this.nums.reduce((acc, curr) => acc + curr, 0);
    }

    // Override untuk method to String()
    toString() {
        // Kembalikkan representasi string dari array dalam bentuk ["1,2,3"]
        return `[${this.nums.join(',')}]`
    }

};

// Contoh 1: Penjumlahan
const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2); 

// Contoh 2: Representasi string
const obj3 = new ArrayWrapper([23, 98, 42, 70]);
console.log(String(obj3)); 

// Contoh 3: Penjumlahan array kosong
const obj4 = new ArrayWrapper([]);
const obj5 = new ArrayWrapper([]);
console.log(obj4 + obj5); 
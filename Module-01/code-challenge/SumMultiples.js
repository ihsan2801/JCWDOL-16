//////////////////
// SUM MULTIPLIES  (Easy)
/////////////////

function sumOfDivisibles(n) {
    let totalSum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            totalSum += i;
        }
    }
    return totalSum;
}

// Example
const n1 = 7;
const n2 = 10;
const n3 = 9;

console.log(sumOfDivisibles(n1));  
// Input : n = 7
// Output : 21
// Dari angka 1 - 7 yang dapat dibagi 3, 5, atau 7 =
// 3, 5, 6, 7. 
// Jumlah dari angka-angka tsb : 3 + 5 + 6 + 7 = 21.

console.log(sumOfDivisibles(n2));  
// 3, 5, 6, 7, 9, 10

console.log(sumOfDivisibles(n3)); 
// 3, 5, 6, 7, 9
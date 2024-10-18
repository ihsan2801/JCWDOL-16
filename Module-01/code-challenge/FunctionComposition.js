////////////////////////
// FUNCTION COMPOSITION  (Easy)
///////////////////////

function compose(functions) {
    // Jika Array fungsi kosong, kembalikan fungsi identitas
    if (functions.length === 0){
        return function(x) {
            return x;
        };
    }

    // Kembalikan fungsi yang merupakan komposisi dari semua fungsi
    return function(x) {
        let result = x;
        // Iterasi fungsi dari kanan ke kiri
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions [i](result); 
        }
        return result;
    };
}

// Example 1 
let functions1 = [x => x + 1, x => x * x, x => 2 * x];
let composed1 = compose(functions1);
console.log(composed1(4));

// Example 2 
let functions2 = [x => 10 * x, x => 10 * x, x => 10 * x];
let composed2 = compose(functions2);
console.log(composed2(1));

// Example 3
let functions3 = [];
let composed3 = compose(functions3);
console.log(composed3(42));
////////////////////////////////////////////////
// Variabel _cuaca adalah variabel GLOBAL SCOPE
///////////////////////////////////////////////
let _cuaca: string = "hujan";

if (_cuaca === "hujan") {
    // Variabel _aksi adalah variabel LOCAL SCOPE
    const _aksi = "Kita tidak pergi jalan";
    console.log(_aksi);
    
   // _cuaca = "tidak hujan";
} else {
    const _aksi: string = "Kita pergi jalan";
    console.log(_aksi);
}

// console.log(_cuaca);
console.log(_cuaca == "hujan" ? "Kita tidak pergi jalan" : "Kita pergi jalan");
const _umur: number = 7;

let _aksi: string;
// Chaining Condition
if (_umur > 17 && _umur < 21 ) {
    const _aksi ="Sudah bisa buat KTP";
    console.log(_aksi);
} else if (_umur > 20) {
    const _aksi = "Tidak bisa buat KTP"
    console.log(_aksi);
}   else if (_umur < 17 && _umur > 0) {
    const _aksi = "Belum cukup umur";
    console.log(_aksi);
} else {
    console.log("Belum Lahir"); 
}

const _buah: string = "apel";

// switch case digunakan untuk comparison === saja
switch(_buah) {
    case "apel":
        console.log("Harga buah apel = 5000");
        break;
    case "jeruk":
        console.log("Harga buah jeruk = 8000");
        break;
    default:
        console.log("Harga buah = 2000");
}
// Falsy
if (false) {
    console.log("jalan");
}
if (" ") {
    console.log("jalan");
}
if (2) {
    console.log("jalan");
}

////////////
// FOR LOOP
///////////
for (let i: number = 10; i > 0; i--) {
    if (i % 2 !== 0) continue;
    console.log(i);
}

//////////////
// WHILE LOOP
/////////////
let _countdown: number = 10;
while (_countdown > 0) {
    console.log(_countdown);
    if (_countdown === 6) break;

    _countdown--;
}

/////////////////
// DO WHILE LOOP
////////////////
_countdown = 10;
do {
    console.log(_countdown);
    if (_countdown === 6) break;

    _countdown--;
} while (_countdown > 0);
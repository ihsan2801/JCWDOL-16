// const sepatu = "adidas";
// const hargaAdidas = 50000; 
// const tipeAdidas = "Vmax"
// const sepatu2 = "adidas";
// const hargaAdidas2 = "100000"
// const tipeAdidas2 = "tinggi"
;
var sepatu = {
    merk: "adidas",
    harga: 50000,
    tipe: "vmax",
};
console.log(sepatu.harga);
console.log(sepatu.merk);
function tampilkanSepatu(obj) {
    console.log(sepatu.merk);
}
console.log(tampilkanSepatu({ merk: "adidas", harga: 20000 }));

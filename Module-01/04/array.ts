let sepatu = "Adidas";
let sepatu2 = "Nike";
console.log(sepatu)

let listSepatu: string[] = ["Adidas", "Nike", "Puma", "Reebok"];
console.log(listSepatu[2]);
console.log(listSepatu.length);

let listAngka: number[] = [1, 2, 3];

for (let i = 0; i < listSepatu.length; i++) {
    console.log(listSepatu[i]);
}


let listArray: number[][] = [
    [1, 2],
    [3 ,4],
    [5, 6, 7, 8],
];

for (let i = 0; i < listArray.length; i++) {
    for (let j = 0; j < listArray[i].length; j++) {
        console.log(listArray[i][j]); 
    }
}

/////////////////////////////
// Array Build in Method POP
////////////////////////////
console.log(listSepatu);
console.log(listSepatu.pop());
console.log(listSepatu);
console.log(listSepatu.pop());
console.log(listSepatu);
let _sepatu = listSepatu.pop();
console.log(_sepatu);
console.log(listSepatu);

//////////////////////////////
// Array Build in Method PUSH
/////////////////////////////
listSepatu.push("Reebok");
console.log(listSepatu);
listSepatu.push("Converse");
console.log(listSepatu);

///////////////////////////////
// Array Build in Method SHIFT
//////////////////////////////
listSepatu.shift()
console.log(listSepatu);

/////////////////////////////////
// Array Build in Method UNSHIFT
////////////////////////////////
listSepatu.unshift("Adidas")
console.log(listSepatu);

/////////////////////////////////
// Array Build in Method REVERSE
////////////////////////////////
listSepatu.reverse()
console.log(listSepatu);

////////////////////////////////
// Array Build in Method CONCAT
///////////////////////////////
let _arr1 = [1, 2];
let _arr2 = [3, 4];
console.log(_arr1.concat(_arr2));

///////////////
// For Of Loop
//////////////
let _buah = ["Jeruk", "Apel", "Mangga"];
for (let buah of _buah) {
    console.log(buah);
}
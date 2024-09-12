// let x: number = 1, 
// y = 2;
// const pertambahan: number = x + y;
// console.log(pertambahan); 

// x = 2;
// y = 3;
// pertambahan = x + y;
// console.log(pertambahan);


//////////////////////
// FUNGSI PERTAMBAHAN
//////////////////////
function pertambahan(x: number, y: number) {
   
    console.log(x);
    console.log(y);
    return x + y;
}

console.log(pertambahan (1, 3));
console.log(pertambahan (545353, 6454));
console.log(pertambahan (4, 4));


////////////////////
// FUNGSI PEMBAGIAN
////////////////////
function pembagian(x: number, y: number, z: number) {
    return x / y / z;
}

console.log(pembagian(6, 2, 4));


///////////////////////////////////
// FUNGSI MATEMATIKA DENGAN LOGIKA
///////////////////////////////////
function matematika(operasi: string, x: number, y: number) {
    if (operasi === "pertambahan") {
        return x + y;
    } else if (operasi === "pembagian") {
        return x / y;
    } else {
        return "masukkan operasi matematika yang benar";
    }
}

console.log(matematika("pertambahan", 5, 6));


////////////////////
// FUNGSI CEKSTRING
////////////////////
function cekString(x: any) {
    return typeof x === "string" ? true : false;
}

console.log(cekString(1));
console.log(cekString("a"))


///////////////////////////////////////////////////
// FUNGSI MENYAPA DENGAN KONDISI BERDASARKAN WAKTU
///////////////////////////////////////////////////
const menyapa = function (nama: string) {
    const date = new Date();
    let massage: string = "Selamat Sore";

   if (date.getHours() < 12) {
    massage = "Selamat Pagi";
   } else if (date.getHours() > 10 && date.getHours() < 15) {
    massage = "Selamat Siang";
   } else if (date.getHours() >= 3 && date.getHours() < 19) {
    massage = "Selamat Sore";
   }

   const sapa = `${massage} ${nama}`;

   return sapa;
}

console.log(menyapa("David"));


/////////////////////////
// REST PARAMETERS (...)
/////////////////////////
const someFunc = function (x: number, y: number, ...z) {
    console.log(z);
    if (z.length > 0) {
        return true;
    } else {
        return false;
    }
};

console.log(someFunc(5, 6, 7, 8, 9, 0, 1, 2));
console.log(someFunc (2, 4))


//////////////////////////////////////
// FUNGSI BERSARANG (NESTED FUNCTIONS)
//////////////////////////////////////
const greetings = function (name: string) {
    function sayHello () {
        return `Hello ${name}`
    }

    function welcome (){
        return "Welcome to Purwadhika";

    }

    return sayHello() + ", " + welcome();
};

console.log(greetings("Budi"));

// sayHello()
// welcome()


///////////
// CLOSURE
//////////
function closureFunc (name: string) {
    const defaultMassage: string = "Hello ";

    return function () {
        return `${defaultMassage} ${name}`;
    };
}
let closure = closureFunc("david")();
console.log(closure);

////////////
// CURRYING
///////////
console.log(multiply(4, 5000));
console.log(multiply(4, 20000));

function multiply(x: number, y: number) {
    return x * y;
}
    
console.log(multiply(4, 7));

function multiplier (x: number) {
    return function (y: number) {
        return x * y;
    };
}

const nul3 = multiplier(3);
const nul4 = multiplier(4);
console.log(nul3(5));
console.log(nul4(5000));
console.log(nul4(20000));


//////////////////////
// RECRUSIVE FUNCTION
/////////////////////

function countDown (fromNumber: number = 6) {
    console.log(fromNumber);

    const nextNumber: number = fromNumber - 1;
    if (nextNumber > 0) {
        countDown(nextNumber);
    }
    return fromNumber;
}

console.log(countDown())

//////////////////
// ARROW FUNCTION
/////////////////
const greet = (name: string) => `Hello ${name}`;
console.log(greet("david"));
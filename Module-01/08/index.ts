////////////////////////
// STACK DATA STRUCTURE
///////////////////////

interface IStack {
  push: (element: number) => void;  // Menambahkan elemen ke dalam stack
  pop: () => void; // Menghapus elemen dari stack, tidak punya parameter, tidak butuh data, karena pop hanya mengeluarkan index terakhir.
  showElements: () => number[]; // Menampilkan seluruh elemen dalam stack, karena di-PRIVATE (Ditandai dengan #)
}

class Stack implements IStack {
  #maxSize: number; // Menyimpan ukuran maksimum stack yg diset saat objek dibuat
  #container: number[]; // Menyimpan elemen2 di dalam stack.

  constructor(maxSize: number = 10) {
    this.#maxSize = maxSize;
    this.#container = [];
  }

  #isFull() {
    return this.#container.length >= this.#maxSize;
  }

  #isEmpty() {
    return this.#container.length === 0;
  }

  push(element: number) { // Kalau elemen ini dimasukkan di constructor, kita hanya bisa memasukkan angka 10, angka 5 tidak bisa.
    if (this.#isFull()) {
      console.log("sudah penuh");
    } else {
      this.#container.push(element);
    }
  }

  pop() {
    if (this.#isEmpty()) {
      console.log("sudah kosong");
    } else {
      this.#container.pop();
    }
  }

  showElements() {
    return this.#container; // Untuk melihat isi stack karena di-PRIVATE
  }
}

const newStack = new Stack(6);  // --> DEFAULT PARAMETER
                                // Objek Stack maksimum ada 6 (enam)
newStack.push(10);              // Kalau constructor(maxSize: number = ) ada amgkanya (= 10), 
newStack.push(5);               // sedangkan di argumennya kosong, berarti kita pake angka 10.
newStack.push(8);               // Kalo const-nya kosong, argumen dikosongin juga, akan muncul 
newStack.push(4);               // error (underline merah).
newStack.push(7); 
newStack.push(4);
newStack.push(1);
newStack.push(1);
let show = newStack.showElements();
console.log(show);

newStack.pop(); // --> Mengeluarkan data index terakhir
newStack.pop();
newStack.pop();
newStack.pop();
newStack.pop();
newStack.pop();
newStack.pop();
newStack.push(1);
console.log(newStack.showElements());

////////////////////////
// QUEUE DATA STRUCTURE
///////////////////////

interface IQueue {
  enqueue: (element: number) => void;
  dequeue: () => number | undefined;
  showElements: () => number[];
}

class Queue implements IQueue {
  #maxSize: number;
  #container: number[];

  constructor(maxSize: number = 10) {
    this.#maxSize = maxSize;
    this.#container = [];
  }

  #isFull() {
    return this.#container.length >= this.#maxSize;
  }

  #isEmpty() {
    return this.#container.length === 0;
  }

  enqueue(element: number) {
    if (this.#isFull()) {
      console.log("sudah penuh");

      return;
    }
    this.#container.push(element);
  }

  dequeue() {
    if (this.#isEmpty()) {
      console.log("sudah kosong");

      return;
    }
    return this.#container.shift();
  }

  showElements() {
    return this.#container;
  }
}

const newQueue = new Queue();
newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.enqueue(4);
newQueue.enqueue(5);
newQueue.enqueue(6);
newQueue.enqueue(7);
newQueue.enqueue(8);
newQueue.enqueue(9);
newQueue.enqueue(10);
newQueue.enqueue(11);
console.log(newQueue.showElements());
console.log(newQueue.dequeue());
console.log(newQueue.dequeue());
console.log(newQueue.dequeue());
console.log(newQueue.dequeue());
console.log(newQueue.dequeue());
console.log(newQueue.showElements());

//////////////////////
// SET DATA STRUCTURE
/////////////////////

const sneakers = ["adidas", "nikee", "reebok", "adidas"];
sneakers.push("reebok");
console.log(sneakers);

const cars = new Set(["bmw", "mercedes", "volkswagen", "bmw"]);
console.log(cars);
cars.add("mercedes");
cars.add("honda");
console.log(cars);
cars.delete("mercedes");
console.log(cars);
cars.forEach((i, idx) => {
  console.log(i);
});


///////////////////////////////////
// HASH TABLE / MAP DATA STRUCTURE
//////////////////////////////////

const obj = {
  name: "budi",
  umur: 22,
};
obj.name = "jojo";
obj.umur = 22;
console.log(obj);

const map = new Map();
map.set("budi", { umur: 25 });
console.log(map.get("budi"));
map.set(obj, "ini jojo");
console.log(map.get(obj));

map.set({ name: "dodi" }, 55);
console.log(map.get({ name: "dodi" }));

let keyArray = [5, 5];
map.set(keyArray, 55);
console.log(map.get(keyArray));
map.forEach((i) => {
  console.log(i);
});

for (let data of map) {
  console.log(data);
}
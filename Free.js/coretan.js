// SYNCHRONOUS
function tugasLama() {
  // Simulasi tugas yang memakan waktu lama
  let start = new Date().getTime();
  while (new Date().getTime() - start < 5000); // Tunggu 5 detik
  console.log("Tugas lama selesai");
}

console.log("Tugas 1 dimulai");
tugasLama();
console.log("Tugas 2 dimulai");



// ASYNCHRONOUS
console.log("Tugas 1 dimulai");

setTimeout(() => {
  console.log("Tugas 2 dimulai (dalam 2 detik)");
}, 2000);

console.log("Tugas 3 dimulai");



// PROMISE
const janji = new Promise((resolve, reject) => {
  // Simulasi tugas asycnhronous
  let berhasil = true;

  if (berhasil) {
    resolve("Janji ditepati");
  } else {
    reject("Janji gagal");
  }
});

janji
  .then((hasil) => {
    console.log(hasil); 
  })
  .catch((error) => {
    console.error(error);
  });



  // ASYNCHRONOUS FETCHING DATA
  function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let sukses = true;
        if (sukses) {
          resolve("Data berhasil diambil");
        } else {
          reject("Gagal mengambil data");
      }
    }, 2000);
  })
}

fetchData()
  .then((data) => {
    console.log(data); 
  })
  .catch((error) => {
    console.error(error);
  })



  // ASYNC/AWAIT
  function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let sukses = true;
        if (sukses) {
          resolve("Data berhasil diambil");
        } else {
          reject("Gagal mengambil data");
        }
      }, 2000);
    });
  }
  
  async function getData() {
    try {
      const hasil = await fetchData();
      console.log(hasil); 
    } catch (error) {
      console.error(error); 
    }
  }
  
  getData();
  


///////////////
// LINKED LIST
//////////////

// Singly List

  class Node {
    constructor(data) {
      this.data = data; // Data dari node
      this.next = null; // Pointer ke node berikutnya
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null; // Awalnya, linked list kosong
    }
  
    // Menambah node baru di akhir linked list
    append(data) {
      const newNode = new Node(data);
  
      // Jika linked list kosong
      if (!this.head) {
        this.head = newNode;
        return;
      }
  
      // Cari node terakhir
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
  
      // Set node terakhir menunjuk ke node baru
      current.next = newNode;
    }
  
    // Menampilkan semua data di linked list
    display() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  
    // Menghapus node berdasarkan nilai data
    delete(data) {
      if (!this.head) return;
  
      // Jika node yang akan dihapus adalah head
      if (this.head.data === data) {
        this.head = this.head.next;
        return;
      }
  
      let current = this.head;
      while (current.next && current.next.data !== data) {
        current = current.next;
      }
  
      // Jika node ditemukan, hapus node tersebut
      if (current.next) {
        current.next = current.next.next;
      }
    }
  }
  
  // Penggunaan LinkedList
  const list = new LinkedList();
  list.append(10);
  list.append(20);
  list.append(30);
  
  console.log("Data di LinkedList:");
  list.display(); // Output: 10 20 30
  
  list.delete(20);
  console.log("Setelah menghapus 20:");
  list.display(); // Output: 10 30
  


// Doubly Link List
class Node {
  constructor(data) {
    this.data = data;   // Data dari node
    this.next = null;   // Pointer ke node berikutnya
    this.prev = null;   // Pointer ke node sebelumnya
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;   // Pointer ke node pertama
    this.tail = null;   // Pointer ke node terakhir
  }

  // Menambahkan node baru di akhir list
  append(data) {
    const newNode = new Node(data);

    // Jika list kosong
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    // Tambahkan node baru di akhir list
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode; // Update tail menjadi node terakhir
  }

  // Menampilkan semua node dari depan ke belakang
  displayForward() {
    let current = this.head;
    console.log("List from head to tail:");
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  // Menampilkan semua node dari belakang ke depan
  displayBackward() {
    let current = this.tail;
    console.log("List from tail to head:");
    while (current) {
      console.log(current.data);
      current = current.prev;
    }
  }

  // Menghapus node berdasarkan data
  delete(data) {
    if (!this.head) return;

    let current = this.head;

    // Cari node yang berisi data yang akan dihapus
    while (current && current.data !== data) {
      current = current.next;
    }

    if (!current) {
      console.log(`Node dengan data ${data} tidak ditemukan.`);
      return;
    }

    // Jika node yang akan dihapus adalah head
    if (current === this.head) {
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      }
    }

    // Jika node yang akan dihapus adalah tail
    if (current === this.tail) {
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      }
    }

    // Jika node yang akan dihapus ada di tengah-tengah
    if (current.prev) {
      current.prev.next = current.next;
    }
    if (current.next) {
      current.next.prev = current.prev;
    }

    console.log(`Node dengan data ${data} berhasil dihapus.`);
  }
}

// Penggunaan Doubly Linked List
const dll = new DoublyLinkedList();
dll.append(10);
dll.append(20);
dll.append(30);

console.log("Menampilkan List dari depan ke belakang:");
dll.displayForward();  // Output: 10 20 30

console.log("Menampilkan List dari belakang ke depan:");
dll.displayBackward(); // Output: 30 20 10

dll.delete(20);
console.log("Setelah menghapus node dengan data 20:");

dll.displayForward();  // Output: 10 30
dll.displayBackward(); // Output: 30 10

///////////////////
// ADD TWO NUMBERS   (Medium)
//////////////////

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {
    let dummy = new ListNode(); // Dummy node untuk hasil akhir
    let current = dummy;
    let carry = 0;

    // Iterasi selama ada node di l1 atau l2 atau masih ada carry
    while (l1 || l2 || carry) {
        // Ambil nilai dari node l1 dan l2, jika ada. Jika tidak ada, gunakan 0
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        
        // Hitung total nilai node l1 + l2 + carry
        let total = val1 + val2 + carry;
        
        // Update carry untuk iterasi berikutnya
        carry = Math.floor(total / 10);
        
        // Buat node baru dengan digit hasil (total mod 10)
        current.next = new ListNode(total % 10);
        
        // Pindah ke node berikutnya
        current = current.next;
        
        // Lanjutkan ke node berikutnya di l1 dan l2 jika ada
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    // Kembalikan hasil yang dimulai dari dummy.next
    return dummy.next;
}

//////////////////////
// ZIG ZAG CONVERSION   (Medium)
/////////////////////

function convert(s, numRows) {
    if (numRows === 1) return s; // Jika numRows = 1, langsung kembalikan string asli

    // Array untuk menampung setiap baris hasil zigzag
    let rows = new Array(Math.min(numRows, s.length)).fill('');
    let currentRow = 0; // Baris yang sedang diisi
    let goingDown = false; // Penanda arah (atas atau bawah)

    // Iterasi setiap karakter dalam string
    for (let char of s) {
        rows[currentRow] += char; // Tambahkan karakter ke baris yang sesuai

        // Ubah arah jika mencapai baris pertama atau terakhir
        if (currentRow === 0 || currentRow === numRows - 1) goingDown = !goingDown;

        // Pindah ke baris berikutnya (ke atas atau bawah)
        currentRow += goingDown ? 1 : -1;
    }

    // Gabungkan semua baris menjadi satu string
    return rows.join('');
}
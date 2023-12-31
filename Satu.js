function changeWord(selectedText, changedText, text) {
  // Memecah teks menjadi array kata-kata menggunakan spasi sebagai pemisah
  const kata = text.split(' ');

  // Menggunakan metode map untuk membuat array baru dengan kata-kata yang mungkin diubah
  const hasil = kata.map((kata) => (kata === selectedText ? changedText : kata));

  // Menggabungkan kembali array kata-kata menjadi teks menggunakan spasi sebagai pemisah
  return hasil.join(' ');
}

const kalimat1 = 'Andini sangat mencintai kamu selamanya';
const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu';

// Mengganti kata 'mencintai' dengan 'membenci' dalam kalimat1
console.log(changeWord('Mencintai', 'Membenci', kalimat1));

// Mengganti kata 'bromo' dengan 'semeru' dalam kalimat2
console.log(changeWord('bromo', 'semeru', kalimat2));

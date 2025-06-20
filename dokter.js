function tambahDokter() {
  const nama = document.getElementById('nama').value;
  const spesialis = document.getElementById('spesialis').value;
  db.collection('dokter').add({ nama, spesialis });
  alert('Dokter ditambahkan');
}
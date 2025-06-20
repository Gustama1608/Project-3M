function tambahRekam() {
  const nama = document.getElementById('nama').value;
  const diagnosa = document.getElementById('diagnosa').value;
  const tindakan = document.getElementById('tindakan').value;
  db.collection('rekam_medis').add({ nama, diagnosa, tindakan });
  alert('Rekam medis disimpan');
}
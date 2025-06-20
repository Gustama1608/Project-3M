const data = [
  {
    nama: "Andi Wijaya",
    penyakit: "Asma Akut",
    ruangan: "Flamboyan 101",
  },
  {
    nama: "Siti Nurhaliza",
    penyakit: "Infeksi Saluran Kemih",
    ruangan: "Melati 302",
  },
  {
    nama: "Budi Santoso",
    penyakit: "Demam Berdarah",
    ruangan: "Merpati 204",
  },
];

function tampilkanData() {
  const index = document.getElementById("pasien").value;
  const el = document.getElementById("dataPasien");

  if (index === "") {
    el.innerHTML = `
      <p><strong>Nama:</strong> -</p>
      <p><strong>Penyakit:</strong> -</p>
      <p><strong>Ruangan:</strong> -</p>
    `;
  } else {
    const pasien = data[index];
    el.innerHTML = `
      <p><strong>Nama:</strong> ${pasien.nama}</p>
      <p><strong>Penyakit:</strong> ${pasien.penyakit}</p>
      <p><strong>Ruangan:</strong> ${pasien.ruangan}</p>
    `;
  }
}

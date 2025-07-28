function playMusic() {
  alert('Musik luar angkasa diputar! (demo)');
}
document.getElementById('pesanForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const nama = document.getElementById('nama').value;
  const pesan = document.getElementById('pesan').value;
  document.getElementById('hasilPesan').innerHTML = `<p><strong>${nama}:</strong> ${pesan}</p>`;
  this.reset();
});
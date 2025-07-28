// Sistem audio global
const audio = new Audio();
audio.loop = true;

// Fungsi untuk mengganti lagu
window.changeSong = (songPath) => {
  audio.src = songPath;
  localStorage.setItem('currentSong', songPath);
  audio.play().catch(e => console.log("Butuh interaksi untuk memulai audio"));
};

// Fungsi untuk memutar/menjeda
window.togglePlay = () => {
  if (audio.paused) audio.play();
  else audio.pause();
};

// Load lagu yang dipilih sebelumnya
document.addEventListener('DOMContentLoaded', () => {
  const savedSong = localStorage.getItem('currentSong');
  if (savedSong) {
    audio.src = savedSong;
    audio.play().catch(e => console.log("Audio akan mulai setelah interaksi"));
  }
  
  // Tombol kontrol audio
  const audioControls = document.createElement('div');
  audioControls.innerHTML = `
    <button onclick="togglePlay()" style="
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 1000;
      background: cyan;
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      cursor: pointer;
    ">${audio.paused ? '▶' : '⏸'}</button>
  `;
  document.body.appendChild(audioControls);
});

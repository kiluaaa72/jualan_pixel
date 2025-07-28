// Form Ucapan
const form = document.getElementById('ucapanForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('successMessage').classList.remove('hidden');
    form.reset();
  });
}

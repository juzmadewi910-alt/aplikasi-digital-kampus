const form = document.getElementById('krsForm');
const course = document.getElementById('course');
const className = document.getElementById('className');
const rows = document.getElementById('krsRows');
const message = document.getElementById('message');
const totalSks = document.getElementById('totalSks');
const totalMk = document.getElementById('totalMk');
let selectedCourses = [];

function renderKrs() {
  if (selectedCourses.length === 0) {
    rows.innerHTML = '<tr><td colspan="5" class="empty">Belum ada mata kuliah yang dipilih.</td></tr>';
  } else {
    rows.innerHTML = selectedCourses.map((item, index) =>
      `<tr><td>${index + 1}</td><td>${item.name}</td><td>${item.className}</td><td>${item.sks}</td><td><button class="remove" data-index="${index}" type="button">Hapus</button></td></tr>`
    ).join('');
  }
  totalMk.textContent = selectedCourses.length;
  totalSks.textContent = selectedCourses.reduce((sum, item) => sum + item.sks, 0);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!course.value) {
    message.textContent = 'Silakan pilih mata kuliah terlebih dahulu.';
    return;
  }
  const [name, sksText] = course.value.split('|');
  if (selectedCourses.some(item => item.name === name)) {
    message.textContent = 'Mata kuliah tersebut sudah ada di KRS.';
    return;
  }
  selectedCourses.push({ name, sks: Number(sksText), className: className.value });
  message.textContent = `${name} berhasil ditambahkan ke KRS (simulasi).`;
  course.value = '';
  renderKrs();
});

rows.addEventListener('click', (event) => {
  if (event.target.matches('[data-index]')) {
    const index = Number(event.target.dataset.index);
    selectedCourses.splice(index, 1);
    message.textContent = 'Mata kuliah dihapus dari KRS.';
    renderKrs();
  }
});
renderKrs();

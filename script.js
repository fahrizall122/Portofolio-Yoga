// Fungsi untuk menampilkan sidebar
function tampilSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('active');
}

// Fungsi untuk menyembunyikan sidebar
function hilangSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('active');
}

// Event listener untuk tombol hamburger
const hamburgerButton = document.querySelector('.hamenu');
hamburgerButton.addEventListener('click', tampilSidebar);

// Event listener untuk tombol close pada sidebar
const closeButton = document.querySelector('.close-menu a');
closeButton.addEventListener('click', hilangSidebar);

// Menunggu seluruh elemen HTML selesai dimuat sebelum menjalankan interaksi.
document.addEventListener("DOMContentLoaded", () => {
  // Mengambil tombol menu dan area navigasi.
  const menuToggle = document.getElementById("menuToggle");
  const navigation = document.getElementById("navigation");

  // Membuka atau menutup menu navigasi pada layar HP.
  menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
  });

  // Menutup menu setelah salah satu tautan navigasi dipilih.
  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Buka menu");
    });
  });

  // Menampilkan tahun saat ini secara otomatis di bagian footer.
  document.getElementById("currentYear").textContent = new Date().getFullYear();
});

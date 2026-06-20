// Inisialisasi AOS
AOS.init({
    duration: 1000,
    once: true
});

// Elemen
const openBtn = document.getElementById("openInvitation");
const music = document.getElementById("bgMusic");

// Buka undangan + musik
openBtn.addEventListener("click", () => {

    // Putar musik
    music.play().catch(() => {
        console.log("Autoplay diblokir browser");
    });

    // Scroll ke isi undangan
    document.getElementById("content").scrollIntoView({
        behavior: "smooth"
    });

});

// Efek muncul saat halaman selesai dimuat
window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

// Efek navbar future ready
window.addEventListener("scroll", () => {

    const scrollTop = window.pageYOffset;

    document.documentElement.style.setProperty(
        "--scroll",
        scrollTop
    );

});
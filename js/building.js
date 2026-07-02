const mainImage = document.querySelector(".main-building-image img");
const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeBtn = document.querySelector(".close");
const nextBtn = document. querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

function showImage(index) {
    lightbox.style.display = "flex";
    lightboxImage.src = galleryImages[index].src;
    currentIndex = index;
}

galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
        showImage(index);
    });
});

if (mainImage) {
    mainImage.addEventListener("click", () => {
        showImage(0);
    });
}

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    showImage(currentIndex);
});

prevBtn.addEventListener("click", () => {
    currentIndex =
        (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage(currentIndex);
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

document.addEventListener("keydown", (e) => {
    if (lightbox.style.display !== "flex") return;

    if (e.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        showImage(currentIndex);
    }

    if (e.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        showImage(currentIndex);
    }

    if (e.key === "Escape") {
        lightbox.style.display = "none";
    }
});
let currentIndex = 0;
let galleryItems = [];

function openLightbox(img) {
  const images = Array.from(document.querySelectorAll(".gallery img"))
    .filter(i => i.style.display !== "none");

  galleryItems = images;
  currentIndex = images.indexOf(img);

  document.getElementById("lightbox").style.display = "block";
  document.getElementById("lightbox-img").src = img.src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  document.getElementById("lightbox-img").src = galleryItems[currentIndex].src;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  document.getElementById("lightbox-img").src = galleryItems[currentIndex].src;
}

function filterImages(category) {
  const images = document.querySelectorAll(".gallery-item");
  images.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}

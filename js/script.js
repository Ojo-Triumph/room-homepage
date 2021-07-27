const img = document.querySelectorAll('.header__image-slider figure img');
const imgActive = document.querySelector(".header__image-slider figure img.active");
const nextBtn = document.querySelector('#Next');
const previousBtn = document.querySelector("#Previous");

let activeImageIndex = 0;

function nextImageHandler(e) {
    e.preventDefault();
    activeImageIndex = ++activeImageIndex;
    if (activeImageIndex >= 3) {
        activeImageIndex = 0;
        img[activeImageIndex + 2].classList.remove("active");
        img[activeImageIndex].classList.add("active");
    } else {
        img[activeImageIndex - 1].classList.remove("active");
        img[activeImageIndex].classList.add('active');
    }
}

function previousImageHandler(e) {
    e.preventDefault();
    activeImageIndex = --activeImageIndex;
    if (activeImageIndex < 0) {
        activeImageIndex = 2;
        img[activeImageIndex - 2].classList.remove("active");
        img[activeImageIndex].classList.add("active");
    } else {
        img[activeImageIndex + 1].classList.remove("active");
        img[activeImageIndex].classList.add("active");
    }
}

nextBtn.addEventListener('click', nextImageHandler)
previousBtn.addEventListener("click", previousImageHandler);
const nextBtn = document.querySelector('#Next');
const previousBtn = document.querySelector("#Previous");
const carousel = document.querySelectorAll('#carousel');

let styleMarginRight = 0;

function nextImageHandler(e) {
    e.preventDefault();

    if(styleMarginRight >= 0){
        styleMarginRight += 100;
        
        carousel[0].style.right = `${styleMarginRight}%`;
    }
    if(styleMarginRight > 200){
        styleMarginRight = 0;
        
        carousel[0].style.right = `${styleMarginRight}%`;
    }
}

function previousImageHandler(e) {
    e.preventDefault();
    if (styleMarginRight >= 0) {
      styleMarginRight -= 100;
      carousel[0].style.right = `${styleMarginRight}%`;
    }
    if (styleMarginRight < 0) {
      styleMarginRight += 300;
      carousel[0].style.right = `${styleMarginRight}%`;
    }
}

nextBtn.addEventListener('click', nextImageHandler)
previousBtn.addEventListener("click", previousImageHandler);
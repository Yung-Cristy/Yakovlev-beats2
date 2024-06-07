const slides = document.querySelectorAll('.latest-collection-slide');
const btnPrev = document.querySelector('.buttonPrev');
const btnNext = document.querySelector('.buttonNext');
const iconCart = document.querySelector('.cart');

let main_slide = 1;
let itemsInCart = parseInt(localStorage.getItem('itemsInCart')) || 0;

const btnAddInCart = document.querySelector('.main-product-button');

btnAddInCart.addEventListener('click', handlebtnAddInCart)
btnPrev.addEventListener('click', handleClickPrevBtn);
btnNext.addEventListener('click', handleClickNextBtn);
updateCart();



function updateCart () {
    iconCart.textContent = itemsInCart;
}


function handlebtnAddInCart (event) {
    itemsInCart++;
    iconCart.textContent = itemsInCart;
    localStorage.setItem('itemsInCart', itemsInCart.toString());
}
function handleClickPrevBtn (event) {
    slides[main_slide].classList.remove('active');
    if (main_slide != 0) {
        main_slide--;
    }           
    slides[main_slide].classList.add('active')
}

function handleClickNextBtn (event) {
    slides[main_slide].classList.remove('active');
    if (main_slide < slides.length) {
        main_slide++;
    }           
    slides[main_slide].classList.add('active')
}
;
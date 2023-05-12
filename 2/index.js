let offset = 0; // смещение от левого края
const sliderImg = document.querySelector('.slider__img')

document.querySelector('.btn__prev').addEventListener('click', function(){
    offset -= 564;
    if (offset < 0) {
        offset = 1692;
    }
    sliderImg.style.left = -offset + 'px';
});

document.querySelector('.btn__next').addEventListener('click', function(){
    offset += 564;
    if (offset > 1692) {
        offset = 0;
    }
    sliderImg.style.left = -offset + 'px';
});
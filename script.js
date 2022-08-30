let previous = document.getElementById('prev');
let next = document.getElementById('next');
let dots = document.getElementById('dots');
let slides = document.getElementsByClassName('slides');

console.log(slides);

for(let i= 0; i<slides.length; i++){
    dots.innerhtml +="<p class= 'dot'></p>"
}

let dot= document.getElementsByClassName('dot')

let slideIndex = 1;

previous.addEventListener('click', ()=>changeSlide(-1));
next.addEventListener('click', ()=>changeSlide(1));

changeSlide = num => showSlides (slideIndex +=num);


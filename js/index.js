let slideIndex = 1;

const showSlides = (n) => {

  const slides = document.getElementsByClassName("imageslide");
  console.log("number of slides is:", slides.length);

  if( n > slides.length) {
    slideIndex = 1;
  }

  if( n < 1) {
    slideIndex = slides.length;
  }

  for(let i=0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display ="block";
  console.log("my slide position is:", slideIndex - 1);
}

const plusSlides = (n) => {
  showSlides( slideIndex = slideIndex + n);
};

showSlides(slideIndex);

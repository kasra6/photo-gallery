function showSlide(evt){
  slide.forEach(slide => slide.classList.remove("open"));
  this.classList.toggle("open");
  this.classList.toggle("active");
  // this.classList.toggle("active");
  // console.log(evt);
  // this.style.flex = 5;
  // evt.target.children[0].style.top = 0;
  // evt.target.children[2].style.bottom = 0;
}

function activate(evt){
  console.log(evt);
  if (evt.propertyName.includes("flex")){
    this.classList.toggle("active");
  }
}

const slide = document.querySelectorAll(".photo-gallery div");

slide.forEach(slide => slide.addEventListener("click", showSlide));
slide.forEach(slide => slide.addEventListener("transitionend", activate));

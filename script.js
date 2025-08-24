// Testimonials carousel
let testimonials = document.querySelectorAll(".testimonial");
let dots = document.querySelectorAll(".dot");
let currentIndex = 0;

document.querySelector(".next").addEventListener("click", () => {
  changeTestimonial(1);
});

document.querySelector(".prev").addEventListener("click", () => {
  changeTestimonial(-1);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    goToTestimonial(index);
  });
});

function changeTestimonial(direction) {
  testimonials[currentIndex].classList.remove("active");
  dots[currentIndex].classList.remove("active-dot");

  currentIndex = (currentIndex + direction + testimonials.length) % testimonials.length;

  testimonials[currentIndex].classList.add("active");
  dots[currentIndex].classList.add("active-dot");
}

function goToTestimonial(index) {
  testimonials[currentIndex].classList.remove("active");
  dots[currentIndex].classList.remove("active-dot");

  currentIndex = index;

  testimonials[currentIndex].classList.add("active");
  dots[currentIndex].classList.add("active-dot");
}

// Auto slide every 5 seconds
setInterval(() => {
  changeTestimonial(1);
}, 5000);


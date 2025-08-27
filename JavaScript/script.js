
// Toggle nav on hamburger click
// ===== Toggle nav on hamburger click =====
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  // Toggle icon between ☰ and ✖
  hamburger.textContent = navLinks.classList.contains("active") ? "✖" : "☰";
});

// ===== Dropdown toggle on mobile =====
document.querySelectorAll(".dropdown > a").forEach(dropBtn => {
  dropBtn.addEventListener("click", e => {
    if (window.innerWidth <= 768) { // only on mobile
      e.preventDefault(); // stop redirect
      const dropdownMenu = dropBtn.nextElementSibling;
      dropdownMenu.classList.toggle("active");
    }
  });
});


// ===== Testimonials Carousel =====
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;

function showSlide(index){
  slides.forEach((slide,i)=>{
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active-dot', i === index);
  });
}

prevBtn.addEventListener('click', ()=>{
  currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
  showSlide(currentSlide);
});

nextBtn.addEventListener('click', ()=>{
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

dots.forEach((dot,i)=>{
  dot.addEventListener('click', ()=>{
    currentSlide = i;
    showSlide(currentSlide);
  });
});

// Auto slide every 5 seconds
setInterval(()=>{
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
},5000);


// ===== Animated Counters =====
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target') || +counter.innerText;
    const count = +counter.innerText;
    const increment = target / 200; // speed of counting
    if(count < target){
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});




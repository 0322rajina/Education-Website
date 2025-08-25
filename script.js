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

// Contact form validation & submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if(!name || !email || !message){
            alert('Please fill in all fields.');
            return;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailPattern.test(email)){
            alert('Please enter a valid email address.');
            return;
        }
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });

    // FAQ toggle
    faqItems.forEach(item => {
        item.querySelector('.faq-question').addEventListener('click', function() {
            item.classList.toggle('active');
        });
    });

    // Virtual Tour modal
    virtualTourBtn.addEventListener('click', function(e){
        e.preventDefault();
        virtualTourModal.style.display = 'flex';
    });

    closeTourBtn.addEventListener('click', function(){
        virtualTourModal.style.display = 'none';
    });

    window.addEventListener('click', function(e){
        if(e.target === virtualTourModal){
            virtualTourModal.style.display = 'none';
        }
    });
    
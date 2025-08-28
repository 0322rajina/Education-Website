document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const faqItems = document.querySelectorAll('.faq-item');
    const virtualTourBtn = document.getElementById('virtualTourBtn');
    const virtualTourModal = document.getElementById('virtualTourModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    
    // Form submission handling
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const category = document.getElementById('category').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !category || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate form submission
        alert('Thank you for your message! Our team will get back to you within 24 hours.');
        
        // Reset form
        contactForm.reset();
    });
    
    // FAQ toggle functionality
    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
    
    // Virtual Tour button functionality
    virtualTourBtn.addEventListener('click', function(e) {
        e.preventDefault();
        virtualTourModal.style.display = 'flex';
    });
    
    // Close modal when clicking the close button
    closeModalBtn.addEventListener('click', function() {
        virtualTourModal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === virtualTourModal) {
            virtualTourModal.style.display = 'none';
        }
    });
});

// Toggle nav on hamburger click
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

// Read More Toggle
document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const post = btn.closest('.blog-post');
        post.classList.toggle('expanded');
        btn.textContent = post.classList.contains('expanded') ? 'Read Less' : 'Read More';
    });
});

// Live Search Filter
document.getElementById('searchInput').addEventListener('input', function() {
    const search = this.value.toLowerCase();
    document.querySelectorAll('.blog-post').forEach(post => {
        const text = post.querySelector('.card-title').textContent.toLowerCase();
        post.style.display = text.includes(search) ? '' : 'none';
    });
});

// Filter by Category Buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        document.querySelectorAll('.blog-post').forEach(post => {
            if(category === 'All' || post.dataset.category === category) {
                post.style.display = '';
            } else {
                post.style.display = 'none';
            }
        });
    });
});

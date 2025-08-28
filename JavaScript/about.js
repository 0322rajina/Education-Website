 // Initialize AOS (Animate On Scroll) library
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });

  // Stats Counter with IntersectionObserver
  const counters = document.querySelectorAll('.count');
  let counted = false;
  
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting && !counted){
        counted = true;
        counters.forEach(c => {
          const target = +c.dataset.target;
          const dur = 2000;
          const start = performance.now();
          
          const step = t => {
            const p = Math.min(1,(t-start)/dur);
            const val = Math.floor(p*target);
            c.textContent = new Intl.NumberFormat().format(val);
            
            if(p<1) 
              requestAnimationFrame(step);
            else 
              c.textContent = new Intl.NumberFormat().format(target);
          };
          
          requestAnimationFrame(step);
        });
      }
    });
  }, {threshold: 0.3});
  
  const stats = document.getElementById('stats');
  if(stats) obs.observe(stats);

  // Gallery Lightbox Functionality
  const lb = document.getElementById('lightbox');
  const lbImg = lb.querySelector('img');
  
  document.querySelectorAll('.g-item img').forEach(img => {
    img.addEventListener('click', () => {
      lbImg.src = img.src;
      lb.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });
  
  lb.addEventListener('click', e => {
    if(e.target === lb || e.target.closest('.close')) {
      lb.classList.remove('open');
      document.body.style.overflow = 'auto';
    }
  });

  // Testimonials Carousel Functionality
  const track = document.getElementById('track');
  const prev = document.querySelector('.car-btn.prev');
  const next = document.querySelector('.car-btn.next');
  let index = 0;
  
  const move = () => {
    const cards = track.children.length;
    const width = track.children[0].getBoundingClientRect().width + 22;
    const visible = window.innerWidth < 900 ? 1 : 2;
    const maxIndex = Math.max(0, cards - visible);
    
    index = Math.min(Math.max(0, index), maxIndex);
    track.style.transform = `translateX(${-index * width}px)`;
  };
  
  window.addEventListener('resize', move);
  
  next.addEventListener('click', () => {
    index++;
    move();
  });
  
  prev.addEventListener('click', () => {
    index--;
    move();
  });
  
  move();
  
  // Auto-advance carousel
  setInterval(() => {
    const cards = track.children.length;
    const visible = window.innerWidth < 900 ? 1 : 2;
    
    if (index < cards - visible) {
      index++;
    } else {
      index = 0;
    }
    
    move();
  }, 5000);

  // FAQ Accordion Functionality
  document.querySelectorAll('.ac-item').forEach(item => {
    const head = item.querySelector('.ac-head');
    const body = item.querySelector('.ac-body');
    
    head.innerHTML += '<i class="fa-solid fa-plus"></i>';
    
    head.addEventListener('click', () => {
      const open = body.style.maxHeight;
      
      document.querySelectorAll('.ac-body').forEach(b => b.style.maxHeight = null);
      document.querySelectorAll('.ac-head i').forEach(i => i.className = 'fa-solid fa-plus');
      
      if(!open){
        body.style.maxHeight = body.scrollHeight + 'px';
        head.querySelector('i').className = 'fa-solid fa-minus';
      }
    });
  });

  // Header scroll effect
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
      header.style.background = 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)';
    } else {
      header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
      header.style.background = 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)';
    }
  });
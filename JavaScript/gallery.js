document.addEventListener("DOMContentLoaded", () => {
  const slideEls = Array.from(document.querySelectorAll(".hero-item"));
  const thumbs = Array.from(document.querySelectorAll(".thumb"));
  const yearChips = Array.from(document.querySelectorAll(".year-chip"));
  const heroTitle = document.getElementById("heroTitle");
  const playBtn = document.getElementById("heroPlay");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  // Video modal elements
  const videoModal = new bootstrap.Modal(document.getElementById("videoModal"));
  const videoPlayer = document.getElementById("videoPlayer");
  const videoIframe = document.getElementById("videoIframe");

  // Prepare slides array for hero images
  const slides = slideEls
    .map((el) => ({
      el,
      src: el.dataset.src,
      title: el.dataset.title || "",
    }))
    .filter((s) => !!s.src);

  slides.forEach((s) => {
    const img = new Image();
    img.src = s.src;
  });

  let index = 0;
  let timer = null;

  function show(i, firstLoad = false) {
    if (!slides.length) return;
    const prevIndex = index;
    index = (i + slides.length) % slides.length;

    slides.forEach((s, k) => {
      s.el.classList.remove("active", "previous");
      if (!firstLoad && k === prevIndex) s.el.classList.add("previous");
      if (k === index) {
        s.el.style.backgroundImage = `url("${s.src}")`;
        s.el.classList.add("active");
        if (firstLoad) {
          s.el.style.opacity = "1";
          s.el.style.transform = "translateX(0%)";
        }
        if (heroTitle) heroTitle.textContent = s.title;
      }
    });

    thumbs.forEach((t) =>
      t.classList.toggle("active", Number(t.dataset.index) === index)
    );
    yearChips.forEach((c) =>
      c.classList.toggle("active", Number(c.dataset.targetIndex) === index)
    );
  }

  function start() {
    stop();
    timer = setInterval(() => show(index + 1), 4000);
    if (playBtn) playBtn.innerHTML = '<i class="fa fa-pause"></i>';
  }

  function stop() {
    if (timer) clearInterval(timer);
    timer = null;
    if (playBtn) playBtn.innerHTML = '<i class="fa fa-play"></i>';
  }

  show(0, true);
  start();

  if (playBtn)
    playBtn.addEventListener("click", () => (timer ? stop() : start()));
  thumbs.forEach((t) =>
    t.addEventListener("click", () => {
      stop();
      show(Number(t.dataset.index) || 0);
    })
  );
  yearChips.forEach((c) =>
    c.addEventListener("click", () => {
      stop();
      show(Number(c.dataset.targetIndex) || 0);
    })
  );
  if (leftArrow)
    leftArrow.addEventListener("click", () => {
      stop();
      show(index - 1);
    });
  if (rightArrow)
    rightArrow.addEventListener("click", () => {
      stop();
      show(index + 1);
    });

  slides.forEach((s) => {
    s.el
      .querySelectorAll("button, a")
      .forEach((btn) => (btn.style.pointerEvents = "auto"));
  });

  // Video Gallery: play buttons
  const videoBtns = document.querySelectorAll(".play-video");
  videoBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const src = btn.dataset.videoSrc;
      if (!src) return;

      // Check if it is a YouTube link
      if (src.includes("youtube.com") || src.includes("youtu.be")) {
        videoPlayer.style.display = "none";
        videoPlayer.pause();
        videoIframe.style.display = "block";
        videoIframe.src = src.includes("embed") ? src : convertYouTube(src);
      } else {
        videoIframe.style.display = "none";
        videoIframe.src = "";
        videoPlayer.style.display = "block";
        videoPlayer.src = src;
        videoPlayer.play();
      }

      videoModal.show();
    });
  });

  // Stop video when modal closes
  document
    .getElementById("videoModal")
    .addEventListener("hidden.bs.modal", () => {
      videoPlayer.pause();
      videoPlayer.src = "";
      videoIframe.src = "";
    });

  // Convert normal YouTube URL to embed link
  function convertYouTube(url) {
    let videoId = "";
    if (url.includes("youtu.be")) {
      videoId = url.split("/").pop().split("?")[0];
    } else if (url.includes("youtube.com")) {
      const params = new URL(url).searchParams;
      videoId = params.get("v");
    }
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  }
});

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
document.querySelectorAll(".dropdown > a").forEach((dropBtn) => {
  dropBtn.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      // only on mobile
      e.preventDefault(); // stop redirect
      const dropdownMenu = dropBtn.nextElementSibling;
      dropdownMenu.classList.toggle("active");
    }
  });
});

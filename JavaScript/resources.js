// JavaScript for tab functionality in Resources.html
      const tabButtons = document.querySelectorAll(".tab-btn");
      const tabContents = document.querySelectorAll(".tab-content");

      tabButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          // Remove active from buttons
          tabButtons.forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");

          // Show corresponding tab content
          const target = btn.getAttribute("data-tab");
          tabContents.forEach((content) => {
            if (content.id === target) {
              content.classList.add("active");
            } else {
              content.classList.remove("active");
            }
          });
        });
      });
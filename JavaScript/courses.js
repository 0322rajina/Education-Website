
// Course data
const courses = {
  1: {
    title: "Complete Web Development Bootcamp",
    image:
      "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "8 weeks",
    level: "Beginner",
    rating: "4.8 (1,240 reviews)",
    price: {
      current: "$89.99",
      original: "$129.99",
    },
    description:
      "Learn to build modern web applications from scratch using HTML, CSS, JavaScript, React, Node.js, and more. This comprehensive bootcamp will take you from beginner to job-ready developer with hands-on projects and real-world applications.",
    outcomes: [
      "Build responsive websites with HTML5 and CSS3",
      "Create interactive web applications with JavaScript",
      "Develop full-stack applications with React and Node.js",
      "Work with databases and APIs",
      "Deploy applications to cloud platforms",
      "Implement authentication and security best practices",
    ],
  },
  2: {
    title: "Data Science & Machine Learning Fundamentals",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "10 weeks",
    level: "Intermediate",
    rating: "4.7 (980 reviews)",
    price: {
      current: "$94.99",
      original: "$139.99",
    },
    description:
      "Master the fundamentals of data science, statistical analysis, and machine learning algorithms using Python. This course provides a solid foundation in data manipulation, visualization, and predictive modeling.",
    outcomes: [
      "Perform data cleaning and preprocessing",
      "Create data visualizations with Matplotlib and Seaborn",
      "Build machine learning models with Scikit-learn",
      "Understand statistical analysis methods",
      "Work with Jupyter Notebooks and Python data libraries",
      "Evaluate model performance and optimize algorithms",
    ],
  },
  3: {
    title: "Digital Marketing Masterclass",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "6 weeks",
    level: "All Levels",
    rating: "4.9 (2,150 reviews)",
    price: {
      current: "$79.99",
      original: "$119.99",
    },
    description:
      "Learn SEO, social media marketing, content marketing, email campaigns, and analytics to grow any business. This masterclass covers both strategy and practical implementation for digital marketing success.",
    outcomes: [
      "Develop effective SEO strategies",
      "Create engaging social media campaigns",
      "Design conversion-focused email marketing",
      "Analyze marketing performance with Google Analytics",
      "Create content strategies that drive engagement",
      "Optimize conversion rates and ROI",
    ],
  },
  4: {
    title: "UI/UX Design Principles",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "4 weeks",
    level: "Beginner",
    rating: "4.6 (1,870 reviews)",
    price: {
      current: "Free",
      original: "",
    },
    description:
      "Learn the fundamentals of user interface and experience design, including wireframing, prototyping, and usability testing. This course covers both the theoretical principles and practical skills needed to create effective digital experiences.",
    outcomes: [
      "Apply UX research methods to understand user needs",
      "Create wireframes and prototypes",
      "Design intuitive user interfaces",
      "Conduct usability testing sessions",
      "Use design tools like Figma and Adobe XD",
      "Implement accessibility best practices",
    ],
  },
  5: {
    title: "Advanced Python Programming",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "8 weeks",
    level: "Intermediate",
    rating: "4.8 (1,540 reviews)",
    price: {
      current: "$84.99",
      original: "$124.99",
    },
    description:
      "Dive deep into Python programming with advanced topics including decorators, generators, concurrency, and more. This course is designed for those who already know Python basics and want to master advanced concepts and patterns.",
    outcomes: [
      "Master advanced Python syntax and features",
      "Implement decorators and context managers",
      "Work with generators and iterators",
      "Understand concurrency and parallelism",
      "Apply metaprogramming techniques",
      "Build efficient and scalable Python applications",
    ],
  },
  6: {
    title: "iOS & Android App Development",
    image:
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "12 weeks",
    level: "Advanced",
    rating: "4.9 (2,010 reviews)",
    price: {
      current: "$99.99",
      original: "$149.99",
    },
    description:
      "Learn to build native mobile applications for both iOS and Android platforms using modern development tools. This comprehensive course covers everything from UI design to backend integration for mobile apps.",
    outcomes: [
      "Develop native iOS apps with Swift",
      "Build Android apps with Kotlin",
      "Design responsive mobile interfaces",
      "Integrate with RESTful APIs",
      "Implement push notifications",
      "Publish apps to App Store and Google Play",
    ],
  },
};

// DOM Elements
const filterButtons = document.querySelectorAll(".filter-btn");
const courseCards = document.querySelectorAll(".course-card");
const categoryCards = document.querySelectorAll(".category-card");
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-btn");
const viewDetailsButtons = document.querySelectorAll(".view-details");
const modal = document.getElementById("course-modal");
const closeModal = document.querySelector(".close-modal");
const clearFiltersButton = document.querySelector(".clear-filters");
const noResultsMessage = document.querySelector(".no-results");

// Filter functionality
function filterCourses() {
  const activeFilter =
    document.querySelector(".filter-btn.active").dataset.filter;
  const searchTerm = searchInput.value.toLowerCase();
  let visibleCount = 0;

  courseCards.forEach((card) => {
    const categories = card.dataset.category;
    const title = card.dataset.title;
    const matchesFilter =
      activeFilter === "all" || categories.includes(activeFilter);
    const matchesSearch = title.includes(searchTerm);

    if (matchesFilter && matchesSearch) {
      card.style.display = "flex";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  // Show no results message if no courses are visible
  if (visibleCount === 0) {
    noResultsMessage.style.display = "block";
  } else {
    noResultsMessage.style.display = "none";
  }
}

// Event listeners for filter buttons
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    filterCourses();
  });
});

// Event listeners for category cards
categoryCards.forEach((card) => {
  card.addEventListener("click", () => {
    const category = card.dataset.category;

    // Find and activate the corresponding filter button
    filterButtons.forEach((button) => {
      if (button.dataset.filter === category) {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        filterCourses();

        // Scroll to courses section
        document.getElementById("featured-courses").scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});

// Search functionality
searchInput.addEventListener("input", filterCourses);
searchButton.addEventListener("click", filterCourses);

// Clear filters
clearFiltersButton.addEventListener("click", () => {
  filterButtons.forEach((btn) => btn.classList.remove("active"));
  document.querySelector('[data-filter="all"]').classList.add("active");
  searchInput.value = "";
  filterCourses();
});

// Course modal functionality
viewDetailsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const courseId = button.dataset.course;
    const course = courses[courseId];

    if (course) {
      // Populate modal with course data
      document.getElementById("modal-course-image").src = course.image;
      document.getElementById("modal-course-title").textContent = course.title;
      document.getElementById("modal-course-duration").textContent =
        course.duration;
      document.getElementById("modal-course-level").textContent = course.level;
      document.getElementById("modal-course-rating").textContent =
        course.rating;
      document.getElementById("modal-course-price-current").textContent =
        course.price.current;
      document.getElementById("modal-course-price-original").textContent =
        course.price.original;
      document.getElementById("modal-course-description").textContent =
        course.description;

      // Populate outcomes list
      const outcomesList = document.getElementById("modal-course-outcomes");
      outcomesList.innerHTML = "";
      course.outcomes.forEach((outcome) => {
        const li = document.createElement("li");
        li.textContent = outcome;
        outcomesList.appendChild(li);
      });

      // Show modal
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
    }
  });
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

// Close modal when clicking outside
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Initialize courses
filterCourses();
 // Wishlist functionality
const wishlistButtons = document.querySelectorAll('.btn-outline');

wishlistButtons.forEach(button => {
    button.addEventListener('click', () => {
        const courseId = button.getAttribute('data-course-id');
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        if (!wishlist.includes(courseId)) {
            wishlist.push(courseId);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            alert("Course added to wishlist!");
        } else {
            alert("Course is already in your wishlist!");
        }
    });
});

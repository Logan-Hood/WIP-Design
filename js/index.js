// index.js

function login() {
    // Simulate login by navigating to the dashboard page
    window.location.href = "dash.html";
}



$(document).ready(function () {
  // Open the hamburger menu overlay
  $(".hamburger-menu").on("click", function () {
      $(".menu-overlay").addClass("active");
  });

  // Open the profile menu overlay
  $(".profile-icon").on("click", function () {
      $(".profile-overlay").addClass("active");
  });

  // Close any overlay
  $(".close-overlay").on("click", function () {
      $(".menu-overlay, .profile-overlay").removeClass("active");
  });

  // Close the overlay when a link inside the overlay is clicked
  $(".menu-overlay a, .profile-overlay a").on("click", function () {
      $(".menu-overlay, .profile-overlay").removeClass("active");
  });
});







document.querySelectorAll('.switch input').forEach((toggle) => {
  toggle.addEventListener('change', (event) => {
      const isChecked = event.target.checked;
      console.log(`${event.target.id} is now ${isChecked ? "YES" : "NO"}`);
      // You can handle further actions based on the state here
  });
});





const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function updateCarousel(index) {
    items.forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel(currentIndex);
});

// Initialize the first item as active
updateCarousel(currentIndex);

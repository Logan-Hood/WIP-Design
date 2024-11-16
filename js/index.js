// index.js

function login() {
    // Simulate login by navigating to the dashboard page
    window.location.href = "dash.html";
}



$(document).ready(function() {
    // Open the hamburger menu overlay
    $(".hamburger-menu").on("click", function() {
      $(".menu-overlay").fadeIn();
    });
  
    // Open the profile menu overlay
    $(".profile-icon").on("click", function() {
      $(".profile-overlay").fadeIn();
    });
  
    // Close any overlay
    $(".close-overlay").on("click", function() {
      $(".menu-overlay, .profile-overlay").fadeOut();
    });
  
    // Redirect to dashboard (dash.html) after login
    $("form").on("submit", function(e) {
      e.preventDefault();
      window.location.href = "dash.html";
    });
  });
  

// Close overlay when the close button is clicked
document.querySelector('.close-overlay').addEventListener('click', function () {
  document.querySelector('.menu-overlay').style.display = 'none';
});

// Close the overlay when a link inside the overlay is clicked
document.querySelectorAll('.menu-overlay a').forEach(link => {
  link.addEventListener('click', function () {
      document.querySelector('.menu-overlay').style.display = 'none';
  });
});

// Close the overlay when a link inside the profile-overlay is clicked
document.querySelectorAll('.profile-overlay a').forEach(link => {
  link.addEventListener('click', function () {
      document.querySelector('.profile-overlay').style.display = 'none';
  });
});

  

// Close overlay when the close button is clicked
document.querySelector('.close-overlay').addEventListener('click', function () {
  document.querySelector('.menu-overlay').style.display = 'none';
});

// Close the overlay when a link inside the overlay is clicked
document.querySelectorAll('.menu-overlay a').forEach(link => {
  link.addEventListener('click', function () {
      document.querySelector('.menu-overlay').style.display = 'none';
  });
});

// Close the overlay when a link inside the profile-overlay is clicked
document.querySelectorAll('.profile-overlay a').forEach(link => {
  link.addEventListener('click', function () {
      document.querySelector('.profile-overlay').style.display = 'none';
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

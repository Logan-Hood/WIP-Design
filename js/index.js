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





document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const items = document.querySelectorAll(".carousel-item");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button2");
  

  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
    updateCarousel();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const feedbackLink = document.getElementById("view-feedback-link");
  const feedbackOverlay = document.getElementById("feedback-overlay");
  const closeFeedback = document.getElementById("close-feedback");
  const feedbackCarouselItems = feedbackOverlay.querySelectorAll(".carousel-item");
  const feedbackPrevButton = document.getElementById("feedback-prev");
  const feedbackNextButton = document.getElementById("feedback-next");

  let feedbackCurrentIndex = 0;

  // Function to update carousel visibility
  function updateFeedbackCarousel() {
    feedbackCarouselItems.forEach((item, index) => {
      item.classList.toggle("active", index === feedbackCurrentIndex);
    });
  }

  // Show overlay when link is clicked
  feedbackLink.addEventListener("click", (event) => {
    event.preventDefault();
    feedbackOverlay.style.display = "block";
    updateFeedbackCarousel();
  });

  // Hide overlay when close button is clicked
  closeFeedback.addEventListener("click", () => {
    feedbackOverlay.style.display = "none";
  });


  // Navigate to the previous comment
  feedbackPrevButton.addEventListener("click", () => {
    feedbackCurrentIndex =
      (feedbackCurrentIndex - 1 + feedbackCarouselItems.length) % feedbackCarouselItems.length;
    updateFeedbackCarousel();
  });

  // Navigate to the next comment
  feedbackNextButton.addEventListener("click", () => {
    feedbackCurrentIndex = (feedbackCurrentIndex + 1) % feedbackCarouselItems.length;
    updateFeedbackCarousel();
  });

  // Optional: Hide overlay when clicking outside the content
  feedbackOverlay.addEventListener("click", (event) => {
    if (event.target === feedbackOverlay) {
      feedbackOverlay.style.display = "none";
    }
  });
});

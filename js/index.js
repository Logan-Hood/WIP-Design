// index.js

function login() {
  // Simulate login by navigating to the dashboard page
  window.location.href = "dash.html";
}









// hamburger menu and profile menu overlay functions

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

























//  Carousels for post.html
//  Carousels for first carousel
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const items = document.querySelectorAll(".carousel-item");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  
  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * 100; // Move to the current slide
    carousel.style.transform = `translateX(${offset}%)`;

    // Disable buttons if we're at the start or end
    prevButton.disabled = (currentIndex === 0);
    nextButton.disabled = (currentIndex === 3);
  }

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) { // Only move if not at the first item
      currentIndex -= 1;
      updateCarousel();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentIndex < items.length - 1) { // Only move if not at the last item
      currentIndex += 1;
      updateCarousel();
    }
  });

  // Initialize the carousel position and button state
  updateCarousel();
});









//  Carousels for comment carousel

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









// Progress Bar Functionality

// JavaScript for Progress Bar Functionality
document.addEventListener("DOMContentLoaded", function () {
  const progressCircles = document.querySelectorAll(".progress-circle");
  const progressLine = document.querySelector(".progress-line:before");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");

  let currentStep = 0; // Index of the active progress step

  // Update progress bar visuals
  function updateProgressBar() {
      progressCircles.forEach((circle, index) => {
          if (index <= currentStep) {
              circle.classList.add("active");
          } else {
              circle.classList.remove("active");
          }
      });

      // Calculate and set the progress line width
      const percentage = (currentStep / (progressCircles.length - 1)) * 100;
      progressLine.style.width = `${percentage}%`;
  }

  // Event listeners for buttons
  prevButton.addEventListener("click", function () {
      if (currentStep > 0) {
          currentStep--;
          updateProgressBar();
      }
  });

  nextButton.addEventListener("click", function () {
      if (currentStep < progressCircles.length - 1) {
          currentStep++;
          updateProgressBar();
      }
  });

  // Initialize progress bar
  updateProgressBar();
});

// Add scroll event listener
window.addEventListener("scroll", function () {
  // Get the header element
  const header = document.getElementById("header");

  // Calculate the scroll position
  const scrollPosition = window.scrollY || window.pageYOffset;

  // Define the threshold for the glass effect
  const threshold = 100;

  // Add or remove the glass class based on the scroll position
  if (scrollPosition >= threshold) {
    header.classList.add(
      "bg-opacity-75",
      "backdrop-filter",
      "backdrop-blur-lg",
      "shadow-lg"
    );
  } else {
    header.classList.remove(
      "bg-opacity-75",
      "backdrop-filter",
      "backdrop-blur-lg",
      "shadow-lg"
    );
  }
});

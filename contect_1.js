document.addEventListener("DOMContentLoaded", () => {
    const solutionButton = document.querySelector(".overlay button"); // Selects the button inside the overlay div
  
    if (solutionButton) {
      solutionButton.addEventListener("click", () => {
        // Redirect to the desired webpage
        window.location.href = "https://drive.google.com/drive/home"; // Replace with the blog URL when ready
      });
    }
  });
  
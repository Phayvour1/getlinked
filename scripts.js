document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".toggle-answer");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      answer.classList.toggle("show-answer"); 
      this.textContent = answer.classList.contains("show-answer") ? "-" : "+"; 
    });
  });
});

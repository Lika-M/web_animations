document.addEventListener("DOMContentLoaded", () => {
    const square = document.querySelector(".square");

    const toggleButton = document.querySelector(".toggleBtn");
    toggleButton.addEventListener('click', () => {
        square.classList.toggle("hide");
        if (toggleButton.textContent.startsWith("Hide")) {
            toggleButton.textContent = "Show square"
        } else {
            toggleButton.textContent = "Hide square"
        }

    });
});





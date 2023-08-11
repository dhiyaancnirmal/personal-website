document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.body.style.transform = "rotate(0deg)"; // Reset the body rotation
        const centerBox = document.querySelector(".center-box");
        centerBox.style.transform = "scale(1) rotate(0deg)"; // Reset scale and rotation
    }, 1000); // 1000 milliseconds (1 second)
});
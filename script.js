const textArray = ["Creative Computing Graduate", "Web Developer", "Machine Learning Enthusiast", "Future Cybersecurity Expert"];
let i = 0, j = 0, isDeleting = false, currentText = "";

function type() {
  if (i < textArray.length) {
    if (!isDeleting && j <= textArray[i].length) {
      currentText = textArray[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentText = textArray[i].substring(0, j--);
    }

    document.getElementById("typing-text").textContent = currentText;

    if (j === textArray[i].length) isDeleting = true;
    if (j === 0 && isDeleting) {
      isDeleting = false;
      i = (i + 1) % textArray.length;
    }

    // slower typing effect
    setTimeout(type, isDeleting ? 120 : 180);
  }
}
window.onload = type;

// Mobile nav toggle
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('navList').classList.toggle('show');
});

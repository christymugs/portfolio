document.addEventListener("DOMContentLoaded", function () {
    const heroTitle = document.querySelector(".fade-in");
    if (heroTitle) heroTitle.classList.add("visible");

    const elements = document.querySelectorAll('.slide-up');
    setTimeout(() => {
        elements.forEach(element => {
            element.classList.add('visible');
        });
    }, 100); // Ensure this timing is appropriate
});

const typewriterElement = document.getElementById('typewriter');
const texts = [
    "a Software Developer.",
    "a Web Designer.",
    "a Problem Solver.",
    "a Tech Enthusiast.",
    "a Creative Thinker.",
    "a Data Analyst.",
    "an Avid Reader",
    "an Innovator.",
    "a Digital Creator.",
    "a Tech Wizard.",
    "a UX/UI Designer.",
    "a Code Crafter.",
    "a Technology Advocate.",
    "a Future Builder.",
    "a Programming Aficionado.",
    "a Front-End Developer.",
    "a Back-End Developer.",
    "a Full-Stack Developer.",
    "a Mobile App Developer."
];

let index = 0;
let charIndex = 0;
let isDeleting = false;
let currentText = "";
let typingSpeed = 150;
let deletingSpeed = 100;

function typeWriter() {
    const fullText = texts[index];

    if (!isDeleting && charIndex <= fullText.length) {
        currentText = fullText.substring(0, charIndex);
        charIndex++;
        typewriterElement.innerHTML = currentText;
    } else if (isDeleting && charIndex >= 0) {
        currentText = fullText.substring(0, charIndex);
        charIndex--;
        typewriterElement.innerHTML = currentText;
    }

    if (charIndex === fullText.length && !isDeleting) {
        setTimeout(() => { isDeleting = true; }, 1000);
    } else if (charIndex === 0 && isDeleting) {
        isDeleting = false;
        index = (index + 1) % texts.length;
    }

    setTimeout(typeWriter, isDeleting ? deletingSpeed : typingSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    typeWriter();
});

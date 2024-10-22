// Scroll Progress Bar
window.onscroll = function() {
    let progressBar = document.getElementById("scroll-progress");
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    let progress = (window.pageYOffset / totalHeight) * 100;
    progressBar.style.width = progress + "%";
};

// Typing Effect for Summary
const textArray = [
    "I'm Cletus Ayeboo Abugre, a dedicated entrepreneur and software engineering student.",
    "I'm passionate about using technology to solve real-world problems.",
    "I aim to modernize my family's shea butter business and empower women in Ghana."
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;
const typedText = document.getElementById("typed-text");

function type() {
    currentText = isDeleting
        ? textArray[i].substring(0, j--)
        : textArray[i].substring(0, j++);
    
    typedText.innerHTML = currentText;

    if (!isDeleting && j === textArray[i].length) {
        setTimeout(() => (isDeleting = true), 1000);
    } else if (isDeleting && j === 0) {
        i = (i + 1) % textArray.length;
        isDeleting = false;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", () => {
    type();

    // Fade-in effect on scroll
    const sections = document.querySelectorAll(".fade-section");
    const fadeInOnScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop <= window.innerHeight - 100) {
                section.classList.add("visible");
            }
        });
    };
    window.addEventListener("scroll", fadeInOnScroll);
});

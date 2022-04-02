export function addResume(pdf) {
  if (!pdf) return;

  const resumeButton = document.querySelector(".cta-btn--resume");
  resumeButton.setAttribute("href", pdf);
}

const bunny = document.getElementById('bunny');

function move() {
    const incrementer = window.scrollY;
    bunny.style.marginLeft = 40 + incrementer * -0.13 + '%';
}

window.addEventListener('scroll', move);
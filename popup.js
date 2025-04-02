document.addEventListener('DOMContentLoaded', () => {
  const aboutBtn = document.getElementById('about-btn');
  const aboutSection = document.getElementById('about-section');

  aboutBtn.addEventListener('click', () => {
    if (aboutSection.style.display === 'none') {
      aboutSection.style.display = 'block';
      aboutBtn.textContent = "Hide About Me";
    } else {
      aboutSection.style.display = 'none';
      aboutBtn.textContent = "About Me";
    }
  });
});

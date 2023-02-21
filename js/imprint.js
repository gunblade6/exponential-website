const content = document.querySelectorAll(`section *`);
const background = document.querySelector(`.background`);
window.onclick = function (e) {
  if (e.target.classList.contains(`goHome`)) {
    content.forEach((e) => (e.style.opacity = `0`));
    background.style.cssText = `opacity: 1;`;
    setTimeout(() => {
      location.href = `../`;
    }, 500);
  }
};

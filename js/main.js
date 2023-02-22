const imprintButton = document.getElementById(`imprint`);
const sections = document.querySelectorAll(`section`);
const footer = document.querySelector(`footer`);
const mainElement = document.querySelector(`main`);

imprintButton.addEventListener(`click`, () => {
  sections.forEach((s) => (s.style.cssText = `opacity: 0;`));
  footer.style.opacity = `0`;
  mainElement.style.backgroundColor = `#fff`;
  setTimeout(() => {
    location.href = `./imprint/index.html`;
  }, 500);
});

// === Accordion Toggle System ===
const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Toggle this accordion
    btn.classList.toggle("is-open");

    let content = btn.nextElementSibling;

    if (btn.classList.contains("is-open")) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;
    }
  });
});

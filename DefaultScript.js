const accordions = document.querySelectorAll(".accordion");

accordions.forEach(acc => {
  const content = acc.nextElementSibling;

  acc.addEventListener("click", () => {
    const isOpen = acc.classList.toggle("is-open");

    // Auto-close others
    accordions.forEach(other => {
      if (other !== acc) {
        other.classList.remove("is-open");
        other.nextElementSibling.style.maxHeight = 0;
      }
    });

    // Open/close clicked one
    if (isOpen) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = 0;
    }
  });

  // ✅ When iframes load → re-measure height
  const iframes = content.querySelectorAll("iframe");
  iframes.forEach(frame => {
    frame.addEventListener("load", () => {
      if (acc.classList.contains("is-open")) {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});

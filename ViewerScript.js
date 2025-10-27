// === Hologram Boot Initialization ===
window.addEventListener("load", () => {
  const loader = document.getElementById("holo-load");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => { loader.style.display = "none"; }, 1200);
  }

  // Ensure accordion panels are closed on load
  document.querySelectorAll(".accordion-content").forEach(panel => {
    panel.style.maxHeight = null;
  });
});

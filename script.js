// Selecteer alle navigatieknoppen
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll(".collapsible");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    // Activeer alleen de geselecteerde knop
    navLinks.forEach((nav) => nav.classList.remove("active"));
    link.classList.add("active");

    // Toon de gekoppelde sectie en maak deze groter
    const targetId = link.dataset.target;
    sections.forEach((section) => {
      if (section.id === targetId) {
        section.classList.add("expanded");
        section.querySelector(".details").classList.remove("hidden");
        section.querySelector(".summary").style.display = "none";
      } else {
        section.classList.remove("expanded");
        section.querySelector(".details").classList.add("hidden");
        section.querySelector(".summary").style.display = "block";
      }
    });
  });
});

// Glow-effect bij muisbeweging
document.addEventListener("mousemove", (event) => {
  const effect = document.createElement("div");
  effect.className = "effect glow";
  effect.style.left = `${event.pageX}px`;
  effect.style.top = `${event.pageY}px`;
  document.body.appendChild(effect);
  setTimeout(() => effect.remove(), 2000);
});

// nav.js — mobile menu toggle + nav dropdown click handling
// Vanilla ES2022, no dependencies.

(() => {
  // ---- Mobile menu toggle ----
  const toggle = document.querySelector("[data-nav-toggle]");
  const menu = document.querySelector("[data-nav-menu]");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.dataset.open === "true";
      menu.dataset.open = String(!open);
      toggle.setAttribute("aria-expanded", String(!open));
    });

    menu.addEventListener("click", (e) => {
      if (e.target.closest("a")) {
        menu.dataset.open = "false";
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menu.dataset.open === "true") {
        menu.dataset.open = "false";
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  // ---- Nav dropdowns (click toggle on touch / keyboard, hover already CSS) ----
  document.querySelectorAll("[data-dropdown]").forEach((dd) => {
    const trigger = dd.querySelector("[data-dropdown-trigger]");
    const drop = dd.querySelector("[data-dropdown-menu]");
    if (!trigger || !drop) return;

    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const open = drop.dataset.open === "true";
      drop.dataset.open = String(!open);
      trigger.setAttribute("aria-expanded", String(!open));
    });

    document.addEventListener("click", (e) => {
      if (!dd.contains(e.target) && drop.dataset.open === "true") {
        drop.dataset.open = "false";
        trigger.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && drop.dataset.open === "true") {
        drop.dataset.open = "false";
        trigger.setAttribute("aria-expanded", "false");
        trigger.focus();
      }
    });
  });
})();

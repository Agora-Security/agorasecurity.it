// reveal.js — IntersectionObserver-based reveal + KPI count-up
// Vanilla ES2022. Respects prefers-reduced-motion.

(() => {
  const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  // ---- Reveal ----
  const revealTargets = document.querySelectorAll("[data-reveal]");
  if (revealTargets.length && !reduceMotion && "IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.dataset.revealed = "true";
          io.unobserve(entry.target);
        }
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -50px 0px" });

    revealTargets.forEach((el) => io.observe(el));
  } else {
    // No IO or reduced motion → reveal everything
    revealTargets.forEach((el) => { el.dataset.revealed = "true"; });
  }

  // ---- KPI count-up ----
  const kpiValues = document.querySelectorAll("[data-count-to]");
  if (kpiValues.length && !reduceMotion && "IntersectionObserver" in window) {
    const io2 = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target;
        const target = parseInt(el.dataset.countTo, 10);
        if (Number.isNaN(target)) continue;

        const duration = 1100;
        const start = performance.now();
        const startVal = 0;

        function step(now) {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = Math.round(startVal + (target - startVal) * eased).toString();
          if (t < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        io2.unobserve(el);
      }
    }, { threshold: 0.5 });

    kpiValues.forEach((el) => io2.observe(el));
  }
})();

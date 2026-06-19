// 404-typing.js — Typing animation per le 3 righe syslog del 404 +
// progress bar "containment". Caricato solo da templates/404.html.
//
// Comportamento:
// - Per ciascuna <code data-typing-line> dentro pre[data-typing], svuoto
//   il textContent (salvando l'innerHTML originale) e re-injecto carattere
//   per carattere con velocità irregolare 16-40ms.
// - data-delay (ms) determina quando inizia ciascuna riga.
// - Dopo l'ultima riga, anima la progress bar (1.6s verde→ambra).
// - prefers-reduced-motion: bypass totale (lascia il testo statico).

(() => {
  const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  if (reduce) return;

  const container = document.querySelector("pre[data-typing]");
  if (!container) return;
  const lines = container.querySelectorAll("[data-typing-line]");
  if (!lines.length) return;
  const progress = document.querySelector("[data-progress] span");

  // Salva HTML originale e svuota
  const tasks = Array.from(lines).map((el) => {
    const originalHTML = el.innerHTML;
    const delay = parseInt(el.dataset.delay || "0", 10);
    el.innerHTML = "";
    el.style.opacity = "1";
    return { el, originalHTML, delay };
  });

  // Per ciascuna riga, parse l'originale come template DOM così posso
  // emettere i caratteri uno alla volta preservando gli span (log-status, log-action).
  function typeLine(task) {
    return new Promise((resolve) => {
      const template = document.createElement("template");
      template.innerHTML = task.originalHTML;
      const sourceNodes = [];
      // Flatten DOM in sequenza di "atomi" (text char | open-tag | close-tag)
      function walk(node) {
        if (node.nodeType === Node.TEXT_NODE) {
          for (const ch of node.textContent) sourceNodes.push({ type: "char", ch });
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          sourceNodes.push({ type: "open", tag: node.tagName.toLowerCase(), className: node.className });
          node.childNodes.forEach(walk);
          sourceNodes.push({ type: "close" });
        }
      }
      template.content.childNodes.forEach(walk);

      let stack = [task.el];
      let idx = 0;

      function emit() {
        if (idx >= sourceNodes.length) { resolve(); return; }
        const atom = sourceNodes[idx++];
        const top = stack[stack.length - 1];
        if (atom.type === "char") {
          top.appendChild(document.createTextNode(atom.ch));
        } else if (atom.type === "open") {
          const el = document.createElement(atom.tag);
          if (atom.className) el.className = atom.className;
          top.appendChild(el);
          stack.push(el);
        } else if (atom.type === "close") {
          stack.pop();
        }
        const delay = atom.type === "char" ? 16 + Math.random() * 24 : 0;
        setTimeout(emit, delay);
      }
      emit();
    });
  }

  async function run() {
    // Avvia tutte le righe rispettando il loro delay individuale
    const promises = tasks.map((t) => new Promise((res) => {
      setTimeout(() => typeLine(t).then(res), t.delay);
    }));
    await Promise.all(promises);

    // Animazione progress bar "containment" 1.6s
    if (progress) {
      progress.style.transition = "width 1600ms cubic-bezier(0.2, 0.7, 0.2, 1), background-color 1600ms ease";
      progress.style.background = "var(--success, #34c77f)";
      // Force reflow per garantire transition
      progress.offsetWidth;
      progress.style.width = "100%";
      setTimeout(() => {
        progress.style.background = "var(--warning, #ffb547)";
      }, 1600);
    }
  }

  run();
})();

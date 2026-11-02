/* ==========================================================================
   Entre Nós — effects.js (opcional)
   1) Ajusta o tamanho dos títulos dos cartões que não cabem (ex.: palavras
      enormes como AUTOCONHECIMENTO), em vez de quebrá-los no meio.
   2) Inclina levemente os cartões e faz o brilho seguir o ponteiro (só com
      mouse, e respeitando "reduzir movimento").
   Não depende do app.js: observa o documento e age em .deck-phase-title,
   .deck-card-phase e .question-card-game, mesmo quando o app os recria.
   O CSS funciona sem este arquivo; ele só refina.
   ========================================================================== */
(() => {
  "use strict";

  /* 1. Ajuste automático de títulos ----------------------------------------- */
  const MIN_TITLE_PX = 14;
  let fitFrame = 0;

  function fitTitle(el) {
    el.style.fontSize = "";
    el.style.overflowWrap = "normal"; // mede a palavra inteira, sem quebrar
    let size = parseFloat(window.getComputedStyle(el).fontSize);
    while (el.scrollWidth > el.clientWidth + 1 && size > MIN_TITLE_PX) {
      size = Math.max(MIN_TITLE_PX, size - 1);
      el.style.fontSize = `${size}px`;
    }
    el.style.overflowWrap = "";
  }

  function fitAllTitles() {
    window.cancelAnimationFrame(fitFrame);
    fitFrame = window.requestAnimationFrame(() => {
      document.querySelectorAll(".deck-phase-title").forEach(fitTitle);
    });
  }

  fitAllTitles();
  window.addEventListener("resize", fitAllTitles);
  window.addEventListener("load", fitAllTitles);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(fitAllTitles);
  }
  // O app recria os cartões ao trocar de tela: só reage quando entram novos nós.
  new MutationObserver((mutations) => {
    if (mutations.some((m) => m.addedNodes.length)) fitAllTitles();
  }).observe(document.body, { childList: true, subtree: true });

  /* 1b. Carrossel de fases: a roda do mouse rola para os lados ---------------- */
  document.addEventListener(
    "wheel",
    (event) => {
      const box =
        event.target instanceof Element
          ? event.target.closest(".phases-carousel-container")
          : null;
      if (!box || event.ctrlKey) return;
      // Se o usuário já está rolando na horizontal (trackpad), não interfere.
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      const max = box.scrollWidth - box.clientWidth;
      const next = box.scrollLeft + event.deltaY;
      if (max <= 0 || next < -1 || next > max + 1) return;
      event.preventDefault();
      box.scrollLeft = next;
    },
    { passive: false },
  );

  /* 2. Inclinação e brilho que seguem o ponteiro ------------------------------ */
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");
  const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (!canHover.matches || calm.matches) return;

  const TARGETS = ".deck-card-phase, .question-card-game";
  const MAX_TILT = { "deck-card-phase": 7, "question-card-game": 4.5 }; // graus

  let active = null;
  let tiltFrame = 0;

  function reset(el) {
    ["--rx", "--ry", "--mx", "--my"].forEach((name) =>
      el.style.removeProperty(name),
    );
  }

  function tilt(el, clientX, clientY) {
    const box = el.getBoundingClientRect();
    if (!box.width || !box.height) return;
    const x = Math.min(Math.max((clientX - box.left) / box.width, 0), 1);
    const y = Math.min(Math.max((clientY - box.top) / box.height, 0), 1);
    const max = el.classList.contains("question-card-game")
      ? MAX_TILT["question-card-game"]
      : MAX_TILT["deck-card-phase"];

    el.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
    el.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
    el.style.setProperty("--rx", `${((0.5 - y) * max).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${((x - 0.5) * max).toFixed(2)}deg`);
  }

  document.addEventListener(
    "pointermove",
    (event) => {
      if (event.pointerType && event.pointerType !== "mouse") return;
      const el =
        event.target instanceof Element ? event.target.closest(TARGETS) : null;

      if (active && active !== el) reset(active);
      active = el;
      if (!el) return;

      window.cancelAnimationFrame(tiltFrame);
      tiltFrame = window.requestAnimationFrame(() =>
        tilt(el, event.clientX, event.clientY),
      );
    },
    { passive: true },
  );

  // Se o ponteiro sai da janela, o cartão volta ao lugar.
  document.documentElement.addEventListener("pointerleave", () => {
    if (active) reset(active);
    active = null;
  });
})();

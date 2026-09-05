/**
 * Controle de Tamanho de Fonte (Acessibilidade na Topbar)
 * IHC 2026.2 - SEMOB-DF
 */
(function() {
  const STORAGE_KEY = "ihc_font_scale";
  const MIN_SCALE = 0.80; // 80%
  const MAX_SCALE = 1.30; // 130%
  const STEP = 0.10;      // 10%

  function getCurrentScale() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? parseFloat(saved) : 1.0;
  }

  function setScale(scale) {
    const clamped = Math.min(MAX_SCALE, Math.max(MIN_SCALE, Math.round(scale * 100) / 100));
    document.documentElement.style.fontSize = (clamped * 100) + "%";
    localStorage.setItem(STORAGE_KEY, clamped.toString());
    updateButtonStates(clamped);
  }

  function updateButtonStates(scale) {
    const decBtn = document.getElementById("ihc-font-decrease");
    const incBtn = document.getElementById("ihc-font-increase");
    const label = document.getElementById("ihc-font-current-val");

    if (decBtn) decBtn.disabled = scale <= MIN_SCALE;
    if (incBtn) incBtn.disabled = scale >= MAX_SCALE;
    if (label) label.textContent = Math.round(scale * 100) + "%";
  }

  function injectControls() {
    if (document.getElementById("ihc-font-controls")) {
      updateButtonStates(getCurrentScale());
      return;
    }

    const header = document.querySelector(".md-header__inner");
    if (!header) return;

    const palette = header.querySelector("[data-md-component='palette']");

    const controls = document.createElement("div");
    controls.id = "ihc-font-controls";
    controls.className = "ihc-font-controls";
    controls.setAttribute("role", "group");
    controls.setAttribute("aria-label", "Controles de acessibilidade para tamanho do texto");

    controls.innerHTML = `
      <button type="button" id="ihc-font-decrease" class="ihc-font-btn" title="Diminuir tamanho da fonte (A-)" aria-label="Diminuir tamanho da fonte">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <text x="2" y="16" font-size="13" font-weight="bold" fill="currentColor" stroke="none">A</text>
          <line x1="14" y1="13" x2="22" y2="13"></line>
        </svg>
      </button>

      <button type="button" id="ihc-font-reset" class="ihc-font-btn ihc-font-reset" title="Restaurar tamanho padrão da fonte" aria-label="Restaurar tamanho padrão">
        <span id="ihc-font-current-val" class="ihc-font-val">100%</span>
      </button>

      <button type="button" id="ihc-font-increase" class="ihc-font-btn" title="Aumentar tamanho da fonte (A+)" aria-label="Aumentar tamanho da fonte">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <text x="2" y="16" font-size="13" font-weight="bold" fill="currentColor" stroke="none">A</text>
          <line x1="14" y1="13" x2="22" y2="13"></line>
          <line x1="18" y1="9" x2="18" y2="17"></line>
        </svg>
      </button>
    `;

    if (palette && palette.parentNode) {
      palette.parentNode.insertBefore(controls, palette);
    } else {
      header.appendChild(controls);
    }

    document.getElementById("ihc-font-decrease").addEventListener("click", () => {
      setScale(getCurrentScale() - STEP);
    });

    document.getElementById("ihc-font-reset").addEventListener("click", () => {
      setScale(1.0);
    });

    document.getElementById("ihc-font-increase").addEventListener("click", () => {
      setScale(getCurrentScale() + STEP);
    });

    updateButtonStates(getCurrentScale());
  }

  // Aplicar tamanho salvo imediatamente antes do render completo
  const initialScale = getCurrentScale();
  if (initialScale !== 1.0) {
    document.documentElement.style.fontSize = (initialScale * 100) + "%";
  }

  // Suporte à navegação instantânea do Material
  if (typeof document$ !== "undefined") {
    document$.subscribe(injectControls);
  } else {
    document.addEventListener("DOMContentLoaded", injectControls);
  }
})();

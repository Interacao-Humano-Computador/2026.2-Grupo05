(function () {
  var KEY_FONT = "ihc-font";
  var KEY_HC = "ihc-hc";

  function fontSize() {
    return Number(localStorage.getItem(KEY_FONT) || 125);
  }

  function applyFont(size) {
    document.documentElement.style.setProperty("--a11y-font-size", size + "%");
    localStorage.setItem(KEY_FONT, String(size));
    document.querySelectorAll("[data-font]").forEach(function (btn) {
      var dir = btn.getAttribute("data-font");
      btn.title = dir === "+" ? "Aumentar texto (atual " + size + "%)" : "Diminuir texto (atual " + size + "%)";
    });
  }

  function initialHC() {
    var stored = localStorage.getItem(KEY_HC);
    if (stored === "1") return true;
    if (stored === "0") return false;
    return window.matchMedia && window.matchMedia("(prefers-contrast: more)").matches;
  }

  function applyHC(on) {
    document.documentElement.classList.toggle("hc", on);
    localStorage.setItem(KEY_HC, on ? "1" : "0");
    document.querySelectorAll("[data-hc]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(on));
    });
  }

  function mount() {
    var inner = document.querySelector(".md-header__inner");
    if (!inner || inner.querySelector(".a11y-tools")) {
      applyFont(fontSize());
      applyHC(initialHC());
      return;
    }

    var tools = document.createElement("div");
    tools.className = "a11y-tools";
    tools.setAttribute("role", "group");
    tools.setAttribute("aria-label", "Acessibilidade");
    tools.innerHTML =
      '<button type="button" data-font="-" aria-label="Diminuir texto">A−</button>' +
      '<button type="button" data-font="+" aria-label="Aumentar texto">A+</button>' +
      '<button type="button" data-hc aria-pressed="false" aria-label="Alto contraste">Contraste</button>';

    var source = inner.querySelector(".md-header__source");
    if (source) inner.insertBefore(tools, source);
    else inner.appendChild(tools);

    applyFont(fontSize());
    applyHC(initialHC());

    tools.addEventListener("click", function (event) {
      var target = event.target.closest("button");
      if (!target) return;
      if (target.hasAttribute("data-hc")) {
        applyHC(!document.documentElement.classList.contains("hc"));
        return;
      }
      var dir = target.getAttribute("data-font");
      if (!dir) return;
      var next = fontSize();
      next = dir === "+" ? Math.min(170, next + 10) : Math.max(110, next - 10);
      applyFont(next);
    });
  }

  function wrapTables() {
    document.querySelectorAll(".md-typeset table").forEach(function (table) {
      if (table.closest(".ihc-table")) return;
      var wrap = document.createElement("div");
      wrap.className = "ihc-table";
      table.parentNode.insertBefore(wrap, table);
      wrap.appendChild(table);
    });
  }

  function paintHeatmap() {
    if (!/heatmap/.test(window.location.pathname)) return;
    document.querySelectorAll(".md-typeset table td").forEach(function (cell) {
      var value = (cell.textContent || "").trim().toUpperCase();
      cell.classList.remove("hm-l", "hm-p", "hm-x");
      if (value === "L") cell.classList.add("hm-l");
      else if (value === "P") cell.classList.add("hm-p");
      else if (value === "X") cell.classList.add("hm-x");
    });
  }

  function lockPaletteScroll() {
    var form = document.querySelector("[data-md-component='palette']");
    if (!form || form.dataset.ihcScroll) return;
    form.dataset.ihcScroll = "1";
    form.querySelectorAll('label[for^="__palette"]').forEach(function (label) {
      label.addEventListener("click", function (event) {
        event.preventDefault();
        var input = document.getElementById(label.getAttribute("for"));
        if (!input || input.checked) return;
        var y = window.scrollY;
        input.checked = true;
        input.dispatchEvent(new Event("change", { bubbles: true }));
        window.scrollTo(0, y);
        requestAnimationFrame(function () {
          window.scrollTo(0, y);
        });
      });
    });
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(function () {
      mount();
      lockPaletteScroll();
      wrapTables();
      paintHeatmap();
    });
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      mount();
      lockPaletteScroll();
      wrapTables();
      paintHeatmap();
    });
  } else {
    mount();
    lockPaletteScroll();
    wrapTables();
    paintHeatmap();
  }
})();

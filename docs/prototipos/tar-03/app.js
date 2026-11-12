const state = {
  currentScreen: "home",
  activeLine: "092.1",
  gpsOnline: true,
  seconds: 10,
  highContrast: false,
  busStep: 0
};

const SUGGESTIONS = [
  {
    main: "1. SIA Trecho 3 — Setor de Indústria e Abastecimento",
    sub: "Via EPTG • 18,4 km"
  },
  {
    main: "2. SIA Trecho 1 — Feira dos Importados",
    sub: "Via EPTG • 17,9 km"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  setInterval(updateTelemetryClock, 1000);
  const params = new URLSearchParams(window.location.search);
  const view = params.get("view");
  if (view === "autocomplete") {
    const input = document.getElementById("destinationInput");
    if (input) input.value = "SIA";
    handleSearchInput("SIA");
  } else if (view === "routes") {
    selectDestination("1. SIA Trecho 3 — Setor de Indústria e Abastecimento");
  } else if (view === "map") {
    startNavigation("092.1");
  } else if (view === "retention") {
    startNavigation("092.1");
    triggerRetention();
  } else if (view === "offline") {
    startNavigation("092.1");
    triggerOffline();
    openScheduleModal();
  }
});

function updateTelemetryClock() {
  if (!state.gpsOnline) return;

  state.seconds = state.seconds >= 15 ? 2 : state.seconds + 1;

  const statusText = document.getElementById("statusText");
  const mapBusTime = document.getElementById("mapBusTime");

  if (statusText) {
    statusText.textContent = `GPS ao vivo • Atualizado há ${state.seconds}s`;
  }
  if (mapBusTime) {
    mapBusTime.textContent = `Atualizado há ${state.seconds}s`;
  }

  const busMarker = document.getElementById("busMarker");
  if (busMarker && state.currentScreen === "map") {
    state.busStep = (state.busStep + 1) % 7;
    const x = 256 - state.busStep * 3;
    const y = 112 + state.busStep * 1.5;
    busMarker.setAttribute("transform", `translate(${x}, ${y})`);
  }
}

function showToast(text) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = text;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

function toggleContrast() {
  state.highContrast = !state.highContrast;
  document.body.classList.toggle("high-contrast", state.highContrast);
  const btn = document.getElementById("contrastBtn");
  if (btn) {
    btn.setAttribute("aria-pressed", String(state.highContrast));
  }
}

function goToScreen(screenId) {
  state.currentScreen = screenId;
  document.querySelectorAll(".screen").forEach((el) => {
    el.classList.remove("active");
  });
  const target = document.getElementById(`screen-${screenId}`);
  if (target) {
    target.classList.add("active");
  }
}

// TELA 01: Busca Preditiva (W01)
function handleSearchFocus() {
  const input = document.getElementById("destinationInput");
  handleSearchInput(input ? input.value : "");
}

function handleSearchInput(rawVal) {
  const val = rawVal.trim();
  const clearBtn = document.getElementById("clearBtn");
  const list = document.getElementById("autocompleteList");

  if (clearBtn) {
    clearBtn.classList.toggle("visible", val.length > 0);
  }
  if (!list) return;

  const q = val.toLowerCase();
  const filtered = SUGGESTIONS.filter(
    (item) => q === "" || item.main.toLowerCase().includes(q)
  );
  const items = filtered.length > 0 ? filtered : SUGGESTIONS;

  list.innerHTML = items
    .map(
      (item) => `
      <button type="button" class="autocomplete-item" onclick="selectDestination('${item.main}')">
        <span class="ac-main">${item.main}</span>
        <span class="ac-sub">${item.sub}</span>
      </button>
    `
    )
    .join("");

  list.classList.add("open");
}

function clearSearch() {
  const input = document.getElementById("destinationInput");
  const clearBtn = document.getElementById("clearBtn");
  if (input) {
    input.value = "";
    input.focus();
  }
  if (clearBtn) {
    clearBtn.classList.remove("visible");
  }
  handleSearchInput("");
}

function selectDestination(destName) {
  const input = document.getElementById("destinationInput");
  const list = document.getElementById("autocompleteList");
  const headerLabel = document.getElementById("destHeaderLabel");

  if (input) {
    input.value = destName.replace(/^\d+\.\s*/, "");
  }
  if (list) {
    list.classList.remove("open");
  }

  const shortDest = destName.replace(/^\d+\.\s*/, "").split(" — ")[0];
  if (headerLabel) {
    headerLabel.textContent = `Destino: ${shortDest}`;
  }

  goToScreen("routes");
}

// TELA 02: Seleção de Rota
function startNavigation(lineCode) {
  state.activeLine = lineCode;
  resetMapState();
  applyLineToMap(lineCode);
  goToScreen("map");
}

function applyLineToMap(lineCode) {
  const mapBusTitle = document.getElementById("mapBusTitle");
  const mapBusSub = document.getElementById("mapBusSub");
  const stepLineText = document.getElementById("stepLineText");
  const stepEtaText = document.getElementById("stepEtaText");

  if (lineCode === "092.1") {
    if (mapBusTitle) mapBusTitle.textContent = "092.1";
    if (mapBusSub) mapBusSub.textContent = "Chega na parada em 5 min";
    if (stepLineText) stepLineText.textContent = "Embarque na Linha 092.1";
    if (stepEtaText) stepEtaText.textContent = "07h52";
  } else if (lineCode === "0.380") {
    if (mapBusTitle) mapBusTitle.textContent = "0.380";
    if (mapBusSub) mapBusSub.textContent = "Chega na parada em 3 min";
    if (stepLineText) stepLineText.textContent = "Embarque na Linha 0.380 (Alternativa)";
    if (stepEtaText) stepEtaText.textContent = "07h55";
  } else {
    if (mapBusTitle) mapBusTitle.textContent = "0.092";
    if (mapBusSub) mapBusSub.textContent = "Chega na parada em 12 min";
    if (stepLineText) stepLineText.textContent = "Embarque na Linha 0.092";
    if (stepEtaText) stepEtaText.textContent = "08h08";
  }
}

// TELA 03: Zoom e Contingências (W03 e W04)
function setZoom(focusStop) {
  const svg = document.getElementById("mapSvg");
  const btnStop = document.getElementById("btnZoomStop");
  const btnFull = document.getElementById("btnZoomFull");

  if (svg) svg.classList.toggle("zoomed", focusStop);
  if (btnStop) btnStop.classList.toggle("active", focusStop);
  if (btnFull) btnFull.classList.toggle("active", !focusStop);
}

function triggerRetention() {
  const retentionCard = document.getElementById("retentionCard");
  const offlineCard = document.getElementById("offlineCard");
  if (offlineCard) offlineCard.classList.remove("visible");
  if (retentionCard) retentionCard.classList.add("visible");
}

function switchAlternativeRoute() {
  state.activeLine = "0.380";
  const retentionCard = document.getElementById("retentionCard");
  if (retentionCard) retentionCard.classList.remove("visible");
  applyLineToMap("0.380");
  showToast("Rota alterada para a Linha 0.380 (Chegada às 07h55)");
}

function triggerOffline() {
  state.gpsOnline = false;
  const retentionCard = document.getElementById("retentionCard");
  const offlineCard = document.getElementById("offlineCard");
  const statusPill = document.getElementById("statusPill");
  const statusText = document.getElementById("statusText");
  const busCardRect = document.getElementById("busCardRect");
  const mapBusSub = document.getElementById("mapBusSub");
  const mapBusTime = document.getElementById("mapBusTime");

  if (retentionCard) retentionCard.classList.remove("visible");
  if (offlineCard) offlineCard.classList.add("visible");
  if (statusPill) statusPill.classList.add("offline");
  if (statusText) statusText.textContent = "Sem sinal GPS • Horário programado";
  if (busCardRect) busCardRect.setAttribute("stroke", "#6b7280");
  if (mapBusSub) {
    mapBusSub.textContent = "Horário programado: 06h50";
    mapBusSub.setAttribute("fill", "#4b5563");
  }
  if (mapBusTime) mapBusTime.textContent = "Sinal indisponível";
}

function resetMapState() {
  state.gpsOnline = true;
  state.seconds = 2;

  const retentionCard = document.getElementById("retentionCard");
  const offlineCard = document.getElementById("offlineCard");
  const statusPill = document.getElementById("statusPill");
  const statusText = document.getElementById("statusText");
  const busCardRect = document.getElementById("busCardRect");
  const mapBusSub = document.getElementById("mapBusSub");
  const mapBusTime = document.getElementById("mapBusTime");

  if (retentionCard) retentionCard.classList.remove("visible");
  if (offlineCard) offlineCard.classList.remove("visible");
  if (statusPill) statusPill.classList.remove("offline");
  if (statusText) statusText.textContent = "GPS ao vivo • Atualizado há 2s";
  if (busCardRect) busCardRect.setAttribute("stroke", "#15803d");
  if (mapBusSub) {
    mapBusSub.setAttribute("fill", "#15803d");
  }
  if (mapBusTime) mapBusTime.textContent = "Atualizado há 2s";
  applyLineToMap(state.activeLine);
}

function openScheduleModal() {
  const modal = document.getElementById("scheduleModal");
  if (modal) modal.classList.add("open");
}

function closeScheduleModal() {
  const modal = document.getElementById("scheduleModal");
  if (modal) modal.classList.remove("open");
}

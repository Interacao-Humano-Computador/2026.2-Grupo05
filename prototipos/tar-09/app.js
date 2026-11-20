/* =====================================================================
   Protótipo de alta fidelidade — TAR-09
   Fluxo "Meu Vale-Transporte foi recusado" (Tomás Rocho, Grupo 05)

   Telas: T1 home · T2 card · T3 reason · W5 posts · T4 step1 · T5 step2
          T6 step3 · T7 review · T8 done · T9 track
   Estados: E1 foto ilegível · E2 declaração faltando · N1 aviso WhatsApp
   Painel do avaliador: abrir com ?avaliador=1 no endereço.
   ===================================================================== */

const PROTOCOL = "2026-0451";
const CARD_NUMBER = "0042 1873 5560";

const SCREEN_CODES = {
  home: "T1 — Página inicial",
  out: "Fora do escopo",
  card: "T2 — Informar o cartão",
  reason: "T3 — Explicação da recusa",
  posts: "W5 — Postos de atendimento",
  step1: "T4 — Passo 1: rotina",
  step2: "T5 — Passo 2: documentos",
  step3: "T6 — Passo 3: declaração",
  review: "T7 — Revisão",
  done: "T8 — Confirmação",
  track: "T9 — Acompanhar pedido"
};

const VT = "Meu Vale-Transporte foi recusado";
const CRUMBS = {
  home: [],
  out: ["__out__"],
  card: [VT],
  reason: [VT],
  posts: [VT, "Entregar no posto"],
  step1: [VT, "Pedir mais passagens"],
  step2: [VT, "Pedir mais passagens"],
  step3: [VT, "Pedir mais passagens"],
  review: [VT, "Pedir mais passagens"],
  done: [VT, "Pedido enviado"],
  track: [VT, "Acompanhar pedido"]
};

const DOC_LABELS = {
  rg: "RG ou CPF",
  comp: "Comprovante de residência",
  decl: "Declaração do RH assinada"
};

const state = {
  screen: "home",
  outName: "",
  docs: { rg: false, comp: false, decl: false },
  compTries: 0,
  currentDoc: null,
  model: false,
  sent: false,
  approved: false
};

const $ = (id) => document.getElementById(id);

/* ---------------------------------------------------------------------
   Navegação
   --------------------------------------------------------------------- */

function show(screen) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  $("screen-" + screen).classList.add("active");
  state.screen = screen;
  renderBreadcrumb();
  $("scroller").scrollTop = 0;
  window.scrollTo(0, 0);

  if (screen === "review") $("reviewRoutine").textContent = $("routineInput").value.trim();

  logEvent("tela", SCREEN_CODES[screen]);
  if (screen === "reason") autoFinish(0);
  if (screen === "done") autoFinish(1);
  updateEvalScreen();
}

function go(screen) {
  history.pushState({ screen }, "");
  show(screen);
}

function goHome() {
  go("home");
}

function back() {
  history.back();
}

window.addEventListener("popstate", (e) => {
  const screen = e.state && e.state.screen ? e.state.screen : "home";
  show(screen);
});

function renderBreadcrumb() {
  const bc = $("breadcrumb");
  const items = CRUMBS[state.screen].map((c) => (c === "__out__" ? state.outName : c));
  bc.innerHTML = "";

  const all = ["Início", ...items];
  all.forEach((label, i) => {
    if (i > 0) {
      const sep = document.createElement("span");
      sep.className = "sep";
      sep.textContent = ">";
      sep.setAttribute("aria-hidden", "true");
      bc.appendChild(sep);
    }
    const isLast = i === all.length - 1;
    if (isLast) {
      const cur = document.createElement("span");
      cur.className = "current";
      cur.textContent = label;
      cur.setAttribute("aria-current", "page");
      bc.appendChild(cur);
    } else {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = label;
      btn.onclick = () => go(i === 0 ? "home" : "card");
      bc.appendChild(btn);
    }
  });
}

function outOfScope(name) {
  state.outName = name;
  $("outTitle").textContent = name;
  logEvent("desvio", "Abriu \"" + name + "\" (fora do fluxo)");
  countError("desvio para " + name);
  go("out");
}

/* ---------------------------------------------------------------------
   Utilidades
   --------------------------------------------------------------------- */

let toastTimer;
function toast(msg) {
  const t = $("toast");
  t.dataset.msg = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2800);
}

function prefill(el, value) {
  if (!el.value) {
    el.value = value;
    el.classList.remove("invalid");
  }
}

function setError(inputId, errorId, message) {
  const err = $(errorId);
  if (message) {
    err.textContent = message;
    err.hidden = false;
    if (inputId) $(inputId).classList.add("invalid");
  } else {
    err.hidden = true;
    if (inputId) $(inputId).classList.remove("invalid");
  }
}

function toggleFont() {
  const on = document.documentElement.classList.toggle("large");
  $("fontBtn").setAttribute("aria-pressed", String(on));
}

function toggleContrast() {
  const on = document.body.classList.toggle("hc");
  $("contrastBtn").setAttribute("aria-pressed", String(on));
}

/* ---------------------------------------------------------------------
   T2 — Informar o cartão
   --------------------------------------------------------------------- */

function submitCard() {
  const value = $("cardInput").value.trim();
  if (!value) {
    setError("cardInput", "cardError", "Digite o número do cartão para continuar.");
    countError("tentou continuar sem o número do cartão");
    return;
  }
  setError("cardInput", "cardError", null);
  go("reason");
}

/* ---------------------------------------------------------------------
   T4 — Passo 1: rotina
   --------------------------------------------------------------------- */

function submitStep1() {
  const value = $("routineInput").value.trim();
  if (value.length < 10) {
    setError("routineInput", "routineError", "Conte um pouco da sua rotina para continuar.");
    countError("tentou continuar sem descrever a rotina");
    return;
  }
  setError("routineInput", "routineError", null);
  logEvent("dado", "Rotina: " + value);
  go("step2");
}

/* ---------------------------------------------------------------------
   T5 / T6 — Fotos (W2), erro de foto ilegível (E1) e declaração (E2)
   --------------------------------------------------------------------- */

function takePhoto(doc) {
  state.currentDoc = doc;
  $("sheet").hidden = false;
  $("sheetCamera").hidden = false;
  $("sheetPreview").hidden = true;
  setTimeout(showPreview, 700);
}

function showPreview() {
  const doc = state.currentDoc;
  const blurry = doc === "comp" && state.compTries === 0;
  $("photoDoc").textContent = DOC_LABELS[doc];
  $("photo").classList.toggle("blurry", blurry);
  $("sheetCamera").hidden = true;
  $("sheetPreview").hidden = false;
}

function retakePhoto() {
  if (state.currentDoc === "comp" && state.compTries === 0) {
    state.compTries = 1;
    logEvent("foto", "Percebeu na prévia que a foto do comprovante estava ruim e tirou outra");
  }
  takePhoto(state.currentDoc);
}

function usePhoto() {
  const doc = state.currentDoc;
  $("sheet").hidden = true;
  const item = $("doc-" + doc);
  const status = item.querySelector(".doc-status");
  const btn = item.querySelector(".btn-camera");

  if (doc === "comp" && state.compTries === 0) {
    state.compTries = 1;
    item.classList.remove("ok");
    item.classList.add("error");
    status.textContent = "Não conseguimos ler o documento. Tire outra foto com mais luz.";
    btn.textContent = "Tirar outra foto";
    logEvent("E1", "Erro de foto ilegível mostrado (comprovante)");
    return;
  }

  state.docs[doc] = true;
  item.classList.remove("error");
  item.classList.add("ok");
  status.textContent = "Foto enviada ✓";
  btn.textContent = "Trocar foto";
  logEvent("foto", "Foto enviada: " + DOC_LABELS[doc]);

  if (doc === "decl") $("declMissing").hidden = true;
  if (state.screen === "step2") $("step2Error").hidden = true;
}

function submitStep2() {
  const missing = ["rg", "comp"].filter((d) => !state.docs[d]).map((d) => DOC_LABELS[d]);
  if (missing.length) {
    $("step2Error").textContent = "Falta enviar: " + missing.join(" e ") + ".";
    $("step2Error").hidden = false;
    countError("tentou continuar sem " + missing.join(" e "));
    return;
  }
  $("step2Error").hidden = true;
  go("step3");
}

function downloadModel() {
  state.model = true;
  toast("Modelo baixado: declaracao-rh-vale-transporte.pdf");
  const btn = $("modelBtn");
  btn.classList.add("done");
  btn.lastChild.textContent = " Modelo baixado ✓";
  logEvent("modelo", "Baixou o modelo de declaração do RH");
}

function submitStep3() {
  if (!state.docs.decl) {
    $("declMissing").hidden = false;
    $("declMissing").scrollIntoView({ behavior: "smooth", block: "center" });
    logEvent("E2", "Aviso de declaração faltando mostrado");
    countError("tentou revisar sem a declaração do RH");
    return;
  }
  go("review");
}

/* ---------------------------------------------------------------------
   T7 / T8 — Envio e confirmação
   --------------------------------------------------------------------- */

function sendRequest() {
  $("loading").hidden = false;
  logEvent("envio", "Tocou em Enviar pedido");
  setTimeout(() => {
    $("loading").hidden = true;
    state.sent = true;
    go("done");
  }, 1600);
}

function copyProtocol() {
  if (navigator.clipboard) navigator.clipboard.writeText(PROTOCOL).catch(() => {});
  toast("Protocolo " + PROTOCOL + " copiado.");
  logEvent("protocolo", "Copiou o protocolo");
}

/* ---------------------------------------------------------------------
   T9 — Acompanhar pedido (W6) e aviso do WhatsApp (N1)
   --------------------------------------------------------------------- */

function consult() {
  const typed = $("protocolInput").value.replace(/\D/g, "");
  $("statusBox").hidden = true;

  if (!typed) {
    setError("protocolInput", "protocolError", "Digite o número do protocolo para consultar.");
    return;
  }
  if (typed !== PROTOCOL.replace(/\D/g, "") || !state.sent) {
    setError("protocolInput", "protocolError",
      "Não encontramos esse protocolo. Confira o número na tela de confirmação ou na mensagem do WhatsApp.");
    countError("consultou protocolo inexistente");
    return;
  }
  setError("protocolInput", "protocolError", null);
  renderStatus();
  $("statusBox").hidden = false;
  logEvent("consulta", state.approved ? "Viu o pedido aprovado" : "Viu o pedido em análise");
  if (state.approved) autoFinish(2);
}

function renderStatus() {
  const head = $("statusHead");
  const tl = $("timeline");

  if (state.approved) {
    head.innerHTML =
      '<span class="tag ok">Aprovado</span><br>' +
      "Seu novo limite é de <strong>12 passagens por dia</strong> e já está valendo no cartão " + CARD_NUMBER + ".";
    tl.innerHTML =
      '<li class="done">Pedido recebido<small>há 5 dias</small></li>' +
      '<li class="done">Analisado pela SEMOB<small>aprovado há 2 dias</small></li>' +
      '<li class="done">Novo limite ativado no cartão pelo BRB<small>hoje</small></li>' +
      '<li class="done">Novo limite valendo<small>12 passagens por dia</small></li>';
  } else {
    head.innerHTML =
      '<span class="tag wait">Em análise</span><br>' +
      "A SEMOB está analisando o seu pedido. O prazo é de até <strong>5 dias úteis</strong>.";
    tl.innerHTML =
      '<li class="done">Pedido recebido<small>hoje</small></li>' +
      '<li class="now">Em análise pela SEMOB<small>até 5 dias úteis</small></li>' +
      '<li>Novo limite ativado no cartão pelo BRB<small>até 2 dias úteis depois da aprovação</small></li>' +
      '<li>Novo limite valendo<small>vamos te avisar pelo WhatsApp</small></li>';
  }
}

let notifTimer;
function showNotification() {
  $("notif").hidden = false;
  logEvent("N1", "Aviso do WhatsApp mostrado");
  clearTimeout(notifTimer);
  notifTimer = setTimeout(() => {
    if (!$("notif").hidden) {
      $("notif").hidden = true;
      logEvent("N1", "Aviso sumiu sem ser tocado");
    }
  }, 15000);
}

function openNotification() {
  $("notif").hidden = true;
  logEvent("N1", "Tocou no aviso do WhatsApp");
  go("track");
  $("protocolInput").value = PROTOCOL;
  consult();
}

/* ---------------------------------------------------------------------
   Painel do avaliador (?avaliador=1)
   --------------------------------------------------------------------- */

const tasks = [
  { id: "TAR-09.1", name: "Descobrir por que o cartão foi recusado" },
  { id: "TAR-09.2", name: "Pedir mais passagens por dia" },
  { id: "TAR-09.3", name: "Conferir se o pedido foi aprovado" }
].map((t) => ({ ...t, start: null, end: null, result: null, errors: 0, help: 0, miss: 0 }));

const eventLog = [];
let evalOn = false;

function runningTask() {
  return tasks.findIndex((t) => t.start && !t.end);
}

function logEvent(type, detail) {
  const i = runningTask();
  eventLog.push({ time: new Date(), task: i >= 0 ? tasks[i].id : "—", type, detail });
}

function countError(detail) {
  const i = runningTask();
  if (i >= 0) {
    tasks[i].errors++;
    renderEval();
  }
  logEvent("erro", detail);
}

function startTask(i) {
  const r = runningTask();
  if (r >= 0 && r !== i) finishTask(r, "Não concluiu");
  Object.assign(tasks[i], { start: new Date(), end: null, result: null, errors: 0, help: 0, miss: 0 });
  logEvent("tarefa", tasks[i].id + " iniciada");
  renderEval();
  collapseOnPhone();
}

/* No celular, o painel se recolhe para o participante ver a tela inteira */
function collapseOnPhone() {
  const el = $("eval");
  if (window.innerWidth <= 640 && !el.classList.contains("collapsed")) toggleEval();
}

function finishTask(i, result) {
  const t = tasks[i];
  if (!t.start || t.end) return;
  t.end = new Date();
  t.result = result || (t.help > 0 ? "Com ajuda" : "Sem ajuda");
  eventLog.push({ time: t.end, task: t.id, type: "tarefa", detail: t.id + " encerrada: " + t.result });
  renderEval();
}

function autoFinish(i) {
  if (tasks[i].start && !tasks[i].end) finishTask(i);
}

function addHelp(i) {
  if (!tasks[i].start || tasks[i].end) return;
  tasks[i].help++;
  logEvent("ajuda", "Pedido de ajuda");
  renderEval();
}

function addError(i) {
  if (!tasks[i].start || tasks[i].end) return;
  tasks[i].errors++;
  logEvent("erro", "Erro anotado pelo avaliador");
  renderEval();
}

function fmt(ms) {
  const s = Math.max(0, Math.round(ms / 1000));
  return String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
}

function duration(t) {
  if (!t.start) return "--:--";
  return fmt((t.end || new Date()) - t.start);
}

function renderEval() {
  if (!evalOn) return;
  $("evalTasks").innerHTML = tasks.map((t, i) => {
    const cls = t.end ? "finished" : t.start ? "running" : "";
    const status = t.end ? t.result : t.start ? "em andamento" : "não iniciada";
    return (
      '<div class="eval-task ' + cls + '">' +
        '<div class="eval-task-head"><span>' + t.id + '</span><span class="eval-time" id="evalTime' + i + '">' + duration(t) + "</span></div>" +
        "<div>" + t.name + "</div>" +
        '<div class="eval-counts">' + status + " · erros " + t.errors + " · ajudas " + t.help + " · toques fora " + t.miss + "</div>" +
        '<div class="eval-row">' +
          '<button type="button" onclick="startTask(' + i + ')">' + (t.start ? "Reiniciar" : "Iniciar") + "</button>" +
          '<button type="button" onclick="addError(' + i + ')">+ Erro</button>' +
          '<button type="button" onclick="addHelp(' + i + ')">+ Ajuda</button>' +
          '<button type="button" onclick="finishTask(' + i + ", 'Com ajuda')\">Concluiu c/ ajuda</button>" +
          '<button type="button" onclick="finishTask(' + i + ", 'Não concluiu')\">Não concluiu</button>" +
        "</div>" +
      "</div>"
    );
  }).join("");
}

function updateEvalScreen() {
  if (evalOn) $("evalScreen").textContent = SCREEN_CODES[state.screen];
}

function toggleEval() {
  const el = $("eval");
  const collapsed = el.classList.toggle("collapsed");
  el.querySelector(".eval-toggle").setAttribute("aria-expanded", String(!collapsed));
}

function simulateDays() {
  state.sent = true;
  state.approved = true;
  $("protocolInput").value = "";
  $("statusBox").hidden = true;
  setError("protocolInput", "protocolError", null);
  goHome();
  collapseOnPhone();
  logEvent("simulação", "Passaram alguns dias: pedido aprovado");
  setTimeout(showNotification, 1500);
}

function buildLog() {
  const lines = [];
  lines.push("Protótipo TAR-09 — registro da sessão (" + new Date().toLocaleString("pt-BR") + ")");
  lines.push("");
  lines.push(["Tarefa", "Conclusão", "Tempo", "Erros", "Ajudas", "Toques fora"].join("\t"));
  tasks.forEach((t) => {
    lines.push([t.id, t.result || (t.start ? "em andamento" : "não iniciada"), duration(t), t.errors, t.help, t.miss].join("\t"));
  });
  lines.push("");
  lines.push(["Hora", "Tarefa", "Tipo", "Detalhe"].join("\t"));
  eventLog.forEach((e) => {
    lines.push([e.time.toLocaleTimeString("pt-BR"), e.task, e.type, e.detail].join("\t"));
  });
  return lines.join("\n");
}

function copyLog() {
  const text = buildLog();
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(
      () => alert("Registro copiado. Cole numa planilha ou no relato."),
      () => window.prompt("Copie o registro:", text)
    );
  } else {
    window.prompt("Copie o registro:", text);
  }
}

function resetPrototype() {
  if (confirm("Apagar os dados desta sessão e voltar ao início?")) location.reload();
}

/* Toques em áreas que não fazem nada (contam só com tarefa em andamento) */
function trackMisses(e) {
  if (e.target.closest("button, a, input, textarea, select, summary, label, details, .eval")) return;
  const i = runningTask();
  if (i < 0) return;
  tasks[i].miss++;
  logEvent("toque fora", "Tocou em área sem ação (" + SCREEN_CODES[state.screen] + ")");
  renderEval();
}

/* ---------------------------------------------------------------------
   Início
   --------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  history.replaceState({ screen: "home" }, "");
  renderBreadcrumb();
  logEvent("tela", SCREEN_CODES.home);

  evalOn = new URLSearchParams(location.search).get("avaliador") === "1";
  if (evalOn) {
    $("eval").hidden = false;
    if (window.innerWidth <= 640) toggleEval();
    renderEval();
    updateEvalScreen();
    $("phone").addEventListener("click", trackMisses);
    setInterval(() => {
      tasks.forEach((t, i) => {
        const el = $("evalTime" + i);
        if (el && t.start && !t.end) el.textContent = duration(t);
      });
    }, 1000);
  }
});

/* ==========================================================================
   pau.js — ejercicios de selectividad de Análisis (como la herramienta de Programación lineal)
   · Tablas por año, convocatoria y comunidad: funciones y derivadas / integrales.
     Casilla = apartado + dificultad (•, ••, •••) y número del ejercicio.
   · Lista con filtros: apartado, subtipo, qué te preguntan, tipo de función, dificultad,
     comunidad, año y convocatoria. Proyectar con cronómetro.
   · «Hecho», subrayador e impresión de la tabla (solo modo profesora).
   · Página de repaso (data-repaso): selección para el examen, por pregunta y por apartado.
   ========================================================================== */
(function(){
"use strict";
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const CLAVE = "mates:pau-analisis:hechos";
let HECHOS = new Set();
try{ HECHOS = new Set(JSON.parse(localStorage.getItem(CLAVE)) || []); }catch(e){}
const guarda = () => { try{ localStorage.setItem(CLAVE, JSON.stringify([...HECHOS])); }catch(e){} };
const PUNTOS = ["", "•", "••", "•••"], NIVEL = ["", "Básica", "Media", "Alta"];

function arranca(){
  if(!window.PAU) return;
  const {apartados:APT, paginas:PAG, letras:LET, ex:EX} = window.PAU;
  const POR = new Map(EX.map(e => [e.n, e]));
  const FUN = a => a <= 14;
  const SUP = e => ["R1","R2","R3","R4"].includes(e.v) || e.x;
  const convCorta = e => ({ORD:"O",EXT:"E",MOD:"M",R1:"S1",R2:"S2",R3:"S3",R4:"S4"}[e.v] || "·") + (e.x && !String(e.v).startsWith("R") ? "*" : "");
  const titulo = e => `${e.c} · ${e.cv} ${e.y}`;
  const BASE = $("[data-repaso]") ? "selectividad.html" : "";
  let LISTA_ACTUAL = null;

  /* ---------- KaTeX y gráficas en lo que se pinta después ---------- */
  const compone = el => {
    const hazlo = () => { if(window.Mates) Mates.formulas(el); if(window.pintaGrafs) pintaGrafs(el); };
    if(window.katex) hazlo(); else { const t = setInterval(()=>{ if(window.katex){ clearInterval(t); hazlo(); } }, 120); setTimeout(()=>clearInterval(t), 8000); }
  };

  /* ---------- ficha de un ejercicio ---------- */
  const codigo = e => `${e.L.join("-")}${PUNTOS[e.lv]}`;
  function ficha(e, abierta){
    const sol = e.sol ? `<details class="sol pau-sol"${abierta?" open":""}><summary>Solución a mano</summary><article class="hojaex">${e.sol}</article></details>` : "";
    const otro = e.u ? `<a class="pau-otro" href="${esc(e.u)}" target="_blank" rel="noopener">Solución de otro profe <span class="vh">(PDF, se abre en otra pestaña)</span></a>` : "";
    const tema = PAG[e.a] ? `<a class="pau-tema" href="${PAG[e.a]}">Repasa la teoría</a>` : "";
    return `<div class="pau-cab">
        <a class="pau-n" href="${BASE}#e${e.n}" aria-label="Abrir el ejercicio ${e.n}">nº ${e.n}</a>
        <h3>${esc(titulo(e))}${e.st ? ' <span class="pau-estrella" title="Ejercicio destacado">★</span>' : ""} <span class="pau-cod" title="${esc(e.L.map(l => LET[l]).join(", "))} · dificultad ${NIVEL[e.lv].toLowerCase()}">[${codigo(e)}]</span></h3>
        <span class="pau-botones"><button type="button" class="boton fino pau-proy" data-proy="${e.n}">Proyectar</button>${otro}
        <label class="pau-hecho"><input type="checkbox" data-hecho="${e.n}"${HECHOS.has(e.n)?" checked":""}> Hecho</label></span>
      </div>
      ${e.ne ? `<p class="recuadro aviso pau-ne">No entra en la PAU de Andalucía: funciones trigonométricas.</p>` : ""}
      <div class="pau-enun">${e.b}</div>
      <p class="pau-etq"><span class="pau-nivel n${e.lv}">${PUNTOS[e.lv]} ${NIVEL[e.lv]}</span><span class="pau-ap">${e.a}. ${esc(APT[e.a])}</span>${e.s ? `<span class="pau-sub">${esc(e.s)}</span>` : ""}${e.f.map(t => `<span class="pau-tag">${esc(t)}</span>`).join("")}<span class="pau-cv">${esc(e.k)} en el documento de apartados</span></p>
      <p class="pau-acc">${tema}</p>${sol}`;
  }

  /* ---------- progreso ---------- */
  function progreso(){
    $$("input[data-hecho]").forEach(i => { i.checked = HECHOS.has(+i.dataset.hecho); });
    $$(".pau-chip[data-n]").forEach(c => c.classList.toggle("hecho", HECHOS.has(+c.dataset.n)));
    $$("li[data-k]").forEach(li => li.classList.toggle("hecho", HECHOS.has(+li.dataset.n)));
    const r = $("#rep-llevas");
    if(r){ const xs = $$("#rep-seleccion li[data-k]").map(li => +li.dataset.n).filter(Boolean); const k = xs.filter(n => HECHOS.has(n)).length;
      r.textContent = `Llevas ${k} de ${xs.length}`; $("#rep-barra").style.width = (xs.length ? 100*k/xs.length : 0) + "%"; }
    const l = $("#pau-llevas"); if(!l) return;
    const N = EX.length, d = EX.filter(e => HECHOS.has(e.n)).length;
    const A = EX.filter(e => e.c === "Andalucía"), dA = A.filter(e => HECHOS.has(e.n)).length;
    l.textContent = `Llevas ${d} de ${N} (${Math.round(100*d/N)} %)`;
    $("#pau-llevas2").textContent = `Andalucía: ${dA} de ${A.length} · resto de comunidades: ${d-dA} de ${N-A.length}`;
    $("#pau-barra").style.width = (100*d/N) + "%";
  }
  document.addEventListener("change", ev => {
    const i = ev.target.closest("input[data-hecho]"); if(!i) return;
    const n = +i.dataset.hecho; i.checked ? HECHOS.add(n) : HECHOS.delete(n); guarda(); progreso();
    if($("#f-p") && $("#f-p").checked && !$("#v-lista").hidden) pintaLista(true);
  });

  /* ---------- proyectar: un ejercicio a pantalla completa con cronómetro ---------- */
  const P = document.createElement("div");
  P.id = "pau-proy"; P.hidden = true; P.setAttribute("role","dialog"); P.setAttribute("aria-modal","true"); P.setAttribute("aria-label","Ejercicio a pantalla completa");
  P.innerHTML = `<div class="pp-top"><b id="pp-n"></b><span id="pp-s"></span>
      <span class="pp-crono"><button type="button" id="pp-menos" title="Quitar 5 minutos">−5</button><span id="pp-cr" aria-live="off">20:00</span><button type="button" id="pp-mas" title="Añadir 5 minutos">+5</button><button type="button" id="pp-play" class="pp-main">Empezar</button><button type="button" id="pp-reset" title="Reiniciar el cronómetro">↺</button></span></div>
    <div class="pp-cuerpo" id="pp-b"></div>
    <div class="pp-pie"><button type="button" id="pp-ant">◀ Anterior</button><button type="button" id="pp-azar">Otro al azar</button><button type="button" id="pp-sol" hidden>Solución a mano</button><a id="pp-otro" target="_blank" rel="noopener">Solución de otro profe</a><button type="button" id="pp-full">Pantalla completa</button><button type="button" id="pp-sig">Siguiente ▶</button><button type="button" id="pp-cerrar" class="pp-main">Cerrar</button></div>`;
  document.body.appendChild(P);
  let PCUR = null, PMIN = 20, PREST = 1200, PRUN = null, PLISTA = null, PFOCO = null;
  const fmt = t => { const a = Math.abs(t); return (t < 0 ? "+" : "") + String(Math.floor(a/60)).padStart(2,"0") + ":" + String(a%60).padStart(2,"0"); };
  const pintaCrono = () => { const c = $("#pp-cr"); c.textContent = fmt(PREST); c.classList.toggle("extra", PREST < 0); };
  const para = () => { clearInterval(PRUN); PRUN = null; $("#pp-play").textContent = "Empezar"; };
  $("#pp-play").onclick = () => { if(PRUN){ para(); return; } PRUN = setInterval(() => { PREST--; pintaCrono(); }, 1000); $("#pp-play").textContent = "Pausa"; };
  $("#pp-reset").onclick = () => { para(); PREST = PMIN*60; pintaCrono(); };
  $("#pp-mas").onclick = () => { PMIN += 5; PREST += 300; pintaCrono(); };
  $("#pp-menos").onclick = () => { if(PMIN > 5){ PMIN -= 5; PREST -= 300; pintaCrono(); } };
  function proyecta(n, lista){
    const e = POR.get(n); if(!e) return; PCUR = n; if(lista) PLISTA = lista;
    if(P.hidden) PFOCO = document.activeElement;
    $("#pp-n").textContent = `nº ${e.n} [${codigo(e)}]`; $("#pp-s").textContent = titulo(e);
    $("#pp-b").innerHTML = `${e.ne ? `<p class="recuadro aviso pau-ne">No entra en la PAU de Andalucía: funciones trigonométricas.</p>` : ""}<div class="pau-enun">${e.b}</div>${e.sol ? `<article class="hojaex" id="pp-hoja" hidden>${e.sol}</article>` : ""}`;
    $("#pp-sol").hidden = !e.sol; $("#pp-sol").textContent = "Solución a mano";
    const o = $("#pp-otro"); o.hidden = !e.u; if(e.u) o.href = e.u;
    compone($("#pp-b"));
    P.hidden = false; document.documentElement.classList.add("pau-proyectando"); $("#pp-cerrar").focus();
  }
  const listaP = () => PLISTA || EX.map(e => e.n);
  const mueve = d => { const l = listaP(); const i = l.indexOf(PCUR); const m = l[(i + d + l.length) % l.length]; if(m) proyecta(m); };
  $("#pp-ant").onclick = () => mueve(-1); $("#pp-sig").onclick = () => mueve(1);
  $("#pp-azar").onclick = () => { const l = listaP(); proyecta(l[Math.floor(Math.random()*l.length)]); };
  $("#pp-sol").onclick = () => { const h = $("#pp-hoja"); if(!h) return; h.hidden = !h.hidden; $("#pp-sol").textContent = h.hidden ? "Solución a mano" : "Ocultar solución"; };
  $("#pp-full").onclick = () => { if(document.fullscreenElement) document.exitFullscreen(); else if(P.requestFullscreen) P.requestFullscreen(); };
  const cierra = () => { para(); P.hidden = true; document.documentElement.classList.remove("pau-proyectando"); if(document.fullscreenElement) document.exitFullscreen(); if(PFOCO && PFOCO.focus) PFOCO.focus(); };
  $("#pp-cerrar").onclick = cierra;
  document.addEventListener("keydown", ev => { if(P.hidden) return; if(ev.key === "Escape") cierra(); if(ev.key === "ArrowRight") mueve(1); if(ev.key === "ArrowLeft") mueve(-1); });
  document.addEventListener("click", ev => { const b = ev.target.closest("[data-proy]"); if(!b) return; proyecta(+b.dataset.proy, LISTA_ACTUAL || null); });

  /* ---------- página de repaso ---------- */
  const rep = $("[data-repaso]");
  if(rep){
    $$("#rep-seleccion li[data-k]", rep).forEach(li => {
      const e = EX.find(x => x.k === li.dataset.k); if(!e) return; li.dataset.n = e.n;
      li.innerHTML = `<p class="pau-porque">${li.innerHTML}</p>` + ficha(e, false);
    });
    LISTA_ACTUAL = $$("#rep-seleccion li[data-k]", rep).map(li => +li.dataset.n).filter(Boolean);
    const sig = $("#rep-siguiente");
    if(sig) sig.addEventListener("click", () => { const li = $$("#rep-seleccion li[data-k]").find(x => !HECHOS.has(+x.dataset.n)); if(li){ li.scrollIntoView({behavior:"smooth", block:"start"}); li.querySelector(".pau-n").focus({preventScroll:true}); } });
    const porL = $("#rep-letras"), porA = $("#rep-apartados");
    const grupo = (xs, tit) => {
      const ord = xs.slice().sort((a,b) => (b.y - a.y) || (b.lv - a.lv));
      const top = ord.filter(e => e.c === "Andalucía").slice(0,3).concat(ord.filter(e => e.c !== "Andalucía" && e.lv >= 2).slice(0,3));
      const resto = ord.filter(e => !top.includes(e));
      const chips = ys => ys.map(e => `<a class="pau-chip${e.sol?" con-sol":""}${HECHOS.has(e.n)?" hecho":""}" data-n="${e.n}" href="selectividad.html#e${e.n}" title="${esc(titulo(e))}">${e.a}${PUNTOS[e.lv]}<small>${e.n}</small></a>`).join("");
      return `<details class="pau-grupo"><summary><b>${tit}</b> <small>(${xs.length})</small></summary>
        <p class="pau-ayuda">Primero estos: los últimos de Andalucía y los más difíciles de otras comunidades.</p><p class="pau-chips">${chips(top)}</p>
        ${resto.length ? `<details class="pau-resto"><summary>Ver los ${resto.length} restantes</summary><p class="pau-chips">${chips(resto)}</p></details>` : ""}</details>`;
    };
    if(porL) porL.innerHTML = Object.keys(LET).map(l => { const xs = EX.filter(e => e.L.includes(l) && !e.ne); return xs.length ? grupo(xs, `<span class="pau-letra">${l}</span> ${esc(LET[l])}`) : ""; }).join("");
    if(porA) porA.innerHTML = Object.keys(APT).map(a => {
      const xs = EX.filter(e => e.a === +a && !e.ne); if(!xs.length) return "";
      const subs = [...new Set(xs.map(e => e.s || "Otros"))];
      return `<h3 class="pau-tt">${a}. ${esc(APT[a])} <small>(${xs.length})</small> <a href="${PAG[a]}">teoría</a></h3>` + subs.map(s => grupo(xs.filter(e => (e.s || "Otros") === s), esc(s))).join("");
    }).join("");
    compone(rep); progreso();
    return;
  }
  if(!$("#pau")) return;

  /* ---------- tablas ---------- */
  const leyenda = $("#pau-leyenda");
  let resalte = null;
  const chip = (e, conv=true) => `<button type="button" class="pau-chip${e.sol?" con-sol":""}${HECHOS.has(e.n)?" hecho":""}${e.ne?" ne":""}" data-n="${e.n}" data-a="${e.a}" data-l="${e.L.join(" ")}" title="${esc("nº "+e.n+" · "+APT[e.a]+(e.s?" ("+e.s+")":"")+" · "+e.L.map(l=>LET[l]).join(", ")+" · "+titulo(e)+(e.ne?" · no entra":""))}">${e.a}${PUNTOS[e.lv]}${e.st?"★":""}<small>${conv ? convCorta(e)+" " : ""}${e.n}</small></button>`;
  const anos = [...new Set(EX.map(e => e.y))].filter(Boolean).sort((a,b) => b-a);
  const COMS = [...new Set(EX.map(e => e.c))].filter(c => c !== "Andalucía").sort((a,b) => a.localeCompare(b,"es"));
  function tablas(fun){
    const xs = EX.filter(e => FUN(e.a) === fun);
    const aps = [...new Set(xs.map(e => e.a))].sort((a,b) => a-b);
    const lets = Object.keys(LET).filter(l => xs.some(e => e.L.includes(l)));
    leyenda.innerHTML = `<p class="pau-ayuda"><b>El número grande es el apartado.</b> Toca uno para resaltar sus ejercicios en la tabla:</p><ul class="pau-ley">${aps.map(a => `<li><button type="button" data-res="a${a}" aria-pressed="false"><b>${a}</b> ${esc(APT[a])} <small>(${xs.filter(e=>e.a===a).length})</small></button></li>`).join("")}</ul>
      <p class="pau-ayuda"><b>Los puntos son la dificultad</b>: • básica, •• media, ••• alta. Debajo va el número del ejercicio (fuera de Andalucía, también la convocatoria). Con raya roja abajo: resuelto a mano. ★: destacado. Tachado: no entra en Andalucía.</p>`;
    $("#pau-resaltar").innerHTML = `<span>Resaltar lo que te preguntan:</span>` + lets.map(l => `<button type="button" class="pau-letra-b" data-res="l${l}" aria-pressed="false" title="${esc(LET[l])}"><b>${l}</b> ${esc(LET[l])}</button>`).join("");
    const A = xs.filter(e => e.c === "Andalucía");
    const cols = [["MOD","Modelo"],["ORD","Ordinaria"],["R1","Ord. supl. 1"],["R2","Ord. supl. 2"],["EXT","Extraord."],["R3","Ext. supl. 1"],["R4","Ext. supl. 2"]];
    let h = `<h3 class="pau-tt">Andalucía <small>(${A.length})</small></h3><div class="pau-scroll" tabindex="0" role="region" aria-label="Tabla de Andalucía"><table class="pau-tabla"><thead><tr><th scope="col">Año</th>${cols.map(c=>`<th scope="col">${c[1]}</th>`).join("")}</tr></thead><tbody>`;
    anos.forEach(y => { if(!A.some(e => e.y === y)) return; h += `<tr><th scope="row">${y}</th>` + cols.map(c => { const zs = A.filter(e => e.y===y && e.v===c[0]); return `<td>${zs.map(e => chip(e,false)).join("")}</td>`; }).join("") + "</tr>"; });
    h += `</tbody></table></div>`;
    const O = xs.filter(e => e.c !== "Andalucía");
    h += `<h3 class="pau-tt">Resto de comunidades <small>(${O.length})</small></h3><p class="pau-ayuda">Debajo de cada número: O ordinaria (junio), E extraordinaria (julio o septiembre), M modelo; con * las de reserva, suplentes o incidencias. Desliza la tabla para ver todas las comunidades.</p>`;
    h += `<div class="pau-scroll" tabindex="0" role="region" aria-label="Tabla del resto de comunidades"><table class="pau-tabla otras"><thead><tr><th scope="col">Año</th>${COMS.map(c=>`<th scope="col"><span>${esc(c)}</span></th>`).join("")}</tr></thead><tbody>`;
    anos.forEach(y => { if(!O.some(e => e.y === y)) return; h += `<tr><th scope="row">${y}</th>` + COMS.map(c => { const zs = O.filter(e => e.y===y && e.c===c); return `<td>${zs.map(e => chip(e)).join("")}</td>`; }).join("") + "</tr>"; });
    h += "</tbody></table></div>";
    $("#pau-tablas").innerHTML = h; resalte = null;
  }
  const aplicaResalte = () => {
    $$("#v-tabla [data-res]").forEach(x => x.setAttribute("aria-pressed", String(x.dataset.res === resalte)));
    $$("#pau-tablas .pau-chip").forEach(c => {
      const ok = !resalte || (resalte[0] === "a" ? c.dataset.a === resalte.slice(1) : c.dataset.l.split(" ").includes(resalte.slice(1)));
      c.classList.toggle("apagado", !ok);
    });
  };
  document.addEventListener("click", ev => { const b = ev.target.closest("#v-tabla [data-res]"); if(!b) return; resalte = resalte === b.dataset.res ? null : b.dataset.res; aplicaResalte(); });
  let SUBRAYA = false;
  $("#pau-subraya").addEventListener("click", ev => { SUBRAYA = !SUBRAYA; ev.currentTarget.setAttribute("aria-pressed", String(SUBRAYA)); $("#v-tabla").classList.toggle("subrayando", SUBRAYA); });
  let VOLVER = "#lista", RECUERDA = null, DESDE = null;
  /* Si se llega desde un ejemplo de los apuntes (selectividad.html?desde=limites&ej=ej-1#e14), la flecha vuelve a ese ejemplo */
  try{ const q = new URLSearchParams(location.search), d = q.get("desde"), j = q.get("ej") || "";
    if(/^[a-z0-9-]+$/.test(d || "") && /^[a-z0-9-]*$/.test(j)) DESDE = d + ".html" + (j ? "#" + j : ""); }catch(e){}
  $("#pau-tablas").addEventListener("click", ev => {
    const c = ev.target.closest(".pau-chip[data-n]"); if(!c) return;
    const n = +c.dataset.n;
    if(SUBRAYA){ HECHOS.has(n) ? HECHOS.delete(n) : HECHOS.add(n); guarda(); progreso(); return; }
    VOLVER = location.hash || "#funciones"; LISTA_ACTUAL = null; location.hash = "e" + n;
  });
  const imprime = blanco => { document.documentElement.classList.toggle("imprime-blanco", blanco); document.documentElement.classList.add("imprime-tabla"); setTimeout(() => { window.print(); document.documentElement.classList.remove("imprime-tabla","imprime-blanco"); }, 50); };
  $("#pau-imp-blanco").addEventListener("click", () => imprime(true));
  $("#pau-imp-mios").addEventListener("click", () => imprime(false));

  /* ---------- lista con filtros ---------- */
  if(window.innerWidth < 700) $("#pau-filtros-d").open = false;
  const opts = (sel, arr) => { const v = sel.value; sel.innerHTML = arr.map(([v,t]) => `<option value="${esc(v)}">${esc(t)}</option>`).join(""); if(arr.some(x => x[0] === v)) sel.value = v; };
  opts($("#f-a"), [["","Todos"],["F","Funciones y derivadas (1-14)"],["I","Integrales (15-19)"], ...Object.keys(APT).map(a => [a, `${a}. ${APT[a]}`])]);
  const enAp = (e, a) => !a || (a==="F" ? FUN(e.a) : a==="I" ? !FUN(e.a) : e.a === +a);
  const subtipos = () => { const a = $("#f-a").value; const unico = a && a !== "F" && a !== "I";
    const ss = unico ? [...new Set(EX.filter(e => enAp(e,a)).map(e => e.s).filter(Boolean))] : [];
    opts($("#f-s2"), [["", unico ? "Todos" : "Elige antes un apartado"], ...ss.map(s => [s,s])]); $("#f-s2").disabled = !unico; };
  subtipos();
  opts($("#f-t"), [["","Cualquier cosa"], ...Object.keys(LET).map(l => [l, `${l} · ${LET[l]}`])]);
  const FTIPOS = [["Polinómica","Polinómica"],["Racional","Racional"],["Exponencial","Exponencial"],["Logarítmica","Logarítmica"],["Con raíz","Con raíz"],["Trozos","A trozos"],["Valor absoluto","Con valor absoluto"]];
  opts($("#f-fn"), [["","Cualquiera"], ...FTIPOS.filter(t => EX.some(e => e.f.includes(t[0])))]);
  opts($("#f-ctx"), [["","Con y sin contexto"],["Con contexto","Con contexto (un problema)"],["Sin contexto","Sin contexto (solo la función)"]]);
  opts($("#f-c"), [["","Todas"],["Andalucía","Andalucía"],["otras","Todas menos Andalucía"], ...COMS.map(c => [c,c])]);
  opts($("#f-y"), [["","Todos"], ...anos.map(y => [String(y), String(y)])]);
  const sinAc = s => s.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();
  const TXT = new Map(EX.map(e => [e.n, sinAc(`${e.n} ${e.k} ${titulo(e)} ${APT[e.a]} ${e.s||""} ${e.f.join(" ")} ${e.b.replace(/<[^>]+>/g," ")}`)]));
  function filtrados(){
    const q = sinAc($("#f-q").value.trim()), a = $("#f-a").value, s2 = $("#f-s2").value, t = $("#f-t").value, fn = $("#f-fn").value, ctx = $("#f-ctx").value, lv = $("#f-lv").value, c = $("#f-c").value, y = $("#f-y").value, v = $("#f-v").value;
    const s = $("#f-s").checked, p = $("#f-p").checked, ne = $("#f-ne").checked;
    const ws = q.split(/\s+/).filter(Boolean);
    return EX.filter(e =>
      enAp(e,a) && (!s2 || e.s === s2) && (!t || e.L.includes(t)) && (!fn || e.f.includes(fn)) && (!ctx || e.f.includes(ctx)) && (!lv || e.lv === +lv) &&
      (!c || (c === "otras" ? e.c !== "Andalucía" : e.c === c)) && (!y || e.y === +y) &&
      (!v || (v==="SUP" ? SUP(e) : e.v === v && !e.x)) && (!s || e.sol) && (!p || !HECHOS.has(e.n)) && (ne || !e.ne) &&
      ws.every(w => TXT.get(e.n).includes(w)));
  }
  let MOSTRADOS = 0, XS = [];
  const PASO = 25;
  function pintaLista(reinicia){
    if(reinicia){ XS = filtrados(); LISTA_ACTUAL = XS.map(e => e.n); MOSTRADOS = 0; $("#pau-lista").innerHTML = ""; }
    const nuevos = XS.slice(MOSTRADOS, MOSTRADOS + PASO);
    const frag = document.createElement("ul");
    let prev = MOSTRADOS ? XS[MOSTRADOS-1].a : null;
    frag.innerHTML = nuevos.map(e => { const cab = e.a !== prev ? `<li class="pau-grupo-t"><h2>${e.a}. ${esc(APT[e.a])}</h2></li>` : ""; prev = e.a; return cab + `<li class="pau-item" id="item-${e.n}">${ficha(e, false)}</li>`; }).join("");
    const lis = [...frag.children]; lis.forEach(li => $("#pau-lista").appendChild(li)); lis.forEach(compone);
    MOSTRADOS += nuevos.length;
    $("#pau-cuenta").textContent = (XS.length === 1 ? "1 ejercicio" : `${XS.length} ejercicios`) + (XS.length > MOSTRADOS ? ` (ves ${MOSTRADOS})` : "");
    $("#pau-mas").hidden = MOSTRADOS >= XS.length;
    $("#pau-mas").textContent = `Ver ${Math.min(PASO, XS.length - MOSTRADOS)} más`;
    if(!XS.length) $("#pau-lista").innerHTML = `<li class="pau-vacio">Ningún ejercicio cumple todos los filtros. Quita alguno con «Quitar filtros».</li>`;
    guardaFiltros();
  }
  const IDS = ["f-q","f-a","f-s2","f-t","f-fn","f-ctx","f-lv","f-c","f-y","f-v","f-s","f-p","f-ne"];
  function guardaFiltros(){ try{ sessionStorage.setItem("mates:pau-filtros3", JSON.stringify(IDS.map(i => { const el = $("#"+i); return el.type==="checkbox" ? el.checked : el.value; }))); }catch(e){} }
  try{ const f = JSON.parse(sessionStorage.getItem("mates:pau-filtros3")); if(f){ IDS.forEach((i,k) => { if(i === "f-s2") return; const el = $("#"+i); if(el.type==="checkbox") el.checked = !!f[k]; else el.value = f[k] ?? ""; }); subtipos(); $("#f-s2").value = f[2] || ""; } }catch(e){}
  let tq; $("#pau-filtros").addEventListener("input", ev => { if(ev.target.id === "f-a"){ subtipos(); $("#f-s2").value = ""; } clearTimeout(tq); tq = setTimeout(() => pintaLista(true), ev.target.id === "f-q" ? 250 : 0); });
  $("#pau-filtros").addEventListener("submit", ev => ev.preventDefault());
  $("#pau-mas").addEventListener("click", () => pintaLista(false));
  $("#pau-limpia").addEventListener("click", () => { IDS.forEach(i => { const el = $("#"+i); if(el.type==="checkbox") el.checked = false; else el.value = ""; }); subtipos(); pintaLista(true); });
  $("#pau-azar").addEventListener("click", () => { const xs = filtrados(); if(!xs.length) return; proyecta(xs[Math.floor(Math.random()*xs.length)].n, xs.map(e => e.n)); });
  $("#pau-proy-lista").addEventListener("click", () => { const xs = filtrados(); if(!xs.length) return; proyecta(xs[0].n, xs.map(e => e.n)); });
  $("#pau-lista").addEventListener("click", ev => { const a = ev.target.closest("a.pau-n"); if(a){ VOLVER = "#lista"; RECUERDA = window.scrollY; } });

  /* ---------- un ejercicio ---------- */
  function abre(n){
    const e = POR.get(n); if(!e){ location.hash = "lista"; return; }
    const caja = $("#pau-ej");
    caja.innerHTML = `<article class="pau-item solo">${ficha(e, true)}</article>`;
    compone(caja);
    const lista = LISTA_ACTUAL && LISTA_ACTUAL.includes(n) ? LISTA_ACTUAL : EX.filter(x => FUN(x.a) === FUN(e.a)).map(x => x.n);
    const i = lista.indexOf(n), ant = lista[i-1], sig = lista[i+1];
    const pon = (el, m) => { el.hidden = !m; if(m){ const x = POR.get(m); el.href = "#e" + m; el.querySelector("b").textContent = `nº ${m} · ${titulo(x)}`; } };
    pon($("#pau-ant"), ant); pon($("#pau-sig"), sig);
    if(DESDE){ $("#pau-volver").href = DESDE; $("#pau-volver").textContent = "← Volver a los apuntes"; }
    else { $("#pau-volver").href = VOLVER; $("#pau-volver").textContent = VOLVER === "#lista" ? "← Volver a la lista" : "← Volver a la tabla"; }
    document.title = `nº ${e.n} · ${titulo(e)} · Selectividad de Análisis`;
  }

  /* ---------- rutas ---------- */
  const titulo0 = document.title;
  function ruta(){
    const h = location.hash.slice(1) || "funciones";
    const m = h.match(/^e(\d+)$/);
    const vista = m ? "ej" : (["funciones","integrales","lista"].includes(h) ? h : "funciones");
    $("#v-tabla").hidden = !(vista === "funciones" || vista === "integrales");
    $("#v-lista").hidden = vista !== "lista";
    $("#v-ej").hidden = vista !== "ej";
    $$(".pau-vistas a").forEach(a => a.setAttribute("aria-current", a.dataset.vista === vista || (vista==="ej" && VOLVER==="#"+a.dataset.vista) ? "page" : "false"));
    if(vista === "funciones" || vista === "integrales"){ document.title = titulo0; tablas(vista === "funciones"); progreso(); }
    if(vista === "lista"){ document.title = titulo0; if(!$("#pau-lista").children.length) pintaLista(true); if(RECUERDA != null){ const y = RECUERDA; RECUERDA = null; setTimeout(() => window.scrollTo(0, y), 30); } }
    if(vista === "ej"){ abre(+m[1]); window.scrollTo(0, $("#pau").offsetTop - 70); }
  }
  window.addEventListener("hashchange", ruta);
  ruta(); progreso();
}
if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", arranca); else arranca();
})();

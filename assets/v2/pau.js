/* ==========================================================================
   pau.js — ejercicios de selectividad de Análisis
   · Dos tablas (funciones y derivadas / integrales) por año, convocatoria y comunidad
   · Lista con filtros: apartado, qué se pregunta, comunidad, año, convocatoria
   · Cada ejercicio: enunciado completo, solución a mano (2026) o de otro profe
   · «Hechos» y subrayador guardados en el navegador del alumno
   · Página de repaso (data-repaso): selección por bloques con la misma ficha
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

function arranca(){
  if(!window.PAU) return;
  const {apartados:APT, paginas:PAG, ex:EX} = window.PAU;
  const POR = new Map(EX.map(e => [e.n, e]));
  const FUN = a => a <= 14;
  const SUP = e => ["R1","R2","R3","R4"].includes(e.v) || e.x;
  const convCorta = e => ({ORD:"O",EXT:"E",MOD:"M",R1:"S1",R2:"S2",R3:"S3",R4:"S4"}[e.v] || "·") + (e.x && !e.v.startsWith("R") ? "*" : "");
  const titulo = e => `${e.c} · ${e.cv} ${e.y}`;

  /* ---------- KaTeX y gráficas en lo que se pinta después ---------- */
  const compone = el => {
    const hazlo = () => { if(window.Mates) Mates.formulas(el); if(window.pintaGrafs) pintaGrafs(el); };
    if(window.katex) hazlo(); else { const t = setInterval(()=>{ if(window.katex){ clearInterval(t); hazlo(); } }, 120); setTimeout(()=>clearInterval(t), 8000); }
  };

  const BASE = document.querySelector("[data-repaso]") ? "selectividad.html" : "";
  /* ---------- ficha de un ejercicio ---------- */
  function ficha(e, abierta){
    const sol = e.sol ? `<details class="sol pau-sol"${abierta?" open":""}><summary>Solución a mano</summary><article class="hojaex">${e.sol}</article></details>` : "";
    const otro = e.u ? `<a class="pau-otro" href="${esc(e.u)}" target="_blank" rel="noopener">Solución de otro profe <span class="vh">(PDF, se abre en otra pestaña)</span></a>` : "";
    const tema = PAG[e.a] ? `<a class="pau-tema" href="${PAG[e.a]}">Repasa la teoría</a>` : "";
    return `<div class="pau-cab">
        <a class="pau-n" href="${BASE}#e${e.n}" aria-label="Abrir el ejercicio ${e.k}">${e.k}</a>
        <h3>${esc(titulo(e))}${e.st ? ' <span class="pau-estrella" title="Ejercicio destacado">★</span>' : ""}</h3>
        <label class="pau-hecho"><input type="checkbox" data-hecho="${e.n}"${HECHOS.has(e.n)?" checked":""}> Hecho</label>
      </div>
      <p class="pau-etq"><span class="pau-ap">${e.a}. ${esc(APT[e.a])}</span>${e.s ? ` <span class="pau-sub">${esc(e.s)}</span>` : ""}${e.tg.map(t => ` <span class="pau-tag">${esc(t)}</span>`).join("")}</p>
      <div class="pau-enun">${e.b}</div>
      <p class="pau-acc">${otro}${tema}</p>${sol}`;
  }

  /* ---------- progreso ---------- */
  function progreso(){
    const N = EX.length, d = EX.filter(e => HECHOS.has(e.n)).length;
    const A = EX.filter(e => e.c === "Andalucía"), dA = A.filter(e => HECHOS.has(e.n)).length;
    $$("input[data-hecho]").forEach(i => { i.checked = HECHOS.has(+i.dataset.hecho); });
    const r = $("#rep-llevas"); if(r){ const xs = $$("[data-k]").map(li => +li.dataset.n).filter(Boolean); const k = xs.filter(n => HECHOS.has(n)).length; r.textContent = `Llevas ${k} de ${xs.length}`; $("#rep-barra").style.width = (xs.length ? 100*k/xs.length : 0) + "%"; }
    const l = $("#pau-llevas"); if(!l) return;
    l.textContent = `Llevas ${d} de ${N} (${Math.round(100*d/N)} %)`;
    $("#pau-llevas2").textContent = `Andalucía: ${dA} de ${A.length} · resto de comunidades: ${d-dA} de ${N-A.length}`;
    $("#pau-barra").style.width = (100*d/N) + "%";
    $$(".pau-chip[data-n]").forEach(c => c.classList.toggle("hecho", HECHOS.has(+c.dataset.n)));
    $$("input[data-hecho]").forEach(i => { i.checked = HECHOS.has(+i.dataset.hecho); });
  }
  document.addEventListener("change", ev => {
    const i = ev.target.closest("input[data-hecho]"); if(!i) return;
    const n = +i.dataset.hecho; i.checked ? HECHOS.add(n) : HECHOS.delete(n); guarda(); progreso();
    if($("#f-p") && $("#f-p").checked) pintaLista(true);
  });

  /* ---------- página de repaso ---------- */
  const rep = $("[data-repaso]");
  if(rep){
    $$("[data-k]", rep).forEach(li => {
      const e = EX.find(x => x.k === li.dataset.k); if(!e) return; li.dataset.n = e.n;
      li.innerHTML = `<p class="pau-porque">${li.innerHTML}</p>` + ficha(e, false);
    });
    compone(rep); progreso();
    return;
  }
  if(!$("#pau")) return;

  /* ---------- tablas ---------- */
  const leyenda = $("#pau-leyenda");
  let resalte = null;
  const chip = (e, conv=true) => `<button type="button" class="pau-chip${e.sol?" con-sol":""}${HECHOS.has(e.n)?" hecho":""}" data-n="${e.n}" data-a="${e.a}" title="${esc(e.k+" · "+APT[e.a]+" · "+titulo(e))}">${e.a}${e.st?"★":""}${conv?`<small>${convCorta(e)}</small>`:""}</button>`;
  const anos = [...new Set(EX.map(e => e.y))].filter(Boolean).sort((a,b) => b-a);
  const COMS = [...new Set(EX.map(e => e.c))].filter(c => c !== "Andalucía").sort((a,b) => a.localeCompare(b,"es"));
  function tablas(fun){
    const xs = EX.filter(e => FUN(e.a) === fun);
    const aps = [...new Set(xs.map(e => e.a))].sort((a,b) => a-b);
    leyenda.innerHTML = `<ul class="pau-ley">${aps.map(a => `<li><button type="button" data-res="${a}" aria-pressed="false"><b>${a}</b> ${esc(APT[a])} <small>(${xs.filter(e=>e.a===a).length})</small></button></li>`).join("")}</ul>`;
    const A = xs.filter(e => e.c === "Andalucía");
    const cols = [["MOD","Modelo"],["ORD","Ordinaria"],["R1","Ord. supl. 1"],["R2","Ord. supl. 2"],["EXT","Extraordinaria"],["R3","Ext. supl. 1"],["R4","Ext. supl. 2"]];
    let h = `<h3 class="pau-tt">Andalucía <small>(${A.length})</small></h3><div class="pau-scroll" tabindex="0" role="region" aria-label="Tabla de Andalucía"><table class="pau-tabla"><thead><tr><th scope="col">Año</th>${cols.map(c=>`<th scope="col">${c[1]}</th>`).join("")}</tr></thead><tbody>`;
    anos.forEach(y => { h += `<tr><th scope="row">${y}</th>` + cols.map(c => { const zs = A.filter(e => e.y===y && e.v===c[0]); return `<td>${zs.map(e => chip(e,false)).join("")}</td>`; }).join("") + "</tr>"; });
    h += `</tbody></table></div>`;
    const O = xs.filter(e => e.c !== "Andalucía");
    h += `<h3 class="pau-tt">Resto de comunidades <small>(${O.length})</small></h3><p class="pau-ayuda">Debajo de cada número, la convocatoria: O ordinaria (o junio), E extraordinaria (septiembre o julio), M modelo; con * los exámenes de reserva, suplentes o incidencias.</p>`;
    h += `<div class="pau-scroll" tabindex="0" role="region" aria-label="Tabla del resto de comunidades"><table class="pau-tabla otras"><thead><tr><th scope="col">Año</th>${COMS.map(c=>`<th scope="col"><span>${esc(c)}</span></th>`).join("")}</tr></thead><tbody>`;
    anos.forEach(y => { h += `<tr><th scope="row">${y}</th>` + COMS.map(c => { const zs = O.filter(e => e.y===y && e.c===c); return `<td>${zs.map(chip).join("")}</td>`; }).join("") + "</tr>"; });
    h += "</tbody></table></div>";
    $("#pau-tablas").innerHTML = h; resalte = null;
  }
  leyenda.addEventListener("click", ev => {
    const b = ev.target.closest("[data-res]"); if(!b) return;
    const a = b.dataset.res, on = resalte !== a; resalte = on ? a : null;
    $$("[data-res]", leyenda).forEach(x => x.setAttribute("aria-pressed", String(x === b && on)));
    $$("#pau-tablas .pau-chip").forEach(c => c.classList.toggle("apagado", on && c.dataset.a !== a));
  });
  let SUBRAYA = false;
  $("#pau-subraya").addEventListener("click", ev => { SUBRAYA = !SUBRAYA; ev.currentTarget.setAttribute("aria-pressed", String(SUBRAYA)); $("#v-tabla").classList.toggle("subrayando", SUBRAYA); });
  $("#pau-tablas").addEventListener("click", ev => {
    const c = ev.target.closest(".pau-chip[data-n]"); if(!c) return;
    const n = +c.dataset.n;
    if(SUBRAYA){ HECHOS.has(n) ? HECHOS.delete(n) : HECHOS.add(n); guarda(); progreso(); return; }
    VOLVER = location.hash || "#funciones"; LISTA_ACTUAL = null; location.hash = "e" + n;
  });

  /* ---------- lista con filtros ---------- */
  const opts = (sel, arr) => { sel.innerHTML = arr.map(([v,t]) => `<option value="${esc(v)}">${esc(t)}</option>`).join(""); };
  opts($("#f-a"), [["","Todos"],["F","Funciones y derivadas (1-14)"],["I","Integrales (15-19)"], ...Object.keys(APT).map(a => [a, `${a}. ${APT[a]}`])]);
  const TAGS = [...new Set(EX.flatMap(e => e.tg))].sort((a,b)=>a.localeCompare(b,"es"));
  opts($("#f-t"), [["","Cualquier cosa"], ...TAGS.map(t => [t,t])]);
  opts($("#f-c"), [["","Todas"],["Andalucía","Andalucía"], ...COMS.map(c => [c,c])]);
  opts($("#f-y"), [["","Todos"], ...anos.map(y => [String(y), String(y)])]);
  const sinAc = s => s.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();
  const TXT = new Map(EX.map(e => [e.n, sinAc(`${e.k} ${titulo(e)} ${APT[e.a]} ${e.s||""} ${e.tg.join(" ")} ${e.b.replace(/<[^>]+>/g," ")}`)]));
  function filtrados(){
    const q = sinAc($("#f-q").value.trim()), a = $("#f-a").value, t = $("#f-t").value, c = $("#f-c").value, y = $("#f-y").value, v = $("#f-v").value;
    const s = $("#f-s").checked, p = $("#f-p").checked;
    const ws = q.split(/\s+/).filter(Boolean);
    return EX.filter(e =>
      (!a || (a==="F" ? FUN(e.a) : a==="I" ? !FUN(e.a) : e.a === +a)) && (!t || e.tg.includes(t)) && (!c || e.c === c) && (!y || e.y === +y) &&
      (!v || (v==="SUP" ? SUP(e) : e.v === v && !e.x)) && (!s || e.sol) && (!p || !HECHOS.has(e.n)) &&
      ws.every(w => TXT.get(e.n).includes(w)));
  }
  let LISTA_ACTUAL = null, MOSTRADOS = 0, VOLVER = "#lista";
  const PASO = 25;
  function pintaLista(reinicia){
    const xs = filtrados(); LISTA_ACTUAL = xs.map(e => e.n);
    if(reinicia){ MOSTRADOS = 0; $("#pau-lista").innerHTML = ""; }
    const nuevos = xs.slice(MOSTRADOS, MOSTRADOS + PASO);
    const frag = document.createElement("div");
    frag.innerHTML = nuevos.map(e => `<li class="pau-item" id="item-${e.n}">${ficha(e, false)}</li>`).join("");
    const lis = [...frag.children]; lis.forEach(li => $("#pau-lista").appendChild(li)); lis.forEach(compone);
    MOSTRADOS += nuevos.length;
    $("#pau-cuenta").textContent = xs.length === 1 ? "1 ejercicio" : `${xs.length} ejercicios` + (xs.length > MOSTRADOS ? ` (ves ${MOSTRADOS})` : "");
    $("#pau-mas").hidden = MOSTRADOS >= xs.length;
    $("#pau-mas").textContent = `Ver ${Math.min(PASO, xs.length - MOSTRADOS)} más`;
    if(!xs.length) $("#pau-lista").innerHTML = `<li class="pau-vacio">Ningún ejercicio cumple todos los filtros. Quita alguno con «Quitar filtros».</li>`;
    guardaFiltros();
  }
  const IDS = ["f-q","f-a","f-t","f-c","f-y","f-v","f-s","f-p"];
  function guardaFiltros(){ try{ sessionStorage.setItem("mates:pau-filtros", JSON.stringify(IDS.map(i => { const el = $("#"+i); return el.type==="checkbox" ? el.checked : el.value; }))); }catch(e){} }
  try{ const f = JSON.parse(sessionStorage.getItem("mates:pau-filtros")); if(f) IDS.forEach((i,k) => { const el = $("#"+i); if(el.type==="checkbox") el.checked = !!f[k]; else el.value = f[k] ?? ""; }); }catch(e){}
  let tq; $("#pau-filtros").addEventListener("input", ev => { clearTimeout(tq); tq = setTimeout(() => pintaLista(true), ev.target.id === "f-q" ? 250 : 0); });
  $("#pau-mas").addEventListener("click", () => pintaLista(false));
  $("#pau-limpia").addEventListener("click", () => { IDS.forEach(i => { const el = $("#"+i); if(el.type==="checkbox") el.checked = false; else el.value = ""; }); pintaLista(true); });
  $("#pau-azar").addEventListener("click", () => { const xs = filtrados(); if(!xs.length) return; const e = xs[Math.floor(Math.random()*xs.length)]; VOLVER = "#lista"; location.hash = "e" + e.n; });
  $("#pau-lista").addEventListener("click", ev => { const a = ev.target.closest("a.pau-n"); if(a){ VOLVER = "#lista"; RECUERDA = window.scrollY; } });
  let RECUERDA = null;

  /* ---------- un ejercicio ---------- */
  function abre(n){
    const e = POR.get(n); if(!e){ location.hash = "lista"; return; }
    const caja = $("#pau-ej");
    caja.innerHTML = `<article class="pau-item solo">${ficha(e, true)}</article>`;
    compone(caja);
    const lista = LISTA_ACTUAL && LISTA_ACTUAL.includes(n) ? LISTA_ACTUAL : EX.filter(x => FUN(x.a) === FUN(e.a)).map(x => x.n);
    const i = lista.indexOf(n), ant = lista[i-1], sig = lista[i+1];
    const pon = (el, m) => { el.hidden = !m; if(m){ const x = POR.get(m); el.href = "#e" + m; el.querySelector("b").textContent = `${x.k} · ${titulo(x)}`; } };
    pon($("#pau-ant"), ant); pon($("#pau-sig"), sig);
    $("#pau-volver").href = VOLVER; $("#pau-volver").textContent = VOLVER === "#lista" ? "← Volver a la lista" : "← Volver a la tabla";
    document.title = `${e.k} · ${titulo(e)} · Selectividad de Análisis`;
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

/* ==========================================================================
   pau-pl.js — ejercicios de selectividad de Programación lineal (formato nuevo, como pau.js de Análisis)
   · Datos: window.PAUPL (pau/datos.js). Cada ejercicio lleva T, la lista de sus «problemas tipo»
     (1-17, la misma numeración en la tabla, los filtros, la página de problemas tipo y el repaso),
     y t, sus tipos de enunciado.
   · Tabla por año y convocatoria (Andalucía) y por comunidad (resto). Casilla = problemas tipo,
     dificultad (•, ••, •••) y número del ejercicio.
   · Lista con filtros, proyectar con cronómetro, «Hecho» y subrayador (se guardan en el navegador,
     en la misma clave que la página antigua: nadie pierde lo que tenía marcado).
   · Solución paso a paso (la de la página antigua, con su gráfica), paso a paso o entera.
   · Repaso (data-repaso-pl) y «Ha salido en» de cada problema tipo (data-salido).
   ========================================================================== */
(function(){
"use strict";
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const CLAVE = "pl-hechos";
let HECHOS = new Set();
try{ HECHOS = new Set((JSON.parse(localStorage.getItem(CLAVE)) || []).map(Number)); }catch(e){}
const guarda = () => { try{ localStorage.setItem(CLAVE, JSON.stringify([...HECHOS])); }catch(e){} };
const PUNTOS = ["", "•", "••", "•••"], NIVEL = ["", "Básica", "Media", "Alta"];

function arranca(){
  if(!window.PAUPL) return;
  const {tipos:TIP, enun:ENU, ex:EX, sel:SEL, sol:SOL, pick:PICK, sit:SIT} = window.PAUPL;
  const POR = new Map(EX.map(e => [e.n, e]));
  const SUP = e => ["R1","R2","R3","R4","RES"].includes(e.v);
  const convCorta = e => ({ORD:"O",EXT:"E",MOD:"M",R1:"S1",R2:"S2",R3:"S3",R4:"S4",RES:"R"}[e.v] || "·");
  const titulo = e => e.s;
  const enSel = $("[data-repaso-pl]") || $("[data-salido]");
  const BASE = enSel ? "selectividad.html" : "";
  let LISTA_ACTUAL = null;

  const compone = el => { if(window.Mates) Mates.formulas(el); };

  /* ---------- solución paso a paso (la de la página antigua) ---------- */
  const solCaja = n => SOL[n] ? `<div class="pl pl-solx" data-sol="${n}">
      <div class="pl-sol-bot"><button type="button" class="boton fino" data-solnext>Solución paso a paso</button><button type="button" class="boton fino" data-solall>Verla entera</button><button type="button" class="boton fino" data-solhide hidden>Ocultar</button></div>
      <div class="pl-hoja" hidden></div></div>` : "";
  function solLlena(h, n, abierta){
    if(h.dataset.ok) return; h.dataset.ok = 1;
    h.innerHTML = SOL[n].map(s => `<section class="solstep"${abierta ? "" : " hidden"}><h4>${esc(s.t)}</h4>${s.h}${s.plot ? '<svg class="plot solplot" viewBox="0 0 400 330" role="img" aria-label="Región factible"></svg>' : ""}</section>`).join("");
    SOL[n].forEach((s, i) => { if(s.plot && window.PLdrawSol) PLdrawSol(h.children[i].querySelector("svg"), s.plot); });
  }
  function solEstado(x){
    const st = $$(".solstep", x), quedan = st.filter(s => s.hidden).length, vistos = st.length - quedan, b = $("[data-solnext]", x);
    b.textContent = !vistos ? "Solución paso a paso" : quedan ? `Siguiente paso (quedan ${quedan})` : "Solución completa ✓";
    b.disabled = !!vistos && !quedan;
    $("[data-solall]", x).hidden = !quedan && !!vistos; $("[data-solhide]", x).hidden = !vistos; $(".pl-hoja", x).hidden = !vistos;
  }
  document.addEventListener("click", ev => {
    const b = ev.target.closest("[data-solnext],[data-solall],[data-solhide]"); if(!b) return;
    const x = b.closest(".pl-solx"), h = $(".pl-hoja", x); solLlena(h, x.dataset.sol, false);
    const st = $$(".solstep", h); let ir = null;
    if(b.hasAttribute("data-solhide")) st.forEach(s => s.hidden = true);
    else if(b.hasAttribute("data-solall")){ ir = st.find(s => s.hidden); st.forEach(s => s.hidden = false); }
    else { ir = st.find(s => s.hidden); if(ir) ir.hidden = false; }
    solEstado(x); if(ir) ir.scrollIntoView({behavior:"smooth", block: b.hasAttribute("data-solall") ? "start" : "nearest"});
  });

  /* ---------- ficha de un ejercicio ---------- */
  const codigo = e => `${e.T.join("·")}${PUNTOS[e.lv]}`;
  const nombresT = e => e.T.map(t => `${t}. ${TIP[t][0]}`).join("; ");
  function ficha(e){
    const otro = e.u ? `<a class="pau-otro" href="${esc(e.u)}" target="_blank" rel="noopener">Solución de otro profe <span class="vh">(PDF, se abre en otra pestaña)</span></a>` : "";
    return `<div class="pau-cab">
        <a class="pau-n" href="${BASE}#e${e.n}" aria-label="Abrir el ejercicio ${e.n}">nº ${e.n}</a>
        <h3>${esc(titulo(e))} <span class="pau-cod" title="${esc(nombresT(e))} · dificultad ${NIVEL[e.lv].toLowerCase()}">[${codigo(e)}]</span></h3>
        <span class="pau-botones"><button type="button" class="boton fino pau-proy" data-proy="${e.n}">Proyectar</button>${otro}
        <label class="pau-hecho"><input type="checkbox" data-hecho="${e.n}"${HECHOS.has(e.n)?" checked":""}> Hecho</label></span>
      </div>
      <div class="pau-enun">${e.b}</div>
      <p class="pau-etq"><span class="pau-nivel n${e.lv}">${PUNTOS[e.lv]} ${NIVEL[e.lv]}</span>${e.T.map(t => `<a class="pau-ap" href="${TIP[t][2]}" title="${esc(TIP[t][1])}">${t}. ${esc(TIP[t][0])}</a>`).join("")}${e.t.map(k => `<span class="pau-tag" title="${esc(ENU[k][1])}">${esc(ENU[k][0])}</span>`).join("")}</p>
      ${solCaja(e.n)}`;
  }

  /* ---------- progreso ---------- */
  function progreso(){
    $$("input[data-hecho]").forEach(i => { i.checked = HECHOS.has(+i.dataset.hecho); });
    $$(".pau-chip[data-n], a.pl-ej[data-n]").forEach(c => c.classList.toggle("hecho", HECHOS.has(+c.dataset.n)));
    $$("li[data-n]").forEach(li => li.classList.toggle("hecho", HECHOS.has(+li.dataset.n)));
    const r = $("#rep-llevas");
    if(r){ const xs = $$("#rep-seleccion li[data-n]").map(li => +li.dataset.n); const k = xs.filter(n => HECHOS.has(n)).length;
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
    <div class="pp-cuerpo pl" id="pp-b"></div>
    <div class="pp-pie"><button type="button" id="pp-ant">◀ Anterior</button><button type="button" id="pp-azar">Otro al azar</button><button type="button" id="pp-sol" hidden>Solución paso a paso</button><a id="pp-otro" target="_blank" rel="noopener">Solución de otro profe</a><button type="button" id="pp-full">Pantalla completa</button><button type="button" id="pp-sig">Siguiente ▶</button><button type="button" id="pp-cerrar" class="pp-main">Cerrar</button></div>`;
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
    $("#pp-b").innerHTML = `<div class="pau-enun">${e.b}</div>${SOL[e.n] ? `<div class="pl-hoja" id="pp-hoja" hidden></div>` : ""}`;
    $("#pp-sol").hidden = !SOL[e.n]; $("#pp-sol").textContent = "Solución paso a paso";
    const o = $("#pp-otro"); o.hidden = !e.u; if(e.u) o.href = e.u;
    compone($("#pp-b"));
    P.hidden = false; document.documentElement.classList.add("pau-proyectando"); $("#pp-cerrar").focus();
  }
  const listaP = () => PLISTA || EX.map(e => e.n);
  const mueve = d => { const l = listaP(); const i = l.indexOf(PCUR); const m = l[(i + d + l.length) % l.length]; if(m) proyecta(m); };
  $("#pp-ant").onclick = () => mueve(-1); $("#pp-sig").onclick = () => mueve(1);
  $("#pp-azar").onclick = () => { const l = listaP(); proyecta(l[Math.floor(Math.random()*l.length)]); };
  $("#pp-sol").onclick = () => { const h = $("#pp-hoja"); if(!h) return; solLlena(h, PCUR, true); h.hidden = !h.hidden; $("#pp-sol").textContent = h.hidden ? "Solución paso a paso" : "Ocultar solución"; };
  $("#pp-full").onclick = () => { if(document.fullscreenElement) document.exitFullscreen(); else if(P.requestFullscreen) P.requestFullscreen(); };
  const cierra = () => { para(); P.hidden = true; document.documentElement.classList.remove("pau-proyectando"); if(document.fullscreenElement) document.exitFullscreen(); if(PFOCO && PFOCO.focus) PFOCO.focus(); };
  $("#pp-cerrar").onclick = cierra;
  document.addEventListener("keydown", ev => { if(P.hidden) return; if(ev.key === "Escape") cierra(); if(ev.key === "ArrowRight") mueve(1); if(ev.key === "ArrowLeft") mueve(-1); });
  document.addEventListener("click", ev => { const b = ev.target.closest("[data-proy]"); if(!b) return; proyecta(+b.dataset.proy, LISTA_ACTUAL || null); });

  /* ---------- botones de ejercicios (repaso y problemas tipo) ---------- */
  const ordena = xs => xs.slice().sort((a,b) => (b.c === "Andalucía") - (a.c === "Andalucía") || (b.y - a.y) || (a.n - b.n));
  const chipEnlace = e => `<a class="pau-chip${SOL[e.n]?" con-sol":""}${HECHOS.has(e.n)?" hecho":""}" data-n="${e.n}" href="selectividad.html#e${e.n}" title="${esc(titulo(e) + " · " + nombresT(e))}">${e.T.join("·")}${PUNTOS[e.lv]}<small>${e.c === "Andalucía" ? "" : esc(e.c.slice(0,3)) + " "}${e.n}</small></a>`;
  const grupo = (xs, tit, primero) => {
    const top = (primero || []).map(n => POR.get(n)).filter(Boolean);
    const resto = ordena(xs.filter(e => !top.includes(e)));
    const ini = top.length ? top : resto.splice(0, 6);
    return `<details class="pau-grupo"><summary><b>${tit}</b> <small>(${xs.length})</small></summary>
      <p class="pau-ayuda">Empieza por estos${top.length ? ", elegidos de menos a más difícil" : ""}. Con raya roja abajo: tienen solución paso a paso.</p><p class="pau-chips">${ini.map(chipEnlace).join("")}</p>
      ${resto.length ? `<details class="pau-resto"><summary>Ver los ${resto.length} restantes</summary><p class="pau-chips">${resto.map(chipEnlace).join("")}</p></details>` : ""}</details>`;
  };

  /* ---------- «Ha salido en» de cada problema tipo ---------- */
  $$("[data-salido]").forEach(el => {
    const t = +el.dataset.salido, xs = ordena(EX.filter(e => e.T.includes(t)));
    const A = xs.filter(e => e.c === "Andalucía"), O = xs.filter(e => e.c !== "Andalucía");
    const conSol = xs.filter(e => SOL[e.n]);
    el.innerHTML = `<p class="pl-salido"><b>Ha salido en ${xs.length} ${xs.length === 1 ? "ejercicio" : "ejercicios"} de selectividad</b> (2017-2026): ${A.length} de Andalucía y ${O.length} de otras comunidades. <a href="selectividad.html#t${t}">Verlos en la lista</a>.</p>
      ${conSol.length ? `<p class="pau-ayuda">Con solución paso a paso: ${conSol.slice(0,8).map(chipEnlace).join("")}</p>` : ""}
      <p class="pau-chips">${A.slice(0,10).map(chipEnlace).join("")}${O.slice(0,10).map(chipEnlace).join("")}</p>
      ${xs.length > 20 ? `<p class="pau-ayuda">Y ${xs.length - Math.min(10,A.length) - Math.min(10,O.length)} más en la <a href="selectividad.html#t${t}">lista con filtros</a>.</p>` : ""}`;
  });

  /* ---------- repaso ---------- */
  const rep = $("[data-repaso-pl]");
  if(rep){
    const sel = $("#rep-seleccion");
    if(sel) sel.innerHTML = SEL.map((b, i) => `<li class="pau-bloque"><h3>${i+1}. ${esc(b.t)}</h3><p class="pau-ayuda">${esc(b.d)}</p>
      <ol class="pau-lista">${b.x.map(x => { const e = POR.get(x.n); return e ? `<li class="pau-item" data-n="${e.n}"><p class="pau-porque"><b>Por qué este:</b> ${x.por}</p>${ficha(e)}<details class="sol"><summary>Resultado</summary><div class="dentro">${x.res}</div></details></li>` : ""; }).join("")}</ol></li>`).join("");
    LISTA_ACTUAL = SEL.flatMap(b => b.x.map(x => x.n));
    const sig = $("#rep-siguiente");
    if(sig) sig.addEventListener("click", () => { const li = $$("#rep-seleccion li[data-n]").find(x => !HECHOS.has(+x.dataset.n)); if(li){ li.scrollIntoView({behavior:"smooth", block:"start"}); $(".pau-n", li).focus({preventScroll:true}); } });
    const porT = $("#rep-tipos"), porE = $("#rep-enun");
    if(porT) porT.innerHTML = Object.keys(TIP).map(t => { const xs = EX.filter(e => e.T.includes(+t)); return xs.length ? grupo(xs, `<span class="pau-letra">${t}</span> ${esc(TIP[t][0])}`, PICK[t]) : ""; }).join("");
    if(porE) porE.innerHTML = SIT.map(([k, primero]) => { const xs = EX.filter(e => e.t.includes(k)); return grupo(xs, `${esc(ENU[k][0])} <small class="pau-ayuda">${esc(ENU[k][1])}</small>`, primero); }).join("");
    compone(rep); progreso();
  }
  if(!$("#pau")){ progreso(); return; }

  /* ---------- tabla ---------- */
  let resalte = null;
  const chip = (e, conv=true) => `<button type="button" class="pau-chip${SOL[e.n]?" con-sol":""}${HECHOS.has(e.n)?" hecho":""}" data-n="${e.n}" data-t="${e.T.join(" ")}" data-e="${e.t.join(" ")}" title="${esc("nº "+e.n+" · "+nombresT(e)+" · "+titulo(e))}">${e.T.join("·")}${PUNTOS[e.lv]}<small>${conv ? convCorta(e)+" " : ""}${e.n}</small></button>`;
  const anos = [...new Set(EX.map(e => e.y))].filter(Boolean).sort((a,b) => b-a);
  const COMS = [...new Set(EX.map(e => e.c))].filter(c => c !== "Andalucía").sort((a,b) => a.localeCompare(b,"es"));
  function tabla(){
    const cuenta = t => EX.filter(e => e.T.includes(t)).length;
    const li = t => `<li><button type="button" data-res="t${t}" aria-pressed="false"><b>${t}</b> ${esc(TIP[t][0])} <small>(${cuenta(t)})</small></button></li>`;
    $("#pau-leyenda").innerHTML = `<p class="pau-ayuda"><b>Los números son los problemas tipo.</b> Son los mismos de la página <a href="problemas-tipo.html">Problemas tipo</a>. Toca uno para resaltar sus ejercicios:</p>
      <p class="pl-tipos-grupo">El ejercicio</p><ul class="pau-ley">${[1,2,3].map(li).join("")}</ul>
      <p class="pl-tipos-grupo">La solución</p><ul class="pau-ley">${[4,5,6].map(li).join("")}</ul>
      <p class="pl-tipos-grupo">Lo que te preguntan además</p><ul class="pau-ley">${[7,8,9,10,11,12,13,14,15,16,17].map(li).join("")}</ul>
      <p class="pau-ayuda"><b>Los puntos son la dificultad</b>: • básica, •• media, ••• alta. Debajo va el número del ejercicio (fuera de Andalucía, también la convocatoria). Con raya roja abajo: tiene solución paso a paso.</p>`;
    $("#pau-resaltar").innerHTML = `<span>Resaltar el tipo de enunciado:</span>` + Object.keys(ENU).map(k => `<button type="button" class="pau-letra-b" data-res="e${k}" aria-pressed="false" title="${esc(ENU[k][1])}">${esc(ENU[k][0])}</button>`).join("");
    const A = EX.filter(e => e.c === "Andalucía");
    const cols = [["MOD","Modelo"],["ORD","Ordinaria"],["R1","Reserva 1 · Ord. supl. 1"],["R2","Reserva 2 · Ord. supl. 2"],["EXT","Extraord."],["R3","Reserva 3 · Ext. supl. 1"],["R4","Reserva 4 · Ext. supl. 2"]];
    let h = `<h3 class="pau-tt">Andalucía <small>(${A.length})</small></h3><p class="pau-ayuda">Hasta 2023, Reservas 1 a 4; desde 2024, las suplentes de la ordinaria (1 y 2) y de la extraordinaria (1 y 2). El nº 99 es de 2013 y no está en la tabla: búscalo en la lista.</p><div class="pau-scroll" tabindex="0" role="region" aria-label="Tabla de Andalucía"><table class="pau-tabla"><thead><tr><th scope="col">Año</th>${cols.map(c=>`<th scope="col">${c[1]}</th>`).join("")}</tr></thead><tbody>`;
    anos.forEach(y => { if(!A.some(e => e.y === y) || y < 2017) return; h += `<tr><th scope="row">${y}</th>` + cols.map(c => `<td>${A.filter(e => e.y===y && e.v===c[0]).map(e => chip(e,false)).join("")}</td>`).join("") + "</tr>"; });
    h += `</tbody></table></div>`;
    const O = EX.filter(e => e.c !== "Andalucía");
    h += `<h3 class="pau-tt">Resto de comunidades <small>(${O.length})</small></h3><p class="pau-ayuda">Debajo de cada número: O ordinaria (junio), E extraordinaria (julio o septiembre), M modelo. Desliza la tabla para ver todas las comunidades.</p>`;
    h += `<div class="pau-scroll" tabindex="0" role="region" aria-label="Tabla del resto de comunidades"><table class="pau-tabla otras"><thead><tr><th scope="col">Año</th>${COMS.map(c=>`<th scope="col"><span>${esc(c)}</span></th>`).join("")}</tr></thead><tbody>`;
    anos.forEach(y => { if(!O.some(e => e.y === y)) return; h += `<tr><th scope="row">${y}</th>` + COMS.map(c => `<td>${O.filter(e => e.y===y && e.c===c).map(e => chip(e)).join("")}</td>`).join("") + "</tr>"; });
    h += "</tbody></table></div>";
    $("#pau-tablas").innerHTML = h; resalte = null;
  }
  const aplicaResalte = () => {
    $$("#v-tabla [data-res]").forEach(x => x.setAttribute("aria-pressed", String(x.dataset.res === resalte)));
    $$("#pau-tablas .pau-chip").forEach(c => {
      const ok = !resalte || (resalte[0] === "t" ? c.dataset.t.split(" ").includes(resalte.slice(1)) : c.dataset.e.split(" ").includes(resalte.slice(1)));
      c.classList.toggle("apagado", !ok);
    });
  };
  document.addEventListener("click", ev => { const b = ev.target.closest("#v-tabla [data-res]"); if(!b) return; resalte = resalte === b.dataset.res ? null : b.dataset.res; aplicaResalte(); });
  let SUBRAYA = false;
  $("#pau-subraya").addEventListener("click", ev => { SUBRAYA = !SUBRAYA; ev.currentTarget.setAttribute("aria-pressed", String(SUBRAYA)); $("#v-tabla").classList.toggle("subrayando", SUBRAYA); });
  let VOLVER = "#lista", RECUERDA = null;
  $("#pau-tablas").addEventListener("click", ev => {
    const c = ev.target.closest(".pau-chip[data-n]"); if(!c) return;
    const n = +c.dataset.n;
    if(SUBRAYA){ HECHOS.has(n) ? HECHOS.delete(n) : HECHOS.add(n); guarda(); progreso(); return; }
    VOLVER = "#tabla"; LISTA_ACTUAL = null; location.hash = "e" + n;
  });
  const imprime = blanco => { document.documentElement.classList.toggle("imprime-blanco", blanco); document.documentElement.classList.add("imprime-tabla"); setTimeout(() => { window.print(); document.documentElement.classList.remove("imprime-tabla","imprime-blanco"); }, 50); };
  $("#pau-imp-blanco").addEventListener("click", () => imprime(true));
  $("#pau-imp-mios").addEventListener("click", () => imprime(false));

  /* ---------- lista con filtros ---------- */
  if(window.innerWidth < 700) $("#pau-filtros-d").open = false;
  const opts = (sel, arr) => { const v = sel.value; sel.innerHTML = arr.map(([v,t]) => `<option value="${esc(v)}">${esc(t)}</option>`).join(""); if(arr.some(x => x[0] === v)) sel.value = v; };
  opts($("#f-t"), [["","Todos"], ...Object.keys(TIP).map(t => [t, `${t}. ${TIP[t][0]}`])]);
  opts($("#f-e"), [["","Todos"], ...Object.keys(ENU).map(k => [k, ENU[k][0]])]);
  opts($("#f-c"), [["","Todas"],["Andalucía","Andalucía"],["otras","Todas menos Andalucía"], ...COMS.map(c => [c,c])]);
  opts($("#f-y"), [["","Todos"], ...anos.map(y => [String(y), String(y)])]);
  const sinAc = s => s.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();
  const TXT = new Map(EX.map(e => [e.n, sinAc(`${e.n} ${titulo(e)} ${e.T.map(t => TIP[t][0]).join(" ")} ${e.t.map(k => ENU[k][0]).join(" ")} ${e.b.replace(/<[^>]+>/g," ")}`)]));
  function filtrados(){
    const q = sinAc($("#f-q").value.trim()), t = $("#f-t").value, en = $("#f-e").value, lv = $("#f-lv").value, c = $("#f-c").value, y = $("#f-y").value, v = $("#f-v").value;
    const s = $("#f-s").checked, p = $("#f-p").checked;
    const ws = q.split(/\s+/).filter(Boolean);
    return EX.filter(e =>
      (!t || e.T.includes(+t)) && (!en || e.t.includes(en)) && (!lv || e.lv === +lv) &&
      (!c || (c === "otras" ? e.c !== "Andalucía" : e.c === c)) && (!y || e.y === +y) &&
      (!v || (v==="SUP" ? SUP(e) : e.v === v)) && (!s || SOL[e.n]) && (!p || !HECHOS.has(e.n)) &&
      ws.every(w => TXT.get(e.n).includes(w)));
  }
  let MOSTRADOS = 0, XS = [];
  const PASO = 25;
  function pintaLista(reinicia){
    if(reinicia){ XS = filtrados(); LISTA_ACTUAL = XS.map(e => e.n); MOSTRADOS = 0; $("#pau-lista").innerHTML = ""; }
    const nuevos = XS.slice(MOSTRADOS, MOSTRADOS + PASO);
    const frag = document.createElement("ul");
    frag.innerHTML = nuevos.map(e => `<li class="pau-item" id="item-${e.n}">${ficha(e)}</li>`).join("");
    const lis = [...frag.children]; lis.forEach(li => $("#pau-lista").appendChild(li)); lis.forEach(compone);
    MOSTRADOS += nuevos.length;
    $("#pau-cuenta").textContent = (XS.length === 1 ? "1 ejercicio" : `${XS.length} ejercicios`) + (XS.length > MOSTRADOS ? ` (ves ${MOSTRADOS})` : "");
    $("#pau-mas").hidden = MOSTRADOS >= XS.length;
    $("#pau-mas").textContent = `Ver ${Math.min(PASO, XS.length - MOSTRADOS)} más`;
    if(!XS.length) $("#pau-lista").innerHTML = `<li class="pau-vacio">Ningún ejercicio cumple todos los filtros. Quita alguno con «Quitar filtros».</li>`;
    guardaFiltros();
  }
  const IDS = ["f-q","f-t","f-e","f-lv","f-c","f-y","f-v","f-s","f-p"];
  function guardaFiltros(){ try{ sessionStorage.setItem("mates:pl-filtros", JSON.stringify(IDS.map(i => { const el = $("#"+i); return el.type==="checkbox" ? el.checked : el.value; }))); }catch(e){} }
  try{ const f = JSON.parse(sessionStorage.getItem("mates:pl-filtros")); if(f) IDS.forEach((i,k) => { const el = $("#"+i); if(el.type==="checkbox") el.checked = !!f[k]; else el.value = f[k] ?? ""; }); }catch(e){}
  let tq; $("#pau-filtros").addEventListener("input", ev => { clearTimeout(tq); tq = setTimeout(() => pintaLista(true), ev.target.id === "f-q" ? 250 : 0); });
  $("#pau-filtros").addEventListener("submit", ev => ev.preventDefault());
  $("#pau-mas").addEventListener("click", () => pintaLista(false));
  const limpia = () => IDS.forEach(i => { const el = $("#"+i); if(el.type==="checkbox") el.checked = false; else el.value = ""; });
  $("#pau-limpia").addEventListener("click", () => { limpia(); pintaLista(true); });
  $("#pau-azar").addEventListener("click", () => { const xs = filtrados(); if(!xs.length) return; proyecta(xs[Math.floor(Math.random()*xs.length)].n, xs.map(e => e.n)); });
  $("#pau-proy-lista").addEventListener("click", () => { const xs = filtrados(); if(!xs.length) return; proyecta(xs[0].n, xs.map(e => e.n)); });
  $("#pau-lista").addEventListener("click", ev => { const a = ev.target.closest("a.pau-n"); if(a){ VOLVER = "#lista"; RECUERDA = window.scrollY; } });

  /* ---------- un ejercicio ---------- */
  function abre(n){
    const e = POR.get(n); if(!e){ location.hash = "lista"; return; }
    const caja = $("#pau-ej");
    caja.innerHTML = `<article class="pau-item solo">${ficha(e)}</article>`;
    compone(caja);
    const lista = LISTA_ACTUAL && LISTA_ACTUAL.includes(n) ? LISTA_ACTUAL : EX.map(x => x.n);
    const i = lista.indexOf(n), ant = lista[i-1], sig = lista[i+1];
    const pon = (el, m) => { el.hidden = !m; if(m){ const x = POR.get(m); el.href = "#e" + m; el.querySelector("b").textContent = `nº ${m} · ${titulo(x)}`; } };
    pon($("#pau-ant"), ant); pon($("#pau-sig"), sig);
    $("#pau-volver").href = VOLVER; $("#pau-volver").textContent = VOLVER === "#lista" ? "← Volver a la lista" : "← Volver a la tabla";
    document.title = `nº ${e.n} · ${titulo(e)} · Selectividad de Programación lineal`;
  }

  /* ---------- rutas: #tabla, #lista, #e38 (un ejercicio), #t7 (lista de un problema tipo) ---------- */
  const titulo0 = document.title;
  function ruta(){
    const h = location.hash.slice(1) || "tabla";
    const m = h.match(/^e(\d+)$/), mt = h.match(/^t(\d+)$/);
    if(mt && TIP[mt[1]]){ limpia(); $("#f-t").value = mt[1]; history.replaceState(null, "", "#lista"); }
    const vista = m ? "ej" : (mt || h === "lista") ? "lista" : "tabla";
    $("#v-tabla").hidden = vista !== "tabla";
    $("#v-lista").hidden = vista !== "lista";
    $("#v-ej").hidden = vista !== "ej";
    $$(".pau-vistas a").forEach(a => a.setAttribute("aria-current", a.dataset.vista === vista || (vista==="ej" && VOLVER==="#"+a.dataset.vista) ? "page" : "false"));
    if(vista === "tabla"){ document.title = titulo0; tabla(); progreso(); }
    if(vista === "lista"){ document.title = titulo0; if(mt || !$("#pau-lista").children.length) pintaLista(true); if(RECUERDA != null){ const y = RECUERDA; RECUERDA = null; setTimeout(() => window.scrollTo(0, y), 30); } }
    if(vista === "ej"){ abre(+m[1]); window.scrollTo(0, $("#pau").offsetTop - 70); }
  }
  window.addEventListener("hashchange", ruta);
  ruta(); progreso();
}
if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", arranca); else arranca();
})();

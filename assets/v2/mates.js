/* ==========================================================================
   mates.js — comportamiento común de las páginas nuevas
   · Las fórmulas vienen ya compuestas en el HTML (KaTeX al montar la web);
     aquí solo se componen las que crean los laboratorios.
   · Ejemplos resueltos: los pasos se destapan uno a uno (como tapar con un folio)
   · Autoevaluación: corrige en verde o en rojo, con texto, y explica por qué
   · Índice del margen: la gráfica de la almazara, con su esquina, se dibuja según avanzas
   · Modo pizarra para proyectar en clase
   · Recuerda la última página abierta para «Seguir donde lo dejaste»
   ========================================================================== */
(function(){
"use strict";
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
const guarda = (k, v) => { try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} };
const lee = (k) => { try{ return JSON.parse(localStorage.getItem(k)); }catch(e){ return null; } };

/* ---------- 1. Fórmulas creadas en el navegador ---------- */
function tex(src, display){
  const s = src.replace(/(\d),(\d)/g, "$1{,}$2");
  if(!window.katex) return src;
  try{ return katex.renderToString(s, {displayMode:display, throwOnError:false, strict:false, output:"htmlAndMathml"}); }
  catch(e){ return src; }
}
function formulas(raiz){
  if(!window.katex) return;
  const andar = document.createTreeWalker(raiz, NodeFilter.SHOW_TEXT, {acceptNode(n){
    if(!n.nodeValue.includes("$")) return NodeFilter.FILTER_REJECT;
    return n.parentNode.closest("script,style,textarea,code,.katex") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
  }});
  const nodos = []; while(andar.nextNode()) nodos.push(andar.currentNode);
  nodos.forEach(n=>{
    const partes = n.nodeValue.split(/(\$\$[\s\S]+?\$\$|\$[^$]+?\$)/);
    if(partes.length < 2) return;
    const frag = document.createDocumentFragment();
    partes.forEach((t,i)=>{
      if(i%2===0){ if(t) frag.appendChild(document.createTextNode(t)); return; }
      const disp = t.startsWith("$$"), span = document.createElement("span");
      span.innerHTML = tex(disp ? t.slice(2,-2) : t.slice(1,-1), disp);
      frag.appendChild(disp ? span : (span.firstChild || span));
    });
    n.parentNode.replaceChild(frag, n);
  });
}
window.Mates = {tex, formulas};

/* ---------- 2. Ejemplos con pasos que se destapan ---------- */
function ejemplos(){
  $$(".ejemplo").forEach(ej=>{
    const pasos = $$(".paso", ej), resp = $(".respuesta", ej);
    if(!pasos.length) return;
    let vistos = 0;
    const tapa = document.createElement("div");
    tapa.className = "tapa";
    tapa.innerHTML = `<span class="cuenta" aria-live="polite"></span>
      <button type="button" class="boton azul" data-acc="sig"></button>
      <button type="button" class="boton fino" data-acc="todo">Ver la solución entera</button>
      <button type="button" class="boton fino" data-acc="tapar" hidden>Tapar otra vez</button>`;
    $(".pasos", ej).after(tapa);
    const [bSig, bTodo, bTapar] = ["sig","todo","tapar"].map(a=>$(`[data-acc="${a}"]`, tapa));
    pasos.forEach(p=>p.tabIndex=-1);
    const pinta = () => {
      const fin = vistos >= pasos.length;
      pasos.forEach((p,i)=> p.hidden = i >= vistos);
      if(resp) resp.hidden = !fin;
      $(".cuenta", tapa).textContent = fin ? "Solución completa." :
        (vistos ? `Llevas ${vistos} de ${pasos.length} pasos. Intenta el siguiente antes de destaparlo.` : `${pasos.length} pasos. Piensa el primero antes de destaparlo.`);
      bSig.hidden = fin; bTodo.hidden = fin; bTapar.hidden = !fin;
      bSig.textContent = `Destapar el paso ${Math.min(vistos+1, pasos.length)}`;
    };
    tapa.addEventListener("click", e=>{
      const b = e.target.closest("button"); if(!b) return;
      if(b === bSig){ if(vistos >= pasos.length) return; vistos++; pinta(); pasos[vistos-1].scrollIntoView({block:"nearest"});
        (vistos >= pasos.length ? bTapar : bSig).focus({preventScroll:true}); }
      if(b === bTodo){ vistos = pasos.length; pinta(); pasos[0].focus(); }
      if(b === bTapar){ vistos = 0; pinta(); ej.scrollIntoView({block:"start"}); bSig.focus({preventScroll:true}); }
    });
    ej._sig = () => { if(vistos < pasos.length){ vistos++; pinta(); pasos[vistos-1].scrollIntoView({block:"center"}); return true; } return false; };
    ej._ant = () => { if(vistos > 0){ vistos--; pinta(); return true; } return false; };
    ej._todo = () => { vistos = pasos.length; pinta(); };
    ej._vistos = () => vistos;
    ej._pon = n => { vistos = Math.max(0, Math.min(pasos.length, n)); pinta(); };
    pinta();
  });
}

/* ---------- 3. Autoevaluación ---------- */
function pruebas(){
  $$(".prueba").forEach(pr=>{
    const items = $$(":scope>li", pr);
    const marc = pr.nextElementSibling && pr.nextElementSibling.classList.contains("marcador") ? pr.nextElementSibling : null;
    const clave = "prueba:" + location.pathname + ":" + (pr.id||"");
    const pintaMarc = () => {
      if(!marc) return;
      const hechas = items.filter(li=>li.dataset.respondida), bien = hechas.filter(li=>li.dataset.respondida==="bien");
      marc.innerHTML = hechas.length===items.length
        ? `<span class="num">${bien.length}/${items.length}</span><span>${bien.length===items.length ? (marc.dataset.fin || "Todo bien. Puedes pasar a los ejercicios de examen.") : (items.length===1 ? "Lee debajo el porqué." : "Repasa las que tienes en rojo: debajo de cada una está el porqué.")}</span><button type="button" class="boton fino" data-otra>Repetir</button>`
        : (items.length > 1 ? `<span class="tenue">${hechas.length} de ${items.length} respondidas</span>` : "");
      const b = $("[data-otra]", marc);
      if(b) b.onclick = () => { items.forEach(li=>{ delete li.dataset.respondida;
          $$("button",li).forEach(x=>{ x.disabled=false; delete x.dataset.estado; const m=$(".marca-c",x); if(m) m.remove(); });
          $(".porque",li).classList.remove("mal"); });
        guarda(clave, null); pintaMarc(); $(".opciones button", items[0]).focus(); };
    };
    const responde = (li, b, enfocar) => {
      const bs = $$(".opciones button", li), porque = $(".porque", li);
      if(li.dataset.respondida) return;
      const bien = b.hasAttribute("data-bien");
      const marca = (x, ok) => { x.dataset.estado = ok ? "bien" : "mal"; x.insertAdjacentHTML("beforeend", `<span class="marca-c">${ok ? "✓ correcta" : "✗ no"}</span>`); };
      marca(b, bien);
      if(!bien){ const c = bs.find(x=>x.hasAttribute("data-bien")); if(c) marca(c, true); }
      li.dataset.respondida = bien ? "bien" : "mal";
      porque.classList.toggle("mal", !bien);
      porque.tabIndex = -1;
      bs.forEach(x=>x.disabled = true);
      if(enfocar) porque.focus();
    };
    items.forEach((li,i)=>{
      $$(".opciones button", li).forEach((b,k)=>b.addEventListener("click", ()=>{
        if(li.dataset.respondida) return;
        responde(li, b, true);
        const g = lee(clave) || {}; g[i] = k; guarda(clave, g); pintaMarc();
      }));
    });
    const g = lee(clave);
    if(g) Object.entries(g).forEach(([i,k])=>{ const li = items[i]; if(li){ const b = $$(".opciones button",li)[k]; if(b) responde(li, b, false); }});
    pintaMarc();
  });
}

/* ---------- 4. Índice del margen: la almazara dibujada en vertical ----------
   Los apartados son puntos de B(t) = −0,04t² + 2,4t (t < 40), (40t − 320)/t (t ≥ 40):
   sube, baja y hace esquina. La firma de la web es una función de verdad. */
function indice(){
  const nav = $(".hilo"); if(!nav) return;
  const enlaces = $$("a[href^='#']", nav);
  const secs = enlaces.map(a=>document.getElementById(a.getAttribute("href").slice(1))).filter(Boolean);
  const svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
  svg.setAttribute("class","traza"); svg.setAttribute("aria-hidden","true");
  nav.prepend(svg);
  const B = t => t < 40 ? -0.04*t*t + 2.4*t : (40*t-320)/t;
  const X = t => 3 + 21 * (B(t) / 36);
  let ys = [], camino = null, L = 0;
  const notas = $$(".con-nota>.nota");
  const dibuja = () => {
    const b = nav.getBoundingClientRect(), h = b.height;
    ys = enlaces.map(a=>{ const r = a.getBoundingClientRect(); return r.top - b.top + r.height/2; });
    if(ys.length < 2) return;
    const y0 = ys[0], y1 = ys[ys.length-1], tDeY = y => 50 * (y - y0) / Math.max(1, y1 - y0);
    let d = "";
    for(let k=0;k<=160;k++){ const y = y0 + (y1-y0)*k/160; d += (k?"L":"M") + X(tDeY(y)).toFixed(2) + " " + y.toFixed(2); }
    svg.setAttribute("viewBox", `0 0 28 ${h}`); svg.style.height = h + "px";
    svg.innerHTML = `<path d="${d}" fill="none" stroke="var(--cuadro-fuerte)" stroke-width="2"/>
      <path class="avance" d="${d}" fill="none" stroke="var(--azul)" stroke-width="2.4" stroke-linecap="round"/>
      <circle class="esquina" cx="${X(40).toFixed(2)}" cy="${(y0+(y1-y0)*0.8).toFixed(2)}" r="2.6" fill="var(--rojo)"/>
      ${ys.map(y=>`<circle cx="${X(tDeY(y)).toFixed(2)}" cy="${y.toFixed(2)}" r="4.2" fill="var(--papel)" stroke="var(--cuadro-fuerte)" stroke-width="2"/>`).join("")}`;
    camino = $(".avance", svg); L = camino.getTotalLength();
    actualiza();
  };
  const actualiza = () => {
    let act = 0;
    secs.forEach((s,i)=>{ if(s.getBoundingClientRect().top < innerHeight*0.35) act = i; });
    if(innerHeight + scrollY >= document.documentElement.scrollHeight - 4) act = secs.length - 1;
    enlaces.forEach((a,i)=>{ if(i===act) a.setAttribute("aria-current","location"); else a.removeAttribute("aria-current"); });
    if(!camino) return;
    const s = secs[act], sig = secs[act+1];
    let frac = 0;
    if(s && sig){ const top = s.getBoundingClientRect().top, fin = sig.getBoundingClientRect().top;
      frac = Math.min(1, Math.max(0, (innerHeight*0.35 - top) / Math.max(1, fin - top))); }
    const y = ys[act] + (ys[act+1] !== undefined ? (ys[act+1]-ys[act])*frac : 0);
    let lo = 0, hi = L; for(let k=0;k<24;k++){ const m=(lo+hi)/2; if(camino.getPointAtLength(m).y < y) lo = m; else hi = m; }
    camino.style.strokeDasharray = `${lo} ${L}`;
    const ri = nav.closest(".indice").getBoundingClientRect();
    notas.forEach(n=>{ const r = n.getBoundingClientRect(); n.classList.toggle("cruza", r.bottom > ri.top - 6 && r.top < ri.bottom + 6 && r.right <= ri.right + 40); });
    $$("circle:not(.esquina)", svg).forEach((c,i)=>{ const ok = i<=act; c.setAttribute("fill", ok ? "var(--azul)" : "var(--papel)"); c.setAttribute("stroke", ok ? "var(--azul)" : "var(--cuadro-fuerte)"); });
  };
  let pend = false;
  addEventListener("scroll", ()=>{ if(!pend){ pend = true; requestAnimationFrame(()=>{ pend=false; actualiza(); }); } }, {passive:true});
  addEventListener("resize", dibuja);
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(dibuja);
  dibuja();
}

/* ---------- 5. Modo pizarra ---------- */
function pizarra(){
  const b = $("[data-pizarra]"); if(!b) return;
  const pon = (on) => { document.body.classList.toggle("pizarra", on); b.setAttribute("aria-pressed", on);
    const t = $(".txt",b); if(t) t.textContent = on ? "Salir de pizarra" : "Pizarra"; };
  b.addEventListener("click", ()=>{ const on = !document.body.classList.contains("pizarra"); pon(on);
    if(on && document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(()=>{});
    if(!on && document.fullscreenElement) document.exitFullscreen().catch(()=>{}); });
  if(new URLSearchParams(location.search).get("modo")==="pizarra") pon(true);
  document.addEventListener("keydown", e=>{
    if(!document.body.classList.contains("pizarra")) return;
    if(e.target.closest("input,textarea,select")) return;
    const ejs = $$(".ejemplo"); if(!ejs.length) return;
    const vis = ejs.find(ej=>{ const r = ej.getBoundingClientRect(); return r.bottom > 80 && r.top < innerHeight*0.6; }); if(!vis) return;
    const libre = e.target === document.body || e.target === document.documentElement;
    if(e.key==="ArrowRight"||e.key==="PageDown"||(e.key===" " && libre)){ if(vis._sig && vis._sig()) e.preventDefault(); }
    if(e.key==="ArrowLeft"||e.key==="PageUp"){ if(vis._ant && vis._ant()) e.preventDefault(); }
  });
}

/* ---------- 6. Recordar la última página ---------- */
function recuerda(){
  const m = $('meta[name="mates:pagina"]');
  if(m) guarda("mates:ultima", {url:location.pathname, titulo:m.content, curso:($('meta[name="mates:curso"]')||{}).content||"", fecha:Date.now()});
  $$("[data-seguir]").forEach(hueco=>{ const u = lee("mates:ultima");
    if(u && u.url && u.url !== location.pathname){ hueco.hidden = false;
      const a = document.createElement("a"); a.href = u.url; a.textContent = (u.curso ? u.curso + ", " : "") + u.titulo;
      hueco.innerHTML = `<span class="nota">Seguir donde lo dejaste:</span> `; hueco.appendChild(a); } });
}

/* ---------- 7. Imprimir: con todas las soluciones abiertas ---------- */
function imprimir(){
  $$("[data-imprimir]").forEach(b=>b.addEventListener("click", ()=>window.print()));
  let cerrados = [], estado = [];
  addEventListener("beforeprint", ()=>{ cerrados = $$("details:not([open])"); cerrados.forEach(d=>d.open = true);
    estado = $$(".ejemplo").map(ej=>ej._vistos ? ej._vistos() : 0); $$(".ejemplo").forEach(ej=>ej._todo && ej._todo()); });
  addEventListener("afterprint", ()=>{ cerrados.forEach(d=>d.open = false); $$(".ejemplo").forEach((ej,i)=>ej._pon && ej._pon(estado[i]||0)); });
}

/* ---------- 8. Mapa del bloque: al señalar un apartado se iluminan sus requisitos ---------- */
function mapa(){
  const m = $("[data-mapa]"); if(!m) return;
  const ayuda = $("[data-ayuda]"), base = ayuda ? ayuda.textContent : "";
  const paradas = $$(".parada", m);
  const necesita = id => { const p = document.getElementById(id), q = p && $(".parada", p); return q ? q.dataset.necesita.split(" ").filter(Boolean) : []; };
  const todos = (id, acc=new Set()) => { necesita(id).forEach(r=>{ if(!acc.has(r)){ acc.add(r); todos(r, acc); } }); return acc; };
  const publicado = id => { const li = document.getElementById(id); return !!(li && $("a.parada", li)); };
  paradas.forEach(p=>{ const n = necesita(p.closest("li").id), falta = n.some(r=>!publicado(r)) && p.tagName === "A";
    p.insertAdjacentHTML("beforeend", `<span class="nec">${n.length ? "Necesitas: " + n.join(", ") + (falta ? " (lo imprescindible se explica dentro)" : "") : "Puedes empezar por aquí"}</span>`); });
  const enciende = (p) => {
    const id = p.closest("li").id, req = todos(id);
    m.classList.add("activo");
    paradas.forEach(q=>{ const qi = q.closest("li").id; q.classList.toggle("req", req.has(qi)); q.classList.toggle("foco", qi===id); });
    if(ayuda) ayuda.textContent = req.size ? `Para ${id} necesitas antes: ${[...req].sort().join(", ")}.` : `${id} no necesita ningún apartado anterior.`;
  };
  const apaga = () => { m.classList.remove("activo"); paradas.forEach(q=>q.classList.remove("req","foco")); if(ayuda) ayuda.textContent = base; };
  paradas.forEach(p=>{
    p.addEventListener("mouseenter", ()=>enciende(p)); p.addEventListener("focus", ()=>enciende(p));
    p.addEventListener("mouseleave", apaga); p.addEventListener("blur", apaga);
  });
}

/* ---------- 9. Del texto al laboratorio: «Verlo en la gráfica» ---------- */
function puentes(){
  $$("[data-poner]").forEach(b=>b.addEventListener("click", ()=>{
    const lab = document.getElementById(b.dataset.poner); if(!lab) return;
    if(!lab._listo && window.arrancaLab){ lab.addEventListener("lab:listo", ()=>b.click(), {once:true}); window.arrancaLab(lab); return; }
    if(!lab.querySelector("input,button")) { lab.addEventListener("lab:listo", ()=>b.click(), {once:true}); return; }
    const vals = JSON.parse(b.dataset.valores || "{}");
    if(vals.caso){ const seg = lab.querySelector(`button[data-k="${vals.caso}"]`); if(seg) seg.click(); }
    Object.entries(vals).forEach(([k,v])=>{ if(k==="caso") return;
      const inp = lab.querySelector(`input[data-p="${k}"]`); if(inp){ inp.value = v; inp.dispatchEvent(new Event("input")); } });
    lab.scrollIntoView({block:"center", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"});
    lab.classList.add("avisado"); setTimeout(()=>lab.classList.remove("avisado"), 1800);
    const r = lab.querySelector("input,button"); if(r) r.focus({preventScroll:true});
  }));
}

document.addEventListener("DOMContentLoaded", ()=>{
  formulas(document.body);
  ejemplos();
  if(location.hash){ const ancla = () => { const d = document.getElementById(location.hash.slice(1)); if(d){ if(d.tagName === "DETAILS") d.open = true; d.scrollIntoView({block:"start"}); } };
    document.addEventListener("lab:listo", ancla, true); addEventListener("load", ()=>setTimeout(ancla, 50)); }
  const q = new URLSearchParams(location.search).get("pasos"), dest = location.hash && document.getElementById(location.hash.slice(1));
  if(q && dest && dest._pon){ dest._pon(+q); requestAnimationFrame(()=>dest.scrollIntoView({block:"start"})); }
  pruebas(); indice(); pizarra(); recuerda(); imprimir(); mapa(); puentes();
  document.dispatchEvent(new Event("mates:listo"));
});
})();

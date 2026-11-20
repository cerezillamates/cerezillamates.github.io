/* ==========================================================================
   mates.js — comportamiento común de las páginas nuevas
   · Fórmulas: $…$ en línea y $$…$$ centradas, con KaTeX local
   · Ejemplos resueltos: los pasos se destapan uno a uno (como tapar con un folio)
   · Autoevaluación: corrige en verde o en rojo y explica por qué
   · Índice del margen: una curva que se dibuja según avanzas
   · Modo pizarra para proyectar en clase
   · Recuerda la última página abierta para «Seguir donde lo dejaste»
   ========================================================================== */
(function(){
"use strict";
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
const guarda = (k, v) => { try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} };
const lee = (k) => { try{ return JSON.parse(localStorage.getItem(k)); }catch(e){ return null; } };

/* ---------- 1. Fórmulas ---------- */
function tex(src, display){
  const s = src.replace(/(\d),(\d)/g, "$1{,}$2");          // coma decimal española
  try{ return katex.renderToString(s, {displayMode:display, throwOnError:false, strict:false, output:"html"}); }
  catch(e){ return src; }
}
function formulas(raiz){
  if(!window.katex) return;
  const andar = document.createTreeWalker(raiz, NodeFilter.SHOW_TEXT, {acceptNode(n){
    if(!n.nodeValue.includes("$")) return NodeFilter.FILTER_REJECT;
    const p = n.parentNode.closest("script,style,textarea,code,.katex");
    return p ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
  }});
  const nodos = []; while(andar.nextNode()) nodos.push(andar.currentNode);
  nodos.forEach(n=>{
    const partes = n.nodeValue.split(/(\$\$[\s\S]+?\$\$|\$[^$]+?\$)/);
    if(partes.length < 2) return;
    const frag = document.createDocumentFragment();
    partes.forEach((t,i)=>{
      if(i%2===0){ if(t) frag.appendChild(document.createTextNode(t)); return; }
      const disp = t.startsWith("$$");
      const span = document.createElement("span");
      span.innerHTML = tex(disp ? t.slice(2,-2) : t.slice(1,-1), disp);
      frag.appendChild(disp ? span : span.firstChild || span);
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
      <button type="button" class="boton azul" data-acc="sig">Destapar el paso 1</button>
      <button type="button" class="boton fino" data-acc="todo">Ver la solución entera</button>`;
    const cont = $(".pasos", ej);
    cont.after(tapa);
    const pinta = () => {
      pasos.forEach((p,i)=> p.hidden = i >= vistos);
      if(resp) resp.hidden = vistos < pasos.length;
      const sig = $('[data-acc="sig"]', tapa), todo = $('[data-acc="todo"]', tapa);
      const fin = vistos >= pasos.length;
      $(".cuenta", tapa).textContent = fin ? "Solución completa." : (vistos ? `Llevas ${vistos} de ${pasos.length} pasos. Intenta el siguiente antes de destaparlo.` : `${pasos.length} pasos. Piensa el primero antes de destaparlo.`);
      sig.hidden = fin; todo.hidden = fin;
      if(!fin) sig.textContent = `Destapar el paso ${vistos+1}`;
      if(fin){ tapa.innerHTML = `<span class="cuenta">Solución completa.</span><button type="button" class="boton fino" data-acc="tapar">Tapar otra vez</button>`; }
    };
    tapa.addEventListener("click", e=>{
      const b = e.target.closest("button"); if(!b) return;
      if(b.dataset.acc==="sig"){ vistos++; pinta(); pasos[vistos-1].scrollIntoView({block:"nearest"}); pasos[vistos-1].focus({preventScroll:true}); }
      if(b.dataset.acc==="todo"){ vistos = pasos.length; pinta(); }
      if(b.dataset.acc==="tapar"){ vistos = 0;
        tapa.innerHTML = `<span class="cuenta" aria-live="polite"></span><button type="button" class="boton azul" data-acc="sig">Destapar el paso 1</button><button type="button" class="boton fino" data-acc="todo">Ver la solución entera</button>`;
        pinta(); ej.scrollIntoView({block:"start"}); }
    });
    pasos.forEach(p=>p.tabIndex=-1);
    ej._sig = () => { if(vistos < pasos.length){ vistos++; pinta(); pasos[vistos-1].scrollIntoView({block:"center"}); return true; } return false; };
    ej._ant = () => { if(vistos > 0){ vistos--; pinta(); return true; } return false; };
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
        ? `<span class="num">${bien.length}/${items.length}</span><span>${bien.length===items.length ? "Todo bien. Puedes pasar a los ejercicios de examen." : "Repasa las que tienes en rojo: debajo de cada una está el porqué."}</span><button type="button" class="boton fino" data-otra>Repetir</button>`
        : `<span class="tenue">${hechas.length} de ${items.length} respondidas</span>`;
      const b = $("[data-otra]", marc); if(b) b.onclick = () => { items.forEach(li=>{ delete li.dataset.respondida; $$("button",li).forEach(x=>{x.disabled=false; delete x.dataset.estado;}); $(".porque",li).classList.remove("mal"); }); guarda(clave, null); pintaMarc(); };
    };
    items.forEach((li,i)=>{
      const bs = $$(".opciones button", li), porque = $(".porque", li);
      bs.forEach(b=>b.addEventListener("click", ()=>{
        if(li.dataset.respondida) return;
        const bien = b.hasAttribute("data-bien");
        b.dataset.estado = bien ? "bien" : "mal";
        if(!bien){ const c = bs.find(x=>x.hasAttribute("data-bien")); if(c) c.dataset.estado = "bien"; }
        li.dataset.respondida = bien ? "bien" : "mal";
        porque.classList.toggle("mal", !bien);
        bs.forEach(x=>x.disabled = true);
        const g = lee(clave) || {}; g[i] = bs.indexOf(b); guarda(clave, g);
        pintaMarc();
      }));
    });
    const g = lee(clave); if(g) Object.entries(g).forEach(([i,k])=>{ const li = items[i]; if(li){ const b = $$(".opciones button",li)[k]; if(b) b.click(); }});
    pintaMarc();
  });
}

/* ---------- 4. Índice del margen: una curva que avanza contigo ---------- */
function indice(){
  const nav = $(".hilo"); if(!nav) return;
  const enlaces = $$("a[href^='#']", nav);
  const secs = enlaces.map(a=>document.getElementById(a.getAttribute("href").slice(1))).filter(Boolean);
  const svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
  svg.setAttribute("class","traza"); svg.setAttribute("aria-hidden","true");
  nav.prepend(svg);
  let puntos = [];
  const dibuja = () => {
    const h = nav.getBoundingClientRect().height;
    puntos = enlaces.map(a=>{ const r = a.getBoundingClientRect(), b = nav.getBoundingClientRect(); return r.top - b.top + r.height/2; });
    svg.setAttribute("viewBox", `0 0 28 ${h}`); svg.style.height = h + "px";
    // una curva suave que serpentea entre los puntos (cada apartado es un punto de la función)
    let d = "", dl = "";
    puntos.forEach((y,i)=>{ const x = 6 + (i%2 ? 14 : 4) ; d += (i? ` S ${x} ${y-12} ${x} ${y}` : `M ${x} ${y}`); });
    svg.innerHTML = `<path d="${d}" fill="none" stroke="var(--cuadro-fuerte)" stroke-width="2"/>
      <path class="avance" d="${d}" fill="none" stroke="var(--azul)" stroke-width="2.4" stroke-linecap="round"/>
      ${puntos.map((y,i)=>`<circle cx="${6 + (i%2?14:4)}" cy="${y}" r="4.2" fill="var(--papel)" stroke="var(--cuadro-fuerte)" stroke-width="2"/>`).join("")}`;
    actualiza();
  };
  const actualiza = () => {
    let act = 0;
    secs.forEach((s,i)=>{ if(s.getBoundingClientRect().top < window.innerHeight*0.35) act = i; });
    enlaces.forEach((a,i)=>a.setAttribute("aria-current", i===act ? "true" : "false"));
    const path = $(".avance", svg), circs = $$("circle", svg);
    if(path && puntos.length){
      const L = path.getTotalLength();
      // fracción recorrida: hasta el punto activo + avance dentro de la sección
      const s = secs[act], sig = secs[act+1];
      let frac = 0;
      if(s){ const top = s.getBoundingClientRect().top, fin = sig ? sig.getBoundingClientRect().top : s.getBoundingClientRect().bottom;
        frac = Math.min(1, Math.max(0, (window.innerHeight*0.35 - top) / Math.max(1, fin - top))); }
      const y = puntos[act] + (puntos[act+1] !== undefined ? (puntos[act+1]-puntos[act])*frac : 0);
      // buscar la longitud del camino a esa altura
      let lo = 0, hi = L; for(let k=0;k<22;k++){ const m=(lo+hi)/2; if(path.getPointAtLength(m).y < y) lo = m; else hi = m; }
      path.style.strokeDasharray = `${lo} ${L}`;
      circs.forEach((c,i)=>{ c.setAttribute("fill", i<=act ? "var(--azul)" : "var(--papel)"); c.setAttribute("stroke", i<=act ? "var(--azul)" : "var(--cuadro-fuerte)"); });
    }
  };
  let pend = false;
  window.addEventListener("scroll", ()=>{ if(!pend){ pend = true; requestAnimationFrame(()=>{ pend=false; actualiza(); }); } }, {passive:true});
  window.addEventListener("resize", dibuja);
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(dibuja); else dibuja();
  dibuja();
}

/* ---------- 5. Modo pizarra ---------- */
function pizarra(){
  const b = $("[data-pizarra]"); if(!b) return;
  const pon = (on) => { document.body.classList.toggle("pizarra", on); b.setAttribute("aria-pressed", on); $(".txt",b) && ($(".txt",b).textContent = on ? "Salir de pizarra" : "Pizarra"); };
  b.addEventListener("click", ()=>{ const on = !document.body.classList.contains("pizarra"); pon(on);
    if(on && document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(()=>{});
    if(!on && document.fullscreenElement) document.exitFullscreen().catch(()=>{}); });
  if(new URLSearchParams(location.search).get("modo")==="pizarra") pon(true);
  // En pizarra, ← y → destapan o tapan pasos del ejemplo que está en pantalla
  document.addEventListener("keydown", e=>{
    if(!document.body.classList.contains("pizarra")) return;
    if(e.target.closest("input,textarea,select")) return;
    const ejs = $$(".ejemplo"); if(!ejs.length) return;
    const vis = ejs.find(ej=>{ const r = ej.getBoundingClientRect(); return r.bottom > 80 && r.top < innerHeight*0.6; }) || ejs[0];
    if(e.key==="ArrowRight"||e.key===" "||e.key==="PageDown"){ if(vis._sig && vis._sig()) e.preventDefault(); }
    if(e.key==="ArrowLeft"||e.key==="PageUp"){ if(vis._ant && vis._ant()) e.preventDefault(); }
  });
}

/* ---------- 6. Recordar la última página ---------- */
function recuerda(){
  const m = document.querySelector('meta[name="mates:pagina"]');
  if(m) guarda("mates:ultima", {url:location.pathname, titulo:m.content, curso:(document.querySelector('meta[name="mates:curso"]')||{}).content||"", fecha:Date.now()});
  const hueco = $("[data-seguir]");
  if(hueco){ const u = lee("mates:ultima");
    if(u && u.url && u.url !== location.pathname){ hueco.hidden = false;
      hueco.innerHTML = `<span class="nota">Seguir donde lo dejaste:</span> <a href="${u.url}">${u.curso ? u.curso + ", " : ""}${u.titulo}</a>`; } }
}


/* ---------- 8. Mapa del bloque: al señalar un apartado se iluminan sus requisitos ---------- */
function mapa(){
  const m = $("[data-mapa]"); if(!m) return;
  const ayuda = $("[data-ayuda]"), base = ayuda ? ayuda.textContent : "";
  const paradas = $$(".parada", m);
  const todos = (id, acc=new Set()) => { const p = document.getElementById(id); const q = p && $(".parada", p);
    (q ? q.dataset.necesita.split(" ").filter(Boolean) : []).forEach(r=>{ if(!acc.has(r)){ acc.add(r); todos(r, acc); } }); return acc; };
  const enciende = (p) => {
    const id = p.closest("li").id, req = todos(id);
    m.classList.add("activo");
    paradas.forEach(q=>{ const qi = q.closest("li").id; q.classList.toggle("req", req.has(qi)); q.classList.toggle("foco", qi===id); });
    if(ayuda) ayuda.textContent = req.size ? `Para ${id} necesitas antes: ${[...req].sort().join(", ")}.` : `${id} no necesita ningún apartado anterior.`;
  };
  const apaga = () => { m.classList.remove("activo"); paradas.forEach(q=>q.classList.remove("req","foco")); if(ayuda) ayuda.textContent = base; };
  paradas.forEach(p=>{
    if(p.tagName !== "A"){ p.tabIndex = 0; p.setAttribute("role","button"); p.setAttribute("aria-label", p.textContent.trim()); }
    p.addEventListener("mouseenter", ()=>enciende(p)); p.addEventListener("focus", ()=>enciende(p));
    p.addEventListener("mouseleave", apaga); p.addEventListener("blur", apaga);
    if(p.tagName !== "A") p.addEventListener("click", ()=>enciende(p));
  });
}

/* ---------- 7. Imprimir ---------- */
function imprimir(){ $$("[data-imprimir]").forEach(b=>b.addEventListener("click", ()=>window.print())); }

document.addEventListener("DOMContentLoaded", ()=>{
  formulas(document.body);
  ejemplos(); pruebas(); indice(); pizarra(); recuerda(); imprimir(); mapa();
  document.dispatchEvent(new Event("mates:listo"));
});
})();

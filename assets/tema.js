/* ==========================================================================
   Motor de apuntes · modo PROYECTAR (pantallas) y modo ESTUDIAR (continuo)
   Los dos modos se construyen con el MISMO contenido (contenido/apN.js),
   así nunca se desincronizan.
   ========================================================================== */
(function(){
"use strict";
const TEMA = window.TEMA = window.TEMA || {};

/* ---------- Fórmulas: $...$ en línea, $$...$$ centradas (KaTeX) ---------- */
function tex(src, display){
  // coma decimal española sin espacio: 6,30 -> 6{,}30
  const s = src.replace(/(\d),(\d)/g, "$1{,}$2");
  try { return katex.renderToString(s, {displayMode:!!display, throwOnError:false, strict:false}); }
  catch(e){ return src; }
}
function tx(html){
  if(html == null) return "";
  return String(html)
    .replace(/\$\$([\s\S]+?)\$\$/g, (_,m)=>tex(m,true))
    .replace(/\$([^$\n]+?)\$/g, (_,m)=>tex(m,false));
}
TEMA.tx = tx;

/* ---------- Bloques ---------- */
const CAJAS = {def:"Definición", prop:"Propiedad", aviso:"⚠️ Cuidado", nota:"💡 Fíjate", resumen:"📝 Resumen"};
function bloque(b, modo){
  if(typeof b === "string") return `<p>${tx(b)}</p>`;
  if(b.estudio) return modo==="estudiar" ? b.estudio.map(x=>bloque(x,modo)).join("") : "";
  if(b.proy)    return modo==="proyectar" ? b.proy.map(x=>bloque(x,modo)).join("") : "";
  if(b.p)       return `<p>${tx(b.p)}</p>`;
  if(b.html)    return tx(b.html);
  if(b.formula) return `<div class="b-formula">${tex(b.formula,true)}</div>`;
  if(b.lista)   return `<ul class="lista">${b.lista.map(l=>`<li>${tx(l)}</li>`).join("")}</ul>`;
  if(b.cols)    return `<div class="cols">${b.cols.map(c=>`<div>${[].concat(c).map(x=>bloque(x,modo)).join("")}</div>`).join("")}</div>`;
  if(b.ej)      return ejemplo(b.ej);
  if(b.comp)    return modo==="estudiar" ? comprueba(b.comp) : "";
  for(const k in CAJAS){
    if(b[k] !== undefined){
      const cuerpo = [].concat(b[k]).map(x=>bloque(x,modo)).join("");
      return `<div class="b-${k}"><span class="etq">${b.etq||CAJAS[k]}</span>${cuerpo}</div>`;
    }
  }
  return "";
}
function ejemplo(e){
  const pasos = (e.pasos||[]).map(p=>`<li class="paso"><span>${tx(p)}</span></li>`).join("");
  return `<div class="b-ej"><span class="etq">${e.etq||"✍️ Ejemplo resuelto"}</span>
    ${e.enun?`<div class="enun">${tx(e.enun)}</div>`:""}
    ${pasos?`<ol class="pasos">${pasos}</ol>`:""}
    ${e.res?`<div class="res paso">${tx(e.res)}</div>`:""}</div>`;
}

/* ---------- Ejercicios «Compruébalo» (solo en modo estudiar) ---------- */
let nComp = 0;
function comprueba(c){
  const id = "c" + (++nComp);
  TEMA._comp = TEMA._comp || {}; TEMA._comp[id] = c;
  const entrada = c.opciones
    ? `<div class="fila opc">${c.opciones.map((o,i)=>`<button type="button" data-c="${id}" data-i="${i}">${tx(o)}</button>`).join("")}</div>`
    : `<div class="fila"><input inputmode="decimal" id="${id}-in" aria-label="Tu respuesta" placeholder="Tu respuesta">${c.unidad?`<span>${tx(c.unidad)}</span>`:""}
        <button class="btn" type="button" data-c="${id}">Comprobar</button></div>`;
  return `<div class="comp"><div class="q">🎯 Compruébalo · ${tx(c.q)}</div>${entrada}<div class="fb" id="${id}-fb"></div></div>`;
}
function num(s){ return parseFloat(String(s).replace(/\s/g,"").replace(",", ".")); }
document.addEventListener("click", ev=>{
  const b = ev.target.closest("[data-c]"); if(!b) return;
  const c = TEMA._comp[b.dataset.c], fb = document.getElementById(b.dataset.c+"-fb");
  let ok;
  if(c.opciones){ ok = (+b.dataset.i === c.ok); }
  else {
    const v = num(document.getElementById(b.dataset.c+"-in").value);
    if(isNaN(v)){ fb.className="fb mal"; fb.innerHTML="Escribe un número (puedes usar coma decimal)."; return; }
    ok = [].concat(c.sol).some(s=>Math.abs(v - s) <= (c.tol ?? 0.005));
  }
  fb.className = "fb " + (ok ? "ok" : "mal");
  fb.innerHTML = (ok ? "✅ <b>¡Bien!</b> " : "❌ <b>Todavía no.</b> ") + tx(ok ? c.explic : (c.pista || c.explic));
});

/* ---------- Carga de un apartado ---------- */
const qs = new URLSearchParams(location.search);
const AP = parseInt(qs.get("ap") || "1", 10);
const MODO = qs.get("modo") === "proyectar" ? "proyectar" : "estudiar";
TEMA.registrar = function(ap){ TEMA.ap = ap; arrancar(); };
function cargar(){
  const s = document.createElement("script");
  s.src = `contenido/ap${AP}.js`;
  s.onerror = ()=>{ document.body.innerHTML = `<div class="wrap"><p>Este apartado todavía no está disponible.</p><p><a href="./">← Volver al tema</a></p></div>`; };
  document.head.appendChild(s);
}
function url(modo, extra){ return `apuntes.html?ap=${AP}&modo=${modo}${extra||""}`; }

function arrancar(){
  const ap = TEMA.ap;
  document.title = `${ap.num}. ${ap.titulo} · ${TEMA.info.curso}`;
  if(MODO === "proyectar") proyectar(ap); else estudiar(ap);
}

/* ===================== MODO ESTUDIAR ===================== */
function estudiar(ap){
  document.body.className = "estudio";
  const secs = ap.laminas.filter(l=>!l.portada);
  const portada = ap.laminas.find(l=>l.portada);
  let h = `<header class="hero"><div class="wrap">
    <nav class="migas"><a href="../../index.html">Inicio</a><span>›</span><a href="../../3eso.html">${TEMA.info.curso}</a><span>›</span><a href="./">${TEMA.info.tema}</a></nav>
    <div class="kicker">Apuntes · Apartado ${ap.num}</div>
    <h1>${ap.num}. ${ap.titulo}</h1>
    <div class="est-cab"><a class="btn main" href="${url("proyectar")}">🖥 Proyectar en clase</a><button class="btn" onclick="print()">🖨 Imprimir</button>
      <details class="ind" ${innerWidth>700?"open":""}><summary>Índice del apartado</summary><div class="indice">${secs.map((l,i)=>`<a href="#s${i+1}">${tx(l.titulo)}</a>`).join("")}</div></details></div>
  </div></header><div class="wrap">`;
  if(portada) h += `<section class="est-sec">${portada.cuerpo.map(b=>bloque(b,"estudiar")).join("")}</section>`;
  secs.forEach((l,i)=>{
    h += `<section class="est-sec" id="s${i+1}"><h2><small>${ap.num}.${i+1}</small>${tx(l.titulo)}</h2>${l.cuerpo.map(b=>bloque(b,"estudiar")).join("")}</section>`;
  });
  if(ap.videos && ap.videos.length){
    h += `<section class="est-sec"><h2>▶ Vídeos explicativos</h2><div class="video">${ap.videos.map(v=>`<a class="btn" href="${v.url}" target="_blank" rel="noopener">▶ ${v.t}</a>`).join("")}</div></section>`;
  }
  const i = ap.num, sig = (TEMA.info.apartados||[]).find(a=>a.num===i+1 && a.listo);
  h += `<div style="display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap;margin-top:18px"><a class="btn" href="./">← Volver al tema</a>${sig?`<a class="btn main" href="apuntes.html?ap=${sig.num}">Apartado ${sig.num}: ${sig.titulo} →</a>`:""}</div></div>`;
  document.body.innerHTML = h;
}

/* ===================== MODO PROYECTAR ===================== */
function proyectar(ap){
  document.body.className = "proy";
  const L = ap.laminas;
  let i = Math.min(Math.max(parseInt(location.hash.slice(1)||"1",10)-1,0), L.length-1);
  document.body.innerHTML = `<div class="proy-app">
    <header class="proy-cab"><div class="linea"><a href="${url("estudiar")}" title="Salir del modo proyectar">✕</a>
      <span>${TEMA.info.curso} · ${ap.num}. ${ap.titulo}</span><span class="sp"></span><span id="cont" class="cont" style="color:#fff"></span></div>
      <h2 id="tit"></h2><div class="barra"><i id="bar"></i></div></header>
    <div class="lamina-zona" id="zona"><div class="lamina" id="lam"></div></div>
    <div class="proy-bot">
      <button class="pb" id="ant" aria-label="Pantalla anterior">◀</button>
      <button class="pb paso-b" id="paso" aria-label="Mostrar el siguiente paso">👣 Siguiente paso</button>
      <button class="pb prim" id="sig" aria-label="Pantalla siguiente">▶</button>
      <button class="pb" id="fs" aria-label="Pantalla completa">⛶</button>
    </div></div>`;
  const $ = id=>document.getElementById(id);
  function pasosOcultos(){ return [...$("lam").querySelectorAll(".paso.oculto")]; }
  function pintar(){
    const l = L[i];
    $("tit").innerHTML = l.portada ? TEMA.info.tema : tx(l.titulo);
    $("lam").innerHTML = l.portada
      ? `<div class="portada"><h2><span class="num">${ap.num}.</span> ${ap.titulo}</h2>${l.cuerpo.map(b=>bloque(b,"proyectar")).join("")}</div>`
      : l.cuerpo.map(b=>bloque(b,"proyectar")).join("");
    $("lam").querySelectorAll(".paso").forEach(p=>p.classList.add("oculto"));
    $("zona").scrollTop = 0;
    ajustar();
    $("cont").textContent = `${i+1} / ${L.length}`;
    $("bar").style.width = ((i+1)/L.length*100)+"%";
    $("ant").disabled = i===0;
    history.replaceState(null,"","#"+(i+1));
    actualizar();
  }
  // Ajuste automático: reduce la letra hasta que la pantalla quepa sin scroll
  // (los pasos ocultos ya ocupan su sitio, así que no salta al mostrarlos).
  function ajustar(){
    const lam = $("lam"), z = $("zona");
    const alto = z.clientHeight - parseFloat(getComputedStyle(z).paddingTop) - 12;
    const cabe = f => { lam.style.fontSize = f+"px"; return lam.offsetHeight <= alto && z.scrollWidth <= z.clientWidth + 1; };
    const max = Math.min(54, Math.max(18, z.clientHeight/19, z.clientWidth/42));
    if(cabe(max)) return;
    let lo = 8, hi = max;
    for(let k=0;k<14;k++){ const m=(lo+hi)/2; cabe(m) ? lo=m : hi=m; }
    cabe(lo);
  }
  new ResizeObserver(()=>ajustar()).observe(document.getElementById("zona"));
  if(document.fonts){ document.fonts.ready.then(ajustar); document.fonts.addEventListener("loadingdone", ajustar); }
  function actualizar(){
    const n = pasosOcultos().length;
    $("paso").style.display = $("lam").querySelector(".paso") ? "" : "none";
    $("paso").disabled = n===0;
    $("paso").textContent = n ? `👣 Siguiente paso (${n})` : "✓ Todo a la vista";
    $("sig").disabled = i===L.length-1;
  }
  function verPaso(){
    const p = pasosOcultos()[0]; if(!p) return false;
    $("lam").querySelectorAll(".actual").forEach(x=>x.classList.remove("actual"));
    p.classList.remove("oculto"); p.classList.add("nuevo"); if(p.tagName==="LI") p.classList.add("actual");
    actualizar(); return true;
  }
  function sig(){ if(i<L.length-1){ i++; pintar(); } }
  function ant(){ if(i>0){ i--; pintar(); } }
  function avanzar(){ if(!verPaso()) sig(); }
  $("sig").onclick = sig; $("ant").onclick = ant; $("paso").onclick = verPaso;
  $("fs").onclick = ()=>{ document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen().catch(()=>{}); };
  document.addEventListener("keydown", e=>{
    if(e.target.closest("input,textarea")) return;
    if(["ArrowRight","PageDown"," ","Enter"].includes(e.key)){ e.preventDefault(); e.key==="ArrowRight"||e.key==="PageDown" ? sig() : avanzar(); }
    else if(["ArrowLeft","PageUp"].includes(e.key)){ e.preventDefault(); ant(); }
    else if(e.key==="ArrowDown"){ e.preventDefault(); verPaso(); }
    else if(e.key==="f"||e.key==="F"){ $("fs").click(); }
  });
  // deslizar el dedo en tablet o pizarra táctil
  let x0=null; document.addEventListener("touchstart",e=>{x0=e.touches[0].clientX},{passive:true});
  document.addEventListener("touchend",e=>{ if(x0===null) return; const dx=e.changedTouches[0].clientX-x0; if(Math.abs(dx)>70){ dx<0?sig():ant(); } x0=null; });
  pintar();
}

if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", cargar); else cargar();
})();

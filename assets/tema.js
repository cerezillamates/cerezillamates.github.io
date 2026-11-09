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
// un número y su unidad nunca se separan de línea (8 €, 25 %, 3 km…)
const NBSP = /(\d) (?=(€|%|km\/h|km|kg|cm|min|m²|m³|L\b|h\b|m\b|g\b|°|años|días|horas|meses))/g;
function tx(html){
  if(html == null) return "";
  return String(html).split(/(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/).map((t,k)=>k%2 ? t : t.replace(NBSP,"$1\u00a0")).join("")
    .replace(/\$\$([\s\S]+?)\$\$/g, (_,m)=>tex(m,true))
    .replace(/\$([^$\n]+?)\$/g, (_,m)=>tex(m,false));
}
TEMA.tx = tx;

/* ---------- Bloques ---------- */
const CAJAS = {def:"Definición", prop:"Propiedad", aviso:"⚠️ Cuidado", nota:"💡 Fíjate", resumen:"📝 Resumen", truco:"🪄 Truco"};
function bloque(b, modo){
  if(typeof b === "string") return `<p>${tx(b)}</p>`;
  if(b.estudio) return modo==="estudiar" ? b.estudio.map(x=>bloque(x,modo)).join("") : "";
  if(b.proy)    return modo==="proyectar" ? b.proy.map(x=>bloque(x,modo)).join("") : "";
  if(b.p)       return `<p>${tx(b.p)}</p>`;
  if(b.html)    return tx(b.html);
  if(b.formula) return `<div class="b-formula">${tex(b.formula,true)}</div>`;
  if(b.lista)   return `<ul class="lista">${b.lista.map(l=>`<li>${tx(l)}</li>`).join("")}</ul>`;
  if(b.cols)    return `<div class="cols${b.cols2?" cols-32":""}">${b.cols.map(c=>`<div>${[].concat(c).map(x=>bloque(x,modo)).join("")}</div>`).join("")}</div>`;
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
    ok = [].concat(c.sol).some(s=>Math.abs(v - s) <= ((c.tol != null ? c.tol : 0.005)));
  }
  TEMA._res = TEMA._res || {};
  if(TEMA._res[b.dataset.c] === undefined){ TEMA._res[b.dataset.c] = ok; if(TEMA.marcador) TEMA.marcador(); }
  fb.className = "fb " + (ok ? "ok" : "mal");
  fb.innerHTML = (ok ? "✅ <b>¡Bien!</b> " : "❌ <b>Todavía no.</b> ") + tx(ok ? c.explic : (c.pista || c.explic));
});

/* ---------- Carga de un apartado ---------- */
const qs = new URLSearchParams(location.search);
const AP = parseInt(qs.get("ap") || "1", 10);
const MODO = ["proyectar","estudiar","clase","casa"].includes(qs.get("modo")) ? qs.get("modo") : (window.PAGINA || "estudiar");
TEMA.registrar = function(ap){ TEMA.ap = ap; arrancar(); };
function cargar(){
  const s = document.createElement("script");
  s.src = `contenido/ap${AP}.js`;
  s.onerror = ()=>{ document.body.innerHTML = `<div class="wrap"><p>Este apartado todavía no está disponible.</p><p><a href="./">← Volver al tema</a></p></div>`; };
  document.head.appendChild(s);
}
function url(modo, extra){
  if(modo==="clase") return `clase.html?ap=${AP}`;
  if(modo==="casa")  return `tareas.html?ap=${AP}`;
  return `apuntes.html?ap=${AP}&modo=${modo}${extra||""}`;
}
TEMA.url = url;
function siguienteAp(){ return (TEMA.info.apartados||[]).find(a=>a.num===AP+1 && a.listo); }

/* Encaja el contenido en la pantalla sin scroll: ajusta el tamaño de letra */
function encajar(z, lam){
  const alto = z.clientHeight - parseFloat(getComputedStyle(z).paddingTop) - 12;
  const cabe = f => { lam.style.fontSize = f+"px"; return lam.offsetHeight <= alto && z.scrollWidth <= z.clientWidth + 1; };
  const max = Math.min(56, Math.max(18, z.clientHeight/17, z.clientWidth/40));
  if(cabe(max)) return;
  let lo = 8, hi = max;
  for(let k=0;k<14;k++){ const m=(lo+hi)/2; cabe(m) ? lo=m : hi=m; }
  cabe(lo);
}


// pantalla completa compatible con navegadores antiguos (pizarras digitales)
function pantallaCompleta(){
  const d = document, e = d.documentElement;
  const dentro = d.fullscreenElement || d.webkitFullscreenElement || d.msFullscreenElement;
  try {
    if(dentro){ (d.exitFullscreen || d.webkitExitFullscreen || d.msExitFullscreen).call(d); }
    else { const r = (e.requestFullscreen || e.webkitRequestFullscreen || e.msRequestFullscreen).call(e); if(r && r.catch) r.catch(()=>{}); }
  } catch(err){ /* sin pantalla completa: se usa F11 */ }
}
function arrancar(){
  const ap = TEMA.ap;
  // apartados numerados (1, 2…) o secciones especiales (repaso, autoevaluación…) con num de texto
  const esNum = typeof ap.num === "number";
  ap._nt = esNum ? `${ap.num}. ${ap.titulo}` : ap.titulo;
  ap._ap = esNum ? `Apartado ${ap.num}` : (ap.seccion || ap.titulo);
  ap._del = esNum ? `del apartado ${ap.num}` : `de «${ap.titulo}»`;
  ap._pre = esNum ? `${ap.num}.` : (ap.pref ? `${ap.pref}.` : "");
  ap._numSpan = esNum ? `<span class="num">${ap.num}.</span> ` : "";
  document.title = `${ap._nt} · ${TEMA.info.curso}`;
  if(MODO === "proyectar") proyectar(ap);
  else if(MODO === "clase") clase(ap);
  else if(MODO === "casa") casa(ap);
  else estudiar(ap);
}

/* ===================== MODO ESTUDIAR ===================== */
function estudiar(ap){
  document.body.className = "estudio";
  const secs = ap.laminas.filter(l=>!l.portada);
  const portada = ap.laminas.find(l=>l.portada);
  let h = `<header class="hero"><div class="wrap">
    <nav class="migas"><a href="../../index.html">Inicio</a><span>›</span><a href="../../${TEMA.info.cursoUrl||"3eso.html"}">${TEMA.info.curso}</a><span>›</span><a href="./">${TEMA.info.tema}</a></nav>
    <div class="kicker">Apuntes · ${ap._ap}</div>
    <h1>${ap._nt}</h1>
    <div class="est-cab"><a class="btn main" href="${url("proyectar")}">🖥 Proyectar en clase</a><button class="btn" onclick="print()">🖨 Imprimir</button>
      <details class="ind" ${innerWidth>700?"open":""}><summary>Índice del apartado</summary><div class="indice">${secs.map((l,i)=>`<a href="#s${i+1}">${tx(l.titulo)}</a>`).join("")}</div></details></div>
  </div></header><div class="wrap">`;
  if(portada) h += `<section class="est-sec">${portada.cuerpo.map(b=>bloque(b,"estudiar")).join("")}</section>`;
  secs.forEach((l,i)=>{
    h += `<section class="est-sec" id="s${i+1}"><h2><small>${ap._pre}${i+1}</small>${tx(l.titulo)}</h2>${l.cuerpo.map(b=>bloque(b,"estudiar")).join("")}</section>`;
  });
  if(ap.videos && ap.videos.length){
    h += `<section class="est-sec"><h2>▶ Vídeos explicativos</h2><div class="video">${ap.videos.map(v=>`<a class="btn" href="${v.url}" target="_blank" rel="noopener">▶ ${v.t}</a>`).join("")}</div></section>`;
  }
  h += camino(ap, "estudiar") + `</div>`;
  h += `<a class="arriba" href="#" aria-label="Volver arriba">↑</a>`;
  if(ap.autoeval) h += `<div class="marcador" id="marc"></div>`;
  document.body.innerHTML = h;
  if(ap.autoeval){
    const N = Object.keys(TEMA._comp||{}).length;
    TEMA.marcador = ()=>{
      const r = Object.values(TEMA._res||{}), hechas = r.length, bien = r.filter(Boolean).length;
      const fin = hechas === N;
      document.getElementById("marc").innerHTML = `<b>${fin?"🏁 Resultado final":"📊 Tu marcador"}</b><span>Respondidas: ${hechas} / ${N}</span><span>Bien a la primera: <b>${bien}</b></span>` +
        (fin ? `<span class="nota">Nota: <b>${(bien/N*10).toFixed(1).replace(".",",")}</b> / 10</span>` : "") +
        `<button class="btn" onclick="location.reload()">🔄 Repetir</button>`;
    };
    TEMA.marcador();
  }
  if(location.hash.length > 1){ const d = document.getElementById(location.hash.slice(1)); if(d) setTimeout(()=>d.scrollIntoView(), 50); }
}

/* ===================== MODO PROYECTAR ===================== */
function proyectar(ap){
  document.body.className = "proy";
  const L = ap.laminas;
  let i = Math.min(Math.max(parseInt(location.hash.slice(1)||"1",10)-1,0), L.length-1);
  document.body.innerHTML = `<div class="proy-app">
    <header class="proy-cab"><div class="linea"><a href="${url("estudiar")}" title="Salir del modo proyectar">✕</a>
      <span>${TEMA.info.curso} · ${ap._nt}</span><span class="sp"></span><span id="cont" class="cont" style="color:#fff"></span></div>
      <h2 id="tit"></h2><div class="barra"><i id="bar"></i></div></header>
    <div class="lamina-zona" id="zona"><div class="lamina" id="lam"></div></div>
    <div class="proy-bot">
      <button class="pb" id="ant" aria-label="Pantalla anterior">◀</button>
      <button class="pb paso-b" id="paso" aria-label="Mostrar el siguiente paso">👣 Siguiente paso</button>
      <button class="pb prim" id="sig" aria-label="Pantalla siguiente">▶</button>
      <button class="pb" id="fs" aria-label="Pantalla completa" title="Pantalla completa (F)">⛶</button>
      <button class="pb" id="menu" aria-label="Índice de pantallas" title="Índice de pantallas">☰</button>
    </div></div>
    <div class="velo" id="velo" hidden></div>
    <div class="menu-p" id="menuP" hidden><div class="menu-c"><div class="menu-h"><b>Pantallas del apartado</b><button class="pb" id="cerrar" aria-label="Cerrar">✕</button></div>
      <ol>${L.map((l,k)=>`<li><button data-k="${k}">${l.portada?"Portada":tx(l.titulo)}</button></li>`).join("")}</ol>
      <p class="atajos">⌨️ <b>→</b> o <b>espacio</b>: siguiente paso / pantalla · <b>←</b>: atrás · <b>Inicio/Fin</b>: primera / última · <b>F</b>: pantalla completa · <b>B</b>: pantalla en blanco</p></div></div>`;
  const $ = id=>document.getElementById(id);
  // orden de aparición: data-o (texto y capas de una gráfica sincronizados) o, si no hay, el orden del documento
  function pasosOcultos(){ return [...$("lam").querySelectorAll(".paso.oculto")].map((e,k)=>[e, e.dataset.o!==undefined ? +e.dataset.o : 1000+k]).sort((a,b)=>a[1]-b[1]).map(x=>x[0]); }
  function pintar(){
    const l = L[i];
    $("tit").innerHTML = l.portada ? TEMA.info.tema : tx(l.titulo);
    $("lam").innerHTML = l.portada
      ? `<div class="portada"><h2>${ap._numSpan}${ap.titulo}</h2>${l.cuerpo.map(b=>bloque(b,"proyectar")).join("")}</div>`
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
  if(window.ResizeObserver) new ResizeObserver(()=>ajustar()).observe(document.getElementById("zona")); else addEventListener("resize", ajustar);
  if(document.fonts && document.fonts.ready){ document.fonts.ready.then(ajustar); if(document.fonts.addEventListener) document.fonts.addEventListener("loadingdone", ajustar); } setTimeout(ajustar, 800);
  // al terminar: ejercicios de clase o, si el tema no los tiene, el destino que indique info.final (p. ej. un buscador)
  const fin = ap.clase ? {t:"✏️ Ejercicios de clase ▶", u:url("clase")} : (TEMA.info.final ? {t:TEMA.info.final.t+" ▶", u:TEMA.info.final.url} : null);
  function actualizar(){
    const n = pasosOcultos().length;
    $("paso").style.display = $("lam").querySelector(".paso") ? "" : "none";
    $("paso").disabled = n===0;
    $("paso").textContent = n ? `👣 Siguiente paso (${n})` : "✓ Todo a la vista";
    const ult = i===L.length-1;
    $("sig").textContent = ult && fin ? fin.t : "▶";
    $("sig").classList.toggle("ir-clase", ult && !!fin);
  }
  function verPaso(){
    const p = pasosOcultos()[0]; if(!p) return false;
    $("lam").querySelectorAll(".actual").forEach(x=>x.classList.remove("actual"));
    // los elementos con el mismo número de orden salen a la vez (el paso escrito y su dibujo)
    const grupo = p.dataset.o!==undefined ? pasosOcultos().filter(q=>q.dataset.o===p.dataset.o) : [p];
    grupo.forEach(q=>{ q.classList.remove("oculto"); q.classList.add("nuevo"); if(q.tagName==="LI") q.classList.add("actual"); });
    actualizar(); return true;
  }
  function sig(){ if(i<L.length-1){ i++; pintar(); } else if(fin) location.href = fin.u; }
  function ant(){ if(i>0){ i--; pintar(); } }
  function avanzar(){ if(!verPaso()) sig(); }
  $("sig").onclick = sig; $("ant").onclick = ant; $("paso").onclick = verPaso;
  $("fs").onclick = pantallaCompleta;
  document.addEventListener("keydown", e=>{
    if(e.target.closest("input,textarea")) return;
    if(!$("velo").hidden){ $("velo").hidden = true; return; }
    if(e.key==="Escape" && !menuP.hidden){ menuP.hidden = true; return; }
    if(e.key==="b"||e.key==="B"){ $("velo").hidden = false; return; }
    if(e.key==="Home"){ i=0; pintar(); return; }
    if(e.key==="End"){ i=L.length-1; pintar(); return; }
    if(["ArrowRight","PageDown"," ","Enter"].includes(e.key)){ e.preventDefault(); e.key==="ArrowRight"||e.key==="PageDown" ? sig() : avanzar(); }
    else if(["ArrowLeft","PageUp"].includes(e.key)){ e.preventDefault(); ant(); }
    else if(e.key==="ArrowDown"){ e.preventDefault(); verPaso(); }
    else if(e.key==="f"||e.key==="F"){ $("fs").click(); }
  });
  // deslizar el dedo en tablet o pizarra táctil
  let x0=null; document.addEventListener("touchstart",e=>{x0=e.touches[0].clientX},{passive:true});
  document.addEventListener("touchend",e=>{ if(x0===null) return; const dx=e.changedTouches[0].clientX-x0; if(Math.abs(dx)>70){ dx<0?sig():ant(); } x0=null; });
  // índice de pantallas
  const menuP = $("menuP");
  $("menu").onclick = ()=>{ menuP.hidden = false; menuP.querySelectorAll("li").forEach((li,k)=>li.classList.toggle("act",k===i)); };
  $("cerrar").onclick = ()=>{ menuP.hidden = true; };
  menuP.addEventListener("click", e=>{ const b=e.target.closest("[data-k]"); if(b){ i=+b.dataset.k; menuP.hidden=true; pintar(); } else if(e.target===menuP) menuP.hidden=true; });
  // pantalla en blanco (B) para que la clase mire a la pizarra
  $("velo").onclick = ()=>{ $("velo").hidden = true; };
  // ocultar el cursor si no se mueve
  let tm; addEventListener("mousemove", ()=>{ document.body.classList.remove("sin-cursor"); clearTimeout(tm); tm=setTimeout(()=>document.body.classList.add("sin-cursor"),2500); });
  pintar();
}


/* ---------- Camino de cada sesión: explicación → clase → casa ---------- */
function camino(ap, aqui){
  const sig = siguienteAp();
  const paso = (k, ico, t, href, d) => `<a class="cam-p ${aqui===k?"aqui":""}" href="${href}"><span class="cam-i">${ico}</span><b>${t}</b><small>${d}</small></a>`;
  return `<nav class="camino" aria-label="Pasos de la sesión">
    ${paso("estudiar","📘","1. Explicación",url("estudiar"),"Apuntes del apartado")}
    ${ap.clase?paso("clase","✏️","2. Ejercicios de clase",url("clase"),`${ap.clase.length} ejercicios: todos juntos y corrección uno a uno`):""}
    ${ap.casa?paso("casa","🏠","3. Tareas para casa",url("casa"),`${ap.casa.length} ejercicios con soluciones`):""}
    ${!ap.clase && TEMA.info.final ? paso("fin","🔎","2. "+TEMA.info.final.t,TEMA.info.final.url,TEMA.info.final.d||"") : ""}
  </nav>
  <div class="cam-pie"><a class="btn" href="./">← Volver al tema</a>${sig?`<a class="btn main" href="apuntes.html?ap=${sig.num}">Apartado ${sig.num}: ${sig.titulo} →</a>`:""}</div>`;
}

/* ===================== EJERCICIOS DE CLASE =====================
   1) Pantalla con TODOS los enunciados + cronómetro: el alumnado trabaja a su ritmo.
   2) CORRECCIÓN de uno en uno: la solución sale al pinchar (paso a paso o entera). */
function clase(ap){
  const E = ap.clase || [];
  const minTotal = E.reduce((t,e)=>t+(e.min||5),0);
  document.body.className = "proy act";
  // i = -1 → todos los enunciados; 0..n-1 → corrección; n → final
  const h0 = location.hash.slice(1);
  let i = (h0===""||h0==="todos") ? -1 : Math.min(Math.max(parseInt(h0,10)-1,-1), E.length);
  if(isNaN(i)) i = -1;
  document.body.innerHTML = `<div class="proy-app">
    <header class="proy-cab"><div class="linea"><a href="./" title="Volver al tema">✕</a>
      <span>✏️ Ejercicios de clase · ${ap._nt}</span><span class="sp"></span><span id="cont" class="cont" style="color:#fff"></span></div>
      <div class="cab-fila"><h2 id="tit"></h2>
        <div class="crono" id="crono" title="Cronómetro: una ayuda para organizarse, no un límite">
          <button id="cMenos" aria-label="Un minuto menos">−</button><span id="cT">00:00</span><button id="cMas" aria-label="Un minuto más">+</button>
          <button id="cPlay" class="c-play" aria-label="Iniciar o pausar">▶</button><button id="cReset" aria-label="Reiniciar">↺</button></div></div>
      <div class="barra"><i id="bar"></i></div></header>
    <div class="lamina-zona" id="zona"><div class="lamina" id="lam"></div></div>
    <div class="proy-bot">
      <button class="pb" id="ant" aria-label="Anterior">◀</button>
      <button class="pb" id="todos">📋 Todos los enunciados</button>
      <button class="pb paso-b" id="paso">👣 Siguiente paso</button>
      <button class="pb ver-sol" id="verTodo">👁 Ver toda la solución</button>
      <button class="pb prim" id="sig" aria-label="Siguiente">▶</button>
      <button class="pb" id="fs" aria-label="Pantalla completa" title="Pantalla completa (F)">⛶</button>
    </div></div>`;
  const $ = id=>document.getElementById(id), z=$("zona"), lam=$("lam");

  /* --- cronómetro (uno para toda la sesión): cuenta atrás orientativa; al llegar a 0 sigue sumando --- */
  const T = {total:0, quedan:0, va:false, iv:null};
  const mmss = s => { const a=Math.abs(s); return (s<0?"+":"") + String(Math.floor(a/60)).padStart(2,"0")+":"+String(a%60).padStart(2,"0"); };
  function pintaT(){ $("cT").textContent = mmss(T.quedan); $("crono").classList.toggle("fin", T.quedan<=0 && T.total>0); $("crono").classList.toggle("va", T.va); $("cPlay").textContent = T.va ? "⏸" : "▶"; }
  function ponT(min){ clearInterval(T.iv); T.va=false; T.total=Math.round(min*60); T.quedan=T.total; pintaT(); }
  function playT(){ if(T.va){ clearInterval(T.iv); T.va=false; } else { T.va=true; T.iv=setInterval(()=>{ T.quedan--; pintaT(); },1000); } pintaT(); }
  $("cPlay").onclick = playT;
  $("cReset").onclick = ()=>ponT(T.total/60);
  $("cMas").onclick = ()=>{ T.total+=60; T.quedan+=60; pintaT(); };
  $("cMenos").onclick = ()=>{ if(T.total>=60){ T.total-=60; T.quedan-=60; } pintaT(); };
  ponT(minTotal);

  const nivel = e => e.nivel ? `<span class="nivel n-${e.nivel.toLowerCase()}">${e.nivel}</span>` : "";
  function ocultos(){ return [...lam.querySelectorAll(".paso.oculto")]; }
  function pintar(){
    $("cont").textContent = i<0 ? "Enunciados" : i<E.length ? `Corrección ${ap._pre}${i+1} · ${i+1} de ${E.length}` : "✓";
    $("bar").style.width = (i<0 ? 0 : Math.min(i+1,E.length)/E.length*100)+"%";
    history.replaceState(null,"", i<0 ? "#todos" : "#"+(i+1));
    if(i<0){
      $("tit").innerHTML = `Ejercicios <span class="de">· ${E.length} ejercicios · unos ${minTotal} min</span>`;
      lam.innerHTML = `<div class="todos">${E.map((e,k)=>`<div class="t-ej"><div class="t-cab"><span class="t-n">${ap._pre}${k+1}</span>${nivel(e)}</div><div>${tx(e.enun)}</div></div>`).join("")}</div>`;
    } else if(i===E.length){
      $("tit").innerHTML = "¡Corrección terminada!";
      const sig = siguienteAp();
      lam.innerHTML = `<div class="final-act"><div class="gran">🎉</div><p>Habéis hecho y corregido los <b>${E.length} ejercicios de clase</b> ${ap._del}.</p>
        <div class="final-bot">${ap.casa?`<a class="pb paso-b" href="${url("casa")}">🏠 Tareas para casa</a>`:""}
        <a class="pb" href="${url("proyectar")}">📘 Repasar la explicación</a>
        ${sig?`<a class="pb prim" href="apuntes.html?ap=${sig.num}&modo=proyectar">Apartado ${sig.num} ▶</a>`:""}</div></div>`;
    } else {
      const e = E[i];
      $("tit").innerHTML = `Corrección · Ejercicio ${ap._pre}${i+1} ${nivel(e)}`;
      lam.innerHTML = `<div class="enun-act">${tx(e.enun)}</div>
        <div class="sol-act"><span class="etq">✅ Solución</span>
          <ol class="pasos">${(e.pasos||[]).map(p=>`<li class="paso oculto"><span>${tx(p)}</span></li>`).join("")}</ol>
          ${e.res?`<div class="res paso oculto">${tx(e.res)}</div>`:""}</div>`;
    }
    actualizar(); encajar(z, lam);
  }
  function actualizar(){
    const corr = i>=0 && i<E.length, n = ocultos().length;
    $("ant").disabled = i<0;
    $("sig").disabled = i===E.length;
    $("sig").textContent = i<0 ? "✅ Empezar a corregir ▶" : i===E.length-1 ? "Terminar ▶" : "▶";
    $("sig").classList.toggle("ir-clase", i<0);
    $("todos").style.display = i<0 ? "none" : "";
    $("paso").style.display = corr ? "" : "none";
    $("verTodo").style.display = (corr && n) ? "" : "none";
    $("paso").disabled = n===0;
    $("paso").textContent = n ? "👣 Siguiente paso" : "✓ Corregido";
  }
  function verPaso(){
    const p = ocultos()[0]; if(!p) return false;
    lam.querySelectorAll(".actual").forEach(x=>x.classList.remove("actual"));
    // los elementos con el mismo número de orden salen a la vez (el paso escrito y su dibujo)
    const grupo = p.dataset.o!==undefined ? pasosOcultos().filter(q=>q.dataset.o===p.dataset.o) : [p];
    grupo.forEach(q=>{ q.classList.remove("oculto"); q.classList.add("nuevo"); if(q.tagName==="LI") q.classList.add("actual"); });
    actualizar(); return true;
  }
  function verTodo(){ lam.querySelectorAll(".actual").forEach(x=>x.classList.remove("actual")); ocultos().forEach(p=>p.classList.remove("oculto")); actualizar(); }
  const sig = ()=>{ if(i<E.length){ i++; pintar(); } }, ant = ()=>{ if(i>=0){ i--; pintar(); } };
  $("sig").onclick = sig; $("ant").onclick = ant; $("paso").onclick = verPaso; $("verTodo").onclick = verTodo;
  $("todos").onclick = ()=>{ i=-1; pintar(); };
  $("fs").onclick = pantallaCompleta;
  document.addEventListener("keydown", e=>{
    if(e.target.closest("input,textarea")) return;
    if(e.key==="ArrowRight"||e.key==="PageDown"){ e.preventDefault(); sig(); }
    else if(e.key==="ArrowLeft"||e.key==="PageUp"){ e.preventDefault(); ant(); }
    else if(e.key===" "||e.key==="Enter"||e.key==="ArrowDown"){ e.preventDefault(); if(i<0||!verPaso()) sig(); }
    else if(e.key==="s"||e.key==="S"){ verTodo(); }
    else if(e.key==="t"||e.key==="T"){ playT(); }
    else if(e.key==="f"||e.key==="F"){ $("fs").click(); }
  });
  if(window.ResizeObserver) new ResizeObserver(()=>encajar(z, lam)).observe(z); else addEventListener("resize", ()=>encajar(z, lam));
  if(document.fonts && document.fonts.ready){ document.fonts.ready.then(()=>encajar(z, lam)); if(document.fonts.addEventListener) document.fonts.addEventListener("loadingdone", ()=>encajar(z, lam)); } setTimeout(()=>encajar(z, lam), 800);
  pintar();
}

/* ===================== TAREAS PARA CASA ===================== */
function casa(ap){
  const E = ap.casa || ap.clase || [];
  document.body.className = "estudio casa";
  const NIV = [["Básico","🟢 Ejercicios básicos"],["Consolidación","🔵 Para consolidar"],["Problema","🟠 Problemas"],["Para pensar","🔴 Para pensar más"]];
  let h = `<header class="hero"><div class="wrap">
    <nav class="migas"><a href="../../index.html">Inicio</a><span>›</span><a href="../../${TEMA.info.cursoUrl||"3eso.html"}">${TEMA.info.curso}</a><span>›</span><a href="./">${TEMA.info.tema}</a></nav>
    <div class="kicker">🏠 Tareas para casa · ${ap._ap}</div>
    <h1>${ap._nt}</h1>
    <p class="lead">Hazlos en tu cuaderno y después comprueba. Si te atascas, abre la solución <b>paso a paso</b>: mira solo el primer paso e intenta seguir tú.</p>
    <div class="est-cab"><a class="btn main" href="${url("estudiar")}">📘 Repasar la explicación</a><button class="btn" onclick="print()">🖨 Imprimir</button></div>
  </div></header><div class="wrap">`;
  let n = 0;
  // niveles propios (Reto, N1, 1 punto…) después de los habituales, en el orden en que aparecen
  const propios = [...new Set(E.map(e=>e.nivel||"Básico"))].filter(k=>!NIV.some(x=>x[0]===k)).map(k=>[k,"⭐ "+k]);
  const unico = !E.some(e=>NIV.some(x=>x[0]===(e.nivel||"Básico"))) && ap.casa === undefined;
  (unico ? [["*", "📝 Ejercicios"]] : NIV.concat(propios)).forEach(([k,t])=>{
    const L = k==="*" ? E : E.filter(e=>(e.nivel||"Básico")===k); if(!L.length) return;
    h += `<section class="est-sec"><h2>${t}</h2>` + L.map(e=>{ n++; return `<div class="tarea" id="t${n}">
      <div class="t-enun"><span class="t-num">${ap._pre}${n}</span><div>${tx(e.enun)}</div></div>
      <div class="t-bot"><button class="btn t-paso" data-t="${n}">👣 Ver el primer paso</button><button class="btn t-todo" data-t="${n}">Ver toda la solución</button></div>
      <div class="t-sol" hidden><ol class="pasos">${(e.pasos||[]).map(p=>`<li class="paso oculto"><span>${tx(p)}</span></li>`).join("")}</ol>${e.res?`<div class="res paso oculto">${tx(e.res)}</div>`:""}</div></div>`; }).join("") + `</section>`;
  });
  h += camino(ap, "casa") + `</div><a class="arriba" href="#" aria-label="Volver arriba">↑</a>`;
  document.body.innerHTML = h;
  document.addEventListener("click", ev=>{
    const b = ev.target.closest(".t-paso,.t-todo"); if(!b) return;
    const t = document.getElementById("t"+b.dataset.t), box = t.querySelector(".t-sol"); box.hidden = false;
    const oc = [...box.querySelectorAll(".paso.oculto")];
    if(b.classList.contains("t-todo")) oc.forEach(p=>p.classList.remove("oculto")); else if(oc[0]) oc[0].classList.remove("oculto");
    const quedan = box.querySelectorAll(".paso.oculto").length;
    t.querySelector(".t-paso").textContent = quedan ? `👣 Siguiente paso (${quedan})` : "✓ Solución completa";
    t.querySelector(".t-paso").disabled = !quedan; t.querySelector(".t-todo").style.display = quedan ? "" : "none";
  });
}

if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", cargar); else cargar();
})();

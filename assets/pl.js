/* ==========================================================================
   Gráficas de PROGRAMACIÓN LINEAL para el motor de apuntes (tema.js)
   PL.fig({...}) dibuja ejes, rectas, semiplanos, región factible, vértices y
   rectas de nivel en SVG. Cada elemento con «o» (orden) aparece como un paso:
   en modo proyectar se muestra al pulsar «Siguiente paso», junto al paso del
   texto que tenga el mismo número (PL.pasos).
   ========================================================================== */
(function(){
"use strict";
const COL = {r1:"#2350b8", r2:"#c0392b", r3:"#b45309", r4:"#7c3aed", r5:"#0f766e", r6:"#be185d", f:"#15803d"};
const fmt = v => (Math.round(v*100)/100).toString().replace(".", ",");

// recorta el polígono P con el semiplano a·x + b·y (s) c  (Sutherland–Hodgman)
function cortar(P, a, b, c, s){
  const g = p => (s === ">=" ? a*p[0]+b*p[1]-c : c-(a*p[0]+b*p[1]));   // g >= 0 dentro
  const out = [];
  for(let k=0;k<P.length;k++){
    const A = P[k], B = P[(k+1)%P.length], ga = g(A), gb = g(B);
    if(ga >= -1e-9) out.push(A);
    if((ga >= -1e-9) !== (gb >= -1e-9)){ const t = ga/(ga-gb); out.push([A[0]+t*(B[0]-A[0]), A[1]+t*(B[1]-A[1])]); }
  }
  return out;
}
// segmento visible de la recta a·x + b·y = c dentro de la ventana
function segmento(a, b, c, X, Y){
  const pts = [];
  if(Math.abs(b) > 1e-12){ for(const x of X){ const y=(c-a*x)/b; if(y>=Y[0]-1e-9 && y<=Y[1]+1e-9) pts.push([x,y]); } }
  if(Math.abs(a) > 1e-12){ for(const y of Y){ const x=(c-b*y)/a; if(x>=X[0]-1e-9 && x<=X[1]+1e-9) pts.push([x,y]); } }
  pts.sort((p,q)=>p[0]-q[0] || p[1]-q[1]);
  return pts.length >= 2 ? [pts[0], pts[pts.length-1]] : null;
}

function fig(o){
  const X = o.x, Y = o.y, W = o.W || 520, H = o.H || 440, m = 34;
  const sx = (W-2*m)/(X[1]-X[0]), sy = (H-2*m)/(Y[1]-Y[0]);
  const px = x => m + (x-X[0])*sx, py = y => H - m - (y-Y[0])*sy;
  const pt = p => `${px(p[0]).toFixed(1)},${py(p[1]).toFixed(1)}`;
  const capa = (ord, svg) => (ord === undefined || ord === 0) ? svg : `<g class="paso" data-o="${ord}">${svg}</g>`;
  const rect = [[X[0],Y[0]],[X[1],Y[0]],[X[1],Y[1]],[X[0],Y[1]]];
  let s = "";
  // cuadrícula y ejes
  const pa = o.paso || 1, et = o.etq || pa;
  let grid = "", tk = "";
  for(let x=Math.ceil(X[0]/pa)*pa; x<=X[1]+1e-9; x+=pa){
    grid += `<line x1="${px(x)}" y1="${py(Y[0])}" x2="${px(x)}" y2="${py(Y[1])}"/>`;
    if(Math.abs(x)>1e-9 && Math.abs(Math.round(x/et)*et - x)<1e-9) tk += `<text x="${px(x)}" y="${Math.min(py(0),H-m)+17}" text-anchor="middle">${fmt(x)}</text>`;
  }
  for(let y=Math.ceil(Y[0]/pa)*pa; y<=Y[1]+1e-9; y+=pa){
    grid += `<line x1="${px(X[0])}" y1="${py(y)}" x2="${px(X[1])}" y2="${py(y)}"/>`;
    if(Math.abs(y)>1e-9 && Math.abs(Math.round(y/et)*et - y)<1e-9) tk += `<text x="${Math.max(px(0),m)-6}" y="${py(y)+5}" text-anchor="end">${fmt(y)}</text>`;
  }
  s += `<g stroke="#e3e7f1" stroke-width="1">${grid}</g>`;
  const ex = Math.min(Math.max(py(0), m), H-m), ey = Math.min(Math.max(px(0), m), W-m);
  s += `<g stroke="#1e1b3a" stroke-width="1.6"><line x1="${m-6}" y1="${ex}" x2="${W-m+12}" y2="${ex}"/><line x1="${ey}" y1="${H-m+6}" x2="${ey}" y2="${m-12}"/></g>`;
  s += `<path d="M${W-m+14},${ex} l-9,-4.5 v9z M${ey},${m-14} l-4.5,9 h9z" fill="#1e1b3a"/>`;
  s += `<text x="${W-m+10}" y="${ex-8}" class="ej">x</text><text x="${ey+8}" y="${m-6}" class="ej">y</text>`;
  s += `<g class="tk">${tk}</g>`;
  const R = o.rectas || [];
  // semiplanos de cada restricción (sombreado suave de su color)
  R.forEach((r,k)=>{
    if((typeof r.semi !== "boolean" && typeof r.semi !== "number") || !r.semi || !r.s) return;
    const P = cortar(rect, r.a, r.b, r.c, r.s);
    if(P.length>2) s += capa(r.semi===true ? r.o : r.semi, `<polygon points="${P.map(pt).join(" ")}" fill="${COL[r.col||"r"+(k+1)]||r.col}" opacity=".13"/>`);
  });
  // región factible
  if(o.region !== undefined){
    let P = rect;
    R.forEach(r=>{ if(r.s && r.en !== false) P = cortar(P, r.a, r.b, r.c, r.s); });
    if(P.length>2) s += capa(o.region, `<polygon points="${P.map(pt).join(" ")}" fill="${COL.f}" opacity=".33" stroke="${COL.f}" stroke-width="2.5"/>`);
    else if(P.length===2) s += capa(o.region, `<polyline points="${P.map(pt).join(" ")}" stroke="${COL.f}" stroke-width="9" opacity=".5"/>`);
  }
  // rectas, nombre y flecha hacia su semiplano
  R.forEach((r,k)=>{
    const sg = segmento(r.a, r.b, r.c, X, Y); if(!sg) return;
    const c = COL[r.col||"r"+(k+1)] || r.col;
    let g = `<line x1="${px(sg[0][0])}" y1="${py(sg[0][1])}" x2="${px(sg[1][0])}" y2="${py(sg[1][1])}" stroke="${c}" stroke-width="3.2" stroke-linecap="round"/>`;
    if(r.nom || r.et){
      const t = r.pos === undefined ? .86 : r.pos;
      const lx = px(sg[0][0]+(sg[1][0]-sg[0][0])*t), ly = py(sg[0][1]+(sg[1][1]-sg[0][1])*t);
      const dx = r.dx ?? 8, dy = r.dy ?? -8;
      g += `<text x="${lx+dx}" y="${ly+dy}" fill="${c}" class="nr" text-anchor="${r.ta||"start"}">${r.nom?`<tspan font-style="italic">${r.nom}</tspan>`:""}${r.et?`<tspan class="ecu">${r.nom?": ":""}${r.et}</tspan>`:""}</text>`;
    }
    if(r.s && r.flecha !== false){
      const t = r.fpos ?? .5, mx = sg[0][0]+(sg[1][0]-sg[0][0])*t, my = sg[0][1]+(sg[1][1]-sg[0][1])*t;
      let nx = r.a*sx, ny = -r.b*sy; const L = Math.hypot(nx,ny); nx/=L; ny/=L;
      if(r.s === "<="){ nx=-nx; ny=-ny; }
      const x0 = px(mx), y0 = py(my), x1 = x0+nx*30, y1 = y0+ny*30;
      const fl = `<line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y1}" stroke="${c}" stroke-width="3"/><path d="M${x1+nx*9},${y1+ny*9} L${x1-ny*6},${y1+nx*6} L${x1+ny*6},${y1-nx*6}z" fill="${c}"/>`;
      g += r.fo !== undefined ? capa(r.fo, fl) : fl;
    }
    s += capa(r.o, g);
  });
  // rectas de nivel F = k (discontinuas)
  (o.nivel || []).forEach(n=>{
    const sg = segmento(n.a, n.b, n.k, X, Y); if(!sg) return;
    const t = n.pos ?? .2, lx = px(sg[0][0]+(sg[1][0]-sg[0][0])*t), ly = py(sg[0][1]+(sg[1][1]-sg[0][1])*t);
    s += capa(n.o, `<line x1="${px(sg[0][0])}" y1="${py(sg[0][1])}" x2="${px(sg[1][0])}" y2="${py(sg[1][1])}" stroke="${n.col||"#6b7280"}" stroke-width="2.6" stroke-dasharray="9 7"/>${n.et?`<text x="${lx+(n.dx??6)}" y="${ly+(n.dy??-8)}" fill="${n.col||"#4b5563"}" class="nr">${n.et}</text>`:""}`);
  });
  // segmentos destacados (soluciones múltiples)
  (o.tramos || []).forEach(t=>{
    s += capa(t.o, `<line x1="${px(t.p[0])}" y1="${py(t.p[1])}" x2="${px(t.q[0])}" y2="${py(t.q[1])}" stroke="${t.col||"#f59e0b"}" stroke-width="10" stroke-linecap="round" opacity=".85"/>`);
  });
  // puntos (vértices o puntos de prueba)
  (o.pts || []).forEach(p=>{
    const x = px(p.x), y = py(p.y), d = {n:[0,-14,"middle"], s:[0,26,"middle"], e:[12,6,"start"], w:[-12,6,"end"], ne:[9,-10,"start"], nw:[-9,-10,"end"], se:[9,22,"start"], sw:[-9,22,"end"]}[p.lado||"ne"];
    const c = p.col || (p.prueba ? "#b45309" : "#1e1b3a");
    s += capa(p.o, `${p.prueba?`<circle cx="${x}" cy="${y}" r="9" fill="#fff4d6" stroke="${c}" stroke-width="3"/>`:`<circle cx="${x}" cy="${y}" r="6.5" fill="${c}" stroke="#fff" stroke-width="2"/>`}
      ${p.t?`<text x="${x+d[0]}" y="${y+d[1]}" text-anchor="${d[2]}" class="vt" fill="${c}">${p.t}</text>`:""}`);
  });
  (o.extra || []).forEach(e=>{ s += capa(e.o, e.svg(px,py)); });
  return `<figure class="pl-fig"${o.ancho?` style="max-width:${o.ancho}em"`:""}><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${o.alt||"Gráfica"}">${s}</svg>${o.pie?`<figcaption>${o.pie}</figcaption>`:""}</figure>`;
}

// lista de pasos con su número de orden (para sincronizar con las capas de la gráfica)
function pasos(L){
  return `<ol class="pasos">${L.map((p,k)=>{ const [ord, html] = Array.isArray(p) ? p : [k+1, p]; return `<li class="paso" data-o="${ord}"><span>${TEMA.tx(html)}</span></li>`; }).join("")}</ol>`;
}
// tabla de valores de una recta
function tabla(nom, ecu, filas, col){
  return `<table class="t pl-tv" style="--c:${COL[col]||col||COL.r1}"><caption>${nom?`<i>${nom}</i>: `:""}${TEMA.tx(ecu)}</caption><tr><th>x</th><th>y</th></tr>${filas.map(f=>`<tr><td>${TEMA.tx(String(f[0]))}</td><td>${TEMA.tx(String(f[1]))}</td></tr>`).join("")}</table>`;
}

/* ---------------------------------------------------------------------------
   PL.problema(cfg): un problema resuelto con los pasos del examen, UN PASO POR PANTALLA
   (los pasos de la página de selectividad: 0 plantear · 1 representar · 2 ¿acotada? ·
   3 vértices · 4 F en los vértices · 5 responder). Devuelve la lista de láminas.
   --------------------------------------------------------------------------- */
function problema(c){
  const tx = TEMA.tx, L = [];
  // frase del examen para el semiplano a partir de la prueba: pr = {p:"O(0, 0)", c:"cálculo", ok:true|false}
  c.rectas.forEach(r=>{ if(r.pr && !r.examen){ const pt = r.pr.p || "O(0, 0)", org = pt.startsWith("O");
    r.examen = `Sustituyo $${pt}$: $${r.pr.c}$. <b>${r.pr.ok?"Sí":"No"} se cumple</b>, luego el semiplano solución es el que <b>${r.pr.ok?"":"no "}contiene ${org?"al origen":"a $"+pt+"$"}</b>.`; } });
  const duo = (a, b, r) => `<div class="pl-duo"${r?` style="grid-template-columns:${r}"`:""}><div>${a}</div><div>${b}</div></div>`;
  const sisTex = l => `$$\\left\\{\\begin{array}{l}${l.join("\\\\")}\\end{array}\\right.$$`;
  const n = c.rectas.length;
  const ejes = c.ejes===false ? [] : [{a:1,b:0,c:0,s:">=",flecha:false,col:"#94a3b8"},{a:0,b:1,c:0,s:">=",flecha:false,col:"#94a3b8"}];
  const base = Object.assign({alt:c.alt||"Región factible"}, c.fig);
  const R = (ord) => c.rectas.map((r,k)=>Object.assign({}, r, {nom:r.nomFig!==undefined?r.nomFig:r.nom, et:undefined, o:ord?ord(k):undefined, fo:ord?ord(k)+1:undefined}));
  const VP = (o) => c.verts.map(v=>({x:v.x, y:v.y, t:v.t, lado:v.lado, o}));
  const etapa = (num, t) => `<span class="pl-paso">PASO ${num}</span> ${t}`;
  const pre = c.titulo ? c.titulo + " · " : "";

  // enunciado
  L.push({ titulo: pre + "El problema", cuerpo:[
    {ej:{etq:c.etq||"📝 Enunciado", enun:c.enun}},
    {html:`<div class="pl-ruta">${(c.datos||c.incog?["0 Plantear"]:[]).concat(["1 Representar","2 ¿Acotada?","3 Vértices","4 F en los vértices","5 Responder"]).map(x=>`<span>${x}</span>`).join("<i>›</i>")}</div>`}
  ]});

  // PASO 0
  if(c.datos) L.push({ titulo: etapa(0, "Plantear: los datos en una tabla"), cuerpo:[
    {html:`<table class="pl-tab">${`<tr>${c.datos.cab.map(h=>`<th>${tx(h)}</th>`).join("")}</tr>`}${c.datos.filas.map((f,k)=>`<tr class="paso" data-o="${k+1}">${f.map((v,j)=>`<td${j===0?' style="font-weight:800;text-align:left"':""}>${tx(String(v))}</td>`).join("")}</tr>`).join("")}</table>`},
    {nota:["Primera fila: lo que se maximiza o minimiza. Cada fila de debajo será una <b>restricción</b>."]}
  ]});
  if(c.incog) L.push({ titulo: etapa(0, "Plantear: incógnitas, función y restricciones"), cuerpo:[
    {html: pasos([[1,"<b>Incógnitas</b>: " + c.incog],
                  [2,`<b>Función objetivo</b>: $${c.F}$ → <b>${c.obj==="MÍN"?"MINIMIZAR":"MAXIMIZAR"}</b>`],
                  [3,"<b>Restricciones</b>:" + (c.traduce?` ${c.traduce}`:"")]]) +
           `<div class="paso" data-o="3">${tx(sisTex(c.sis))}</div>`}
  ]});

  // PASO 1: representar, como en la página de la profesora: (1) rectas y tablas de valores,
  // (2) semiplano de cada restricción, (3) región factible.
  const colR = k => COL[c.rectas[k].col||"r"+(k+1)] || c.rectas[k].col;
  const tarjetas = c.rectas.filter(r=>r.tab).map((r,k)=>`<div class="pl-tv-card paso" data-o="${k+1}" style="--c:${colR(c.rectas.indexOf(r))}">
      ${tabla(tx("$"+r.nom+"$"), "$"+r.ecu+"$", r.tab, colR(c.rectas.indexOf(r)))}<div class="pl-calc">${(r.calc||[]).map(x=>`<div>${tx("$"+x+"$")}</div>`).join("")}</div></div>`).join("");
  const R1 = c.rectas.map((r,k)=>Object.assign({}, r, {nom:r.nomFig!==undefined?r.nomFig:r.nom, et:undefined, s:undefined, o:r.tab?c.rectas.filter(q=>q.tab).indexOf(r)+1:undefined}));
  const P1 = c.rectas.flatMap((r,k)=>r.tab ? r.tab.map(t=>({x:+String(t[0]).replace(",","."), y:+String(t[1]).replace(",","."), o:c.rectas.filter(q=>q.tab).indexOf(r)+1, col:colR(k)})).filter(q=>!isNaN(q.x)&&!isNaN(q.y)) : []);
  L.push({ titulo: etapa(1, "Representar (1): las rectas y sus tablas de valores"), cuerpo:[
    {html: `<p class="pl-intro">${tx("Cada restricción tiene una <b>recta asociada</b>: cambio la desigualdad por «=». Hago su <b>tabla de valores</b> con los cortes con los ejes ($x = 0$ y luego $y = 0$) y escribo los cálculos.")}</p>` +
      duo(`<div class="pl-tvs">${tarjetas}</div>` + (c.notaTabla?`<p class="pl-calcu">🧮 ${tx(c.notaTabla)}</p>`:""), fig(Object.assign({}, base, {rectas: R1.concat(ejes.map(e=>Object.assign({},e,{s:undefined}))), pts:P1})), "minmax(0,1.15fr) minmax(0,1fr)") }
  ]});
  const filas = c.rectas.filter(r=>r.ineq).map((r,k)=>`<tr class="paso" data-o="${k+1}"><td>${tx("$"+r.ineq+"$")}</td><td style="text-align:left">${tx(r.examen)}</td><td>${tx(r.semi)}</td></tr>`).join("") +
    (c.ejes===false ? "" : `<tr class="paso" data-o="${c.rectas.filter(r=>r.ineq).length+1}"><td>${tx("$x \\ge 0,\\ y \\ge 0$")}</td><td style="text-align:left">Juntas dejan el primer cuadrante.</td><td>Primer cuadrante</td></tr>`);
  const ordSemi = k => { const r = c.rectas[k]; return r.ineq ? c.rectas.filter(q=>q.ineq).indexOf(r)+1 : undefined; };
  L.push({ titulo: etapa(1, "Representar (2): el semiplano de cada restricción"), cuerpo:[
    {html: `<p class="pl-intro">${tx("Ahora trabajo con la <b>restricción</b> (la inecuación): la recta divide el plano en dos semiplanos y la restricción se cumple solo en uno. Lo marco con <b>flechas</b>.")}</p>` +
      duo(`<table class="pl-tab pl-semi"><tr><th>Restricción</th><th>Lo que escribo en el examen</th><th>Semiplano</th></tr>${filas}</table>`,
          fig(Object.assign({}, base, {rectas: c.rectas.map((r,k)=>Object.assign({}, r, {nom:r.nomFig!==undefined?r.nomFig:r.nom, et:undefined, fo:ordSemi(k)})).concat(ejes)})), "minmax(0,1.35fr) minmax(0,1fr)") }
  ]});
  L.push({ titulo: etapa(1, "Representar (3): la región factible"), cuerpo:[
    {html: duo(pasos([[1, c.cierre || "Es la <b>zona común</b> a todos los semiplanos."],[2,"La sombreo y pongo una <b>letra a cada vértice</b>."]]),
      fig(Object.assign({}, base, {rectas: R().concat(ejes), region: 1, pts: c.verts.map(v=>({x:v.x,y:v.y,t:v.n,lado:v.lado,o:2}))})), "minmax(0,1fr) minmax(0,1.35fr)") }
  ]});

  // PASO 2: ¿acotada?
  const frase2 = c.acotada===false
    ? "«La región factible <b>no está acotada</b>, así que el " + (c.obj==="MÍN"?"mínimo":"máximo (o el mínimo)") + " puede no existir.» Después se comprueba con la recta de $F$."
    : "«La región factible es <b>acotada</b>; por el teorema fundamental, el máximo y el mínimo se alcanzan en alguno de sus <b>vértices</b>.»";
  L.push({ titulo: etapa(2, "¿La región es acotada o no acotada?"), cuerpo:[
    {html: duo(
      `<div class="b-${c.acotada===false?"aviso":"prop"}"><span class="etq">${c.acotada===false?"No acotada: abierta, se va al infinito":"Acotada: es un polígono cerrado"}</span><p>${tx(c.acotada===false
        ? "Puede que no haya óptimo. Si existe, está en un vértice (o en un lado): hay que comprobarlo."
        : "El máximo y el mínimo existen siempre: basta con calcular $F$ en los vértices.")}</p></div>` +
      `<div class="b-nota paso" data-o="1"><span class="etq">✍️ Cómo se escribe</span><p>${tx(frase2)}</p></div>` + (c.p2?`<p class="paso" data-o="2">${tx(c.p2)}</p>`:""),
      fig(Object.assign({}, base, {rectas: R().concat(ejes), region: 0, pts: c.verts.map(v=>({x:v.x,y:v.y,t:v.n,lado:v.lado}))})), "minmax(0,1fr) minmax(0,1.2fr)") }
  ]});

  // PASO 3: vértices
  const nv = c.verts.length;
  L.push({ titulo: etapa(3, "Calcular los vértices"), cuerpo:[
    {html: duo(
      `<p class="pl-intro">${tx("Cada vértice es una esquina: el punto donde se cortan dos de sus rectas. Escribo el <b>sistema</b>, lo resuelvo y escribo el punto.")}</p>` +
      `<table class="pl-tab pl-vt"><tr><th>Vértice</th><th>Sistema</th><th>Resolución</th></tr>${c.verts.map((v,k)=>`<tr class="paso" data-o="${k+1}"><td><b>${v.n}</b></td><td>${tx("$\\left\\{\\begin{array}{ll}"+v.sis.join("\\\\")+"\\end{array}\\right.$")}</td><td>${tx(v.res)} → <b>${tx(v.t)}</b></td></tr>`).join("")}</table>` +
      (c.cortes?`<div class="b-aviso paso" data-o="${nv+1}"><span class="etq">¡Cuidado! No todos los cortes son vértices</span><p>Un vértice tiene que ser una esquina de la zona sombreada y cumplir <b>todas</b> las restricciones.</p>${c.cortes.map(x=>`<p>• ${tx(x)}</p>`).join("")}</div>`:"") +
      (c.p3?`<div class="b-aviso paso" data-o="${nv+1}"><span class="etq">¡Cuidado!</span><p>${tx(c.p3)}</p></div>`:""),
      fig(Object.assign({}, base, {rectas: R().concat(ejes), region: 0,
        pts: c.verts.map((v,k)=>({x:v.x,y:v.y,t:v.t,lado:v.lado,o:k+1})).concat((c.cortesPts||[]).map(q=>({x:q[0],y:q[1],t:q[2]||"",lado:q[3]||"e",o:nv+1,col:"#9ca3af"})))})), "minmax(0,1.3fr) minmax(0,1fr)") }
  ]});

  // PASO 4: F en los vértices
  L.push({ titulo: etapa(4, "Valor de la función objetivo en cada vértice"), cuerpo:[
    {html: duo(
      `<table class="pl-tab"><tr><th>Vértice</th><th>${tx("$"+c.F+"$")}</th></tr>${c.valores.map((r,k)=>`<tr class="paso" data-o="${k+1}"><td>${tx(r[0])}</td><td class="${r[2]||""}">${tx(r[1])}${r[2]==="max"?" ← máx.":r[2]==="min"?" ← mín.":""}</td></tr>`).join("")}</table>` +
      (c.p4?`<div class="paso" data-o="${c.valores.length+1}">${tx(c.p4)}</div>`:""),
      fig(Object.assign({}, base, {rectas: R().concat(ejes), region: 0, pts: VP(0), nivel: c.nivel||[], tramos: c.tramos||[]})), "minmax(0,1fr) minmax(0,1.35fr)") }
  ]});

  // PASO 5: responder
  L.push({ titulo: etapa(5, "Responder: cuánto vale, dónde se alcanza y qué significa"), cuerpo: [
    {html: (c.p5 ? pasos(c.p5) : "") + `<div class="res paso" data-o="${(c.p5||[]).length+1}">${tx(c.respuesta)}</div>`},
    ...(c.nota5 ? [{nota:[c.nota5]}] : [])
  ]});
  return L.concat(c.extra || []);
}
window.PL = {fig, pasos, tabla, problema, COL};

})();

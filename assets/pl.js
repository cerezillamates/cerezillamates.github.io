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
    if(r.semi === undefined || r.semi === false || !r.s) return;
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
window.PL = {fig, pasos, tabla, COL};
})();

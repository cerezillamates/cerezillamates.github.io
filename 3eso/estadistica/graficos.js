/* 3.º ESO · Estadística · Gráficos y tablas para los apuntes (SVG, sin librerías).
   EST.tabla(cabecera, filas, total)     → tabla de frecuencias
   EST.barras(etiquetas, ni, opc)        → diagrama de barras (separadas) · opc.poligono: une los puntos
   EST.histo(extremos, ni, opc)          → histograma (barras pegadas) · opc.poligono: polígono por las marcas
   EST.sectores(etiquetas, ni)           → diagrama de sectores con % y grados
   EST.caja(min, q1, me, q3, max, opc)   → diagrama de caja y bigotes
   Los números se escriben con coma decimal. Todo escala con la letra (em), también en modo proyectar. */
(function(){
const PAL = ["#4338ca","#0369a1","#0f766e","#b45309","#be123c","#6d28d9","#15803d","#c2410c"];
const F = (x, d=2) => (Math.round(x*Math.pow(10,d))/Math.pow(10,d)).toLocaleString("es-ES",{maximumFractionDigits:d});
const svg = (w, h, cuerpo, aria) => `<svg class="est-g" viewBox="0 0 ${w} ${h}" role="img" aria-label="${aria}" style="width:100%;max-width:${(w/17).toFixed(1)}em;height:auto;display:block;margin:.4em auto;font-family:var(--f-b)">${cuerpo}</svg>`;
const T = (x, y, s, o={}) => `<text x="${x}" y="${y}" font-size="${o.fs||13}" font-weight="${o.fw||700}" text-anchor="${o.a||"middle"}" style="fill:${o.c||"var(--ink)"}">${s}</text>`;
function ejes(w, h, max, paso, et){
  let s = `<line x1="44" y1="${h-34}" x2="${w-10}" y2="${h-34}" style="stroke:var(--ink);stroke-width:2"/><line x1="44" y1="14" x2="44" y2="${h-34}" style="stroke:var(--ink);stroke-width:2"/>`;
  for(let v=0; v<=max; v+=paso){ const y = h-34-(v/max)*(h-56);
    s += `<line x1="40" y1="${y}" x2="${w-10}" y2="${y}" style="stroke:var(--line);stroke-width:1"/>` + T(36, y+4, F(v), {a:"end", fs:11, fw:600, c:"var(--muted)"}); }
  if(et) s += T(14, 12, et, {a:"start", fs:11, c:"var(--muted)"});
  return s;
}
const pasoDe = m => m<=6?1:m<=12?2:m<=30?5:m<=60?10:m<=150?25:50;
window.EST = {
  F,
  tabla(cab, filas, total, cls){
    const td = c => `<td>${c}</td>`;
    return `<table class="t tfr${cls?" "+cls:""}"><tr>${cab.map(c=>`<th>${c}</th>`).join("")}</tr>${filas.map(f=>`<tr>${f.map(td).join("")}</tr>`).join("")}${total?`<tr class="tot">${total.map(c=>`<td><b>${c}</b></td>`).join("")}</tr>`:""}</table>`;
  },
  barras(et, ni, o={}){
    const n = et.length, w = Math.max(320, 60 + n*56), h = 220, max0 = Math.max(...ni), paso = pasoDe(max0), max = Math.ceil(max0/paso)*paso || 1;
    const bw = (w-60)/n; let s = ejes(w, h, max, paso, o.eje||"nᵢ"), pts = [];
    et.forEach((e,i)=>{ const x = 50 + i*bw, bh = ni[i]/max*(h-56), y = h-34-bh, cx = x+bw/2-3;
      s += `<rect x="${cx-bw*.18}" y="${y}" width="${bw*.36}" height="${bh}" rx="3" style="fill:${o.color||PAL[0]};opacity:${o.poligono?.35:1}"/>` + T(cx, y-5, F(ni[i]), {fs:12}) + T(cx, h-16, e, {fs:12});
      pts.push(`${cx},${y}`); });
    if(o.poligono) s += `<polyline points="${pts.join(" ")}" style="fill:none;stroke:var(--rose);stroke-width:3"/>` + pts.map(p=>`<circle cx="${p.split(",")[0]}" cy="${p.split(",")[1]}" r="4.5" style="fill:var(--rose)"/>`).join("");
    if(o.titulo) s += T(w/2, h-1, o.titulo, {fs:12, c:"var(--muted)"});
    return svg(w, h+(o.titulo?6:0), s, "Diagrama de barras");
  },
  histo(ext, ni, o={}){
    const n = ni.length, w = Math.max(340, 70 + n*62), h = 230, max0 = Math.max(...ni), paso = pasoDe(max0), max = Math.ceil(max0/paso)*paso || 1;
    const bw = (w-74)/n; let s = ejes(w, h, max, paso, o.eje||"nᵢ"), pts = [];
    ni.forEach((v,i)=>{ const x = 50 + i*bw, bh = v/max*(h-56), y = h-34-bh;
      s += `<rect x="${x}" y="${y}" width="${bw}" height="${bh}" style="fill:${o.color||"var(--sky-bg)"};stroke:var(--sky);stroke-width:2"/>` + T(x+bw/2, y-5, F(v), {fs:12});
      pts.push([x+bw/2, y]); });
    ext.forEach((e,i)=>{ s += T(50+i*bw, h-16, e, {fs:12}); });
    if(o.poligono){ const p = [[50-bw/2, h-34], ...pts, [50+n*bw+bw/2, h-34]];
      s += `<polyline points="${p.map(q=>q.join(",")).join(" ")}" style="fill:none;stroke:var(--rose);stroke-width:3"/>` + pts.map(q=>`<circle cx="${q[0]}" cy="${q[1]}" r="4.5" style="fill:var(--rose)"/>`).join(""); }
    if(o.titulo) s += T(w/2, h-1, o.titulo, {fs:12, c:"var(--muted)"});
    return svg(w, h+(o.titulo?6:0), s, "Histograma");
  },
  sectores(et, ni){
    const N = ni.reduce((a,b)=>a+b,0), R = 88, cx = 100, cy = 100; let a0 = -Math.PI/2, s = "", ley = "";
    const p = a => `${(cx+R*Math.cos(a)).toFixed(1)},${(cy+R*Math.sin(a)).toFixed(1)}`;
    ni.forEach((v,i)=>{ const ang = v/N*2*Math.PI, a1 = a0+ang;
      s += ni.length===1 ? `<circle cx="${cx}" cy="${cy}" r="${R}" fill="${PAL[i%8]}"/>` : `<path d="M${cx},${cy} L${p(a0)} A${R},${R} 0 ${ang>Math.PI?1:0} 1 ${p(a1)} Z" fill="${PAL[i%8]}" stroke="#fff" stroke-width="2.5"/>`;
      ley += `<rect x="212" y="${18+i*26}" width="16" height="16" rx="4" fill="${PAL[i%8]}"/>` + T(236, 31+i*26, `${et[i]}: ${F(v/N*100,1)} % · ${F(v/N*360,1)}°`, {a:"start", fs:13});
      a0 = a1; });
    return svg(470, Math.max(205, 30+ni.length*26), s+ley, "Diagrama de sectores");
  },
  caja(mn, q1, me, q3, mx, o={}){
    const w = 480, h = 150, sc = x => 30 + (x-mn)/((mx-mn)||1)*(w-60), y = 66;
    let s = `<line x1="${sc(mn)}" x2="${sc(q1)}" y1="${y}" y2="${y}" style="stroke:var(--ink);stroke-width:2.5"/><line x1="${sc(q3)}" x2="${sc(mx)}" y1="${y}" y2="${y}" style="stroke:var(--ink);stroke-width:2.5"/>`;
    s += `<rect x="${sc(q1)}" y="${y-26}" width="${Math.max(2,sc(q3)-sc(q1))}" height="52" rx="4" style="fill:var(--amb-bg);stroke:var(--amb);stroke-width:2.5"/>`;
    s += `<line x1="${sc(me)}" x2="${sc(me)}" y1="${y-26}" y2="${y+26}" style="stroke:var(--rose);stroke-width:4"/>`;
    [mn,mx].forEach(v=>{ s += `<line x1="${sc(v)}" x2="${sc(v)}" y1="${y-13}" y2="${y+13}" style="stroke:var(--ink);stroke-width:2.5"/>`; });
    // valores iguales (por ejemplo, Q₃ = máx) se rotulan una sola vez
    const lab = []; [["mín",mn],["Q₁",q1],["Me",me],["Q₃",q3],["máx",mx]].forEach(([t,v])=>{ const u = lab[lab.length-1]; if(u && Math.abs(u[1]-v) < 1e-9) u[0] += " = " + t; else lab.push([t,v]); });
    lab.forEach(([t,v],k)=>{ const yy = k%2 ? 124 : 108, x = sc(v), a = x < 40 ? "start" : x > w-40 ? "end" : "middle";
      s += T(x, yy, F(v), {fs:13, a}) + T(x, k%2 ? 26 : 14, t, {fs:12, a, c:/Me/.test(t)?"var(--rose)":"var(--muted)"}); });
    s += `<line x1="20" x2="${w-20}" y1="94" y2="94" style="stroke:var(--line);stroke-width:1.5"/>`;
    if(o.titulo) s += T(w/2, 146, o.titulo, {fs:12, c:"var(--muted)"});
    return svg(w, h, s, "Diagrama de caja y bigotes");
  }
};
})();

/* estilos propios del tema */
(function(){ if(document.getElementById("est-css")) return; const st = document.createElement("style"); st.id = "est-css"; st.textContent = `
.tfr td,.tfr th{text-align:center!important;white-space:nowrap}
.tfr.tw td{white-space:normal;text-align:left!important}
.tfr tr.tot td{background:var(--ind-bg)}
.est-4,.est-fr{display:grid;grid-template-columns:repeat(auto-fit,minmax(9.5em,1fr));gap:.6em;margin:.4em 0}
.est-4>div,.est-fr>div{background:var(--card);border:2px solid var(--ind-bg);border-radius:14px;padding:.6em .7em;display:flex;flex-direction:column;gap:.15em}
.est-4 b,.est-fr b{font-family:var(--f-d);color:var(--ind);font-size:1.1em}
.est-4 i,.est-fr i{color:var(--muted);font-size:.9em}
.est-arbol{display:flex;flex-direction:column;align-items:center;gap:.5em;margin:.4em 0}
.ea-q{background:var(--amb-bg);border:2px solid var(--amb-hi);border-radius:12px;padding:.4em .9em;font-weight:800}
.ea-ramas{display:grid;grid-template-columns:1fr 2fr;gap:.7em;width:100%}
.ea-r{border-radius:14px;padding:.6em .7em;display:flex;flex-direction:column;align-items:center;gap:.15em;text-align:center}
.ea-r.c-rose{background:var(--rose-bg);border:2px solid var(--rose)} .ea-r.c-sky{background:var(--sky-bg);border:2px solid var(--sky)}
.ea-r b{font-family:var(--f-d);font-size:1.15em} .ea-r i{color:var(--muted);font-size:.9em}
.ea-no,.ea-si{font-weight:900;font-size:.85em;padding:0 .5em;border-radius:99px;color:#fff} .ea-no{background:var(--rose)} .ea-si{background:var(--sky)}
.ea-sub{display:grid;grid-template-columns:1fr 1fr;gap:.5em;width:100%;margin-top:.3em}
.ea-sub>div{background:var(--card);border-radius:10px;padding:.35em;display:flex;flex-direction:column;align-items:center}
.ea-sub span{font-size:.85em;color:var(--muted)}
.est-cal{display:grid;grid-template-columns:auto 1fr;gap:.35em .7em;align-items:start;margin:.3em 0}
.est-cal>b{background:var(--ind);color:#fff;border-radius:99px;width:1.6em;height:1.6em;display:grid;place-items:center;font-size:.9em}
.est-cal>div b{color:var(--ind)}
.est-kbd{display:inline-block;border:2px solid var(--ink);border-bottom-width:4px;border-radius:7px;padding:0 .35em;font-weight:800;font-size:.9em;background:var(--card)}
.est-xl{font-family:ui-monospace,Consolas,monospace;font-size:.9em;background:var(--ok-bg);color:var(--ok);padding:0 .3em;border-radius:5px;white-space:nowrap}
`; document.head.appendChild(st); })();

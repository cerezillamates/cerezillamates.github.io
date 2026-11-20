/* ==========================================================================
   grafica.js — gráficas SVG propias y laboratorios interactivos de Análisis
   Sin dependencias externas: todo se dibuja aquí, con el estilo de la web.
   ========================================================================== */
(function(){
"use strict";
const NS = "http://www.w3.org/2000/svg";
const fmt = (v, d=2) => {                 // número con coma decimal y sin ceros sobrantes
  if(!isFinite(v)) return v > 0 ? "+∞" : "−∞";
  let s = (Math.round(v*10**d)/10**d).toString().replace(".", ",");
  return s.replace("-", "−");
};

/* ---------- Lienzo ---------- */
function Graf(svg, o){
  const real = Math.round(svg.getBoundingClientRect().width) || 640;
  const W = o.ancho || Math.max(300, Math.min(900, real)), H = Math.round((o.alto || 380) * Math.min(1.1, Math.max(0.8, W/640))), m = o.margen || {i:44, d:16, a:16, b:34};
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  svg.classList.add("graf");
  const g = {svg, W, H, x0:o.x[0], x1:o.x[1], y0:o.y[0], y1:o.y[1], capas:""};
  g.X = x => m.i + (x - g.x0) / (g.x1 - g.x0) * (W - m.i - m.d);
  g.Y = y => H - m.b - (y - g.y0) / (g.y1 - g.y0) * (H - m.a - m.b);
  g.dentro = (x,y) => x>=g.x0 && x<=g.x1 && y>=g.y0-1e-9 && y<=g.y1+1e-9;
  g.add = s => { g.capas += s; return g; };
  g.ejes = (op={}) => {
    const px = op.px || pasoBonito(g.x1-g.x0), py = op.py || pasoBonito(g.y1-g.y0);
    let s = "";
    for(let x=Math.ceil(g.x0/px)*px; x<=g.x1+1e-9; x+=px) s += `<line class="rejilla" x1="${g.X(x)}" x2="${g.X(x)}" y1="${g.Y(g.y0)}" y2="${g.Y(g.y1)}"/>`;
    for(let y=Math.ceil(g.y0/py)*py; y<=g.y1+1e-9; y+=py) s += `<line class="rejilla" x1="${g.X(g.x0)}" x2="${g.X(g.x1)}" y1="${g.Y(y)}" y2="${g.Y(y)}"/>`;
    const ex = (g.y0<=0 && g.y1>=0) ? 0 : g.y0, ey = (g.x0<=0 && g.x1>=0) ? 0 : g.x0;
    s += `<line class="eje" x1="${g.X(g.x0)}" x2="${g.X(g.x1)}" y1="${g.Y(ex)}" y2="${g.Y(ex)}"/>`;
    s += `<line class="eje" x1="${g.X(ey)}" x2="${g.X(ey)}" y1="${g.Y(g.y0)}" y2="${g.Y(g.y1)}"/>`;
    for(let x=Math.ceil(g.x0/px)*px; x<=g.x1+1e-9; x+=px){ if(Math.abs(x-ey)<1e-9 && !op.cero) continue;
      s += `<text class="marca-eje" x="${g.X(x)}" y="${g.Y(ex)+17}" text-anchor="middle">${fmt(x,3)}</text>`; }
    for(let y=Math.ceil(g.y0/py)*py; y<=g.y1+1e-9; y+=py){ if(Math.abs(y-ex)<1e-9) continue;
      s += `<text class="marca-eje" x="${g.X(ey)-7}" y="${g.Y(y)+4}" text-anchor="end">${fmt(y,3)}</text>`; }
    if(op.nx) s += `<text class="etq" x="${g.X(g.x1)-2}" y="${g.Y(ex)-8}" text-anchor="end">${op.nx}</text>`;
    if(op.ny) s += `<text class="etq" x="${g.X(ey)+8}" y="${g.Y(g.y1)+14}">${op.ny}</text>`;
    return g.add(s);
  };
  g.curva = (f, a, b, cls="", n=400) => {
    let d = "", pluma = false;
    for(let k=0;k<=n;k++){
      const x = a + (b-a)*k/n, y = f(x);
      if(!isFinite(y) || y < g.y0 - (g.y1-g.y0) || y > g.y1 + (g.y1-g.y0)){ pluma = false; continue; }
      const yc = Math.max(g.y0-(g.y1-g.y0)*0.2, Math.min(g.y1+(g.y1-g.y0)*0.2, y));
      d += (pluma ? "L" : "M") + g.X(x).toFixed(2) + " " + g.Y(yc).toFixed(2);
      pluma = true;
    }
    return g.add(`<path class="curva ${cls}" d="${d}" clip-path="url(#recorte-${g.id})"/>`);
  };
  g.recta = (x1,y1,x2,y2,cls="guia") => g.add(`<line class="${cls}" x1="${g.X(x1)}" y1="${g.Y(y1)}" x2="${g.X(x2)}" y2="${g.Y(y2)}" clip-path="url(#recorte-${g.id})"/>`);
  g.punto = (x,y,hueco=false,r=5.5) => g.dentro(x,y) ? g.add(`<circle class="${hueco?"hueco":"lleno"}" cx="${g.X(x)}" cy="${g.Y(y)}" r="${r}"/>`) : g;
  g.texto = (x,y,t,cls="etq",anc="start",dx=0,dy=0) => g.add(`<text class="${cls}" x="${g.X(x)+dx}" y="${g.Y(y)+dy}" text-anchor="${anc}">${t}</text>`);
  g.area = (f,a,b,n=120) => { let d = `M${g.X(a)} ${g.Y(0)}`;
    for(let k=0;k<=n;k++){ const x=a+(b-a)*k/n; d += `L${g.X(x)} ${g.Y(f(x))}`; }
    return g.add(`<path class="area" d="${d}L${g.X(b)} ${g.Y(0)}Z"/>`); };
  g.id = Math.random().toString(36).slice(2,8);
  g.pinta = () => { svg.innerHTML = `<defs><clipPath id="recorte-${g.id}"><rect x="${g.X(g.x0)}" y="${g.Y(g.y1)}" width="${g.X(g.x1)-g.X(g.x0)}" height="${g.Y(g.y0)-g.Y(g.y1)}"/></clipPath></defs>` + g.capas; };
  g.limpia = () => { g.capas = ""; return g; };
  return g;
}
function pasoBonito(r){ const p = Math.pow(10, Math.floor(Math.log10(r/6))); const n = r/6/p; return (n<1.5?1:n<3.5?2:n<7.5?5:10)*p; }
window.Graf = Graf; window.fmtNum = fmt;

/* ---------- Ayudas de interfaz ---------- */
const lab = (el) => ({
  svg: el.querySelector("svg.graf") || (()=>{ const s=document.createElementNS(NS,"svg"); s.setAttribute("class","graf"); s.setAttribute("role","img"); el.querySelector(".lienzo").appendChild(s); return s; })(),
  lectura: el.querySelector(".lectura"),
  mandos: el.querySelector(".mandos")
});
const tx = (s) => window.Mates ? s.replace(/\$([^$]+)\$/g, (_,m)=>Mates.tex(m,false)) : s;

/* ==========================================================================
   LAB 1 · Los tipos de discontinuidad
   ========================================================================== */
function labTipos(el){
  const L = lab(el);
  const casos = {
    continua:{t:"Continua", f:x=> x<=2 ? 0.5*x*x-x+1 : 0.5*x+0, ok:true,
      txt:"Los dos límites laterales valen $1$ y $f(2)=1$. Se dibuja sin levantar el lápiz: <span class='ok'>continua en $x=2$</span>."},
    evitable:{t:"Evitable", f:x=> x<2 ? 0.5*x*x-x+1 : 0.5*x, hueco:[2,1], aislado:[2,2.5],
      txt:"Los dos límites laterales valen $1$, así que el límite existe; pero $f(2)=2{,}5$. <span class='mal'>Discontinuidad evitable</span>: bastaría con redefinir $f(2)=1$."},
    salto:{t:"Salto finito", f:x=> x<=2 ? 0.5*x*x-x+1 : 0.5*x+1.5, lleno:[2,1], hueco:[2,2.5],
      txt:"$\\lim_{x\\to2^-}f(x)=1$ y $\\lim_{x\\to2^+}f(x)=2{,}5$: existen pero no coinciden. <span class='mal'>Salto finito</span> de $1{,}5$ unidades."},
    infinito:{t:"Salto infinito", f:x=> x<2 ? 0.5*x*x-x+1 : 1.4/(x-2)+0.6, lleno:[2,1],
      txt:"Por la derecha $f(x)\\to+\\infty$. Uno de los límites laterales es infinito: <span class='mal'>salto infinito</span> (la gráfica se escapa por la recta $x=2$)."}
  };
  const seg = document.createElement("div"); seg.className = "segmentado"; seg.setAttribute("role","group"); seg.setAttribute("aria-label","Tipo de discontinuidad");
  seg.innerHTML = Object.entries(casos).map(([k,c])=>`<button type="button" data-k="${k}" aria-pressed="false">${c.t}</button>`).join("");
  L.mandos.appendChild(seg);
  const pon = (k) => {
    const c = casos[k];
    const g = Graf(L.svg, {x:[-0.5,5], y:[-0.6,5], alto:340}).ejes({px:1, py:1});
    if(c.ok){ g.curva(c.f,-0.5,5); g.punto(2,1); }
    else if(k==="infinito"){ g.curva(c.f,-0.5,1.9999); g.curva(c.f,2.0001,5); g.recta(2,-0.6,2,5,"salto"); g.punto(2,1); }
    else { g.curva(c.f,-0.5,1.9999); g.curva(c.f,2.0001,5); }
    if(c.hueco) g.punto(...c.hueco,true);
    if(c.lleno) g.punto(...c.lleno);
    if(c.aislado) g.punto(...c.aislado);
    g.recta(2,-0.6,2,0,"guia");
    g.texto(2,0,"a = 2","etq","middle",0,30);
    g.pinta();
    L.svg.setAttribute("aria-label", "Gráfica: " + c.t);
    L.lectura.innerHTML = tx(c.txt);
    seg.querySelectorAll("button").forEach(b=>b.setAttribute("aria-pressed", b.dataset.k===k));
  };
  seg.addEventListener("click", e=>{ const b=e.target.closest("button"); if(b) pon(b.dataset.k); });
  pon("evitable");
}

/* ==========================================================================
   LAB 2 · Coser la función: el parámetro que la hace continua
   Andalucía, PEvAU junio 2019, opción B, ejercicio 2
   f(x) = 1/(x−1) si x<0 ;  x² + a si x ≥ 0
   ========================================================================== */
function labCoser(el){
  const L = lab(el);
  L.mandos.innerHTML = `<label class="campo">Valor de $a$ <input type="range" data-p="a" min="-3" max="2" step="0.25" value="1" aria-describedby="${el.id}-lect"><output>1</output></label>`;
  window.Mates && Mates.formulas(L.mandos);
  L.lectura.id = el.id + "-lect";
  const r = L.mandos.querySelector("input"), out = L.mandos.querySelector("output");
  const pon = () => {
    const a = +r.value; out.textContent = fmt(a);
    const g = Graf(L.svg, {x:[-3,2.5], y:[-3.5,5], alto:360}).ejes({px:1, py:1});
    g.curva(x=>1/(x-1), -3, -0.0001);
    g.curva(x=>x*x+a, 0, 2.5, "b");
    const cosida = Math.abs(a+1) < 1e-9;
    g.punto(0,a);                                     // f(0)=a (trozo derecho incluye el 0)
    if(!cosida){ g.punto(0,-1,true); g.recta(0,-1,0,a,"salto");
      g.texto(0,(a-1)/2,`salto de ${fmt(Math.abs(a+1))}`,"etq mano","start",10,0); }
    else g.texto(0,-1,"¡cosida!","etq mano verde","start",16,-18);
    g.pinta();
    L.lectura.innerHTML = tx(`Por la izquierda: $\\lim_{x\\to0^-}\\frac{1}{x-1}=-1$. Por la derecha: $\\lim_{x\\to0^+}(x^2+a)=${fmt(a).replace(",","{,}")}$, y $f(0)=${fmt(a).replace(",","{,}")}$. `) +
      (cosida ? tx(`<span class="ok">Coinciden: con $a=-1$ la función es continua en $x=0$.</span> Mira el ángulo que queda en el punto: eso lo estudia la derivabilidad.`)
              : `<span class="mal">No coinciden: hay un salto.</span> Mueve $a$ hasta que el trozo negro llegue al hueco.`.replace(/\$a\$/, tx("$a$")));
  };
  r.addEventListener("input", pon); pon();
}

/* ==========================================================================
   LAB 3 · La lupa: si al acercarte ves una recta, es derivable
   ========================================================================== */
function labLupa(el){
  const L = lab(el);
  const casos = {
    almazara:{t:"La almazara en $t=40$", x0:40, f:t=> t<40 ? -0.04*t*t+2.4*t : (40*t-320)/t, dI:-0.8, dD:0.2,
      nota:"Andalucía, PEvAU septiembre 2018"},
    taller:{t:"$a=5$, $b=-4$ en $x=1$", x0:1, f:x=> x<=1 ? 6*x-3 : 5*x*x-4*x+2, dI:6, dD:6,
      nota:"Andalucía, PEvAU ordinaria 2022"}
  };
  L.mandos.innerHTML = `<div class="segmentado" role="group" aria-label="Función">${Object.entries(casos).map(([k,c])=>`<button type="button" data-k="${k}" aria-pressed="false">${c.t}</button>`).join("")}</div>
    <label class="campo">Aumento <input type="range" data-p="z" min="0" max="7" step="0.05" value="0"><output>×1</output></label>`;
  window.Mates && Mates.formulas(L.mandos);
  const r = L.mandos.querySelector("input"), out = L.mandos.querySelector("output");
  let k = "almazara";
  const pon = () => {
    const c = casos[k], z = Math.pow(2, +r.value);
    out.textContent = "×" + (z<10 ? fmt(z,1) : Math.round(z));
    const y0 = c.f(c.x0), base = k==="almazara" ? 12 : 1.2, hx = base/z;
    const hy = hx * Math.max(Math.abs(c.dI), Math.abs(c.dD), 0.6) * 1.25 + 1e-12;
    const g = Graf(L.svg, {x:[c.x0-hx, c.x0+hx], y:[y0-hy, y0+hy], alto:360, margen:{i:54,d:16,a:16,b:34}});
    g.ejes({px:pasoBonito(2*hx), py:pasoBonito(2*hy)});
    g.curva(c.f, c.x0-hx, c.x0, "", 300); g.curva(c.f, c.x0, c.x0+hx, "b", 300);
    g.punto(c.x0, y0, false, 6);
    g.pinta();
    const recta = Math.abs(c.dI - c.dD) < 1e-9;
    L.lectura.innerHTML = tx(`Pendiente por la izquierda: $${fmt(c.dI).replace(",","{,}")}$. Pendiente por la derecha: $${fmt(c.dD).replace(",","{,}")}$. `) +
      (z < 8 ? "Sube el aumento y mira qué forma toma la gráfica junto al punto."
        : (recta ? tx(`<span class="ok">Cuanto más te acercas, más se parece a una sola recta: derivable, $f'(${c.x0})=${fmt(c.dI)}$.</span>`)
                 : `<span class="mal">Por mucho que te acerques, sigue habiendo una esquina: no es derivable en ese punto.</span>`)) +
      ` <span class="tenue">(${c.nota})</span>`;
    L.mandos.querySelectorAll("button").forEach(b=>b.setAttribute("aria-pressed", b.dataset.k===k));
  };
  L.mandos.addEventListener("click", e=>{ const b=e.target.closest("button[data-k]"); if(b){ k=b.dataset.k; pon(); }});
  r.addEventListener("input", pon); pon();
}

/* ==========================================================================
   LAB 4 · De la secante a la tangente (beneficio de la almazara en t = 20)
   ========================================================================== */
function labSecante(el){
  const L = lab(el);
  const f = t => -0.04*t*t + 2.4*t, t0 = 20;
  L.mandos.innerHTML = `<label class="campo">$h$ <input type="range" data-p="h" min="0" max="1" step="0.005" value="0.4"><output></output></label>`;
  window.Mates && Mates.formulas(L.mandos);
  const r = L.mandos.querySelector("input"), out = L.mandos.querySelector("output");
  const pon = () => {
    const h = 20 * Math.pow(1 - +r.value, 2) + 0.01;      // de 20 años a casi 0
    out.textContent = fmt(h);
    const m = (f(t0+h)-f(t0))/h;
    const g = Graf(L.svg, {x:[0,50], y:[0,42], alto:360}).ejes({px:10, py:10, nx:"t (años)", ny:"B (miles de €)"});
    g.curva(f, 0, 50);
    g.recta(0, f(t0)-m*t0, 50, f(t0)+m*(50-t0), "secante");
    g.recta(0, f(t0)-0.8*t0, 50, f(t0)+0.8*(50-t0), "guia");
    g.recta(t0, 0, t0, f(t0)); g.recta(t0+h, 0, t0+h, f(t0+h));
    g.punto(t0, f(t0)); g.punto(t0+h, f(t0+h), true);
    g.pinta();
    L.lectura.innerHTML = tx(`Tasa de variación media en $[20;\\,${fmt(20+h).replace(",","{,}")}]$: $\\dfrac{B(${fmt(20+h).replace(",","{,}")})-B(20)}{${fmt(h).replace(",","{,}")}}=${fmt(m,4).replace(",","{,}").replace("−","-")}$ miles de euros por año. `) +
      (h < 0.2 ? tx(`<span class="ok">Al hacer $h\\to0$ la secante (roja) se pega a la tangente (discontinua): $B'(20)=0{,}8$.</span>`) : "Acerca el segundo punto con el deslizador.");
  };
  r.addEventListener("input", pon); pon();
}

/* ==========================================================================
   LAB 5 · Dos parámetros, dos condiciones (PEvAU ordinaria 2022)
   f(x) = 6x − 3 si x ≤ 1 ;  ax² + bx + 2 si x > 1
   ========================================================================== */
function labDos(el){
  const L = lab(el);
  L.mandos.innerHTML = `<label class="campo">$a$ <input type="range" min="0" max="8" step="0.5" value="2" data-p="a"><output></output></label>
    <label class="campo">$b$ <input type="range" min="-8" max="4" step="0.5" value="1" data-p="b"><output></output></label>`;
  window.Mates && Mates.formulas(L.mandos);
  const [ra, rb] = L.mandos.querySelectorAll("input"), [oa, ob] = L.mandos.querySelectorAll("output");
  const pon = () => {
    const a = +ra.value, b = +rb.value; oa.textContent = fmt(a); ob.textContent = fmt(b);
    const g = Graf(L.svg, {x:[-0.5,2.5], y:[-4,14], alto:340}).ejes({px:0.5, py:2});
    g.curva(x=>6*x-3, -0.5, 1);
    g.curva(x=>a*x*x+b*x+2, 1.0001, 2.5, "b");
    const dcha = a+b+2, cont = Math.abs(dcha-3)<1e-9, der = cont && Math.abs(2*a+b-6)<1e-9;
    g.punto(1,3);
    if(!cont) g.punto(1,dcha,true);
    g.texto(1,3, der ? "continua y derivable" : cont ? "continua, con esquina" : "", "etq mano"+(der?" verde":""), "start", 12, 26);
    g.pinta();
    L.lectura.innerHTML = tx(`Continuidad: $a+b+2=${fmt(a).replace(",","{,}")}+(${fmt(b).replace(",","{,}").replace("−","-")})+2=${fmt(dcha).replace(",","{,}").replace("−","-")}$, ${cont ? "igual a $3$ ✓" : "distinto de $3$"}. Derivabilidad: $2a+b=${fmt(2*a+b).replace(",","{,}").replace("−","-")}$, ${Math.abs(2*a+b-6)<1e-9 ? "igual a $6$ ✓" : "distinto de $6$"}. `) +
      (der ? `<span class="ok">Las dos condiciones a la vez: es el sistema que resuelve el ejercicio.</span>` : "Busca los valores que cumplen las dos ecuaciones.");
  };
  ra.addEventListener("input", pon); rb.addEventListener("input", pon); pon();
}

/* ---------- Gráficas estáticas descritas en HTML: data-graf="nombre" ---------- */
const ESTATICAS = {
  almazara(svg){ const g = Graf(svg,{x:[0,50],y:[0,40],alto:330}).ejes({px:10,py:10,nx:"t",ny:"B(t)"});
    g.curva(t=>-0.04*t*t+2.4*t,0,40); g.curva(t=>(40*t-320)/t,40,50,"b");
    g.punto(40,32); g.punto(30,36); g.recta(30,0,30,36); g.texto(30,36,"máximo (30, 36)","etq","middle",0,-12);
    g.texto(40,32,"esquina en t = 40","etq mano","end",-10,24); g.pinta(); },
  covid(svg){ const g = Graf(svg,{x:[0,10.5],y:[-0.5,6.5],alto:330}).ejes({px:1,py:1,nx:"t (meses)",ny:"miles"});
    const f=t=> t<=1.8? -t*t+2*t-0.3 : t<=5 ? 0.1*t-0.12 : -0.5*t*t+8.3*t-28.62;
    g.curva(f,0.2,1.8); g.curva(f,1.8,5,"b"); g.curva(f,5,10);
    g.punto(0.2,f(0.2)); g.punto(10,f(10)); g.punto(1.8,f(1.8)); g.punto(5,f(5)); g.punto(8.3,f(8.3));
    g.texto(8.3,f(8.3),"(8,3; 5,825)","etq","middle",0,-12); g.pinta(); },
  trinidad(svg){ const g = Graf(svg,{x:[0,5],y:[4900,6200],alto:300}).ejes({px:1,py:200,nx:"t (años)",ny:"€"});
    g.curva(t=>5000*(1+0.05*t),0,1); g.curva(t=>5000*Math.pow(1.05,t),1,5,"b");
    g.punto(0,5000); g.punto(1,5250); g.punto(3.5,5931.1); g.recta(3.5,4900,3.5,5931.1); g.texto(3.5,5931.1,"5931,10 €","etq","middle",0,-12); g.pinta(); },
  hotel(svg){ const g = Graf(svg,{x:[0,40],y:[0,100],alto:300}).ejes({px:5,py:10,nx:"t (meses)",ny:"%"});
    g.curva(t=>-2.5*t*t+20*t,0,6); g.curva(t=>(90*t-240)/(t+4),6,40,"b"); g.recta(0,90,40,90,"guia"); g.texto(40,90,"se acerca a 90 %","etq mano","end",-4,-8);
    g.punto(6,30); g.punto(4,40); g.punto(8,40); g.recta(0,40,8,40); g.pinta(); },
  derivadaGraf(svg){ const g = Graf(svg,{x:[-1,4],y:[-3,4],alto:320}).ejes({px:1,py:1});
    const f=x=>x*x*x/3-x*x+0.5, d=x=>x*x-2*x;
    g.curva(f,-1,4); g.curva(d,-1,4,"r"); g.punto(0,f(0)); g.punto(2,f(2)); g.punto(0,0); g.punto(2,0);
    g.texto(3.3,f(3.3),"f","etq","start",8,0); g.texto(3.6,d(3.6),"f′","etq","start",-26,0); g.pinta(); },
  jun2019(svg){ const g = Graf(svg,{x:[-3,2.5],y:[-3.5,5],alto:330}).ejes({px:1,py:1});
    g.curva(x=>1/(x-1),-3,0); g.curva(x=>x*x-1,0,2.5,"b"); g.punto(0,-1); g.texto(0,-1,"esquina","etq mano","start",12,22); g.pinta(); }
};

document.addEventListener("mates:listo", ()=>{
  const vigila = (el, fn) => { let w = el.getBoundingClientRect().width;
    new ResizeObserver(()=>{ const n = el.getBoundingClientRect().width; if(Math.abs(n-w) > 8){ w = n; fn(); } }).observe(el); };
  document.querySelectorAll("[data-lab]").forEach(el=>{
    ({tipos:labTipos, coser:labCoser, lupa:labLupa, secante:labSecante, dos:labDos}[el.dataset.lab]||(()=>{}))(el);
    const inp = el.querySelector("input[type=range]"), seg = el.querySelector(".segmentado button[aria-pressed=true]");
    vigila(el, ()=>{ if(inp) inp.dispatchEvent(new Event("input")); else if(seg) seg.click(); else { const s = el.querySelector(".segmentado button[aria-pressed=true]"); if(s) s.click(); } });
  });
  document.querySelectorAll("svg[data-graf]").forEach(svg=>{ const f = ESTATICAS[svg.dataset.graf]; if(f){ f(svg); vigila(svg, ()=>f(svg)); } });
});
})();

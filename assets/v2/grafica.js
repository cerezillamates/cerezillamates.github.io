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
    for(let y=Math.ceil(g.y0/py)*py; y<=g.y1+1e-9; y+=py){ if(Math.abs(y-ex)<1e-9 || (op.sinY||[]).some(v=>Math.abs(v-y)<1e-9)) continue;
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
  L.mandos.innerHTML = `<label class="campo"><span>Valor de $a$</span> <input type="range" data-p="a" min="-3" max="2" step="0.25" value="1" aria-describedby="${el.id}-lect"><output>1</output></label>`;
  window.Mates && Mates.formulas(L.mandos);
  L.lectura.id = el.id + "-lect";
  const r = L.mandos.querySelector("input"), out = L.mandos.querySelector("output");
  const pon = () => {
    const a = +r.value; out.textContent = fmt(a);
    const g = Graf(L.svg, {x:[-3,2.5], y:[-3.5,5], alto:360}).ejes({px:1, py:1, sinY:[-1]});
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
    <label class="campo"><span>Aumento</span> <input type="range" data-p="z" min="0" max="7" step="0.05" value="0"><output>×1</output></label>`;
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
  L.mandos.innerHTML = `<label class="campo"><span>$h$</span> <input type="range" data-p="h" min="0" max="1" step="0.005" value="0.4"><output></output></label>`;
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
  L.mandos.innerHTML = `<label class="campo"><span>$a$</span> <input type="range" min="0" max="8" step="0.5" value="2" data-p="a"><output></output></label>
    <label class="campo"><span>$b$</span> <input type="range" min="-8" max="4" step="0.5" value="1" data-p="b"><output></output></label>`;
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

/* ==========================================================================
   LAB 6 · La tangente que se desliza (Andalucía, junio 2019: f(x) = x³ − 9x + 2)
   Se arrastra el punto sobre la curva o se mueve el deslizador.
   ========================================================================== */
function labTangente(el){
  const L = lab(el);
  const f = x => x*x*x - 9*x + 2, d = x => 3*x*x - 9, r3 = Math.sqrt(3);
  const especiales = [[-2,"par"],[2,"par"],[-r3,"max"],[r3,"min"],[0,"inf"]];
  L.mandos.innerHTML = `<div class="segmentado" role="group" aria-label="Qué se ve"><button type="button" data-k="tan" aria-pressed="true">Tangente</button><button type="button" data-k="signo" aria-pressed="false">Signo de $f'$</button><button type="button" data-k="deriv" aria-pressed="false">Gráfica de $f'$</button><button type="button" data-k="curv" aria-pressed="false">Curvatura</button></div>
    <label class="campo"><span>$a$</span> <input type="range" data-p="x0" min="-3.5" max="3.5" step="0.01" value="-0.8"><output></output></label>`;
  window.Mates && Mates.formulas(L.mandos);
  const r = L.mandos.querySelector("input"), out = L.mandos.querySelector("output");
  let modo = "tan", g = null;
  const n = v => fmt(v,2).replace(",","{,}");
  const sg = v => v < 0 ? "-" + n(-v) : "+" + n(v);
  const pon = () => {
    let a = +r.value;
    for(const [p] of especiales) if(Math.abs(a-p) < 0.05){ a = p; }
    out.textContent = fmt(a,2);
    const m = d(a), y0 = f(a), c = y0 - m*a;
    g = Graf(L.svg, {x:[-3.6,3.6], y:[-14,18], alto:370}).ejes({px:1, py:4});
    if(modo === "signo"){
      const tr = [[-3.6,-r3,"mas"],[-r3,r3,"menos"],[r3,3.6,"mas"]];
      g.add(tr.map(([u,v,s])=>`<line class="cinta ${s}" x1="${g.X(u)}" x2="${g.X(v)}" y1="${g.Y(0)}" y2="${g.Y(0)}"/>`).join(""));
      g.texto(-2.65,0,"f′ > 0","etq verde","middle",0,-10); g.texto(-0.95,0,"f′ < 0","etq roja","middle",0,-10); g.texto(2.65,0,"f′ > 0","etq verde","middle",0,-10);
      g.recta(-r3,0,-r3,f(-r3)); g.recta(r3,0,r3,f(r3));
    }
    if(modo === "curv"){
      g.add(`<line class="cinta menos" x1="${g.X(-3.6)}" x2="${g.X(0)}" y1="${g.Y(0)}" y2="${g.Y(0)}"/><line class="cinta curv" x1="${g.X(0)}" x2="${g.X(3.6)}" y1="${g.Y(0)}" y2="${g.Y(0)}"/>`);
      g.texto(-2.65,0,"f″ < 0  ∩","etq roja","middle",0,-10); g.texto(2.65,0,"f″ > 0  ∪","etq azul","middle",0,-10);
      g.punto(0,2,true,6); g.texto(0,2,"inflexión","etq mano","start",10,-10);
    }
    if(modo === "deriv"){ g.curva(d,-3.6,3.6,"r"); g.texto(2.75,d(2.75),"f′","etq roja","start",8,4); g.punto(a,m,false,4.5); g.recta(a,y0,a,m); }
    g.recta(-3.6, 3*-3.6-3, 3.6, 3*3.6-3, "guia");
    g.curva(f,-3.6,3.6);
    g.recta(-3.6, m*-3.6+c, 3.6, m*3.6+c, "secante");
    g.punto(a, y0, false, 7);
    g.add(`<circle class="asa" cx="${g.X(a)}" cy="${g.Y(y0)}" r="18"/>`);
    g.pinta();
    let que;
    if(Math.abs(m) < 1e-9) que = `<span class="ok">Tangente horizontal: $f'(a)=0$. La función pasa de ${a<0?"crecer a decrecer: <b>máximo relativo</b>":"decrecer a crecer: <b>mínimo relativo</b>"}.</span>`;
    else if(Math.abs(m-3) < 1e-9) que = `<span class="ok">Pendiente $3$: la tangente es paralela a $y=3x-3$ (la discontinua). Es una de las dos que pide el apartado a).</span>`;
    else que = m > 0 ? "$f'(a)>0$: aquí la función crece." : "$f'(a)<0$: aquí la función decrece.";
    if(modo === "curv") que = Math.abs(a) < 1e-9 ? `<span class="ok">En $x=0$ cambia la curvatura: <b>punto de inflexión</b> $(0,2)$. La tangente atraviesa la curva.</span>`
      : (a > 0 ? "$f''(a)=6a>0$: la curva queda por encima de la tangente. <b>Convexa</b> $(\\cup)$." : "$f''(a)=6a<0$: la curva queda por debajo de la tangente. <b>Cóncava</b> $(\\cap)$.");
    L.lectura.innerHTML = tx(`$f(${n(a)})=${n(y0)}$ y $f'(${n(a)})=${n(m)}$. Tangente: $y=${n(m)}x${Math.abs(c)<0.005?"":sg(c)}$. `) + tx(que) +
      ` <span class="tenue">Arrastra el punto o usa el deslizador.</span>`;
    L.mandos.querySelectorAll(".segmentado button").forEach(b=>b.setAttribute("aria-pressed", b.dataset.k===modo));
  };
  L.mandos.addEventListener("click", e=>{ const b=e.target.closest("button[data-k]"); if(b){ modo=b.dataset.k; pon(); }});
  r.addEventListener("input", pon);
  arrastre(L.svg, () => g, v => { r.value = Math.max(-3.5, Math.min(3.5, v)).toFixed(2); pon(); });
  pon();
}
/* arrastrar sobre la gráfica: traduce la posición horizontal del puntero a la abscisa */
function arrastre(svg, dameG, alMover){
  let activo = false;
  const x = e => { const g = dameG(), b = svg.getBoundingClientRect(), px = (e.clientX - b.left) * g.W / b.width;
    const m = g.X(g.x0), M = g.X(g.x1); return g.x0 + (px - m) / (M - m) * (g.x1 - g.x0); };
  svg.addEventListener("pointerdown", e => { activo = true; svg.setPointerCapture(e.pointerId); alMover(x(e)); });
  svg.addEventListener("pointermove", e => { if(activo) alMover(x(e)); });
  ["pointerup","pointercancel"].forEach(t => svg.addEventListener(t, () => activo = false));
}

/* ==========================================================================
   LAB 7 · La ventana: extremos absolutos en [a, b] (precio del oro)
   ========================================================================== */
function labVentana(el){
  const L = lab(el);
  const P = d => d*d*d/3 - 15*d*d + 144*d + 1500;
  L.mandos.innerHTML = `<label class="campo"><span>Desde el día</span> <input type="range" data-p="a" min="1" max="30" step="1" value="1"><output></output></label>
    <label class="campo"><span>hasta el día</span> <input type="range" data-p="b" min="2" max="31" step="1" value="31"><output></output></label>`;
  window.Mates && Mates.formulas(L.mandos);
  const [ra, rb] = L.mandos.querySelectorAll("input"), [oa, ob] = L.mandos.querySelectorAll("output");
  const e = v => fmt(v,2).replace(",","{,}");
  const pon = (ev) => {
    let a = +ra.value, b = +rb.value;
    if(a >= b){ if(ev && ev.target === ra){ b = a+1; rb.value = b; } else { a = b-1; ra.value = a; } }
    oa.textContent = a; ob.textContent = b;
    const g = Graf(L.svg, {x:[0,32], y:[800,2000], alto:350}).ejes({px:5, py:200, nx:"d (día)", ny:"€/kg"});
    g.add(`<rect class="ventana" x="${g.X(a)}" y="${g.Y(2000)}" width="${g.X(b)-g.X(a)}" height="${g.Y(800)-g.Y(2000)}"/>`);
    g.curva(P,1,31,"tenue"); g.curva(P,a,b);
    const cand = [[a,"extremo"],[b,"extremo"]];
    [6,24].forEach(c => { if(c>a && c<b) cand.push([c,"P′ = 0"]); });
    const vals = cand.map(([d,t])=>({d,t,v:P(d)}));
    const max = vals.reduce((p,q)=>q.v>p.v?q:p), min = vals.reduce((p,q)=>q.v<p.v?q:p);
    vals.forEach(c => g.punto(c.d, c.v, !(c===max||c===min), 5.5));
    g.texto(max.d, max.v, "máximo", "etq mano verde", "middle", 0, -14);
    g.texto(min.d, min.v, "mínimo", "etq mano", "middle", 0, 26);
    g.pinta();
    vals.sort((p,q)=>p.d-q.d);
    L.lectura.innerHTML = tx(`Candidatos en $[${a},${b}]$: ` + vals.map(c=>`$P(${c.d})=${e(c.v)}$`).join(", ") + ". ") +
      `<span class="ok">Máximo: día ${max.d}, ${fmt(max.v,2)} €/kg.</span> <span class="mal">Mínimo: día ${min.d}, ${fmt(min.v,2)} €/kg.</span>` +
      ((6>a&&6<b)||(24>a&&24<b) ? "" : ` <span class="tenue">En esta ventana no hay ningún punto con $P'=0$: los extremos están en los bordes.</span>`.replace(/\$([^$]+)\$/g,(_,m)=>window.Mates?Mates.tex(m,false):m));
  };
  ra.addEventListener("input", pon); rb.addEventListener("input", pon); pon();
}

/* ==========================================================================
   LAB 8 · Acércate: el límite como lo que «se ve venir»
   ========================================================================== */
function labAcercate(el){
  const L = lab(el);
  const casos = {
    hueco:{t:"0/0 en x = 1", f:x=>(x*x+x-2)/(x*x-x), a:1, x:[-0.5,3], y:[-2,6], lim:"3",
      tex:"\\lim\\limits_{x\\to1}\\dfrac{x^2+x-2}{x^2-x}", fin:"Por los dos lados los valores se acercan a $3$, aunque $f(1)$ no existe (hay un hueco): el límite es $3$."},
    polo:{t:"k/0 en x = 2", f:x=>(6-2*x)/(x-2), a:2, x:[-1,5], y:[-12,10],
      tex:"\\lim\\limits_{x\\to2}\\dfrac{6-2x}{x-2}", fin:"Por la izquierda los valores bajan sin parar ($-\\infty$) y por la derecha suben ($+\\infty$): no existe el límite en $x=2$."},
    inf:{t:"t → +∞", f:t=>(12*t-24)/(t+3), inf:true,
      tex:"\\lim\\limits_{t\\to+\\infty}\\dfrac{12t-24}{t+3}", fin:"Por muy lejos que vayas, los valores se pegan a $12$ por debajo: el límite es $12$ y nunca se alcanza."}
  };
  L.mandos.innerHTML = `<div class="segmentado" role="group" aria-label="Límite">${Object.entries(casos).map(([k,c])=>`<button type="button" data-k="${k}" aria-pressed="false">${c.t}</button>`).join("")}</div>
    <label class="campo"><span>Acércate</span> <input type="range" data-p="p" min="0" max="1" step="0.01" value="0.2"><output></output></label>`;
  window.Mates && Mates.formulas(L.mandos);
  const r = L.mandos.querySelector("input"), out = L.mandos.querySelector("output");
  let k = "hueco";
  const n = (v,d=4) => { const s = fmt(v,d); return s.replace(",","{,}").replace("−","-"); };
  const pon = () => {
    const c = casos[k], p = +r.value;
    if(c.inf){
      const T = Math.pow(10, 1 + 4*p), f = c.f(T);
      out.textContent = "t = " + fmt(T,0);
      const g = Graf(L.svg, {x:[0, T*1.15], y:[-10,16], alto:340}).ejes({py:4, nx:"t", ny:"f(t)"});
      g.recta(0,12,T*1.15,12,"guia"); g.curva(c.f, 0, T*1.15, "", 500); g.punto(T, f);
      g.texto(T*1.15, 12, "y = 12", "etq mano", "end", -4, -8); g.pinta();
      L.lectura.innerHTML = tx(`$${c.tex}$. Para $t=${fmt(T,0).replace(/\s/g,"\\,")}$: $f(t)=${n(f,6)}$, a $${n(12-f,6)}$ de $12$. `) + (p > 0.9 ? tx(`<span class="ok">${c.fin}</span>`) : "Lleva el deslizador hacia la derecha.");
    } else {
      const h = Math.pow(10, -0.3 - 3.2*p), a = c.a, iz = c.f(a-h), de = c.f(a+h);
      out.textContent = "h = " + fmt(h, 4);
      const g = Graf(L.svg, {x:c.x, y:c.y, alto:340}).ejes({px:1, py:2});
      g.curva(c.f, c.x[0], a-1e-6, "", 300); g.curva(c.f, a+1e-6, c.x[1], "", 300);
      if(k==="hueco") g.punto(1,3,true);
      g.recta(a,c.y[0],a,c.y[1],"guia");
      [[a-h,iz],[a+h,de]].forEach(([u,v])=>{ if(v>c.y[1]) g.texto(u,c.y[1],"↑ "+fmt(v,0),"etq mano","middle",0,16);
        else if(v<c.y[0]) g.texto(u,c.y[0],"↓ "+fmt(v,0),"etq mano","middle",0,-6); else g.punto(u,v,false,6); });
      g.pinta();
      L.lectura.innerHTML = tx(`$${c.tex}$. Por la izquierda, $f(${n(a-h)})=${n(iz,4)}$; por la derecha, $f(${n(a+h)})=${n(de,4)}$. `) + (p > 0.9 ? tx(`<span class="${k==="hueco"?"ok":"mal"}">${c.fin}</span>`) : "Acerca los dos puntos a la recta discontinua.");
    }
    L.mandos.querySelectorAll(".segmentado button").forEach(b=>b.setAttribute("aria-pressed", b.dataset.k===k));
  };
  L.mandos.addEventListener("click", e=>{ const b=e.target.closest("button[data-k]"); if(b){ k=b.dataset.k; pon(); }});
  r.addEventListener("input", pon); pon();
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
  tangentes(svg){ const g = Graf(svg,{x:[-3.6,3.6],y:[-14,18],alto:340}).ejes({px:1,py:4});
    g.curva(x=>x*x*x-9*x+2,-3.6,3.6); g.recta(-3.6,3*-3.6+18,3.6,3*3.6+18,"secante"); g.recta(-3.6,3*-3.6-14,3.6,3*3.6-14,"secante");
    g.recta(-3.6,3*-3.6-3,3.6,3*3.6-3,"guia"); g.punto(-2,12); g.punto(2,-8);
    g.texto(-2,12,"y = 3x + 18","etq mano","end",-10,-6); g.texto(2,-8,"y = 3x − 14","etq mano","start",12,20); g.pinta(); },
  paralelas(svg){ const g = Graf(svg,{x:[-0.5,5],y:[-8,14],alto:330}).ejes({px:1,py:2});
    g.curva(x=>5-16/x,0.6,5); g.curva(x=>x*x,-0.5,4,"b");
    g.recta(-0.5,4*-0.5-11,5,4*5-11,"secante"); g.recta(-0.5,4*-0.5-4,5,4*5-4,"secante");
    g.punto(2,-3); g.punto(2,4); g.texto(4.2,4.2*4.2,"g","etq","start",8,10); g.texto(4.8,5-16/4.8,"f","etq","start",4,18);
    g.texto(2,-3,"pendiente 4","etq mano","start",12,22); g.texto(2,4,"pendiente 4","etq mano","end",-12,-4); g.pinta(); },
  glucosa(svg){ const g = Graf(svg,{x:[0,24.5],y:[0,360],alto:330}).ejes({px:2,py:50,nx:"t (h)",ny:"mg/dl"});
    const f1=t=>5/6*(t*t*t/3-12*t*t+108*t+108), f2=t=>t*t-40*t+546;
    g.curva(f1,0,12); g.curva(f2,12,24,"b"); g.recta(0,155,24,155,"guia");
    g.punto(0,90); g.punto(6,330); g.punto(12,210); g.punto(20,146); g.punto(24,162); g.punto(17,155,false,4); g.punto(23,155,false,4);
    g.texto(6,330,"máx. (6, 330)","etq","middle",0,-12); g.texto(0,90,"mín. (0, 90)","etq","start",10,22);
    g.texto(17,155,"155","etq mano","middle",0,26); g.pinta(); },
  viento(svg){ const g = Graf(svg,{x:[0,24.5],y:[0,150],alto:330}).ejes({px:2,py:20,nx:"t (h)",ny:"km/h"});
    const v=t=>t<=10?t*t-8*t+60:-t*t+32*t-140;
    g.add(`<rect class="franja" x="${g.X(0)}" y="${g.Y(140)}" width="${g.X(24.5)-g.X(0)}" height="${g.Y(100)-g.Y(140)}"/>`);
    g.curva(v,0,10); g.curva(v,10,24,"b");
    g.punto(0,60); g.punto(4,44); g.punto(10,80); g.punto(16,116); g.punto(24,52); g.punto(12,100,false,4); g.punto(20,100,false,4);
    g.texto(16,116,"(16, 116)","etq","middle",0,26); g.texto(4,44,"(4, 44)","etq","middle",0,26);
    g.texto(0.6,140,"alerta naranja","etq mano","start",4,22); g.pinta(); },
  oro(svg){ const g = Graf(svg,{x:[0,32],y:[800,2000],alto:330}).ejes({px:5,py:200,nx:"d (día)",ny:"€/kg"});
    const P=d=>d*d*d/3-15*d*d+144*d+1500; g.curva(P,1,31);
    g.punto(1,P(1)); g.punto(6,1896); g.punto(24,924); g.punto(31,P(31));
    g.texto(6,1896,"(6, 1896)","etq","middle",0,-12); g.texto(24,924,"(24, 924)","etq","middle",0,26); g.pinta(); },
  beneficios(svg){ const g = Graf(svg,{x:[0,40],y:[-10,14],alto:320}).ejes({px:5,py:2,nx:"t (años)",ny:"millones €"});
    g.recta(0,12,40,12,"guia"); g.curva(t=>(12*t-24)/(t+3),0,40); g.punto(0,-8); g.punto(2,0);
    g.texto(40,12,"y = 12, nunca se alcanza","etq mano","end",-4,-8); g.texto(2,0,"(2, 0)","etq","start",8,20); g.texto(0,-8,"(0, −8)","etq","start",10,4); g.pinta(); },
  ipr(svg){ const g = Graf(svg,{x:[0,64],y:[0,50000],alto:330}).ejes({px:10,py:10000,nx:"t (años desde 1932)",ny:"IPR"});
    const I=t=>-t*t*t+54*t*t+480*t+6000; g.curva(I,0,18); g.curva(I,18,62,"b");
    g.punto(0,6000); g.punto(18,26304); g.punto(40,47600); g.punto(62,5008);
    g.texto(18,26304,"inflexión (18, 26 304)","etq mano","start",10,24); g.texto(40,47600,"máx. (40, 47 600)","etq","middle",0,-12);
    g.texto(9,I(9),"∪","etq azul","middle",-14,-6); g.texto(52,I(52),"∩","etq roja","middle",16,0); g.pinta(); },
  jun2019(svg){ const g = Graf(svg,{x:[-3,2.5],y:[-3.5,5],alto:330}).ejes({px:1,py:1});
    g.curva(x=>1/(x-1),-3,0); g.curva(x=>x*x-1,0,2.5,"b"); g.punto(0,-1); g.texto(0,-1,"esquina","etq mano","start",12,22); g.pinta(); }
};

document.addEventListener("mates:listo", ()=>{
  const vigila = (el, fn) => { let w = el.getBoundingClientRect().width;
    new ResizeObserver(()=>{ const n = el.getBoundingClientRect().width; if(Math.abs(n-w) > 8){ w = n; fn(); } }).observe(el); };
  const yo = document.querySelector('script[src*="assets/v2/grafica.js"]');
  const base = yo ? yo.getAttribute("src").replace(/assets\/v2\/grafica\.js.*$/, "") : "";
  let cargaKatex = null;
  const katexListo = () => cargaKatex || (cargaKatex = new Promise(ok=>{
    if(window.katex) return ok();
    const sc = document.createElement("script"); sc.src = base + "assets/katex/katex.min.js"; sc.onload = sc.onerror = () => ok();
    document.head.appendChild(sc); }));
  const arranca = el => {
    if(el._listo) return; el._listo = true;
    katexListo().then(()=>{
      ({tipos:labTipos, coser:labCoser, lupa:labLupa, secante:labSecante, dos:labDos, tangente:labTangente, ventana:labVentana, acercate:labAcercate}[el.dataset.lab]||(()=>{}))(el);
      vigila(el, ()=>{ const inp = el.querySelector("input[type=range]"); if(inp) inp.dispatchEvent(new Event("input"));
        else { const s = el.querySelector(".segmentado button[aria-pressed=true]"); if(s) s.click(); } });
      el.dispatchEvent(new Event("lab:listo", {bubbles:true}));
    });
  };
  const labs = document.querySelectorAll("[data-lab]");
  if("IntersectionObserver" in window){
    const io = new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ io.unobserve(e.target); arranca(e.target); } }), {rootMargin:"600px 0px"});
    labs.forEach(el=>io.observe(el));
  } else labs.forEach(arranca);
  window.arrancaLab = arranca;
  document.querySelectorAll("svg[data-graf]").forEach(svg=>{ const f = ESTATICAS[svg.dataset.graf]; if(f){ f(svg); vigila(svg, ()=>f(svg)); } });
});
})();

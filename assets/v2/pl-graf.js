/* ==========================================================================
   pl-graf.js — gráficas de Programación lineal (traídas de la página antigua, mismo contenido)
   · Plot: ejes, cuadrícula, rectas, regiones y puntos en SVG.
   · Gráficas del método (#heroPlot, #plot0, #plot1, #plotE, #plotS, #plotJ1, #plotJ2, #plot2, #plot4):
     solo se dibujan si la página las tiene.
   · CalcSim: simulador de la calculadora (#calcsim).
   · drawSol: gráfica de las soluciones paso a paso (window.PLdrawSol).
   Se carga con defer al final de la página.
   ========================================================================== */
(function(){
"use strict";
const $ = s => document.querySelector(s);
/* ---------- gráficas ---------- */
const NS = 'http://www.w3.org/2000/svg';
function Plot(svg, xmax, ymax, step, o){
  o = o || {};
  const x0 = o.xmin || 0, y0 = o.ymin || 0, sx = o.stepx || step, sy = o.stepy || step;
  const W = svg.viewBox.baseVal.width, H = svg.viewBox.baseVal.height, L = o.ml || 34, B = 26, T = 10, R = 12;
  const X = x => L + (x - x0) / (xmax - x0) * (W - L - R), Y = y => H - B - (y - y0) / (ymax - y0) * (H - B - T);
  const el = (n, a, txt) => { const e = document.createElementNS(NS, n); for (const k in a) e.setAttribute(k, a[k]); if (txt != null) e.textContent = txt; svg.appendChild(e); return e; };
  svg.innerHTML = '';
  for (let x = Math.ceil(x0 / sx) * sx; x <= xmax + 1e-9; x += sx){ el('line', {x1:X(x), x2:X(x), y1:Y(y0), y2:Y(ymax), stroke:'var(--grid)'}); el('text', {x:X(x), y:Y(0) + 18, 'text-anchor':'middle', 'font-size':10, fill:'var(--muted)'}, String(+x.toFixed(6)).replace('-', '−')); }
  for (let y = Math.ceil(y0 / sy) * sy; y <= ymax + 1e-9; y += sy){ el('line', {x1:X(x0), x2:X(xmax), y1:Y(y), y2:Y(y), stroke:'var(--grid)'}); if (y) el('text', {x:X(0) - 5, y:Y(y) + 3, 'text-anchor':'end', 'font-size':10, fill:'var(--muted)'}, String(+y.toFixed(6)).replace('-', '−')); }
  const ax = (x1, y1, x2, y2) => { el('line', {x1, y1, x2, y2, stroke:'var(--ink)', 'stroke-width':2.4});
    const a = Math.atan2(y2 - y1, x2 - x1), s = 9; el('polygon', {points:[[x2, y2], [x2 - s * Math.cos(a - .4), y2 - s * Math.sin(a - .4)], [x2 - s * Math.cos(a + .4), y2 - s * Math.sin(a + .4)]].map(p => p.join(',')).join(' '), fill:'var(--ink)'}); };
  ax(X(x0), Y(0), X(xmax) + 6, Y(0)); ax(X(0), Y(y0), X(0), Y(ymax) - 4);
  el('text', {x:X(xmax) + 2, y:Y(0) - 8, 'font-size':13, 'font-weight':700, fill:'var(--ink)'}, 'x'); el('text', {x:X(0) + 8, y:Y(ymax) + 6, 'font-size':13, 'font-weight':700, fill:'var(--ink)'}, 'y');
  return {
    poly(pts, fill, op=.35){ return el('polygon', {points: pts.map(p => X(p[0]) + ',' + Y(p[1])).join(' '), fill, 'fill-opacity':op, stroke:'none'}); },
    line(a, b, c, color, w=2.2, dash){ // ax+by=c recortada al rectángulo visible (la recta entera, no solo el trozo del recinto)
      const P = []; const add = (x, y) => { if (x >= x0 - 1e-9 && x <= xmax + 1e-9 && y >= y0 - 1e-9 && y <= ymax + 1e-9) P.push([x, y]); };
      if (b) { add(x0, (c - a * x0) / b); add(xmax, (c - a * xmax) / b); } if (a) { add((c - b * y0) / a, y0); add((c - b * ymax) / a, ymax); }
      if (P.length < 2) return null;
      P.sort((p, q) => p[0] - q[0] || p[1] - q[1]); const p = P[0], q = P[P.length - 1];
      return el('line', {x1:X(p[0]), y1:Y(p[1]), x2:X(q[0]), y2:Y(q[1]), stroke:color, 'stroke-width':w, 'stroke-dasharray':dash || ''});
    },
    arrow(x, y, dx, dy, color){ const x1 = X(x), y1 = Y(y), x2 = X(x + dx), y2 = Y(y + dy); el('line', {x1, y1, x2, y2, stroke:color, 'stroke-width':2.4});
      const a = Math.atan2(y2 - y1, x2 - x1), s = 8; el('polygon', {points:[[x2, y2], [x2 - s * Math.cos(a - .45), y2 - s * Math.sin(a - .45)], [x2 - s * Math.cos(a + .45), y2 - s * Math.sin(a + .45)]].map(p => p.join(',')).join(' '), fill:color}); },
    dot(x, y, label, color='var(--ink)', dx=6, dy=-6){ el('circle', {cx:X(x), cy:Y(y), r:4, fill:color}); if (label) el('text', {x:X(x) + dx, y:Y(y) + dy, 'font-size':12, 'font-weight':700, fill:color}, label); },
    text(x, y, t, color, anchor='start'){ el('text', {x:X(x), y:Y(y), 'font-size':12, 'font-weight':700, fill:color, 'text-anchor':anchor, 'paint-order':'stroke', stroke:'var(--hoja)', 'stroke-width':4.5, 'stroke-linejoin':'round'}, t); },
    X, Y, el
  };
}
function draw0(){
  const p = Plot($('#plot0'), 8, 5, 1);
  p.poly([[3,0],[4,0],[5.5,.75],[0,3.5],[0,3]], 'var(--acc)', .3);
  p.line(1, 2, 7, 'var(--r1)'); p.line(1, 1, 3, 'var(--r2)'); p.line(-1, 2, -4, 'var(--vio)');
  p.text(.25, 3.85, 'x + 2y = 7', 'var(--r1)'); p.text(.15, .55, 'x + y = 3', 'var(--r2)'); p.text(7.9, 2.4, '2y − x = −4', 'var(--vio)', 'end');
  [[0,3],[1,2],[1,3],[2,1],[2,2],[3,0],[3,1],[3,2],[4,0],[4,1]].forEach(([x, y]) => p.el('circle', {cx:p.X(x), cy:p.Y(y), r:3.2, fill:'var(--acc)'}));
  [[6,1],[5,0],[6,0],[4,2]].forEach(([x, y]) => p.el('text', {x:p.X(x), y:p.Y(y) + 4.5, 'text-anchor':'middle', 'font-size':13, 'font-weight':700, fill:'var(--r2)'}, '✗'));
  p.dot(5.5, .75, '(5,5; 0,75)', 'var(--amb)', 9, 4);
  p.el('circle', {cx:p.X(5), cy:p.Y(1), r:7.5, fill:'none', stroke:'var(--acc)', 'stroke-width':2.4});
  p.dot(5, 1, '(5, 1): F = 13', 'var(--acc)', -34, -14);
}
function drawE(){
  const p = Plot($('#plotE'), 8, 4, 1);
  p.poly([[0,0],[4,0],[8,2],[8,4],[0,4]], 'var(--acc)', .3);
  p.line(1, -2, 4, 'var(--r1)'); p.text(4.9, 1.3, 'x − 2y = 4', 'var(--r1)', 'end');
  p.text(.4, 3.3, 'x − 2y ≤ 4  →  y ≥ (x − 4)/2: arriba', 'var(--acc)');
  p.dot(0, 0, '(0, 0) ✓', 'var(--acc)', 8, -8); p.dot(6, 0, '(6, 0) ✗', 'var(--r2)', 8, -8);
}
function drawS(){
  const p = Plot($('#plotS'), 12, 26, 2);
  p.poly([[4,16],[6,12],[5,10],[4,12]], 'var(--acc)', .4);
  p.line(2, 1, 24, 'var(--r1)'); p.line(2, 1, 20, 'var(--r2)', 2.2, '7 5'); p.line(1, 0, 4, 'var(--muted)', 1.6); p.line(2, -1, 0, 'var(--vio)', 1.6);
  p.text(6.3, 13.6, '2x + y = 24', 'var(--r1)'); p.text(6.2, 23.4, '2x + y > 20', 'var(--r2)'); p.text(6.2, 21.5, '(recta discontinua)', 'var(--r2)');
  p.text(4.15, 1.2, 'x = 4', 'var(--muted)'); p.text(9.6, 17.6, 'y = 2x', 'var(--vio)', 'end');
  [[5,10],[4,12]].forEach(([x, y]) => p.el('circle', {cx:p.X(x), cy:p.Y(y), r:4.5, fill:'var(--card)', stroke:'var(--r2)', 'stroke-width':2}));
  p.dot(6, 12, ''); p.dot(4, 16, '(4, 16): máximo', 'var(--acc)', 8, -8);
}
const TRI = [[14,0],[30,0],[6,16]];
function drawJ(){
  const mk = (id, a, b, ks, lab) => { const p = Plot($(id), 33, 31, 5);
    p.poly(TRI, 'var(--acc)', .4);
    ks.forEach((k, i) => { const last = i === ks.length - 1; p.line(a, b, k, 'var(--amb)', last ? 3.2 : 1.8, last ? '' : '6 4'); const [x, y] = lab(k); p.text(x, y, 'F = ' + k, 'var(--amb)'); });
    p.dot(14, 0, 'A', 'var(--ink)', -4, -8); p.dot(30, 0, 'B', 'var(--ink)', 4, -8); p.dot(6, 16, 'C', 'var(--ink)', -4, -9);
    return p; };
  const p1 = mk('#plotJ1', 6, 4, [100, 140, 180], k => [(k - 88) / 6 + .5, 22]);
  p1.arrow(19, 24, 3, 2, 'var(--amb)'); p1.text(18.5, 27.5, 'k aumenta', 'var(--amb)');
  p1.el('circle', {cx:p1.X(30), cy:p1.Y(0), r:9, fill:'none', stroke:'var(--acc)', 'stroke-width':2.6});
  const p2 = mk('#plotJ2', 4, 6, [60, 90, 120], k => [1, (k - 4) / 6 + 1.3]);
  p2.arrow(20, 14, 2, 3, 'var(--amb)'); p2.text(20.5, 19, 'k aumenta', 'var(--amb)');
  p2.el('line', {x1:p2.X(30), y1:p2.Y(0), x2:p2.X(6), y2:p2.Y(16), stroke:'var(--acc)', 'stroke-width':6, 'stroke-linecap':'round', 'stroke-opacity':.75});
}

function drawHero(){
  const p = Plot($('#heroPlot'), 33, 31, 5);
  p.poly(TRI, 'var(--acc)', .4); p.line(2, 3, 60, 'var(--r1)'); p.line(2, 1, 28, 'var(--r2)');
  p.line(4, 6, 120, 'var(--amb)', 3, '6 4');
  p.dot(14, 0, 'A', 'var(--ink)', -4, -8); p.dot(30, 0, 'B', 'var(--ink)', -14, -8); p.dot(6, 16, 'C(6, 16)', 'var(--ink)');
  p.text(17, 25, 'F = 120 en todo BC', 'var(--amb)');
}
function draw1(){
  const p = Plot($('#plot1'), 33, 31, 5);
  const r1 = $('#s_r1').checked, r2 = $('#s_r2').checked, rg = $('#s_reg').checked, cut = $('#s_cut').checked;
  if (r1) p.poly([[0,0],[30,0],[0,20]], 'var(--r1)', .12);
  if (r2) p.poly([[14,0],[33,0],[33,31],[0,31],[0,28]], 'var(--r2)', .1);
  if (rg) p.poly(TRI, 'var(--acc)', .45);
  if (r1) { p.line(2, 3, 60, 'var(--r1)'); p.text(17.5, 10.6, 'r₁: 2x + 3y = 60', 'var(--r1)'); p.arrow(24, 4, -1.1, -1.65, 'var(--r1)'); p.arrow(15, 10, -1.1, -1.65, 'var(--r1)'); }
  if (r2) { p.line(2, 1, 28, 'var(--r2)'); p.text(3.2, 24, 'r₂: 2x + y = 28', 'var(--r2)'); p.arrow(10, 8, 1.9, 0.95, 'var(--r2)'); p.arrow(6.5, 15, 1.9, 0.95, 'var(--r2)'); }
  if (rg) { p.dot(14, 0, 'A(14, 0)', 'var(--ink)', -20, -10); p.dot(30, 0, 'B(30, 0)', 'var(--ink)', -48, -10); p.dot(6, 16, 'C(6, 16)'); }
  if (cut) { p.dot(0, 20, '(0, 20) ✗', 'var(--r2)'); p.dot(0, 28, '(0, 28) ✗', 'var(--r2)'); }
  p.dot(0, 0, '', 'var(--vio)');
}
if ($('#plot1')) ['#s_r1','#s_r2','#s_reg','#s_cut'].forEach(id => $(id).addEventListener('input', draw1));
function draw2(){
  const k = +$('#k2').value, mx = $('#m2max').checked; $('#k2o').textContent = 'k = ' + k;
  const p = Plot($('#plot2'), 11, 11, 1);
  p.poly([[0,11],[0,9],[2,3],[8,0],[11,0],[11,11]], 'var(--acc)', .35);
  p.line(1, 2, 8, 'var(--r1)'); p.line(3, 1, 9, 'var(--r2)');
  p.line(1, 1, k, 'var(--amb)', 3, '6 4');
  p.dot(0, 9, 'A(0, 9)'); p.dot(2, 3, 'B(2, 3)'); p.dot(8, 0, 'C(8, 0)', 'var(--ink)', -10, -10);
  if (mx){ p.dot(6, 6, 'P(6, 6): F = 12', 'var(--r2)'); p.arrow(8, 8, 1.6, 1.6, 'var(--amb)'); p.text(7.9, 9.9, 'F aumenta', 'var(--amb)', 'end'); }
  const v = $('#v2');
  if (k < 5) v.textContent = 'x + y = ' + k + ' no toca la región: ningún punto da ese valor.';
  else if (!mx && k === 5) v.innerHTML = 'x + y = 5 es la recta F(x, y) = Valor óptimo (el menor de los vértices). Solo toca la región en B y toda la región queda en el lado en que F es mayor: <b>el mínimo existe y vale 5 en B(2, 3)</b>.';
  else if (!mx) v.innerHTML = 'x + y = ' + k + ' <b>corta</b> la región: hay puntos con F = ' + k + ', pero también con F menor. Baja la recta hasta el último punto que toca.';
  else if (k === 9) v.innerHTML = 'x + y = 9 es la recta F(x, y) = Valor óptimo (el mayor de los vértices, en A). Pero <b>corta</b> la región: P(6, 6) está en la región y F(P) = 12 &gt; 9. <b>No existe máximo.</b>';
  else v.innerHTML = 'x + y = ' + k + ' <b>corta</b> la región: hay puntos con F = ' + k + ' y con valores mayores. Por mucho que subas k, siempre la corta: <b>no hay máximo</b>.';
}
if ($('#plot2')){ ['#k2','#m2min','#m2max'].forEach(id => $(id).addEventListener('input', draw2));
$('#b2').addEventListener('click', () => { $('#k2').value = $('#m2max').checked ? 9 : 5; draw2(); }); }
function draw4(){
  const a = +$('#fa').value || 0, b = +$('#fb').value || 0, k = +$('#k4').value;
  const V = [['A',14,0],['B',30,0],['C',6,16]].map(([n,x,y]) => [n, x, y, a * x + b * y]);
  const mx = Math.max(...V.map(v => v[3])), mn = Math.min(...V.map(v => v[3]));
  $('#ftab').innerHTML = '<tr><th>Vértice</th><th>Valor de F</th><th></th></tr>' + V.map(([n,x,y,f]) => `<tr><td>${n}(${x}, ${y})</td><td style="font-weight:400">F(${x}, ${y}) = ${a}·${x} + ${b}·${y} = <b>${f}</b></td><td>${f === mx ? '← máximo' : f === mn ? '← mínimo' : ''}</td></tr>`).join('');
  const ms = V.filter(v => v[3] === mx).map(v => v[0]);
  $('#fv').innerHTML = ms.length > 1 ? `Máximo ${mx} en ${ms.join(' y ')}: <b>en todo el segmento ${ms.join('')}</b>.` : `Máximo ${mx} en el vértice ${ms[0]}: una sola solución.`;
  $('#k4').max = Math.max(10, Math.ceil(mx * 1.3)); $('#k4o').textContent = 'k = ' + k;
  const p = Plot($('#plot4'), 33, 31, 5);
  p.poly(TRI, 'var(--acc)', .4); p.line(2, 3, 60, 'var(--r1)', 1.4); p.line(2, 1, 28, 'var(--r2)', 1.4);
  if (a || b) p.line(a, b, k, 'var(--amb)', 3, '6 4');
  V.forEach(([n,x,y,f]) => p.dot(x, y, n + ': ' + f, f === mx ? 'var(--acc)' : 'var(--ink)', n === 'B' ? -40 : 6, -8));
  const st = k < mn ? 'no toca la región' : k > mx ? 'no toca la región (supera el máximo)' : k === mx ? 'toca la región solo en el óptimo' : k === mn ? 'toca la región en el mínimo' : 'corta la región';
  p.text(1, 29, `F = ${k}: ${st}`, 'var(--amb)');
}
if ($('#plot4')) ['#fa','#fb','#k4'].forEach(id => $(id).addEventListener('input', draw4));

/* ---------- simulador de calculadora (fase 4): componente reutilizable, diseño propio ---------- */
function CalcSim(root, start){
  const KEYS = [['HOME','HOME','fn'],['BACK','BACK','fn'],['UP','▲','ar'],['OK','OK','ok'],['TOOLS','TOOLS','fn'],
    ['CATALOG','CATALOG','fn'],['LEFT','◀','ar'],['DOWN','▼','ar'],['RIGHT','▶','ar'],['AC','AC','fn'],
    ['7','7'],['8','8'],['9','9'],['(','('],[')',')'],
    ['4','4'],['5','5'],['6','6'],['×','×'],['÷','÷'],
    ['1','1'],['2','2'],['3','3'],['+','+'],['−','−'],
    ['0','0'],['.',','],['NEG','(−)'],['x','x'],['EXE','EXE','exe']];
  const NAME = Object.fromEntries(KEYS.map(k => [k[0], k[1]]));
  const APPS = ['Calcular','Tabla','Ecuación','Matriz'];
  const hi = s => '<span class="cs-hi">' + s + '</span>';
  const pad = (s, n) => { s = String(s); return ' '.repeat(Math.max(0, n - s.length)) + s; };
  const dec = v => { const r = Math.round(v * 1e6) / 1e6; return String(r).replace('.', ',').replace('-', '−'); };
  const show = b => b.replace('.', ',').replace('-', '−');
  const isNum = b => /^-?\d+(\.\d+)?$/.test(b);
  const menu = (title, items, cur) => [title, ...items.map((t, i) => i === cur ? hi('▸ ' + t) : '  ' + t)];
  /* fracciones exactas (enteros pequeños) */
  const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a || 1; };
  const fr = (n, d=1) => { if (d < 0){ n = -n; d = -d; } const g = gcd(n, d); return [n / g, d / g]; };
  const fparse = b => { const i = b.indexOf('.'); return i < 0 ? fr(+b) : fr(Math.round(+b * 10 ** (b.length - i - 1)), 10 ** (b.length - i - 1)); };
  const fmul = (a, b) => fr(a[0] * b[0], a[1] * b[1]), fsub = (a, b) => fr(a[0] * b[1] - b[0] * a[1], a[1] * b[1]), fdiv = (a, b) => fr(a[0] * b[1], a[1] * b[0]);
  const fstr = f => (f[1] === 1 ? String(f[0]) : f[0] + '/' + f[1]).replace('-', '−');
  /* expresiones de f(x): + − × ÷ ( ) y producto implícito (2x) */
  function compile(src){
    const tk = src.match(/\d+(?:\.\d+)?|[x()+−×÷-]/g) || []; if (tk.join('') !== src || !tk.length) return null;
    let i = 0;
    const prim = () => { const t = tk[i]; if (t === undefined) throw 0;
      if (t === '('){ i++; const e = expr(); if (tk[i] !== ')') throw 0; i++; return e; }
      if (t === 'x'){ i++; return x => x; }
      if (/^\d/.test(t)){ i++; const v = +t; return () => v; } throw 0; };
    const unary = () => { if (tk[i] === '-' || tk[i] === '−'){ i++; const e = unary(); return x => -e(x); } return prim(); };
    const term = () => { let a = unary();
      for (;;){ const t = tk[i];
        if (t === '×'){ i++; const b = unary(), p = a; a = x => p(x) * b(x); }
        else if (t === '÷'){ i++; const b = unary(), p = a; a = x => p(x) / b(x); }
        else if (t === 'x' || t === '(' || (t !== undefined && /^\d/.test(t))){ const b = prim(), p = a; a = x => p(x) * b(x); }
        else return a; } };
    const expr = () => { let a = term();
      for (;;){ const t = tk[i];
        if (t === '+'){ i++; const b = term(), p = a; a = x => p(x) + b(x); }
        else if (t === '−' || t === '-'){ i++; const b = term(), p = a; a = x => p(x) - b(x); }
        else return a; } };
    try { const f = expr(); return i === tk.length ? f : null; } catch(e){ return null; }
  }
  let S, mode = start || 'eq', warn = '', hint = true;
  /* entrada de números: dígitos, coma, (−) y AC */
  const numKey = k => { if (/^\d$/.test(k)){ if (S.buf.replace('-', '').length < 7) S.buf += k; return true; }
    if (k === '.'){ if (!S.buf.includes('.')) S.buf += (/\d$/.test(S.buf) ? '' : '0') + '.'; return true; }
    if (k === 'NEG'){ S.buf = S.buf.startsWith('-') ? S.buf.slice(1) : '-' + S.buf; return true; }
    if (k === 'AC'){ S.buf = ''; return true; } return false; };
  const wantNum = ex => { const b = S.buf; if (ex != null && ex !== b && ex.startsWith(b)){ const c = ex[b.length]; return c === '-' ? 'NEG' : c; } return isNum(b) ? 'EXE' : null; };
  const cell = (v, on) => on ? hi(pad(S.buf ? show(S.buf) : '_', 5)) : pad(v == null ? '·' : show(v), 5);
  const appsView = (target, stage) => ({stage, scr: ['MENÚ PRINCIPAL', '', APPS.map((a, i) => i === S.cur ? hi(a) : a).join(' '), '', '◀ ▶ para moverte · OK para abrir'],
    want: S.cur < target ? 'RIGHT' : S.cur > target ? 'LEFT' : 'OK', tip: 'Ve a «' + APPS[target] + '» con las flechas y pulsa OK.'});
  const appsKey = (k, target, next) => { if (k === 'RIGHT' || k === 'LEFT'){ S.cur = Math.max(0, Math.min(APPS.length - 1, S.cur + (k === 'RIGHT' ? 1 : -1))); return true; }
    if (k === 'OK'){ if (S.cur !== target) return 'Esa es otra aplicación. Aquí practicamos «' + APPS[target] + '».'; next(); return true; } return false; };
  const listKey = (k, n) => { if (k === 'DOWN' || k === 'UP'){ S.cur = Math.max(0, Math.min(n - 1, S.cur + (k === 'DOWN' ? 1 : -1))); return true; } return false; };
  const wantList = t => S.cur < t ? 'DOWN' : S.cur > t ? 'UP' : 'OK';

  const MODES = {
    /* ===== 1. vértices: aplicación Ecuación ===== */
    eq: { tab: 'Vértices (Ecuación)', ex: ['2','3','60','2','1','28'],
      stages: ['HOME y abrir «Ecuación»', '«Sist ec lineal» → «2 incógnitas»', 'Coeficientes a, b, c de cada ecuación (cada uno con EXE)', 'EXE: resolver', 'Leer x e y: es el vértice'],
      intro: 'Sistema del vértice C: 2x + 3y = 60 y 2x + y = 28. Puedes escribir otros coeficientes.',
      init(){ return {st: 'home', cur: 0, buf: '', co: [], idx: 0}; },
      grid(on){ const c = S.co, row = r => (r + 1) + ' ' + [0, 1, 2].map(j => cell(c[r * 3 + j], on && S.idx === r * 3 + j)).join(' '); return ['      a     b     c', row(0), row(1)]; },
      view(){ const s = S.st;
        if (s === 'home') return {stage: 0, scr: ['', '  Pulsa HOME para ver', '  las aplicaciones'], want: 'HOME', tip: 'Pulsa HOME.'};
        if (s === 'apps') return appsView(2, 0);
        if (s === 'sub') return {stage: 1, scr: menu('ECUACIÓN', ['Sist ec lineal', 'Polinómica', 'Solver'], S.cur), want: wantList(0), tip: 'Elige «Sist ec lineal» y pulsa OK.'};
        if (s === 'n') return {stage: 1, scr: menu('Número de incógnitas?', ['2 incógnitas', '3 incógnitas', '4 incógnitas'], S.cur), want: wantList(0), tip: 'Elige «2 incógnitas» y pulsa OK.'};
        if (s === 'coef') return {stage: 2, scr: ['ax + by = c', ...this.grid(true)], want: wantNum(this.ex[S.idx]), tip: 'Escribe el coeficiente ' + 'abc'[S.idx % 3] + ' de la ' + (S.idx < 3 ? '1.ª' : '2.ª') + ' ecuación y pulsa EXE.'};
        if (s === 'ready') return {stage: 3, scr: ['ax + by = c', ...this.grid(false), '', 'EXE: resolver'], want: 'EXE', tip: 'Pulsa EXE para resolver el sistema.'};
        if (s === 'x' || s === 'y'){ const f = S.sol[s === 'x' ? 0 : 1], l = [s + ' =', pad(fstr(f), 22)]; if (f[1] !== 1) l.push(pad('= ' + dec(f[0] / f[1]), 22));
          return {stage: 4, scr: l, want: s === 'x' ? 'EXE' : null, done: s === 'y', tip: s === 'x' ? 'Apunta la x y pulsa EXE para ver la y.' : 'Vértice: (' + fstr(S.sol[0]) + '; ' + fstr(S.sol[1]) + '). Arriba la x, luego la y. Pulsa Reiniciar para probar con otros datos.'}; }
        return {stage: 4, scr: ['', '  ' + S.none], want: null, done: true, tip: S.none === 'Sin solución' ? 'Las rectas son paralelas: no se cortan. No hay vértice.' : 'Las dos ecuaciones son la misma recta (coincidentes): no hay un único punto de corte. No hay vértice.'}; },
      key(k){ const s = S.st;
        if (k === 'HOME'){ Object.assign(S, this.init(), {st: 'apps'}); return true; }
        if (s === 'apps') return appsKey(k, 2, () => { S.st = 'sub'; S.cur = 0; });
        if (s === 'sub' || s === 'n'){ if (listKey(k, 3)) return true; if (k === 'BACK'){ S.st = s === 'n' ? 'sub' : 'apps'; S.cur = s === 'n' ? 0 : 2; return true; }
          if (k === 'OK'){ if (S.cur !== 0) return s === 'sub' ? 'Para los vértices hace falta «Sist ec lineal».' : 'Las incógnitas son dos: x e y.'; S.st = s === 'sub' ? 'n' : 'coef'; S.cur = 0; return true; } return false; }
        if (s === 'coef'){ if (numKey(k)) return true;
          if (k === 'BACK'){ if (S.buf) S.buf = ''; else if (S.idx > 0) S.idx--; return true; }
          if (k === 'EXE'){ if (!isNum(S.buf)) return 'Escribe primero el número.'; S.co[S.idx] = S.buf; S.buf = ''; if (++S.idx === 6) S.st = 'ready'; return true; } return false; }
        if (s === 'ready'){ if (k === 'BACK'){ S.st = 'coef'; S.idx = 5; S.buf = ''; return true; } if (k !== 'EXE') return false;
          const [a1, b1, c1, a2, b2, c2] = S.co.map(fparse), det = fsub(fmul(a1, b2), fmul(a2, b1));
          if (det[0] === 0){ const z = f => f[0] === 0; S.none = z(fsub(fmul(a1, c2), fmul(a2, c1))) && z(fsub(fmul(b1, c2), fmul(b2, c1))) ? 'Infinitas soluciones' : 'Sin solución'; S.st = 'none'; }
          else { S.sol = [fdiv(fsub(fmul(c1, b2), fmul(c2, b1)), det), fdiv(fsub(fmul(a1, c2), fmul(a2, c1)), det)]; S.st = 'x'; } return true; }
        if (s === 'x' || s === 'y'){ if (k === 'EXE' || k === 'DOWN' || k === 'UP'){ S.st = s === 'x' ? 'y' : 'x'; return true; } if (k === 'BACK' || k === 'AC'){ S.st = 'ready'; return true; } return false; }
        if (s === 'none' && (k === 'BACK' || k === 'AC' || k === 'OK')){ S.st = 'ready'; return true; }
        return false; } },

    /* ===== 2. F en los vértices: V · C con matrices ===== */
    mat: { tab: 'F en los vértices (Matriz V·C)', exA: {d: ['3','2'], v: ['14','0','30','0','6','16']}, exB: {d: ['2','1'], v: ['4','6']},
      stages: ['HOME y abrir «Matriz»', 'TOOLS → MatA: una fila por vértice (x, y)', 'TOOLS → MatB: columna con los coeficientes de F', 'CATALOG → MatA, ×, CATALOG → MatB', 'EXE: leer F en cada vértice'],
      intro: 'Vértices A(14, 0), B(30, 0), C(6, 16) y F(x, y) = 4x + 6y. Puedes usar otros vértices (hasta 4) y otra F.',
      init(){ return {st: 'home', cur: 0, buf: '', M: {}, expr: [], idx: 0}; },
      exOf(){ const e = S.ed === 'A' ? this.exA : S.ed === 'B' ? this.exB : null; return e; },
      stg(){ return !S.M.A || (S.ed === 'A' && S.st !== 'main') ? 1 : !S.M.B || (S.ed === 'B' && S.st !== 'main') ? 2 : 3; },
      gridM(m, on){ const out = []; for (let r = 0; r < m.r; r++) out.push('  ' + Array.from({length: m.c}, (_, j) => cell(m.v[r * m.c + j], on && S.idx === r * m.c + j)).join(' ')); return out; },
      view(){ const s = S.st, M = S.M, defs = 'ABCD'.split('').filter(l => M[l]).map(l => 'Mat' + l + ' ' + M[l].r + '×' + M[l].c).join('  ') || '(sin matrices)';
        if (s === 'home') return {stage: 0, scr: ['', '  Pulsa HOME para ver', '  las aplicaciones'], want: 'HOME', tip: 'Pulsa HOME.'};
        if (s === 'apps') return appsView(3, 0);
        if (s === 'main'){ const n = S.expr.length, w = !M.A || !M.B ? 'TOOLS' : n === 0 ? 'CATALOG' : n === 1 ? '×' : n === 2 ? 'CATALOG' : 'EXE';
          return {stage: this.stg(), scr: ['MATRIZ', defs, '', S.expr.join('') + hi('_')], want: w,
            tip: !M.A ? 'Pulsa TOOLS para definir MatA (los vértices).' : !M.B ? 'Pulsa TOOLS para definir MatB (los coeficientes de F).' : n === 0 ? 'Pulsa CATALOG para escribir MatA.' : n === 1 ? 'Pulsa × (multiplicar).' : n === 2 ? 'Pulsa CATALOG para escribir MatB.' : 'Pulsa EXE para calcular el producto.'}; }
        if (s === 'tools'){ const t = !M.A ? 0 : 1; return {stage: this.stg(), scr: menu('Definir matriz', ['MatA', 'MatB', 'MatC', 'MatD'], S.cur), want: wantList(t), tip: 'Elige Mat' + 'AB'[t] + ' y pulsa OK.'}; }
        if (s === 'dimr' || s === 'dimc' || s === 'dimok'){ const e = this.exOf(), d = S.dim;
          return {stage: this.stg(), scr: ['Dimensión matriz?  Mat' + S.ed, 'Filas     ' + (s === 'dimr' ? hi(pad(S.buf || '_', 3)) : pad(d[0], 3)), 'Columnas  ' + (s === 'dimc' ? hi(pad(S.buf || '_', 3)) : pad(d[1] == null ? '·' : d[1], 3)), s === 'dimok' ? hi('▸ Confirmar') : '  Confirmar'],
            want: s === 'dimok' ? 'OK' : wantNum(e && e.d[s === 'dimr' ? 0 : 1]),
            tip: s === 'dimok' ? 'Pulsa OK para confirmar.' : s === 'dimr' ? (S.ed === 'A' ? 'Filas = número de vértices. Escríbelo y pulsa EXE.' : 'Filas = 2 (los dos coeficientes de F). Escríbelo y pulsa EXE.') : (S.ed === 'A' ? 'Columnas = 2 (x, y). Escríbelo y pulsa EXE.' : 'Columnas = 1. Escríbelo y pulsa EXE.')}; }
        if (s === 'elem'){ const m = M[S.ed], full = S.idx >= m.r * m.c, e = this.exOf(), exv = e && e.d[0] == m.r && e.d[1] == m.c ? e.v[S.idx] : null;
          return {stage: this.stg(), scr: ['Mat' + S.ed + ' =', ...this.gridM(m, !full), full ? 'BACK: volver' : ''], want: full ? 'BACK' : wantNum(exv),
            tip: full ? 'Matriz completa. Pulsa BACK para volver.' : 'Escribe el elemento de la fila ' + (Math.floor(S.idx / m.c) + 1) + ', columna ' + (S.idx % m.c + 1) + ' y pulsa EXE.'}; }
        if (s === 'cat') return {stage: 3, scr: menu('CATALOG', ['Matriz'], 0), want: 'OK', tip: 'Pulsa OK para entrar en «Matriz».'};
        if (s === 'catm'){ const t = S.expr.length === 0 ? 0 : 1; return {stage: 3, scr: menu('CATALOG · Matriz', ['MatA', 'MatB', 'MatC', 'MatD'], S.cur), want: wantList(t), tip: 'Elige Mat' + 'AB'[t] + ' y pulsa OK.'}; }
        if (s === 'res'){ const m = S.res; return {stage: 4, scr: [S.expr.join('') + ' =', ...Array.from({length: m.r}, (_, r) => '  ' + Array.from({length: m.c}, (_, j) => pad(dec(m.v[r * m.c + j]), 7)).join(' '))], want: null, done: true,
            tip: 'Cada fila es el valor de F en un vértice, en el mismo orden en que los escribiste. Si F tiene un término constante, súmalo ahora.'}; }
        return {stage: 4, scr: ['', '  ERROR de dimensión', '', '  AC: borrar'], want: 'AC', tip: S.errmsg}; },
      key(k){ const s = S.st, M = S.M;
        if (k === 'HOME'){ Object.assign(S, this.init(), {st: 'apps'}); return true; }
        if (s === 'apps') return appsKey(k, 3, () => { S.st = 'main'; });
        if (s === 'main'){ if (k === 'TOOLS'){ S.st = 'tools'; S.cur = !M.A ? 0 : 1; return true; }
          if (k === 'CATALOG'){ if (S.expr.length % 2) return 'Entre dos matrices va la tecla ×.'; if (S.expr.length > 2) return 'Ya está escrito: pulsa EXE.'; S.st = 'cat'; return true; }
          if (k === '×'){ if (S.expr.length !== 1) return S.expr.length ? 'Ahora toca elegir la segunda matriz con CATALOG.' : 'Primero escribe MatA con CATALOG.'; S.expr.push('×'); return true; }
          if (k === 'AC'){ S.expr = []; return true; } if (k === 'BACK'){ S.expr.pop(); return true; }
          if (k === 'EXE'){ if (S.expr.length !== 3) return 'Escribe antes el producto: MatA × MatB.';
            const a = M[S.expr[0][3]], b = M[S.expr[2][3]];
            if (!a || !b){ S.st = 'err'; S.errmsg = 'Has usado una matriz que no está definida. Pulsa AC y defínela con TOOLS.'; return true; }
            if (a.c !== b.r){ S.st = 'err'; S.errmsg = 'No se pueden multiplicar: las columnas de la primera (' + a.c + ') tienen que ser las filas de la segunda (' + b.r + '). Pulsa AC.'; return true; }
            const v = []; for (let i = 0; i < a.r; i++) for (let j = 0; j < b.c; j++){ let t = 0; for (let q = 0; q < a.c; q++) t += +a.v[i * a.c + q] * +b.v[q * b.c + j]; v.push(t); }
            S.res = {r: a.r, c: b.c, v}; S.st = 'res'; return true; } return false; }
        if (s === 'tools'){ if (listKey(k, 4)) return true; if (k === 'BACK'){ S.st = 'main'; return true; }
          if (k === 'OK'){ S.ed = 'ABCD'[S.cur]; S.dim = []; S.buf = ''; S.st = 'dimr'; return true; } return false; }
        if (s === 'dimr' || s === 'dimc'){ if (numKey(k)) return true; if (k === 'BACK'){ S.st = 'tools'; S.cur = 'ABCD'.indexOf(S.ed); return true; }
          if (k === 'EXE'){ if (!/^[1-4]$/.test(S.buf)) return 'La dimensión tiene que ser 1, 2, 3 o 4 (la calculadora llega hasta 4 × 4).'; S.dim.push(+S.buf); S.buf = ''; S.st = s === 'dimr' ? 'dimc' : 'dimok'; return true; } return false; }
        if (s === 'dimok'){ if (k === 'OK' || k === 'EXE'){ M[S.ed] = {r: S.dim[0], c: S.dim[1], v: []}; S.idx = 0; S.buf = ''; S.st = 'elem'; return true; } if (k === 'BACK'){ S.dim = []; S.st = 'dimr'; return true; } return false; }
        if (s === 'elem'){ const m = M[S.ed], full = S.idx >= m.r * m.c;
          if (k === 'BACK'){ if (!full) return 'Faltan elementos: escribe cada uno y pulsa EXE.'; S.st = 'main'; return true; }
          if (full) return false; if (numKey(k)) return true;
          if (k === 'EXE'){ if (!isNum(S.buf)) return 'Escribe primero el número.'; m.v[S.idx++] = S.buf; S.buf = ''; return true; } return false; }
        if (s === 'cat'){ if (k === 'OK'){ S.st = 'catm'; S.cur = S.expr.length === 0 ? 0 : 1; return true; } if (k === 'BACK'){ S.st = 'main'; return true; } return false; }
        if (s === 'catm'){ if (listKey(k, 4)) return true; if (k === 'BACK'){ S.st = 'cat'; return true; } if (k === 'OK'){ S.expr.push('Mat' + 'ABCD'[S.cur]); S.st = 'main'; return true; } return false; }
        if (s === 'res'){ if (k === 'AC' || k === 'BACK'){ S.expr = []; S.st = 'main'; return true; } return false; }
        if (s === 'err' && k === 'AC'){ S.expr = []; S.st = 'main'; return true; }
        return false; } },

    /* ===== 3. segmento: aplicación Tabla ===== */
    tab: { tab: 'Segmento (Tabla)', exF: '(60−2x)÷3', exR: ['6','30','1'],
      stages: ['HOME y abrir «Tabla»', 'Escribir f(x) y pulsar EXE', 'TOOLS → «Rango tabla»: Inic., Final y Paso', 'Ejecutar', 'Buscar las filas con f(x) entero'],
      intro: 'Lado BC: y = (60 − 2x)/3, con x desde 6 hasta 30. Puedes escribir otra función y otro rango.',
      init(){ return {st: 'home', cur: 0, buf: '', fx: '', rg: [], top: 0}; },
      view(){ const s = S.st, R = ['Inic.', 'Final', 'Paso'];
        if (s === 'home') return {stage: 0, scr: ['', '  Pulsa HOME para ver', '  las aplicaciones'], want: 'HOME', tip: 'Pulsa HOME.'};
        if (s === 'apps') return appsView(1, 0);
        if (s === 'fx'){ const e = this.exF, f = S.fx; let w = 'EXE'; if (e !== f && e.startsWith(f)) w = e[f.length]; else if (!f) w = null;
          return {stage: 1, scr: ['Definir f(x)', '', 'f(x)=' + f.replace(/\./g, ',') + hi('_')], want: w, tip: 'Escribe la función con las teclas (la x, con la tecla x; la fracción, con paréntesis y ÷) y pulsa EXE. BACK borra el último símbolo.'}; }
        if (s === 'main') return {stage: 2, scr: ['TABLA', 'f(x)=' + S.fx.replace(/\./g, ','), '', 'TOOLS: rango de la tabla'], want: 'TOOLS', tip: 'Pulsa TOOLS para elegir el rango de la tabla.'};
        if (s === 'tools') return {stage: 2, scr: menu('TOOLS', ['Rango tabla', 'Definir f(x)'], S.cur), want: wantList(0), tip: 'Elige «Rango tabla» y pulsa OK.'};
        if (s === 'rg' || s === 'run') return {stage: s === 'run' ? 3 : 2, scr: ['Rango tabla', ...R.map((n, i) => n.padEnd(7) + (s === 'rg' && S.idx === i ? hi(pad(S.buf ? show(S.buf) : '_', 6)) : pad(S.rg[i] == null ? '·' : show(S.rg[i]), 6))), s === 'run' ? hi('▸ Ejecutar') : '  Ejecutar'],
          want: s === 'run' ? 'EXE' : wantNum(this.exR[S.idx]), tip: s === 'run' ? 'Pulsa EXE para ejecutar la tabla.' : ['Inicio: la x del primer vértice del segmento.', 'Final: la x del otro vértice.', 'Paso: 1, para ver todos los enteros.'][S.idx] + ' Escríbelo y pulsa EXE.'};
        const rows = S.rows, vis = rows.slice(S.top, S.top + 5), ent = rows.filter(r => r[2]);
        return {stage: 4, scr: ['     x      f(x)', ...vis.map(r => (r[2] ? hi : (t => t))(pad(dec(r[0]), 6) + pad(isFinite(r[1]) ? dec(Math.round(r[1] * 1e4) / 1e4) : 'ERROR', 10) + (r[2] ? ' ←' : '  '))), S.top + 5 < rows.length ? '        ▼' : ''],
          want: S.top + 5 < rows.length ? 'DOWN' : null, done: true, tip: 'Baja con ▼ y quédate con las filas en que f(x) es entero.',
          extra: ent.length ? 'Puntos de coordenadas enteras (' + ent.length + '): ' + ent.map(r => '(' + dec(r[0]) + ', ' + dec(Math.round(r[1])) + ')').join(', ') + '.' : 'En este rango no hay ningún punto con las dos coordenadas enteras.'}; },
      key(k){ const s = S.st;
        if (k === 'HOME'){ Object.assign(S, this.init(), {st: 'apps'}); return true; }
        if (s === 'apps') return appsKey(k, 1, () => { S.st = 'fx'; });
        if (s === 'fx'){ if (/^\d$/.test(k) || ['x', '(', ')', '+', '−', '×', '÷'].includes(k)){ if (S.fx.length < 18) S.fx += k; return true; }
          if (k === '.'){ S.fx += '.'; return true; } if (k === 'NEG'){ S.fx += '-'; return true; }
          if (k === 'AC'){ S.fx = ''; return true; } if (k === 'BACK'){ S.fx = S.fx.slice(0, -1); return true; }
          if (k === 'EXE'){ const f = compile(S.fx); if (!f) return 'La expresión no está bien escrita. Revisa los paréntesis y los signos.'; S.f = f; S.st = 'main'; return true; } return false; }
        if (s === 'main'){ if (k === 'TOOLS'){ S.st = 'tools'; S.cur = 0; return true; } return false; }
        if (s === 'tools'){ if (listKey(k, 2)) return true; if (k === 'BACK'){ S.st = 'main'; return true; }
          if (k === 'OK'){ if (S.cur === 1){ S.st = 'fx'; return true; } S.st = 'rg'; S.idx = 0; S.rg = []; S.buf = ''; return true; } return false; }
        if (s === 'rg'){ if (numKey(k)) return true; if (k === 'BACK'){ if (S.buf) S.buf = ''; else if (S.idx > 0) S.idx--; else S.st = 'tools'; return true; }
          if (k === 'EXE'){ if (!isNum(S.buf)) return 'Escribe primero el número.'; S.rg[S.idx] = S.buf; S.buf = ''; if (++S.idx === 3) S.st = 'run'; return true; } return false; }
        if (s === 'run'){ if (k === 'BACK'){ S.st = 'rg'; S.idx = 2; return true; } if (k !== 'EXE' && k !== 'OK') return false;
          const [a, b, h] = S.rg.map(Number), n = Math.floor((b - a) / h + 1e-9) + 1;
          if (!(h > 0) || b < a || n > 45){ S.st = 'rg'; S.idx = 0; S.rg = []; return !(h > 0) ? 'El paso tiene que ser mayor que 0. Escribe otra vez el rango.' : b < a ? 'El final tiene que ser mayor o igual que el inicio. Escribe otra vez el rango.' : 'Salen demasiadas filas para este simulador (máximo 45). Escribe otra vez el rango.'; }
          S.rows = Array.from({length: n}, (_, i) => { const x = Math.round((a + i * h) * 1e6) / 1e6, y = S.f(x); return [x, y, Number.isInteger(x) && isFinite(y) && Math.abs(y - Math.round(y)) < 1e-9]; });
          S.top = 0; S.st = 'table'; return true; }
        if (s === 'table'){ if (k === 'DOWN' || k === 'UP'){ S.top = Math.max(0, Math.min(Math.max(0, S.rows.length - 5), S.top + (k === 'DOWN' ? 1 : -1))); return true; }
          if (k === 'BACK' || k === 'AC'){ S.st = 'main'; return true; } return false; }
        return false; } }
  };

  root.classList.add('cs');
  root.innerHTML = '<div class="cs-tabs" role="tablist" aria-label="Qué quieres practicar">' + Object.entries(MODES).map(([id, m]) => `<button type="button" role="tab" data-mode="${id}">${m.tab}</button>`).join('') + '</div>'
    + '<div class="cs-body"><div class="cs-dev"><div class="cs-screen" aria-live="polite"></div><div class="cs-msg" role="status"></div><div class="cs-keys">' + KEYS.map(k => `<button type="button" class="cs-k ${k[2] || ''}" data-k="${k[0]}"${k[1].length > 5 ? ' style="font-size:.62em"' : ''}>${k[1]}</button>`).join('') + '</div></div>'
    + '<div class="cs-side"><p class="cs-intro"></p><ol class="cs-guion"></ol><p class="cs-extra"></p>'
    + '<div class="cs-btns"><button type="button" class="proy-btn" data-act="next">Ver la siguiente tecla</button><button type="button" class="proy-btn" data-act="reset">Reiniciar</button><label><input type="checkbox" data-act="hint" checked> Resaltar la siguiente tecla</label></div></div></div>';
  const q = s => root.querySelector(s);
  function render(flash){
    const M = MODES[mode], v = M.view();
    root.querySelectorAll('[data-mode]').forEach(b => b.setAttribute('aria-selected', b.dataset.mode === mode));
    q('.cs-screen').innerHTML = v.scr.join('\n');
    q('.cs-intro').textContent = M.intro;
    q('.cs-guion').innerHTML = M.stages.map((t, i) => `<li class="${i < v.stage || (v.done && i === v.stage) ? 'ok' : i === v.stage ? 'now' : ''}">${t}</li>`).join('');
    q('.cs-msg').innerHTML = (warn ? '<span class="cs-warn">' + warn + '</span> ' : '') + (v.done ? '<b>Hecho.</b> ' : '') + v.tip + (flash && v.want ? ' <b>Tecla: ' + NAME[v.want] + '</b>' : '');
    q('.cs-extra').textContent = v.extra || '';
    root.querySelectorAll('.cs-k').forEach(b => { b.classList.toggle('next', !!(hint || flash) && b.dataset.k === v.want); b.classList.toggle('flash', !!flash && b.dataset.k === v.want); });
    root.dataset.state = S.st; root.dataset.want = v.want || '';
  }
  function setMode(m){ if (!MODES[m]) return; mode = m; S = MODES[m].init(); warn = ''; render(); }
  function press(k){ const M = MODES[mode], v = M.view(), r = M.key(k);
    warn = r === true ? '' : typeof r === 'string' ? r : 'Ahora toca ' + (v.want ? 'la tecla ' + NAME[v.want] + '.' : 'otra cosa:');
    render(); }
  root.addEventListener('click', ev => { const t = ev.target.closest('button, input'); if (!t) return;
    if (t.dataset.k) press(t.dataset.k); else if (t.dataset.mode) setMode(t.dataset.mode);
    else if (t.dataset.act === 'reset') setMode(mode); else if (t.dataset.act === 'next'){ warn = ''; render(true); }
    else if (t.dataset.act === 'hint'){ hint = t.checked; render(); } });
  setMode(mode);
  return {setMode, press, get state(){ return S; }};
}
const CALC = $('#calcsim') ? CalcSim($('#calcsim')) : null;
document.addEventListener('click', ev => { const a = ev.target.closest('[data-calc]'); if (a && CALC){ CALC.setMode(a.dataset.calc); const c = $('#calc'); if (c) c.scrollIntoView({block:'start'}); } });
function drawSol(svg, s){ const p = Plot(svg, s.xmax, s.ymax, s.step, s); p.poly(s.poly, 'var(--acc)', .3);
  const sx = p.X(1) - p.X(0), sy = p.Y(0) - p.Y(1);
  /* 1) todas las rectas, 2) las flechas de los semiplanos, 3) los rótulos encima de todo */
  s.lines.forEach(l => p.line(l[0], l[1], l[2], l[3], 2.2, l[4] ? '7 5' : ''));
  if (s.fline){ const f = s.fline; p.line(f[0], f[1], f[2], 'var(--ink)', 2.6, '3 4'); }
  s.lines.forEach(l => { if (!l[11]) return;
    const nx = l[11] * l[0] / sx, ny = l[11] * l[1] / sy, m = Math.hypot(nx, ny), L = 18;
    p.arrow(l[9], l[10], L * nx / m / sx, L * ny / m / sy, l[3]); });
  s.lines.forEach(l => p.text(l[6], l[7], l[5], l[3], l[8]));
  if (s.fline){ const f = s.fline; p.text(f[4], f[5], f[3], 'var(--ink)', f[6]); }
  p.el('text', {x:p.X(s.R[0]), y:p.Y(s.R[1]), 'font-size':18, 'font-weight':700, 'font-style':'italic', fill:'var(--acc)', 'text-anchor':'middle'}, 'R');
  s.dots.forEach(d => { const lx = d[4] != null ? d[4] : d[0], ly = d[5] != null ? d[5] : d[1], an = d[6] || 'start',
      txt = d[4] != null ? d[2] : '  ' + d[2];
    if (d[3] === 2){ p.el('text', {x:p.X(d[0]), y:p.Y(d[1]) + 5, 'text-anchor':'middle', 'font-size':14, 'font-weight':700, fill:'var(--r2)'}, '✗'); p.text(lx, ly, txt, 'var(--r2)', an); }
    else if (d[3] === 1){ p.el('circle', {cx:p.X(d[0]), cy:p.Y(d[1]), r:4.5, fill:'var(--card)', stroke:'var(--r2)', 'stroke-width':2}); p.text(lx, ly, txt, 'var(--r2)', an); }
    else if (d[3] === 3){ p.el('circle', {cx:p.X(d[0]), cy:p.Y(d[1]), r:3.4, fill:'var(--acc)'}); if (d[2]) p.text(lx, ly, txt, 'var(--acc)', an); }
    else if (d[4] != null){ p.dot(d[0], d[1], ''); p.text(lx, ly, d[2], 'var(--ink)', an); }
    else p.dot(d[0], d[1], d[2]); }); }
window.PLPlot = Plot; window.PLdrawSol = drawSol;
[['#heroPlot', drawHero], ['#plot0', draw0], ['#plot1', draw1], ['#plotE', drawE], ['#plotS', drawS], ['#plotJ1', drawJ], ['#plot2', draw2], ['#plot4', draw4]].forEach(([id, f]) => { if ($(id)) f(); });
})();

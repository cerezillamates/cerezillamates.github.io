/* ==========================================================================
   pl-lab.js — Laboratorio de programación lineal
   Escribes las restricciones y la función objetivo; el laboratorio dibuja las rectas,
   la región factible, calcula los vértices y el valor de F en cada uno, dice si la región
   es acotada y mueve la recta F(x, y) = k. Usa window.PLPlot (pl-graf.js).
   Uso:  <div class="pl-lab" data-pllab='{"r":[[2,3,"<=",60],[2,1,">=",28]],"f":[4,6,0],"obj":"max"}'></div>
         <button data-pllab-poner="ID" data-valores='{...}'>Verlo en el laboratorio</button>
   ========================================================================== */
(function(){
"use strict";
const EPS = 1e-9;
const COL = ['var(--r1)', 'var(--r2)', 'var(--vio)', 'var(--amb)', '#0f766e', '#9333ea'];
const LET = 'ABCDEFGHIJ';

/* --- números: fracciones sencillas y coma decimal --- */
function frac(v){
  if (Math.abs(v - Math.round(v)) < 1e-7) return String(Math.round(v)).replace('-', '−');
  for (let d = 2; d <= 12; d++){ const n = Math.round(v * d); if (Math.abs(n / d - v) < 1e-7) return (n < 0 ? '−' : '') + Math.abs(n) + '/' + d; }
  return String(+v.toFixed(2)).replace('.', ',').replace('-', '−');
}
const num = v => frac(v);
const term = (c, letra, primero) => {
  if (Math.abs(c) < EPS) return '';
  const s = c < 0 ? ' − ' : (primero ? '' : ' + '), a = Math.abs(c);
  return (primero && c < 0 ? '−' : s) + (Math.abs(a - 1) < EPS ? '' : frac(a)) + letra;
};
const expr = (a, b) => { const s1 = term(a, 'x', true); return (s1 + term(b, 'y', !s1)) || '0'; };
const OPS = {'<=': '≤', '>=': '≥', '=': '='};

/* --- geometría --- */
const cumple = (r, x, y) => { const v = r[0] * x + r[1] * y - r[3]; return r[2] === '<=' ? v <= 1e-7 : r[2] === '>=' ? v >= -1e-7 : Math.abs(v) <= 1e-7; };
function corte(r, s){ const d = r[0] * s[1] - r[1] * s[0]; if (Math.abs(d) < EPS) return null; return [(r[3] * s[1] - r[1] * s[3]) / d, (r[0] * s[3] - r[3] * s[0]) / d]; }
function recorta(poly, r){ // semiplano de r sobre el polígono (Sutherland-Hodgman)
  const lados = r[2] === '=' ? [[r[0], r[1], '<=', r[3]], [r[0], r[1], '>=', r[3]]] : [r];
  for (const h of lados){
    const out = [], v = p => h[0] * p[0] + h[1] * p[1] - h[3], dentro = p => h[2] === '<=' ? v(p) <= 1e-9 : v(p) >= -1e-9;
    for (let i = 0; i < poly.length; i++){
      const P = poly[i], Q = poly[(i + 1) % poly.length], a = dentro(P), b = dentro(Q);
      if (a) out.push(P);
      if (a !== b){ const t = v(P) / (v(P) - v(Q)); out.push([P[0] + t * (Q[0] - P[0]), P[1] + t * (Q[1] - P[1])]); }
    }
    poly = out; if (!poly.length) break;
  }
  return poly;
}
function region(R, x0, y0, x1, y1){ let p = [[x0, y0], [x1, y0], [x1, y1], [x0, y1]]; for (const r of R){ p = recorta(p, r); if (!p.length) return []; } return p; }
const area = p => Math.abs(p.reduce((s, a, i) => { const b = p[(i + 1) % p.length]; return s + a[0] * b[1] - b[0] * a[1]; }, 0)) / 2;
const bonito = v => { const e = Math.pow(10, Math.floor(Math.log10(v))), m = v / e; return (m <= 1 ? 1 : m <= 2 ? 2 : m <= 2.5 ? 2.5 : m <= 5 ? 5 : 10) * e; };

function resuelve(cfg){
  const R = cfg.r.map(r => [+r[0], +r[1], r[2], +r[3]]);
  if (cfg.pos !== false){ R.push([1, 0, '>=', 0, 'eje']); R.push([0, 1, '>=', 0, 'eje']); }
  // vértices: cortes de dos rectas que cumplen todo
  const V = [];
  for (let i = 0; i < R.length; i++) for (let j = i + 1; j < R.length; j++){
    const p = corte(R[i], R[j]); if (!p) continue;
    if (R.every(r => cumple(r, p[0], p[1])) && !V.some(q => Math.hypot(q[0] - p[0], q[1] - p[1]) < 1e-6)) V.push(p);
  }
  // ventana
  const pts = V.slice(); R.forEach(r => { if (Math.abs(r[0]) > EPS) pts.push([r[3] / r[0], 0]); if (Math.abs(r[1]) > EPS) pts.push([0, r[3] / r[1]]); });
  let xm = Math.max(1, ...pts.map(p => p[0])), ym = Math.max(1, ...pts.map(p => p[1]));
  let xn = Math.min(0, ...V.map(p => p[0])), yn = Math.min(0, ...V.map(p => p[1]));
  xm *= 1.15; ym *= 1.15; if (xn < 0) xn *= 1.15; if (yn < 0) yn *= 1.15;
  const sx = bonito((xm - xn) / 8), sy = bonito((ym - yn) / 8);
  xm = Math.ceil(xm / sx) * sx; ym = Math.ceil(ym / sy) * sy; xn = Math.floor(xn / sx) * sx; yn = Math.floor(yn / sy) * sy;
  const poly = region(R, xn, yn, xm, ym);
  const big = region(R, xn - 1e4 * sx, yn - 1e4 * sy, xm + 1e4 * sx, ym + 1e4 * sy);
  const vacia = !V.length && !poly.length;
  const acotada = !vacia && area(big) <= area(poly) * 1.0001 + 1e-9;
  // vértices ordenados por ángulo y con letra
  if (V.length){ const c = V.reduce((s, p) => [s[0] + p[0] / V.length, s[1] + p[1] / V.length], [0, 0]);
    V.sort((p, q) => Math.atan2(p[1] - c[1], p[0] - c[0]) - Math.atan2(q[1] - c[1], q[0] - c[0]));
    // empezar por el de menor y (y, a igualdad, menor x), como en los apuntes: A abajo
    let k = 0; V.forEach((p, i) => { const q = V[k]; if (p[1] < q[1] - 1e-9 || (Math.abs(p[1] - q[1]) < 1e-9 && p[0] < q[0])) k = i; });
    V.push(...V.splice(0, k)); }
  const F = p => cfg.f[0] * p[0] + cfg.f[1] * p[1] + (cfg.f[2] || 0);
  const val = V.map(F);
  let max = null, min = null;
  if (V.length){
    const M = Math.max(...val), m = Math.min(...val), bigv = big.map(F);
    max = Math.max(...bigv) > M + 1e-6 * (1 + Math.abs(M)) ? null : M;
    min = Math.min(...bigv) < m - 1e-6 * (1 + Math.abs(m)) ? null : m;
  }
  return {R, V, val, poly, big, acotada, vacia, max, min, win:[xn, yn, xm, ym, sx, sy], F};
}

function dibuja(svg, cfg, S, k){
  const [xn, yn, xm, ym, sx, sy] = S.win;
  const p = window.PLPlot(svg, xm, ym, sx, {xmin:xn, ymin:yn, stepx:sx, stepy:sy});
  if (S.poly.length) p.poly(S.poly, 'var(--acc)', .3);
  S.R.forEach((r, i) => { if (r[4] === 'eje') return; const c = COL[i % COL.length];
    p.line(r[0], r[1], r[3], c, 2.2);
    // nombre de la recta cerca de un extremo visible
    const P = []; const add = (x, y) => { if (x >= xn - 1e-9 && x <= xm + 1e-9 && y >= yn - 1e-9 && y <= ym + 1e-9) P.push([x, y]); };
    if (Math.abs(r[1]) > EPS){ add(xn, (r[3] - r[0] * xn) / r[1]); add(xm, (r[3] - r[0] * xm) / r[1]); } if (Math.abs(r[0]) > EPS){ add((r[3] - r[1] * yn) / r[0], yn); add((r[3] - r[1] * ym) / r[0], ym); }
    if (P.length){ P.sort((a, b) => b[1] - a[1]); const q = P[0]; p.text(Math.min(Math.max(q[0], xn + (xm - xn) * .04), xm - (xm - xn) * .3), Math.min(q[1], ym - (ym - yn) * .05), 'r' + '₁₂₃₄₅₆'[i] , c); }
  });
  if (k != null && (Math.abs(cfg.f[0]) > EPS || Math.abs(cfg.f[1]) > EPS)) p.line(cfg.f[0], cfg.f[1], k - (cfg.f[2] || 0), 'var(--ink)', 2, '7 5');
  S.V.forEach((v, i) => p.dot(v[0], v[1], LET[i], 'var(--ink)', 6, -6));
}

function monta(root){
  let cfg = JSON.parse(root.dataset.pllab || '{}');
  cfg.r = cfg.r || [[2, 3, '<=', 60], [2, 1, '>=', 28]]; cfg.f = cfg.f || [4, 6, 0]; cfg.obj = cfg.obj || 'max';
  root.innerHTML = `<header><h3>Laboratorio de programación lineal</h3><p>Escribe las restricciones y la función objetivo. El laboratorio dibuja la región, calcula los vértices y el valor de F en cada uno.</p></header>
  <div class="pl-lab-cuerpo"><div class="pl-lab-datos">
    <p class="pl-lab-t">Restricciones</p><div class="pl-lab-rs"></div>
    <p class="pl-lab-bot"><button type="button" class="boton fino" data-mas>+ restricción</button> <label><input type="checkbox" data-pos ${cfg.pos === false ? '' : 'checked'}> x ≥ 0, y ≥ 0</label></p>
    <p class="pl-lab-t">Función objetivo</p>
    <p class="pl-lab-f">F(x, y) = <input type="number" step="any" data-f="0" value="${cfg.f[0]}" aria-label="coeficiente de x"> x + <input type="number" step="any" data-f="1" value="${cfg.f[1]}" aria-label="coeficiente de y"> y + <input type="number" step="any" data-f="2" value="${cfg.f[2] || 0}" aria-label="número suelto">
      <select data-obj aria-label="maximizar o minimizar"><option value="max">máximo</option><option value="min">mínimo</option></select></p>
  </div>
  <div class="pl-lab-graf"><svg class="plot" viewBox="0 0 400 330" role="img" aria-label="Región factible del laboratorio"></svg>
    <p class="pl-lab-k"><label>Recta F(x, y) = k: <input type="range" data-k></label> <output data-ko></output> <button type="button" class="boton fino" data-opt>En el valor óptimo</button></p></div></div>
  <div class="pl-lab-sal" aria-live="polite"></div>`;
  const rs = root.querySelector('.pl-lab-rs'), svg = root.querySelector('svg'), sal = root.querySelector('.pl-lab-sal'), K = root.querySelector('[data-k]'), KO = root.querySelector('[data-ko]');
  root.querySelector('[data-obj]').value = cfg.obj;
  const fila = r => { const d = document.createElement('div'); d.className = 'pl-lab-r';
    d.innerHTML = `<input type="number" step="any" value="${r[0]}" aria-label="coeficiente de x"> x + <input type="number" step="any" value="${r[1]}" aria-label="coeficiente de y"> y <select aria-label="desigualdad"><option value="<=">≤</option><option value=">=">≥</option><option value="=">=</option></select> <input type="number" step="any" value="${r[3]}" aria-label="término independiente"> <button type="button" class="pl-lab-x" aria-label="quitar">×</button>`;
    d.querySelector('select').value = r[2]; rs.appendChild(d); };
  const pinta = () => { rs.innerHTML = ''; cfg.r.forEach(fila); };
  const lee = () => {
    cfg.r = [...rs.children].map(d => { const i = d.querySelectorAll('input'); return [+i[0].value || 0, +i[1].value || 0, d.querySelector('select').value, +i[2].value || 0]; }).filter(r => Math.abs(r[0]) > EPS || Math.abs(r[1]) > EPS);
    cfg.f = [0, 1, 2].map(i => +root.querySelector(`[data-f="${i}"]`).value || 0);
    cfg.obj = root.querySelector('[data-obj]').value; cfg.pos = root.querySelector('[data-pos]').checked;
  };
  let S;
  const calcula = (kOpt) => {
    lee(); S = resuelve(cfg);
    const opt = cfg.obj === 'max' ? S.max : S.min, vals = S.val;
    if (vals.length){ const lo = Math.min(...vals), hi = Math.max(...vals), pad = (hi - lo || Math.abs(hi) || 10) * .6;
      K.min = +(lo - pad).toFixed(4); K.max = +(hi + pad).toFixed(4); K.step = +((hi - lo || 10) / 200).toPrecision(2);
      if (kOpt || K.dataset.ok !== '1'){ K.value = opt != null ? opt : (cfg.obj === 'max' ? hi : lo); K.dataset.ok = '1'; } }
    const k = +K.value; KO.textContent = 'k = ' + frac(k);
    dibuja(svg, cfg, S, vals.length ? k : null);
    // salida
    if (S.vacia){ sal.innerHTML = '<p class="pl-lab-v mal"><b>No hay región factible:</b> las restricciones no tienen ningún punto en común. El problema no tiene solución.</p>'; return; }
    const filas = S.V.map((v, i) => { const e = vals[i], es = cfg.obj === 'max' ? (S.max != null && Math.abs(e - S.max) < 1e-7) : (S.min != null && Math.abs(e - S.min) < 1e-7);
      return `<tr${es ? ' class="opt"' : ''}><td>${LET[i]}(${num(v[0])}, ${num(v[1])})</td><td>${frac(e)}${es ? ' ← ' + (cfg.obj === 'max' ? 'máximo' : 'mínimo') : ''}</td></tr>`; }).join('');
    const nom = cfg.obj === 'max' ? 'máximo' : 'mínimo';
    let txt = `<p><b>Región ${S.acotada ? 'acotada' : 'no acotada'}.</b> `;
    if (S.acotada) txt += `Existen el máximo (${frac(S.max)}) y el mínimo (${frac(S.min)}).`;
    else txt += opt != null ? `El ${nom} existe: la recta F(x, y) = ${frac(opt)} solo toca la región y la deja entera a un lado.` : `No existe ${nom}: la recta F(x, y) = ${frac(cfg.obj === 'max' ? Math.max(...vals) : Math.min(...vals))} corta la región; hay puntos de la región con un valor ${cfg.obj === 'max' ? 'mayor' : 'menor'}.`;
    if (opt != null){ const ix = vals.map((e, i) => Math.abs(e - opt) < 1e-7 ? i : -1).filter(i => i >= 0);
      if (ix.length > 1) txt += ` El ${nom} se alcanza en dos vértices, ${ix.map(i => LET[i]).join(' y ')}: también en todo el segmento que los une.`; }
    txt += '</p>';
    // la recta de nivel: ¿toca o corta?
    const d = q => cfg.f[0] * q[0] + cfg.f[1] * q[1] + (cfg.f[2] || 0) - k, tol = 1e-7 * (1 + Math.abs(k));
    const arriba = S.big.some(q => d(q) > tol), abajo = S.big.some(q => d(q) < -tol), toca = S.V.some(q => Math.abs(d(q)) <= tol);
    const kt = `<p class="pl-lab-v">La recta F(x, y) = ${frac(k)} ${arriba && abajo ? '<b>corta</b> la región: queda región a los dos lados.' : toca ? '<b>solo toca</b> la región y la deja entera a un lado.' : 'no toca la región.'}</p>`;
    sal.innerHTML = `<div class="desliza"><table class="tabla"><thead><tr><th>Vértice</th><th>F(x, y) = ${expr(cfg.f[0], cfg.f[1])}${cfg.f[2] ? (cfg.f[2] > 0 ? ' + ' : ' − ') + frac(Math.abs(cfg.f[2])) : ''}</th></tr></thead><tbody>${filas}</tbody></table></div>${txt}${kt}`;
  };
  pinta();
  root.addEventListener('input', e => { if (e.target === K){ calcula(false); return; } K.dataset.ok = '0'; calcula(false); });
  root.addEventListener('change', e => { if (e.target.matches('select,[data-pos]')){ K.dataset.ok = '0'; calcula(false); } });
  root.addEventListener('click', e => {
    if (e.target.matches('[data-mas]')){ fila([1, 1, '<=', 10]); K.dataset.ok = '0'; calcula(false); }
    else if (e.target.matches('.pl-lab-x')){ e.target.parentNode.remove(); K.dataset.ok = '0'; calcula(false); }
    else if (e.target.matches('[data-opt]')) calcula(true);
  });
  root.pon = c => { cfg = Object.assign({f:[0, 0, 0], obj:'max'}, c); pinta();
    [0, 1, 2].forEach(i => root.querySelector(`[data-f="${i}"]`).value = cfg.f[i] || 0);
    root.querySelector('[data-obj]').value = cfg.obj; root.querySelector('[data-pos]').checked = cfg.pos !== false; calcula(true); };
  calcula(true);
}
function init(){
  document.querySelectorAll('.pl-lab').forEach(monta);
  document.addEventListener('click', e => { const b = e.target.closest('[data-pllab-poner]'); if (!b) return;
    const lab = document.getElementById(b.dataset.pllabPoner); if (!lab || !lab.pon) return;
    lab.pon(JSON.parse(b.dataset.valores)); lab.scrollIntoView({behavior:'smooth', block:'start'}); });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
window.PLlab = {resuelve};
})();

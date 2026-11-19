/* 3.º ESO · Tema 3 · SITUACIÓN DE APRENDIZAJE «¿Es saludable nuestro desayuno y nuestra merienda?»
   19-nov-2026 (versión de la profesora): sin ejercicios de explicación. El desayuno y la merienda
   de la profe con etiquetas REALES (fotos suyas), los pasos del proyecto explicados uno a uno,
   todas las tablas que se miran, qué es el %IR y la cartulina terminada.
   Etiquetas reales (valores por 100 g / 100 ml):
     ColaCao Original (Idilia Foods) · Leche entera UHT COVAP · Galletas María (900 g, 141 galletas,
     columna «por galleta» de 6,4 g) · Tortas de aceite Inés Rosales (180 g, 6 tortas de 30 g) ·
     Tulipán, materia grasa para untar 59 %.
   IR (ingesta de referencia de un adulto medio, 8400 kJ / 2000 kcal): Reglamento (UE) 1169/2011, anexo XIII. */
(function(){
const R = String.raw;
const td = v => v === "x" ? `<td class="x">x</td>` : `<td>${v}</td>`;
const cuadro = (m1, m2, a, b) => `<table class="t cuadro"><tr><th>${m1}</th><th class="fl">(D) ⟶</th><th>${m2}</th></tr><tr>${td(a[0])}<td></td>${td(a[1])}</tr><tr>${td(b[0])}<td></td>${td(b[1])}</tr></table>`;

/* --- estilos propios de esta SA --- */
const CSS = `<style>
.sa2-etqs{display:grid;grid-template-columns:repeat(auto-fit,minmax(17em,1fr));gap:.6em}
.sa2-etq{background:#fff;color:#111;border:3px solid #111;border-radius:6px;padding:.35em .55em;font-size:.86em;line-height:1.25}
.sa2-etq img{width:100%;max-height:112px;object-fit:contain;object-position:top;border-radius:4px;margin-bottom:.25em;display:block;background:#f4f4f4}
.sa2-foto{max-width:100%;max-height:52vh;width:auto;border-radius:8px;border:2px solid #111;box-shadow:0 3px 10px #0003;display:block;margin:0 auto}
.sa2-foto.chica{max-height:19vh}
.sa2-cap{font-size:.86em;margin:.25em 0 .6em;line-height:1.25}
.sa2-cap b{color:#b45309}
.sa2-etq h4{margin:0 0 .1em;font:800 1.08em var(--f-d,system-ui)}
.sa2-etq .m{font-size:.85em;color:#444;margin-bottom:.25em}
.sa2-etq table{border-collapse:collapse;width:100%;table-layout:fixed}
.sa2-etq td:first-child,.sa2-etq th:first-child{width:46%;overflow-wrap:anywhere}
.sa2-etq th{font-size:.78em;text-align:left;border-bottom:4px solid #111;padding:.1em 0}
.sa2-etq th:not(:first-child),.sa2-etq td:not(:first-child){text-align:right;padding-left:.4em;overflow-wrap:anywhere}
.sa2-etq td{border-bottom:1px solid #999;padding:.12em 0}
.sa2-etq td.s{padding-left:1em}
.sa2-etq td.mia{font-weight:800;color:#1d4ed8;background:#eff6ff}
.sa2-etq th.mia{color:#1d4ed8}
.sa2-mano{font-family:"Caveat","Comic Sans MS",cursive;font-size:1.22em;color:#1d4ed8;line-height:1.1;margin:.35em 0 .1em;transform:rotate(-.7deg)}
.sa2-mano .mini{font-size:.82em;color:#6b21a8}
.sa2-manot{font-family:"Caveat","Comic Sans MS",cursive;font-size:1.65em;color:#b91c1c;line-height:1.15;transform:rotate(-1deg);display:inline-block;margin-top:.3em}
.sa2-etq .rac{margin-top:.35em;background:#fff3c4;border-radius:6px;padding:.15em .4em;font-weight:800;text-align:center}
.sa2-comida{font:800 1.05em var(--f-d,system-ui);margin:.1em 0 .25em}
.sa2-ir{border-collapse:collapse;font-size:1.05em;width:100%}
.sa2-ir td{padding:.26em .7em;border-bottom:2px solid var(--line,#ddd)}
.sa2-ir td:last-child{font:800 1.2em var(--f-d,system-ui);text-align:right}
.sa2-paso{background:var(--card,#fff);border-radius:14px;box-shadow:var(--sombra,0 1px 4px #0002);padding:.45em .7em;margin-bottom:.45em}
.sa2-paso b.n{display:inline-grid;place-items:center;width:1.6em;height:1.6em;border-radius:50%;background:#4f46e5;color:#fff;margin-right:.35em}
.sa2-paso .f{display:block;margin:.25em 0 0 2em;padding:.2em .6em;background:#eef2ff;border-radius:10px;width:fit-content;max-width:100%}
.sa2-rt{display:grid;grid-template-columns:repeat(auto-fit,minmax(13.5em,1fr));gap:.6em;align-items:start}
.sa2-rt .scaja{background:var(--card,#fff);border-radius:14px;box-shadow:var(--sombra,0 1px 4px #0002);padding:.5em .7em}
.sa2-rt .scaja h4{margin:0 0 .25em;font:800 1.05em var(--f-d,system-ui)}
.sa2-rt .scaja p{margin:.25em 0}
.truquito{font-size:.9em;color:#6b21a8}
.sa2-mia{border-collapse:collapse;width:100%;font-size:.95em}
.sa2-mia th,.sa2-mia td{border:1.5px solid var(--line,#ccc);padding:.18em .5em;text-align:center}
.sa2-mia td:first-child,.sa2-mia th:first-child{text-align:left}
.sa2-mia thead th{background:#4f46e5;color:#fff}
.sa2-mia tr.tot td{font-weight:800;background:#fef9c3}
.sa2-mia tr.ir td{color:#555}
.sa2-mia tr.pc td{font-weight:800;background:#fde2e1;color:#b91c1c}
/* cartulina */
.sa2-cart{background:#fdf3d7;border-radius:10px;padding:.8em;box-shadow:0 6px 18px #0003;color:#222;font-family:"Caveat","Comic Sans MS",cursive;font-size:1.22em;line-height:1.15;transform:rotate(-.4deg)}
.sa2-cart h3{font-family:"Caveat",cursive;font-size:2em;text-align:center;margin:0;color:#b91c1c}
.sa2-cart .grupo{text-align:center;color:#444;margin-bottom:.4em}
.sa2-cart .zona{display:grid;grid-template-columns:1.25fr 1fr;gap:.6em}
.sa2-cart .pieza{background:#fff;border-radius:8px;padding:.4em .55em;box-shadow:0 2px 6px #0002}
.sa2-cart .pieza h5{margin:0 0 .2em;font:700 1.15em "Caveat",cursive;color:#1d4ed8}
.sa2-cart table{border-collapse:collapse;width:100%;font-size:.92em}
.sa2-cart td,.sa2-cart th{border:1.5px solid #555;padding:.05em .3em;text-align:center}
.sa2-cart td:first-child{text-align:left}
.sa2-cart tr.tot td{font-weight:700;background:#fef9c3}
.sa2-cart tr.pc td{font-weight:700;background:#fde2e1;color:#b91c1c}
.sa2-bar{display:grid;grid-template-columns:5.6em 1fr 2.8em;align-items:center;gap:.3em;margin:.15em 0}
.sa2-bar .b{height:1em;background:#eee;border:1.5px solid #555;border-radius:4px;overflow:hidden}
.sa2-bar .b i{display:block;height:100%}
.sa2-cart .terr{letter-spacing:.05em}
.sa2-cart ol{margin:.1em 0 0 1.1em;padding:0}
.sa2-cart li{margin:.1em 0}
@media (max-width:700px){.sa2-cart .zona{grid-template-columns:1fr}}
</style>`;

/* --- etiqueta real: filas = [nombre, por 100, mi ración, sangría] --- */
function etq(nombre, marca, col100, colRac, filas, racion, foto, mano){
  const tr = filas.map(f=>`<tr><td${f[3]?' class="s"':''}>${f[0]}</td><td>${f[1]}</td><td class="mia">${f[2]}</td></tr>`).join('');
  return `<div class="sa2-etq">${foto?`<img src="img/${foto}.jpg" alt="Etiqueta de ${nombre}" loading="lazy">`:''}<h4>${nombre}</h4><div class="m">${marca}</div>
  <table><tr><th>Información nutricional</th><th>${col100}</th><th class="mia">${colRac}</th></tr>${tr}</table>
  <div class="rac">Yo tomo: ${racion}</div>${mano?`<div class="sa2-mano">${mano}</div>`:''}</div>`;
}

const desayuno = `${CSS}
<div class="sa2-comida">☕ Mi desayuno: una taza de ColaCao con leche y 5 galletas</div>
<div class="sa2-etqs">
  ${etq("🍫 ColaCao Original","Idilia Foods","por 100 g","mis 14 g",
    [["Energía","377 kcal","52,8 kcal"],["Grasas","2,5 g","0,35 g"],["de las cuales saturadas","1,6 g","0,22 g",1],
     ["Azúcares","70 g","9,8 g"],["Sal","0,10 g","0,01 g"]],"2 cucharadas = 14 g","colacao",`Azúcar de 1 g: 70 : 100 = 0,7<br>Mis 14 g: 0,7 · 14 = <b>9,8 g</b><br><span class="mini">igual con las demás filas</span>`)}
  ${etq("🥛 Leche entera UHT","COVAP","por 100 ml","mis 200 ml",
    [["Energía","63 kcal","126 kcal"],["Grasas","3,6 g","7,2 g"],["de las cuales saturadas","2,4 g","4,8 g",1],
     ["Azúcares","4,6 g","9,2 g"],["Sal","0,13 g","0,26 g"],["Calcio","110 mg","220 mg"]],"1 taza = 200 ml","leche",`200 ml es el <b>doble</b> de 100 ml<br>Azúcar: 4,6 · 2 = <b>9,2 g</b><br><span class="mini">todo multiplicado por 2</span>`)}
  ${etq("🍪 Galletas María","900 g · 141 galletas","por galleta (6,4 g)","mis 5 galletas",
    [["Energía","31 kcal","155 kcal"],["Grasas","1,2 g","6 g"],["de las cuales saturadas","0,2 g","1 g",1],
     ["Azúcares","1,3 g","6,5 g"],["Sal","0,05 g","0,25 g"]],"5 galletas","galletas",`La etiqueta ya da <b>1 galleta</b><br>Azúcar: 1,3 · 5 = <b>6,5 g</b><br><span class="mini">aquí no hace falta regla de tres</span>`)}
</div>
<p style="font-size:.9em;margin-top:.4em">👉 Las galletas traen la columna <b>por galleta</b>: ahí solo hay que <b>multiplicar por 5</b>. En las otras dos hay que pasar <b>de 100 a mi ración</b>. La leche trae además <b>calcio</b>: 110 mg por 100 ml, que es el <b>14 % del VRN</b>.</p>`;

const merienda = `${CSS}
<div class="sa2-comida">🥪 Mi merienda: una torta de aceite con mantequilla y un vaso de leche</div>
<div class="sa2-etqs">
  ${etq("🥐 Torta de aceite","Inés Rosales · 180 g (6 tortas)","por 100 g","mis 30 g",
    [["Energía","511 kcal","153 kcal"],["Grasas","26 g","7,8 g"],["de las cuales saturadas","2,8 g","0,8 g",1],
     ["Azúcares","17 g","5,1 g"],["Sal","0,15 g","0,05 g"]],"1 torta = 30 g","tortas",`Azúcar de 1 g: 17 : 100 = 0,17<br>Mis 30 g: 0,17 · 30 = <b>5,1 g</b>`)}
  ${etq("🧈 Tulipán","materia grasa para untar 59 %","por 100 g","mis 10 g",
    [["Energía","530 kcal","53 kcal"],["Grasas","59 g","5,9 g"],["de las cuales saturadas","16 g","1,6 g",1],
     ["Azúcares","menos de 0,5 g","≈ 0 g"],["Sal","0,90 g","0,09 g"]],"lo que unto: 10 g","tulipan",`Saturadas de 1 g: 16 : 100 = 0,16<br>Mis 10 g: 0,16 · 10 = <b>1,6 g</b>`)}
  ${etq("🥛 Leche entera UHT","COVAP","por 100 ml","mis 200 ml",
    [["Energía","63 kcal","126 kcal"],["Grasas","3,6 g","7,2 g"],["de las cuales saturadas","2,4 g","4,8 g",1],
     ["Azúcares","4,6 g","9,2 g"],["Sal","0,13 g","0,26 g"],["Calcio","110 mg","220 mg"]],"1 vaso = 200 ml","leche",`Otra vez · 2: azúcar <b>9,2 g</b><br><span class="mini">la leche cuenta dos veces</span>`)}
</div>
<p style="font-size:.9em;margin-top:.4em">👉 La leche aparece <b>dos veces</b>, en el desayuno y en la merienda: hay que contarla las dos veces.</p>`;

/* --- los pasos del proyecto --- */
const pasosProyecto = R`${CSS}
<div class="sa2-paso"><b class="n">1</b><b>Apunto qué tomo y cuánta cantidad</b>
  <span class="f">Ejemplo: «2 cucharadas de ColaCao = <b>14 g</b>». Sin la cantidad no se puede calcular nada.</span></div>
<div class="sa2-paso"><b class="n">2</b><b>Foto de la etiqueta</b> y busco la columna de <b>100 g</b> o <b>100 ml</b>
  <span class="f">Ejemplo: el ColaCao tiene <b>70 g de azúcar por cada 100 g</b>.</span></div>
<div class="sa2-paso"><b class="n">3</b><b>Regla de tres: de 100 g a mis 14 g</b> (más ColaCao → más azúcar: <b>D</b>)
  ${cuadro("ColaCao (g)", "Azúcar (g)", ["100","70"], ["14","x"])}
  <span class="f">El azúcar de <b>1 gramo</b>: $70 : 100 = 0,7$ · y de mis 14 g: $0,7 \cdot 14 = 9,8$ g</span></div>
<div class="sa2-paso"><b class="n">4</b><b>Sumo</b> todos los productos
  <span class="f">Ejemplo (azúcares): $9,8 + 9,2 + 6,5 + 5,1 = 30,6$ g… hasta llegar a los <b>39,8 g</b> del día.</span></div>
<div class="sa2-paso"><b class="n">5</b><b>¿Qué % del día es?</b> Si 90 g de azúcar es el 100 %…
  <span class="f">$39,8 : 90 = 0,442... \to$ <b>44 %</b> del azúcar del día</span></div>
<div class="sa2-paso"><b class="n">6</b><b>Semáforo, terrones y conclusiones</b>
  <span class="f">🟢 menos del 25 % · 🟡 del 25 % al 50 % · 🔴 más del 50 % · $39,8 : 4 \approx 10$ terrones</span></div>
<div class="sa2-paso"><b class="n">7</b><b>Cartulina</b> y exposición de 2 minutos</div>`;

/* --- qué es el IR --- */
const ir = `${CSS}<table class="sa2-ir">
  <tr><td>⚡ Energía</td><td>2000 kcal</td></tr>
  <tr><td>🧈 Grasas</td><td>70 g</td></tr>
  <tr><td>🥓 de ellas, saturadas</td><td>20 g</td></tr>
  <tr><td>🍬 Azúcares</td><td>90 g</td></tr>
  <tr><td>🧂 Sal</td><td>6 g</td></tr></table>`;

const queEsIR = R`${CSS}
<div class="sa2-paso"><b>IR = Ingesta de Referencia</b>
  <span class="f">La <b>cantidad de todo el día</b> para un adulto medio de 2000 kcal: 90 g de azúcares, 70 g de grasas, 6 g de sal…</span></div>
<div class="sa2-paso"><b>El «%IR» de la etiqueta</b> dice qué parte del día entero te comes con <b>una ración</b></div>
<div class="sa2-paso"><b>Lo compruebo</b>: la etiqueta del ColaCao dice que una taza tiene 19 g de azúcares y es el <b>21 %</b>
  <span class="f">$19 : 90 = 0,211... \to 21\,\%$ → ¡me sale lo mismo! ✔</span></div>
<div class="sa2-paso"><b>Ojo</b>
  <span class="f">Es una <b>referencia para comparar</b>, no una norma: cada persona necesita una cantidad distinta.</span>
  <span class="f">En vitaminas y minerales la etiqueta pone <b>VRN</b> (la leche: 110 mg de calcio = 14 %). El VRN funciona igual, pero con vitaminas y minerales.</span></div>`;


/* --- dónde está el IR en la etiqueta --- */
const dondeIR = `${CSS}
<div class="sa2-etqs" style="grid-template-columns:1.15fr 1fr">
  <div>
    <img class="sa2-foto" src="img/colacao_tabla.jpg" alt="Tabla nutricional del ColaCao" loading="lazy">
    <p class="sa2-cap"><b>① La columna «%IR por taza».</b> Qué parte del día entero te comes con <b>una taza</b>: azúcares <b>21 %</b>, saturadas 12 %, sal 4 %…</p>
  </div>
  <div>
    <img class="sa2-foto chica" src="img/colacao_ir.jpg" alt="Nota de la etiqueta: IR, ingesta de referencia" loading="lazy">
    <p class="sa2-cap"><b>② La nota de abajo.</b> Dice qué es: <b>IR = Ingesta de Referencia de un adulto medio (8400 kJ / 2000 kcal)</b>. Todas las etiquetas la llevan.</p>
    <img class="sa2-foto chica" src="img/galletas_ir.jpg" alt="Nota del paquete de galletas" loading="lazy">
    <p class="sa2-cap"><b>③ En las galletas</b> está la nota… pero <b>no hay columna de %IR</b>. Entonces lo calculo yo.</p>
  </div>
</div>`;

const comoIR = R`${CSS}
<div class="sa2-paso"><b>⚠️ La etiqueta NO dice los gramos del día</b>
  <span class="f">Solo pone las 2000 kcal de energía. Los gramos de azúcar, grasa y sal de todo el día están en la <b>norma europea</b>, y son estos 👉</span></div>
<div class="sa2-paso"><b>La cuenta</b> es siempre la misma
  <span class="f">$\% = \dfrac{\text{gramos que tomo}}{\text{gramos de todo el día}} \cdot 100$</span></div>
<div class="sa2-paso"><b>Lo compruebo con la etiqueta</b>: una taza tiene 19 g de azúcares
  <span class="f">$19 : 90 = 0,211... \to 21\,\%$ → ¡es justo lo que pone el bote! ✔</span></div>
<div class="sa2-paso"><b>Y donde no viene</b> (5 galletas, 6,5 g de azúcares)
  <span class="f">$6,5 : 90 = 0,072... \to 7\,\%$ del azúcar del día</span></div>
<div class="sa2-paso"><b>Ojo</b>
  <span class="f">Es una <b>referencia para comparar</b>, no una norma: cada persona necesita una cantidad distinta.</span>
  <span class="f">En vitaminas y minerales la etiqueta pone <b>VRN</b> (la leche: 110 mg de calcio = 14 %). El VRN funciona igual, pero con vitaminas y minerales.</span></div>`;

/* --- mis tablas --- */
function tabla(tit, filas, totales){
  const tr = filas.map(f=>`<tr><td>${f[0]}</td><td>${f[1]}</td><td>${f[2]}</td><td>${f[3]}</td><td>${f[4]}</td><td>${f[5]}</td></tr>`).join('');
  return `<table class="sa2-mia"><thead><tr><th>${tit}</th><th>Energía</th><th>Grasas</th><th>Saturadas</th><th>Azúcares</th><th>Sal</th></tr></thead>
  <tbody>${tr}<tr class="tot"><td>TOTAL</td><td>${totales[0]}</td><td>${totales[1]}</td><td>${totales[2]}</td><td>${totales[3]}</td><td>${totales[4]}</td></tr></tbody></table>`;
}
const tablas = `${CSS}
${tabla("☕ Desayuno",[["🍫 ColaCao 14 g","52,8","0,35","0,22","9,8","0,01"],
  ["🥛 Leche 200 ml","126","7,2","4,8","9,2","0,26"],
  ["🍪 5 galletas","155","6","1","6,5","0,25"]],["334 kcal","13,6 g","6 g","25,5 g","0,52 g"])}
<div style="height:.5em"></div>
${tabla("🥪 Merienda",[["🥐 Torta 30 g","153","7,8","0,8","5,1","0,05"],
  ["🧈 Tulipán 10 g","53","5,9","1,6","≈ 0","0,09"],
  ["🥛 Leche 200 ml","126","7,2","4,8","9,2","0,26"]],["332 kcal","20,9 g","7,2 g","14,3 g","0,40 g"])}`;

const totalDia = R`${CSS}<table class="sa2-mia">
  <thead><tr><th>Desayuno + merienda</th><th>Energía</th><th>Grasas</th><th>Saturadas</th><th>Azúcares</th><th>Sal</th></tr></thead>
  <tbody>
  <tr><td>☕ Desayuno</td><td>334</td><td>13,6</td><td>6</td><td>25,5</td><td>0,52</td></tr>
  <tr><td>🥪 Merienda</td><td>332</td><td>20,9</td><td>7,2</td><td>14,3</td><td>0,40</td></tr>
  <tr class="tot"><td>TOTAL</td><td>666 kcal</td><td>34,5 g</td><td>13,2 g</td><td>39,8 g</td><td>0,92 g</td></tr>
  <tr class="ir"><td>Cantidad del día (IR)</td><td>2000</td><td>70</td><td>20</td><td>90</td><td>6</td></tr>
  <tr class="pc"><td>% del día</td><td>33 %</td><td>49 %</td><td>66 %</td><td>44 %</td><td>15 %</td></tr>
  </tbody></table>
  <p class="sa2-manot">↑ ¿De dónde sale el 44 %?<br>
  Azúcares: 39,8 : 90 = 0,4422…<br>
  Redondeo: 0,4422… ≈ 0,44 → <b>44 %</b><br>
  Saturadas: 13,2 : 20 = 0,66 → <b>66 %</b></p>`;

/* --- la cartulina --- */
function barra(nombre, pc, color){
  return `<div class="sa2-bar"><span>${nombre}</span><span class="b"><i style="width:${pc}%;background:${color}"></i></span><b>${pc} %</b></div>`;
}
const cartulina = R`${CSS}<div class="sa2-cart">
  <h3>¿Qué desayuna y merienda la profe? ☕🥪</h3>
  <div class="grupo">Grupo de la profe · 3.º ESO</div>
  <div class="zona">
    <div class="pieza"><h5>📋 Nuestra tabla (mis cantidades)</h5>
      <table>
        <tr><th>Comida</th><th>Energía</th><th>Grasas</th><th>Saturadas</th><th>Azúcares</th><th>Sal</th></tr>
        <tr><td>☕ Desayuno</td><td>334</td><td>13,6</td><td>6</td><td>25,5</td><td>0,52</td></tr>
        <tr><td>🥪 Merienda</td><td>332</td><td>20,9</td><td>7,2</td><td>14,3</td><td>0,40</td></tr>
        <tr class="tot"><td>TOTAL</td><td>666</td><td>34,5</td><td>13,2</td><td>39,8</td><td>0,92</td></tr>
        <tr><td>Cantidad del día (IR)</td><td>2000</td><td>70</td><td>20</td><td>90</td><td>6</td></tr>
        <tr class="pc"><td>% del día</td><td>33 %</td><td>49 %</td><td>66 %</td><td>44 %</td><td>15 %</td></tr>
      </table>
      <div style="margin-top:.3em">Ejemplo: saturadas $13,2 : 20 = 0,66 \to 66\,\%$</div>
    </div>
    <div class="pieza"><h5>📊 ¿Qué parte del día me como?</h5>
      ${barra("Energía",33,"#f59e0b")}
      ${barra("Grasas",49,"#f59e0b")}
      ${barra("Saturadas",66,"#dc2626")}
      ${barra("Azúcares",44,"#f59e0b")}
      ${barra("Sal",15,"#16a34a")}
      <div style="font-size:.85em">🟢 menos del 25 % · 🟡 del 25 % al 50 % · 🔴 más del 50 %</div>
      <h5 style="margin-top:.4em">🍬 Mis terrones de azúcar</h5>
      <div class="terr">🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊 = 10 terrones</div>
    </div>
    <div class="pieza"><h5>💬 Conclusiones</h5><ol>
      <li>Con dos comidas tomo el <b>66 %</b> de las grasas saturadas del día: ¡dos tercios!</li>
      <li>Tomo <b>39,8 g de azúcar</b>, 10 terrones: el <b>44 %</b> del día.</li>
      <li>La sal está bien: solo el <b>15 %</b>. Y me llevo <b>440 mg de calcio</b> con los dos vasos de leche.</li></ol></div>
    <div class="pieza"><h5>🔄 Nuestro cambio saludable</h5>
      Cambio la leche <b>entera</b> por <b>semidesnatada</b>.<br>
      La etiqueta del ColaCao da la taza con semi: $2,4$ g de saturadas en vez de $5,0$.<br>
      Saturadas: $13,2 - 5,2 = 8$ g → $8 : 20 = 0,4 \to$ <b>40 %</b> 👍</div>
  </div>
</div>`;

TEMA.registrar({
  num: "SA", pref: "SA", seccion: "Situación de aprendizaje",
  titulo: "¿Es saludable nuestro desayuno?",
  videos: [ {t:"Claves para leer las etiquetas nutricionales", url:"https://www.educaciontrespuntocero.com/familias/leer-etiquetas-nutricionales/"} ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">🕵️ ¿Cuánto azúcar, grasa y sal hay en el desayuno y la merienda de la profe?</p>`}
    ]},

    { titulo:"🎯 La misión", cuerpo:[
      {prop:["En <b>grupos de 4</b>, traed las <b>etiquetas</b> de vuestro desayuno y vuestra merienda. Calculad qué <b>% del día</b> os coméis y contadlo en una <b>cartulina</b>."], etq:"La misión"},
      {cols:[
        [{nota:["Os enseño un ejemplo hecho: <b>mi desayuno y mi merienda</b>, con etiquetas de verdad."], etq:"👀 Primero, mirad el mío"}],
        [{nota:["Presentáis la cartulina en <b>2 minutos</b>. ¡Habla todo el grupo!"], etq:"🎤 Al final"}]
      ]}
    ]},

    { titulo:"🧭 Los pasos del proyecto", cuerpo:[
      {html:pasosProyecto}
    ]},

    { titulo:"🏷 Las etiquetas de mi desayuno", cuerpo:[
      {html:desayuno}
    ]},

    { titulo:"🏷 Las etiquetas de mi merienda", cuerpo:[
      {html:merienda}
    ]},

    { titulo:"🔍 ¿Dónde está el IR en la etiqueta?", cuerpo:[
      {html:dondeIR}
    ]},

    { titulo:"🧮 ¿Y cómo se calcula el %IR?", cuerpo:[
      {cols:[ [{html:comoIR}], [{html:`${ir}<p style="font-size:.85em;margin-top:.4em">Cantidades de <b>todo el día</b> para un adulto medio de 2000 kcal. Vienen en el <b>Reglamento europeo de etiquetado</b> y son las cantidades con las que comparamos siempre.</p>`}] ]}
    ]},

    { titulo:"➕ Paso 4: mis tablas", cuerpo:[
      {html:tablas}
    ]},

    { titulo:"📊 El total y el % del día", cuerpo:[
      {html:totalDia}
    ]},

    { titulo:"🖼 Nuestra cartulina", cuerpo:[
      {html:cartulina}
    ]},

    { titulo:"🚀 ¡Ahora vosotros!", cuerpo:[
      {html:`<div class="sa-fases">
        <div class="casa"><b>🏠 Antes</b><span>Cada uno trae la <b>foto de la etiqueta</b> de lo que desayuna y merienda, y apunta <b>cuánto toma</b>.</span></div>
        <div><b>Sesión 1</b><span>Pasos 3, 4 y 5: <b>de 100 g a vuestra ración</b>, las dos tablas y el % del día.</span></div>
        <div><b>Sesión 2</b><span>Pasos 6 y 7: semáforo, terrones y la <b>cartulina</b> del grupo.</span></div>
        <div><b>Sesión 3</b><span><b>Exposiciones</b> de 2 minutos.</span></div></div>`},
      {html:`<table class="t"><tr><th>Se evalúa</th><th>Cuenta</th></tr>
        <tr><td>Etiquetas bien copiadas, con la ración</td><td>20 %</td></tr>
        <tr><td>Cálculos con la operación escrita</td><td>40 %</td></tr>
        <tr><td>Tabla, gráfico y conclusiones con números</td><td>30 %</td></tr>
        <tr><td>Exposición: habla todo el grupo</td><td>10 %</td></tr></table>`},
      {proy:[{html:`<p><a class="sa-btn" href="situacion.html" target="_blank" rel="noopener" style="background:#15803d">🧮 Calculadora de etiquetas</a></p>`}]},
      {estudio:[
        {nota:["<b>Saberes:</b> proporcionalidad directa (de 100 g a la ración), porcentajes (qué % representa una parte y el % como decimal) y lectura e interpretación de tablas.",
               "<b>Idea:</b> el ejemplo está resuelto entero, con las etiquetas reales y los siete pasos numerados, para que cada grupo repita lo mismo con lo suyo. La leche aparece en las dos comidas a propósito, para que vean que hay que contarla dos veces.",
               "<b>Fuentes:</b> fotos reales de ColaCao Original (Idilia Foods), leche entera UHT COVAP, galletas María (envase de 900 g, 141 galletas, columna «por galleta» de 6,4 g), tortas de aceite Inés Rosales (180 g, 6 tortas de 30 g) y Tulipán (materia grasa para untar 59 %). IR de un adulto medio (8400 kJ / 2000 kcal): Reglamento (UE) 1169/2011, anexo XIII. Sirven para comparar, no son una dieta."], etq:"👩‍🏫 Para el profesor"}
      ]}
    ]}
  ]
});
})();

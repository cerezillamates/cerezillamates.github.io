/* 2.º ESO · Tema 3 · SITUACIÓN DE APRENDIZAJE «¿Qué desayunamos?»
   19-nov-2026 (decisión de la profesora): sustituye a «Organizamos un viaje».
   Versión sencilla de la SA de 3.º ESO: solo el DESAYUNO, tres productos y
   TODO con reglas de tres (también el porcentaje), que es el método de 2.º ESO.
   Etiquetas reales (fotos de la profesora): ColaCao Original (Idilia Foods),
   leche entera UHT COVAP y galletas María (900 g, 141 galletas, columna «por galleta» de 6,4 g).
   IR (ingesta de referencia de un adulto medio, 8400 kJ / 2000 kcal): Reglamento (UE) 1169/2011, anexo XIII. */
(function(){
const R = String.raw;
const td = v => v === "x" ? `<td class="x">x</td>` : `<td>${v}</td>`;
const cuadro = (m1, m2, a, b) => `<table class="t cuadro"><tr><th>${m1}</th><th class="fl">(D) ⟶</th><th>${m2}</th></tr><tr>${td(a[0])}<td></td>${td(a[1])}</tr><tr>${td(b[0])}<td></td>${td(b[1])}</tr></table>`;

/* --- estilos propios de esta SA --- */
const CSS = `<style>
.sa2-etqs{display:grid;grid-template-columns:repeat(auto-fit,minmax(17em,1fr));gap:.6em}
.sa2-etq{background:#fff;color:#111;border:3px solid #111;border-radius:6px;padding:.35em .55em;font-size:.88em;line-height:1.25}
.sa2-etq img{width:100%;max-height:112px;object-fit:contain;object-position:top;border-radius:4px;margin-bottom:.25em;display:block;background:#f4f4f4}
.sa2-foto{max-width:100%;max-height:52vh;width:auto;border-radius:8px;border:2px solid #111;box-shadow:0 3px 10px #0003;display:block;margin:0 auto}
.sa2-foto.chica{max-height:19vh}
.sa2-cap{font-size:.88em;margin:.25em 0 .6em;line-height:1.25}
.sa2-cap b{color:#b45309}
.sa2-etq h4{margin:0 0 .1em;font:800 1.08em var(--f-d,system-ui)}
.sa2-etq .m{font-size:.85em;color:#444;margin-bottom:.25em}
.sa2-etq table{border-collapse:collapse;width:100%;table-layout:fixed}
.sa2-etq td:first-child,.sa2-etq th:first-child{width:50%;overflow-wrap:anywhere}
.sa2-etq th{font-size:.8em;text-align:left;border-bottom:4px solid #111;padding:.1em 0}
.sa2-etq th:not(:first-child),.sa2-etq td:not(:first-child){text-align:right;padding-left:.4em;overflow-wrap:anywhere}
.sa2-etq td{border-bottom:1px solid #999;padding:.12em 0}
.sa2-mano{font-family:"Caveat","Comic Sans MS",cursive;font-size:1.22em;color:#1d4ed8;line-height:1.1;margin:.35em 0 .1em;transform:rotate(-.7deg)}
.sa2-mano .mini{font-size:.82em;color:#6b21a8}
.sa2-manot{font-family:"Caveat","Comic Sans MS",cursive;font-size:1.7em;color:#b91c1c;line-height:1.15;transform:rotate(-1deg);display:inline-block;margin-top:.3em}
.sa2-etq .rac{margin-top:.35em;background:#fff3c4;border-radius:6px;padding:.15em .4em;font-weight:800;text-align:center}
.sa2-comida{font:800 1.05em var(--f-d,system-ui);margin:.1em 0 .25em}
.sa2-ir{border-collapse:collapse;font-size:1.05em;width:100%}
.sa2-ir td{padding:.26em .7em;border-bottom:2px solid var(--line,#ddd)}
.sa2-ir td:last-child{font:800 1.2em var(--f-d,system-ui);text-align:right}
.sa2-paso{background:var(--card,#fff);border-radius:14px;box-shadow:var(--sombra,0 1px 4px #0002);padding:.45em .7em;margin-bottom:.45em}
.sa2-paso b.n{display:inline-grid;place-items:center;width:1.6em;height:1.6em;border-radius:50%;background:#4f46e5;color:#fff;margin-right:.35em}
.sa2-paso .f{display:block;margin:.25em 0 0 2em;padding:.2em .6em;background:#eef2ff;border-radius:10px;width:fit-content;max-width:100%}
.sa2-rt{display:grid;grid-template-columns:repeat(auto-fit,minmax(15em,1fr));gap:.6em;align-items:start}
.sa2-rt .scaja{background:var(--card,#fff);border-radius:14px;box-shadow:var(--sombra,0 1px 4px #0002);padding:.5em .7em}
.sa2-rt .scaja h4{margin:0 0 .25em;font:800 1.05em var(--f-d,system-ui)}
.sa2-mia{border-collapse:collapse;width:100%;font-size:1em}
.sa2-mia th,.sa2-mia td{border:1.5px solid var(--line,#ccc);padding:.2em .5em;text-align:center}
.sa2-mia td:first-child,.sa2-mia th:first-child{text-align:left}
.sa2-mia thead th{background:#4f46e5;color:#fff}
.sa2-mia tr.tot td{font-weight:800;background:#fef9c3}
.sa2-mia tr.pc td{font-weight:800;background:#fde2e1;color:#b91c1c}
/* cartulina */
.sa2-cart{background:#fdf3d7;border-radius:10px;padding:.8em;box-shadow:0 6px 18px #0003;color:#222;font-family:"Caveat","Comic Sans MS",cursive;font-size:1.25em;line-height:1.15;transform:rotate(-.4deg)}
.sa2-cart h3{font-family:"Caveat",cursive;font-size:2em;text-align:center;margin:0;color:#b91c1c}
.sa2-cart .grupo{text-align:center;color:#444;margin-bottom:.4em}
.sa2-cart .zona{display:grid;grid-template-columns:1.2fr 1fr;gap:.6em}
.sa2-cart .pieza{background:#fff;border-radius:8px;padding:.4em .55em;box-shadow:0 2px 6px #0002}
.sa2-cart .pieza h5{margin:0 0 .2em;font:700 1.15em "Caveat",cursive;color:#1d4ed8}
.sa2-cart table{border-collapse:collapse;width:100%;font-size:.92em}
.sa2-cart td,.sa2-cart th{border:1.5px solid #555;padding:.05em .3em;text-align:center}
.sa2-cart td:first-child{text-align:left}
.sa2-cart tr.tot td{font-weight:700;background:#fef9c3}
.sa2-cart tr.pc td{font-weight:700;background:#fde2e1;color:#b91c1c}
.sa2-bar{display:grid;grid-template-columns:5.2em 1fr 2.8em;align-items:center;gap:.3em;margin:.15em 0}
.sa2-bar .b{height:1em;background:#eee;border:1.5px solid #555;border-radius:4px;overflow:hidden}
.sa2-bar .b i{display:block;height:100%}
.sa2-cart .terr{letter-spacing:.05em}
.sa2-cart ol{margin:.1em 0 0 1.1em;padding:0}
@media (max-width:700px){.sa2-cart .zona{grid-template-columns:1fr}}
</style>`;

/* --- etiqueta real --- */
function etq(nombre, marca, col, filas, racion, foto, mano){
  const tr = filas.map(f=>`<tr><td${f[2]?' class="s"':''}>${f[0]}</td><td>${f[1]}</td></tr>`).join('');
  return `<div class="sa2-etq"><img src="img/${foto}.jpg" alt="Etiqueta de ${nombre}" loading="lazy"><h4>${nombre}</h4><div class="m">${marca}</div>
  <table><tr><th>Información nutricional</th><th>${col}</th></tr>${tr}</table>
  <div class="rac">Yo tomo: ${racion}</div>${mano?`<div class="sa2-mano">${mano}</div>`:''}</div>`;
}
const etiquetas = `${CSS}
<div class="sa2-comida">☕ Mi desayuno: una taza de ColaCao con leche y 5 galletas</div>
<div class="sa2-etqs">
  ${etq("🍫 ColaCao Original","Idilia Foods","por 100 g",
    [["Energía","377 kcal"],["Grasas","2,5 g"],["Azúcares","70 g"],["Sal","0,10 g"]],"2 cucharadas = 14 g","colacao",`100 g → 70 g de azúcar<br>14 g → x<br>x = 70 : 100 · 14 = <b>9,8 g</b>`)}
  ${etq("🥛 Leche entera UHT","COVAP","por 100 ml",
    [["Energía","63 kcal"],["Grasas","3,6 g"],["Azúcares","4,6 g"],["Sal","0,13 g"]],"1 taza = 200 ml","leche",`100 ml → 4,6 g de azúcar<br>200 ml → x<br>x = 4,6 · 2 = <b>9,2 g</b><br><span class="mini">200 es el doble de 100</span>`)}
  ${etq("🍪 Galletas María","900 g · 141 galletas","por galleta (6,4 g)",
    [["Energía","31 kcal"],["Grasas","1,2 g"],["Azúcares","1,3 g"],["Sal","0,05 g"]],"5 galletas","galletas",`La etiqueta ya da <b>1 galleta</b><br>Azúcar: 1,3 · 5 = <b>6,5 g</b><br><span class="mini">aquí no hace falta regla de tres</span>`)}
</div>
<p style="font-size:.92em;margin-top:.4em">👉 Las galletas dan el valor <b>de una galleta</b>: ahí solo hay que <b>multiplicar por 5</b>. En las otras dos hay que pasar <b>de 100 a lo que yo tomo</b>.</p>`;

/* --- dónde está el IR --- */
const dondeIR = `${CSS}
<div class="sa2-etqs" style="grid-template-columns:1.15fr 1fr">
  <div>
    <img class="sa2-foto" src="img/colacao_tabla.jpg" alt="Tabla nutricional del ColaCao" loading="lazy">
    <p class="sa2-cap"><b>① La columna «%IR por taza».</b> Qué parte de <b>todo el día</b> te comes con una taza: azúcares <b>21 %</b>, sal 4 %…</p>
  </div>
  <div>
    <img class="sa2-foto chica" src="img/colacao_ir.jpg" alt="Nota de la etiqueta sobre el IR" loading="lazy">
    <p class="sa2-cap"><b>② La nota de abajo.</b> Dice qué significa: <b>IR = Ingesta de Referencia de un adulto medio (2000 kcal al día)</b>. Todas las etiquetas llevan esta nota.</p>
    <p class="sa2-cap">⚠️ La etiqueta <b>no</b> dice los <b>gramos</b> de todo el día. Esos gramos están en la <b>norma europea</b> 👉 en la lámina siguiente.</p>
  </div>
</div>`;

/* --- la tabla del día --- */
const ir = `${CSS}<table class="sa2-ir">
  <tr><td>⚡ Energía</td><td>2000 kcal</td></tr>
  <tr><td>🧈 Grasas</td><td>70 g</td></tr>
  <tr><td>🍬 Azúcares</td><td>90 g</td></tr>
  <tr><td>🧂 Sal</td><td>6 g</td></tr></table>`;

const comoIR = R`${CSS}
<div class="sa2-paso"><b>La pregunta es siempre la misma</b>
  <span class="f">Si <b>90 g</b> de azúcar es la cantidad de <b>todo el día (el 100 %)</b>, mis gramos ¿qué % son?</span></div>
<div class="sa2-paso"><b>Y se resuelve con una regla de tres</b> (más azúcar → más %: <b>D</b>)
  ${cuadro("Azúcar (g)", "Porcentaje", ["90","100"], ["19","x"])}
  <span class="f">$\dfrac{90}{19} = \dfrac{100}{x} \;\Rightarrow\; x = \dfrac{19 \cdot 100}{90} = 21,1... \approx 21\,\%$</span></div>
<div class="sa2-paso"><b>¡Es lo que pone el bote!</b> ✔
  <span class="f">La etiqueta dice que la taza tiene 19 g de azúcares y es el <b>21 % del IR</b>. Nos ha salido lo mismo.</span></div>`;

/* --- los pasos del proyecto --- */
const pasosProyecto = R`${CSS}
<div class="sa2-paso"><b class="n">1</b><b>Apunto qué desayuno y cuánto</b>
  <span class="f">«2 cucharadas de ColaCao (14 g), 200 ml de leche, 5 galletas». Sin la cantidad no se puede calcular nada.</span></div>
<div class="sa2-paso"><b class="n">2</b><b>Guardo la etiqueta</b> (o le hago una foto)
  <span class="f">Me fijo en la columna de <b>100 g</b> o <b>100 ml</b>.</span></div>
<div class="sa2-paso"><b class="n">3</b><b>Regla de tres</b>: de 100 g a lo que yo tomo</div>
<div class="sa2-paso"><b class="n">4</b><b>Sumo</b> los tres productos</div>
<div class="sa2-paso"><b class="n">5</b><b>Otra regla de tres</b>: ¿qué % del día son esos gramos?
  <span class="f">Y los <b>terrones</b> de azúcar: 1 terrón = 4 g</span></div>
<div class="sa2-paso"><b class="n">6</b><b>Cartulina</b> y exposición de 2 minutos</div>`;

/* --- mis cuentas --- */
const cuentas2 = R`${CSS}
<div class="sa2-paso"><b class="n">4</b><b>Sumo el azúcar del desayuno</b>
  <span class="f">$9,8 + 9,2 + 6,5 = 25,5$ g de azúcar</span></div>
<div class="sa2-paso"><b class="n">5</b><b>¿Qué % del día es?</b> Si 90 g de azúcar es el 100 %…
  ${cuadro("Azúcar (g)", "Porcentaje", ["90","100"], ["25,5","x"])}
  <span class="f">$x = \dfrac{25,5 \cdot 100}{90} = 28,3... \approx 28\,\%$</span></div>
<div class="sa2-paso"><b class="n">6</b><b>Los terrones</b> (1 terrón = 4 g)
  <span class="f">$25,5 : 4 = 6,3... \approx 6$ terrones</span></div>`;

/* --- mi tabla --- */
const tabla = R`${CSS}<table class="sa2-mia">
  <thead><tr><th>☕ Mi desayuno</th><th>Energía</th><th>Grasas</th><th>Azúcares</th><th>Sal</th></tr></thead>
  <tbody>
  <tr><td>🍫 ColaCao 14 g</td><td>52,8</td><td>0,35</td><td>9,8</td><td>0,01</td></tr>
  <tr><td>🥛 Leche 200 ml</td><td>126</td><td>7,2</td><td>9,2</td><td>0,26</td></tr>
  <tr><td>🍪 5 galletas</td><td>155</td><td>6</td><td>6,5</td><td>0,25</td></tr>
  <tr class="tot"><td>TOTAL</td><td>334 kcal</td><td>13,6 g</td><td>25,5 g</td><td>0,52 g</td></tr>
  <tr><td>Cantidad del día (IR)</td><td>2000</td><td>70</td><td>90</td><td>6</td></tr>
  <tr class="pc"><td>% del día</td><td>17 %</td><td>19 %</td><td>28 %</td><td>9 %</td></tr>
  </tbody></table>
  <p class="sa2-manot">↑ ¿De dónde sale el 28 %?<br>
  90 g → 100 % · 25,5 g → x<br>
  x = 25,5 · 100 : 90 = 28,33…<br>
  Redondeo: 28,33… ≈ <b>28 %</b></p>`;

/* --- la cartulina --- */
function barra(nombre, pc, color){
  return `<div class="sa2-bar"><span>${nombre}</span><span class="b"><i style="width:${pc}%;background:${color}"></i></span><b>${pc} %</b></div>`;
}
const cartulina = R`${CSS}<div class="sa2-cart">
  <h3>¿Qué desayuna la profe? ☕</h3>
  <div class="grupo">Grupo de la profe · 2.º ESO</div>
  <div class="zona">
    <div class="pieza"><h5>📋 Nuestra tabla</h5>
      <table>
        <tr><th>Producto</th><th>Energía</th><th>Grasas</th><th>Azúcares</th><th>Sal</th></tr>
        <tr><td>🍫 ColaCao 14 g</td><td>52,8</td><td>0,35</td><td>9,8</td><td>0,01</td></tr>
        <tr><td>🥛 Leche 200 ml</td><td>126</td><td>7,2</td><td>9,2</td><td>0,26</td></tr>
        <tr><td>🍪 5 galletas</td><td>155</td><td>6</td><td>6,5</td><td>0,25</td></tr>
        <tr class="tot"><td>TOTAL</td><td>334</td><td>13,6</td><td>25,5</td><td>0,52</td></tr>
        <tr><td>Cantidad del día</td><td>2000</td><td>70</td><td>90</td><td>6</td></tr>
        <tr class="pc"><td>% del día</td><td>17 %</td><td>19 %</td><td>28 %</td><td>9 %</td></tr>
      </table>
      <div style="margin-top:.3em">Ejemplo: azúcar $x = \dfrac{25,5 \cdot 100}{90} \approx 28\,\%$</div>
    </div>
    <div class="pieza"><h5>📊 ¿Qué parte del día desayuno?</h5>
      ${barra("Energía",17,"#16a34a")}
      ${barra("Grasas",19,"#16a34a")}
      ${barra("Azúcares",28,"#f59e0b")}
      ${barra("Sal",9,"#16a34a")}
      <div style="font-size:.85em">🟢 menos del 25 % · 🟡 del 25 % al 50 % · 🔴 más del 50 %</div>
      <h5 style="margin-top:.4em">🍬 Mis terrones de azúcar</h5>
      <div class="terr">🧊🧊🧊🧊🧊🧊 = 6 terrones</div>
    </div>
    <div class="pieza"><h5>💬 Conclusiones</h5><ol>
      <li>Solo desayunando tomo el <b>28 %</b> del azúcar del día: 6 terrones.</li>
      <li>Lo demás está bien: energía 17 %, grasas 19 % y sal 9 %.</li>
      <li>El azúcar viene casi todo del <b>ColaCao y la leche</b> (9,8 + 9,2 de los 25,5).</li></ol></div>
    <div class="pieza"><h5>🔄 Nuestro cambio saludable</h5>
      Pongo <b>la mitad de ColaCao</b>: 7 g en vez de 14 g.<br>
      $x = \dfrac{7 \cdot 70}{100} = 4,9$ g de azúcar (antes 9,8)<br>
      Azúcar: $25,5 - 4,9 = 20,6$ g → <b>23 %</b> y 5 terrones 👍</div>
  </div>
</div>`;

TEMA.registrar({
  num: "SA", pref: "SA", seccion: "Situación de aprendizaje",
  titulo: "¿Qué desayunamos?",
  videos: [ {t:"Claves para leer las etiquetas nutricionales", url:"https://www.educaciontrespuntocero.com/familias/leer-etiquetas-nutricionales/"} ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">🕵️ ¿Cuánto azúcar hay en el desayuno de la profe?</p>`}
    ]},

    { titulo:"🎯 La misión", cuerpo:[
      {prop:["En <b>grupos de 4</b>, traed las <b>etiquetas</b> de lo que desayunáis. Calculad qué <b>% del día</b> os coméis y contadlo en una <b>cartulina</b>."], etq:"La misión"},
      {cols:[
        [{nota:["Os enseño un ejemplo hecho: <b>mi desayuno</b>, con etiquetas de verdad."], etq:"👀 Primero, mirad el mío"}],
        [{nota:["Presentáis la cartulina en <b>2 minutos</b>. ¡Habla todo el grupo!"], etq:"🎤 Al final"}]
      ]}
    ]},

    { titulo:"🧭 Los pasos del proyecto", cuerpo:[
      {html:pasosProyecto}
    ]},

    { titulo:"🏷 Mis tres etiquetas", cuerpo:[
      {html:etiquetas}
    ]},

    { titulo:"🔍 ¿Dónde está el IR en la etiqueta?", cuerpo:[
      {html:dondeIR}
    ]},

    { titulo:"🧮 ¿Y cómo se calcula el %IR?", cuerpo:[
      {cols:[ [{html:comoIR}], [{html:`${ir}<p style="font-size:.88em;margin-top:.4em">Cantidades de <b>todo el día</b> para un adulto medio de 2000 kcal. Son las cantidades con las que comparamos siempre.</p>`}] ]}
    ]},

    { titulo:"✍️ Sumar y sacar el % del día", cuerpo:[
      {html:cuentas2}
    ]},

    { titulo:"📊 Mi tabla del desayuno", cuerpo:[
      {html:tabla}
    ]},

    { titulo:"🖼 Nuestra cartulina", cuerpo:[
      {html:cartulina}
    ]},

    { titulo:"🚀 ¡Ahora vosotros!", cuerpo:[
      {html:`<div class="sa-fases">
        <div class="casa"><b>🏠 Antes</b><span>Cada uno <b>guarda la etiqueta</b> (o le hace una foto) de lo que desayuna y apunta <b>cuánto toma</b>.</span></div>
        <div><b>Sesión 1</b><span>Pasos 3 y 4: las <b>reglas de tres</b> de cada producto y la suma.</span></div>
        <div><b>Sesión 2</b><span>Pasos 5 y 6: el <b>% del día</b>, los terrones y la <b>cartulina</b>.</span></div>
        <div><b>Sesión 3</b><span><b>Exposiciones</b> de 2 minutos.</span></div></div>`},
      {html:`<table class="t"><tr><th>Se evalúa</th><th>Cuenta</th></tr>
        <tr><td>Etiquetas bien copiadas, con la cantidad que tomáis</td><td>20 %</td></tr>
        <tr><td>Reglas de tres con el cuadro y la operación escrita</td><td>40 %</td></tr>
        <tr><td>Tabla, semáforo y conclusiones con números</td><td>30 %</td></tr>
        <tr><td>Exposición: habla todo el grupo</td><td>10 %</td></tr></table>`},
      {estudio:[
        {nota:["<b>Saberes:</b> proporcionalidad directa y regla de tres (de 100 g a la ración), el porcentaje como regla de tres (tipo 3: qué % representa una parte) y lectura de tablas.",
               "<b>Idea:</b> es la misma situación que en 3.º ESO pero más sencilla: solo el desayuno, tres productos, sin grasas saturadas y <b>todo con reglas de tres</b>, sin fórmulas de porcentaje.",
               "<b>Fuentes:</b> fotos reales de ColaCao Original (Idilia Foods), leche entera UHT COVAP y galletas María (envase de 900 g, 141 galletas, columna «por galleta» de 6,4 g). IR de un adulto medio (8400 kJ / 2000 kcal): Reglamento (UE) 1169/2011, anexo XIII. Sirven para comparar, no son una dieta."], etq:"👩‍🏫 Para el profesor"}
      ]}
    ]}
  ]
});
})();

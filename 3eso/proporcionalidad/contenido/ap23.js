/* 3.º ESO · Tema 3 · SITUACIÓN DE APRENDIZAJE «¿Es saludable nuestra cesta de la compra?»
   19-nov-2026 (versión corta, decisión de la profesora): sin ejercicios de explicación.
   Solo un ejemplo concreto: el desayuno y la merienda de la profe con etiquetas reales,
   las ingestas de referencia del día con los cálculos, y la cartulina terminada
   presentada como si fuera el trabajo de un grupo.
   Etiquetas (valores por 100 g / 100 ml):
     Leche semidesnatada COVAP · Cola Cao Original · Galletas María Fontaneda · Donuts Glacé
   Ingestas de referencia: Reglamento (UE) 1169/2011, anexo XIII (adulto medio, 2000 kcal). */
(function(){
const R = String.raw;

/* --- estilos propios de esta SA --- */
const CSS = `<style>
.sa2-etqs{display:grid;grid-template-columns:repeat(auto-fit,minmax(13.5em,1fr));gap:.6em}
.sa2-etq{background:#fff;color:#111;border:3px solid #111;border-radius:6px;padding:.35em .55em;font-size:.86em;line-height:1.25}
.sa2-etq h4{margin:0 0 .1em;font:800 1.08em var(--f-d,system-ui)}
.sa2-etq .m{font-size:.85em;color:#444;margin-bottom:.25em}
.sa2-etq table{border-collapse:collapse;width:100%}
.sa2-etq th{font-size:.82em;text-align:left;border-bottom:4px solid #111;padding:.1em 0}
.sa2-etq th:last-child,.sa2-etq td:last-child{text-align:right}
.sa2-etq td{border-bottom:1px solid #999;padding:.12em 0}
.sa2-etq td.s{padding-left:1em}
.sa2-etq .rac{margin-top:.35em;background:#fff3c4;border-radius:6px;padding:.15em .4em;font-weight:800;text-align:center}
.sa2-comida{font:800 1.05em var(--f-d,system-ui);margin:.1em 0 .25em}
.sa2-ir{border-collapse:collapse;font-size:1.05em}
.sa2-ir td{padding:.3em .7em;border-bottom:2px solid var(--line,#ddd)}
.sa2-ir td:last-child{font:800 1.25em var(--f-d,system-ui);text-align:right}
.sa2-paso{background:var(--card,#fff);border-radius:14px;box-shadow:var(--sombra,0 1px 4px #0002);padding:.45em .7em;margin-bottom:.45em}
.sa2-paso b.n{display:inline-grid;place-items:center;width:1.6em;height:1.6em;border-radius:50%;background:#4f46e5;color:#fff;margin-right:.35em}
.sa2-paso .f{display:block;margin:.25em 0 0 2em;padding:.2em .6em;background:#eef2ff;border-radius:10px;width:fit-content}
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
.sa2-bar{display:grid;grid-template-columns:5.2em 1fr 2.8em;align-items:center;gap:.3em;margin:.15em 0}
.sa2-bar .b{height:1em;background:#eee;border:1.5px solid #555;border-radius:4px;overflow:hidden}
.sa2-bar .b i{display:block;height:100%}
.sa2-cart .terr{letter-spacing:.05em}
.sa2-cart ol{margin:.1em 0 0 1.1em;padding:0}
.sa2-cart li{margin:.1em 0}
@media (max-width:700px){.sa2-cart .zona{grid-template-columns:1fr}}
</style>`;

/* --- una etiqueta nutricional real --- */
function etq(nombre, marca, por, v, racion){
  return `<div class="sa2-etq"><h4>${nombre}</h4><div class="m">${marca}</div>
  <table><tr><th>Información nutricional</th><th>por ${por}</th></tr>
  <tr><td>Grasas</td><td>${v[0]} g</td></tr>
  <tr><td class="s">de las cuales saturadas</td><td>${v[1]} g</td></tr>
  <tr><td>Azúcares</td><td>${v[2]} g</td></tr>
  <tr><td>Sal</td><td>${v[3]} g</td></tr></table>
  <div class="rac">Yo tomo: ${racion}</div></div>`;
}
const etiquetas = `${CSS}
<div class="sa2-comida">☕ Mi desayuno</div>
<div class="sa2-etqs">
  ${etq("🥛 Leche semidesnatada","COVAP","100 ml",["1,6","1,1","4,8","0,13"],"1 vaso = 250 ml")}
  ${etq("🍫 Cola Cao Original","Idilia Foods","100 g",["2,5","1,6","70","0,25"],"2 cucharadas = 20 g")}
  ${etq("🍪 Galletas María","Fontaneda","100 g",["11","5,1","24","0,76"],"5 galletas = 30 g")}
</div>
<div class="sa2-comida" style="margin-top:.5em">🍩 Mi merienda</div>
<div class="sa2-etqs">
  ${etq("🍩 Donuts Glacé","Donuts","100 g",["22","11","21","0,4"],"1 donut = 52 g")}
</div>`;

/* --- ingestas de referencia y cálculos --- */
const ir = `${CSS}<table class="sa2-ir">
  <tr><td>🍬 Azúcares</td><td>90 g</td></tr>
  <tr><td>🧈 Grasas</td><td>70 g</td></tr>
  <tr><td>🥓 de ellas, saturadas</td><td>20 g</td></tr>
  <tr><td>🧂 Sal</td><td>6 g</td></tr></table>
  <p style="font-size:.85em;margin-top:.4em">Lo máximo que debería tomar al día un adulto (2000 kcal). Viene en el Reglamento europeo de etiquetado.</p>`;

const calculos = R`
<div class="sa2-paso"><b class="n">1</b><b>Lo que tomo de cada producto</b>: ración × el decimal de la etiqueta
  <span class="f">Cola Cao, azúcares: $20 \cdot 0,70 = 14$ g</span></div>
<div class="sa2-paso"><b class="n">2</b><b>Sumo</b> el desayuno y la merienda
  <span class="f">Azúcares: $12 + 14 + 7,2 + 10,9 = 44,1$ g</span></div>
<div class="sa2-paso"><b class="n">3</b><b>Qué % del día</b> es: lo que tomo : lo máximo
  <span class="f">$44,1 : 90 = 0,49$ → <b>49 %</b></span></div>
<div class="sa2-paso"><b class="n">4</b><b>Terrones</b> de azúcar (1 terrón = 4 g)
  <span class="f">$44,1 : 4 \approx 11$ terrones</span></div>`;

/* --- la cartulina terminada --- */
function barra(nombre, pc, color){
  return `<div class="sa2-bar"><span>${nombre}</span><span class="b"><i style="width:${pc}%;background:${color}"></i></span><b>${pc} %</b></div>`;
}
const cartulina = `${CSS}<div class="sa2-cart">
  <h3>¿Qué desayuna y merienda la profe? 🍩</h3>
  <div class="grupo">Grupo de la profe · 3.º ESO</div>
  <div class="zona">
    <div class="pieza"><h5>📋 Nuestra tabla (gramos que tomo)</h5>
      <table>
        <tr><th>Producto</th><th>Azúcares</th><th>Grasas</th><th>Saturadas</th><th>Sal</th></tr>
        <tr><td>🥛 Leche 250 ml</td><td>12</td><td>4</td><td>2,8</td><td>0,33</td></tr>
        <tr><td>🍫 Cola Cao 20 g</td><td>14</td><td>0,5</td><td>0,3</td><td>0,05</td></tr>
        <tr><td>🍪 Galletas 30 g</td><td>7,2</td><td>3,3</td><td>1,5</td><td>0,23</td></tr>
        <tr><td>🍩 Donuts 52 g</td><td>10,9</td><td>11,4</td><td>5,7</td><td>0,21</td></tr>
        <tr class="tot"><td>TOTAL</td><td>44,1</td><td>19,2</td><td>10,3</td><td>0,82</td></tr>
        <tr><td>Máximo del día</td><td>90</td><td>70</td><td>20</td><td>6</td></tr>
        <tr class="pc"><td>% del día</td><td>49 %</td><td>27 %</td><td>52 %</td><td>14 %</td></tr>
      </table>
      <div style="margin-top:.3em">Ejemplo: saturadas $10,3 : 20 = 0,515$ → 52 %</div>
    </div>
    <div class="pieza"><h5>📊 ¿Qué parte del día me como?</h5>
      ${barra("Azúcares",49,"#f59e0b")}
      ${barra("Grasas",27,"#f59e0b")}
      ${barra("Saturadas",52,"#dc2626")}
      ${barra("Sal",14,"#16a34a")}
      <div style="font-size:.85em">🟢 menos del 25 % · 🟡 del 25 % al 50 % · 🔴 más del 50 %</div>
      <h5 style="margin-top:.4em">🍬 Mis terrones de azúcar</h5>
      <div class="terr">🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊 = 11 terrones</div>
    </div>
    <div class="pieza"><h5>💬 Conclusiones</h5><ol>
      <li>Solo con el desayuno y la merienda tomo el <b>52 %</b> de las grasas saturadas del día: ¡más de la mitad!</li>
      <li>Tomo <b>44 g de azúcar</b>, unos 11 terrones: casi la mitad (49 %) del día.</li>
      <li>La sal está bien: solo el <b>14 %</b>.</li></ol></div>
    <div class="pieza"><h5>🔄 Nuestro cambio saludable</h5>
      Quitamos el Donuts de la merienda.<br>
      Saturadas: $10,3 - 5,7 = 4,6$ g → $4,6 : 20 = 0,23$ → <b>23 %</b><br>
      Bajan de 52 % a 23 % del día. 👍</div>
  </div>
</div>`;

TEMA.registrar({
  num: "SA", pref: "SA", seccion: "Situación de aprendizaje",
  titulo: "¿Es saludable nuestra cesta de la compra?",
  videos: [ {t:"Claves para leer las etiquetas nutricionales", url:"https://www.educaciontrespuntocero.com/familias/leer-etiquetas-nutricionales/"} ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">🕵️ ¿Cuánto azúcar, grasa y sal hay en el desayuno y la merienda de la profe?</p>`}
    ]},

    { titulo:"🎯 La misión", cuerpo:[
      {prop:["En <b>grupos de 4</b>, traed las <b>etiquetas</b> de vuestro desayuno y vuestra merienda. Calculad qué <b>% de lo máximo del día</b> os coméis y contadlo en una <b>cartulina</b>."], etq:"La misión"},
      {cols:[
        [{nota:["Os enseño un ejemplo hecho: <b>mi desayuno y mi merienda</b>."], etq:"👀 Primero, mirad el mío"}],
        [{nota:["Presentáis la cartulina en <b>2 minutos</b>. ¡Habla todo el grupo!"], etq:"🎤 Al final"}]
      ]}
    ]},

    { titulo:"☕ Mi desayuno y 🍩 mi merienda", cuerpo:[
      {html:etiquetas}
    ]},

    { titulo:"📏 Lo máximo en un día y los cálculos", cuerpo:[
      {cols:[ [{html:ir}], [{html:calculos}] ]}
    ]},

    { titulo:"🖼 Nuestra cartulina", cuerpo:[
      {html:cartulina}
    ]},

    { titulo:"🚀 ¡Ahora vosotros!", cuerpo:[
      {html:`<div class="sa-fases">
        <div class="casa"><b>🏠 Antes</b><span>Cada uno trae la foto de las etiquetas de <b>su desayuno y su merienda</b>, y apunta cuánto toma.</span></div>
        <div><b>Sesión 1</b><span>Hacemos los <b>cálculos</b> como en el ejemplo: lo que tomo, el total, el % del día y los terrones.</span></div>
        <div><b>Sesión 2</b><span>Hacemos la <b>cartulina</b> del grupo, como la del ejemplo.</span></div>
        <div><b>Sesión 3</b><span><b>Exposiciones</b> de 2 minutos.</span></div></div>`},
      {html:`<table class="t"><tr><th>Se evalúa</th><th>Cuenta</th></tr>
        <tr><td>Etiquetas bien copiadas, con la ración</td><td>20 %</td></tr>
        <tr><td>Cálculos con la operación escrita</td><td>40 %</td></tr>
        <tr><td>Tabla, gráfico y conclusiones con números</td><td>30 %</td></tr>
        <tr><td>Exposición: habla todo el grupo</td><td>10 %</td></tr></table>`},
      {proy:[{html:`<p><a class="sa-btn" href="situacion.html" target="_blank" rel="noopener" style="background:#15803d">🧮 Calculadora de etiquetas</a></p>`}]},
      {estudio:[
        {nota:["<b>Saberes:</b> porcentajes (el % como decimal, $C_F = I_V \\cdot C_I$, qué % representa una parte), proporcionalidad directa (de 100 g a la ración), tablas y gráficos.",
               "<b>Conexiones:</b> Biología y Geología (nutrición), Educación Física (hábitos saludables) y ODS 3 (salud y bienestar).",
               "<b>Fuentes:</b> etiquetas de COVAP leche semidesnatada, Cola Cao Original, Galletas María Fontaneda y Donuts Glacé (valores por 100 g / 100 ml). Ingestas de referencia: Reglamento (UE) 1169/2011, anexo XIII. Son de un adulto medio: sirven para comparar, no son una dieta."], etq:"👩‍🏫 Para el profesor"}
      ]}
    ]}
  ]
});
})();

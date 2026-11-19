/* 3.º ESO · Tema 3 · SITUACIÓN DE APRENDIZAJE «¿Es saludable nuestro desayuno?»
   19-nov-2026 (versión corta y sencilla, decisión de la profesora): sin ejercicios de explicación.
   Solo el desayuno de la profe con etiquetas REALES (fotos suyas), explicando qué es el %IR
   de la etiqueta, los cálculos y la cartulina terminada como si fuera el trabajo de un grupo.
   Etiquetas reales:
     ColaCao Original (Idilia Foods) · columna «por taza» = 14 g de ColaCao + 200 ml de leche
     Galletas María (900 g, 141 galletas) · columna «por galleta» = 6,4 g
     Cereales de cacao · columna «por 30 g»
   IR (ingesta de referencia de un adulto medio, 8400 kJ / 2000 kcal): Reglamento (UE) 1169/2011, anexo XIII. */
(function(){
const R = String.raw;

/* --- estilos propios de esta SA --- */
const CSS = `<style>
.sa2-etqs{display:grid;grid-template-columns:repeat(auto-fit,minmax(16em,1fr));gap:.6em}
.sa2-etq{background:#fff;color:#111;border:3px solid #111;border-radius:6px;padding:.35em .55em;font-size:.86em;line-height:1.25}
.sa2-etq h4{margin:0 0 .1em;font:800 1.08em var(--f-d,system-ui)}
.sa2-etq .m{font-size:.85em;color:#444;margin-bottom:.25em}
.sa2-etq table{border-collapse:collapse;width:100%}
.sa2-etq th{font-size:.8em;text-align:left;border-bottom:4px solid #111;padding:.1em 0}
.sa2-etq th:not(:first-child),.sa2-etq td:not(:first-child){text-align:right;white-space:nowrap;padding-left:.6em}
.sa2-etq td{border-bottom:1px solid #999;padding:.12em 0}
.sa2-etq td.s{padding-left:1em}
.sa2-etq td.ir{font-weight:800;color:#b45309}
.sa2-etq .rac{margin-top:.35em;background:#fff3c4;border-radius:6px;padding:.15em .4em;font-weight:800;text-align:center}
.sa2-comida{font:800 1.05em var(--f-d,system-ui);margin:.1em 0 .25em}
.sa2-ir{border-collapse:collapse;font-size:1.05em;width:100%}
.sa2-ir td{padding:.28em .7em;border-bottom:2px solid var(--line,#ddd)}
.sa2-ir td:last-child{font:800 1.2em var(--f-d,system-ui);text-align:right}
.sa2-paso{background:var(--card,#fff);border-radius:14px;box-shadow:var(--sombra,0 1px 4px #0002);padding:.45em .7em;margin-bottom:.45em}
.sa2-paso b.n{display:inline-grid;place-items:center;width:1.6em;height:1.6em;border-radius:50%;background:#4f46e5;color:#fff;margin-right:.35em}
.sa2-paso .f{display:block;margin:.25em 0 0 2em;padding:.2em .6em;background:#eef2ff;border-radius:10px;width:fit-content;max-width:100%}
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

/* --- una etiqueta real: filas = [texto, valor, %IR, sangría] --- */
function etq(nombre, marca, col, filas, racion){
  const tr = filas.map(f=>`<tr><td${f[3]?' class="s"':''}>${f[0]}</td><td>${f[1]}</td><td class="ir">${f[2]}</td></tr>`).join('');
  return `<div class="sa2-etq"><h4>${nombre}</h4><div class="m">${marca}</div>
  <table><tr><th>Información nutricional</th><th>${col}</th><th>%IR</th></tr>${tr}</table>
  <div class="rac">Yo tomo: ${racion}</div></div>`;
}
const etiquetas = `${CSS}
<div class="sa2-comida">☕ Mi desayuno de verdad</div>
<div class="sa2-etqs">
  ${etq("🥛 ColaCao con leche","Idilia Foods","por taza",
    [["Energía","143 kcal","7 %"],["Grasas","3,6 g","5 %"],["de las cuales saturadas","2,4 g","12 %",1],
     ["Azúcares","19 g","21 %"],["Sal","0,25 g","4 %"]],"1 taza = 14 g + 200 ml de leche")}
  ${etq("🍪 Galletas María","900 g · 141 galletas","por galleta",
    [["Energía","31 kcal","—"],["Grasas","1,2 g","—"],["de las cuales saturadas","0,2 g","—",1],
     ["Azúcares","1,3 g","—"],["Sal","0,05 g","—"]],"5 galletas (1 galleta = 6,4 g)")}
  ${etq("🥣 Cereales de cacao","con vitaminas","por 30 g",
    [["Energía","116 kcal","6 %"],["Grasas","0,6 g","1 %"],["de las cuales saturadas","0,3 g","2 %",1],
     ["Azúcares","5,1 g","6 %"],["Sal","0,2 g","3 %"]],"1 tazón = 30 g")}
</div>
<p style="font-size:.9em;margin-top:.4em">Las galletas no traen la columna del %IR… así que <b>la calculo yo</b>.</p>`;

/* --- qué es el IR --- */
const ir = `${CSS}<table class="sa2-ir">
  <tr><td>⚡ Energía</td><td>2000 kcal</td></tr>
  <tr><td>🧈 Grasas</td><td>70 g</td></tr>
  <tr><td>🥓 de ellas, saturadas</td><td>20 g</td></tr>
  <tr><td>🍬 Azúcares</td><td>90 g</td></tr>
  <tr><td>🧂 Sal</td><td>6 g</td></tr></table>`;

const queEsIR = R`${CSS}
<div class="sa2-paso"><b>IR = Ingesta de Referencia</b>
  <span class="f">Es lo que debería tomar <b>en todo el día</b> un adulto medio (2000 kcal).</span></div>
<div class="sa2-paso"><b>El %IR de la etiqueta</b> dice qué parte del día te comes con <b>una ración</b>
  <span class="f">$\%\text{IR} = \dfrac{\text{lo que tomo}}{\text{lo del día entero}} \cdot 100$</span></div>
<div class="sa2-paso"><b>Lo compruebo</b> con los azúcares de la taza de ColaCao
  <span class="f">$19 : 90 = 0,211... \to 21\,\%$ → ¡es lo que pone la etiqueta! ✔</span></div>
<div class="sa2-paso"><b>Ojo</b>
  <span class="f">Es una <b>referencia para comparar</b>, no una norma: cada persona necesita una cantidad distinta.</span>
  <span class="f">En vitaminas y minerales la etiqueta pone <b>VRN</b>, que es lo mismo pero para ellos.</span></div>`;

/* --- los cálculos --- */
const calculos = R`${CSS}
<div class="sa2-paso"><b class="n">1</b><b>Lo que no viene en la etiqueta, lo calculo</b>: 5 galletas
  <span class="f">Azúcares: $5 \cdot 1,3 = 6,5$ g · Saturadas: $5 \cdot 0,2 = 1$ g</span></div>
<div class="sa2-paso"><b class="n">2</b><b>Sumo</b> los tres productos
  <span class="f">Azúcares: $19 + 6,5 + 5,1 = 30,6$ g</span></div>
<div class="sa2-paso"><b class="n">3</b><b>Qué % del día</b> es: lo que tomo entre lo del día entero
  <span class="f">$30,6 : 90 = 0,34 \to$ <b>34 %</b> del azúcar del día</span></div>
<div class="sa2-paso"><b class="n">4</b><b>Terrones</b> de azúcar (1 terrón = 4 g)
  <span class="f">$30,6 : 4 \approx 8$ terrones</span></div>`;

/* --- la cartulina terminada --- */
function barra(nombre, pc, color){
  return `<div class="sa2-bar"><span>${nombre}</span><span class="b"><i style="width:${pc}%;background:${color}"></i></span><b>${pc} %</b></div>`;
}
const cartulina = R`${CSS}<div class="sa2-cart">
  <h3>¿Qué desayuna la profe? ☕</h3>
  <div class="grupo">Grupo de la profe · 3.º ESO</div>
  <div class="zona">
    <div class="pieza"><h5>📋 Nuestra tabla (lo que tomo)</h5>
      <table>
        <tr><th>Producto</th><th>Energía</th><th>Grasas</th><th>Saturadas</th><th>Azúcares</th><th>Sal</th></tr>
        <tr><td>🥛 1 taza ColaCao</td><td>143</td><td>3,6</td><td>2,4</td><td>19</td><td>0,25</td></tr>
        <tr><td>🍪 5 galletas</td><td>155</td><td>6</td><td>1</td><td>6,5</td><td>0,25</td></tr>
        <tr><td>🥣 Cereales 30 g</td><td>116</td><td>0,6</td><td>0,3</td><td>5,1</td><td>0,2</td></tr>
        <tr class="tot"><td>TOTAL</td><td>414</td><td>10,2</td><td>3,7</td><td>30,6</td><td>0,7</td></tr>
        <tr><td>Todo el día (IR)</td><td>2000</td><td>70</td><td>20</td><td>90</td><td>6</td></tr>
        <tr class="pc"><td>% del día</td><td>21 %</td><td>15 %</td><td>19 %</td><td>34 %</td><td>12 %</td></tr>
      </table>
      <div style="margin-top:.3em">Ejemplo: azúcares $30,6 : 90 = 0,34 \to 34\,\%$</div>
    </div>
    <div class="pieza"><h5>📊 ¿Qué parte del día desayuno?</h5>
      ${barra("Energía",21,"#f59e0b")}
      ${barra("Grasas",15,"#16a34a")}
      ${barra("Saturadas",19,"#16a34a")}
      ${barra("Azúcares",34,"#f59e0b")}
      ${barra("Sal",12,"#16a34a")}
      <div style="font-size:.85em">🟢 menos del 25 % · 🟡 del 25 % al 50 % · 🔴 más del 50 %</div>
      <h5 style="margin-top:.4em">🍬 Mis terrones de azúcar</h5>
      <div class="terr">🧊🧊🧊🧊🧊🧊🧊🧊 = 8 terrones</div>
    </div>
    <div class="pieza"><h5>💬 Conclusiones</h5><ol>
      <li>Solo desayunando tomo el <b>34 %</b> del azúcar de todo el día: 8 terrones.</li>
      <li>La grasa y la sal están bien: <b>15 %</b> y <b>12 %</b>.</li>
      <li>El azúcar casi todo viene de la <b>taza</b> (19 g de los 30,6).</li></ol></div>
    <div class="pieza"><h5>🔄 Nuestro cambio saludable</h5>
      Pongo <b>la mitad de ColaCao</b>: 7 g en vez de 14 g.<br>
      Lleva 70 g de azúcar por 100 g → $7 \cdot 0,70 = 4,9$ g menos<br>
      Azúcares: $30,6 - 4,9 = 25,7$ g → $25,7 : 90 = 0,29 \to$ <b>29 %</b> 👍</div>
  </div>
</div>`;

TEMA.registrar({
  num: "SA", pref: "SA", seccion: "Situación de aprendizaje",
  titulo: "¿Es saludable nuestro desayuno?",
  videos: [ {t:"Claves para leer las etiquetas nutricionales", url:"https://www.educaciontrespuntocero.com/familias/leer-etiquetas-nutricionales/"} ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">🕵️ ¿Cuánto azúcar, grasa y sal hay en el desayuno de la profe?</p>`}
    ]},

    { titulo:"🎯 La misión", cuerpo:[
      {prop:["En <b>grupos de 4</b>, traed las <b>etiquetas</b> de vuestro desayuno. Calculad qué <b>% del día</b> os coméis y contadlo en una <b>cartulina</b>."], etq:"La misión"},
      {cols:[
        [{nota:["Os enseño un ejemplo hecho: <b>mi desayuno</b>, con etiquetas de verdad."], etq:"👀 Primero, mirad el mío"}],
        [{nota:["Presentáis la cartulina en <b>2 minutos</b>. ¡Habla todo el grupo!"], etq:"🎤 Al final"}]
      ]}
    ]},

    { titulo:"🏷 Mis tres etiquetas", cuerpo:[
      {html:etiquetas}
    ]},

    { titulo:"❓ ¿Qué es eso del «%IR» de la etiqueta?", cuerpo:[
      {cols:[ [{html:queEsIR}], [{html:`${ir}<p style="font-size:.85em;margin-top:.4em">Lo máximo que debería tomar al día un adulto medio. Viene en el <b>Reglamento europeo de etiquetado</b>, y es lo que usan todas las etiquetas.</p>`}] ]}
    ]},

    { titulo:"✍️ Mis cálculos", cuerpo:[
      {html:calculos},
      {nota:["Con las otras columnas se haría igual: saturadas $3,7 : 20 = 0,185 \\to 19\\,\\%$, sal $0,7 : 6 = 0,116 \\to 12\\,\\%$…"]}
    ]},

    { titulo:"🖼 Nuestra cartulina", cuerpo:[
      {html:cartulina}
    ]},

    { titulo:"🚀 ¡Ahora vosotros!", cuerpo:[
      {html:`<div class="sa-fases">
        <div class="casa"><b>🏠 Antes</b><span>Cada uno trae la <b>foto de la etiqueta</b> de lo que desayuna y apunta <b>cuánto toma</b> (una taza, 5 galletas, 30 g…).</span></div>
        <div><b>Sesión 1</b><span>Los <b>cálculos</b> como en el ejemplo: lo que tomo, el total, el % del día y los terrones.</span></div>
        <div><b>Sesión 2</b><span>La <b>cartulina</b> del grupo, como la del ejemplo.</span></div>
        <div><b>Sesión 3</b><span><b>Exposiciones</b> de 2 minutos.</span></div></div>`},
      {html:`<table class="t"><tr><th>Se evalúa</th><th>Cuenta</th></tr>
        <tr><td>Etiquetas bien copiadas, con la ración</td><td>20 %</td></tr>
        <tr><td>Cálculos con la operación escrita</td><td>40 %</td></tr>
        <tr><td>Tabla, gráfico y conclusiones con números</td><td>30 %</td></tr>
        <tr><td>Exposición: habla todo el grupo</td><td>10 %</td></tr></table>`},
      {proy:[{html:`<p><a class="sa-btn" href="situacion.html" target="_blank" rel="noopener" style="background:#15803d">🧮 Calculadora de etiquetas</a></p>`}]},
      {estudio:[
        {nota:["<b>Saberes:</b> porcentajes (qué % representa una parte, el % como decimal), proporcionalidad directa (de la ración al total) y lectura de tablas.",
               "<b>Idea:</b> las tres etiquetas ya dan la columna «por ración», así que el cálculo es sumar y comparar con la IR. La de las galletas no trae %IR a propósito: ahí es donde se ve si han entendido el porcentaje.",
               "<b>Fuentes:</b> fotos reales de ColaCao Original (Idilia Foods, columna «por taza»: 14 g + 200 ml de leche), galletas María (envase de 900 g, 141 galletas, columna «por galleta» de 6,4 g) y cereales de cacao (columna «por 30 g»). IR de un adulto medio (8400 kJ / 2000 kcal): Reglamento (UE) 1169/2011, anexo XIII. Sirven para comparar, no son una dieta."], etq:"👩‍🏫 Para el profesor"}
      ]}
    ]}
  ]
});
})();

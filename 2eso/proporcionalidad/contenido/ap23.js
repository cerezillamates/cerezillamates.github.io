/* 2.º ESO · Tema 3 · SITUACIÓN DE APRENDIZAJE «Organizamos un viaje»
   19-nov-2026 (versión corta, decisión de la profesora): sin misiones ni ejercicios de explicación.
   Solo un ejemplo concreto: el presupuesto del viaje hecho entero por la profesora, con todas las
   cuentas escritas, y el cartel terminado presentado como si fuera el trabajo de una agencia.
   Datos del viaje: autobús 500 €, bocadillos 3 por 7,50 €, parque de aventura 18 € con 20 % de
   descuento de grupo, albergue 1200 € con subida del 15 %, mapa 1 : 200 000 y rifa de 360 €. */
(function(){
const R = String.raw;

/* --- estilos propios de esta SA --- */
const CSS = `<style>
.sav-datos{border-collapse:collapse;width:100%;font-size:1.02em}
.sav-datos th{text-align:left;background:var(--card,#fff);border-bottom:2px solid var(--line,#ddd);padding:.3em .6em;white-space:nowrap}
.sav-datos td{border-bottom:2px solid var(--line,#ddd);padding:.3em .6em}
.sav-datos td b{font-size:1.1em}
.sav-paso{background:var(--card,#fff);border-radius:14px;box-shadow:var(--sombra,0 1px 4px #0002);padding:.45em .7em;margin-bottom:.45em}
.sav-paso b.n{display:inline-grid;place-items:center;width:1.6em;height:1.6em;border-radius:50%;background:#4f46e5;color:#fff;margin-right:.35em}
.sav-paso .f{display:block;margin:.25em 0 0 2em;padding:.2em .6em;background:#eef2ff;border-radius:10px;width:fit-content;max-width:100%}
.sav-paso .di{float:right;font-weight:800;color:#b91c1c}
/* cartel de la agencia */
.sav-cart{background:#fdf3d7;border-radius:10px;padding:.8em;box-shadow:0 6px 18px #0003;color:#222;font-family:"Caveat","Comic Sans MS",cursive;font-size:1.22em;line-height:1.15;transform:rotate(-.4deg)}
.sav-cart h3{font-family:"Caveat",cursive;font-size:2em;text-align:center;margin:0;color:#b91c1c}
.sav-cart .grupo{text-align:center;color:#444;margin-bottom:.4em}
.sav-cart .zona{display:grid;grid-template-columns:1.25fr 1fr;gap:.6em}
.sav-cart .pieza{background:#fff;border-radius:8px;padding:.4em .55em;box-shadow:0 2px 6px #0002}
.sav-cart .pieza h5{margin:0 0 .2em;font:700 1.15em "Caveat",cursive;color:#1d4ed8}
.sav-cart table{border-collapse:collapse;width:100%;font-size:.92em}
.sav-cart td,.sav-cart th{border:1.5px solid #555;padding:.05em .3em;text-align:center}
.sav-cart td:first-child{text-align:left}
.sav-cart tr.tot td{font-weight:700;background:#fef9c3}
.sav-cart tr.pc td{font-weight:700;background:#fde2e1;color:#b91c1c}
.sav-cart ol{margin:.1em 0 0 1.1em;padding:0}
.sav-cart li{margin:.1em 0}
@media (max-width:700px){.sav-cart .zona{grid-template-columns:1fr}}
</style>`;

/* --- los datos del viaje --- */
const datos = `${CSS}<table class="sav-datos">
  <tr><th>🚌 Autobús</th><td><b>500 €</b> en total, vaya el que vaya</td></tr>
  <tr><th>🥪 Bocadillos</th><td><b>3 por 7,50 €</b> · 2 para cada alumno</td></tr>
  <tr><th>🧗 Parque de aventura</th><td><b>18 €</b> por persona, con un <b>20 % de descuento</b> para grupos</td></tr>
  <tr><th>🏨 Albergue</th><td><b>1200 €</b> por el grupo, pero este año <b>sube un 15 %</b></td></tr>
  <tr><th>🗺️ El mapa</th><td>escala <b>1 : 200 000</b> · el albergue está a <b>7,5 cm</b> del instituto</td></tr>
  <tr><th>🎟️ Rifa del curso</th><td><b>360 €</b> para repartir · apuntados: 2.º A <b>24</b>, 2.º B <b>26</b>, 2.º C <b>22</b></td></tr>
  <tr><th>👥 Mi clase</th><td>vamos <b>28 alumnos</b></td></tr></table>`;

/* --- mis cuentas, una por una --- */
const cuentas1 = R`${CSS}
<div class="sav-paso"><b class="n">1</b><b>🚌 El autobús</b> <span class="di">I</span>
  <span class="f">Cuantos más vamos, menos paga cada uno → <b>inversa</b></span>
  <span class="f">$500 : 28 = 17,857... \approx 17,86$ € por alumno</span></div>
<div class="sav-paso"><b class="n">2</b><b>🥪 Los bocadillos</b> <span class="di">D</span>
  <span class="f">Reduzco a la unidad: $7,50 : 3 = 2,50$ € un bocadillo</span>
  <span class="f">Cada alumno quiere 2: $2 \cdot 2,50 = 5$ € por alumno</span>
  <span class="f">Los 28: $28 \cdot 5 = 140$ €</span></div>
<div class="sav-paso"><b class="n">3</b><b>🧗 El parque de aventura</b> (descuento del 20 %)
  <span class="f">El 20 % de 18: $18 \cdot 0,20 = 3,60$ € → $18 - 3,60 = 14,40$ €</span>
  <span class="f">🪄 Más rápido con el índice: pagar con un 20 % menos es pagar el 80 % → $18 \cdot 0,80 = 14,40$ €</span>
  <span class="f">Los 28: $28 \cdot 14,40 = 403,20$ €</span></div>`;

const cuentas2 = R`${CSS}
<div class="sav-paso"><b class="n">4</b><b>🏨 El albergue</b> (sube un 15 %) <span class="di">I</span>
  <span class="f">El 15 % de 1200: $1200 \cdot 0,15 = 180$ € → $1200 + 180 = 1380$ €</span>
  <span class="f">🪄 Con el índice: $1200 \cdot 1,15 = 1380$ €</span>
  <span class="f">$1380 : 28 = 49,285... \approx 49,29$ € por alumno</span></div>
<div class="sav-paso"><b class="n">5</b><b>🗺️ ¿A cuántos km está?</b> <span class="di">D</span>
  <span class="f">1 cm del mapa son 200 000 cm de verdad</span>
  <span class="f">$7,5 \cdot 200\,000 = 1\,500\,000$ cm $= 15$ km</span></div>
<div class="sav-paso"><b class="n">6</b><b>🎟️ La rifa</b> (reparto directamente proporcional)
  <span class="f">$24 + 26 + 22 = 72$ alumnos en total</span>
  <span class="f">Constante: $360 : 72 = 5$ € por alumno apuntado</span>
  <span class="f">2.º A: $24 \cdot 5 = 120$ € · 2.º B: $26 \cdot 5 = 130$ € · 2.º C: $22 \cdot 5 = 110$ €</span>
  <span class="f">Comprobación: $120 + 130 + 110 = 360$ ✔</span></div>`;

const total = R`${CSS}
<div class="sav-paso"><b class="n">7</b><b>💶 Lo que paga cada alumno</b>
  <span class="f">$17,86 + 5 + 14,40 + 49,29 = 86,55$ €</span>
  <span class="f">De la rifa le tocan 5 € → $86,55 - 5 = 81,55$ €</span></div>
<div class="sav-paso"><b class="n">8</b><b>🔄 Mi idea para que salga más barato</b>
  <span class="f">Cambio el parque (14,40 €) por una ruta guiada de 6 €: $14,40 - 6 = 8,40$ € menos</span>
  <span class="f">$81,55 - 8,40 = 73,15$ € por alumno</span></div>`;

/* --- el cartel terminado --- */
const cartel = R`${CSS}<div class="sav-cart">
  <h3>Agencia «Sierra Express» 🚌</h3>
  <div class="grupo">Agencia de la profe · 2.º ESO · 28 alumnos · 2 días en la sierra</div>
  <div class="zona">
    <div class="pieza"><h5>💶 Nuestro presupuesto</h5>
      <table>
        <tr><th>Concepto</th><th>Total</th><th>Por alumno</th></tr>
        <tr><td>🚌 Autobús</td><td>500 €</td><td>17,86 €</td></tr>
        <tr><td>🥪 Bocadillos (2)</td><td>140 €</td><td>5 €</td></tr>
        <tr><td>🧗 Parque (−20 %)</td><td>403,20 €</td><td>14,40 €</td></tr>
        <tr><td>🏨 Albergue (+15 %)</td><td>1380 €</td><td>49,29 €</td></tr>
        <tr class="tot"><td>TOTAL</td><td>2423,20 €</td><td>86,55 €</td></tr>
        <tr><td>🎟️ Nos toca de la rifa</td><td>−140 €</td><td>−5 €</td></tr>
        <tr class="pc"><td>PAGA CADA UNO</td><td>2283,20 €</td><td>81,55 €</td></tr>
      </table>
      <div style="margin-top:.3em">Ejemplo: albergue $1200 \cdot 1,15 = 1380$ → $1380 : 28 = 49,29$ €</div>
    </div>
    <div class="pieza"><h5>🗺️ El plan</h5>
      <b>Día 1:</b> salida a las 9:00, bocadillo en el mirador y parque de aventura por la tarde.<br>
      <b>Día 2:</b> ruta hasta el río y vuelta a las 18:00.<br>
      El albergue está a <b>15 km</b> (7,5 cm en el mapa 1 : 200 000).
      <h5 style="margin-top:.4em">🧮 D o I</h5>
      Autobús y albergue: <b>I</b> (se pagan entre todos).<br>
      Bocadillos y entradas: <b>D</b> (cada uno el suyo).
    </div>
    <div class="pieza"><h5>💬 Conclusiones</h5><ol>
      <li>El viaje cuesta <b>2423,20 €</b>: a <b>81,55 €</b> por alumno con la rifa descontada.</li>
      <li>Lo más caro es el <b>albergue</b>: 49,29 € de los 86,55 € (más de la mitad).</li>
      <li>Si fuéramos 30, el autobús bajaría de 17,86 € a <b>16,67 €</b>.</li></ol></div>
    <div class="pieza"><h5>🔄 Nuestra oferta barata</h5>
      Ruta guiada (6 €) en vez del parque de aventura.<br>
      $81,55 - 8,40 = 73,15$ € por alumno. 👍</div>
  </div>
</div>`;

TEMA.registrar({
  num: "SA", pref: "SA", seccion: "Situación de aprendizaje",
  titulo: "Organizamos un viaje",

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">🚌 Dos días en la sierra: ¿cuánto cuesta el viaje… y cuánto paga cada uno?</p>`}
    ]},

    { titulo:"🎯 La misión", cuerpo:[
      {prop:["En <b>grupos de 4</b> sois una <b>agencia de viajes</b>. Preparad el <b>presupuesto</b> del viaje de 2.º de ESO: autobús, comida, actividad y albergue, y decid <b>cuánto paga cada alumno</b>."], etq:"La misión"},
      {cols:[
        [{nota:["Os enseño un ejemplo hecho: <b>mi presupuesto</b>, con todas las cuentas."], etq:"👀 Primero, mirad el mío"}],
        [{nota:["Presentáis el <b>cartel</b> en <b>2 minutos</b>. ¡Habla toda la agencia!"], etq:"🎤 Al final"}]
      ]}
    ]},

    { titulo:"📋 Los datos del viaje", cuerpo:[
      {html:datos}
    ]},

    { titulo:"✍️ Mis cuentas (1): autobús, comida y actividad", cuerpo:[
      {html:cuentas1}
    ]},

    { titulo:"✍️ Mis cuentas (2): albergue, mapa y rifa", cuerpo:[
      {html:cuentas2}
    ]},

    { titulo:"💶 El precio final y mi idea para abaratar", cuerpo:[
      {html:total},
      {nota:["Si sumo los totales y divido: $2423,20 : 28 = 86,54$ €. Sale un céntimo menos que sumando los precios por alumno, porque <b>había redondeado</b> cada uno. Es normal: lo digo en el cartel."]}
    ]},

    { titulo:"🖼 Mi cartel", cuerpo:[
      {html:cartel}
    ]},

    { titulo:"🚀 ¡Ahora vosotros!", cuerpo:[
      {html:`<div class="sa-fases">
        <div><b>Sesión 1</b><span>Las <b>cuentas</b> del viaje como en el ejemplo, pero con <b>los alumnos de vuestra clase</b> y la actividad que elijáis.</span></div>
        <div class="casa"><b>🏠 En casa</b><span>La <b>rifa</b>, el precio final por alumno y vuestra <b>idea para abaratar</b>.</span></div>
        <div><b>Sesión 2</b><span>El <b>cartel</b> de la agencia, como el del ejemplo.</span></div>
        <div><b>Sesión 3</b><span><b>Presentaciones</b> de 2 minutos y votamos el mejor viaje.</span></div></div>`},
      {html:`<table class="t"><tr><th>Se evalúa</th><th>Cuenta</th></tr>
        <tr><td>Decir si cada cosa es <b>D</b> o <b>I</b> y por qué</td><td>20 %</td></tr>
        <tr><td>Cuentas con la operación escrita</td><td>40 %</td></tr>
        <tr><td>Cartel con la tabla y el precio por alumno</td><td>30 %</td></tr>
        <tr><td>Presentación: habla toda la agencia</td><td>10 %</td></tr></table>`},
      {estudio:[
        {nota:["<b>Saberes:</b> proporcionalidad directa e inversa, reducción a la unidad, porcentajes (aumentos y descuentos, con el truco del índice), escalas y repartos directamente proporcionales.",
               "<b>Idea:</b> el presupuesto de arriba está resuelto entero para que lo copien como modelo; cada agencia repite los mismos pasos con el número de alumnos de su clase y la actividad que elija.",
               "<b>Basada</b> en la situación de aprendizaje de la profesora (niveles N1 y N2)."], etq:"👩‍🏫 Para el profesor"}
      ]}
    ]}
  ]
});
})();

/* 3.º ESO · Tema 3 · SITUACIÓN DE APRENDIZAJE «¿Es saludable nuestra cesta de la compra?»
   Situación de la profesora (página anterior del tema): mirar las etiquetas de los productos que se compran en casa
   y analizar con porcentajes los nutrientes que se toman. Producto final: una cartulina por grupo (tabla, gráfico,
   semáforo y conclusiones) que se expone en 2 minutos. La calculadora y la tabla de la cesta están en situacion.html.
   Sustituye a «El mercadillo solidario» (decisión de la profesora, 11-nov-2026). */
(function(){
const R = String.raw;
const etiqueta = `<table class="t" style="max-width:34em;border:3px solid #111;background:#fff;color:#111">
  <tr><th colspan="4" style="text-align:left;font-size:1.15em;border-bottom:5px solid #111">Información nutricional</th></tr>
  <tr><th></th><th>por 100 g</th><th>por ración (30 g)</th><th>% IR*</th></tr>
  <tr><td>Valor energético</td><td>380 kcal</td><td>114 kcal</td><td>6 %</td></tr>
  <tr><td>Grasas</td><td>3 g</td><td>0,9 g</td><td>1 %</td></tr>
  <tr><td>&emsp;de las cuales saturadas</td><td>1 g</td><td>0,3 g</td><td>2 %</td></tr>
  <tr><td>Hidratos de carbono</td><td>80 g</td><td>24 g</td><td>9 %</td></tr>
  <tr style="background:#ffe9a8"><td>&emsp;de los cuales azúcares</td><td>25 g</td><td>7,5 g</td><td>8 %</td></tr>
  <tr><td>Proteínas</td><td>8 g</td><td>2,4 g</td><td>5 %</td></tr>
  <tr><td>Sal</td><td>0,6 g</td><td>0,18 g</td><td>3 %</td></tr>
  <tr><td colspan="4" style="font-size:.8em">*IR: ingesta de referencia de un adulto medio (2000 kcal)</td></tr></table>`;
const semaforo = `<table class="t"><tr><th>Por cada 100 g</th><th style="background:#dff3e6">🟢 poco</th><th style="background:#fff1c7">🟡 medio</th><th style="background:#fbe1de">🔴 mucho</th></tr>
  <tr><td>Azúcares</td><td>hasta 5 g</td><td>de 5 a 22,5 g</td><td>más de 22,5 g</td></tr>
  <tr><td>Grasas</td><td>hasta 3 g</td><td>de 3 a 17,5 g</td><td>más de 17,5 g</td></tr>
  <tr><td>Saturadas</td><td>hasta 1,5 g</td><td>de 1,5 a 5 g</td><td>más de 5 g</td></tr>
  <tr><td>Sal</td><td>hasta 0,3 g</td><td>de 0,3 a 1,5 g</td><td>más de 1,5 g</td></tr></table>`;

TEMA.registrar({
  num: "SA", pref: "SA", seccion: "Situación de aprendizaje",
  titulo: "¿Es saludable nuestra cesta de la compra?",
  videos: [ {t:"Claves para leer las etiquetas nutricionales", url:"https://www.educaciontrespuntocero.com/familias/leer-etiquetas-nutricionales/"} ],

  clase: [
    { nivel:"Leer la etiqueta", min:4,
      enun:"🍪 Unas galletas tienen 24 g de azúcares por cada 100 g y la ración es de 30 g. <b>a)</b> ¿Qué porcentaje de azúcar tienen? <b>b)</b> ¿Qué color les toca en el semáforo? <b>c)</b> ¿Cuánto azúcar tomas en una ración?",
      pasos:["<b>a)</b> 24 g de cada 100 g → <b>24 %</b>", "<b>b)</b> 24 es más de 22,5 → 🔴 mucho azúcar", R`<b>c)</b> PARTE = TOTAL × decimal: $30 \cdot 0,24 = 7,2$ g`],
      res:"a) 24 %&ensp; b) rojo&ensp; c) 7,2 g" },
    { nivel:"% del día", min:5,
      enun:"🥛 Un yogur natural de 125 g tiene un 4,5 % de azúcares. Lo que se puede tomar al día son 90 g de azúcares. <b>a)</b> ¿Cuánto azúcar tiene el yogur? <b>b)</b> ¿Qué porcentaje del azúcar del día es?",
      pasos:[R`<b>a)</b> $125 \cdot 0,045 = 5,625$ g ≈ 5,6 g`, R`<b>b)</b> decimal = PARTE : TOTAL: $5,625 : 90 = 0,0625$ → <b>6,25 %</b>`],
      res:"a) unos 5,6 g&ensp; b) 6,25 %" },
    { nivel:"% del día", min:6,
      enun:"🍫 Una crema de cacao tiene 56 g de azúcares por 100 g y la ración es de 15 g. <b>a)</b> ¿Qué porcentaje del azúcar del día (90 g) tomas en una ración? <b>b)</b> ¿Cuántas raciones hacen falta para llegar a todo el azúcar del día?",
      pasos:[R`<b>a)</b> Azúcar de una ración: $15 \cdot 0,56 = 8,4$ g → $8,4 : 90 \approx 0,093$ → <b>9,3 %</b>`, R`<b>b)</b> $90 : 8,4 \approx 10,7$ → con 11 raciones ya te pasas`],
      res:"a) 9,3 %&ensp; b) unas 11 raciones (10,7)" },
    { nivel:"Hacia atrás", min:5,
      enun:"🍟 En una bolsa de patatas fritas de 40 g pone que tiene 0,56 g de sal. ¿Qué porcentaje de sal tienen? ¿Qué color les toca en el semáforo?",
      pasos:[R`decimal = PARTE : TOTAL: $0,56 : 40 = 0,014$ → <b>1,4 %</b>`, "Es 1,4 g por cada 100 g: está entre 0,3 y 1,5 → 🟡 medio (muy cerca del rojo)"],
      res:"1,4 % de sal, amarillo" },
    { nivel:"¿Es equilibrado?", min:7,
      enun:"🍞 El pan de molde integral tiene por cada 100 g: 42 g de hidratos, 4 g de grasas y 10 g de proteínas. Sabiendo que 1 g de hidratos o de proteínas da 4 kcal y 1 g de grasa da 9 kcal, ¿qué porcentaje de su energía viene de cada nutriente? ¿Se parece a lo recomendado (hidratos 50 – 55 %, grasas 30 – 35 %, proteínas 10 – 15 %)?",
      pasos:[R`Hidratos $42 \cdot 4 = 168$ kcal, grasas $4 \cdot 9 = 36$ kcal, proteínas $10 \cdot 4 = 40$ kcal → total 244 kcal`,
             R`Hidratos $168 : 244 \approx 0,689$ → 68,9 %, grasas $36 : 244 \approx 0,148$ → 14,8 %, proteínas $40 : 244 \approx 0,164$ → 16,4 %`,
             "Tiene más hidratos y menos grasa de lo recomendado. Un solo alimento no tiene que estar equilibrado: lo que cuenta es todo el día."],
      res:"68,9 % hidratos, 14,8 % grasas y 16,4 % proteínas" },
    { nivel:"Reto", min:6,
      enun:"📉 Una marca cambia la receta de sus galletas: pasan de 24 g a 18 g de azúcares por cada 100 g. <b>a)</b> ¿En qué porcentaje ha bajado el azúcar? <b>b)</b> ¿Cambia su color en el semáforo?",
      pasos:[R`<b>a)</b> Variación = FINAL : INICIAL: $18 : 24 = 0,75$ → queda el 75 %, <b>baja un 25 %</b>`, "<b>b)</b> 18 g está entre 5 y 22,5: pasa de 🔴 a 🟡"],
      res:"a) un 25 %&ensp; b) sí, de rojo a amarillo" }
  ],

  casa: [
    { nivel:"Básico", enun:"🐟 Una lata de atún tiene 1 g de sal por cada 100 g. Si te comes 60 g, ¿cuánta sal tomas? ¿Qué porcentaje es de los 6 g de sal del día?",
      pasos:[R`$60 \cdot 0,01 = 0,6$ g`, R`$0,6 : 6 = 0,1$ → 10 %`], res:"0,6 g, el 10 % de la sal del día" },
    { nivel:"Básico", enun:"Una ración de 25 g de un aperitivo tiene 4 g de grasas. ¿Qué porcentaje de grasa tiene? ¿Qué color le toca?",
      pasos:[R`$4 : 25 = 0,16$ → 16 %`, "16 g por cada 100 g: está entre 3 y 17,5 → 🟡 medio"], res:"16 %, amarillo" },
    { nivel:"Consolidación", enun:"En el desayuno tomas 30 g de cereales con un 25 % de azúcar y un yogur de 125 g con un 4,5 % de azúcar. ¿Cuánto azúcar tomas en total? ¿Qué porcentaje es de los 90 g del día?",
      pasos:[R`Cereales: $30 \cdot 0,25 = 7,5$ g; yogur: $125 \cdot 0,045 = 5,625$ g`, R`Total: $13,125$ g → $13,125 : 90 \approx 0,146$ → 14,6 %`], res:"Unos 13,1 g, el 14,6 % del día" },
    { nivel:"Problema", enun:"En una etiqueta pone que una ración aporta 228 kcal y que eso es el 11,4 % de la ingesta de referencia. ¿Cuántas kcal es la ingesta de referencia?",
      pasos:[R`TOTAL = PARTE : decimal: $228 : 0,114 = 2000$ kcal`], res:"2000 kcal" },
    { nivel:"Para pensar", enun:"Lucía cambia sus 30 g de cereales (25 % de azúcar) por 30 g de copos de avena (1 % de azúcar). ¿Cuántos gramos de azúcar deja de tomar? ¿En qué porcentaje baja el azúcar de su desayuno de cereales?",
      pasos:[R`Antes $30 \cdot 0,25 = 7,5$ g; ahora $30 \cdot 0,01 = 0,3$ g → deja de tomar 7,2 g`, R`$0,3 : 7,5 = 0,04$ → queda el 4 %, baja un 96 %`], res:"7,2 g menos, baja un 96 %" }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {nota:["Mirad las etiquetas de los productos que compráis en casa y calculad sus <b>porcentajes</b>. ¿Comemos de forma <b>saludable y equilibrada</b>? ¿Qué cambiaríamos?"], etq:"🎯 El reto"},
      {cols:[
        [{prop:["Una <b>cartulina por grupo</b> con la tabla de vuestra cesta, un gráfico, el semáforo y vuestras conclusiones. La presentáis en 2 minutos."], etq:"🖼 Producto final"}],
        [{nota:["Grupos de 3 o 4. Cada alumno trae <b>3 etiquetas</b>: algo del desayuno, algo de la merienda y algo de la comida."], etq:"👥 Cómo"}]
      ]}
    ]},
    { titulo:"Paso a paso", cuerpo:[
      {html:`<ol class="pasos-sa" style="display:grid;gap:.5em;padding-left:1.3em">
        <li><b>En casa, recogemos etiquetas.</b> Haz una foto (o copia) de la tabla nutricional de 3 productos: la columna «por 100 g» y el tamaño de la ración.</li>
        <li><b>Sesión 1, leemos una etiqueta.</b> Vemos qué significa cada fila y hacemos juntos el ejemplo de los cereales.</li>
        <li><b>Sesión 2, calculamos los %.</b> Cada uno mete sus productos en la calculadora: % de azúcar, grasa y sal, semáforo y % de lo que puedes tomar al día.</li>
        <li><b>Sesión 3, la cesta del grupo.</b> Juntamos los productos en la tabla de la cesta. ¿Cuántos rojos hay? ¿La energía se reparte como recomiendan?</li>
        <li><b>Sesión 4, cartulina y exposición.</b> Pasamos la tabla y el gráfico a la cartulina, escribimos las conclusiones y lo contamos a la clase.</li></ol>`}
    ]},
    { titulo:"Cómo se lee una etiqueta", cuerpo:[
      {cols:[
        [{html:etiqueta}],
        [{nota:["25 g de azúcar <b>de cada 100 g</b> es lo mismo que <b>un 25 % de azúcar</b>. ¡Ya es un porcentaje!"], etq:"① «por 100 g» es un %"},
         {nota:[R`Lo que te comes de una vez. Azúcar que tomas: ración × el % en decimal: $30 \cdot 0,25 = 7,5$ g`], etq:"② La ración"},
         {nota:[R`Qué parte de lo que puedes tomar <b>en todo el día</b> te comes en esa ración: $7,5 : 90 \approx 0,083$ → 8 %`], etq:"③ % IR"}]
      ]}
    ]},
    { titulo:"Lo que hay que saber", cuerpo:[
      {html:semaforo},
      {cols:[
        [{nota:["Energía 2000 kcal, grasas 70 g (saturadas 20 g), hidratos 260 g (azúcares 90 g), proteínas 50 g, sal 6 g."], etq:"📅 Lo que puedes tomar al día (IR)"}],
        [{nota:["De toda la energía del día: hidratos <b>50 – 55 %</b>, grasas <b>30 – 35 %</b>, proteínas <b>10 – 15 %</b>.", "1 g de hidratos o de proteínas = <b>4 kcal</b>; 1 g de grasa = <b>9 kcal</b>."], etq:"⚖ Dieta equilibrada"}]
      ]}
    ]},
    { titulo:"Ejemplo resuelto: los cereales del desayuno", cuerpo:[
      {ej:{etq:"🥣 Lucía desayuna una ración de 30 g de los cereales de la etiqueta",
        enun:"¿Qué % de azúcar tienen? ¿Cuánto azúcar y cuánta sal toma? ¿De dónde sale la energía?",
        pasos:["25 g de cada 100 g → <b>25 %</b>. Como 25 es más de 22,5 → 🔴 mucho azúcar",
               R`Azúcar que toma: $30 \cdot 0,25 = 7,5$ g → $7,5 : 90 \approx 0,083$ → <b>8 %</b> del azúcar del día`,
               R`Sal: 0,6 g por 100 g → 🟡 medio. En la ración: $30 \cdot 0,006 = 0,18$ g → $0,18 : 6 = 0,03$ → <b>3 %</b> del día`,
               R`Energía: hidratos $80 \cdot 4 = 320$, grasas $3 \cdot 9 = 27$, proteínas $8 \cdot 4 = 32$ → 379 kcal. Hidratos $320 : 379 \approx 84\,\%$, grasas 7 %, proteínas 8 %`],
        res:"Casi toda su energía viene de hidratos y tiene mucho azúcar: mejor cambiarlos a menudo por pan integral o copos de avena sin azúcar"}}
    ]},
    { titulo:"La calculadora y la tabla de la cesta", cuerpo:[
      {html:`<p style="font-size:1.1em">Cada alumno copia los datos «por 100 g» de sus etiquetas en la <b>calculadora</b>: salen los %, el semáforo, el % del día y de dónde sale la energía. Después los añadís a la <b>tabla de la cesta</b> del grupo y la imprimís para la cartulina.</p>
        <p><a href="situacion.html" target="_blank" rel="noopener" style="display:inline-block;font-size:1.3em;font-weight:800;padding:.6em 1.1em;border-radius:14px;background:#4f46e5;color:#fff;text-decoration:none">🧮 Abrir la calculadora y la cesta</a></p>`}
    ]},
    { titulo:"Así puede ser la cartulina", cuerpo:[
      {html:`<div style="display:grid;grid-template-columns:1fr 1fr;gap:.5em;background:#fdf7e8;border:3px dashed #c9a24a;border-radius:16px;padding:.7em;max-width:40em">
        <div style="grid-column:1/-1;text-align:center;background:#fff;border:2px solid #c9a24a;border-radius:10px;padding:.4em">🏷 <b>Título</b>: «¿Es saludable nuestra cesta?» y los nombres del grupo</div>
        <div style="grid-column:1/-1;background:#fff;border:2px solid #c9a24a;border-radius:10px;padding:.4em">📋 <b>La tabla</b>: producto, ración, % de azúcar, grasa y sal, semáforo, azúcar y sal en una ración, % del día</div>
        <div style="background:#fff;border:2px solid #c9a24a;border-radius:10px;padding:.4em">📊 <b>Gráfico</b>: barras con el % de azúcar de cada producto, con su color del semáforo</div>
        <div style="background:#fff;border:2px solid #c9a24a;border-radius:10px;padding:.4em">⚖ <b>¿Equilibrada?</b> El % de energía de hidratos, grasas y proteínas y, al lado, lo recomendado</div>
        <div style="background:#fff;border:2px solid #c9a24a;border-radius:10px;padding:.4em">💬 <b>Conclusiones</b>: 3 frases con números</div>
        <div style="background:#fff;border:2px solid #c9a24a;border-radius:10px;padding:.4em">🔄 <b>Nuestro cambio saludable</b>: qué producto cambiamos y cuánto bajan los %</div></div>`}
    ]},
    { titulo:"Preguntas para las conclusiones", cuerpo:[
      {prop:[{lista:[
        "¿Qué producto tiene más azúcar <b>en %</b>? ¿Y en <b>una ración</b>? ¿Es el mismo? ¿Por qué?",
        "¿Cuántos 🔴 tiene vuestra cesta? ¿En qué nutriente hay más rojos?",
        "Si comierais una ración de cada producto, ¿qué % del azúcar y de la sal del día tomaríais?",
        "¿La energía se reparte como recomiendan (hidratos 50 – 55 %, grasas 30 – 35 %, proteínas 10 – 15 %)?",
        "Proponed <b>un cambio</b>: cambiad un producto por otro más sano y calculad cuánto baja el %."
      ]}], etq:"💬 Las conclusiones"}
    ]},
    { titulo:"Rúbrica", cuerpo:[
      {html:`<table class="t"><tr><th>Criterio</th><th>4 Excelente</th><th>3 Bien</th><th>2 Regular</th><th>1 Hay que mejorar</th></tr>
        <tr><td><b>Lectura de etiquetas</b> (20 %)</td><td>Todos los datos bien copiados, con la ración</td><td>Algún dato sin ración</td><td>Varios datos mal copiados</td><td>Faltan etiquetas</td></tr>
        <tr><td><b>Cálculo de %</b> (30 %)</td><td>Todos los % bien, con la operación escrita</td><td>Algún error pequeño</td><td>Varios errores</td><td>No hay operaciones</td></tr>
        <tr><td><b>Tabla y gráfico</b> (20 %)</td><td>Claros, ordenados y con los colores del semáforo</td><td>Completos pero poco claros</td><td>Incompletos</td><td>No hay gráfico</td></tr>
        <tr><td><b>Conclusiones y cambio</b> (20 %)</td><td>Responden con números y proponen un cambio calculado</td><td>Responden con números</td><td>Responden sin números</td><td>No hay conclusiones</td></tr>
        <tr><td><b>Exposición y equipo</b> (10 %)</td><td>Hablan todos y se explican bien</td><td>Hablan casi todos</td><td>Lee uno solo</td><td>No exponen</td></tr></table>`},
      {nota:[R`La nota también es un porcentaje: cada criterio pesa lo que dice el paréntesis. Ejemplo: $(4 \cdot 0,2 + 3 \cdot 0,3 + 4 \cdot 0,2 + 3 \cdot 0,2 + 4 \cdot 0,1) : 4 = 0,875$ → <b>8,75</b>`]},
      {estudio:[
        {nota:["<b>Saberes:</b> porcentajes (el % como decimal, PARTE = TOTAL × decimal, porcentaje de una cantidad, qué % representa, variación), proporcionalidad directa (de 100 g a la ración), lectura e interpretación de tablas y gráficos.",
               "<b>Conexiones:</b> Biología y Geología (nutrición y dieta), Educación Física (hábitos saludables) y ODS 3 (salud y bienestar).",
               "<b>Ideas:</b> una cartulina A3 por grupo; se pueden colgar en el pasillo. Las bebidas usan otros límites del semáforo: mejor dejarlas fuera. Los valores IR son de un adulto medio: sirven para comparar, no son una dieta."], etq:"👩‍🏫 Para el profesor"}
      ]}
    ]}
  ]
});
})();

/* 3.º ESO · Tema 3 · SITUACIÓN DE APRENDIZAJE «¿Es saludable nuestra cesta de la compra?»
   Situación de la profesora (página anterior del tema): mirar las etiquetas de los productos que se compran en casa
   y analizar con porcentajes los nutrientes que se toman. Producto final: una cartulina por grupo (tabla, gráfico,
   semáforo y conclusiones) que se expone en 2 minutos. La calculadora y la tabla de la cesta están en situacion.html.
   Sustituye a «El mercadillo solidario» (decisión de la profesora, 11-nov-2026).
   11-nov: la SA es TRABAJO EN GRUPO (en clase y en casa). No hay ejercicios individuales ni corrección en clase:
   la presentación explica el reto de forma sencilla y el «dosier del grupo» (modo estudiar) tiene las misiones. */
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

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">🕵️ Detectives de etiquetas: ¿cuántos terrones de azúcar hay en tu desayuno?</p>`}
    ]},

    { titulo:"🎯 La misión", cuerpo:[
      {prop:["Vais a investigar, <b>en grupo</b>, los productos que se compran en vuestras casas. Con los <b>porcentajes</b> de las etiquetas descubriréis si vuestra cesta es <b>saludable y equilibrada</b>… y propondréis un cambio para mejorarla."], etq:"La misión"},
      {cols:[
        [{nota:["Una <b>cartulina por grupo</b>: vuestra cesta con su tabla, un gráfico, el semáforo y vuestras conclusiones."], etq:"🖼 Producto final"}],
        [{nota:["La <b>presentáis a la clase en 2 minutos</b>. ¡Habla todo el grupo!"], etq:"🎤 Y al final"}]
      ]}
    ]},

    { titulo:"👥 Equipos de 4: cada uno, un papel", cuerpo:[
      {html:`<div class="sa-roles">
        <div><i>🕵️</i><b>Detective</b><small>revisa que los datos de las etiquetas estén bien copiados</small></div>
        <div><i>🧮</i><b>Calculista</b><small>comprueba que todas las operaciones estén escritas y bien</small></div>
        <div><i>🎨</i><b>Diseñador/a</b><small>organiza la tabla, el gráfico y la cartulina</small></div>
        <div><i>🎤</i><b>Portavoz</b><small>organiza la exposición y el tiempo</small></div></div>`},
      {nota:["Todos calculáis y todos opináis: el papel solo dice de qué se encarga cada uno."]}
    ]},

    { titulo:"🗓 Cómo lo vamos a hacer", cuerpo:[
      {html:`<div class="sa-fases">
        <div class="casa"><b>🏠 Antes</b><span>Cada uno trae fotos de <b>3 etiquetas</b> de casa: algo del desayuno, de la merienda y de la comida.</span></div>
        <div><b>Sesión 1</b><span>Aprendemos a leer una etiqueta y hacemos el <b>calentamiento</b> en grupo.</span></div>
        <div><b>Sesión 2</b><span>Misiones 1, 2 y 3: los <b>%</b>, el <b>semáforo</b>, los <b>terrones</b> y el <b>% del día</b> de vuestros productos.</span></div>
        <div class="casa"><b>🏠 En casa</b><span>Terminamos la <b>tabla de la cesta</b> (nos repartimos los productos).</span></div>
        <div><b>Sesión 3</b><span>Misiones 4 y 5: ¿es <b>equilibrada</b>? y nuestro <b>cambio saludable</b>. Hacemos la cartulina.</span></div>
        <div><b>Sesión 4</b><span><b>Exposiciones</b> de 2 minutos y votamos la cesta más sana.</span></div></div>`}
    ]},

    { titulo:"🔎 Cómo se lee una etiqueta", cuerpo:[
      {cols:[
        [{html:etiqueta}],
        [{nota:["25 g de azúcar <b>de cada 100 g</b> es lo mismo que <b>un 25 % de azúcar</b>. ¡Ya es un porcentaje!"], etq:"① «por 100 g» es un %"},
         {nota:[R`Lo que te comes de una vez. Azúcar que tomas: $C_F = C_I \cdot I_V = 30 \cdot 0,25 = 7,5$ g`], etq:"② La ración"},
         {nota:[R`Qué parte del azúcar de <b>todo el día</b> (90 g) te comes: $I_V = 7,5 : 90 \approx 0,083$ → 8 %`], etq:"③ % del día"}]
      ]}
    ]},

    { titulo:"🍬 ¿Cuántos terrones son?", cuerpo:[
      {ej:{etq:"🥣 El ejemplo que haremos juntos", enun:"Lucía desayuna una ración de 30 g de los cereales de la etiqueta. Un terrón de azúcar pesa unos 4 g. ¿Cuántos terrones se come?",
        pasos:["25 g de cada 100 g → 25 %. Como 25 es más de 22,5 → 🔴 mucho azúcar",
               R`Azúcar de la ración: $30 \cdot 0,25 = 7,5$ g`,
               R`Terrones: $7,5 : 4 \approx 1,9$ → casi 2 terrones`],
        res:"Lucía se come casi <b>2 terrones</b> de azúcar en el desayuno."}},
      {html:semaforo}
    ]},

    { titulo:"🖼 Así puede ser la cartulina", cuerpo:[
      {html:`<div style="display:grid;grid-template-columns:1fr 1fr;gap:.5em;background:#fdf7e8;border:3px dashed #c9a24a;border-radius:16px;padding:.7em;max-width:40em">
        <div style="grid-column:1/-1;text-align:center;background:#fff;border:2px solid #c9a24a;border-radius:10px;padding:.4em">🏷 <b>Título</b> y los nombres del grupo</div>
        <div style="grid-column:1/-1;background:#fff;border:2px solid #c9a24a;border-radius:10px;padding:.4em">📋 <b>La tabla de la cesta</b>: producto, ración, % de azúcar, grasa y sal, semáforo, terrones, % del día</div>
        <div style="background:#fff;border:2px solid #c9a24a;border-radius:10px;padding:.4em">📊 <b>Gráfico</b> de barras con el % de azúcar y los colores del semáforo</div>
        <div style="background:#fff;border:2px solid #c9a24a;border-radius:10px;padding:.4em">⚖ <b>¿Equilibrada?</b> Vuestros % de energía al lado de los recomendados</div>
        <div style="background:#fff;border:2px solid #c9a24a;border-radius:10px;padding:.4em">💬 <b>Conclusiones</b>: 3 frases con números</div>
        <div style="background:#fff;border:2px solid #c9a24a;border-radius:10px;padding:.4em">🔄 <b>Nuestro cambio saludable</b>: qué cambiamos y cuánto baja el %</div></div>`}
    ]},

    { titulo:"⭐ Cómo se evalúa", cuerpo:[
      {html:`<table class="t"><tr><th>Criterio</th><th>4 Excelente</th><th>3 Bien</th><th>2 Regular</th><th>1 Hay que mejorar</th></tr>
        <tr><td><b>Lectura de etiquetas</b> (20 %)</td><td>Todos los datos bien copiados, con la ración</td><td>Algún dato sin ración</td><td>Varios datos mal copiados</td><td>Faltan etiquetas</td></tr>
        <tr><td><b>Cálculo de %</b> (30 %)</td><td>Todos los % bien, con la operación escrita</td><td>Algún error pequeño</td><td>Varios errores</td><td>No hay operaciones</td></tr>
        <tr><td><b>Tabla y gráfico</b> (20 %)</td><td>Claros, ordenados y con los colores del semáforo</td><td>Completos pero poco claros</td><td>Incompletos</td><td>No hay gráfico</td></tr>
        <tr><td><b>Conclusiones y cambio</b> (20 %)</td><td>Con números y con un cambio calculado</td><td>Con números</td><td>Sin números</td><td>No hay conclusiones</td></tr>
        <tr><td><b>Exposición y equipo</b> (10 %)</td><td>Hablan todos y se explican bien</td><td>Hablan casi todos</td><td>Lee uno solo</td><td>No exponen</td></tr></table>`},
      {nota:[R`La nota también es un porcentaje: cada criterio pesa lo que dice el paréntesis. Por ejemplo: $(4 \cdot 0,2 + 3 \cdot 0,3 + 4 \cdot 0,2 + 3 \cdot 0,2 + 4 \cdot 0,1) : 4 = 0,875$ → <b>8,75</b>`]}
    ]},

    { titulo:"🚀 ¡A trabajar!", cuerpo:[
      {proy:[{html:`<p class="gancho">Abrid el <b>dosier del grupo</b>: ahí están todas las misiones.</p>`}]},
      {html:`<p><a class="sa-btn" href="apuntes.html?ap=23" target="_blank" rel="noopener">📋 Dosier del grupo</a><a class="sa-btn" href="situacion.html" target="_blank" rel="noopener" style="background:#15803d">🧮 Calculadora y tabla de la cesta</a></p>`},
      {estudio:[
        {html:R`<h2>📋 Dosier del grupo</h2>
        <p>Todo se hace <b>en grupo</b>, en clase y en casa. Escribid siempre la operación: así sabéis de dónde sale cada número.</p>

        <div class="mision"><h4>🔥 Calentamiento (sesión 1): resolvedlas entre todos</h4>
        <div class="sa-tarjetas">
          <div class="mision"><b>🍪 Galletas</b>: 24 g de azúcares por cada 100 g y la ración es de 30 g. ¿Qué % de azúcar tienen? ¿Qué color del semáforo? ¿Cuántos terrones hay en una ración?
            <details><summary>Comprobad</summary>24 % → 🔴. Ración: $30 \cdot 0,24 = 7,2$ g → $7,2 : 4 = 1,8$ terrones.</details></div>
          <div class="mision"><b>🥛 Yogur</b> natural de 125 g con un 4,5 % de azúcares. ¿Cuánto azúcar tiene? ¿Qué % del azúcar del día (90 g) es?
            <details><summary>Comprobad</summary>$125 \cdot 0,045 \approx 5,6$ g → $5,625 : 90 = 0,0625$ → 6,25 %.</details></div>
          <div class="mision"><b>🍫 Crema de cacao</b>: 56 g de azúcares por 100 g y la ración es de 15 g. ¿Qué % del azúcar del día tomas en una ración?
            <details><summary>Comprobad</summary>$15 \cdot 0,56 = 8,4$ g → $8,4 : 90 \approx 0,093$ → 9,3 %.</details></div>
          <div class="mision"><b>🍟 Patatas fritas</b>: una bolsa de 40 g tiene 0,56 g de sal. ¿Qué % de sal tienen? ¿Qué color?
            <details><summary>Comprobad</summary>$I_V = 0,56 : 40 = 0,014$ → 1,4 % → 🟡 (muy cerca del rojo).</details></div>
        </div></div>

        <div class="mision"><h4>🕵️ Misión 1: los datos (sesión 2)</h4><ul class="check">
          <li>Cada uno copia sus 3 etiquetas en la calculadora: los datos «por 100 g» y la ración.</li>
          <li>El/la detective revisa que estén bien copiados.</li></ul></div>

        <div class="mision"><h4>🚦 Misión 2: semáforo y terrones</h4><ul class="check">
          <li>El % de azúcar, grasa y sal de cada producto y su color del semáforo.</li>
          <li>El azúcar de una ración: $C_F = \text{ración} \cdot I_V$, y cuántos terrones son (1 terrón ≈ 4 g).</li>
          <li>¿Qué producto tiene más azúcar <b>en %</b>? ¿Y en <b>una ración</b>? ¿Es el mismo? ¿Por qué?</li></ul></div>

        <div class="mision"><h4>📅 Misión 3: el % del día</h4><ul class="check">
          <li>Si comierais una ración de cada producto, ¿qué % del azúcar (90 g) y de la sal (6 g) del día tomaríais?</li>
          <li>🏠 En casa: terminad la tabla de la cesta repartiéndoos los productos.</li></ul></div>

        <div class="mision"><h4>⚖ Misión 4: ¿es equilibrada? (sesión 3)</h4><ul class="check">
          <li>Energía: 1 g de hidratos o de proteínas = 4 kcal; 1 g de grasa = 9 kcal.</li>
          <li>¿Qué % de la energía viene de hidratos, grasas y proteínas? Comparadlo con lo recomendado: hidratos 50 – 55 %, grasas 30 – 35 %, proteínas 10 – 15 %.</li></ul></div>

        <div class="mision"><h4>🔄 Misión 5: nuestro cambio saludable</h4><ul class="check">
          <li>Elegid el producto «más rojo» y buscad otro más sano que lo pueda sustituir.</li>
          <li>Calculad cuánto baja el azúcar: $I_V = \text{nuevo} : \text{antiguo}$ y la bajada $1 - I_V$.</li>
          <li>Ejemplo: cambiar 30 g de cereales (25 %) por 30 g de copos de avena (1 %): de 7,5 g a 0,3 g → $0,3 : 7,5 = 0,04$ → baja un 96 %.</li></ul></div>

        <div class="mision"><h4>🖼 Cartulina y 🎤 exposición (sesiones 3 y 4)</h4><ul class="check">
          <li>Tabla, gráfico de barras con colores, ¿equilibrada?, 3 conclusiones con números y vuestro cambio.</li>
          <li>Exposición de 2 minutos: habla todo el grupo. Al final votamos la cesta más sana de la clase.</li></ul></div>`},
        {nota:["<b>Saberes:</b> porcentajes (el % como decimal, $C_F = C_I \\cdot I_V$, qué % representa, variación), proporcionalidad directa (de 100 g a la ración), tablas y gráficos.",
               "<b>Conexiones:</b> Biología y Geología (nutrición), Educación Física (hábitos saludables) y ODS 3 (salud y bienestar).",
               "<b>Ideas:</b> cartulina A3; se pueden colgar en el pasillo. Las bebidas tienen otros límites del semáforo: mejor dejarlas fuera. Los valores del día son de un adulto medio: sirven para comparar, no son una dieta."], etq:"👩‍🏫 Para el profesor"}
      ]}
    ]}
  ]
});
})();

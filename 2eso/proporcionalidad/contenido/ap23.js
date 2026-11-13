/* 2.º ESO · Tema 3 · SITUACIÓN DE APRENDIZAJE «Organizamos un viaje»
   Basada en la SdA de la profesora (N1 y N2: autobús, bocadillos, recoger el albergue, parque de aventura, mapa,
   albergue con subida, rifa del curso). 11-nov: es TRABAJO EN GRUPO (en clase y en casa), sin ejercicios
   individuales ni corrección en clase. Cada grupo es una «agencia de viajes» que prepara el presupuesto.
   La presentación explica el reto; el «dosier del grupo» (modo estudiar) tiene las misiones. */
(function(){
const R = String.raw;
TEMA.registrar({
  num: "SA", pref: "SA", seccion: "Situación de aprendizaje",
  titulo: "Organizamos un viaje",

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">🚌 Dos días en la sierra: ¿cuánto nos cuesta el viaje… y cuánto paga cada uno?</p>`}
    ]},

    { titulo:"🎯 El reto: sois una agencia de viajes", cuerpo:[
      {prop:["2.º de ESO se va de excursión dos días a la sierra. Cada grupo es una <b>agencia de viajes</b> y tiene que preparar el <b>presupuesto</b>: autobús, comida, actividad y albergue. Hay que conseguir que salga barato y que <b>todo el mundo pague lo justo</b>."], etq:"La misión"},
      {cols:[
        [{nota:["Un <b>cartel de la agencia</b> con el plan del viaje y el presupuesto: cuánto paga cada alumno."], etq:"🖼 Producto final"}],
        [{nota:["Cada agencia lo <b>presenta en 2 minutos</b>. Al final votamos el mejor viaje."], etq:"🎤 Y al final"}]
      ]}
    ]},

    { titulo:"👥 Agencias de 4: cada uno, un papel", cuerpo:[
      {html:`<div class="sa-roles">
        <div><i>🧭</i><b>Coordinador/a</b><small>reparte las tareas y vigila el tiempo</small></div>
        <div><i>🧮</i><b>Contable</b><small>comprueba que todas las cuentas estén escritas y bien</small></div>
        <div><i>🎨</i><b>Diseñador/a</b><small>organiza el cartel</small></div>
        <div><i>🎤</i><b>Portavoz</b><small>prepara la presentación</small></div></div>`},
      {nota:["Todos calculáis y todos opináis: el papel solo dice de qué se encarga cada uno."]}
    ]},

    { titulo:"🗓 Cómo lo vamos a hacer", cuerpo:[
      {html:`<div class="sa-fases">
        <div><b>Sesión 1</b><span>Leemos los datos del viaje y hacemos las misiones 1 y 2: <b>autobús</b> y <b>comida</b>.</span></div>
        <div><b>Sesión 2</b><span>Misiones 3, 4 y 5: <b>actividad</b>, <b>albergue</b> y <b>el mapa</b>.</span></div>
        <div class="casa"><b>🏠 En casa</b><span>Misión 6: la <b>rifa</b> y el <b>presupuesto final</b> (nos repartimos las cuentas).</span></div>
        <div><b>Sesión 3</b><span>Hacemos el <b>cartel</b> de la agencia.</span></div>
        <div><b>Sesión 4</b><span><b>Presentaciones</b> de 2 minutos y votamos el mejor viaje.</span></div></div>`}
    ]},

    { titulo:"📋 Los datos del viaje", cuerpo:[
      {html:`<table class="t tprop"><tr><th>🚌 Autobús</th><td>500 € en total</td></tr><tr><th>🥪 Bocadillos</th><td>3 por 7,50 €, 2 por alumno</td></tr>
        <tr><th>🧗 Parque de aventura</th><td>18 € por persona, los grupos tienen un 20 % de descuento</td></tr><tr><th>🏨 Albergue</th><td>1200 € por el grupo, este año sube un 15 %</td></tr>
        <tr><th>🗺️ Mapa</th><td>escala 1 : 200 000, el albergue está a 7,5 cm del instituto</td></tr><tr><th>🎟️ Rifa del curso</th><td>360 €, apuntados: 2.º A 24, 2.º B 26 y 2.º C 22</td></tr></table>`}
    ]},

    { titulo:"🔎 Cómo se hace: el autobús", cuerpo:[
      {ej:{etq:"🚌 El ejemplo que haremos juntos", enun:"El autobús cuesta 500 € en total. ¿Cuánto paga cada uno si van 10 alumnos? ¿Y si van 20? ¿Son D o I?",
        pasos:["Si van 10: 500 : 10 = 50 €", "Si van 20: 500 : 20 = 25 €", "El doble de alumnos → la mitad cada uno: <b>I</b>"],
        res:"Si van 10, cada uno paga <b>50 €</b>; si van 20, <b>25 €</b>. Son <b>inversamente proporcionales</b>."}},
      {nota:["En cada misión preguntaos primero: si una se hace el doble, ¿la otra se hace el doble (D) o la mitad (I)?"]}
    ]},

    { titulo:"⭐ Cómo se evalúa", cuerpo:[
      {html:`<table class="t"><tr><th>Criterio</th><th>4 Excelente</th><th>3 Bien</th><th>2 Regular</th><th>1 Hay que mejorar</th></tr>
        <tr><td><b>D o I</b> (20 %)</td><td>Siempre bien decidido y explicado</td><td>Casi siempre</td><td>A veces</td><td>No se explica</td></tr>
        <tr><td><b>Cuentas</b> (40 %)</td><td>Todas bien y con la operación escrita</td><td>Algún error pequeño</td><td>Varios errores</td><td>Sin operaciones</td></tr>
        <tr><td><b>Cartel</b> (20 %)</td><td>Claro, ordenado y con el presupuesto por alumno</td><td>Completo pero poco claro</td><td>Incompleto</td><td>No hay cartel</td></tr>
        <tr><td><b>Presentación y equipo</b> (20 %)</td><td>Hablan todos y se explican bien</td><td>Hablan casi todos</td><td>Lee uno solo</td><td>No presentan</td></tr></table>`}
    ]},

    { titulo:"🚀 ¡A trabajar!", cuerpo:[
      {proy:[{html:`<p class="gancho">Abrid el <b>dosier de la agencia</b>: ahí están todas las misiones.</p>`}]},
      {html:`<p><a class="sa-btn" href="apuntes.html?ap=23" target="_blank" rel="noopener">📋 Dosier de la agencia</a></p>`},
      {estudio:[
        {html:R`<h2>📋 Dosier de la agencia</h2>
        <p>Todo se hace <b>en grupo</b>, en clase y en casa. En cada misión: ¿D o I?, la operación escrita y la respuesta con una frase. Haced las cuentas para <b>28 alumnos</b> (los que se apuntan de vuestra clase).</p>

        <div class="mision"><h4>🚌 Misión 1: el autobús</h4><ul class="check">
          <li>El autobús cuesta 500 € en total. ¿Cuánto paga cada uno si van 10, 20, 25 y 28 alumnos? Haced una tabla.</li>
          <li>¿Son D o I? ¿Qué número se mantiene siempre?</li></ul>
          <details><summary>Comprobad</summary>50 €, 25 €, 20 € y unos 17,86 €. Son I: el producto (500 €) es siempre el mismo.</details></div>

        <div class="mision"><h4>🥪 Misión 2: la comida</h4><ul class="check">
          <li>3 bocadillos cuestan 7,50 €. Cada alumno quiere 2. ¿Cuánto cuestan los bocadillos de los 28?</li>
          <li>¿Cuánto paga cada alumno por la comida?</li></ul>
          <details><summary>Comprobad</summary>56 bocadillos; 1 bocadillo = 2,50 € → 140 € en total, 5 € cada alumno. Es D.</details></div>

        <div class="mision"><h4>🧗 Misión 3: la actividad</h4><ul class="check">
          <li>El parque de aventura cuesta 18 € por persona y a los grupos les hacen un 20 % de descuento. ¿Cuánto paga cada alumno? ¿Y los 28 juntos?</li></ul>
          <details><summary>Comprobad</summary>$I_V = 1 - 0,20 = 0,80$ → $18 \cdot 0,80 = 14,40$ € cada uno; 403,20 € entre todos.</details></div>

        <div class="mision"><h4>🏨 Misión 4: el albergue</h4><ul class="check">
          <li>El albergue cobraba 1200 € por el grupo y este año sube un 15 %. ¿Cuánto cuesta ahora?</li>
          <li>¿Cuánto paga cada uno si van 28? ¿Y si van 30? ¿D o I?</li></ul>
          <details><summary>Comprobad</summary>$I_V = 1 + 0,15 = 1,15$ → $1200 \cdot 1,15 = 1380$ €. Con 28, unos 49,29 €; con 30, 46 €. Es I.</details></div>

        <div class="mision"><h4>🗺️ Misión 5: ¿a cuántos km está?</h4><ul class="check">
          <li>En el mapa (escala 1 : 200 000) el albergue está a 7,5 cm del instituto. ¿A cuántos km está de verdad?</li>
          <li>Buscad en el mapa otro sitio que os guste visitar cerca y calculad su distancia.</li></ul>
          <details><summary>Comprobad</summary>$7,5 \cdot 200\,000 = 1\,500\,000$ cm = 15 km.</details></div>

        <div class="mision"><h4>🎟️ Misión 6 (🏠 en casa): la rifa y el presupuesto final</h4><ul class="check">
          <li>La rifa ha dado 360 € y se reparte entre los grupos de forma proporcional a los apuntados: 2.º A 24, 2.º B 26 y 2.º C 22. ¿Cuánto le toca a cada grupo?</li>
          <li>Sumad lo que paga cada alumno: autobús + comida + actividad + albergue. Restad lo que le toca de la rifa a cada alumno.</li>
          <li>Proponed una idea para que salga más barato (ir más alumnos, otra actividad…) y calculad cuánto se ahorra.</li></ul>
          <details><summary>Comprobad la rifa</summary>24 + 26 + 22 = 72 alumnos → 360 : 72 = 5 € por alumno: 2.º A 120 €, 2.º B 130 € y 2.º C 110 €.</details></div>

        <div class="mision"><h4>🖼 El cartel y 🎤 la presentación</h4><ul class="check">
          <li>Nombre y logo de la agencia, el plan de los dos días, la tabla del presupuesto y lo que paga cada alumno.</li>
          <li>Presentación de 2 minutos: habla toda la agencia. Al final votamos el mejor viaje.</li></ul></div>`},
        {nota:["<b>Saberes:</b> proporcionalidad directa e inversa, reducción a la unidad, porcentajes ($C_F = I_V \\cdot C_I$), escalas y repartos directos.",
               "<b>Basada</b> en la situación de aprendizaje de la profesora (niveles N1 y N2)."], etq:"👩‍🏫 Para el profesor"}
      ]}
    ]}
  ]
});
})();

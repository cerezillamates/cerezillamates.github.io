/* 3.º ESO · Estadística · SITUACIÓN DE APRENDIZAJE «Nuestro vídeo para el concurso (ODS 11)»
   De la página anterior de la profesora: concurso de vídeos de estadística (bases de la UC3M), ODS 11 (ciudades y
   comunidades sostenibles). El trabajo de la profe resuelto entero como modelo, los cuatro grupos, las sesiones,
   la rúbrica, la calculadora de los grupos (situacion.html) y la plantilla de Excel.
   Corregido: la propuesta del vídeo decía «los 4 del coche que viven cerca», pero cerca viven 2 de los 4 → 45 % a 55 %. */
(function(){
const F = EST.F;
const min = [5,7,8,10,10,12,12,12,15,15,18,20,20,22,25,25,28,30,32,34];
const tgr = EST.tabla(["Intervalo","$x_i$","$n_i$","$N_i$","$f_i$","%","$x_i \\cdot n_i$","$x_i^2 \\cdot n_i$"],
  [["[0, 10)",5,3,3,"0,15","15 %",15,75],["[10, 20)",15,8,11,"0,40","40 %",120,1800],["[20, 30)",25,6,17,"0,30","30 %",150,3750],["[30, 40)",35,3,20,"0,15","15 %",105,3675]],
  ["Total","",20,"","1","100 %",390,9300]);
const tdi = EST.tabla(["$x_i$","$n_i$","$N_i$","$f_i$","%","$x_i \\cdot n_i$","$x_i^2 \\cdot n_i$"],
  [[0,3,3,"0,15","15 %",0,0],[1,2,5,"0,10","10 %",2,2],[2,4,9,"0,20","20 %",8,16],[3,3,12,"0,15","15 %",9,27],[4,2,14,"0,10","10 %",8,32],[5,6,20,"0,30","30 %",30,150]],
  ["Total",20,"","1","100 %",57,227]);
const ttr = EST.tabla(["Transporte","$n_i$","$f_i$","%","ángulo"],
  [["A pie",9,"0,45","45 %","162°"],["Bus",5,"0,25","25 %","90°"],["Coche",4,"0,20","20 %","72°"],["Bici",2,"0,10","10 %","36°"]],
  ["Total",20,"1","100 %","360°"]);
const grupos = EST.tabla(["Grupo","Pregunta","Qué medís","Meta del ODS 11"],[
  ["1","¿Se puede ir al instituto andando?","Minutos de trayecto, días andando y medio de transporte","11.2: transporte accesible"],
  ["2","¿Cuánto más calienta el asfalto que la sombra?","Temperatura a la misma hora en 8–10 puntos, varios días","11.6 y 11.7: aire y zonas verdes"],
  ["3","¿Cuánta basura genera una clase en una semana?","Gramos al día de envases, papel, orgánico y resto","11.6: residuos"],
  ["4","¿Tenemos lo necesario a 10 minutos?","Bancos, papeleras, árboles, farolas fundidas y rampas en 10–15 calles","11.3 y 11.7: barrio accesible"]], null, "tw");
const rubrica = EST.tabla(["Se evalúa","Cuenta"],[
  ["Datos bien recogidos y explicados (cuántos, cómo y cuándo)","20 %"],["Tabla y gráficos, con la operación escrita","30 %"],
  ["Medidas bien calculadas <b>y</b> explicadas en el contexto","30 %"],["Conclusiones con números, propuesta y ODS 11","10 %"],["Vídeo: menos de 5 minutos y habla todo el grupo","10 %"]], null, "tw");
const guion = EST.tabla(["Minuto","Qué se ve y se dice"],[
  ["0:00 – 0:30","La pregunta y una imagen del pueblo"],["0:30 – 1:30","Cómo recogí los datos (que se vea)"],["1:30 – 3:00","Tabla y gráficos, uno a uno"],
  ["3:00 – 4:00","Las medidas y qué significan aquí"],["4:00 – 4:40","Las tres conclusiones con números"],["4:40 – 5:00","La propuesta + centro, localidad y equipo"]], null, "tw");

TEMA.registrar({
  num: "SA", pref: "SA", seccion: "Situación de aprendizaje",
  titulo: "Nuestro vídeo para el concurso (ODS 11)",
  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">¿Cómo es nuestro pueblo? Lo contamos con números en un vídeo de 5 minutos.</p>`}
    ]},
    { titulo:"🎯 La misión", cuerpo:[
      {def:["En <b>cuatro grupos</b>, recoged <b>datos de verdad</b> sobre nuestro pueblo y contad lo que habéis descubierto en un <b>vídeo de 5 minutos</b>. El tema de este año es el <b>ODS 11: ciudades y comunidades sostenibles</b>."], etq:"La misión"},
      {cols:[
        [{prop:["Os enseño mi trabajo hecho entero: los datos, todos los cálculos y el vídeo terminado. Vosotros haréis lo mismo con los vuestros."], etq:"👀 Primero, el mío"}],
        [{prop:["Un vídeo por grupo, en español, subido a YouTube como «Oculto». Habla todo el grupo."], etq:"🎤 Al final"}]
      ]},
      {html:`<p><a class="btn" href="https://www.uc3m.es/ss/Satellite/Secundaria/es/TextoDosColumnas/1371489591262/" target="_blank" rel="noopener">🏛 Bases del concurso (UC3M)</a></p>`}
    ]},
    { titulo:"📋 Mis datos", cuerpo:[
      {p:"Pregunté a <b>20 compañeros de 3.º</b> tres cosas:"},
      {html:EST.tabla(["Pregunta","Tipo","Respuestas (ordenadas)"],[
        ["⏱ Minutos hasta el instituto","continua",min.join(", ")],
        ["🚶 Días a la semana andando o en bici","discreta","0, 0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5"],
        ["🚌 Medio de transporte","cualitativa","a pie 9, bus 5, coche 4, bici 2"]], null, "tw")}
    ]},
    { titulo:"⏱ Los minutos: datos agrupados", cuerpo:[
      {ej:{etq:"✍️ Mis cálculos", enun:"Son muchos valores distintos: los agrupo de 10 en 10.",
        pasos:[tgr, "Media: $\\bar{x} = \\dfrac{390}{20} = 19,5$ min", "Varianza: $\\sigma^2 = \\dfrac{9300}{20} - 19,5^2 = 465 - 380,25 = 84,75$", "$\\sigma = \\sqrt{84,75} \\approx 9,21$ min y $CV = \\dfrac{9,21}{19,5} \\approx 0,47$",
               "Intervalo modal y mediano: [10, 20).", "Tardan menos de 20 minutos $3 + 8 = 11$ de 20: $\\dfrac{11}{20} \\cdot 100 = 55\\,\\%$"],
        res:"De media, 19,5 minutos; el 55 % tarda menos de 20."}},
      {html:EST.histo(["0","10","20","30","40"],[3,8,6,3],{poligono:true, titulo:"minutos hasta el instituto"})},
      {nota:["Sin agrupar, la media sale $\\dfrac{360}{20} = 18$ min: al agrupar hacemos como si todos valieran la marca de clase."]}
    ]},
    { titulo:"🚶 Los días andando: datos sin agrupar", cuerpo:[
      {ej:{etq:"✍️ Mis cálculos", enun:"Días a la semana que vienen andando o en bici.",
        pasos:[tdi, "$\\bar{x} = \\dfrac{57}{20} = 2,85$ días. $Mo = 5$.", "$Me$: lugares 10.º y 11.º → 3. $Q_1 = \\dfrac{1 + 2}{2} = 1,5$ y $Q_3 = 5$", "$\\sigma^2 = \\dfrac{227}{20} - 2,85^2 = 3,2275$ → $\\sigma \\approx 1,80$", "$CV = \\dfrac{1,80}{2,85} \\approx 0,63$: o vienen andando siempre o nunca."],
        res:"Media 2,85 días, mediana 3 y mucha dispersión."}},
      {cols:[[{html:EST.barras(["0","1","2","3","4","5"],[3,2,4,3,2,6],{titulo:"días andando"})}],[{html:EST.caja(0,1.5,3,5,5,{titulo:"días andando"})}]]}
    ]},
    { titulo:"🚌 El transporte: cualitativa", cuerpo:[
      {cols:[
        [{html:ttr}, {p:"Ángulo: $f_i \\cdot 360°$ → $0,45 \\cdot 360° = 162°$. Moda: a pie. No hay media ni mediana."}],
        [{html:EST.sectores(["A pie","Bus","Coche","Bici"],[9,5,4,2])}]
      ]}
    ]},
    { titulo:"🎬 Mi vídeo terminado", cuerpo:[
      {html:`<p><b>¿Se puede ir al insti andando? 🚶</b> Vídeo de la profe, 3.º ESO, ODS 11 (meta 11.2)</p>`},
      {cols:[
        [{prop:[{lista:["Más de la mitad (<b>55 %</b>) tarda menos de 20 minutos: el instituto está bien colocado.", "El <b>20 %</b> viene en coche, y la mitad de esos (2) vive a menos de 15 minutos.", "El CV de los días es <b>0,63</b>: o se viene andando siempre o nunca."]}], etq:"💬 Conclusiones"}],
        [{prop:["Un paso de peatones en la calle del polideportivo y aparcabicis en la puerta.", "Si esos 2 que vienen en coche y viven cerca vinieran andando, «a pie» pasaría del <b>45 %</b> al <b>55 %</b>."], etq:"🏙 Propuesta"}]
      ]}
    ]},
    { titulo:"⏱ Cómo repartí los 5 minutos", cuerpo:[ {html:guion} ]},
    { titulo:"🚀 ¡Ahora vosotros!", cuerpo:[
      {html:grupos},
      {html:EST.tabla(["Cuándo","Qué"],[["🏠 Antes","Cada grupo recoge sus datos fuera de clase. <b>Mínimo 30</b> por variable, apuntados en papel."],["Sesión 1","Los <b>cálculos</b>, como en mi ejemplo: tabla, medidas y gráficos. Con la calculadora y con Excel."],["Sesión 2","El <b>guion</b>: qué se dice y qué se ve en cada minuto."],["Sesión 3","<b>Grabamos</b> y montamos."]], null, "tw")}
    ]},
    { titulo:"🧮 Las herramientas", cuerpo:[
      {cols:[
        [{prop:["Escribís vuestros datos y salen la tabla, las medidas, los cuartiles y los gráficos.", `<a class="btn main" href="situacion.html">🧮 Abrir la calculadora</a>`], etq:"Calculadora de los grupos"}],
        [{prop:["Una hoja por grupo con todas las fórmulas puestas (cuartiles con nuestro método). Solo se escribe en las casillas amarillas.", `<a class="btn" href="Plantilla_datos_ODS11.xlsx" download>📥 Descargar la plantilla</a>`], etq:"Plantilla de Excel"}]
      ]}
    ]},
    { titulo:"📊 Cómo se evalúa", cuerpo:[ {html:rubrica} ]},
    { titulo:"👩‍🏫 Para el profesor", cuerpo:[
      {prop:[{lista:["<b>Saberes:</b> población y muestra, tipos de variable, tablas (datos sueltos y agrupados), gráficos, centralización, cuartiles y caja, dispersión (rango, σ y CV) y porcentajes.",
        "<b>Idea:</b> el ejemplo está resuelto entero como modelo; cada grupo repite los pasos con sus datos. Los grupos 2 y 3 necesitan termómetro y báscula de cocina, y permiso para salir o pesar en el centro.",
        "<b>Cuartiles:</b> método de clase, el de esta web, la calculadora de los grupos y la plantilla.",
        "<b>Conexiones:</b> Geografía (ciudad sostenible), Biología (residuos e islas de calor), Tecnología (edición de vídeo) y tutoría."]}], etq:"Notas"}
    ]}
  ]
});
})();

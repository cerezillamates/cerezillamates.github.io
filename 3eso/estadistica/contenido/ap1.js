/* 3.º ESO · Estadística · Apartado 1: Población, muestra y caracteres
   De la página anterior de la profesora (apartado «Población, muestra y caracteres» y sus fichas). */
(function(){
const arbol = `<div class="est-arbol">
  <div class="ea-q">¿Se responde con un <b>número</b>?</div>
  <div class="ea-ramas">
    <div class="ea-r c-rose"><span class="ea-no">NO</span><b>Cualitativo</b><small>se dice con palabras</small><i>color, deporte, marca</i></div>
    <div class="ea-r c-sky"><span class="ea-si">SÍ</span><b>Cuantitativo</b><small>¿se cuenta o se mide?</small>
      <div class="ea-sub"><div><span>se cuenta</span><b>Discreto</b><i>hermanos, goles</i></div><div><span>se mide</span><b>Continuo</b><i>altura, tiempo, peso</i></div></div></div>
  </div></div>`;
const cuatro = `<div class="est-4">
  <div><b>👥 Población</b><span>Todos los que nos interesan.</span><i>Los 600 alumnos del instituto.</i></div>
  <div><b>🙋 Muestra</b><span>La parte a la que preguntamos.</span><i>60 alumnos elegidos al azar.</i></div>
  <div><b>🧍 Individuo</b><span>Cada uno de ellos.</span><i>Un alumno.</i></div>
  <div><b>❓ Carácter</b><span>Lo que estudiamos (la variable).</span><i>Horas de sueño, deporte favorito…</i></div></div>`;

TEMA.registrar({
  num: 1,
  titulo: "Población, muestra y caracteres",
  videos: [
    {t:"Tipos de variables estadísticas", url:"https://www.youtube.com/watch?v=nCszHELuwxk"},
    {t:"Cualitativas, cuantitativas, discretas y continuas", url:"https://www.youtube.com/watch?v=Tb3sgUSd2SQ"}
  ],

  clase: [
    { nivel:"Aplicación", min:4,
      enun:"Clasifica cada carácter estadístico en cualitativo, cuantitativo discreto o cuantitativo continuo: <b>a)</b> El color del pelo <b>b)</b> El número de hermanos <b>c)</b> La altura <b>d)</b> El deporte favorito <b>e)</b> El tiempo que tardas en llegar al instituto <b>f)</b> Los goles en un partido",
      pasos:["<b>a)</b> El color del pelo: <b>cualitativo</b> (se responde con palabras)",
             "<b>b)</b> El número de hermanos: <b>cuantitativo discreto</b> (se cuenta: 0, 1, 2…)",
             "<b>c)</b> La altura: <b>cuantitativo continuo</b> (se mide: 1,62 m, 1,625 m…)",
             "<b>d)</b> El deporte favorito: <b>cualitativo</b>",
             "<b>e)</b> El tiempo hasta el instituto: <b>cuantitativo continuo</b> (se mide)",
             "<b>f)</b> Los goles en un partido: <b>cuantitativo discreto</b> (se cuentan)"],
      res:"Cualitativos: a) y d). Discretos: b) y f). Continuos: c) y e)." },
    { nivel:"Aplicación", min:4,
      enun:"Para saber cuántas horas duermen los 480 alumnos de un instituto, preguntamos a 60 alumnos elegidos al azar. <b>a)</b> ¿Cuál es la población? <b>b)</b> ¿Y la muestra? <b>c)</b> ¿Cuál es el carácter estadístico y de qué tipo es?",
      pasos:["<b>a)</b> Población: todos los que nos interesan → los <b>480 alumnos</b> del instituto.",
             "<b>b)</b> Muestra: la parte a la que preguntamos → los <b>60 alumnos</b> elegidos.",
             "<b>c)</b> Carácter: las horas que duermen. Se mide (7,5 h…): <b>cuantitativo continuo</b>."],
      res:"Población: los 480 alumnos. Muestra: los 60 alumnos elegidos. Carácter: horas de sueño, cuantitativo continuo." },
    { nivel:"Práctica", min:5,
      enun:"¿Es representativa la muestra? Responde sí o no y explica por qué. <b>a)</b> Para saber cuánto deporte hacen los jóvenes de Málaga, preguntamos a la salida de un gimnasio. <b>b)</b> Para saber la nota media del instituto, elegimos al azar 5 alumnos de cada clase. <b>c)</b> Para saber qué música escuchan los jóvenes, preguntamos solo a los de un concierto de rock. <b>d)</b> Para saber cuántos hermanos tienen los alumnos de 3.º, sorteamos 40 nombres de la lista de todos los grupos.",
      pasos:["<b>a)</b> <b>No</b>: solo salen personas que ya hacen deporte. La muestra tiene <b>sesgo</b>.",
             "<b>b)</b> <b>Sí</b>: hay alumnos de todos los cursos y elegidos al azar.",
             "<b>c)</b> <b>No</b>: a todos les gusta un tipo de música concreto.",
             "<b>d)</b> <b>Sí</b>: todos tienen la misma posibilidad de salir."],
      res:"Son representativas b) y d); a) y c) tienen sesgo." },
    { nivel:"Problema", min:5,
      enun:"Queremos saber qué opinan los vecinos del pueblo sobre el carril bici. <b>a)</b> ¿Por qué no preguntamos a todos? <b>b)</b> Propón una forma de elegir una muestra de 100 vecinos que sea representativa. <b>c)</b> Escribe un carácter cualitativo, uno discreto y uno continuo que podrías preguntarles.",
      pasos:["<b>a)</b> Son muchos: costaría mucho tiempo y dinero. Con una buena muestra basta.",
             "<b>b)</b> Por ejemplo: sorteo de 100 vecinos del padrón, o 10 al azar de cada barrio, con jóvenes y mayores.",
             "<b>c)</b> Cualitativo: ¿estás a favor o en contra? Discreto: ¿cuántas bicis hay en tu casa? Continuo: ¿cuántos kilómetros haces en bici a la semana?"],
      res:"Se pregunta a una muestra al azar y de todos los grupos; hay muchas respuestas válidas en c)." }
  ],

  casa: [
    { nivel:"Básico", enun:"Clasifica cada carácter: <b>a)</b> La marca de móvil <b>b)</b> El número de mascotas <b>c)</b> El peso de la mochila <b>d)</b> El medio de transporte <b>e)</b> Los mensajes que envías al día <b>f)</b> La temperatura a mediodía",
      pasos:["<b>a)</b> Cualitativo", "<b>b)</b> Cuantitativo discreto (se cuenta)", "<b>c)</b> Cuantitativo continuo (se mide)", "<b>d)</b> Cualitativo", "<b>e)</b> Cuantitativo discreto", "<b>f)</b> Cuantitativo continuo"],
      res:"Cualitativos: a) y d). Discretos: b) y e). Continuos: c) y f)." },
    { nivel:"Básico", enun:"Para conocer cuántos libros leen al año los 25 000 vecinos de un pueblo, el ayuntamiento pregunta a 500 vecinos. <b>a)</b> ¿Cuál es la población? <b>b)</b> ¿Y la muestra? <b>c)</b> ¿Cuál es el carácter y de qué tipo es?",
      pasos:["<b>a)</b> Población: los 25 000 vecinos.", "<b>b)</b> Muestra: los 500 vecinos a los que se pregunta.", "<b>c)</b> Carácter: número de libros al año → <b>cuantitativo discreto</b> (se cuenta)."],
      res:"Población: 25 000 vecinos. Muestra: 500 vecinos. Carácter: libros al año, cuantitativo discreto." },
    { nivel:"Consolidación", enun:"¿Es representativa la muestra? <b>a)</b> Para saber qué cenan las familias del barrio, preguntamos a las 22:00 en una pizzería. <b>b)</b> Para saber el tiempo de pantalla de los alumnos, sorteamos 3 alumnos de cada grupo. <b>c)</b> Para saber si a los alumnos les gusta el comedor, preguntamos solo a los que comen en él. <b>d)</b> Para conocer la altura media de los alumnos de 3.º, medimos solo al equipo de baloncesto.",
      pasos:["<b>a)</b> No: solo están los que cenan fuera esa noche.", "<b>b)</b> Sí: están todos los grupos y al azar.", "<b>c)</b> No: falta la opinión de los que no lo usan (quizá porque no les gusta).", "<b>d)</b> No: los jugadores de baloncesto suelen ser más altos."],
      res:"Solo es representativa la b)." },
    { nivel:"Consolidación", enun:"Clasifica: <b>a)</b> Los litros de agua que bebes al día <b>b)</b> El grupo de música favorito <b>c)</b> El número de libros leídos <b>d)</b> La talla de camiseta (S, M, L, XL) <b>e)</b> El número de calzado",
      pasos:["<b>a)</b> Cuantitativo continuo (se mide)", "<b>b)</b> Cualitativo", "<b>c)</b> Cuantitativo discreto", "<b>d)</b> Cualitativo, pero <b>ordenable</b> (S &lt; M &lt; L &lt; XL)", "<b>e)</b> Cuantitativo discreto: el calzado va de medio en medio número (38, 38,5, 39…), no puede tomar cualquier valor"],
      res:"a) continuo, b) cualitativo, c) discreto, d) cualitativo ordenable, e) discreto." },
    { nivel:"Para pensar", enun:"Una revista de videojuegos hace una encuesta en su web: «¿Cuántas horas juegas a la semana?». Sale una media de 15 horas y el titular dice: «Los jóvenes españoles juegan 15 horas a la semana». ¿Qué está mal?",
      pasos:["La muestra son los lectores de una revista de videojuegos: juegan más que el resto.", "Además, contesta quien quiere: no se ha elegido al azar.", "La muestra tiene sesgo: el resultado no vale para todos los jóvenes."],
      res:"La muestra <b>no es representativa</b>: el titular exagera." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">¿Cuántas horas duermen los alumnos del instituto? ¿Hay que preguntar a todos?</p>`}
    ]},
    { titulo:"Las palabras de la estadística", cuerpo:[
      {html:cuatro},
      {nota:["Si preguntamos a <b>todos</b> es un <b>censo</b>. Si son muchos, preguntamos a una <b>muestra</b>."]}
    ]},
    { titulo:"¿Qué tipo de carácter es?", cuerpo:[
      {html:arbol},
      {nota:["Algunos cualitativos se pueden <b>ordenar</b>: muy mal, mal, normal, bien, muy bien. Se llaman <b>cualitativos ordenables</b>."]}
    ]},
    { titulo:"Clasifica", cuerpo:[
      {ej:{enun:"El color de ojos, el número de hermanos, la altura, el deporte favorito, los goles de un partido y el peso de una mochila.",
        pasos:["Con palabras → <b>cualitativo</b>: el color de ojos y el deporte favorito.", "Se cuenta → <b>discreto</b>: los hermanos y los goles.", "Se mide → <b>continuo</b>: la altura y el peso de la mochila."],
        res:"2 cualitativos, 2 discretos y 2 continuos."}}
    ]},
    { titulo:"¿Es representativa la muestra?", cuerpo:[
      {def:["Una muestra es <b>representativa</b> si se parece a la población: elegida <b>al azar</b> y con gente de <b>todos los grupos</b>. Si no, decimos que tiene <b>sesgo</b>."], etq:"Representativa"},
      {cols:[
        [{ej:{etq:"❌ Con sesgo", enun:"Para saber cuánto deporte hacen los jóvenes, preguntamos a la salida de un gimnasio.", pasos:["Solo hay gente que ya hace deporte."], res:"<b>No</b> es representativa."}}],
        [{ej:{etq:"✅ Bien elegida", enun:"Elegimos al azar 5 alumnos de cada clase del instituto.", pasos:["Están todos los grupos y al azar."], res:"<b>Sí</b> es representativa."}}]
      ]}
    ]},
    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:["<b>Confundir población y muestra</b>: la muestra es solo la parte a la que preguntamos."], etq:"⚠️ Error 1"},
      {aviso:["<b>Llamar cuantitativo a lo que se escribe con números pero no es una cantidad</b>: el número de la camiseta o el código postal son cualitativos."], etq:"⚠️ Error 2"},
      {aviso:["<b>Decir discreto a todo lo que tiene números enteros</b>: la edad o la altura se miden, son continuas aunque las redondeemos."], etq:"⚠️ Error 3"}
    ]},
    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{lista:["Población: todos. Muestra: la parte a la que preguntamos. Individuo: cada uno.",
        "Cualitativo: palabras. Cuantitativo discreto: se cuenta. Cuantitativo continuo: se mide.",
        "La muestra debe ser al azar y de todos los grupos; si no, tiene sesgo."]}]},
      {estudio:[
        {comp:{q:"Preguntamos a 50 de los 400 alumnos. Los 50 son la…", opciones:["población","muestra"], ok:1, explic:"La muestra es la parte a la que preguntamos.", pista:"¿Son todos o solo una parte?"}},
        {comp:{q:"«El número de hermanos» es un carácter…", opciones:["cualitativo","cuantitativo discreto","cuantitativo continuo"], ok:1, explic:"Se cuenta: 0, 1, 2…", pista:"¿Se cuenta o se mide?"}},
        {comp:{q:"«El tiempo que tardas en ducharte» es un carácter…", opciones:["cualitativo","cuantitativo discreto","cuantitativo continuo"], ok:2, explic:"Se mide: puede valer 6,5 min, 6,25 min…", pista:"¿Se cuenta o se mide?"}}
      ]}
    ]}
  ]
});
})();

/* 3.º ESO · Estadística · REPASO PARA EL CONTROL
   Clase: MODELO DE CONTROL (10 puntos) con los ejercicios puntuados de «Preparar el control» de la página anterior.
   Casa: el resto de «Preparar el control»: un ejemplo de cada tipo de problema que puede salir (soluciones revisadas). */
(function(){
const F = EST.F;
function tf(xs, ns, acum){ const N = ns.reduce((a,b)=>a+b,0); let acc = 0;
  return EST.tabla(["$x_i$","$n_i$"].concat(acum?["$N_i$"]:[],["$f_i$","%"]), xs.map((x,i)=>{ acc += ns[i]; return [x, ns[i]].concat(acum?[acc]:[],[F(ns[i]/N,4), F(ns[i]/N*100,2)+" %"]); }), ["Total",N].concat(acum?[""]:[],["1","100 %"])); }
function tx2(xs, ns, cuad){ let S = 0, S2 = 0, acc = 0; const N = ns.reduce((a,b)=>a+b,0);
  return EST.tabla(["$x_i$","$n_i$","$N_i$","$x_i \\cdot n_i$"].concat(cuad?["$x_i^2 \\cdot n_i$"]:[]), xs.map((x,i)=>{ acc += ns[i]; S += x*ns[i]; S2 += x*x*ns[i]; return [F(x), ns[i], acc, F(x*ns[i])].concat(cuad?[F(x*x*ns[i])]:[]); }), ["Total",N,"",F(S)].concat(cuad?[F(S2)]:[])); }
function tg(e, ns, cuad){ let S = 0, S2 = 0, acc = 0; const N = ns.reduce((a,b)=>a+b,0);
  return EST.tabla(["Intervalo","$x_i$","$n_i$","$N_i$","$x_i \\cdot n_i$"].concat(cuad?["$x_i^2 \\cdot n_i$"]:[]), ns.map((n,i)=>{ const m = (e[i]+e[i+1])/2; acc += n; S += m*n; S2 += m*m*n; return [`[${F(e[i])}, ${F(e[i+1])})`, F(m), n, acc, F(m*n)].concat(cuad?[F(m*m*n)]:[]); }), ["Total","",N,"",F(S)].concat(cuad?[F(S2)]:[])); }

TEMA.registrar({
  num: "R", pref: "R", seccion: "Repaso para el control",
  titulo: "Repaso para el control",

  clase: [
    { nivel:"0,5 p", min:2,
      enun:"Clasifica cada carácter en cualitativo, cuantitativo discreto o cuantitativo continuo: <b>a)</b> El grupo de música favorito <b>b)</b> El número de primos <b>c)</b> El tiempo de una carrera de 100 m <b>d)</b> La talla de camiseta (S, M, L)",
      pasos:["<b>a)</b> Cualitativo", "<b>b)</b> Cuantitativo discreto (se cuenta)", "<b>c)</b> Cuantitativo continuo (se mide)", "<b>d)</b> Cualitativo (ordenable)"],
      res:"a) y d) cualitativos, b) discreto, c) continuo." },
    { nivel:"1,5 p", min:7,
      enun:"Veces que 20 alumnos han ido a la biblioteca este mes: 2, 0, 1, 3, 1, 2, 2, 0, 1, 1, 4, 2, 1, 3, 2, 0, 1, 2, 1, 1. Haz la tabla de frecuencias (absoluta, acumulada, relativa y porcentaje).",
      pasos:["Cuento cada valor. $N = 20$.", tf([0,1,2,3,4],[3,8,6,2,1],true), "Compruebo: las $n_i$ suman 20 y los % suman 100 ✓"],
      res:"La tabla de arriba. Lo más frecuente es ir 1 vez (40 %)." },
    { nivel:"1 p", min:4,
      enun:"Asignatura favorita de 36 alumnos: Educación Física 15, Matemáticas 9, Música 7 e Inglés 5. ¿Cuántos grados tiene cada sector?",
      pasos:["$360° : 36 = 10°$ por persona", "E. Física $15 \\cdot 10° = 150°$, Matemáticas 90°, Música 70° e Inglés 50°", EST.sectores(["E. Física","Matemáticas","Música","Inglés"],[15,9,7,5])],
      res:"150°, 90°, 70° y 50°." },
    { nivel:"1 p", min:4,
      enun:"Minutos que tarda Carlos en llegar al instituto durante una semana: 12, 15, 10, 12, 16. Calcula la media, la mediana, la moda y el rango.",
      pasos:["$\\bar{x} = \\dfrac{65}{5} = 13$ min", "Ordeno: 10, 12, 12, 15, 16 → $Me = 12$", "$Mo = 12$", "Rango: $16 - 10 = 6$"],
      res:"Media 13 min, mediana 12, moda 12 y rango 6." },
    { nivel:"1,5 p", min:5,
      enun:"Número de hermanos de los alumnos de una clase: 0 (4 alumnos), 1 (10), 2 (8), 3 (3). Calcula la media, la mediana y la moda.",
      pasos:[tx2([0,1,2,3],[4,10,8,3]), "$\\bar{x} = \\dfrac{35}{25} = 1,4$", "$Me$: $25 \\cdot 0,5 = 12,5$ → lugar 13. La $N_i$ pasa de 4 a 14 en el 1 → $Me = 1$", "$Mo = 1$"],
      res:"Media 1,4, mediana 1 y moda 1." },
    { nivel:"1,5 p", min:6,
      enun:"Pesos (en kg) de 40 alumnos de 3.º: [40, 45) 6, [45, 50) 12, [50, 55) 14, [55, 60) 6 y [60, 65) 2. Calcula las marcas de clase, la media, el intervalo modal y el intervalo mediano.",
      pasos:[tg([40,45,50,55,60,65],[6,12,14,6,2]), "$\\bar{x} = \\dfrac{2030}{40} = 50,75$ kg", "Modal: [50, 55)", "$\\dfrac{N}{2} = 20$: la $N_i$ pasa de 18 a 32 en [50, 55)"],
      res:"Media 50,75 kg. Intervalo modal y mediano: [50, 55)." },
    { nivel:"1,5 p", min:6,
      enun:"Horas de pantalla al día de 14 alumnos: 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 6, 8. Calcula los cuartiles, el rango intercuartílico y dibuja el diagrama de caja.",
      pasos:["$Q_1$: $14 \\cdot 0,25 = 3,5$ → lugar 4 → 2", "$Me$: $14 \\cdot 0,5 = 7$ → media del 7.º y el 8.º → 3", "$Q_3$: $14 \\cdot 0,75 = 10,5$ → lugar 11 → 5", "Rango intercuartílico: $5 - 2 = 3$", EST.caja(1,2,3,5,8)],
      res:"$Q_1 = 2$, $Me = 3$, $Q_3 = 5$ y rango intercuartílico 3." },
    { nivel:"1,5 p", min:8,
      enun:"Goles por partido de un equipo: 0 (2 partidos), 1 (5), 2 (6), 3 (4), 4 (3). Calcula la media, el rango, la varianza, la desviación típica y el coeficiente de variación.",
      pasos:[tx2([0,1,2,3,4],[2,5,6,4,3],true), "$\\bar{x} = \\dfrac{41}{20} = 2,05$", "Rango: 4", "$\\sigma^2 = \\dfrac{113}{20} - 2,05^2 = 5,65 - 4,2025 = 1,4475$", "$\\sigma \\approx 1,20$", "$CV = \\dfrac{1,20}{2,05} \\approx 0,59$ → dispersión grande"],
      res:"$\\bar{x} = 2,05$, rango 4, $\\sigma^2 \\approx 1,45$, $\\sigma \\approx 1,20$ y CV ≈ 59 %." }
  ],

  casa: [
    { nivel:"Población y muestra", enun:"Para conocer el tiempo que dedican al estudio los 900 alumnos de un instituto, se pregunta a 90. ¿Población? ¿Muestra? ¿Carácter y tipo?",
      pasos:["Población: los 900 alumnos.", "Muestra: los 90 alumnos.", "Carácter: tiempo de estudio, cuantitativo continuo."], res:"900 alumnos, 90 alumnos y tiempo de estudio (continuo)." },
    { nivel:"¿Representativa?", enun:"<b>a)</b> Para saber el deporte favorito de los alumnos, preguntamos a los del equipo de fútbol. <b>b)</b> Sorteamos 4 alumnos de cada grupo para saber cuántas horas duermen. <b>c)</b> Para conocer el uso del transporte público, preguntamos en una parada de autobús.",
      pasos:["<b>a)</b> No: les gusta el fútbol más que a la media.", "<b>b)</b> Sí: todos los grupos y al azar.", "<b>c)</b> No: solo hay gente que usa el autobús."], res:"Solo la b)." },
    { nivel:"Tabla cualitativa", enun:"Color favorito de 20 alumnos: azul 8, rojo 5, verde 4 y negro 3. Haz la tabla.",
      pasos:[tf(["Azul","Rojo","Verde","Negro"],[8,5,4,3]), "No ordenable: no se acumula."], res:"Azul 40 %, rojo 25 %, verde 20 % y negro 15 %." },
    { nivel:"Tabla con huecos", enun:"Tablets por familia ($N = 30$). $x_i$: 0, 1, 2, 3. $n_i$: 6, ?, 6, ?. %: 20 %, 50 %, 20 %, 10 %.",
      pasos:["$x = 1$: el 50 % de 30 $= 0,5 \\cdot 30 = 15$", "$x = 3$: el 10 % de 30 $= 0,1 \\cdot 30 = 3$"], res:"Faltan 15 y 3." },
    { nivel:"Cualitativo ordenable", enun:"Opinión de 25 alumnos sobre el comedor: mala 4, regular 8, buena 9, muy buena 4. Haz la tabla con $N_i$.",
      pasos:[tf(["Mala","Regular","Buena","Muy buena"],[4,8,9,4],true)], res:"21 alumnos (84 %) opinan «buena» o peor." },
    { nivel:"Leer un diagrama de barras", enun:"Mascotas de los alumnos de una clase."+EST.barras(["0","1","2","3"],[6,8,5,1],{titulo:"mascotas"})+"Calcula $N$, la moda, la media y la mediana.",
      pasos:["$N = 6 + 8 + 5 + 1 = 20$", "$Mo = 1$", "$\\bar{x} = \\dfrac{0 + 8 + 10 + 3}{20} = \\dfrac{21}{20} = 1,05$", "$Me$: lugares 10.º y 11.º, los dos en el 1 → $Me = 1$"], res:"$N = 20$, moda 1, media 1,05 y mediana 1." },
    { nivel:"Gráfico más adecuado", enun:"<b>a)</b> Los minutos de deporte al día, en intervalos. <b>b)</b> Qué parte del presupuesto se gasta en cada cosa. <b>c)</b> Los turistas que llegan cada mes del año.",
      pasos:["<b>a)</b> Histograma", "<b>b)</b> Sectores", "<b>c)</b> Barras"], res:"Histograma, sectores y barras." },
    { nivel:"Centralización con N par", enun:"Mensajes que recibe Irene cada día durante 6 días: 20, 25, 18, 30, 25, 22. Calcula la media, la mediana, la moda y el rango.",
      pasos:["$\\bar{x} = \\dfrac{140}{6} \\approx 23,33$", "Ordeno: 18, 20, 22, 25, 25, 30 → $Me = \\dfrac{22 + 25}{2} = 23,5$", "$Mo = 25$", "Rango: 12"], res:"Media 23,33, mediana 23,5, moda 25 y rango 12." },
    { nivel:"El dato que falta", enun:"Javier tiene un 4, un 6 y un 5. ¿Qué nota necesita en el cuarto examen para tener de media un 5,5?",
      pasos:["Suma necesaria: $5,5 \\cdot 4 = 22$", "Tiene $4 + 6 + 5 = 15$", "Falta: $22 - 15 = 7$"], res:"Un 7." },
    { nivel:"Media ponderada", enun:"En Inglés el examen cuenta un 70 %, el cuaderno un 20 % y la lectura un 10 %. Mario saca un 6, un 8 y un 5. ¿Nota?",
      pasos:["$0,7 \\cdot 6 + 0,2 \\cdot 8 + 0,1 \\cdot 5 = 4,2 + 1,6 + 0,5 = 6,3$"], res:"Un 6,3." },
    { nivel:"Del histograma a la tabla", enun:"Horas de sueño de un grupo de alumnos."+EST.histo(["5","6","7","8","9","10"],[2,6,11,7,2],{titulo:"horas"})+"Construye la tabla con las marcas de clase. ¿Cuántos alumnos hay? ¿Intervalo modal?",
      pasos:["[5, 6) 5,5 → 2; [6, 7) 6,5 → 6; [7, 8) 7,5 → 11; [8, 9) 8,5 → 7; [9, 10) 9,5 → 2", "$N = 28$", "Modal: [7, 8)"], res:"28 alumnos; intervalo modal [7, 8)." },
    { nivel:"Comparar la regularidad", enun:"Tiempos (s) de dos nadadores en 50 m. Hugo: 32, 33, 31, 32, 32. Leo: 28, 36, 30, 35, 31. ¿Quién es más regular?",
      pasos:["Hugo: $\\bar{x} = 32$, $\\sigma \\approx 0,63$, $CV = \\dfrac{0,63}{32} \\approx 0,02$", "Leo: $\\bar{x} = 32$, $\\sigma \\approx 3,03$, $CV = \\dfrac{3,03}{32} \\approx 0,09$"], res:"<b>Hugo</b>: tiene el CV menor." },
    { nivel:"σ con datos agrupados", enun:"Duración (min) de 30 llamadas: [0, 4) 8, [4, 8) 10, [8, 12) 7, [12, 16) 3 y [16, 20) 2. Calcula la media, σ y el CV.",
      pasos:[tg([0,4,8,12,16,20],[8,10,7,3,2],true), "$\\bar{x} = \\dfrac{224}{30} \\approx 7,47$ min", "$\\sigma^2 = \\dfrac{2328}{30} - 7,4667^2 \\approx 21,85$", "$\\sigma \\approx 4,67$ min", "$CV = \\dfrac{4,67}{7,47} \\approx 0,63$ → dispersión grande"], res:"Media 7,47 min, σ ≈ 4,67 min y CV ≈ 63 %." },
    { nivel:"Sumar o multiplicar los datos", enun:"Notas de Ana: 5, 6, 7, 6. Calcula la media y σ. ¿Y si suma 2 a todas? ¿Y si las multiplica por 2?",
      pasos:["$\\bar{x} = 6$, $\\sigma = \\sqrt{0,5} \\approx 0,71$", "+2: $\\bar{x} = 8$ y $\\sigma \\approx 0,71$ (no cambia)", "·2: $\\bar{x} = 12$ y $\\sigma \\approx 1,41$ (se multiplica por 2)"], res:"Sumar no cambia σ; multiplicar sí." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">Un ejemplo de cada tipo de problema que puede salir en el control.</p>`}
    ]},
    { titulo:"¿Qué me piden? Busca tu caja", cuerpo:[
      {html:`<div class="cols" style="grid-template-columns:repeat(3,minmax(0,1fr));gap:.6em">
        <div class="b-prop"><span class="etq">📋 Población y muestra</span><p>todos / la parte. Cualitativo: palabras. Discreto: se cuenta. Continuo: se mide.</p></div>
        <div class="b-prop"><span class="etq">🧮 Tabla</span><p>$n_i$, $N_i$, $f_i = \\dfrac{n_i}{N}$ y % $= f_i \\cdot 100$</p></div>
        <div class="b-prop"><span class="etq">📊 Gráficos</span><p>ángulo $= \\dfrac{n_i}{N} \\cdot 360°$. Intervalos: histograma.</p></div>
        <div class="b-prop"><span class="etq">⚖ Media</span><p>$\\bar{x} = \\dfrac{\\sum x_i \\cdot n_i}{N}$. Ponderada: cada nota por su %.</p></div>
        <div class="b-prop"><span class="etq">🎯 Mediana y moda</span><p>ordeno; lugar $N \\cdot 0,5$. Moda: la que más se repite.</p></div>
        <div class="b-prop"><span class="etq">📦 Intervalos</span><p>$[a, b)$; marca $\\dfrac{a + b}{2}$; modal y mediano con $N_i$.</p></div>
        <div class="b-prop"><span class="etq">📐 Cuartiles</span><p>lugar $N \\cdot 0,25$; entero: media con el siguiente; si no, subo.</p></div>
        <div class="b-prop"><span class="etq">📏 Dispersión</span><p>$\\sigma^2 = \\dfrac{\\sum x_i^2 \\cdot n_i}{N} - \\bar{x}^2$; $\\sigma = \\sqrt{\\sigma^2}$</p></div>
        <div class="b-prop"><span class="etq">🏅 Regularidad</span><p>$CV = \\dfrac{\\sigma}{\\bar{x}}$; menos del 30 %: pequeña. Menor CV, más regular.</p></div></div>`}
    ]},
    { titulo:"✅ Antes de entregar el control", cuerpo:[
      {prop:[{lista:[
        "¿Las $n_i$ suman $N$? ¿Los % suman 100? ¿Los ángulos, 360°?",
        "¿He <b>ordenado</b> los datos antes de la mediana y los cuartiles?",
        "¿La media está entre el dato menor y el mayor?",
        "¿He escrito la tabla con las columnas $x_i \\cdot n_i$ y $x_i^2 \\cdot n_i$?",
        "¿He usado $\\sigma_x$ (no $s_x$) y he interpretado el CV?",
        "¿He dado la <b>solución</b> en una frase, con unidades?"
      ]}], etq:"Lista de comprobación"}
    ]}
  ]
});
})();

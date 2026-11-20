/* 3.º ESO · Estadística · Apartado 3: Gráficos estadísticos
   Barras (y polígono), sectores (el ángulo) e histograma. Gráficos dibujados con EST (graficos.js). */
(function(){
const elige = `<div class="est-fr">
  <div><b>Cualitativo</b><span>📊 barras o 🥧 sectores</span><i>deporte, color, transporte</i></div>
  <div><b>Cuantitativo discreto</b><span>📊 barras o 📈 polígono</span><i>hermanos, goles</i></div>
  <div><b>Continuo o en intervalos</b><span>▮▮ histograma (barras pegadas)</span><i>alturas, tiempos</i></div>
  <div><b>Parte de un todo</b><span>🥧 sectores</span><i>cómo se reparte el 100 %</i></div></div>`;
const tAng = (et, ni, g) => EST.tabla(["", "$n_i$", "cálculo", "ángulo"], et.map((e,i)=>[e, ni[i], `$${ni[i]} \\cdot ${g}°$`, `${ni[i]*g}°`]), ["Total", ni.reduce((a,b)=>a+b,0), "", "360°"]);

TEMA.registrar({
  num: 3,
  titulo: "Gráficos estadísticos",
  videos: [
    {t:"Tipos de gráficos estadísticos", url:"https://www.youtube.com/watch?v=9G4HPNVA5w4"},
    {t:"Barras, sectores y pictogramas", url:"https://www.youtube.com/watch?v=GpJBsZcxAfs"}
  ],

  clase: [
    { nivel:"Aplicación", min:5,
      enun:"Hemos preguntado a 40 alumnos por su comida favorita: pizza 14, pasta 10, paella 8, hamburguesa 6 y ensalada 2. ¿Cuántos grados le corresponden a cada sector en un diagrama de sectores?",
      pasos:["Reparto los 360° entre las 40 personas: $360° : 40 = 9°$ por persona.",
             tAng(["Pizza","Pasta","Paella","Hamburguesa","Ensalada"],[14,10,8,6,2],9),
             "Es lo mismo que $\\dfrac{n_i}{N} \\cdot 360°$: pizza $\\dfrac{14}{40} \\cdot 360° = 126°$",
             EST.sectores(["Pizza","Pasta","Paella","Hamburguesa","Ensalada"],[14,10,8,6,2])],
      res:"Pizza 126°, pasta 90°, paella 72°, hamburguesa 54° y ensalada 18°." },
    { nivel:"Aplicación", min:5,
      enun:"El diagrama de barras muestra los goles que ha marcado un equipo en cada partido de la liga."+EST.barras(["0","1","2","3","4"],[2,5,6,4,3],{titulo:"goles por partido"})+"<b>a)</b> ¿Cuántos partidos ha jugado? <b>b)</b> ¿Cuántos goles marca más veces? <b>c)</b> ¿En qué porcentaje de partidos marcó 2 goles o más?",
      pasos:["<b>a)</b> Sumo la altura de todas las barras: $2 + 5 + 6 + 4 + 3 = 20$ partidos.",
             "<b>b)</b> La barra más alta: <b>2 goles</b> (6 partidos).",
             "<b>c)</b> 2 o más: $6 + 4 + 3 = 13$ partidos.",
             "$\\dfrac{13}{20} \\cdot 100 = 65\\,\\%$"],
      res:"a) 20 partidos. b) 2 goles. c) En el 65 % de los partidos." },
    { nivel:"Práctica", min:4,
      enun:"¿Cuál es el gráfico más adecuado en cada caso? <b>a)</b> El tiempo que estudian 30 alumnos, en intervalos [0, 15), [15, 30), [30, 45)… <b>b)</b> Qué parte de la programación de la tele es cada tipo de programa. <b>c)</b> El número de bicicletas vendidas cada año de 2019 a 2024.",
      pasos:["<b>a)</b> <b>Histograma</b>: carácter continuo agrupado en intervalos.", "<b>b)</b> <b>Sectores</b>: queremos ver la parte de un todo.", "<b>c)</b> <b>Barras</b>: cada año es una barra y se ve cómo cambia."],
      res:"a) Histograma. b) Sectores. c) Barras." },
    { nivel:"Problema", min:6,
      enun:"Minutos de lectura a la semana de 40 alumnos: [0, 30) 4 alumnos, [30, 60) 10, [60, 90) 14, [90, 120) 8 y [120, 150) 4. Dibuja el histograma y el polígono de frecuencias. ¿Qué porcentaje lee 90 minutos o más?",
      pasos:["Barras <b>pegadas</b>, una por intervalo, con altura $n_i$. El polígono une los puntos de arriba, en el centro de cada barra.",
             EST.histo(["0","30","60","90","120","150"],[4,10,14,8,4],{poligono:true, titulo:"minutos de lectura"}),
             "90 o más: $8 + 4 = 12$ alumnos → $\\dfrac{12}{40} \\cdot 100 = 30\\,\\%$"],
      res:"Lee 90 minutos o más el <b>30 %</b> de los alumnos." }
  ],

  casa: [
    { nivel:"Básico", enun:"Estación favorita de 30 vecinos: verano 12, primavera 9, otoño 6 e invierno 3. ¿Cuántos grados tiene cada sector?",
      pasos:["$360° : 30 = 12°$ por persona.", tAng(["Verano","Primavera","Otoño","Invierno"],[12,9,6,3],12)],
      res:"Verano 144°, primavera 108°, otoño 72° e invierno 36°." },
    { nivel:"Básico", enun:"Horas de deporte a la semana de los alumnos de una clase."+EST.barras(["1","2","3","4","5"],[3,7,8,4,2],{titulo:"horas a la semana"})+"<b>a)</b> ¿Cuántos alumnos hay? <b>b)</b> ¿Cuál es el valor más frecuente? <b>c)</b> ¿Qué porcentaje hace 3 horas o más?",
      pasos:["<b>a)</b> $3 + 7 + 8 + 4 + 2 = 24$ alumnos", "<b>b)</b> La barra más alta: 3 horas", "<b>c)</b> 3 horas o más: $8 + 4 + 2 = 14$ → $\\dfrac{14}{24} \\cdot 100 \\approx 58,33\\,\\%$"],
      res:"a) 24 alumnos. b) 3 horas. c) Un 58,33 %." },
    { nivel:"Consolidación", enun:"¿Qué gráfico es el más adecuado? <b>a)</b> El reparto de los votos para delegado entre 4 candidatos. <b>b)</b> Las estaturas de 50 alumnos en intervalos [150, 155), [155, 160)… <b>c)</b> El número de hermanos de los alumnos de una clase.",
      pasos:["<b>a)</b> Sectores: parte de un todo.", "<b>b)</b> Histograma: continuo en intervalos.", "<b>c)</b> Barras: discreto, una barra para cada valor."],
      res:"a) Sectores. b) Histograma. c) Barras." },
    { nivel:"Consolidación", enun:"Peso de las mochilas de 30 alumnos: [2, 4) 4, [4, 6) 9, [6, 8) 12 y [8, 10) 5 (en kg). Dibuja el histograma.",
      pasos:["Barras pegadas; en el eje horizontal, los extremos de los intervalos.", EST.histo(["2","4","6","8","10"],[4,9,12,5],{titulo:"peso (kg)"})],
      res:"El intervalo con más alumnos es [6, 8)." },
    { nivel:"Problema", enun:"En un diagrama de sectores de 60 alumnos, el sector de «baloncesto» mide 84°. ¿Cuántos alumnos prefieren baloncesto?",
      pasos:["Cada alumno son $360° : 60 = 6°$.", "$84° : 6° = 14$ alumnos"],
      res:"Prefieren baloncesto <b>14 alumnos</b>." },
    { nivel:"Para pensar", enun:"Un periódico dibuja las ventas de dos años con barras de 900 y 1000 unidades, pero el eje vertical empieza en 850. ¿Qué impresión da? ¿Es correcto?",
      pasos:["Desde 850, una barra mide 50 y la otra 150: parece que se vende el triple.", "En realidad, 1000 es solo un 11 % más que 900.", "El eje de las barras debe empezar en 0."],
      res:"Engaña: exagera la diferencia. El eje debe empezar en 0." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">Una imagen vale más que mil datos. ¿Qué gráfico elijo?</p>`}
    ]},
    { titulo:"¿Qué gráfico elijo?", cuerpo:[ {html:elige} ]},
    { titulo:"Diagrama de barras y polígono", cuerpo:[
      {cols:[
        [{prop:["Una barra para cada valor, <b>separadas</b>. La altura es la $n_i$.", "El <b>polígono de frecuencias</b> une los extremos de las barras."], etq:"Barras"}],
        [{html:EST.barras(["0","1","2","3","4"],[2,5,6,4,3],{poligono:true, titulo:"goles por partido"})}]
      ], cols2:true}
    ]},
    { titulo:"Diagrama de sectores: el ángulo", cuerpo:[
      {formula:"\\text{ángulo} = \\dfrac{n_i}{N} \\cdot 360°"},
      {ej:{enun:"Comida favorita de 40 alumnos: pizza 14, pasta 10, paella 8, hamburguesa 6 y ensalada 2.",
        pasos:["Cada persona: $360° : 40 = 9°$", "Pizza: $14 \\cdot 9° = 126°$", EST.sectores(["Pizza","Pasta","Paella","Hamburguesa","Ensalada"],[14,10,8,6,2])],
        res:"Los ángulos suman 360°: se dibujan con el transportador."}}
    ]},
    { titulo:"Histograma", cuerpo:[
      {cols:[
        [{prop:["Para datos <b>continuos en intervalos</b>.", "Barras <b>pegadas</b>: cada una va de un extremo al otro del intervalo.", "El polígono une los centros de arriba (las marcas de clase)."], etq:"Histograma"}],
        [{html:EST.histo(["0","30","60","90","120","150"],[4,10,14,8,4],{poligono:true, titulo:"minutos de lectura"})}]
      ], cols2:true}
    ]},
    { titulo:"Leer un gráfico", cuerpo:[
      {ej:{enun:"Con el diagrama de barras de los goles: ¿cuántos partidos? ¿En qué % marcó 3 o más?",
        pasos:["$N$ = suma de las alturas: $2 + 5 + 6 + 4 + 3 = 20$", "3 o más: $4 + 3 = 7$ → $\\dfrac{7}{20} \\cdot 100 = 35\\,\\%$"],
        res:"20 partidos; marcó 3 o más en el 35 %."}}
    ]},
    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:["<b>Barras pegadas en un discreto</b> o separadas en un histograma."], etq:"⚠️ Error 1"},
      {aviso:["<b>Sectores con un carácter cuantitativo</b>: los sectores son para ver partes de un todo, sobre todo cualitativos."], etq:"⚠️ Error 2"},
      {aviso:["<b>Olvidar el título y el nombre de los ejes</b>."], etq:"⚠️ Error 3"}
    ]},
    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{lista:["Cualitativo: barras o sectores. Discreto: barras o polígono. Intervalos: histograma.",
        "Ángulo del sector: $\\dfrac{n_i}{N} \\cdot 360°$. Los ángulos suman 360°.",
        "Para leer un gráfico: la altura de cada barra es su $n_i$."]}]},
      {estudio:[
        {comp:{q:"10 de 40 alumnos prefieren el baloncesto. ¿Cuántos grados tiene su sector?", sol:90, unidad:"°", explic:"$\\dfrac{10}{40} \\cdot 360° = 90°$", pista:"La parte del total por 360°."}},
        {comp:{q:"Para el deporte favorito uso un diagrama de…", opciones:["sectores","histograma"], ok:0, explic:"Es cualitativo: barras o sectores.", pista:"El histograma es para intervalos."}},
        {comp:{q:"Las alturas de 30 alumnos en intervalos se dibujan con un…", opciones:["diagrama de barras","histograma"], ok:1, explic:"Continuo en intervalos: histograma.", pista:"¿Barras pegadas o separadas?"}}
      ]}
    ]}
  ]
});
})();

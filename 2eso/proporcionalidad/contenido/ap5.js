/* 2.º ESO · Tema 3 · Apartado 5: Repartos proporcionales
   DIRECTO (apuntes de la web): ➊ sumo las partes ➋ divido ➌ multiplico.
   INVERSO: ➊ doy la vuelta ➋ mismo denominador ➌ reparto directo con los numeradores.
   Otra forma, la de sus exámenes: k = a·x = b·y = c·z → x = k/a… y la suma da k.
   Problemas de sus exámenes: obreros y días, prima por horas extra, propinas, carrera del barrio, concurso, positivos. */
(function(){
const R = String.raw;
const COL = ["r","a","v","z"];
// filas: [nombre, nº de partes, valor de una parte, total]
const casillas = (filas, pie) => `<figure class="dib casillas reparto">${filas.map((f,k)=>`<div class="fila-c"><b>${f[0]}</b>${`<span class="c ${COL[k%4]}">${f[2]}</span>`.repeat(f[1])}<em>= ${f[3]}</em></div>`).join("")}${pie?`<figcaption>${pie}</figcaption>`:""}</figure>`;
const pasos3 = (a,b,c) => `<div class="tres-pasos"><div><span class="n3">➊</span>${a}</div><i>➜</i><div><span class="n3">➋</span>${b}</div><i>➜</i><div><span class="n3">➌</span>${c}</div></div>`;

TEMA.registrar({
  num: 5,
  titulo: "Repartos proporcionales",
  videos: [
    {t:"Reparto proporcional directo", url:"https://www.youtube.com/watch?v=jIBuPE60tVg"},
    {t:"Reparto proporcional inverso", url:"https://www.youtube.com/watch?v=yOoVgGdtSDw"}
  ],

  clase: [
    { nivel:"Aplicación", min:5,
      enun:"Tres hermanos compran una papeleta de la rifa del instituto: Marta pone 4 €, Pablo 6 € y Lola 10 €. ¡Les tocan 300 €! Repártelos de forma justa.",
      pasos:["Quien puso más, recibe más: reparto <b>directo</b>.", "➊ 4 + 6 + 10 = 20 partes", "➋ 300 : 20 = <b>15 €</b> cada parte",
             "➌ Marta: 4 · 15 = 60 € · Pablo: 6 · 15 = 90 € · Lola: 10 · 15 = 150 €", "Comprueba: 60 + 90 + 150 = 300 ✓"],
      res:"A Marta le tocan <b>60 €</b>, a Pablo <b>90 €</b> y a Lola <b>150 €</b>." },
    { nivel:"Aplicación", min:5,
      enun:"Un empresario reparte una prima de 640 € según las horas extra de la última semana: Juan hizo 18 horas, Pedro 10 y David 12. ¿Cuánto le da a cada uno?",
      pasos:["Más horas → más dinero: <b>directo</b>.", "➊ 18 + 10 + 12 = 40 partes", "➋ 640 : 40 = 16 € cada hora",
             "➌ Juan: 18 · 16 = 288 € · Pedro: 10 · 16 = 160 € · David: 12 · 16 = 192 €"],
      res:"Juan recibe <b>288 €</b>, Pedro <b>160 €</b> y David <b>192 €</b>." },
    { nivel:"Práctica", min:5,
      enun:"Tres camareros se reparten 444 € de propinas de forma proporcional a los días trabajados: el primero 9 días, el segundo 12 y el tercero 16. ¿Cuánto recibe cada uno?",
      pasos:["➊ 9 + 12 + 16 = 37 días", "➋ 444 : 37 = 12 € por día", "➌ 9 · 12 = 108 € · 12 · 12 = 144 € · 16 · 12 = 192 €"],
      res:"Los camareros reciben <b>108 €</b>, <b>144 €</b> y <b>192 €</b>." },
    { nivel:"Práctica", min:6,
      enun:"La profe de Lengua reparte 36 caramelos entre tres alumnos de forma inversamente proporcional a sus faltas de ortografía: 2, 3 y 6. ¿Cuántos le tocan a cada uno?",
      pasos:["Más faltas → menos caramelos: <b>inverso</b>.", R`➊ Doy la vuelta: $\dfrac12,\ \dfrac13,\ \dfrac16$`,
             R`➋ Mismo denominador (6): $\dfrac36,\ \dfrac26,\ \dfrac16$ → partes 3, 2 y 1`,
             "➌ 3 + 2 + 1 = 6 partes → 36 : 6 = 6 caramelos cada parte → 18, 12 y 6"],
      res:"A los alumnos les tocan <b>18</b>, <b>12</b> y <b>6 caramelos</b>." },
    { nivel:"Problema", min:7,
      enun:"En un concurso de preguntas, tres jugadores se reparten 2125 € de forma inversamente proporcional a sus fallos: Javi falló 6, María 8 y Antonio 16. ¿Cuánto se lleva cada uno?",
      pasos:[R`➊ $\dfrac16,\ \dfrac18,\ \dfrac{1}{16}$ ➋ con denominador 48: $\dfrac{8}{48},\ \dfrac{6}{48},\ \dfrac{3}{48}$`,
             "➌ 8 + 6 + 3 = 17 partes → 2125 : 17 = 125 € cada parte",
             "Javi: 8 · 125 = 1000 € · María: 6 · 125 = 750 € · Antonio: 3 · 125 = 375 €",
             R`Otra forma: $k = 6x = 8y = 16z$ → $\dfrac{k}{6} + \dfrac{k}{8} + \dfrac{k}{16} = 2125 \Rightarrow \dfrac{17k}{48} = 2125 \Rightarrow k = 6000$ → $x = 1000$ ✓`],
      res:"Javi se lleva <b>1000 €</b>, María <b>750 €</b> y Antonio <b>375 €</b>." },
    { nivel:"Reto", min:8,
      enun:"Tres camareros reparten 462,50 € de propinas de forma proporcional a los días trabajados. El primero cobró 112,50 € y los otros dos trabajaron 12 y 16 días. ¿Cuántos días trabajó el primero? ¿Cuánto cobraron los otros dos?",
      pasos:[R`Para los otros dos queda $462,50 - 112,50 = 350$ € por $12 + 16 = 28$ días`, R`Cada día se paga $350 : 28 = 12,50$ €`,
             R`El segundo: $12 \cdot 12,50 = 150$ € · el tercero: $16 \cdot 12,50 = 200$ €`, R`El primero: $112,50 : 12,50 = 9$ días`],
      res:"El primero trabajó <b>9 días</b> y los otros cobraron <b>150 €</b> y <b>200 €</b>." }
  ],

  casa: [
    { nivel:"Básico", enun:"Por un reportaje, tres fotógrafos cobran 6720 €. El primero hizo 14 fotos, el segundo 18 y el tercero 24. ¿Cuánto cobra cada uno?",
      pasos:["14 + 18 + 24 = 56 fotos → 6720 : 56 = 120 € cada foto", "14 · 120 = 1680 € · 18 · 120 = 2160 € · 24 · 120 = 2880 €"], res:"Los fotógrafos cobran <b>1680 €</b>, <b>2160 €</b> y <b>2880 €</b>." },
    { nivel:"Básico", enun:"Tres amigos compran un paquete de 500 sellos por 250 €. Uno se queda 200 sellos, otro 160 y el tercero el resto. ¿Cuánto debe pagar cada uno?",
      pasos:["El tercero: 500 − 200 − 160 = 140 sellos", "250 : 500 = 0,50 € cada sello", "200 · 0,50 = 100 € · 160 · 0,50 = 80 € · 140 · 0,50 = 70 €"], res:"Deben pagar <b>100 €</b>, <b>80 €</b> y <b>70 €</b>." },
    { nivel:"Consolidación", enun:"Tres socias montan un puesto de limonada en las fiestas poniendo 15 €, 25 € y 40 €. Ganan 120 €. ¿Cuánto le toca a cada una?",
      pasos:["15 + 25 + 40 = 80 partes → 120 : 80 = 1,50 €", "15 · 1,50 = 22,50 € · 25 · 1,50 = 37,50 € · 40 · 1,50 = 60 €"], res:"A las socias les tocan <b>22,50 €</b>, <b>37,50 €</b> y <b>60 €</b>." },
    { nivel:"Consolidación", enun:"En una carrera de coches, el primero tardó 6 minutos, el segundo 10 y el tercero 15. Reparten 3100 € de forma inversamente proporcional a los tiempos. ¿Cuánto le toca a cada uno?",
      pasos:[R`$\dfrac16,\ \dfrac{1}{10},\ \dfrac{1}{15}$ → con denominador 30: $\dfrac{5}{30},\ \dfrac{3}{30},\ \dfrac{2}{30}$`, "5 + 3 + 2 = 10 partes → 3100 : 10 = 310 €", "5 · 310 = 1550 € · 3 · 310 = 930 € · 2 · 310 = 620 €"], res:"Al primero le tocan <b>1550 €</b>, al segundo <b>930 €</b> y al tercero <b>620 €</b>." },
    { nivel:"Consolidación", enun:"Un premio de 5900 € se reparte entre los tres primeros de una carrera de forma inversamente proporcional a sus tiempos: 20, 24 y 32 minutos. ¿Cuánto recibe cada uno?",
      pasos:[R`Con denominador 480: $\dfrac{24}{480},\ \dfrac{20}{480},\ \dfrac{15}{480}$`, "24 + 20 + 15 = 59 partes → 5900 : 59 = 100 €", "2400 €, 2000 € y 1500 €"], res:"Reciben <b>2400 €</b>, <b>2000 €</b> y <b>1500 €</b>." },
    { nivel:"Problema", enun:"Una abuela reparte dinero entre sus tres nietos de forma directamente proporcional a sus edades: 8, 4 y 3 años. Al mayor le tocan 800 €. ¿Cuánto les toca a los otros dos? ¿Cuánto repartió?",
      pasos:["El mayor tiene 8 partes: 800 : 8 = 100 € cada parte", "4 · 100 = 400 € · 3 · 100 = 300 €", "Total: 800 + 400 + 300 = 1500 €"], res:"A los otros nietos les tocan <b>400 €</b> y <b>300 €</b>. La abuela repartió <b>1500 €</b>." },
    { nivel:"Para pensar", enun:"Un abuelo reparte dinero entre Lucas, Vera y Hugo de forma inversamente proporcional a sus suspensos: 4, 6 y 12. Entre Lucas y Vera se han llevado 20 €. ¿Cuánto se llevó Hugo? ¿Cuánto repartió el abuelo?",
      pasos:[R`$\dfrac14,\ \dfrac16,\ \dfrac{1}{12}$ → con denominador 12: partes 3, 2 y 1`, "Lucas y Vera tienen 3 + 2 = 5 partes = 20 € → cada parte 4 €",
             "Hugo: 1 · 4 = 4 € · Lucas 12 €, Vera 8 €", "Total: 6 partes · 4 = 24 €"], res:"Hugo se llevó <b>4 €</b> y el abuelo repartió <b>24 €</b>." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">¿Cómo se reparte un premio de forma justa?</p>`}
    ]},

    { titulo:"Repartir de forma justa", cuerpo:[
      {ej:{etq:"🎟️ La papeleta", enun:"Ana pone 2 €, Bea 3 € y Carlos 5 € para una papeleta. Les tocan 100 €. ¿Es justo darles 33,33 € a cada uno?",
        pasos:["No: Carlos puso más que nadie.", "Lo justo es que <b>quien pone más, reciba más</b>, en la misma proporción.", "Han puesto 10 € en total: cada euro puesto se convierte en 10 €."],
        res:"Lo justo es darle <b>20 €</b> a Ana, <b>30 €</b> a Bea y <b>50 €</b> a Carlos."}}
    ]},

    { titulo:"Reparto directamente proporcional", cuerpo:[
      {html:pasos3("<b>Sumo</b> las partes","<b>Divido</b> el total entre las partes","<b>Multiplico</b> por las partes de cada uno")},
      {ej:{enun:"Reparte 840 € de forma directamente proporcional a 2, 5 y 7.",
        pasos:["➊ 2 + 5 + 7 = 14 partes", "➋ 840 : 14 = 60 € cada parte", "➌ 2 · 60 = 120 € · 5 · 60 = 300 € · 7 · 60 = 420 €"],
        res:"Las partes son <b>120 €</b>, <b>300 €</b> y <b>420 €</b> (suman 840 ✓)."}},
      {html:casillas([["A",2,60,"120 €"],["B",5,60,"300 €"],["C",7,60,"420 €"]],"Cada casilla es una parte de 60 €")}
    ]},

    { titulo:"Problema de examen: los obreros", cuerpo:[
      {ej:{etq:"👷 Problema de examen", enun:"Tres obreros trabajan 15, 8 y 5 días, respectivamente, y reciben en total 4200 €. ¿Cuánto dinero le corresponde a cada uno?",
        pasos:["Más días → más dinero: <b>directo</b>.", "➊ 15 + 8 + 5 = 28 días", "➋ 4200 : 28 = 150 € por día",
               "➌ 15 · 150 = 2250 € · 8 · 150 = 1200 € · 5 · 150 = 750 €"],
        res:"Les corresponden <b>2250 €</b>, <b>1200 €</b> y <b>750 €</b>."}},
      {nota:["La constante (150 € por día) es <b>lo que vale una parte</b>: $k = \\dfrac{4200}{28}$."]}
    ]},

    { titulo:"Cuando sabemos lo que le toca a uno", cuerpo:[
      {ej:{enun:"Un premio se reparte de forma directa a 2, 3 y 5. Al segundo le tocan 360 €. ¿Cuánto era el premio? ¿Cuánto les toca a los demás?",
        pasos:["El segundo tiene 3 partes: 360 : 3 = 120 € cada parte", "Primero: 2 · 120 = 240 € · tercero: 5 · 120 = 600 €", "Premio: (2 + 3 + 5) · 120 = 1200 €"],
        res:"El premio era de <b>1200 €</b>: al primero le tocan <b>240 €</b> y al tercero <b>600 €</b>."}},
      {truco:["Si sabes lo de uno, divide entre <b>sus</b> partes: ya tienes lo que vale una parte."]}
    ]},

    { titulo:"Reparto inversamente proporcional", cuerpo:[
      {def:["<b>Quien tiene más, recibe menos</b>: más faltas, más tiempo en una carrera, más fallos, más lejos…"], etq:"Reparto inverso"},
      {html:pasos3("<b>Doy la vuelta</b> a los números: $\\dfrac1a,\\ \\dfrac1b,\\ \\dfrac1c$","Los pongo con el <b>mismo denominador</b>","<b>Reparto directo</b> con los numeradores")},
      {ej:{enun:"Reparte 1950 € de forma inversamente proporcional a 2, 3 y 4.",
        pasos:[R`➊ $\dfrac12,\ \dfrac13,\ \dfrac14$ ➋ con denominador 12: $\dfrac{6}{12},\ \dfrac{4}{12},\ \dfrac{3}{12}$`, "➌ Reparto directo a 6, 4 y 3: 13 partes → 1950 : 13 = 150 €", "6 · 150 = 900 € · 4 · 150 = 600 € · 3 · 150 = 450 €"],
        res:"Las partes son <b>900 €</b>, <b>600 €</b> y <b>450 €</b>: el que tiene 2 recibe más."}}
    ]},

    { titulo:"Problema de examen: la carrera del barrio", cuerpo:[
      {ej:{etq:"🏃 Problema de examen", enun:"En una carrera de mi barrio, el primero tardó media hora, el segundo 45 minutos y el tercero hora y media. El premio es de 30 € en total. ¿Cómo lo repartimos?",
        pasos:["Quien tarda menos debe ganar más: <b>inverso</b>. Tiempos en minutos: 30, 45 y 90.",
               R`Le damos la vuelta: $\dfrac{1}{30},\ \dfrac{1}{45},\ \dfrac{1}{90}$ → mismo denominador: $\dfrac{3}{90},\ \dfrac{2}{90},\ \dfrac{1}{90}$`,
               "Reparto directo a 3, 2 y 1: 3 + 2 + 1 = 6 partes → 30 : 6 = 5 € cada parte",
               "Primero 3 · 5 = 15 €, segundo 2 · 5 = 10 € y tercero 1 · 5 = 5 €"],
        res:"El primero recibe <b>15 €</b>, el segundo <b>10 €</b> y el tercero <b>5 €</b>."}}
    ]},

    { titulo:"¿Directo o inverso?", cuerpo:[
      {cols:[
        [{nota:["Horas trabajadas", "Dinero que puso cada uno", "Fotos que hizo cada uno", "Días trabajados"], etq:"😀 DIRECTO: más → más"}],
        [{nota:["Faltas o retrasos", "Tiempo en una carrera", "Fallos en un concurso", "Distancia a la que vive"], etq:"🙃 INVERSO: más → menos"}]
      ]},
      {aviso:["Si un enunciado dice «proporcional al tiempo» en una carrera, piensa: ¿es justo que el que tarda <b>más</b> gane más? No → es <b>inverso</b>."]}
    ]},

    { titulo:"🪄 Trucos para ir más rápido", cuerpo:[
      {truco:["<b>Comprueba siempre</b>: lo que le toca a cada uno tiene que sumar el total."], etq:"🪄 Truco 1"},
      {truco:["<b>En el inverso</b>, el que tiene el número más pequeño se lleva más. Si te sale al revés, revisa."], etq:"🪄 Truco 2"},
      {truco:["<b>Haz un dibujo</b> con casillas: cada casilla es una parte. Se ve enseguida."], etq:"🪄 Truco 3"}
    ]},

    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:["<b>Repartir a partes iguales</b> cuando no lo es."], etq:"⚠️ Error 1"},
      {aviso:["<b>En el inverso, repartir directamente</b> a 2, 3 y 4: ¡el que tiene 4 faltas se llevaría más!"], etq:"⚠️ Error 2"},
      {aviso:["<b>Mezclar unidades</b>: media hora y 45 minutos → pásalo todo a minutos."], etq:"⚠️ Error 3"}
    ]},

    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{lista:[
        "<b>Directo</b>: sumo las partes → divido → multiplico.",
        "<b>Inverso</b>: doy la vuelta → mismo denominador → reparto directo. (O: $k = a \\cdot x = b \\cdot y = c \\cdot z$.)",
        "Si sé lo de uno: divido entre sus partes y tengo lo que vale una parte.",
        "Comprueba que la suma da el total."
      ]}]},
      {estudio:[
        {comp:{q:"Reparte 90 € de forma directa a 1, 2 y 3. ¿Cuánto le toca al último?", sol:45, unidad:"€", explic:"6 partes → 15 € → 3 · 15 = 45 €", pista:"Suma las partes y divide."}},
        {comp:{q:"Reparte 60 € de forma inversa a 2 y 3. ¿Cuánto le toca al que tiene 2?", sol:36, unidad:"€", explic:"1/2 y 1/3 → 3/6 y 2/6 → partes 3 y 2 → 60 : 5 = 12 → 3 · 12 = 36 €", pista:"Da la vuelta a los números y ponlos con el mismo denominador."}}
      ]}
    ]}
  ]
});
})();

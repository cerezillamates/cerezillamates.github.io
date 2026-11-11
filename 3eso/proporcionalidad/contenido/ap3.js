/* 3.º ESO · Tema 3 · Apartado 3: Repartos proporcionales
   Método de la profesora: DIRECTO → ➊ sumo las partes ➋ divido ➌ multiplico.
   INVERSO → ➊ doy la vuelta ➋ mismo denominador ➌ reparto directo con los numeradores.
   Dibujo del reparto: cada casilla es una parte. */
(function(){
const R = String.raw;
const COL = ["r","a","v","z"];
// filas: [nombre, nº de partes, valor de una parte]
const casillas = (filas, pie) => `<figure class="dib casillas reparto">${filas.map((f,k)=>`<div class="fila-c"><b>${f[0]}</b>${`<span class="c ${COL[k%4]}">${f[2]}</span>`.repeat(f[1])}<em>= ${f[3]}</em></div>`).join("")}${pie?`<figcaption>${pie}</figcaption>`:""}</figure>`;
const pasos3 = (a,b,c) => `<div class="tres-pasos"><div><span class="n3">➊</span>${a}</div><i>➜</i><div><span class="n3">➋</span>${b}</div><i>➜</i><div><span class="n3">➌</span>${c}</div></div>`;

TEMA.registrar({
  num: 3,
  titulo: "Repartos proporcionales",
  videos: [
    {t:"Reparto proporcional directo", url:"https://www.youtube.com/watch?v=jIBuPE60tVg"},
    {t:"Reparto proporcional inverso", url:"https://www.youtube.com/watch?v=yOoVgGdtSDw"}
  ],

  clase: [
    { nivel:"Aplicación", min:5,
      enun:"Irene, Sara y Noa compran juntas un décimo de lotería de Navidad: Irene pone 5 €, Sara 7 € y Noa 8 €. ¡Les tocan 1000 €! Repártelos de forma justa.",
      pasos:["Quien puso más, recibe más: reparto <b>directo</b>.",
             "➊ Sumo las partes: 5 + 7 + 8 = 20 partes",
             "➋ Divido: 1000 : 20 = <b>50 €</b> cada parte",
             "➌ Multiplico: Irene 5 · 50 = 250 € · Sara 7 · 50 = 350 € · Noa 8 · 50 = 400 €",
             "Comprueba: 250 + 350 + 400 = 1000 € ✓"],
      res:"A Irene le tocan <b>250 €</b>, a Sara <b>350 €</b> y a Noa <b>400 €</b>." },
    { nivel:"Aplicación", min:5,
      enun:"Un grupo de música del instituto gana 840 € en un concurso. Lo reparten según las canciones que ha compuesto cada miembro: 2, 5 y 7 canciones. ¿Cuánto recibe cada uno?",
      pasos:["Más canciones → más dinero: <b>directo</b>.",
             "➊ 2 + 5 + 7 = 14 partes &nbsp;➋ 840 : 14 = 60 €",
             "➌ 2 · 60 = 120 € · 5 · 60 = 300 € · 7 · 60 = 420 €",
             "Comprueba: 120 + 300 + 420 = 840 ✓"],
      res:"Los miembros del grupo reciben <b>120 €</b>, <b>300 €</b> y <b>420 €</b>." },
    { nivel:"Práctica", min:6,
      enun:"Tres hermanos pasean al perro del vecino y se reparten lo que les paga según los días que lo ha sacado cada uno: 4, 6 y 10 días. Al pequeño, que lo sacó 4 días, le tocan 36 €. ¿Cuánto les toca a los otros? ¿Cuánto les pagó el vecino?",
      pasos:["Conozco lo que le toca a uno: <b>4 partes = 36 €</b>",
             "Una parte: 36 : 4 = <b>9 €</b>",
             "Los otros: 6 · 9 = 54 € y 10 · 9 = 90 €",
             "Total: 4 + 6 + 10 = 20 partes → 20 · 9 = 180 €"],
      res:"A los otros hermanos les tocan <b>54 €</b> y <b>90 €</b>. El vecino les pagó <b>180 €</b>." },
    { nivel:"Práctica", min:6,
      enun:"Una tienda reparte 390 € en vales de regalo entre tres empleados de forma inversamente proporcional a los días que han faltado: 2, 3 y 4 días. ¿Cuánto recibe cada uno?",
      pasos:["Quien falta más, recibe menos: reparto <b>inverso</b>.",
             R`➊ Doy la vuelta: $\dfrac{1}{2}, \dfrac{1}{3}, \dfrac{1}{4}$ &nbsp; ➋ Mismo denominador (m.c.m. = 12): $\dfrac{6}{12}, \dfrac{4}{12}, \dfrac{3}{12}$`,
             "➌ Reparto directo a 6, 4 y 3: 13 partes; 390 : 13 = 30 €",
             "6 · 30 = 180 € · 4 · 30 = 120 € · 3 · 30 = 90 € &nbsp;(180 + 120 + 90 = 390 ✓)"],
      res:"Los empleados reciben <b>180 €</b>, <b>120 €</b> y <b>90 €</b> en vales." },
    { nivel:"Problema", min:7,
      enun:"En Educación Física se reparten 27 balones entre tres equipos de forma inversamente proporcional a los minutos que tardaron en una carrera de relevos: 3, 4 y 6 minutos. ¿Cuántos balones recibe cada equipo?",
      pasos:["El más rápido (menos minutos) recibe más: <b>inverso</b>.",
             R`➊ $\dfrac{1}{3}, \dfrac{1}{4}, \dfrac{1}{6}$ &nbsp; ➋ m.c.m. = 12: $\dfrac{4}{12}, \dfrac{3}{12}, \dfrac{2}{12}$`,
             "➌ Reparto directo a 4, 3 y 2: 9 partes; 27 : 9 = 3 balones",
             "4 · 3 = 12 · 3 · 3 = 9 · 2 · 3 = 6 &nbsp;(12 + 9 + 6 = 27 ✓)"],
      res:"Los equipos reciben <b>12</b>, <b>9</b> y <b>6 balones</b>." },
    { nivel:"Reto", min:8,
      enun:"Álex, Bea y Carlos compraron un videojuego de 50 €: Álex puso 10 €, Bea 15 € y Carlos 25 €. Ya lo han terminado y lo venden de segunda mano por 30 €. ¿Cómo deben repartir los 30 € para que sea justo?",
      pasos:["Lo justo es repartir según lo que puso cada uno: <b>directo</b> a 10, 15 y 25.",
             "➊ 10 + 15 + 25 = 50 partes &nbsp;➋ 30 : 50 = 0,60 € cada parte",
             "➌ Álex 10 · 0,60 = 6 € · Bea 15 · 0,60 = 9 € · Carlos 25 · 0,60 = 15 €",
             "Atajo: recuperan el 60 % (30 de 50) de lo que puso cada uno."],
      res:"Álex debe recibir <b>6 €</b>, Bea <b>9 €</b> y Carlos <b>15 €</b>." }
  ],

  casa: [
    { nivel:"Básico",
      enun:"Tres amigos montan un puesto en el mercadillo solidario del instituto y recaudan 1350 €. Lo reparten entre tres ONG de forma directamente proporcional a las horas que trabajó cada amigo: 3, 4 y 8 horas. ¿Cuánto recibe cada ONG?",
      pasos:["➊ 3 + 4 + 8 = 15 partes &nbsp;➋ 1350 : 15 = 90 €", "➌ 3 · 90 = 270 € · 4 · 90 = 360 € · 8 · 90 = 720 €"],
      res:"Las ONG reciben <b>270 €</b>, <b>360 €</b> y <b>720 €</b>." },
    { nivel:"Básico",
      enun:"Una abuela reparte 780 € entre sus tres nietos de forma inversamente proporcional a sus edades: 2, 3 y 4 años (el pequeño recibe más). ¿Cuánto le toca a cada uno?",
      pasos:[R`➊ Doy la vuelta: $\dfrac{1}{2}, \dfrac{1}{3}, \dfrac{1}{4}$ ➋ con denominador 12: $\dfrac{6}{12}, \dfrac{4}{12}, \dfrac{3}{12}$`,
             "➌ 6 + 4 + 3 = 13 partes; 780 : 13 = 60 € → 360 €, 240 € y 180 €"],
      res:"Los nietos reciben <b>360 €</b>, <b>240 €</b> y <b>180 €</b>." },
    { nivel:"Consolidación",
      enun:"En la lotería de clase, tres amigos juegan 2 €, 3 € y 5 €. Al que puso 3 € le tocan 360 €. ¿Cuánto les toca a los otros? ¿Cuál era el premio?",
      pasos:["3 partes = 360 € → 1 parte = 120 €", "2 · 120 = 240 € y 5 · 120 = 600 €", "Premio: (2 + 3 + 5) · 120 = 1200 €"],
      res:"A los otros les tocan <b>240 €</b> y <b>600 €</b>. El premio era de <b>1200 €</b>." },
    { nivel:"Consolidación",
      enun:"Los ángulos de un triángulo son directamente proporcionales a 2, 3 y 4. ¿Cuánto mide cada ángulo? (Los tres ángulos de un triángulo suman 180°.)",
      pasos:["➊ 2 + 3 + 4 = 9 partes &nbsp;➋ 180 : 9 = 20°", "➌ 2 · 20 = 40° · 3 · 20 = 60° · 4 · 20 = 80°"],
      res:"Los ángulos miden <b>40°</b>, <b>60°</b> y <b>80°</b>." },
    { nivel:"Problema",
      enun:"Tres estudiantes comparten piso. La factura de la luz del trimestre es de 90 € y la reparten según los días que ha estado cada uno: 20, 25 y 30 días. ¿Cuánto paga cada uno?",
      pasos:["Más días → paga más: directo. ➊ 20 + 25 + 30 = 75 partes", "➋ 90 : 75 = 1,20 € por día", "➌ 20 · 1,20 = 24 € · 25 · 1,20 = 30 € · 30 · 1,20 = 36 €"],
      res:"Los estudiantes pagan <b>24 €</b>, <b>30 €</b> y <b>36 €</b>." },
    { nivel:"Problema",
      enun:"En una carrera popular se reparte un premio de 1100 € entre los tres primeros, de forma inversamente proporcional al puesto en el que llegaron (1.º, 2.º y 3.º). ¿Cuánto recibe cada uno?",
      pasos:[R`➊ Doy la vuelta: $\dfrac{1}{1}, \dfrac{1}{2}, \dfrac{1}{3}$ ➋ con denominador 6: $\dfrac{6}{6}, \dfrac{3}{6}, \dfrac{2}{6}$`,
             "➌ 6 + 3 + 2 = 11 partes; 1100 : 11 = 100 € → 600 €, 300 € y 200 €"],
      res:"El primero recibe <b>600 €</b>, el segundo <b>300 €</b> y el tercero <b>200 €</b>." },
    { nivel:"Para pensar",
      enun:"Dos hermanos de 12 y 15 años se reparten un dinero de forma directamente proporcional a sus edades. El mayor recibe 18 € más que el pequeño. ¿Cuánto recibe cada uno?",
      pasos:["El mayor tiene 15 partes y el pequeño 12: la diferencia son <b>3 partes</b>.",
             "3 partes = 18 € → 1 parte = 6 €",
             "Pequeño: 12 · 6 = 72 € · Mayor: 15 · 6 = 90 € &nbsp;(90 − 72 = 18 ✓)"],
      res:"El pequeño recibe <b>72 €</b> y el mayor <b>90 €</b>." },
    { nivel:"Para pensar",
      enun:"Un instituto da un premio a la asistencia de 950 € entre tres alumnos, inversamente proporcional a sus faltas: 4, 6 y 9 faltas. ¿Cuánto recibe cada uno?",
      pasos:[R`➊ $\dfrac{1}{4}, \dfrac{1}{6}, \dfrac{1}{9}$ ➋ m.c.m.(4, 6, 9) = 36: $\dfrac{9}{36}, \dfrac{6}{36}, \dfrac{4}{36}$`,
             "➌ 9 + 6 + 4 = 19 partes; 950 : 19 = 50 €",
             "9 · 50 = 450 € · 6 · 50 = 300 € · 4 · 50 = 200 €"],
      res:"Los alumnos reciben <b>450 €</b>, <b>300 €</b> y <b>200 €</b>." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">¿Cómo se reparte un premio de forma justa?</p>`}
    ]},

    { titulo:"Reparto directamente proporcional", cuerpo:[
      {ej:{etq:"🎟 Situación", enun:"Ana, Beto y Carla compran juntos un décimo de lotería. Ana pone 2 €, Beto 3 € y Carla 5 €. ¡Les tocan 15 000 €! Lo justo es que quien puso más, reciba más.",
        pasos:[pasos3("<b>SUMO</b> las partes<br>2 + 3 + 5 = 10 partes","<b>DIVIDO</b><br>15 000 : 10 = 1500 € cada parte","<b>MULTIPLICO</b><br>cada uno por sus partes"),
               "Ana 2 · 1500 = 3000 € · Beto 3 · 1500 = 4500 € · Carla 5 · 1500 = 7500 €"],
        res:"A Ana le tocan <b>3000 €</b>, a Beto <b>4500 €</b> y a Carla <b>7500 €</b>."}}
    ]},

    { titulo:"El dibujo del reparto", cuerpo:[
      {p:"Cada casilla es <b>una parte</b> de 1500 €. Cada uno se lleva tantas casillas como euros puso."},
      {html:casillas([["Ana (2)",2,"1500","3000 €"],["Beto (3)",3,"1500","4500 €"],["Carla (5)",5,"1500","7500 €"]],"10 partes de 1500 € = 15 000 €")},
      {prop:["<b>Comprueba siempre:</b> 3000 + 4500 + 7500 = 15 000 € ✓ &nbsp;y Carla, que puso más, recibe más ✓"], etq:"✅ Comprueba"}
    ]},

    { titulo:"Si conocemos lo que le toca a uno", cuerpo:[
      {ej:{etq:"🛠 Situación", enun:"Tres hermanos ayudan en la tienda de sus padres 3, 5 y 7 horas y reparten el dinero según las horas. Al segundo (5 horas) le tocan 2200 €. ¿Cuánto les toca a los otros y cuánto había en total?",
        pasos:["5 partes = 2200 € → 1 parte = 2200 : 5 = <b>440 €</b>",
               "1.º: 3 · 440 = 1320 € · 3.º: 7 · 440 = 3080 €",
               "Total: 3 + 5 + 7 = 15 partes → 15 · 440 = 6600 €"],
        res:"Al primero le tocan <b>1320 €</b> y al tercero <b>3080 €</b>. En total había <b>6600 €</b>."}},
      {html:casillas([["1.º (3 h)",3,"440","1320 €"],["2.º (5 h)",5,"440","2200 €"],["3.º (7 h)",7,"440","3080 €"]])}
    ]},

    { titulo:"Reparto inversamente proporcional", cuerpo:[
      {ej:{etq:"🏆 Situación", enun:"El instituto da un premio de 1300 € a tres alumnos, de forma inversamente proporcional a sus faltas: Eva tiene 2 faltas, Hugo 3 e Iker 4. Quien falta menos, recibe más.",
        pasos:[pasos3(R`<b>DOY LA VUELTA</b><br>$\dfrac{1}{2} \quad \dfrac{1}{3} \quad \dfrac{1}{4}$`,R`<b>MISMO DENOMINADOR</b><br>m.c.m. = 12: $\dfrac{6}{12} \; \dfrac{4}{12} \; \dfrac{3}{12}$`,"<b>REPARTO DIRECTO</b><br>a 6, 4 y 3: 13 partes"),
               "1300 : 13 = <b>100 €</b> cada parte",
               "Eva 6 · 100 = 600 € · Hugo 4 · 100 = 400 € · Iker 3 · 100 = 300 €"],
        res:"Eva recibe <b>600 €</b>, Hugo <b>400 €</b> e Iker <b>300 €</b>."}}
    ]},

    { titulo:"El dibujo del reparto inverso", cuerpo:[
      {html:casillas([["Eva (2 faltas)",6,"100","600 €"],["Hugo (3 faltas)",4,"100","400 €"],["Iker (4 faltas)",3,"100","300 €"]],"Cada casilla es una parte de 100 €")},
      {prop:["600 + 400 + 300 = 1300 € ✓ &nbsp;y Eva, que falta menos, recibe más ✓"], etq:"✅ Comprueba"},
      {aviso:["Si repartes directamente a 2, 3 y 4, ¡Iker, que falta más, se llevaría más! En el inverso <b>siempre</b> se da la vuelta primero."]}
    ]},

    { titulo:"¿Directo o inverso? El método", cuerpo:[
      {cols:[
        [{def:["Quien tiene <b>más</b>, recibe <b>más</b>.", "Dinero que pone, horas que trabaja, canciones que compone…", "<b>Sumo → divido → multiplico</b>"], etq:"😀 Reparto DIRECTO"}],
        [{aviso:["Quien tiene <b>más</b>, recibe <b>menos</b>.", "Faltas, edad, minutos que tarda, puesto en una carrera…", "<b>Primero doy la vuelta</b> y luego reparto directo"], etq:"🙃 Reparto INVERSO"}]
      ]},
      {nota:["La pregunta clave: <b>¿lo justo es que quien tiene más reciba más, o menos?</b>"]}
    ]},

    { titulo:"Problema: el concurso de cortos", cuerpo:[
      {ej:{etq:"✍️ Problema resuelto", enun:"Lía, Marco y Omar ganan 450 € en un concurso de cortometrajes del instituto. Lo reparten según las horas que dedicó cada uno a grabar y montar: 4, 6 y 5 horas. ¿Cuánto recibe cada uno?",
        pasos:["Más horas → más dinero: <b>directo</b>.",
               "➊ 4 + 6 + 5 = 15 partes &nbsp;➋ 450 : 15 = 30 €",
               "➌ Lía 4 · 30 = 120 € · Marco 6 · 30 = 180 € · Omar 5 · 30 = 150 €",
               "Comprueba: 120 + 180 + 150 = 450 ✓"],
        res:"Lía recibe <b>120 €</b>, Marco <b>180 €</b> y Omar <b>150 €</b>."}}
    ]},

    { titulo:"🪄 Trucos para ir más rápido", cuerpo:[
      {truco:["<b>Antes de empezar, adivina quién se lleva más.</b> Si al final el resultado no coincide con tu intuición, revisa si era directo o inverso."], etq:"🪄 Truco 1"},
      {truco:[R`<b>Inverso con 2 y 3:</b> no hace falta buscar el m.c.m. de memoria: <b>cruza los números</b>. Inverso a 2 y 3 es lo mismo que directo a 3 y 2.`], etq:"🪄 Truco 2"},
      {truco:["<b>La diferencia también son partes.</b> Si uno tiene 15 partes y otro 12, la diferencia (3 partes) te dice cuánto vale una parte."], etq:"🪄 Truco 3"}
    ]},

    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:["<b>En el inverso, repartir directamente</b> a los números del enunciado (¡el que más falta se llevaría más!)."], etq:"⚠️ Error 1"},
      {aviso:["<b>Olvidar sumar las partes:</b> se divide el total entre la <b>suma</b> de las partes, no entre el número de personas."], etq:"⚠️ Error 2"},
      {aviso:["<b>No comprobar</b> que la suma de lo que recibe cada uno da el total."], etq:"⚠️ Error 3"}
    ]},

    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{cols:[
        ["😀 <b>Directo</b> (más → más):", "➊ sumo las partes ➋ divido el total ➌ multiplico"],
        ["🙃 <b>Inverso</b> (más → menos):", "➊ doy la vuelta ➋ mismo denominador ➌ reparto directo con los numeradores"]
      ]}, "✅ Comprueba: la suma da el total y quien debe recibir más, recibe más."]},
      {estudio:[
        {comp:{q:"Reparte 100 € de forma directamente proporcional a 1 y 4. ¿Cuánto recibe el segundo?", sol:80, unidad:"€",
          explic:"1 + 4 = 5 partes; 100 : 5 = 20 € → 20 € y 80 €.", pista:"Suma las partes y divide 100 entre ese número."}},
        {comp:{q:"Reparte 90 € de forma inversamente proporcional a 1 y 2. ¿Cuánto recibe el primero?", sol:60, unidad:"€",
          explic:R`Doy la vuelta: $\dfrac{1}{1}, \dfrac{1}{2}$ → con denominador 2: 2 y 1 → 3 partes de 30 € → 60 € y 30 €.`, pista:"Inverso: el que tiene 1 recibe más. Dale la vuelta a 1 y 2."}},
        {comp:{q:"Un premio se reparte según las faltas de cada alumno. ¿Qué tipo de reparto es justo?", opciones:["Directo","Inverso"], ok:1,
          explic:"Quien falta más debe recibir menos: inverso.", pista:"¿Debe recibir más el que más falta?"}}
      ]}
    ]}
  ]
});
})();

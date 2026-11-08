/* 2.º ESO · Tema 3 · Apartado 3: Proporcionalidad inversa
   Método de la profesora (exámenes del Colegio Cerrado de Calderón): cuadro con las dos magnitudes e «I»;
   el producto se mantiene: 20 · 30 = 15 · x. Otra forma (apuntes de la web): dar la vuelta a la fracción de la x.
   Problemas de sus exámenes: vacas y pienso, barco que reduce la velocidad, coche −40 %, comida de Navidad,
   bolígrafos que suben un 25 %, regalo entre amigos, brigada de constructores. */
(function(){
const R = String.raw;
const tabla = (filas) => `<table class="t tprop">${filas.map(f=>`<tr>${f.map((c,k)=>k===0?`<th>${c}</th>`:(k%2===0?`<td class="op">${c}</td>`:`<td>${c}</td>`)).join("")}</tr>`).join("")}</table>`;
const cuadro = (m1, m2, a, b, t) => `<table class="t cuadro"><tr><th>${m1}</th><th class="fl">(${t||"I"}) ⟶</th><th>${m2}</th></tr><tr><td>${a[0]}</td><td></td><td>${a[1]}</td></tr><tr><td>${b[0]}</td><td></td><td class="x">${b[1]}</td></tr></table>`;

TEMA.registrar({
  num: 3,
  titulo: "Proporcionalidad inversa",
  videos: [
    {t:"Regla de tres simple inversa", url:"https://www.youtube.com/watch?v=dHOBFb6SW-w"},
    {t:"Cómo identificar si es directa o inversa", url:"https://www.youtube.com/watch?v=OyEcoAV3oFY"}
  ],

  clase: [
    { nivel:"Aplicación", min:4,
      enun:"Hay que hacer un trabajo. Completa la tabla sabiendo que las magnitudes son inversamente proporcionales y escribe la constante."+tabla([["Obreros","1","","2","","3","","4","","6"],["Días","24","","?","","?","","?","","?"]]),
      pasos:["Producto constante: $1 \\cdot 24 = 24$ (lo que tardaría 1 obrero solo).", "Divido 24 entre los obreros: 24 : 2 = 12 · 24 : 3 = 8 · 24 : 4 = 6 · 24 : 6 = 4"],
      res:"12, 8, 6 y 4 días&ensp;·&ensp;k = 24" },
    { nivel:"Aplicación", min:4,
      enun:"Indica, razonadamente, si son directamente proporcionales (D), inversamente (I) o ninguna (N):<br><b>a)</b> La velocidad de un coche y el tiempo que tarda en recorrer 100 km.<br><b>b)</b> Las entradas de cine que compras y lo que pagas.<br><b>c)</b> Tu edad y tu altura.<br><b>d)</b> Los grifos iguales abiertos y el tiempo en llenar una piscina.",
      pasos:["<b>a)</b> Al doble de velocidad, la mitad de tiempo: <b>I</b>.", "<b>b)</b> Doble de entradas, doble de dinero: <b>D</b>.",
             "<b>c)</b> Crecen juntas, pero con 10 años no mides el doble que con 5: <b>N</b>.", "<b>d)</b> El doble de grifos llena en la mitad de tiempo: <b>I</b>."],
      res:"a) I · b) D · c) N · d) I" },
    { nivel:"Práctica", min:6,
      enun:"Entre 8 amigos habéis comprado un regalo de cumpleaños y habéis puesto 12 € cada uno. A última hora, otros dos amigos quieren participar.<br><b>a)</b> ¿Cuánto pagaréis al final cada uno?<br><b>b)</b> ¿Cuánto tendrá que darle cada uno de los dos nuevos a cada uno de los ocho primeros?",
      pasos:[cuadro("Amigos","Dinero (€)",["8","12"],["10","x"]), "Más amigos → menos paga cada uno: <b>I</b>.",
             R`$8 \cdot 12 = 10 \cdot x \;\Rightarrow\; x = \dfrac{96}{10} = 9,60$ €`,
             R`<b>b)</b> A cada uno de los 8 hay que devolverle $12 - 9,60 = 2,40$ €; entre los dos nuevos: $2,40 : 2 = 1,20$ € cada uno`],
      res:"a) 9,60 € cada uno&ensp;·&ensp;b) 1,20 € a cada uno de los ocho" },
    { nivel:"Práctica", min:6,
      enun:"El año pasado sobró comida de Navidad para 6 días y éramos 30 personas. Este año somos un 20 % más de personas. ¿Para cuántos días sobrará comida si se compra la misma cantidad?",
      pasos:[R`Personas este año: $20\,\%$ de $30 = 6$ → $30 + 6 = 36$ personas`, cuadro("Personas","Días",["30","6"],["36","x"]),
             "Más personas → la comida dura menos: <b>I</b>.", R`$30 \cdot 6 = 36 \cdot x \;\Rightarrow\; x = \dfrac{180}{36} = 5$ días`],
      res:"Sobrará comida para <b>5 días</b>" },
    { nivel:"Problema", min:6,
      enun:"Con un dinero ahorrado puedo comprar 20 bolígrafos a 60 céntimos cada uno. Si el precio sube un 25 %, ¿cuántos bolígrafos podré comprar con el mismo dinero?",
      pasos:[R`Precio nuevo: $25\,\%$ de $0,60 = 0,15$ → $0,60 + 0,15 = 0,75$ €`, cuadro("Precio (€)","Bolígrafos",["0,60","20"],["0,75","x"]),
             "Más caros → compro menos: <b>I</b>.", R`$0,60 \cdot 20 = 0,75 \cdot x \;\Rightarrow\; x = \dfrac{12}{0,75} = 16$`],
      res:"<b>16 bolígrafos</b>" },
    { nivel:"Reto", min:7,
      enun:"Una brigada de 8 constructores, todos igual de rápidos, hace una obra en 20 días.<br><b>a)</b> ¿Cuánto tardarían solo 2 de ellos?<br><b>b)</b> ¿Cuántos constructores harían falta para terminarla en 10 días?",
      pasos:["Más constructores → menos días: <b>I</b>. Producto: $8 \\cdot 20 = 160$ (días que tardaría 1 constructor solo).",
             R`<b>a)</b> $160 : 2 = 80$ días`, R`<b>b)</b> $160 : 10 = 16$ constructores`],
      res:"a) 80 días&ensp;·&ensp;b) 16 constructores" }
  ],

  casa: [
    { nivel:"Básico",
      enun:"Para ir de un pueblo a otro, la velocidad y el tiempo son inversamente proporcionales. Completa la tabla y escribe la constante."+tabla([["Velocidad (km/h)","60","","80","","120"],["Tiempo (h)","4","","?","","?"]]),
      pasos:[R`Constante: $60 \cdot 4 = 240$ (son los km del camino)`, "240 : 80 = 3 h · 240 : 120 = 2 h"],
      res:"3 h y 2 h&ensp;·&ensp;k = 240 km" },
    { nivel:"Básico",
      enun:"Cinco grifos iguales llenan una piscina en 12 horas. ¿Cuánto tardarán 3 grifos?",
      pasos:[cuadro("Grifos","Horas",["5","12"],["3","x"]), R`I: $5 \cdot 12 = 3 \cdot x \;\Rightarrow\; x = \dfrac{60}{3} = 20$ h`],
      res:"20 horas" },
    { nivel:"Básico",
      enun:"Para la excursión, si van 12 alumnos cada uno paga 15 € del autobús. ¿Cuánto pagará cada uno si van 20?",
      pasos:[R`I: $12 \cdot 15 = 20 \cdot x \;\Rightarrow\; x = \dfrac{180}{20} = 9$ €`],
      res:"9 € cada uno" },
    { nivel:"Consolidación",
      enun:"Una piscina portátil se llena en 6 horas con 4 grifos iguales. ¿Cuántos grifos hacen falta para llenarla en 3 horas?",
      pasos:["Menos horas → más grifos: <b>I</b>.", R`$4 \cdot 6 = x \cdot 3 \;\Rightarrow\; x = \dfrac{24}{3} = 8$`],
      res:"8 grifos" },
    { nivel:"Consolidación",
      enun:"¿D, I o N? Razónalo.<br><b>a)</b> Las horas que estudio y las horas que veo la tele.<br><b>b)</b> Las páginas de un libro y el tiempo que tardo en leerlo.<br><b>c)</b> Las personas que comparten una pizza y el trozo que le toca a cada una.",
      pasos:["<b>a)</b> Si estudio el doble, no veo justo la mitad de tele: <b>N</b>.", "<b>b)</b> Doble de páginas, doble de tiempo (leyendo igual de rápido): <b>D</b>.", "<b>c)</b> Doble de personas, la mitad de pizza cada una: <b>I</b>."],
      res:"a) N · b) D · c) I" },
    { nivel:"Problema",
      enun:"Un barco tarda 4 horas en hacer un trayecto a 120 km/h. ¿Cuánto tardará si reduce su velocidad en 20 km/h?",
      pasos:["Nueva velocidad: 120 − 20 = 100 km/h", R`I: $120 \cdot 4 = 100 \cdot x \;\Rightarrow\; x = \dfrac{480}{100} = 4,8$ h`, R`$0,8$ h $= 0,8 \cdot 60 = 48$ min`],
      res:"4,8 h = <b>4 h 48 min</b>" },
    { nivel:"Problema",
      enun:"En un campamento, 15 scouts tienen comida para 8 días. Llegan 5 scouts más. ¿Para cuántos días tendrán comida?",
      pasos:["Ahora son 15 + 5 = 20 scouts.", R`I: $15 \cdot 8 = 20 \cdot x \;\Rightarrow\; x = \dfrac{120}{20} = 6$ días`],
      res:"6 días" },
    { nivel:"Para pensar",
      enun:"A 60 km/h tardo 40 minutos en llegar al pueblo de mis abuelos. ¿A qué velocidad tendría que ir para tardar solo 30 minutos?",
      pasos:["Menos tiempo → más velocidad: <b>I</b>.", R`$60 \cdot 40 = x \cdot 30 \;\Rightarrow\; x = \dfrac{2400}{30} = 80$ km/h`],
      res:"80 km/h" }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {nota:[{lista:[
        "Reconocer cuándo dos magnitudes son <b>inversamente proporcionales</b>.",
        "Su <b>constante</b>: el producto es siempre el mismo.",
        "Resolver problemas con la <b>regla de tres inversa</b> y por <b>reducción a la unidad</b>.",
        "Distinguir <b>D</b>, <b>I</b> o <b>ninguna</b> (N)."
      ]}], etq:"🎯 En este apartado vas a aprender"}
    ]},

    { titulo:"Cuando una sube, la otra baja", cuerpo:[
      {ej:{etq:"🎁 El regalo de cumpleaños", enun:"Un regalo cuesta 60 €. ¿Cuánto pone cada amigo si sois 2, 4 o 6?",
        pasos:["2 amigos → 30 € cada uno", "4 amigos (el doble) → 15 € (la mitad)", "6 amigos (el triple) → 10 € (la tercera parte)"]}},
      {html:tabla([["Amigos","2","×2 →","4","×3/2 →","6"],["€ cada uno","30",":2 →","15",":3/2 →","10"]])}
    ]},

    { titulo:"Magnitudes inversamente proporcionales", cuerpo:[
      {def:["Son <b>inversamente proporcionales</b> si al multiplicar una por un número, la otra queda <b>dividida</b> por ese número.", "<b>doble → mitad · triple → tercio · mitad → doble</b>"], etq:"Inversamente proporcionales (I)"},
      {html:tabla([["Pintores","1","×2 →","2","×2 →","4"],["Días","36",":2 →","18",":2 →","9"]])},
      {nota:["Ejemplos: obreros y días · velocidad y tiempo · grifos y horas · amigos y lo que paga cada uno."]}
    ]},

    { titulo:"La constante: el producto", cuerpo:[
      {prop:["En una inversa, al <b>multiplicar</b> las dos cantidades sale <b>siempre el mismo número</b>: la <b>constante</b> (k).", {formula:R`2 \cdot 30 = 4 \cdot 15 = 6 \cdot 10 = 60`}], etq:"Constante"},
      {ej:{enun:"Velocidad: 60, 80, 120 km/h. Tiempo: 4, 3, 2 h. ¿Son I?",
        pasos:[R`$60 \cdot 4 = 240$ · $80 \cdot 3 = 240$ · $120 \cdot 2 = 240$`, "Siempre 240 → son <b>I</b>. La constante (240 km) es la distancia."], res:"I, con k = 240"}},
      {truco:["<b>D</b> → el cociente es constante. <b>I</b> → el <b>producto</b> es constante."]}
    ]},

    { titulo:"¿D, I o ninguna?", cuerpo:[
      {prop:["Me pregunto: si una se hace el <b>doble</b>, ¿la otra se hace el doble (<b>D</b>), la mitad (<b>I</b>) o ninguna de las dos (<b>N</b>)?"], etq:"La pregunta clave"},
      {cols:[
        [{nota:["🚗 Velocidad y tiempo en hacer 100 km → <b>I</b>", "🍫 Tabletas de chocolate y precio → <b>D</b>"], etq:"Ejemplos"}],
        [{nota:["🌧️ Lluvia que cae y días que llueve → <b>N</b>", "👫 Amigos que compran algo y lo que pone cada uno → <b>I</b>"], etq:"Ejemplos"}]
      ]}
    ]},

    { titulo:"Cuidado: «a más, menos» no basta", cuerpo:[
      {aviso:["Que una suba y la otra baje <b>no basta</b>: tiene que ser «doble → mitad»."], etq:"⚠️ No siempre es inversa"},
      {ej:{etq:"🏫 Un ejemplo de examen", enun:"¿Son D, I o N las horas que estoy en el cole y las horas que estoy fuera del cole (en un día)?",
        pasos:["8 h en el cole → 16 h fuera", "4 h en el cole (la mitad) → 20 h fuera (no es el doble)", "Si estoy más horas en el cole, estoy menos fuera, pero no de forma proporcional."],
        res:"Ninguna de las dos (N)"}},
      {nota:["Aquí lo que se mantiene es la <b>suma</b> (8 + 16 = 4 + 20 = 24), no el producto."]}
    ]},

    { titulo:"Regla de tres inversa", cuerpo:[
      {ej:{enun:"4 pintores tardan 9 días en pintar una casa. ¿Cuánto tardarán 6 pintores?",
        pasos:[cuadro("Pintores","Días",["4","9"],["6","x"]),
               "Más pintores → menos días: <b>INVERSA (I)</b>.",
               R`El producto se mantiene: $4 \cdot 9 = 6 \cdot x$`,
               R`$x = \dfrac{36}{6} = 6$`],
        res:"6 pintores tardan <b>6 días</b>"}},
      {nota:["Otra forma: escribo las fracciones y <b>le doy la vuelta a la de la <i>x</i></b>: $\\dfrac{4}{6} = \\dfrac{x}{9}$ → $x = \\dfrac{4 \\cdot 9}{6} = 6$."]}
    ]},

    { titulo:"Otra forma: reducción a la unidad", cuerpo:[
      {def:["Calculo lo que pasaría con <b>1</b> y después divido."], etq:"Reducción a la unidad"},
      {ej:{enun:"4 pintores tardan 9 días. ¿Y 6 pintores?",
        pasos:[R`1 pintor solo tardaría $4 \cdot 9 = 36$ días (¡más tiempo!)`, R`6 pintores: $36 : 6 = 6$ días`], res:"6 días (sale lo mismo)"}},
      {truco:["En la inversa, para pasar a 1 se <b>multiplica</b>, y para pasar a muchos se <b>divide</b>. Justo al revés que en la directa."]}
    ]},

    { titulo:"Problema: las vacas y el pienso", cuerpo:[
      {ej:{etq:"🐄 Problema de examen", enun:"Un ganadero tiene 20 vacas y pienso para alimentarlas durante 30 días. ¿Cuánto tiempo le durará el pienso si se mueren 5 vacas?",
        pasos:["Quedan 20 − 5 = 15 vacas.", cuadro("Vacas","Días",["20","30"],["15","x"]),
               "Menos vacas → el pienso dura más: <b>I</b>.", R`$20 \cdot 30 = 15 \cdot x \;\Rightarrow\; x = \dfrac{600}{15} = 40$`],
        res:"El pienso durará <b>40 días</b>"}}
    ]},

    { titulo:"Problema: el barco más lento", cuerpo:[
      {ej:{etq:"⛵ Problema de examen", enun:"Un barco tarda 5 horas en hacer un trayecto a 120 km/h. ¿Cuánto tardará si reduce su velocidad en 40 km/h?",
        pasos:["Nueva velocidad: 120 − 40 = 80 km/h", cuadro("Velocidad (km/h)","Horas",["120","5"],["80","x"]),
               "Menos velocidad → más tiempo: <b>I</b>.", R`$120 \cdot 5 = 80 \cdot x \;\Rightarrow\; x = \dfrac{600}{80} = 7,5$ h`],
        res:"7,5 h = <b>7 h 30 min</b>"}}
    ]},

    { titulo:"Problema: el coche reduce un 40 %", cuerpo:[
      {ej:{etq:"🚗 Problema de examen", enun:"Un coche a 80 km/h tarda 5 horas en un trayecto. Si disminuye su velocidad un 40 %, ¿cuánto tardará en el mismo trayecto?",
        pasos:[R`$40\,\%$ de $80 = \dfrac{40}{100} \cdot 80 = 32$ → nueva velocidad: $80 - 32 = 48$ km/h`,
               cuadro("Velocidad (km/h)","Horas",["80","5"],["48","x"]),
               R`I: $80 \cdot 5 = 48 \cdot x \;\Rightarrow\; x = \dfrac{400}{48} = \dfrac{25}{3} \approx 8,33$ h`,
               R`$\dfrac{25}{3}$ h $= 8$ h $+ \dfrac13$ h $= 8$ h $20$ min`],
        res:"Tardará <b>8 h 20 min</b>"}},
      {aviso:["8,33 h <b>no</b> son 8 h 33 min: 0,33 h son 0,33 · 60 ≈ 20 min."]}
    ]},

    { titulo:"🪄 Trucos para ir más rápido", cuerpo:[
      {truco:["<b>¿Tiene sentido?</b> Más obreros → menos días. Si te sale al revés, te has equivocado de tipo."], etq:"🪄 Truco 1"},
      {truco:["<b>Busca el total</b>: el producto es lo que haría 1 solo (36 días de 1 pintor, 240 km del viaje, 96 € del regalo)."], etq:"🪄 Truco 2"},
      {truco:["<b>Las veces</b>: el doble de grifos → la mitad de horas; un tercio de velocidad → el triple de tiempo."], etq:"🪄 Truco 3"}
    ]},

    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:["<b>Hacerla como una directa</b>: con 6 pintores saldría 13,5 días. ¡Más pintores y más días! No tiene sentido."], etq:"⚠️ Error 1"},
      {aviso:["<b>Pensar que «a más, menos» siempre es I</b> (las horas en el cole y fuera no lo son)."], etq:"⚠️ Error 2"},
      {aviso:["<b>Pasar mal las horas</b>: 7,5 h son 7 h 30 min, no 7 h 50 min."], etq:"⚠️ Error 3"}
    ]},

    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{lista:[
        "<b>I</b>: doble → mitad. El <b>producto</b> es constante.",
        "<b>Regla de tres inversa</b>: cuadro → I → el producto se mantiene: $a \\cdot b = c \\cdot x$.",
        "<b>Reducción a la unidad</b>: lo que haría 1 (multiplico) y luego divido.",
        "Pregunta clave: si una se hace el doble, ¿la otra el doble (D), la mitad (I) o ninguna (N)?"
      ]}]},
      {estudio:[
        {comp:{q:"6 obreros tardan 10 días. ¿Cuánto tardan 4 obreros?", sol:15, unidad:"días", explic:"6 · 10 = 60 → 60 : 4 = 15 días", pista:"Calcula lo que tardaría 1 obrero solo."}},
        {comp:{q:"A 90 km/h tardo 2 h. ¿Cuánto tardo a 60 km/h?", sol:3, unidad:"h", explic:"90 · 2 = 180 km → 180 : 60 = 3 h", pista:"El producto es la distancia."}},
        {comp:{q:"¿Las horas de sueño y las horas despierto en un día son I?", opciones:["Sí","No"], ok:1, explic:"Se mantiene la suma (24 h), no el producto: 8 → 16, 4 → 20.", pista:"Prueba con 8 h y 4 h de sueño."}}
      ]}
    ]}
  ]
});
})();

/* 2.º ESO · Tema 3 · Apartado 3: Proporcionalidad inversa
   Método de la profesora: cuadro con las dos magnitudes e «I». Decisión de la profesora (11-nov-2026): en la inversa SOLO se usa dar la vuelta a la fracción de la x y multiplicar en cruz.
   Problemas de sus exámenes: vacas y pienso, barco, regalo entre amigos, brigada de constructores.
   Los problemas con % (coche −40 %, comida de Navidad, bolígrafos +25 %) están en el apartado 7, después de los %. */
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
      pasos:["Producto constante: $1 \\cdot 24 = 24$ (lo que tardaría 1 obrero solo).", "Divido 24 entre los obreros: 24 : 2 = 12, 24 : 3 = 8, 24 : 4 = 6 y 24 : 6 = 4."],
      res:"Tardan <b>12</b>, <b>8</b>, <b>6</b> y <b>4 días</b>. La constante es <b>24</b>." },
    { nivel:"Aplicación", min:4,
      enun:"Indica, razonadamente, si son directamente proporcionales (D), inversamente (I) o ninguna (N):<br><b>a)</b> La velocidad de un coche y el tiempo que tarda en recorrer 100 km.<br><b>b)</b> Las entradas de cine que compras y lo que pagas.<br><b>c)</b> Tu edad y tu altura.<br><b>d)</b> Los grifos iguales abiertos y el tiempo en llenar una piscina.",
      pasos:["<b>a)</b> Al doble de velocidad, la mitad de tiempo: <b>I</b>.", "<b>b)</b> Doble de entradas, doble de dinero: <b>D</b>.",
             "<b>c)</b> Crecen juntas, pero con 10 años no mides el doble que con 5: <b>N</b>.", "<b>d)</b> El doble de grifos llena en la mitad de tiempo: <b>I</b>."],
      res:"a) Son <b>I</b>.<br>b) Son <b>D</b>.<br>c) Son <b>N</b>.<br>d) Son <b>I</b>." },
    { nivel:"Práctica", min:5,
      enun:"Un grifo que echa 20 litros por minuto llena un depósito en 45 minutos. ¿Cuánto tardaría un grifo que echa 30 litros por minuto?",
      pasos:[cuadro("Litros/min","Minutos",["20","45"],["30","x"]), "Más litros por minuto → menos minutos: <b>I</b>.",
             R`Le damos la vuelta a la fracción de la $x$: $\dfrac{20}{30} = \dfrac{x}{45}$`,
             R`En cruz: $30 \cdot x = 20 \cdot 45 \;\Rightarrow\; x = \dfrac{900}{30} = 30$`],
      res:"El segundo grifo tardaría <b>30 minutos</b>." },
    { nivel:"Práctica", min:5,
      enun:"Si 8 amigos compran un regalo de cumpleaños, cada uno pone 12 €. ¿Cuánto pondría cada uno si fueran 10 amigos?",
      pasos:[cuadro("Amigos","Dinero (€)",["8","12"],["10","x"]), "Más amigos → menos paga cada uno: <b>I</b>.",
             R`Le damos la vuelta: $\dfrac{8}{10} = \dfrac{x}{12}$`,
             R`En cruz: $10 \cdot x = 8 \cdot 12 \;\Rightarrow\; x = \dfrac{96}{10} = 9,60$`],
      res:"Si fueran 10 amigos, cada uno pondría <b>9,60 €</b>." },
    { nivel:"Problema", min:6,
      enun:"El autobús de la excursión tarda 4 horas en llegar si va a 75 km/h. Por unas obras, tiene que ir a 60 km/h. ¿Cuánto tardará?",
      pasos:[cuadro("Velocidad (km/h)","Horas",["75","4"],["60","x"]), "Menos velocidad → más tiempo: <b>I</b>.",
             R`Le damos la vuelta: $\dfrac{75}{60} = \dfrac{x}{4}$`,
             R`En cruz: $60 \cdot x = 75 \cdot 4 \;\Rightarrow\; x = \dfrac{300}{60} = 5$`,
             "¿Tiene sentido? Va más despacio y tarda más ✓"],
      res:"El autobús tardará <b>5 horas</b>." },
    { nivel:"Reto", min:7,
      enun:"Una brigada de 8 constructores, todos igual de rápidos, hace una obra en 20 días.<br><b>a)</b> ¿Cuánto tardarían solo 2 de ellos?<br><b>b)</b> ¿Cuántos constructores harían falta para terminarla en 10 días?",
      pasos:[R`<b>a)</b> Menos constructores → más días: <b>I</b>. $\dfrac{8}{2} = \dfrac{x}{20} \;\Rightarrow\; 2 \cdot x = 8 \cdot 20 \;\Rightarrow\; x = 80$`,
             R`<b>b)</b> Ahora la $x$ son los constructores. Menos días → más constructores: <b>I</b>.`,
             R`$\dfrac{20}{10} = \dfrac{x}{8} \;\Rightarrow\; 10 \cdot x = 20 \cdot 8 \;\Rightarrow\; x = 16$`],
      res:"a) 2 constructores tardarían <b>80 días</b>.<br>b) Harían falta <b>16 constructores</b>." }
  ],

  casa: [
    { nivel:"Básico",
      enun:"Para ir de un pueblo a otro, la velocidad y el tiempo son inversamente proporcionales. Completa la tabla y escribe la constante."+tabla([["Velocidad (km/h)","60","","80","","120"],["Tiempo (h)","4","","?","","?"]]),
      pasos:[R`Constante: $60 \cdot 4 = 240$ (son los km del camino)`, "240 : 80 = 3 h y 240 : 120 = 2 h"],
      res:"A 80 km/h se tarda <b>3 h</b> y a 120 km/h, <b>2 h</b>. La constante es <b>240 km</b>." },
    { nivel:"Básico",
      enun:"Cinco grifos iguales llenan una piscina en 12 horas. ¿Cuánto tardarán 3 grifos?",
      pasos:[cuadro("Grifos","Horas",["5","12"],["3","x"]), R`I: le damos la vuelta: $\dfrac{5}{3} = \dfrac{x}{12}$`, R`En cruz: $3 \cdot x = 5 \cdot 12 \;\Rightarrow\; x = \dfrac{60}{3} = 20$`],
      res:"3 grifos tardarán <b>20 horas</b>." },
    { nivel:"Básico",
      enun:"Para la excursión, si van 12 alumnos cada uno paga 15 € del autobús. ¿Cuánto pagará cada uno si van 20?",
      pasos:["Más alumnos → menos paga cada uno: <b>I</b>.", R`$\dfrac{12}{20} = \dfrac{x}{15} \;\Rightarrow\; 20 \cdot x = 12 \cdot 15 \;\Rightarrow\; x = \dfrac{180}{20} = 9$`],
      res:"Cada uno pagará <b>9 €</b>." },
    { nivel:"Consolidación",
      enun:"Con 6 cajas abiertas, la cola del súper se atiende en 20 minutos. ¿Cuánto tardaría con 8 cajas abiertas?",
      pasos:["Más cajas → menos minutos: <b>I</b>.", R`$\dfrac{6}{8} = \dfrac{x}{20} \;\Rightarrow\; 8 \cdot x = 6 \cdot 20 \;\Rightarrow\; x = \dfrac{120}{8} = 15$`],
      res:"Con 8 cajas tardaría <b>15 minutos</b>." },
    { nivel:"Consolidación",
      enun:"¿D, I o N? Razónalo.<br><b>a)</b> Las horas que estudio y las horas que veo la tele.<br><b>b)</b> Las páginas de un libro y el tiempo que tardo en leerlo.<br><b>c)</b> Las personas que comparten una pizza y el trozo que le toca a cada una.",
      pasos:["<b>a)</b> Si estudio el doble, no veo justo la mitad de tele: <b>N</b>.", "<b>b)</b> Doble de páginas, doble de tiempo (leyendo igual de rápido): <b>D</b>.", "<b>c)</b> Doble de personas, la mitad de pizza cada una: <b>I</b>."],
      res:"a) Son <b>N</b>.<br>b) Son <b>D</b>.<br>c) Son <b>I</b>." },
    { nivel:"Problema",
      enun:"Un barco tarda 4 horas en hacer un trayecto a 120 km/h. ¿Cuánto tardará si va a 100 km/h?",
      pasos:[R`I: $\dfrac{120}{100} = \dfrac{x}{4} \;\Rightarrow\; 100 \cdot x = 120 \cdot 4 \;\Rightarrow\; x = \dfrac{480}{100} = 4,8$ h`, R`$0,8$ h $= 0,8 \cdot 60 = 48$ min`],
      res:"El barco tardará <b>4 h 48 min</b>." },
    { nivel:"Problema",
      enun:"En un campamento, 15 scouts tienen comida para 8 días. ¿Para cuántos días tendrían comida si fueran 20 scouts?",
      pasos:[R`I: $\dfrac{15}{20} = \dfrac{x}{8} \;\Rightarrow\; 20 \cdot x = 15 \cdot 8 \;\Rightarrow\; x = \dfrac{120}{20} = 6$`],
      res:"Si fueran 20 scouts, tendrían comida para <b>6 días</b>." },
    { nivel:"Para pensar",
      enun:"A 60 km/h tardo 40 minutos en llegar al pueblo de mis abuelos. ¿A qué velocidad tendría que ir para tardar solo 30 minutos?",
      pasos:[cuadro("Minutos","Velocidad (km/h)",["40","60"],["30","x"]), "Menos tiempo → más velocidad: <b>I</b>.", R`$\dfrac{40}{30} = \dfrac{x}{60} \;\Rightarrow\; 30 \cdot x = 40 \cdot 60 \;\Rightarrow\; x = \dfrac{2400}{30} = 80$`],
      res:"Tendría que ir a <b>80 km/h</b>." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">Si somos más amigos, ¿cuánto pone cada uno?</p>`}
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
        pasos:[R`$60 \cdot 4 = 240$ · $80 \cdot 3 = 240$ · $120 \cdot 2 = 240$`, "Siempre 240 → son <b>I</b>. La constante (240 km) es la distancia."], res:"<b>Sí</b> son inversamente proporcionales y la constante es <b>240</b>."}},
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
        res:"<b>No</b> son ni directas ni inversas (N)."}},
      {nota:["Aquí lo que se mantiene es la <b>suma</b> (8 + 16 = 4 + 20 = 24), no el producto."]}
    ]},

    { titulo:"Regla de tres inversa", cuerpo:[
      {ej:{enun:"4 pintores tardan 9 días en pintar una casa. ¿Cuánto tardarán 6 pintores?",
        pasos:[cuadro("Pintores","Días",["4","9"],["6","x"]),
               "Más pintores → menos días: <b>INVERSA (I)</b>.",
               R`Le damos la vuelta a la fracción de la $x$: $\dfrac{9}{x} \to \dfrac{x}{9}$`,
               R`$\dfrac{4}{6} = \dfrac{x}{9}$. En cruz: $6 \cdot x = 4 \cdot 9 \;\Rightarrow\; x = \dfrac{36}{6} = 6$`],
        res:"6 pintores tardan <b>6 días</b>."}}
    ]},

    { titulo:"El método (lo que hemos hecho)", cuerpo:[
      {prop:[{lista:[
        "<b>1.</b> Hago el <b>cuadro</b> con las dos magnitudes y la <i>x</i> abajo a la derecha.",
        "<b>2.</b> Me pregunto: si una se hace el doble, ¿la otra se hace la mitad? Entonces es <b>I</b>.",
        "<b>3.</b> Escribo las fracciones y <b>le doy la vuelta a la de la <i>x</i></b>.",
        "<b>4.</b> Dos fracciones son iguales si al <b>multiplicar en cruz</b> sale lo mismo: multiplico en cruz y despejo la <i>x</i>.",
        "<b>5.</b> Compruebo si tiene sentido."
      ]}], etq:"Regla de tres inversa"},
      {aviso:["Si no le das la vuelta, con 6 pintores saldrían 13,5 días: ¡más pintores y más días! No tiene sentido."]}
    ]},

    { titulo:"Problema: las vacas y el pienso", cuerpo:[
      {ej:{etq:"🐄 Problema de examen", enun:"Un ganadero tiene 20 vacas y pienso para alimentarlas durante 30 días. ¿Cuánto tiempo le durará el pienso si se mueren 5 vacas?",
        pasos:["Quedan 20 − 5 = 15 vacas.", cuadro("Vacas","Días",["20","30"],["15","x"]),
               "Menos vacas → el pienso dura más: <b>I</b>.", R`Le damos la vuelta: $\dfrac{20}{15} = \dfrac{x}{30}$`, R`En cruz: $15 \cdot x = 20 \cdot 30 \;\Rightarrow\; x = \dfrac{600}{15} = 40$`],
        res:"El pienso durará <b>40 días</b>"}}
    ]},

    { titulo:"Problema: el barco más lento", cuerpo:[
      {ej:{etq:"⛵ Problema de examen", enun:"Un barco tarda 5 horas en hacer un trayecto a 120 km/h. ¿Cuánto tardará si reduce su velocidad en 40 km/h?",
        pasos:["Nueva velocidad: 120 − 40 = 80 km/h", cuadro("Velocidad (km/h)","Horas",["120","5"],["80","x"]),
               "Menos velocidad → más tiempo: <b>I</b>.", R`Le damos la vuelta: $\dfrac{120}{80} = \dfrac{x}{5}$`, R`En cruz: $80 \cdot x = 120 \cdot 5 \;\Rightarrow\; x = \dfrac{600}{80} = 7,5$ h`],
        res:"El barco tardará <b>7 h 30 min</b>."}}
    ]},

    { titulo:"🪄 Trucos para ir más rápido", cuerpo:[
      {truco:["<b>¿Tiene sentido?</b> Más obreros → menos días. Si te sale al revés, te has equivocado de tipo."], etq:"🪄 Truco 1"},
      {truco:["<b>Dos fracciones son iguales</b> si al multiplicar en cruz sale lo mismo. Por eso, después de dar la vuelta, multiplico en cruz."], etq:"🪄 Truco 2"},
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
        "<b>Regla de tres inversa</b>: cuadro → I → <b>le doy la vuelta a la fracción de la <i>x</i></b> → en cruz.",
        "Pregunta clave: si una se hace el doble, ¿la otra el doble (D), la mitad (I) o ninguna (N)?"
      ]}]},
      {estudio:[
        {comp:{q:"6 obreros tardan 10 días. ¿Cuánto tardan 4 obreros?", sol:15, unidad:"días", explic:"I: 6/4 = x/10 → 4 · x = 60 → x = 15 días", pista:"Es inversa: dale la vuelta a la fracción de la x y multiplica en cruz."}},
        {comp:{q:"A 90 km/h tardo 2 h. ¿Cuánto tardo a 60 km/h?", sol:3, unidad:"h", explic:"I: 90/60 = x/2 → 60 · x = 180 → x = 3 h", pista:"Menos velocidad, más tiempo: dale la vuelta a la fracción de la x."}},
        {comp:{q:"¿Las horas de sueño y las horas despierto en un día son I?", opciones:["Sí","No"], ok:1, explic:"Se mantiene la suma (24 h), no el producto: 8 → 16, 4 → 20.", pista:"Prueba con 8 h y 4 h de sueño."}}
      ]}
    ]}
  ]
});
})();

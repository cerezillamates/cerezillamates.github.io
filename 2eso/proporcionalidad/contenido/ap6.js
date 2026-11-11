/* 2.º ESO · Tema 3 · Apartado 6: Porcentajes
   Enfoque aprobado (apuntes de la web de la profesora): el r % de C con la regla de tres (100 → C; r → x) o C · r / 100.
   En sus exámenes: «x % de C = P → (x/100) · C = P» para saber qué % es o el total.
   Problemas de sus exámenes: hotel (italianos, franceses…), rotuladores, globos, portugueses y alemanes. */
(function(){
const R = String.raw;
const barra = (trozos, pie) => `<figure class="dib"><div class="barra-pct">${trozos.map(t=>`<span class="${t[2]||""}" style="flex:${t[0]}">${t[1]}</span>`).join("")}</div>${pie?`<figcaption>${pie}</figcaption>`:""}</figure>`;
const cuadro = (m1, m2, a, b) => `<table class="t cuadro"><tr><th>${m1}</th><th class="fl">(D) ⟶</th><th>${m2}</th></tr><tr><td>${a[0]}</td><td></td><td>${a[1]}</td></tr><tr><td>${b[0]}</td><td></td><td class="x">${b[1]}</td></tr></table>`;

TEMA.registrar({
  num: 6,
  titulo: "Porcentajes",
  videos: [
    {t:"Calcular el porcentaje de una cantidad", url:"https://www.youtube.com/watch?v=9T7w7iaMrjQ"}
  ],

  clase: [
    { nivel:"Aplicación", min:4,
      enun:"Calcula de cabeza: <b>a)</b> 50 % de 46 &nbsp; <b>b)</b> 25 % de 80 &nbsp; <b>c)</b> 10 % de 350 &nbsp; <b>d)</b> 20 % de 45 &nbsp; <b>e)</b> 15 % de 200",
      pasos:["<b>a)</b> 50 % es la mitad: 46 : 2 = 23", "<b>b)</b> 25 % es la cuarta parte: 80 : 4 = 20", "<b>c)</b> 10 % es dividir entre 10: 35",
             "<b>d)</b> 20 % = 10 % · 2: 4,5 · 2 = 9", "<b>e)</b> 15 % = 10 % + 5 %: 20 + 10 = 30"],
      res:"a) 23 b) 20 c) 35 d) 9 e) 30" },
    { nivel:"Aplicación", min:6,
      enun:"En un hotel hay 325 personas: 39 italianas, 117 francesas, 78 alemanas y el resto rusas. ¿Qué porcentaje representa cada grupo?",
      pasos:[R`Italianas: $x\,\%$ de $325 = 39 \;\Rightarrow\; \dfrac{x}{100} \cdot 325 = 39 \;\Rightarrow\; x = \dfrac{39 \cdot 100}{325} = 12\,\%$`,
             R`Francesas: $\dfrac{117 \cdot 100}{325} = 36\,\%$ · Alemanas: $\dfrac{78 \cdot 100}{325} = 24\,\%$`,
             R`Rusas: $100 - 12 - 36 - 24 = 28\,\%$ (son $325 - 234 = 91$ personas: $\dfrac{91 \cdot 100}{325} = 28$ ✓)`],
      res:"Hay un <b>12 %</b> de italianas, un <b>36 %</b> de francesas, un <b>24 %</b> de alemanas y un <b>28 %</b> de rusas." },
    { nivel:"Práctica", min:5,
      enun:"Una caja tiene 40 globos: 14 rojos, 10 azules, 6 verdes y el resto amarillos. Halla el porcentaje de globos de cada color.",
      pasos:["Amarillos: 40 − 14 − 10 − 6 = 10", cuadro("Globos","%",["40","100"],["14","x"]), R`Rojos: $x = \dfrac{14 \cdot 100}{40} = 35\,\%$`,
             R`Azules: $\dfrac{10 \cdot 100}{40} = 25\,\%$ · Verdes: $15\,\%$ · Amarillos: $25\,\%$`, "Comprueba: 35 + 25 + 15 + 25 = 100 % ✓"],
      res:"Hay un <b>35 %</b> de globos rojos, un <b>25 %</b> azules, un <b>15 %</b> verdes y un <b>25 %</b> amarillos." },
    { nivel:"Práctica", min:4,
      enun:"En una clase de 25 alumnos, el 36 % ha aprobado todas las asignaturas en la 1.ª evaluación. ¿Cuántos alumnos son?",
      pasos:[R`$36\,\%$ de $25 = \dfrac{25 \cdot 36}{100} = \dfrac{900}{100} = 9$`],
      res:"Han aprobado todo <b>9 alumnos</b>." },
    { nivel:"Problema", min:5,
      enun:"En una encuesta del instituto, 54 alumnos, que son el 45 % de los encuestados, prefieren el baloncesto. ¿Cuántos alumnos respondieron la encuesta?",
      pasos:["Ahora busco el <b>total</b>.", cuadro("%","Alumnos",["45","54"],["100","x"]), R`$x = \dfrac{100 \cdot 54}{45} = 120$`, "Comprueba: 45 % de 120 = 54 ✓"],
      res:"Respondieron la encuesta <b>120 alumnos</b>." },
    { nivel:"Reto", min:6,
      enun:"<b>a)</b> «Tres de cada siete alumnos se dan cuenta de que dos ejercicios del examen están resueltos en el libro». Exprésalo en porcentaje.<br><b>b)</b> En un pueblo, el 60 % son adultos y, de ellos, el 25 % está jubilado. ¿Qué porcentaje del pueblo está jubilado?",
      pasos:[R`<b>a)</b> $\dfrac{3}{7} = 0,4285\ldots \approx 42,86\,\%$`, R`<b>b)</b> El 25 % del 60 %: $0,25 \cdot 60 = 15\,\%$`, "Con 100 personas: 60 adultos y 15 jubilados → 15 de cada 100."],
      res:"a) Se dan cuenta aproximadamente el <b>42,86 %</b> de los alumnos.<br>b) Está jubilado el <b>15 %</b> del pueblo." }
  ],

  casa: [
    { nivel:"Básico", enun:"Calcula: <b>a)</b> 30 % de 90 &nbsp; <b>b)</b> 5 % de 240 &nbsp; <b>c)</b> 75 % de 60 &nbsp; <b>d)</b> 1 % de 3500",
      pasos:["a) 90 · 30 : 100 = 27", "b) 240 · 5 : 100 = 12", "c) 60 · 75 : 100 = 45", "d) 3500 : 100 = 35"], res:"a) 27 b) 12 c) 45 d) 35" },
    { nivel:"Básico", enun:"Mi hermana tiene rotuladores: 10 azules, 5 amarillos, 15 verdes y 20 morados. ¿Qué porcentaje tiene de cada color?",
      pasos:["Total: 50 rotuladores. 50 son el 100 %, así que cada rotulador es el 2 %.", "Azules 10 · 2 = 20 % · amarillos 10 % · verdes 30 % · morados 40 %"], res:"Tiene un <b>20 %</b> azules, un <b>10 %</b> amarillos, un <b>30 %</b> verdes y un <b>40 %</b> morados." },
    { nivel:"Básico", enun:"Otra caja de rotuladores tiene 9 azules, 24 amarillos y 27 morados. ¿Qué porcentaje hay de cada color?",
      pasos:["Total: 60", R`Azules: $\dfrac{9 \cdot 100}{60} = 15\,\%$ · amarillos: $\dfrac{24 \cdot 100}{60} = 40\,\%$ · morados: $45\,\%$`], res:"Hay un <b>15 %</b> de azules, un <b>40 %</b> de amarillos y un <b>45 %</b> de morados." },
    { nivel:"Consolidación", enun:"En un hotel hay 120 personas: 24 portuguesas, 36 alemanas y el resto españolas. Calcula el porcentaje de cada nacionalidad.",
      pasos:[R`Portuguesas: $\dfrac{24 \cdot 100}{120} = 20\,\%$ · alemanas: $\dfrac{36 \cdot 100}{120} = 30\,\%$`, "Españolas: 100 − 20 − 30 = 50 %"], res:"Hay un <b>20 %</b> de portugueses, un <b>30 %</b> de alemanes y un <b>50 %</b> de españoles." },
    { nivel:"Consolidación", enun:"En un centro de 680 alumnos han aprobado matemáticas 476. ¿Qué porcentaje ha aprobado?",
      pasos:[R`$\dfrac{476 \cdot 100}{680} = 70\,\%$`], res:"Ha aprobado el <b>70 %</b> de los alumnos." },
    { nivel:"Problema", enun:"18 alumnos de 2.º, que son el 60 % del curso, van a la excursión. ¿Cuántos alumnos hay en 2.º?",
      pasos:[R`$\dfrac{60}{100} \cdot T = 18 \;\Rightarrow\; T = \dfrac{18 \cdot 100}{60} = 30$`], res:"En 2.º hay <b>30 alumnos</b>." },
    { nivel:"Para pensar", enun:"¿Es lo mismo el 20 % de 50 que el 50 % de 20? ¿Por qué? Usa la idea para calcular de cabeza el 8 % de 25.",
      pasos:[R`$20\,\%$ de $50 = \dfrac{20 \cdot 50}{100} = 10$ y $50\,\%$ de $20 = \dfrac{50 \cdot 20}{100} = 10$: se multiplican los mismos números.`, R`$8\,\%$ de $25 = 25\,\%$ de $8 = 8 : 4 = 2$`], res:"<b>Sí</b> es lo mismo, y el 8 % de 25 es <b>2</b>." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">¿Qué quiere decir «el 20 % de la clase»?</p>`}
    ]},

    { titulo:"¿Qué es un porcentaje?", cuerpo:[
      {def:["Un <b>porcentaje</b> (tanto por ciento) es una razón con denominador 100: <b>25 %</b> significa <b>25 de cada 100</b>.", {formula:R`25\,\% = \frac{25}{100} = 0{,}25`}], etq:"Porcentaje"},
      {html:barra([[25,"25 %","r"],[75,"75 %",""]],"Si de cada 100 alumnos 25 van en bici: el 25 %")},
      {nota:["Lo ves en las rebajas, en el IVA, en las notas, en la batería del móvil 🔋…"]}
    ]},

    { titulo:"Porcentajes de cabeza", cuerpo:[
      {cols:[
        [{prop:["<b>50 %</b> → la mitad (: 2)", "<b>25 %</b> → la cuarta parte (: 4)", "<b>75 %</b> → tres cuartas partes"], etq:"Fracciones"}],
        [{prop:["<b>10 %</b> → divido entre 10", "<b>20 %</b> → el 10 % por 2", "<b>5 %</b> → la mitad del 10 %", "<b>1 %</b> → divido entre 100"], etq:"Con el 10 %"}]
      ]},
      {ej:{enun:"Calcula el 15 % de 60.", pasos:["10 % de 60 = 6", "5 % de 60 = 3 (la mitad)", "15 % = 6 + 3"], res:"El 15 % de 60 es <b>9</b>."}}
    ]},

    { titulo:"El r % de una cantidad", cuerpo:[
      {ej:{enun:"¿Cuánto es el 35 % de 80?",
        pasos:["Con la regla de tres (es directa): si de 100 tomo 35, de 80 tomo $x$.", cuadro("Total","Parte",["100","35"],["80","x"]),
               R`$x = \dfrac{80 \cdot 35}{100} = \dfrac{2800}{100} = 28$`],
        res:"El 35 % de 80 es <b>28</b>"}},
      {prop:[{formula:R`r\,\%\ \text{de}\ C = \frac{C \cdot r}{100}`}, "Multiplico por el porcentaje y divido entre 100."], etq:"Atajo"}
    ]},

    { titulo:"¿Qué porcentaje es?", cuerpo:[
      {ej:{etq:"🏨 Problema de examen", enun:"En un hotel hay 120 personas y 24 son portuguesas. ¿Qué porcentaje son?",
        pasos:[R`Escribo la frase: $x\,\%$ de $120 = 24$`, R`$\dfrac{x}{100} \cdot 120 = 24 \;\Rightarrow\; x = \dfrac{24 \cdot 100}{120} = 20$`, "Con la regla de tres: 120 → 100 %; 24 → x"],
        res:"El <b>20 %</b> son portuguesas"}},
      {truco:["Para saber qué % es: <b>parte · 100 : total</b>."]}
    ]},

    { titulo:"Los porcentajes de un grupo", cuerpo:[
      {ej:{etq:"🖍️ Problema de examen", enun:"Mi hermana tiene 10 rotuladores azules, 5 amarillos, 15 verdes y 20 morados. ¿Qué porcentaje tiene de cada color?",
        pasos:["Total: 10 + 5 + 15 + 20 = 50", R`Azules: $\dfrac{10 \cdot 100}{50} = 20\,\%$ · amarillos: $\dfrac{5 \cdot 100}{50} = 10\,\%$`,
               R`Verdes: $\dfrac{15 \cdot 100}{50} = 30\,\%$ · morados: $\dfrac{20 \cdot 100}{50} = 40\,\%$`],
        res:"Tiene un <b>20 %</b> azules, un <b>10 %</b> amarillos, un <b>30 %</b> verdes y un <b>40 %</b> morados."}},
      {html:barra([[20,"20 %","a"],[10,"10 %","r"],[30,"30 %","v"],[40,"40 %","z"]],"Todos juntos suman el 100 %")}
    ]},

    { titulo:"Calcular el total", cuerpo:[
      {ej:{enun:"9 alumnos de mi clase vienen en bici, que son el 30 % de la clase. ¿Cuántos alumnos somos?",
        pasos:[R`$30\,\%$ de $T = 9 \;\Rightarrow\; \dfrac{30}{100} \cdot T = 9$`, R`$T = \dfrac{9 \cdot 100}{30} = 30$`, "Con la regla de tres: 30 % → 9 alumnos; 100 % → x"],
        res:"Somos <b>30 alumnos</b>"}},
      {truco:["Si el 10 % son 3, el 100 % son 30: <b>busca el 10 % o el 1 %</b> y multiplica."]}
    ]},

    { titulo:"Fracciones, decimales y porcentajes", cuerpo:[
      {html:`<table class="t tprop"><tr><th>Fracción</th><td>1/2</td><td>1/4</td><td>3/4</td><td>1/5</td><td>1/10</td><td>3/7</td></tr><tr><th>Decimal</th><td>0,5</td><td>0,25</td><td>0,75</td><td>0,2</td><td>0,1</td><td>0,428…</td></tr><tr><th>Porcentaje</th><td>50 %</td><td>25 %</td><td>75 %</td><td>20 %</td><td>10 %</td><td>≈ 42,86 %</td></tr></table>`},
      {prop:["Fracción → decimal: divido. Decimal → %: multiplico por 100 (muevo la coma dos lugares)."], etq:"Cómo se pasa"},
      {nota:["«3 de cada 7» es la fracción $\\dfrac37$: en porcentaje, unos 43 de cada 100."]}
    ]},

    { titulo:"🪄 Trucos para ir más rápido", cuerpo:[
      {truco:["<b>El 10 % es mover la coma</b> un lugar a la izquierda: 10 % de 350 = 35."], etq:"🪄 Truco 1"},
      {truco:["<b>Se pueden cambiar de orden</b>: el 8 % de 25 es el 25 % de 8 = 2."], etq:"🪄 Truco 2"},
      {truco:["<b>Los porcentajes de todos los grupos suman 100 %</b>: el último sale restando, y así compruebas."], etq:"🪄 Truco 3"}
    ]},

    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:["<b>Dividir al revés</b>: para saber qué % es, es parte entre total (24 : 120), no total entre parte."], etq:"⚠️ Error 1"},
      {aviso:["<b>Redondear antes de tiempo</b>: si redondeas cada grupo, puede que no sumen 100 %."], etq:"⚠️ Error 2"},
      {aviso:["<b>Confundir la parte con el total</b>: lee bien qué es el 100 %."], etq:"⚠️ Error 3"}
    ]},

    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{lista:[
        "$r\\,\\%$ = $r$ de cada 100 = $\\dfrac{r}{100}$.",
        "El r % de C: $\\dfrac{C \\cdot r}{100}$ (o regla de tres: 100 → C; r → x).",
        "¿Qué % es? $\\dfrac{\\text{parte} \\cdot 100}{\\text{total}}$. ¿El total? $\\dfrac{\\text{parte} \\cdot 100}{r}$.",
        "De cabeza: 50 % mitad, 25 % cuarta parte, 10 % entre 10."
      ]}]},
      {estudio:[
        {comp:{q:"¿Cuánto es el 40 % de 65?", sol:26, explic:"65 · 40 : 100 = 26", pista:"Multiplica por 40 y divide entre 100."}},
        {comp:{q:"En un grupo de 80 personas, 12 son zurdas. ¿Qué porcentaje?", sol:15, unidad:"%", explic:"12 · 100 : 80 = 15 %", pista:"Parte · 100 : total."}},
        {comp:{q:"El 25 % de una cantidad es 14. ¿Cuál es la cantidad?", sol:56, explic:"14 · 4 = 56", pista:"El 25 % es la cuarta parte."}}
      ]}
    ]}
  ]
});
})();

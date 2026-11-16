/* 2.º ESO · Tema 3 · Apartado 6.3: Porcentajes. Tipo 3: calcular el % dadas la cantidad inicial y la final
   Cambio pedido por la profesora (16-11-2026): el tipo 3 se resuelve con REGLA DE TRES (el total es el 100 %).
   En subidas y bajadas: primero la diferencia y después la regla de tres sobre la cantidad inicial.
   La fórmula C_F = I_V · C_I queda como AMPLIACIÓN al final. Problemas de sus exámenes: hotel, rotuladores, globos. */
(function(){
const R = String.raw;
const barra = (trozos, pie) => `<figure class="dib"><div class="barra-pct">${trozos.map(t=>`<span class="${t[2]||""}" style="flex:${t[0]}">${t[1]}</span>`).join("")}</div>${pie?`<figcaption>${pie}</figcaption>`:""}</figure>`;
const cuadro = (m1, m2, a, b, t) => `<table class="t cuadro"><tr><th>${m1}</th><th class="fl">(${t||"D"}) ⟶</th><th>${m2}</th></tr><tr><td>${a[0]}</td><td></td><td>${a[1]}</td></tr><tr><td>${b[0]}</td><td></td><td class="x">${b[1]}</td></tr></table>`;
const pct = (mag, total, parte) => cuadro(mag, "Porcentaje (%)", [total, "100"], [parte, "x"], "D");
const flecha = (pasos) => `<div class="cadena">${pasos.map((p,k)=>k%2 ? `<div class="op">${p}<i>━━━►</i></div>` : `<div class="caja">${p}</div>`).join("")}</div>`;
TEMA.registrar({
  num: "6.3",
  titulo: "Porcentajes · Tipo 3: calcular el % dadas la cantidad inicial y la final",
  videos: [
    {t:"Porcentajes encadenados", url:"https://www.youtube.com/watch?v=ynSBIu_6zSE"}
  ],

  clase: [
    { nivel:"Aplicación", min:4,
      enun:"En un examen tipo test, Marta acierta 18 de las 24 preguntas. ¿Qué porcentaje de preguntas ha acertado?",
      pasos:["El total son las 24 preguntas: ese es el <b>100 %</b>. Más preguntas → más porcentaje: <b>D</b>.",
             pct("Preguntas", "24", "18"),
             R`$\dfrac{24}{18} = \dfrac{100}{x} \;\Rightarrow\; x = \dfrac{18 \cdot 100}{24} = \dfrac{1800}{24} = 75$`],
      res:"Marta ha acertado el <b>75 %</b> de las preguntas." },
    { nivel:"Práctica", min:6,
      enun:"En un hotel hay 325 personas: 39 italianas, 117 francesas, 78 alemanas y el resto rusas. ¿Qué porcentaje representa cada grupo?",
      pasos:["Las 325 personas son el 100 %. Una regla de tres para cada grupo:",
             pct("Personas", "325", "39"),
             R`Italianas: $x = \dfrac{39 \cdot 100}{325} = 12$ → $12\,\%$`,
             R`Francesas: $x = \dfrac{117 \cdot 100}{325} = 36$ → $36\,\%$. Alemanas: $x = \dfrac{78 \cdot 100}{325} = 24$ → $24\,\%$`,
             R`Rusas: $325 - 39 - 117 - 78 = 91$ → $x = \dfrac{91 \cdot 100}{325} = 28$ → $28\,\%$`,
             "Compruebo: 12 + 36 + 24 + 28 = 100 % ✓"],
      res:"Hay un <b>12 %</b> de italianas, un <b>36 %</b> de francesas, un <b>24 %</b> de alemanas y un <b>28 %</b> de rusas." },
    { nivel:"Práctica", min:5,
      enun:"Una caja tiene 40 globos: 14 rojos, 10 azules, 6 verdes y el resto amarillos. Halla el porcentaje de globos de cada color.",
      pasos:["Amarillos: 40 − 14 − 10 − 6 = 10. Los 40 globos son el 100 %.",
             pct("Globos", "40", "14"),
             R`Rojos: $x = \dfrac{14 \cdot 100}{40} = 35$ → $35\,\%$. Azules: $x = \dfrac{10 \cdot 100}{40} = 25$ → $25\,\%$`,
             R`Verdes: $x = \dfrac{6 \cdot 100}{40} = 15$ → $15\,\%$. Amarillos: $25\,\%$`,
             "Compruebo: 35 + 25 + 15 + 25 = 100 % ✓"],
      res:"Hay un <b>35 %</b> de globos rojos, un <b>25 %</b> azules, un <b>15 %</b> verdes y un <b>25 %</b> amarillos." },
    { nivel:"Práctica", min:5,
      enun:"Hace dos semanas una mochila costaba 120 € y hoy he pagado 138 €. ¿Ha subido o ha bajado? ¿Qué porcentaje?",
      pasos:[R`<b>Paso 1.</b> Ha <b>subido</b>: $138 - 120 = 18$ €`,
             "<b>Paso 2.</b> El porcentaje es de lo que costaba <b>antes</b>: 120 € es el 100 %.",
             pct("Precio (€)", "120", "18"),
             R`$\dfrac{120}{18} = \dfrac{100}{x} \;\Rightarrow\; x = \dfrac{18 \cdot 100}{120} = 15$`],
      res:"La mochila ha <b>subido un 15 %</b>." },
    { nivel:"Reto", min:6,
      enun:"<b>a)</b> «Tres de cada siete alumnos se dan cuenta de que dos ejercicios del examen están resueltos en el libro». Exprésalo en porcentaje.<br><b>b)</b> En un pueblo, el 60 % son adultos y, de ellos, el 25 % está jubilado. ¿Qué porcentaje del pueblo está jubilado?",
      pasos:[R`<b>a)</b> De cada 7, el total es 7: $\dfrac{7}{3} = \dfrac{100}{x} \Rightarrow x = \dfrac{3 \cdot 100}{7} = \dfrac{300}{7} \approx 42,86$`,
             "<b>b)</b> Lo pruebo con 100 personas: adultos, el 60 % de 100 = 60 personas.",
             R`Jubilados: el 25 % de 60 $= \dfrac{60 \cdot 25}{100} = 15$ personas`,
             "15 de cada 100 personas del pueblo."],
      res:"a) Se dan cuenta aproximadamente el <b>42,86 %</b> de los alumnos.<br>b) Está jubilado el <b>15 %</b> del pueblo." }
  ],

  casa: [
    { nivel:"Básico", enun:"Mi hermana tiene rotuladores: 10 azules, 5 amarillos, 15 verdes y 20 morados. ¿Qué porcentaje tiene de cada color?",
      pasos:["Total: 10 + 5 + 15 + 20 = 50 rotuladores (el 100 %).", pct("Rotuladores", "50", "10"),
             R`Azules: $x = \dfrac{10 \cdot 100}{50} = 20\,\%$. Amarillos: $\dfrac{5 \cdot 100}{50} = 10\,\%$`,
             R`Verdes: $\dfrac{15 \cdot 100}{50} = 30\,\%$. Morados: $\dfrac{20 \cdot 100}{50} = 40\,\%$`],
      res:"Tiene un <b>20 %</b> azules, un <b>10 %</b> amarillos, un <b>30 %</b> verdes y un <b>40 %</b> morados." },
    { nivel:"Básico", enun:"Otra caja de rotuladores tiene 9 azules, 24 amarillos y 27 morados. ¿Qué porcentaje hay de cada color?",
      pasos:["Total: 9 + 24 + 27 = 60", R`Azules: $x = \dfrac{9 \cdot 100}{60} = 15\,\%$. Amarillos: $\dfrac{24 \cdot 100}{60} = 40\,\%$. Morados: $\dfrac{27 \cdot 100}{60} = 45\,\%$`],
      res:"Hay un <b>15 %</b> de azules, un <b>40 %</b> de amarillos y un <b>45 %</b> de morados." },
    { nivel:"Consolidación", enun:"En un hotel hay 120 personas: 24 portuguesas, 36 alemanas y el resto españolas. Calcula el porcentaje de cada nacionalidad.",
      pasos:[pct("Personas", "120", "24"), R`Portuguesas: $x = \dfrac{24 \cdot 100}{120} = 20\,\%$. Alemanas: $\dfrac{36 \cdot 100}{120} = 30\,\%$`,
             "Españolas: 120 − 24 − 36 = 60 → 50 % (y 20 + 30 + 50 = 100 ✓)"],
      res:"Hay un <b>20 %</b> de portugueses, un <b>30 %</b> de alemanes y un <b>50 %</b> de españoles." },
    { nivel:"Consolidación", enun:"En un centro de 680 alumnos han aprobado matemáticas 476. ¿Qué porcentaje ha aprobado?",
      pasos:[pct("Alumnos", "680", "476"), R`$\dfrac{680}{476} = \dfrac{100}{x} \;\Rightarrow\; x = \dfrac{476 \cdot 100}{680} = 70$`],
      res:"Ha aprobado el <b>70 %</b> de los alumnos." },
    { nivel:"Básico", enun:"Unas zapatillas costaban 80 € y las he comprado por 68 €. ¿Qué descuento me han hecho?",
      pasos:[R`Me han descontado $80 - 68 = 12$ €`, "El descuento es del precio de antes: 80 € es el 100 %.",
             pct("Precio (€)", "80", "12"), R`$x = \dfrac{12 \cdot 100}{80} = 15$`],
      res:"Me han hecho un descuento del <b>15 %</b>." },
    { nivel:"Problema", enun:"La entrada del cine costaba 8 € y ahora cuesta 9 €. ¿Ha subido o ha bajado? ¿Qué porcentaje?",
      pasos:[R`Ha subido $9 - 8 = 1$ €`, pct("Precio (€)", "8", "1"), R`$x = \dfrac{1 \cdot 100}{8} = 12,5$`],
      res:"La entrada ha <b>subido un 12,5 %</b>." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">¿Qué porcentaje es? ¿Cuánto ha subido?</p>`}
    ]},
    { titulo:"¿Qué porcentaje es?", cuerpo:[
      {def:["El <b>total</b> es el <b>100 %</b>. Con una regla de tres averiguo qué % es la parte."], etq:"La idea"},
      {ej:{etq:"🏨 Problema de examen", enun:"En un hotel hay 120 personas y 24 son portuguesas. ¿Qué porcentaje son?",
        pasos:["Las 120 personas son el 100 %. Más personas → más porcentaje: <b>D</b>.",
               pct("Personas", "120", "24"),
               R`$\dfrac{120}{24} = \dfrac{100}{x} \;\Rightarrow\; x = \dfrac{24 \cdot 100}{120} = \dfrac{2400}{120} = 20$`],
        res:"El <b>20 %</b> son portuguesas."}},
      {aviso:["El resultado se da en <b>porcentaje</b>: 20 %."]}
    ]},
    { titulo:"Los porcentajes de un grupo", cuerpo:[
      {ej:{etq:"🖍️ Problema de examen", enun:"Mi hermana tiene 10 rotuladores azules, 5 amarillos, 15 verdes y 20 morados. ¿Qué porcentaje tiene de cada color?",
        pasos:["Total: 10 + 5 + 15 + 20 = 50 (el 100 %)", pct("Rotuladores", "50", "10"),
               R`Azules: $x = \dfrac{10 \cdot 100}{50} = 20\,\%$. Amarillos: $10\,\%$`,
               R`Verdes: $30\,\%$. Morados: $40\,\%$`],
        res:"Tiene un <b>20 %</b> azules, un <b>10 %</b> amarillos, un <b>30 %</b> verdes y un <b>40 %</b> morados."}},
      {html:barra([[20,"20 %","a"],[10,"10 %","r"],[30,"30 %","v"],[40,"40 %","z"]],"Todos juntos suman el 100 %")},
      {truco:["Los porcentajes de todos los grupos <b>suman 100 %</b>: así compruebas, y el último sale restando."], etq:"🪄 Truco"}
    ]},
    { titulo:"¿Cuánto ha subido o bajado?", cuerpo:[
      {prop:["<b>Paso 1.</b> Resto para saber cuánto ha subido o bajado.", "<b>Paso 2.</b> Regla de tres: la cantidad <b>de antes</b> es el 100 %."], etq:"Dos pasos"},
      {cols:[
        [{ej:{etq:"📱 Baja", enun:"Un móvil pasa de 400 € a 340 €.",
          pasos:[R`Baja $400 - 340 = 60$ €`, pct("Precio (€)", "400", "60"), R`$x = \dfrac{60 \cdot 100}{400} = 15$`],
          res:"El móvil ha bajado un <b>15 %</b>."}}],
        [{ej:{etq:"💡 Sube", enun:"La luz pasa de 50 € a 54 €.",
          pasos:[R`Sube $54 - 50 = 4$ €`, pct("Precio (€)", "50", "4"), R`$x = \dfrac{4 \cdot 100}{50} = 8$`],
          res:"La luz ha subido un <b>8 %</b>."}}]
      ]},
      {aviso:["El 100 % es <b>lo de antes</b>, no lo de ahora."]}
    ]},
    { titulo:"Fracciones, decimales y porcentajes", cuerpo:[
      {html:`<table class="t tprop"><tr><th>Fracción</th><td>1/2</td><td>1/4</td><td>3/4</td><td>1/5</td><td>1/10</td><td>3/7</td></tr><tr><th>Decimal</th><td>0,5</td><td>0,25</td><td>0,75</td><td>0,2</td><td>0,1</td><td>0,428…</td></tr><tr><th>Porcentaje</th><td>50 %</td><td>25 %</td><td>75 %</td><td>20 %</td><td>10 %</td><td>≈ 42,86 %</td></tr></table>`},
      {prop:["Fracción → decimal: divido. Decimal → %: multiplico por 100 (muevo la coma dos lugares)."], etq:"Cómo se pasa"},
      {nota:["«3 de cada 7» con la regla de tres: 7 → 100 %, 3 → x, y sale $\\approx 42,86\\,\\%$."]}
    ]},
    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:["<b>Poner la regla de tres al revés</b>: el total va con el 100 %."], etq:"⚠️ Error 1"},
      {aviso:["<b>Calcular el % sobre lo de ahora</b> en una subida o bajada: es sobre lo de <b>antes</b>."], etq:"⚠️ Error 2"},
      {aviso:["<b>Subir un 20 % y bajar un 20 %</b> no deja el precio igual: de 100 € a 120 € y de 120 € a 96 €."], etq:"⚠️ Error 3"}
    ]},
    { titulo:"➕ Ampliación: con la fórmula", cuerpo:[
      {prop:[R`También se puede con la fórmula del tipo 1, $C_F = I_V \cdot C_I$, poniendo la $x$ en el índice.`], etq:"➕ Ampliación"},
      {html:despeje([R`C_F = I_V \cdot C_I`, R`Busco $I_V$: pongo una $x$`, R`C_F = x \cdot C_I`, R`$C_I$ está multiplicando: pasa dividiendo`, R`x = \dfrac{C_F}{C_I}`])},
      {ej:{enun:"La mochila que pasa de 120 € a 138 €.",
        pasos:[R`$138 = x \cdot 120 \;\Rightarrow\; x = \dfrac{138}{120} = 1,15$`, R`Pasa de 1: <b>sube</b> $1,15 - 1 = 0,15$ → $15\,\%$`],
        res:"Sale lo mismo: <b>sube un 15 %</b>."}},
      {nota:["Si el índice pasa de 1, sube lo que pasa; si no llega a 1, baja lo que le falta."]}
    ]},
    { titulo:"📝 Resumen de los tres tipos", cuerpo:[
      {html:R`<table class="t tprop"><tr><th></th><th>Conozco</th><th>Busco</th><th>Hago</th></tr><tr><th>Tipo 1</th><td>el total y el %</td><td>la parte (o el precio final)</td><td>$C_F = I_V \cdot C_I$: multiplico</td></tr><tr><th>Tipo 2</th><td>una parte y su %</td><td>el total</td><td>regla de tres con el 100 %</td></tr><tr><th>Tipo 3</th><td>el total y la parte</td><td>el %</td><td>regla de tres con el 100 %</td></tr></table>`},
      {resumen:[{lista:[
        "En los tipos 2 y 3, el <b>total es el 100 %</b> y hago una <b>regla de tres directa</b>.",
        "Subidas y bajadas: primero resto y después la regla de tres sobre lo de antes.",
        "Compruebo: los porcentajes de todos los grupos suman 100 %."
      ]}]},
      {estudio:[
        {comp:{q:"En un grupo de 80 personas, 12 son zurdas. ¿Qué porcentaje?", sol:15, unidad:"%", explic:"80 → 100 %; 12 → x = 12 · 100 : 80 = 15 %", pista:"El total, 80, es el 100 %."}},
        {comp:{q:"Un precio pasa de 40 € a 46 €. ¿Qué porcentaje sube?", sol:15, unidad:"%", explic:"Sube 6 €. 40 → 100 %; 6 → x = 6 · 100 : 40 = 15 %", pista:"Primero resta: ¿cuánto ha subido?"}},
        {comp:{q:"Unas zapatillas pasan de 60 € a 48 €. ¿Qué descuento es?", sol:20, unidad:"%", explic:"Baja 12 €. 60 → 100 %; 12 → x = 12 · 100 : 60 = 20 %", pista:"El 100 % es el precio de antes."}}
      ]}
    ]}
  ]
});
})();

/* 2.º ESO · Tema 3 · Apartado 6.3: Porcentajes. Tipo 3: calcular el % dadas la cantidad inicial y la final
   Cambio pedido por la profesora (16-11-2026): el tipo 3 se resuelve con regla de tres (el total es el 100 %).
   Cambio pedido por la profesora (20-11-2026): más sencillo, con la fórmula % = parte / total · 100
   (fracción horizontal). La regla de tres queda como otra forma de hacerlo. Sin C_F = I_V · C_I (solo en el tipo 1).
   En subidas y bajadas: primero la diferencia y después la fórmula sobre la cantidad de antes.
   Problemas de sus exámenes: hotel, rotuladores, globos. */
(function(){
const R = String.raw;
const barra = (trozos, pie) => `<figure class="dib"><div class="barra-pct">${trozos.map(t=>`<span class="${t[2]||""}" style="flex:${t[0]}">${t[1]}</span>`).join("")}</div>${pie?`<figcaption>${pie}</figcaption>`:""}</figure>`;
const cuadro = (m1, m2, a, b, t) => `<table class="t cuadro"><tr><th>${m1}</th><th class="fl">(${t||"D"}) ⟶</th><th>${m2}</th></tr><tr><td>${a[0]}</td><td></td><td>${a[1]}</td></tr><tr><td>${b[0]}</td><td></td><td class="x">${b[1]}</td></tr></table>`;
const pct = (mag, total, parte) => cuadro(mag, "Porcentaje (%)", [total, "100"], [parte, "x"], "D");
// la fórmula del tipo 3 con fracción horizontal
const FORM = R`\% = \dfrac{\text{parte}}{\text{total}} \cdot 100`;
const FORMV = R`\% = \dfrac{\text{lo que sube o baja}}{\text{lo de antes}} \cdot 100`;
const pc = (parte, total, res) => R`$\% = \dfrac{${parte}}{${total}} \cdot 100 = ${res}\,\%$`;
TEMA.registrar({
  num: "6.3",
  titulo: "Porcentajes · Tipo 3: calcular el % dadas la cantidad inicial y la final",
  videos: [
    {t:"Porcentajes encadenados", url:"https://www.youtube.com/watch?v=ynSBIu_6zSE"}
  ],

  clase: [
    { nivel:"Aplicación", min:4,
      enun:"En un examen tipo test, Marta acierta 18 de las 24 preguntas. ¿Qué porcentaje de preguntas ha acertado?",
      pasos:["La parte son las 18 que acierta; el total, las 24 preguntas.",
             pc("18", "24", "75")],
      res:"Marta ha acertado el <b>75 %</b> de las preguntas." },
    { nivel:"Práctica", min:6,
      enun:"En un hotel hay 325 personas: 39 italianas, 117 francesas, 78 alemanas y el resto rusas. ¿Qué porcentaje representa cada grupo?",
      pasos:["El total son las 325 personas. Una fórmula para cada grupo:",
             R`Italianas: $\dfrac{39}{325} \cdot 100 = 12\,\%$`,
             R`Francesas: $\dfrac{117}{325} \cdot 100 = 36\,\%$`,
             R`Alemanas: $\dfrac{78}{325} \cdot 100 = 24\,\%$`,
             R`Rusas: $325 - 39 - 117 - 78 = 91$ → $\dfrac{91}{325} \cdot 100 = 28\,\%$`,
             "Compruebo: 12 + 36 + 24 + 28 = 100 % ✓"],
      res:"Hay un <b>12 %</b> de italianas, un <b>36 %</b> de francesas, un <b>24 %</b> de alemanas y un <b>28 %</b> de rusas." },
    { nivel:"Práctica", min:5,
      enun:"Una caja tiene 40 globos: 14 rojos, 10 azules, 6 verdes y el resto amarillos. Halla el porcentaje de globos de cada color.",
      pasos:["Amarillos: 40 − 14 − 10 − 6 = 10. El total son los 40 globos.",
             R`Rojos: $\dfrac{14}{40} \cdot 100 = 35\,\%$`,
             R`Azules: $\dfrac{10}{40} \cdot 100 = 25\,\%$`,
             R`Verdes: $\dfrac{6}{40} \cdot 100 = 15\,\%$`,
             R`Amarillos: $\dfrac{10}{40} \cdot 100 = 25\,\%$`,
             "Compruebo: 35 + 25 + 15 + 25 = 100 % ✓"],
      res:"Hay un <b>35 %</b> de globos rojos, un <b>25 %</b> azules, un <b>15 %</b> verdes y un <b>25 %</b> amarillos." },
    { nivel:"Práctica", min:5,
      enun:"Hace dos semanas una mochila costaba 120 € y hoy he pagado 138 €. ¿Ha subido o ha bajado? ¿Qué porcentaje?",
      pasos:[R`<b>Paso 1.</b> Ha <b>subido</b>: $138 - 120 = 18$ €`,
             "<b>Paso 2.</b> El porcentaje es de lo que costaba <b>antes</b> (120 €):",
             pc("18", "120", "15")],
      res:"La mochila ha <b>subido un 15 %</b>." },
    { nivel:"Reto", min:6,
      enun:"<b>a)</b> «Tres de cada siete alumnos se dan cuenta de que dos ejercicios del examen están resueltos en el libro». Exprésalo en porcentaje.<br><b>b)</b> En un pueblo, el 60 % son adultos y, de ellos, el 25 % está jubilado. ¿Qué porcentaje del pueblo está jubilado?",
      pasos:[R`<b>a)</b> La parte es 3 y el total, 7: $\dfrac{3}{7} \cdot 100 = \dfrac{300}{7} \approx 42,86\,\%$`,
             "<b>b)</b> Lo pruebo con 100 personas: adultos, el 60 % de 100 = 60 personas.",
             R`Jubilados: el 25 % de 60 $= 0,25 \cdot 60 = 15$ personas`,
             R`$\dfrac{15}{100} \cdot 100 = 15\,\%$ del pueblo`],
      res:"a) Se dan cuenta aproximadamente el <b>42,86 %</b> de los alumnos.<br>b) Está jubilado el <b>15 %</b> del pueblo." }
  ],

  casa: [
    { nivel:"Básico", enun:"Mi hermana tiene rotuladores: 10 azules, 5 amarillos, 15 verdes y 20 morados. ¿Qué porcentaje tiene de cada color?",
      pasos:["Total: 10 + 5 + 15 + 20 = 50 rotuladores.",
             R`Azules: $\dfrac{10}{50} \cdot 100 = 20\,\%$`, R`Amarillos: $\dfrac{5}{50} \cdot 100 = 10\,\%$`,
             R`Verdes: $\dfrac{15}{50} \cdot 100 = 30\,\%$`, R`Morados: $\dfrac{20}{50} \cdot 100 = 40\,\%$`],
      res:"Tiene un <b>20 %</b> azules, un <b>10 %</b> amarillos, un <b>30 %</b> verdes y un <b>40 %</b> morados." },
    { nivel:"Básico", enun:"Otra caja de rotuladores tiene 9 azules, 24 amarillos y 27 morados. ¿Qué porcentaje hay de cada color?",
      pasos:["Total: 9 + 24 + 27 = 60", R`Azules: $\dfrac{9}{60} \cdot 100 = 15\,\%$`, R`Amarillos: $\dfrac{24}{60} \cdot 100 = 40\,\%$`, R`Morados: $\dfrac{27}{60} \cdot 100 = 45\,\%$`],
      res:"Hay un <b>15 %</b> de azules, un <b>40 %</b> de amarillos y un <b>45 %</b> de morados." },
    { nivel:"Consolidación", enun:"En un hotel hay 120 personas: 24 portuguesas, 36 alemanas y el resto españolas. Calcula el porcentaje de cada nacionalidad.",
      pasos:[R`Portuguesas: $\dfrac{24}{120} \cdot 100 = 20\,\%$`, R`Alemanas: $\dfrac{36}{120} \cdot 100 = 30\,\%$`,
             R`Españolas: $120 - 24 - 36 = 60$ → $\dfrac{60}{120} \cdot 100 = 50\,\%$ (y 20 + 30 + 50 = 100 ✓)`],
      res:"Hay un <b>20 %</b> de portugueses, un <b>30 %</b> de alemanes y un <b>50 %</b> de españoles." },
    { nivel:"Consolidación", enun:"En un centro de 680 alumnos han aprobado matemáticas 476. ¿Qué porcentaje ha aprobado?",
      pasos:[pc("476", "680", "70")],
      res:"Ha aprobado el <b>70 %</b> de los alumnos." },
    { nivel:"Básico", enun:"Unas zapatillas costaban 80 € y las he comprado por 68 €. ¿Qué descuento me han hecho?",
      pasos:[R`Me han descontado $80 - 68 = 12$ €`, "El descuento es del precio de antes (80 €):",
             pc("12", "80", "15")],
      res:"Me han hecho un descuento del <b>15 %</b>." },
    { nivel:"Problema", enun:"La entrada del cine costaba 8 € y ahora cuesta 9 €. ¿Ha subido o ha bajado? ¿Qué porcentaje?",
      pasos:[R`Ha subido $9 - 8 = 1$ €`, pc("1", "8", "12,5")],
      res:"La entrada ha <b>subido un 12,5 %</b>." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">¿Qué porcentaje es? ¿Cuánto ha subido?</p>`}
    ]},
    { titulo:"¿Qué porcentaje es?", cuerpo:[
      {def:["Divido la <b>parte</b> entre el <b>total</b> y multiplico por 100.", {formula:FORM}], etq:"La fórmula"},
      {ej:{etq:"🏨 Problema de examen", enun:"En un hotel hay 120 personas y 24 son portuguesas. ¿Qué porcentaje son?",
        pasos:["La parte son las 24 portuguesas; el total, las 120 personas.",
               R`$\% = \dfrac{24}{120} \cdot 100 = 0,2 \cdot 100 = 20\,\%$`],
        res:"El <b>20 %</b> son portuguesas."}},
      {aviso:["El resultado se da en <b>porcentaje</b>: 20 %, no 0,2."]}
    ]},
    { titulo:"También con una regla de tres", cuerpo:[
      {prop:["El total es el <b>100 %</b>. Más personas → más porcentaje: <b>D</b>."], etq:"Otra forma"},
      {ej:{enun:"Las mismas 24 portuguesas de 120 personas.",
        pasos:[pct("Personas", "120", "24"), R`$\dfrac{120}{24} = \dfrac{100}{x} \;\Rightarrow\; x = \dfrac{24 \cdot 100}{120} = 20$`],
        res:"Sale lo mismo: el <b>20 %</b>."}},
      {nota:["En el examen puedes hacerlo de las dos formas, pero <b>escribiendo todos los pasos</b>."]}
    ]},
    { titulo:"Los porcentajes de un grupo", cuerpo:[
      {ej:{etq:"🖍️ Problema de examen", enun:"Mi hermana tiene 10 rotuladores azules, 5 amarillos, 15 verdes y 20 morados. ¿Qué porcentaje tiene de cada color?",
        pasos:["Total: 10 + 5 + 15 + 20 = 50",
               R`Azules: $\dfrac{10}{50} \cdot 100 = 20\,\%$`, R`Amarillos: $\dfrac{5}{50} \cdot 100 = 10\,\%$`,
               R`Verdes: $\dfrac{15}{50} \cdot 100 = 30\,\%$`, R`Morados: $\dfrac{20}{50} \cdot 100 = 40\,\%$`],
        res:"Tiene un <b>20 %</b> azules, un <b>10 %</b> amarillos, un <b>30 %</b> verdes y un <b>40 %</b> morados."}},
      {html:barra([[20,"20 %","a"],[10,"10 %","r"],[30,"30 %","v"],[40,"40 %","z"]],"Todos juntos suman el 100 %")},
      {truco:["Los porcentajes de todos los grupos <b>suman 100 %</b>: así compruebas, y el último sale restando."], etq:"🪄 Truco"}
    ]},
    { titulo:"¿Cuánto ha subido o bajado?", cuerpo:[
      {prop:["<b>Paso 1.</b> Resto para saber cuánto ha subido o bajado.", "<b>Paso 2.</b> La fórmula, con la cantidad <b>de antes</b> como total:", {formula:FORMV}], etq:"Dos pasos"},
      {cols:[
        [{ej:{etq:"📱 Baja", enun:"Un móvil pasa de 400 € a 340 €.",
          pasos:[R`Baja $400 - 340 = 60$ €`, pc("60", "400", "15")],
          res:"El móvil ha bajado un <b>15 %</b>."}}],
        [{ej:{etq:"💡 Sube", enun:"La luz pasa de 50 € a 54 €.",
          pasos:[R`Sube $54 - 50 = 4$ €`, pc("4", "50", "8")],
          res:"La luz ha subido un <b>8 %</b>."}}]
      ]},
      {aviso:["El total es <b>lo de antes</b>, no lo de ahora."]}
    ]},
    { titulo:"Fracciones, decimales y porcentajes", cuerpo:[
      {html:`<table class="t tprop"><tr><th>Fracción</th><td>1/2</td><td>1/4</td><td>3/4</td><td>1/5</td><td>1/10</td><td>3/7</td></tr><tr><th>Decimal</th><td>0,5</td><td>0,25</td><td>0,75</td><td>0,2</td><td>0,1</td><td>0,428…</td></tr><tr><th>Porcentaje</th><td>50 %</td><td>25 %</td><td>75 %</td><td>20 %</td><td>10 %</td><td>≈ 42,86 %</td></tr></table>`},
      {prop:["Fracción → decimal: divido. Decimal → %: multiplico por 100 (muevo la coma dos lugares)."], etq:"Cómo se pasa"},
      {nota:["«3 de cada 7» con la fórmula: $\\dfrac{3}{7} \\cdot 100 \\approx 42,86\\,\\%$."]}
    ]},
    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:["<b>Poner la fracción al revés</b>: arriba la parte, abajo el total."], etq:"⚠️ Error 1"},
      {aviso:["<b>Calcular el % sobre lo de ahora</b> en una subida o bajada: es sobre lo de <b>antes</b>."], etq:"⚠️ Error 2"},
      {aviso:["<b>Olvidar multiplicar por 100</b>: 0,15 es el 15 %."], etq:"⚠️ Error 3"},
      {aviso:["<b>Subir un 20 % y bajar un 20 %</b> no deja el precio igual: de 100 € a 120 € y de 120 € a 96 €."], etq:"⚠️ Error 4"}
    ]},
    { titulo:"📝 Resumen de los tres tipos", cuerpo:[
      {html:R`<table class="t tprop"><tr><th></th><th>Conozco</th><th>Busco</th><th>Hago</th></tr><tr><th>Tipo 1</th><td>el total y el %</td><td>la parte (o el precio final)</td><td>$C_F = I_V \cdot C_I$: multiplico</td></tr><tr><th>Tipo 2</th><td>una parte y su %</td><td>el total</td><td>regla de tres con el 100 %</td></tr><tr><th>Tipo 3</th><td>el total y la parte</td><td>el %</td><td>$\% = \dfrac{\text{parte}}{\text{total}} \cdot 100$ (o regla de tres)</td></tr></table>`},
      {resumen:[{lista:[
        R`Tipo 3: $\% = \dfrac{\text{parte}}{\text{total}} \cdot 100$.`,
        "Subidas y bajadas: primero resto y después la fórmula con lo de antes como total.",
        "Compruebo: los porcentajes de todos los grupos suman 100 %."
      ]}]},
      {estudio:[
        {comp:{q:"En un grupo de 80 personas, 12 son zurdas. ¿Qué porcentaje?", sol:15, unidad:"%", explic:"12 : 80 · 100 = 15 %", pista:"La parte entre el total, por 100."}},
        {comp:{q:"Un precio pasa de 40 € a 46 €. ¿Qué porcentaje sube?", sol:15, unidad:"%", explic:"Sube 6 €. 6 : 40 · 100 = 15 %", pista:"Primero resta: ¿cuánto ha subido?"}},
        {comp:{q:"Unas zapatillas pasan de 60 € a 48 €. ¿Qué descuento es?", sol:20, unidad:"%", explic:"Baja 12 €. 12 : 60 · 100 = 20 %", pista:"El total es el precio de antes."}}
      ]}
    ]}
  ]
});
})();

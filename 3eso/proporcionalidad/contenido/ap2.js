/* 3.º ESO · Tema 3 · Apartado 2: Proporcionalidad simple
   Método de la profesora: tabla con dos columnas, ¿doble → doble (D) o doble → mitad (I)?,
   en las inversas «le damos la vuelta» a la fracción de la x, y comprobar si tiene sentido. */
(function(){
const R = String.raw;
// tabla con operaciones entre columnas: filas = [[nombre, v1, op, v2, op, v3...], ...]
const tabla = (filas) => `<table class="t tprop">${filas.map(f=>`<tr>${f.map((c,k)=>k===0?`<th>${c}</th>`:(k%2===0?`<td class="op">${c}</td>`:`<td>${c}</td>`)).join("")}</tr>`).join("")}</table>`;
const cuadro = (m1, m2, a, b, c, tipo) => `<table class="t cuadro"><tr><th>${m1}</th><th class="fl">${tipo==="I"?"(I)":"(D)"} ⟶</th><th>${m2}</th></tr><tr><td>${a[0]}</td><td></td><td>${a[1]}</td></tr><tr><td>${b[0]}</td><td></td><td class="x">${b[1]}</td></tr></table>`;

TEMA.registrar({
  num: 2,
  titulo: "Proporcionalidad simple",
  videos: [
    {t:"Cómo identificar si es directa o inversa", url:"https://www.youtube.com/watch?v=OyEcoAV3oFY"},
    {t:"Regla de tres simple directa e inversa", url:"https://www.youtube.com/watch?v=dHOBFb6SW-w"}
  ],

  /* ===== EJERCICIOS DE CLASE: primero todos juntos, luego corrección uno a uno ===== */
  clase: [
    { nivel:"Aplicación", min:4,
      enun:"¿Son D, I o N (no proporcionales)? Explica por qué.<br><b>a)</b> Los litros de gasolina que echas y lo que pagas.<br><b>b)</b> Los amigos que comparten una pizza y las porciones que toca a cada uno.<br><b>c)</b> La edad de una persona y su número de pie.<br><b>d)</b> La velocidad de un autobús y el tiempo que tarda de Sevilla a Madrid.",
      pasos:[
        "Pregunta clave: si una se hace el <b>doble</b>, ¿la otra se hace el doble, la mitad o ninguna de las dos?",
        "<b>a)</b> Doble de litros → doble de dinero: <b>D</b>",
        "<b>b)</b> Doble de amigos → mitad de porciones para cada uno: <b>I</b>",
        "<b>c)</b> Con el doble de años no tienes el doble de pie: <b>N</b>",
        "<b>d)</b> Doble de velocidad → mitad de tiempo: <b>I</b>"
      ],
      res:"a) D&ensp;·&ensp;b) I&ensp;·&ensp;c) N&ensp;·&ensp;d) I" },
    { nivel:"Aplicación", min:5,
      enun:`El ticket de una gasolinera muestra estos datos. ¿Son directamente proporcionales? Calcula la constante y explica qué significa.`+tabla([["Litros","10","","20","","35"],["Precio (€)","15,50","","31","","54,25"]]),
      pasos:[
        "Si es directa, el <b>cociente</b> precio : litros tiene que ser siempre el mismo.",
        R`$\dfrac{15,50}{10} = 1,55 \qquad \dfrac{31}{20} = 1,55 \qquad \dfrac{54,25}{35} = 1,55$`,
        "Siempre sale lo mismo → son <b>D</b>.",
        "La constante <b>1,55 €/L</b> es el precio de un litro de gasolina."
      ],
      res:"Sí, D. Constante 1,55 €/L (el litro cuesta 1,55 €)" },
    { nivel:"Práctica", min:5,
      enun:"La impresora del instituto imprime 75 páginas en 3 minutos. ¿Cuánto tardará en imprimir el dossier de la excursión, que tiene 400 páginas?",
      pasos:[
        "Cuadro: Páginas → Minutos. 75 → 3 &nbsp;y&nbsp; 400 → <i>x</i>",
        "Doble de páginas → doble de tiempo: <b>D</b>. La fracción se queda igual.",
        R`$\dfrac{75}{400} = \dfrac{3}{x} \;\Rightarrow\; x = \dfrac{400 \cdot 3}{75} = \dfrac{1200}{75} = 16$`,
        "Reducción a la unidad: 1 página tarda 3 : 75 = 0,04 min → 400 · 0,04 = 16 min ✓"
      ],
      res:"Tarda <b>16 minutos</b>" },
    { nivel:"Práctica", min:5,
      enun:"Para el viaje de fin de curso se alquila un autobús y su precio se reparte a partes iguales. Si van 30 alumnos, cada uno paga 24 €. Al final se apuntan 36 alumnos. ¿Cuánto pagará cada uno?",
      pasos:[
        "Cuadro: Alumnos → € cada uno. 30 → 24 &nbsp;y&nbsp; 36 → <i>x</i>",
        "Doble de alumnos → cada uno paga la mitad: <b>I</b>. <b>Le damos la vuelta</b> a la fracción de la <i>x</i>.",
        R`$\dfrac{30}{36} = \dfrac{x}{24} \;\Rightarrow\; x = \dfrac{30 \cdot 24}{36} = \dfrac{720}{36} = 20$`,
        "¿Tiene sentido? Más alumnos → cada uno paga menos: 20 € < 24 € ✓ (el autobús cuesta 30 · 24 = 720 € en los dos casos)"
      ],
      res:"Cada alumno paga <b>20 €</b>" },
    { nivel:"Problema", min:7,
      enun:"En un mapa de senderismo a escala 1 : 25 000, la ruta hasta el refugio mide 20 cm.<br><b>a)</b> ¿Cuántos km mide la ruta de verdad?<br><b>b)</b> Si caminamos a 4 km por hora, ¿cuánto tardaremos en llegar?",
      pasos:[
        "<b>a)</b> Escala 1 : 25 000 → 1 cm del mapa son 25 000 cm reales.",
        R`$20 \cdot 25\,000 = 500\,000$ cm $= 5$ km &nbsp;(100 000 cm = 1 km)`,
        "<b>b)</b> Km → Minutos: 4 km → 60 min &nbsp;y&nbsp; 5 km → <i>x</i>. Doble de km → doble de tiempo: <b>D</b>.",
        R`$\dfrac{4}{5} = \dfrac{60}{x} \;\Rightarrow\; x = \dfrac{5 \cdot 60}{4} = 75$ min $= 1$ h $15$ min`
      ],
      res:"a) 5 km&ensp;·&ensp;b) 1 h 15 min" },
    { nivel:"Problema", min:8,
      enun:"Un campamento de verano tiene comida para 40 niños durante 15 días. A los 5 días llegan 10 niños más. Si cada niño come lo mismo, ¿para cuántos días más habrá comida?",
      pasos:[
        "<b>1.º</b> Han pasado 5 días: queda comida para 40 niños durante 15 − 5 = 10 días.",
        "<b>2.º</b> Ahora son 40 + 10 = 50 niños. Niños → Días: 40 → 10 &nbsp;y&nbsp; 50 → <i>x</i>",
        "Más niños → la comida dura menos días: <b>I</b>. Le damos la vuelta a la fracción de la <i>x</i>.",
        R`$\dfrac{40}{50} = \dfrac{x}{10} \;\Rightarrow\; x = \dfrac{40 \cdot 10}{50} = 8$`
      ],
      res:"Habrá comida para <b>8 días más</b>" }
  ],

  /* ===== TAREAS PARA CASA ===== */
  casa: [
    { nivel:"Básico",
      enun:"Un pack de 6 latas de refresco cuesta 4,20 €. ¿Cuánto cuestan 15 latas al mismo precio? Resuélvelo de las dos formas: por reducción a la unidad y por regla de tres.",
      pasos:[R`<b>Reducción a la unidad:</b> 1 lata cuesta $4,20 : 6 = 0,70$ € → 15 latas: $15 \cdot 0,70 = 10,50$ €`,
             R`<b>Regla de tres (D):</b> $\dfrac{6}{15} = \dfrac{4,20}{x} \;\Rightarrow\; x = \dfrac{15 \cdot 4,20}{6} = \dfrac{63}{6} = 10,50$ €`],
      res:"15 latas cuestan 10,50 €" },
    { nivel:"Básico",
      enun:`Completa las tablas. Di si son D o I y escribe la constante.<br><b>a)</b> Sueldo de un trabajo de verano:`+tabla([["Horas","2","","5","","8","","b"],["Sueldo (€)","24","","a","","96","","120"]])+`<b>b)</b> Grifos iguales llenando una piscina:`+tabla([["Grifos","2","","3","","6"],["Horas","9","","a","","b"]]),
      pasos:[R`<b>a)</b> Doble de horas → doble de sueldo: D. Constante (cociente): $\dfrac{24}{2} = 12$ €/h`,
             R`$a = 5 \cdot 12 = 60$ € $\qquad b = 120 : 12 = 10$ horas`,
             R`<b>b)</b> Doble de grifos → mitad de horas: I. Constante (producto): $2 \cdot 9 = 18$`,
             R`$3 \cdot a = 18 \Rightarrow a = 6$ h $\qquad 6 \cdot b = 18 \Rightarrow b = 3$ h`],
      res:"a) D, k = 12 €/h, a = 60, b = 10&ensp;·&ensp;b) I, k = 18, a = 6, b = 3" },
    { nivel:"Consolidación",
      enun:"Un coche consume 6,5 litros de gasolina cada 100 km. ¿Cuántos litros gastará en un viaje de Madrid a Valencia (360 km)? Si el litro cuesta 1,60 €, ¿cuánto costará la gasolina del viaje?",
      pasos:[R`Km → Litros, <b>D</b>: $\dfrac{100}{360} = \dfrac{6,5}{x} \;\Rightarrow\; x = \dfrac{360 \cdot 6,5}{100} = 23,4$ L`,
             R`Litros → €, <b>D</b>: $23,4 \cdot 1,60 = 37,44$ €`],
      res:"23,4 litros y 37,44 €" },
    { nivel:"Consolidación",
      enun:"Con su paga, Lucía puede ir 12 veces al cine si la entrada cuesta 7 €. Si suben la entrada a 8,40 €, ¿cuántas veces podrá ir con el mismo dinero?",
      pasos:["Precio de la entrada → Veces. Entrada más cara → menos veces: <b>I</b>.",
             R`Le damos la vuelta a la de la $x$: $\dfrac{7}{8,40} = \dfrac{x}{12} \;\Rightarrow\; x = \dfrac{7 \cdot 12}{8,40} = \dfrac{84}{8,40} = 10$`,
             "Comprueba: la paga es 12 · 7 = 84 € y 10 · 8,40 = 84 € ✓"],
      res:"Podrá ir <b>10 veces</b>" },
    { nivel:"Problema",
      enun:"El plano de un piso está a escala 1 : 50. En el plano, el salón mide 9 cm de largo y 7 cm de ancho.<br><b>a)</b> ¿Cuáles son sus medidas reales?<br><b>b)</b> ¿Cuántos metros cuadrados tiene el salón?",
      pasos:[R`<b>a)</b> 1 cm del plano son 50 cm reales: $9 \cdot 50 = 450$ cm $= 4,5$ m &nbsp;y&nbsp; $7 \cdot 50 = 350$ cm $= 3,5$ m`,
             R`<b>b)</b> Área $= 4,5 \cdot 3,5 = 15,75$ m²`],
      res:"a) 4,5 m × 3,5 m&ensp;·&ensp;b) 15,75 m²" },
    { nivel:"Problema",
      enun:"Viaje de estudios a Londres. Supón que 1 € = 0,85 libras (£).<br><b>a)</b> Cambias 300 € antes de salir. ¿Cuántas libras te dan?<br><b>b)</b> Al volver te sobran 34 £. ¿Cuántos euros son?",
      pasos:["El cambio de moneda es una proporcionalidad <b>directa</b>: el doble de euros, el doble de libras.",
             R`<b>a)</b> De euros a libras, <b>multiplico</b>: $300 \cdot 0,85 = 255$ £`,
             R`<b>b)</b> De libras a euros, <b>divido</b>: $34 : 0,85 = 40$ €`],
      res:"a) 255 £&ensp;·&ensp;b) 40 €" },
    { nivel:"Para pensar",
      enun:"En una bicicleta, el plato (donde están los pedales) tiene 48 dientes y el piñón de la rueda trasera tiene 16.<br><b>a)</b> Por cada vuelta de los pedales, ¿cuántas vueltas da la rueda?<br><b>b)</b> ¿Y si cambias a un piñón de 24 dientes?<br><b>c)</b> ¿Qué marcha es mejor para subir una cuesta? ¿Por qué?",
      pasos:["Por la cadena pasan los mismos dientes en el plato y en el piñón. Más dientes → menos vueltas: <b>I</b> (el producto dientes · vueltas es constante).",
             R`<b>a)</b> $48 \cdot 1 = 16 \cdot x \;\Rightarrow\; x = 3$ vueltas`,
             R`<b>b)</b> $48 \cdot 1 = 24 \cdot x \;\Rightarrow\; x = 2$ vueltas`,
             "<b>c)</b> Con el piñón de 24 la rueda da menos vueltas por pedalada: avanzas menos, pero cuesta menos esfuerzo. Es la marcha para subir."],
      res:"a) 3 vueltas&ensp;·&ensp;b) 2 vueltas&ensp;·&ensp;c) el piñón de 24" },
    { nivel:"Para pensar",
      enun:"Una empresa de reformas ha pintado 1/4 de un colegio en 5 días, trabajando 6 horas al día. Si a partir de ahora trabaja 9 horas al día, ¿cuántos días tardará en terminar?",
      pasos:[R`<b>1.º</b> Le falta $\dfrac{3}{4}$ del colegio. Si $\dfrac{1}{4}$ son 5 días, $\dfrac{3}{4}$ son $3 \cdot 5 = 15$ días a 6 horas al día.`,
             "<b>2.º</b> Horas al día → Días: 6 → 15 &nbsp;y&nbsp; 9 → <i>x</i>. Más horas al día → menos días: <b>I</b>.",
             R`$\dfrac{6}{9} = \dfrac{x}{15} \;\Rightarrow\; x = \dfrac{6 \cdot 15}{9} = 10$`],
      res:"Tardará <b>10 días</b> más" }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {nota:[{lista:[
        "Reconocer si dos magnitudes son <b>directamente</b> (D), <b>inversamente</b> (I) o <b>no proporcionales</b> (N).",
        "Calcular e interpretar la <b>constante de proporcionalidad</b>.",
        "Resolver problemas con la <b>regla de tres</b> y por <b>reducción a la unidad</b>.",
        "Usar la proporcionalidad en <b>escalas</b> y <b>cambio de moneda</b>."
      ]}], etq:"🎯 En este apartado vas a aprender"}
    ]},

    { titulo:"¿Qué es una magnitud?", cuerpo:[
      {def:["Una <b>magnitud</b> es algo que se puede <b>medir o contar</b>: kilos, euros, horas, km/h, número de obreros, litros…"], etq:"Magnitud"},
      {p:"Muchas veces dos magnitudes están relacionadas: si cambia una, cambia la otra."},
      {cols:[
        [{nota:["🍊 Los <b>kilos</b> de naranjas y el <b>precio</b> que pagas."], etq:"Ejemplo"}],
        [{nota:["👷 Los <b>obreros</b> de una obra y los <b>días</b> que tardan."], etq:"Ejemplo"}]
      ]},
      {p:"Vamos a ver <b>cómo</b> cambian: ¿a la vez y en la misma proporción?, ¿una sube y la otra baja?, ¿o sin ninguna regla?"}
    ]},

    { titulo:"Magnitudes directamente proporcionales (D)", cuerpo:[
      {def:["Dos magnitudes son <b>directamente proporcionales</b> si al multiplicar una por un número, la otra queda <b>multiplicada por el mismo número</b>.",
            "<b>doble → doble &nbsp;·&nbsp; triple → triple &nbsp;·&nbsp; mitad → mitad</b>"], etq:"Directamente proporcionales (D)"},
      {html:tabla([["Kilos","1","×2 →","2","×2 →","4","×3 →","12"],["Precio (€)","3","×2 →","6","×2 →","12","×3 →","36"]])},
      {p:"Doble de kilos ⟹ doble de precio. Triple de kilos ⟹ triple de precio."}
    ]},

    { titulo:"En una directa, el cociente es constante", cuerpo:[
      {prop:[R`Si a un valor $a$ le corresponde $b$, y a $c$ le corresponde $d$, el <b>cociente</b> siempre es el mismo:`,
             {formula:R`\frac{b}{a} = \frac{d}{c} = k`},
             "Ese número <b>k</b> es la <b>constante de proporcionalidad</b>."], etq:"Constante (D)"},
      {ej:{enun:"Kilos: 2 y 4. Precio: 6 € y 12 €. ¿Cuál es la constante? ¿Qué significa?",
        pasos:[R`$\dfrac{6}{2} = 3 \qquad \dfrac{12}{4} = 3$`, "La constante <b>siempre lleva unidades y significado</b>: 3 €/kg"],
        res:"k = 3 €/kg: el kilo cuesta 3 €"}}
    ]},

    { titulo:"Magnitudes inversamente proporcionales (I)", cuerpo:[
      {def:["Dos magnitudes son <b>inversamente proporcionales</b> si al multiplicar una por un número, la otra queda <b>dividida entre ese número</b>.",
            "<b>doble → mitad &nbsp;·&nbsp; triple → tercera parte</b>"], etq:"Inversamente proporcionales (I)"},
      {html:tabla([["Obreros","2","×2 →","4","×2 →","8"],["Días","12",": 2 →","6",": 2 →","3"]])},
      {p:"Doble de obreros ⟹ mitad de días."}
    ]},

    { titulo:"En una inversa, el producto es constante", cuerpo:[
      {prop:["Ahora lo que no cambia es el <b>producto</b>:",
             {formula:R`a \cdot b = c \cdot d = k`}], etq:"Constante (I)"},
      {ej:{enun:"Obreros: 2, 4 y 8. Días: 12, 6 y 3. ¿Cuál es la constante? ¿Qué significa?",
        pasos:[R`$2 \cdot 12 = 24 \qquad 4 \cdot 6 = 24 \qquad 8 \cdot 3 = 24$`, "Siempre 24: un solo obrero tardaría 24 días."],
        res:"k = 24"}},
      {aviso:["En una inversa <b>no</b> se comprueba con cocientes: 12 : 2 = 6 y 6 : 4 = 1,5 no coinciden. Hay que multiplicar."]}
    ]},

    { titulo:"Cuidado: no siempre son proporcionales (N)", cuerpo:[
      {aviso:["Que las dos crezcan a la vez <b>no basta</b>. Tiene que ser «doble → doble»."], etq:"⚠️ «A más, más» no es suficiente"},
      {ej:{etq:"🚕 Un taxi", enun:"Un taxi cobra 3 € al subir y 1 € por cada km. ¿Son proporcionales los km y el precio?",
        pasos:["1 km → 3 + 1 = 4 € &nbsp;·&nbsp; 2 km → 3 + 2 = 5 €", "Doble de km, pero no doble de precio (5 ≠ 8)"],
        res:"No son proporcionales: N"}},
      {nota:["La edad y la altura de una persona crecen juntas, pero a los 10 años no mides el doble que a los 5. Tampoco son proporcionales."]}
    ]},

    { titulo:"¿D, I o N? Cómo decidirlo", cuerpo:[
      {prop:["Imagina que una magnitud se hace el <b>doble</b>. ¿Qué le pasa a la otra?",
             "<b>el doble → D</b> &nbsp;·&nbsp; <b>la mitad → I</b> &nbsp;·&nbsp; <b>ninguna de las dos → N</b>"], etq:"La pregunta clave"},
      {ej:{etq:"✍️ Practicamos", enun:"¿D, I o N?",
        pasos:["Litros de agua de una garrafa y lo que pesa → <b>D</b>",
               "Grifos iguales abiertos y tiempo en llenar una piscina → <b>I</b>",
               "Velocidad de un tren y tiempo de un viaje → <b>I</b>",
               "Nota de un examen y horas que has dormido → <b>N</b>"]}}
    ]},

    { titulo:"Regla de tres simple directa", cuerpo:[
      {ej:{enun:"4 kg de naranjas cuestan 6 €. ¿Cuánto cuestan 10 kg?",
        pasos:[cuadro("Kilos","Precio (€)",["4","6"],["10","x"],"","D"),
               "Si los kilos se duplican, el precio se duplica: <b>DIRECTA (D)</b>.",
               R`Escribo las fracciones tal como están en el cuadro: $\dfrac{4}{10} = \dfrac{6}{x}$`,
               R`En cruz: $x = \dfrac{10 \cdot 6}{4} = \dfrac{60}{4} = 15$`],
        res:"10 kg cuestan <b>15 €</b>"}}
    ]},

    { titulo:"Otra forma: reducción a la unidad", cuerpo:[
      {def:["Primero calculo cuánto vale <b>1</b> y después multiplico."], etq:"Reducción a la unidad"},
      {ej:{enun:"4 kg de naranjas cuestan 6 €. ¿Cuánto cuestan 10 kg?",
        pasos:[R`1 kg cuesta $\dfrac{6}{4} = 1,50$ €`, R`10 kg cuestan $10 \cdot 1,50 = 15$ €`],
        res:"15 € (sale lo mismo que con la regla de tres)"}},
      {nota:["El valor de 1 kg (1,50 €/kg) es justo la <b>constante de proporcionalidad</b>."]}
    ]},

    { titulo:"Regla de tres simple inversa", cuerpo:[
      {ej:{enun:"6 obreros tardan 15 días en hacer una obra. ¿Cuánto tardarán 9 obreros?",
        pasos:[cuadro("Obreros","Días",["6","15"],["9","x"],"","I"),
               "Si los obreros se duplican, los días se reducen a la mitad: <b>INVERSA (I)</b>.",
               R`<b>Le damos la vuelta</b> a la fracción de los días: $\dfrac{15}{x} \to \dfrac{x}{15}$`,
               R`$\dfrac{6}{9} = \dfrac{x}{15} \;\Rightarrow\; x = \dfrac{6 \cdot 15}{9} = \dfrac{90}{9} = 10$`,
               "Comprueba: con más obreros tienen que tardar menos. 10 < 15 ✓"],
        res:"9 obreros tardan <b>10 días</b>"}}
    ]},

    { titulo:"La inversa por reducción a la unidad", cuerpo:[
      {ej:{enun:"6 obreros tardan 15 días. ¿Cuánto tardarán 9 obreros?",
        pasos:[R`Un obrero solo tardaría 6 veces más: $6 \cdot 15 = 90$ días`,
               R`9 obreros tardan 9 veces menos: $90 : 9 = 10$ días`],
        res:"10 días"}},
      {aviso:[R`Si en una inversa no le das la vuelta: $\dfrac{6}{9} = \dfrac{15}{x}$ → $x = 22,5$ días. ¡Más obreros y más días! Por eso hay que comprobar siempre si tiene sentido.`]}
    ]},

    { titulo:"Problema: la receta de crepes", cuerpo:[
      {ej:{etq:"✍️ Problema resuelto", enun:"Una receta de crepes para 4 personas lleva 250 g de harina y 500 ml de leche. ¿Qué cantidades necesitas para 10 personas?",
        pasos:["Personas → Harina: doble de personas, doble de harina: <b>D</b>.",
               R`$\dfrac{4}{10} = \dfrac{250}{x} \;\Rightarrow\; x = \dfrac{10 \cdot 250}{4} = 625$ g de harina`,
               R`Leche: $\dfrac{4}{10} = \dfrac{500}{y} \;\Rightarrow\; y = \dfrac{10 \cdot 500}{4} = 1250$ ml`,
               "Atajo: 10 personas son 2,5 veces 4 personas → todo se multiplica por 2,5."],
        res:"625 g de harina y 1,25 L de leche"}}
    ]},

    { titulo:"Escalas: los planos y los mapas", cuerpo:[
      {def:["La <b>escala</b> es la razón entre una medida del plano y la medida real, en la <b>misma unidad</b>.",
            "Escala <b>1 : 50 000</b> → 1 cm del mapa son 50 000 cm reales (500 m)."], etq:"Escala"},
      {formula:R`\text{Real} = \text{plano} \cdot 50\,000 \qquad \text{Plano} = \text{real} : 50\,000`},
      {ej:{enun:"En un mapa a escala 1 : 50 000, dos pueblos están a 6 cm. ¿Qué distancia real hay?",
        pasos:[R`$6 \cdot 50\,000 = 300\,000$ cm`, "Paso a km: 100 000 cm = 1 km → 300 000 cm = 3 km"],
        res:"Hay <b>3 km</b>"}}
    ]},

    { titulo:"Escalas: del real al plano y calcular la escala", cuerpo:[
      {cols:[
        [{ej:{etq:"✍️ Del real al plano", enun:"Una habitación mide 5 m. ¿Cuánto medirá en un plano a escala 1 : 200?",
          pasos:["Misma unidad: 5 m = 500 cm", R`$500 : 200 = 2,5$`], res:"2,5 cm en el plano"}}],
        [{ej:{etq:"✍️ Calcular la escala", enun:"Dos pueblos a 2 km aparecen a 4 cm en un mapa. ¿Cuál es la escala?",
          pasos:["Misma unidad: 2 km = 200 000 cm", R`$200\,000 : 4 = 50\,000$`], res:"Escala 1 : 50 000"}}]
      ]},
      {nota:["La escala siempre se escribe <b>1 : número</b>, con el plano y la realidad en la misma unidad."]}
    ]},

    { titulo:"Cambio de moneda (divisas)", cuerpo:[
      {def:["Cambiar euros por otra moneda es una proporcionalidad <b>directa</b>: el doble de euros, el doble de dólares.",
            "Si <b>1 € = 1,10 $</b> (tipo de cambio): de euros a dólares, <b>multiplico</b>; de dólares a euros, <b>divido</b>."], etq:"Divisas"},
      {cols:[
        [{ej:{etq:"✍️ € → $", enun:"¿Cuántos dólares son 250 €?", pasos:[R`$250 \cdot 1,10 = 275$`], res:"275 $"}}],
        [{ej:{etq:"✍️ $ → €", enun:"¿Cuántos euros son 88 $?", pasos:[R`$88 : 1,10 = 80$`], res:"80 €"}}]
      ]},
      {nota:["Comprueba: como 1 € vale más de 1 $, siempre te dan <b>más dólares</b> que euros entregas."]}
    ]},

    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:["<b>Pensar que «a más, más» siempre es D</b> (el taxi) o que «a más, menos» siempre es I: hay que comprobar «doble → doble» o «doble → mitad»."], etq:"⚠️ Error 1"},
      {aviso:["<b>En una inversa, no darle la vuelta</b> a la fracción de la <i>x</i>: sale un resultado sin sentido (más obreros y más días)."], etq:"⚠️ Error 2"},
      {aviso:["<b>Mezclar unidades</b>: minutos con horas, gramos con kilos, cm del mapa con km reales."], etq:"⚠️ Error 3"}
    ]},

    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{cols:[
        ["<b>D</b>: doble → doble. Cociente constante $\\dfrac{b}{a} = k$. La fracción se queda igual.".replace(/\\\\/g,"\\"),
         R`<b>I</b>: doble → mitad. Producto constante $a \cdot b = k$. <b>Le damos la vuelta</b> a la fracción de la $x$.`,
         "<b>N</b>: ni doble ni mitad (taxi, edad y altura)."],
        ["<b>Regla de tres:</b> cuadro → ¿D o I? → fracciones → en cruz → ¿tiene sentido?",
         "<b>Reducción a la unidad:</b> cuánto vale 1 y multiplico.",
         "<b>Escala 1 : E:</b> real = plano · E. <b>Divisas:</b> € → otra, multiplico; otra → €, divido."]
      ]}]},
      {estudio:[
        {comp:{q:"3 cuadernos cuestan 4,50 €. ¿Cuánto cuestan 8 cuadernos?", sol:12, unidad:"€",
          explic:R`D: $\dfrac{3}{8} = \dfrac{4,50}{x} \Rightarrow x = \dfrac{8 \cdot 4,50}{3} = 12$ €`, pista:"Más cuadernos, más dinero: la fracción se queda igual."}},
        {comp:{q:"4 pintores tardan 9 días en pintar una casa. ¿Cuánto tardarán 6 pintores?", sol:6, unidad:"días",
          explic:R`I: $\dfrac{4}{6} = \dfrac{x}{9} \Rightarrow x = \dfrac{4 \cdot 9}{6} = 6$ días`, pista:"Más pintores, menos días: dale la vuelta a la fracción de la x."}},
        {comp:{q:"Velocidad de un coche y tiempo de un viaje. ¿Qué tipo de proporcionalidad es?", opciones:["D","I","N"], ok:1,
          explic:"Doble de velocidad → mitad de tiempo: inversa.", pista:"Si vas el doble de rápido, ¿tardas el doble o la mitad?"}},
        {comp:{q:"En un mapa a escala 1 : 100 000 hay 3,5 cm entre dos pueblos. ¿Cuántos km son?", sol:3.5, unidad:"km",
          explic:R`$3,5 \cdot 100\,000 = 350\,000$ cm = 3,5 km`, pista:"Multiplica por 100 000 y recuerda que 100 000 cm = 1 km."}}
      ]}
    ]}
  ]
});
})();

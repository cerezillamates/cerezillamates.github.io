/* 2.º ESO · Tema 3 · Apartado 6.2: Porcentajes. Tipo 2: calcular el total
   Cambio pedido por la profesora (16-11-2026): el tipo 2 se resuelve con REGLA DE TRES (el total es el 100 %).
   Cambio pedido por la profesora (20-11-2026): sin la fórmula C_F = I_V · C_I (solo en el tipo 1). */
(function(){
const R = String.raw;
const barra = (trozos, pie) => `<figure class="dib"><div class="barra-pct">${trozos.map(t=>`<span class="${t[2]||""}" style="flex:${t[0]}">${t[1]}</span>`).join("")}</div>${pie?`<figcaption>${pie}</figcaption>`:""}</figure>`;
const cuadro = (m1, m2, a, b, t) => `<table class="t cuadro"><tr><th>${m1}</th><th class="fl">(${t||"D"}) ⟶</th><th>${m2}</th></tr><tr><td>${a[0]}</td><td></td><td>${a[1]}</td></tr><tr><td>${b[0]}</td><td></td><td class="x">${b[1]}</td></tr></table>`;
const pct = (mag, pa, va) => cuadro("Porcentaje (%)", mag, [pa, va], ["100", "x"], "D");
const flecha = (pasos) => `<div class="cadena">${pasos.map((p,k)=>k%2 ? `<div class="op">${p}<i>━━━►</i></div>` : `<div class="caja">${p}</div>`).join("")}</div>`;
TEMA.registrar({
  num: "6.2",
  titulo: "Porcentajes · Tipo 2: calcular el total",
  videos: [
    {t:"Aumentos y disminuciones porcentuales", url:"https://www.youtube.com/watch?v=sh0ytvn8Y4M"}
  ],

  clase: [
    { nivel:"Problema", min:5,
      enun:"En una encuesta del instituto, 54 alumnos, que son el 45 % de los encuestados, prefieren el baloncesto. ¿Cuántos alumnos respondieron la encuesta?",
      pasos:["Busco el <b>total</b>, y el total es siempre el <b>100 %</b>. Más porcentaje → más alumnos: <b>D</b>.",
             pct("Alumnos", "45", "54"),
             R`$\dfrac{45}{100} = \dfrac{54}{x} \;\Rightarrow\; x = \dfrac{100 \cdot 54}{45} = \dfrac{5400}{45} = 120$`,
             R`Compruebo: el 45 % de 120 es $\dfrac{120 \cdot 45}{100} = 54$ ✓`],
      res:"Respondieron la encuesta <b>120 alumnos</b>." },
    { nivel:"Aplicación", min:4,
      enun:"Un portátil cuesta 544,50 € con el 21 % de IVA incluido. ¿Cuál es su precio sin IVA?",
      pasos:["<b>Paso 1.</b> El precio sin IVA es el 100 %. Con el IVA pago $100 + 21 = 121\\,\\%$.",
             "<b>Paso 2.</b> Regla de tres: más porcentaje → más euros: <b>D</b>.",
             pct("Precio (€)", "121", "544,50"),
             R`$\dfrac{121}{100} = \dfrac{544,50}{x} \;\Rightarrow\; x = \dfrac{100 \cdot 544,50}{121} = \dfrac{54\,450}{121} = 450$ €`],
      res:"Sin IVA, el portátil cuesta <b>450 €</b>." },
    { nivel:"Práctica", min:5,
      enun:"Aprovechando el Black Friday me he comprado una sudadera por 28 € con una rebaja del 20 %. ¿Cuánto costaba antes de la rebaja?",
      pasos:["<b>Paso 1.</b> El precio de antes es el 100 %. Con la rebaja pago $100 - 20 = 80\\,\\%$.",
             "<b>Paso 2.</b> Regla de tres (D):",
             pct("Precio (€)", "80", "28"),
             R`$\dfrac{80}{100} = \dfrac{28}{x} \;\Rightarrow\; x = \dfrac{100 \cdot 28}{80} = \dfrac{2800}{80} = 35$ €`,
             R`Compruebo: el 20 % de 35 es 7 € de rebaja, y $35 - 7 = 28$ ✓`],
      res:"La sudadera costaba <b>35 €</b>." },
    { nivel:"Práctica", min:5,
      enun:"En unas zapatillas me han descontado 9 €, que es el 15 % del precio.<br><b>a)</b> ¿Cuánto costaban?<br><b>b)</b> ¿Cuánto he pagado?",
      pasos:["<b>a)</b> Ojo: ahora los 9 € son <b>lo que me descuentan</b>, es decir, el 15 %.",
             pct("Precio (€)", "15", "9"),
             R`$\dfrac{15}{100} = \dfrac{9}{x} \;\Rightarrow\; x = \dfrac{100 \cdot 9}{15} = \dfrac{900}{15} = 60$ €`,
             R`<b>b)</b> Pago lo que costaban menos el descuento: $60 - 9 = 51$ €`],
      res:"a) Las zapatillas costaban <b>60 €</b>.<br>b) He pagado <b>51 €</b>." },
    { nivel:"Problema", min:5,
      enun:"En el ticket de un taller pone que el IVA (21 %) son 63 €. ¿Cuánto cuesta el arreglo sin IVA? ¿Y con IVA?",
      pasos:["Los 63 € son el 21 % del precio sin IVA, que es el 100 %.",
             pct("Precio (€)", "21", "63"),
             R`$\dfrac{21}{100} = \dfrac{63}{x} \;\Rightarrow\; x = \dfrac{100 \cdot 63}{21} = \dfrac{6300}{21} = 300$ €`,
             R`Con IVA: $300 + 63 = 363$ €`],
      res:"Sin IVA el arreglo cuesta <b>300 €</b> y con IVA, <b>363 €</b>." }
  ],

  casa: [
    { nivel:"Problema", enun:"18 alumnos de 2.º, que son el 60 % del curso, van a la excursión. ¿Cuántos alumnos hay en 2.º?",
      pasos:[pct("Alumnos", "60", "18"), R`$\dfrac{60}{100} = \dfrac{18}{x} \;\Rightarrow\; x = \dfrac{100 \cdot 18}{60} = 30$`],
      res:"En 2.º hay <b>30 alumnos</b>." },
    { nivel:"Básico", enun:"El 25 % de los socios de un club, 45 personas, son menores de edad. ¿Cuántos socios tiene el club?",
      pasos:[pct("Socios", "25", "45"), R`$\dfrac{25}{100} = \dfrac{45}{x} \;\Rightarrow\; x = \dfrac{100 \cdot 45}{25} = 180$`],
      res:"El club tiene <b>180 socios</b>." },
    { nivel:"Consolidación", enun:"Un abrigo rebajado un 30 % me ha costado 63 €. ¿Cuánto costaba antes?",
      pasos:[R`Con la rebaja pago $100 - 30 = 70\,\%$`, pct("Precio (€)", "70", "63"),
             R`$\dfrac{70}{100} = \dfrac{63}{x} \;\Rightarrow\; x = \dfrac{100 \cdot 63}{70} = 90$ €`],
      res:"El abrigo costaba <b>90 €</b>." },
    { nivel:"Consolidación", enun:"Unas gafas cuestan 121 € con el 21 % de IVA incluido. ¿Cuánto cuestan sin IVA?",
      pasos:[R`Con IVA pago $100 + 21 = 121\,\%$`, pct("Precio (€)", "121", "121"),
             R`$\dfrac{121}{100} = \dfrac{121}{x} \;\Rightarrow\; x = \dfrac{100 \cdot 121}{121} = 100$ €`],
      res:"Sin IVA, las gafas cuestan <b>100 €</b>." },
    { nivel:"Consolidación", enun:"Con un descuento del 20 % me ahorro 6 € en un libro. ¿Cuánto costaba? ¿Cuánto pago?",
      pasos:["Los 6 € son el 20 % (lo que me ahorro).", pct("Precio (€)", "20", "6"),
             R`$\dfrac{20}{100} = \dfrac{6}{x} \;\Rightarrow\; x = \dfrac{100 \cdot 6}{20} = 30$ €`, R`Pago: $30 - 6 = 24$ €`],
      res:"El libro costaba <b>30 €</b> y pago <b>24 €</b>." },
    { nivel:"Problema", enun:"Un pantano está al 60 % de su capacidad y tiene 240 hm³ de agua. ¿Cuál es su capacidad? ¿Cuántos hm³ le faltan para llenarse?",
      pasos:[pct("Agua (hm³)", "60", "240"), R`$\dfrac{60}{100} = \dfrac{240}{x} \;\Rightarrow\; x = \dfrac{100 \cdot 240}{60} = 400$ hm³`,
             R`Le faltan $400 - 240 = 160$ hm³`],
      res:"El pantano tiene una capacidad de <b>400 hm³</b> y le faltan <b>160 hm³</b> para llenarse." },
    { nivel:"Para pensar", enun:"Lucas dice: «Si con un 20 % de rebaja pago 40 €, antes costaba 40 + el 20 % de 40 = 48 €». ¿Tiene razón?",
      pasos:[R`Con la regla de tres: pago el 80 %, así que $\dfrac{80}{100} = \dfrac{40}{x} \Rightarrow x = \dfrac{100 \cdot 40}{80} = 50$ €`,
             R`Compruebo los 48 € de Lucas: el 20 % de 48 es 9,60 y $48 - 9,60 = 38,40 \ne 40$ ✗`,
             "El 20 % se calcula sobre el precio de <b>antes</b> (50 €), no sobre lo que pago."],
      res:"Lucas <b>no</b> tiene razón: antes costaba <b>50 €</b>." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">Sé una parte: ¿cuánto era el total?</p>`}
    ]},
    { titulo:"El total es el 100 %", cuerpo:[
      {def:["Cuando busco el <b>total</b> (lo que había, el precio de antes, el precio sin IVA), ese total es el <b>100 %</b>."], etq:"La idea"},
      {html:barra([[30,"30 %","r"],[70,"70 %",""]],"9 alumnos son el 30 %… ¿cuántos somos en total?")},
      {ej:{enun:"9 alumnos de mi clase vienen en bici, que son el 30 % de la clase. ¿Cuántos alumnos somos?",
        pasos:["Más porcentaje → más alumnos: <b>D</b>.", pct("Alumnos", "30", "9"),
               R`$\dfrac{30}{100} = \dfrac{9}{x} \;\Rightarrow\; x = \dfrac{100 \cdot 9}{30} = 30$`,
               R`Compruebo: el 30 % de 30 es 9 ✓`],
        res:"En la clase somos <b>30 alumnos</b>."}}
    ]},
    { titulo:"Los dos pasos", cuerpo:[
      {prop:["<b>Paso 1.</b> ¿De qué porcentaje es el dato que me dan?", "<b>Paso 2.</b> Regla de tres directa con el 100 %, que es el total."], etq:"Siempre igual"},
      {html:`<table class="t tprop"><tr><th>Me dan…</th><th>Es el…</th></tr><tr><td>una parte («54 son el 45 %»)</td><td>45 %</td></tr><tr><td>el precio con una rebaja del 20 %</td><td>80 % (100 − 20)</td></tr><tr><td>el precio con el 21 % de IVA</td><td>121 % (100 + 21)</td></tr><tr><td>el descuento o el IVA en euros</td><td>20 % o 21 %</td></tr></table>`},
      {nota:["Lee bien: no es lo mismo <b>lo que pago</b> (80 %) que <b>lo que me descuentan</b> (20 %)."]}
    ]},
    { titulo:"¿Cuánto costaba antes?", cuerpo:[
      {ej:{etq:"👚 Problema de examen", enun:"Por el Black Friday me he comprado una blusa por 24 €. Si estaba rebajada un 28 %, ¿cuánto costaba antes?",
        pasos:[R`Pago $100 - 28 = 72\,\%$ del precio de antes.`, pct("Precio (€)", "72", "24"),
               R`$\dfrac{72}{100} = \dfrac{24}{x} \;\Rightarrow\; x = \dfrac{100 \cdot 24}{72} = \dfrac{2400}{72} \approx 33,33$ €`],
        res:"La blusa costaba <b>33,33 €</b>."}},
      {aviso:["¡No vale sumar el 28 % de 24! (24 + 6,72 = 30,72 €, mal): el 28 % era del precio de antes."]}
    ]},
    { titulo:"¿Cuánto cuesta sin IVA?", cuerpo:[
      {ej:{etq:"📱", enun:"Un móvil cuesta 242 € con el 21 % de IVA incluido. ¿Cuánto cuesta sin IVA?",
        pasos:[R`Pago $100 + 21 = 121\,\%$ del precio sin IVA.`, pct("Precio (€)", "121", "242"),
               R`$\dfrac{121}{100} = \dfrac{242}{x} \;\Rightarrow\; x = \dfrac{100 \cdot 242}{121} = 200$ €`],
        res:"Sin IVA, el móvil cuesta <b>200 €</b>."}},
      {html:flecha(["200 € (100 %)","+ 21 %","242 € (121 %)"])},
      {aviso:["Restar el 21 % a 242 € está <b>mal</b>: saldrían 191,18 € y no es el precio sin IVA."]}
    ]},
    { titulo:"Dado el descuento o el IVA en euros", cuerpo:[
      {cols:[
        [{ej:{etq:"💸 Descuento", enun:"Me han descontado 6 €, que es el 20 % del precio. ¿Cuánto costaba?",
          pasos:[pct("Precio (€)", "20", "6"), R`$x = \dfrac{100 \cdot 6}{20} = 30$ €`], res:"Costaba <b>30 €</b>."}}],
        [{ej:{etq:"🧾 IVA", enun:"El IVA (21 %) de una factura son 21 €. ¿Cuánto es sin IVA?",
          pasos:[pct("Precio (€)", "21", "21"), R`$x = \dfrac{100 \cdot 21}{21} = 100$ €`], res:"Sin IVA son <b>100 €</b>."}}]
      ]},
      {nota:["Si me dan <b>lo que pago</b>: 80 % o 121 %. Si me dan <b>el descuento o el IVA</b>: 20 % o 21 %."]}
    ]},
    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:["<b>Confundir la parte con el total</b>: el total es siempre el 100 %."], etq:"⚠️ Error 1"},
      {aviso:["<b>Sumar el porcentaje al precio rebajado</b>: el % era del precio de antes."], etq:"⚠️ Error 2"},
      {aviso:["<b>Poner el 20 % cuando pago el 80 %</b>: lee si el dato es lo que pagas o lo que te ahorras."], etq:"⚠️ Error 3"}
    ]},
    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{lista:[
        "Tipo 2: me dan una parte y su %, y busco el <b>total</b>.",
        "El total es el <b>100 %</b>.",
        "Paso 1: ¿de qué % es el dato? (pago con rebaja del 20 % → 80 %; con IVA del 21 % → 121 %).",
        "Paso 2: regla de tres directa y compruebo el resultado."
      ]}]},
      {estudio:[
        {comp:{q:"El 25 % de una cantidad es 14. ¿Cuál es la cantidad?", sol:56, explic:"25 → 14; 100 → x = 100 · 14 : 25 = 56", pista:"El total es el 100 %."}},
        {comp:{q:"Con el 21 % de IVA pago 60,50 €. ¿Precio sin IVA?", sol:50, unidad:"€", explic:"121 → 60,50; 100 → x = 100 · 60,50 : 121 = 50 €", pista:"Con IVA pagas el 121 %."}},
        {comp:{q:"Con una rebaja del 30 % pago 63 €. ¿Cuánto costaba?", sol:90, unidad:"€", explic:"70 → 63; 100 → x = 100 · 63 : 70 = 90 €", pista:"Con la rebaja pagas el 70 %."}}
      ]}
    ]}
  ]
});
})();

/* 2.º ESO · Tema 3 · Apartado 2: Proporcionalidad directa
   Método de la profesora: cuadro con las dos magnitudes, «doble → doble» (D), fracciones tal como están, en cruz.
   Ejercicios basados en las fichas de 2.º y con contextos cercanos. */
(function(){
const R = String.raw;
const tabla = (filas) => `<table class="t tprop">${filas.map(f=>`<tr>${f.map((c,k)=>k===0?`<th>${c}</th>`:(k%2===0?`<td class="op">${c}</td>`:`<td>${c}</td>`)).join("")}</tr>`).join("")}</table>`;
const cuadro = (m1, m2, a, b) => `<table class="t cuadro"><tr><th>${m1}</th><th class="fl">(D) ⟶</th><th>${m2}</th></tr><tr><td>${a[0]}</td><td></td><td>${a[1]}</td></tr><tr><td>${b[0]}</td><td></td><td class="x">${b[1]}</td></tr></table>`;

TEMA.registrar({
  num: 2,
  titulo: "Proporcionalidad directa",
  videos: [
    {t:"Cómo identificar si es directa o inversa", url:"https://www.youtube.com/watch?v=OyEcoAV3oFY"},
    {t:"Regla de tres simple directa e inversa", url:"https://www.youtube.com/watch?v=dHOBFb6SW-w"}
  ],

  clase: [
    { nivel:"Aplicación", min:4,
      enun:"En la frutería, un kilo de naranjas cuesta 3 €. Completa la tabla y escribe la constante de proporcionalidad."+tabla([["Kilos","1","","2","","5","","8"],["Precio (€)","3","","?","","?","","?"]]),
      pasos:["Cada kilo cuesta 3 €: multiplico los kilos por 3.", "2 · 3 = 6 € · 5 · 3 = 15 € · 8 · 3 = 24 €", "Constante: k = 3 €/kg (lo que cuesta 1 kilo)"],
      res:"6 €, 15 € y 24 €&ensp;·&ensp;k = 3 €/kg" },
    { nivel:"Aplicación", min:4,
      enun:"¿Son directamente proporcionales (D) o no (N)? Si son D, escribe la constante.<div class=\"tablas\"><div><b>A)</b> Fruta"+tabla([["Kilos","2","","4","","6"],["Precio (€)","3","","6","","9"]])+"</div><div><b>B)</b> Taxi"+tabla([["Km","1","","2","","3"],["Precio (€)","4","","5","","6"]])+"</div></div>",
      pasos:[R`<b>A)</b> Cocientes: $\dfrac{3}{2} = \dfrac{6}{4} = \dfrac{9}{6} = 1,5$ → siempre igual: <b>D</b>, k = 1,5 €/kg`,
             "<b>B)</b> Con el doble de km (1 → 2) no se paga el doble (4 → 5): <b>N</b>"],
      res:"A) D, k = 1,5 €/kg&ensp;·&ensp;B) N" },
    { nivel:"Práctica", min:5,
      enun:"Vuelta al cole: 6 cuadernos cuestan 9 €. ¿Cuánto cuestan 10 cuadernos?",
      pasos:[cuadro("Cuadernos","Precio (€)",["6","9"],["10","x"]), "Doble de cuadernos → doble de dinero: <b>D</b>.",
             R`$\dfrac{6}{10} = \dfrac{9}{x} \;\Rightarrow\; x = \dfrac{10 \cdot 9}{6} = 15$`,
             "Reducción a la unidad: 1 cuaderno = 9 : 6 = 1,50 € → 10 · 1,50 = 15 € ✓"],
      res:"10 cuadernos cuestan <b>15 €</b>" },
    { nivel:"Práctica", min:5,
      enun:"En el súper, 5 kg de patatas cuestan 6,50 €. ¿Cuánto cuestan 8 kg?",
      pasos:[cuadro("Kilos","Precio (€)",["5","6,50"],["8","x"]), "Más kilos → más dinero: <b>D</b>.",
             R`$\dfrac{5}{8} = \dfrac{6,50}{x} \;\Rightarrow\; x = \dfrac{8 \cdot 6,50}{5} = \dfrac{52}{5} = 10,40$`],
      res:"8 kg cuestan <b>10,40 €</b>" },
    { nivel:"Problema", min:6,
      enun:"<b>a)</b> En un mapa de tu comarca a escala 1 : 50 000, tu pueblo y el instituto están a 6 cm. ¿Qué distancia real hay?<br><b>b)</b> En el plano de tu habitación, a escala 1 : 50, la cama mide 4 cm. ¿Cuánto mide de verdad?",
      pasos:["<b>a)</b> 1 cm del mapa son 50 000 cm reales.", R`$6 \cdot 50\,000 = 300\,000$ cm $= 3$ km &nbsp;(100 000 cm = 1 km)`,
             R`<b>b)</b> $4 \cdot 50 = 200$ cm $= 2$ m`],
      res:"a) 3 km&ensp;·&ensp;b) 2 m" },
    { nivel:"Problema", min:6,
      enun:"Viaje de estudios a Londres. Supón que 1 € = 0,85 libras (£).<br><b>a)</b> Cambias 300 €. ¿Cuántas libras te dan?<br><b>b)</b> La entrada a un museo cuesta 17 £. ¿Cuántos euros son?",
      pasos:["El cambio de moneda es <b>D</b>: el doble de euros, el doble de libras.",
             R`<b>a)</b> De euros a libras, <b>multiplico</b>: $300 \cdot 0,85 = 255$ £`,
             R`<b>b)</b> De libras a euros, <b>divido</b>: $17 : 0,85 = 20$ €`],
      res:"a) 255 £&ensp;·&ensp;b) 20 €" }
  ],

  casa: [
    { nivel:"Básico",
      enun:"Un litro de aceite cuesta 4 €. Completa la tabla y escribe la constante."+tabla([["Litros","1","","3","","5","","10"],["Precio (€)","4","","?","","?","","?"]]),
      pasos:["Multiplico los litros por 4: 3 · 4 = 12 € · 5 · 4 = 20 € · 10 · 4 = 40 €", "Constante: 4 €/L"],
      res:"12 €, 20 € y 40 €&ensp;·&ensp;k = 4 €/L" },
    { nivel:"Básico",
      enun:"En la cafetería del instituto, 5 bocadillos cuestan 12,50 €. ¿Cuánto cuestan 8 bocadillos?",
      pasos:[R`D: $\dfrac{5}{8} = \dfrac{12,50}{x} \;\Rightarrow\; x = \dfrac{8 \cdot 12,50}{5} = 20$ €`, "Por reducción a la unidad: 12,50 : 5 = 2,50 € cada uno → 8 · 2,50 = 20 € ✓"],
      res:"20 €" },
    { nivel:"Consolidación",
      enun:"¿Son D o N? Si son D, escribe la constante y explica qué significa.<div class=\"tablas\"><div><b>A)</b>"+tabla([["Horas","1","","2","","5"],["Km recorridos","60","","120","","300"]])+"</div><div><b>B)</b>"+tabla([["Edad (años)","1","","2","","4"],["Altura (cm)","75","","86","","102"]])+"</div></div>",
      pasos:[R`<b>A)</b> $\dfrac{60}{1} = \dfrac{120}{2} = \dfrac{300}{5} = 60$ → <b>D</b>, k = 60 km/h: recorre 60 km cada hora`,
             "<b>B)</b> Con el doble de edad no se tiene el doble de altura (75 → 86): <b>N</b>"],
      res:"A) D, 60 km/h&ensp;·&ensp;B) N" },
    { nivel:"Consolidación",
      enun:"Para hacer limonada para 4 personas se usan 6 limones. ¿Cuántos limones hacen falta para 10 personas?",
      pasos:[R`Personas → Limones, D: $\dfrac{4}{10} = \dfrac{6}{x} \;\Rightarrow\; x = \dfrac{10 \cdot 6}{4} = 15$`],
      res:"15 limones" },
    { nivel:"Problema",
      enun:"<b>a)</b> En un plano a escala 1 : 50, una mesa mide 3 cm. ¿Cuánto mide de verdad (en metros)?<br><b>b)</b> En un mapa a escala 1 : 25 000, ¿a cuántos cm estarán dos sitios que en la realidad están a 2 km?",
      pasos:[R`<b>a)</b> $3 \cdot 50 = 150$ cm $= 1,5$ m`, R`<b>b)</b> 2 km = 200 000 cm → $200\,000 : 25\,000 = 8$ cm`],
      res:"a) 1,5 m&ensp;·&ensp;b) 8 cm" },
    { nivel:"Problema",
      enun:"Viaje a Japón. Supón que 1 € = 160 yenes.<br><b>a)</b> ¿Cuántos yenes te dan por 50 €?<br><b>b)</b> Al volver te sobran 4800 yenes. ¿Cuántos euros son?",
      pasos:[R`<b>a)</b> Multiplico: $50 \cdot 160 = 8000$ yenes`, R`<b>b)</b> Divido: $4800 : 160 = 30$ €`],
      res:"a) 8000 yenes&ensp;·&ensp;b) 30 €" },
    { nivel:"Para pensar",
      enun:"Un grifo echa 12 litros en 3 minutos.<br><b>a)</b> ¿Cuánto tarda en llenar un cubo de 20 litros?<br><b>b)</b> ¿Cuántos litros echa en 1 hora?",
      pasos:["Reducción a la unidad: en 1 minuto echa 12 : 3 = 4 litros.", "<b>a)</b> 20 : 4 = 5 minutos", "<b>b)</b> 1 hora = 60 min → 60 · 4 = 240 litros"],
      res:"a) 5 minutos&ensp;·&ensp;b) 240 litros" },
    { nivel:"Para pensar",
      enun:"Rotuladores: caja de 12 por 4,80 € o caja de 30 por 10,50 €. ¿Cuál sale más barata por rotulador?",
      pasos:["Precio de 1 rotulador (la constante):", "Caja de 12: 4,80 : 12 = 0,40 € · Caja de 30: 10,50 : 30 = 0,35 €", "La caja de 30 ahorra 0,05 € en cada rotulador."],
      res:"La caja de 30" }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {nota:[{lista:[
        "Reconocer cuándo dos magnitudes son <b>directamente proporcionales</b>.",
        "Calcular la <b>constante</b> y completar <b>tablas</b>.",
        "Resolver problemas con la <b>regla de tres</b> y por <b>reducción a la unidad</b>.",
        "Usarlo en <b>mapas y planos</b> (escalas) y al <b>cambiar dinero</b>."
      ]}], etq:"🎯 En este apartado vas a aprender"}
    ]},

    { titulo:"¿Qué es una magnitud?", cuerpo:[
      {def:["Una <b>magnitud</b> es algo que se puede <b>medir o contar</b>: kilos, euros, litros, horas, km, personas…"], etq:"Magnitud"},
      {cols:[
        [{nota:["🍊 Los <b>kilos</b> de naranjas y el <b>dinero</b> que pagas."], etq:"Ejemplo"}],
        [{nota:["🚌 Los <b>km</b> que recorre un autobús y el <b>tiempo</b> que tarda."], etq:"Ejemplo"}]
      ]},
      {p:"Cuando cambia una magnitud, a veces cambia la otra. Hoy vemos el caso más fácil: <b>las dos crecen en la misma proporción</b>."}
    ]},

    { titulo:"Magnitudes directamente proporcionales", cuerpo:[
      {def:["Son <b>directamente proporcionales</b> si al multiplicar una por un número, la otra queda <b>multiplicada por el mismo número</b>.", "<b>doble → doble · triple → triple · mitad → mitad</b>"], etq:"Directamente proporcionales (D)"},
      {html:tabla([["Kilos","1","×2 →","2","×2 →","4","×3 →","12"],["Precio (€)","3","×2 →","6","×2 →","12","×3 →","36"]])}
    ]},

    { titulo:"La constante de proporcionalidad", cuerpo:[
      {prop:["En una directa, al <b>dividir</b> la segunda entre la primera sale <b>siempre el mismo número</b>: la <b>constante</b> (k).", {formula:R`\frac{\text{precio}}{\text{kilos}} = k`}], etq:"Constante"},
      {ej:{enun:"Kilos: 1, 2, 3, 4. Precio: 2 €, 4 €, 6 €, 8 €. ¿Son D? ¿Cuál es la constante?",
        pasos:[R`$\dfrac{2}{1} = \dfrac{4}{2} = \dfrac{6}{3} = \dfrac{8}{4} = 2$`, "Siempre sale 2 → son <b>D</b>"], res:"k = 2 €/kg: cada kilo cuesta 2 €"}}
    ]},

    { titulo:"Completar una tabla con la constante", cuerpo:[
      {ej:{etq:"🍊 En la frutería", enun:"Un kilo de naranjas cuesta 3 €. Completa la tabla."+tabla([["Kilos","1","","2","","5","","8"],["Precio (€)","3","","?","","?","","?"]]),
        pasos:["La constante es 3 €/kg: <b>multiplico los kilos por 3</b>.", "2 · 3 = 6 € · 5 · 3 = 15 € · 8 · 3 = 24 €"], res:"6 €, 15 € y 24 €"}},
      {nota:["Y al revés: si sé el precio, <b>divido entre 3</b> para saber los kilos (21 € → 7 kg)."]}
    ]},

    { titulo:"Cuidado: no siempre son proporcionales", cuerpo:[
      {aviso:["Que las dos crezcan a la vez <b>no basta</b>: tiene que ser «doble → doble»."], etq:"⚠️ «A más, más» no es suficiente"},
      {ej:{etq:"🚕 Un taxi", enun:"Un taxi cobra 3 € al subir y 1 € por cada km. ¿Son proporcionales los km y el precio?",
        pasos:["1 km → 4 € · 2 km → 5 €", "Doble de km, pero no doble de precio (5 ≠ 8)"], res:"No son proporcionales (N)"}},
      {nota:["La edad y la altura crecen juntas, pero a los 10 años no mides el doble que a los 5: <b>N</b>."]}
    ]},

    { titulo:"Regla de tres directa", cuerpo:[
      {ej:{enun:"6 entradas de cine cuestan 45 €. ¿Cuánto cuestan 10 entradas?",
        pasos:[cuadro("Entradas","Precio (€)",["6","45"],["10","x"]),
               "Doble de entradas → doble de dinero: <b>DIRECTA (D)</b>.",
               R`Escribo las fracciones tal como están en el cuadro: $\dfrac{6}{10} = \dfrac{45}{x}$`,
               R`En cruz: $x = \dfrac{10 \cdot 45}{6} = \dfrac{450}{6} = 75$`],
        res:"10 entradas cuestan <b>75 €</b>"}}
    ]},

    { titulo:"Otra forma: reducción a la unidad", cuerpo:[
      {def:["Primero calculo lo que vale <b>1</b> y después multiplico."], etq:"Reducción a la unidad"},
      {ej:{enun:"6 entradas de cine cuestan 45 €. ¿Cuánto cuestan 10 entradas?",
        pasos:[R`1 entrada: $45 : 6 = 7,50$ €`, R`10 entradas: $10 \cdot 7,50 = 75$ €`], res:"75 € (sale lo mismo)"}},
      {nota:["Lo que vale 1 (7,50 € la entrada) es la <b>constante de proporcionalidad</b>."]}
    ]},

    { titulo:"Problema: la receta de arroz con leche", cuerpo:[
      {ej:{etq:"✍️ Problema resuelto", enun:"Una receta de arroz con leche para 4 personas lleva 1 litro de leche y 200 g de arroz. ¿Qué cantidades necesitas para 10 personas?",
        pasos:["Más personas → más ingredientes: <b>D</b>.",
               R`Leche: $\dfrac{4}{10} = \dfrac{1}{x} \;\Rightarrow\; x = \dfrac{10 \cdot 1}{4} = 2,5$ litros`,
               R`Arroz: $\dfrac{4}{10} = \dfrac{200}{y} \;\Rightarrow\; y = \dfrac{10 \cdot 200}{4} = 500$ g`,
               "Atajo: 10 personas son 2,5 veces 4 → todo por 2,5."],
        res:"2,5 L de leche y 500 g de arroz"}}
    ]},

    { titulo:"Escalas: los mapas y los planos", cuerpo:[
      {def:["Escala <b>1 : 50 000</b> → 1 cm del mapa son 50 000 cm de verdad (500 m).", "Del mapa a la realidad, <b>multiplico</b>; de la realidad al mapa, <b>divido</b>."], etq:"Escala"},
      {ej:{enun:"En un mapa a escala 1 : 50 000, dos pueblos están a 6 cm. ¿Qué distancia real hay?",
        pasos:[R`$6 \cdot 50\,000 = 300\,000$ cm`, "100 000 cm = 1 km → 300 000 cm = 3 km"], res:"3 km"}}
    ]},

    { titulo:"Escalas: de la realidad al plano", cuerpo:[
      {ej:{enun:"Una habitación mide 5 m de largo. ¿Cuánto medirá en un plano a escala 1 : 200?",
        pasos:["Primero, misma unidad: 5 m = 500 cm", R`Divido: $500 : 200 = 2,5$`], res:"2,5 cm en el plano"}},
      {nota:["El plano siempre es <b>más pequeño</b> que la realidad: si te sale más grande, has multiplicado en vez de dividir."]}
    ]},

    { titulo:"Cambio de moneda", cuerpo:[
      {def:["Cambiar euros por otra moneda es proporcionalidad <b>directa</b>.", "Si <b>1 € = 1,10 $</b>: de euros a dólares, <b>multiplico</b>; de dólares a euros, <b>divido</b>."], etq:"Divisas"},
      {cols:[
        [{ej:{etq:"€ → $", enun:"¿Cuántos dólares son 250 €?", pasos:[R`$250 \cdot 1,10 = 275$`], res:"275 $"}}],
        [{ej:{etq:"$ → €", enun:"¿Cuántos euros son 88 $?", pasos:[R`$88 : 1,10 = 80$`], res:"80 €"}}]
      ]}
    ]},

    { titulo:"🪄 Trucos para ir más rápido", cuerpo:[
      {truco:["<b>¿Es D? Piensa en tu compra:</b> si compras el doble de chuches, ¿pagas el doble? Sí → D."], etq:"🪄 Truco 1"},
      {truco:["<b>Busca las veces:</b> 6 entradas → 45 €. 12 entradas son el doble → 90 €. 3 entradas son la mitad → 22,50 €."], etq:"🪄 Truco 2"},
      {truco:["<b>Escalas sin liarte:</b> 1 : 100 000 → 1 cm = 1 km · 1 : 50 000 → 1 cm = 500 m · 1 : 100 → 1 cm = 1 m."], etq:"🪄 Truco 3"}
    ]},

    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:["<b>Pensar que «a más, más» siempre es D</b> (el taxi no lo es)."], etq:"⚠️ Error 1"},
      {aviso:["<b>Colocar mal el cuadro:</b> cada magnitud en su columna y la <i>x</i> debajo de su magnitud."], etq:"⚠️ Error 2"},
      {aviso:["<b>Mezclar unidades</b>: cm del mapa con km reales, gramos con kilos."], etq:"⚠️ Error 3"}
    ]},

    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{lista:[
        "<b>D</b>: doble → doble. La <b>constante</b> es el cociente: lo que vale 1.",
        "<b>Regla de tres</b>: cuadro → fracciones tal como están → en cruz.",
        "<b>Reducción a la unidad</b>: cuánto vale 1 y multiplico.",
        "<b>Escala 1 : E</b>: mapa → realidad, multiplico; realidad → mapa, divido. <b>Divisas</b>: € → otra, multiplico; otra → €, divido."
      ]}]},
      {estudio:[
        {comp:{q:"3 kg de manzanas cuestan 4,50 €. ¿Cuánto cuestan 7 kg?", sol:10.5, unidad:"€", explic:"1 kg = 1,50 € → 7 · 1,50 = 10,50 €", pista:"Calcula primero cuánto cuesta 1 kg."}},
        {comp:{q:"En un mapa 1 : 100 000 hay 3 cm entre dos pueblos. ¿Cuántos km son?", sol:3, unidad:"km", explic:"3 · 100 000 = 300 000 cm = 3 km", pista:"1 : 100 000 → 1 cm = 1 km."}},
        {comp:{q:"Un taxi cobra 3 € al subir y 1 € por km. ¿Son D los km y el precio?", opciones:["Sí","No"], ok:1, explic:"1 km → 4 €, 2 km → 5 €: doble de km pero no doble de precio.", pista:"Calcula lo que cuestan 1 km y 2 km."}}
      ]}
    ]}
  ]
});
})();

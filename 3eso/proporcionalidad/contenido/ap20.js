/* 3.º ESO · Tema 3 · REPASO PARA EL CONTROL
   Clase: MODELO DE CONTROL 1 = examen «Tema 6: Proporcionalidad numérica» de la profesora (IES Al-Baytar), con dos cambios:
   el reparto de 120 caramelos a 4, 6, 6 y 8 años no salía exacto → edades 4, 6, 6 y 12; y el IVA pasa del 16 % al 21 %.
   Casa: ejercicios de repaso de su página anterior (todas las soluciones revisadas). */
(function(){
const R = String.raw;
const cmp = (nombres, datos, preg, rel) => `<table class="t cuadro cmp"><tr>${nombres.map(n=>`<th>${n}</th>`).join("")}</tr>
  <tr class="rel">${rel.map(r=>`<td><span class="r${r}">${r} ⟶</span></td>`).join("")}<td><span class="rx">x</span></td></tr>
  <tr>${datos.map(d=>`<td>${d}</td>`).join("")}</tr><tr>${preg.map(d=>`<td class="${d==="x"?"x":""}">${d}</td>`).join("")}</tr></table>`;

TEMA.registrar({
  num: "R", pref: "R", seccion: "Repaso para el control",
  titulo: "Repaso para el control",

  clase: [
    { nivel:"1,25 p", min:5,
      enun:"Una persona mecanografía a una velocidad de 1680 pulsaciones cada 8 minutos. ¿Cuántas pulsaciones puede hacer en 100 segundos?",
      pasos:["Misma unidad: 8 min = 480 s", R`D: $\dfrac{480}{100} = \dfrac{1680}{x} \Rightarrow x = \dfrac{100 \cdot 1680}{480} = 350$`, R`Otra forma: $1680 : 480 = 3,5$ pulsaciones por segundo → $3,5 \cdot 100 = 350$`],
      res:"<b>350 pulsaciones</b>" },
    { nivel:"1,25 p", min:4,
      enun:"Si seis trabajadores han tardado 15 días en hacer un trabajo, ¿cuánto tardarían nueve trabajadores en hacer el mismo trabajo?",
      pasos:["Más trabajadores → menos días: <b>I</b>", R`$6 \cdot 15 = 9 \cdot x \Rightarrow x = \dfrac{90}{9} = 10$`, "Otra forma: 1 trabajador tardaría 90 días → 90 : 9 = 10"],
      res:"<b>10 días</b>" },
    { nivel:"1,25 p", min:7,
      enun:"Con 2000 kg de pienso un granjero alimenta a sus 20 vacas durante dos meses. Si compra 10 vacas más y otros 1600 kg de pienso, ¿durante cuánto tiempo podrá alimentarlas a todas?",
      pasos:["Ahora: 30 vacas y 3600 kg", cmp(["Vacas","Pienso (kg)","Meses"],["20","2000","2"],["30","3600","x"],["I","D"]),
             R`$\dfrac{30}{20} \cdot \dfrac{2000}{3600} = \dfrac{2}{x} \Rightarrow \dfrac{60\,000}{72\,000} = \dfrac{2}{x} \Rightarrow x = 2,4$ meses`,
             "0,4 meses = 0,4 · 30 = 12 días"],
      res:"<b>2,4 meses</b> (2 meses y 12 días)" },
    { nivel:"1,25 p", min:6,
      enun:"Un abuelo reparte 120 caramelos entre sus cuatro nietos de forma inversamente proporcional a sus edades: 4, 6, 6 y 12 años. ¿Cuántos caramelos le tocan a cada uno?",
      pasos:[R`➊ $\dfrac14, \dfrac16, \dfrac16, \dfrac{1}{12}$ ➋ con denominador 12: $\dfrac{3}{12}, \dfrac{2}{12}, \dfrac{2}{12}, \dfrac{1}{12}$`,
             "➌ 3 + 2 + 2 + 1 = 8 partes → 120 : 8 = 15 caramelos cada parte", "45, 30, 30 y 15 caramelos (suman 120 ✓)"],
      res:"45, 30, 30 y 15" },
    { nivel:"1,25 p", min:5,
      enun:"Se ha repartido una cantidad de forma directamente proporcional a las edades de tres hermanos: 8, 4 y 3 años. Al mayor le han tocado 800 €. ¿Cuánto les toca a los otros? ¿Qué cantidad se ha repartido?",
      pasos:["800 : 8 = 100 € por cada año", "4 · 100 = 400 € · 3 · 100 = 300 €", "Total: 15 · 100 = 1500 €"],
      res:"400 € y 300 €; se repartieron 1500 €" },
    { nivel:"1,25 p", min:5,
      enun:"<b>a)</b> Una calculadora costaba 15 € y la rebajan un 35 %. ¿Cuál es su precio rebajado?<br><b>b)</b> Otro artículo, rebajado un 15 %, nos costó 19,55 €. ¿Cuánto costaba antes?",
      pasos:[R`<b>a)</b> Índice $0,65$: $15 \cdot 0,65 = 9,75$ €`, R`<b>b)</b> Índice $0,85$; hacia atrás: $19,55 : 0,85 = 23$ €`],
      res:"a) 9,75 €&ensp;·&ensp;b) 23 €" },
    { nivel:"1,25 p", min:5,
      enun:"Un televisor que costaba 250 € está rebajado un 30 %. Al pagar en caja nos añaden el 21 % de IVA. ¿Cuál es el precio final?",
      pasos:[R`Índice total: $0,70 \cdot 1,21 = 0,847$`, R`$250 \cdot 0,847 = 211,75$ €`],
      res:"<b>211,75 €</b>" },
    { nivel:"1,25 p", min:3,
      enun:"Tres de cada siete alumnos se dan cuenta de que dos ejercicios del examen aparecen resueltos en el libro. Exprésalo en forma de porcentaje.",
      pasos:[R`$\dfrac37 = 0,4285\ldots \approx 42,86\,\%$`],
      res:"≈ <b>42,86 %</b>" }
  ],

  casa: [
    { nivel:"Básico", enun:"<b>a)</b> Calcula el medio proporcional: $\\dfrac{3}{x} = \\dfrac{x}{12}$ <b>b)</b> ¿Forman proporción $\\dfrac{4}{10}$ y $\\dfrac{6}{15}$? Si es así, ¿cuál es la constante?",
      pasos:[R`<b>a)</b> $x^2 = 36 \Rightarrow x = \pm 6$`, R`<b>b)</b> $4 \cdot 15 = 60 = 10 \cdot 6$ → sí; constante $0,4$`], res:"a) ±6 · b) Sí, k = 0,4" },
    { nivel:"Básico", enun:"Una rueda de 20 dientes está engranada con otra de 50. Si la primera da 150 vueltas por minuto, ¿cuántas da la segunda?",
      pasos:["Más dientes → menos vueltas: <b>I</b>", R`$20 \cdot 150 = 50 \cdot x \Rightarrow x = 60$`], res:"60 vueltas por minuto" },
    { nivel:"Consolidación", enun:"Una persona ha hecho $\\tfrac14$ de un trabajo en 5 días trabajando 6 horas al día. Si a partir de ahora trabaja 9 horas al día, ¿cuántos días tardará en terminar?",
      pasos:[R`Le falta $\tfrac34$: a 6 h/día tardaría $3 \cdot 5 = 15$ días`, R`Horas/día y días: I → $6 \cdot 15 = 9 \cdot x \Rightarrow x = 10$`], res:"10 días" },
    { nivel:"Consolidación", enun:"Una furgoneta recorre 180 km a 90 km/h en 2 horas. ¿Cuánto tardará en recorrer 240 km a 60 km/h?",
      pasos:[cmp(["Km","Velocidad","Horas"],["180","90","2"],["240","60","x"],["D","I"]), R`$\dfrac{180}{240} \cdot \dfrac{60}{90} = \dfrac{2}{x} \Rightarrow \dfrac12 = \dfrac{2}{x} \Rightarrow x = 4$`], res:"4 horas" },
    { nivel:"Consolidación", enun:"En un campamento, 60 personas tienen comida para 20 días con una ración de 900 g por persona y día. Llegan 15 personas más y la comida tiene que durar 24 días. ¿Qué ración le toca a cada uno?",
      pasos:[cmp(["Personas","Días","Ración (g)"],["60","20","900"],["75","24","x"],["I","I"]), R`$\dfrac{75}{60} \cdot \dfrac{24}{20} = \dfrac{900}{x} \Rightarrow \dfrac{1800}{1200} = \dfrac{900}{x} \Rightarrow x = 600$ g`], res:"600 g" },
    { nivel:"Consolidación", enun:"<b>a)</b> ¿Qué interés producen 7200 € al 4 % durante 75 días? <b>b)</b> ¿Cuántos días hay que depositar 4500 € al 2 % para ganar 30 €?",
      pasos:[R`<b>a)</b> $\dfrac{7200 \cdot 0,04 \cdot 75}{360} = 60$ €`, R`<b>b)</b> $\dfrac{4500 \cdot 0,02 \cdot t}{360} = 30 \Rightarrow 90t = 10\,800 \Rightarrow t = 120$ días`], res:"a) 60 € · b) 120 días" },
    { nivel:"Problema", enun:"Una bici cuesta 400 € sin IVA. <b>a)</b> ¿Cuánto cuesta con el 21 % de IVA? <b>b)</b> En rebajas baja un 10 %. ¿Cuánto cuesta? <b>c)</b> ¿Qué porcentaje ha variado respecto a los 400 €?",
      pasos:[R`<b>a)</b> $400 \cdot 1,21 = 484$ €`, R`<b>b)</b> $484 \cdot 0,90 = 435,60$ €`, R`<b>c)</b> $1,21 \cdot 0,90 = 1,089$ → sube un 8,9 %`], res:"484 €, 435,60 €; +8,9 %" },
    { nivel:"Problema", enun:"Pagamos 145,20 € por unos auriculares con una rebaja del 25 % y un 21 % de IVA. ¿Cuál era su precio inicial?",
      pasos:[R`Índice total: $0,75 \cdot 1,21 = 0,9075$`, R`$145,20 : 0,9075 = 160$ €`], res:"160 €" },
    { nivel:"Problema", enun:"Un videojuego de 40 € sube un 25 % y después lo rebajan un 25 %. <b>a)</b> ¿Cuánto cuesta al final? <b>b)</b> ¿Qué porcentaje habría que rebajar tras la subida para que volviera a costar 40 €?",
      pasos:[R`<b>a)</b> $40 \cdot 1,25 \cdot 0,75 = 37,50$ €`, R`<b>b)</b> Tras subir: 50 €; $40 : 50 = 0,8$ → rebaja del 20 %`], res:"a) 37,50 € · b) 20 %" },
    { nivel:"Problema", enun:"Supón que 1 € = 160 yenes. <b>a)</b> ¿Cuántos yenes te dan por 50 €? <b>b)</b> Te sobran 4800 yenes y el banco cobra un 2 % de comisión por cambiarlos. ¿Cuántos euros recibes?",
      pasos:["<b>a)</b> 50 · 160 = 8000 yenes", R`<b>b)</b> $4800 : 160 = 30$ € → $30 \cdot 0,98 = 29,40$ €`], res:"a) 8000 yenes · b) 29,40 €" },
    { nivel:"Problema", enun:"Se mezclan 30 L de aceite de 5 €/L con 20 L de 3,50 €/L. <b>a)</b> ¿A cuánto sale el litro de mezcla? <b>b)</b> Si se vende ganando un 20 %, ¿a qué precio?",
      pasos:[R`<b>a)</b> $\dfrac{150 + 70}{50} = 4,40$ €/L`, R`<b>b)</b> $4,40 \cdot 1,20 = 5,28$ €/L`], res:"a) 4,40 €/L · b) 5,28 €/L" },
    { nivel:"Para pensar", enun:"Para pintar una valla, Ana tarda 4 horas, Bea 6 horas y Carlos 12 horas. Empiezan los tres juntos y, al cabo de 1 hora, Carlos se va. ¿Cuánto tardan Ana y Bea en terminar?",
      pasos:[R`Los tres, en 1 hora: $\dfrac14 + \dfrac16 + \dfrac{1}{12} = \dfrac{3 + 2 + 1}{12} = \dfrac12$ → queda $\dfrac12$ de la valla`, R`Ana y Bea, en 1 hora: $\dfrac14 + \dfrac16 = \dfrac{5}{12}$`, R`$\dfrac12 : \dfrac{5}{12} = \dfrac{12}{10} = 1,2$ h $= 1$ h $12$ min`], res:"1 h 12 min más (en total, 2 h 12 min)" },
    { nivel:"Para pensar", enun:"En una cesta, el pan pesa un 50 %, la luz un 30 % y el transporte un 20 %. El pan pasa de 10 € a 11 €, la luz de 20 € a 23 € y el transporte de 8 € a 9 €. ¿Cuánto han subido los precios en conjunto (el IPC)?",
      pasos:["Subidas: pan 10 %, luz 15 %, transporte 12,5 %", R`Media ponderada: $0,10 \cdot 0,5 + 0,15 \cdot 0,3 + 0,125 \cdot 0,2 = 0,12$`], res:"Un 12 %" }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {nota:[{lista:[
        "Entra todo el tema: razones y proporciones, proporcionalidad simple, repartos, proporcionalidad compuesta, porcentajes, interés, grifos y mezclas.",
        "En clase: el <b>modelo de control 1</b> (el examen de la profe), con cronómetro y corrección paso a paso.",
        "En casa: los <b>ejercicios de repaso</b> y el <b>modelo de control 2</b>. Y la <b>autoevaluación</b>."
      ]}], etq:"📋 Preparamos el control"}
    ]},
    { titulo:"¿Qué me piden? Busca tu caja", cuerpo:[
      {html:`<div class="cols" style="grid-template-columns:repeat(3,minmax(0,1fr));gap:.6em">
        <div class="b-prop"><span class="etq">🔁 Regla de tres</span><p>D: la fracción igual · I: le doy la vuelta (o el producto se mantiene)</p></div>
        <div class="b-prop"><span class="etq">🍰 Repartos</span><p>directo: sumo, divido, multiplico · inverso: primero la vuelta</p></div>
        <div class="b-prop"><span class="etq">🧩 Compuesta</span><p>flecha D o I a la x; a las I, la vuelta; multiplico</p></div>
        <div class="b-prop"><span class="etq">🔺 Porcentajes</span><p>PARTE = TOTAL × decimal · TOTAL = PARTE : decimal · decimal = PARTE : TOTAL</p></div>
        <div class="b-prop"><span class="etq">📈📉 Sube o baja</span><p>FINAL = INICIAL × índice · INICIAL = FINAL : índice · variación: FINAL : INICIAL</p></div>
        <div class="b-prop"><span class="etq">⛓ Varios cambios</span><p>multiplico los índices · los % NO se suman</p></div>
        <div class="b-prop"><span class="etq">🏦 Interés</span><p>$I = c \\cdot r \\cdot t$ · meses: entre 12 · días: entre 360</p></div>
        <div class="b-prop"><span class="etq">🚰 Grifos</span><p>$\\dfrac1a + \\dfrac1b$ (el desagüe resta) y la vuelta</p></div>
        <div class="b-prop"><span class="etq">🥣 Mezclas</span><p>total (€ u oro) : cantidad total</p></div></div>`}
    ]},
    { titulo:"✅ Antes de entregar el control", cuerpo:[
      {prop:[{lista:[
        "¿He escrito el <b>cuadro</b> (con las flechas D o I en la compuesta)?",
        "¿Las <b>unidades</b> coinciden (minutos y segundos, meses y días)?",
        "¿He usado el <b>índice</b> correcto (subida 1,…; bajada 0,…) y he ido <b>hacia atrás</b> dividiendo cuando hacía falta?",
        "¿Los repartos <b>suman</b> el total? ¿El resultado <b>tiene sentido</b>?",
        "¿He dado la <b>solución</b> en una frase, con unidades?"
      ]}], etq:"Lista de comprobación"}
    ]}
  ]
});
})();

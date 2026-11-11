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
      res:"En 100 segundos puede hacer <b>350 pulsaciones</b>." },
    { nivel:"1,25 p", min:4,
      enun:"Si seis trabajadores han tardado 15 días en hacer un trabajo, ¿cuánto tardarían nueve trabajadores en hacer el mismo trabajo?",
      pasos:["Más trabajadores → menos días: <b>I</b>", R`$6 \cdot 15 = 9 \cdot x \Rightarrow x = \dfrac{90}{9} = 10$`, "Otra forma: 1 trabajador tardaría 90 días → 90 : 9 = 10"],
      res:"Nueve trabajadores tardarían <b>10 días</b>." },
    { nivel:"1,25 p", min:7,
      enun:"Con 2000 kg de pienso un granjero alimenta a sus 20 vacas durante dos meses. Si compra 10 vacas más y otros 1600 kg de pienso, ¿durante cuánto tiempo podrá alimentarlas a todas?",
      pasos:["Ahora: 30 vacas y 3600 kg", cmp(["Vacas","Pienso (kg)","Meses"],["20","2000","2"],["30","3600","x"],["I","D"]),
             R`$\dfrac{30}{20} \cdot \dfrac{2000}{3600} = \dfrac{2}{x} \Rightarrow \dfrac{60\,000}{72\,000} = \dfrac{2}{x} \Rightarrow x = 2,4$ meses`,
             "0,4 meses = 0,4 · 30 = 12 días"],
      res:"Podrá alimentarlas durante <b>2,4 meses</b> (2 meses y 12 días)." },
    { nivel:"1,25 p", min:6,
      enun:"Un abuelo reparte 120 caramelos entre sus cuatro nietos de forma inversamente proporcional a sus edades: 4, 6, 6 y 12 años. ¿Cuántos caramelos le tocan a cada uno?",
      pasos:[R`➊ $\dfrac14, \dfrac16, \dfrac16, \dfrac{1}{12}$ ➋ con denominador 12: $\dfrac{3}{12}, \dfrac{2}{12}, \dfrac{2}{12}, \dfrac{1}{12}$`,
             "➌ 3 + 2 + 2 + 1 = 8 partes → 120 : 8 = 15 caramelos cada parte", "45, 30, 30 y 15 caramelos (suman 120 ✓)"],
      res:"A los nietos les tocan <b>45</b>, <b>30</b>, <b>30</b> y <b>15 caramelos</b>." },
    { nivel:"1,25 p", min:5,
      enun:"Se ha repartido una cantidad de forma directamente proporcional a las edades de tres hermanos: 8, 4 y 3 años. Al mayor le han tocado 800 €. ¿Cuánto les toca a los otros? ¿Qué cantidad se ha repartido?",
      pasos:["800 : 8 = 100 € por cada año", "4 · 100 = 400 € · 3 · 100 = 300 €", "Total: 15 · 100 = 1500 €"],
      res:"A los otros hermanos les tocan <b>400 €</b> y <b>300 €</b>. Se repartieron <b>1500 €</b>." },
    { nivel:"1,25 p", min:5,
      enun:"<b>a)</b> Una calculadora costaba 15 € y la rebajan un 35 %. ¿Cuál es su precio rebajado?<br><b>b)</b> Otro artículo, rebajado un 15 %, nos costó 19,55 €. ¿Cuánto costaba antes?",
      pasos:[R`<b>a)</b> Índice $0,65$: $15 \cdot 0,65 = 9,75$ €`, R`<b>b)</b> Índice $0,85$; hacia atrás: $19,55 : 0,85 = 23$ €`],
      res:"a) La calculadora cuesta <b>9,75 €</b> rebajada.<br>b) El artículo costaba <b>23 €</b> antes." },
    { nivel:"1,25 p", min:5,
      enun:"Un televisor que costaba 250 € está rebajado un 30 %. Al pagar en caja nos añaden el 21 % de IVA. ¿Cuál es el precio final?",
      pasos:[R`Índice total: $0,70 \cdot 1,21 = 0,847$`, R`$250 \cdot 0,847 = 211,75$ €`],
      res:"El precio final del televisor es <b>211,75 €</b>." },
    { nivel:"1,25 p", min:3,
      enun:"Tres de cada siete alumnos se dan cuenta de que dos ejercicios del examen aparecen resueltos en el libro. Exprésalo en forma de porcentaje.",
      pasos:[R`$\dfrac37 = 0,4285\ldots \approx 42,86\,\%$`],
      res:"Se dan cuenta aproximadamente el <b>42,86 %</b> de los alumnos." }
  ],

  casa: [
    { nivel:"Básico", enun:"<b>a)</b> Calcula el medio proporcional: $\\dfrac{3}{x} = \\dfrac{x}{12}$ <b>b)</b> ¿Forman proporción $\\dfrac{4}{10}$ y $\\dfrac{6}{15}$? Si es así, ¿cuál es la constante?",
      pasos:[R`<b>a)</b> $x^2 = 36 \Rightarrow x = \pm 6$`, R`<b>b)</b> $4 \cdot 15 = 60 = 10 \cdot 6$ → sí; constante $0,4$`], res:R`a) El medio proporcional es $x = 6$ o $x = -6$.<br>b) <b>Sí</b> forman proporción y la constante es <b>0,4</b>.` },
    { nivel:"Básico", enun:"Una rueda de 20 dientes está engranada con otra de 50. Si la primera da 150 vueltas por minuto, ¿cuántas da la segunda?",
      pasos:["Más dientes → menos vueltas: <b>I</b>", R`$20 \cdot 150 = 50 \cdot x \Rightarrow x = 60$`], res:"La segunda rueda da <b>60 vueltas</b> por minuto." },
    { nivel:"Consolidación", enun:"Una persona ha hecho $\\tfrac14$ de un trabajo en 5 días trabajando 6 horas al día. Si a partir de ahora trabaja 9 horas al día, ¿cuántos días tardará en terminar?",
      pasos:[R`Le falta $\tfrac34$: a 6 h/día tardaría $3 \cdot 5 = 15$ días`, R`Horas/día y días: I → $6 \cdot 15 = 9 \cdot x \Rightarrow x = 10$`], res:"Tardará <b>10 días</b> en terminar el trabajo." },
    { nivel:"Consolidación", enun:"Una furgoneta recorre 180 km a 90 km/h en 2 horas. ¿Cuánto tardará en recorrer 240 km a 60 km/h?",
      pasos:[cmp(["Km","Velocidad","Horas"],["180","90","2"],["240","60","x"],["D","I"]), R`$\dfrac{180}{240} \cdot \dfrac{60}{90} = \dfrac{2}{x} \Rightarrow \dfrac12 = \dfrac{2}{x} \Rightarrow x = 4$`], res:"La furgoneta tardará <b>4 horas</b>." },
    { nivel:"Consolidación", enun:"En un campamento, 60 personas tienen comida para 20 días con una ración de 900 g por persona y día. Llegan 15 personas más y la comida tiene que durar 24 días. ¿Qué ración le toca a cada uno?",
      pasos:[cmp(["Personas","Días","Ración (g)"],["60","20","900"],["75","24","x"],["I","I"]), R`$\dfrac{75}{60} \cdot \dfrac{24}{20} = \dfrac{900}{x} \Rightarrow \dfrac{1800}{1200} = \dfrac{900}{x} \Rightarrow x = 600$ g`], res:"A cada uno le toca una ración de <b>600 g</b> al día." },
    { nivel:"Consolidación", enun:"<b>a)</b> ¿Qué interés producen 7200 € al 4 % durante 75 días? <b>b)</b> ¿Cuántos días hay que depositar 4500 € al 2 % para ganar 30 €?",
      pasos:[R`<b>a)</b> $\dfrac{7200 \cdot 0,04 \cdot 75}{360} = 60$ €`, R`<b>b)</b> $\dfrac{4500 \cdot 0,02 \cdot t}{360} = 30 \Rightarrow 90t = 10\,800 \Rightarrow t = 120$ días`], res:"a) Producen <b>60 €</b> de interés.<br>b) Hay que depositarlos <b>120 días</b>." },
    { nivel:"Problema", enun:"Una bici cuesta 400 € sin IVA. <b>a)</b> ¿Cuánto cuesta con el 21 % de IVA? <b>b)</b> En rebajas baja un 10 %. ¿Cuánto cuesta? <b>c)</b> ¿Qué porcentaje ha variado respecto a los 400 €?",
      pasos:[R`<b>a)</b> $400 \cdot 1,21 = 484$ €`, R`<b>b)</b> $484 \cdot 0,90 = 435,60$ €`, R`<b>c)</b> $1,21 \cdot 0,90 = 1,089$ → sube un 8,9 %`], res:"a) Con IVA la bici cuesta <b>484 €</b>.<br>b) En rebajas cuesta <b>435,60 €</b>.<br>c) Ha subido un <b>8,9 %</b> respecto a los 400 €." },
    { nivel:"Problema", enun:"Pagamos 145,20 € por unos auriculares con una rebaja del 25 % y un 21 % de IVA. ¿Cuál era su precio inicial?",
      pasos:[R`Índice total: $0,75 \cdot 1,21 = 0,9075$`, R`$145,20 : 0,9075 = 160$ €`], res:"Los auriculares costaban <b>160 €</b> al principio." },
    { nivel:"Problema", enun:"Un videojuego de 40 € sube un 25 % y después lo rebajan un 25 %. <b>a)</b> ¿Cuánto cuesta al final? <b>b)</b> ¿Qué porcentaje habría que rebajar tras la subida para que volviera a costar 40 €?",
      pasos:[R`<b>a)</b> $40 \cdot 1,25 \cdot 0,75 = 37,50$ €`, R`<b>b)</b> Tras subir: 50 €; $40 : 50 = 0,8$ → rebaja del 20 %`], res:"a) Al final el videojuego cuesta <b>37,50 €</b>.<br>b) Habría que rebajarlo un <b>20 %</b>." },
    { nivel:"Problema", enun:"Supón que 1 € = 160 yenes. <b>a)</b> ¿Cuántos yenes te dan por 50 €? <b>b)</b> Te sobran 4800 yenes y el banco cobra un 2 % de comisión por cambiarlos. ¿Cuántos euros recibes?",
      pasos:["<b>a)</b> 50 · 160 = 8000 yenes", R`<b>b)</b> $4800 : 160 = 30$ € → $30 \cdot 0,98 = 29,40$ €`], res:"a) Por 50 € te dan <b>8000 yenes</b>.<br>b) Recibes <b>29,40 €</b>." },
    { nivel:"Problema", enun:"Se mezclan 30 L de aceite de 5 €/L con 20 L de 3,50 €/L. <b>a)</b> ¿A cuánto sale el litro de mezcla? <b>b)</b> Si se vende ganando un 20 %, ¿a qué precio?",
      pasos:[R`<b>a)</b> $\dfrac{150 + 70}{50} = 4,40$ €/L`, R`<b>b)</b> $4,40 \cdot 1,20 = 5,28$ €/L`], res:"a) El litro de mezcla sale a <b>4,40 €</b>.<br>b) Se vende a <b>5,28 €</b> el litro." },
    { nivel:"Para pensar", enun:"Para pintar una valla, Ana tarda 4 horas, Bea 6 horas y Carlos 12 horas. Empiezan los tres juntos y, al cabo de 1 hora, Carlos se va. ¿Cuánto tardan Ana y Bea en terminar?",
      pasos:[R`Los tres, en 1 hora: $\dfrac14 + \dfrac16 + \dfrac{1}{12} = \dfrac{3 + 2 + 1}{12} = \dfrac12$ → queda $\dfrac12$ de la valla`, R`Ana y Bea, en 1 hora: $\dfrac14 + \dfrac16 = \dfrac{5}{12}$`, R`$\dfrac12 : \dfrac{5}{12} = \dfrac{12}{10} = 1,2$ h $= 1$ h $12$ min`], res:"Ana y Bea tardan <b>1 h 12 min</b> más en terminar (en total, 2 h 12 min)." },
    { nivel:"Para pensar", enun:"En una cesta, el pan pesa un 50 %, la luz un 30 % y el transporte un 20 %. El pan pasa de 10 € a 11 €, la luz de 20 € a 23 € y el transporte de 8 € a 9 €. ¿Cuánto han subido los precios en conjunto (el IPC)?",
      pasos:["Subidas: pan 10 %, luz 15 %, transporte 12,5 %", R`Media ponderada: $0,10 \cdot 0,5 + 0,15 \cdot 0,3 + 0,125 \cdot 0,2 = 0,12$`], res:"En conjunto, los precios han subido un <b>12 %</b>." },

    { nivel:"Consolidación", enun:"Tres hermanos de 4, 6 y 9 años se reparten 1900 € de forma inversamente proporcional a sus edades. ¿Cuánto le toca a cada uno?",
      pasos:[R`Doy la vuelta: $\dfrac14,\ \dfrac16,\ \dfrac19$ → m.c.m. = 36: $\dfrac{9}{36},\ \dfrac{6}{36},\ \dfrac{4}{36}$`, "Reparto directo a 9, 6 y 4: 19 partes → 1900 : 19 = 100 €", "9 · 100 = 900 €, 6 · 100 = 600 € y 4 · 100 = 400 €"],
      res:"Al de 4 años le tocan <b>900 €</b>, al de 6 años <b>600 €</b> y al de 9 años <b>400 €</b>." },
    { nivel:"Consolidación", enun:"Dos socios ponen 4500 € y 7500 € en un negocio y se reparten las ganancias de forma proporcional a lo que pusieron. El segundo gana 1200 € más que el primero. ¿Cuánto gana cada uno?",
      pasos:[R`Razón: $\dfrac{4500}{7500} = \dfrac{3}{5}$ → el primero 3 partes y el segundo 5`, "La diferencia son 5 − 3 = 2 partes = 1200 € → 1 parte = 600 €", "Primero: 3 · 600 = 1800 €. Segundo: 5 · 600 = 3000 €"],
      res:"El primero gana <b>1800 €</b> y el segundo <b>3000 €</b>." },
    { nivel:"Consolidación", enun:"En un plano a escala 1 : 250, una parcela rectangular mide 8 cm de largo y 6 cm de ancho. ¿Cuál es su superficie real en m²?",
      pasos:[R`Largo real: $8 \cdot 250 = 2000$ cm $= 20$ m`, R`Ancho real: $6 \cdot 250 = 1500$ cm $= 15$ m`, R`Superficie: $20 \cdot 15 = 300$ m²`, "¡Ojo! Se pasan primero las medidas y después se calcula el área."],
      res:"La parcela tiene <b>300 m²</b>." },
    { nivel:"Problema", enun:"Doce obreros, trabajando 8 horas al día, hacen 240 m de zanja en 5 días. Si se van 4 obreros y los demás trabajan 2 horas más cada día, ¿cuántos días tardarán en hacer 360 m?",
      pasos:["Datos nuevos: 12 − 4 = 8 obreros y 8 + 2 = 10 horas al día.",
             cmp(["Obreros","Horas/día","Metros","Días"],["12","8","240","5"],["8","10","360","x"],["I","I","D"]),
             R`Obreros <b>I</b> → $\dfrac{8}{12}$. Horas al día <b>I</b> → $\dfrac{10}{8}$. Metros <b>D</b> → $\dfrac{240}{360}$`,
             R`$\dfrac{8}{12} \cdot \dfrac{10}{8} \cdot \dfrac{240}{360} = \dfrac{5}{x} \Rightarrow \dfrac{19\,200}{34\,560} = \dfrac{5}{x} \Rightarrow x = \dfrac{5 \cdot 34\,560}{19\,200} = 9$`],
      res:"Tardarán <b>9 días</b> en hacer los 360 m." },
    { nivel:"Problema", enun:"Un capital de 12 000 € se ha convertido en 12 900 € en 18 meses con interés simple. ¿A qué rédito estaba?",
      pasos:["Interés: 12 900 − 12 000 = 900 €. Tiempo: 18 meses = 1,5 años.", R`$r = \dfrac{I}{c \cdot t} = \dfrac{900}{12\,000 \cdot 1,5} = \dfrac{900}{18\,000} = 0,05$ → $5\,\%$`],
      res:"Estaba al <b>5 %</b> anual." },
    { nivel:"Problema", enun:"Un joyero funde 300 g de oro de ley 0,750 con 200 g de oro de ley 0,900. ¿Qué ley tiene el lingote que resulta?",
      pasos:[R`Oro puro: $300 \cdot 0,750 = 225$ g y $200 \cdot 0,900 = 180$ g → $405$ g`, R`Ley: $405 : 500 = 0,81$`],
      res:"El lingote tiene una ley de <b>0,810</b> (un 81 % de oro)." },
    { nivel:"Para pensar", enun:"Dos grifos llenan un depósito en 6 y en 9 horas, y un desagüe lo vacía en 12 horas. Si se abren los tres a la vez, ¿cuánto tarda en llenarse? Da el resultado en horas y minutos.",
      pasos:[R`En 1 hora: $\dfrac16 + \dfrac19 - \dfrac{1}{12} = \dfrac{6}{36} + \dfrac{4}{36} - \dfrac{3}{36} = \dfrac{7}{36}$`, R`Le doy la vuelta: $\dfrac{36}{7} \approx 5,14$ h`, R`$0,14$ h $\approx 0,14 \cdot 60 \approx 9$ min`],
      res:"El depósito tarda unas <b>5 h 9 min</b> en llenarse." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">Los 20 ejercicios de repaso son la batería del control: hay que hacerlos todos.</p>`}
    ]},
    { titulo:"¿Qué me piden? Busca tu caja", cuerpo:[
      {html:`<div class="cols" style="grid-template-columns:repeat(3,minmax(0,1fr));gap:.6em">
        <div class="b-prop"><span class="etq">🔁 Regla de tres</span><p>D: la fracción igual · I: le doy la vuelta (o el producto se mantiene)</p></div>
        <div class="b-prop"><span class="etq">🍰 Repartos</span><p>directo: sumo, divido, multiplico · inverso: primero la vuelta</p></div>
        <div class="b-prop"><span class="etq">🧩 Compuesta</span><p>flecha D o I a la x; a las I, la vuelta; multiplico</p></div>
        <div class="b-prop"><span class="etq">🔺 Porcentajes</span><p>$C_F = C_I \\cdot I_V$, $C_I = C_F : I_V$, $I_V = C_F : C_I$</p></div>
        <div class="b-prop"><span class="etq">📈📉 Sube o baja</span><p>sube: $I_V = 1 +$ el %; baja: $I_V = 1 -$ el %; variación: $I_V = C_F : C_I$</p></div>
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

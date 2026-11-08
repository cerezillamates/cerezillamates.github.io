/* 3.º ESO · Tema 3 · Apartado 7: Grifos, móviles y mezclas
   Apuntes 2 de la profesora (7.1 y 7.2): GRIFOS ➊ ¿qué llena en 1 hora? 1/a ➋ sumo (el desagüe resta) ➌ le doy la vuelta;
   grifos iguales → regla de tres inversa. MÓVILES: encuentro → suma de velocidades; alcance → resta; distinta hora → ventaja.
   Su «Repaso de proporcionalidad» (3.º ESO, 06-07): mezcla de carne, ciclistas que se cruzan, coches que salen a las 9 h,
   aleación de dos lingotes de oro y dos bombas que llenan un pilón. */
(function(){
const R = String.raw;
const pasos3 = (a,b,c) => `<div class="tres-pasos"><div><span class="n3">➊</span>${a}</div><i>➜</i><div><span class="n3">➋</span>${b}</div><i>➜</i><div><span class="n3">➌</span>${c}</div></div>`;
const deposito = (n, llenas, pie) => {
  const h = 200 / n; let s = "";
  for(let k=0;k<n;k++){ const y = 210 - (k+1)*h; const c = k < llenas[0] ? "#93c5fd" : k < llenas[0]+llenas[1] ? "#fdba74" : "#fff";
    s += `<rect x="30" y="${y}" width="120" height="${h}" fill="${c}" stroke="#4338ca" stroke-width="1.5"/>`; }
  return `<figure class="dib"><svg viewBox="0 0 180 230" role="img" aria-label="Depósito dividido en ${n} partes">${s}<rect x="30" y="10" width="120" height="200" fill="none" stroke="#1e1b3a" stroke-width="4"/></svg>${pie?`<figcaption>${pie}</figcaption>`:""}</figure>`;
};
// carretera entre A y B: encuentro (enc) o alcance (alc)
const via = (tipo, izq, der, centro) => `<figure class="dib" style="max-width:none"><svg viewBox="0 0 640 140" role="img" aria-label="Dibujo de la carretera" style="max-width:30em">
  <rect x="20" y="74" width="600" height="26" rx="6" fill="#e5e7eb"/><line x1="30" y1="87" x2="610" y2="87" stroke="#fff" stroke-width="3" stroke-dasharray="18 12"/>
  ${tipo==="enc"?`<text x="22" y="132" font-size="22" font-weight="900">A</text><text x="602" y="132" font-size="22" font-weight="900">B</text>`:""}
  <text x="${tipo==="enc"?60:40}" y="62" font-size="34">${tipo==="enc"?"🚗":"🚲"}</text><text x="${tipo==="enc"?60:40}" y="130" font-size="18" font-weight="800" fill="#2350b8">${izq}</text>
  <text x="${tipo==="enc"?530:250}" y="62" font-size="34">${tipo==="enc"?"🚙":"🏍️"}</text><text x="${tipo==="enc"?440:210}" y="130" font-size="18" font-weight="800" fill="#c0392b">${der}</text>
  <path d="${tipo==="enc"?"M120,44 h60 l-10,-8 M180,44 l-10,8 M520,44 h-60 l10,-8 M460,44 l10,8":"M100,44 h60 l-10,-8 M160,44 l-10,8 M310,44 h60 l-10,-8 M370,44 l-10,8"}" stroke="#1e1b3a" stroke-width="4" fill="none"/>
  <text x="320" y="20" text-anchor="middle" font-size="18" font-weight="800" fill="#1e1b3a">${centro}</text></svg></figure>`;

TEMA.registrar({
  num: 7,
  titulo: "Grifos, móviles y mezclas",
  videos: [
    {t:"Tiempo que tardan dos grifos en llenar un depósito", url:"https://www.youtube.com/watch?v=jYguMJ23x5M"},
    {t:"Problema de los grifos (3.º ESO)", url:"https://www.youtube.com/watch?v=9c18fSRqgBE"},
    {t:"Problemas de móviles", url:"https://www.youtube.com/watch?v=QkmbUmqt84Y"},
    {t:"Problemas de móviles 1", url:"https://www.youtube.com/watch?v=IlQf0ScdyY0"}
  ],

  clase: [
    { nivel:"Aplicación", min:5,
      enun:"La piscina municipal tiene dos grifos: uno la llena en 5 horas y el otro en 20 horas. ¿Cuánto tardan abiertos a la vez?",
      pasos:[R`➊ En 1 hora: $\dfrac15$ y $\dfrac{1}{20}$`, R`➋ $\dfrac15 + \dfrac{1}{20} = \dfrac{4}{20} + \dfrac{1}{20} = \dfrac{5}{20} = \dfrac14$`, "➌ Le doy la vuelta: 4 horas (menos que el más rápido ✓)"],
      res:"<b>4 horas</b>" },
    { nivel:"Aplicación", min:6,
      enun:"Una bomba llena un pilón en 3 horas y otra en 6 horas. <b>a)</b> ¿Cuánto tardan juntas? <b>b)</b> ¿Y si además está abierto un desagüe que lo vacía en 12 horas?",
      pasos:[R`<b>a)</b> $\dfrac13 + \dfrac16 = \dfrac26 + \dfrac16 = \dfrac36 = \dfrac12$ → 2 horas`,
             R`<b>b)</b> $\dfrac13 + \dfrac16 - \dfrac{1}{12} = \dfrac{4}{12} + \dfrac{2}{12} - \dfrac{1}{12} = \dfrac{5}{12}$`,
             R`Le doy la vuelta: $\dfrac{12}{5} = 2,4$ h $= 2$ h $24$ min`],
      res:"a) 2 h&ensp;·&ensp;b) 2 h 24 min" },
    { nivel:"Práctica", min:6,
      enun:"Un ciclista sale de A hacia B a 18 km/h y, a la vez, otro sale de B hacia A a 22 km/h. A y B están a 48 km. <b>a)</b> ¿Cuánto tardan en cruzarse? <b>b)</b> ¿A qué distancia de A?",
      pasos:["Van uno hacia el otro: se acercan a 18 + 22 = 40 km/h", R`<b>a)</b> $t = \dfrac{48}{40} = 1,2$ h $= 1$ h $12$ min`, R`<b>b)</b> El de A recorre $18 \cdot 1,2 = 21,6$ km`],
      res:"a) 1 h 12 min&ensp;·&ensp;b) a 21,6 km de A" },
    { nivel:"Práctica", min:6,
      enun:"A las 9 h sale un coche de A hacia B a 70 km/h y, a la vez, otro de B hacia A a 80 km/h. Entre A y B hay 250 km. <b>a)</b> ¿A qué hora se cruzan? <b>b)</b> ¿A qué distancia de A?",
      pasos:["Se acercan a 70 + 80 = 150 km/h", R`$t = \dfrac{250}{150} = \dfrac53$ h $= 1$ h $40$ min → se cruzan a las 10:40`, R`<b>b)</b> $70 \cdot \dfrac53 = \dfrac{350}{3} \approx 116,67$ km`],
      res:"a) A las 10 h 40 min&ensp;·&ensp;b) a unos 116,67 km de A" },
    { nivel:"Problema", min:5,
      enun:"Una carnicería mezcla 50 kg de carne de 4,20 €/kg con 25 kg de carne de 7 €/kg para hacer hamburguesas. ¿A cuánto sale el kilo de mezcla?",
      pasos:[R`Coste: $50 \cdot 4,20 + 25 \cdot 7 = 210 + 175 = 385$ €`, "Kilos: 50 + 25 = 75 kg", R`Precio de la mezcla: $385 : 75 \approx 5,13$ €/kg`, "Está entre 4,20 y 7, más cerca de 4,20 porque hay más carne barata ✓"],
      res:"Unos <b>5,13 €/kg</b>" },
    { nivel:"Reto", min:8,
      enun:"Un autobús sale de Granada a las 8:00 a 80 km/h. A las 9:30 sale un coche del mismo sitio y por la misma carretera a 120 km/h. ¿A qué hora lo alcanza? ¿A cuántos km de Granada?",
      pasos:[R`Ventaja del autobús (1 h 30 min = 1,5 h): $80 \cdot 1,5 = 120$ km`, "El coche recorta 120 − 80 = 40 km cada hora", R`$t = \dfrac{120}{40} = 3$ h → a las 9:30 + 3 h = 12:30`, R`Distancia: $120 \cdot 3 = 360$ km (el autobús: $80 \cdot 4,5 = 360$ ✓)`],
      res:"A las <b>12:30</b>, a <b>360 km</b> de Granada" }
  ],

  casa: [
    { nivel:"Básico", enun:"Tres grifos llenan un depósito en 4, 6 y 12 horas. ¿Cuánto tardan los tres juntos?",
      pasos:[R`$\dfrac14 + \dfrac16 + \dfrac{1}{12} = \dfrac{3}{12} + \dfrac{2}{12} + \dfrac{1}{12} = \dfrac{6}{12} = \dfrac12$`], res:"2 horas" },
    { nivel:"Básico", enun:"Lucía hace un mural en 4 horas y Pedro en 12 horas. ¿Cuánto tardan haciéndolo juntos?",
      pasos:[R`$\dfrac14 + \dfrac{1}{12} = \dfrac{4}{12} = \dfrac13$`], res:"3 horas" },
    { nivel:"Consolidación", enun:"Un grifo llena un depósito en 2 horas, pero una fuga lo vacía en 8 horas. ¿Cuánto tarda en llenarse?",
      pasos:[R`$\dfrac12 - \dfrac18 = \dfrac48 - \dfrac18 = \dfrac38$ → $\dfrac83$ h`, R`$\dfrac83$ h $= 2$ h $+ \dfrac23$ h $= 2$ h $40$ min`], res:"2 h 40 min" },
    { nivel:"Consolidación", enun:"Con 4 grifos iguales un depósito se llena en 15 horas. ¿Cuánto tarda con 6 grifos?",
      pasos:["Grifos iguales: regla de tres <b>inversa</b>.", R`$4 \cdot 15 = 6 \cdot x \Rightarrow x = 10$ h`], res:"10 horas" },
    { nivel:"Consolidación", enun:"Dos ciudades están a 420 km. A la vez sale un coche de cada una, uno hacia el otro, a 110 y 100 km/h. ¿Cuándo y dónde se cruzan?",
      pasos:[R`$t = \dfrac{420}{110 + 100} = 2$ h`, R`El primero: $110 \cdot 2 = 220$ km`], res:"A las 2 h, a 220 km de la primera ciudad" },
    { nivel:"Problema", enun:"Un ciclista sale a 20 km/h. Media hora después sale una moto del mismo sitio a 60 km/h. ¿Cuánto tarda la moto en alcanzarlo?",
      pasos:[R`Ventaja: $20 \cdot 0,5 = 10$ km`, R`$t = \dfrac{10}{60 - 20} = 0,25$ h $= 15$ min`], res:"15 minutos" },
    { nivel:"Problema", enun:"Se mezclan 30 L de aceite de 4 €/L con 20 L de aceite de 6,50 €/L. ¿A cuánto sale el litro de mezcla?",
      pasos:[R`$\dfrac{30 \cdot 4 + 20 \cdot 6,50}{50} = \dfrac{120 + 130}{50} = 5$ €/L`], res:"5 €/L" },
    { nivel:"Para pensar", enun:"Queremos 20 kg de café a 9 €/kg mezclando café de 8 €/kg y de 12 €/kg. ¿Cuántos kilos de cada uno?",
      pasos:[R`$x$ kg de 8 € y $20 - x$ de 12 €: $\;8x + 12(20 - x) = 20 \cdot 9 = 180$`, R`$240 - 4x = 180 \Rightarrow x = 15$`, "15 kg de 8 €/kg y 5 kg de 12 €/kg"], res:"15 kg y 5 kg" }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {nota:[{lista:[
        "Problemas de <b>grifos</b> y de <b>trabajo en común</b>.",
        "Problemas de <b>móviles</b>: encuentro y alcance, también si salen a distinta hora.",
        "Problemas de <b>mezclas</b> y <b>aleaciones</b>: el precio (o la riqueza) de la mezcla."
      ]}], etq:"🎯 En este apartado vas a aprender"}
    ]},

    { titulo:"Grifos: el método", cuerpo:[
      {html:pasos3("¿Qué llena cada grifo en <b>1 hora</b>? Si tarda $a$ horas: $\\dfrac1a$","<b>Sumo</b> $\\dfrac1a + \\dfrac1b$ (el desagüe <b>resta</b>)","<b>Le doy la vuelta</b> y sale el tiempo")},
      {cols2:true, cols:[
        [{ej:{etq:"🏊 La piscina del pueblo", enun:"Un grifo la llena en 3 horas y el otro en 6 horas. ¿Cuánto tardan juntos?",
          pasos:[R`$\dfrac13 + \dfrac16 = \dfrac26 + \dfrac16 = \dfrac36 = \dfrac12$`, "En 1 hora llenan la mitad: le doy la vuelta → 2 horas"], res:"2 horas"}}],
        [{html:deposito(6,[2,1],"En 1 hora: A llena 2/6 y B 1/6")}]
      ]}
    ]},

    { titulo:"Con desagüe y con grifos iguales", cuerpo:[
      {cols:[
        [{ej:{etq:"🚿 Con una fuga", enun:"Un grifo llena un depósito en 4 h, pero una fuga lo vacía en 12 h.",
          pasos:[R`$\dfrac14 - \dfrac{1}{12} = \dfrac{3}{12} - \dfrac{1}{12} = \dfrac{2}{12} = \dfrac16$`], res:"6 horas"}}],
        [{ej:{etq:"🚰 Grifos iguales", enun:"Con 3 grifos iguales se llena en 20 h. ¿Y con 5?",
          pasos:["Doble de grifos → mitad de tiempo: <b>I</b>", R`$\dfrac35 = \dfrac{x}{20} \Rightarrow x = \dfrac{3 \cdot 20}{5} = 12$`], res:"12 horas"}}]
      ]},
      {aviso:["Sumar los tiempos o hacer la media: ¡juntos siempre tardan <b>menos</b> que el más rápido!"]}
    ]},

    { titulo:"Trabajo en común: uno empieza antes", cuerpo:[
      {ej:{etq:"🎨 Pintar la clase", enun:"Ana pinta la clase en 6 horas y Bruno en 4 horas. Ana empieza sola y, después de 1 hora, llega Bruno. ¿Cuánto tardan en total?",
        pasos:[R`En 1 hora Ana pinta $\dfrac16$ → queda $\dfrac56$ de la clase`,
               R`Juntos, en 1 hora: $\dfrac16 + \dfrac14 = \dfrac{2}{12} + \dfrac{3}{12} = \dfrac{5}{12}$`,
               R`Tiempo para lo que queda: $\dfrac56 : \dfrac{5}{12} = \dfrac56 \cdot \dfrac{12}{5} = 2$ h`],
        res:"En total, 1 + 2 = <b>3 horas</b>"}}
    ]},

    { titulo:"Móviles: velocidad, distancia y tiempo", cuerpo:[
      {prop:[{formula:R`d = v \cdot t \qquad t = \frac{d}{v} \qquad v = \frac{d}{t}`}, "Con km/h, el tiempo va en <b>horas</b>: 30 min = 0,5 h · 15 min = 0,25 h · 40 min = $\\tfrac23$ h · 12 min = 0,2 h"], etq:"La fórmula"},
      {cols:[
        [{nota:["<b>➡ ⬅ ENCUENTRO</b>: van uno hacia el otro; se acercan con la <b>suma</b>: $t = \\dfrac{d}{v_1 + v_2}$"]}],
        [{nota:["<b>➡ ➡ ALCANCE</b>: uno persigue al otro; le recorta con la <b>resta</b>: $t = \\dfrac{\\text{ventaja}}{v_1 - v_2}$"]}]
      ]}
    ]},

    { titulo:"Encuentro", cuerpo:[
      {html:via("enc","80 km/h","70 km/h","300 km")},
      {ej:{etq:"🚂 Dos trenes", enun:"Dos trenes salen a la vez de A y de B, separadas 300 km, uno hacia el otro: el de A a 80 km/h y el de B a 70 km/h. ¿Cuándo se cruzan?",
        pasos:[R`$t = \dfrac{300}{80 + 70} = \dfrac{300}{150} = 2$ h`, R`El de A recorre $80 \cdot 2 = 160$ km; el de B, $140$ km (suman 300 ✓)`], res:"A las 2 horas, a 160 km de A"}}
    ]},

    { titulo:"Encuentro saliendo a distinta hora", cuerpo:[
      {ej:{etq:"🚗 De los apuntes", enun:"Un coche sale de A a las 9:00 a 60 km/h. Otro sale de B a las 10:00 a 90 km/h, hacia A. Entre A y B hay 330 km. ¿Cuándo y dónde se cruzan?",
        pasos:["A las 10:00 el primero ya ha recorrido 60 · 1 = 60 km: quedan 330 − 60 = 270 km",
               R`Desde las 10:00 se acercan a $60 + 90 = 150$ km/h: $\;t = \dfrac{270}{150} = 1,8$ h $= 1$ h $48$ min`,
               R`Se cruzan a las 11:48. El primero lleva $1 + 1,8 = 2,8$ h → $60 \cdot 2,8 = 168$ km`],
        res:"A las <b>11:48</b>, a <b>168 km</b> de A"}},
      {truco:["Si salen a distinta hora, calcula <b>dónde está cada uno cuando sale el segundo</b>; desde ahí, como si salieran a la vez."]}
    ]},

    { titulo:"Alcance", cuerpo:[
      {html:via("alc","15 km/h","45 km/h","ventaja 30 km · recorta 45 − 15 = 30 km cada hora")},
      {ej:{etq:"🏍️ La moto y el ciclista", enun:"Un ciclista sale a 15 km/h. 2 horas después sale una moto del mismo sitio a 45 km/h. ¿Cuándo lo alcanza?",
        pasos:[R`Ventaja: $15 \cdot 2 = 30$ km`, R`$t = \dfrac{30}{45 - 15} = 1$ h`, R`Lo alcanza a $45 \cdot 1 = 45$ km de la salida`], res:"1 hora después de salir la moto, a 45 km"}}
    ]},

    { titulo:"Mezclas: el precio de la mezcla", cuerpo:[
      {prop:["Precio de la mezcla = <b>coste total : cantidad total</b>", {formula:R`p = \frac{c_1 \cdot p_1 + c_2 \cdot p_2}{c_1 + c_2}`}], etq:"Mezclas"},
      {ej:{etq:"🍔 Del repaso de la profe", enun:"Se mezclan 50 kg de carne de 4,20 €/kg con 25 kg de carne de 7 €/kg. ¿A cuánto sale el kilo de mezcla?",
        pasos:[R`Coste: $50 \cdot 4,20 + 25 \cdot 7 = 210 + 175 = 385$ €`, R`$385 : 75 \approx 5,13$ €/kg`], res:"≈ 5,13 €/kg"}},
      {aviso:["No vale hacer la media de los precios ((4,20 + 7) : 2 = 5,60): hay el <b>doble</b> de carne barata."]}
    ]},

    { titulo:"Aleaciones: la riqueza en oro", cuerpo:[
      {ej:{etq:"🥇 Del repaso de la profe", enun:"Mezclamos un lingote de 600 g con un 80 % de oro con otro de 550 g con un 95 % de oro. ¿Qué proporción de oro tiene el lingote resultante?",
        pasos:[R`Oro del primero: $600 \cdot 0,80 = 480$ g`, R`Oro del segundo: $550 \cdot 0,95 = 522,5$ g`, R`Oro total: $1002,5$ g de $1150$ g → $\dfrac{1002,5}{1150} \approx 0,8717$`],
        res:"Un <b>87,17 %</b> de oro"}},
      {nota:["Es la misma idea que el precio de la mezcla: <b>total de oro : total de metal</b>."]}
    ]},

    { titulo:"🪄 Trucos y ⚠️ errores", cuerpo:[
      {truco:["<b>Grifos</b>: lo que hacen en 1 hora; suma; vuelta. <b>Móviles</b>: dibujo; hacia el otro, suma; detrás, resta."], etq:"🪄 Truco"},
      {truco:["<b>Mezclas</b>: el precio de la mezcla está siempre <b>entre</b> los dos precios, más cerca del que hay más cantidad."], etq:"🪄 Truco"},
      {aviso:["Mezclar minutos y horas: 1 h 40 min = 1,67 h, no 1,40 h."], etq:"⚠️ Error"},
      {aviso:["Olvidar la ventaja del que sale antes."], etq:"⚠️ Error"}
    ]},

    { titulo:"🧠 Mapa del tema: ¿qué me piden?", cuerpo:[
      {html:`<div class="cols" style="grid-template-columns:repeat(3,minmax(0,1fr));gap:.6em">
        <div class="b-prop"><span class="etq">🔁 Regla de tres</span><p>doble → doble: <b>D</b>, la fracción igual · doble → mitad: <b>I</b>, le doy la vuelta</p></div>
        <div class="b-prop"><span class="etq">🔺 Porcentajes</span><p>PARTE = TOTAL × decimal · TOTAL = PARTE : decimal · decimal = PARTE : TOTAL</p></div>
        <div class="b-prop"><span class="etq">🏦 Interés</span><p>$I = c \\cdot r \\cdot t$ · meses: entre 12 · días: entre 360</p></div>
        <div class="b-prop"><span class="etq">🧩 Compuesta</span><p>flecha D o I de cada columna a la x; a las I, la vuelta</p></div>
        <div class="b-prop"><span class="etq">📈📉 Sube o baja</span><p>FINAL = INICIAL × índice · INICIAL = FINAL : índice · encadenados: se multiplican</p></div>
        <div class="b-prop"><span class="etq">🚰🚗 Grifos y móviles</span><p>$\\dfrac1a + \\dfrac1b$ y la vuelta · se acercan: sumo · se persiguen: resto</p></div>
        <div class="b-prop"><span class="etq">🍰 Repartos</span><p>directo: sumo, divido, multiplico · inverso: primero la vuelta</p></div>
        <div class="b-prop"><span class="etq">🥣 Mezclas</span><p>precio = coste total : cantidad total</p></div>
        <div class="b-nota"><span class="etq">✅ ¿Tiene sentido?</span><p>Más obreros → menos días. Juntos → menos tiempo.</p></div></div>`}
    ]},

    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{lista:[
        "<b>Grifos</b>: $\\dfrac1a + \\dfrac1b$ (desagüe, resta) y le doy la vuelta. Grifos iguales: regla de tres inversa.",
        "<b>Encuentro</b>: $t = \\dfrac{d}{v_1 + v_2}$. <b>Alcance</b>: $t = \\dfrac{\\text{ventaja}}{v_1 - v_2}$. Distinta hora: primero, dónde está cada uno.",
        "<b>Mezclas y aleaciones</b>: total (€ u oro) : cantidad total."
      ]}]},
      {estudio:[
        {comp:{q:"Dos grifos llenan un depósito en 2 h y en 3 h. ¿Cuántas horas tardan juntos? (decimal)", sol:1.2, unidad:"h", explic:"1/2 + 1/3 = 5/6 → 6/5 = 1,2 h = 1 h 12 min", pista:"Suma 1/2 + 1/3 y da la vuelta."}},
        {comp:{q:"10 kg de café a 6 €/kg con 30 kg a 10 €/kg. ¿Precio del kilo de mezcla?", sol:9, unidad:"€/kg", explic:"(60 + 300) : 40 = 9 €/kg", pista:"Coste total entre kilos totales."}}
      ]}
    ]}
  ]
});
})();

/* 3.º ESO · Tema 3 · Apartado 7: Grifos y mezclas
   Apuntes 2 de la profesora (7.1): GRIFOS ➊ ¿qué llena en 1 hora? 1/a ➋ sumo (el desagüe resta) ➌ le doy la vuelta;
   grifos iguales → regla de tres inversa. Su «Repaso de proporcionalidad» (3.º ESO, 06-07): mezcla de carne,
   aleación de dos lingotes de oro y dos bombas que llenan un pilón.
   Los MÓVILES se han quitado de este tema: la profesora los deja para el tema de álgebra (11-nov-2026). */
(function(){
const R = String.raw;
const pasos3 = (a,b,c) => `<div class="tres-pasos"><div><span class="n3">➊</span>${a}</div><i>➜</i><div><span class="n3">➋</span>${b}</div><i>➜</i><div><span class="n3">➌</span>${c}</div></div>`;
const deposito = (n, llenas, pie) => {
  const h = 200 / n; let s = "";
  for(let k=0;k<n;k++){ const y = 210 - (k+1)*h; const c = k < llenas[0] ? "#93c5fd" : k < llenas[0]+llenas[1] ? "#fdba74" : "#fff";
    s += `<rect x="30" y="${y}" width="120" height="${h}" fill="${c}" stroke="#4338ca" stroke-width="1.5"/>`; }
  return `<figure class="dib"><svg viewBox="0 0 180 230" role="img" aria-label="Depósito dividido en ${n} partes">${s}<rect x="30" y="10" width="120" height="200" fill="none" stroke="#1e1b3a" stroke-width="4"/></svg>${pie?`<figcaption>${pie}</figcaption>`:""}</figure>`;
};

TEMA.registrar({
  num: 7,
  titulo: "Grifos y mezclas",
  videos: [
    {t:"Tiempo que tardan dos grifos en llenar un depósito", url:"https://www.youtube.com/watch?v=jYguMJ23x5M"},
    {t:"Problema de los grifos (3.º ESO)", url:"https://www.youtube.com/watch?v=9c18fSRqgBE"}
  ],

  clase: [
    { nivel:"Aplicación", min:5,
      enun:"La piscina municipal tiene dos grifos: uno la llena en 5 horas y el otro en 20 horas. ¿Cuánto tardan abiertos a la vez?",
      pasos:[R`➊ En 1 hora: $\dfrac15$ y $\dfrac{1}{20}$`, R`➋ $\dfrac15 + \dfrac{1}{20} = \dfrac{4}{20} + \dfrac{1}{20} = \dfrac{5}{20} = \dfrac14$`, "➌ Le doy la vuelta: 4 horas (menos que el más rápido ✓)"],
      res:"Abiertos a la vez tardan <b>4 horas</b> en llenar la piscina." },
    { nivel:"Aplicación", min:6,
      enun:"Una bomba llena un pilón en 3 horas y otra en 6 horas. <b>a)</b> ¿Cuánto tardan juntas? <b>b)</b> ¿Y si además está abierto un desagüe que lo vacía en 12 horas?",
      pasos:[R`<b>a)</b> $\dfrac13 + \dfrac16 = \dfrac26 + \dfrac16 = \dfrac36 = \dfrac12$ → 2 horas`,
             R`<b>b)</b> $\dfrac13 + \dfrac16 - \dfrac{1}{12} = \dfrac{4}{12} + \dfrac{2}{12} - \dfrac{1}{12} = \dfrac{5}{12}$`,
             R`Le doy la vuelta: $\dfrac{12}{5} = 2,4$ h $= 2$ h $24$ min`],
      res:"a) Juntas tardan <b>2 horas</b>.<br>b) Con el desagüe tardan <b>2 h 24 min</b>." },
    { nivel:"Práctica", min:6,
      enun:"Con 5 grifos iguales se llena una piscina en 12 horas. <b>a)</b> ¿Cuánto tardan 3 grifos? <b>b)</b> ¿Cuántos grifos hacen falta para llenarla en 6 horas?",
      pasos:["Grifos iguales: más grifos → menos tiempo: <b>I</b>", R`<b>a)</b> $5 \cdot 12 = 3 \cdot x \Rightarrow x = \dfrac{60}{3} = 20$ h`, R`<b>b)</b> $5 \cdot 12 = x \cdot 6 \Rightarrow x = \dfrac{60}{6} = 10$ grifos`],
      res:"a) 3 grifos tardan <b>20 horas</b>.<br>b) Hacen falta <b>10 grifos</b>." },
    { nivel:"Problema", min:5,
      enun:"Una carnicería mezcla 50 kg de carne de 4,20 €/kg con 25 kg de carne de 7 €/kg para hacer hamburguesas. ¿A cuánto sale el kilo de mezcla?",
      pasos:[R`Coste: $50 \cdot 4,20 + 25 \cdot 7 = 210 + 175 = 385$ €`, "Kilos: 50 + 25 = 75 kg", R`Precio de la mezcla: $385 : 75 \approx 5,13$ €/kg`, "Está entre 4,20 y 7, más cerca de 4,20 porque hay más carne barata ✓"],
      res:"El kilo de mezcla sale a unos <b>5,13 €</b>." },
    { nivel:"Práctica", min:5,
      enun:"Un joyero funde 300 g de plata con una riqueza del 90 % con 200 g de plata del 80 %. ¿Qué riqueza en plata tiene la pieza que resulta?",
      pasos:[R`Plata del primero: $300 \cdot 0,90 = 270$ g`, R`Plata del segundo: $200 \cdot 0,80 = 160$ g`, R`Total: $430$ g de plata en $500$ g → $\dfrac{430}{500} = 0,86$`, "Está entre 80 % y 90 %, más cerca del 90 % porque hay más de esa ✓"],
      res:"La pieza tiene una riqueza del <b>86 %</b> en plata." },
    { nivel:"Reto", min:8,
      enun:"Un pintor pinta una casa en 6 horas y su ayudante en 12 horas. Empiezan juntos, pero a las 2 horas el ayudante se marcha. ¿Cuánto tardan en total en pintar la casa?",
      pasos:[R`Juntos, en 1 hora: $\dfrac16 + \dfrac{1}{12} = \dfrac{2}{12} + \dfrac{1}{12} = \dfrac{3}{12} = \dfrac14$`, R`En 2 horas pintan $2 \cdot \dfrac14 = \dfrac12$ de la casa: queda $\dfrac12$`, R`El pintor solo hace $\dfrac16$ cada hora: $\dfrac12 : \dfrac16 = 3$ h`, "Total: 2 + 3 = 5 horas"],
      res:"En total tardan <b>5 horas</b> en pintar la casa." }
  ],

  casa: [
    { nivel:"Básico", enun:"Tres grifos llenan un depósito en 4, 6 y 12 horas. ¿Cuánto tardan los tres juntos?",
      pasos:[R`$\dfrac14 + \dfrac16 + \dfrac{1}{12} = \dfrac{3}{12} + \dfrac{2}{12} + \dfrac{1}{12} = \dfrac{6}{12} = \dfrac12$`], res:"Los tres grifos juntos tardan <b>2 horas</b>." },
    { nivel:"Básico", enun:"Lucía hace un mural en 4 horas y Pedro en 12 horas. ¿Cuánto tardan haciéndolo juntos?",
      pasos:[R`$\dfrac14 + \dfrac{1}{12} = \dfrac{4}{12} = \dfrac13$`], res:"Juntos tardan <b>3 horas</b> en hacer el mural." },
    { nivel:"Consolidación", enun:"Un grifo llena un depósito en 2 horas, pero una fuga lo vacía en 8 horas. ¿Cuánto tarda en llenarse?",
      pasos:[R`$\dfrac12 - \dfrac18 = \dfrac48 - \dfrac18 = \dfrac38$ → $\dfrac83$ h`, R`$\dfrac83$ h $= 2$ h $+ \dfrac23$ h $= 2$ h $40$ min`], res:"El depósito tarda <b>2 h 40 min</b> en llenarse." },
    { nivel:"Consolidación", enun:"Con 4 grifos iguales un depósito se llena en 15 horas. ¿Cuánto tarda con 6 grifos?",
      pasos:["Grifos iguales: regla de tres <b>inversa</b>.", R`$4 \cdot 15 = 6 \cdot x \Rightarrow x = 10$ h`], res:"Con 6 grifos tarda <b>10 horas</b>." },
    { nivel:"Consolidación", enun:"Un depósito tiene dos grifos que lo llenan en 3 y en 6 horas, y un desagüe que lo vacía en 4 horas. Si se abren los tres a la vez, ¿cuánto tarda en llenarse?",
      pasos:[R`$\dfrac13 + \dfrac16 - \dfrac14 = \dfrac{4}{12} + \dfrac{2}{12} - \dfrac{3}{12} = \dfrac{3}{12} = \dfrac14$`, "Le doy la vuelta: 4 horas"], res:"El depósito tarda <b>4 horas</b> en llenarse." },
    { nivel:"Problema", enun:"Se funde un lingote de 400 g con un 75 % de oro con otro de 600 g con un 90 % de oro. ¿Qué porcentaje de oro tiene el lingote nuevo?",
      pasos:[R`Oro: $400 \cdot 0,75 + 600 \cdot 0,90 = 300 + 540 = 840$ g`, R`$\dfrac{840}{1000} = 0,84$`], res:"El lingote nuevo tiene un <b>84 %</b> de oro." },
    { nivel:"Problema", enun:"Se mezclan 30 L de aceite de 4 €/L con 20 L de aceite de 6,50 €/L. ¿A cuánto sale el litro de mezcla?",
      pasos:[R`$\dfrac{30 \cdot 4 + 20 \cdot 6,50}{50} = \dfrac{120 + 130}{50} = 5$ €/L`], res:"El litro de mezcla sale a <b>5 €</b>." },
    { nivel:"Para pensar", enun:"Queremos 20 kg de café a 9 €/kg mezclando café de 8 €/kg y de 12 €/kg. ¿Cuántos kilos de cada uno?",
      pasos:[R`$x$ kg de 8 € y $20 - x$ de 12 €: $\;8x + 12(20 - x) = 20 \cdot 9 = 180$`, R`$240 - 4x = 180 \Rightarrow x = 15$`, "15 kg de 8 €/kg y 5 kg de 12 €/kg"], res:"Hacen falta <b>15 kg</b> del café de 8 €/kg y <b>5 kg</b> del de 12 €/kg." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">Grifos que llenan juntos, mezclas y aleaciones.</p>`}
    ]},

    { titulo:"🏊 Dos grifos a la vez", cuerpo:[
      {cols2:true, cols:[
        [{ej:{etq:"🏊 La piscina del pueblo", enun:"Un grifo la llena en 3 horas y el otro en 6 horas. ¿Cuánto tardan juntos?",
          pasos:[R`$\dfrac13 + \dfrac16 = \dfrac26 + \dfrac16 = \dfrac36 = \dfrac12$`, "En 1 hora llenan la mitad: le doy la vuelta → 2 horas"], res:"Los dos grifos juntos tardan <b>2 horas</b> en llenar la piscina."}}],
        [{html:deposito(6,[2,1],"En 1 hora: A llena 2/6 y B 1/6")}]
      ]}
    ]},

    { titulo:"Grifos: el método (lo que hemos hecho)", cuerpo:[
      {html:pasos3("¿Qué llena cada grifo en <b>1 hora</b>? Si tarda $a$ horas: $\\dfrac1a$","<b>Sumo</b> $\\dfrac1a + \\dfrac1b$ (el desagüe <b>resta</b>)","<b>Le doy la vuelta</b> y sale el tiempo")}
    ]},
    { titulo:"Con desagüe y con grifos iguales", cuerpo:[
      {cols:[
        [{ej:{etq:"🚿 Con una fuga", enun:"Un grifo llena un depósito en 4 h, pero una fuga lo vacía en 12 h.",
          pasos:[R`$\dfrac14 - \dfrac{1}{12} = \dfrac{3}{12} - \dfrac{1}{12} = \dfrac{2}{12} = \dfrac16$`], res:"El depósito tarda <b>6 horas</b> en llenarse."}}],
        [{ej:{etq:"🚰 Grifos iguales", enun:"Con 3 grifos iguales se llena en 20 h. ¿Y con 5?",
          pasos:["Doble de grifos → mitad de tiempo: <b>I</b>", R`$\dfrac35 = \dfrac{x}{20} \Rightarrow x = \dfrac{3 \cdot 20}{5} = 12$`], res:"Con 5 grifos se llena en <b>12 horas</b>."}}]
      ]},
      {aviso:["Sumar los tiempos o hacer la media: ¡juntos siempre tardan <b>menos</b> que el más rápido!"]}
    ]},

    { titulo:"Trabajo en común: uno empieza antes", cuerpo:[
      {ej:{etq:"🎨 Pintar la clase", enun:"Ana pinta la clase en 6 horas y Bruno en 4 horas. Ana empieza sola y, después de 1 hora, llega Bruno. ¿Cuánto tardan en total?",
        pasos:[R`En 1 hora Ana pinta $\dfrac16$ → queda $\dfrac56$ de la clase`,
               R`Juntos, en 1 hora: $\dfrac16 + \dfrac14 = \dfrac{2}{12} + \dfrac{3}{12} = \dfrac{5}{12}$`,
               R`Tiempo para lo que queda: $\dfrac56 : \dfrac{5}{12} = \dfrac56 \cdot \dfrac{12}{5} = 2$ h`],
        res:"En total tardan 1 + 2 = <b>3 horas</b> en pintar la clase."}}
    ]},

    { titulo:"Mezclas: el precio de la mezcla", cuerpo:[
      {prop:["Precio de la mezcla = <b>coste total : cantidad total</b>", {formula:R`p = \frac{c_1 \cdot p_1 + c_2 \cdot p_2}{c_1 + c_2}`}], etq:"Mezclas"},
      {ej:{etq:"🍔 Del repaso de la profe", enun:"Se mezclan 50 kg de carne de 4,20 €/kg con 25 kg de carne de 7 €/kg. ¿A cuánto sale el kilo de mezcla?",
        pasos:[R`Coste: $50 \cdot 4,20 + 25 \cdot 7 = 210 + 175 = 385$ €`, R`$385 : 75 \approx 5,13$ €/kg`], res:"El kilo de mezcla sale a unos <b>5,13 €</b>."}},
      {aviso:["No vale hacer la media de los precios ((4,20 + 7) : 2 = 5,60): hay el <b>doble</b> de carne barata."]}
    ]},

    { titulo:"Aleaciones: la riqueza en oro", cuerpo:[
      {ej:{etq:"🥇 Del repaso de la profe", enun:"Mezclamos un lingote de 600 g con un 80 % de oro con otro de 550 g con un 95 % de oro. ¿Qué proporción de oro tiene el lingote resultante?",
        pasos:[R`Oro del primero: $600 \cdot 0,80 = 480$ g`, R`Oro del segundo: $550 \cdot 0,95 = 522,5$ g`, R`Oro total: $1002,5$ g de $1150$ g → $\dfrac{1002,5}{1150} \approx 0,8717$`],
        res:"El lingote resultante tiene un <b>87,17 %</b> de oro."}},
      {nota:["Es la misma idea que el precio de la mezcla: <b>total de oro : total de metal</b>."]}
    ]},

    { titulo:"🪄 Trucos y ⚠️ errores", cuerpo:[
      {truco:["<b>Grifos</b>: lo que hacen en 1 hora; suma; vuelta. Juntos tardan siempre <b>menos</b> que el más rápido."], etq:"🪄 Truco"},
      {truco:["<b>Mezclas</b>: el precio de la mezcla está siempre <b>entre</b> los dos precios, más cerca del que hay más cantidad."], etq:"🪄 Truco"},
      {aviso:["Mezclar minutos y horas: 1 h 40 min = 1,67 h, no 1,40 h."], etq:"⚠️ Error"},
      {aviso:["En las aleaciones, hacer la media de los porcentajes sin tener en cuenta los gramos de cada lingote."], etq:"⚠️ Error"}
    ]},

    { titulo:"🧠 Mapa del tema: ¿qué me piden?", cuerpo:[
      {html:`<div class="cols" style="grid-template-columns:repeat(3,minmax(0,1fr));gap:.6em">
        <div class="b-prop"><span class="etq">🔁 Regla de tres</span><p>doble → doble: <b>D</b>, la fracción igual · doble → mitad: <b>I</b>, le doy la vuelta</p></div>
        <div class="b-prop"><span class="etq">🍰 Repartos</span><p>directo: sumo, divido, multiplico · inverso: primero la vuelta</p></div>
        <div class="b-prop"><span class="etq">🧩 Compuesta</span><p>flecha D o I de cada columna a la x; a las I, la vuelta</p></div>
        <div class="b-prop"><span class="etq">🔺 Porcentajes</span><p>$C_F = C_I \\cdot I_V$: pongo la $x$ en lo que busco y despejo</p></div>
        <div class="b-prop"><span class="etq">📈📉 Sube o baja</span><p>sube: $I_V = 1 +$ el %; baja: $I_V = 1 -$ el %; encadenados: se multiplican los $I_V$</p></div>
        <div class="b-prop"><span class="etq">🏦 Interés</span><p>$I = c \\cdot r \\cdot t$ · meses: entre 12 · días: entre 360</p></div>
        <div class="b-prop"><span class="etq">🚰 Grifos</span><p>$\\dfrac1a + \\dfrac1b$ (el desagüe resta) y la vuelta</p></div>
        <div class="b-prop"><span class="etq">🥣 Mezclas</span><p>precio = coste total : cantidad total</p></div>
        <div class="b-nota"><span class="etq">✅ ¿Tiene sentido?</span><p>Más obreros → menos días. Juntos → menos tiempo.</p></div></div>`}
    ]},

    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{lista:[
        "<b>Grifos</b>: $\\dfrac1a + \\dfrac1b$ (desagüe, resta) y le doy la vuelta. Grifos iguales: regla de tres inversa.",
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

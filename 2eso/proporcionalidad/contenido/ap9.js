/* 2.º ESO · Tema 3 · Apartado 9: Grifos y móviles
   Apuntes de la web de la profesora: GRIFOS → ¿qué parte llena cada uno en 1 hora? 1/a + 1/b (el desagüe resta)
   y al final se le da la vuelta. MÓVILES → se encuentran: suma de velocidades; uno alcanza al otro: resta;
   si uno sale antes, primero su ventaja. */
(function(){
const R = String.raw;
// depósito dividido en n partes; llenas = [nº partes de A, nº partes de B]
const deposito = (n, llenas, pie) => {
  const h = 200 / n; let s = "";
  for(let k=0;k<n;k++){ const y = 210 - (k+1)*h; const c = k < llenas[0] ? "#93c5fd" : k < llenas[0]+llenas[1] ? "#fdba74" : "#fff";
    s += `<rect x="30" y="${y}" width="120" height="${h}" fill="${c}" stroke="#4338ca" stroke-width="1.5"/>`; }
  return `<figure class="dib"><svg viewBox="0 0 180 230" role="img" aria-label="Depósito dividido en ${n} partes">${s}<rect x="30" y="10" width="120" height="200" fill="none" stroke="#1e1b3a" stroke-width="4"/></svg>${pie?`<figcaption>${pie}</figcaption>`:""}</figure>`;
};
// carretera: tipo "enc" (uno hacia el otro) o "alc" (mismo sentido)
const carretera = (tipo, t1, t2, centro) => `<figure class="dib" style="max-width:none"><svg viewBox="0 0 640 130" role="img" aria-label="Dibujo de la carretera" style="max-width:30em">
  <rect x="20" y="70" width="600" height="26" rx="6" fill="#e5e7eb"/><line x1="30" y1="83" x2="610" y2="83" stroke="#fff" stroke-width="3" stroke-dasharray="18 12"/>
  <text x="${tipo==="enc"?70:60}" y="60" font-size="34">${tipo==="enc"?"🚗":"🚲"}</text><text x="${tipo==="enc"?60:40}" y="122" font-size="18" font-weight="800" fill="#2350b8">${t1}</text>
  <text x="${tipo==="enc"?530:250}" y="60" font-size="34">${tipo==="enc"?"🚙":"🏍️"}</text><text x="${tipo==="enc"?470:200}" y="122" font-size="18" font-weight="800" fill="#c0392b">${t2}</text>
  <path d="${tipo==="enc"?"M130,40 h60 l-10,-8 M190,40 l-10,8 M510,40 h-60 l10,-8 M450,40 l10,8":"M110,40 h60 l-10,-8 M170,40 l-10,8 M330,40 h60 l-10,-8 M390,40 l-10,8"}" stroke="#1e1b3a" stroke-width="4" fill="none"/>
  <text x="320" y="20" text-anchor="middle" font-size="18" font-weight="800" fill="#1e1b3a">${centro}</text></svg></figure>`;

TEMA.registrar({
  num: 9,
  titulo: "Grifos y móviles",
  videos: [
    {t:"Problema de grifos: dos grifos llenando un depósito", url:"https://www.youtube.com/results?search_query=problema+de+grifos+dos+grifos+llenan+deposito"},
    {t:"Problemas de móviles: encuentro y alcance", url:"https://www.youtube.com/results?search_query=problemas+de+moviles+encuentro+alcance+2+eso"}
  ],

  clase: [
    { nivel:"Aplicación", min:5,
      enun:"Un grifo llena un depósito en 4 horas y otro en 12 horas. ¿Cuánto tardan los dos juntos?",
      pasos:[R`En 1 hora: $\dfrac14 + \dfrac{1}{12} = \dfrac{3}{12} + \dfrac{1}{12} = \dfrac{4}{12} = \dfrac13$ del depósito`, R`Le doy la vuelta: $3$ horas`, "Comprueba: tardan menos que el más rápido (4 h) ✓"],
      res:"<b>3 horas</b>" },
    { nivel:"Aplicación", min:5,
      enun:"Un grifo llena un depósito en 3 horas y el desagüe lo vacía en 6 horas. Si están abiertos los dos, ¿cuánto tarda en llenarse?",
      pasos:[R`El desagüe resta: $\dfrac13 - \dfrac16 = \dfrac26 - \dfrac16 = \dfrac16$`, "Le doy la vuelta: 6 horas"],
      res:"<b>6 horas</b>" },
    { nivel:"Práctica", min:5,
      enun:"Para imprimir los apuntes del tema, una impresora tarda 20 minutos y otra 30 minutos. ¿Cuánto tardan si imprimen a la vez?",
      pasos:[R`En 1 minuto: $\dfrac{1}{20} + \dfrac{1}{30} = \dfrac{3}{60} + \dfrac{2}{60} = \dfrac{5}{60} = \dfrac{1}{12}$`, "Le doy la vuelta: 12 minutos"],
      res:"<b>12 minutos</b>" },
    { nivel:"Práctica", min:6,
      enun:"Dos ciudades están a 300 km. A la vez sale un coche de cada una, uno hacia el otro, a 80 km/h y a 70 km/h. ¿Cuándo se cruzan? ¿A qué distancia de la primera ciudad?",
      pasos:["Se acercan: sumo velocidades: 80 + 70 = 150 km/h", R`$t = \dfrac{300}{150} = 2$ h`, R`El primero ha recorrido $80 \cdot 2 = 160$ km`],
      res:"A las <b>2 horas</b>, a <b>160 km</b> de la primera ciudad" },
    { nivel:"Problema", min:6,
      enun:"Un ciclista sale a 15 km/h. Una hora después sale una moto, por el mismo camino, a 45 km/h. ¿Cuánto tarda la moto en alcanzarlo? ¿A cuántos km de la salida?",
      pasos:[R`Ventaja del ciclista: $15 \cdot 1 = 15$ km`, "La moto recorta 45 − 15 = 30 km cada hora", R`$t = \dfrac{15}{30} = 0,5$ h $= 30$ min`, R`Distancia: $45 \cdot 0,5 = 22,5$ km`],
      res:"<b>30 minutos</b>, a <b>22,5 km</b> de la salida" },
    { nivel:"Reto", min:8,
      enun:"Adrián va andando al instituto, que está a 2 km, a 5 km/h. Su hermana sale de casa 6 minutos después en bici a 15 km/h. ¿Lo alcanza antes de llegar al instituto? ¿Dónde?",
      pasos:[R`En 6 min (0,1 h) Adrián anda $5 \cdot 0,1 = 0,5$ km de ventaja`, R`La bici recorta $15 - 5 = 10$ km/h → $t = \dfrac{0,5}{10} = 0,05$ h $= 3$ min`, R`En ese tiempo la bici recorre $15 \cdot 0,05 = 0,75$ km < 2 km`],
      res:"Sí: a los 3 minutos de salir ella, a <b>750 m</b> de casa" }
  ],

  casa: [
    { nivel:"Básico", enun:"Un grifo llena una bañera en 2 horas y otro en 6 horas. ¿Cuánto tardan juntos?",
      pasos:[R`$\dfrac12 + \dfrac16 = \dfrac36 + \dfrac16 = \dfrac46 = \dfrac23$`, R`Le doy la vuelta: $\dfrac32$ h $= 1,5$ h`], res:"1 h 30 min" },
    { nivel:"Básico", enun:"Tres grifos llenan un depósito en 2, 3 y 6 horas. ¿Cuánto tardan los tres juntos?",
      pasos:[R`$\dfrac12 + \dfrac13 + \dfrac16 = \dfrac36 + \dfrac26 + \dfrac16 = \dfrac66 = 1$`], res:"1 hora" },
    { nivel:"Consolidación", enun:"Ana pinta su habitación en 6 horas y Luis en 3 horas. ¿Cuánto tardan si la pintan juntos?",
      pasos:[R`$\dfrac16 + \dfrac13 = \dfrac16 + \dfrac26 = \dfrac36 = \dfrac12$`, "Le doy la vuelta: 2 horas"], res:"2 horas" },
    { nivel:"Consolidación", enun:"Un grifo llena un depósito en 4 horas, pero el desagüe está abierto y lo vacía en 12 horas. ¿Cuánto tarda en llenarse?",
      pasos:[R`$\dfrac14 - \dfrac{1}{12} = \dfrac{3}{12} - \dfrac{1}{12} = \dfrac{2}{12} = \dfrac16$`], res:"6 horas" },
    { nivel:"Consolidación", enun:"Dos pueblos están a 450 km. A la vez sale un coche de cada uno, uno hacia el otro, a 100 km/h y a 80 km/h. ¿Cuándo se encuentran?",
      pasos:[R`Se acercan a $100 + 80 = 180$ km/h → $t = \dfrac{450}{180} = 2,5$ h`], res:"2 h 30 min" },
    { nivel:"Problema", enun:"Un coche sale a 90 km/h. Dos horas después sale otro por la misma carretera a 120 km/h. ¿Cuánto tarda el segundo en alcanzarlo?",
      pasos:[R`Ventaja: $90 \cdot 2 = 180$ km`, R`Recorta $120 - 90 = 30$ km cada hora → $t = \dfrac{180}{30} = 6$ h`], res:"6 horas" },
    { nivel:"Para pensar", enun:"Un grifo tarda 4 horas en llenar un depósito. ¿Cuánto tardan dos grifos iguales? ¿Y sumando los tiempos (4 + 4 = 8 h)? ¿Qué está mal?",
      pasos:[R`$\dfrac14 + \dfrac14 = \dfrac24 = \dfrac12$ → 2 horas`, "Si sumas los tiempos, te sale que con dos grifos tardas más que con uno: ¡no tiene sentido!"], res:"2 horas; los tiempos no se suman" }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {nota:[{lista:[
        "Problemas de <b>grifos</b> y de <b>trabajo en equipo</b>: ¿cuánto tardan juntos?",
        "Problemas de <b>móviles</b>: cuándo y dónde <b>se encuentran</b> dos coches.",
        "Cuándo un móvil <b>alcanza</b> a otro."
      ]}], etq:"🎯 En este apartado vas a aprender"}
    ]},

    { titulo:"La clave: ¿qué parte se hace en 1 hora?", cuerpo:[
      {cols2:true, cols:[
        [{prop:["Si un grifo tarda <b>4 horas</b> en llenar un depósito, en 1 hora llena $\\dfrac14$ del depósito.", "Si tarda <b>12 horas</b>, en 1 hora llena $\\dfrac{1}{12}$."], etq:"La idea"},
         {aviso:["Los tiempos <b>no se suman</b>: dos grifos juntos tardan <b>menos</b> que cada uno."]}],
        [{html:deposito(12,[3,1],"En 1 hora: A llena 3/12 y B 1/12")}]
      ]}
    ]},

    { titulo:"Dos grifos juntos", cuerpo:[
      {cols2:true, cols:[
        [{ej:{enun:"Un grifo llena un depósito en 4 horas y otro en 12 horas. ¿Cuánto tardan juntos?",
          pasos:[R`En 1 hora: $\dfrac14 + \dfrac{1}{12} = \dfrac{3}{12} + \dfrac{1}{12} = \dfrac{4}{12} = \dfrac13$`, "Si en 1 hora llenan 1/3, el depósito entero en <b>3 horas</b>: <b>le doy la vuelta</b>."], res:"3 horas"}}],
        [{html:deposito(12,[3,1],"Juntos llenan 4 de 12 partes cada hora")}]
      ]}
    ]},

    { titulo:"Con desagüe", cuerpo:[
      {ej:{enun:"Un grifo llena un depósito en 3 horas y el desagüe lo vacía en 6 horas. Si están abiertos los dos, ¿cuánto tarda en llenarse?",
        pasos:[R`El grifo llena $\dfrac13$ cada hora; el desagüe vacía $\dfrac16$: <b>resta</b>`, R`$\dfrac13 - \dfrac16 = \dfrac26 - \dfrac16 = \dfrac16$`, "Le doy la vuelta: 6 horas"], res:"6 horas"}},
      {nota:["Sirve igual para cualquier <b>trabajo en común</b>: dos pintores, dos impresoras, dos amigos ordenando la clase…"]}
    ]},

    { titulo:"Móviles: la fórmula", cuerpo:[
      {prop:[{formula:R`\text{distancia} = \text{velocidad} \cdot \text{tiempo} \qquad t = \frac{d}{v} \qquad v = \frac{d}{t}`}], etq:"Velocidad, distancia y tiempo"},
      {ej:{enun:"Un autobús va a 80 km/h. ¿Cuánto tarda en recorrer 200 km?", pasos:[R`$t = \dfrac{200}{80} = 2,5$ h`, "0,5 h = 30 min"], res:"2 h 30 min"}},
      {aviso:["Los minutos se pasan a horas dividiendo entre 60: 30 min = 0,5 h; 40 min = 2/3 h (¡no 0,40!)."]}
    ]},

    { titulo:"Se encuentran: van uno hacia el otro", cuerpo:[
      {html:carretera("enc","80 km/h","70 km/h","300 km · se acercan 80 + 70 = 150 km cada hora")},
      {ej:{enun:"Dos ciudades están a 300 km. A la vez sale un coche de cada una, uno hacia el otro, a 80 y 70 km/h. ¿Cuándo se cruzan?",
        pasos:["Se acercan con la <b>suma</b> de las velocidades: 150 km/h", R`$t = \dfrac{300}{150} = 2$ h`, R`El primero ha hecho $80 \cdot 2 = 160$ km y el segundo $70 \cdot 2 = 140$ km (suman 300 ✓)`], res:"A las 2 horas, a 160 km de la primera ciudad"}}
    ]},

    { titulo:"Uno alcanza al otro: mismo sentido", cuerpo:[
      {html:carretera("alc","15 km/h","45 km/h","la moto recorta 45 − 15 = 30 km cada hora")},
      {ej:{enun:"Un ciclista sale a 15 km/h. Una hora después sale una moto por el mismo camino a 45 km/h. ¿Cuándo lo alcanza?",
        pasos:["Primero la <b>ventaja</b>: en 1 hora el ciclista ha hecho 15 km", "La moto recorta con la <b>resta</b>: 45 − 15 = 30 km/h", R`$t = \dfrac{15}{30} = 0,5$ h $= 30$ min`], res:"A los 30 minutos de salir la moto"}}
    ]},

    { titulo:"🪄 Trucos y ⚠️ errores", cuerpo:[
      {truco:["<b>Grifos</b>: sumo lo que hacen en 1 hora y <b>le doy la vuelta</b>. Juntos, siempre menos que el más rápido."], etq:"🪄 Truco"},
      {truco:["<b>Móviles</b>: haz un dibujo. Hacia el otro → <b>suma</b>; detrás del otro → <b>resta</b>."], etq:"🪄 Truco"},
      {aviso:["Sumar los tiempos de los grifos o hacer la media."], etq:"⚠️ Error"},
      {aviso:["Olvidar la <b>ventaja</b> del que sale antes."], etq:"⚠️ Error"}
    ]},

    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{lista:[
        "Grifos y trabajos: $\\dfrac1a + \\dfrac1b$ (el desagüe resta) y le doy la vuelta.",
        "Se encuentran: $t = \\dfrac{d}{v_1 + v_2}$.",
        "Uno alcanza al otro: $t = \\dfrac{\\text{ventaja}}{v_1 - v_2}$.",
        "Minutos a horas: divido entre 60."
      ]}]},
      {estudio:[
        {comp:{q:"Dos grifos llenan un depósito en 3 h y en 6 h. ¿Cuántas horas tardan juntos?", sol:2, unidad:"h", explic:"1/3 + 1/6 = 1/2 → 2 h", pista:"Suma lo que llenan en 1 hora."}},
        {comp:{q:"Dos coches a 200 km se acercan a 60 y 40 km/h. ¿Cuántas horas tardan en cruzarse?", sol:2, unidad:"h", explic:"200 : (60 + 40) = 2 h", pista:"Suma las velocidades."}}
      ]}
    ]}
  ]
});
})();

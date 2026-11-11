/* 2.º ESO · Tema 3 · REPASO PARA EL CONTROL
   Láminas: qué entra, cómo reconocer cada tipo de problema y el mapa del tema.
   Clase: MODELO DE CONTROL 1 (todos los enunciados con cronómetro y corrección uno a uno), hecho con problemas
   de los exámenes de la profesora (Colegio Cerrado de Calderón, 2016-2018) con nombres genéricos.
   Casa: ejercicios de repaso que mezclan apartados. */
(function(){
const R = String.raw;
const tabla = (filas) => `<table class="t tprop">${filas.map(f=>`<tr>${f.map((c,k)=>k===0?`<th>${c}</th>`:`<td>${c}</td>`).join("")}</tr>`).join("")}</table>`;

TEMA.registrar({
  num: "R", pref: "R", seccion: "Repaso para el control",
  titulo: "Repaso para el control",

  clase: [
    { nivel:"Teoría", min:4,
      enun:"<b>a)</b> Si $\\dfrac{a}{b} = \\dfrac{c}{d}$ forman una proporción, escribe la propiedad fundamental.<br><b>b)</b> ¿Son D, I o N, razonadamente? El lado de un cuadrado y su perímetro; el lado de un cuadrado y su área.",
      pasos:[R`<b>a)</b> El producto de los extremos es igual al de los medios: $a \cdot d = b \cdot c$`,
             R`<b>b)</b> Perímetro $= 4 \cdot$ lado: doble de lado → doble de perímetro: <b>D</b> (k = 4)`,
             R`Área $=$ lado$^2$: lado 1 → área 1; lado 2 → área 4. Doble de lado, cuádruple de área: <b>N</b>`],
      res:R`a) La propiedad fundamental es $a \cdot d = b \cdot c$.<br>b) El perímetro es <b>D</b> y el área, <b>N</b>.` },
    { nivel:"Aplicación", min:3,
      enun:"Calcula el valor de $x$ para que los números 24, 8, $x$ y 6 formen una proporción.",
      pasos:[R`$\dfrac{24}{8} = \dfrac{x}{6} \;\Rightarrow\; 8 \cdot x = 24 \cdot 6 \;\Rightarrow\; x = \dfrac{144}{8} = 18$`],
      res:R`Forman proporción si $x = 18$.` },
    { nivel:"Aplicación", min:5,
      enun:"Completa las tablas.<br><b>a)</b> Magnitudes directamente proporcionales:"+tabla([["M1","30","20","?","15"],["M2","3","?","4","?"]])+"<b>b)</b> Magnitudes inversamente proporcionales:"+tabla([["M1","?","8","64","?"],["M2","16","4","?","32"]]),
      pasos:[R`<b>a)</b> D: $k = \dfrac{30}{3} = 10$ → $20 : 10 = 2$ · $4 \cdot 10 = 40$ · $15 : 10 = 1,5$`,
             R`<b>b)</b> I: $k = 8 \cdot 4 = 32$ → $32 : 16 = 2$ · $32 : 64 = \dfrac12$ · $32 : 32 = 1$`],
      res:"a) Los números que faltan son 2, 40 y 1,5.<br>b) Los números que faltan son 2, ½ y 1." },
    { nivel:"Problema", min:5,
      enun:"El año pasado, en mi fiesta de cumpleaños éramos 30 personas y gastamos 45 € en la comida. Este año van a venir un 20 % más de invitados. ¿Cuánto dinero tenemos que ahorrar para la comida?",
      pasos:[R`Invitados: $20\,\%$ de $30 = 6$ → $36$ personas`, "Más personas → más dinero: <b>D</b>", R`$\dfrac{30}{36} = \dfrac{45}{x} \;\Rightarrow\; x = \dfrac{36 \cdot 45}{30} = 54$ €`],
      res:"Tenemos que ahorrar <b>54 €</b>." },
    { nivel:"Problema", min:5,
      enun:"Un tren a 120 km/h tarda 3 horas en hacer un trayecto. ¿Cuánto tardará si aumenta su velocidad un 25 %?",
      pasos:[R`Velocidad nueva: $120 \cdot 1,25 = 150$ km/h`, "Más velocidad → menos tiempo: <b>I</b>", R`Le damos la vuelta: $\dfrac{120}{150} = \dfrac{x}{3}$`, R`En cruz: $150 \cdot x = 120 \cdot 3 \;\Rightarrow\; x = \dfrac{360}{150} = 2,4$ h`, "0,4 h = 0,4 · 60 = 24 min"],
      res:"El tren tardará <b>2 h 24 min</b>." },
    { nivel:"Problema", min:5,
      enun:"Tres amigos ganan un concurso de limpieza de la playa y reciben 450 €, que se reparten de forma proporcional a las bolsas de basura que recogió cada uno: 7, 5 y 3. ¿Cuánto le toca a cada uno?",
      pasos:["Directo: 7 + 5 + 3 = 15 bolsas → 450 : 15 = 30 € cada bolsa", "7 · 30 = 210 € · 5 · 30 = 150 € · 3 · 30 = 90 €"],
      res:"Se reparten <b>210 €</b>, <b>150 €</b> y <b>90 €</b>." },
    { nivel:"Problema", min:6,
      enun:"Una abuela reparte 270 € entre sus tres nietos de forma inversamente proporcional a sus edades: 3, 4 y 6 años. ¿Cuánto le toca a cada uno?",
      pasos:[R`$\dfrac13,\ \dfrac14,\ \dfrac16$ → con denominador 12: $\dfrac{4}{12},\ \dfrac{3}{12},\ \dfrac{2}{12}$`, "4 + 3 + 2 = 9 partes → 270 : 9 = 30 €", "4 · 30 = 120 € · 3 · 30 = 90 € · 2 · 30 = 60 €"],
      res:"A los nietos les tocan <b>120 €</b>, <b>90 €</b> y <b>60 €</b>." },
    { nivel:"Problema", min:5,
      enun:"En 2.º hay 75 alumnos y 30 hacen deporte en un club. <b>a)</b> ¿Qué porcentaje hace deporte en un club? <b>b)</b> El 60 % de los que hacen deporte juega al fútbol. ¿Cuántos son?",
      pasos:[R`<b>a)</b> $\dfrac{30 \cdot 100}{75} = 40\,\%$`, R`<b>b)</b> $60\,\%$ de $30 = 18$`],
      res:"a) Hace deporte en un club el <b>40 %</b>.<br>b) Juegan al fútbol <b>18 alumnos</b>." },
    { nivel:"Problema", min:6,
      enun:"En agosto un artículo costaba 125 € y en diciembre costaba un 40 % más. Al verano siguiente lo compré por 210 €. ¿El segundo cambio fue una subida o una bajada? ¿De qué porcentaje?",
      pasos:[R`Diciembre: $40\,\%$ de $125 = 50$ → $175$ €`, "De 175 € a 210 €: subida de 35 €", R`$x\,\%$ de $175 = 35 \;\Rightarrow\; x = \dfrac{35 \cdot 100}{175} = 20$`],
      res:"El segundo cambio fue una <b>subida del 20 %</b>." },
    { nivel:"Aplicación", min:4,
      enun:"¿Qué interés producen 6000 € al 2,5 % anual durante 9 meses?",
      pasos:[R`En meses: $I = \dfrac{6000 \cdot 0,025 \cdot 9}{12} = \dfrac{1350}{12} = 112,50$ €`],
      res:"Producen <b>112,50 €</b> de interés." }
  ],

  casa: [
    { nivel:"Básico", enun:"En 50 litros de agua de mar hay 1300 gramos de sal. Si tenemos un 40 % más de agua de mar, ¿cuántos gramos de sal habrá?",
      pasos:[R`$40\,\%$ de $50 = 20$ → $70$ L`, R`D: $\dfrac{50}{70} = \dfrac{1300}{x} \Rightarrow x = \dfrac{70 \cdot 1300}{50} = 1820$ g`], res:"Habrá <b>1820 g</b> de sal." },
    { nivel:"Básico", enun:"Un plano está a escala 1 : 200. Una habitación mide 4,5 m de largo. ¿Cuánto mide en el plano?",
      pasos:["4,5 m = 450 cm", "450 : 200 = 2,25 cm"], res:"En el plano mide <b>2,25 cm</b>." },
    { nivel:"Básico", enun:"Si 1 € = 1,08 dólares, ¿cuántos euros son 540 dólares?",
      pasos:["De dólares a euros, divido: 540 : 1,08 = 500"], res:"540 dólares son <b>500 €</b>." },
    { nivel:"Consolidación", enun:"Una moto que pesa 120 kg alcanza 130 km/h. Si se aumenta su peso en 80 kg, alcanza 150 km/h. ¿Son el peso y la velocidad magnitudes inversamente proporcionales?",
      pasos:[R`Si fueran I, el producto sería el mismo: $120 \cdot 130 = 15\,600$ y $200 \cdot 150 = 30\,000$`, "No son iguales."], res:"<b>No</b> son inversamente proporcionales." },
    { nivel:"Consolidación", enun:"Cinco personas gastan 300 € en 4 días de vacaciones. ¿Cuánto gastarán 8 personas en 3 días?",
      pasos:["1 persona en 1 día: 300 : 20 = 15 €", "8 · 3 · 15 = 360 €"], res:"8 personas gastarán <b>360 €</b> en 3 días." },
    { nivel:"Consolidación", enun:"Tres primos de 5, 7 y 8 años reciben dinero de forma directamente proporcional a su edad. Al mayor le dan 96 €. ¿Cuánto les dan a los otros? ¿Cuánto se repartió?",
      pasos:["96 : 8 = 12 € por año", "5 · 12 = 60 € · 7 · 12 = 84 €", "Total: 96 + 60 + 84 = 240 €"], res:"A los otros les dan <b>60 €</b> y <b>84 €</b>. Se repartieron <b>240 €</b>." },
    { nivel:"Consolidación", enun:"Un precio sube un 10 % y después baja un 10 %. ¿Cuánto ha variado en total?",
      pasos:[R`$1,10 \cdot 0,90 = 0,99$ → menos de 1`], res:"En total el precio baja un <b>1 %</b>." },
    { nivel:"Problema", enun:"Un grifo llena un depósito en 10 horas y otro en 15 horas. ¿Cuánto tardan los dos juntos?",
      pasos:[R`$\dfrac{1}{10} + \dfrac{1}{15} = \dfrac{3}{30} + \dfrac{2}{30} = \dfrac{5}{30} = \dfrac16$`], res:"Los dos juntos tardan <b>6 horas</b>." },
    { nivel:"Problema", enun:"Dos ciudades están a 360 km. A la vez sale un coche de cada una, uno hacia el otro, a 100 km/h y a 80 km/h. ¿Cuándo se cruzan? ¿A qué distancia de la primera?",
      pasos:[R`$t = \dfrac{360}{180} = 2$ h`, R`$100 \cdot 2 = 200$ km`], res:"Se cruzan a las <b>2 horas</b>, a <b>200 km</b> de la primera ciudad." },
    { nivel:"Problema", enun:"¿Qué dinero hay que depositar al 2 % para ganar 150 € de intereses en 3 años?",
      pasos:[R`$c = \dfrac{150}{0,02 \cdot 3} = \dfrac{150}{0,06} = 2500$ €`], res:"Hay que depositar <b>2500 €</b>." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {nota:[{lista:[
        "Entra <b>todo el tema</b>: razón y proporción, D, I, compuesta, repartos, porcentajes, aumentos y disminuciones, interés, grifos y móviles.",
        "En clase: el <b>modelo de control 1</b>, con cronómetro y corrección uno a uno.",
        "En casa: los <b>ejercicios de repaso</b> y el <b>modelo de control 2</b>.",
        "Haz también la <b>autoevaluación</b>: te corrige al momento."
      ]}], etq:"📋 Preparamos el control"}
    ]},

    { titulo:"¿Qué tipo de problema es?", cuerpo:[
      {html:`<table class="t tprop" style="font-size:.85em"><tr><th>Si el enunciado dice…</th><td>Es…</td></tr>
        <tr><th>«¿cuánto costarán…?», «a más…, más…»</th><td>regla de tres <b>directa</b></td></tr>
        <tr><th>obreros y días, velocidad y tiempo, grifos y horas</th><td>regla de tres <b>inversa</b></td></tr>
        <tr><th>tres magnitudes: obreros, horas al día y días</th><td><b>compuesta</b></td></tr>
        <tr><th>«reparte…», «de forma proporcional a…»</th><td><b>reparto</b> (¿directo o inverso?)</td></tr>
        <tr><th>«¿qué porcentaje…?», «el … %»</th><td><b>porcentajes</b></td></tr>
        <tr><th>IVA, rebaja, «costaba antes», «ha subido…»</th><td><b>aumentos y disminuciones</b></td></tr>
        <tr><th>banco, rédito, capital, préstamo</th><td><b>interés simple</b></td></tr>
        <tr><th>«juntos», «a la vez», «se cruzan», «lo alcanza»</th><td><b>grifos y móviles</b></td></tr></table>`}
    ]},

    { titulo:"🧠 Mapa del tema", cuerpo:[
      {html:`<div class="cols" style="grid-template-columns:repeat(3,minmax(0,1fr));gap:.6em">
        <div class="b-prop"><span class="etq">➗ Proporción</span><p>$\\dfrac ab = \\dfrac cd \\Leftrightarrow a \\cdot d = b \\cdot c$</p></div>
        <div class="b-prop"><span class="etq">😀 Directa</span><p>doble → doble · el cociente es constante · fracciones tal cual</p></div>
        <div class="b-prop"><span class="etq">🙃 Inversa</span><p>doble → mitad: le doy la vuelta a la fracción de la $x$ y multiplico en cruz</p></div>
        <div class="b-prop"><span class="etq">🧩 Compuesta</span><p>flecha D o I a la x; a las I, la vuelta; multiplico</p></div>
        <div class="b-prop"><span class="etq">🍰 Repartos</span><p>directo: sumo, divido, multiplico · inverso: primero la vuelta</p></div>
        <div class="b-prop"><span class="etq">％ Porcentajes</span><p>r % de C $= \\dfrac{C \\cdot r}{100}$ · ¿qué %? parte · 100 : total</p></div>
        <div class="b-prop"><span class="etq">📈📉 Sube o baja</span><p>C.F. = C.I. · I.V. · antes: C.F. : I.V. · encadenados: se multiplican</p></div>
        <div class="b-prop"><span class="etq">🏦 Interés</span><p>$I = c \\cdot r \\cdot t$ · meses: entre 12</p></div>
        <div class="b-prop"><span class="etq">🚰🚗 Grifos y móviles</span><p>$\\dfrac1a + \\dfrac1b$ y la vuelta · se acercan: sumo · se persiguen: resto</p></div></div>`}
    ]},

    { titulo:"✅ Antes de entregar el control", cuerpo:[
      {prop:[{lista:[
        "¿He puesto el <b>cuadro</b> con las magnitudes y si es <b>D</b> o <b>I</b>?",
        "¿Las <b>unidades</b> están bien (minutos y horas, gramos y kilos, cm y km)?",
        "¿El resultado <b>tiene sentido</b>? (más obreros → menos días; con descuento pago menos).",
        "¿He <b>comprobado</b> los repartos (la suma da el total) y los porcentajes?",
        "¿He escrito la <b>solución</b> en una frase, con su unidad?"
      ]}], etq:"Lista de comprobación"}
    ]}
  ]
});
})();

/* 2.º ESO · Tema 3 · REPASO PARA EL CONTROL
   Láminas: qué entra, cómo reconocer cada tipo de problema y el mapa del tema.
   Clase: MODELO DE CONTROL 1 (todos los enunciados con cronómetro y corrección uno a uno), hecho con problemas
   de los exámenes de la profesora (Colegio Cerrado de Calderón, 2016-2018) con nombres genéricos.
   Casa: ejercicios de repaso que mezclan apartados. */
(function(){
const R = String.raw;
const cuadro = (m1, m2, a, b, t) => `<table class="t cuadro"><tr><th>${m1}</th><th class="fl">(${t||"D"}) ⟶</th><th>${m2}</th></tr><tr><td>${a[0]}</td><td></td><td>${a[1]}</td></tr><tr><td>${b[0]}</td><td></td><td class="x">${b[1]}</td></tr></table>`;
const tabla = (filas) => `<table class="t tprop">${filas.map(f=>`<tr>${f.map((c,k)=>k===0?`<th>${c}</th>`:`<td>${c}</td>`).join("")}</tr>`).join("")}</table>`;

TEMA.registrar({
  num: "R", pref: "R", seccion: "Repaso para el control",
  titulo: "Repaso para el control",

  /* 27-nov-2026 (decisión de la profesora): el repaso son 20 EJERCICIOS en una sola lista, agrupados por apartado;
     los del modelo de control 1 están dentro. Ya no hay «clase» ni «casa» aparte. */
  casa: [
    { nivel:"1. Razón y proporción", 
      enun:"<b>a)</b> Si $\\dfrac{a}{b} = \\dfrac{c}{d}$ forman una proporción, escribe la propiedad fundamental.<br><b>b)</b> ¿Son D, I o N, razonadamente? El lado de un cuadrado y su perímetro; el lado de un cuadrado y su área.",
      pasos:[R`<b>a)</b> El producto de los extremos es igual al de los medios: $a \cdot d = b \cdot c$`,
             R`<b>b)</b> Perímetro $= 4 \cdot$ lado: doble de lado → doble de perímetro: <b>D</b> (k = 4)`,
             R`Área $=$ lado$^2$: lado 1 → área 1; lado 2 → área 4. Doble de lado, cuádruple de área: <b>N</b>`],
      res:R`a) La propiedad fundamental es $a \cdot d = b \cdot c$.<br>b) El perímetro es <b>D</b> y el área, <b>N</b>.` },
    { nivel:"1. Razón y proporción", 
      enun:"Calcula el valor de $x$ para que los números 24, 8, $x$ y 6 formen una proporción.",
      pasos:[R`$\dfrac{24}{8} = \dfrac{x}{6} \;\Rightarrow\; 8 \cdot x = 24 \cdot 6 \;\Rightarrow\; x = \dfrac{144}{8} = 18$`],
      res:R`Forman proporción si $x = 18$.` },
    { nivel:"1. Razón y proporción", enun:"La razón entre los chicos y las chicas de una clase es 4 : 5. En la clase hay 27 alumnos. ¿Cuántos chicos y cuántas chicas hay?",
      pasos:["4 + 5 = 9 partes", "27 : 9 = 3 alumnos cada parte", "Chicos: 4 · 3 = 12. Chicas: 5 · 3 = 15"], res:"Hay <b>12 chicos</b> y <b>15 chicas</b>." },
    { nivel:"1. Razón y proporción", enun:"Un plano está a escala 1 : 200. Una habitación mide 4,5 m de largo. ¿Cuánto mide en el plano?",
      pasos:["4,5 m = 450 cm", "450 : 200 = 2,25 cm"], res:"En el plano mide <b>2,25 cm</b>." },
    { nivel:"2. Proporcionalidad directa", 
      enun:"Completa las tablas.<br><b>a)</b> Magnitudes directamente proporcionales:"+tabla([["M1","30","20","?","15"],["M2","3","?","4","?"]])+"<b>b)</b> Magnitudes inversamente proporcionales:"+tabla([["M1","?","8","64","?"],["M2","16","4","?","32"]]),
      pasos:[R`<b>a)</b> D: $k = \dfrac{30}{3} = 10$ → $20 : 10 = 2$ · $4 \cdot 10 = 40$ · $15 : 10 = 1,5$`,
             R`<b>b)</b> I: $k = 8 \cdot 4 = 32$ → $32 : 16 = 2$ · $32 : 64 = \dfrac12$ · $32 : 32 = 1$`],
      res:"a) Los números que faltan son 2, 40 y 1,5.<br>b) Los números que faltan son 2, ½ y 1." },
    { nivel:"2. Proporcionalidad directa", 
      enun:"El año pasado, en mi fiesta de cumpleaños éramos 30 personas y gastamos 45 € en la comida. Este año van a venir un 20 % más de invitados. ¿Cuánto dinero tenemos que ahorrar para la comida?",
      pasos:[R`Invitados: $20\,\%$ de $30 = 6$ → $36$ personas`, "Más personas → más dinero: <b>D</b>", R`$\dfrac{30}{36} = \dfrac{45}{x} \;\Rightarrow\; x = \dfrac{36 \cdot 45}{30} = 54$ €`],
      res:"Tenemos que ahorrar <b>54 €</b>." },
    { nivel:"2. Proporcionalidad directa", enun:"Por 8 horas de trabajo un camarero cobra 76 €. ¿Cuánto cobrará por 30 horas?",
      pasos:["Más horas → más dinero: <b>D</b>.", R`$\dfrac{8}{30} = \dfrac{76}{x} \Rightarrow 8 \cdot x = 30 \cdot 76 = 2280 \Rightarrow x = 285$`], res:"Por 30 horas cobrará <b>285 €</b>." },
    { nivel:"3. Proporcionalidad inversa", 
      enun:"Un tren a 120 km/h tarda 3 horas en hacer un trayecto. ¿Cuánto tardará si aumenta su velocidad un 25 %?",
      pasos:[R`Velocidad nueva: $120 \cdot 1,25 = 150$ km/h`, "Más velocidad → menos tiempo: <b>I</b>", R`Le damos la vuelta: $\dfrac{120}{150} = \dfrac{x}{3}$`, R`En cruz: $150 \cdot x = 120 \cdot 3 \;\Rightarrow\; x = \dfrac{360}{150} = 2,4$ h`, "0,4 h = 0,4 · 60 = 24 min"],
      res:"El tren tardará <b>2 h 24 min</b>." },
    { nivel:"3. Proporcionalidad inversa", enun:"Seis pintores tardan 10 días en pintar un colegio. ¿Cuánto tardarán cuatro pintores?",
      pasos:["Menos pintores → más días: <b>I</b>.", R`Le damos la vuelta: $\dfrac{6}{4} = \dfrac{x}{10}$`, R`En cruz: $4 \cdot x = 6 \cdot 10 = 60 \Rightarrow x = 15$`], res:"Cuatro pintores tardarán <b>15 días</b>." },
    { nivel:"4. Proporcionalidad compuesta", enun:"Cinco personas gastan 300 € en 4 días de vacaciones. ¿Cuánto gastarán 8 personas en 3 días?",
      pasos:["1 persona en 1 día: 300 : 20 = 15 €", "8 · 3 · 15 = 360 €"], res:"8 personas gastarán <b>360 €</b> en 3 días." },
    { nivel:"4. Proporcionalidad compuesta", enun:"Ocho grifos iguales llenan 2 piscinas en 9 horas. ¿Cuánto tardarán 6 grifos en llenar 3 piscinas?",
      pasos:["Menos grifos → más horas: <b>I</b>, le doy la vuelta: 6/8. Más piscinas → más horas: <b>D</b>: 2/3.",
             R`$\dfrac{6}{8} \cdot \dfrac{2}{3} = \dfrac{9}{x} \Rightarrow \dfrac{12}{24} = \dfrac{9}{x} \Rightarrow x = \dfrac{24 \cdot 9}{12} = 18$`], res:"Tardarán <b>18 horas</b>." },
    { nivel:"5. Repartos", 
      enun:"Tres amigos ganan un concurso de limpieza de la playa y reciben 450 €, que se reparten de forma proporcional a las bolsas de basura que recogió cada uno: 7, 5 y 3. ¿Cuánto le toca a cada uno?",
      pasos:["Directo: 7 + 5 + 3 = 15 bolsas → 450 : 15 = 30 € cada bolsa", "7 · 30 = 210 € · 5 · 30 = 150 € · 3 · 30 = 90 €"],
      res:"Se reparten <b>210 €</b>, <b>150 €</b> y <b>90 €</b>." },
    { nivel:"5. Repartos", 
      enun:"Una abuela reparte 270 € entre sus tres nietos de forma inversamente proporcional a sus edades: 3, 4 y 6 años. ¿Cuánto le toca a cada uno?",
      pasos:[R`$\dfrac13,\ \dfrac14,\ \dfrac16$ → con denominador 12: $\dfrac{4}{12},\ \dfrac{3}{12},\ \dfrac{2}{12}$`, "4 + 3 + 2 = 9 partes → 270 : 9 = 30 €", "4 · 30 = 120 € · 3 · 30 = 90 € · 2 · 30 = 60 €"],
      res:"A los nietos les tocan <b>120 €</b>, <b>90 €</b> y <b>60 €</b>." },
    { nivel:"6. Porcentajes", 
      enun:"En 2.º hay 75 alumnos y 30 hacen deporte en un club. <b>a)</b> ¿Qué porcentaje hace deporte en un club? <b>b)</b> El 60 % de los que hacen deporte juega al fútbol. ¿Cuántos son?",
      pasos:["<b>a)</b> La parte son 30 alumnos y el total, 75 (tipo 3):",
             R`$\% = \dfrac{30}{75} \cdot 100 = 40\,\%$`,
             R`<b>b)</b> El 60 % de 30: $C_F = I_V \cdot C_I = 0,60 \cdot 30 = 18$`],
      res:"a) Hace deporte en un club el <b>40 %</b>.<br>b) Juegan al fútbol <b>18 alumnos</b>." },
    { nivel:"6. Porcentajes", 
      enun:"En agosto un artículo costaba 125 €. En diciembre subió un 40 % y en las rebajas de enero bajó un 20 %. <b>a)</b> ¿Cuál es el precio final? <b>b)</b> ¿Qué porcentaje ha variado en total? ¿Ha subido o bajado?",
      pasos:[window.curvas(["125 €","175 €","140 €"],[{up:true,pct:"+40 %",op:"+ 50 €"},{up:false,pct:"−20 %",op:"− 35 €"}],{solo:"F",leyenda:"➜ calculo el % del precio que hay y lo sumo o lo resto",subs:["agosto","diciembre","enero"]}),
             R`<b>a)</b> Diciembre: el 40 % de 125 € $= 0,40 \cdot 125 = 50$ € → se suma: $125 + 50 = 175$ €`,
             R`Enero: el 20 % de 175 € $= 0,20 \cdot 175 = 35$ € → se resta: $175 - 35 = 140$ €`,
             R`<b>b)</b> En total sube: $140 - 125 = 15$ €. ¿Qué % es? (tipo 3, el total es 125 €)`,
             R`$\% = \dfrac{15}{125} \cdot 100 = 12\,\%$`,
             "¡No es el 20 %! Los porcentajes encadenados no se restan (40 − 20)."],
      res:"a) El precio final es <b>140 €</b>.<br>b) En total ha <b>subido un 12 %</b>." },
    { nivel:"6. Porcentajes", enun:"Después de una rebaja del 15 %, unas zapatillas cuestan 68 €. ¿Cuánto costaban antes?",
      pasos:[R`Con la rebaja pago el $100 - 15 = 85\,\%$`, cuadro("Porcentaje (%)","Precio (€)",["85","68"],["100","x"],"D"),
             R`$\dfrac{85}{100} = \dfrac{68}{x} \;\Rightarrow\; x = \dfrac{100 \cdot 68}{85} = 80$ €`], res:"Las zapatillas costaban <b>80 €</b>." },
    { nivel:"6. Porcentajes", enun:"Una lavadora cuesta 350 € sin IVA. ¿Cuánto cuesta con el 21 % de IVA?",
      pasos:[R`IVA: el 21 % de 350 $= 73,50$ € → $350 + 73,50 = 423,50$ €`, R`🪄 O de una vez, pagando el $121\,\%$: $1,21 \cdot 350 = 423,50$ €`], res:"Con IVA, la lavadora cuesta <b>423,50 €</b>." },
    { nivel:"7. Interés simple", 
      enun:"¿Qué interés producen 6000 € al 2,5 % anual durante 9 meses?",
      pasos:[R`1 año: el 2,5 % de 6000 $= 0,025 \cdot 6000 = 150$ €`, R`1 mes: $150 : 12 = 12,50$ €`, R`9 meses: $12,50 \cdot 9 = 112,50$ €`],
      res:"Producen <b>112,50 €</b> de interés." },
    { nivel:"8. Grifos y trabajo en común", enun:"Un grifo llena un depósito en 10 horas y otro en 15 horas. ¿Cuánto tardan los dos juntos?",
      pasos:[R`$\dfrac{1}{10} + \dfrac{1}{15} = \dfrac{3}{30} + \dfrac{2}{30} = \dfrac{5}{30} = \dfrac16$`], res:"Los dos juntos tardan <b>6 horas</b>." },
    { nivel:"8. Grifos y trabajo en común", enun:"Un grifo llena un depósito en 3 horas y el desagüe lo vacía en 12 horas. Si se abren los dos, ¿cuánto tarda en llenarse?",
      pasos:[R`El desagüe resta: $\dfrac13 - \dfrac{1}{12} = \dfrac{4}{12} - \dfrac{1}{12} = \dfrac{3}{12} = \dfrac14$`, "Le doy la vuelta: 4 horas"], res:"El depósito tarda <b>4 horas</b> en llenarse." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">Los 20 ejercicios de repaso son la batería del control: hay que hacerlos todos.</p>`}
    ]},

    { titulo:"¿Qué tipo de problema es?", cuerpo:[
      {html:`<table class="t tprop" style="font-size:.85em"><tr><th>Si el enunciado dice…</th><td>Es…</td></tr>
        <tr><th>«¿cuánto costarán…?», «a más…, más…»</th><td>regla de tres <b>directa</b></td></tr>
        <tr><th>obreros y días, velocidad y tiempo, grifos y horas</th><td>regla de tres <b>inversa</b></td></tr>
        <tr><th>tres magnitudes: obreros, horas al día y días</th><td><b>compuesta</b></td></tr>
        <tr><th>«reparte…», «de forma proporcional a…»</th><td><b>reparto</b> (¿directo o inverso?)</td></tr>
        <tr><th>«¿qué porcentaje…?», «el … %»</th><td><b>porcentajes</b></td></tr>
        <tr><th>IVA, rebaja, «costaba antes», «ha subido…»</th><td><b>aumentos y disminuciones</b></td></tr>
        <tr><th>«dos rebajas seguidas», «rebaja y después IVA», «sube y después baja»</th><td><b>porcentajes encadenados</b> (tipo 4)</td></tr>
        <tr><th>banco, rédito, capital, préstamo</th><td><b>interés simple</b></td></tr>
        <tr><th>«juntos», «a la vez», «desagüe»</th><td><b>grifos y trabajo en común</b></td></tr></table>`}
    ]},

    { titulo:"🧠 Mapa del tema", cuerpo:[
      {html:`<div class="cols" style="grid-template-columns:repeat(3,minmax(0,1fr));gap:.6em">
        <div class="b-prop"><span class="etq">➗ Proporción</span><p>$\\dfrac ab = \\dfrac cd \\Leftrightarrow a \\cdot d = b \\cdot c$</p></div>
        <div class="b-prop"><span class="etq">😀 Directa</span><p>doble → doble · el cociente es constante · fracciones tal cual</p></div>
        <div class="b-prop"><span class="etq">🙃 Inversa</span><p>doble → mitad: le doy la vuelta a la fracción de la $x$ y multiplico en cruz</p></div>
        <div class="b-prop"><span class="etq">🧩 Compuesta</span><p>flecha D o I a la x; a las I, la vuelta; multiplico</p></div>
        <div class="b-prop"><span class="etq">🍰 Repartos</span><p>directo: sumo, divido, multiplico · inverso: primero la vuelta</p></div>
        <div class="b-prop"><span class="etq">％ Porcentajes</span><p>tipo 1: $C_F = I_V \\cdot C_I$<br>tipo 2 (el total): regla de tres, el total es el 100 %<br>tipo 3 (el %): $\\dfrac{\\text{parte}}{\\text{total}} \\cdot 100$</p></div>
        <div class="b-prop"><span class="etq">📈📉 Sube o baja</span><p>calculo el % y lo sumo o lo resto (🪄 $-20\\,\\%$ = pagar el $80\\,\\%$) <br>tipo 4, encadenados: en cada cambio, el % del precio que hay, y lo sumo o lo resto; el % final con el tipo 3. ¡Los % no se suman ni se restan!</p></div>
        <div class="b-prop"><span class="etq">🏦 Interés</span><p>1 año: el % en decimal por el capital (tipo 1); después, por el tiempo (en meses, : 12 y por los meses)</p></div>
        <div class="b-prop"><span class="etq">🚰 Grifos</span><p>$\\dfrac1a + \\dfrac1b$ (el desagüe resta) y le doy la vuelta</p></div></div>`}
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


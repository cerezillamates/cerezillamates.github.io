/* 3.º ESO · Tema 3 · Apartado 4: Proporcionalidad compuesta
   Método de la profesora: cuadro con una flecha D o I de cada columna hacia la de la x;
   las D se dejan igual, a las I les damos la vuelta; se multiplican y se igualan a la fracción de la x. */
(function(){
const R = String.raw;
// cuadro de la compuesta: nombres de columnas, fila de datos, fila de la pregunta y relación (D/I) de cada columna con la de la x
const cuadro = (nombres, datos, preg, rel) => `<table class="t cuadro cmp">
  <tr>${nombres.map(n=>`<th>${n}</th>`).join("")}</tr>
  <tr class="rel">${rel.map(r=>`<td><span class="r${r}">${r} ⟶</span></td>`).join("")}<td><span class="rx">x</span></td></tr>
  <tr>${datos.map(d=>`<td>${d}</td>`).join("")}</tr>
  <tr>${preg.map(d=>`<td class="${d==="x"?"x":""}">${d}</td>`).join("")}</tr></table>`;

TEMA.registrar({
  num: 4,
  titulo: "Proporcionalidad compuesta",
  videos: [
    {t:"Regla de tres compuesta, ejemplo 1", url:"https://www.youtube.com/watch?v=oWDzbIp7x_M"},
    {t:"Regla de tres compuesta, ejemplo 5", url:"https://www.youtube.com/watch?v=vjoi2jstFnk"}
  ],

  clase: [
    { nivel:"Aplicación", min:6,
      enun:"En una granja, 23 cerdos se comen 2990 kg de pienso en 50 días. El granjero compra 52 cerdos más y 6240 kg de pienso. ¿Cuántos días le durará ese pienso para todos los cerdos?",
      pasos:[
        "Datos nuevos: 23 + 52 = 75 cerdos y 6240 kg de pienso.",
        cuadro(["Cerdos","Pienso (kg)","Días"],["23","2990","50"],["75","6240","x"],["I","D"]),
        R`Más cerdos → el pienso dura menos: <b>I</b> → le damos la vuelta: $\dfrac{75}{23}$. Más pienso → dura más: <b>D</b> → $\dfrac{2990}{6240}$`,
        R`$\dfrac{75}{23} \cdot \dfrac{2990}{6240} = \dfrac{50}{x} \;\Rightarrow\; \dfrac{224\,250}{143\,520} = \dfrac{50}{x}$`,
        R`$x = \dfrac{50 \cdot 143\,520}{224\,250} = 32$`,
        "¿Tiene sentido? Hay más del triple de cerdos y solo el doble de pienso: dura menos de 50 días ✓"],
      res:"Los 6240 kg de pienso durarán <b>32 días</b> a los 75 cerdos." },
    { nivel:"Aplicación", min:5,
      enun:"Cuatro mineros abren 15 m de galería en 9 días. Si se incorporan 2 mineros más y trabajan 6 días más, ¿cuántos metros abrirán?",
      pasos:[
        "Datos nuevos: 4 + 2 = 6 mineros y 9 + 6 = 15 días.",
        cuadro(["Mineros","Días","Metros"],["4","9","15"],["6","15","x"],["D","D"]),
        "Más mineros → más metros: <b>D</b>. Más días → más metros: <b>D</b>.",
        R`$\dfrac{4}{6} \cdot \dfrac{9}{15} = \dfrac{15}{x} \;\Rightarrow\; \dfrac{36}{90} = \dfrac{15}{x} \;\Rightarrow\; x = \dfrac{15 \cdot 90}{36} = 37,5$`],
      res:"Seis mineros abrirán <b>37,5 m</b> de galería en 15 días." },
    { nivel:"Práctica", min:6,
      enun:"6 alumnos pintan un mural de 18 m² en el patio en 4 horas. Para otro mural un 50 % más grande se apuntan 2 alumnos más. ¿Cuánto tardarán?",
      pasos:[
        R`Datos nuevos: $6 + 2 = 8$ alumnos y $18 \cdot 1,50 = 27$ m²`,
        cuadro(["Alumnos","m²","Horas"],["6","18","4"],["8","27","x"],["I","D"]),
        "Alumnos → Horas: más alumnos, menos horas: <b>I</b> → le damos la vuelta: $\\dfrac{8}{6}$. m² → Horas: más m², más horas: <b>D</b> → $\\dfrac{18}{27}$.".replace(/\\\\/g,"\\"),
        R`$\dfrac{8}{6} \cdot \dfrac{18}{27} = \dfrac{4}{x} \;\Rightarrow\; \dfrac{144}{162} = \dfrac{4}{x} \;\Rightarrow\; x = \dfrac{4 \cdot 162}{144} = 4,5$`,
        "4,5 h = 4 h 30 min. ¿Tiene sentido? Hay más mural y también más alumnos: tardan un poco más ✓"
      ],
      res:"Los 8 alumnos tardarán <b>4 h 30 min</b> en pintar el mural." },
    { nivel:"Práctica", min:6,
      enun:"Una empresa de reparto, con 6 furgonetas haciendo 8 viajes al día, tarda 10 días en repartir un pedido. ¿Cuántos días tardaría si compra 2 furgonetas más y cada una hace un 25 % más de viajes al día?",
      pasos:[
        R`Datos nuevos: $6 + 2 = 8$ furgonetas y $8 \cdot 1,25 = 10$ viajes al día`,
        cuadro(["Furgonetas","Viajes/día","Días"],["6","8","10"],["8","10","x"],["I","I"]),
        "Más furgonetas → menos días: <b>I</b>. Más viajes al día → menos días: <b>I</b>. Les damos la vuelta a las dos.",
        R`$\dfrac{8}{6} \cdot \dfrac{10}{8} = \dfrac{10}{x} \;\Rightarrow\; \dfrac{80}{48} = \dfrac{10}{x} \;\Rightarrow\; x = \dfrac{10 \cdot 48}{80} = 6$`
      ],
      res:"Con 8 furgonetas tardaría <b>6 días</b>." },
    { nivel:"Problema", min:7,
      enun:"Para el musical del instituto, 12 alumnos montan el decorado en 5 días trabajando 2 horas al día. Este año tienen un día menos, pero pueden trabajar 1 hora más cada día. ¿Cuántos alumnos hacen falta?",
      pasos:[
        "Datos nuevos: 5 − 1 = 4 días y 2 + 1 = 3 horas al día.",
        "¡Ojo! Ahora la <i>x</i> está en los <b>alumnos</b>: esa columna va a la derecha.",
        cuadro(["Días","Horas/día","Alumnos"],["5","2","12"],["4","3","x"],["I","I"]),
        "Menos días → hacen falta más alumnos: <b>I</b> → $\\dfrac{4}{5}$. Más horas al día → hacen falta menos alumnos: <b>I</b> → $\\dfrac{3}{2}$.".replace(/\\\\/g,"\\"),
        R`$\dfrac{4}{5} \cdot \dfrac{3}{2} = \dfrac{12}{x} \;\Rightarrow\; \dfrac{12}{10} = \dfrac{12}{x} \;\Rightarrow\; x = 10$`
      ],
      res:"Hacen falta <b>10 alumnos</b> para montar el decorado." },
    { nivel:"Reto", min:8,
      enun:"En un hotel, 4 limpiadoras, trabajando 6 horas al día, limpian 60 habitaciones en 2 días. Una limpiadora se pone enferma, las demás trabajan 1 hora menos al día y llega un grupo, así que hay un 25 % más de habitaciones que limpiar. ¿Cuántos días necesitarán?",
      pasos:[
        R`Datos nuevos: $4 - 1 = 3$ limpiadoras, $6 - 1 = 5$ horas al día y $60 \cdot 1,25 = 75$ habitaciones`,
        cuadro(["Limpiadoras","Horas/día","Habitaciones","Días"],["4","6","60","2"],["3","5","75","x"],["I","I","D"]),
        "A las <b>I</b> les damos la vuelta. Limpiadoras: <b>I</b> → $\\dfrac{3}{4}$. Horas al día: <b>I</b> → $\\dfrac{5}{6}$. Habitaciones: <b>D</b> → $\\dfrac{60}{75}$.".replace(/\\\\/g,"\\"),
        R`$\dfrac{3}{4} \cdot \dfrac{5}{6} \cdot \dfrac{60}{75} = \dfrac{2}{x} \;\Rightarrow\; \dfrac{900}{1800} = \dfrac{2}{x}$`,
        R`$x = \dfrac{2 \cdot 1800}{900} = 4$`
      ],
      res:"Las 3 limpiadoras necesitarán <b>4 días</b>." }
  ],

  casa: [
    { nivel:"Básico",
      enun:"En un camping, 8 duchas abiertas 12 horas gastan agua por valor de 24 €. ¿Cuánto costará el agua si se abre un 50 % más de duchas y están abiertas 3 horas más?",
      pasos:[R`Datos nuevos: $8 \cdot 1,50 = 12$ duchas y $12 + 3 = 15$ horas`, "Duchas → €: <b>D</b>. Horas → €: <b>D</b>.",
             R`$\dfrac{8}{12} \cdot \dfrac{12}{15} = \dfrac{24}{x} \;\Rightarrow\; \dfrac{96}{180} = \dfrac{24}{x} \;\Rightarrow\; x = \dfrac{24 \cdot 180}{96} = 45$`],
      res:"El agua de las 12 duchas costará <b>45 €</b>." },
    { nivel:"Básico",
      enun:"Un camión gasta 36 € de gasóleo en llevar 2 toneladas de carga a 150 km. ¿Cuánto gastará en llevar 2500 kg a 240 km?",
      pasos:["¡Ojo con las unidades! 2 toneladas = 2000 kg.",
             cuadro(["Carga (kg)","Km","Gasto (€)"],["2000","150","36"],["2500","240","x"],["D","D"]),
             R`Más carga → más gasto: <b>D</b>. Más km → más gasto: <b>D</b>.`,
             R`$\dfrac{2000}{2500} \cdot \dfrac{150}{240} = \dfrac{36}{x} \;\Rightarrow\; \dfrac{300\,000}{600\,000} = \dfrac{36}{x} \;\Rightarrow\; x = 72$`],
      res:"Gastará <b>72 €</b> de gasóleo." },
    { nivel:"Consolidación",
      enun:"10 obreros asfaltan 80 km de carretera en 24 días. Ahora hay que asfaltar 140 km más que antes y hay 6 días más de plazo. ¿Cuántos obreros harán falta?",
      pasos:["Datos nuevos: 80 + 140 = 220 km y 24 + 6 = 30 días.", "La <i>x</i> está en los obreros. Km → Obreros: más km, más obreros: <b>D</b> → $\\dfrac{80}{220}$.".replace(/\\\\/g,"\\"),
             "Días → Obreros: más días, menos obreros: <b>I</b> → le damos la vuelta: $\\dfrac{30}{24}$.".replace(/\\\\/g,"\\"),
             R`$\dfrac{80}{220} \cdot \dfrac{30}{24} = \dfrac{10}{x} \;\Rightarrow\; \dfrac{2400}{5280} = \dfrac{10}{x} \;\Rightarrow\; x = \dfrac{10 \cdot 5280}{2400} = 22$`],
      res:"Harán falta <b>22 obreros</b>." },
    { nivel:"Consolidación",
      enun:"En una fábrica de bicicletas, 9 máquinas trabajando 6 horas al día tardan 8 días en terminar un pedido. ¿Cuántos días tardarán 12 máquinas trabajando 9 horas al día?",
      pasos:["Máquinas → Días: <b>I</b>. Horas al día → Días: <b>I</b>. Les damos la vuelta a las dos.",
             R`$\dfrac{12}{9} \cdot \dfrac{9}{6} = \dfrac{8}{x} \;\Rightarrow\; \dfrac{108}{54} = \dfrac{8}{x} \;\Rightarrow\; x = \dfrac{8 \cdot 54}{108} = 4$`],
      res:"12 máquinas tardarán <b>4 días</b> en terminar el pedido." },
    { nivel:"Problema",
      enun:"Dos pintores tardan 3 horas en pintar una pared de 8 m de largo y 3 m de alto. ¿Cuánto tardarán tres pintores en pintar otra pared de 12 m de largo y 4,5 m de alto?",
      pasos:[R`Lo que se pinta es la superficie: $8 \cdot 3 = 24$ m² y $12 \cdot 4,5 = 54$ m²`,
             cuadro(["Pintores","m²","Horas"],["2","24","3"],["3","54","x"],["I","D"]),
             R`Más pintores → menos horas: <b>I</b> → $\dfrac{3}{2}$. Más m² → más horas: <b>D</b> → $\dfrac{24}{54}$`,
             R`$\dfrac{3}{2} \cdot \dfrac{24}{54} = \dfrac{3}{x} \;\Rightarrow\; \dfrac{72}{108} = \dfrac{3}{x} \;\Rightarrow\; x = \dfrac{3 \cdot 108}{72} = 4,5$`,
             "4,5 h = 4 h 30 min"],
      res:"Los tres pintores tardarán <b>4 h 30 min</b>." },
    { nivel:"Problema",
      enun:"Una familia de 4 personas gasta 480 € en comida en 15 días de vacaciones. Este año vienen 2 personas más y llevan un 50 % más de dinero. ¿Para cuántos días les llega?",
      pasos:[R`Datos nuevos: $4 + 2 = 6$ personas y $480 \cdot 1,50 = 720$ €`, "Personas → Días: más personas, menos días: <b>I</b> → $\\dfrac{6}{4}$. Dinero → Días: más dinero, más días: <b>D</b> → $\\dfrac{480}{720}$.".replace(/\\\\/g,"\\"),
             R`$\dfrac{6}{4} \cdot \dfrac{480}{720} = \dfrac{15}{x} \;\Rightarrow\; \dfrac{2880}{2880} = \dfrac{15}{x} \;\Rightarrow\; 1 = \dfrac{15}{x} \;\Rightarrow\; x = 15$`,
             "¿Por qué sale lo mismo? Hay 1,5 veces más personas, pero también 1,5 veces más dinero."],
      res:"El dinero les llega para <b>15 días</b>." },
    { nivel:"Para pensar",
      enun:"En una imprenta, 5 máquinas, trabajando 8 horas al día, imprimen 20 000 libros en 6 días. ¿Cuántas máquinas hacen falta para imprimir 30 000 libros en 5 días trabajando 9 horas al día?",
      pasos:["Cuatro magnitudes. La <i>x</i> está en las máquinas.",
             "A las <b>I</b> les damos la vuelta. Libros → Máquinas: <b>D</b> → $\\dfrac{20\\,000}{30\\,000}$. Días → Máquinas: <b>I</b> → $\\dfrac{5}{6}$. Horas/día → Máquinas: <b>I</b> → $\\dfrac{9}{8}$.".replace(/\\\\/g,"\\"),
             R`$\dfrac{2}{3} \cdot \dfrac{5}{6} \cdot \dfrac{9}{8} = \dfrac{5}{x} \;\Rightarrow\; \dfrac{90}{144} = \dfrac{5}{x} \;\Rightarrow\; x = \dfrac{5 \cdot 144}{90} = 8$`],
      res:"Hacen falta <b>8 máquinas</b>." },
    { nivel:"Problema",
      enun:"En el comedor del instituto, 120 alumnos gastan 900 litros de leche en 30 días. Quedan 600 litros y el próximo mes comerán 150 alumnos durante 20 días. ¿Habrá leche suficiente?",
      pasos:[cuadro(["Alumnos","Días","Leche (L)"],["120","30","900"],["150","20","x"],["D","D"]),
             R`Más alumnos → más leche: <b>D</b>. Menos días → menos leche: <b>D</b>.`,
             R`$\dfrac{120}{150} \cdot \dfrac{30}{20} = \dfrac{900}{x} \;\Rightarrow\; \dfrac{3600}{3000} = \dfrac{900}{x} \;\Rightarrow\; x = \dfrac{900 \cdot 3000}{3600} = 750$ L`,
             "Hacen falta 750 L y solo hay 600 L: faltan 750 − 600 = 150 L."],
      res:"<b>No</b> habrá suficiente: hacen falta 750 L y faltan <b>150 litros</b>." },
    { nivel:"Para pensar",
      enun:"Si 3 gallinas ponen 3 huevos en 3 días, ¿cuántos huevos pondrán 6 gallinas en 6 días? (Cuidado: la respuesta no es 6.)",
      pasos:["Gallinas → Huevos: <b>D</b>. Días → Huevos: <b>D</b>.",
             R`$\dfrac{3}{6} \cdot \dfrac{3}{6} = \dfrac{3}{x} \;\Rightarrow\; \dfrac{9}{36} = \dfrac{3}{x} \;\Rightarrow\; x = 12$`,
             "Razonando: con el doble de gallinas, el doble de huevos (6); y en el doble de días, otra vez el doble (12)."],
      res:"6 gallinas pondrán <b>12 huevos</b> en 6 días." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">¿Y si en el problema hay tres magnitudes?</p>`}
    ]},

    { titulo:"¿Cuándo es proporcionalidad compuesta?", cuerpo:[
      {def:["Cuando en el problema hay <b>tres o más magnitudes</b> relacionadas."], etq:"Proporcionalidad compuesta"},
      {ej:{etq:"🔎 Así se reconoce", enun:"3 máquinas fabrican 600 piezas en 5 horas. ¿Cuántas piezas fabricarán 5 máquinas en 8 horas?",
        pasos:["Magnitudes: <b>máquinas</b>, <b>horas</b> y <b>piezas</b>: son tres.", "Frases típicas: «trabajando … horas al día», «en … días», «con … máquinas»."]}},
      {nota:["Cada magnitud puede ser directa o inversa con la de la <i>x</i>. Por eso se compara <b>de una en una</b>."]}
    ]},

    { titulo:"Ejemplo 1: directa y directa", cuerpo:[
      {ej:{enun:"3 máquinas fabrican 600 piezas en 5 horas. ¿Cuántas piezas fabricarán 5 máquinas en 8 horas?",
        pasos:[cuadro(["Máquinas","Horas","Piezas"],["3","5","600"],["5","8","x"],["D","D"]),
               "Máquinas → Piezas: doble de máquinas, doble de piezas: <b>D</b>. Horas → Piezas: doble de horas, doble de piezas: <b>D</b>.",
               R`$\dfrac{3}{5} \cdot \dfrac{5}{8} = \dfrac{600}{x} \;\Rightarrow\; \dfrac{15}{40} = \dfrac{600}{x}$`,
               R`$x = \dfrac{600 \cdot 40}{15} = 1600$`],
        res:"5 máquinas fabricarán <b>1600 piezas</b> en 8 horas."}}
    ]},

    { titulo:"El método (lo que hemos hecho)", cuerpo:[
      {prop:[{lista:[
        "<b>1.</b> Hago el <b>cuadro</b>: una columna por magnitud y la de la <i>x</i> a la derecha.",
        "<b>2.</b> Comparo <b>cada columna con la de la <i>x</i></b>, tapando las demás, y escribo <b>D</b> o <b>I</b> en su flecha.",
        "<b>3.</b> Escribo cada columna como fracción. Las <b>D</b> se dejan igual; a las <b>I</b> <b>les damos la vuelta</b>.",
        "<b>4.</b> Multiplico esas fracciones y lo igualo a la fracción de la <i>x</i>. Después, en cruz.",
        "<b>5.</b> Compruebo si tiene sentido."
      ]}], etq:"El método"},
      {aviso:["A la fracción de la <i>x</i> <b>nunca</b> se le da la vuelta."]}
    ]},

    { titulo:"Ejemplo 2: inversa y directa", cuerpo:[
      {ej:{enun:"5 obreros construyen 20 m de muro en 6 días. Si se van 2 obreros y el muro nuevo es un 50 % más largo, ¿cuántos días tardarán?",
        pasos:[R`Lo primero, los datos nuevos: $5 - 2 = 3$ obreros y $20 \cdot 1,50 = 30$ m`, cuadro(["Obreros","Metros","Días"],["5","20","6"],["3","30","x"],["I","D"]),
               R`Obreros → Días: doble de obreros, mitad de días: <b>I</b> → le damos la vuelta: $\dfrac{5}{3} \to \dfrac{3}{5}$`,
               "Metros → Días: doble de metros, doble de días: <b>D</b>.",
               R`$\dfrac{3}{5} \cdot \dfrac{20}{30} = \dfrac{6}{x} \;\Rightarrow\; \dfrac{60}{150} = \dfrac{6}{x} \;\Rightarrow\; x = \dfrac{6 \cdot 150}{60} = 15$`],
        res:"3 obreros tardarán <b>15 días</b> en construir 30 m de muro."}}
    ]},

    { titulo:"Ejemplo 3: inversa e inversa", cuerpo:[
      {ej:{enun:"10 obreros, trabajando 8 horas al día, tardan 12 días en hacer una obra. ¿Cuántos días tardarán 12 obreros trabajando 10 horas al día?",
        pasos:[cuadro(["Obreros","Horas/día","Días"],["10","8","12"],["12","10","x"],["I","I"]),
               "Doble de obreros → mitad de días: <b>I</b>. Doble de horas al día → mitad de días: <b>I</b>.",
               R`$\dfrac{12}{10} \cdot \dfrac{10}{8} = \dfrac{12}{x} \;\Rightarrow\; \dfrac{120}{80} = \dfrac{12}{x} \;\Rightarrow\; x = \dfrac{12 \cdot 80}{120} = 8$`,
               "Comprueba: más obreros y más horas al día → menos de 12 días ✓"],
        res:"12 obreros tardarán <b>8 días</b>."}}
    ]},

    { titulo:"Con cuatro magnitudes", cuerpo:[
      {ej:{etq:"✍️ Problema resuelto", enun:"8 obreros, trabajando 6 horas al día, construyen 120 m de valla en 5 días. ¿Cuántos días tardarán 10 obreros, trabajando 8 horas al día, en construir 240 m?",
        pasos:[cuadro(["Obreros","Horas/día","Metros","Días"],["8","6","120","5"],["10","8","240","x"],["I","I","D"]),
               R`A las <b>I</b> les damos la vuelta. Obreros: <b>I</b> → $\dfrac{10}{8}$. Horas al día: <b>I</b> → $\dfrac{8}{6}$. Metros: <b>D</b> → $\dfrac{120}{240}$`,
               R`$\dfrac{10}{8} \cdot \dfrac{8}{6} \cdot \dfrac{120}{240} = \dfrac{5}{x} \;\Rightarrow\; \dfrac{9600}{11\,520} = \dfrac{5}{x}$`,
               R`$x = \dfrac{5 \cdot 11\,520}{9600} = 6$`],
        res:"10 obreros tardarán <b>6 días</b> en construir los 240 m de valla."}}
    ]},

    { titulo:"Cuando la x no está en los días", cuerpo:[
      {p:"La columna de la <i>x</i> siempre va a la derecha, sea cual sea la magnitud."},
      {ej:{enun:"10 obreros asfaltan 80 km en 24 días. ¿Cuántos obreros harán falta para asfaltar 220 km en 30 días?",
        pasos:[cuadro(["Km","Días","Obreros"],["80","24","10"],["220","30","x"],["D","I"]),
               R`Km → Obreros: más km, más obreros: <b>D</b> → $\dfrac{80}{220}$. Días → Obreros: más días, menos obreros: <b>I</b> → $\dfrac{30}{24}$`,
               R`$\dfrac{80}{220} \cdot \dfrac{30}{24} = \dfrac{10}{x} \;\Rightarrow\; \dfrac{2400}{5280} = \dfrac{10}{x} \;\Rightarrow\; x = 22$`],
        res:"Harán falta <b>22 obreros</b>."}}
    ]},

    { titulo:"🪄 Trucos para ir más rápido", cuerpo:[
      {truco:[R`<b>Tapa con la mano</b> las columnas que no estás mirando y compara solo una con la de la $x$.`], etq:"🪄 Truco 1"},
      {truco:[R`<b>Simplifica antes de multiplicar:</b> en $\dfrac{12}{10} \cdot \dfrac{10}{8}$ el 10 de arriba y el de abajo se van → queda $\dfrac{12}{8}$.`], etq:"🪄 Truco 2"},
      {truco:[R`<b>Comprueba con el «trabajo total»:</b> 10 obreros × 8 h × 12 días = 960 horas de trabajo. 12 obreros × 10 h = 120 horas cada día → $960 : 120 = 8$ días ✓`], etq:"🪄 Truco 3"}
    ]},

    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:["<b>Comparar dos columnas entre sí</b> en lugar de cada una con la de la <i>x</i>."], etq:"⚠️ Error 1"},
      {aviso:["<b>Darle la vuelta a la fracción de la <i>x</i></b>. En la compuesta, la <i>x</i> se queda igual; solo se da la vuelta a las <b>I</b>."], etq:"⚠️ Error 2"},
      {aviso:["<b>Olvidar alguna magnitud.</b> Lee el enunciado y cuenta cuántas hay antes de hacer el cuadro."], etq:"⚠️ Error 3"}
    ]},

    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{lista:[
        "<b>Compuesta:</b> tres o más magnitudes.",
        "<b>Cuadro</b> con la columna de la <i>x</i> a la derecha y una <b>flecha D o I</b> de cada columna hacia la <i>x</i>.",
        "<b>D</b>: la fracción se queda igual. <b>I</b>: le damos la vuelta.",
        R`Multiplico las fracciones $=$ fracción de la $x$ → en cruz → ¿tiene sentido?`
      ]}]},
      {estudio:[
        {comp:{q:"2 máquinas hacen 100 piezas en 5 horas. ¿Cuántas piezas hacen 4 máquinas en 10 horas?", sol:400, unidad:"piezas",
          explic:R`D y D: $\dfrac{2}{4} \cdot \dfrac{5}{10} = \dfrac{100}{x} \Rightarrow \dfrac{10}{40} = \dfrac{100}{x} \Rightarrow x = 400$`, pista:"Más máquinas → más piezas; más horas → más piezas. Las dos fracciones se quedan igual."}},
        {comp:{q:"6 pintores, trabajando 8 h al día, pintan una casa en 10 días. ¿Cuántos días tardan 8 pintores trabajando 6 h al día?", sol:10, unidad:"días",
          explic:R`I e I: $\dfrac{8}{6} \cdot \dfrac{6}{8} = \dfrac{10}{x} \Rightarrow 1 = \dfrac{10}{x} \Rightarrow x = 10$. Más pintores pero menos horas: se compensa.`, pista:"Las dos son inversas: dales la vuelta a las dos fracciones."}},
        {comp:{q:"En la compuesta, ¿a qué fracción NO se le da nunca la vuelta?", opciones:["A las directas","A la de la x","A las inversas"], ok:1,
          explic:"A la fracción de la x nunca se le da la vuelta; las D se quedan igual y a las I se les da la vuelta.", pista:"Repasa el paso 3 y 4 del método."}}
      ]}
    ]}
  ]
});
})();

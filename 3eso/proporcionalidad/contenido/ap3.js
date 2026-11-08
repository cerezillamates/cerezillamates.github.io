/* 3.º ESO · Tema 3 · Apartado 3: Proporcionalidad compuesta
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
  num: 3,
  titulo: "Proporcionalidad compuesta",
  videos: [
    {t:"Regla de tres compuesta, ejemplo 1", url:"https://www.youtube.com/watch?v=oWDzbIp7x_M"},
    {t:"Regla de tres compuesta, ejemplo 5", url:"https://www.youtube.com/watch?v=vjoi2jstFnk"}
  ],

  clase: [
    { nivel:"Aplicación", min:5,
      enun:"En una granja, 5 vacas comen 150 kg de pienso en 6 días. ¿Cuántos kilos de pienso comerán 8 vacas en 10 días?",
      pasos:[
        cuadro(["Vacas","Días","Pienso (kg)"],["5","6","150"],["8","10","x"],["D","D"]),
        "Vacas → Pienso: doble de vacas, doble de pienso: <b>D</b>. Días → Pienso: doble de días, doble de pienso: <b>D</b>.",
        R`Las D se dejan igual: $\dfrac{5}{8} \cdot \dfrac{6}{10} = \dfrac{150}{x} \;\Rightarrow\; \dfrac{30}{80} = \dfrac{150}{x}$`,
        R`$x = \dfrac{150 \cdot 80}{30} = 400$`
      ],
      res:"Comerán <b>400 kg</b> de pienso" },
    { nivel:"Aplicación", min:5,
      enun:"En el aula de Tecnología, 3 impresoras 3D fabrican 60 piezas en 4 horas. ¿Cuántas piezas fabricarán 5 impresoras en 6 horas?",
      pasos:[
        cuadro(["Impresoras","Horas","Piezas"],["3","4","60"],["5","6","x"],["D","D"]),
        "Más impresoras → más piezas: <b>D</b>. Más horas → más piezas: <b>D</b>.",
        R`$\dfrac{3}{5} \cdot \dfrac{4}{6} = \dfrac{60}{x} \;\Rightarrow\; \dfrac{12}{30} = \dfrac{60}{x} \;\Rightarrow\; x = \dfrac{60 \cdot 30}{12} = 150$`
      ],
      res:"Fabricarán <b>150 piezas</b>" },
    { nivel:"Práctica", min:6,
      enun:"6 alumnos pintan un mural de 18 m² en el patio en 4 horas. ¿Cuánto tardarán 8 alumnos en pintar otro mural de 30 m²?",
      pasos:[
        cuadro(["Alumnos","m²","Horas"],["6","18","4"],["8","30","x"],["I","D"]),
        "Alumnos → Horas: más alumnos, menos horas: <b>I</b> → le damos la vuelta: $\\dfrac{8}{6}$. m² → Horas: más m², más horas: <b>D</b> → $\\dfrac{18}{30}$.".replace(/\\\\/g,"\\"),
        R`$\dfrac{8}{6} \cdot \dfrac{18}{30} = \dfrac{4}{x} \;\Rightarrow\; \dfrac{144}{180} = \dfrac{4}{x} \;\Rightarrow\; x = \dfrac{4 \cdot 180}{144} = 5$`,
        "¿Tiene sentido? Hay más mural y también más alumnos: tardan un poco más (5 h > 4 h) ✓"
      ],
      res:"Tardarán <b>5 horas</b>" },
    { nivel:"Práctica", min:6,
      enun:"Una empresa de reparto, con 6 furgonetas haciendo 8 viajes al día, tarda 10 días en repartir un pedido. ¿Cuántos días tardaría con 8 furgonetas haciendo 10 viajes al día?",
      pasos:[
        cuadro(["Furgonetas","Viajes/día","Días"],["6","8","10"],["8","10","x"],["I","I"]),
        "Más furgonetas → menos días: <b>I</b>. Más viajes al día → menos días: <b>I</b>. Les damos la vuelta a las dos.",
        R`$\dfrac{8}{6} \cdot \dfrac{10}{8} = \dfrac{10}{x} \;\Rightarrow\; \dfrac{80}{48} = \dfrac{10}{x} \;\Rightarrow\; x = \dfrac{10 \cdot 48}{80} = 6$`
      ],
      res:"Tardaría <b>6 días</b>" },
    { nivel:"Problema", min:7,
      enun:"Para el musical del instituto, 12 alumnos montan el decorado en 5 días trabajando 2 horas al día. ¿Cuántos alumnos hacen falta para montarlo en 4 días trabajando 3 horas al día?",
      pasos:[
        "¡Ojo! Ahora la <i>x</i> está en los <b>alumnos</b>: esa columna va a la derecha.",
        cuadro(["Días","Horas/día","Alumnos"],["5","2","12"],["4","3","x"],["I","I"]),
        "Menos días → hacen falta más alumnos: <b>I</b> → $\\dfrac{4}{5}$. Más horas al día → hacen falta menos alumnos: <b>I</b> → $\\dfrac{3}{2}$.".replace(/\\\\/g,"\\"),
        R`$\dfrac{4}{5} \cdot \dfrac{3}{2} = \dfrac{12}{x} \;\Rightarrow\; \dfrac{12}{10} = \dfrac{12}{x} \;\Rightarrow\; x = 10$`
      ],
      res:"Hacen falta <b>10 alumnos</b>" },
    { nivel:"Reto", min:8,
      enun:"En un hotel, 4 limpiadoras, trabajando 6 horas al día, limpian 60 habitaciones en 2 días. ¿Cuántos días necesitarán 3 limpiadoras, trabajando 5 horas al día, para limpiar 75 habitaciones?",
      pasos:[
        cuadro(["Limpiadoras","Horas/día","Habitaciones","Días"],["4","6","60","2"],["3","5","75","x"],["I","I","D"]),
        "A las <b>I</b> les damos la vuelta. Limpiadoras: <b>I</b> → $\\dfrac{3}{4}$. Horas al día: <b>I</b> → $\\dfrac{5}{6}$. Habitaciones: <b>D</b> → $\\dfrac{60}{75}$.".replace(/\\\\/g,"\\"),
        R`$\dfrac{3}{4} \cdot \dfrac{5}{6} \cdot \dfrac{60}{75} = \dfrac{2}{x} \;\Rightarrow\; \dfrac{900}{1800} = \dfrac{2}{x}$`,
        R`$x = \dfrac{2 \cdot 1800}{900} = 4$`
      ],
      res:"Necesitarán <b>4 días</b>" }
  ],

  casa: [
    { nivel:"Básico",
      enun:"En un camping, 8 duchas abiertas 12 horas gastan agua por valor de 24 €. ¿Cuánto costará el agua de 12 duchas abiertas 15 horas?",
      pasos:["Duchas → €: <b>D</b>. Horas → €: <b>D</b>.",
             R`$\dfrac{8}{12} \cdot \dfrac{12}{15} = \dfrac{24}{x} \;\Rightarrow\; \dfrac{96}{180} = \dfrac{24}{x} \;\Rightarrow\; x = \dfrac{24 \cdot 180}{96} = 45$`],
      res:"45 €" },
    { nivel:"Básico",
      enun:"Para construir un polideportivo, 4 camiones transportan 120 toneladas de tierra en 3 viajes cada uno. ¿Cuántas toneladas transportarán 6 camiones en 5 viajes cada uno?",
      pasos:["Camiones → Toneladas: <b>D</b>. Viajes → Toneladas: <b>D</b>.",
             R`$\dfrac{4}{6} \cdot \dfrac{3}{5} = \dfrac{120}{x} \;\Rightarrow\; \dfrac{12}{30} = \dfrac{120}{x} \;\Rightarrow\; x = 300$`],
      res:"300 toneladas" },
    { nivel:"Consolidación",
      enun:"10 obreros asfaltan 80 km de carretera en 24 días. ¿Cuántos obreros harán falta para asfaltar 220 km en 30 días?",
      pasos:["La <i>x</i> está en los obreros. Km → Obreros: más km, más obreros: <b>D</b> → $\\dfrac{80}{220}$.".replace(/\\\\/g,"\\"),
             "Días → Obreros: más días, menos obreros: <b>I</b> → le damos la vuelta: $\\dfrac{30}{24}$.".replace(/\\\\/g,"\\"),
             R`$\dfrac{80}{220} \cdot \dfrac{30}{24} = \dfrac{10}{x} \;\Rightarrow\; \dfrac{2400}{5280} = \dfrac{10}{x} \;\Rightarrow\; x = \dfrac{10 \cdot 5280}{2400} = 22$`],
      res:"22 obreros" },
    { nivel:"Consolidación",
      enun:"En una fábrica de bicicletas, 9 máquinas trabajando 6 horas al día tardan 8 días en terminar un pedido. ¿Cuántos días tardarán 12 máquinas trabajando 9 horas al día?",
      pasos:["Máquinas → Días: <b>I</b>. Horas al día → Días: <b>I</b>. Les damos la vuelta a las dos.",
             R`$\dfrac{12}{9} \cdot \dfrac{9}{6} = \dfrac{8}{x} \;\Rightarrow\; \dfrac{108}{54} = \dfrac{8}{x} \;\Rightarrow\; x = \dfrac{8 \cdot 54}{108} = 4$`],
      res:"4 días" },
    { nivel:"Problema",
      enun:"Una piscina municipal de 600 m³ se llena con 3 grifos iguales en 10 horas. ¿Cuánto tardarán 5 grifos iguales en llenar otra piscina de 900 m³?",
      pasos:["Grifos → Horas: más grifos, menos horas: <b>I</b> → $\\dfrac{5}{3}$. m³ → Horas: más agua, más horas: <b>D</b> → $\\dfrac{600}{900}$.".replace(/\\\\/g,"\\"),
             R`$\dfrac{5}{3} \cdot \dfrac{600}{900} = \dfrac{10}{x} \;\Rightarrow\; \dfrac{3000}{2700} = \dfrac{10}{x} \;\Rightarrow\; x = \dfrac{10 \cdot 2700}{3000} = 9$`],
      res:"9 horas" },
    { nivel:"Problema",
      enun:"Una familia de 4 personas gasta 480 € en comida en 15 días de vacaciones. Si viajan 6 personas con 720 €, ¿para cuántos días les llega el dinero?",
      pasos:["Personas → Días: más personas, menos días: <b>I</b> → $\\dfrac{6}{4}$. Dinero → Días: más dinero, más días: <b>D</b> → $\\dfrac{480}{720}$.".replace(/\\\\/g,"\\"),
             R`$\dfrac{6}{4} \cdot \dfrac{480}{720} = \dfrac{15}{x} \;\Rightarrow\; \dfrac{2880}{2880} = \dfrac{15}{x} \;\Rightarrow\; 1 = \dfrac{15}{x} \;\Rightarrow\; x = 15$`,
             "¿Por qué sale lo mismo? Hay 1,5 veces más personas, pero también 1,5 veces más dinero."],
      res:"Les llega para 15 días" },
    { nivel:"Para pensar",
      enun:"En una imprenta, 5 máquinas, trabajando 8 horas al día, imprimen 20 000 libros en 6 días. ¿Cuántas máquinas hacen falta para imprimir 30 000 libros en 5 días trabajando 9 horas al día?",
      pasos:["Cuatro magnitudes. La <i>x</i> está en las máquinas.",
             "A las <b>I</b> les damos la vuelta. Libros → Máquinas: <b>D</b> → $\\dfrac{20\\,000}{30\\,000}$. Días → Máquinas: <b>I</b> → $\\dfrac{5}{6}$. Horas/día → Máquinas: <b>I</b> → $\\dfrac{9}{8}$.".replace(/\\\\/g,"\\"),
             R`$\dfrac{2}{3} \cdot \dfrac{5}{6} \cdot \dfrac{9}{8} = \dfrac{5}{x} \;\Rightarrow\; \dfrac{90}{144} = \dfrac{5}{x} \;\Rightarrow\; x = \dfrac{5 \cdot 144}{90} = 8$`],
      res:"8 máquinas" },
    { nivel:"Para pensar",
      enun:"Si 3 gallinas ponen 3 huevos en 3 días, ¿cuántos huevos pondrán 6 gallinas en 6 días? (Cuidado: la respuesta no es 6.)",
      pasos:["Gallinas → Huevos: <b>D</b>. Días → Huevos: <b>D</b>.",
             R`$\dfrac{3}{6} \cdot \dfrac{3}{6} = \dfrac{3}{x} \;\Rightarrow\; \dfrac{9}{36} = \dfrac{3}{x} \;\Rightarrow\; x = 12$`,
             "Razonando: con el doble de gallinas, el doble de huevos (6); y en el doble de días, otra vez el doble (12)."],
      res:"12 huevos" }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {nota:[{lista:[
        "Reconocer un problema de <b>proporcionalidad compuesta</b> (tres o más magnitudes).",
        "Decidir si cada magnitud es <b>D</b> o <b>I</b> con la de la <i>x</i>.",
        "Plantear y resolver con el <b>cuadro y las flechas</b>.",
        "Resolver problemas con <b>cuatro magnitudes</b>."
      ]}], etq:"🎯 En este apartado vas a aprender"}
    ]},

    { titulo:"¿Cuándo es proporcionalidad compuesta?", cuerpo:[
      {def:["Cuando en el problema hay <b>tres o más magnitudes</b> relacionadas."], etq:"Proporcionalidad compuesta"},
      {ej:{etq:"🔎 Así se reconoce", enun:"3 máquinas fabrican 600 piezas en 5 horas. ¿Cuántas piezas fabricarán 5 máquinas en 8 horas?",
        pasos:["Magnitudes: <b>máquinas</b>, <b>horas</b> y <b>piezas</b>: son tres.", "Frases típicas: «trabajando … horas al día», «en … días», «con … máquinas»."]}},
      {nota:["Cada magnitud puede ser directa o inversa con la de la <i>x</i>. Por eso se compara <b>de una en una</b>."]}
    ]},

    { titulo:"Cómo se plantea", cuerpo:[
      {prop:[{lista:[
        "<b>1.</b> Hago el <b>cuadro</b>: una columna por magnitud y la de la <i>x</i> a la derecha.",
        "<b>2.</b> Comparo <b>cada columna con la de la <i>x</i></b>, tapando las demás, y escribo <b>D</b> o <b>I</b> en su flecha.",
        "<b>3.</b> Escribo cada columna como fracción. Las <b>D</b> se dejan igual; a las <b>I</b> <b>les damos la vuelta</b>.",
        "<b>4.</b> Multiplico esas fracciones y lo igualo a la fracción de la <i>x</i>. Después, en cruz.",
        "<b>5.</b> Compruebo si tiene sentido."
      ]}], etq:"El método"},
      {aviso:["A la fracción de la <i>x</i> <b>nunca</b> se le da la vuelta."]}
    ]},

    { titulo:"Ejemplo 1: directa y directa", cuerpo:[
      {ej:{enun:"3 máquinas fabrican 600 piezas en 5 horas. ¿Cuántas piezas fabricarán 5 máquinas en 8 horas?",
        pasos:[cuadro(["Máquinas","Horas","Piezas"],["3","5","600"],["5","8","x"],["D","D"]),
               "Máquinas → Piezas: doble de máquinas, doble de piezas: <b>D</b>. Horas → Piezas: doble de horas, doble de piezas: <b>D</b>.",
               R`$\dfrac{3}{5} \cdot \dfrac{5}{8} = \dfrac{600}{x} \;\Rightarrow\; \dfrac{15}{40} = \dfrac{600}{x}$`,
               R`$x = \dfrac{600 \cdot 40}{15} = 1600$`],
        res:"<b>1600 piezas</b>"}}
    ]},

    { titulo:"Ejemplo 2: inversa y directa", cuerpo:[
      {ej:{enun:"5 obreros construyen 20 m de muro en 6 días. ¿Cuántos días tardarán 3 obreros en construir 30 m?",
        pasos:[cuadro(["Obreros","Metros","Días"],["5","20","6"],["3","30","x"],["I","D"]),
               R`Obreros → Días: doble de obreros, mitad de días: <b>I</b> → le damos la vuelta: $\dfrac{5}{3} \to \dfrac{3}{5}$`,
               "Metros → Días: doble de metros, doble de días: <b>D</b>.",
               R`$\dfrac{3}{5} \cdot \dfrac{20}{30} = \dfrac{6}{x} \;\Rightarrow\; \dfrac{60}{150} = \dfrac{6}{x} \;\Rightarrow\; x = \dfrac{6 \cdot 150}{60} = 15$`],
        res:"<b>15 días</b>"}}
    ]},

    { titulo:"Ejemplo 3: inversa e inversa", cuerpo:[
      {ej:{enun:"10 obreros, trabajando 8 horas al día, tardan 12 días en hacer una obra. ¿Cuántos días tardarán 12 obreros trabajando 10 horas al día?",
        pasos:[cuadro(["Obreros","Horas/día","Días"],["10","8","12"],["12","10","x"],["I","I"]),
               "Doble de obreros → mitad de días: <b>I</b>. Doble de horas al día → mitad de días: <b>I</b>.",
               R`$\dfrac{12}{10} \cdot \dfrac{10}{8} = \dfrac{12}{x} \;\Rightarrow\; \dfrac{120}{80} = \dfrac{12}{x} \;\Rightarrow\; x = \dfrac{12 \cdot 80}{120} = 8$`,
               "Comprueba: más obreros y más horas al día → menos de 12 días ✓"],
        res:"<b>8 días</b>"}}
    ]},

    { titulo:"Con cuatro magnitudes", cuerpo:[
      {ej:{etq:"✍️ Problema resuelto", enun:"8 obreros, trabajando 6 horas al día, construyen 120 m de valla en 5 días. ¿Cuántos días tardarán 10 obreros, trabajando 8 horas al día, en construir 240 m?",
        pasos:[cuadro(["Obreros","Horas/día","Metros","Días"],["8","6","120","5"],["10","8","240","x"],["I","I","D"]),
               R`A las <b>I</b> les damos la vuelta. Obreros: <b>I</b> → $\dfrac{10}{8}$. Horas al día: <b>I</b> → $\dfrac{8}{6}$. Metros: <b>D</b> → $\dfrac{120}{240}$`,
               R`$\dfrac{10}{8} \cdot \dfrac{8}{6} \cdot \dfrac{120}{240} = \dfrac{5}{x} \;\Rightarrow\; \dfrac{9600}{11\,520} = \dfrac{5}{x}$`,
               R`$x = \dfrac{5 \cdot 11\,520}{9600} = 6$`],
        res:"<b>6 días</b>"}}
    ]},

    { titulo:"Cuando la x no está en los días", cuerpo:[
      {p:"La columna de la <i>x</i> siempre va a la derecha, sea cual sea la magnitud."},
      {ej:{enun:"10 obreros asfaltan 80 km en 24 días. ¿Cuántos obreros harán falta para asfaltar 220 km en 30 días?",
        pasos:[cuadro(["Km","Días","Obreros"],["80","24","10"],["220","30","x"],["D","I"]),
               R`Km → Obreros: más km, más obreros: <b>D</b> → $\dfrac{80}{220}$. Días → Obreros: más días, menos obreros: <b>I</b> → $\dfrac{30}{24}$`,
               R`$\dfrac{80}{220} \cdot \dfrac{30}{24} = \dfrac{10}{x} \;\Rightarrow\; \dfrac{2400}{5280} = \dfrac{10}{x} \;\Rightarrow\; x = 22$`],
        res:"<b>22 obreros</b>"}}
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

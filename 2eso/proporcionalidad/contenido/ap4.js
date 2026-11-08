/* 2.º ESO · Tema 3 · Apartado 4: Proporcionalidad compuesta (tres magnitudes)
   Método de los apuntes de la web de la profesora: cuadro con una columna por magnitud y la de la x a la derecha;
   flecha D o I de cada columna hacia la de la x (comparando solo esas dos); a las I se les da la vuelta;
   se multiplican y se igualan a la fracción de la x. Otra forma: reducción a la unidad. */
(function(){
const R = String.raw;
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
      enun:"Cuatro grifos iguales llenan 2 piscinas en 6 horas. ¿Cuántas horas tardarán 6 grifos en llenar 3 piscinas?",
      pasos:[cuadro(["Grifos","Piscinas","Horas"],["4","2","6"],["6","3","x"],["I","D"]),
             "Más grifos → menos horas: <b>I</b>. Más piscinas → más horas: <b>D</b>.",
             R`$\dfrac{6}{4} \cdot \dfrac{2}{3} = \dfrac{6}{x} \;\Rightarrow\; \dfrac{12}{12} = \dfrac{6}{x} \;\Rightarrow\; x = 6$`],
      res:"<b>6 horas</b>" },
    { nivel:"Aplicación", min:6,
      enun:"De campamento, 10 personas gastan 600 € en comida en 4 días. ¿Cuánto gastarán 8 personas en 6 días?",
      pasos:[cuadro(["Personas","Días","Dinero (€)"],["10","4","600"],["8","6","x"],["D","D"]),
             "Más personas → más gasto: <b>D</b>. Más días → más gasto: <b>D</b>.",
             R`$\dfrac{10}{8} \cdot \dfrac{4}{6} = \dfrac{600}{x} \;\Rightarrow\; \dfrac{40}{48} = \dfrac{600}{x} \;\Rightarrow\; x = \dfrac{48 \cdot 600}{40} = 720$`,
             R`Comprueba: 1 persona en 1 día gasta $600 : 40 = 15$ € → $8 \cdot 6 \cdot 15 = 720$ € ✓`],
      res:"<b>720 €</b>" },
    { nivel:"Práctica", min:6,
      enun:"Tres impresoras iguales imprimen 900 hojas en 15 minutos. ¿Cuánto tardarán 5 impresoras en imprimir 1500 hojas?",
      pasos:[cuadro(["Impresoras","Hojas","Minutos"],["3","900","15"],["5","1500","x"],["I","D"]),
             R`$\dfrac{5}{3} \cdot \dfrac{900}{1500} = \dfrac{15}{x} \;\Rightarrow\; \dfrac{4500}{4500} = \dfrac{15}{x} \;\Rightarrow\; x = 15$`,
             "Por la unidad: 1 impresora hace 900 : 3 = 300 hojas en 15 min → 20 hojas/min; 5 impresoras: 100 hojas/min → 1500 : 100 = 15 min ✓"],
      res:"<b>15 minutos</b>" },
    { nivel:"Práctica", min:7,
      enun:"Seis obreros, trabajando 8 horas al día, hacen una obra en 15 días. ¿Cuántos días tardarán 10 obreros trabajando 6 horas al día?",
      pasos:[cuadro(["Obreros","Horas/día","Días"],["6","8","15"],["10","6","x"],["I","I"]),
             "Más obreros → menos días: <b>I</b>. Menos horas al día → más días: <b>I</b>.",
             R`Les doy la vuelta a las dos: $\dfrac{10}{6} \cdot \dfrac{6}{8} = \dfrac{15}{x} \;\Rightarrow\; \dfrac{60}{48} = \dfrac{15}{x} \;\Rightarrow\; x = \dfrac{48 \cdot 15}{60} = 12$`],
      res:"<b>12 días</b>" },
    { nivel:"Problema", min:7,
      enun:"En la granja escuela, 15 gallinas comen 45 kg de pienso en 30 días. ¿Cuántos días durarán 50 kg de pienso para 20 gallinas?",
      pasos:[cuadro(["Gallinas","Pienso (kg)","Días"],["15","45","30"],["20","50","x"],["I","D"]),
             R`Por la unidad: 1 gallina come en 1 día $45 : (15 \cdot 30) = 0,1$ kg`,
             R`20 gallinas comen $20 \cdot 0,1 = 2$ kg al día → $50 : 2 = 25$ días`,
             R`Con fracciones: $\dfrac{20}{15} \cdot \dfrac{45}{50} = \dfrac{30}{x} \;\Rightarrow\; \dfrac{900}{750} = \dfrac{30}{x} \;\Rightarrow\; x = 25$ ✓`],
      res:"<b>25 días</b>" },
    { nivel:"Reto", min:8,
      enun:"Para pintar las 4 aulas de 2.º, 6 pintores tardan 5 días trabajando 8 horas al día. ¿Cuántos pintores hacen falta para pintar 6 aulas en 3 días trabajando 10 horas al día?",
      pasos:["Ahora la <i>x</i> son los pintores. Cuento horas de trabajo de 1 pintor:",
             R`4 aulas necesitan $6 \cdot 5 \cdot 8 = 240$ horas → 1 aula, $240 : 4 = 60$ horas`,
             R`6 aulas necesitan $6 \cdot 60 = 360$ horas. Cada pintor puede trabajar $3 \cdot 10 = 30$ horas`,
             R`Pintores: $360 : 30 = 12$`],
      res:"<b>12 pintores</b>" }
  ],

  casa: [
    { nivel:"Básico", enun:"Tres máquinas fabrican 600 tornillos en 2 horas. ¿Cuántos tornillos fabricarán 5 máquinas en 4 horas?",
      pasos:["D y D. Por la unidad: 1 máquina en 1 hora → 600 : (3 · 2) = 100 tornillos", R`$5 \cdot 4 \cdot 100 = 2000$`], res:"2000 tornillos" },
    { nivel:"Básico", enun:"Doce vacas comen 360 kg de pienso en 10 días. ¿Cuánto pienso comerán 8 vacas en 15 días?",
      pasos:["1 vaca en 1 día: 360 : (12 · 10) = 3 kg", R`$8 \cdot 15 \cdot 3 = 360$ kg`], res:"360 kg" },
    { nivel:"Consolidación", enun:"Cinco grifos llenan un depósito de 15 000 L en 3 horas. ¿Cuánto tardarán 3 grifos en llenar uno de 9000 L?",
      pasos:["1 grifo en 1 hora: 15 000 : (5 · 3) = 1000 L", "3 grifos: 3000 L cada hora → 9000 : 3000 = 3 h"], res:"3 horas" },
    { nivel:"Consolidación", enun:"Cuatro albañiles alicatan 120 m² en 6 días. ¿Cuántos días tardarán 6 albañiles en alicatar 180 m²?",
      pasos:[cuadro(["Albañiles","m²","Días"],["4","120","6"],["6","180","x"],["I","D"]),
             R`$\dfrac{6}{4} \cdot \dfrac{120}{180} = \dfrac{6}{x} \;\Rightarrow\; \dfrac{720}{720} = \dfrac{6}{x} \;\Rightarrow\; x = 6$`], res:"6 días" },
    { nivel:"Consolidación", enun:"Tres amigas reparten publicidad: en 2 horas reparten 1200 folletos. ¿Cuántas horas necesitan 4 amigas para repartir 2400 folletos?",
      pasos:["1 amiga en 1 hora: 1200 : (3 · 2) = 200 folletos", "4 amigas: 800 folletos por hora → 2400 : 800 = 3 h"], res:"3 horas" },
    { nivel:"Problema", enun:"Diez radiadores encendidos 8 horas al día durante 30 días gastan 450 €. ¿Cuánto gastarán 12 radiadores encendidos 6 horas al día durante 25 días?",
      pasos:[R`1 radiador 1 hora: $450 : (10 \cdot 8 \cdot 30) = 450 : 2400 = 0,1875$ €`, R`$12 \cdot 6 \cdot 25 = 1800$ horas de radiador → $1800 \cdot 0,1875 = 337,50$ €`], res:"337,50 €" },
    { nivel:"Para pensar", enun:"Si 3 gatos cazan 3 ratones en 3 minutos, ¿cuántos gatos hacen falta para cazar 100 ratones en 100 minutos?",
      pasos:["Cada gato caza 1 ratón cada 3 minutos.", "En 100 minutos, 3 gatos cazan 100 ratones (cada gato, unos 33)."], res:"3 gatos (¡no 100!)" }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {nota:[{lista:[
        "Reconocer problemas con <b>tres magnitudes</b>.",
        "Decidir si cada magnitud es <b>D</b> o <b>I</b> con la de la <i>x</i>.",
        "Resolverlos con el <b>cuadro y las flechas</b> y por <b>reducción a la unidad</b>."
      ]}], etq:"🎯 En este apartado vas a aprender"}
    ]},

    { titulo:"Tres magnitudes a la vez", cuerpo:[
      {p:"A veces el resultado depende de <b>más de dos</b> magnitudes:"},
      {cols:[
        [{nota:["🚰 <b>Grifos</b>, <b>litros</b> del depósito y <b>horas</b> que tardan."], etq:"Ejemplo"}],
        [{nota:["👷 <b>Obreros</b>, <b>metros</b> de muro y <b>días</b> de trabajo."], etq:"Ejemplo"}],
        [{nota:["🐄 <b>Vacas</b>, <b>kilos</b> de pienso y <b>días</b> que dura."], etq:"Ejemplo"}]
      ]},
      {def:["Es un problema de <b>proporcionalidad compuesta</b>: cada magnitud puede ser <b>directa</b> o <b>inversa</b> con la de la <i>x</i>."], etq:"Proporcionalidad compuesta"}
    ]},

    { titulo:"El método: cuadro y flechas", cuerpo:[
      {prop:[{lista:[
        "<b>1.</b> Hago el cuadro: una columna por magnitud y la de la <i>x</i> a la <b>derecha</b>.",
        "<b>2.</b> Comparo <b>cada columna con la de la <i>x</i></b>, tapando las demás: ¿D o I? Lo escribo en la flecha.",
        "<b>3.</b> Las <b>D</b> se quedan igual; a las <b>I</b> les doy la vuelta.",
        "<b>4.</b> Multiplico esas fracciones y lo igualo a la fracción de la <i>x</i>. Despejo en cruz."
      ]}], etq:"Paso a paso"},
      {truco:["Para decidir D o I, imagina que solo cambian esas <b>dos</b> columnas y las demás se quedan quietas."]}
    ]},

    { titulo:"Ejemplo: el muro", cuerpo:[
      {ej:{enun:"8 obreros construyen 30 m de muro en 6 días. ¿Cuántos días tardarán 6 obreros en construir 45 m?",
        pasos:[cuadro(["Obreros","Metros","Días"],["8","30","6"],["6","45","x"],["I","D"]),
               "Obreros y días: menos obreros → más días: <b>I</b> → le doy la vuelta: $\\dfrac{6}{8}$",
               "Metros y días: más metros → más días: <b>D</b> → igual: $\\dfrac{30}{45}$",
               R`$\dfrac{6}{8} \cdot \dfrac{30}{45} = \dfrac{6}{x} \;\Rightarrow\; \dfrac{180}{360} = \dfrac{6}{x} \;\Rightarrow\; x = \dfrac{360 \cdot 6}{180} = 12$`],
        res:"Tardarán <b>12 días</b>"}}
    ]},

    { titulo:"Otra forma: reducción a la unidad", cuerpo:[
      {ej:{enun:"El mismo problema: 8 obreros, 30 m, 6 días. ¿6 obreros y 45 m?",
        pasos:["1 obrero solo haría los 30 m en $8 \\cdot 6 = 48$ días (I: multiplico).",
               "1 obrero haría 1 m en $48 : 30 = 1,6$ días (D: divido).",
               "1 obrero haría 45 m en $45 \\cdot 1,6 = 72$ días.",
               "6 obreros: $72 : 6 = 12$ días."],
        res:"12 días (sale lo mismo)"}},
      {nota:["Paso a paso, de <b>una en una</b>: así se ve si hay que multiplicar o dividir."]}
    ]},

    { titulo:"Ejemplo: las máquinas (D y D)", cuerpo:[
      {ej:{enun:"5 máquinas fabrican 400 piezas en 4 horas. ¿Cuántas piezas fabrican 3 máquinas en 6 horas?",
        pasos:[cuadro(["Máquinas","Horas","Piezas"],["5","4","400"],["3","6","x"],["D","D"]),
               "Más máquinas → más piezas: <b>D</b>. Más horas → más piezas: <b>D</b>.",
               R`$\dfrac{5}{3} \cdot \dfrac{4}{6} = \dfrac{400}{x} \;\Rightarrow\; \dfrac{20}{18} = \dfrac{400}{x} \;\Rightarrow\; x = \dfrac{18 \cdot 400}{20} = 360$`,
               R`Por la unidad: 1 máquina en 1 hora → $400 : 20 = 20$ piezas → $3 \cdot 6 \cdot 20 = 360$ ✓`],
        res:"<b>360 piezas</b>"}}
    ]},

    { titulo:"Ejemplo: las vacas y el pienso", cuerpo:[
      {ej:{enun:"Con 300 kg de pienso se alimentan 10 vacas durante 15 días. ¿Cuántos días durarán 480 kg para 12 vacas?",
        pasos:[cuadro(["Vacas","Pienso (kg)","Días"],["10","300","15"],["12","480","x"],["I","D"]),
               "Más vacas → menos días: <b>I</b> → $\\dfrac{12}{10}$. Más pienso → más días: <b>D</b> → $\\dfrac{300}{480}$",
               R`$\dfrac{12}{10} \cdot \dfrac{300}{480} = \dfrac{15}{x} \;\Rightarrow\; \dfrac{3600}{4800} = \dfrac{15}{x} \;\Rightarrow\; x = 20$`,
               R`Por la unidad: 1 vaca come $300 : (10 \cdot 15) = 2$ kg al día → 12 vacas, 24 kg al día → $480 : 24 = 20$ días ✓`],
        res:"<b>20 días</b>"}}
    ]},

    { titulo:"🪄 Trucos para ir más rápido", cuerpo:[
      {truco:["<b>Tapa con la mano</b> las columnas que no comparas: así solo piensas en dos magnitudes."], etq:"🪄 Truco 1"},
      {truco:["<b>Calcula lo que hace 1</b> en 1 (1 obrero en 1 día, 1 grifo en 1 hora): todo sale con multiplicaciones y divisiones sencillas."], etq:"🪄 Truco 2"},
      {truco:["<b>Comprueba el sentido</b>: si hay más trabajo y menos gente, tiene que salir más tiempo."], etq:"🪄 Truco 3"}
    ]},

    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:["<b>Comparar dos columnas entre sí</b> en vez de cada una con la de la <i>x</i>."], etq:"⚠️ Error 1"},
      {aviso:["<b>Darle la vuelta a la fracción de la <i>x</i></b>: en la compuesta, la de la <i>x</i> se queda igual."], etq:"⚠️ Error 2"},
      {aviso:["<b>Olvidar una magnitud</b>: lee el enunciado y cuenta cuántas hay (horas al día, días, personas…)."], etq:"⚠️ Error 3"}
    ]},

    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{lista:[
        "Compuesta: <b>tres o más</b> magnitudes.",
        "Cuadro con la <i>x</i> a la derecha y flecha <b>D</b> o <b>I</b> de cada columna a la de la <i>x</i>.",
        "D igual, I al revés; multiplico y lo igualo a la fracción de la <i>x</i>.",
        "O por la unidad: lo que hace 1 en 1 y después multiplico."
      ]}]},
      {estudio:[
        {comp:{q:"2 grifos llenan un depósito de 1000 L en 5 h. ¿Cuántas horas tardan 4 grifos en llenar 2000 L?", sol:5, unidad:"h", explic:"1 grifo: 100 L/h; 4 grifos: 400 L/h → 2000 : 400 = 5 h", pista:"Calcula lo que llena 1 grifo en 1 hora."}},
        {comp:{q:"3 personas gastan 90 € en 2 días. ¿Cuánto gastan 5 personas en 4 días?", sol:300, unidad:"€", explic:"1 persona en 1 día: 15 € → 5 · 4 · 15 = 300 €", pista:"¿Cuánto gasta 1 persona en 1 día?"}}
      ]}
    ]}
  ]
});
})();

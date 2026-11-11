/* 2.º ESO · Tema 3 · Apartado 4: Proporcionalidad compuesta (tres magnitudes)
   Método de los apuntes de la web de la profesora: cuadro con una columna por magnitud y la de la x a la derecha;
   flecha D o I de cada columna hacia la de la x (comparando solo esas dos); a las I se les da la vuelta;
   se multiplican y se igualan a la fracción de la x. */
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
      enun:"Cuatro grifos iguales llenan 2 piscinas en 6 horas. ¿Cuántas horas tardarán si abrimos 2 grifos más y hay que llenar 1 piscina más?",
      pasos:["Datos nuevos: 4 + 2 = 6 grifos y 2 + 1 = 3 piscinas.", cuadro(["Grifos","Piscinas","Horas"],["4","2","6"],["6","3","x"],["I","D"]),
             "Más grifos → menos horas: <b>I</b>, le doy la vuelta. Más piscinas → más horas: <b>D</b>.",
             R`$\dfrac{6}{4} \cdot \dfrac{2}{3} = \dfrac{6}{x} \;\Rightarrow\; \dfrac{12}{12} = \dfrac{6}{x} \;\Rightarrow\; x = 6$`],
      res:"6 grifos tardarán <b>6 horas</b> en llenar 3 piscinas." },
    { nivel:"Aplicación", min:6,
      enun:"De campamento, 10 personas gastan 600 € en comida en 4 días. Si al campamento siguiente van 2 personas menos y están 2 días más, ¿cuánto gastarán?",
      pasos:["Datos nuevos: 10 − 2 = 8 personas y 4 + 2 = 6 días.", cuadro(["Personas","Días","Dinero (€)"],["10","4","600"],["8","6","x"],["D","D"]),
             "Más personas → más gasto: <b>D</b>. Más días → más gasto: <b>D</b>.",
             R`$\dfrac{10}{8} \cdot \dfrac{4}{6} = \dfrac{600}{x} \;\Rightarrow\; \dfrac{40}{48} = \dfrac{600}{x} \;\Rightarrow\; x = \dfrac{48 \cdot 600}{40} = 720$`],
      res:"8 personas gastarán <b>720 €</b> en 6 días." },
    { nivel:"Práctica", min:6,
      enun:"Tres impresoras iguales imprimen 900 hojas en 15 minutos. Si compran 2 impresoras más y hay que imprimir 600 hojas más, ¿cuánto tardarán?",
      pasos:["Datos nuevos: 3 + 2 = 5 impresoras y 900 + 600 = 1500 hojas.", cuadro(["Impresoras","Hojas","Minutos"],["3","900","15"],["5","1500","x"],["I","D"]),
             "Más impresoras → menos minutos: <b>I</b>, le doy la vuelta. Más hojas → más minutos: <b>D</b>.",
             R`$\dfrac{5}{3} \cdot \dfrac{900}{1500} = \dfrac{15}{x} \;\Rightarrow\; \dfrac{4500}{4500} = \dfrac{15}{x} \;\Rightarrow\; x = 15$`],
      res:"5 impresoras tardarán <b>15 minutos</b>." },
    { nivel:"Práctica", min:7,
      enun:"Seis obreros, trabajando 8 horas al día, hacen una obra en 15 días. ¿Cuántos días tardarán 10 obreros trabajando 6 horas al día?",
      pasos:[cuadro(["Obreros","Horas/día","Días"],["6","8","15"],["10","6","x"],["I","I"]),
             "Más obreros → menos días: <b>I</b>. Menos horas al día → más días: <b>I</b>.",
             R`Les doy la vuelta a las dos: $\dfrac{10}{6} \cdot \dfrac{6}{8} = \dfrac{15}{x} \;\Rightarrow\; \dfrac{60}{48} = \dfrac{15}{x} \;\Rightarrow\; x = \dfrac{48 \cdot 15}{60} = 12$`],
      res:"10 obreros tardarán <b>12 días</b>." },
    { nivel:"Problema", min:7,
      enun:"En la granja escuela, 15 gallinas comen 45 kg de pienso en 30 días. Llegan 5 gallinas más y compran 5 kg más de pienso. ¿Cuántos días durará el pienso?",
      pasos:["Datos nuevos: 15 + 5 = 20 gallinas y 45 + 5 = 50 kg.", cuadro(["Gallinas","Pienso (kg)","Días"],["15","45","30"],["20","50","x"],["I","D"]),
             "Más gallinas → el pienso dura menos: <b>I</b>, le doy la vuelta. Más pienso → dura más: <b>D</b>.",
             R`$\dfrac{20}{15} \cdot \dfrac{45}{50} = \dfrac{30}{x} \;\Rightarrow\; \dfrac{900}{750} = \dfrac{30}{x} \;\Rightarrow\; x = \dfrac{750 \cdot 30}{900} = 25$`],
      res:"Los 50 kg de pienso durarán <b>25 días</b>." },
    { nivel:"Reto", min:7,
      enun:"Para pintar 4 aulas, 6 pintores tardan 5 días. ¿Cuántos pintores hacen falta para pintar 6 aulas en 3 días?",
      pasos:["¡Ojo! Ahora la <i>x</i> son los <b>pintores</b>: esa columna va a la derecha.",
             cuadro(["Aulas","Días","Pintores"],["4","5","6"],["6","3","x"],["D","I"]),
             R`Más aulas → más pintores: <b>D</b> → $\dfrac{4}{6}$. Menos días → más pintores: <b>I</b> → le doy la vuelta: $\dfrac{3}{5}$`,
             R`$\dfrac{4}{6} \cdot \dfrac{3}{5} = \dfrac{6}{x} \;\Rightarrow\; \dfrac{12}{30} = \dfrac{6}{x} \;\Rightarrow\; x = \dfrac{30 \cdot 6}{12} = 15$`],
      res:"Hacen falta <b>15 pintores</b>." }
  ],

  casa: [
    { nivel:"Básico", enun:"Tres máquinas fabrican 600 tornillos en 2 horas. Si ponen 2 máquinas más y trabajan el doble de horas, ¿cuántos tornillos fabricarán?",
      pasos:["Datos nuevos: 3 + 2 = 5 máquinas y 2 · 2 = 4 horas.", cuadro(["Máquinas","Horas","Tornillos"],["3","2","600"],["5","4","x"],["D","D"]), R`D y D: $\dfrac{3}{5} \cdot \dfrac{2}{4} = \dfrac{600}{x} \;\Rightarrow\; \dfrac{6}{20} = \dfrac{600}{x} \;\Rightarrow\; x = \dfrac{20 \cdot 600}{6} = 2000$`],
      res:"5 máquinas fabricarán <b>2000 tornillos</b>." },
    { nivel:"Básico", enun:"Doce vacas comen 360 kg de pienso en 10 días. ¿Cuánto pienso comerán 8 vacas en 15 días?",
      pasos:[cuadro(["Vacas","Días","Pienso (kg)"],["12","10","360"],["8","15","x"],["D","D"]), R`D y D: $\dfrac{12}{8} \cdot \dfrac{10}{15} = \dfrac{360}{x} \;\Rightarrow\; \dfrac{120}{120} = \dfrac{360}{x} \;\Rightarrow\; x = 360$`],
      res:"8 vacas comerán <b>360 kg</b> de pienso en 15 días." },
    { nivel:"Consolidación", enun:"Cinco grifos llenan un depósito de 15 000 L en 3 horas. ¿Cuánto tardarán 3 grifos en llenar uno de 9000 L?",
      pasos:[cuadro(["Grifos","Litros","Horas"],["5","15 000","3"],["3","9000","x"],["I","D"]), R`Grifos <b>I</b> → $\dfrac{3}{5}$. Litros <b>D</b> → $\dfrac{15\,000}{9000}$`, R`$\dfrac{3}{5} \cdot \dfrac{15\,000}{9000} = \dfrac{3}{x} \;\Rightarrow\; \dfrac{45\,000}{45\,000} = \dfrac{3}{x} \;\Rightarrow\; x = 3$`],
      res:"3 grifos tardarán <b>3 horas</b>." },
    { nivel:"Consolidación", enun:"Cuatro albañiles alicatan 120 m² en 6 días. ¿Cuántos días tardarán 6 albañiles en alicatar 180 m²?",
      pasos:[cuadro(["Albañiles","m²","Días"],["4","120","6"],["6","180","x"],["I","D"]),
             R`$\dfrac{6}{4} \cdot \dfrac{120}{180} = \dfrac{6}{x} \;\Rightarrow\; \dfrac{720}{720} = \dfrac{6}{x} \;\Rightarrow\; x = 6$`], res:"6 albañiles tardarán <b>6 días</b>." },
    { nivel:"Consolidación", enun:"Tres amigas reparten publicidad: en 2 horas reparten 1200 folletos. ¿Cuántas horas necesitan 4 amigas para repartir 2400 folletos?",
      pasos:[cuadro(["Amigas","Folletos","Horas"],["3","1200","2"],["4","2400","x"],["I","D"]), R`$\dfrac{4}{3} \cdot \dfrac{1200}{2400} = \dfrac{2}{x} \;\Rightarrow\; \dfrac{4800}{7200} = \dfrac{2}{x} \;\Rightarrow\; x = \dfrac{7200 \cdot 2}{4800} = 3$`],
      res:"4 amigas necesitan <b>3 horas</b>." },
    { nivel:"Problema", enun:"Diez radiadores encendidos durante 30 días gastan 450 € de luz. ¿Cuánto gastarán 12 radiadores encendidos durante 20 días?",
      pasos:[cuadro(["Radiadores","Días","Dinero (€)"],["10","30","450"],["12","20","x"],["D","D"]), R`$\dfrac{10}{12} \cdot \dfrac{30}{20} = \dfrac{450}{x} \;\Rightarrow\; \dfrac{300}{240} = \dfrac{450}{x} \;\Rightarrow\; x = \dfrac{240 \cdot 450}{300} = 360$`],
      res:"12 radiadores gastarán <b>360 €</b> en 20 días." },
    { nivel:"Para pensar", enun:"Si 3 gatos cazan 3 ratones en 3 minutos, ¿cuántos gatos hacen falta para cazar 100 ratones en 100 minutos?",
      pasos:["Cada gato caza 1 ratón cada 3 minutos.", "En 100 minutos, 3 gatos cazan 100 ratones (cada gato, unos 33)."], res:"Hacen falta <b>3 gatos</b> (¡no 100!)." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">¿Y si en el problema hay tres magnitudes?</p>`}
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

    { titulo:"Ejemplo: el muro", cuerpo:[
      {ej:{enun:"8 obreros construyen 30 m de muro en 6 días. ¿Cuántos días tardarán 6 obreros en construir 45 m?",
        pasos:[cuadro(["Obreros","Metros","Días"],["8","30","6"],["6","45","x"],["I","D"]),
               "Obreros y días: menos obreros → más días: <b>I</b> → le doy la vuelta: $\\dfrac{6}{8}$",
               "Metros y días: más metros → más días: <b>D</b> → igual: $\\dfrac{30}{45}$",
               R`$\dfrac{6}{8} \cdot \dfrac{30}{45} = \dfrac{6}{x} \;\Rightarrow\; \dfrac{180}{360} = \dfrac{6}{x} \;\Rightarrow\; x = \dfrac{360 \cdot 6}{180} = 12$`],
        res:"6 obreros tardarán <b>12 días</b> en construir 45 m."}}
    ]},

    { titulo:"El método (lo que hemos hecho)", cuerpo:[
      {prop:[{lista:[
        "<b>1.</b> Hago el cuadro: una columna por magnitud y la de la <i>x</i> a la <b>derecha</b>.",
        "<b>2.</b> Comparo <b>cada columna con la de la <i>x</i></b>, tapando las demás: ¿D o I? Lo escribo en la flecha.",
        "<b>3.</b> Las <b>D</b> se quedan igual; a las <b>I</b> les doy la vuelta.",
        "<b>4.</b> Multiplico esas fracciones y lo igualo a la fracción de la <i>x</i>. Despejo en cruz."
      ]}], etq:"Paso a paso"},
      {truco:["Para decidir D o I, imagina que solo cambian esas <b>dos</b> columnas y las demás se quedan quietas."]}
    ]},

    { titulo:"Ejemplo: las máquinas (D y D)", cuerpo:[
      {ej:{enun:"5 máquinas fabrican 400 piezas en 4 horas. ¿Cuántas piezas fabrican 3 máquinas en 6 horas?",
        pasos:[cuadro(["Máquinas","Horas","Piezas"],["5","4","400"],["3","6","x"],["D","D"]),
               "Más máquinas → más piezas: <b>D</b>. Más horas → más piezas: <b>D</b>.",
               R`$\dfrac{5}{3} \cdot \dfrac{4}{6} = \dfrac{400}{x} \;\Rightarrow\; \dfrac{20}{18} = \dfrac{400}{x} \;\Rightarrow\; x = \dfrac{18 \cdot 400}{20} = 360$`],
        res:"3 máquinas fabrican <b>360 piezas</b> en 6 horas."}}
    ]},

    { titulo:"Ejemplo: las vacas y el pienso", cuerpo:[
      {ej:{enun:"Con 300 kg de pienso se alimentan 10 vacas durante 15 días. ¿Cuántos días durarán 480 kg para 12 vacas?",
        pasos:[cuadro(["Vacas","Pienso (kg)","Días"],["10","300","15"],["12","480","x"],["I","D"]),
               "Más vacas → menos días: <b>I</b> → $\\dfrac{12}{10}$. Más pienso → más días: <b>D</b> → $\\dfrac{300}{480}$",
               R`$\dfrac{12}{10} \cdot \dfrac{300}{480} = \dfrac{15}{x} \;\Rightarrow\; \dfrac{3600}{4800} = \dfrac{15}{x} \;\Rightarrow\; x = 20$`],
        res:"Los 480 kg de pienso durarán <b>20 días</b>."}}
    ]},

    { titulo:"🪄 Trucos para ir más rápido", cuerpo:[
      {truco:["<b>Tapa con la mano</b> las columnas que no comparas: así solo piensas en dos magnitudes."], etq:"🪄 Truco 1"},
      {truco:["<b>Simplifica antes de multiplicar</b>: si un número está arriba en una fracción y abajo en otra, se va."], etq:"🪄 Truco 2"},
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
        "D igual, I al revés; multiplico y lo igualo a la fracción de la <i>x</i>."
      ]}]},
      {estudio:[
        {comp:{q:"2 grifos llenan un depósito de 1000 L en 5 h. ¿Cuántas horas tardan 4 grifos en llenar 2000 L?", sol:5, unidad:"h", explic:"Grifos I → 4/2; litros D → 1000/2000: 4000/4000 = 5/x → x = 5 h", pista:"Haz el cuadro: más grifos, menos horas (I); más litros, más horas (D)."}},
        {comp:{q:"3 personas gastan 90 € en 2 días. ¿Cuánto gastan 5 personas en 4 días?", sol:300, unidad:"€", explic:"D y D: 3/5 · 2/4 = 6/20 = 90/x → x = 300 €", pista:"Más personas, más gasto (D); más días, más gasto (D)."}}
      ]}
    ]}
  ]
});
})();

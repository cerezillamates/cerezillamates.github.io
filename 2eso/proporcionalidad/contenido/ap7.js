/* 2.º ESO · Tema 3 · Apartado 7: Aumentos y disminuciones porcentuales
   Enfoque aprobado: primero PASO A PASO (Pf = Pi + aumento; Pf = Pi − descuento, como en sus exámenes)
   y después la fórmula de 3.º (decisión 11-nov-2026): C_F = C_I · I_V (C_I = C_F : I_V). IVA, rebajas, precio de antes,
   cuánto ha subido o bajado, encadenados y ofertas. IVA general actualizado al 21 %. */
(function(){
const R = String.raw;
const cuadro = (m1, m2, a, b, t) => `<table class="t cuadro"><tr><th>${m1}</th><th class="fl">(${t||"I"}) ⟶</th><th>${m2}</th></tr><tr><td>${a[0]}</td><td></td><td>${a[1]}</td></tr><tr><td>${b[0]}</td><td></td><td class="x">${b[1]}</td></tr></table>`;
const flecha = (pasos) => `<div class="cadena">${pasos.map((p,k)=>k%2 ? `<div class="op">${p}<i>━━━►</i></div>` : `<div class="caja">${p}</div>`).join("")}</div>`;

TEMA.registrar({
  num: 7,
  titulo: "Aumentos y disminuciones porcentuales",
  videos: [
    {t:"Aumentos y disminuciones porcentuales", url:"https://www.youtube.com/watch?v=sh0ytvn8Y4M"},
    {t:"Porcentajes encadenados", url:"https://www.youtube.com/watch?v=ynSBIu_6zSE"}
  ],

  clase: [
    { nivel:"Aplicación", min:5,
      enun:"Un reproductor de música costaba 110,50 €. Le aplican una rebaja del 20 %. ¿Cuál es su precio? ¿Y si después le aplican otra rebaja del 10 %?",
      pasos:[R`Rebaja del 20 %: $110,50 \cdot 0,80 = 88,40$ €`, R`Otra rebaja del 10 %: $88,40 \cdot 0,90 = 79,56$ €`, "La segunda rebaja se hace sobre 88,40 €, no sobre 110,50 €."],
      res:"Con la rebaja cuesta <b>88,40 €</b> y con la segunda rebaja, <b>79,56 €</b>." },
    { nivel:"Aplicación", min:4,
      enun:"Un portátil cuesta 544,50 € con el 21 % de IVA incluido. ¿Cuál es su precio sin IVA?",
      pasos:[R`Con IVA sube un 21 %: $I_V = 1 + 0,21 = 1,21$`, R`$C_I = C_F : I_V = 544,50 : 1,21 = 450$ €`],
      res:"Sin IVA, el portátil cuesta <b>450 €</b>." },
    { nivel:"Práctica", min:5,
      enun:"Aprovechando el Black Friday me he comprado una sudadera por 28 € con una rebaja del 12 %. ¿Cuánto costaba antes de la rebaja?",
      pasos:[R`Rebaja del 12 %: $I_V = 1 - 0,12 = 0,88$`, R`$C_I = C_F : I_V = 28 : 0,88 \approx 31,82$ €`, R`Comprueba: $31,82 \cdot 0,88 \approx 28$ ✓`],
      res:"La sudadera costaba unos <b>31,82 €</b>." },
    { nivel:"Práctica", min:5,
      enun:"Hace dos semanas una mochila costaba 120 € y hoy he pagado 138 €. ¿Ha subido o ha bajado? ¿Qué porcentaje?",
      pasos:[R`$C_I = 120$, $C_F = 138$`, R`$I_V = C_F : C_I = 138 : 120 = 1,15$`, "1,15 es mayor que 1: ha subido un 15 %"],
      res:"La mochila ha <b>subido un 15 %</b>." },
    { nivel:"Problema", min:6,
      enun:"En un curso de maquillaje hay 80 personas. Más tarde, el número aumenta un 20 %. Algunas se aburren y se van, y vuelven a quedar 80. ¿Qué porcentaje de personas se ha ido?",
      pasos:[R`Aumenta un 20 %: $C_F = 80 \cdot 1,20 = 96$ personas`, R`Después pasan de 96 a 80: $I_V = 80 : 96 \approx 0,8333$`, R`Se ha ido: $1 - 0,8333 = 0,1667$ → $16,67\,\%$`, "¡No es el 20 %! El porcentaje se calcula sobre 96, no sobre 80."],
      res:"Se ha ido el <b>16,67 %</b> de las personas." },
    { nivel:"Reto", min:7,
      enun:"Por el Black Friday, una videoconsola de 250 € tiene un descuento del 20 %. Después le aplican otro porcentaje, sin saber si es de subida o de bajada, y el precio final es 255 €. ¿Fue una subida o una bajada? ¿De cuánto?",
      pasos:[R`Con el descuento: $250 - 20\,\%$ de $250 = 250 - 50 = 200$ €`, "De 200 € pasa a 255 €: es una <b>subida</b> de 55 €",
             R`$I_V = C_F : C_I = 255 : 200 = 1,275$ → mayor que 1: sube un $27,5\,\%$`],
      res:"Fue una <b>subida del 27,5 %</b>." }
  ],

  casa: [
    { nivel:"Básico", enun:"Un ordenador cuesta 1200 € sin IVA. ¿Cuánto cuesta con el 21 % de IVA?",
      pasos:[R`Sube un 21 %: $I_V = 1,21$`, R`$C_F = 1200 \cdot 1,21 = 1452$ €`], res:"Con IVA, el ordenador cuesta <b>1452 €</b>." },
    { nivel:"Básico", enun:"Unas zapatillas costaban 80 € y las he comprado por 68 €. ¿Qué descuento me han hecho?",
      pasos:[R`$I_V = C_F : C_I = 68 : 80 = 0,85$`, R`Descuento: $1 - 0,85 = 0,15$ → $15\,\%$`], res:"Me han hecho un descuento del <b>15 %</b>." },
    { nivel:"Básico", enun:"Unos pantalones costaban 30 € y les aplican dos rebajas seguidas del 20 % y del 30 %. ¿Cuál es el precio final?",
      pasos:[R`$30 - 6 = 24$ € (20 % de 30 = 6)`, R`$24 - 7,20 = 16,80$ € (30 % de 24 = 7,20)`, R`Con índices: $30 \cdot 0,80 \cdot 0,70 = 16,80$ €`], res:"El precio final es <b>16,80 €</b>." },
    { nivel:"Consolidación", enun:"Un abrigo rebajado un 30 % me ha costado 63 €. ¿Cuánto costaba antes?",
      pasos:[R`Rebaja del 30 %: $I_V = 1 - 0,30 = 0,70$`, R`$C_I = 63 : 0,70 = 90$ €`], res:"El abrigo costaba <b>90 €</b>." },
    { nivel:"Consolidación", enun:"Una tablet cuesta 280 €. La rebajan un 15 % y al pagar le añaden el 21 % de IVA. ¿Cuánto pago?",
      pasos:[R`$280 \cdot 0,85 = 238$ €`, R`$238 \cdot 1,21 = 287,98$ €`], res:"Pago <b>287,98 €</b> por la tablet." },
    { nivel:"Problema", enun:"Hace dos años había 150 alumnos en el conservatorio. El año pasado se matricularon un 10 % más y este año 110. ¿Subió o bajó este año? ¿Qué porcentaje?",
      pasos:[R`El año pasado: $150 \cdot 1,10 = 165$ alumnos`, R`Este año: $110 : 165 = 0,666\ldots$ → menos de 1: ha bajado`, R`Bajada: $1 - 0,6667 = 0,3333$ → $33,33\,\%$`], res:"Este año <b>bajó</b> un <b>33,33 %</b>." },
    { nivel:"Problema", enun:"Antonio hereda una fortuna. Paga un 20 % de impuestos y, después, un 10 % de lo que le queda en otro impuesto. Si en total ha pagado 10 500 €, ¿cuánto era la herencia?",
      pasos:[R`Le queda la herencia tras los dos impuestos: $I_V = 0,80 \cdot 0,90 = 0,72$`, R`Lo que ha pagado en impuestos: $1 - 0,72 = 0,28$ de la herencia, $I_V = 0,28$`, R`$C_I = C_F : I_V = 10\,500 : 0,28 = 37\,500$ €`], res:"La herencia era de <b>37 500 €</b>." },
    { nivel:"Para pensar", enun:"Un artículo sube un 20 % y después baja un 20 %. ¿Vuelve a su precio? Pruébalo con 100 €.",
      pasos:["100 → +20 % → 120 → −20 % de 120 = 24 → 96 €", R`Índices: $1,20 \cdot 0,80 = 0,96$ → baja un 4 %`], res:"<b>No</b> vuelve a su precio: queda un <b>4 %</b> más barato." },
    { nivel:"Problema", enun:"El año pasado sobró comida de Navidad para 6 días y éramos 30 personas. Este año somos un 20 % más de personas. ¿Para cuántos días sobrará comida si se compra la misma cantidad?",
      pasos:[R`Personas este año: $30 \cdot 1,20 = 36$`, cuadro("Personas","Días",["30","6"],["36","x"]),
             "Más personas → la comida dura menos: <b>I</b>.", R`Le damos la vuelta: $\dfrac{30}{36} = \dfrac{x}{6}$`, R`En cruz: $36 \cdot x = 30 \cdot 6 \;\Rightarrow\; x = \dfrac{180}{36} = 5$`],
      res:"Este año sobrará comida para <b>5 días</b>." },
    { nivel:"Problema", enun:"Con un dinero ahorrado puedo comprar 20 bolígrafos a 60 céntimos cada uno. Si el precio sube un 25 %, ¿cuántos bolígrafos podré comprar con el mismo dinero?",
      pasos:[R`Precio nuevo: $0,60 \cdot 1,25 = 0,75$ €`, cuadro("Precio (€)","Bolígrafos",["0,60","20"],["0,75","x"]),
             "Más caros → compro menos: <b>I</b>.", R`Le damos la vuelta: $\dfrac{0,60}{0,75} = \dfrac{x}{20}$`, R`En cruz: $0,75 \cdot x = 0,60 \cdot 20 \;\Rightarrow\; x = \dfrac{12}{0,75} = 16$`],
      res:"Podré comprar <b>16 bolígrafos</b>." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">Rebajas, IVA y subidas de precio.</p>`}
    ]},

    { titulo:"Subir y bajar un porcentaje", cuerpo:[
      {cols:[
        [{ej:{etq:"📉 Rebaja", enun:"Unas zapatillas de 60 € tienen un 25 % de descuento. ¿Cuánto pagas?", pasos:[R`Baja un 25 %: $I_V = 1 - 0,25 = 0,75$`, R`$C_F = C_I \cdot I_V = 60 \cdot 0,75 = 45$ €`], res:"Pagas <b>45 €</b> por las zapatillas."}}],
        [{ej:{etq:"📈 Subida", enun:"La entrada al parque acuático cuesta 20 € y sube un 10 %. ¿Cuánto cuesta ahora?", pasos:[R`Sube un 10 %: $I_V = 1 + 0,10 = 1,10$`, R`$C_F = 20 \cdot 1,10 = 22$ €`], res:"La entrada cuesta ahora <b>22 €</b>."}}]
      ]}
    ]},

    { titulo:"El índice de variación (lo que hemos hecho)", cuerpo:[
      {def:["Si sube, $I_V$ = 1 + el %. &nbsp;Si baja, $I_V$ = 1 − el %.", {formula:R`C_F = C_I \cdot I_V`}], etq:"Índice de variación"},
      {html:R`<table class="t tprop"><tr><th>Cambio</th><td>+21 % (IVA)</td><td>+10 %</td><td>−15 %</td><td>−25 %</td><td>−50 %</td></tr><tr><th>$I_V$</th><td>1,21</td><td>1,10</td><td>0,85</td><td>0,75</td><td>0,50</td></tr></table>`},
      {truco:["Es la misma fórmula del apartado anterior y el mismo triángulo: tapa lo que buscas."], etq:"🪄 Truco"}
    ]},

    { titulo:"El IVA", cuerpo:[
      {def:["El <b>IVA</b> es un impuesto que se suma al precio. El general es del <b>21 %</b> (en alimentos básicos y medicinas es menor)."], etq:"IVA"},
      {ej:{enun:"Un portátil cuesta 450 € sin IVA. ¿Cuánto pago con el 21 %?",
        pasos:[R`Sube un 21 %: $I_V = 1,21$`, R`$C_F = 450 \cdot 1,21 = 544,50$ €`], res:"Con IVA pago <b>544,50 €</b>."}},
      {html:flecha(["450 €","× 1,21","544,50 €"])}
    ]},

    { titulo:"¿Cuánto costaba antes?", cuerpo:[
      {prop:["Si sé el precio final, <b>divido</b> entre el índice: <b>$C_I = C_F : I_V$</b>"], etq:"Hacia atrás"},
      {ej:{etq:"👚 Problema de examen", enun:"Por el Black Friday me he comprado una blusa por 24 €. Si estaba rebajada un 28 %, ¿cuánto costaba antes?",
        pasos:[R`Rebaja del 28 %: $I_V = 1 - 0,28 = 0,72$`, R`$C_I = C_F : I_V = 24 : 0,72 \approx 33,33$ €`],
        res:"La blusa costaba <b>33,33 €</b>."}},
      {aviso:["¡No vale sumar el 28 % de 24! (24 + 6,72 = 30,72 €, mal): el 28 % era del precio de antes."]}
    ]},

    { titulo:"¿Cuánto ha subido o bajado?", cuerpo:[
      {prop:["Divido <b>ahora : antes</b>. Si sale más de 1, ha subido (1,08 → +8 %); si sale menos de 1, ha bajado (0,85 → −15 %)."], etq:"Variación"},
      {cols:[
        [{ej:{enun:"Un móvil pasa de 400 € a 340 €.", pasos:[R`$340 : 400 = 0,85$`, "Menos de 1: baja un 15 %"], res:"El móvil ha bajado un <b>15 %</b>."}}],
        [{ej:{enun:"La luz pasa de 50 € a 54 €.", pasos:[R`$54 : 50 = 1,08$`, "Más de 1: sube un 8 %"], res:"La luz ha subido un <b>8 %</b>."}}]
      ]}
    ]},

    { titulo:"Porcentajes encadenados", cuerpo:[
      {prop:["Cada cambio se hace sobre el precio que queda: los <b>índices se multiplican</b> y los porcentajes <b>no se suman</b>."], etq:"Encadenados"},
      {ej:{etq:"👖 Problema de examen", enun:"Unos pantalones de 30 € tienen dos rebajas seguidas del 20 % y del 30 %. ¿Cuál es el precio final?",
        pasos:[R`Índices: baja un 20 % → $0,80$; baja un 30 % → $0,70$`, R`$C_F = 30 \cdot 0,80 \cdot 0,70 = 30 \cdot 0,56 = 16,80$ €`, "Índice total 0,56: es una rebaja del 44 %, ¡no del 50 %!"],
        res:"El precio final es <b>16,80 €</b>."}},
      {html:flecha(["30 €","× 0,80","24 €","× 0,70","16,80 €"])}
    ]},

    { titulo:"Subida y bajada: ¿cuál fue?", cuerpo:[
      {ej:{etq:"🛍️ Problema de examen", enun:"Un artículo costaba 180 €. Primero subió un 20 % y después le aplicaron otro porcentaje. El precio final es 162 €. ¿Fue subida o bajada? ¿De cuánto?",
        pasos:[R`Subida: $180 \cdot 1,20 = 216$ €`, R`De 216 € a 162 €: $I_V = 162 : 216 = 0,75$`, R`0,75 es menor que 1: <b>bajada</b> de $1 - 0,75 = 0,25$ → $25\,\%$`],
        res:"Fue una <b>bajada del 25 %</b>."}}
    ]},

    { titulo:"Compras inteligentes: las ofertas", cuerpo:[
      {cols:[
        [{ej:{etq:"3 × 2", enun:"Llevas 3 y pagas 2.", pasos:["Te regalan 1 de cada 3", R`$\dfrac13 \approx 33\,\%$ de descuento`], res:"Llevar 3 y pagar 2 es un descuento de casi el <b>33 %</b>."}}],
        [{ej:{etq:"2.ª unidad a mitad de precio", enun:"Compras 2: pagas 1 + 0,5.", pasos:["Pagas 1,5 de 2", R`$\dfrac{0,5}{2} = 25\,\%$ de descuento`], res:"Es un descuento del <b>25 %</b>."}}],
        [{ej:{etq:"−70 % en la 2.ª unidad", enun:"Compras 2: pagas 1 + 0,3.", pasos:["Pagas 1,3 de 2", R`$\dfrac{0,7}{2} = 35\,\%$ de descuento`], res:"Es un descuento del <b>35 %</b>."}}]
      ]},
      {nota:["Solo es buena oferta si de verdad necesitas las dos unidades 😉"]}
    ]},

    { titulo:"Problema: el coche reduce un 40 %", cuerpo:[
      {ej:{etq:"🚗 Problema de examen", enun:"Un coche a 80 km/h tarda 5 horas en un trayecto. Si disminuye su velocidad un 40 %, ¿cuánto tardará en el mismo trayecto?",
        pasos:[R`Nueva velocidad: baja un 40 %, $I_V = 0,60$ → $80 \cdot 0,60 = 48$ km/h`,
               cuadro("Velocidad (km/h)","Horas",["80","5"],["48","x"]),
               R`Menos velocidad → más tiempo: <b>I</b>. Le damos la vuelta: $\dfrac{80}{48} = \dfrac{x}{5}$`,
               R`En cruz: $48 \cdot x = 80 \cdot 5 \;\Rightarrow\; x = \dfrac{400}{48} \approx 8,33$ h`,
               R`$0,33$ h $\approx 0,33 \cdot 60 = 20$ min`],
        res:"El coche tardará <b>8 h 20 min</b>."}},
      {aviso:["8,33 h <b>no</b> son 8 h 33 min: 0,33 h son unos 20 min."]}
    ]},

    { titulo:"🪄 Trucos y ⚠️ errores", cuerpo:[
      {truco:["<b>Índice</b>: +r % → 1,r · −r % → 1 − 0,r. Un solo producto en vez de dos cuentas."], etq:"🪄 Truco"},
      {truco:["<b>Precio de antes</b>: siempre se <b>divide</b> entre el índice: $C_I = C_F : I_V$."], etq:"🪄 Truco"},
      {aviso:["<b>Sumar los porcentajes</b> encadenados: −20 % y −30 % no es −50 %."], etq:"⚠️ Error"},
      {aviso:["<b>Subir un 20 % y bajar un 20 %</b> no deja el precio igual: 1,20 · 0,80 = 0,96."], etq:"⚠️ Error"}
    ]},

    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{lista:[
        "La fórmula: $C_F = C_I \\cdot I_V$ (sube → $I_V$ = 1 + el %; baja → $I_V$ = 1 − el %).",
        "Precio de antes: $C_I = C_F : I_V$.",
        "Variación: ahora : antes. Encadenados: se multiplican los índices."
      ]}]},
      {estudio:[
        {comp:{q:"Una camiseta de 18 € tiene un 15 % de descuento. ¿Cuánto pago?", sol:15.3, unidad:"€", explic:"18 · 0,85 = 15,30 €", pista:"El índice de una bajada del 15 % es 0,85."}},
        {comp:{q:"Con el 21 % de IVA pago 60,50 €. ¿Precio sin IVA?", sol:50, unidad:"€", explic:"60,50 : 1,21 = 50 €", pista:"Divide entre 1,21."}},
        {comp:{q:"Sube un 10 % y luego otro 10 %. ¿Cuánto sube en total (%)?", sol:21, unidad:"%", explic:"1,10 · 1,10 = 1,21 → +21 %", pista:"Multiplica los índices."}}
      ]}
    ]}
  ]
});
})();

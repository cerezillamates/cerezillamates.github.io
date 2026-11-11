/* 2.º ESO · Tema 3 · Apartado 6: Porcentajes
   Decisión de la profesora (11-nov-2026): igual que en 3.º, TODO con la fórmula C_F = C_I · I_V
   (el % en decimal). Despejando: C_I = C_F : I_V, I_V = C_F : C_I. El triángulo solo como TRUCO.
   Problemas de sus exámenes: hotel (italianos, franceses…), rotuladores, globos, portugueses y alemanes. */
(function(){
const R = String.raw;
const barra = (trozos, pie) => `<figure class="dib"><div class="barra-pct">${trozos.map(t=>`<span class="${t[2]||""}" style="flex:${t[0]}">${t[1]}</span>`).join("")}</div>${pie?`<figcaption>${pie}</figcaption>`:""}</figure>`;
// triángulo (solo como truco): C_F arriba; C_I × I_V abajo
const tri = (tapa, pie) => {
  const v = (k,t) => tapa===k ? `<tspan fill="#f59e0b">?</tspan>` : t;
  return `<figure class="dib tri"><svg viewBox="0 0 260 170" role="img" aria-label="Triángulo: C F arriba; C I por I V abajo">
    <polygon points="130,8 252,160 8,160" fill="#eef0ff" stroke="#4338ca" stroke-width="4" stroke-linejoin="round"/>
    <line x1="70" y1="86" x2="190" y2="86" stroke="#4338ca" stroke-width="3"/>
    <text x="130" y="72" text-anchor="middle" font-size="30" font-weight="800" fill="#1e1b3a">${v("F","C<tspan font-size=\"16\" dy=\"6\">F</tspan>")}</text>
    <text x="130" y="136" text-anchor="middle" font-size="28" font-weight="800" fill="#1e1b3a">${v("I","C<tspan font-size=\"15\" dy=\"5\">I</tspan>")}<tspan dy="-5"> × </tspan>${v("V","I<tspan font-size=\"15\" dy=\"5\">V</tspan>")}</text>
  </svg>${pie?`<figcaption>${pie}</figcaption>`:""}</figure>`;
};

TEMA.registrar({
  num: 6,
  titulo: "Porcentajes",
  videos: [
    {t:"Calcular el porcentaje de una cantidad", url:"https://www.youtube.com/watch?v=9T7w7iaMrjQ"}
  ],

  clase: [
    { nivel:"Aplicación", min:4,
      enun:"Calcula de cabeza: <b>a)</b> 50 % de 46 &nbsp; <b>b)</b> 25 % de 80 &nbsp; <b>c)</b> 10 % de 350 &nbsp; <b>d)</b> 20 % de 45 &nbsp; <b>e)</b> 15 % de 200",
      pasos:["<b>a)</b> 50 % es la mitad: 46 : 2 = 23", "<b>b)</b> 25 % es la cuarta parte: 80 : 4 = 20", "<b>c)</b> 10 % es dividir entre 10: 35",
             "<b>d)</b> 20 % = 10 % · 2: 4,5 · 2 = 9", "<b>e)</b> 15 % = 10 % + 5 %: 20 + 10 = 30"],
      res:"a) 23 b) 20 c) 35 d) 9 e) 30" },
    { nivel:"Aplicación", min:4,
      enun:"En una clase de 25 alumnos, el 36 % ha aprobado todas las asignaturas en la 1.ª evaluación. ¿Cuántos alumnos son?",
      pasos:[R`$C_I = 25$, $I_V = 0,36$`, R`$C_F = C_I \cdot I_V = 25 \cdot 0,36 = 9$`],
      res:"Han aprobado todo <b>9 alumnos</b>." },
    { nivel:"Práctica", min:6,
      enun:"En un hotel hay 325 personas: 39 italianas, 117 francesas, 78 alemanas y el resto rusas. ¿Qué porcentaje representa cada grupo?",
      pasos:["Busco el porcentaje: $I_V = C_F : C_I$, con $C_I = 325$.",
             R`Italianas: $39 : 325 = 0,12$ → $12\,\%$. Francesas: $117 : 325 = 0,36$ → $36\,\%$`,
             R`Alemanas: $78 : 325 = 0,24$ → $24\,\%$`,
             R`Rusas: $325 - 234 = 91$ → $91 : 325 = 0,28$ → $28\,\%$ (y $12 + 36 + 24 + 28 = 100$ ✓)`],
      res:"Hay un <b>12 %</b> de italianas, un <b>36 %</b> de francesas, un <b>24 %</b> de alemanas y un <b>28 %</b> de rusas." },
    { nivel:"Práctica", min:5,
      enun:"Una caja tiene 40 globos: 14 rojos, 10 azules, 6 verdes y el resto amarillos. Halla el porcentaje de globos de cada color.",
      pasos:["Amarillos: 40 − 14 − 10 − 6 = 10", R`Rojos: $14 : 40 = 0,35$ → $35\,\%$. Azules: $10 : 40 = 0,25$ → $25\,\%$`,
             R`Verdes: $6 : 40 = 0,15$ → $15\,\%$. Amarillos: $25\,\%$`, "Comprueba: 35 + 25 + 15 + 25 = 100 % ✓"],
      res:"Hay un <b>35 %</b> de globos rojos, un <b>25 %</b> azules, un <b>15 %</b> verdes y un <b>25 %</b> amarillos." },
    { nivel:"Problema", min:5,
      enun:"En una encuesta del instituto, 54 alumnos, que son el 45 % de los encuestados, prefieren el baloncesto. ¿Cuántos alumnos respondieron la encuesta?",
      pasos:["Ahora busco el <b>total</b>, la cantidad inicial.", R`$C_F = 54$, $I_V = 0,45$`, R`$C_I = C_F : I_V = 54 : 0,45 = 120$`, R`Comprueba: $120 \cdot 0,45 = 54$ ✓`],
      res:"Respondieron la encuesta <b>120 alumnos</b>." },
    { nivel:"Reto", min:6,
      enun:"<b>a)</b> «Tres de cada siete alumnos se dan cuenta de que dos ejercicios del examen están resueltos en el libro». Exprésalo en porcentaje.<br><b>b)</b> En un pueblo, el 60 % son adultos y, de ellos, el 25 % está jubilado. ¿Qué porcentaje del pueblo está jubilado?",
      pasos:[R`<b>a)</b> $I_V = 3 : 7 = 0,4285\ldots$ → $\approx 42,86\,\%$`, R`<b>b)</b> El 25 % del 60 %: $0,60 \cdot 0,25 = 0,15$ → $15\,\%$`, "Con 100 personas: 60 adultos y 15 jubilados → 15 de cada 100."],
      res:"a) Se dan cuenta aproximadamente el <b>42,86 %</b> de los alumnos.<br>b) Está jubilado el <b>15 %</b> del pueblo." }
  ],

  casa: [
    { nivel:"Básico", enun:"Calcula: <b>a)</b> 30 % de 90 &nbsp; <b>b)</b> 5 % de 240 &nbsp; <b>c)</b> 75 % de 60 &nbsp; <b>d)</b> 1 % de 3500",
      pasos:[R`a) $90 \cdot 0,30 = 27$`, R`b) $240 \cdot 0,05 = 12$`, R`c) $60 \cdot 0,75 = 45$`, R`d) $3500 \cdot 0,01 = 35$`], res:"a) 27 b) 12 c) 45 d) 35" },
    { nivel:"Básico", enun:"Mi hermana tiene rotuladores: 10 azules, 5 amarillos, 15 verdes y 20 morados. ¿Qué porcentaje tiene de cada color?",
      pasos:["Total: 50 rotuladores.", R`Azules $10 : 50 = 0,20$, amarillos $5 : 50 = 0,10$, verdes $15 : 50 = 0,30$ y morados $20 : 50 = 0,40$`], res:"Tiene un <b>20 %</b> azules, un <b>10 %</b> amarillos, un <b>30 %</b> verdes y un <b>40 %</b> morados." },
    { nivel:"Básico", enun:"Otra caja de rotuladores tiene 9 azules, 24 amarillos y 27 morados. ¿Qué porcentaje hay de cada color?",
      pasos:["Total: 60", R`Azules: $9 : 60 = 0,15$. Amarillos: $24 : 60 = 0,40$. Morados: $27 : 60 = 0,45$`], res:"Hay un <b>15 %</b> de azules, un <b>40 %</b> de amarillos y un <b>45 %</b> de morados." },
    { nivel:"Consolidación", enun:"En un hotel hay 120 personas: 24 portuguesas, 36 alemanas y el resto españolas. Calcula el porcentaje de cada nacionalidad.",
      pasos:[R`Portuguesas: $24 : 120 = 0,20$. Alemanas: $36 : 120 = 0,30$`, "Españolas: 100 − 20 − 30 = 50 %"], res:"Hay un <b>20 %</b> de portugueses, un <b>30 %</b> de alemanes y un <b>50 %</b> de españoles." },
    { nivel:"Consolidación", enun:"En un centro de 680 alumnos han aprobado matemáticas 476. ¿Qué porcentaje ha aprobado?",
      pasos:[R`$I_V = C_F : C_I = 476 : 680 = 0,70$`], res:"Ha aprobado el <b>70 %</b> de los alumnos." },
    { nivel:"Problema", enun:"18 alumnos de 2.º, que son el 60 % del curso, van a la excursión. ¿Cuántos alumnos hay en 2.º?",
      pasos:[R`$C_F = 18$, $I_V = 0,60$`, R`$C_I = C_F : I_V = 18 : 0,60 = 30$`], res:"En 2.º hay <b>30 alumnos</b>." },
    { nivel:"Para pensar", enun:"¿Es lo mismo el 20 % de 50 que el 50 % de 20? ¿Por qué? Usa la idea para calcular de cabeza el 8 % de 25.",
      pasos:[R`$50 \cdot 0,20 = 10$ y $20 \cdot 0,50 = 10$: se multiplican los mismos números.`, R`$8\,\%$ de $25 = 25\,\%$ de $8 = 8 : 4 = 2$`], res:"<b>Sí</b> es lo mismo, y el 8 % de 25 es <b>2</b>." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">¿Qué quiere decir «el 20 % de la clase»?</p>`}
    ]},

    { titulo:"¿Qué es un porcentaje?", cuerpo:[
      {def:["Un <b>porcentaje</b> (tanto por ciento) es una razón con denominador 100: <b>25 %</b> significa <b>25 de cada 100</b>.", {formula:R`25\,\% = \frac{25}{100} = 0{,}25`}], etq:"Porcentaje"},
      {html:barra([[25,"25 %","r"],[75,"75 %",""]],"Si de cada 100 alumnos 25 van en bici: el 25 %")}
    ]},

    { titulo:"El porcentaje en forma decimal", cuerpo:[
      {def:["Para calcular, el % se escribe en <b>decimal</b>: se divide entre 100."], etq:"En decimal"},
      {html:`<div class="dec-cards">${[["50 %","0,50","la mitad"],["25 %","0,25","la cuarta parte"],["36 %","0,36",""],["5 %","0,05","¡ojo con el 0!"]].map(c=>`<div><b>${c[0]}</b><i>▼</i><span>${c[1]}</span><small>${c[2]}</small></div>`).join("")}</div>`},
      {nota:["La coma se mueve <b>dos lugares</b> a la izquierda: 5 % es 0,05, no 0,5."]}
    ]},

    { titulo:"Porcentajes de cabeza", cuerpo:[
      {cols:[
        [{prop:["<b>50 %</b> → la mitad (: 2)", "<b>25 %</b> → la cuarta parte (: 4)", "<b>75 %</b> → tres cuartas partes"], etq:"Fracciones"}],
        [{prop:["<b>10 %</b> → divido entre 10", "<b>20 %</b> → el 10 % por 2", "<b>5 %</b> → la mitad del 10 %", "<b>1 %</b> → divido entre 100"], etq:"Con el 10 %"}]
      ]},
      {ej:{enun:"Calcula el 15 % de 60.", pasos:["10 % de 60 = 6", "5 % de 60 = 3 (la mitad)", "15 % = 6 + 3"], res:"El 15 % de 60 es <b>9</b>."}}
    ]},

    { titulo:"El porcentaje de una cantidad", cuerpo:[
      {ej:{enun:"En una clase de 80 alumnos de 2.º, el 35 % viene andando. ¿Cuántos son?",
        pasos:[R`Lo que había: $C_I = 80$. El porcentaje en decimal: $I_V = 0,35$`, R`$C_F = C_I \cdot I_V = 80 \cdot 0,35 = 28$`],
        res:"Vienen andando <b>28 alumnos</b>."}}
    ]},

    { titulo:"La fórmula (lo que hemos usado)", cuerpo:[
      {prop:[{formula:R`C_F = C_I \cdot I_V`}], etq:"La fórmula"},
      {html:`<div class="cfiv"><div><b>$C_I$</b><span>cantidad inicial</span><small>el total: el 100 %</small></div><div><b>$I_V$</b><span>índice de variación</span><small>el % en decimal</small></div><div><b>$C_F$</b><span>cantidad final</span><small>la parte que me piden</small></div></div>`}
    ]},

    { titulo:"¿Qué porcentaje es?", cuerpo:[
      {ej:{etq:"🏨 Problema de examen", enun:"En un hotel hay 120 personas y 24 son portuguesas. ¿Qué porcentaje son?",
        pasos:[R`$C_I = 120$, $C_F = 24$`, R`$I_V = C_F : C_I = 24 : 120 = 0,20$`, "0,20 → 20 %"],
        res:"El <b>20 %</b> son portuguesas."}},
      {aviso:["No te quedes en 0,20: el resultado se da en <b>porcentaje</b> (20 %)."]}
    ]},

    { titulo:"Los porcentajes de un grupo", cuerpo:[
      {ej:{etq:"🖍️ Problema de examen", enun:"Mi hermana tiene 10 rotuladores azules, 5 amarillos, 15 verdes y 20 morados. ¿Qué porcentaje tiene de cada color?",
        pasos:["Total: 10 + 5 + 15 + 20 = 50", R`Azules: $10 : 50 = 0,20$. Amarillos: $5 : 50 = 0,10$`,
               R`Verdes: $15 : 50 = 0,30$. Morados: $20 : 50 = 0,40$`],
        res:"Tiene un <b>20 %</b> azules, un <b>10 %</b> amarillos, un <b>30 %</b> verdes y un <b>40 %</b> morados."}},
      {html:barra([[20,"20 %","a"],[10,"10 %","r"],[30,"30 %","v"],[40,"40 %","z"]],"Todos juntos suman el 100 %")}
    ]},

    { titulo:"Calcular el total", cuerpo:[
      {ej:{enun:"9 alumnos de mi clase vienen en bici, que son el 30 % de la clase. ¿Cuántos alumnos somos?",
        pasos:[R`$C_F = 9$, $I_V = 0,30$`, R`$C_I = C_F : I_V = 9 : 0,30 = 30$`, R`Comprueba: $30 \cdot 0,30 = 9$ ✓`],
        res:"En la clase somos <b>30 alumnos</b>."}}
    ]},

    { titulo:"Despejar: busco $C_I$ o $I_V$", cuerpo:[
      {html:R`<div class="cfiv desp"><div>¿Busco $C_F$? <b>$C_F = C_I \cdot I_V$</b></div><div>¿Busco $C_I$? <b>$C_I = C_F : I_V$</b></div><div>¿Busco $I_V$? <b>$I_V = C_F : C_I$</b></div></div>`},
      {truco:[{html:tri("")}, "Tapa con el dedo lo que buscas: lo que queda al lado se multiplica, lo que queda arriba y abajo se divide."], etq:"🪄 Truco: el triángulo"}
    ]},

    { titulo:"Fracciones, decimales y porcentajes", cuerpo:[
      {html:`<table class="t tprop"><tr><th>Fracción</th><td>1/2</td><td>1/4</td><td>3/4</td><td>1/5</td><td>1/10</td><td>3/7</td></tr><tr><th>Decimal</th><td>0,5</td><td>0,25</td><td>0,75</td><td>0,2</td><td>0,1</td><td>0,428…</td></tr><tr><th>Porcentaje</th><td>50 %</td><td>25 %</td><td>75 %</td><td>20 %</td><td>10 %</td><td>≈ 42,86 %</td></tr></table>`},
      {prop:["Fracción → decimal: divido. Decimal → %: multiplico por 100 (muevo la coma dos lugares)."], etq:"Cómo se pasa"},
      {nota:["«3 de cada 7» es la fracción $\\dfrac37$: en porcentaje, unos 43 de cada 100."]}
    ]},

    { titulo:"🪄 Trucos para ir más rápido", cuerpo:[
      {truco:["<b>El 10 % es mover la coma</b> un lugar a la izquierda: 10 % de 350 = 35."], etq:"🪄 Truco 1"},
      {truco:["<b>Se pueden cambiar de orden</b>: el 8 % de 25 es el 25 % de 8 = 2."], etq:"🪄 Truco 2"},
      {truco:["<b>Los porcentajes de todos los grupos suman 100 %</b>: el último sale restando, y así compruebas."], etq:"🪄 Truco 3"}
    ]},

    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:["<b>Dividir al revés</b>: para saber qué % es, es parte entre total (24 : 120), no total entre parte."], etq:"⚠️ Error 1"},
      {aviso:["<b>Escribir mal el decimal</b>: 5 % es 0,05, no 0,5."], etq:"⚠️ Error 2"},
      {aviso:["<b>Confundir la parte con el total</b>: lee bien qué es el 100 % ($C_I$)."], etq:"⚠️ Error 3"}
    ]},

    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{lista:[
        "$r\\,\\%$ = $r$ de cada 100 → en decimal, divido entre 100.",
        "La fórmula: $C_F = C_I \\cdot I_V$.",
        "¿Qué % es? $I_V = C_F : C_I$. ¿El total? $C_I = C_F : I_V$.",
        "De cabeza: 50 % mitad, 25 % cuarta parte, 10 % entre 10."
      ]}]},
      {estudio:[
        {comp:{q:"¿Cuánto es el 40 % de 65?", sol:26, explic:"C_F = 65 · 0,40 = 26", pista:"Escribe el 40 % en decimal (0,40) y multiplica."}},
        {comp:{q:"En un grupo de 80 personas, 12 son zurdas. ¿Qué porcentaje?", sol:15, unidad:"%", explic:"I_V = 12 : 80 = 0,15 → 15 %", pista:"I_V = C_F : C_I"}},
        {comp:{q:"El 25 % de una cantidad es 14. ¿Cuál es la cantidad?", sol:56, explic:"C_I = 14 : 0,25 = 56", pista:"C_I = C_F : I_V"}}
      ]}
    ]}
  ]
});
})();

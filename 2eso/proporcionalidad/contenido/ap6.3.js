/* 2.º ESO · Tema 3 · Apartado 6.3: Porcentajes. Tipo 3: calcular el % dadas la cantidad inicial y la final
   C_F = C_I · x y se despeja; si pasa de 1 sube, si no llega a 1 baja. Problemas de sus exámenes: hotel, rotuladores, globos. */
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
const cuadro = (m1, m2, a, b, t) => `<table class="t cuadro"><tr><th>${m1}</th><th class="fl">(${t||"I"}) ⟶</th><th>${m2}</th></tr><tr><td>${a[0]}</td><td></td><td>${a[1]}</td></tr><tr><td>${b[0]}</td><td></td><td class="x">${b[1]}</td></tr></table>`;
const flecha = (pasos) => `<div class="cadena">${pasos.map((p,k)=>k%2 ? `<div class="op">${p}<i>━━━►</i></div>` : `<div class="caja">${p}</div>`).join("")}</div>`;
TEMA.registrar({
  num: "6.3",
  titulo: "Porcentajes · Tipo 3: calcular el % dadas la cantidad inicial y la final",
  videos: [
    {t:"Porcentajes encadenados", url:"https://www.youtube.com/watch?v=ynSBIu_6zSE"}
  ],

  clase: [
    { nivel:"Práctica", min:6,
      enun:"En un hotel hay 325 personas: 39 italianas, 117 francesas, 78 alemanas y el resto rusas. ¿Qué porcentaje representa cada grupo?",
      pasos:[R`Busco el porcentaje: $C_F = C_I \cdot I_V$ → parte $= 325 \cdot x \;\Rightarrow\; x = \dfrac{\text{parte}}{325}$`,
             R`Italianas: $39 : 325 = 0,12$ → $12\,\%$. Francesas: $117 : 325 = 0,36$ → $36\,\%$`,
             R`Alemanas: $78 : 325 = 0,24$ → $24\,\%$`,
             R`Rusas: $325 - 234 = 91$ → $91 : 325 = 0,28$ → $28\,\%$ (y $12 + 36 + 24 + 28 = 100$ ✓)`],
      res:"Hay un <b>12 %</b> de italianas, un <b>36 %</b> de francesas, un <b>24 %</b> de alemanas y un <b>28 %</b> de rusas." },
    { nivel:"Práctica", min:5,
      enun:"Una caja tiene 40 globos: 14 rojos, 10 azules, 6 verdes y el resto amarillos. Halla el porcentaje de globos de cada color.",
      pasos:["Amarillos: 40 − 14 − 10 − 6 = 10", R`Rojos: $14 : 40 = 0,35$ → $35\,\%$. Azules: $10 : 40 = 0,25$ → $25\,\%$`,
             R`Verdes: $6 : 40 = 0,15$ → $15\,\%$. Amarillos: $25\,\%$`, "Comprueba: 35 + 25 + 15 + 25 = 100 % ✓"],
      res:"Hay un <b>35 %</b> de globos rojos, un <b>25 %</b> azules, un <b>15 %</b> verdes y un <b>25 %</b> amarillos." },
    { nivel:"Práctica", min:5,
      enun:"Hace dos semanas una mochila costaba 120 € y hoy he pagado 138 €. ¿Ha subido o ha bajado? ¿Qué porcentaje?",
      pasos:[R`$C_F = C_I \cdot I_V$ → $138 = 120 \cdot x \;\Rightarrow\; x = \dfrac{138}{120} = 1,15$`, "1,15 es mayor que 1: ha subido un 15 %"],
      res:"La mochila ha <b>subido un 15 %</b>." },
    { nivel:"Reto", min:6,
      enun:"<b>a)</b> «Tres de cada siete alumnos se dan cuenta de que dos ejercicios del examen están resueltos en el libro». Exprésalo en porcentaje.<br><b>b)</b> En un pueblo, el 60 % son adultos y, de ellos, el 25 % está jubilado. ¿Qué porcentaje del pueblo está jubilado?",
      pasos:[R`<b>a)</b> $3 = 7 \cdot x \;\Rightarrow\; x = \dfrac{3}{7} = 0,4285\ldots$ → $\approx 42,86\,\%$`, R`<b>b)</b> El 25 % del 60 %: $0,60 \cdot 0,25 = 0,15$ → $15\,\%$`, "Con 100 personas: 60 adultos y 15 jubilados → 15 de cada 100."],
      res:"a) Se dan cuenta aproximadamente el <b>42,86 %</b> de los alumnos.<br>b) Está jubilado el <b>15 %</b> del pueblo." },
    { nivel:"Reto", min:7,
      enun:"Por el Black Friday, una videoconsola de 250 € tiene un descuento del 20 %. Después le aplican otro porcentaje, sin saber si es de subida o de bajada, y el precio final es 255 €. ¿Fue una subida o una bajada? ¿De cuánto?",
      pasos:[R`Con el descuento: $I_V = 0,80$ ⇒ $C_F = 250 \cdot 0,80 = 200$ €`,
             R`De 200 € a 255 €: $C_F = C_I \cdot I_V$ ⇒ $255 = 200 \cdot x$ ⇒ $x = \dfrac{255}{200} = 1,275$`, R`Mayor que 1: sube $1,275 - 1 = 0,275$ → $27,5\,\%$`],
      res:"Fue una <b>subida del 27,5 %</b>." }
  ],

  casa: [
    { nivel:"Básico", enun:"Mi hermana tiene rotuladores: 10 azules, 5 amarillos, 15 verdes y 20 morados. ¿Qué porcentaje tiene de cada color?",
      pasos:["Total: 50 rotuladores.", R`Azules $10 : 50 = 0,20$, amarillos $5 : 50 = 0,10$, verdes $15 : 50 = 0,30$ y morados $20 : 50 = 0,40$`], res:"Tiene un <b>20 %</b> azules, un <b>10 %</b> amarillos, un <b>30 %</b> verdes y un <b>40 %</b> morados." },
    { nivel:"Básico", enun:"Otra caja de rotuladores tiene 9 azules, 24 amarillos y 27 morados. ¿Qué porcentaje hay de cada color?",
      pasos:["Total: 60", R`Azules: $9 : 60 = 0,15$. Amarillos: $24 : 60 = 0,40$. Morados: $27 : 60 = 0,45$`], res:"Hay un <b>15 %</b> de azules, un <b>40 %</b> de amarillos y un <b>45 %</b> de morados." },
    { nivel:"Consolidación", enun:"En un hotel hay 120 personas: 24 portuguesas, 36 alemanas y el resto españolas. Calcula el porcentaje de cada nacionalidad.",
      pasos:[R`Portuguesas: $24 : 120 = 0,20$. Alemanas: $36 : 120 = 0,30$`, "Españolas: 100 − 20 − 30 = 50 %"], res:"Hay un <b>20 %</b> de portugueses, un <b>30 %</b> de alemanes y un <b>50 %</b> de españoles." },
    { nivel:"Consolidación", enun:"En un centro de 680 alumnos han aprobado matemáticas 476. ¿Qué porcentaje ha aprobado?",
      pasos:[R`$C_F = C_I \cdot I_V$ → $476 = 680 \cdot x \;\Rightarrow\; x = \dfrac{476}{680} = 0,70$`], res:"Ha aprobado el <b>70 %</b> de los alumnos." },
    { nivel:"Básico", enun:"Unas zapatillas costaban 80 € y las he comprado por 68 €. ¿Qué descuento me han hecho?",
      pasos:[R`$C_F = C_I \cdot I_V$ → $68 = 80 \cdot x \;\Rightarrow\; x = \dfrac{68}{80} = 0,85$`, R`Descuento: $1 - 0,85 = 0,15$ → $15\,\%$`], res:"Me han hecho un descuento del <b>15 %</b>." },
    { nivel:"Problema", enun:"Hace dos años había 150 alumnos en el conservatorio. El año pasado se matricularon un 10 % más y este año 110. ¿Subió o bajó este año? ¿Qué porcentaje?",
      pasos:[R`El año pasado: $C_F = 150 \cdot 1,10 = 165$ alumnos`, R`Este año: $110 = 165 \cdot x$ ⇒ $x = \dfrac{110}{165} \approx 0,6667$`, R`Menor que 1: baja $1 - 0,6667 = 0,3333$ → $33,33\,\%$`],
      res:"Este año <b>bajó</b> un <b>33,33 %</b>." },
    { nivel:"Para pensar", enun:"Un artículo sube un 20 % y después baja un 20 %. ¿Vuelve a su precio? Pruébalo con 100 €.",
      pasos:[R`Con 100 €: $100 \cdot 1,20 = 120$ € ⇒ $120 \cdot 0,80 = 96$ €`, R`Índices: $1,20 \cdot 0,80 = 0,96$ → baja un 4 %`], res:"<b>No</b> vuelve a su precio: queda un <b>4 %</b> más barato." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">¿Qué porcentaje es? ¿Cuánto ha subido?</p>`}
    ]},
    { titulo:"¿Qué porcentaje es?", cuerpo:[
      {ej:{etq:"🏨 Problema de examen", enun:"En un hotel hay 120 personas y 24 son portuguesas. ¿Qué porcentaje son?",
        pasos:[R`$C_I = 120$, $C_F = 24$ y la $x$ es el porcentaje`, R`$C_F = C_I \cdot I_V$ → $24 = 120 \cdot x \;\Rightarrow\; x = \dfrac{24}{120} = 0,20$`, "0,20 → 20 %"],
        res:"El <b>20 %</b> son portuguesas."}},
      {aviso:["No te quedes en 0,20: el resultado se da en <b>porcentaje</b> (20 %)."]}
    ]},
    { titulo:"Lo que busco es la $x$: el porcentaje", cuerpo:[
      {html:R`<div class="cfiv desp"><div>Siempre la misma fórmula: <b>$C_F = C_I \cdot I_V$</b></div><div>Pongo una <b>$x$</b> en lo que busco ($I_V$)</div><div>y <b>despejo</b>: $x = \dfrac{C_F}{C_I}$</div></div>`},
      {nota:["<b>Tipo 3:</b> conozco el total y la parte (o lo de antes y lo de ahora). Busco el %: <b>divido</b>."]},
      {truco:[{html:tri("V")}, "Tapa con el dedo lo que buscas: $I_V$ queda debajo de $C_F$, así que se divide."], etq:"🪄 Truco: el triángulo"}
    ]},
    { titulo:"Los porcentajes de un grupo", cuerpo:[
      {ej:{etq:"🖍️ Problema de examen", enun:"Mi hermana tiene 10 rotuladores azules, 5 amarillos, 15 verdes y 20 morados. ¿Qué porcentaje tiene de cada color?",
        pasos:["Total: 10 + 5 + 15 + 20 = 50", R`Azules: $10 : 50 = 0,20$. Amarillos: $5 : 50 = 0,10$`,
               R`Verdes: $15 : 50 = 0,30$. Morados: $20 : 50 = 0,40$`],
        res:"Tiene un <b>20 %</b> azules, un <b>10 %</b> amarillos, un <b>30 %</b> verdes y un <b>40 %</b> morados."}},
      {html:barra([[20,"20 %","a"],[10,"10 %","r"],[30,"30 %","v"],[40,"40 %","z"]],"Todos juntos suman el 100 %")}
    ]},
    { titulo:"Fracciones, decimales y porcentajes", cuerpo:[
      {html:`<table class="t tprop"><tr><th>Fracción</th><td>1/2</td><td>1/4</td><td>3/4</td><td>1/5</td><td>1/10</td><td>3/7</td></tr><tr><th>Decimal</th><td>0,5</td><td>0,25</td><td>0,75</td><td>0,2</td><td>0,1</td><td>0,428…</td></tr><tr><th>Porcentaje</th><td>50 %</td><td>25 %</td><td>75 %</td><td>20 %</td><td>10 %</td><td>≈ 42,86 %</td></tr></table>`},
      {prop:["Fracción → decimal: divido. Decimal → %: multiplico por 100 (muevo la coma dos lugares)."], etq:"Cómo se pasa"},
      {nota:["«3 de cada 7» es la fracción $\\dfrac37$: en porcentaje, unos 43 de cada 100."]}
    ]},
    { titulo:"¿Cuánto ha subido o bajado?", cuerpo:[
      {cols:[
        [{ej:{etq:"📱 Baja", enun:"Un móvil pasa de 400 € a 340 €.", pasos:[R`$340 = 400 \cdot x$ ⇒ $x = \dfrac{340}{400} = 0,85$`, R`Menor que 1: baja $1 - 0,85 = 0,15$`], res:"El móvil ha bajado un <b>15 %</b>."}}],
        [{ej:{etq:"💡 Sube", enun:"La luz pasa de 50 € a 54 €.", pasos:[R`$54 = 50 \cdot x$ ⇒ $x = \dfrac{54}{50} = 1,08$`, R`Mayor que 1: sube $1,08 - 1 = 0,08$`], res:"La luz ha subido un <b>8 %</b>."}}]
      ]},
      {nota:["Si el índice pasa de 1, sube lo que pasa. Si no llega a 1, baja lo que le falta."]}
    ]},
    { titulo:"Subida y bajada: ¿cuál fue?", cuerpo:[
      {ej:{etq:"🛍️ Problema de examen", enun:"Un artículo costaba 180 €. Primero subió un 20 % y después le aplicaron otro porcentaje. El precio final es 162 €. ¿Fue subida o bajada? ¿De cuánto?",
        pasos:[R`Subida: $180 \cdot 1,20 = 216$ €`, R`De 216 € a 162 €: $C_F = C_I \cdot I_V$ → $162 = 216 \cdot x \;\Rightarrow\; x = \dfrac{162}{216} = 0,75$`, R`0,75 es menor que 1: <b>bajada</b> de $1 - 0,75 = 0,25$ → $25\,\%$`],
        res:"Fue una <b>bajada del 25 %</b>."}}
    ]},
    { titulo:"Compras inteligentes: las ofertas", cuerpo:[
      {cols:[
        [{ej:{etq:"3 × 2", enun:"Llevas 3 y pagas 2.", pasos:[R`$2 = 3 \cdot x$ ⇒ $x \approx 0,67$`, R`Baja $1 - 0,67 = 0,33$`], res:"Es un descuento de casi el <b>33 %</b>."}}],
        [{ej:{etq:"2.ª unidad a mitad de precio", enun:"Llevas 2 y pagas 1,5.", pasos:[R`$1,5 = 2 \cdot x$ ⇒ $x = 0,75$`, R`Baja $1 - 0,75 = 0,25$`], res:"Es un descuento del <b>25 %</b>."}}],
        [{ej:{etq:"−70 % en la 2.ª unidad", enun:"Llevas 2 y pagas 1,3.", pasos:[R`$1,3 = 2 \cdot x$ ⇒ $x = 0,65$`, R`Baja $1 - 0,65 = 0,35$`], res:"Es un descuento del <b>35 %</b>."}}]
      ]},
      {nota:["Solo es buena oferta si de verdad necesitas las dos unidades 😉"]}
    ]},
    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:["<b>Dividir al revés</b>: para saber qué % es, es parte entre total (24 : 120), no total entre parte."], etq:"⚠️ Error 1"},
      {aviso:["No te quedes en 0,20: el resultado se da en <b>porcentaje</b> (20 %)."], etq:"⚠️ Error 2"},
      {aviso:["<b>Subir un 20 % y bajar un 20 %</b> no deja el precio igual: 1,20 · 0,80 = 0,96."], etq:"⚠️ Error 3"}
    ]},
    { titulo:"📝 Resumen de los tres tipos", cuerpo:[
      {html:R`<table class="t tprop"><tr><th></th><th>Conozco</th><th>Pongo la $x$ en</th><th>Hago</th></tr><tr><th>Tipo 1</th><td>el total y el %</td><td>$C_F$</td><td>multiplico</td></tr><tr><th>Tipo 2</th><td>la parte y el %</td><td>$C_I$</td><td>divido entre $I_V$</td></tr><tr><th>Tipo 3</th><td>el total y la parte</td><td>$I_V$</td><td>divido $C_F$ entre $C_I$</td></tr></table>`},
      {resumen:[{formula:R`C_F = C_I \cdot I_V`}, "Si el índice pasa de 1 sube; si no llega a 1 baja."]},
      {estudio:[
        {comp:{q:"En un grupo de 80 personas, 12 son zurdas. ¿Qué porcentaje?", sol:15, unidad:"%", explic:"12 = 80 · x → x = 12 : 80 = 0,15 → 15 %", pista:"Pon x en el índice."}},
        {comp:{q:"Un precio pasa de 40 € a 46 €. ¿Qué porcentaje sube?", sol:15, unidad:"%", explic:"46 = 40 · x → x = 1,15 → sube un 15 %", pista:"Divide lo de ahora entre lo de antes."}},
        {comp:{q:"Sube un 10 % y luego otro 10 %. ¿Cuánto sube en total (%)?", sol:21, unidad:"%", explic:"1,10 · 1,10 = 1,21 → +21 %", pista:"Multiplica los índices."}}
      ]}
    ]}
  ]
});
})();

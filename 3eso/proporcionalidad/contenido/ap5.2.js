/* 3.º ESO · Tema 3 · Apartado 5.2: Porcentajes. Tipo 2: calcular el total o la cantidad inicial (DIVIDIENDO)
   Dado el precio rebajado, el descuento, el IVA o el precio con IVA. Siempre C_F = C_I · I_V con x en C_I y se despeja. */
(function(){
const R = String.raw;
// triángulo (solo como truco): C_F arriba; C_I × I_V abajo; tapa: "F", "I", "V" o ""
const tri = (tapa, pie) => {
  const v = (k,t) => tapa===k ? `<tspan fill="#f59e0b">?</tspan>` : t;
  return `<figure class="dib tri"><svg viewBox="0 0 260 170" role="img" aria-label="Triángulo: C F arriba; C I por I V abajo">
    <polygon points="130,8 252,160 8,160" fill="#eef0ff" stroke="#4338ca" stroke-width="4" stroke-linejoin="round"/>
    <line x1="70" y1="86" x2="190" y2="86" stroke="#4338ca" stroke-width="3"/>
    <text x="130" y="72" text-anchor="middle" font-size="30" font-weight="800" fill="#1e1b3a">${v("F","C<tspan font-size=\"16\" dy=\"6\">F</tspan>")}</text>
    <text x="130" y="136" text-anchor="middle" font-size="28" font-weight="800" fill="#1e1b3a">${v("I","C<tspan font-size=\"15\" dy=\"5\">I</tspan>")}<tspan dy="-5"> × </tspan>${v("V","I<tspan font-size=\"15\" dy=\"5\">V</tspan>")}</text>
  </svg>${pie?`<figcaption>${pie}</figcaption>`:""}</figure>`;
};
// barra de porcentajes: trozos [ancho %, texto, clase]
const barra = (trozos, pie) => `<figure class="dib"><div class="barra-pct">${trozos.map(t=>`<span class="${t[2]||""}" style="flex:${t[0]}">${t[1]}</span>`).join("")}</div>${pie?`<figcaption>${pie}</figcaption>`:""}</figure>`;
// flecha de un cambio: [antes, operación, después]
const flecha = (pasos) => `<div class="cadena">${pasos.map((p,k)=>k%2 ? `<div class="op">${p}<i>━━━►</i></div>` : `<div class="caja">${p}</div>`).join("")}</div>`;
TEMA.registrar({
  num: "5.2",
  titulo: "Porcentajes · Tipo 2: calcular el total (la cantidad inicial)",
  videos: [
    {t:"Problemas con porcentajes (3.º ESO)", url:"https://www.youtube.com/watch?v=9T7w7iaMrjQ"}
  ],

  clase: [
    { nivel:"Aplicación", min:5,
      enun:"Un pantano está al 43 % de su capacidad y tiene 989 hm³ de agua.<br><b>a)</b> ¿Cuál es su capacidad total?<br><b>b)</b> ¿Cuántos hm³ le faltan para llenarse?",
      pasos:[R`<b>a)</b> La $x$ es la capacidad total (el 100 %): es $C_I$`, R`$C_F = C_I \cdot I_V$ ⇒ $989 = x \cdot 0,43$ ⇒ $x = \dfrac{989}{0,43} = 2300$ hm³`,
             R`<b>b)</b> Le faltan $2300 - 989 = 1311$ hm³`],
      res:"a) El pantano tiene una capacidad de <b>2300 hm³</b>.<br>b) Le faltan <b>1311 hm³</b> para llenarse." },
    { nivel:"Aplicación", min:5,
      enun:"<b>a)</b> Un cartero ha repartido el 36 % de las cartas y todavía le quedan 1184. ¿Cuántas cartas tenía?<br><b>b)</b> Una goma elástica, al estirarla, aumenta su longitud un 30 % y mide 104 cm. ¿Cuánto mide sin estirar?",
      pasos:[R`<b>a)</b> Reparte el 36 %, así que baja: $I_V = 1 - 0,36 = 0,64$`, R`$C_F = C_I \cdot I_V$ → $1184 = x \cdot 0,64 \;\Rightarrow\; x = \dfrac{1184}{0,64} = 1850$ cartas`,
             R`<b>b)</b> Sube un 30 %: $I_V = 1 + 0,30 = 1,30$`, R`$C_F = C_I \cdot I_V$ → $104 = x \cdot 1,30 \;\Rightarrow\; x = \dfrac{104}{1,30} = 80$ cm`],
      res:"a) El cartero tenía <b>1850 cartas</b>.<br>b) Sin estirar, la goma mide <b>80 cm</b>." },
    { nivel:"Práctica", min:6,
      enun:"<b>a)</b> En rebajas, con un 40 % de descuento, has pagado 27 € por una camiseta. ¿Cuánto costaba antes?<br><b>b)</b> Un móvil cuesta 242 € con el 21 % de IVA incluido. ¿Cuánto cuesta sin IVA?",
      pasos:[R`Busco el precio de antes: es la $x$ de $C_F = C_I \cdot I_V$`,
             R`<b>a)</b> $I_V = 1 - 0,40 = 0,60$ → $27 = x \cdot 0,60 \;\Rightarrow\; x = \dfrac{27}{0,60} = 45$ €. Comprueba: $45 \cdot 0,60 = 27$ ✓`,
             R`<b>b)</b> $I_V = 1,21$ → $242 = x \cdot 1,21 \;\Rightarrow\; x = \dfrac{242}{1,21} = 200$ €`],
      res:"a) La camiseta costaba <b>45 €</b>.<br>b) El móvil cuesta <b>200 €</b> sin IVA." },
    { nivel:"Práctica", min:6,
      enun:"<b>a)</b> En unas rebajas me he ahorrado 13,50 € en un pantalón que tenía un 15 % de descuento. ¿Cuánto costaba? ¿Cuánto he pagado?<br><b>b)</b> En la factura de un taller, el IVA (21 %) son 52,50 €. ¿Cuánto es la factura sin IVA? ¿Y con IVA?",
      pasos:[R`<b>a)</b> Lo que me ahorro es el 15 % del precio: $I_V = 0,15$`, R`$13,50 = x \cdot 0,15$ ⇒ $x = \dfrac{13,50}{0,15} = 90$ €`,
             R`He pagado: $C_F = 90 \cdot 0,85 = 76,50$ €`,
             R`<b>b)</b> El IVA es el 21 % de la factura sin IVA: $52,50 = x \cdot 0,21$ ⇒ $x = \dfrac{52,50}{0,21} = 250$ €`,
             R`Con IVA: $C_F = 250 \cdot 1,21 = 302,50$ €`],
      res:"a) El pantalón costaba <b>90 €</b> y he pagado <b>76,50 €</b>.<br>b) La factura es de <b>250 €</b> sin IVA y de <b>302,50 €</b> con IVA." },
    { nivel:"Problema", min:7,
      enun:"Los ingresos de una tienda suben un 20 % en octubre y un 30 % en noviembre, y bajan un 25 % en diciembre. En diciembre ingresa 14 040 €.<br><b>a)</b> ¿Cuánto ingresaba en septiembre?<br><b>b)</b> ¿Cuánto ingresó en octubre?",
      pasos:[R`Índices: sube 20 % → $1,20$; sube 30 % → $1,30$; baja 25 % → $0,75$`,
             R`Índice total: $I_V = 1,20 \cdot 1,30 \cdot 0,75 = 1,17$`,
             R`<b>a)</b> $14\,040 = x \cdot 1,17$ ⇒ $x = \dfrac{14\,040}{1,17} = 12\,000$ €`,
             R`<b>b)</b> $C_F = 12\,000 \cdot 1,20 = 14\,400$ €`],
      res:"a) En septiembre ingresaba <b>12 000 €</b>.<br>b) En octubre ingresó <b>14 400 €</b>." }
  ],

  casa: [
    { nivel:"Básico",
      enun:"287 alumnos, que son el 35 % del instituto, vienen andando. ¿Cuántos alumnos hay en el instituto?",
      pasos:[R`La $x$ es el total: $C_F = C_I \cdot I_V$ ⇒ $287 = x \cdot 0,35$`, R`$x = \dfrac{287}{0,35} = 820$`, R`Comprueba: $820 \cdot 0,35 = 287$ ✓`],
      res:"En el instituto hay <b>820 alumnos</b>." },
    { nivel:"Consolidación",
      enun:"<b>a)</b> Tras subir un 12 %, el abono del gimnasio cuesta 33,60 €. ¿Cuánto costaba antes?<br><b>b)</b> Un portátil cuesta 605 € con el 21 % de IVA incluido. ¿Cuánto cuesta sin IVA?",
      pasos:[R`<b>a)</b> $33,60 = x \cdot 1,12 \;\Rightarrow\; x = \dfrac{33,60}{1,12} = 30$ €`, R`<b>b)</b> $605 = x \cdot 1,21 \;\Rightarrow\; x = \dfrac{605}{1,21} = 500$ €`],
      res:"a) El abono costaba <b>30 €</b>.<br>b) El portátil cuesta <b>500 €</b> sin IVA." },
    { nivel:"Consolidación",
      enun:"Por pagar al contado me descuentan un 8 % del precio de una lavadora, que son 36 €.<br><b>a)</b> ¿Cuál era el precio de la lavadora?<br><b>b)</b> ¿Cuánto pago?",
      pasos:[R`<b>a)</b> El descuento es el 8 % del precio: $36 = x \cdot 0,08$ ⇒ $x = \dfrac{36}{0,08} = 450$ €`,
             R`<b>b)</b> Baja un 8 %: $I_V = 0,92$ ⇒ $C_F = 450 \cdot 0,92 = 414$ €`],
      res:"a) La lavadora costaba <b>450 €</b>.<br>b) Pago <b>414 €</b>." },
    { nivel:"Consolidación",
      enun:"Tras dos subidas seguidas del 10 %, el abono de transporte cuesta 48,40 €. ¿Cuánto costaba al principio?",
      pasos:[R`Índice total: $I_V = 1,10 \cdot 1,10 = 1,21$`, R`$48,40 = x \cdot 1,21$ ⇒ $x = \dfrac{48,40}{1,21} = 40$ €`, "¡No se resta un 20 % a 48,40 €!"],
      res:"Al principio el abono costaba <b>40 €</b>." },
    { nivel:"Consolidación",
      enun:"Los espectadores de una serie suben un 23 % en octubre y bajan un 18 % en noviembre. En noviembre la ven 2 017 200 personas. ¿Cuántas la veían en septiembre?",
      pasos:[R`Índices: $1,23$ y $0,82$ → índice total $1,23 \cdot 0,82 = 1,0086$`, R`Hacia atrás: $2\,017\,200 = x \cdot 1,0086 \;\Rightarrow\; x = \dfrac{2\,017\,200}{1,0086} = 2\,000\,000$`],
      res:"En septiembre veían la serie <b>2 000 000</b> de personas." },
    { nivel:"Problema",
      enun:"Lucía gana un premio. Hacienda se queda el 20 % y, de lo que le queda, Lucía dona un 10 % a una ONG. Entre Hacienda y la ONG se han ido 5600 €.<br><b>a)</b> ¿Cuánto era el premio?<br><b>b)</b> ¿Cuánto dinero le queda a Lucía?",
      pasos:[R`Le queda después de las dos cosas: $I_V = 0,80 \cdot 0,90 = 0,72$`,
             R`Lo que se ha ido: $1 - 0,72 = 0,28$ del premio → $I_V = 0,28$`,
             R`<b>a)</b> $5600 = x \cdot 0,28 \;\Rightarrow\; x = \dfrac{5600}{0,28} = 20\,000$ €`,
             R`<b>b)</b> $C_F = 20\,000 \cdot 0,72 = 14\,400$ €`,
             R`Compruebo: $20\,000 - 14\,400 = 5600$ ✓`],
      res:"a) El premio era de <b>20 000 €</b>.<br>b) A Lucía le quedan <b>14 400 €</b>." },
    { nivel:"Para pensar",
      enun:"Has pagado 290,40 € por una bici eléctrica con un 20 % de rebaja y después el 21 % de IVA. ¿Cuál era el precio inicial?",
      pasos:[R`$I_V$ total $= 0,80 \cdot 1,21 = 0,968$`, R`$C_F = C_I \cdot I_V$ → $290,40 = x \cdot 0,968 \;\Rightarrow\; x = \dfrac{290,40}{0,968} = 300$ €`,
             R`Comprueba: $300 \cdot 0,80 = 240$ y $240 \cdot 1,21 = 290,40$ ✓`],
      res:"La bici costaba <b>300 €</b> al principio." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">Sé lo que queda: ¿cuánto había al principio?</p>`}
    ]},
    { titulo:"🚌 Busco el total", cuerpo:[
      {ej:{enun:"12 alumnos van en autobús y son el 40 % de la clase. ¿Cuántos alumnos hay en la clase?",
        pasos:[R`$C_F = 12$, $I_V = 0,40$ y la $x$ es el total`, R`$C_F = C_I \cdot I_V$ ⇒ $12 = x \cdot 0,40$ ⇒ $x = \dfrac{12}{0,40} = 30$`], res:"En la clase hay <b>30 alumnos</b>."}},
      {nota:[R`Comprueba: $30 \cdot 0,40 = 12$ ✓`]}
    ]},
    { titulo:"Lo que busco es la $x$", cuerpo:[
      {html:R`<div class="cfiv desp"><div>Siempre la misma fórmula: <b>$C_F = C_I \cdot I_V$</b></div><div>Pongo una <b>$x$</b> en lo que busco ($C_I$)</div><div>y <b>despejo</b>: se divide</div></div>`},
      {nota:["<b>Tipo 2:</b> conozco lo que queda (o una parte) y el %. Busco el total: <b>divido</b> entre el índice."]},
      {truco:[{html:tri("I")}, "Tapa con el dedo lo que buscas: $C_I$ queda debajo de $C_F$, así que se divide."], etq:"🪄 Truco: el triángulo"}
    ]},
    { titulo:"Hacia atrás: la cantidad inicial", cuerpo:[
      {ej:{etq:"👕", enun:"En rebajas, con un 20 % de descuento, has pagado 48 € por una sudadera. ¿Cuánto costaba antes?",
        pasos:[R`$C_F = C_I \cdot I_V$ → $48 = x \cdot 0,80 \;\Rightarrow\; x = \dfrac{48}{0,80} = 60$ €`], res:"La sudadera costaba <b>60 €</b>."}},
      {aviso:[R`No sumes el 20 % a 48 €: el 20 % se calculó sobre el precio de <b>antes</b>. Se divide entre $I_V$.`]}
    ]},
    { titulo:"Hacia atrás con el IVA", cuerpo:[
      {ej:{etq:"📱", enun:"Un móvil cuesta 363 € con el 21 % de IVA. ¿Cuánto cuesta sin IVA?",
        pasos:[R`$C_F = C_I \cdot I_V$ → $363 = x \cdot 1,21 \;\Rightarrow\; x = \dfrac{363}{1,21} = 300$ €`], res:"El móvil cuesta <b>300 €</b> sin IVA."}},
      {aviso:["Restar el 21 % a 363 € está mal: se divide entre 1,21."]}
    ]},
    { titulo:"Dado el descuento o el IVA en euros", cuerpo:[
      {cols:[
        [{ej:{etq:"💸 Descuento", enun:"En unas rebajas del 15 % me he ahorrado 9 €. ¿Cuánto costaba?",
          pasos:[R`Lo que me ahorro es el 15 % del precio: $I_V = 0,15$`, R`$9 = x \cdot 0,15$ ⇒ $x = \dfrac{9}{0,15} = 60$ €`], res:"Costaba <b>60 €</b> (y pago $60 \\cdot 0,85 = 51$ €)."}}],
        [{ej:{etq:"🧾 IVA", enun:"En una factura, el IVA del 21 % son 42 €. ¿Cuánto es la factura sin IVA?",
          pasos:[R`El IVA es el 21 % del precio sin IVA: $I_V = 0,21$`, R`$42 = x \cdot 0,21$ ⇒ $x = \dfrac{42}{0,21} = 200$ €`], res:"Sin IVA, la factura es de <b>200 €</b>."}}]
      ]},
      {aviso:[R`Si me dan <b>lo que pago</b>, $I_V = 0,85$ o $1,21$. Si me dan <b>el descuento o el IVA</b>, $I_V = 0,15$ o $0,21$.`]}
    ]},
    { titulo:"Hacia atrás con porcentajes encadenados", cuerpo:[
      {ej:{etq:"📺", enun:"Pagamos 290,40 € por una tele con un 20 % de rebaja y el 21 % de IVA. ¿Cuál era el precio inicial?",
        pasos:[R`$I_V = 0,80 \cdot 1,21 = 0,968$`, R`$290,40 = x \cdot 0,968$ ⇒ $x = \dfrac{290,40}{0,968} = 300$ €`], res:"El precio inicial era <b>300 €</b>."}},
      {nota:["Primero el índice total multiplicando; después, una sola división."]}
    ]},
    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:[R`<b>Para volver atrás, sumar o restar el porcentaje</b>: el % se calculó sobre el precio de antes. Se pone la $x$ en $C_I$ y se divide entre el índice.`], etq:"⚠️ Error 1"},
      {aviso:["<b>Confundir lo que pago con lo que me ahorro</b>: lee bien qué cantidad te dan."], etq:"⚠️ Error 2"},
      {aviso:[R`<b>Dividir al revés</b>: de $48 = x \cdot 0,80$ sale $x = \dfrac{48}{0,80}$, no $\dfrac{0,80}{48}$.`], etq:"⚠️ Error 3"}
    ]},
    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[
        {formula:R`C_F = x \cdot I_V \;\Rightarrow\; x = \dfrac{C_F}{I_V}`},
        {lista:["Tipo 2: busco el total o el precio de antes: <b>divido</b>.",
                R`Dado el precio rebajado o con IVA: $I_V = 1 - $ el % o $1 + $ el %.`,
                R`Dado el descuento o el IVA en euros: $I_V$ = el % en decimal.`,
                "Encadenados: primero multiplico los índices y después divido."]}
      ]},
      {estudio:[
        {comp:{q:"12 alumnos son el 40 % de una clase. ¿Cuántos alumnos hay?", sol:30, unidad:"alumnos", explic:R`$12 = x \cdot 0,40 \Rightarrow x = 12 : 0,40 = 30$`, pista:"C_F = C_I · I_V: la x es el total."}},
        {comp:{q:"Tras una rebaja del 25 % pagas 30 €. ¿Cuánto costaba?", sol:40, unidad:"€", explic:R`$30 = x \cdot 0,75 \Rightarrow x = 30 : 0,75 = 40$ €`, pista:"I_V = 0,75: la x es el precio de antes."}},
        {comp:{q:"Con el 21 % de IVA pago 96,80 €. ¿Precio sin IVA?", sol:80, unidad:"€", explic:R`$96,80 = x \cdot 1,21 \Rightarrow x = 80$ €`, pista:"Divide entre 1,21."}},
        {comp:{q:"Me descuentan un 20 %, que son 7 €. ¿Cuánto costaba?", sol:35, unidad:"€", explic:R`$7 = x \cdot 0,20 \Rightarrow x = 35$ €`, pista:"Lo que me ahorro es el 20 % del precio."}}
      ]}
    ]}
  ]
});
})();

/* 3.º ESO · Tema 3 · Apartado 5.2: Porcentajes. Tipo 2: calcular el total o la cantidad inicial (DIVIDIENDO)
   Dado el precio rebajado, el descuento, el IVA o el precio con IVA. Siempre C_F = I_V · C_I con x en C_I y se despeja. */
(function(){
const R = String.raw;
// triángulo (solo como truco): C_F arriba; I_V × C_I abajo; tapa: "F", "I", "V" o ""
const tri = (tapa, pie) => {
  const v = (k,t) => tapa===k ? `<tspan fill="#f59e0b">?</tspan>` : t;
  return `<figure class="dib tri"><svg viewBox="0 0 260 170" role="img" aria-label="Triángulo: C F arriba; I V por C I abajo">
    <polygon points="130,8 252,160 8,160" fill="#eef0ff" stroke="#4338ca" stroke-width="4" stroke-linejoin="round"/>
    <line x1="70" y1="86" x2="190" y2="86" stroke="#4338ca" stroke-width="3"/>
    <text x="130" y="72" text-anchor="middle" font-size="30" font-weight="800" fill="#1e1b3a">${v("F","C<tspan font-size=\"16\" dy=\"6\">F</tspan>")}</text>
    <text x="130" y="136" text-anchor="middle" font-size="28" font-weight="800" fill="#1e1b3a">${v("V","I<tspan font-size=\"15\" dy=\"5\">V</tspan>")}<tspan dy="-5"> × </tspan>${v("I","C<tspan font-size=\"15\" dy=\"5\">I</tspan>")}</text>
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
      pasos:[R`<b>a)</b> La $x$ es la capacidad total (el 100 %): es $C_I$`, R`$C_F = I_V \cdot C_I$ ⇒ $989 = 0,43 \cdot x$ ⇒ $x = \dfrac{989}{0,43} = 2300$ hm³`,
             R`<b>b)</b> Le faltan $2300 - 989 = 1311$ hm³`],
      res:"a) El pantano tiene una capacidad de <b>2300 hm³</b>.<br>b) Le faltan <b>1311 hm³</b> para llenarse." },
    { nivel:"Aplicación", min:5,
      enun:"<b>a)</b> Un cartero ha repartido el 36 % de las cartas y todavía le quedan 1184. ¿Cuántas cartas tenía?<br><b>b)</b> Una goma elástica, al estirarla, aumenta su longitud un 30 % y mide 104 cm. ¿Cuánto mide sin estirar?",
      pasos:[R`<b>a)</b> Reparte el 36 %, así que baja: $I_V = 1 - 0,36 = 0,64$`, R`$C_F = I_V \cdot C_I$ → $1184 = 0,64 \cdot x \;\Rightarrow\; x = \dfrac{1184}{0,64} = 1850$ cartas`,
             R`<b>b)</b> Sube un 30 %: $I_V = 1 + 0,30 = 1,30$`, R`$C_F = I_V \cdot C_I$ → $104 = 1,30 \cdot x \;\Rightarrow\; x = \dfrac{104}{1,30} = 80$ cm`],
      res:"a) El cartero tenía <b>1850 cartas</b>.<br>b) Sin estirar, la goma mide <b>80 cm</b>." },
    { nivel:"Práctica", min:6,
      enun:"<b>a)</b> En rebajas, con un 40 % de descuento, has pagado 27 € por una camiseta. ¿Cuánto costaba antes?<br><b>b)</b> Un móvil cuesta 242 € con el 21 % de IVA incluido. ¿Cuánto cuesta sin IVA?",
      pasos:[R`Busco el precio de antes: es la $x$ de $C_F = I_V \cdot C_I$`,
             R`<b>a)</b> $I_V = 1 - 0,40 = 0,60$ → $27 = 0,60 \cdot x \;\Rightarrow\; x = \dfrac{27}{0,60} = 45$ €. Comprueba: $45 \cdot 0,60 = 27$ ✓`,
             R`<b>b)</b> $I_V = 1 + 0,21 = 1,21$ → $242 = 1,21 \cdot x \;\Rightarrow\; x = \dfrac{242}{1,21} = 200$ €`],
      res:"a) La camiseta costaba <b>45 €</b>.<br>b) El móvil cuesta <b>200 €</b> sin IVA." },
    { nivel:"Práctica", min:6,
      enun:"<b>a)</b> En unas rebajas me he ahorrado 13,50 € en un pantalón que tenía un 15 % de descuento. ¿Cuánto costaba? ¿Cuánto he pagado?<br><b>b)</b> En la factura de un taller, el IVA (21 %) son 52,50 €. ¿Cuánto es la factura sin IVA? ¿Y con IVA?",
      pasos:[R`<b>a)</b> Lo que me ahorro es el 15 % del precio: $I_V = 0,15$`, R`$13,50 = 0,15 \cdot x$ ⇒ $x = \dfrac{13,50}{0,15} = 90$ €`,
             R`He pagado: $C_F = 0,85 \cdot 90 = 76,50$ €`,
             R`<b>b)</b> El IVA es el 21 % de la factura sin IVA: $52,50 = 0,21 \cdot x$ ⇒ $x = \dfrac{52,50}{0,21} = 250$ €`,
             R`Con IVA: $C_F = 1,21 \cdot 250 = 302,50$ €`],
      res:"a) El pantalón costaba <b>90 €</b> y he pagado <b>76,50 €</b>.<br>b) La factura es de <b>250 €</b> sin IVA y de <b>302,50 €</b> con IVA." },
    { nivel:"Problema", min:6,
      enun:"En unas elecciones municipales ha votado el 72 % del censo, que son 25&nbsp;200 personas.<br><b>a)</b> ¿Cuántas personas hay en el censo?<br><b>b)</b> ¿Cuántas no han votado?",
      pasos:[R`<b>a)</b> La $x$ es el censo (el 100 %): $C_F = I_V \cdot C_I$`, R`$25\,200 = 0,72 \cdot x$ ⇒ $x = \dfrac{25\,200}{0,72} = 35\,000$`,
             R`<b>b)</b> $35\,000 - 25\,200 = 9800$`],
      res:"a) En el censo hay <b>35&nbsp;000 personas</b>.<br>b) No han votado <b>9800 personas</b>." }
  ],

  casa: [
    { nivel:"Básico",
      enun:"287 alumnos, que son el 35 % del instituto, vienen andando. ¿Cuántos alumnos hay en el instituto?",
      pasos:[R`La $x$ es el total: $C_F = I_V \cdot C_I$ ⇒ $287 = 0,35 \cdot x$`, R`$x = \dfrac{287}{0,35} = 820$`, R`Comprueba: $820 \cdot 0,35 = 287$ ✓`],
      res:"En el instituto hay <b>820 alumnos</b>." },
    { nivel:"Consolidación",
      enun:"<b>a)</b> Tras subir un 12 %, el abono del gimnasio cuesta 33,60 €. ¿Cuánto costaba antes?<br><b>b)</b> Un portátil cuesta 605 € con el 21 % de IVA incluido. ¿Cuánto cuesta sin IVA?",
      pasos:[R`<b>a)</b> $33,60 = 1,12 \cdot x \;\Rightarrow\; x = \dfrac{33,60}{1,12} = 30$ €`, R`<b>b)</b> $605 = 1,21 \cdot x \;\Rightarrow\; x = \dfrac{605}{1,21} = 500$ €`],
      res:"a) El abono costaba <b>30 €</b>.<br>b) El portátil cuesta <b>500 €</b> sin IVA." },
    { nivel:"Consolidación",
      enun:"Por pagar al contado me descuentan un 8 % del precio de una lavadora, que son 36 €.<br><b>a)</b> ¿Cuál era el precio de la lavadora?<br><b>b)</b> ¿Cuánto pago?",
      pasos:[R`<b>a)</b> El descuento es el 8 % del precio: $36 = 0,08 \cdot x$ ⇒ $x = \dfrac{36}{0,08} = 450$ €`,
             R`<b>b)</b> Baja un 8 %: $I_V = 1 - 0,08 = 0,92$ ⇒ $C_F = 0,92 \cdot 450 = 414$ €`],
      res:"a) La lavadora costaba <b>450 €</b>.<br>b) Pago <b>414 €</b>." },
    { nivel:"Consolidación",
      enun:"Un coche de segunda mano se vende por 9350 €, que es un 45 % menos de lo que costó nuevo. ¿Cuánto costó nuevo?",
      pasos:[R`Baja un 45 %: $I_V = 1 - 0,45 = 0,55$`, R`$C_F = I_V \cdot C_I$ ⇒ $9350 = 0,55 \cdot x$ ⇒ $x = \dfrac{9350}{0,55} = 17\,000$ €`],
      res:"El coche costó <b>17&nbsp;000 €</b> nuevo." },
    { nivel:"Problema",
      enun:"Una factura de la luz es de 145,20 € con el 21 % de IVA incluido. ¿Cuánto es la factura sin IVA? ¿Cuántos euros se pagan de IVA?",
      pasos:[R`Con IVA sube: $I_V = 1 + 0,21 = 1,21$`, R`$145,20 = 1,21 \cdot x$ ⇒ $x = \dfrac{145,20}{1,21} = 120$ €`, R`IVA: $145,20 - 120 = 25,20$ €`],
      res:"Sin IVA la factura es de <b>120 €</b> y se pagan <b>25,20 €</b> de IVA." },
    { nivel:"Para pensar",
      enun:"Un patinete cuesta 242 € con el 21 % de IVA. Pablo calcula el precio sin IVA restando el 21 % de 242 €. ¿Le sale bien? ¿Por qué?",
      pasos:[R`Lo que hace Pablo: $0,79 \cdot 242 = 191,18$ €`, R`Con la fórmula: $242 = 1,21 \cdot x$ ⇒ $x = \dfrac{242}{1,21} = 200$ €`, R`Comprueba: $1,21 \cdot 200 = 242$ ✓ y $1,21 \cdot 191,18 \approx 231,33$ ✗`, "El 21 % se calcula sobre el precio sin IVA (200 €), no sobre 242 €."],
      res:"A Pablo <b>no</b> le sale bien: sin IVA el patinete cuesta <b>200 €</b>." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">Sé lo que queda: ¿cuánto había al principio?</p>`}
    ]},
    { titulo:"🚌 Busco el total", cuerpo:[
      {ej:{enun:"12 alumnos van en autobús y son el 40 % de la clase. ¿Cuántos alumnos hay en la clase?",
        pasos:[R`$C_F = 12$, $I_V = 0,40$ y la $x$ es el total`, R`$C_F = I_V \cdot C_I$ ⇒ $12 = 0,40 \cdot x$ ⇒ $x = \dfrac{12}{0,40} = 30$`], res:"En la clase hay <b>30 alumnos</b>."}},
      {nota:[R`Comprueba: $30 \cdot 0,40 = 12$ ✓`]}
    ]},
    { titulo:"Lo que busco es la $x$", cuerpo:[
      {html:despeje([R`C_F = I_V \cdot C_I`, R`Busco $C_I$: pongo una $x$`, R`C_F = I_V \cdot x`, R`$I_V$ está multiplicando: pasa dividiendo`, R`x = \dfrac{C_F}{I_V}`])},
      {nota:["<b>Tipo 2:</b> conozco lo que queda (o una parte) y el %. Busco el total: <b>divido</b> entre el índice."]},
      {truco:[{html:tri("I")}, "Tapa con el dedo lo que buscas: $C_I$ queda debajo de $C_F$, así que se divide."], etq:"🪄 Truco: el triángulo"}
    ]},
    { titulo:"Hacia atrás: la cantidad inicial", cuerpo:[
      {ej:{etq:"👕", enun:"En rebajas, con un 20 % de descuento, has pagado 48 € por una sudadera. ¿Cuánto costaba antes?",
        pasos:[R`$C_F = I_V \cdot C_I$ → $48 = 0,80 \cdot x \;\Rightarrow\; x = \dfrac{48}{0,80} = 60$ €`], res:"La sudadera costaba <b>60 €</b>."}},
      {aviso:[R`No sumes el 20 % a 48 €: el 20 % se calculó sobre el precio de <b>antes</b>. Se divide entre $I_V$.`]}
    ]},
    { titulo:"Hacia atrás con el IVA", cuerpo:[
      {ej:{etq:"📱", enun:"Un móvil cuesta 363 € con el 21 % de IVA. ¿Cuánto cuesta sin IVA?",
        pasos:[R`$C_F = I_V \cdot C_I$ → $363 = 1,21 \cdot x \;\Rightarrow\; x = \dfrac{363}{1,21} = 300$ €`], res:"El móvil cuesta <b>300 €</b> sin IVA."}},
      {aviso:["Restar el 21 % a 363 € está mal: se divide entre 1,21."]}
    ]},
    { titulo:"Dado el descuento o el IVA en euros", cuerpo:[
      {cols:[
        [{ej:{etq:"💸 Descuento", enun:"En unas rebajas del 15 % me he ahorrado 9 €. ¿Cuánto costaba?",
          pasos:[R`Lo que me ahorro es el 15 % del precio: $I_V = 0,15$`, R`$9 = 0,15 \cdot x$ ⇒ $x = \dfrac{9}{0,15} = 60$ €`], res:"Costaba <b>60 €</b> (y pago $60 \\cdot 0,85 = 51$ €)."}}],
        [{ej:{etq:"🧾 IVA", enun:"En una factura, el IVA del 21 % son 42 €. ¿Cuánto es la factura sin IVA?",
          pasos:[R`El IVA es el 21 % del precio sin IVA: $I_V = 0,21$`, R`$42 = 0,21 \cdot x$ ⇒ $x = \dfrac{42}{0,21} = 200$ €`], res:"Sin IVA, la factura es de <b>200 €</b>."}}]
      ]},
      {prop:[R`Si me dan <b>lo que pago</b>, $I_V = 0,85$ o $1,21$. Si me dan <b>el descuento o el IVA</b>, $I_V = 0,15$ o $0,21$.`]}
    ]},
    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:[R`<b>Para volver atrás, sumar o restar el porcentaje</b>: el % se calculó sobre el precio de antes. Se pone la $x$ en $C_I$ y se divide entre el índice.`], etq:"⚠️ Error 1"},
      {aviso:["<b>Confundir lo que pago con lo que me ahorro</b>: lee bien qué cantidad te dan."], etq:"⚠️ Error 2"},
      {aviso:[R`<b>Dividir al revés</b>: de $48 = 0,80 \cdot x$ sale $x = \dfrac{48}{0,80}$, no $\dfrac{0,80}{48}$.`], etq:"⚠️ Error 3"}
    ]},
    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[
        {formula:R`C_F = I_V \cdot x \;\Rightarrow\; x = \dfrac{C_F}{I_V}`},
        {lista:["Tipo 2: busco el total o el precio de antes: <b>divido</b>.",
                R`Dado el precio rebajado o con IVA: $I_V = 1 - $ el % o $1 + $ el %.`,
                R`Dado el descuento o el IVA en euros: $I_V$ = el % en decimal.`,
                "Encadenados: primero multiplico los índices y después divido."]}
      ]},
      {estudio:[
        {comp:{q:"12 alumnos son el 40 % de una clase. ¿Cuántos alumnos hay?", sol:30, unidad:"alumnos", explic:R`$12 = 0,40 \cdot x \Rightarrow x = 12 : 0,40 = 30$`, pista:"C_F = I_V · C_I: la x es el total."}},
        {comp:{q:"Tras una rebaja del 25 % pagas 30 €. ¿Cuánto costaba?", sol:40, unidad:"€", explic:R`$30 = 0,75 \cdot x \Rightarrow x = 30 : 0,75 = 40$ €`, pista:"I_V = 0,75: la x es el precio de antes."}},
        {comp:{q:"Con el 21 % de IVA pago 96,80 €. ¿Precio sin IVA?", sol:80, unidad:"€", explic:R`$96,80 = 1,21 \cdot x \Rightarrow x = 80$ €`, pista:"Divide entre 1,21."}},
        {comp:{q:"Me descuentan un 20 %, que son 7 €. ¿Cuánto costaba?", sol:35, unidad:"€", explic:R`$7 = 0,20 \cdot x \Rightarrow x = 35$ €`, pista:"Lo que me ahorro es el 20 % del precio."}}
      ]}
    ]}
  ]
});
})();

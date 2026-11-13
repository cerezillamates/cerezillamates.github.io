/* 3.º ESO · Tema 3 · Apartado 5.3: Porcentajes. Tipo 3: calcular el % dadas la cantidad inicial y la final
   C_F = x · C_I y se despeja x = C_F : C_I; si pasa de 1 sube, si no llega a 1 baja. */
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
  num: "5.3",
  titulo: "Porcentajes · Tipo 3: calcular el % dadas la cantidad inicial y la final",
  videos: [
    {t:"Porcentajes: subidas y bajadas encadenadas", url:"https://www.youtube.com/watch?v=ynSBIu_6zSE"}
  ],

  clase: [
    { nivel:"Aplicación", min:5,
      enun:"<b>a)</b> En un instituto de 840 alumnos, 126 hacen atletismo. ¿Qué porcentaje es?<br><b>b)</b> Un jersey costaba 45 € y ahora cuesta 36 €. ¿Qué porcentaje ha bajado?",
      pasos:[R`<b>a)</b> La $x$ es el índice: $126 = x \cdot 840$ ⇒ $x = \dfrac{126}{840} = 0,15$ → $15\,\%$`,
             R`<b>b)</b> $36 = x \cdot 45$ ⇒ $x = \dfrac{36}{45} = 0,80$`, R`Menor que 1: baja $1 - 0,80 = 0,20$ → $20\,\%$`],
      res:"a) Hace atletismo el <b>15 %</b> de los alumnos.<br>b) El jersey ha bajado un <b>20 %</b>." },
    { nivel:"Práctica", min:5,
      enun:"<b>a)</b> La población de un pueblo pasa de 2500 a 2350 habitantes. ¿Qué porcentaje ha variado?<br><b>b)</b> Una cuenta de una red social pasa de 800 a 1100 seguidores. ¿Qué porcentaje ha subido?",
      pasos:[R`<b>a)</b> $2350 = x \cdot 2500 \;\Rightarrow\; x = 0,94$ → baja $1 - 0,94 = 0,06$ → $6\,\%$`, R`<b>b)</b> $1100 = x \cdot 800 \;\Rightarrow\; x = 1,375$ → sube $0,375$ → $37,5\,\%$`],
      res:"a) La población ha bajado un <b>6 %</b>.<br>b) Los seguidores han subido un <b>37,5 %</b>." },
    { nivel:"Práctica", min:5,
      enun:"Un abrigo costaba 120 €. En rebajas cuesta 84 € y la etiqueta dice «−35 %». ¿Es verdad?",
      pasos:[R`La $x$ es el índice: $C_F = I_V \cdot C_I$ ⇒ $84 = x \cdot 120$`, R`$x = \dfrac{84}{120} = 0,70$`, R`Menor que 1: baja $1 - 0,70 = 0,30$ → $30\,\%$`],
      res:"<b>No</b> es verdad: la rebaja es del <b>30 %</b>, no del 35 %." },
    { nivel:"Problema", min:6,
      enun:"Un pantano de 2500 hm³ de capacidad tenía en mayo 1250 hm³ de agua y en septiembre tiene 1050 hm³.<br><b>a)</b> ¿Qué porcentaje ha bajado el agua?<br><b>b)</b> ¿A qué porcentaje de su capacidad estaba en mayo? ¿Y en septiembre?",
      pasos:[R`<b>a)</b> $1050 = x \cdot 1250$ ⇒ $x = \dfrac{1050}{1250} = 0,84$`, R`Menor que 1: baja $1 - 0,84 = 0,16$ → $16\,\%$`,
             R`<b>b)</b> Mayo: $1250 = x \cdot 2500$ ⇒ $x = 0,50$ → $50\,\%$`, R`Septiembre: $1050 = x \cdot 2500$ ⇒ $x = 0,42$ → $42\,\%$`],
      res:"a) El agua ha bajado un <b>16 %</b>.<br>b) En mayo estaba al <b>50 %</b> de su capacidad y en septiembre, al <b>42 %</b>." },
    { nivel:"Reto", min:7,
      enun:"Ana cobraba 1600 € al mes y ahora cobra 1720 €. Luis cobraba 2000 € y ahora cobra 2130 €. ¿A quién le han subido más el sueldo?",
      pasos:[R`Ana: $1720 = x \cdot 1600$ ⇒ $x = 1,075$ → sube $7,5\,\%$`, R`Luis: $2130 = x \cdot 2000$ ⇒ $x = 1,065$ → sube $6,5\,\%$`,
             R`En euros: a Ana le suben $1720 - 1600 = 120$ € y a Luis $2130 - 2000 = 130$ €`],
      res:"En euros le han subido más a <b>Luis</b> (130 €), pero en porcentaje le han subido más a <b>Ana</b> (un 7,5 % frente a un 6,5 %)." }
  ],

  casa: [
    { nivel:"Básico",
      enun:"El kilo de tomates ha pasado de 1,80 € a 2,07 €. ¿Ha subido o ha bajado? ¿Qué porcentaje?",
      pasos:[R`$2,07 = x \cdot 1,80$ ⇒ $x = \dfrac{2,07}{1,80} = 1,15$`, R`Mayor que 1: sube $1,15 - 1 = 0,15$ → $15\,\%$`],
      res:"El kilo de tomates ha <b>subido un 15 %</b>." },
    { nivel:"Básico",
      enun:"En un concurso, Ana acierta 34 de 40 preguntas y Luis 41 de 50. ¿Quién tiene mayor porcentaje de aciertos?",
      pasos:[R`Ana: $34 = x \cdot 40$ ⇒ $x = \dfrac{34}{40} = 0,85$ → $85\,\%$`, R`Luis: $41 = x \cdot 50$ ⇒ $x = \dfrac{41}{50} = 0,82$ → $82\,\%$`],
      res:"<b>Ana</b> tiene mayor porcentaje de aciertos: un 85 %, frente al 82 % de Luis." },
    { nivel:"Consolidación",
      enun:"En 2024 un instituto tenía 640 alumnos y en 2025 tiene 688. ¿Qué porcentaje ha aumentado?",
      pasos:[R`$688 = x \cdot 640$ ⇒ $x = \dfrac{688}{640} = 1,075$`, R`Mayor que 1: sube $1,075 - 1 = 0,075$ → $7,5\,\%$`],
      res:"El número de alumnos ha aumentado un <b>7,5 %</b>." },
    { nivel:"Consolidación",
      enun:"Un pueblo tenía 3200 habitantes. En 2024 bajó a 3040 y en 2025 subió a 3192.<br><b>a)</b> ¿Qué porcentaje varió cada año?<br><b>b)</b> ¿Y en los dos años juntos?",
      pasos:[R`<b>a)</b> 2024: $3040 = x \cdot 3200$ ⇒ $x = 0,95$ → baja un $5\,\%$`,
             R`2025: $3192 = x \cdot 3040$ ⇒ $x = 1,05$ → sube un $5\,\%$`,
             R`<b>b)</b> $3192 = x \cdot 3200$ ⇒ $x = 0,9975$ → baja $1 - 0,9975 = 0,0025$ → $0,25\,\%$`],
      res:"a) En 2024 bajó un <b>5 %</b> y en 2025 subió un <b>5 %</b>.<br>b) En los dos años la población bajó un <b>0,25 %</b>." },
    { nivel:"Problema",
      enun:"El litro de gasolina ha pasado de 1,60 € a 1,48 €.<br><b>a)</b> ¿Qué porcentaje ha bajado?<br><b>b)</b> ¿Cuánto me ahorro al llenar un depósito de 50 litros?",
      pasos:[R`<b>a)</b> $1,48 = x \cdot 1,60$ ⇒ $x = \dfrac{1,48}{1,60} = 0,925$`, R`Menor que 1: baja $1 - 0,925 = 0,075$ → $7,5\,\%$`,
             R`<b>b)</b> Antes: $50 \cdot 1,60 = 80$ €. Ahora: $50 \cdot 1,48 = 74$ €`, R`Ahorro: $80 - 74 = 6$ €`],
      res:"a) La gasolina ha bajado un <b>7,5 %</b>.<br>b) Me ahorro <b>6 €</b> al llenar el depósito." },
    { nivel:"Para pensar",
      enun:"Si un precio pasa de 50 € a 100 €, sube un 100 %. Si pasa de 100 € a 50 €, ¿baja un 100 %?",
      pasos:[R`De 50 a 100: $100 = x \cdot 50$ ⇒ $x = 2$ → sube $2 - 1 = 1$ → $100\,\%$`, R`De 100 a 50: $50 = x \cdot 100$ ⇒ $x = 0,50$ → baja $1 - 0,50 = 0,50$ → $50\,\%$`, "Bajar un 100 % sería quedarse en 0 €."],
      res:"<b>No</b>: de 100 € a 50 € baja un <b>50 %</b>." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">Sé lo que había y lo que hay: ¿cuánto ha cambiado?</p>`}
    ]},
    { titulo:"⚽ Busco el porcentaje", cuerpo:[
      {ej:{enun:"9 de los 36 alumnos juegan al fútbol. ¿Qué porcentaje es?",
        pasos:[R`$C_I = 36$, $C_F = 9$ y la $x$ es el porcentaje`, R`$C_F = I_V \cdot C_I$ → $9 = x \cdot 36 \;\Rightarrow\; x = \dfrac{9}{36} = 0,25$`], res:"El <b>25 %</b> de los alumnos juega al fútbol."}},
      {aviso:["No te quedes en 0,25: el resultado se da en <b>porcentaje</b> (25 %)."]}
    ]},
    { titulo:"Lo que busco es la $x$: el índice", cuerpo:[
      {html:despeje([R`C_F = I_V \cdot C_I`, R`Busco $I_V$: pongo una $x$`, R`C_F = x \cdot C_I`, R`$C_I$ está multiplicando: pasa dividiendo`, R`x = \dfrac{C_F}{C_I}`])},
      {nota:["<b>Tipo 3:</b> conozco lo que había y lo que hay. Busco el porcentaje: <b>divido</b> lo final entre lo inicial."]},
      {truco:[{html:tri("V")}, "Tapa con el dedo lo que buscas: $I_V$ queda debajo de $C_F$, así que se divide."], etq:"🪄 Truco: el triángulo"}
    ]},
    { titulo:"¿Cuánto ha subido o bajado?", cuerpo:[
      {cols:[
        [{ej:{etq:"🎮 Sube", enun:"Un videojuego costaba 40 € y ahora cuesta 46 €.",
          pasos:[R`$C_F = I_V \cdot C_I$ → $46 = x \cdot 40 \;\Rightarrow\; x = \dfrac{46}{40} = 1,15$`, R`Mayor que 1: sube $1,15 - 1 = 0,15$ → $15\,\%$`], res:"El videojuego ha subido un <b>15 %</b>."}}],
        [{ej:{etq:"🚲 Baja", enun:"Una bici de 500 € se vende por 325 €.",
          pasos:[R`$C_F = I_V \cdot C_I$ → $325 = x \cdot 500 \;\Rightarrow\; x = \dfrac{325}{500} = 0,65$`, R`Menor que 1: baja $1 - 0,65 = 0,35$ → $35\,\%$`], res:"La bici ha bajado un <b>35 %</b>."}}]
      ]},
      {nota:[R`Si $I_V$ es mayor que 1, sube lo que pasa de 1 ($1,15$ → 15 %). Si es menor que 1, baja lo que le falta ($0,65$ → 35 %).`]},
      {nota:["🛒 El IPC hace esto con la cesta de la compra: si pasa de 400 € a 420 €, 420 : 400 = 1,05 → los precios han subido un 5 %."]}
    ]},
    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:["No te quedes en 0,15: el resultado se da en <b>porcentaje</b> (15 %)."], etq:"⚠️ Error 1"},
      {aviso:[R`<b>Dividir al revés</b>: en $C_F = x \cdot C_I$ se despeja $x = \dfrac{C_F}{C_I}$ (lo de ahora entre lo de antes).`], etq:"⚠️ Error 2"},
      {aviso:[R`<b>Dar el índice como porcentaje</b>: $1,15$ es una subida del 15 %, no del 115 %; $0,65$ es una bajada del 35 %.`], etq:"⚠️ Error 3"}
    ]},
    { titulo:"📝 Resumen de los tres tipos", cuerpo:[
      {html:R`<table class="t tprop"><tr><th></th><th>Conozco</th><th>Pongo la $x$ en</th><th>Hago</th></tr><tr><th>Tipo 1</th><td>$C_I$ y el %</td><td>$C_F$</td><td>multiplico</td></tr><tr><th>Tipo 2</th><td>$C_F$ y el %</td><td>$C_I$</td><td>divido entre $I_V$</td></tr><tr><th>Tipo 3</th><td>$C_I$ y $C_F$</td><td>$I_V$</td><td>divido $C_F$ entre $C_I$</td></tr></table>`},
      {resumen:[{formula:R`C_F = I_V \cdot C_I`}, R`Si el índice pasa de 1 sube lo que pasa; si no llega a 1 baja lo que le falta.`]},
      {estudio:[
        {comp:{q:"9 de 36 alumnos juegan al fútbol. ¿Qué porcentaje es?", sol:25, unidad:"%", explic:R`$9 = x \cdot 36 \Rightarrow x = 0,25$ → 25 %`, pista:"x = C_F : C_I"}},
        {comp:{q:"Un precio pasa de 60 € a 69 €. ¿Qué porcentaje sube?", sol:15, unidad:"%", explic:R`$69 = x \cdot 60 \Rightarrow x = 1,15$ → sube un 15 %`, pista:"Divide lo de ahora entre lo de antes."}},
        {comp:{q:"Un precio pasa de 250 € a 200 €. ¿Qué porcentaje baja?", sol:20, unidad:"%", explic:R`$200 = x \cdot 250 \Rightarrow x = 0,80$ → baja un 20 %`, pista:"Lo que le falta al índice para llegar a 1."}}
      ]}
    ]}
  ]
});
})();

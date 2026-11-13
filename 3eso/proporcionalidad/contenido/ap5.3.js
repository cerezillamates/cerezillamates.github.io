/* 3.º ESO · Tema 3 · Apartado 5.3: Porcentajes. Tipo 3: calcular el % dadas la cantidad inicial y la final
   C_F = C_I · x y se despeja x = C_F : C_I; si pasa de 1 sube, si no llega a 1 baja. */
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
  num: "5.3",
  titulo: "Porcentajes · Tipo 3: calcular el % dadas la cantidad inicial y la final",
  videos: [
    {t:"Porcentajes: subidas y bajadas encadenadas", url:"https://www.youtube.com/watch?v=ynSBIu_6zSE"}
  ],

  clase: [
    { nivel:"Aplicación", min:5,
      enun:"<b>a)</b> En un instituto de 840 alumnos, 126 hacen atletismo. ¿Qué porcentaje es?<br><b>b)</b> Un jersey costaba 45 € y ahora cuesta 36 €. ¿Qué porcentaje ha bajado?",
      pasos:[R`<b>a)</b> La $x$ es el índice: $126 = 840 \cdot x$ ⇒ $x = \dfrac{126}{840} = 0,15$ → $15\,\%$`,
             R`<b>b)</b> $36 = 45 \cdot x$ ⇒ $x = \dfrac{36}{45} = 0,80$`, R`Menor que 1: baja $1 - 0,80 = 0,20$ → $20\,\%$`],
      res:"a) Hace atletismo el <b>15 %</b> de los alumnos.<br>b) El jersey ha bajado un <b>20 %</b>." },
    { nivel:"Práctica", min:5,
      enun:"<b>a)</b> La población de un pueblo pasa de 2500 a 2350 habitantes. ¿Qué porcentaje ha variado?<br><b>b)</b> Una cuenta de una red social pasa de 800 a 1100 seguidores. ¿Qué porcentaje ha subido?",
      pasos:[R`<b>a)</b> $2350 = 2500 \cdot x \;\Rightarrow\; x = 0,94$ → baja $1 - 0,94 = 0,06$ → $6\,\%$`, R`<b>b)</b> $1100 = 800 \cdot x \;\Rightarrow\; x = 1,375$ → sube $0,375$ → $37,5\,\%$`],
      res:"a) La población ha bajado un <b>6 %</b>.<br>b) Los seguidores han subido un <b>37,5 %</b>." },
    { nivel:"Práctica", min:6,
      enun:"En un campamento de verano hay 120 participantes. En julio el número aumenta un 25 %. En agosto algunos se marchan y vuelven a quedar 120. ¿Qué porcentaje de los participantes de julio se ha marchado?",
      pasos:[R`Julio: sube un 25 %, $I_V = 1 + 0,25 = 1,25$ → $C_F = 120 \cdot 1,25 = 150$ participantes`,
             R`Agosto: de 150 pasan a 120 → $120 = 150 \cdot x \;\Rightarrow\; x = \dfrac{120}{150} = 0,80$`,
             R`Se han marchado: $1 - 0,80 = 0,20$ → $20\,\%$`,
             "¡No es el 25 %! El porcentaje de agosto se calcula sobre 150, no sobre 120."],
      res:"Se ha marchado el <b>20 %</b> de los participantes de julio." },
    { nivel:"Problema", min:6,
      enun:"Unos auriculares de 200 € suben un 10 % y después bajan un 25 %.<br><b>a)</b> ¿Cuánto cuestan al final?<br><b>b)</b> ¿Qué porcentaje han variado en total?",
      pasos:[R`Índices: $1,10$ y $0,75$ ⇒ $I_V = 1,10 \cdot 0,75 = 0,825$`,
             R`<b>a)</b> $C_F = 200 \cdot 0,825 = 165$ €`,
             R`<b>b)</b> $165 = 200 \cdot x$ ⇒ $x = \dfrac{165}{200} = 0,825$`, R`Menor que 1: baja $1 - 0,825 = 0,175$ → $17,5\,\%$ (no un 15 %)`],
      res:"a) Al final los auriculares cuestan <b>165 €</b>.<br>b) En total han bajado un <b>17,5 %</b>." },
    { nivel:"Reto", min:8,
      enun:"Necesitas 3 botes de champú que cuestan 4 € cada uno. ¿Dónde pagas menos?<br><b>Tienda A:</b> oferta 3x2.<br><b>Tienda B:</b> 2.ª unidad al 50 % (la oferta solo vale para 2 botes).<br><b>Tienda C:</b> 30 % de descuento en todo.",
      pasos:["<b>A:</b> te llevas 3 y pagas 2 → 2 · 4 = <b>8 €</b>",
             "<b>B:</b> 4 + 2 (al 50 %) + 4 (el tercero, sin oferta) = <b>10 €</b>",
             R`<b>C:</b> $12 \cdot 0,70 = $ <b>8,40 €</b>`,
             R`El 3x2 es un descuento del $33,3\,\%$ (pagas $\dfrac{2}{3}$): es la mejor oferta.`],
      res:"Pagas menos en la <b>tienda A</b>: <b>8 €</b>." }
  ],

  casa: [
    { nivel:"Básico",
      enun:"El kilo de tomates ha pasado de 1,80 € a 2,07 €. ¿Ha subido o ha bajado? ¿Qué porcentaje?",
      pasos:[R`$2,07 = 1,80 \cdot x$ ⇒ $x = \dfrac{2,07}{1,80} = 1,15$`, R`Mayor que 1: sube $1,15 - 1 = 0,15$ → $15\,\%$`],
      res:"El kilo de tomates ha <b>subido un 15 %</b>." },
    { nivel:"Básico",
      enun:"En un concurso, Ana acierta 34 de 40 preguntas y Luis 41 de 50. ¿Quién tiene mayor porcentaje de aciertos?",
      pasos:[R`Ana: $34 = 40 \cdot x$ ⇒ $x = \dfrac{34}{40} = 0,85$ → $85\,\%$`, R`Luis: $41 = 50 \cdot x$ ⇒ $x = \dfrac{41}{50} = 0,82$ → $82\,\%$`],
      res:"<b>Ana</b> tiene mayor porcentaje de aciertos: un 85 %, frente al 82 % de Luis." },
    { nivel:"Consolidación",
      enun:"Un pueblo tenía 3200 habitantes. En 2024 bajó a 3040 y en 2025 subió a 3192.<br><b>a)</b> ¿Qué porcentaje varió cada año?<br><b>b)</b> ¿Y en los dos años juntos?",
      pasos:[R`<b>a)</b> 2024: $3040 = 3200 \cdot x$ ⇒ $x = 0,95$ → baja un $5\,\%$`,
             R`2025: $3192 = 3040 \cdot x$ ⇒ $x = 1,05$ → sube un $5\,\%$`,
             R`<b>b)</b> $3192 = 3200 \cdot x$ ⇒ $x = 0,9975$ → baja $1 - 0,9975 = 0,0025$ → $0,25\,\%$`],
      res:"a) En 2024 bajó un <b>5 %</b> y en 2025 subió un <b>5 %</b>.<br>b) En los dos años la población bajó un <b>0,25 %</b>." },
    { nivel:"Básico",
      enun:"El agua de un pantano baja un 20 % en julio y un 15 % en agosto. ¿Qué porcentaje ha bajado en total? (¡No es el 35 %!)",
      pasos:[R`Índices: $0,80$ y $0,85$`, R`Índice total: $0,80 \cdot 0,85 = 0,68$`, R`Ha bajado $1 - 0,68 = 0,32$ → $32\,\%$`],
      res:"En total el agua del pantano ha bajado un <b>32 %</b>." },
    { nivel:"Problema",
      enun:"<b>a)</b> ¿Qué porcentaje de descuento es la oferta «4x3» (te llevas 4 y pagas 3)?<br><b>b)</b> ¿Y «la 3.ª unidad a mitad de precio», si compras 3?<br><b>c)</b> ¿Cuál es mejor oferta?",
      pasos:[R`<b>a)</b> Pago 3 de 4: $3 = 4 \cdot x$ ⇒ $x = 0,75$ → baja $1 - 0,75 = 0,25$ → $25\,\%$`,
             R`<b>b)</b> Pago $1 + 1 + 0,5 = 2,5$ de 3: $2,5 = 3 \cdot x$ ⇒ $x \approx 0,8333$ → baja $\approx 0,1667$ → $16,67\,\%$`,
             "<b>c)</b> Es mejor la que tiene más descuento."],
      res:"a) El 4x3 es un descuento del <b>25 %</b>.<br>b) La 3.ª a mitad de precio es un descuento de un <b>16,67 %</b>.<br>c) Es mejor oferta el <b>4x3</b>." },
    { nivel:"Problema",
      enun:"Una camiseta costaba 25 €. La subieron de precio y después, en rebajas, la bajaron un 20 %. Ahora cuesta 24 €. ¿Qué porcentaje la habían subido?",
      pasos:[R`Lo primero, el precio antes de las rebajas (tipo 2): $24 = x \cdot 0,80$ ⇒ $x = \dfrac{24}{0,80} = 30$ €`,
             R`De 25 € a 30 € (tipo 3): $30 = 25 \cdot x$ ⇒ $x = \dfrac{30}{25} = 1,20$`, R`Mayor que 1: sube $0,20$ → $20\,\%$`],
      res:"La camiseta la habían subido un <b>20 %</b>." },
    { nivel:"Para pensar",
      enun:"<b>a)</b> Si un precio sube un 20 % y después baja un 20 %, ¿vuelve a ser el mismo?<br><b>b)</b> Un precio ha subido un 25 %. ¿Qué rebaja hay que hacer para que vuelva al precio de antes?",
      pasos:[R`<b>a)</b> $1,20 \cdot 0,80 = 0,96$ → baja un $4\,\%$: <b>no</b> vuelve al mismo. El 20 % de bajada se calcula sobre un precio mayor.`,
             R`<b>b)</b> Busco el índice que deshace el 1,25: $1,25 \cdot x = 1$ ⇒ $x = \dfrac{1}{1,25} = 0,80$ → rebaja del $20\,\%$`,
             R`Comprueba con 100 €: sube a 125 € y $125 \cdot 0,80 = 100$ € ✓`],
      res:"a) <b>No</b> vuelve a ser el mismo: baja un <b>4 %</b>.<br>b) Hay que hacer una rebaja del <b>20 %</b>." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">Sé lo que había y lo que hay: ¿cuánto ha cambiado?</p>`}
    ]},
    { titulo:"⚽ Busco el porcentaje", cuerpo:[
      {ej:{enun:"9 de los 36 alumnos juegan al fútbol. ¿Qué porcentaje es?",
        pasos:[R`$C_I = 36$, $C_F = 9$ y la $x$ es el porcentaje`, R`$C_F = C_I \cdot I_V$ → $9 = 36 \cdot x \;\Rightarrow\; x = \dfrac{9}{36} = 0,25$`], res:"El <b>25 %</b> de los alumnos juega al fútbol."}},
      {aviso:["No te quedes en 0,25: el resultado se da en <b>porcentaje</b> (25 %)."]}
    ]},
    { titulo:"Lo que busco es la $x$: el índice", cuerpo:[
      {html:R`<div class="cfiv desp"><div>Siempre la misma fórmula: <b>$C_F = C_I \cdot I_V$</b></div><div>Pongo una <b>$x$</b> en lo que busco ($I_V$)</div><div>y <b>despejo</b>: $x = \dfrac{C_F}{C_I}$</div></div>`},
      {nota:["<b>Tipo 3:</b> conozco lo que había y lo que hay. Busco el porcentaje: <b>divido</b> lo final entre lo inicial."]},
      {truco:[{html:tri("V")}, "Tapa con el dedo lo que buscas: $I_V$ queda debajo de $C_F$, así que se divide."], etq:"🪄 Truco: el triángulo"}
    ]},
    { titulo:"¿Cuánto ha subido o bajado?", cuerpo:[
      {cols:[
        [{ej:{etq:"🎮 Sube", enun:"Un videojuego costaba 40 € y ahora cuesta 46 €.",
          pasos:[R`$C_F = C_I \cdot I_V$ → $46 = 40 \cdot x \;\Rightarrow\; x = \dfrac{46}{40} = 1,15$`, R`Mayor que 1: sube $1,15 - 1 = 0,15$ → $15\,\%$`], res:"El videojuego ha subido un <b>15 %</b>."}}],
        [{ej:{etq:"🚲 Baja", enun:"Una bici de 500 € se vende por 325 €.",
          pasos:[R`$C_F = C_I \cdot I_V$ → $325 = 500 \cdot x \;\Rightarrow\; x = \dfrac{325}{500} = 0,65$`, R`Menor que 1: baja $1 - 0,65 = 0,35$ → $35\,\%$`], res:"La bici ha bajado un <b>35 %</b>."}}]
      ]},
      {nota:[R`Si $I_V$ es mayor que 1, sube lo que pasa de 1 ($1,15$ → 15 %). Si es menor que 1, baja lo que le falta ($0,65$ → 35 %).`]},
      {nota:["🛒 El IPC hace esto con la cesta de la compra: si pasa de 400 € a 420 €, 420 : 400 = 1,05 → los precios han subido un 5 %."]}
    ]},
    { titulo:"La variación de varios cambios", cuerpo:[
      {ej:{etq:"🎒", enun:"Una mochila sube un 20 % y después la rebajan un 25 %. ¿Cuánto ha cambiado en total?",
        pasos:[R`Índice total: $I_V = 1,20 \cdot 0,75 = 0,90$`, R`Menor que 1: baja $1 - 0,90 = 0,10$ → $10\,\%$`],
        res:"En total la mochila ha <b>bajado un 10 %</b>."}},
      {aviso:["<b>Los porcentajes NO se suman</b>: subir un 20 % y bajar un 25 % no es bajar un 5 %."]}
    ]},
    { titulo:"🏷 ¿Cuánto descuento es de verdad una oferta?", cuerpo:[
      {cols:[
        [{ej:{etq:"3x2", enun:"Te llevas 3 y pagas 2.", pasos:[R`$2 = 3 \cdot x \;\Rightarrow\; x = \dfrac{2}{3} \approx 0,667$ → baja $1 - 0,667 = 0,333$`], res:"Llevarte 3 y pagar 2 es un descuento del <b>33,3 %</b>."}}],
        [{ej:{etq:"2.ª unidad al 50 %", enun:"Compras 2 y la segunda va a mitad de precio.", pasos:[R`$1,5 = 2 \cdot x \;\Rightarrow\; x = \dfrac{1,5}{2} = 0,75$ → baja $1 - 0,75 = 0,25$`], res:"La segunda a mitad de precio es un descuento del <b>25 %</b> (¡no del 50 %!)."}}]
      ]},
      {nota:["Para comparar ofertas, calcula qué parte pagas de lo que te llevas: ese es el índice."]}
    ]},
    { titulo:"🛒 Compras inteligentes: el precio unitario", cuerpo:[
      {def:[{formula:R`\text{precio unitario} = \text{precio} : \text{cantidad}`}], etq:"Precio unitario"},
      {ej:{etq:"🫒", enun:"Aceite: botella de 1 L a 9,20 € o garrafa de 5 L a 43 €. ¿Qué sale más barato?",
        pasos:["Botella: 9,20 €/L", R`Garrafa: $43 : 5 = 8,60$ €/L`], res:"Sale más barata <b>la garrafa</b>."}},
      {nota:["Consumo responsable: lo más barato por litro no siempre es lo mejor si se va a estropear o no lo necesitas."]}
    ]},
    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:["No te quedes en 0,15: el resultado se da en <b>porcentaje</b> (15 %)."], etq:"⚠️ Error 1"},
      {aviso:[R`<b>Dividir al revés</b>: en $C_F = C_I \cdot x$ se despeja $x = \dfrac{C_F}{C_I}$ (lo de ahora entre lo de antes).`], etq:"⚠️ Error 2"},
      {aviso:[R`<b>Dar el índice como porcentaje</b>: $1,15$ es una subida del 15 %, no del 115 %; $0,65$ es una bajada del 35 %.`], etq:"⚠️ Error 3"}
    ]},
    { titulo:"📝 Resumen de los tres tipos", cuerpo:[
      {html:R`<table class="t tprop"><tr><th></th><th>Conozco</th><th>Pongo la $x$ en</th><th>Hago</th></tr><tr><th>Tipo 1</th><td>$C_I$ y el %</td><td>$C_F$</td><td>multiplico</td></tr><tr><th>Tipo 2</th><td>$C_F$ y el %</td><td>$C_I$</td><td>divido entre $I_V$</td></tr><tr><th>Tipo 3</th><td>$C_I$ y $C_F$</td><td>$I_V$</td><td>divido $C_F$ entre $C_I$</td></tr></table>`},
      {resumen:[{formula:R`C_F = C_I \cdot I_V`}, R`Si el índice pasa de 1 sube lo que pasa; si no llega a 1 baja lo que le falta.`]},
      {estudio:[
        {comp:{q:"9 de 36 alumnos juegan al fútbol. ¿Qué porcentaje es?", sol:25, unidad:"%", explic:R`$9 = 36 \cdot x \Rightarrow x = 0,25$ → 25 %`, pista:"x = C_F : C_I"}},
        {comp:{q:"Un precio pasa de 60 € a 69 €. ¿Qué porcentaje sube?", sol:15, unidad:"%", explic:R`$69 = 60 \cdot x \Rightarrow x = 1,15$ → sube un 15 %`, pista:"Divide lo de ahora entre lo de antes."}},
        {comp:{q:"Un precio pasa de 250 € a 200 €. ¿Qué porcentaje baja?", sol:20, unidad:"%", explic:R`$200 = 250 \cdot x \Rightarrow x = 0,80$ → baja un 20 %`, pista:"Lo que le falta al índice para llegar a 1."}}
      ]}
    ]}
  ]
});
})();

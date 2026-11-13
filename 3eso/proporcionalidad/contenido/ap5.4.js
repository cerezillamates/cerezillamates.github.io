/* 3.º ESO · Tema 3 · Apartado 5.4: Porcentajes encadenados y ofertas. Se multiplican los índices; con el índice total, C_F = I_V · C_I (tipo 1, 2 o 3). */
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
  num: "5.4",
  titulo: "Porcentajes · Encadenados y ofertas",
  videos: [
    {t:"Porcentajes: subidas y bajadas encadenadas", url:"https://www.youtube.com/watch?v=ynSBIu_6zSE"}
  ],

  clase: [
    { nivel:"Aplicación", min:6,
      enun:"Una tienda compra una bici por 240 €. Quiere ganar un 35 % y, además, al venderla tiene que cobrar el 21 % de IVA. ¿A qué precio vende la bici?",
      pasos:[R`Ganar un 35 %: $I_V = 1 + 0,35 = 1,35$`, R`IVA del 21 %: $I_V = 1 + 0,21 = 1,21$`,
             R`Índice total: $I_V = 1,35 \cdot 1,21 = 1,6335$`,
             R`$C_F = I_V \cdot C_I = 240 \cdot 1,6335 = 392,04$ €`,
             R`Comprueba: $240 \cdot 1,35 = 324$ ⇒ $324 \cdot 1,21 = 392,04$ ✓`],
      res:"La tienda vende la bici a <b>392,04 €</b>." },
    { nivel:"Práctica", min:7,
      enun:"Unas zapatillas cuestan 89,90 €. En enero tienen un 30 % de descuento y en febrero, sobre el precio rebajado, otro 20 %.<br><b>a)</b> ¿Cuánto cuestan en febrero?<br><b>b)</b> Marta dice que es lo mismo que un 50 % de descuento. ¿Tiene razón?",
      pasos:[R`Enero, baja un 30 %: $I_V = 1 - 0,30 = 0,70$`, R`Febrero, baja un 20 %: $I_V = 1 - 0,20 = 0,80$`,
             R`Índice total: $I_V = 0,70 \cdot 0,80 = 0,56$`,
             R`<b>a)</b> $C_F = 0,56 \cdot 89,90 = 50,344 \approx 50,34$ €`,
             R`<b>b)</b> Con un 50 %: $C_F = 0,50 \cdot 89,90 = 44,95$ €. No es lo mismo`,
             R`El índice $0,56$ es una rebaja de $1 - 0,56 = 0,44$ → $44\,\%$`],
      res:"a) En febrero las zapatillas cuestan <b>50,34 €</b>.<br>b) Marta <b>no</b> tiene razón: las dos rebajas equivalen a un <b>44 %</b>, no a un 50 %." },
    { nivel:"Práctica", min:6,
      enun:"En un campamento de verano hay 120 participantes. En julio el número aumenta un 25 %. En agosto algunos se marchan y vuelven a quedar 120. ¿Qué porcentaje de los participantes de julio se ha marchado?",
      pasos:[R`Julio: sube un 25 %, $I_V = 1 + 0,25 = 1,25$ → $C_F = 1,25 \cdot 120 = 150$ participantes`,
             R`Agosto: de 150 pasan a 120 → $120 = x \cdot 150 \;\Rightarrow\; x = \dfrac{120}{150} = 0,80$`,
             R`Se han marchado: $1 - 0,80 = 0,20$ → $20\,\%$`,
             "¡No es el 25 %! El porcentaje de agosto se calcula sobre 150, no sobre 120."],
      res:"Se ha marchado el <b>20 %</b> de los participantes de julio." },
    { nivel:"Problema", min:7,
      enun:"Los ingresos de una tienda suben un 20 % en octubre y un 30 % en noviembre, y bajan un 25 % en diciembre. En diciembre ingresa 14&nbsp;040 €.<br><b>a)</b> ¿Cuánto ingresaba en septiembre?<br><b>b)</b> ¿Cuánto ingresó en octubre?",
      pasos:[R`Octubre, sube un 20 %: $I_V = 1 + 0,20 = 1,20$`, R`Noviembre, sube un 30 %: $I_V = 1 + 0,30 = 1,30$`, R`Diciembre, baja un 25 %: $I_V = 1 - 0,25 = 0,75$`,
             R`Índice total: $I_V = 1,20 \cdot 1,30 \cdot 0,75 = 1,17$`,
             R`<b>a)</b> $14\,040 = 1,17 \cdot x$ ⇒ $x = \dfrac{14\,040}{1,17} = 12\,000$ €`,
             R`<b>b)</b> $C_F = 1,20 \cdot 12\,000 = 14\,400$ €`],
      res:"a) En septiembre ingresaba <b>12&nbsp;000 €</b>.<br>b) En octubre ingresó <b>14&nbsp;400 €</b>." },
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
      enun:"El agua de un pantano baja un 20 % en julio y un 15 % en agosto. ¿Qué porcentaje ha bajado en total? (¡No es el 35 %!)",
      pasos:[R`Julio, baja un 20 %: $I_V = 1 - 0,20 = 0,80$`, R`Agosto, baja un 15 %: $I_V = 1 - 0,15 = 0,85$`, R`Índice total: $0,80 \cdot 0,85 = 0,68$`, R`Ha bajado $1 - 0,68 = 0,32$ → $32\,\%$`],
      res:"En total el agua del pantano ha bajado un <b>32 %</b>." },
    { nivel:"Básico",
      enun:"Un coche nuevo cuesta 18&nbsp;500 € y pierde un 15 % de su valor cada año. ¿Cuánto valdrá dentro de 2 años?",
      pasos:[R`Cada año baja: $I_V = 1 - 0,15 = 0,85$`, R`Dos años: $I_V = 0,85 \cdot 0,85 = 0,7225$`, R`$C_F = 0,7225 \cdot 18\,500 = 13\,366,25$ €`],
      res:"Dentro de 2 años el coche valdrá <b>13&nbsp;366,25 €</b>." },
    { nivel:"Consolidación",
      enun:"En el taller cobran 160 € de piezas y 2,5 horas de trabajo a 38 € la hora. Por ser cliente nos hacen un 10 % de descuento y después añaden el 21 % de IVA. ¿Cuánto pagamos?",
      pasos:[R`Lo primero, cuánto cuesta el arreglo: $2,5 \cdot 38 = 95$ € ⇒ $160 + 95 = 255$ €`,
             R`Descuento del 10 %: $I_V = 1 - 0,10 = 0,90$`, R`IVA del 21 %: $I_V = 1 + 0,21 = 1,21$`, R`Índice total: $I_V = 0,90 \cdot 1,21 = 1,089$`,
             R`$C_F = 1,089 \cdot 255 = 277,695 \approx 277,70$ €`],
      res:"Pagamos <b>277,70 €</b> en el taller." },
    { nivel:"Consolidación",
      enun:"Tras dos subidas seguidas del 10 %, el abono de transporte cuesta 48,40 €. ¿Cuánto costaba al principio?",
      pasos:[R`Índice total: $I_V = 1,10 \cdot 1,10 = 1,21$`, R`$48,40 = 1,21 \cdot x$ ⇒ $x = \dfrac{48,40}{1,21} = 40$ €`, "¡No se resta un 20 % a 48,40 €!"],
      res:"Al principio el abono costaba <b>40 €</b>." },
    { nivel:"Consolidación", min:6,
      enun:"Unos auriculares de 200 € suben un 10 % y después bajan un 25 %.<br><b>a)</b> ¿Cuánto cuestan al final?<br><b>b)</b> ¿Qué porcentaje han variado en total?",
      pasos:[R`Sube un 10 %: $I_V = 1 + 0,10 = 1,10$`, R`Baja un 25 %: $I_V = 1 - 0,25 = 0,75$`, R`Índice total: $I_V = 1,10 \cdot 0,75 = 0,825$`,
             R`<b>a)</b> $C_F = 0,825 \cdot 200 = 165$ €`,
             R`<b>b)</b> $165 = x \cdot 200$ ⇒ $x = \dfrac{165}{200} = 0,825$`, R`Menor que 1: baja $1 - 0,825 = 0,175$ → $17,5\,\%$ (no un 15 %)`],
      res:"a) Al final los auriculares cuestan <b>165 €</b>.<br>b) En total han bajado un <b>17,5 %</b>." },
    { nivel:"Problema",
      enun:"Los espectadores de una serie suben un 23 % en octubre y bajan un 18 % en noviembre. En noviembre la ven 2&nbsp;017&nbsp;200 personas. ¿Cuántas la veían en septiembre?",
      pasos:[R`Octubre, sube un 23 %: $I_V = 1 + 0,23 = 1,23$`, R`Noviembre, baja un 18 %: $I_V = 1 - 0,18 = 0,82$`, R`Índice total: $I_V = 1,23 \cdot 0,82 = 1,0086$`, R`Hacia atrás: $2\,017\,200 = 1,0086 \cdot x \;\Rightarrow\; x = \dfrac{2\,017\,200}{1,0086} = 2\,000\,000$`],
      res:"En septiembre veían la serie <b>2&nbsp;000&nbsp;000</b> de personas." },
    { nivel:"Problema",
      enun:"Lucía gana un premio. Hacienda se queda el 20 % y, de lo que le queda, Lucía dona un 10 % a una ONG. Entre Hacienda y la ONG se han ido 5600 €.<br><b>a)</b> ¿Cuánto era el premio?<br><b>b)</b> ¿Cuánto dinero le queda a Lucía?",
      pasos:[R`Le queda después de las dos cosas: $I_V = 0,80 \cdot 0,90 = 0,72$`,
             R`Lo que se ha ido: $1 - 0,72 = 0,28$ del premio → $I_V = 0,28$`,
             R`<b>a)</b> $5600 = 0,28 \cdot x \;\Rightarrow\; x = \dfrac{5600}{0,28} = 20\,000$ €`,
             R`<b>b)</b> $C_F = 0,72 \cdot 20\,000 = 14\,400$ €`,
             R`Compruebo: $20\,000 - 14\,400 = 5600$ ✓`],
      res:"a) El premio era de <b>20&nbsp;000 €</b>.<br>b) A Lucía le quedan <b>14&nbsp;400 €</b>." },
    { nivel:"Problema",
      enun:"Una camiseta costaba 25 €. La subieron de precio y después, en rebajas, la bajaron un 20 %. Ahora cuesta 24 €. ¿Qué porcentaje la habían subido?",
      pasos:[R`Lo primero, el precio antes de las rebajas (tipo 2): $24 = 0,80 \cdot x$ ⇒ $x = \dfrac{24}{0,80} = 30$ €`,
             R`De 25 € a 30 € (tipo 3): $30 = x \cdot 25$ ⇒ $x = \dfrac{30}{25} = 1,20$`, R`Mayor que 1: sube $0,20$ → $20\,\%$`],
      res:"La camiseta la habían subido un <b>20 %</b>." },
    { nivel:"Problema",
      enun:"<b>a)</b> ¿Qué porcentaje de descuento es la oferta «4x3» (te llevas 4 y pagas 3)?<br><b>b)</b> ¿Y «la 3.ª unidad a mitad de precio», si compras 3?<br><b>c)</b> ¿Cuál es mejor oferta?",
      pasos:[R`<b>a)</b> Pago 3 de 4: $3 = x \cdot 4$ ⇒ $x = 0,75$ → baja $1 - 0,75 = 0,25$ → $25\,\%$`,
             R`<b>b)</b> Pago $1 + 1 + 0,5 = 2,5$ de 3: $2,5 = x \cdot 3$ ⇒ $x \approx 0,8333$ → baja $\approx 0,1667$ → $16,67\,\%$`,
             "<b>c)</b> Es mejor la que tiene más descuento."],
      res:"a) El 4x3 es un descuento del <b>25 %</b>.<br>b) La 3.ª a mitad de precio es un descuento de un <b>16,67 %</b>.<br>c) Es mejor oferta el <b>4x3</b>." },
    { nivel:"Problema", min:8,
      enun:"Una ciudad tiene 85&nbsp;000 habitantes y su población crece un 4 % cada año.<br><b>a)</b> ¿Cuántos habitantes tendrá dentro de 3 años?<br><b>b)</b> ¿Es lo mismo que crecer un 12 % de golpe?",
      pasos:[R`Cada año: $I_V = 1 + 0,04 = 1,04$`,
             R`Tres años: $I_V = 1,04 \cdot 1,04 \cdot 1,04 = 1,124864$`,
             R`<b>a)</b> $C_F = 1,124864 \cdot 85\,000 = 95\,613,44 \approx 95\,613$`,
             R`<b>b)</b> Con un 12 %: $C_F = 1,12 \cdot 85\,000 = 95\,200$. Cada año el 4 % se calcula sobre más habitantes`],
      res:"a) Dentro de 3 años tendrá unos <b>95&nbsp;613 habitantes</b>.<br>b) <b>No</b> es lo mismo: con un 12 % de golpe serían 95&nbsp;200; crece algo más, un 12,49 %." },
    { nivel:"Para pensar",
      enun:"Has pagado 290,40 € por una bici eléctrica con un 20 % de rebaja y después el 21 % de IVA. ¿Cuál era el precio inicial?",
      pasos:[R`$I_V$ total $= 0,80 \cdot 1,21 = 0,968$`, R`$C_F = I_V \cdot C_I$ → $290,40 = 0,968 \cdot x \;\Rightarrow\; x = \dfrac{290,40}{0,968} = 300$ €`,
             R`Comprueba: $300 \cdot 0,80 = 240$ y $240 \cdot 1,21 = 290,40$ ✓`],
      res:"La bici costaba <b>300 €</b> al principio." },
    { nivel:"Para pensar",
      enun:"Una tele cuesta 450 €. ¿Da igual hacer primero un descuento del 10 % y después añadir el 21 % de IVA, o primero el IVA y después el descuento?",
      pasos:[R`Primero descuento: $450 \cdot 0,90 = 405$ ⇒ $405 \cdot 1,21 = 490,05$ €`,
             R`Primero IVA: $450 \cdot 1,21 = 544,50$ ⇒ $544,50 \cdot 0,90 = 490,05$ €`,
             R`Es lo mismo porque se multiplica por los mismos índices: $0,90 \cdot 1,21 = 1,21 \cdot 0,90 = 1,089$`],
      res:"<b>Da igual</b>: en los dos casos se pagan <b>490,05 €</b>." },
    { nivel:"Para pensar",
      enun:"<b>a)</b> Si un precio sube un 20 % y después baja un 20 %, ¿vuelve a ser el mismo?<br><b>b)</b> Un precio ha subido un 25 %. ¿Qué rebaja hay que hacer para que vuelva al precio de antes?",
      pasos:[R`<b>a)</b> $1,20 \cdot 0,80 = 0,96$ → baja un $4\,\%$: <b>no</b> vuelve al mismo. El 20 % de bajada se calcula sobre un precio mayor.`,
             R`<b>b)</b> Busco el índice que deshace el 1,25: $1,25 \cdot x = 1$ ⇒ $x = \dfrac{1}{1,25} = 0,80$ → rebaja del $20\,\%$`,
             R`Comprueba con 100 €: sube a 125 € y $125 \cdot 0,80 = 100$ € ✓`],
      res:"a) <b>No</b> vuelve a ser el mismo: baja un <b>4 %</b>.<br>b) Hay que hacer una rebaja del <b>20 %</b>." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">Varios cambios seguidos: se multiplican los índices.</p>`}
    ]},
    { titulo:"Porcentajes encadenados", cuerpo:[
      {ej:{etq:"🎒", enun:"Una mochila cuesta 50 €. En septiembre sube un 20 % y en enero la rebajan un 25 %. ¿Cuánto cuesta al final?",
        pasos:[R`Sube un 20 %: $I_V = 1 + 0,20 = 1,20$`, R`Baja un 25 %: $I_V = 1 - 0,25 = 0,75$`, R`$I_V$ total $= 1,20 \cdot 0,75 = 0,90$`, R`$C_F = 0,90 \cdot 50 = 45$ €`],
        res:"Al final la mochila cuesta <b>45 €</b>."}},
      {html:flecha(["50 €","× 1,20","60 €","× 0,75","45 €"])},
      {aviso:["<b>Los porcentajes NO se suman</b>: se multiplican los índices. Subir un 20 % y bajar un 25 % no es bajar un 5 %."]}
    ]},
    { titulo:"Encadenados con IVA", cuerpo:[
      {ej:{etq:"🧾", enun:"Una factura de 350 € tiene un 20 % de descuento y después hay que añadir el 21 % de IVA. ¿Cuánto se paga?",
        pasos:[R`Descuento del 20 %: $I_V = 1 - 0,20 = 0,80$`, R`IVA del 21 %: $I_V = 1 + 0,21 = 1,21$`, R`$I_V = 0,80 \cdot 1,21 = 0,968$`, R`$C_F = 0,968 \cdot 350 = 338,80$ €`], res:"Hay que pagar <b>338,80 €</b>."}},
      {nota:["Da igual el orden: primero el descuento y luego el IVA, o al revés. Se multiplica por los mismos índices."]}
    ]},
    { titulo:"La variación de varios cambios", cuerpo:[
      {ej:{etq:"🎒", enun:"Una mochila sube un 20 % y después la rebajan un 25 %. ¿Cuánto ha cambiado en total?",
        pasos:[R`Índice total: $I_V = 1,20 \cdot 0,75 = 0,90$`, R`Menor que 1: baja $1 - 0,90 = 0,10$ → $10\,\%$`],
        res:"En total la mochila ha <b>bajado un 10 %</b>."}},
      {aviso:["<b>Los porcentajes NO se suman</b>: subir un 20 % y bajar un 25 % no es bajar un 5 %."]}
    ]},
    { titulo:"Hacia atrás con porcentajes encadenados", cuerpo:[
      {ej:{etq:"📺", enun:"Pagamos 290,40 € por una tele con un 20 % de rebaja y el 21 % de IVA. ¿Cuál era el precio inicial?",
        pasos:[R`$I_V = 0,80 \cdot 1,21 = 0,968$`, R`$290,40 = 0,968 \cdot x$ ⇒ $x = \dfrac{290,40}{0,968} = 300$ €`], res:"El precio inicial era <b>300 €</b>."}},
      {nota:["Primero el índice total multiplicando; después, una sola división."]}
    ]},
    { titulo:"🏷 ¿Cuánto descuento es de verdad una oferta?", cuerpo:[
      {cols:[
        [{ej:{etq:"3x2", enun:"Te llevas 3 y pagas 2.", pasos:[R`$2 = x \cdot 3 \;\Rightarrow\; x = \dfrac{2}{3} \approx 0,667$ → baja $1 - 0,667 = 0,333$`], res:"Llevarte 3 y pagar 2 es un descuento del <b>33,3 %</b>."}}],
        [{ej:{etq:"2.ª unidad al 50 %", enun:"Compras 2 y la segunda va a mitad de precio.", pasos:[R`$1,5 = x \cdot 2 \;\Rightarrow\; x = \dfrac{1,5}{2} = 0,75$ → baja $1 - 0,75 = 0,25$`], res:"La segunda a mitad de precio es un descuento del <b>25 %</b> (¡no del 50 %!)."}}]
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
      {aviso:["<b>Sumar los porcentajes encadenados</b>: subir un 20 % y bajar un 25 % no es bajar un 5 %. Se multiplican los índices."], etq:"⚠️ Error 1"},
      {aviso:["<b>Calcular el segundo % sobre la cantidad del principio</b>: cada cambio se hace sobre lo que queda."], etq:"⚠️ Error 2"},
      {aviso:["<b>Creer que «2.ª unidad al 50 %» es un 50 % de descuento</b>: es un 25 %."], etq:"⚠️ Error 3"}
    ]},
    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{formula:R`I_V = I_{V_1} \cdot I_{V_2} \cdot I_{V_3} \cdots`},
        {lista:["Encadenados: primero, el índice de cada cambio; después, el índice total multiplicando.",
                R`Con el índice total, la misma fórmula $C_F = I_V \cdot C_I$ (tipo 1, 2 o 3).`,
                "Ofertas: qué parte pago de lo que me llevo es el índice."]}]},
      {estudio:[
        {comp:{q:"Sube un 10 % y luego otro 10 %. ¿Cuánto sube en total (%)?", sol:21, unidad:"%", explic:R`$1,10 \cdot 1,10 = 1,21$ → sube un 21 %`, pista:"Multiplica los índices."}},
        {comp:{q:"Un precio de 80 € baja un 10 % y después otro 10 %. ¿Precio final?", sol:64.8, unidad:"€", explic:R`$0,90 \cdot 0,90 \cdot 80 = 64,80$ €`, pista:"Multiplica los índices."}},
        {comp:{q:"¿Qué % de descuento es «llévate 4 y paga 3»?", sol:25, unidad:"%", explic:R`$3 = x \cdot 4 \Rightarrow x = 0,75$ → baja un 25 %`, pista:"¿Qué parte pagas?"}}
      ]}
    ]}
  ]
});
})();

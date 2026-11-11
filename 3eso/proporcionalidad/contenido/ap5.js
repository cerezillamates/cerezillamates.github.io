/* 3.º ESO · Tema 3 · Apartado 5: Porcentajes
   Método de la profesora (11-nov-2026): TODO con una sola fórmula, C_F = C_I · I_V
   (cantidad final = cantidad inicial × índice de variación). El % se escribe en decimal;
   sube → I_V = 1 + el %; baja → I_V = 1 − el %. Despejando: C_I = C_F : I_V, I_V = C_F : C_I.
   Encadenados: se multiplican los índices (los % NO se suman). El triángulo queda solo como TRUCO. */
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
  num: 5,
  titulo: "Porcentajes",
  videos: [
    {t:"Problemas con porcentajes (3.º ESO)", url:"https://www.youtube.com/watch?v=9T7w7iaMrjQ"},
    {t:"Aumentos y disminuciones porcentuales", url:"https://www.youtube.com/watch?v=sh0ytvn8Y4M"},
    {t:"Porcentajes: subidas y bajadas encadenadas", url:"https://www.youtube.com/watch?v=ynSBIu_6zSE"}
  ],

  clase: [
    { nivel:"Aplicación", min:5,
      enun:"En tu clase hay 28 alumnos.<br><b>a)</b> El 25 % viene al instituto en bici. ¿Cuántos son?<br><b>b)</b> 21 alumnos tienen móvil propio. ¿Qué porcentaje es?<br><b>c)</b> En otra clase, 9 alumnos son el 30 %. ¿Cuántos alumnos hay en esa clase?",
      pasos:[R`<b>a)</b> $C_F = C_I \cdot I_V = 28 \cdot 0,25 = 7$ alumnos`,
             R`<b>b)</b> $I_V = C_F : C_I = 21 : 28 = 0,75$ → $75\,\%$`,
             R`<b>c)</b> $C_I = C_F : I_V = 9 : 0,30 = 30$ alumnos`],
      res:"a) 7 alumnos&ensp;·&ensp;b) 75 %&ensp;·&ensp;c) 30 alumnos" },
    { nivel:"Aplicación", min:5,
      enun:"¿Cuánto pagas?<br><b>a)</b> Unas zapatillas de 85 € con un 30 % de descuento en el Black Friday.<br><b>b)</b> Una entrada de concierto de 40 € a la que se suma un 15 % de gastos de gestión.",
      pasos:[R`<b>a)</b> Baja: $I_V = 1 - 0,30 = 0,70$ → $C_F = 85 \cdot 0,70 = 59,50$ €`,
             R`<b>b)</b> Sube: $I_V = 1 + 0,15 = 1,15$ → $C_F = 40 \cdot 1,15 = 46$ €`],
      res:"a) 59,50 €&ensp;·&ensp;b) 46 €" },
    { nivel:"Práctica", min:6,
      enun:"<b>a)</b> En rebajas, con un 40 % de descuento, has pagado 27 € por una camiseta. ¿Cuánto costaba antes?<br><b>b)</b> Un móvil cuesta 242 € con el 21 % de IVA incluido. ¿Cuánto cuesta sin IVA?",
      pasos:[R`Busco la cantidad inicial: $C_I = C_F : I_V$`,
             R`<b>a)</b> $I_V = 1 - 0,40 = 0,60$ → $C_I = 27 : 0,60 = 45$ €. Comprueba: $45 \cdot 0,60 = 27$ ✓`,
             R`<b>b)</b> $I_V = 1,21$ → $C_I = 242 : 1,21 = 200$ €`],
      res:"a) 45 €&ensp;·&ensp;b) 200 €" },
    { nivel:"Práctica", min:6,
      enun:"<b>a)</b> El bono mensual de transporte pasa de 20 € a 23 €. ¿Qué porcentaje ha subido?<br><b>b)</b> Una consola baja de 350 € a 280 €. ¿Qué porcentaje ha bajado?",
      pasos:[R`$I_V = C_F : C_I$`,
             R`<b>a)</b> $I_V = 23 : 20 = 1,15$ → mayor que 1: <b>sube un 15 %</b>`,
             R`<b>b)</b> $I_V = 280 : 350 = 0,80$ → menor que 1: <b>baja un 20 %</b>`],
      res:"a) Sube un 15 %&ensp;·&ensp;b) Baja un 20 %" },
    { nivel:"Problema", min:7,
      enun:"Una sudadera cuesta 40 €. En septiembre sube un 10 % y en enero la rebajan un 20 %.<br><b>a)</b> ¿Cuánto cuesta al final?<br><b>b)</b> En total, ¿ha subido o ha bajado? ¿Cuánto?",
      pasos:[R`Sube 10 % → $I_V = 1,10$; baja 20 % → $I_V = 0,80$`,
             R`<b>a)</b> $I_V$ total $= 1,10 \cdot 0,80 = 0,88$ → $C_F = 40 \cdot 0,88 = 35,20$ €`,
             R`<b>b)</b> $0,88$ es menor que 1: <b>ha bajado un 12 %</b> (¡no un 10 %!)`],
      res:"a) 35,20 €&ensp;·&ensp;b) Ha bajado un 12 %" },
    { nivel:"Reto", min:8,
      enun:"Necesitas 3 botes de champú que cuestan 4 € cada uno. ¿Dónde pagas menos?<br><b>Tienda A:</b> oferta 3x2.<br><b>Tienda B:</b> 2.ª unidad al 50 % (la oferta solo vale para 2 botes).<br><b>Tienda C:</b> 30 % de descuento en todo.",
      pasos:["<b>A:</b> te llevas 3 y pagas 2 → 2 · 4 = <b>8 €</b>",
             "<b>B:</b> 4 + 2 (al 50 %) + 4 (el tercero, sin oferta) = <b>10 €</b>",
             R`<b>C:</b> $12 \cdot 0,70 = $ <b>8,40 €</b>`,
             R`El 3x2 es un descuento del $33,3\,\%$ (pagas $\dfrac{2}{3}$): es la mejor oferta.`],
      res:"En la tienda A: 8 €" }
  ],

  casa: [
    { nivel:"Básico",
      enun:"Escribe en forma decimal: <b>a)</b> 8 % &nbsp;<b>b)</b> 45 % &nbsp;<b>c)</b> 3 % &nbsp;<b>d)</b> 150 % &nbsp;<b>e)</b> 12,5 %",
      pasos:["Divido entre 100: la coma se mueve dos lugares a la izquierda.",
             "a) 0,08 · b) 0,45 · c) 0,03 · d) 1,50 · e) 0,125"],
      res:"0,08 · 0,45 · 0,03 · 1,50 · 0,125" },
    { nivel:"Básico",
      enun:"Un instituto tiene 650 alumnos.<br><b>a)</b> El 12 % se queda al comedor. ¿Cuántos son?<br><b>b)</b> 117 alumnos hacen deporte federado. ¿Qué porcentaje representan?",
      pasos:[R`<b>a)</b> $C_F = 650 \cdot 0,12 = 78$ alumnos`, R`<b>b)</b> $I_V = 117 : 650 = 0,18$ → $18\,\%$`],
      res:"a) 78 alumnos&ensp;·&ensp;b) 18 %" },
    { nivel:"Consolidación",
      enun:"<b>a)</b> Arreglar la bici en el taller cuesta 180 € más el 21 % de IVA. ¿Cuánto pagas?<br><b>b)</b> Un pantalón de 55 € tiene un 35 % de descuento. ¿Cuánto pagas?",
      pasos:[R`<b>a)</b> $I_V = 1,21$ → $C_F = 180 \cdot 1,21 = 217,80$ €`, R`<b>b)</b> $I_V = 1 - 0,35 = 0,65$ → $C_F = 55 \cdot 0,65 = 35,75$ €`],
      res:"a) 217,80 €&ensp;·&ensp;b) 35,75 €" },
    { nivel:"Consolidación",
      enun:"<b>a)</b> Tras subir un 12 %, el abono del gimnasio cuesta 33,60 €. ¿Cuánto costaba antes?<br><b>b)</b> Un portátil cuesta 605 € con el 21 % de IVA incluido. ¿Cuánto cuesta sin IVA?",
      pasos:[R`<b>a)</b> $C_I = C_F : I_V = 33,60 : 1,12 = 30$ €`, R`<b>b)</b> $C_I = 605 : 1,21 = 500$ €`],
      res:"a) 30 €&ensp;·&ensp;b) 500 €" },
    { nivel:"Problema",
      enun:"<b>a)</b> La población de un pueblo pasa de 2500 a 2350 habitantes. ¿Qué porcentaje ha variado?<br><b>b)</b> Una cuenta de una red social pasa de 800 a 1100 seguidores. ¿Qué porcentaje ha subido?",
      pasos:[R`<b>a)</b> $I_V = 2350 : 2500 = 0,94$ → ha bajado un $6\,\%$`, R`<b>b)</b> $I_V = 1100 : 800 = 1,375$ → ha subido un $37,5\,\%$`],
      res:"a) Baja un 6 %&ensp;·&ensp;b) Sube un 37,5 %" },
    { nivel:"Problema",
      enun:"Unos auriculares de 200 € suben un 10 % y después bajan un 25 %. ¿Cuánto cuestan al final? ¿Cuánto han variado en total?",
      pasos:[R`$I_V$ total $= 1,10 \cdot 0,75 = 0,825$`,
             R`$C_F = 200 \cdot 0,825 = 165$ €`,
             R`$0,825$ → han bajado un $17,5\,\%$ (no un 15 %)`],
      res:"165 €; bajan un 17,5 %" },
    { nivel:"Para pensar",
      enun:"Has pagado 290,40 € por una bici eléctrica con un 20 % de rebaja y después el 21 % de IVA. ¿Cuál era el precio inicial?",
      pasos:[R`$I_V$ total $= 0,80 \cdot 1,21 = 0,968$`, R`$C_I = C_F : I_V = 290,40 : 0,968 = 300$ €`,
             R`Comprueba: $300 \cdot 0,80 = 240$ y $240 \cdot 1,21 = 290,40$ ✓`],
      res:"300 €" },
    { nivel:"Para pensar",
      enun:"<b>a)</b> Si un precio sube un 20 % y después baja un 20 %, ¿vuelve a ser el mismo?<br><b>b)</b> Un precio ha subido un 25 %. ¿Qué rebaja hay que hacer para que vuelva al precio de antes?",
      pasos:[R`<b>a)</b> $1,20 \cdot 0,80 = 0,96$ → baja un $4\,\%$: <b>no</b> vuelve al mismo. El 20 % de bajada se calcula sobre un precio mayor.`,
             R`<b>b)</b> Busco un $I_V$ que deshaga el 1,25: $1 : 1,25 = 0,80$ → rebaja del $20\,\%$`,
             R`Comprueba con 100 €: sube a 125 € y $125 \cdot 0,80 = 100$ € ✓`],
      res:"a) No, baja un 4 %&ensp;·&ensp;b) Una rebaja del 20 %" }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {nota:[{lista:[
        "Escribir un porcentaje en <b>decimal</b>.",
        R`Resolver todo con <b>una sola fórmula</b>: $C_F = C_I \cdot I_V$`,
        "Aumentos y disminuciones: IVA, rebajas, ganancias…",
        "Ir <b>hacia atrás</b>, el <b>% de variación</b>, los <b>encadenados</b> y las <b>ofertas</b>."
      ]}], etq:"🎯 En este apartado vas a aprender"}
    ]},

    { titulo:"El porcentaje en forma decimal", cuerpo:[
      {def:[R`$35\,\% = \dfrac{35}{100} = 0,35$`, "Para calcular, el % se escribe en <b>decimal</b>: se divide entre 100."], etq:"Porcentaje"},
      {html:`<div class="dec-cards">${[["50 %","0,50","la mitad"],["25 %","0,25","la cuarta parte"],["21 %","0,21","el IVA"],["5 %","0,05","¡ojo con el 0!"],["120 %","1,20","más que el total"]].map(c=>`<div><b>${c[0]}</b><i>▼</i><span>${c[1]}</span><small>${c[2]}</small></div>`).join("")}</div>`},
      {nota:["La coma se mueve <b>dos lugares</b> a la izquierda: 5 % es 0,05, no 0,5."]}
    ]},

    { titulo:"Una sola fórmula para todo", cuerpo:[
      {prop:[{formula:R`C_F = C_I \cdot I_V`}], etq:"La fórmula"},
      {html:`<div class="cfiv"><div><b>$C_I$</b><span>cantidad inicial</span><small>lo que había: el 100 %</small></div><div><b>$I_V$</b><span>índice de variación</span><small>el % en decimal</small></div><div><b>$C_F$</b><span>cantidad final</span><small>lo que queda o lo que me piden</small></div></div>`},
      {html:R`<div class="cfiv desp"><div>¿Busco $C_F$? <b>$C_F = C_I \cdot I_V$</b></div><div>¿Busco $C_I$? <b>$C_I = C_F : I_V$</b></div><div>¿Busco $I_V$? <b>$I_V = C_F : C_I$</b></div></div>`},
      {truco:[{html:tri("")}, "Tapa con el dedo lo que buscas: lo que queda al lado se multiplica, lo que queda arriba y abajo se divide."], etq:"🪄 Truco: el triángulo"}
    ]},

    { titulo:"🍕 Porcentaje de una cantidad", cuerpo:[
      {ej:{enun:"En una clase de 25 alumnos, al 40 % le gusta la pizza. ¿A cuántos?",
        pasos:[R`$C_I = 25$, $I_V = 0,40$`, R`$C_F = 25 \cdot 0,40 = 10$`], res:"A 10 alumnos"}},
      {html:barra([[40,"40 % → 10 alumnos 🍕","pct-a"],[60,"60 % → 15 alumnos",""]])}
    ]},

    { titulo:"🚌 Busco la cantidad inicial", cuerpo:[
      {ej:{enun:"12 alumnos van en autobús y son el 40 % de la clase. ¿Cuántos alumnos hay en la clase?",
        pasos:[R`$C_F = 12$, $I_V = 0,40$`, R`$C_I = C_F : I_V = 12 : 0,40 = 30$`], res:"30 alumnos"}},
      {nota:[R`Comprueba: $30 \cdot 0,40 = 12$ ✓`]}
    ]},

    { titulo:"⚽ Busco el porcentaje", cuerpo:[
      {ej:{enun:"9 de los 36 alumnos juegan al fútbol. ¿Qué porcentaje es?",
        pasos:[R`$C_I = 36$, $C_F = 9$`, R`$I_V = C_F : C_I = 9 : 36 = 0,25$`], res:"El 25 %"}},
      {aviso:["No te quedes en 0,25: el resultado se da en <b>porcentaje</b> (25 %)."]}
    ]},

    { titulo:"¿Sube o baja? El índice de variación", cuerpo:[
      {cols:[
        [{def:[R`<b>$I_V = 1 + $ el %</b>`, "+25 % → <b>1,25</b>", "IVA +21 % → <b>1,21</b>"], etq:"📈 SUBE"}],
        [{aviso:[R`<b>$I_V = 1 - $ el %</b>`, "−20 % → <b>0,80</b>", "−5 % → <b>0,95</b>"], etq:"📉 BAJA"}]
      ]},
      {nota:["Sube: aumento, IVA, ganancia, recargo. Baja: descuento, rebaja, pérdida."]}
    ]},

    { titulo:"👟 Un descuento", cuerpo:[
      {ej:{enun:"Unas zapatillas cuestan 60 € y tienen un 20 % de descuento. ¿Cuánto pagas?",
        pasos:[R`Baja: $I_V = 1 - 0,20 = 0,80$`, R`$C_F = 60 \cdot 0,80 = 48$ €`], res:"Pagas 48 €"}},
      {nota:[R`Comprueba: te ahorras $60 - 48 = 12$ € y el 20 % de 60 es $12$ ✓`]}
    ]},

    { titulo:"🔧 El IVA y 🛴 la ganancia", cuerpo:[
      {cols:[
        [{ej:{etq:"🔧 IVA", enun:"Arreglar la moto cuesta 168 € más un 21 % de IVA. ¿Cuánto se paga?",
          pasos:[R`$I_V = 1,21$`, R`$C_F = 168 \cdot 1,21 = 203,28$`], res:"203,28 €"}}],
        [{ej:{etq:"🛴 Ganancia", enun:"Una tienda compra un patinete por 145 € y lo vende ganando un 30 %. ¿A qué precio?",
          pasos:[R`$I_V = 1,30$`, R`$C_F = 145 \cdot 1,30 = 188,50$`], res:"188,50 €"}}]
      ]}
    ]},

    { titulo:"Hacia atrás: la cantidad inicial", cuerpo:[
      {ej:{etq:"👕", enun:"En rebajas, con un 20 % de descuento, has pagado 48 € por una sudadera. ¿Cuánto costaba antes?",
        pasos:[R`$C_F = 48$, $I_V = 0,80$`, R`$C_I = C_F : I_V = 48 : 0,80 = 60$ €`], res:"Costaba 60 €"}},
      {aviso:[R`No sumes el 20 % a 48 €: el 20 % se calculó sobre el precio de <b>antes</b>. Se divide entre $I_V$.`]}
    ]},

    { titulo:"Hacia atrás con el IVA", cuerpo:[
      {ej:{etq:"📱", enun:"Un móvil cuesta 363 € con el 21 % de IVA. ¿Cuánto cuesta sin IVA?",
        pasos:[R`$C_F = 363$, $I_V = 1,21$`, R`$C_I = 363 : 1,21 = 300$ €`], res:"300 € sin IVA"}},
      {aviso:["Restar el 21 % a 363 € está mal: se divide entre 1,21."]}
    ]},

    { titulo:"¿Cuánto ha subido o bajado?", cuerpo:[
      {cols:[
        [{ej:{etq:"🎮 Sube", enun:"Un videojuego costaba 40 € y ahora cuesta 46 €.",
          pasos:[R`$I_V = C_F : C_I = 46 : 40 = 1,15$`], res:"Ha subido un 15 %"}}],
        [{ej:{etq:"🚲 Baja", enun:"Una bici de 500 € se vende por 325 €.",
          pasos:[R`$I_V = 325 : 500 = 0,65$`], res:"Ha bajado un 35 %"}}]
      ]},
      {nota:[R`Si $I_V$ es mayor que 1, sube lo que pasa de 1 ($1,15$ → 15 %). Si es menor que 1, baja lo que le falta ($0,65$ → 35 %).`]},
      {nota:["🛒 El IPC hace esto con la cesta de la compra: si pasa de 400 € a 420 €, 420 : 400 = 1,05 → los precios han subido un 5 %."]}
    ]},

    { titulo:"Porcentajes encadenados", cuerpo:[
      {ej:{etq:"🎒", enun:"Una mochila cuesta 50 €. En septiembre sube un 20 % y en enero la rebajan un 25 %. ¿Cuánto cuesta al final? ¿Cuánto ha cambiado?",
        pasos:[R`$I_V$ total $= 1,20 \cdot 0,75 = 0,90$`, R`$C_F = 50 \cdot 0,90 = 45$ €`, R`$0,90$ → ha <b>bajado un 10 %</b>`],
        res:"45 €; baja un 10 %"}},
      {aviso:["<b>Los porcentajes NO se suman</b>: se multiplican los índices. Subir un 20 % y bajar un 25 % no es bajar un 5 %."]}
    ]},

    { titulo:"Encadenados con IVA", cuerpo:[
      {cols:[
        [{ej:{etq:"🧾 Hacia delante", enun:"Una factura de 350 € con un 20 % de descuento y después un 21 % de IVA.",
          pasos:[R`$I_V = 0,80 \cdot 1,21 = 0,968$`, R`$C_F = 350 \cdot 0,968 = 338,80$ €`], res:"338,80 €"}}],
        [{ej:{etq:"📺 Hacia atrás", enun:"Pagamos 290,40 € con un 20 % de rebaja y un 21 % de IVA. ¿Precio inicial?",
          pasos:[R`$I_V = 0,80 \cdot 1,21 = 0,968$`, R`$C_I = 290,40 : 0,968 = 300$ €`], res:"300 €"}}]
      ]}
    ]},

    { titulo:"🛒 Compras inteligentes: el precio unitario", cuerpo:[
      {def:[{formula:R`\text{precio unitario} = \text{precio} : \text{cantidad}`}], etq:"Precio unitario"},
      {ej:{etq:"🫒", enun:"Aceite: botella de 1 L a 9,20 € o garrafa de 5 L a 43 €. ¿Qué sale más barato?",
        pasos:["Botella: 9,20 €/L", R`Garrafa: $43 : 5 = 8,60$ €/L`], res:"La garrafa"}},
      {nota:["Consumo responsable: lo más barato por litro no siempre es lo mejor si se va a estropear o no lo necesitas."]}
    ]},

    { titulo:"🏷 ¿Cuánto descuento es de verdad una oferta?", cuerpo:[
      {cols:[
        [{ej:{etq:"3x2", enun:"Te llevas 3 y pagas 2.", pasos:[R`$I_V = 2 : 3 \approx 0,667$`], res:"Descuento del 33,3 %"}}],
        [{ej:{etq:"2.ª unidad al 50 %", enun:"Compras 2 y la segunda va a mitad de precio.", pasos:[R`$I_V = 1,5 : 2 = 0,75$`], res:"Descuento del 25 % (¡no del 50 %!)"}}]
      ]},
      {nota:["Para comparar ofertas, calcula qué parte pagas de lo que te llevas: ese es el índice."]}
    ]},

    { titulo:"🪄 Trucos para ir más rápido", cuerpo:[
      {truco:["<b>Porcentajes de cabeza:</b> 50 %, la mitad; 25 %, la cuarta parte; 10 %, quita un cero; 5 %, la mitad del 10 %."], etq:"🪄 Truco 1"},
      {truco:["<b>«Te descuentan el 30 %» es «pagas el 70 %».</b> Piensa en lo que pagas: ese es el índice."], etq:"🪄 Truco 2"},
      {truco:[R`<b>El 15 % de propina, de cabeza:</b> el 10 % de 40 € son 4 €, la mitad son 2 € → $4 + 2 = 6$ €.`], etq:"🪄 Truco 3"}
    ]},

    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:["<b>Escribir 5 % como 0,5</b> (es 0,05)."], etq:"⚠️ Error 1"},
      {aviso:[R`<b>Para volver atrás, restar el porcentaje</b>: hay que dividir, $C_I = C_F : I_V$.`], etq:"⚠️ Error 2"},
      {aviso:["<b>Sumar los porcentajes encadenados</b>: se multiplican los índices."], etq:"⚠️ Error 3"},
      {aviso:[R`<b>En la variación, dividir al revés</b>: es $I_V = C_F : C_I$.`], etq:"⚠️ Error 4"}
    ]},

    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[
        {formula:R`C_F = C_I \cdot I_V \qquad C_I = C_F : I_V \qquad I_V = C_F : C_I`},
        {lista:[R`Sube: $I_V = 1 + $ el %. Baja: $I_V = 1 - $ el %.`,
                R`Variación: $I_V = C_F : C_I$; si pasa de 1 sube, si no llega a 1 baja.`,
                "Encadenados: se multiplican los índices (los % no se suman)."]}
      ]},
      {estudio:[
        {comp:{q:"Calcula el 15 % de 320.", sol:48, explic:R`$C_F = 320 \cdot 0,15 = 48$`, pista:"C_F = C_I · I_V con I_V = 0,15."}},
        {comp:{q:"12 alumnos son el 40 % de una clase. ¿Cuántos alumnos hay?", sol:30, unidad:"alumnos", explic:R`$C_I = 12 : 0,40 = 30$`, pista:"C_I = C_F : I_V."}},
        {comp:{q:"El índice de variación de una rebaja del 30 % es…", opciones:["0,30","0,70","1,30"], ok:1, explic:"1 − 0,30 = 0,70.", pista:"¿Qué parte pagas?"}},
        {comp:{q:"Tras una rebaja del 25 % pagas 30 €. ¿Cuánto costaba?", sol:40, unidad:"€", explic:R`$C_I = 30 : 0,75 = 40$ €`, pista:"C_I = C_F : I_V con I_V = 0,75."}}
      ]}
    ]}
  ]
});
})();

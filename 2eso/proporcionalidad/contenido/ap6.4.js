/* 2.º ESO · Tema 3 · Apartado 6.4: Porcentajes encadenados y ofertas.
   Cambio pedido por la profesora (20-11-2026): con DIAGRAMAS DE FLECHAS CURVAS (window.curvas, en tema.js).
   Hacia delante (arriba) multiplico por el índice; hacia atrás (abajo) divido entre el índice.
   Encima de cada flecha, el % y su índice. Los % no se suman: los índices se multiplican.
   Cuando preguntan qué % ha subido o bajado, el tipo 3: % = lo que sube o baja / lo de antes · 100. */
(function(){
const R = String.raw;
const sube = (p, i) => ({up:true, pct:`+${p} %`, idx:i});
const baja = (p, i) => ({up:false, pct:`−${p} %`, idx:i});
const dia = (vals, pasos, o) => window.curvas(vals, pasos, o || {});
TEMA.registrar({
  num: "6.4",
  titulo: "Porcentajes · Encadenados y ofertas",
  videos: [
    {t:"Porcentajes encadenados", url:"https://www.youtube.com/watch?v=ynSBIu_6zSE"}
  ],

  clase: [
    { nivel:"Aplicación", min:5,
      enun:"Un reproductor de música costaba 110,50 €. Le aplican una rebaja del 20 %. ¿Cuál es su precio? ¿Y si después le aplican otra rebaja del 10 %?",
      pasos:["Escribo el % y el índice encima de cada flecha: baja 20 % → 0,80; baja 10 % → 0,90.",
             dia(["110,50 €","88,40 €","79,56 €"],[baja(20,"0,80"),baja(10,"0,90")],{subs:["inicial","con 1 rebaja","con 2 rebajas"]}),
             "➡ Hacia delante multiplico:",
             R`$110,50 \cdot 0,80 = 88,40$ €`,
             R`$88,40 \cdot 0,90 = 79,56$ €`,
             "La segunda rebaja se hace sobre 88,40 €, no sobre 110,50 €."],
      res:"Con la rebaja cuesta <b>88,40 €</b> y con la segunda rebaja, <b>79,56 €</b>." },
    { nivel:"Práctica", min:5, enun:"Una tablet cuesta 280 €. La rebajan un 15 % y al pagar le añaden el 21 % de IVA. ¿Cuánto pago?",
      pasos:[dia(["280 €","238 €","287,98 €"],[baja(15,"0,85"),sube(21,"1,21")]),
             R`$280 \cdot 0,85 = 238$ €`, R`$238 \cdot 1,21 = 287,98$ €`],
      res:"Pago <b>287,98 €</b> por la tablet." },
    { nivel:"Práctica", min:5, enun:"El abono del polideportivo cuesta 40 €. En enero sube un 10 % y en septiembre vuelve a subir otro 10 %. ¿Cuánto cuesta al final?",
      pasos:[dia(["40 €","44 €","48,40 €"],[sube(10,"1,10"),sube(10,"1,10")],{total:"Índice total: 1,10 × 1,10 = 1,21 → sube un 21 %"}),
             R`$40 \cdot 1,10 = 44$ €`, R`$44 \cdot 1,10 = 48,40$ €`,
             "¡No son 48 €! La segunda subida se calcula sobre 44 €, no sobre 40 €."],
      res:"Al final el abono cuesta <b>48,40 €</b>." },
    { nivel:"Problema", min:6, enun:"Hace dos años había 150 alumnos en el conservatorio. El año pasado se matricularon un 10 % más y este año 110. ¿Subió o bajó este año? ¿Qué porcentaje?",
      pasos:[dia(["150","165"],[sube(10,"1,10")],{subs:["hace 2 años","el año pasado"]}),
             R`El año pasado: $150 \cdot 1,10 = 165$ alumnos`,
             R`Este año <b>baja</b>: $165 - 110 = 55$ alumnos`,
             R`¿Qué % es? (tipo 3, lo de antes es 165): $\% = \dfrac{55}{165} \cdot 100 \approx 33,33\,\%$`],
      res:"Este año <b>bajó</b> un <b>33,33 %</b>." },
    { nivel:"Reto", min:7,
      enun:"Por el Black Friday, una videoconsola de 250 € tiene un descuento del 20 %. Después le aplican otro porcentaje, sin saber si es de subida o de bajada, y el precio final es 255 €. ¿Fue una subida o una bajada? ¿De cuánto?",
      pasos:[dia(["250 €","200 €"],[baja(20,"0,80")]),
             R`Con el descuento: $250 \cdot 0,80 = 200$ €`,
             R`De 200 € a 255 €: <b>sube</b> $255 - 200 = 55$ €`,
             R`¿Qué % es? (tipo 3, lo de antes es 200): $\% = \dfrac{55}{200} \cdot 100 = 27,5\,\%$`],
      res:"Fue una <b>subida del 27,5 %</b>." }
  ],

  casa: [
    { nivel:"Básico", enun:"Unos pantalones costaban 30 € y les aplican dos rebajas seguidas del 20 % y del 30 %. ¿Cuál es el precio final?",
      pasos:[dia(["30 €","24 €","16,80 €"],[baja(20,"0,80"),baja(30,"0,70")],{total:"Índice total: 0,80 × 0,70 = 0,56 → baja un 44 %"}),
             R`$30 \cdot 0,80 = 24$ €`, R`$24 \cdot 0,70 = 16,80$ €`, "¡No es una rebaja del 50 %!"],
      res:"El precio final es <b>16,80 €</b>." },
    { nivel:"Básico", enun:"Una camiseta de 20 € sube un 10 % y después baja un 10 %. ¿Cuánto cuesta al final?",
      pasos:[dia(["20 €","22 €","19,80 €"],[sube(10,"1,10"),baja(10,"0,90")],{total:"Índice total: 1,10 × 0,90 = 0,99 → baja un 1 %"}),
             R`$20 \cdot 1,10 = 22$ €`, R`$22 \cdot 0,90 = 19,80$ €`, "¡No vuelve a costar 20 €! El 10 % de la bajada se calcula sobre 22 €."],
      res:"Al final la camiseta cuesta <b>19,80 €</b>." },
    { nivel:"Consolidación", enun:"¿Qué porcentaje de descuento es la oferta «3x2» (llevas 3 y pagas 2)? ¿Y la oferta «4x3»? ¿Cuál es mejor?",
      pasos:[R`3x2: me regalan 1 de cada 3: $\% = \dfrac{1}{3} \cdot 100 \approx 33\,\%$`,
             R`4x3: me regalan 1 de cada 4: $\% = \dfrac{1}{4} \cdot 100 = 25\,\%$`],
      res:"El 3x2 es un descuento de casi el <b>33 %</b> y el 4x3, del <b>25 %</b>: es mejor el <b>3x2</b>." },
    { nivel:"Consolidación", enun:"Un móvil de 300 € tiene un 10 % de descuento y después hay que añadir el 21 % de IVA. ¿Cuánto pago?",
      pasos:[dia(["300 €","270 €","326,70 €"],[baja(10,"0,90"),sube(21,"1,21")]),
             R`$300 \cdot 0,90 = 270$ €`, R`$270 \cdot 1,21 = 326,70$ €`],
      res:"Pago <b>326,70 €</b> por el móvil." },
    { nivel:"Problema", enun:"Pagamos 290,40 € por una bici con un 20 % de rebaja y después el 21 % de IVA. ¿Cuál era el precio inicial?",
      pasos:["Me dan el final: voy <b>hacia atrás</b> (flechas de abajo) y <b>divido</b>.",
             dia(["300 €","240 €","290,40 €"],[baja(20,"0,80"),sube(21,"1,21")],{dir:"B",subs:["inicial (?)","","lo que pago"]}),
             R`$290,40 : 1,21 = 240$ €`, R`$240 : 0,80 = 300$ €`,
             R`Compruebo hacia delante: $300 \cdot 0,80 = 240$ y $240 \cdot 1,21 = 290,40$ ✓`],
      res:"La bici costaba <b>300 €</b>." },
    { nivel:"Para pensar", enun:"Un artículo sube un 20 % y después baja un 20 %. ¿Vuelve a su precio? Pruébalo con 100 €.",
      pasos:[dia(["100 €","120 €","96 €"],[sube(20,"1,20"),baja(20,"0,80")],{total:"Índice total: 1,20 × 0,80 = 0,96 → baja un 4 %"}),
             R`$100 \cdot 1,20 = 120$ €`, R`$120 \cdot 0,80 = 96$ €`],
      res:"<b>No</b> vuelve a su precio: queda un <b>4 %</b> más barato." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">Dos rebajas seguidas, ¿son la suma?</p>`}
    ]},
    { titulo:"Porcentajes encadenados", cuerpo:[
      {prop:["Cada cambio se hace sobre el precio que queda: los <b>índices se multiplican</b> y los porcentajes <b>no se suman</b>."], etq:"Encadenados"},
      {prop:["Encima de cada flecha escribo el <b>%</b> y su <b>índice</b>.", "➡ <b>Hacia delante</b> (de lo inicial a lo final): <b>multiplico</b> por el índice.", "⬅ <b>Hacia atrás</b> (de lo final a lo inicial): <b>divido</b> entre el índice."], etq:"Las flechas"},
      {html:dia(["200 €","220 €","165 €"],[sube(10,"1,10"),baja(25,"0,75")],{total:"Índice total: 1,10 × 0,75 = 0,825 → baja un 17,5 %"})}
    ]},
    { titulo:"Hacia delante: multiplico", cuerpo:[
      {ej:{etq:"👖 Problema de examen", enun:"Unos pantalones de 30 € tienen dos rebajas seguidas del 20 % y del 30 %. ¿Cuál es el precio final?",
        pasos:[dia(["30 €","24 €","16,80 €"],[baja(20,"0,80"),baja(30,"0,70")],{dir:"F"}),
               R`$30 \cdot 0,80 = 24$ €`, R`$24 \cdot 0,70 = 16,80$ €`,
               "Índice total 0,80 · 0,70 = 0,56: es una rebaja del 44 %, ¡no del 50 %!"],
        res:"El precio final es <b>16,80 €</b>."}}
    ]},
    { titulo:"Hacia atrás: divido", cuerpo:[
      {ej:{etq:"🚲 Me dan lo que pago", enun:"Pagamos 290,40 € con una rebaja del 20 % y después el 21 % de IVA. ¿Cuál era el precio inicial?",
        pasos:[dia(["300 €","240 €","290,40 €"],[baja(20,"0,80"),sube(21,"1,21")],{dir:"B",subs:["inicial (?)","","lo que pago"]}),
               R`$290,40 : 1,21 = 240$ €`, R`$240 : 0,80 = 300$ €`],
        res:"El precio inicial era <b>300 €</b>."}},
      {aviso:["Para volver atrás <b>no</b> se resta el %: se <b>divide</b> entre el índice."]}
    ]},
    { titulo:"Subida y bajada: ¿cuál fue?", cuerpo:[
      {ej:{etq:"🛍️ Problema de examen", enun:"Un artículo costaba 180 €. Primero subió un 20 % y después le aplicaron otro porcentaje. El precio final es 162 €. ¿Fue subida o bajada? ¿De cuánto?",
        pasos:[dia(["180 €","216 €"],[sube(20,"1,20")]),
               R`Subida: $180 \cdot 1,20 = 216$ €`,
               R`De 216 € a 162 €: <b>baja</b> $216 - 162 = 54$ €`,
               R`¿Qué % es? (tipo 3, lo de antes es 216): $\% = \dfrac{54}{216} \cdot 100 = 25\,\%$`],
        res:"Fue una <b>bajada del 25 %</b>."}}
    ]},
    { titulo:"Compras inteligentes: las ofertas", cuerpo:[
      {cols:[
        [{ej:{etq:"3 × 2", enun:"Llevas 3 y pagas 2.", pasos:["Me ahorro 1 de cada 3.", R`$\dfrac{1}{3} \cdot 100 \approx 33\,\%$`], res:"Es un descuento de casi el <b>33 %</b>."}}],
        [{ej:{etq:"2.ª unidad a mitad de precio", enun:"Llevas 2 y pagas 1,5.", pasos:["Me ahorro 0,5 de cada 2.", R`$\dfrac{0,5}{2} \cdot 100 = 25\,\%$`], res:"Es un descuento del <b>25 %</b>."}}],
        [{ej:{etq:"−70 % en la 2.ª unidad", enun:"Llevas 2 y pagas 1,3.", pasos:["Me ahorro 0,7 de cada 2.", R`$\dfrac{0,7}{2} \cdot 100 = 35\,\%$`], res:"Es un descuento del <b>35 %</b>."}}]
      ]},
      {nota:["Solo es buena oferta si de verdad necesitas las dos unidades 😉"]}
    ]},
    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:["<b>Sumar los porcentajes</b> encadenados: −20 % y −30 % no es −50 %. Se multiplican los índices."], etq:"⚠️ Error 1"},
      {aviso:["<b>Subir un 20 % y bajar un 20 %</b> no deja el precio igual: 1,20 · 0,80 = 0,96."], etq:"⚠️ Error 2"},
      {aviso:["<b>Multiplicar cuando voy hacia atrás</b>: si me dan lo que pago y busco el precio de antes, divido."], etq:"⚠️ Error 3"}
    ]},
    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{lista:["Cada cambio tiene su índice: sube → 1 + el %; baja → 1 − el %. Lo escribo encima de su flecha.",
        "➡ Hacia delante multiplico; ⬅ hacia atrás divido.",
        "Varios cambios seguidos: se multiplican los índices. Los % no se suman.",
        "Ofertas: qué parte me ahorro de lo que me llevo, por 100."]}]},
      {estudio:[
        {comp:{q:"Sube un 10 % y luego otro 10 %. ¿Cuánto sube en total (%)?", sol:21, unidad:"%", explic:"1,10 · 1,10 = 1,21 → +21 %", pista:"Multiplica los índices."}},
        {comp:{q:"Unos pantalones de 50 € tienen dos rebajas del 20 % y del 10 %. ¿Precio final?", sol:36, unidad:"€", explic:"50 · 0,80 = 40 € → 40 · 0,90 = 36 €", pista:"Hacia delante: multiplica por cada índice."}}
      ]}
    ]}
  ]
});
})();

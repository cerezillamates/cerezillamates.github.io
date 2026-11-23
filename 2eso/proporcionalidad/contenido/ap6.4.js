/* 2.º ESO · Tema 3 · Apartado 6.4: TIPO 4 · Porcentajes encadenados.
   Cambio pedido por la profesora (23-11-2026): en 2.º ESO SOLO dos preguntas:
     1) el precio final después de varios descuentos o incrementos;
     2) el % de variación final.
   Siempre: los porcentajes NO se suman ni se restan (los índices se multiplican).
   Método: diagramas de flechas curvas solo hacia delante (window.curvas con solo:"F"), con el % y el índice encima.
   El % de variación final: índice total → en % → lo que pasa de 100 % es lo que sube; lo que falta, lo que baja.
   Hacia atrás (precio inicial), un % desconocido y las ofertas van en 3.º ESO (apartado 5.4).
   Clase, casa, autoevaluación, batería (repaso) y control 1 usan los mismos dos tipos de pregunta. */
(function(){
const R = String.raw;
const sube = (p, i) => ({up:true, pct:`+${p} %`, idx:i});
const baja = (p, i) => ({up:false, pct:`−${p} %`, idx:i});
const dia = (vals, pasos, o) => window.curvas(vals, pasos, Object.assign({solo:"F"}, o || {}));
TEMA.registrar({
  num: "6.4",
  titulo: "Porcentajes · Tipo 4: encadenados",
  videos: [
    {t:"Porcentajes encadenados", url:"https://www.youtube.com/watch?v=ynSBIu_6zSE"}
  ],

  clase: [
    { nivel:"Aplicación", min:5,
      enun:"Un reproductor de música costaba 110,50 €. Le aplican una rebaja del 20 % y después otra rebaja del 10 %.<br><b>a)</b> ¿Cuál es el precio final?<br><b>b)</b> ¿Qué porcentaje ha bajado en total?",
      pasos:["Encima de cada flecha, el % y su índice: baja 20 % → 0,80; baja 10 % → 0,90.",
             dia(["110,50 €","88,40 €","79,56 €"],[baja(20,"0,80"),baja(10,"0,90")],{subs:["inicial","con 1 rebaja","final"],total:"Índice total: 0,80 × 0,90 = 0,72"}),
             R`<b>a)</b> $110,50 \cdot 0,80 = 88,40$ €`,
             R`$88,40 \cdot 0,90 = 79,56$ €`,
             "La segunda rebaja se hace sobre 88,40 €, no sobre 110,50 €.",
             R`<b>b)</b> Índice total: $0,80 \cdot 0,90 = 0,72$ → pago el $72\,\%$`,
             R`Baja $100\,\% - 72\,\% = 28\,\%$`,
             "¡No es el 30 %! Los porcentajes no se suman."],
      res:"a) El precio final es <b>79,56 €</b>.<br>b) En total ha bajado un <b>28 %</b>." },
    { nivel:"Práctica", min:5,
      enun:"Una tablet cuesta 280 €. La rebajan un 15 % y al pagar le añaden el 21 % de IVA.<br><b>a)</b> ¿Cuánto pago?<br><b>b)</b> ¿Qué porcentaje ha variado el precio? ¿Ha subido o bajado?",
      pasos:[dia(["280 €","238 €","287,98 €"],[baja(15,"0,85"),sube(21,"1,21")],{total:"Índice total: 0,85 × 1,21 = 1,0285"}),
             R`<b>a)</b> $280 \cdot 0,85 = 238$ €`, R`$238 \cdot 1,21 = 287,98$ €`,
             R`<b>b)</b> Índice total: $0,85 \cdot 1,21 = 1,0285$ → $102,85\,\%$`,
             R`Pasa del $100\,\%$: <b>sube</b> $102,85\,\% - 100\,\% = 2,85\,\%$`,
             "¡No es el 6 %! No se resta 21 − 15."],
      res:"a) Pago <b>287,98 €</b> por la tablet.<br>b) El precio ha <b>subido</b> un <b>2,85 %</b>." },
    { nivel:"Práctica", min:5,
      enun:"El abono del polideportivo cuesta 40 €. En enero sube un 10 % y en septiembre vuelve a subir otro 10 %.<br><b>a)</b> ¿Cuánto cuesta al final?<br><b>b)</b> ¿Qué porcentaje ha subido en total?",
      pasos:[dia(["40 €","44 €","48,40 €"],[sube(10,"1,10"),sube(10,"1,10")],{total:"Índice total: 1,10 × 1,10 = 1,21"}),
             R`<b>a)</b> $40 \cdot 1,10 = 44$ €`, R`$44 \cdot 1,10 = 48,40$ €`,
             "¡No son 48 €! La segunda subida se calcula sobre 44 €, no sobre 40 €.",
             R`<b>b)</b> Índice total: $1,10 \cdot 1,10 = 1,21$ → $121\,\%$ → sube $21\,\%$`],
      res:"a) Al final el abono cuesta <b>48,40 €</b>.<br>b) Ha subido un <b>21 %</b> (no un 20 %)." },
    { nivel:"Problema", min:6,
      enun:"Un videojuego costaba 60 €. Cuando sale la nueva versión sube un 25 %; en rebajas baja un 20 % y en el Black Friday baja otro 10 %.<br><b>a)</b> ¿Cuál es el precio final?<br><b>b)</b> ¿Qué porcentaje ha variado en total?",
      pasos:[dia(["60 €","75 €","60 €","54 €"],[sube(25,"1,25"),baja(20,"0,80"),baja(10,"0,90")],{subs:["inicial","nueva versión","rebajas","final"],total:"Índice total: 1,25 × 0,80 × 0,90 = 0,90"}),
             R`<b>a)</b> $60 \cdot 1,25 = 75$ €`, R`$75 \cdot 0,80 = 60$ €`, R`$60 \cdot 0,90 = 54$ €`,
             R`<b>b)</b> Índice total: $1,25 \cdot 0,80 \cdot 0,90 = 0,90$ → pago el $90\,\%$`,
             R`Baja $100\,\% - 90\,\% = 10\,\%$`,
             "Si sumamos y restamos los % (+25 − 20 − 10) sale −5 %, y está mal."],
      res:"a) El precio final es <b>54 €</b>.<br>b) En total ha <b>bajado un 10 %</b>." },
    { nivel:"Reto", min:6,
      enun:"Unas zapatillas de 80 € bajan un 50 % y después suben un 50 %.<br><b>a)</b> ¿Vuelven a costar 80 €?<br><b>b)</b> ¿Qué porcentaje han variado en total?",
      pasos:[dia(["80 €","40 €","60 €"],[baja(50,"0,50"),sube(50,"1,50")],{total:"Índice total: 0,50 × 1,50 = 0,75"}),
             R`<b>a)</b> $80 \cdot 0,50 = 40$ €`, R`$40 \cdot 1,50 = 60$ €`,
             "No vuelven a 80 €: el 50 % de la subida se calcula sobre 40 €, que es menos.",
             R`<b>b)</b> Índice total: $0,50 \cdot 1,50 = 0,75$ → pago el $75\,\%$ → baja $25\,\%$`],
      res:"a) <b>No</b>: al final cuestan <b>60 €</b>.<br>b) En total han <b>bajado un 25 %</b>." }
  ],

  casa: [
    { nivel:"Básico", enun:"Unos pantalones costaban 30 € y les aplican dos rebajas seguidas del 20 % y del 30 %.<br><b>a)</b> ¿Cuál es el precio final?<br><b>b)</b> ¿Qué porcentaje han bajado en total?",
      pasos:[dia(["30 €","24 €","16,80 €"],[baja(20,"0,80"),baja(30,"0,70")],{total:"Índice total: 0,80 × 0,70 = 0,56"}),
             R`<b>a)</b> $30 \cdot 0,80 = 24$ €`, R`$24 \cdot 0,70 = 16,80$ €`,
             R`<b>b)</b> Índice total: $0,80 \cdot 0,70 = 0,56$ → pago el $56\,\%$ → baja $44\,\%$`,
             "¡No es una rebaja del 50 %!"],
      res:"a) El precio final es <b>16,80 €</b>.<br>b) En total han bajado un <b>44 %</b>." },
    { nivel:"Básico", enun:"La cuota del gimnasio cuesta 35 €. Este año sube un 10 % y el año que viene subirá un 20 %.<br><b>a)</b> ¿Cuánto costará?<br><b>b)</b> ¿Qué porcentaje habrá subido en total?",
      pasos:[dia(["35 €","38,50 €","46,20 €"],[sube(10,"1,10"),sube(20,"1,20")],{total:"Índice total: 1,10 × 1,20 = 1,32"}),
             R`<b>a)</b> $35 \cdot 1,10 = 38,50$ €`, R`$38,50 \cdot 1,20 = 46,20$ €`,
             R`<b>b)</b> Índice total: $1,10 \cdot 1,20 = 1,32$ → $132\,\%$ → sube $32\,\%$`,
             "¡No es el 30 %!"],
      res:"a) La cuota costará <b>46,20 €</b>.<br>b) Habrá subido un <b>32 %</b>." },
    { nivel:"Consolidación", enun:"Una camiseta de 20 € sube un 10 % y después baja un 10 %.<br><b>a)</b> ¿Cuánto cuesta al final?<br><b>b)</b> ¿Qué porcentaje ha variado en total?",
      pasos:[dia(["20 €","22 €","19,80 €"],[sube(10,"1,10"),baja(10,"0,90")],{total:"Índice total: 1,10 × 0,90 = 0,99"}),
             R`<b>a)</b> $20 \cdot 1,10 = 22$ €`, R`$22 \cdot 0,90 = 19,80$ €`,
             "¡No vuelve a costar 20 €! El 10 % de la bajada se calcula sobre 22 €.",
             R`<b>b)</b> Índice total: $1,10 \cdot 0,90 = 0,99$ → pago el $99\,\%$ → baja $1\,\%$`],
      res:"a) Al final la camiseta cuesta <b>19,80 €</b>.<br>b) En total ha <b>bajado un 1 %</b>." },
    { nivel:"Consolidación", enun:"Un móvil de 300 € tiene un 10 % de descuento y después hay que añadir el 21 % de IVA.<br><b>a)</b> ¿Cuánto pago?<br><b>b)</b> ¿Qué porcentaje ha variado el precio? ¿Ha subido o bajado?",
      pasos:[dia(["300 €","270 €","326,70 €"],[baja(10,"0,90"),sube(21,"1,21")],{total:"Índice total: 0,90 × 1,21 = 1,089"}),
             R`<b>a)</b> $300 \cdot 0,90 = 270$ €`, R`$270 \cdot 1,21 = 326,70$ €`,
             R`<b>b)</b> Índice total: $0,90 \cdot 1,21 = 1,089$ → $108,9\,\%$ → sube $8,9\,\%$`,
             "¡No es el 11 %! No se resta 21 − 10."],
      res:"a) Pago <b>326,70 €</b> por el móvil.<br>b) El precio ha <b>subido</b> un <b>8,9 %</b>." },
    { nivel:"Problema", enun:"Una bici costaba 400 €. En primavera sube un 15 %, en verano la rebajan un 20 % y en septiembre baja otro 5 %.<br><b>a)</b> ¿Cuál es el precio final?<br><b>b)</b> ¿Qué porcentaje ha variado en total?",
      pasos:[dia(["400 €","460 €","368 €","349,60 €"],[sube(15,"1,15"),baja(20,"0,80"),baja(5,"0,95")],{subs:["inicial","primavera","verano","final"],total:"Índice total: 1,15 × 0,80 × 0,95 = 0,874"}),
             R`<b>a)</b> $400 \cdot 1,15 = 460$ €`, R`$460 \cdot 0,80 = 368$ €`, R`$368 \cdot 0,95 = 349,60$ €`,
             R`<b>b)</b> Índice total: $1,15 \cdot 0,80 \cdot 0,95 = 0,874$ → pago el $87,4\,\%$`,
             R`Baja $100\,\% - 87,4\,\% = 12,6\,\%$ (sumando y restando los % saldría −10 %, y está mal)`],
      res:"a) El precio final es <b>349,60 €</b>.<br>b) En total ha <b>bajado un 12,6 %</b>." },
    { nivel:"Problema", enun:"Unas zapatillas cuestan 80 € en dos tiendas. La tienda A hace un 35 % de descuento. La tienda B hace un 20 % y, sobre el precio rebajado, otro 15 %.<br><b>a)</b> ¿Cuánto cuestan en cada tienda?<br><b>b)</b> ¿Qué porcentaje de descuento hace en total la tienda B? ¿Dónde compro?",
      pasos:[R`<b>a)</b> Tienda A: $80 \cdot 0,65 = 52$ €`,
             dia(["80 €","64 €","54,40 €"],[baja(20,"0,80"),baja(15,"0,85")],{subs:["inicial","","tienda B"],total:"Índice total: 0,80 × 0,85 = 0,68"}),
             R`Tienda B: $80 \cdot 0,80 = 64$ € → $64 \cdot 0,85 = 54,40$ €`,
             R`<b>b)</b> Tienda B: $0,80 \cdot 0,85 = 0,68$ → pago el $68\,\%$ → descuento del $32\,\%$, no del $35\,\%$`],
      res:"a) En la tienda A cuestan <b>52 €</b> y en la B, <b>54,40 €</b>.<br>b) La tienda B descuenta un <b>32 %</b>: compro en la <b>tienda A</b>." },
    { nivel:"Para pensar", enun:"Un artículo sube un 20 % y después baja un 20 %. ¿Vuelve a su precio? Pruébalo con 100 € y di qué porcentaje ha variado.",
      pasos:[dia(["100 €","120 €","96 €"],[sube(20,"1,20"),baja(20,"0,80")],{total:"Índice total: 1,20 × 0,80 = 0,96"}),
             R`$100 \cdot 1,20 = 120$ €`, R`$120 \cdot 0,80 = 96$ €`,
             R`Índice total: $1,20 \cdot 0,80 = 0,96$ → pago el $96\,\%$ → baja $4\,\%$`],
      res:"<b>No</b> vuelve a su precio: queda un <b>4 %</b> más barato." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">Dos rebajas seguidas del 20 % y del 30 %, ¿son una rebaja del 50 %?</p>`}
    ]},
    { titulo:"Porcentajes encadenados", cuerpo:[
      {aviso:["Los porcentajes encadenados <b>NO se suman ni se restan</b>. Cada cambio se hace sobre el precio que queda: los <b>índices se multiplican</b>."], etq:"⚠️ Lo más importante"},
      {prop:["Encima de cada flecha escribo el <b>%</b> y su <b>índice</b>: sube → 1 + el %; baja → 1 − el %.", "➡ Voy hacia delante, de lo inicial a lo final, y <b>multiplico</b> por cada índice."], etq:"Las flechas"},
      {html:dia(["200 €","220 €","165 €"],[sube(10,"1,10"),baja(25,"0,75")])}
    ]},
    { titulo:"Pregunta 1: el precio final", cuerpo:[
      {ej:{etq:"👖 Problema de examen", enun:"Unos pantalones de 30 € tienen dos rebajas seguidas del 20 % y del 30 %. ¿Cuál es el precio final?",
        pasos:[dia(["30 €","24 €","16,80 €"],[baja(20,"0,80"),baja(30,"0,70")]),
               R`$30 \cdot 0,80 = 24$ €`, R`$24 \cdot 0,70 = 16,80$ €`],
        res:"El precio final es <b>16,80 €</b>."}},
      {nota:["El 30 % se calcula sobre 24 €, que es lo que queda, no sobre 30 €."]}
    ]},
    { titulo:"Pregunta 2: el % de variación final", cuerpo:[
      {prop:["Multiplico todos los índices: es el <b>índice total</b>.", "Lo paso a %: 0,56 = 56 %; 1,21 = 121 %.", "Si pasa del 100 %, <b>sube</b> lo que pasa. Si no llega al 100 %, <b>baja</b> lo que falta."], etq:"Cómo se hace"},
      {cols:[
        [{ej:{etq:"👖 Baja", enun:"Rebajas del 20 % y del 30 %.", pasos:[R`$0,80 \cdot 0,70 = 0,56$ → $56\,\%$`, R`$100\,\% - 56\,\% = 44\,\%$`], res:"Baja un <b>44 %</b>, no un 50 %."}}],
        [{ej:{etq:"🏋️ Sube", enun:"Dos subidas del 10 %.", pasos:[R`$1,10 \cdot 1,10 = 1,21$ → $121\,\%$`, R`$121\,\% - 100\,\% = 21\,\%$`], res:"Sube un <b>21 %</b>, no un 20 %."}}]
      ]}
    ]},
    { titulo:"Subidas y bajadas mezcladas", cuerpo:[
      {ej:{etq:"🛍️ Problema de examen", enun:"Un artículo de 200 € sube un 10 % y después baja un 25 %. <b>a)</b> ¿Precio final? <b>b)</b> ¿Qué porcentaje ha variado?",
        pasos:[dia(["200 €","220 €","165 €"],[sube(10,"1,10"),baja(25,"0,75")],{total:"Índice total: 1,10 × 0,75 = 0,825"}),
               R`<b>a)</b> $200 \cdot 1,10 = 220$ € → $220 \cdot 0,75 = 165$ €`,
               R`<b>b)</b> $1,10 \cdot 0,75 = 0,825$ → $82,5\,\%$ → baja $100\,\% - 82,5\,\% = 17,5\,\%$`],
        res:"a) Cuesta <b>165 €</b>. b) Ha <b>bajado un 17,5 %</b>: no un 15 % (25 − 10)."}},
      {nota:["Lo compruebo con el tipo 3: baja 200 − 165 = 35 €, y 35 : 200 · 100 = 17,5 % ✓"]}
    ]},
    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:["<b>Sumar los porcentajes</b>: −20 % y −30 % no es −50 %. Se multiplican los índices: 0,80 · 0,70 = 0,56 → −44 %."], etq:"⚠️ Error 1"},
      {aviso:["<b>Restar los porcentajes</b>: −15 % y +21 % (IVA) no es +6 %. 0,85 · 1,21 = 1,0285 → +2,85 %."], etq:"⚠️ Error 2"},
      {aviso:["<b>Calcular el segundo % sobre el precio del principio</b>: cada cambio se hace sobre el precio que queda."], etq:"⚠️ Error 3"},
      {aviso:["<b>Creer que subir un 20 % y bajar un 20 % deja el precio igual</b>: 1,20 · 0,80 = 0,96 → baja un 4 %."], etq:"⚠️ Error 4"}
    ]},
    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{lista:["Cada cambio tiene su índice: sube → 1 + el %; baja → 1 − el %. Lo escribo encima de su flecha.",
        "Precio final: hacia delante, multiplico por cada índice.",
        "% de variación final: multiplico los índices y lo paso a %. Más del 100 %: sube; menos: baja.",
        "Los porcentajes encadenados no se suman ni se restan."]}]},
      {estudio:[
        {comp:{q:"Sube un 10 % y luego otro 10 %. ¿Cuánto sube en total (%)?", sol:21, unidad:"%", explic:"1,10 · 1,10 = 1,21 → 121 % → +21 %", pista:"Multiplica los índices."}},
        {comp:{q:"Unos pantalones de 50 € tienen dos rebajas del 20 % y del 10 %. ¿Precio final?", sol:36, unidad:"€", explic:"50 · 0,80 = 40 € → 40 · 0,90 = 36 €", pista:"Hacia delante: multiplica por cada índice."}},
        {comp:{q:"Una rebaja del 40 % y después otra del 50 %. ¿Qué % baja en total?", sol:70, unidad:"%", explic:"0,60 · 0,50 = 0,30 → pago el 30 % → baja un 70 % (no un 90 %)", pista:"Multiplica los índices y mira cuánto falta para el 100 %."}}
      ]}
    ]}
  ]
});
})();

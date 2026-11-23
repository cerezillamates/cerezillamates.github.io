/* 2.º ESO · Tema 3 · Apartado 6.4: TIPO 4 · Porcentajes encadenados.
   Cambio pedido por la profesora (23-11-2026): en 2.º ESO SOLO dos preguntas:
     1) el precio final después de varios descuentos o incrementos;
     2) el % de variación final.
   MÉTODO DE LA PROFESORA (el del tipo 1, repetido): calculo el % del precio que hay y lo sumo o lo resto;
   después, otra vez el % del precio ya modificado y lo sumo o lo resto. Sin índices.
   El % de variación final, con el tipo 3: lo que ha subido o bajado en total entre el precio del principio, por 100.
   Siempre: los porcentajes NO se suman ni se restan.
   Diagrama de flechas solo hacia delante (window.curvas con solo:"F"), con el % y los euros encima de cada flecha.
   Hacia atrás (precio inicial), un % desconocido y las ofertas van en 3.º ESO (apartado 5.4).
   Clase, casa, autoevaluación, batería (repaso) y control 1 usan los mismos dos tipos de pregunta. */
(function(){
const R = String.raw;
// una flecha: % y los euros que se suman o se restan
const sube = (p, e) => ({up:true, pct:`+${p} %`, op:`+ ${e} €`});
const baja = (p, e) => ({up:false, pct:`−${p} %`, op:`− ${e} €`});
const dia = (vals, pasos, o) => window.curvas(vals, pasos, Object.assign({solo:"F", leyenda:"➜ calculo el % del precio que hay y lo sumo o lo resto"}, o || {}));
// un cambio con el método del tipo 1: calculo el % y lo sumo o lo resto
const cambio = (que, p, dec, antes, cant, s, despues) => [
  R`${que}: el ${p} % de ${antes} € $= ${dec} \cdot ${antes} = ${cant}$ €`,
  R`Se ${s ? "suma" : "resta"}: $${antes} ${s ? "+" : "-"} ${cant} = ${despues}$ €`];
// el % de variación final con el tipo 3
const variacion = (ini, fin, dif, p, s) => [
  R`En total ${s ? "sube" : "baja"}: $${s ? fin + " - " + ini : ini + " - " + fin} = ${dif}$ €`,
  R`¿Qué % es? (tipo 3: el total es el precio del principio, ${ini} €)`,
  R`$\% = \dfrac{${dif}}{${ini}} \cdot 100 = ${p}\,\%$`];

TEMA.registrar({
  num: "6.4",
  titulo: "Porcentajes · Tipo 4: encadenados",
  videos: [
    {t:"Porcentajes encadenados", url:"https://www.youtube.com/watch?v=ynSBIu_6zSE"}
  ],

  clase: [
    { nivel:"Aplicación", min:5,
      enun:"Un reproductor de música costaba 110,50 €. Le aplican una rebaja del 20 % y después otra rebaja del 10 %.<br><b>a)</b> ¿Cuál es el precio final?<br><b>b)</b> ¿Qué porcentaje ha bajado en total?",
      pasos:[dia(["110,50 €","88,40 €","79,56 €"],[baja(20,"22,10"),baja(10,"8,84")],{subs:["inicial","con 1 rebaja","final"]}),
             "<b>a)</b>",
             ...cambio("1.ª rebaja","20","0,20","110,50","22,10",false,"88,40"),
             ...cambio("2.ª rebaja","10","0,10","88,40","8,84",false,"79,56"),
             "La segunda rebaja se calcula sobre 88,40 €, no sobre 110,50 €.",
             "<b>b)</b>",
             ...variacion("110,50","79,56","30,94","28",false),
             "¡No es el 30 %! Los porcentajes no se suman."],
      res:"a) El precio final es <b>79,56 €</b>.<br>b) En total ha bajado un <b>28 %</b>." },
    { nivel:"Práctica", min:5,
      enun:"Una tablet cuesta 280 €. La rebajan un 15 % y al pagar le añaden el 21 % de IVA.<br><b>a)</b> ¿Cuánto pago?<br><b>b)</b> ¿Qué porcentaje ha variado el precio? ¿Ha subido o bajado?",
      pasos:[dia(["280 €","238 €","287,98 €"],[baja(15,"42"),sube(21,"49,98")]),
             "<b>a)</b>",
             ...cambio("Rebaja","15","0,15","280","42",false,"238"),
             ...cambio("IVA","21","0,21","238","49,98",true,"287,98"),
             "<b>b)</b> Pago más que al principio: ha subido.",
             ...variacion("280","287,98","7,98","2,85",true),
             "¡No es el 6 %! No se resta 21 − 15."],
      res:"a) Pago <b>287,98 €</b> por la tablet.<br>b) El precio ha <b>subido</b> un <b>2,85 %</b>." },
    { nivel:"Práctica", min:5,
      enun:"El abono del polideportivo cuesta 40 €. En enero sube un 10 % y en septiembre vuelve a subir otro 10 %.<br><b>a)</b> ¿Cuánto cuesta al final?<br><b>b)</b> ¿Qué porcentaje ha subido en total?",
      pasos:[dia(["40 €","44 €","48,40 €"],[sube(10,"4"),sube(10,"4,40")]),
             "<b>a)</b>",
             ...cambio("Enero","10","0,10","40","4",true,"44"),
             ...cambio("Septiembre","10","0,10","44","4,40",true,"48,40"),
             "¡No son 48 €! La segunda subida se calcula sobre 44 €, no sobre 40 €.",
             "<b>b)</b>",
             ...variacion("40","48,40","8,40","21",true)],
      res:"a) Al final el abono cuesta <b>48,40 €</b>.<br>b) Ha subido un <b>21 %</b> (no un 20 %)." },
    { nivel:"Problema", min:6,
      enun:"Un videojuego costaba 60 €. Cuando sale la nueva versión sube un 25 %; en rebajas baja un 20 % y en el Black Friday baja otro 10 %.<br><b>a)</b> ¿Cuál es el precio final?<br><b>b)</b> ¿Qué porcentaje ha variado en total?",
      pasos:[dia(["60 €","75 €","60 €","54 €"],[sube(25,"15"),baja(20,"15"),baja(10,"6")],{subs:["inicial","nueva versión","rebajas","final"]}),
             "<b>a)</b>",
             ...cambio("Subida","25","0,25","60","15",true,"75"),
             ...cambio("Rebajas","20","0,20","75","15",false,"60"),
             ...cambio("Black Friday","10","0,10","60","6",false,"54"),
             "<b>b)</b>",
             ...variacion("60","54","6","10",false),
             "Si sumamos y restamos los % (+25 − 20 − 10) sale −5 %, y está mal."],
      res:"a) El precio final es <b>54 €</b>.<br>b) En total ha <b>bajado un 10 %</b>." },
    { nivel:"Reto", min:6,
      enun:"Unas zapatillas de 80 € bajan un 50 % y después suben un 50 %.<br><b>a)</b> ¿Vuelven a costar 80 €?<br><b>b)</b> ¿Qué porcentaje han variado en total?",
      pasos:[dia(["80 €","40 €","60 €"],[baja(50,"40"),sube(50,"20")]),
             "<b>a)</b>",
             ...cambio("Bajada","50","0,50","80","40",false,"40"),
             ...cambio("Subida","50","0,50","40","20",true,"60"),
             "No vuelven a 80 €: el 50 % de la subida se calcula sobre 40 €, que es menos.",
             "<b>b)</b>",
             ...variacion("80","60","20","25",false)],
      res:"a) <b>No</b>: al final cuestan <b>60 €</b>.<br>b) En total han <b>bajado un 25 %</b>." }
  ],

  casa: [
    { nivel:"Básico", enun:"Unos pantalones costaban 30 € y les aplican dos rebajas seguidas del 20 % y del 30 %.<br><b>a)</b> ¿Cuál es el precio final?<br><b>b)</b> ¿Qué porcentaje han bajado en total?",
      pasos:[dia(["30 €","24 €","16,80 €"],[baja(20,"6"),baja(30,"7,20")]),
             "<b>a)</b>",
             ...cambio("1.ª rebaja","20","0,20","30","6",false,"24"),
             ...cambio("2.ª rebaja","30","0,30","24","7,20",false,"16,80"),
             "<b>b)</b>",
             ...variacion("30","16,80","13,20","44",false),
             "¡No es una rebaja del 50 %!"],
      res:"a) El precio final es <b>16,80 €</b>.<br>b) En total han bajado un <b>44 %</b>." },
    { nivel:"Básico", enun:"La cuota del gimnasio cuesta 35 €. Este año sube un 10 % y el año que viene subirá un 20 %.<br><b>a)</b> ¿Cuánto costará?<br><b>b)</b> ¿Qué porcentaje habrá subido en total?",
      pasos:[dia(["35 €","38,50 €","46,20 €"],[sube(10,"3,50"),sube(20,"7,70")]),
             "<b>a)</b>",
             ...cambio("Este año","10","0,10","35","3,50",true,"38,50"),
             ...cambio("El año que viene","20","0,20","38,50","7,70",true,"46,20"),
             "<b>b)</b>",
             ...variacion("35","46,20","11,20","32",true),
             "¡No es el 30 %!"],
      res:"a) La cuota costará <b>46,20 €</b>.<br>b) Habrá subido un <b>32 %</b>." },
    { nivel:"Consolidación", enun:"Una camiseta de 20 € sube un 10 % y después baja un 10 %.<br><b>a)</b> ¿Cuánto cuesta al final?<br><b>b)</b> ¿Qué porcentaje ha variado en total?",
      pasos:[dia(["20 €","22 €","19,80 €"],[sube(10,"2"),baja(10,"2,20")]),
             "<b>a)</b>",
             ...cambio("Subida","10","0,10","20","2",true,"22"),
             ...cambio("Bajada","10","0,10","22","2,20",false,"19,80"),
             "¡No vuelve a costar 20 €! El 10 % de la bajada se calcula sobre 22 €.",
             "<b>b)</b>",
             ...variacion("20","19,80","0,20","1",false)],
      res:"a) Al final la camiseta cuesta <b>19,80 €</b>.<br>b) En total ha <b>bajado un 1 %</b>." },
    { nivel:"Consolidación", enun:"Un móvil de 300 € tiene un 10 % de descuento y después hay que añadir el 21 % de IVA.<br><b>a)</b> ¿Cuánto pago?<br><b>b)</b> ¿Qué porcentaje ha variado el precio? ¿Ha subido o bajado?",
      pasos:[dia(["300 €","270 €","326,70 €"],[baja(10,"30"),sube(21,"56,70")]),
             "<b>a)</b>",
             ...cambio("Descuento","10","0,10","300","30",false,"270"),
             ...cambio("IVA","21","0,21","270","56,70",true,"326,70"),
             "<b>b)</b> Pago más que al principio: ha subido.",
             ...variacion("300","326,70","26,70","8,9",true),
             "¡No es el 11 %! No se resta 21 − 10."],
      res:"a) Pago <b>326,70 €</b> por el móvil.<br>b) El precio ha <b>subido</b> un <b>8,9 %</b>." },
    { nivel:"Problema", enun:"Una bici costaba 400 €. En primavera sube un 15 %, en verano la rebajan un 20 % y en septiembre baja otro 5 %.<br><b>a)</b> ¿Cuál es el precio final?<br><b>b)</b> ¿Qué porcentaje ha variado en total?",
      pasos:[dia(["400 €","460 €","368 €","349,60 €"],[sube(15,"60"),baja(20,"92"),baja(5,"18,40")],{subs:["inicial","primavera","verano","final"]}),
             "<b>a)</b>",
             ...cambio("Primavera","15","0,15","400","60",true,"460"),
             ...cambio("Verano","20","0,20","460","92",false,"368"),
             ...cambio("Septiembre","5","0,05","368","18,40",false,"349,60"),
             "<b>b)</b>",
             ...variacion("400","349,60","50,40","12,6",false),
             "Sumando y restando los % (+15 − 20 − 5) saldría −10 %, y está mal."],
      res:"a) El precio final es <b>349,60 €</b>.<br>b) En total ha <b>bajado un 12,6 %</b>." },
    { nivel:"Problema", enun:"Unas zapatillas cuestan 80 € en dos tiendas. La tienda A hace un 35 % de descuento. La tienda B hace un 20 % y, sobre el precio rebajado, otro 15 %.<br><b>a)</b> ¿Cuánto cuestan en cada tienda?<br><b>b)</b> ¿Qué porcentaje de descuento hace en total la tienda B? ¿Dónde compro?",
      pasos:["<b>a)</b> Tienda A:",
             ...cambio("Descuento","35","0,35","80","28",false,"52"),
             "Tienda B:",
             dia(["80 €","64 €","54,40 €"],[baja(20,"16"),baja(15,"9,60")],{subs:["inicial","","tienda B"]}),
             ...cambio("1.er descuento","20","0,20","80","16",false,"64"),
             ...cambio("2.º descuento","15","0,15","64","9,60",false,"54,40"),
             "<b>b)</b> Tienda B:",
             ...variacion("80","54,40","25,60","32",false),
             "La tienda B descuenta un 32 %, no un 35 %."],
      res:"a) En la tienda A cuestan <b>52 €</b> y en la B, <b>54,40 €</b>.<br>b) La tienda B descuenta un <b>32 %</b>: compro en la <b>tienda A</b>." },
    { nivel:"Para pensar", enun:"Un artículo sube un 20 % y después baja un 20 %. ¿Vuelve a su precio? Pruébalo con 100 € y di qué porcentaje ha variado.",
      pasos:[dia(["100 €","120 €","96 €"],[sube(20,"20"),baja(20,"24")]),
             ...cambio("Subida","20","0,20","100","20",true,"120"),
             ...cambio("Bajada","20","0,20","120","24",false,"96"),
             ...variacion("100","96","4","4",false)],
      res:"<b>No</b> vuelve a su precio: queda un <b>4 %</b> más barato." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">Dos rebajas seguidas del 20 % y del 30 %, ¿son una rebaja del 50 %?</p>`}
    ]},
    { titulo:"Porcentajes encadenados", cuerpo:[
      {aviso:["Los porcentajes encadenados <b>NO se suman ni se restan</b>. Cada cambio se hace sobre el precio que queda."], etq:"⚠️ Lo más importante"},
      {prop:["<b>Paso 1.</b> Calculo el % del precio que hay y lo <b>sumo</b> si sube o lo <b>resto</b> si baja (como en el tipo 1).", "<b>Paso 2.</b> Con el precio nuevo, otra vez: calculo el % y lo sumo o lo resto.", "Y así con cada cambio."], etq:"Cómo se hace"},
      {html:dia(["200 €","220 €","165 €"],[sube(10,"20"),baja(25,"55")])}
    ]},
    { titulo:"Pregunta 1: el precio final", cuerpo:[
      {ej:{etq:"👖 Problema de examen", enun:"Unos pantalones de 30 € tienen dos rebajas seguidas del 20 % y del 30 %. ¿Cuál es el precio final?",
        pasos:[dia(["30 €","24 €","16,80 €"],[baja(20,"6"),baja(30,"7,20")]),
               ...cambio("1.ª rebaja","20","0,20","30","6",false,"24"),
               ...cambio("2.ª rebaja","30","0,30","24","7,20",false,"16,80")],
        res:"El precio final es <b>16,80 €</b>."}},
      {nota:["El 30 % se calcula sobre 24 €, que es lo que queda, no sobre 30 €."]}
    ]},
    { titulo:"Pregunta 2: el % de variación final", cuerpo:[
      {prop:["Resto el precio del principio y el del final: es lo que ha <b>subido</b> o <b>bajado</b> en total.", "¿Qué % es? Es el <b>tipo 3</b>: lo que sube o baja entre el precio del <b>principio</b>, por 100."], etq:"Cómo se hace"},
      {ej:{etq:"👖 Los mismos pantalones", enun:"De 30 € a 16,80 €. ¿Qué porcentaje han bajado en total?",
        pasos:[...variacion("30","16,80","13,20","44",false)],
        res:"Han bajado un <b>44 %</b>, no un 50 % (20 + 30)."}}
    ]},
    { titulo:"Subidas y bajadas mezcladas", cuerpo:[
      {ej:{etq:"🛍️ Problema de examen", enun:"Un artículo de 200 € sube un 10 % y después baja un 25 %. <b>a)</b> ¿Precio final? <b>b)</b> ¿Qué porcentaje ha variado?",
        pasos:[dia(["200 €","220 €","165 €"],[sube(10,"20"),baja(25,"55")]),
               "<b>a)</b>",
               ...cambio("Subida","10","0,10","200","20",true,"220"),
               ...cambio("Bajada","25","0,25","220","55",false,"165"),
               "<b>b)</b>",
               ...variacion("200","165","35","17,5",false)],
        res:"a) Cuesta <b>165 €</b>.<br>b) Ha <b>bajado un 17,5 %</b>: no un 15 % (25 − 10)."}}
    ]},
    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:["<b>Sumar los porcentajes</b>: dos rebajas del 20 % y del 30 % no son una rebaja del 50 %, sino del 44 %."], etq:"⚠️ Error 1"},
      {aviso:["<b>Restar los porcentajes</b>: una rebaja del 15 % y el 21 % de IVA no es subir un 6 %, sino un 2,85 %."], etq:"⚠️ Error 2"},
      {aviso:["<b>Calcular el segundo % sobre el precio del principio</b>: cada cambio se hace sobre el precio que queda."], etq:"⚠️ Error 3"},
      {aviso:["<b>En el % final, dividir entre el precio del final</b>: el total es siempre el precio del <b>principio</b>."], etq:"⚠️ Error 4"},
      {aviso:["<b>Creer que subir un 20 % y bajar un 20 % deja el precio igual</b>: 100 € → 120 € → 96 €, baja un 4 %."], etq:"⚠️ Error 5"}
    ]},
    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{lista:["Precio final: en cada cambio calculo el % del precio que hay y lo sumo (sube) o lo resto (baja).",
        "Cada % se calcula sobre el precio que queda, no sobre el del principio.",
        "% de variación final: lo que ha subido o bajado en total entre el precio del principio, por 100 (tipo 3).",
        "Los porcentajes encadenados no se suman ni se restan."]}]},
      {estudio:[
        {comp:{q:"Unos pantalones de 50 € tienen dos rebajas del 20 % y del 10 %. ¿Precio final?", sol:36, unidad:"€", explic:"20 % de 50 = 10 → 50 − 10 = 40 €; 10 % de 40 = 4 → 40 − 4 = 36 €", pista:"El 10 % se calcula sobre lo que queda tras la primera rebaja."}},
        {comp:{q:"Un precio de 100 € sube un 10 % y luego otro 10 %. ¿Cuánto sube en total (%)?", sol:21, unidad:"%", explic:"100 → 110 → 121 €: sube 21 € de 100 € → 21 %", pista:"La segunda subida es el 10 % de 110."}},
        {comp:{q:"Un precio de 100 € baja un 40 % y después otro 50 %. ¿Qué % baja en total?", sol:70, unidad:"%", explic:"100 → 60 → 30 €: baja 70 € de 100 € → 70 % (no un 90 %)", pista:"El 50 % se calcula sobre 60 €."}}
      ]}
    ]}
  ]
});
})();

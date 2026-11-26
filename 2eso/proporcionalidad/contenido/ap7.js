/* 2.º ESO · Tema 3 · Apartado 7: Interés simple
   Cambio pedido por la profesora (16-11-2026): sin la fórmula I = c · r · t, que no entienden.
   Cambio pedido por la profesora (20-11-2026): SIN reglas de tres para el interés.
     Paso 1: el interés de 1 año es calcular un % (tipo 1): el % en decimal por el capital (0,03 · 2000).
     Paso 2: se multiplica por el tiempo (años). En meses: 1 año = 12 meses (el de 1 mes es el de 1 año : 12);
             en días: 1 año = 360 días.
   Cambio pedido por la profesora (26-11-2026): en este apartado SOLO problemas de calcular el INTERÉS y el CAPITAL FINAL.
     Buscar el rédito, el capital o el tiempo pasa a AMPLIACIÓN (contenido/ap25.js), sin borrar nada. */
(function(){
const R = String.raw;
const cuadro = (m1, m2, a, b, t) => `<table class="t cuadro"><tr><th>${m1}</th><th class="fl">(${t||"D"}) ⟶</th><th>${m2}</th></tr><tr><td>${a[0]}</td><td></td><td>${a[1]}</td></tr><tr><td>${b[0]}</td><td></td><td class="x">${b[1]}</td></tr></table>`;

TEMA.registrar({
  num: 7,
  titulo: "Interés simple",
  videos: [],

  clase: [
    { nivel:"Aplicación", min:5,
      enun:"Dejo 2000 € en el banco al 3 % anual durante 2 años. <b>a)</b> ¿Qué interés me dan? <b>b)</b> ¿Cuánto dinero tendré al final?",
      pasos:["<b>Paso 1. Lo que me da el banco en 1 año</b>: el 3 % de 2000 € (tipo 1, multiplico).",
             R`$0,03 \cdot 2000 = 60$ € cada año`,
             "<b>Paso 2. Multiplico por el tiempo</b>: 2 años.",
             R`<b>a)</b> $60 \cdot 2 = 120$ €`,
             R`<b>b)</b> Capital final: $2000 + 120 = 2120$ €`],
      res:"a) Me dan <b>120 €</b> de interés.<br>b) Al final tendré <b>2120 €</b>." },
    { nivel:"Aplicación", min:5,
      enun:"Guardo 8000 € al 1,5 % anual durante 4 años. ¿Qué interés me dan? ¿Cuánto tendré al final?",
      pasos:[R`1 año: $0,015 \cdot 8000 = 120$ €`,
             R`4 años: $120 \cdot 4 = 480$ €`,
             R`Capital final: $8000 + 480 = 8480$ €`],
      res:"Me dan <b>480 €</b> y al final tendré <b>8480 €</b>." },
    { nivel:"Práctica", min:6,
      enun:"Dejo 4800 € al 3 % durante 8 meses. <b>a)</b> ¿Qué interés producen? <b>b)</b> ¿Cuánto dinero tendré al final?",
      pasos:["<b>Paso 1. El interés de 1 año</b>: el 3 % de 4800 €.",
             R`$0,03 \cdot 4800 = 144$ € en 1 año`,
             R`<b>Paso 2. El tiempo está en meses</b>: 1 año son 12 meses. En 1 mes: $144 : 12 = 12$ €`,
             R`<b>a)</b> En 8 meses: $12 \cdot 8 = 96$ €`,
             R`<b>b)</b> $4800 + 96 = 4896$ €`],
      res:"a) Producen <b>96 €</b> de interés.<br>b) Al final tendré <b>4896 €</b>." },
    { nivel:"Práctica", min:6,
      enun:"Dejo 3600 € al 2 % durante 120 días. ¿Qué interés gano y cuánto dinero tengo al final? (El año de los bancos tiene 360 días.)",
      pasos:[R`1 año: $0,02 \cdot 3600 = 72$ €`,
             R`120 días son la tercera parte del año: $360 : 120 = 3$`,
             R`Interés: $72 : 3 = 24$ €`,
             R`Capital final: $3600 + 24 = 3624$ €`],
      res:"Gano <b>24 €</b> y tengo <b>3624 €</b> al final." },
    { nivel:"Problema", min:6,
      enun:"Pido un préstamo de 1200 € al 8 % anual durante 6 meses para comprarme un móvil. <b>a)</b> ¿Cuánto pago de intereses? <b>b)</b> ¿Cuánto devuelvo en total?",
      pasos:[R`1 año: $0,08 \cdot 1200 = 96$ €`,
             R`1 mes: $96 : 12 = 8$ €`,
             R`<b>a)</b> 6 meses: $8 \cdot 6 = 48$ €`,
             R`<b>b)</b> $1200 + 48 = 1248$ €`],
      res:"a) Pago <b>48 €</b> de intereses.<br>b) Devuelvo <b>1248 €</b>." },
    { nivel:"Reto", min:8,
      enun:"Mi hermano pide un préstamo de 3000 € para una moto al 6 % de interés simple anual y lo devuelve en 18 meses. <b>a)</b> ¿Cuánto paga de intereses? <b>b)</b> ¿Cuánto devuelve en total? <b>c)</b> Si paga lo mismo cada mes, ¿cuánto es cada cuota?",
      pasos:["<b>Paso 1. El interés de 1 año</b>: el 6 % de 3000 €.",
             R`$0,06 \cdot 3000 = 180$ € cada año`,
             R`<b>Paso 2.</b> En 1 mes: $180 : 12 = 15$ €. En 18 meses:`,
             R`<b>a)</b> $15 \cdot 18 = 270$ €`,
             R`<b>b)</b> $3000 + 270 = 3270$ €`,
             R`<b>c)</b> $3270 : 18 \approx 181,67$ € al mes`],
      res:"a) Paga <b>270 €</b> de interés.<br>b) Devuelve <b>3270 €</b> en total.<br>c) Paga unos <b>181,67 €</b> al mes." }
  ],

  casa: [
    { nivel:"Básico", enun:"Calcula el interés y el capital final de 1200 € al 2 % durante 5 años.",
      pasos:[R`1 año: $0,02 \cdot 1200 = 24$ €`,
             R`5 años: $24 \cdot 5 = 120$ €`, R`Capital final: $1200 + 120 = 1320$ €`],
      res:"El interés es de <b>120 €</b> y el capital final, <b>1320 €</b>." },
    { nivel:"Básico", enun:"Pido 2500 € prestados al 6 % durante 3 años. ¿Cuánto pago de intereses? ¿Cuánto devuelvo?",
      pasos:[R`1 año: $0,06 \cdot 2500 = 150$ €`,
             R`3 años: $150 \cdot 3 = 450$ €`, R`Devuelvo: $2500 + 450 = 2950$ €`],
      res:"Pago <b>450 €</b> de intereses y devuelvo <b>2950 €</b>." },
    { nivel:"Básico", enun:"Calcula el interés y el capital final de 6000 € al 1,5 % durante 6 meses.",
      pasos:[R`1 año: $0,015 \cdot 6000 = 90$ €`,
             R`1 mes: $90 : 12 = 7,50$ €`, R`6 meses: $7,50 \cdot 6 = 45$ €`, R`Capital final: $6000 + 45 = 6045$ €`],
      res:"El interés es de <b>45 €</b> y el capital final, <b>6045 €</b>." },
    { nivel:"Consolidación", enun:"Calcula el interés y el capital final de 12 000 € durante 18 meses al 3,5 % anual.",
      pasos:[R`1 año: $0,035 \cdot 12\,000 = 420$ €`,
             R`1 mes: $420 : 12 = 35$ €`, R`18 meses: $35 \cdot 18 = 630$ €`, R`Capital final: $12\,000 + 630 = 12\,630$ €`],
      res:"El interés es de <b>630 €</b> y el capital final, <b>12 630 €</b>." },
    { nivel:"Consolidación", enun:"Una abuela deja 4500 € a su nieta en el banco al 2,4 % durante 10 meses. ¿Cuánto dinero tendrá la nieta al final?",
      pasos:[R`1 año: $0,024 \cdot 4500 = 108$ €`,
             R`1 mes: $108 : 12 = 9$ €`, R`10 meses: $9 \cdot 10 = 90$ €`, R`Al final: $4500 + 90 = 4590$ €`],
      res:"La nieta tendrá <b>4590 €</b> (90 € de interés)." },
    { nivel:"Problema", enun:"Si dejo 2400 € al 4 % durante 90 días, ¿qué interés gano? ¿Cuánto tengo al final? (En los bancos, el año comercial tiene 360 días.)",
      pasos:[R`1 año: $0,04 \cdot 2400 = 96$ €`,
             R`90 días son la cuarta parte del año: $360 : 90 = 4$`, R`Interés: $96 : 4 = 24$ €`, R`Capital final: $2400 + 24 = 2424$ €`],
      res:"Gano <b>24 €</b> de interés y tengo <b>2424 €</b> al final." },
    { nivel:"Para pensar", enun:"Tengo 5000 €. El banco A me paga un 2 % durante 3 años y el banco B un 2,5 % durante 2 años. ¿Con cuál tendré más dinero al final?",
      pasos:[R`A: 1 año $= 0,02 \cdot 5000 = 100$ € → 3 años: $100 \cdot 3 = 300$ € → $5000 + 300 = 5300$ €`,
             R`B: 1 año $= 0,025 \cdot 5000 = 125$ € → 2 años: $125 \cdot 2 = 250$ € → $5000 + 250 = 5250$ €`,
             "Aunque B paga un % mayor, A me da más porque el dinero está más tiempo."],
      res:"Con <b>el banco A</b>: 5300 €, 50 € más." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">¿Cuánto te paga el banco por guardar tu dinero?</p>`}
    ]},

    { titulo:"El banco te paga por guardar tu dinero", cuerpo:[
      {ej:{etq:"🐷 La hucha del banco", enun:"Sara guarda en el banco 6000 € durante 3 años. El banco le paga un 2 % cada año. ¿Cuánto gana?",
        pasos:["Al 2 %: cada año le dan el 2 % de su dinero.", R`En 1 año: $0,02 \cdot 6000 = 120$ €`, R`En 3 años: $120 \cdot 3 = 360$ €`, R`Al final tiene $6000 + 360 = 6360$ €`], res:"Sara gana <b>360 €</b>."}},
      {html:`<div class="anios">${[0,1,2,3].map(a=>`<div><b>año ${a}</b><span class="cap">6000</span>${"<span class='int'>+120</span>".repeat(a)}</div>`).join("")}</div>`},
      {nota:["En el <b>interés simple</b> se gana <b>lo mismo cada año</b>."]}
    ]},

    { titulo:"Las palabras del banco", cuerpo:[
      {cols:[
        [{def:["💰 <b>Capital</b>: el dinero que guardas o que pides prestado."], etq:"Capital"}],
        [{def:["📊 <b>Rédito</b>: el % que paga el banco <b>cada año</b>.<br><b>Al 3 %</b> = cada año me dan el 3 % de mi dinero."], etq:"Rédito"}],
        [{def:["⏳ <b>Tiempo</b>: años, meses o días."], etq:"Tiempo"}]
      ]},
      {prop:["🎁 <b>Interés</b>: lo que ganas (o lo que pagas si pides un préstamo).", "<b>Capital final</b> = capital + interés."], etq:"Interés"}
    ]},

    { titulo:"Se resuelve en tres pasos", cuerpo:[
      {prop:["<b>Paso 1.</b> Lo que me da el banco en <b>1 año</b>: el % del capital. Es un <b>tipo 1</b>: el % en decimal <b>por</b> el capital.", "<b>Paso 2.</b> Lo <b>multiplico por el tiempo</b> (los años): es el <b>interés</b>.", "<b>Paso 3.</b> <b>Capital final</b> = capital + interés."], etq:"El método"},
      {ej:{enun:"Dejo 2000 € al 3 % durante 2 años. ¿Qué interés me dan? ¿Cuánto tengo al final?",
        pasos:[R`1 año: $0,03 \cdot 2000 = 60$ €`, R`2 años: $60 \cdot 2 = 120$ €`, R`Capital final: $2000 + 120 = 2120$ €`],
        res:"Me dan <b>120 €</b> y al final tengo <b>2120 €</b>."}}
    ]},

    { titulo:"¿Y si el tiempo está en meses o en días?", cuerpo:[
      {prop:["1 año son <b>12 meses</b>: lo de 1 mes es lo de 1 año <b>: 12</b>.", "Si son <b>días</b>: 1 año son <b>360 días</b> (el año de los bancos). Miro qué parte del año es: 90 días son la cuarta parte."], etq:"Meses y días"},
      {ej:{enun:"Dejo 4800 € al 3 % durante 8 meses. ¿Qué interés producen? ¿Cuánto tengo al final?",
        pasos:[R`1 año: $0,03 \cdot 4800 = 144$ €`, R`1 mes: $144 : 12 = 12$ €`, R`8 meses: $12 \cdot 8 = 96$ €`, R`Capital final: $4800 + 96 = 4896$ €`],
        res:"Producen <b>96 €</b> y al final tengo <b>4896 €</b>."}}
    ]},

    { titulo:"Pedir un préstamo", cuerpo:[
      {ej:{etq:"💳 Al revés: ahora pagas tú", enun:"Pides 2000 € prestados al 5 % durante 2 años para un ordenador. ¿Cuánto devuelves?",
        pasos:[R`1 año: $0,05 \cdot 2000 = 100$ €`, R`2 años: $100 \cdot 2 = 200$ €`, R`Devuelves $2000 + 200 = 2200$ €`], res:"Devuelves <b>2200 €</b>: el préstamo te cuesta 200 €."}},
      {nota:["Cuando ahorras, el interés lo ganas tú; cuando pides prestado, lo pagas tú."]}
    ]},

    { titulo:"🪄 Trucos y ⚠️ errores", cuerpo:[
      {truco:["<b>Empieza siempre por el interés de 1 año</b>: el % en decimal por el capital."], etq:"🪄 Truco"},
      {truco:["<b>Comprueba</b> el resultado: ¿da el interés del enunciado?"], etq:"🪄 Truco"},
      {aviso:["<b>Escribir mal el decimal</b>: el 2,5 % es 0,025 y el 3 % es 0,03."], etq:"⚠️ Error"},
      {aviso:["Multiplicar por los <b>meses</b> el interés de <b>1 año</b>: primero divide entre 12."], etq:"⚠️ Error"},
      {aviso:["Confundir el <b>interés</b> (lo que ganas) con el <b>capital final</b> (lo que tienes al final)."], etq:"⚠️ Error"}
    ]},

    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{lista:[
        "<b>Al r %</b>: cada año me dan el r % de mi dinero.",
        "Paso 1: el interés de 1 año = el % en decimal por el capital (tipo 1).",
        "Paso 2: lo multiplico por los años. En meses: : 12 y por los meses. En días: : 360 y por los días.",
        "Capital final = capital + interés.",
        "⭐ Buscar el rédito, el capital o el tiempo es <b>ampliación</b>: está en la pestaña «Ampliación y retos»."
      ]}]},
      {estudio:[
        {comp:{q:"¿Qué interés dan 3000 € al 4 % durante 2 años?", sol:240, unidad:"€", explic:"1 año: 0,04 · 3000 = 120 €. 2 años: 120 · 2 = 240 €", pista:"Primero el interés de 1 año: el 4 % de 3000."}},
        {comp:{q:"¿Cuánto dinero tendré al final de esos 2 años?", sol:3240, unidad:"€", explic:"Capital final: 3000 + 240 = 3240 €", pista:"Capital final = capital + interés."}},
        {comp:{q:"¿Qué interés dan 3000 € al 4 % durante 6 meses?", sol:60, unidad:"€", explic:"1 año: 120 €. 1 mes: 120 : 12 = 10 €. 6 meses: 10 · 6 = 60 €", pista:"El de 1 año entre 12, y por 6."}},
        {html:`<p><a class="sa-btn" href="apuntes.html?ap=25">⭐ Ampliación: buscar el rédito, el capital o el tiempo</a></p>`}
      ]}
    ]}
  ]
});
})();

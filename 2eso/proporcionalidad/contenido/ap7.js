/* 2.º ESO · Tema 3 · Apartado 7: Interés simple
   Cambio pedido por la profesora (16-11-2026): sin la fórmula I = c · r · t, que no entienden.
   Cambio pedido por la profesora (20-11-2026): SIN reglas de tres para el interés.
     Paso 1: el interés de 1 año es calcular un % (tipo 1): el % en decimal por el capital (0,03 · 2000).
     Paso 2: se multiplica por el tiempo (años). En meses: 1 año = 12 meses (el de 1 mes es el de 1 año : 12);
             en días: 1 año = 360 días.
   Para buscar el rédito: el interés de 1 año y el % con la fórmula del tipo 3 (parte : total · 100).
   Para buscar el capital: el interés de 1 año es el r % del capital → tipo 2 (regla de tres con el 100 %).
   Para buscar el tiempo: cuántas veces cabe el interés de 1 año. */
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
             R`$60 \cdot 2 = 120$ €`,
             R`<b>b)</b> Al final: $2000 + 120 = 2120$ €`],
      res:"a) Me dan <b>120 €</b> de interés.<br>b) Al final tendré <b>2120 €</b>." },
    { nivel:"Aplicación", min:5,
      enun:"¿Qué interés producen 4800 € al 3 % durante 8 meses?",
      pasos:["<b>Paso 1. El interés de 1 año</b>: el 3 % de 4800 €.",
             R`$0,03 \cdot 4800 = 144$ € en 1 año`,
             R`<b>Paso 2. El tiempo está en meses</b>: 1 año son 12 meses. En 1 mes: $144 : 12 = 12$ €`,
             R`En 8 meses: $12 \cdot 8 = 96$ €`],
      res:"Producen <b>96 €</b> de interés." },
    { nivel:"Práctica", min:6,
      enun:"Unos ahorros de 5000 € han producido 450 € en 3 años. ¿A qué rédito (porcentaje anual) estaban?",
      pasos:[R`<b>Paso 1. El interés de 1 año</b>: en 3 años, 450 € → en 1 año $450 : 3 = 150$ €`,
             "<b>Paso 2. ¿Qué % de 5000 € son 150 €?</b> Es un tipo 3:",
             R`$\% = \dfrac{\text{parte}}{\text{total}} \cdot 100 = \dfrac{150}{5000} \cdot 100 = 3\,\%$`],
      res:"Estaban al <b>3 %</b> anual." },
    { nivel:"Práctica", min:6,
      enun:"¿Cuántos años tengo que dejar 1500 € al 4 % para ganar 180 € de intereses?",
      pasos:["<b>Paso 1. El interés de 1 año</b>: el 4 % de 1500 €.",
             R`$0,04 \cdot 1500 = 60$ € cada año`,
             R`<b>Paso 2. ¿Cuántos años para 180 €?</b> Cada año gano 60 €: $180 : 60 = 3$ años`,
             R`Compruebo: $60 \cdot 3 = 180$ € ✓`],
      res:"Tengo que dejarlos <b>3 años</b>." },
    { nivel:"Problema", min:6,
      enun:"Quiero ganar 300 € de intereses en 2 años y el banco me paga un 2,5 % anual. ¿Cuánto dinero tengo que depositar?",
      pasos:[R`<b>Paso 1. El interés de 1 año</b>: $300 : 2 = 150$ € cada año`,
             "<b>Paso 2.</b> Esos 150 € son el 2,5 % del dinero que deposito. Busco el total (tipo 2): el dinero es el 100 %.",
             cuadro("Porcentaje (%)", "Dinero (€)", ["2,5","150"], ["100","x"]),
             R`$\dfrac{2,5}{100} = \dfrac{150}{x} \;\Rightarrow\; x = \dfrac{100 \cdot 150}{2,5} = \dfrac{15\,000}{2,5} = 6000$ €`,
             R`Compruebo: $0,025 \cdot 6000 = 150$ € al año → $150 \cdot 2 = 300$ € ✓`],
      res:"Tengo que depositar <b>6000 €</b>." },
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
             R`5 años: $24 \cdot 5 = 120$ €`, "Capital final: 1200 + 120 = 1320 €"],
      res:"El interés es de <b>120 €</b> y el capital final, <b>1320 €</b>." },
    { nivel:"Básico", enun:"¿Qué interés dan 6000 € al 1,5 % durante 6 meses?",
      pasos:[R`1 año: $0,015 \cdot 6000 = 90$ €`,
             R`1 mes: $90 : 12 = 7,50$ €`, R`6 meses: $7,50 \cdot 6 = 45$ €`],
      res:"Dan <b>45 €</b> de interés." },
    { nivel:"Consolidación", enun:"Calcula el interés de 12 000 € durante 18 meses al 3,5 % anual.",
      pasos:[R`1 año: $0,035 \cdot 12\,000 = 420$ €`,
             R`1 mes: $420 : 12 = 35$ €`, R`18 meses: $35 \cdot 18 = 630$ €`],
      res:"El interés es de <b>630 €</b>." },
    { nivel:"Consolidación", enun:"Unos ahorros de 3000 € han producido 360 € en 4 años. ¿A qué rédito?",
      pasos:[R`1 año: $360 : 4 = 90$ €`,
             R`¿Qué % de 3000 son 90? $\dfrac{90}{3000} \cdot 100 = 3\,\%$`],
      res:"Estaban al <b>3 %</b>." },
    { nivel:"Consolidación", enun:"¿Cuánto tiempo deben estar 8000 € al 5 % para ganar 600 €? Da el resultado en años y en meses.",
      pasos:[R`1 año: $0,05 \cdot 8000 = 400$ €`,
             R`¿Cuántos años para 600 €? $600 : 400 = 1,5$ años`, "1,5 años = 12 + 6 = 18 meses"],
      res:"Deben estar <b>1,5 años</b>, es decir, <b>18 meses</b>." },
    { nivel:"Problema", enun:"Si dejo 2400 € al 4 % durante 90 días, ¿qué interés gano? (En los bancos, el año comercial tiene 360 días.)",
      pasos:[R`1 año: $0,04 \cdot 2400 = 96$ €`,
             R`1 año son 360 días; 90 días son la cuarta parte: $\dfrac{90}{360} = \dfrac{1}{4}$`, R`$96 : 4 = 24$ €`],
      res:"Gano <b>24 €</b> de interés." },
    { nivel:"Para pensar", enun:"Tengo 5000 €. El banco A me paga un 2 % durante 3 años y el banco B un 2,5 % durante 2 años. ¿Cuál me interesa más?",
      pasos:[R`A: 1 año $= 0,02 \cdot 5000 = 100$ € → 3 años: $100 \cdot 3 = 300$ €`,
             R`B: 1 año $= 0,025 \cdot 5000 = 125$ € → 2 años: $125 \cdot 2 = 250$ €`,
             "Aunque B paga un % mayor, A me da más porque el dinero está más tiempo."],
      res:"Me interesa más <b>el banco A</b>: 50 € más." }
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

    { titulo:"Se resuelve en dos pasos", cuerpo:[
      {prop:["<b>Paso 1.</b> Lo que me da el banco en <b>1 año</b>: el % del capital. Es un <b>tipo 1</b>: el % en decimal <b>por</b> el capital.", "<b>Paso 2.</b> Lo <b>multiplico por el tiempo</b> (los años)."], etq:"El método"},
      {ej:{enun:"Dejo 2000 € al 3 % durante 2 años. ¿Qué interés me dan?",
        pasos:[R`1 año: $0,03 \cdot 2000 = 60$ €`, R`2 años: $60 \cdot 2 = 120$ €`],
        res:"Me dan <b>120 €</b>; al final tengo 2120 €."}}
    ]},

    { titulo:"¿Y si el tiempo está en meses o en días?", cuerpo:[
      {prop:["1 año son <b>12 meses</b>: lo de 1 mes es lo de 1 año <b>: 12</b>.", "Si son <b>días</b>: 1 año son <b>360 días</b> (el año de los bancos)."], etq:"Meses y días"},
      {ej:{enun:"¿Qué interés producen 4800 € al 3 % durante 8 meses?",
        pasos:[R`1 año: $0,03 \cdot 4800 = 144$ €`, R`1 mes: $144 : 12 = 12$ €`, R`8 meses: $12 \cdot 8 = 96$ €`],
        res:"Producen <b>96 €</b> de interés."}}
    ]},

    { titulo:"Busco el rédito (el %)", cuerpo:[
      {ej:{enun:"5000 € han producido 450 € en 3 años. ¿A qué rédito estaban?",
        pasos:[R`<b>1 año:</b> $450 : 3 = 150$ €`, "¿Qué % de 5000 € son 150 €? Es un <b>tipo 3</b>:", R`$\dfrac{150}{5000} \cdot 100 = 3\,\%$`],
        res:"Estaban al <b>3 %</b>."}},
      {nota:["El rédito es el % que da el banco en <b>1 año</b>: primero saco el interés de 1 año."]}
    ]},

    { titulo:"Busco el capital o el tiempo", cuerpo:[
      {cols:[
        [{ej:{etq:"Capital", enun:"¿Cuánto hay que depositar al 2 % para ganar 90 € en 3 años?",
          pasos:[R`1 año: $90 : 3 = 30$ €`, "30 € son el 2 % del capital: busco el total (<b>tipo 2</b>).", cuadro("Porcentaje (%)", "Dinero (€)", ["2","30"], ["100","x"]), R`$x = \dfrac{100 \cdot 30}{2} = 1500$ €`], res:"Hay que depositar <b>1500 €</b>."}}],
        [{ej:{etq:"Tiempo", enun:"¿Cuántos años hay que dejar 2500 € al 4 % para ganar 300 €?",
          pasos:[R`1 año: $0,04 \cdot 2500 = 100$ €`, R`Cada año 100 €: $300 : 100 = 3$ años`], res:"Hay que dejarlos <b>3 años</b>."}}]
      ]}
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
        "Rédito: interés de 1 año y el % con el tipo 3. Capital: regla de tres con el 100 % (tipo 2). Tiempo: cuántas veces cabe el interés de 1 año."
      ]}]},
      {estudio:[
        {comp:{q:"¿Qué interés dan 3000 € al 4 % durante 2 años?", sol:240, unidad:"€", explic:"1 año: 0,04 · 3000 = 120 €. 2 años: 120 · 2 = 240 €", pista:"Primero el interés de 1 año: el 4 % de 3000."}},
        {comp:{q:"¿Y durante 6 meses?", sol:60, unidad:"€", explic:"1 mes: 120 : 12 = 10 €. 6 meses: 10 · 6 = 60 €", pista:"El de 1 año entre 12, y por 6."}}
      ]}
    ]}
  ]
});
})();

/* 2.º ESO · Tema 3 · Apartado 7: Interés simple
   Cambio pedido por la profesora (16-11-2026): sin la fórmula I = c · r · t, que no entienden.
   Se resuelve SIEMPRE con reglas de tres directas, con el cuadro del apartado 2:
     Paso 1: el interés de 1 año («al 3 %» = de cada 100 € me dan 3 € al año).
     Paso 2: el interés de todo el tiempo (años; meses: 12 meses = 1 año; días: 360 días = 1 año).
   Para buscar el rédito, el capital o el tiempo: las mismas dos reglas de tres, con la x en otro sitio. */
(function(){
const R = String.raw;
const td = v => v === "x" ? `<td class="x">x</td>` : `<td>${v}</td>`;
const cuadro = (m1, m2, a, b) => `<table class="t cuadro"><tr><th>${m1}</th><th class="fl">(D) ⟶</th><th>${m2}</th></tr><tr>${td(a[0])}<td></td>${td(a[1])}</tr><tr>${td(b[0])}<td></td>${td(b[1])}</tr></table>`;
const UNO = "Interés en 1 año (€)";

TEMA.registrar({
  num: 7,
  titulo: "Interés simple",
  videos: [],

  clase: [
    { nivel:"Aplicación", min:5,
      enun:"Dejo 2000 € en el banco al 3 % anual durante 2 años. <b>a)</b> ¿Qué interés me dan? <b>b)</b> ¿Cuánto dinero tendré al final?",
      pasos:["<b>Paso 1. El interés de 1 año.</b> Al 3 %: de cada 100 € me dan 3 € al año. Más dinero → más interés: <b>D</b>.",
             cuadro("Dinero (€)", UNO, ["100","3"], ["2000","x"]),
             R`$\dfrac{100}{2000} = \dfrac{3}{x} \;\Rightarrow\; x = \dfrac{2000 \cdot 3}{100} = 60$ € cada año`,
             "<b>Paso 2. El interés de 2 años.</b> Más años → más interés: <b>D</b>.",
             cuadro("Años", "Interés (€)", ["1","60"], ["2","x"]),
             R`$\dfrac{1}{2} = \dfrac{60}{x} \;\Rightarrow\; x = \dfrac{2 \cdot 60}{1} = 120$ €`,
             R`<b>b)</b> Al final: $2000 + 120 = 2120$ €`],
      res:"a) Me dan <b>120 €</b> de interés.<br>b) Al final tendré <b>2120 €</b>." },
    { nivel:"Aplicación", min:5,
      enun:"¿Qué interés producen 4800 € al 3 % durante 8 meses?",
      pasos:["<b>Paso 1. El interés de 1 año</b> (D):",
             cuadro("Dinero (€)", UNO, ["100","3"], ["4800","x"]),
             R`$x = \dfrac{4800 \cdot 3}{100} = 144$ € en 1 año`,
             "<b>Paso 2.</b> 1 año son <b>12 meses</b>: en 12 meses gana 144 €. Más meses → más interés: <b>D</b>.",
             cuadro("Meses", "Interés (€)", ["12","144"], ["8","x"]),
             R`$\dfrac{12}{8} = \dfrac{144}{x} \;\Rightarrow\; x = \dfrac{8 \cdot 144}{12} = \dfrac{1152}{12} = 96$ €`],
      res:"Producen <b>96 €</b> de interés." },
    { nivel:"Práctica", min:6,
      enun:"Unos ahorros de 5000 € han producido 450 € en 3 años. ¿A qué rédito (porcentaje anual) estaban?",
      pasos:["<b>Paso 1. El interés de 1 año.</b> En 3 años ganan 450 €; en 1 año, menos (D):",
             cuadro("Años", "Interés (€)", ["3","450"], ["1","x"]),
             R`$\dfrac{3}{1} = \dfrac{450}{x} \;\Rightarrow\; x = \dfrac{1 \cdot 450}{3} = 150$ € cada año`,
             "<b>Paso 2. El %: lo que darían 100 €</b> en 1 año (D):",
             cuadro("Dinero (€)", UNO, ["5000","150"], ["100","x"]),
             R`$\dfrac{5000}{100} = \dfrac{150}{x} \;\Rightarrow\; x = \dfrac{100 \cdot 150}{5000} = 3$ €`,
             "De cada 100 € dan 3 € al año: es el <b>3 %</b>."],
      res:"Estaban al <b>3 %</b> anual." },
    { nivel:"Práctica", min:6,
      enun:"¿Cuántos años tengo que dejar 1500 € al 4 % para ganar 180 € de intereses?",
      pasos:["<b>Paso 1. El interés de 1 año</b> (D):",
             cuadro("Dinero (€)", UNO, ["100","4"], ["1500","x"]),
             R`$x = \dfrac{1500 \cdot 4}{100} = 60$ € cada año`,
             "<b>Paso 2. ¿Cuántos años para 180 €?</b> Más años → más interés: <b>D</b>.",
             cuadro("Años", "Interés (€)", ["1","60"], ["x","180"]),
             R`$\dfrac{1}{x} = \dfrac{60}{180} \;\Rightarrow\; x = \dfrac{1 \cdot 180}{60} = 3$`],
      res:"Tengo que dejarlos <b>3 años</b>." },
    { nivel:"Problema", min:6,
      enun:"Quiero ganar 300 € de intereses en 2 años y el banco me paga un 2,5 % anual. ¿Cuánto dinero tengo que depositar?",
      pasos:["<b>Paso 1. El interés de 1 año.</b> En 2 años quiero 300 €; en 1 año (D):",
             cuadro("Años", "Interés (€)", ["2","300"], ["1","x"]),
             R`$x = \dfrac{1 \cdot 300}{2} = 150$ € cada año`,
             "<b>Paso 2. ¿Qué dinero da 150 € al año?</b> Al 2,5 %: 100 € dan 2,50 € al año (D):",
             cuadro("Dinero (€)", UNO, ["100","2,5"], ["x","150"]),
             R`$\dfrac{100}{x} = \dfrac{2,5}{150} \;\Rightarrow\; x = \dfrac{100 \cdot 150}{2,5} = \dfrac{15\,000}{2,5} = 6000$ €`,
             "Compruebo: 6000 € al 2,5 % dan 150 € al año → 300 € en 2 años ✓"],
      res:"Tengo que depositar <b>6000 €</b>." },
    { nivel:"Reto", min:8,
      enun:"Mi hermano pide un préstamo de 3000 € para una moto al 6 % de interés simple anual y lo devuelve en 18 meses. <b>a)</b> ¿Cuánto paga de intereses? <b>b)</b> ¿Cuánto devuelve en total? <b>c)</b> Si paga lo mismo cada mes, ¿cuánto es cada cuota?",
      pasos:["<b>Paso 1. El interés de 1 año</b> (D):",
             cuadro("Dinero (€)", UNO, ["100","6"], ["3000","x"]),
             R`$x = \dfrac{3000 \cdot 6}{100} = 180$ € cada año`,
             "<b>Paso 2.</b> 12 meses → 180 € (D):",
             cuadro("Meses", "Interés (€)", ["12","180"], ["18","x"]),
             R`<b>a)</b> $x = \dfrac{18 \cdot 180}{12} = \dfrac{3240}{12} = 270$ €`,
             R`<b>b)</b> $3000 + 270 = 3270$ €`,
             R`<b>c)</b> $3270 : 18 \approx 181,67$ € al mes`],
      res:"a) Paga <b>270 €</b> de interés.<br>b) Devuelve <b>3270 €</b> en total.<br>c) Paga unos <b>181,67 €</b> al mes." }
  ],

  casa: [
    { nivel:"Básico", enun:"Calcula el interés y el capital final de 1200 € al 2 % durante 5 años.",
      pasos:[R`1 año: $\dfrac{100}{1200} = \dfrac{2}{x} \Rightarrow x = \dfrac{1200 \cdot 2}{100} = 24$ €`,
             R`5 años: $\dfrac{1}{5} = \dfrac{24}{x} \Rightarrow x = 5 \cdot 24 = 120$ €`, "Capital final: 1200 + 120 = 1320 €"],
      res:"El interés es de <b>120 €</b> y el capital final, <b>1320 €</b>." },
    { nivel:"Básico", enun:"¿Qué interés dan 6000 € al 1,5 % durante 6 meses?",
      pasos:[R`1 año: $x = \dfrac{6000 \cdot 1,5}{100} = 90$ €`,
             R`12 meses → 90 €; 6 meses → $x$: $\dfrac{12}{6} = \dfrac{90}{x} \Rightarrow x = \dfrac{6 \cdot 90}{12} = 45$ €`],
      res:"Dan <b>45 €</b> de interés." },
    { nivel:"Consolidación", enun:"Calcula el interés de 12 000 € durante 18 meses al 3,5 % anual.",
      pasos:[R`1 año: $x = \dfrac{12\,000 \cdot 3,5}{100} = 420$ €`,
             R`12 meses → 420 €; 18 meses → $x$: $x = \dfrac{18 \cdot 420}{12} = 630$ €`],
      res:"El interés es de <b>630 €</b>." },
    { nivel:"Consolidación", enun:"Unos ahorros de 3000 € han producido 360 € en 4 años. ¿A qué rédito?",
      pasos:[R`1 año: 4 años → 360 €; 1 año → $x = \dfrac{360}{4} = 90$ €`,
             R`El %: 3000 € → 90 €; 100 € → $x = \dfrac{100 \cdot 90}{3000} = 3$ €`, "De cada 100 € dan 3 €: el 3 %"],
      res:"Estaban al <b>3 %</b>." },
    { nivel:"Consolidación", enun:"¿Cuánto tiempo deben estar 8000 € al 5 % para ganar 600 €? Da el resultado en años y en meses.",
      pasos:[R`1 año: $x = \dfrac{8000 \cdot 5}{100} = 400$ €`,
             R`1 año → 400 €; $x$ años → 600 €: $x = \dfrac{1 \cdot 600}{400} = 1,5$ años`, "1,5 años = 12 + 6 = 18 meses"],
      res:"Deben estar <b>1,5 años</b>, es decir, <b>18 meses</b>." },
    { nivel:"Problema", enun:"Si dejo 2400 € al 4 % durante 90 días, ¿qué interés gano? (En los bancos, el año comercial tiene 360 días.)",
      pasos:[R`1 año: $x = \dfrac{2400 \cdot 4}{100} = 96$ €`,
             R`360 días → 96 €; 90 días → $x$: $x = \dfrac{90 \cdot 96}{360} = \dfrac{8640}{360} = 24$ €`],
      res:"Gano <b>24 €</b> de interés." },
    { nivel:"Para pensar", enun:"Tengo 5000 €. El banco A me paga un 2 % durante 3 años y el banco B un 2,5 % durante 2 años. ¿Cuál me interesa más?",
      pasos:[R`A: 1 año $= \dfrac{5000 \cdot 2}{100} = 100$ € → 3 años: 300 €`,
             R`B: 1 año $= \dfrac{5000 \cdot 2,5}{100} = 125$ € → 2 años: 250 €`,
             "Aunque B paga un % mayor, A me da más porque el dinero está más tiempo."],
      res:"Me interesa más <b>el banco A</b>: 50 € más." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">¿Cuánto te paga el banco por guardar tu dinero?</p>`}
    ]},

    { titulo:"El banco te paga por guardar tu dinero", cuerpo:[
      {ej:{etq:"🐷 La hucha del banco", enun:"Sara guarda en el banco 6000 € durante 3 años. El banco le paga un 2 % cada año. ¿Cuánto gana?",
        pasos:["Al 2 %: de cada 100 € le dan 2 € al año.", R`En 1 año: $\dfrac{100}{6000} = \dfrac{2}{x} \Rightarrow x = \dfrac{6000 \cdot 2}{100} = 120$ €`, R`En 3 años: $3 \cdot 120 = 360$ €`, R`Al final tiene $6000 + 360 = 6360$ €`], res:"Sara gana <b>360 €</b>."}},
      {html:`<div class="anios">${[0,1,2,3].map(a=>`<div><b>año ${a}</b><span class="cap">6000</span>${"<span class='int'>+120</span>".repeat(a)}</div>`).join("")}</div>`},
      {nota:["En el <b>interés simple</b> se gana <b>lo mismo cada año</b>."]}
    ]},

    { titulo:"Las palabras del banco", cuerpo:[
      {cols:[
        [{def:["💰 <b>Capital</b>: el dinero que guardas o que pides prestado."], etq:"Capital"}],
        [{def:["📊 <b>Rédito</b>: el % que paga el banco <b>cada año</b>.<br><b>Al 3 %</b> = de cada <b>100 €</b>, <b>3 €</b> al año."], etq:"Rédito"}],
        [{def:["⏳ <b>Tiempo</b>: años, meses o días."], etq:"Tiempo"}]
      ]},
      {prop:["🎁 <b>Interés</b>: lo que ganas (o lo que pagas si pides un préstamo).", "<b>Capital final</b> = capital + interés."], etq:"Interés"}
    ]},

    { titulo:"Se resuelve con dos reglas de tres", cuerpo:[
      {prop:["<b>Paso 1.</b> El interés de <b>1 año</b>: 100 € → el %.", "<b>Paso 2.</b> El interés de <b>todo el tiempo</b>: 1 año → lo del paso 1.", "Las dos son <b>directas (D)</b>: más dinero, más interés; más tiempo, más interés."], etq:"El método"},
      {ej:{enun:"Dejo 2000 € al 3 % durante 2 años. ¿Qué interés me dan?",
        pasos:[cuadro("Dinero (€)", UNO, ["100","3"], ["2000","x"]), R`$\dfrac{100}{2000} = \dfrac{3}{x} \Rightarrow x = \dfrac{2000 \cdot 3}{100} = 60$ € al año`,
               cuadro("Años", "Interés (€)", ["1","60"], ["2","x"]), R`$\dfrac{1}{2} = \dfrac{60}{x} \Rightarrow x = 2 \cdot 60 = 120$ €`],
        res:"Me dan <b>120 €</b>; al final tengo 2120 €."}}
    ]},

    { titulo:"¿Y si el tiempo está en meses o en días?", cuerpo:[
      {prop:["En el paso 2 pongo <b>12 meses</b> en lugar de 1 año.", "Si son <b>días</b>: <b>360 días</b> (el año de los bancos)."], etq:"Meses y días"},
      {ej:{enun:"¿Qué interés producen 4800 € al 3 % durante 8 meses?",
        pasos:[R`1 año: $x = \dfrac{4800 \cdot 3}{100} = 144$ €`, cuadro("Meses", "Interés (€)", ["12","144"], ["8","x"]), R`$\dfrac{12}{8} = \dfrac{144}{x} \Rightarrow x = \dfrac{8 \cdot 144}{12} = 96$ €`],
        res:"Producen <b>96 €</b> de interés."}}
    ]},

    { titulo:"Busco el rédito (el %)", cuerpo:[
      {ej:{enun:"5000 € han producido 450 € en 3 años. ¿A qué rédito estaban?",
        pasos:["<b>1 año:</b> 3 años → 450 €; 1 año → 450 : 3 = 150 €", cuadro("Dinero (€)", UNO, ["5000","150"], ["100","x"]), R`$\dfrac{5000}{100} = \dfrac{150}{x} \Rightarrow x = \dfrac{100 \cdot 150}{5000} = 3$ €`, "100 € dan 3 € al año → <b>3 %</b>"],
        res:"Estaban al <b>3 %</b>."}},
      {nota:["El % es lo que darían <b>100 €</b> en <b>1 año</b>."]}
    ]},

    { titulo:"Busco el capital o el tiempo", cuerpo:[
      {cols:[
        [{ej:{etq:"Capital", enun:"¿Cuánto hay que depositar al 2 % para ganar 90 € en 3 años?",
          pasos:["1 año: 90 : 3 = 30 €", cuadro("Dinero (€)", UNO, ["100","2"], ["x","30"]), R`$x = \dfrac{100 \cdot 30}{2} = 1500$ €`], res:"Hay que depositar <b>1500 €</b>."}}],
        [{ej:{etq:"Tiempo", enun:"¿Cuántos años hay que dejar 2500 € al 4 % para ganar 300 €?",
          pasos:[R`1 año: $x = \dfrac{2500 \cdot 4}{100} = 100$ €`, cuadro("Años", "Interés (€)", ["1","100"], ["x","300"]), R`$x = \dfrac{1 \cdot 300}{100} = 3$`], res:"Hay que dejarlos <b>3 años</b>."}}]
      ]}
    ]},

    { titulo:"Pedir un préstamo", cuerpo:[
      {ej:{etq:"💳 Al revés: ahora pagas tú", enun:"Pides 2000 € prestados al 5 % durante 2 años para un ordenador. ¿Cuánto devuelves?",
        pasos:[R`1 año: $x = \dfrac{2000 \cdot 5}{100} = 100$ €`, R`2 años: $2 \cdot 100 = 200$ €`, R`Devuelves $2000 + 200 = 2200$ €`], res:"Devuelves <b>2200 €</b>: el préstamo te cuesta 200 €."}},
      {nota:["Cuando ahorras, el interés lo ganas tú; cuando pides prestado, lo pagas tú."]}
    ]},

    { titulo:"🪄 Trucos y ⚠️ errores", cuerpo:[
      {truco:["<b>Empieza siempre por el interés de 1 año</b>: 100 € → el %."], etq:"🪄 Truco"},
      {truco:["<b>Comprueba</b> el resultado: ¿da el interés del enunciado?"], etq:"🪄 Truco"},
      {aviso:["Poner <b>1</b> en vez de <b>12</b> cuando el tiempo está en meses: 1 año son 12 meses."], etq:"⚠️ Error"},
      {aviso:["Confundir el <b>interés</b> (lo que ganas) con el <b>capital final</b> (lo que tienes al final)."], etq:"⚠️ Error"}
    ]},

    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{lista:[
        "<b>Al r %</b>: de cada 100 € me dan r € al año.",
        "Paso 1 (regla de tres D): 100 € → r €; mi dinero → x. Es el interés de 1 año.",
        "Paso 2 (regla de tres D): 1 año (12 meses, 360 días) → el interés de 1 año; mi tiempo → x.",
        "Capital final = capital + interés.",
        "Para buscar el %, el capital o el tiempo: las mismas dos reglas de tres, con la x en otro sitio."
      ]}]},
      {estudio:[
        {comp:{q:"¿Qué interés dan 3000 € al 4 % durante 2 años?", sol:240, unidad:"€", explic:"1 año: 3000 · 4 : 100 = 120 €. 2 años: 240 €", pista:"Primero el interés de 1 año: 100 € → 4 €."}},
        {comp:{q:"¿Y durante 6 meses?", sol:60, unidad:"€", explic:"12 meses → 120 €; 6 meses → 6 · 120 : 12 = 60 €", pista:"12 meses → 120 €."}}
      ]}
    ]}
  ]
});
})();

/* 2.º ESO · Tema 3 · Apartado 8: Interés simple
   Apuntes de la web de la profesora: I = c · r · t (r en decimal, t en años; meses → : 12; días → : 360),
   capital final = capital + interés, y despejar c, r o t. En 2.º se trabaja sobre todo con años y meses. */
(function(){
const R = String.raw;
const tri = (tapa, pie) => {
  const v = k => tapa===k ? `<tspan fill="#f59e0b">?</tspan>` : k;
  return `<figure class="dib tri"><svg viewBox="0 0 240 170" role="img" aria-label="Triángulo del interés: I arriba; c por r por t abajo">
    <polygon points="120,8 232,160 8,160" fill="#eef0ff" stroke="#4338ca" stroke-width="4" stroke-linejoin="round"/>
    <line x1="64" y1="84" x2="176" y2="84" stroke="#4338ca" stroke-width="3"/>
    <text x="120" y="70" text-anchor="middle" font-size="34" font-weight="800" fill="#1e1b3a">${v("I")}</text>
    <text x="120" y="138" text-anchor="middle" font-size="28" font-weight="800" fill="#1e1b3a">${v("c")} × ${v("r")} × ${v("t")}</text>
  </svg>${pie?`<figcaption>${pie}</figcaption>`:""}</figure>`;
};

TEMA.registrar({
  num: 8,
  titulo: "Interés simple",
  videos: [
    {t:"Interés simple: qué es y cómo se calcula", url:"https://www.youtube.com/watch?v=G7FGDfv9E1w"}
  ],

  clase: [
    { nivel:"Aplicación", min:4,
      enun:"Dejo 2000 € en el banco al 3 % anual durante 2 años. <b>a)</b> ¿Qué interés me dan? <b>b)</b> ¿Cuánto dinero tendré al final?",
      pasos:[R`$c = 2000$, $r = 3\,\% = 0,03$, $t = 2$`, R`<b>a)</b> $I = 2000 \cdot 0,03 \cdot 2 = 120$ €`, R`<b>b)</b> $2000 + 120 = 2120$ €`],
      res:"a) 120 €&ensp;·&ensp;b) 2120 €" },
    { nivel:"Aplicación", min:4,
      enun:"¿Qué interés producen 4800 € al 3 % durante 8 meses?",
      pasos:["El tiempo está en <b>meses</b>: divido entre 12.", R`$I = \dfrac{4800 \cdot 0,03 \cdot 8}{12} = \dfrac{1152}{12} = 96$ €`],
      res:"<b>96 €</b>" },
    { nivel:"Práctica", min:5,
      enun:"Unos ahorros de 5000 € han producido 450 € en 3 años. ¿A qué rédito (porcentaje anual) estaban?",
      pasos:["Tapo la r en el triángulo: $r = \\dfrac{I}{c \\cdot t}$", R`$r = \dfrac{450}{5000 \cdot 3} = \dfrac{450}{15\,000} = 0,03$`, "En porcentaje: 3 %"],
      res:"Al <b>3 %</b>" },
    { nivel:"Práctica", min:5,
      enun:"¿Cuántos años tengo que dejar 1500 € al 4 % para ganar 180 € de intereses?",
      pasos:["Tapo la t: $t = \\dfrac{I}{c \\cdot r}$", R`$t = \dfrac{180}{1500 \cdot 0,04} = \dfrac{180}{60} = 3$`],
      res:"<b>3 años</b>" },
    { nivel:"Problema", min:5,
      enun:"Quiero ganar 300 € de intereses en 2 años y el banco me paga un 2,5 % anual. ¿Cuánto dinero tengo que depositar?",
      pasos:["Tapo la c: $c = \\dfrac{I}{r \\cdot t}$", R`$c = \dfrac{300}{0,025 \cdot 2} = \dfrac{300}{0,05} = 6000$ €`, R`Comprueba: $6000 \cdot 0,025 \cdot 2 = 300$ ✓`],
      res:"<b>6000 €</b>" },
    { nivel:"Reto", min:7,
      enun:"Mi hermano pide un préstamo de 3000 € para una moto al 6 % de interés simple anual y lo devuelve en 18 meses. <b>a)</b> ¿Cuánto paga de intereses? <b>b)</b> ¿Cuánto devuelve en total? <b>c)</b> Si paga lo mismo cada mes, ¿cuánto es cada cuota?",
      pasos:[R`<b>a)</b> $I = \dfrac{3000 \cdot 0,06 \cdot 18}{12} = \dfrac{3240}{12} = 270$ €`, R`<b>b)</b> $3000 + 270 = 3270$ €`, R`<b>c)</b> $3270 : 18 \approx 181,67$ € al mes`],
      res:"a) 270 €&ensp;·&ensp;b) 3270 €&ensp;·&ensp;c) unos 181,67 € al mes" }
  ],

  casa: [
    { nivel:"Básico", enun:"Calcula el interés y el capital final de 1200 € al 2 % durante 5 años.",
      pasos:[R`$I = 1200 \cdot 0,02 \cdot 5 = 120$ €`, "Capital final: 1320 €"], res:"120 €; 1320 €" },
    { nivel:"Básico", enun:"¿Qué interés dan 6000 € al 1,5 % durante 6 meses?",
      pasos:[R`$I = \dfrac{6000 \cdot 0,015 \cdot 6}{12} = \dfrac{540}{12} = 45$ €`], res:"45 €" },
    { nivel:"Consolidación", enun:"Calcula el interés de 12 000 € durante 18 meses al 3,5 % anual.",
      pasos:[R`$I = \dfrac{12\,000 \cdot 0,035 \cdot 18}{12} = 630$ €`], res:"630 €" },
    { nivel:"Consolidación", enun:"Unos ahorros de 3000 € han producido 360 € en 4 años. ¿A qué rédito?",
      pasos:[R`$r = \dfrac{360}{3000 \cdot 4} = 0,03$`], res:"3 %" },
    { nivel:"Consolidación", enun:"¿Cuánto tiempo deben estar 8000 € al 5 % para ganar 600 €? Da el resultado en años y en meses.",
      pasos:[R`$t = \dfrac{600}{8000 \cdot 0,05} = \dfrac{600}{400} = 1,5$ años`, "1,5 años = 18 meses"], res:"1,5 años = 18 meses" },
    { nivel:"Problema", enun:"Si dejo 2400 € al 4 % durante 90 días, ¿qué interés gano? (En los bancos, el año comercial tiene 360 días.)",
      pasos:["En días, divido entre 360.", R`$I = \dfrac{2400 \cdot 0,04 \cdot 90}{360} = \dfrac{8640}{360} = 24$ €`], res:"24 €" },
    { nivel:"Para pensar", enun:"Tengo 5000 €. El banco A me paga un 2 % durante 3 años y el banco B un 2,5 % durante 2 años. ¿Cuál me interesa más?",
      pasos:[R`A: $5000 \cdot 0,02 \cdot 3 = 300$ €`, R`B: $5000 \cdot 0,025 \cdot 2 = 250$ €`, "Aunque B paga un % mayor, A me da más porque el dinero está más tiempo."], res:"El banco A (50 € más)" }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {nota:[{lista:[
        "Qué es el <b>interés</b> y qué son el capital, el rédito y el tiempo.",
        "Calcular el interés con $I = c \\cdot r \\cdot t$ y el <b>capital final</b>.",
        "Trabajar con el tiempo en <b>meses</b>.",
        "Buscar el capital, el rédito o el tiempo con el <b>triángulo</b>."
      ]}], etq:"🎯 En este apartado vas a aprender"}
    ]},

    { titulo:"El banco te paga por guardar tu dinero", cuerpo:[
      {ej:{etq:"🐷 La hucha del banco", enun:"Sara guarda en el banco 6000 € durante 3 años. El banco le paga un 2 % cada año. ¿Cuánto gana?",
        pasos:[R`Cada año gana el 2 % de 6000: $6000 \cdot 0,02 = 120$ €`, R`En 3 años: $120 \cdot 3 = 360$ €`, R`Al final tiene $6000 + 360 = 6360$ €`], res:"Gana <b>360 €</b>"}},
      {html:`<div class="anios">${[0,1,2,3].map(a=>`<div><b>año ${a}</b><span class="cap">6000</span>${"<span class='int'>+120</span>".repeat(a)}</div>`).join("")}</div>`},
      {nota:["En el <b>interés simple</b> se gana <b>lo mismo cada año</b>."]}
    ]},

    { titulo:"Los datos y la fórmula", cuerpo:[
      {cols:[
        [{def:["💰 <b>Capital (c)</b>: el dinero que guardas o que pides prestado."], etq:"c"}],
        [{def:["📊 <b>Rédito (r)</b>: el % anual, <b>en decimal</b>: 2 % → 0,02 · 3,5 % → 0,035"], etq:"r"}],
        [{def:["⏳ <b>Tiempo (t)</b>: en <b>años</b>."], etq:"t"}]
      ]},
      {prop:[{formula:R`I = c \cdot r \cdot t`}, "<b>Capital final</b> = capital + interés."], etq:"Interés simple"}
    ]},

    { titulo:"¿Y si el tiempo está en meses?", cuerpo:[
      {prop:["Un mes es la doceava parte de un año: si el tiempo está en <b>meses</b>, divido entre 12.", {formula:R`I = \frac{c \cdot r \cdot t}{12}`}], etq:"Meses"},
      {ej:{enun:"¿Qué interés producen 4800 € al 3 % durante 8 meses?", pasos:[R`$I = \dfrac{4800 \cdot 0,03 \cdot 8}{12} = \dfrac{1152}{12} = 96$ €`], res:"96 €"}},
      {nota:["Si fuera en <b>días</b>, se divide entre 360 (el año de los bancos)."]}
    ]},

    { titulo:"El triángulo del interés", cuerpo:[
      {cols2:true, cols:[
        [{prop:["<b>Arriba</b>: el interés (I). <b>Abajo</b>: c × r × t.", "Lo de <b>abajo</b> se multiplica; de arriba a abajo se <b>divide</b>.", "☝ <b>Tapa con el dedo lo que buscas</b>."], etq:"Cómo se usa"}],
        [{html:tri("")}]
      ]},
      {formula:R`c = \frac{I}{r \cdot t} \qquad r = \frac{I}{c \cdot t} \qquad t = \frac{I}{c \cdot r}`}
    ]},

    { titulo:"Busco el rédito", cuerpo:[
      {cols2:true, cols:[
        [{ej:{enun:"5000 € han producido 450 € en 3 años. ¿A qué rédito estaban?", pasos:[R`$r = \dfrac{450}{5000 \cdot 3} = \dfrac{450}{15\,000} = 0,03$`, "0,03 → 3 %"], res:"3 %"}}],
        [{html:tri("r","Tapo la r")}]
      ]}
    ]},

    { titulo:"Busco el capital o el tiempo", cuerpo:[
      {cols:[
        [{ej:{etq:"Capital", enun:"¿Cuánto hay que depositar al 2 % para ganar 90 € en 3 años?", pasos:[R`$c = \dfrac{90}{0,02 \cdot 3} = \dfrac{90}{0,06} = 1500$ €`], res:"1500 €"}}],
        [{ej:{etq:"Tiempo", enun:"¿Cuántos años hay que dejar 2500 € al 4 % para ganar 300 €?", pasos:[R`$t = \dfrac{300}{2500 \cdot 0,04} = \dfrac{300}{100} = 3$`], res:"3 años"}}]
      ]}
    ]},

    { titulo:"Pedir un préstamo", cuerpo:[
      {ej:{etq:"💳 Al revés: ahora pagas tú", enun:"Pides 2000 € prestados al 5 % durante 2 años para un ordenador. ¿Cuánto devuelves?",
        pasos:[R`$I = 2000 \cdot 0,05 \cdot 2 = 200$ €`, R`Devuelves $2000 + 200 = 2200$ €`], res:"2200 €: pagas 200 € por el préstamo"}},
      {nota:["Cuando ahorras, el interés lo ganas tú; cuando pides prestado, lo pagas tú."]}
    ]},

    { titulo:"🪄 Trucos y ⚠️ errores", cuerpo:[
      {truco:["<b>El % en decimal</b>: divide entre 100 (moviendo la coma): 2,5 % → 0,025."], etq:"🪄 Truco"},
      {truco:["<b>Comprueba</b> sustituyendo el resultado en $I = c \\cdot r \\cdot t$."], etq:"🪄 Truco"},
      {aviso:["Poner <b>3 en vez de 0,03</b> para el 3 %: ¡saldría un interés gigante!"], etq:"⚠️ Error"},
      {aviso:["Olvidar <b>dividir entre 12</b> cuando el tiempo está en meses."], etq:"⚠️ Error"}
    ]},

    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{lista:[
        "$I = c \\cdot r \\cdot t$ (r en decimal, t en años).",
        "En meses: $I = \\dfrac{c \\cdot r \\cdot t}{12}$. En días: entre 360.",
        "Capital final = capital + interés.",
        "Para buscar c, r o t: tapa en el triángulo lo que buscas."
      ]}]},
      {estudio:[
        {comp:{q:"¿Qué interés dan 3000 € al 4 % durante 2 años?", sol:240, unidad:"€", explic:"3000 · 0,04 · 2 = 240 €", pista:"I = c · r · t con r = 0,04."}},
        {comp:{q:"¿Y durante 6 meses?", sol:60, unidad:"€", explic:"3000 · 0,04 · 6 : 12 = 60 €", pista:"Divide entre 12."}}
      ]}
    ]}
  ]
});
})();

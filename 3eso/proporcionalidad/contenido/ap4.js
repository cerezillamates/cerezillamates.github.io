/* 3.º ESO · Tema 3 · Apartado 4: Interés simple
   Basado en los apuntes de la profesora: los tres datos (c, r, t), I = c · r · t,
   el triángulo del interés («tapa con el dedo lo que buscas») y el tiempo en meses (: 12) o días (: 360). */
(function(){
const R = String.raw;
// triángulo del interés; tapa: "I", "c", "r", "t" o "" para ninguno
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
  num: 4,
  titulo: "Interés simple",
  videos: [
    {t:"Calcular el interés simple, capital, rédito y tiempo", url:"https://www.youtube.com/watch?v=G7FGDfv9E1w"}
  ],

  clase: [
    { nivel:"Aplicación", min:5,
      enun:"Ana deposita 3000 € en una cuenta de ahorro al 2 % anual durante 4 años.<br><b>a)</b> ¿Qué interés obtiene?<br><b>b)</b> ¿Cuánto dinero tendrá al final?",
      pasos:["Datos: $c = 3000$ €, $r = 2\\,\\% = 0,02$, $t = 4$ años.".replace(/\\\\/g,"\\"),
             R`<b>a)</b> $I = c \cdot r \cdot t = 3000 \cdot 0,02 \cdot 4 = 240$ €`,
             R`<b>b)</b> Capital final $= 3000 + 240 = 3240$ €`],
      res:"a) 240 €&ensp;·&ensp;b) 3240 €" },
    { nivel:"Aplicación", min:5,
      enun:"Calcula el interés que producen:<br><b>a)</b> 5400 € al 2 % durante 6 meses.<br><b>b)</b> 3600 € al 5 % durante 120 días.",
      pasos:["El tiempo no está en años: en meses divido entre 12; en días, entre 360.",
             R`<b>a)</b> $I = \dfrac{5400 \cdot 0,02 \cdot 6}{12} = \dfrac{648}{12} = 54$ €`,
             R`<b>b)</b> $I = \dfrac{3600 \cdot 0,05 \cdot 120}{360} = \dfrac{21\,600}{360} = 60$ €`],
      res:"a) 54 €&ensp;·&ensp;b) 60 €" },
    { nivel:"Práctica", min:6,
      enun:"Pedro quiere ganar 450 € de intereses para pagarse un viaje. Su banco le ofrece un 3 % anual durante 5 años. ¿Cuánto dinero tiene que depositar?",
      pasos:["Busco el <b>capital</b>: tapo la c en el triángulo → $c = \\dfrac{I}{r \\cdot t}$".replace(/\\\\/g,"\\"),
             R`$c = \dfrac{450}{0,03 \cdot 5} = \dfrac{450}{0,15} = 3000$ €`,
             R`Comprueba: $3000 \cdot 0,03 \cdot 5 = 450$ ✓`],
      res:"Tiene que depositar <b>3000 €</b>" },
    { nivel:"Práctica", min:6,
      enun:"En un banco, 8000 € depositados durante 3 años han producido 600 € de intereses. ¿Qué rédito (porcentaje anual) paga ese banco?",
      pasos:["Busco el <b>rédito</b>: $r = \\dfrac{I}{c \\cdot t}$".replace(/\\\\/g,"\\"),
             R`$r = \dfrac{600}{8000 \cdot 3} = \dfrac{600}{24\,000} = 0,025$`,
             R`En porcentaje: $0,025 \cdot 100 = 2,5\,\%$`],
      res:"Paga un <b>2,5 %</b> anual" },
    { nivel:"Problema", min:7,
      enun:"¿Cuántos meses hay que dejar 6000 € al 2 % anual para ganar 70 € de intereses?",
      pasos:["Busco el <b>tiempo</b> y me lo piden en <b>meses</b>: uso la fórmula con el 12.",
             R`$70 = \dfrac{6000 \cdot 0,02 \cdot t}{12} = \dfrac{120\,t}{12} = 10\,t$`,
             R`$t = \dfrac{70}{10} = 7$ meses`],
      res:"<b>7 meses</b>" },
    { nivel:"Reto", min:8,
      enun:"Tienes 10 000 € para ahorrar. El banco A paga un 1,8 % anual durante 2 años. El banco B paga un 2,2 % anual durante 18 meses. ¿Qué banco te da más intereses? ¿Cuánto más?",
      pasos:[R`<b>Banco A:</b> $I = 10\,000 \cdot 0,018 \cdot 2 = 360$ €`,
             R`<b>Banco B:</b> $I = \dfrac{10\,000 \cdot 0,022 \cdot 18}{12} = \dfrac{3960}{12} = 330$ €`,
             "Aunque B paga un % mayor, el dinero está menos tiempo.",
             R`Diferencia: $360 - 330 = 30$ €`],
      res:"El banco A, <b>30 € más</b>" }
  ],

  casa: [
    { nivel:"Básico",
      enun:"Calcula el interés y el capital final de 2500 € al 4 % anual durante 3 años.",
      pasos:[R`$I = 2500 \cdot 0,04 \cdot 3 = 300$ €`, R`Capital final $= 2500 + 300 = 2800$ €`],
      res:"I = 300 €; capital final 2800 €" },
    { nivel:"Básico",
      enun:"¿Qué interés producen 1800 € al 3,5 % anual durante 8 meses?",
      pasos:[R`Meses → divido entre 12: $I = \dfrac{1800 \cdot 0,035 \cdot 8}{12} = \dfrac{504}{12} = 42$ €`],
      res:"42 €" },
    { nivel:"Consolidación",
      enun:"Marina quiere ganar 270 € en 2 años en una cuenta al 1,5 % anual. ¿Cuánto tiene que depositar?",
      pasos:[R`$c = \dfrac{I}{r \cdot t} = \dfrac{270}{0,015 \cdot 2} = \dfrac{270}{0,03} = 9000$ €`],
      res:"9000 €" },
    { nivel:"Consolidación",
      enun:"¿A qué rédito hay que depositar 4800 € durante 15 meses para obtener 180 € de intereses?",
      pasos:[R`$180 = \dfrac{4800 \cdot r \cdot 15}{12} = 6000\,r$`, R`$r = \dfrac{180}{6000} = 0,03 \;\to\; 3\,\%$`],
      res:"3 %" },
    { nivel:"Problema",
      enun:"Para comprarse un ordenador, Carlos pide un préstamo de 1500 € al 6 % anual y lo devuelve a los 10 meses. ¿Cuánto dinero devuelve en total?",
      pasos:["En un préstamo, el interés lo <b>pagas</b> tú al banco.",
             R`$I = \dfrac{1500 \cdot 0,06 \cdot 10}{12} = \dfrac{900}{12} = 75$ €`,
             R`Devuelve $1500 + 75 = 1575$ €`],
      res:"1575 €" },
    { nivel:"Problema",
      enun:"¿Cuántos días tienen que estar 7200 € al 2,5 % anual para producir 90 € de intereses?",
      pasos:[R`Días → divido entre 360: $90 = \dfrac{7200 \cdot 0,025 \cdot t}{360} = \dfrac{180\,t}{360} = 0,5\,t$`,
             R`$t = \dfrac{90}{0,5} = 180$ días (medio año)`],
      res:"180 días" },
    { nivel:"Para pensar",
      enun:"Con interés simple al 4 % anual, ¿cuántos años tarda un capital en duplicarse?",
      pasos:["Duplicarse quiere decir que el interés es igual al capital: $I = c$.",
             R`$c \cdot 0,04 \cdot t = c \;\Rightarrow\; 0,04 \cdot t = 1 \;\Rightarrow\; t = \dfrac{1}{0,04} = 25$ años`,
             R`Compruébalo con 100 €: $100 \cdot 0,04 \cdot 25 = 100$ € de interés ✓`],
      res:"25 años" },
    { nivel:"Para pensar",
      enun:"Raúl deposita un capital al 3 % anual durante 4 años y al final tiene 6720 €. ¿Qué capital depositó?",
      pasos:[R`En 4 años gana el $3 \cdot 4 = 12\,\%$ del capital: al final tiene el $112\,\%$, es decir, $1,12 \cdot c$`,
             R`$1,12 \cdot c = 6720 \;\Rightarrow\; c = \dfrac{6720}{1,12} = 6000$ €`,
             R`Comprueba: $I = 6000 \cdot 0,03 \cdot 4 = 720$ y $6000 + 720 = 6720$ ✓`],
      res:"6000 €" }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {nota:[{lista:[
        "Qué es el <b>interés simple</b> y sus datos: capital, rédito y tiempo.",
        "Calcular el interés con $I = c \\cdot r \\cdot t$ y el <b>capital final</b>.".replace(/\\\\/g,"\\"),
        "Buscar el capital, el rédito o el tiempo con el <b>triángulo</b>.",
        "Trabajar con el tiempo en <b>meses</b> o en <b>días</b>, y con <b>préstamos</b>."
      ]}], etq:"🎯 En este apartado vas a aprender"}
    ]},

    { titulo:"El banco te paga por guardar tu dinero", cuerpo:[
      {ej:{etq:"🏦 Situación", enun:"Lucía guarda 9000 € en el banco durante 3 años. El banco le paga un 1,5 % cada año por tenerlo allí. ¿Cuánto dinero gana?",
        pasos:["Cada año gana el 1,5 % de 9000 €: $9000 \\cdot 0,015 = 135$ €".replace(/\\\\/g,"\\"),
               R`En 3 años: $135 \cdot 3 = 405$ €`,
               R`Al final tiene $9000 + 405 = 9405$ €`],
        res:"Gana <b>405 €</b>"}},
      {html:`<div class="anios">${[0,1,2,3].map(a=>`<div><b>año ${a}</b><span class="cap">9000</span>${"<span class='int'>+135</span>".repeat(a)}</div>`).join("")}</div>`},
      {nota:["En el <b>interés simple</b> se gana <b>lo mismo cada año</b>."]}
    ]},

    { titulo:"Los datos y la fórmula", cuerpo:[
      {cols:[
        [{def:["💰 <b>Capital (c)</b>: el dinero que guardas (o que pides prestado)."], etq:"c"}],
        [{def:[R`📊 <b>Rédito (r)</b>: el % que paga el banco cada año, <b>en decimal</b>: 1,5 % → 0,015`], etq:"r"}],
        [{def:["⏳ <b>Tiempo (t)</b>: cuánto tiempo lo dejas, <b>en años</b>."], etq:"t"}]
      ]},
      {prop:[{formula:R`I = c \cdot r \cdot t`}, "🎁 <b>Interés (I)</b>: lo que ganas. <b>Capital final</b> = capital + interés."], etq:"Interés simple"},
      {ej:{enun:"Lucía: 9000 € al 1,5 % durante 3 años.", pasos:[R`$I = 9000 \cdot 0,015 \cdot 3 = 405$ €`], res:"405 €; capital final 9405 €"}}
    ]},

    { titulo:"El triángulo del interés", cuerpo:[
      {cols2:true, cols:[
        [{prop:["<b>Arriba</b>: lo que ganas (I). <b>Abajo</b>: los tres datos multiplicados.",
                "Lo que está <b>al lado</b> se <b>multiplica</b> (×). Lo que está <b>arriba y abajo</b> se <b>divide</b>.",
                "☝ <b>Tapa con el dedo lo que buscas</b> y mira lo que queda."], etq:"Cómo se usa"}],
        [{html:tri("")}]
      ]},
      {formula:R`I = c \cdot r \cdot t \qquad c = \frac{I}{r \cdot t} \qquad r = \frac{I}{c \cdot t} \qquad t = \frac{I}{c \cdot r}`}
    ]},

    { titulo:"Busco el capital", cuerpo:[
      {cols2:true, cols:[
        [{ej:{etq:"💰 Busco el CAPITAL", enun:"Marta quiere ganar 400 € en 2 años al 2,5 %. ¿Cuánto tiene que guardar?",
          pasos:[R`Tapo la c: $c = \dfrac{I}{r \cdot t}$`, R`$c = \dfrac{400}{0,025 \cdot 2} = \dfrac{400}{0,05}$`],
          res:"c = 8000 €"}}],
        [{html:tri("c","Tapo la c: queda I arriba y r × t abajo")}]
      ]}
    ]},

    { titulo:"Busco el rédito", cuerpo:[
      {cols2:true, cols:[
        [{ej:{etq:"📊 Busco el RÉDITO", enun:"Jorge guardó 5000 € durante 3 años y ganó 450 €. ¿Qué % le pagaban?",
          pasos:[R`Tapo la r: $r = \dfrac{I}{c \cdot t}$`, R`$r = \dfrac{450}{5000 \cdot 3} = \dfrac{450}{15\,000} = 0,03$`, "Lo paso a %: 0,03 · 100 = 3 %"],
          res:"r = 3 %"}}],
        [{html:tri("r","Tapo la r: queda I arriba y c × t abajo")}]
      ]}
    ]},

    { titulo:"Busco el tiempo", cuerpo:[
      {cols2:true, cols:[
        [{ej:{etq:"⏳ Busco el TIEMPO", enun:"Lucía ganó 405 € guardando 9000 € al 1,5 %. ¿Cuántos años?",
          pasos:[R`Tapo la t: $t = \dfrac{I}{c \cdot r}$`, R`$t = \dfrac{405}{9000 \cdot 0,015} = \dfrac{405}{135}$`],
          res:"t = 3 años"}}],
        [{html:tri("t","Tapo la t: queda I arriba y c × r abajo")}]
      ]}
    ]},

    { titulo:"¿Y si el tiempo no está en años?", cuerpo:[
      {cols:[
        [{def:[{formula:R`I = c \cdot r \cdot t`}], etq:"📅 En años"}],
        [{def:[{formula:R`I = \frac{c \cdot r \cdot t}{12}`}, "Un año tiene 12 meses."], etq:"🗓 En meses"}],
        [{def:[{formula:R`I = \frac{c \cdot r \cdot t}{360}`}, "El banco cuenta 360 días."], etq:"☀ En días"}]
      ]},
      {ej:{etq:"🎮 Ejemplo", enun:"Pablo guarda 2500 € al 3 % durante 9 meses para comprarse una consola. ¿Cuánto gana?",
        pasos:[R`$I = \dfrac{2500 \cdot 0,03 \cdot 9}{12} = \dfrac{675}{12} = 56,25$ €`], res:"56,25 €"}}
    ]},

    { titulo:"Capital final y préstamos", cuerpo:[
      {cols:[
        [{ej:{etq:"💰 Ahorro", enun:"Deposito 4000 € al 3 % durante 2 años. ¿Cuánto tengo al final?",
          pasos:[R`$I = 4000 \cdot 0,03 \cdot 2 = 240$ €`, R`Capital final $= 4000 + 240$`], res:"4240 €"}}],
        [{ej:{etq:"💳 Préstamo", enun:"Pido 1200 € prestados al 8 % y los devuelvo a los 6 meses. ¿Cuánto devuelvo?",
          pasos:[R`$I = \dfrac{1200 \cdot 0,08 \cdot 6}{12} = 48$ €`, R`Devuelvo $1200 + 48$`], res:"1248 €"}}]
      ]},
      {nota:["Cuando <b>ahorras</b>, el banco te paga intereses. Cuando <b>pides un préstamo</b>, los intereses los pagas tú."]}
    ]},

    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:["<b>Poner el rédito en % (3) en lugar de en decimal (0,03).</b>"], etq:"⚠️ Error 1"},
      {aviso:["<b>No dividir entre 12 o entre 360</b> cuando el tiempo está en meses o en días."], etq:"⚠️ Error 2"},
      {aviso:["<b>Confundir el interés</b> (lo que ganas) <b>con el capital final</b> (lo que tienes al final)."], etq:"⚠️ Error 3"}
    ]},

    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{cols:[
        [R`$I = c \cdot r \cdot t$ &nbsp;(r en decimal, t en años)`,
         R`Meses: $\dfrac{c \cdot r \cdot t}{12}$ &nbsp;·&nbsp; Días: $\dfrac{c \cdot r \cdot t}{360}$`,
         "Capital final = capital + interés"],
        [{html:tri("","☝ Tapa lo que buscas")}]
      ]}]},
      {estudio:[
        {comp:{q:"¿Qué interés dan 2000 € al 3 % durante 2 años?", sol:120, unidad:"€",
          explic:R`$2000 \cdot 0,03 \cdot 2 = 120$ €`, pista:"Rédito en decimal: 3 % = 0,03."}},
        {comp:{q:"¿Qué interés dan 1200 € al 5 % durante 6 meses?", sol:30, unidad:"€",
          explic:R`$\dfrac{1200 \cdot 0,05 \cdot 6}{12} = 30$ €`, pista:"El tiempo está en meses: divide entre 12."}},
        {comp:{q:"Un 4,5 % escrito en decimal es…", opciones:["0,45","0,045","4,5"], ok:1,
          explic:"Divido entre 100: la coma se mueve dos lugares a la izquierda → 0,045.", pista:"Divide entre 100."}}
      ]}
    ]}
  ]
});
})();

/* 3.º ESO · Tema 3 · Apartado 6: Interés simple
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
  num: 6,
  titulo: "Interés simple",
  videos: [
    {t:"Calcular el interés simple, capital, rédito y tiempo", url:"https://www.youtube.com/watch?v=G7FGDfv9E1w"}
  ],

  clase: [
    { nivel:"Aplicación", min:5,
      enun:"Ana deposita 7500 € en una cuenta al 2,4 % anual durante 2 años y 3 meses.<br><b>a)</b> ¿Qué interés obtiene?<br><b>b)</b> ¿Cuánto dinero tendrá al final?",
      pasos:[R`Datos: $c = 7500$ €, $r = 2,4\,\% = 0,024$, $t = 2$ años y 3 meses $= 2,25$ años (3 meses $= \dfrac{3}{12} = 0,25$ años)`,
             R`<b>a)</b> $I = c \cdot r \cdot t = 7500 \cdot 0,024 \cdot 2,25 = 405$ €`,
             R`<b>b)</b> Capital final: $7500 + 405 = 7905$ €`],
      res:"a) Ana obtiene <b>405 €</b> de interés.<br>b) Al final tendrá <b>7905 €</b>." },
    { nivel:"Aplicación", min:5,
      enun:"Calcula el interés que producen:<br><b>a)</b> 5400 € al 2 % durante 6 meses.<br><b>b)</b> 3600 € al 5 % durante 120 días.",
      pasos:["El tiempo no está en años: en meses divido entre 12; en días, entre 360.",
             R`<b>a)</b> $I = \dfrac{5400 \cdot 0,02 \cdot 6}{12} = \dfrac{648}{12} = 54$ €`,
             R`<b>b)</b> $I = \dfrac{3600 \cdot 0,05 \cdot 120}{360} = \dfrac{21\,600}{360} = 60$ €`],
      res:"a) Producen <b>54 €</b> de interés.<br>b) Producen <b>60 €</b> de interés." },
    { nivel:"Práctica", min:7,
      enun:"Pedro quiere ganar 450 € <b>limpios</b> de intereses para pagarse un viaje. Su banco le ofrece un 3 % anual durante 5 años, pero Hacienda se queda el 20 % de los intereses. ¿Cuánto dinero tiene que depositar?",
      pasos:[R`Hacienda se queda el 20 %: $I_V = 1 - 0,20 = 0,80$. Intereses antes de Hacienda: $450 = 0,80 \cdot x \;\Rightarrow\; x = \dfrac{450}{0,80} = 562,50$ €`,
             R`Busco el capital: $c = \dfrac{I}{r \cdot t} = \dfrac{562,50}{0,03 \cdot 5} = \dfrac{562,50}{0,15} = 3750$ €`,
             R`Compruebo: $3750 \cdot 0,03 \cdot 5 = 562,50$ € y $562,50 \cdot 0,80 = 450$ € ✓`],
      res:"Pedro tiene que depositar <b>3750 €</b>." },
    { nivel:"Práctica", min:6,
      enun:"En un banco, 8000 € depositados durante 3 años han producido 600 € de intereses. ¿Qué rédito (porcentaje anual) paga ese banco?",
      pasos:["Busco el <b>rédito</b>: $r = \\dfrac{I}{c \\cdot t}$".replace(/\\\\/g,"\\"),
             R`$r = \dfrac{600}{8000 \cdot 3} = \dfrac{600}{24\,000} = 0,025$`,
             R`En porcentaje: $0,025 \cdot 100 = 2,5\,\%$`],
      res:"El banco paga un <b>2,5 %</b> anual." },
    { nivel:"Problema", min:7,
      enun:"¿Cuántos meses hay que dejar 6000 € al 2 % anual para ganar 70 € de intereses?",
      pasos:["Busco el <b>tiempo</b> y me lo piden en <b>meses</b>: uso la fórmula con el 12.",
             R`$70 = \dfrac{6000 \cdot 0,02 \cdot t}{12} = \dfrac{120\,t}{12} = 10\,t$`,
             R`$t = \dfrac{70}{10} = 7$ meses`],
      res:"Hay que dejarlos <b>7 meses</b>." },
    { nivel:"Reto", min:8,
      enun:"Tienes 10 000 € para ahorrar. El banco A paga un 1,8 % anual durante 2 años. El banco B paga un 2,2 % anual durante 18 meses. ¿Qué banco te da más intereses? ¿Cuánto más?",
      pasos:[R`<b>Banco A:</b> $I = 10\,000 \cdot 0,018 \cdot 2 = 360$ €`,
             R`<b>Banco B:</b> $I = \dfrac{10\,000 \cdot 0,022 \cdot 18}{12} = \dfrac{3960}{12} = 330$ €`,
             "Aunque B paga un % mayor, el dinero está menos tiempo.",
             R`Diferencia: $360 - 330 = 30$ €`],
      res:"El banco A da más intereses: <b>30 € más</b>." }
  ],

  casa: [
    { nivel:"Básico",
      enun:"Calcula el interés y el capital final de 2500 € al 4 % anual durante 3 años.",
      pasos:[R`$I = 2500 \cdot 0,04 \cdot 3 = 300$ €`, R`Capital final $= 2500 + 300 = 2800$ €`],
      res:"El interés es de <b>300 €</b> y el capital final, <b>2800 €</b>." },
    { nivel:"Básico",
      enun:"¿Qué interés producen 1800 € al 3,5 % anual durante 8 meses?",
      pasos:[R`Meses → divido entre 12: $I = \dfrac{1800 \cdot 0,035 \cdot 8}{12} = \dfrac{504}{12} = 42$ €`],
      res:"Producen <b>42 €</b> de interés." },
    { nivel:"Consolidación",
      enun:"Marina quiere ganar 270 € en 2 años en una cuenta al 1,5 % anual. ¿Cuánto tiene que depositar?",
      pasos:[R`$c = \dfrac{I}{r \cdot t} = \dfrac{270}{0,015 \cdot 2} = \dfrac{270}{0,03} = 9000$ €`],
      res:"Marina tiene que depositar <b>9000 €</b>." },
    { nivel:"Consolidación",
      enun:"¿A qué rédito hay que depositar 4800 € durante 15 meses para obtener 180 € de intereses?",
      pasos:[R`$180 = \dfrac{4800 \cdot r \cdot 15}{12} = 6000\,r$`, R`$r = \dfrac{180}{6000} = 0,03 \;\to\; 3\,\%$`],
      res:"Hay que depositarlos al <b>3 %</b> anual." },
    { nivel:"Problema",
      enun:"Para comprarse un ordenador, Carlos pide un préstamo de 1500 € al 6 % anual y lo devuelve a los 10 meses. ¿Cuánto dinero devuelve en total?",
      pasos:["En un préstamo, el interés lo <b>pagas</b> tú al banco.",
             R`$I = \dfrac{1500 \cdot 0,06 \cdot 10}{12} = \dfrac{900}{12} = 75$ €`,
             R`Devuelve $1500 + 75 = 1575$ €`],
      res:"Carlos devuelve <b>1575 €</b> en total." },
    { nivel:"Problema",
      enun:"¿Cuántos días tienen que estar 7200 € al 2,5 % anual para producir 90 € de intereses?",
      pasos:[R`Días → divido entre 360: $90 = \dfrac{7200 \cdot 0,025 \cdot t}{360} = \dfrac{180\,t}{360} = 0,5\,t$`,
             R`$t = \dfrac{90}{0,5} = 180$ días (medio año)`],
      res:"Tienen que estar <b>180 días</b>." },
    { nivel:"Para pensar",
      enun:"Con interés simple al 4 % anual, ¿cuántos años tarda un capital en duplicarse?",
      pasos:["Duplicarse quiere decir que el interés es igual al capital: $I = c$.",
             R`$c \cdot 0,04 \cdot t = c \;\Rightarrow\; 0,04 \cdot t = 1 \;\Rightarrow\; t = \dfrac{1}{0,04} = 25$ años`,
             R`Compruébalo con 100 €: $100 \cdot 0,04 \cdot 25 = 100$ € de interés ✓`],
      res:"El capital tarda <b>25 años</b> en duplicarse." },
    { nivel:"Para pensar",
      enun:"Raúl deposita un capital al 3 % anual durante 4 años y al final tiene 6720 €. ¿Qué capital depositó?",
      pasos:[R`En 4 años gana el $3 \cdot 4 = 12\,\%$ del capital: al final tiene el $112\,\%$, es decir, $1,12 \cdot c$`,
             R`$1,12 \cdot c = 6720 \;\Rightarrow\; c = \dfrac{6720}{1,12} = 6000$ €`,
             R`Comprueba: $I = 6000 \cdot 0,03 \cdot 4 = 720$ y $6000 + 720 = 6720$ ✓`],
      res:"Raúl depositó <b>6000 €</b>." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">¿Cuánto te paga el banco por guardar tu dinero?</p>`}
    ]},

    { titulo:"El banco te paga por guardar tu dinero", cuerpo:[
      {ej:{etq:"🏦 Situación", enun:"Lucía guarda 9000 € en el banco durante 3 años. El banco le paga un 1,5 % cada año por tenerlo allí. ¿Cuánto dinero gana?",
        pasos:["Cada año gana el 1,5 % de 9000 €: $9000 \\cdot 0,015 = 135$ €".replace(/\\\\/g,"\\"),
               R`En 3 años: $135 \cdot 3 = 405$ €`,
               R`Al final tiene $9000 + 405 = 9405$ €`],
        res:"Lucía gana <b>405 €</b>."}},
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
      {ej:{enun:"Lucía: 9000 € al 1,5 % durante 3 años.", pasos:[R`$I = 9000 \cdot 0,015 \cdot 3 = 405$ €`], res:"Lucía gana <b>405 €</b> y al final tiene <b>9405 €</b>."}}
    ]},

    { titulo:"Busco el capital", cuerpo:[
      {cols2:true, cols:[
        [{ej:{etq:"💰 Busco el CAPITAL", enun:"Marta quiere ganar 400 € en 2 años al 2,5 %. ¿Cuánto tiene que guardar?",
          pasos:[R`Tapo la c: $c = \dfrac{I}{r \cdot t}$`, R`$c = \dfrac{400}{0,025 \cdot 2} = \dfrac{400}{0,05}$`],
          res:"Marta tiene que guardar <b>8000 €</b>."}}],
        [{html:tri("c","Tapo la c: queda I arriba y r × t abajo")}]
      ]}
    ]},

    { titulo:"Busco el rédito", cuerpo:[
      {cols2:true, cols:[
        [{ej:{etq:"📊 Busco el RÉDITO", enun:"Jorge guardó 5000 € durante 3 años y ganó 450 €. ¿Qué % le pagaban?",
          pasos:[R`Tapo la r: $r = \dfrac{I}{c \cdot t}$`, R`$r = \dfrac{450}{5000 \cdot 3} = \dfrac{450}{15\,000} = 0,03$`, "Lo paso a %: 0,03 · 100 = 3 %"],
          res:"A Jorge le pagaban un <b>3 %</b>."}}],
        [{html:tri("r","Tapo la r: queda I arriba y c × t abajo")}]
      ]}
    ]},

    { titulo:"Busco el tiempo", cuerpo:[
      {cols2:true, cols:[
        [{ej:{etq:"⏳ Busco el TIEMPO", enun:"Lucía ganó 405 € guardando 9000 € al 1,5 %. ¿Cuántos años?",
          pasos:[R`Tapo la t: $t = \dfrac{I}{c \cdot r}$`, R`$t = \dfrac{405}{9000 \cdot 0,015} = \dfrac{405}{135}$`],
          res:"Lucía tuvo el dinero <b>3 años</b>."}}],
        [{html:tri("t","Tapo la t: queda I arriba y c × r abajo")}]
      ]}
    ]},

    { titulo:"El triángulo del interés (lo que hemos hecho)", cuerpo:[
      {cols2:true, cols:[
        [{prop:["<b>Arriba</b>: lo que ganas (I). <b>Abajo</b>: los tres datos multiplicados.",
                "Lo que está <b>al lado</b> se <b>multiplica</b> (×). Lo que está <b>arriba y abajo</b> se <b>divide</b>.",
                "☝ <b>Tapa con el dedo lo que buscas</b> y mira lo que queda."], etq:"Cómo se usa"}],
        [{html:tri("")}]
      ]},
      {formula:R`I = c \cdot r \cdot t \qquad c = \frac{I}{r \cdot t} \qquad r = \frac{I}{c \cdot t} \qquad t = \frac{I}{c \cdot r}`}
    ]},

    { titulo:"¿Y si el tiempo no está en años?", cuerpo:[
      {cols:[
        [{def:[{formula:R`I = c \cdot r \cdot t`}], etq:"📅 En años"}],
        [{def:[{formula:R`I = \frac{c \cdot r \cdot t}{12}`}, "Un año tiene 12 meses."], etq:"🗓 En meses"}],
        [{def:[{formula:R`I = \frac{c \cdot r \cdot t}{360}`}, "El banco cuenta 360 días."], etq:"☀ En días"}]
      ]},
      {ej:{etq:"🎮 Ejemplo", enun:"Pablo guarda 2500 € al 3 % durante 9 meses para comprarse una consola. ¿Cuánto gana?",
        pasos:[R`$I = \dfrac{2500 \cdot 0,03 \cdot 9}{12} = \dfrac{675}{12} = 56,25$ €`], res:"Pablo gana <b>56,25 €</b>."}}
    ]},

    { titulo:"Capital final y préstamos", cuerpo:[
      {cols:[
        [{ej:{etq:"💰 Ahorro", enun:"Deposito 4000 € al 3 % durante 2 años. ¿Cuánto tengo al final?",
          pasos:[R`$I = 4000 \cdot 0,03 \cdot 2 = 240$ €`, R`Capital final $= 4000 + 240$`], res:"Al final tengo <b>4240 €</b>."}}],
        [{ej:{etq:"💳 Préstamo", enun:"Pido 1200 € prestados al 8 % y los devuelvo a los 6 meses. ¿Cuánto devuelvo?",
          pasos:[R`$I = \dfrac{1200 \cdot 0,08 \cdot 6}{12} = 48$ €`, R`Devuelvo $1200 + 48$`], res:"Devuelvo <b>1248 €</b>."}}]
      ]},
      {nota:["Cuando <b>ahorras</b>, el banco te paga intereses. Cuando <b>pides un préstamo</b>, los intereses los pagas tú."]}
    ]},

    { titulo:"🪄 Trucos para ir más rápido", cuerpo:[
      {truco:[R`<b>El 1 % de cabeza:</b> el 1 % de 9000 € es 90 € (quita dos ceros). El 1,5 % es la mitad más: $90 + 45 = 135$ €.`], etq:"🪄 Truco 1"},
      {truco:[R`<b>Meses a años:</b> 6 meses = 0,5 años · 3 meses = 0,25 años · 18 meses = 1,5 años. Así puedes usar siempre $I = c \cdot r \cdot t$.`], etq:"🪄 Truco 2"},
      {truco:[R`<b>Capital final de golpe:</b> al 3 % durante 4 años ganas el 12 %, así que tienes el 112 %: multiplica por <b>1,12</b>.`], etq:"🪄 Truco 3"}
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

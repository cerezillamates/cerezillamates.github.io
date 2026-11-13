/* 2.º ESO · Tema 3 · Apartado 6.4: Porcentajes encadenados y ofertas. Se multiplican los índices; los % no se suman. */
(function(){
const R = String.raw;
const barra = (trozos, pie) => `<figure class="dib"><div class="barra-pct">${trozos.map(t=>`<span class="${t[2]||""}" style="flex:${t[0]}">${t[1]}</span>`).join("")}</div>${pie?`<figcaption>${pie}</figcaption>`:""}</figure>`;
// triángulo (solo como truco): C_F arriba; I_V × C_I abajo
const tri = (tapa, pie) => {
  const v = (k,t) => tapa===k ? `<tspan fill="#f59e0b">?</tspan>` : t;
  return `<figure class="dib tri"><svg viewBox="0 0 260 170" role="img" aria-label="Triángulo: C F arriba; I V por C I abajo">
    <polygon points="130,8 252,160 8,160" fill="#eef0ff" stroke="#4338ca" stroke-width="4" stroke-linejoin="round"/>
    <line x1="70" y1="86" x2="190" y2="86" stroke="#4338ca" stroke-width="3"/>
    <text x="130" y="72" text-anchor="middle" font-size="30" font-weight="800" fill="#1e1b3a">${v("F","C<tspan font-size=\"16\" dy=\"6\">F</tspan>")}</text>
    <text x="130" y="136" text-anchor="middle" font-size="28" font-weight="800" fill="#1e1b3a">${v("V","I<tspan font-size=\"15\" dy=\"5\">V</tspan>")}<tspan dy="-5"> × </tspan>${v("I","C<tspan font-size=\"15\" dy=\"5\">I</tspan>")}</text>
  </svg>${pie?`<figcaption>${pie}</figcaption>`:""}</figure>`;
};
const cuadro = (m1, m2, a, b, t) => `<table class="t cuadro"><tr><th>${m1}</th><th class="fl">(${t||"I"}) ⟶</th><th>${m2}</th></tr><tr><td>${a[0]}</td><td></td><td>${a[1]}</td></tr><tr><td>${b[0]}</td><td></td><td class="x">${b[1]}</td></tr></table>`;
const flecha = (pasos) => `<div class="cadena">${pasos.map((p,k)=>k%2 ? `<div class="op">${p}<i>━━━►</i></div>` : `<div class="caja">${p}</div>`).join("")}</div>`;
TEMA.registrar({
  num: "6.4",
  titulo: "Porcentajes · Encadenados y ofertas",
  videos: [
    {t:"Porcentajes encadenados", url:"https://www.youtube.com/watch?v=ynSBIu_6zSE"}
  ],

  clase: [
    { nivel:"Aplicación", min:5,
      enun:"Un reproductor de música costaba 110,50 €. Le aplican una rebaja del 20 %. ¿Cuál es su precio? ¿Y si después le aplican otra rebaja del 10 %?",
      pasos:[R`Rebaja del 20 %: $I_V = 1 - 0,20 = 0,80$ ⇒ $C_F = 0,80 \cdot 110,50 = 88,40$ €`, R`Otra rebaja del 10 %: $I_V = 1 - 0,10 = 0,90$ ⇒ $C_F = 0,90 \cdot 88,40 = 79,56$ €`, "La segunda rebaja se hace sobre 88,40 €, no sobre 110,50 €."],
      res:"Con la rebaja cuesta <b>88,40 €</b> y con la segunda rebaja, <b>79,56 €</b>." },
    { nivel:"Práctica", min:5, enun:"Una tablet cuesta 280 €. La rebajan un 15 % y al pagar le añaden el 21 % de IVA. ¿Cuánto pago?",
      pasos:[R`$280 \cdot 0,85 = 238$ €`, R`$238 \cdot 1,21 = 287,98$ €`], res:"Pago <b>287,98 €</b> por la tablet." },
    { nivel:"Práctica", min:5, enun:"El abono del polideportivo cuesta 40 €. En enero sube un 10 % y en septiembre vuelve a subir otro 10 %. ¿Cuánto cuesta al final?",
      pasos:[R`Cada subida del 10 %: $I_V = 1 + 0,10 = 1,10$`, R`$C_F = 1,10 \cdot 40 \cdot 1,10 = 48,40$ €`, "¡No son 48 €! La segunda subida se calcula sobre 44 €, no sobre 40 €."],
      res:"Al final el abono cuesta <b>48,40 €</b>." },
    { nivel:"Problema", min:6, enun:"Hace dos años había 150 alumnos en el conservatorio. El año pasado se matricularon un 10 % más y este año 110. ¿Subió o bajó este año? ¿Qué porcentaje?",
      pasos:[R`El año pasado: $C_F = 1,10 \cdot 150 = 165$ alumnos`, R`Este año: $110 = x \cdot 165$ ⇒ $x = \dfrac{110}{165} \approx 0,6667$`, R`Menor que 1: baja $1 - 0,6667 = 0,3333$ → $33,33\,\%$`],
      res:"Este año <b>bajó</b> un <b>33,33 %</b>." },
    { nivel:"Reto", min:7,
      enun:"Por el Black Friday, una videoconsola de 250 € tiene un descuento del 20 %. Después le aplican otro porcentaje, sin saber si es de subida o de bajada, y el precio final es 255 €. ¿Fue una subida o una bajada? ¿De cuánto?",
      pasos:[R`Con el descuento: $I_V = 1 - 0,20 = 0,80$ ⇒ $C_F = 0,80 \cdot 250 = 200$ €`,
             R`De 200 € a 255 €: $C_F = I_V \cdot C_I$ ⇒ $255 = x \cdot 200$ ⇒ $x = \dfrac{255}{200} = 1,275$`, R`Mayor que 1: sube $1,275 - 1 = 0,275$ → $27,5\,\%$`],
      res:"Fue una <b>subida del 27,5 %</b>." }
  ],

  casa: [
    { nivel:"Básico", enun:"Unos pantalones costaban 30 € y les aplican dos rebajas seguidas del 20 % y del 30 %. ¿Cuál es el precio final?",
      pasos:[R`Baja un 20 %: $I_V = 1 - 0,20 = 0,80$`, R`Baja un 30 %: $I_V = 1 - 0,30 = 0,70$`, R`$C_F = 0,80 \cdot 30 \cdot 0,70 = 30 \cdot 0,56 = 16,80$ €`, "¡No es una rebaja del 50 %!"], res:"El precio final es <b>16,80 €</b>." },
    { nivel:"Básico", enun:"Una camiseta de 20 € sube un 10 % y después baja un 10 %. ¿Cuánto cuesta al final?",
      pasos:[R`Sube un 10 %: $I_V = 1 + 0,10 = 1,10$`, R`Baja un 10 %: $I_V = 1 - 0,10 = 0,90$`, R`$C_F = 1,10 \cdot 0,90 \cdot 20 = 0,99 \cdot 20 = 19,80$ €`, "¡No vuelve a costar 20 €!"],
      res:"Al final la camiseta cuesta <b>19,80 €</b>." },
    { nivel:"Consolidación", enun:"¿Qué porcentaje de descuento es la oferta «3x2» (llevas 3 y pagas 2)? ¿Y la oferta «4x3»? ¿Cuál es mejor?",
      pasos:[R`3x2: $2 = x \cdot 3$ ⇒ $x \approx 0,67$ → baja $1 - 0,67 = 0,33$ → $33\,\%$`, R`4x3: $3 = x \cdot 4$ ⇒ $x = 0,75$ → baja $1 - 0,75 = 0,25$ → $25\,\%$`],
      res:"El 3x2 es un descuento de casi el <b>33 %</b> y el 4x3, del <b>25 %</b>: es mejor el <b>3x2</b>." },
    { nivel:"Consolidación", enun:"Un móvil de 300 € tiene un 10 % de descuento y después hay que añadir el 21 % de IVA. ¿Cuánto pago?",
      pasos:[R`Baja un 10 %: $I_V = 1 - 0,10 = 0,90$`, R`Sube un 21 %: $I_V = 1 + 0,21 = 1,21$`, R`$C_F = 0,90 \cdot 1,21 \cdot 300 = 1,089 \cdot 300 = 326,70$ €`],
      res:"Pago <b>326,70 €</b> por el móvil." },
    { nivel:"Para pensar", enun:"Un artículo sube un 20 % y después baja un 20 %. ¿Vuelve a su precio? Pruébalo con 100 €.",
      pasos:[R`Con 100 €: $100 \cdot 1,20 = 120$ € ⇒ $120 \cdot 0,80 = 96$ €`, R`Índice total: $I_V = 1,20 \cdot 0,80 = 0,96$`, R`Menor que 1: baja $1 - 0,96 = 0,04$ → $4\,\%$`], res:"<b>No</b> vuelve a su precio: queda un <b>4 %</b> más barato." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">Dos rebajas seguidas, ¿son la suma?</p>`}
    ]},
    { titulo:"Porcentajes encadenados", cuerpo:[
      {prop:["Cada cambio se hace sobre el precio que queda: los <b>índices se multiplican</b> y los porcentajes <b>no se suman</b>."], etq:"Encadenados"},
      {ej:{etq:"👖 Problema de examen", enun:"Unos pantalones de 30 € tienen dos rebajas seguidas del 20 % y del 30 %. ¿Cuál es el precio final?",
        pasos:[R`Baja un 20 %: $I_V = 1 - 0,20 = 0,80$`, R`Baja un 30 %: $I_V = 1 - 0,30 = 0,70$`, R`$C_F = 0,80 \cdot 30 \cdot 0,70 = 30 \cdot 0,56 = 16,80$ €`, "Índice total 0,56: es una rebaja del 44 %, ¡no del 50 %!"],
        res:"El precio final es <b>16,80 €</b>."}},
      {html:flecha(["30 €","× 0,80","24 €","× 0,70","16,80 €"])}
    ]},
    { titulo:"Subida y bajada: ¿cuál fue?", cuerpo:[
      {ej:{etq:"🛍️ Problema de examen", enun:"Un artículo costaba 180 €. Primero subió un 20 % y después le aplicaron otro porcentaje. El precio final es 162 €. ¿Fue subida o bajada? ¿De cuánto?",
        pasos:[R`Subida: $180 \cdot 1,20 = 216$ €`, R`De 216 € a 162 €: $C_F = I_V \cdot C_I$ → $162 = x \cdot 216 \;\Rightarrow\; x = \dfrac{162}{216} = 0,75$`, R`0,75 es menor que 1: <b>bajada</b> de $1 - 0,75 = 0,25$ → $25\,\%$`],
        res:"Fue una <b>bajada del 25 %</b>."}}
    ]},
    { titulo:"Compras inteligentes: las ofertas", cuerpo:[
      {cols:[
        [{ej:{etq:"3 × 2", enun:"Llevas 3 y pagas 2.", pasos:[R`$2 = x \cdot 3$ ⇒ $x \approx 0,67$`, R`Baja $1 - 0,67 = 0,33$`], res:"Es un descuento de casi el <b>33 %</b>."}}],
        [{ej:{etq:"2.ª unidad a mitad de precio", enun:"Llevas 2 y pagas 1,5.", pasos:[R`$1,5 = x \cdot 2$ ⇒ $x = 0,75$`, R`Baja $1 - 0,75 = 0,25$`], res:"Es un descuento del <b>25 %</b>."}}],
        [{ej:{etq:"−70 % en la 2.ª unidad", enun:"Llevas 2 y pagas 1,3.", pasos:[R`$1,3 = x \cdot 2$ ⇒ $x = 0,65$`, R`Baja $1 - 0,65 = 0,35$`], res:"Es un descuento del <b>35 %</b>."}}]
      ]},
      {nota:["Solo es buena oferta si de verdad necesitas las dos unidades 😉"]}
    ]},
    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:["<b>Sumar los porcentajes</b> encadenados: −20 % y −30 % no es −50 %. Se multiplican los índices."], etq:"⚠️ Error 1"},
      {aviso:["<b>Subir un 20 % y bajar un 20 %</b> no deja el precio igual: 1,20 · 0,80 = 0,96."], etq:"⚠️ Error 2"}
    ]},
    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{lista:["Cada cambio tiene su índice: sube → 1 + el %; baja → 1 − el %.",
        "Varios cambios seguidos: se multiplican los índices. Los % no se suman.",
        "Ofertas: qué parte pago de lo que me llevo."]}]},
      {estudio:[
        {comp:{q:"Sube un 10 % y luego otro 10 %. ¿Cuánto sube en total (%)?", sol:21, unidad:"%", explic:"1,10 · 1,10 = 1,21 → +21 %", pista:"Multiplica los índices."}},
        {comp:{q:"Unos pantalones de 50 € tienen dos rebajas del 20 % y del 10 %. ¿Precio final?", sol:36, unidad:"€", explic:"0,80 · 0,90 · 50 = 36 €", pista:"Multiplica los índices."}}
      ]}
    ]}
  ]
});
})();

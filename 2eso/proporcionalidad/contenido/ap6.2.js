/* 2.º ESO · Tema 3 · Apartado 6.2: Porcentajes. Tipo 2: calcular el total (DIVIDIENDO)
   Dado el precio rebajado, el descuento, el IVA o el precio con IVA. C_F = I_V · C_I con x en C_I. */
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
  num: "6.2",
  titulo: "Porcentajes · Tipo 2: calcular el total",
  videos: [
    {t:"Aumentos y disminuciones porcentuales", url:"https://www.youtube.com/watch?v=sh0ytvn8Y4M"}
  ],

  clase: [
    { nivel:"Problema", min:5,
      enun:"En una encuesta del instituto, 54 alumnos, que son el 45 % de los encuestados, prefieren el baloncesto. ¿Cuántos alumnos respondieron la encuesta?",
      pasos:["Ahora busco el <b>total</b>, la cantidad inicial.", R`$C_F = I_V \cdot C_I$ → $54 = 0,45 \cdot x \;\Rightarrow\; x = \dfrac{54}{0,45} = 120$`, R`Comprueba: $120 \cdot 0,45 = 54$ ✓`],
      res:"Respondieron la encuesta <b>120 alumnos</b>." },
    { nivel:"Aplicación", min:4,
      enun:"Un portátil cuesta 544,50 € con el 21 % de IVA incluido. ¿Cuál es su precio sin IVA?",
      pasos:[R`Con IVA sube un 21 %: $I_V = 1 + 0,21 = 1,21$`, R`$C_F = I_V \cdot C_I$ → $544,50 = 1,21 \cdot x \;\Rightarrow\; x = \dfrac{544,50}{1,21} = 450$ €`],
      res:"Sin IVA, el portátil cuesta <b>450 €</b>." },
    { nivel:"Práctica", min:5,
      enun:"Aprovechando el Black Friday me he comprado una sudadera por 28 € con una rebaja del 20 %. ¿Cuánto costaba antes de la rebaja?",
      pasos:[R`Rebaja del 20 %: $I_V = 1 - 0,20 = 0,80$`, R`$C_F = I_V \cdot C_I$ ⇒ $28 = 0,80 \cdot x$ ⇒ $x = \dfrac{28}{0,80} = 35$ €`, R`Comprueba: $35 \cdot 0,80 = 28$ ✓`],
      res:"La sudadera costaba <b>35 €</b>." },
    { nivel:"Práctica", min:5,
      enun:"En unas zapatillas me han descontado 9 €, que es el 15 % del precio.<br><b>a)</b> ¿Cuánto costaban?<br><b>b)</b> ¿Cuánto he pagado?",
      pasos:[R`<b>a)</b> Los 9 € son el 15 % del precio: $I_V = 0,15$`, R`$9 = 0,15 \cdot x$ ⇒ $x = \dfrac{9}{0,15} = 60$ €`, R`<b>b)</b> $C_F = 0,85 \cdot 60 = 51$ €`],
      res:"a) Las zapatillas costaban <b>60 €</b>.<br>b) He pagado <b>51 €</b>." },
    { nivel:"Problema", min:5,
      enun:"En el ticket de un taller pone que el IVA (21 %) son 63 €. ¿Cuánto cuesta el arreglo sin IVA? ¿Y con IVA?",
      pasos:[R`Los 63 € son el 21 % del precio sin IVA: $I_V = 0,21$`, R`$63 = 0,21 \cdot x$ ⇒ $x = \dfrac{63}{0,21} = 300$ €`, R`Con IVA: $C_F = 1,21 \cdot 300 = 363$ €`],
      res:"Sin IVA el arreglo cuesta <b>300 €</b> y con IVA, <b>363 €</b>." }
  ],

  casa: [
    { nivel:"Problema", enun:"18 alumnos de 2.º, que son el 60 % del curso, van a la excursión. ¿Cuántos alumnos hay en 2.º?",
      pasos:[R`$C_F = I_V \cdot C_I$ → $18 = 0,60 \cdot x \;\Rightarrow\; x = \dfrac{18}{0,60} = 30$`], res:"En 2.º hay <b>30 alumnos</b>." },
    { nivel:"Básico", enun:"El 25 % de los socios de un club, 45 personas, son menores de edad. ¿Cuántos socios tiene el club?",
      pasos:[R`La $x$ es el total: $45 = 0,25 \cdot x$`, R`$x = \dfrac{45}{0,25} = 180$`], res:"El club tiene <b>180 socios</b>." },
    { nivel:"Consolidación", enun:"Un abrigo rebajado un 30 % me ha costado 63 €. ¿Cuánto costaba antes?",
      pasos:[R`Rebaja del 30 %: $I_V = 1 - 0,30 = 0,70$`, R`$C_F = I_V \cdot C_I$ → $63 = 0,70 \cdot x \;\Rightarrow\; x = \dfrac{63}{0,70} = 90$ €`], res:"El abrigo costaba <b>90 €</b>." },
    { nivel:"Consolidación", enun:"Unas gafas cuestan 121 € con el 21 % de IVA incluido. ¿Cuánto cuestan sin IVA?",
      pasos:[R`Con IVA sube: $I_V = 1 + 0,21 = 1,21$`, R`$121 = 1,21 \cdot x$ ⇒ $x = \dfrac{121}{1,21} = 100$ €`], res:"Sin IVA, las gafas cuestan <b>100 €</b>." },
    { nivel:"Consolidación", enun:"Con un descuento del 20 % me ahorro 6 € en un libro. ¿Cuánto costaba? ¿Cuánto pago?",
      pasos:[R`Los 6 € son el 20 % del precio: $6 = 0,20 \cdot x$ ⇒ $x = \dfrac{6}{0,20} = 30$ €`, R`Pago: $C_F = 0,80 \cdot 30 = 24$ €`], res:"El libro costaba <b>30 €</b> y pago <b>24 €</b>." },
    { nivel:"Problema", enun:"Un pantano está al 60 % de su capacidad y tiene 240 hm³ de agua. ¿Cuál es su capacidad? ¿Cuántos hm³ le faltan para llenarse?",
      pasos:[R`$240 = 0,60 \cdot x$ ⇒ $x = \dfrac{240}{0,60} = 400$ hm³`, R`Le faltan $400 - 240 = 160$ hm³`], res:"El pantano tiene una capacidad de <b>400 hm³</b> y le faltan <b>160 hm³</b> para llenarse." },
    { nivel:"Para pensar", enun:"Lucas dice: «Si con un 20 % de rebaja pago 40 €, antes costaba 40 + el 20 % de 40 = 48 €». ¿Tiene razón?",
      pasos:[R`Con la fórmula: $40 = 0,80 \cdot x$ ⇒ $x = \dfrac{40}{0,80} = 50$ €`, R`Comprueba: $50 \cdot 0,80 = 40$ ✓. Con 48 €: $48 \cdot 0,80 = 38,40$ ✗`, "El 20 % se calculó sobre el precio de antes (50 €), no sobre 40 €."],
      res:"Lucas <b>no</b> tiene razón: antes costaba <b>50 €</b>." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">Sé una parte: ¿cuánto era el total?</p>`}
    ]},
    { titulo:"Calcular el total", cuerpo:[
      {ej:{enun:"9 alumnos de mi clase vienen en bici, que son el 30 % de la clase. ¿Cuántos alumnos somos?",
        pasos:[R`$C_F = 9$, $I_V = 0,30$ y la $x$ es el total`, R`$C_F = I_V \cdot C_I$ → $9 = 0,30 \cdot x \;\Rightarrow\; x = \dfrac{9}{0,30} = 30$`, R`Comprueba: $30 \cdot 0,30 = 9$ ✓`],
        res:"En la clase somos <b>30 alumnos</b>."}}
    ]},
    { titulo:"Lo que busco es la $x$", cuerpo:[
      {html:despeje([R`C_F = I_V \cdot C_I`, R`Busco $C_I$: pongo una $x$`, R`C_F = I_V \cdot x`, R`$I_V$ está multiplicando: pasa dividiendo`, R`x = \dfrac{C_F}{I_V}`])},
      {nota:["<b>Tipo 2:</b> conozco la parte y el %. Busco el total: <b>divido</b> entre el índice."]},
      {truco:[{html:tri("I")}, "Tapa con el dedo lo que buscas: $C_I$ queda debajo de $C_F$, así que se divide."], etq:"🪄 Truco: el triángulo"}
    ]},
    { titulo:"¿Cuánto costaba antes?", cuerpo:[
      {prop:["Si sé el precio final, pongo una <b>$x$</b> en el precio de antes: <b>$C_F = I_V \\cdot x$</b> y despejo."], etq:"Hacia atrás"},
      {ej:{etq:"👚 Problema de examen", enun:"Por el Black Friday me he comprado una blusa por 24 €. Si estaba rebajada un 28 %, ¿cuánto costaba antes?",
        pasos:[R`Rebaja del 28 %: $I_V = 1 - 0,28 = 0,72$`, R`$C_F = I_V \cdot C_I$ → $24 = 0,72 \cdot x \;\Rightarrow\; x = \dfrac{24}{0,72} \approx 33,33$ €`],
        res:"La blusa costaba <b>33,33 €</b>."}},
      {aviso:["¡No vale sumar el 28 % de 24! (24 + 6,72 = 30,72 €, mal): el 28 % era del precio de antes."]}
    ]},
    { titulo:"¿Cuánto cuesta sin IVA?", cuerpo:[
      {ej:{etq:"📱", enun:"Un móvil cuesta 242 € con el 21 % de IVA incluido. ¿Cuánto cuesta sin IVA?",
        pasos:[R`Con IVA sube: $I_V = 1 + 0,21 = 1,21$`, R`$C_F = I_V \cdot C_I$ ⇒ $242 = 1,21 \cdot x$ ⇒ $x = \dfrac{242}{1,21} = 200$ €`], res:"Sin IVA, el móvil cuesta <b>200 €</b>."}},
      {aviso:["Restar el 21 % a 242 € está mal: se divide entre 1,21."]}
    ]},
    { titulo:"Dado el descuento o el IVA en euros", cuerpo:[
      {cols:[
        [{ej:{etq:"💸 Descuento", enun:"Me han descontado 6 €, que es el 20 % del precio. ¿Cuánto costaba?",
          pasos:[R`$6 = 0,20 \cdot x$ ⇒ $x = \dfrac{6}{0,20} = 30$ €`], res:"Costaba <b>30 €</b>."}}],
        [{ej:{etq:"🧾 IVA", enun:"El IVA (21 %) de una factura son 21 €. ¿Cuánto es sin IVA?",
          pasos:[R`$21 = 0,21 \cdot x$ ⇒ $x = \dfrac{21}{0,21} = 100$ €`], res:"Sin IVA son <b>100 €</b>."}}]
      ]},
      {prop:[R`Si me dan <b>lo que pago</b>: $I_V = 0,80$ o $1,21$. Si me dan <b>el descuento o el IVA</b>: $I_V = 0,20$ o $0,21$.`]}
    ]},
    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:["<b>Confundir la parte con el total</b>: lee bien qué es el 100 % ($C_I$)."], etq:"⚠️ Error 1"},
      {aviso:["<b>Sumar el porcentaje al precio rebajado</b>: el % era del precio de antes. Se divide entre el índice."], etq:"⚠️ Error 2"},
      {aviso:[R`<b>Dividir al revés</b>: de $9 = 0,30 \cdot x$ sale $x = \dfrac{9}{0,30}$.`], etq:"⚠️ Error 3"}
    ]},
    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{lista:[
        "Tipo 2: busco el total o el precio de antes: pongo la $x$ en $C_I$ y <b>divido</b>.",
        "Dado lo que pago (rebajado o con IVA): $I_V$ = 1 − el % o 1 + el %.",
        "Dado el descuento o el IVA en euros: $I_V$ = el % en decimal."
      ]}]},
      {estudio:[
        {comp:{q:"El 25 % de una cantidad es 14. ¿Cuál es la cantidad?", sol:56, explic:"14 = 0,25 · x → x = 14 : 0,25 = 56", pista:"Pon x en la cantidad inicial."}},
        {comp:{q:"Con el 21 % de IVA pago 60,50 €. ¿Precio sin IVA?", sol:50, unidad:"€", explic:"60,50 = 1,21 · x → x = 50 €", pista:"Divide entre 1,21."}},
        {comp:{q:"Con una rebaja del 30 % pago 63 €. ¿Cuánto costaba?", sol:90, unidad:"€", explic:"63 = 0,70 · x → x = 90 €", pista:"I_V = 0,70."}}
      ]}
    ]}
  ]
});
})();

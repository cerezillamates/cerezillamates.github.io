/* 2.º ESO · Tema 3 · Apartado 6.1: Porcentajes. Tipo 1: calcular un %, un descuento o un incremento (MULTIPLICANDO)
   Organización de la profesora (13-nov-2026): porcentajes en 3 subapartados (6.1 multiplicando, 6.2 calcular el total
   dividiendo, 6.3 calcular el % dadas la cantidad inicial y la final). Siempre C_F = I_V · C_I, % en decimal, x en lo que se busca.
   2.º: datos directos y contextos sencillos. */
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
  num: "6.1",
  titulo: "Porcentajes · Tipo 1: calcular un %, un descuento o un incremento",
  videos: [
    {t:"Calcular el porcentaje de una cantidad", url:"https://www.youtube.com/watch?v=9T7w7iaMrjQ"},
    {t:"Aumentos y disminuciones porcentuales", url:"https://www.youtube.com/watch?v=sh0ytvn8Y4M"}
  ],

  clase: [
    { nivel:"Aplicación", min:4,
      enun:"Calcula de cabeza: <b>a)</b> 50 % de 46 &nbsp; <b>b)</b> 25 % de 80 &nbsp; <b>c)</b> 10 % de 350 &nbsp; <b>d)</b> 20 % de 45 &nbsp; <b>e)</b> 15 % de 200",
      pasos:["<b>a)</b> 50 % es la mitad: 46 : 2 = 23", "<b>b)</b> 25 % es la cuarta parte: 80 : 4 = 20", "<b>c)</b> 10 % es dividir entre 10: 35",
             "<b>d)</b> 20 % = 10 % · 2: 4,5 · 2 = 9", "<b>e)</b> 15 % = 10 % + 5 %: 20 + 10 = 30"],
      res:"a) 23 b) 20 c) 35 d) 9 e) 30" },
    { nivel:"Aplicación", min:4,
      enun:"En una clase de 25 alumnos, el 36 % ha aprobado todas las asignaturas en la 1.ª evaluación. ¿Cuántos alumnos son?",
      pasos:[R`$C_I = 25$, $I_V = 0,36$`, R`$C_F = I_V \cdot C_I = 25 \cdot 0,36 = 9$`],
      res:"Han aprobado todo <b>9 alumnos</b>." },
    { nivel:"Práctica", min:5,
      enun:"<b>a)</b> Una camiseta cuesta 15 € sin IVA. ¿Cuánto cuesta con el 21 % de IVA?<br><b>b)</b> Un balón de 24 € tiene un 25 % de descuento. ¿Cuánto pago?",
      pasos:[R`<b>a)</b> Sube un 21 %: $I_V = 1 + 0,21 = 1,21$`, R`$C_F = I_V \cdot C_I = 15 \cdot 1,21 = 18,15$ €`,
             R`<b>b)</b> Baja un 25 %: $I_V = 1 - 0,25 = 0,75$`, R`$C_F = 0,75 \cdot 24 = 18$ €`],
      res:"a) Con IVA, la camiseta cuesta <b>18,15 €</b>.<br>b) Por el balón pago <b>18 €</b>." },
    { nivel:"Práctica", min:4,
      enun:"En un curso de baile hay 60 personas. Al mes siguiente se apuntan un 20 % más. ¿Cuántas personas hay ahora?",
      pasos:[R`Sube un 20 %: $I_V = 1 + 0,20 = 1,20$`, R`$C_F = I_V \cdot C_I = 60 \cdot 1,20 = 72$`],
      res:"Ahora hay <b>72 personas</b> en el curso de baile." },
    { nivel:"Problema", min:5,
      enun:"En un instituto de 480 alumnos, el 35 % viene en autobús y el 15 % en bici. El resto viene andando. ¿Cuántos alumnos vienen de cada forma?",
      pasos:[R`Autobús, el 35 %: $C_F = I_V \cdot C_I = 0,35 \cdot 480 = 168$`, R`Bici, el 15 %: $C_F = 0,15 \cdot 480 = 72$`, R`Andando: $480 - 168 - 72 = 240$`],
      res:"Vienen <b>168 alumnos</b> en autobús, <b>72</b> en bici y <b>240</b> andando." }
  ],

  casa: [
    { nivel:"Básico", enun:"Calcula: <b>a)</b> 30 % de 90 &nbsp; <b>b)</b> 5 % de 240 &nbsp; <b>c)</b> 75 % de 60 &nbsp; <b>d)</b> 1 % de 3500",
      pasos:[R`a) $90 \cdot 0,30 = 27$`, R`b) $240 \cdot 0,05 = 12$`, R`c) $60 \cdot 0,75 = 45$`, R`d) $3500 \cdot 0,01 = 35$`], res:"a) 27 b) 12 c) 45 d) 35" },
    { nivel:"Básico", enun:"Un ordenador cuesta 1200 € sin IVA. ¿Cuánto cuesta con el 21 % de IVA?",
      pasos:[R`Sube un 21 %: $I_V = 1 + 0,21 = 1,21$`, R`$C_F = 1,21 \cdot 1200 = 1452$ €`], res:"Con IVA, el ordenador cuesta <b>1452 €</b>." },
    { nivel:"Básico", enun:"En una clase de 30 alumnos, el 40 % lleva gafas. ¿Cuántos alumnos llevan gafas?",
      pasos:[R`$C_I = 30$ e $I_V = 0,40$`, R`$C_F = I_V \cdot C_I = 30 \cdot 0,40 = 12$`], res:"Llevan gafas <b>12 alumnos</b>." },
    { nivel:"Consolidación", enun:"Un patinete de 250 € tiene un 30 % de descuento. ¿Cuánto pago?",
      pasos:[R`Baja un 30 %: $I_V = 1 - 0,30 = 0,70$`, R`$C_F = I_V \cdot C_I = 0,70 \cdot 250 = 175$ €`], res:"Por el patinete pago <b>175 €</b>." },
    { nivel:"Problema", enun:"El año pasado sobró comida de Navidad para 6 días y éramos 30 personas. Este año somos un 20 % más de personas. ¿Para cuántos días sobrará comida si se compra la misma cantidad?",
      pasos:[R`Personas este año: $30 \cdot 1,20 = 36$`, cuadro("Personas","Días",["30","6"],["36","x"]),
             "Más personas → la comida dura menos: <b>I</b>.", R`Le damos la vuelta: $\dfrac{30}{36} = \dfrac{x}{6}$`, R`En cruz: $36 \cdot x = 30 \cdot 6 \;\Rightarrow\; x = \dfrac{180}{36} = 5$`],
      res:"Este año sobrará comida para <b>5 días</b>." },
    { nivel:"Problema", enun:"Con un dinero ahorrado puedo comprar 20 bolígrafos a 60 céntimos cada uno. Si el precio sube un 25 %, ¿cuántos bolígrafos podré comprar con el mismo dinero?",
      pasos:[R`Precio nuevo: $0,60 \cdot 1,25 = 0,75$ €`, cuadro("Precio (€)","Bolígrafos",["0,60","20"],["0,75","x"]),
             "Más caros → compro menos: <b>I</b>.", R`Le damos la vuelta: $\dfrac{0,60}{0,75} = \dfrac{x}{20}$`, R`En cruz: $0,75 \cdot x = 0,60 \cdot 20 \;\Rightarrow\; x = \dfrac{12}{0,75} = 16$`],
      res:"Podré comprar <b>16 bolígrafos</b>." },
    { nivel:"Para pensar", enun:"¿Es lo mismo el 20 % de 50 que el 50 % de 20? ¿Por qué? Usa la idea para calcular de cabeza el 8 % de 25.",
      pasos:[R`$50 \cdot 0,20 = 10$ y $20 \cdot 0,50 = 10$: se multiplican los mismos números.`, R`$8\,\%$ de $25 = 25\,\%$ de $8 = 8 : 4 = 2$`], res:"<b>Sí</b> es lo mismo, y el 8 % de 25 es <b>2</b>." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">¿Qué quiere decir «el 20 % de la clase»?</p>`}
    ]},
    { titulo:"¿Qué es un porcentaje?", cuerpo:[
      {def:["Un <b>porcentaje</b> (tanto por ciento) es una razón con denominador 100: <b>25 %</b> significa <b>25 de cada 100</b>.", {formula:R`25\,\% = \frac{25}{100} = 0{,}25`}], etq:"Porcentaje"},
      {html:barra([[25,"25 %","r"],[75,"75 %",""]],"Si de cada 100 alumnos 25 van en bici: el 25 %")}
    ]},
    { titulo:"El porcentaje en forma decimal", cuerpo:[
      {def:["Para calcular, el % se escribe en <b>decimal</b>: se divide entre 100."], etq:"En decimal"},
      {html:`<div class="dec-cards">${[["50 %","0,50","la mitad"],["25 %","0,25","la cuarta parte"],["36 %","0,36",""],["5 %","0,05","¡ojo con el 0!"]].map(c=>`<div><b>${c[0]}</b><i>▼</i><span>${c[1]}</span><small>${c[2]}</small></div>`).join("")}</div>`},
      {nota:["La coma se mueve <b>dos lugares</b> a la izquierda: 5 % es 0,05, no 0,5."]}
    ]},
    { titulo:"Porcentajes de cabeza", cuerpo:[
      {cols:[
        [{prop:["<b>50 %</b> → la mitad (: 2)", "<b>25 %</b> → la cuarta parte (: 4)", "<b>75 %</b> → tres cuartas partes"], etq:"Fracciones"}],
        [{prop:["<b>10 %</b> → divido entre 10", "<b>20 %</b> → el 10 % por 2", "<b>5 %</b> → la mitad del 10 %", "<b>1 %</b> → divido entre 100"], etq:"Con el 10 %"}]
      ]},
      {ej:{enun:"Calcula el 15 % de 60.", pasos:["10 % de 60 = 6", "5 % de 60 = 3 (la mitad)", "15 % = 6 + 3"], res:"El 15 % de 60 es <b>9</b>."}}
    ]},
    { titulo:"El porcentaje de una cantidad", cuerpo:[
      {ej:{enun:"En una clase de 80 alumnos de 2.º, el 35 % viene andando. ¿Cuántos son?",
        pasos:[R`Lo que había: $C_{\text{inicial}} = 80$. El % en decimal: $I_{\text{variación}} = 0,35$`, R`$C_{\text{final}} = 0,35 \cdot 80 = 28$`],
        res:"Vienen andando <b>28 alumnos</b>."}}
    ]},
    { titulo:"La fórmula (lo que hemos usado)", cuerpo:[
      {prop:[{formula:R`C_{\text{final}} = I_{\text{variación}} \cdot C_{\text{inicial}}`}, R`Abreviado: $C_F = I_V \cdot C_I$`], etq:"La fórmula"},
      {html:despeje([R`C_F = I_V \cdot C_I`, R`Busco $C_F$: pongo una $x$ y multiplico`, R`x = I_V \cdot C_I`])},
      {estudio:[{html:`<div class="cfiv"><div><b>$C_I$</b><span>cantidad inicial</span><small>el total: el 100 %</small></div><div><b>$I_V$</b><span>índice de variación</span><small>el % en decimal</small></div><div><b>$C_F$</b><span>cantidad final</span><small>lo que queda o lo que me piden</small></div></div>`}]},
      {nota:["<b>Tipo 1:</b> conozco lo que había y el %: <b>multiplico</b>."]}
    ]},
    { titulo:"Subir y bajar un porcentaje", cuerpo:[
      {cols:[
        [{ej:{etq:"📉 Rebaja", enun:"Unas zapatillas de 60 € tienen un 25 % de descuento. ¿Cuánto pagas?", pasos:[R`Baja un 25 %: $I_V = 1 - 0,25 = 0,75$`, R`$C_F = I_V \cdot C_I = 60 \cdot 0,75 = 45$ €`], res:"Pagas <b>45 €</b> por las zapatillas."}}],
        [{ej:{etq:"📈 Subida", enun:"La entrada al parque acuático cuesta 20 € y sube un 10 %. ¿Cuánto cuesta ahora?", pasos:[R`Sube un 10 %: $I_V = 1 + 0,10 = 1,10$`, R`$C_F = 1,10 \cdot 20 = 22$ €`], res:"La entrada cuesta ahora <b>22 €</b>."}}]
      ]}
    ]},
    { titulo:"¿Sube o baja? El índice de variación $I_V$", cuerpo:[
      {html:R`<div class="ivs"><div><b class="t">📊 El % de una cantidad</b><span class="f">$I_V = $ el % en decimal</span><small>El 40 %: $I_V = 0,40$</small></div><div class="sube"><b class="t">📈 Sube</b><span class="f">$I_V = 1 + $ el %</span><small>IVA del 21 %: $I_V = 1 + 0,21 = 1,21$</small></div><div class="baja"><b class="t">📉 Baja</b><span class="f">$I_V = 1 - $ el %</span><small>Descuento del 20 %: $I_V = 1 - 0,20 = 0,80$</small></div></div>`},
      {nota:["Sube: aumento, IVA, ganancia, se apuntan más. Baja: descuento, rebaja, pérdida, se van."]}
    ]},
    { titulo:"El IVA", cuerpo:[
      {def:["El <b>IVA</b> es un impuesto que se suma al precio. El general es del <b>21 %</b> (en alimentos básicos y medicinas es menor)."], etq:"IVA"},
      {ej:{enun:"Un portátil cuesta 450 € sin IVA. ¿Cuánto pago con el 21 %?",
        pasos:[R`Sube un 21 %: $I_V = 1 + 0,21 = 1,21$`, R`$C_F = 1,21 \cdot 450 = 544,50$ €`], res:"Con IVA pago <b>544,50 €</b>."}},
      {html:flecha(["450 €","× 1,21","544,50 €"])}
    ]},
    { titulo:"Problema: el coche reduce un 40 %", cuerpo:[
      {ej:{etq:"🚗 Problema de examen", enun:"Un coche a 80 km/h tarda 5 horas en un trayecto. Si disminuye su velocidad un 40 %, ¿cuánto tardará en el mismo trayecto?",
        pasos:[R`Nueva velocidad: baja un 40 %, $I_V = 1 - 0,40 = 0,60$ → $80 \cdot 0,60 = 48$ km/h`,
               cuadro("Velocidad (km/h)","Horas",["80","5"],["48","x"]),
               R`Menos velocidad → más tiempo: <b>I</b>. Le damos la vuelta: $\dfrac{80}{48} = \dfrac{x}{5}$`,
               R`En cruz: $48 \cdot x = 80 \cdot 5 \;\Rightarrow\; x = \dfrac{400}{48} \approx 8,33$ h`,
               R`$0,33$ h $\approx 0,33 \cdot 60 = 20$ min`],
        res:"El coche tardará <b>8 h 20 min</b>."}},
      {aviso:["8,33 h <b>no</b> son 8 h 33 min: 0,33 h son unos 20 min."]}
    ]},
    { titulo:"🪄 Trucos para ir más rápido", cuerpo:[
      {truco:["<b>El 10 % es mover la coma</b> un lugar a la izquierda: 10 % de 350 = 35."], etq:"🪄 Truco 1"},
      {truco:["<b>Se pueden cambiar de orden</b>: el 8 % de 25 es el 25 % de 8 = 2."], etq:"🪄 Truco 2"},
      {truco:["<b>Los porcentajes de todos los grupos suman 100 %</b>: el último sale restando, y así compruebas."], etq:"🪄 Truco 3"}
    ]},
    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:["<b>Escribir mal el decimal</b>: 5 % es 0,05, no 0,5."], etq:"⚠️ Error 1"},
      {aviso:[R`<b>En un descuento del 25 %, multiplicar por 0,25</b>: eso es lo que te ahorras. Lo que pagas es $I_V = 1 - 0,25 = 0,75$.`], etq:"⚠️ Error 2"},
      {aviso:["<b>Sumar los porcentajes</b> encadenados: −20 % y −30 % no es −50 %."], etq:"⚠️ Error 3"}
    ]},
    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{lista:[
        "$r\\,\\%$ = $r$ de cada 100 → en decimal, divido entre 100.",
        "La fórmula: $C_F = I_V \\cdot C_I$. Tipo 1: conozco el total y el %: <b>multiplico</b>.",
        "Sube → $I_V$ = 1 + el %. Baja → $I_V$ = 1 − el %.",
        "Encadenados: se multiplican los índices."
      ]}]},
      {estudio:[
        {comp:{q:"¿Cuánto es el 40 % de 65?", sol:26, explic:"C_F = 65 · 0,40 = 26", pista:"Escribe el 40 % en decimal (0,40) y multiplica."}},
        {comp:{q:"Una camiseta de 18 € tiene un 15 % de descuento. ¿Cuánto pago?", sol:15.3, unidad:"€", explic:"18 · 0,85 = 15,30 €", pista:"El índice de una bajada del 15 % es 0,85."}},
        {comp:{q:"Un libro de 20 € con un 4 % de IVA. ¿Cuánto cuesta?", sol:20.8, unidad:"€", explic:"20 · 1,04 = 20,80 €", pista:"Sube un 4 %: I_V = 1,04."}}
      ]}
    ]}
  ]
});
})();

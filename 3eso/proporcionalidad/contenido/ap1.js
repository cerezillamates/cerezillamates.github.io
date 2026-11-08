/* 3.º ESO · Tema 3 · Apartado 1: Razones y proporciones
   Basado en los apuntes de la profesora (Apuntes 1, apartado 1).
   Cada «lámina» es una pantalla en modo PROYECTAR y una sección en modo ESTUDIAR.
   {estudio:[...]} solo aparece al estudiar; {proy:[...]} solo al proyectar. */
(function(){
const R = String.raw;
TEMA.registrar({
  num: 1,
  titulo: "Razones y proporciones",
  videos: [
    {t:"Razones y proporciones, tema completo", url:"https://www.youtube.com/watch?v=Nm5ruqNN4pk"},
    {t:"Medio y cuarto proporcional", url:"https://www.youtube.com/watch?v=UvlC_O2skyQ"}
  ],

  /* ===== ACTIVIDADES DE CLASE (se proyectan una a una con cronómetro) =====
     nivel: Aplicación · Práctica · Problema · Reto     min: tiempo orientativo */
  clase: [
    { nivel:"Aplicación", min:4,
      enun:"Calcula la razón e interpreta el resultado:<br><b>a)</b> 4 kg de manzanas cuestan 7,20 €.<br><b>b)</b> Un coche recorre 360 km en 4 horas.",
      pasos:[
        R`<b>a)</b> Divido el precio entre los kilos: $\dfrac{7,20}{4} = 1,80$ €/kg`,
        "Significa: <b>el kilo de manzanas cuesta 1,80 €</b>.",
        R`<b>b)</b> Divido los km entre las horas: $\dfrac{360}{4} = 90$ km/h`,
        "Significa: <b>cada hora recorre 90 km</b> (su velocidad media)."
      ],
      res:"a) 1,80 €/kg&ensp;·&ensp;b) 90 km/h" },
    { nivel:"Aplicación", min:4,
      enun:R`¿Forman proporción? Justifica tu respuesta.<br><b>a)</b> $\dfrac{3}{4}$ y $\dfrac{12}{16}$ $\qquad$ <b>b)</b> $\dfrac{5}{8}$ y $\dfrac{10}{15}$`,
      pasos:[
        "Multiplico en cruz: si los productos son iguales, forman proporción.",
        R`<b>a)</b> $3 \cdot 16 = 48$ y $4 \cdot 12 = 48$ → iguales: <span class="si">Sí</span>`,
        R`<b>b)</b> $5 \cdot 15 = 75$ y $8 \cdot 10 = 80$ → distintos: <span class="no">No</span>`
      ],
      res:"a) Sí&ensp;·&ensp;b) No" },
    { nivel:"Práctica", min:5,
      enun:R`Calcula el cuarto proporcional:<br><b>a)</b> $\dfrac{x}{6} = \dfrac{10}{4}$ $\qquad$ <b>b)</b> $\dfrac{3}{x} = \dfrac{9}{12}$`,
      pasos:[
        R`<b>a)</b> En cruz: $x \cdot 4 = 6 \cdot 10 = 60$`,
        R`$x = \dfrac{60}{4} = 15$`,
        R`<b>b)</b> En cruz: $3 \cdot 12 = 9 \cdot x \;\Rightarrow\; 36 = 9x$`,
        R`$x = \dfrac{36}{9} = 4$`
      ],
      res:R`a) $x = 15$&ensp;·&ensp;b) $x = 4$` },
    { nivel:"Práctica", min:5,
      enun:R`Calcula el medio proporcional:<br><b>a)</b> $\dfrac{4}{x} = \dfrac{x}{9}$ $\qquad$ <b>b)</b> $\dfrac{2}{x} = \dfrac{x}{8}$`,
      pasos:[
        R`<b>a)</b> La $x$ está dos veces. En cruz: $x \cdot x = 4 \cdot 9 \;\Rightarrow\; x^2 = 36$`,
        R`$x = \pm\sqrt{36} = \pm 6$`,
        R`<b>b)</b> $x \cdot x = 2 \cdot 8 \;\Rightarrow\; x^2 = 16$`,
        R`$x = \pm\sqrt{16} = \pm 4$`
      ],
      res:R`a) $x = \pm 6$&ensp;·&ensp;b) $x = \pm 4$` },
    { nivel:"Problema", min:6,
      enun:"La razón entre las alturas de dos postes es igual a la razón entre sus sombras. El primer poste mide 12 m y su sombra 20 m. Si la sombra del segundo mide 24 m, ¿cuánto mide el segundo poste?",
      pasos:[
        R`Escribo las dos razones <b>en el mismo orden</b> (altura / sombra): $\dfrac{12}{20} = \dfrac{x}{24}$`,
        R`En cruz: $20 \cdot x = 12 \cdot 24 = 288$`,
        R`$x = \dfrac{288}{20} = 14,4$`,
        "¿Tiene sentido? Su sombra es más larga (24 > 20), así que el poste es más alto: 14,4 > 12 ✓"
      ],
      res:"El segundo poste mide <b>14,4 m</b>" },
    { nivel:"Problema", min:7,
      enun:R`<b>a)</b> Un tren va a 120 km/h y otro a 150 km/h. Calcula la razón entre la velocidad del segundo y la del primero e interprétala.<br><b>b)</b> La razón de dos números es $\dfrac{4}{3}$. Si el mayor es 48, ¿cuál es el otro?`,
      pasos:[
        R`<b>a)</b> El segundo arriba: $\dfrac{150}{120} = 1,25$`,
        "No lleva unidades (las dos son km/h): <b>el segundo tren va 1,25 veces más rápido</b> que el primero.",
        R`<b>b)</b> En $\dfrac{4}{3}$ el mayor está arriba, así que el 48 va arriba: $\dfrac{4}{3} = \dfrac{48}{x}$`,
        R`En cruz: $4 \cdot x = 3 \cdot 48 = 144 \;\Rightarrow\; x = \dfrac{144}{4} = 36$`
      ],
      res:"a) 1,25 veces&ensp;·&ensp;b) El otro número es 36" }
  ],

  /* ===== TAREAS PARA CASA (graduadas; con soluciones paso a paso) ===== */
  casa: [
    { nivel:"Básico",
      enun:"Calcula la razón e interpreta el resultado:<br><b>a)</b> 5 kg de melocotones cuestan 10,50 €.<br><b>b)</b> 12 m de tela cuestan 90 €.",
      pasos:[R`<b>a)</b> $\dfrac{10,50}{5} = 2,10$ €/kg → el kilo de melocotones cuesta 2,10 €.`,
             R`<b>b)</b> $\dfrac{90}{12} = 7,50$ €/m → cada metro de tela cuesta 7,50 €.`],
      res:"a) 2,10 €/kg&ensp;·&ensp;b) 7,50 €/m" },
    { nivel:"Básico",
      enun:R`Calcula el cuarto proporcional:<br><b>a)</b> $\dfrac{x}{8} = \dfrac{5}{2}$ $\qquad$ <b>b)</b> $\dfrac{0,5}{2,5} = \dfrac{6,4}{x}$`,
      pasos:[R`<b>a)</b> $x \cdot 2 = 8 \cdot 5 = 40 \;\Rightarrow\; x = \dfrac{40}{2} = 20$`,
             R`<b>b)</b> La $x$ está abajo; el método es el mismo: $0,5 \cdot x = 2,5 \cdot 6,4 = 16$`,
             R`$x = \dfrac{16}{0,5} = 32$`],
      res:R`a) $x = 20$&ensp;·&ensp;b) $x = 32$` },
    { nivel:"Consolidación",
      enun:R`Calcula el medio proporcional:<br><b>a)</b> $\dfrac{10}{x} = \dfrac{x}{3,6}$ $\qquad$ <b>b)</b> $\dfrac{2,5}{x} = \dfrac{x}{6,4}$`,
      pasos:[R`<b>a)</b> $x^2 = 10 \cdot 3,6 = 36 \;\Rightarrow\; x = \pm\sqrt{36} = \pm 6$`,
             R`<b>b)</b> $x^2 = 2,5 \cdot 6,4 = 16 \;\Rightarrow\; x = \pm\sqrt{16} = \pm 4$`],
      res:R`a) $x = \pm 6$&ensp;·&ensp;b) $x = \pm 4$` },
    { nivel:"Consolidación",
      enun:R`¿Forman proporción $\dfrac{3}{12}$ y $\dfrac{5}{20}$? Si la forman, ¿cuál es la constante de proporcionalidad?`,
      pasos:[R`En cruz: $3 \cdot 20 = 60$ y $12 \cdot 5 = 60$ → iguales: <span class="si">sí forman proporción</span>.`,
             R`La constante es el valor de cada razón: $\dfrac{3}{12} = \dfrac{5}{20} = 0,25$`],
      res:"Sí. Constante = 0,25" },
    { nivel:"Problema",
      enun:R`<b>a)</b> Un paquete de galletas pesa 250 g y otro 1 kg. Calcula la razón entre el peso del grande y el del pequeño e interprétala.<br><b>b)</b> La razón de dos números es $\dfrac{5}{2}$. Si el mayor es 40, ¿cuál es el otro?`,
      pasos:[R`<b>a)</b> Primero, misma unidad: 1 kg = 1000 g. El grande arriba: $\dfrac{1000}{250} = 4$`,
             "El paquete grande pesa <b>4 veces</b> lo que el pequeño.",
             R`<b>b)</b> El mayor arriba: $\dfrac{5}{2} = \dfrac{40}{x} \;\Rightarrow\; 5x = 80 \;\Rightarrow\; x = 16$`],
      res:"a) 4 veces&ensp;·&ensp;b) 16" },
    { nivel:"Problema",
      enun:"Una foto de 10 cm × 15 cm se amplía sin deformarla (manteniendo la proporción entre sus lados). Si en la ampliación el lado corto mide 24 cm, ¿cuánto mide el lado largo?",
      pasos:[R`Mismo orden en las dos razones (corto / largo): $\dfrac{10}{15} = \dfrac{24}{x}$`,
             R`En cruz: $10 \cdot x = 15 \cdot 24 = 360 \;\Rightarrow\; x = 36$`,
             "Comprueba: en la original el largo es 1,5 veces el corto (15 : 10), y en la ampliación también (36 : 24 = 1,5) ✓"],
      res:"El lado largo mide <b>36 cm</b>" },
    { nivel:"Para pensar",
      enun:"Dos números están en la razón 3 : 5 y suman 64. ¿Cuáles son?",
      pasos:["Razón 3 : 5 quiere decir que por cada 3 partes del primero hay 5 del segundo: en total <b>8 partes</b>.",
             "Cada parte vale 64 : 8 = 8.",
             "Primero: 3 · 8 = 24. Segundo: 5 · 8 = 40.",
             R`Comprueba: $24 + 40 = 64$ y $\dfrac{24}{40} = \dfrac{3}{5}$ ✓`],
      res:"Los números son 24 y 40" },
    { nivel:"Para pensar",
      enun:"El medio proporcional (positivo) entre 5 y un número es 10. ¿Cuál es ese número?",
      pasos:[R`Planteo el medio proporcional con el número que no conozco: $\dfrac{5}{10} = \dfrac{10}{x}$`,
             R`En cruz: $5 \cdot x = 10 \cdot 10 = 100 \;\Rightarrow\; x = 20$`,
             R`Comprueba: $10^2 = 100$ y $5 \cdot 20 = 100$ ✓`],
      res:"El número es 20" }
  ],
  laminas: [
    { portada:true, cuerpo:[
      {nota:[{lista:[
        "Qué es una <b>razón</b> y qué significa el número que sale.",
        "Qué es una <b>proporción</b> y cómo se comprueba.",
        "Calcular el número que falta: <b>cuarto proporcional</b>.",
        "Calcular el <b>medio proporcional</b>."
      ]}], etq:"🎯 En este apartado vas a aprender"}
    ]},

    { titulo:"¿Qué es una razón?", cuerpo:[
      {def:[R`Una <b>razón</b> es el <b>cociente</b> (la división) entre dos cantidades: $\dfrac{a}{b}$. También se escribe $a : b$.`,
            "Nos dice <b>cuánto hay de una por cada unidad de la otra</b>."]},
      {ej:{enun:"3,5 kg de naranjas cuestan 6,30 €. ¿Cuánto cuesta 1 kg?",
        pasos:[
          R`Divido el precio entre los kilos: $\dfrac{6,30\ €}{3,5\ \text{kg}}$`,
          R`$6,30 : 3,5 = 1,8$`
        ],
        res:"El kilo cuesta <b>1,80 €</b> (1,80 €/kg)"}}
    ]},

    { titulo:"El número de una razón tiene significado", cuerpo:[
      {cols:[
        [{ej:{etq:"🚗 Con unidades", enun:"Un coche recorre 400 km en 5 horas.",
          pasos:[R`$\dfrac{400\ \text{km}}{5\ \text{h}} = 80\ \text{km/h}$`],
          res:"Cada hora recorre 80 km"}}],
        [{ej:{etq:"📺 Sin unidades", enun:"Una pantalla tiene formato 16 : 9 (ancho : alto).",
          pasos:[R`$\dfrac{16}{9} \approx 1,78$`],
          res:"El ancho es 1,78 veces el alto"}}]
      ]},
      {nota:["Si las dos cantidades son de <b>cosas distintas</b> (€ y kg, km y h), la razón lleva unidades: €/kg, km/h.",
             "Si son de <b>lo mismo</b> (dos longitudes), no lleva unidades: dice <b>cuántas veces</b> es una la otra."]}
    ]},

    { titulo:"Regla 1: lo que se nombra primero va arriba", cuerpo:[
      {prop:[R`«La razón entre A y B» es $\dfrac{A}{B}$: <b>A arriba, B abajo</b>.`], etq:"Regla 1 · El orden"},
      {ej:{enun:"En una clase hay 12 chicos y 18 chicas. Calcula la razón entre chicos y chicas.",
        pasos:[R`Chicos arriba, chicas abajo: $\dfrac{12}{18}$`, R`Simplifico: $\dfrac{12}{18} = \dfrac{2}{3}$`],
        res:"Por cada 2 chicos hay 3 chicas"}},
      {estudio:[{nota:[R`Si lo pones al revés, $\dfrac{18}{12} = \dfrac{3}{2}$, estás calculando la razón entre chicas y chicos: otra cosa distinta.`]}]}
    ]},

    { titulo:"Regla 2: si son de lo mismo, en la misma unidad", cuerpo:[
      {prop:["Antes de dividir dos longitudes, dos pesos, dos tiempos…, <b>pásalos a la misma unidad</b>."], etq:"Regla 2 · Las unidades"},
      {ej:{enun:"Un lápiz mide 15 cm y una mesa 1,2 m. ¿Cuál es la razón entre el lápiz y la mesa?",
        pasos:[R`Paso la mesa a cm: $1,2\ \text{m} = 120\ \text{cm}$`, R`$\dfrac{15}{120} = \dfrac{1}{8}$`],
        res:"La mesa mide 8 veces lo que el lápiz"}},
      {aviso:[R`Si no pasas a la misma unidad sale $\dfrac{15}{1,2} = 12,5$, ¡como si el lápiz fuera 12,5 veces más largo que la mesa!`]}
    ]},

    { titulo:"¿Qué es una proporción?", cuerpo:[
      {def:[R`Una <b>proporción</b> es una <b>igualdad entre dos razones</b>:`,
            {formula:R`\frac{\color{#b3261e}{a}}{\color{#2350b8}{b}} = \frac{\color{#2350b8}{c}}{\color{#b3261e}{d}}`},
            "Se lee «<i>a</i> es a <i>b</i> como <i>c</i> es a <i>d</i>».",
            R`<span class="ext">a</span> y <span class="ext">d</span> son los <span class="ext">extremos</span>; <span class="med">b</span> y <span class="med">c</span> son los <span class="med">medios</span>.`]},
      {ej:{enun:R`¿Por qué $\dfrac{2}{5} = \dfrac{6}{15}$ es una proporción?`,
        pasos:[R`$2 : 5 = 0,4$`, R`$6 : 15 = 0,4$`],
        res:"Las dos razones valen lo mismo: forman proporción ✓"}}
    ]},

    { titulo:"La propiedad fundamental", cuerpo:[
      {prop:[R`En toda proporción, el <b>producto de los extremos</b> es igual al <b>producto de los medios</b>:`,
             {formula:R`\frac{a}{b} = \frac{c}{d} \quad\Longleftrightarrow\quad a \cdot d = b \cdot c`},
             "Es lo que llamamos <b>multiplicar en cruz</b>."], etq:"Propiedad fundamental"},
      {cols:[
        [{ej:{etq:"✍️ ¿Forman proporción?", enun:R`$\dfrac{2}{5}$ y $\dfrac{6}{15}$`,
          pasos:[R`Extremos: $2 \cdot 15 = 30$`, R`Medios: $5 \cdot 6 = 30$`],
          res:`<span class="si">Sí</span>: dan lo mismo ✓`}}],
        [{ej:{etq:"✍️ ¿Forman proporción?", enun:R`$\dfrac{4}{6}$ y $\dfrac{6}{8}$`,
          pasos:[R`Extremos: $4 \cdot 8 = 32$`, R`Medios: $6 \cdot 6 = 36$`],
          res:`<span class="no">No</span>: 32 ≠ 36 ✗`}}]
      ]},
      {comp:{q:R`¿Forman proporción $\dfrac{3}{7}$ y $\dfrac{9}{21}$?`, opciones:["Sí","No"], ok:0,
        explic:R`$3 \cdot 21 = 63$ y $7 \cdot 9 = 63$: los productos en cruz son iguales.`,
        pista:R`Multiplica en cruz: $3 \cdot 21$ y $7 \cdot 9$. ¿Dan lo mismo?`}}
    ]},

    { titulo:"Cuarto proporcional: el número que falta", cuerpo:[
      {def:["El <b>cuarto proporcional</b> es el término que falta en una proporción.",
            "<b>Cómo se calcula:</b> multiplico en cruz los dos números que conozco y divido entre el que queda."], etq:"Cuarto proporcional"},
      {ej:{enun:R`Calcula $x$: $\quad \dfrac{x}{8} = \dfrac{5}{2}$`,
        pasos:[R`Multiplico en cruz: $x \cdot 2 = 8 \cdot 5$`,
               R`$2x = 40$`,
               R`Divido entre el que queda: $x = \dfrac{40}{2}$`],
        res:R`$x = 20$`}},
      {estudio:[{nota:[R`<b>Comprueba siempre:</b> $\dfrac{20}{8} = 2,5$ y $\dfrac{5}{2} = 2,5$ ✓`]}]},
      {comp:{q:R`Calcula $x$: $\dfrac{x}{12} = \dfrac{3}{4}$`, sol:9,
        explic:R`$x \cdot 4 = 12 \cdot 3 = 36 \;\Rightarrow\; x = \dfrac{36}{4} = 9$`,
        pista:R`Multiplica en cruz: $x \cdot 4 = 12 \cdot 3$ y después divide entre 4.`}}
    ]},

    { titulo:"Cuarto proporcional con la x abajo", cuerpo:[
      {p:"El método es el mismo, esté donde esté la <i>x</i>."},
      {ej:{enun:R`Calcula $x$: $\quad \dfrac{3}{x} = \dfrac{12}{20}$`,
        pasos:[R`Multiplico en cruz: $3 \cdot 20 = 12 \cdot x$`,
               R`$60 = 12x$`,
               R`$x = \dfrac{60}{12}$`],
        res:R`$x = 5$`}},
      {nota:[R`Comprueba: $\dfrac{3}{5} = 0,6$ y $\dfrac{12}{20} = 0,6$ ✓`]},
      {comp:{q:R`Calcula $x$: $\dfrac{6}{x} = \dfrac{9}{15}$`, sol:10,
        explic:R`$6 \cdot 15 = 9 \cdot x \;\Rightarrow\; 90 = 9x \;\Rightarrow\; x = 10$`,
        pista:R`En cruz: $6 \cdot 15 = 9 \cdot x$.`}}
    ]},

    { titulo:"Problema: la pantalla 16 : 9", cuerpo:[
      {cols2:true, cols:[[{ej:{etq:"✍️ Problema resuelto", enun:"Una pantalla tiene formato 16 : 9 y mide 80 cm de ancho. ¿Cuánto mide de alto?",
        pasos:[R`Escribo las dos razones <b>en el mismo orden</b> (ancho / alto): $\dfrac{16}{9} = \dfrac{80}{x}$`,
               R`Multiplico en cruz: $16 \cdot x = 9 \cdot 80 = 720$`,
               R`$x = \dfrac{720}{16} = 45$`,
               "¿Tiene sentido? El alto tiene que ser menor que el ancho: 45 < 80 ✓"],
        res:"Mide <b>45 cm</b> de alto"}}],
      [{html:`<figure class="dib"><svg viewBox="0 0 220 150" role="img" aria-label="Pantalla de 80 cm de ancho y x cm de alto">
        <rect x="20" y="12" width="160" height="90" rx="6" fill="#eef0ff" stroke="#4338ca" stroke-width="4"/>
        <text x="100" y="64" text-anchor="middle" font-size="22" font-weight="800" fill="#4338ca">16 : 9</text>
        <line x1="20" y1="122" x2="180" y2="122" stroke="#1e1b3a" stroke-width="2"/><text x="100" y="142" text-anchor="middle" font-size="16" font-weight="700" fill="#1e1b3a">ancho = 80 cm</text>
        <line x1="196" y1="12" x2="196" y2="102" stroke="#d97706" stroke-width="3"/><text x="208" y="62" font-size="18" font-weight="800" fill="#d97706">x</text>
      </svg><figcaption>¿Cuánto mide el alto?</figcaption></figure>`}]
    ]}
    ]},

    { titulo:"Problema: mezclar pintura", cuerpo:[
      {ej:{etq:"✍️ Problema resuelto", enun:"Para conseguir un color naranja se mezcla pintura roja y amarilla en la razón 3 : 5. Si tengo 12 litros de pintura roja, ¿cuánta amarilla necesito? ¿Cuánta pintura naranja tendré?",
        pasos:[R`Rojo / amarillo en el mismo orden: $\dfrac{3}{5} = \dfrac{12}{x}$`,
               R`En cruz: $3 \cdot x = 5 \cdot 12 = 60$`,
               R`$x = \dfrac{60}{3} = 20$ litros de amarilla`,
               R`Naranja: $12 + 20 = 32$ litros`],
        res:"20 L de amarilla y 32 L de naranja"}},
      {html:`<figure class="dib casillas"><div class="fila-c"><b>Rojo (3)</b>${'<span class="c r">4 L</span>'.repeat(3)}<em>= 12 L</em></div>
        <div class="fila-c"><b>Amarillo (5)</b>${'<span class="c a">4 L</span>'.repeat(5)}<em>= 20 L</em></div>
        <figcaption>12 L de rojo son 3 partes → cada parte vale 12 : 3 = 4 L</figcaption></figure>`},
    ]},

    { titulo:"Medio proporcional", cuerpo:[
      {def:[R`Cuando los <b>dos medios son iguales</b> (la misma $x$), ese número es el <b>medio proporcional</b>:`,
            {formula:R`\frac{a}{x} = \frac{x}{b} \;\Rightarrow\; x \cdot x = a \cdot b \;\Rightarrow\; x^2 = a \cdot b \;\Rightarrow\; x = \pm\sqrt{a \cdot b}`}], etq:"Medio proporcional"},
      {ej:{enun:"Calcula el medio proporcional de 4 y 9.",
        pasos:[R`$\dfrac{4}{x} = \dfrac{x}{9}$`,
               R`En cruz: $x \cdot x = 4 \cdot 9 \;\Rightarrow\; x^2 = 36$`,
               R`$x = \pm\sqrt{36}$`],
        res:R`$x = 6$ y $x = -6$ (dos soluciones)`}},
      {nota:[R`Hay dos soluciones porque $6 \cdot 6 = 36$ y también $(-6)\cdot(-6) = 36$. Si $x$ es una longitud, un precio… solo vale la positiva.`]},
      {comp:{q:"Calcula el medio proporcional <b>positivo</b> de 2 y 18.", sol:6,
        explic:R`$x^2 = 2 \cdot 18 = 36 \;\Rightarrow\; x = \sqrt{36} = 6$ (y también −6).`,
        pista:R`Plantea $\dfrac{2}{x} = \dfrac{x}{18}$ y multiplica en cruz.`}}
    ]},

    { titulo:"⚠️ Errores típicos con las razones", cuerpo:[
      {aviso:[R`<b>Cambiar el orden.</b> La razón entre chicos y chicas es $\dfrac{\text{chicos}}{\text{chicas}}$, no al revés.`], etq:"⚠️ Error 1"},
      {aviso:["<b>Dividir cantidades en unidades distintas</b> (cm entre m) sin pasarlas antes a la misma unidad."], etq:"⚠️ Error 2"}
    ]},

    { titulo:"⚠️ Errores típicos con las proporciones", cuerpo:[
      {aviso:["<b>Cambiar el orden de una razón a otra.</b> Si en la primera razón el ancho va arriba, en la segunda también."], etq:"⚠️ Error 3"},
      {aviso:[R`<b>En el medio proporcional, olvidar la solución negativa:</b> $x = \pm\ldots$`], etq:"⚠️ Error 4"}
    ]},

    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{cols:[
        [R`<b>Razón:</b> $\dfrac{a}{b}$ → cuánto hay por cada 1, o cuántas veces es una la otra.`,
         R`<b>Proporción:</b> $\dfrac{a}{b} = \dfrac{c}{d}$`],
        [R`<b>Propiedad fundamental:</b> $a \cdot d = b \cdot c$ (en cruz)`,
         R`<b>Cuarto proporcional:</b> en cruz y divido entre el que queda.`,
         R`<b>Medio proporcional:</b> $x^2 = a \cdot b \Rightarrow x = \pm\sqrt{a\cdot b}$`]
      ]}]},
      {estudio:[{comp:{q:"Un paquete de 6 yogures cuesta 2,70 €. ¿Cuánto cuesta cada yogur?", sol:0.45, unidad:"€",
        explic:R`La razón precio / yogures: $\dfrac{2,70}{6} = 0,45$ €. Cada yogur cuesta 0,45 €.`,
        pista:"Divide el precio entre el número de yogures."}},
        {comp:{q:"La razón entre 45 minutos y 2 horas es…", opciones:["45 : 2", "3 : 8", "8 : 3"], ok:1,
        explic:R`Misma unidad: 2 h = 120 min. $\dfrac{45}{120} = \dfrac{3}{8}$.`,
        pista:"Pasa primero las horas a minutos."}}]}
    ]}
  ]
});
})();

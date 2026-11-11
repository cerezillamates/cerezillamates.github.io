/* 2.º ESO · Tema 3 · Apartado 1: Razón y proporción
   Nivel 2.º: desde cero, números sencillos, contextos cercanos. Ejercicios basados en las fichas de la profesora. */
(function(){
const R = String.raw;
TEMA.registrar({
  num: 1,
  titulo: "Razón y proporción",
  videos: [
    {t:"Razones y proporciones", url:"https://www.youtube.com/watch?v=Nm5ruqNN4pk"},
    {t:"Medio y cuarto proporcional", url:"https://www.youtube.com/watch?v=UvlC_O2skyQ"}
  ],

  clase: [
    { nivel:"Aplicación", min:4,
      enun:"Calcula la razón y explica qué significa:<br><b>a)</b> 6 bolígrafos cuestan 4,20 €.<br><b>b)</b> Una bici recorre 45 km en 3 horas.",
      pasos:[R`<b>a)</b> Divido el precio entre los bolígrafos: $\dfrac{4,20}{6} = 0,70$ €`, "Cada bolígrafo cuesta <b>0,70 €</b>.",
             R`<b>b)</b> Divido los km entre las horas: $\dfrac{45}{3} = 15$ km/h`, "Cada hora recorre <b>15 km</b>."],
      res:"a) Cada bolígrafo cuesta <b>0,70 €</b>.<br>b) La bici recorre <b>15 km</b> cada hora." },
    { nivel:"Aplicación", min:4,
      enun:"En tu equipo de baloncesto hay 12 chicos y 16 chicas. Calcula la razón entre chicos y chicas, simplifícala y explica qué significa.",
      pasos:[R`Chicos arriba (se nombran primero): $\dfrac{12}{16}$`, R`Simplifico dividiendo entre 4: $\dfrac{12}{16} = \dfrac{3}{4}$`, "Por cada 3 chicos hay 4 chicas."],
      res:R`La razón es $\dfrac{3}{4}$: hay <b>3 chicos</b> por cada <b>4 chicas</b>.` },
    { nivel:"Práctica", min:5,
      enun:R`¿Forman proporción? Compruébalo multiplicando en cruz.<br><b>a)</b> $\dfrac{3}{5}$ y $\dfrac{9}{15}$ $\qquad$ <b>b)</b> $\dfrac{2}{3}$ y $\dfrac{5}{6}$`,
      pasos:[R`<b>a)</b> $3 \cdot 15 = 45$ y $5 \cdot 9 = 45$ → iguales: <span class="si">Sí</span>`,
             R`<b>b)</b> $2 \cdot 6 = 12$ y $3 \cdot 5 = 15$ → distintos: <span class="no">No</span>`],
      res:"a) <b>Sí</b> forman proporción.<br>b) <b>No</b> forman proporción." },
    { nivel:"Práctica", min:5,
      enun:R`Calcula el número que falta:<br><b>a)</b> $\dfrac{x}{4} = \dfrac{6}{8}$ $\qquad$ <b>b)</b> $\dfrac{x}{9} = \dfrac{8}{3}$`,
      pasos:[R`<b>a)</b> En cruz: $x \cdot 8 = 4 \cdot 6 = 24 \;\Rightarrow\; x = \dfrac{24}{8} = 3$`,
             R`<b>b)</b> En cruz: $x \cdot 3 = 9 \cdot 8 = 72 \;\Rightarrow\; x = \dfrac{72}{3} = 24$`],
      res:R`a) El número que falta es $x = 3$.<br>b) El número que falta es $x = 24$.` },
    { nivel:"Problema", min:6,
      enun:R`<b>a)</b> Rocío tiene 6 € y Luis 18 €. Calcula la razón entre el dinero de Luis y el de Rocío y explica qué significa.<br><b>b)</b> La razón de dos números es $\dfrac{2}{5}$. Si el mayor es 30, ¿cuál es el menor?`,
      pasos:[R`<b>a)</b> Luis arriba: $\dfrac{18}{6} = 3$ → Luis tiene <b>3 veces</b> el dinero de Rocío.`,
             R`<b>b)</b> En $\dfrac{2}{5}$ el menor está arriba: $\dfrac{2}{5} = \dfrac{x}{30}$`,
             R`En cruz: $5 \cdot x = 2 \cdot 30 = 60 \;\Rightarrow\; x = 12$`],
      res:"a) Luis tiene <b>3 veces</b> el dinero de Rocío.<br>b) El menor es <b>12</b>." },
    { nivel:"Problema", min:6,
      enun:"Para hacer un batido se ponen 3 plátanos por cada 4 vasos de leche.<br><b>a)</b> ¿Cuántos plátanos necesitas para 12 vasos de leche?<br><b>b)</b> Si tienes 15 plátanos, ¿cuántos vasos de leche necesitas?",
      pasos:[R`<b>a)</b> Plátanos / vasos en el mismo orden: $\dfrac{3}{4} = \dfrac{x}{12}$ → $4x = 36$ → $x = 9$ plátanos`,
             "Truco: 12 vasos son 3 veces 4 → los plátanos también: 3 · 3 = 9 ✓",
             R`<b>b)</b> $\dfrac{3}{4} = \dfrac{15}{y}$ → $3y = 60$ → $y = 20$ vasos`],
      res:"a) Necesitas <b>9 plátanos</b>.<br>b) Necesitas <b>20 vasos</b> de leche." }
  ],

  casa: [
    { nivel:"Básico",
      enun:"Calcula la razón y explica qué significa:<br><b>a)</b> 5 bocadillos cuestan 12,50 €.<br><b>b)</b> Un autobús recorre 120 km en 2 horas.",
      pasos:[R`<b>a)</b> $\dfrac{12,50}{5} = 2,50$ € → cada bocadillo cuesta 2,50 €`, R`<b>b)</b> $\dfrac{120}{2} = 60$ km/h → cada hora recorre 60 km`],
      res:"a) Cada bocadillo cuesta <b>2,50 €</b>.<br>b) El autobús recorre <b>60 km</b> cada hora." },
    { nivel:"Básico",
      enun:R`Calcula el número que falta:<br><b>a)</b> $\dfrac{x}{12} = \dfrac{3}{9}$ $\qquad$ <b>b)</b> $\dfrac{5}{x} = \dfrac{10}{14}$`,
      pasos:[R`<b>a)</b> $x \cdot 9 = 12 \cdot 3 = 36 \;\Rightarrow\; x = 4$`, R`<b>b)</b> $5 \cdot 14 = 10 \cdot x \;\Rightarrow\; 70 = 10x \;\Rightarrow\; x = 7$`],
      res:R`a) El número que falta es $x = 4$.<br>b) El número que falta es $x = 7$.` },
    { nivel:"Consolidación",
      enun:R`¿Forman proporción $\dfrac{4}{10}$ y $\dfrac{6}{15}$? Si la forman, ¿cuál es la constante de proporcionalidad?`,
      pasos:[R`En cruz: $4 \cdot 15 = 60$ y $10 \cdot 6 = 60$ → <span class="si">sí</span>`, R`Constante: el valor de cada razón: $4 : 10 = 0,4$ y $6 : 15 = 0,4$`],
      res:"<b>Sí</b> forman proporción y la constante es <b>0,4</b>." },
    { nivel:"Consolidación",
      enun:R`<b>a)</b> Una varilla mide 80 cm y otra 2 m. ¿Cuántas veces es más larga la segunda?<br><b>b)</b> La razón de dos números es $\dfrac{3}{4}$. Si el mayor es 28, ¿cuál es el menor?`,
      pasos:[R`<b>a)</b> Misma unidad: 2 m = 200 cm → $\dfrac{200}{80} = 2,5$ veces`, R`<b>b)</b> $\dfrac{3}{4} = \dfrac{x}{28} \;\Rightarrow\; 4x = 84 \;\Rightarrow\; x = 21$`],
      res:"a) La segunda varilla es <b>2,5 veces</b> más larga.<br>b) El menor es <b>21</b>." },
    { nivel:"Problema",
      enun:"Una foto de 9 cm de ancho y 12 cm de alto se amplía sin deformarla. Si en la ampliación el ancho mide 15 cm, ¿cuánto mide el alto?",
      pasos:[R`Mismo orden (ancho / alto): $\dfrac{9}{12} = \dfrac{15}{x}$`, R`En cruz: $9x = 12 \cdot 15 = 180 \;\Rightarrow\; x = 20$`],
      res:"En la ampliación, el alto mide <b>20 cm</b>." },
    { nivel:"Problema",
      enun:R`Calcula el medio proporcional: $\dfrac{2,5}{x} = \dfrac{x}{10}$`,
      pasos:[R`La $x$ está dos veces: $x \cdot x = 2,5 \cdot 10 = 25$`, R`¿Qué número por sí mismo da 25? $x = \pm 5$`],
      res:R`El medio proporcional es $x = 5$ (también vale $x = -5$).` },
    { nivel:"Para pensar",
      enun:"Dos números suman 24 y están en la razón 3 : 5. ¿Cuáles son?",
      pasos:["Razón 3 : 5 → por cada 3 partes del primero hay 5 del segundo: 8 partes en total.", "Cada parte: 24 : 8 = 3", "Primero: 3 · 3 = 9. Segundo: 5 · 3 = 15 (9 + 15 = 24 ✓)"],
      res:"Los números son <b>9</b> y <b>15</b>." },
    { nivel:"Para pensar",
      enun:"En una clase, la razón entre chicos y chicas es 2 : 3. Si hay 15 chicas, ¿cuántos alumnos hay en total?",
      pasos:[R`$\dfrac{2}{3} = \dfrac{x}{15} \;\Rightarrow\; 3x = 30 \;\Rightarrow\; x = 10$ chicos`, "Total: 10 + 15 = 25 alumnos"],
      res:"En la clase hay <b>25 alumnos</b>." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">¿Qué quiere decir «por cada 3 chicos hay 4 chicas»?</p>`}
    ]},

    { titulo:"¿Qué es una razón?", cuerpo:[
      {def:[R`Una <b>razón</b> es la <b>división</b> entre dos cantidades: $\dfrac{a}{b}$. También se escribe $a : b$.`, "Nos dice <b>cuánto hay de una por cada 1 de la otra</b>."], etq:"Razón"},
      {ej:{etq:"🖊 En la papelería", enun:"6 bolígrafos cuestan 3 €. ¿Cuánto cuesta cada uno?",
        pasos:[R`Divido el precio entre los bolígrafos: $\dfrac{3}{6}$`, R`$3 : 6 = 0,50$`], res:"Cada bolígrafo cuesta <b>0,50 €</b>."}}
    ]},

    { titulo:"El número de una razón tiene significado", cuerpo:[
      {cols:[
        [{ej:{etq:"🚲 Con unidades", enun:"Una bici recorre 30 km en 2 horas.", pasos:[R`$\dfrac{30\ \text{km}}{2\ \text{h}} = 15$ km/h`], res:"La bici recorre <b>15 km</b> cada hora."}}],
        [{ej:{etq:"🏊 Sin unidades", enun:"Una piscina olímpica mide 50 m y la del pueblo 25 m.", pasos:[R`$\dfrac{50}{25} = 2$`], res:"La piscina olímpica es <b>2 veces</b> más larga que la del pueblo."}}]
      ]},
      {nota:["Si las cantidades son de <b>cosas distintas</b> (€ y bolígrafos, km y horas), la razón lleva unidades. Si son de <b>lo mismo</b> (dos longitudes), dice <b>cuántas veces</b> es una la otra."]}
    ]},

    { titulo:"Regla 1: lo que se nombra primero va arriba", cuerpo:[
      {prop:["<b>1. Lo que se nombra primero va arriba.</b>"], etq:"Regla 1"},
      {ej:{enun:"En un equipo hay 12 chicos y 16 chicas. Razón entre chicos y chicas:",
        pasos:[R`$\dfrac{12}{16} = \dfrac{3}{4}$ (simplifico entre 4)`], res:"Por cada <b>3 chicos</b> hay <b>4 chicas</b>."}}
    ]},

    { titulo:"Regla 2: la misma unidad", cuerpo:[
      {prop:["<b>2. Si son de lo mismo, en la misma unidad.</b>"], etq:"Regla 2"},
      {ej:{enun:"Una varilla mide 80 cm y otra 2 m. ¿Cuántas veces es más larga la segunda?",
        pasos:[R`2 m = 200 cm → $\dfrac{200}{80} = 2,5$`], res:"La segunda varilla es <b>2,5 veces</b> más larga."}},
      {aviso:[R`Si no pasas a cm: $\dfrac{2}{80} = 0,025$, ¡como si la varilla de 2 m fuera más corta!`]}
    ]},

    { titulo:"¿Qué es una proporción?", cuerpo:[
      {def:[R`Una <b>proporción</b> es una <b>igualdad entre dos razones</b>:`,
            {formula:R`\frac{\color{#be123c}{a}}{\color{#0369a1}{b}} = \frac{\color{#0369a1}{c}}{\color{#be123c}{d}}`},
            R`<span class="ext">a</span> y <span class="ext">d</span> son los <span class="ext">extremos</span>; <span class="med">b</span> y <span class="med">c</span> son los <span class="med">medios</span>.`], etq:"Proporción"},
      {ej:{etq:"🍌 El batido", enun:"Para un batido se ponen 3 plátanos por cada 4 vasos de leche. Para el doble de batido: 6 plátanos y 8 vasos.",
        pasos:[R`$\dfrac{3}{4} = \dfrac{6}{8}$ → las dos valen $0,75$`], res:"Las dos razones valen lo mismo: <b>es una proporción</b> ✓"}}
    ]},

    { titulo:"¿Forman proporción? Multiplica en cruz", cuerpo:[
      {prop:[{formula:R`\frac{a}{b} = \frac{c}{d} \quad\Longleftrightarrow\quad a \cdot d = b \cdot c`}, "El producto de los <b>extremos</b> es igual al producto de los <b>medios</b>."], etq:"Propiedad fundamental"},
      {cols:[
        [{ej:{etq:"✍️ ¿Forman proporción?", enun:R`$\dfrac{3}{5}$ y $\dfrac{9}{15}$`, pasos:[R`$3 \cdot 15 = 45$`, R`$5 \cdot 9 = 45$`], res:"<span class=\"si\">Sí</span> forman proporción ✓"}}],
        [{ej:{etq:"✍️ ¿Forman proporción?", enun:R`$\dfrac{2}{3}$ y $\dfrac{5}{6}$`, pasos:[R`$2 \cdot 6 = 12$`, R`$3 \cdot 5 = 15$`], res:"<span class=\"no\">No</span> forman proporción ✗"}}]
      ]},
      {comp:{q:R`¿Forman proporción $\dfrac{2}{3}$ y $\dfrac{4}{6}$?`, opciones:["Sí","No"], ok:0, explic:R`$2 \cdot 6 = 12$ y $3 \cdot 4 = 12$.`, pista:"Multiplica en cruz y compara."}}
    ]},

    { titulo:"El número que falta (cuarto proporcional)", cuerpo:[
      {def:["Multiplico en cruz los dos números que conozco y <b>divido entre el que queda</b>."], etq:"Cuarto proporcional"},
      {ej:{enun:R`Calcula $x$: $\quad \dfrac{x}{4} = \dfrac{6}{8}$`,
        pasos:[R`En cruz: $x \cdot 8 = 4 \cdot 6$`, R`$8x = 24$`, R`$x = \dfrac{24}{8} = 3$`], res:R`El número que falta es $x = 3$.`}},
      {nota:[R`Comprueba: $\dfrac{3}{4} = 0,75$ y $\dfrac{6}{8} = 0,75$ ✓`]},
      {comp:{q:R`Calcula $x$: $\dfrac{x}{6} = \dfrac{10}{4}$`, sol:15, explic:R`$4x = 60 \Rightarrow x = 15$`, pista:"En cruz: x · 4 = 6 · 10."}}
    ]},

    { titulo:"Problema: el batido", cuerpo:[
      {ej:{etq:"✍️ Problema resuelto", enun:"Para un batido se ponen 3 plátanos por cada 4 vasos de leche. ¿Cuántos plátanos necesitas para 12 vasos?",
        pasos:[R`Mismo orden (plátanos / vasos): $\dfrac{3}{4} = \dfrac{x}{12}$`, R`En cruz: $4 \cdot x = 3 \cdot 12 = 36$`, R`$x = \dfrac{36}{4} = 9$`, "¿Tiene sentido? Hay más vasos, así que hacen falta más plátanos ✓"],
        res:"Para 12 vasos necesitas <b>9 plátanos</b>."}}
    ]},

    { titulo:"Medio proporcional", cuerpo:[
      {def:[R`Cuando los <b>dos medios son iguales</b> (la misma $x$):`, {formula:R`\frac{a}{x} = \frac{x}{b} \;\Rightarrow\; x \cdot x = a \cdot b`}], etq:"Medio proporcional"},
      {ej:{enun:"Calcula el medio proporcional de 4 y 9.",
        pasos:[R`$\dfrac{4}{x} = \dfrac{x}{9}$`, R`En cruz: $x \cdot x = 4 \cdot 9 = 36$`, R`¿Qué número por sí mismo da 36? $6 \cdot 6 = 36$ y también $(-6) \cdot (-6) = 36$`], res:R`El medio proporcional de 4 y 9 es $x = 6$ (también vale $x = -6$).`}},
      {estudio:[{nota:[R`$6 \cdot 6 = 36$ y $(-6) \cdot (-6) = 36$. Si $x$ es una medida, solo vale la positiva.`]}]}
    ]},

    { titulo:"🪄 Trucos para ir más rápido", cuerpo:[
      {truco:[R`<b>Busca las «veces».</b> En $\dfrac{3}{4} = \dfrac{x}{12}$: 12 es 3 veces 4 → la $x$ es 3 veces 3 = <b>9</b>.`], etq:"🪄 Truco 1"},
      {truco:["<b>Simplifica la razón</b> para entenderla mejor: 12 chicos y 16 chicas → divide entre 4 → 3 chicos por cada 4 chicas."], etq:"🪄 Truco 2"},
      {truco:["<b>¿Forman proporción? Con la calculadora:</b> divide las dos razones. Si sale el mismo número, sí."], etq:"🪄 Truco 3"}
    ]},

    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:["<b>Cambiar el orden:</b> la razón entre chicos y chicas es chicos / chicas, no al revés."], etq:"⚠️ Error 1"},
      {aviso:["<b>Dividir cantidades en unidades distintas</b> (cm entre m) sin pasarlas antes a la misma unidad."], etq:"⚠️ Error 2"},
      {aviso:[R`<b>En el medio proporcional, olvidar la solución negativa:</b> $x = \pm\ldots$`], etq:"⚠️ Error 3"}
    ]},

    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{lista:[
        R`<b>Razón:</b> una división $\dfrac{a}{b}$ → cuánto hay por cada 1, o cuántas veces es una la otra.`,
        R`<b>Proporción:</b> dos razones iguales $\dfrac{a}{b} = \dfrac{c}{d}$ → en cruz: $a \cdot d = b \cdot c$`,
        "<b>Número que falta:</b> en cruz y divido entre el que queda.",
        R`<b>Medio proporcional:</b> $x \cdot x = a \cdot b$ → $x = \pm\ldots$`
      ]}]},
      {estudio:[
        {comp:{q:"4 kg de tomates cuestan 12 €. ¿Cuánto cuesta 1 kg?", sol:3, unidad:"€", explic:"12 : 4 = 3 € el kilo.", pista:"Divide el precio entre los kilos."}},
        {comp:{q:R`Calcula el medio proporcional positivo: $\dfrac{4}{x} = \dfrac{x}{25}$`, sol:10, explic:R`$x \cdot x = 100 \Rightarrow x = 10$`, pista:"x · x = 4 · 25."}}
      ]}
    ]}
  ]
});
})();

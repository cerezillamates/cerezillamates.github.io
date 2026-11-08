/* 2.º Bach CCSS · Programación lineal · Apartado 1: Inecuaciones lineales en el plano
   Según los apuntes de la profesora: la recta con su tabla de valores, un punto de prueba y el semiplano solución.
   Ejemplos de sus apuntes: 2x − 3y ≤ 6; 3y − 2x ≤ 1; x + y ≥ 0; rectas y = k, x = k; y ≤ 3, y ≥ −1, x ≥ 0, x ≤ 4. */
(function(){
const R = String.raw, F = PL.fig, P = PL.pasos, T = PL.tabla;
const duo = (a, b) => `<div class="pl-duo"><div>${a}</div><div>${b}</div></div>`;
const res = (o, t) => `<div class="res paso" data-o="${o}">${t}</div>`;
const mini = (o, txt, fig) => `<div class="paso" data-o="${o}">${fig}<p style="text-align:center;margin:.2em 0 0;font-weight:800">${txt}</p></div>`;

TEMA.registrar({
  num: 1,
  titulo: "Inecuaciones lineales en el plano",
  videos: [
    {t:"Vídeos en YouTube: Inecuaciones lineales con dos incógnitas (semiplanos)", url:"https://www.youtube.com/results?search_query=inecuaciones+lineales+con+dos+incognitas+semiplano"}
  ],

  laminas: [
    { portada:true, cuerpo:[
      {nota:[{lista:[
        "Qué es una <b>inecuación lineal con dos incógnitas</b> y por qué su solución es un <b>semiplano</b>.",
        "Resolverla en 3 pasos: <b>recta</b> con su tabla de valores, <b>punto de prueba</b> y <b>semiplano</b>.",
        "Las rectas <b>horizontales</b> ($y = k$) y <b>verticales</b> ($x = k$).",
        "Saber si un <b>punto</b> es solución."
      ]}], etq:"🎯 En este apartado vas a aprender"}
    ]},

    { titulo:"¿Para qué sirve la programación lineal?", cuerpo:[
      "La programación lineal nació para resolver problemas de <b>logística</b> y militares y hoy se usa en la <b>industria</b> y la <b>economía</b>: dietas, planes de producción, transporte, almacenes, turnos de personal…",
      {ej:{etq:"🧵 Un problema de la PAU (Andalucía, modelo 2026)", enun:"Un taller tiene como máximo <b>60 horas</b> a la semana. Cada pañuelo necesita 2 h y da 4 € de beneficio; cada corbata, 3 h y 6 €. ¿Cuántos pañuelos y corbatas debe hacer para ganar lo máximo?"}},
      {nota:["Si hace $x$ pañuelos e $y$ corbatas, las horas que usa no pueden pasar de 60: $\;2x + 3y \le 60$. <br>Eso es una <b>inecuación con dos incógnitas</b>: hoy aprendemos a dibujar sus soluciones."]}
    ]},

    { titulo:"Inecuación lineal con dos incógnitas", cuerpo:[
      {html: duo(
        `<div class="b-def"><span class="etq">Definición</span><p>Una <b>inecuación lineal con dos incógnitas</b> es una desigualdad del tipo</p>${TEMA.tx("$$ax + by \\le c \\qquad \\text{o} \\qquad ax + by \\ge c$$")}<p>Su <b>solución</b> es un <b>semiplano</b>: una de las dos partes en que la recta $ax + by = c$ divide el plano.</p></div>` +
        P([[1,"La recta $x + y = 4$ divide el plano en <b>dos semiplanos</b>."],
           [2,"$(1, 1)$: $\\;1 + 1 = 2 \\le 4$ ✓ &nbsp;$(4, 3)$: $\\;4 + 3 = 7 \\le 4$ ✗"],
           [3,"Todos los puntos del lado de $(1, 1)$ cumplen $x + y \\le 4$: esa es la solución."]]),
        F({x:[-1,6], y:[-1,6], alt:"Recta x + y = 4 y el semiplano x + y ≤ 4",
           rectas:[{a:1,b:1,c:4,s:"<=",nom:"r",et:"x + y = 4",o:1,semi:3,flecha:false,pos:.1,dx:10,dy:-6}],
           pts:[{x:1,y:1,t:"(1, 1) ✓",o:2,col:"#15803d",lado:"sw"},{x:4,y:3,t:"(4, 3) ✗",o:2,col:"#c0392b",lado:"ne"}]})
      )}
    ]},

    { titulo:"Cómo se resuelve: tres pasos", cuerpo:[
      {prop:[{lista:[
        "<b>1. La recta.</b> Cambio la desigualdad por «=» y dibujo la recta $ax + by = c$ con una <b>tabla de valores</b> (dos puntos bastan).",
        "<b>2. El punto de prueba.</b> Elijo un punto que <b>no esté en la recta</b> (si puedo, el origen $O(0, 0)$) y lo sustituyo en la <b>inecuación</b>.",
        "<b>3. El semiplano.</b> Si el punto <b>cumple</b> la desigualdad, la solución es el semiplano donde está. Si <b>no</b> la cumple, es el semiplano <b>contrario</b>."
      ]}], etq:"Método"},
      {nota:["Con $\\le$ o $\\ge$ los puntos de la recta también son solución: la recta (el <b>borde</b>) se dibuja <b>continua</b>."]}
    ]},

    { titulo:"Ejemplo 1: $\\;2x - 3y \\le 6$", cuerpo:[
      {html: duo(
        P([[1,"<b>Recta</b> $2x - 3y = 6$: <br>$x = 0 \\Rightarrow -3y = 6 \\Rightarrow y = -2$ <br>$y = 0 \\Rightarrow 2x = 6 \\Rightarrow x = 3$" + T("", "2x − 3y = 6", [[0,-2],[3,0]], "r1")],
           [2,"Uno los dos puntos: ya tengo la recta."],
           [3,"<b>Prueba</b> con $O(0, 0)$: $\\;2 \\cdot 0 - 3 \\cdot 0 = 0 \\le 6$ &nbsp;✓"],
           [4,"Se cumple → la solución es el semiplano <b>que contiene al origen</b>."]]) + res(5,"Solución: el semiplano <b>por encima</b> de la recta, con la recta incluida."),
        F({x:[-2,6], y:[-4,4], alt:"2x − 3y ≤ 6",
           rectas:[{a:2,b:-3,c:6,s:"<=",nom:"r",et:"2x − 3y = 6",o:2,semi:4,fo:4,pos:.92,dx:-8,dy:-12,ta:"end"}],
           pts:[{x:0,y:-2,t:"(0, −2)",o:1,lado:"w"},{x:3,y:0,t:"(3, 0)",o:1,lado:"se"},{x:0,y:0,t:"O",o:3,prueba:true,lado:"nw"}]})
      )}
    ]},

    { titulo:"Ejemplo 2: $\\;3y - 2x \\le 1$", cuerpo:[
      {html: duo(
        P([[1,"<b>Recta</b> $3y - 2x = 1$. Con $x = 0$ sale $y = \\tfrac13$: mejor busco valores que den números enteros. <br>$x = 1 \\Rightarrow 3y = 3 \\Rightarrow y = 1$ <br>$x = -2 \\Rightarrow 3y = -3 \\Rightarrow y = -1$" + T("", "3y − 2x = 1", [[1,1],[-2,-1]], "r1")],
           [2,"Dibujo la recta por $(1, 1)$ y $(-2, -1)$."],
           [3,"<b>Prueba</b> con $O(0, 0)$: $\\;3 \\cdot 0 - 2 \\cdot 0 = 0 \\le 1$ &nbsp;✓"],
           [4,"La solución es el semiplano <b>del origen</b>: por debajo de la recta."]]),
        F({x:[-4,4], y:[-3,4], alt:"3y − 2x ≤ 1",
           rectas:[{a:-2,b:3,c:1,s:"<=",nom:"r",et:"3y − 2x = 1",o:2,semi:4,fo:4,pos:.95,dx:-6,dy:-12,ta:"end"}],
           pts:[{x:1,y:1,t:"(1, 1)",o:1,lado:"se"},{x:-2,y:-1,t:"(−2, −1)",o:1,lado:"nw"},{x:0,y:0,t:"O",o:3,prueba:true,lado:"se"}]})
      )},
      {truco:["Para la tabla de valores no hace falta usar $x = 0$ e $y = 0$: elige valores que den <b>números enteros</b> y que quepan en el dibujo."]}
    ]},

    { titulo:"Ejemplo 3: $\\;x + y \\ge 0$", cuerpo:[
      {html: duo(
        P([[1,"<b>Recta</b> $x + y = 0$: $\\;(0, 0)$ y $(2, -2)$." + T("", "x + y = 0", [[0,0],[2,-2]], "r1")],
           [2,"⚠️ La recta <b>pasa por el origen</b>: no puedo usar $O$ como punto de prueba."],
           [3,"<b>Prueba</b> con $(2, 1)$: $\\;2 + 1 = 3 \\ge 0$ &nbsp;✓"],
           [4,"La solución es el semiplano donde está $(2, 1)$: por encima de la recta."]]),
        F({x:[-3,3], y:[-3,3], alt:"x + y ≥ 0",
           rectas:[{a:1,b:1,c:0,s:">=",nom:"r",et:"x + y = 0",o:1,semi:4,fo:4,pos:.08,dx:10,dy:0}],
           pts:[{x:0,y:0,t:"(0, 0)",o:1,lado:"sw"},{x:2,y:-2,t:"(2, −2)",o:1,lado:"e"},{x:2,y:1,t:"(2, 1)",o:3,prueba:true,lado:"n"}]})
      )},
      {aviso:["Si la recta pasa por $(0, 0)$, el punto de prueba tiene que ser <b>otro</b>: $(1, 0)$, $(0, 1)$, $(2, 1)$…"]}
    ]},

    { titulo:"Rectas horizontales y verticales", cuerpo:[
      {html: duo(
        `<div class="b-prop"><span class="etq">Recuerda</span><p>$y = k$ es una recta <b>horizontal</b>: todos sus puntos tienen altura $k$.</p><p>$x = k$ es una recta <b>vertical</b>: todos sus puntos están a la distancia $k$ del eje $Y$.</p></div>` +
        P([[1,"$y = 1$: horizontal a altura 1."],[2,"$y = -3$: horizontal a altura −3."],[3,"$x = -1$: vertical."],[4,"$x = 2$: vertical."],[5,"Los ejes también son rectas: el eje $X$ es $y = 0$ y el eje $Y$ es $x = 0$."]]),
        F({x:[-4,4], y:[-4,3], alt:"Rectas y = 1, y = −3, x = −1 y x = 2",
           rectas:[{a:0,b:1,c:1,nom:"y = 1",o:1,pos:.9,dy:-8,ta:"end",dx:0},{a:0,b:1,c:-3,nom:"y = −3",o:2,pos:.9,dy:-8,ta:"end",dx:0},
                   {a:1,b:0,c:-1,nom:"x = −1",o:3,pos:.94,dx:-8,ta:"end"},{a:1,b:0,c:2,nom:"x = 2",o:4,pos:.94,dx:8}]})
      )}
    ]},

    { titulo:"Ejemplo: $\\;y \\le 3,\\;\\; y \\ge -1,\\;\\; x \\ge 0,\\;\\; x \\le 4$", cuerpo:[
      "Resuelve gráficamente cada inecuación (cada una por separado).",
      {html:`<div class="cols" style="grid-template-columns:repeat(4,minmax(0,1fr))">
        ${mini(1,"y ≤ 3: por debajo", F({x:[-2,5],y:[-3,5],W:300,H:300,ancho:9,rectas:[{a:0,b:1,c:3,s:"<=",semi:true,col:"r1"}]}))}
        ${mini(2,"y ≥ −1: por encima", F({x:[-2,5],y:[-3,5],W:300,H:300,ancho:9,rectas:[{a:0,b:1,c:-1,s:">=",semi:true,col:"r2"}]}))}
        ${mini(3,"x ≥ 0: a la derecha", F({x:[-2,5],y:[-3,5],W:300,H:300,ancho:9,rectas:[{a:1,b:0,c:0,s:">=",semi:true,col:"r3"}]}))}
        ${mini(4,"x ≤ 4: a la izquierda", F({x:[-2,5],y:[-3,5],W:300,H:300,ancho:9,rectas:[{a:1,b:0,c:4,s:"<=",semi:true,col:"r4"}]}))}
      </div>`},
      {truco:["$y \\le k$ → <b>abajo</b> · $y \\ge k$ → <b>arriba</b> · $x \\ge k$ → <b>derecha</b> · $x \\le k$ → <b>izquierda</b>."]}
    ]},

    { titulo:"Truco: despejar la $y$", cuerpo:[
      {truco:["Si despejas la $y$: &nbsp;$y \\le \\dots$ → semiplano de <b>abajo</b>; &nbsp;$y \\ge \\dots$ → semiplano de <b>arriba</b>."]},
      {aviso:["Al <b>multiplicar o dividir por un número negativo</b>, la desigualdad <b>cambia de sentido</b>."]},
      {ej:{enun:"¿Qué semiplano es la solución de $\\;-2x - 4y \\le 8$?",
        pasos:[R`Paso $-2x$ al otro lado: $\;-4y \le 8 + 2x$`,
               R`Divido entre $-4$ (negativo → cambia el sentido): $\;y \ge -2 - \dfrac{x}{2}$`,
               "Queda $y \\ge \\dots$ → semiplano de <b>arriba</b>.",
               R`Lo compruebo con $O(0, 0)$: $\;-2 \cdot 0 - 4 \cdot 0 = 0 \le 8$ ✓, y $O$ está por encima de la recta (que corta al eje $Y$ en $-2$).`],
        res:"Solución: el semiplano <b>por encima</b> de la recta $x + 2y = -4$"}}
    ]},

    { titulo:"¿Un punto es solución?", cuerpo:[
      {prop:["Para saber si un punto es solución, lo <b>sustituyo</b> en la inecuación: si la cumple, sí; si no, no. Si da la igualdad, está en el <b>borde</b> (y también es solución)."], etq:"Cómo se hace"},
      {ej:{enun:"¿Son solución de $\\;3x - 2y \\le 6\\;$ los puntos $A(1, 2)$, $B(4, -1)$ y $C(2, 0)$?",
        pasos:[R`$A(1, 2)$: $\;3 \cdot 1 - 2 \cdot 2 = -1 \le 6$ ✓ → <b>sí</b>`,
               R`$B(4, -1)$: $\;3 \cdot 4 - 2 \cdot (-1) = 14 \le 6$ ✗ → <b>no</b>`,
               R`$C(2, 0)$: $\;3 \cdot 2 - 2 \cdot 0 = 6 \le 6$ ✓ → <b>sí</b>: está en la recta`],
        res:"A y C son solución; B no"}},
      {nota:["Esta pregunta sale mucho en la PAU: «¿Es posible fabricar 40 unidades de A y 20 de B?» → se sustituye el punto $(40, 20)$ en <b>todas</b> las restricciones."]}
    ]},

    { titulo:"Resumen", cuerpo:[
      {resumen:[{lista:[
        "La solución de $ax + by \\le c$ (o $\\ge$) es un <b>semiplano</b> con su borde.",
        "<b>1.</b> Recta $ax + by = c$ con su tabla de valores. <b>2.</b> Punto de prueba (el origen si la recta no pasa por él). <b>3.</b> Si lo cumple, su semiplano; si no, el contrario.",
        "$y = k$ horizontal; $x = k$ vertical. $\\;y \\le$ abajo, $\\;y \\ge$ arriba, $\\;x \\ge$ derecha, $\\;x \\le$ izquierda.",
        "Si multiplico o divido por un negativo, la desigualdad cambia de sentido."
      ]}]},
      {comp:{q:"¿Es $(3, 1)$ solución de $2x + 5y \\le 10$?", opciones:["Sí","No"], ok:1, explic:"$2 \\cdot 3 + 5 \\cdot 1 = 11 > 10$: no la cumple."}},
      {comp:{q:"En $x - 2y \\ge 4$, ¿el origen está en la solución?", opciones:["Sí","No"], ok:1, explic:"$0 - 0 = 0 \\ge 4$ es falso: el origen no está; la solución es el semiplano contrario."}}
    ]}
  ],

  clase: [
    { nivel:"Aplicación", min:5,
      enun:"Representa la solución de la inecuación $\\;x + y \\le 5$.",
      pasos:["Recta $x + y = 5$: puntos $(0, 5)$ y $(5, 0)$.",
             R`Prueba con $O$: $\;0 + 0 = 0 \le 5$ ✓ → semiplano del origen.`,
             F({x:[-1,7],y:[-1,7],W:420,H:360,ancho:15,rectas:[{a:1,b:1,c:5,s:"<=",semi:true,nom:"x + y = 5",pos:.15,dx:10}],pts:[{x:0,y:5,t:"(0, 5)",lado:"e"},{x:5,y:0,t:"(5, 0)",lado:"n"},{x:0,y:0,prueba:true}]})],
      res:"El semiplano <b>por debajo</b> de la recta (con el origen)" },
    { nivel:"Aplicación", min:5,
      enun:"Representa la solución de $\\;2x + y \\ge 4$.",
      pasos:["Recta $2x + y = 4$: puntos $(0, 4)$ y $(2, 0)$.",
             R`Prueba con $O$: $\;0 \ge 4$ ✗ → <b>no</b> se cumple: semiplano <b>contrario</b> al origen.`,
             F({x:[-1,5],y:[-1,6],W:420,H:360,ancho:15,rectas:[{a:2,b:1,c:4,s:">=",semi:true,nom:"2x + y = 4",pos:.12,dx:10}],pts:[{x:0,y:4,t:"(0, 4)",lado:"w"},{x:2,y:0,t:"(2, 0)",lado:"se"},{x:0,y:0,prueba:true}]})],
      res:"El semiplano <b>por encima</b> de la recta (sin el origen)" },
    { nivel:"Práctica", min:5,
      enun:"Representa la solución de $\\;y \\le 2x$.",
      pasos:["Recta $y = 2x$: puntos $(0, 0)$ y $(2, 4)$. ¡Pasa por el origen!",
             R`Prueba con $(1, 0)$: $\;0 \le 2 \cdot 1 = 2$ ✓ → semiplano donde está $(1, 0)$.`,
             F({x:[-3,3],y:[-3,5],W:420,H:380,ancho:15,rectas:[{a:-2,b:1,c:0,s:"<=",semi:true,nom:"y = 2x",pos:.92,dx:-10,ta:"end"}],pts:[{x:0,y:0,t:"(0, 0)",lado:"nw"},{x:2,y:4,t:"(2, 4)",lado:"w"},{x:1,y:0,prueba:true,t:"(1, 0)",lado:"se"}]})],
      res:"El semiplano a la <b>derecha</b> (por debajo) de la recta $y = 2x$" },
    { nivel:"Práctica", min:4,
      enun:"Representa por separado: <b>a)</b> $x \\ge -2$ &nbsp; <b>b)</b> $y \\le 3$ &nbsp; <b>c)</b> $y \\ge 0$",
      pasos:["<b>a)</b> Recta vertical $x = -2$; $x \\ge$ → a la <b>derecha</b>.",
             "<b>b)</b> Recta horizontal $y = 3$; $y \\le$ → por <b>debajo</b>.",
             "<b>c)</b> $y = 0$ es el eje $X$; $y \\ge 0$ → el semiplano de <b>arriba</b>.",
             `<div class="cols" style="grid-template-columns:repeat(3,minmax(0,1fr))">${F({x:[-4,4],y:[-2,5],W:300,H:280,ancho:9,rectas:[{a:1,b:0,c:-2,s:">=",semi:true,col:"r1"}],pie:"a)"})}${F({x:[-4,4],y:[-2,5],W:300,H:280,ancho:9,rectas:[{a:0,b:1,c:3,s:"<=",semi:true,col:"r2"}],pie:"b)"})}${F({x:[-4,4],y:[-2,5],W:300,H:280,ancho:9,rectas:[{a:0,b:1,c:0,s:">=",semi:true,col:"r3"}],pie:"c)"})}</div>`],
      res:"a) derecha de $x = -2$ · b) debajo de $y = 3$ · c) encima del eje $X$" },
    { nivel:"Problema", min:5,
      enun:"¿Cuáles de los puntos $A(1, 2)$, $B(4, -1)$, $C(-2, 3)$ y $D(2, 0)$ son solución de $\\;3x - 2y \\le 6$?",
      pasos:[R`$A$: $\;3 - 4 = -1 \le 6$ ✓`, R`$B$: $\;12 + 2 = 14 \le 6$ ✗`, R`$C$: $\;-6 - 6 = -12 \le 6$ ✓`, R`$D$: $\;6 - 0 = 6 \le 6$ ✓ (está en la recta)`],
      res:"Son solución A, C y D; B no" },
    { nivel:"Reto", min:6,
      enun:"La solución de una inecuación es el semiplano que está <b>por encima</b> de la recta que pasa por $(0, 2)$ y $(4, 0)$, incluida la recta. ¿Cuál es la inecuación?",
      pasos:[R`Recta por $(0, 2)$ y $(4, 0)$: pendiente $m = \dfrac{0 - 2}{4 - 0} = -\dfrac12$, $\;y = 2 - \dfrac{x}{2}$`,
             R`Multiplico por 2: $\;2y = 4 - x \;\Rightarrow\; x + 2y = 4$`,
             R`El origen está <b>por debajo</b> y $0 + 0 = 0 < 4$: el semiplano de arriba cumple $x + 2y \ge 4$.`],
      res:"$x + 2y \\ge 4$" }
  ],

  casa: [
    { nivel:"Básico", enun:"Representa la solución de $\\;4x + y \\le 8$.",
      pasos:["Recta $4x + y = 8$: $(0, 8)$ y $(2, 0)$.", R`Prueba $O$: $0 \le 8$ ✓ → semiplano del origen.`,
             F({x:[-1,4],y:[-1,9],W:400,H:380,ancho:14,rectas:[{a:4,b:1,c:8,s:"<=",semi:true,nom:"4x + y = 8",pos:.15,dx:10}],pts:[{x:0,y:8,t:"(0, 8)",lado:"e"},{x:2,y:0,t:"(2, 0)",lado:"ne"},{x:0,y:0,prueba:true}]})],
      res:"Semiplano por debajo de la recta" },
    { nivel:"Básico", enun:"Representa la solución de $\\;x - 2y \\ge 4$.",
      pasos:["Recta $x - 2y = 4$: $(0, -2)$ y $(4, 0)$.", R`Prueba $O$: $0 \ge 4$ ✗ → semiplano contrario al origen.`,
             F({x:[-1,7],y:[-4,3],W:420,H:360,ancho:14,rectas:[{a:1,b:-2,c:4,s:">=",semi:true,nom:"x − 2y = 4",pos:.9,dx:-8,ta:"end"}],pts:[{x:0,y:-2,t:"(0, −2)",lado:"w"},{x:4,y:0,t:"(4, 0)",lado:"nw"},{x:0,y:0,prueba:true}]})],
      res:"Semiplano por debajo de la recta (sin el origen)" },
    { nivel:"Consolidación", enun:"Representa la solución de $\\;y \\ge 3x$.",
      pasos:["Recta $y = 3x$: $(0, 0)$ y $(1, 3)$. Pasa por el origen.", R`Prueba con $(0, 1)$: $1 \ge 0$ ✓ → semiplano de $(0, 1)$.`,
             F({x:[-3,3],y:[-3,5],W:400,H:380,ancho:14,rectas:[{a:-3,b:1,c:0,s:">=",semi:true,nom:"y = 3x",pos:.85,dx:-10,ta:"end"}],pts:[{x:1,y:3,t:"(1, 3)",lado:"e"},{x:0,y:1,prueba:true,t:"(0, 1)",lado:"w"}]})],
      res:"Semiplano por encima (a la izquierda) de $y = 3x$" },
    { nivel:"Consolidación", enun:"Representa por separado $\\;x \\le 3\\;$ y $\\;y \\ge -2$.",
      pasos:["$x = 3$ vertical; $x \\le 3$ → izquierda.", "$y = -2$ horizontal; $y \\ge -2$ → arriba.",
             `<div class="cols" style="grid-template-columns:repeat(2,minmax(0,1fr))">${F({x:[-2,5],y:[-4,4],W:300,H:280,ancho:10,rectas:[{a:1,b:0,c:3,s:"<=",semi:true,col:"r1"}]})}${F({x:[-2,5],y:[-4,4],W:300,H:280,ancho:10,rectas:[{a:0,b:1,c:-2,s:">=",semi:true,col:"r2"}]})}</div>`],
      res:"Izquierda de $x = 3$; encima de $y = -2$" },
    { nivel:"Consolidación", enun:"¿El punto $(2, 3)$ es solución de $\\;5x - 3y \\le 1$? ¿Dónde está?",
      pasos:[R`$5 \cdot 2 - 3 \cdot 3 = 10 - 9 = 1 \le 1$ ✓`, "Da justo la igualdad: el punto está <b>en la recta</b> (el borde), que también es solución."],
      res:"Sí; está en el borde" },
    { nivel:"Problema", enun:"Sin dibujar, ¿la solución de $\\;6 - 3y \\le 2x\\;$ es el semiplano de arriba o el de abajo de su recta?",
      pasos:[R`$-3y \le 2x - 6$`, R`Divido entre $-3$ (cambia el sentido): $\;y \ge -\dfrac{2}{3}x + 2$`, "$y \\ge$ → semiplano de <b>arriba</b>.",
             R`Compruebo con $O$: $6 \le 0$ ✗, y el origen está por <b>debajo</b> (la recta corta al eje $Y$ en 2) ✓`],
      res:"El de <b>arriba</b>" },
    { nivel:"Para pensar", enun:"Escribe una inecuación cuya solución sea el semiplano <b>a la izquierda</b> de la recta que pasa por $(0, 0)$ y $(1, 2)$.",
      pasos:["La recta es $y = 2x$, es decir, $2x - y = 0$.", R`El punto $(-1, 0)$ está a la izquierda: $2 \cdot (-1) - 0 = -2$, negativo.`, "Los puntos de la izquierda cumplen $2x - y \\le 0$, o lo que es lo mismo, $y \\ge 2x$."],
      res:"$y \\ge 2x$ &nbsp;(o $2x - y \\le 0$)" }
  ]
});
})();

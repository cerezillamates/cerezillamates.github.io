/* 2.º Bach CCSS · Programación lineal · Apartado 2: Sistemas de inecuaciones. Región factible
   Apuntes de la profesora: «se representa cada recta y se marca el semiplano que determina; la parte que
   tienen en común todos los semiplanos es la región factible». Sus ejemplos:
   {3x + 4y ≤ 12, 2x + y ≥ 2, x ≥ 0, y ≥ 0} y {x − 3y ≥ −6, x + 2y ≥ 4, 3x + y ≤ 5}. */
(function(){
const R = String.raw, F = PL.fig, P = PL.pasos, T = PL.tabla;
const duo = (a, b) => `<div class="pl-duo"><div>${a}</div><div>${b}</div></div>`;
const res = (o, t) => `<div class="res paso" data-o="${o}">${t}</div>`;
const ejes = (o, extra) => [{a:1,b:0,c:0,s:">=",o,flecha:false,col:"#64748b"},{a:0,b:1,c:0,s:">=",o,flecha:false,col:"#64748b"}].map(r=>Object.assign(r,extra||{}));
const sis = l => `$$\\left\\{\\begin{array}{l}${l.join("\\\\")}\\end{array}\\right.$$`;

// Ejemplo 1 de los apuntes
const E1 = (oR, oV) => ({x:[-1,5], y:[-1,4], alt:"Región factible del ejemplo 1",
  rectas:[{a:3,b:4,c:12,s:"<=",nom:"r₁",o:1,pos:.75,dx:4,dy:-12},
          {a:2,b:1,c:2,s:">=",nom:"r₂",o:2,pos:.92,dx:10,dy:0},
          ...ejes(3)],
  region:oR,
  pts:[{x:1,y:0,t:"A(1, 0)",o:oV,lado:"sw"},{x:4,y:0,t:"B(4, 0)",o:oV,lado:"n"},{x:0,y:3,t:"C(0, 3)",o:oV,lado:"e"},{x:0,y:2,t:"D(0, 2)",o:oV,lado:"w"}]});

TEMA.registrar({
  num: 2,
  titulo: "Sistemas de inecuaciones. Región factible",
  videos: [
    {t:"Vídeos en YouTube: Sistemas de inecuaciones con dos incógnitas", url:"https://www.youtube.com/results?search_query=sistema+de+inecuaciones+lineales+dos+incognitas+region+factible"}
  ],

  laminas: [
    { portada:true, cuerpo:[
      {nota:[{lista:[
        "Qué es un <b>sistema de inecuaciones</b> y su <b>región factible</b>.",
        "Dibujar la región: cada recta con su semiplano y la <b>parte común</b>.",
        "Calcular los <b>vértices</b> resolviendo sistemas de dos ecuaciones.",
        "Regiones <b>acotadas</b>, <b>no acotadas</b> y <b>vacías</b>; saber si un punto es de la región."
      ]}], etq:"🎯 En este apartado vas a aprender"}
    ]},

    { titulo:"Sistema de inecuaciones y región factible", cuerpo:[
      {def:["Un <b>sistema de inecuaciones lineales</b> con dos incógnitas está formado por varias inecuaciones:",
            {formula:R`\left\{\begin{array}{l} a_1x + b_1y \le c_1\\ a_2x + b_2y \le c_2\\ \quad\vdots \\ a_nx + b_ny \le c_n \end{array}\right.`},
            "Su solución, si existe, es una región del plano que llamamos <b>región factible</b>."]},
      {prop:["Se dibuja <b>cada recta</b> y se marca con una flecha el <b>semiplano</b> de cada inecuación. La <b>parte común</b> a todos los semiplanos es la región factible."], etq:"Cómo se dibuja"}
    ]},

    { titulo:"Ejemplo 1: dibujar la región", cuerpo:[
      {html: duo(
        TEMA.tx(sis(["3x + 4y \\le 12","2x + y \\ge 2","x \\ge 0,\\; y \\ge 0"])) +
        P([[1,"$r_1$: $3x + 4y = 12$ → $(0, 3)$ y $(4, 0)$. Prueba $O$: $0 \\le 12$ ✓ → hacia el origen."],
           [2,"$r_2$: $2x + y = 2$ → $(0, 2)$ y $(1, 0)$. Prueba $O$: $0 \\ge 2$ ✗ → al lado contrario."],
           [3,"$x \\ge 0,\\; y \\ge 0$: el <b>primer cuadrante</b>."],
           [4,"La <b>parte común</b> es la región factible."],
           [5,"Sus <b>vértices</b>: $A(1, 0)$, $B(4, 0)$, $C(0, 3)$ y $D(0, 2)$."]]),
        F(E1(4,5))
      )}
    ]},

    { titulo:"Los bordes y los vértices", cuerpo:[
      {def:["Las rectas que limitan la región son sus <b>bordes</b>. El punto donde se cortan dos bordes es un <b>vértice</b>."]},
      {prop:["Para calcular un vértice resuelvo el <b>sistema de ecuaciones</b> de las dos rectas que se cortan en él (sustitución, reducción o igualación)."], etq:"Cómo se calcula"},
      {aviso:["No todos los cortes de dos rectas son vértices. En el ejemplo 1, $r_1$ y $r_2$ se cortan en $(-0{,}8;\\ 3{,}6)$, que <b>no cumple</b> $x \\ge 0$: no es un vértice de la región. <br>👉 Mira el dibujo para saber <b>qué rectas</b> forman cada vértice."]}
    ]},

    { titulo:"Ejemplo 2: tres rectas", cuerpo:[
      {html: duo(
        TEMA.tx(sis(["x - 3y \\ge -6","x + 2y \\ge 4","3x + y \\le 5"])) +
        P([[1,"$r_1$: $x - 3y = -6$ → $(0, 2)$, $(3, 3)$. $O$: $0 \\ge -6$ ✓ → hacia $O$."],
           [2,"$r_2$: $x + 2y = 4$ → $(0, 2)$, $(4, 0)$. $O$: $0 \\ge 4$ ✗ → al contrario."],
           [3,"$r_3$: $3x + y = 5$ → $(1, 2)$, $(2, -1)$. $O$: $0 \\le 5$ ✓ → hacia $O$."],
           [4,"La parte común es un <b>triángulo</b>."],
           [5,"Vértices: $A = r_1 \\cap r_2$, $\\;B = r_2 \\cap r_3$, $\\;C = r_1 \\cap r_3$."]]),
        F({x:[-1,3], y:[0,4], alt:"Región factible del ejemplo 2",
           rectas:[{a:1,b:-3,c:-6,s:">=",nom:"r₁",o:1,pos:.95,dx:-6,dy:-12,ta:"end",fpos:.85},
                   {a:1,b:2,c:4,s:">=",nom:"r₂",o:2,pos:.95,dx:-4,dy:-10,ta:"end",fpos:.85},
                   {a:3,b:1,c:5,s:"<=",nom:"r₃",o:3,pos:.1,dx:10,dy:6,fpos:.15}],
           region:4,
           pts:[{x:0,y:2,t:"A",o:5,lado:"w"},{x:1.2,y:1.4,t:"B",o:5,lado:"se"},{x:.9,y:2.3,t:"C",o:5,lado:"n"}]})
      )}
    ]},

    { titulo:"Ejemplo 2: cálculo de los vértices", cuerpo:[
      {cols:[
        [{ej:{etq:"A = r₁ ∩ r₂", enun:sis(["x - 3y = -6","x + 2y = 4"]),
          pasos:[R`Restando: $-5y = -10 \Rightarrow y = 2$`, R`$x = 4 - 2 \cdot 2 = 0$`], res:"$A(0, 2)$"}}],
        [{ej:{etq:"B = r₂ ∩ r₃", enun:sis(["x + 2y = 4","3x + y = 5"]),
          pasos:[R`$y = 5 - 3x \Rightarrow x + 10 - 6x = 4$`, R`$-5x = -6 \Rightarrow x = \tfrac{6}{5}$`, R`$y = 5 - \tfrac{18}{5} = \tfrac{7}{5}$`], res:"$B\\left(\\tfrac65, \\tfrac75\\right)$"}}],
        [{ej:{etq:"C = r₁ ∩ r₃", enun:sis(["x - 3y = -6","3x + y = 5"]),
          pasos:[R`$y = 5 - 3x \Rightarrow x - 15 + 9x = -6$`, R`$10x = 9 \Rightarrow x = \tfrac{9}{10}$`, R`$y = 5 - \tfrac{27}{10} = \tfrac{23}{10}$`], res:"$C\\left(\\tfrac{9}{10}, \\tfrac{23}{10}\\right)$"}}]
      ]},
      {truco:["Comprueba cada vértice en la <b>tercera</b> inecuación: $B$ en $r_1$: $\\tfrac65 - \\tfrac{21}{5} = -3 \\ge -6$ ✓"]}
    ]},

    { titulo:"Tipos de región factible", cuerpo:[
      {html:`<div class="cols" style="grid-template-columns:repeat(3,minmax(0,1fr))">
        <div class="paso" data-o="1">${F({x:[-1,5],y:[-1,4],W:340,H:300,ancho:13,rectas:[{a:3,b:4,c:12,s:"<=",flecha:false},{a:2,b:1,c:2,s:">=",flecha:false},...ejes(undefined)],region:0})}<p style="text-align:center;margin:.2em 0"><b>Acotada</b>: un polígono cerrado.</p></div>
        <div class="paso" data-o="2">${F({x:[-1,6],y:[-1,6],W:340,H:300,ancho:13,rectas:[{a:1,b:1,c:2,s:">=",flecha:false},...ejes(undefined)],region:0})}<p style="text-align:center;margin:.2em 0"><b>No acotada</b>: se extiende sin fin.</p></div>
        <div class="paso" data-o="3">${F({x:[-1,5],y:[-1,5],W:340,H:300,ancho:13,rectas:[{a:1,b:1,c:1,s:"<="},{a:1,b:1,c:3,s:">="}]})}<p style="text-align:center;margin:.2em 0"><b>Vacía</b>: $x + y \\le 1$ y $x + y \\ge 3$ no tienen puntos comunes.</p></div>
      </div>`},
      {nota:["En el apartado 3 veremos que, si la región es <b>acotada</b>, siempre hay máximo y mínimo."]}
    ]},

    { titulo:"¿Un punto pertenece a la región?", cuerpo:[
      {prop:["Un punto pertenece a la región factible si cumple <b>todas</b> las inecuaciones. Basta con que falle <b>una</b> para que no pertenezca."], etq:"Cómo se hace"},
      {html: duo(
        P([[1,"Ejemplo 1. $P(2, 1)$: $\\;6 + 4 = 10 \\le 12$ ✓ · $4 + 1 = 5 \\ge 2$ ✓ · $x, y \\ge 0$ ✓ → <b>sí</b>"],
           [2,"$Q(3, 2)$: $\\;9 + 8 = 17 \\le 12$ ✗ → <b>no</b> (ya no hace falta seguir)"]]),
        F(Object.assign(E1(0,0), {pts:[{x:2,y:1,t:"P ✓",o:1,col:"#15803d",lado:"ne"},{x:3,y:2,t:"Q ✗",o:2,col:"#c0392b",lado:"ne"}]}))
      )}
    ]},

    { titulo:"Resumen", cuerpo:[
      {resumen:[{lista:[
        "Región factible = la <b>parte común</b> de los semiplanos de todas las inecuaciones.",
        "Para cada recta: tabla de valores, punto de prueba y flecha hacia su semiplano.",
        "Un <b>vértice</b> es el corte de dos bordes: se calcula con un sistema de dos ecuaciones. ¡Mira en el dibujo qué rectas forman cada vértice!",
        "La región puede ser <b>acotada</b>, <b>no acotada</b> o <b>vacía</b>.",
        "Un punto es de la región si cumple <b>todas</b> las inecuaciones."
      ]}]},
      {comp:{q:"¿El punto $(1, 1)$ pertenece a la región $\\{x + 2y \\le 8,\\ x - y \\le 2,\\ x \\ge 0,\\ y \\ge 0\\}$?", opciones:["Sí","No"], ok:0, explic:"$3 \\le 8$, $0 \\le 2$ y $x, y \\ge 0$: cumple todas."}},
      {comp:{q:"Calcula la coordenada $x$ del corte de $x + y = 5$ y $2x + y = 8$.", sol:3, explic:"Restando: $x = 3$ (y entonces $y = 2$)."}}
    ]}
  ],

  clase: [
    { nivel:"Aplicación", min:5,
      enun:"Dibuja la región factible y calcula sus vértices: $\\;x + y \\le 6,\\; x \\ge 0,\\; y \\ge 0$.",
      pasos:["Recta $x + y = 6$: $(0, 6)$ y $(6, 0)$; $O$: $0 \\le 6$ ✓.", "Con $x, y \\ge 0$ queda un triángulo.",
             F({x:[-1,7],y:[-1,7],W:400,H:360,ancho:14,rectas:[{a:1,b:1,c:6,s:"<=",nom:"x + y = 6",pos:.15,dx:10},...ejes(undefined)],region:0,pts:[{x:0,y:0,t:"O(0, 0)",lado:"sw"},{x:6,y:0,t:"(6, 0)",lado:"n"},{x:0,y:6,t:"(0, 6)",lado:"e"}]})],
      res:"Vértices $(0, 0)$, $(6, 0)$ y $(0, 6)$" },
    { nivel:"Aplicación", min:7,
      enun:"Dibuja la región y calcula sus vértices: $\\;x + 2y \\le 8,\\; x - y \\le 2,\\; x \\ge 0,\\; y \\ge 0$.",
      pasos:["$r_1$: $x + 2y = 8$ → $(0, 4)$, $(8, 0)$; $O$ ✓.", "$r_2$: $x - y = 2$ → $(2, 0)$, $(4, 2)$; $O$: $0 \\le 2$ ✓.",
             R`Vértice $r_1 \cap r_2$: $x = y + 2 \Rightarrow y + 2 + 2y = 8 \Rightarrow y = 2,\ x = 4$`,
             F({x:[-1,8],y:[-1,5],W:440,H:330,ancho:15,rectas:[{a:1,b:2,c:8,s:"<=",nom:"r₁",pos:.9,dy:-12},{a:1,b:-1,c:2,s:"<=",nom:"r₂",pos:.8,dx:10},...ejes(undefined)],region:0,
               pts:[{x:0,y:0,t:"(0, 0)",lado:"sw"},{x:2,y:0,t:"(2, 0)",lado:"s"},{x:4,y:2,t:"(4, 2)",lado:"e"},{x:0,y:4,t:"(0, 4)",lado:"e"}]})],
      res:"Vértices $(0, 0)$, $(2, 0)$, $(4, 2)$ y $(0, 4)$" },
    { nivel:"Práctica", min:8,
      enun:"Represente el recinto $\\;5x - 4y \\le 20,\\; x + 8y \\le 48,\\; x \\ge 2,\\; y \\ge 0\\;$ y calcule sus vértices.",
      pasos:["$r_1$: $5x - 4y = 20$ → $(4, 0)$, $(8, 5)$. $\\;r_2$: $x + 8y = 48$ → $(0, 6)$, $(8, 5)$. $\\;x = 2$ vertical.",
             R`$r_1 \cap r_2$: $x = 48 - 8y \Rightarrow 240 - 40y - 4y = 20 \Rightarrow y = 5,\ x = 8$`,
             R`$x = 2$ con $r_2$: $8y = 46 \Rightarrow y = \tfrac{23}{4}$; $\;x = 2$ con $y = 0$: $(2, 0)$; $\;r_1$ con $y = 0$: $(4, 0)$`,
             F({x:[-1,10],y:[-1,7],W:460,H:330,ancho:16,rectas:[{a:5,b:-4,c:20,s:"<=",nom:"r₁",pos:.95,dx:-8,ta:"end"},{a:1,b:8,c:48,s:"<=",nom:"r₂",pos:.1,dy:-10},{a:1,b:0,c:2,s:">=",nom:"x = 2",pos:.95,fpos:.3},{a:0,b:1,c:0,s:">=",flecha:false,col:"#64748b"}],region:0,
               pts:[{x:2,y:0,t:"(2, 0)",lado:"sw"},{x:4,y:0,t:"(4, 0)",lado:"se"},{x:8,y:5,t:"(8, 5)",lado:"e"},{x:2,y:5.75,t:"(2, 23/4)",lado:"ne"}]})],
      res:"Vértices $(2, 0)$, $(4, 0)$, $(8, 5)$ y $\\left(2, \\tfrac{23}{4}\\right)$" },
    { nivel:"Práctica", min:7,
      enun:"Sea $R$ la región $\\;x \\ge 3y,\\; x \\le 5,\\; y \\ge 1$. <b>a)</b> Dibújala y halla sus vértices. <b>b)</b> ¿El punto $(5{,}5;\\ 1{,}55)$ pertenece a $R$?",
      pasos:["Recta $x = 3y$: $(0, 0)$, $(3, 1)$, $(6, 2)$. Prueba con $(3, 0)$: $3 \\ge 0$ ✓ → por debajo de la recta.",
             R`Vértices: $x = 3y,\ y = 1 \to (3, 1)$; $\;x = 5,\ y = 1 \to (5, 1)$; $\;x = 5,\ x = 3y \to \left(5, \tfrac53\right)$`,
             F({x:[-1,7],y:[-1,3],W:440,H:300,ancho:15,rectas:[{a:1,b:-3,c:0,s:">=",nom:"x = 3y",pos:.92,dx:-8,dy:-10,ta:"end"},{a:1,b:0,c:5,s:"<=",nom:"x = 5",pos:.95,fpos:.8},{a:0,b:1,c:1,s:">=",nom:"y = 1",pos:.05,dy:-8}],region:0,
               pts:[{x:3,y:1,t:"(3, 1)",lado:"sw"},{x:5,y:1,t:"(5, 1)",lado:"se"},{x:5,y:5/3,t:"(5, 5/3)",lado:"e"}]}),
             R`<b>b)</b> $x = 5{,}5 \le 5$ ✗ → <b>no</b> pertenece.`],
      res:"a) $(3, 1)$, $(5, 1)$, $\\left(5, \\tfrac53\\right)$ · b) No" },
    { nivel:"Problema", min:4,
      enun:"Con la región del ejercicio 2.2 ($x + 2y \\le 8,\\ x - y \\le 2,\\ x, y \\ge 0$), ¿pertenecen los puntos $(1, 1)$ y $(5, 1)$?",
      pasos:[R`$(1, 1)$: $1 + 2 = 3 \le 8$ ✓; $\;1 - 1 = 0 \le 2$ ✓; $\;x, y \ge 0$ ✓ → <b>sí</b>`,
             R`$(5, 1)$: $5 + 2 = 7 \le 8$ ✓; $\;5 - 1 = 4 \le 2$ ✗ → <b>no</b>`],
      res:"$(1, 1)$ sí; $(5, 1)$ no" },
    { nivel:"Reto", min:6,
      enun:"Escribe un sistema de inecuaciones cuya región factible sea el triángulo de vértices $(0, 0)$, $(4, 0)$ y $(0, 2)$.",
      pasos:["Dos lados están en los ejes: $x \\ge 0$, $y \\ge 0$.",
             R`El tercer lado pasa por $(4, 0)$ y $(0, 2)$: $\dfrac{x}{4} + \dfrac{y}{2} = 1 \Rightarrow x + 2y = 4$`,
             R`El origen está dentro: $0 \le 4$ → $x + 2y \le 4$`],
      res:"$x + 2y \\le 4,\\; x \\ge 0,\\; y \\ge 0$" }
  ],

  casa: [
    { nivel:"Básico", enun:"Dibuja la región y calcula sus vértices: $\\;2x + y \\le 8,\\; x + y \\le 5,\\; x \\ge 0,\\; y \\ge 0$.",
      pasos:["$r_1$: $(0, 8)$, $(4, 0)$. $\\;r_2$: $(0, 5)$, $(5, 0)$. Las dos hacia el origen.",
             R`$r_1 \cap r_2$: restando, $x = 3$; $y = 2$`,
             F({x:[-1,6],y:[-1,9],W:380,H:380,ancho:13,rectas:[{a:2,b:1,c:8,s:"<=",nom:"r₁",pos:.1,dx:10},{a:1,b:1,c:5,s:"<=",nom:"r₂",pos:.9,dy:-8},...ejes(undefined)],region:0,
               pts:[{x:0,y:0,lado:"sw",t:"(0, 0)"},{x:4,y:0,t:"(4, 0)",lado:"s"},{x:3,y:2,t:"(3, 2)",lado:"e"},{x:0,y:5,t:"(0, 5)",lado:"w"}]})],
      res:"$(0, 0)$, $(4, 0)$, $(3, 2)$, $(0, 5)$" },
    { nivel:"Básico", enun:"Dibuja la región: $\\;x + y \\ge 2,\\; x \\le 4,\\; y \\le 3,\\; x \\ge 0,\\; y \\ge 0$, y halla sus vértices.",
      pasos:["$x + y = 2$ con prueba $O$: $0 \\ge 2$ ✗ → lado contrario al origen. $x = 4$ vertical; $y = 3$ horizontal.",
             F({x:[-1,5],y:[-1,4],W:400,H:320,ancho:14,rectas:[{a:1,b:1,c:2,s:">=",nom:"x + y = 2",pos:.05,dx:10},{a:1,b:0,c:4,s:"<="},{a:0,b:1,c:3,s:"<="},...ejes(undefined)],region:0,
               pts:[{x:2,y:0,t:"(2, 0)",lado:"s"},{x:4,y:0,t:"(4, 0)",lado:"s"},{x:4,y:3,t:"(4, 3)",lado:"ne"},{x:0,y:3,t:"(0, 3)",lado:"nw"},{x:0,y:2,t:"(0, 2)",lado:"w"}]})],
      res:"Pentágono: $(2, 0)$, $(4, 0)$, $(4, 3)$, $(0, 3)$, $(0, 2)$" },
    { nivel:"Consolidación", enun:"Halla los vértices de la región $\\;x - y \\ge -2,\\; x + y \\le 6,\\; y \\ge 1$. ¿Pertenecen $(2, 3)$ y $(0, 3)$?",
      pasos:[R`$y = 1$ con $x - y = -2$: $x = -1 \to (-1, 1)$; $\;y = 1$ con $x + y = 6$: $(5, 1)$`,
             R`$x - y = -2$ y $x + y = 6$: sumando, $2x = 4 \Rightarrow x = 2,\ y = 4 \to (2, 4)$`,
             R`$(2, 3)$: $-1 \ge -2$ ✓, $5 \le 6$ ✓, $3 \ge 1$ ✓ → sí. $\;(0, 3)$: $-3 \ge -2$ ✗ → no.`,
             F({x:[-2,6],y:[0,5],W:420,H:300,ancho:14,rectas:[{a:1,b:-1,c:-2,s:">=",pos:.9,nom:"x − y = −2",dx:-8,ta:"end"},{a:1,b:1,c:6,s:"<=",nom:"x + y = 6",pos:.9},{a:0,b:1,c:1,s:">="}],region:0,
               pts:[{x:-1,y:1,t:"(−1, 1)",lado:"sw"},{x:5,y:1,t:"(5, 1)",lado:"se"},{x:2,y:4,t:"(2, 4)",lado:"n"},{x:2,y:3,t:"✓",col:"#15803d",lado:"e"},{x:0,y:3,t:"✗",col:"#c0392b",lado:"w"}]})],
      res:"Vértices $(-1, 1)$, $(5, 1)$, $(2, 4)$; $(2, 3)$ sí, $(0, 3)$ no" },
    { nivel:"Consolidación", enun:"(Examen) Represente la región $\\;4x + 3y \\ge 60,\\; y \\le 30,\\; 2x \\le 10 + y,\\; x \\ge 0,\\; y \\ge 1\\;$ y calcule sus vértices.",
      pasos:["$r_1$: $4x + 3y = 60$ → $(0, 20)$, $(15, 0)$; $O$ ✗ → lado contrario. $r_2$: $2x - y = 10$ → $(5, 0)$, $(20, 30)$; $O$: $0 \\le 10$ ✓.",
             R`$r_1 \cap r_2$: $y = 2x - 10 \Rightarrow 4x + 6x - 30 = 60 \Rightarrow x = 9,\ y = 8$`,
             R`$r_2$ con $y = 30$: $x = 20$. Con $x = 0$: $(0, 20)$ y $(0, 30)$. La condición $y \ge 1$ no limita (la región empieza en $y = 8$).`,
             F({x:[-2,24],y:[-2,34],W:420,H:420,paso:2,etq:4,ancho:14,rectas:[{a:4,b:3,c:60,s:">=",nom:"r₁",pos:.35,dx:8},{a:2,b:-1,c:10,s:"<=",nom:"r₂",pos:.8,dx:8},{a:0,b:1,c:30,s:"<="},{a:1,b:0,c:0,s:">=",flecha:false,col:"#64748b"},{a:0,b:1,c:1,s:">=",col:"#94a3b8"}],region:0,
               pts:[{x:0,y:20,t:"(0, 20)",lado:"w"},{x:9,y:8,t:"(9, 8)",lado:"se"},{x:20,y:30,t:"(20, 30)",lado:"s"},{x:0,y:30,t:"(0, 30)",lado:"ne"}]})],
      res:"$(0, 20)$, $(9, 8)$, $(20, 30)$, $(0, 30)$" },
    { nivel:"Problema", enun:"¿Tiene solución el sistema $\\;x + y \\le 2,\\; 2x + 2y \\ge 6$? Razónalo.",
      pasos:[R`La segunda es $x + y \ge 3$ (dividiendo entre 2).`, "Ningún punto puede cumplir a la vez $x + y \\le 2$ y $x + y \\ge 3$: las rectas son paralelas y los semiplanos no se tocan."],
      res:"No: la región es <b>vacía</b>" },
    { nivel:"Para pensar", enun:"Escribe el sistema cuya región es el cuadrado de vértices $(1, 1)$, $(4, 1)$, $(4, 4)$ y $(1, 4)$.",
      pasos:["Los lados son rectas horizontales y verticales: $x = 1$, $x = 4$, $y = 1$, $y = 4$.", "Lo de dentro está entre ellas."],
      res:"$1 \\le x \\le 4,\\; 1 \\le y \\le 4$" }
  ]
});
})();

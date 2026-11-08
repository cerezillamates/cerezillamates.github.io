/* 2.º Bach CCSS · Programación lineal · Apartado 3: Función objetivo. Método de los vértices
   Apuntes de la profesora: elementos (función objetivo, variables de decisión, restricciones, región factible,
   solución factible y óptima, bordes y vértices), el TEOREMA y sus ejemplos:
   F = 3x + 2y con {x + 3y ≥ 3, y − x ≤ 1, x ≤ 2, y ≥ 0}; recinto R {y ≤ x + 5, 2x + y ≥ −4, 4x ≤ 10 − y, y ≥ 0} con F = x + y/2. */
(function(){
const R = String.raw, F = PL.fig, P = PL.pasos;
const duo = (a, b) => `<div class="pl-duo"><div>${a}</div><div>${b}</div></div>`;
const res = (o, t) => `<div class="res paso" data-o="${o}">${t}</div>`;
const sis = l => `$$\\left\\{\\begin{array}{l}${l.join("\\\\")}\\end{array}\\right.$$`;
// tabla de valores de F en los vértices: filas [vértice, cálculo, valor, "max"|"min"|""]
const tablaF = (f, filas, o) => `<table class="pl-tab${o?" paso":""}"${o?` data-o="${o}"`:""}><tr><th>Vértice</th><th>${TEMA.tx(f)}</th></tr>${filas.map(r=>`<tr><td>${TEMA.tx(r[0])}</td><td class="${r[3]||""}">${TEMA.tx(r[1])}${r[3]==="max"?" ← máx.":r[3]==="min"?" ← mín.":""}</td></tr>`).join("")}</table>`;

// Ejemplo 1 de los apuntes
const E1 = {x:[-1,3], y:[-1,4], alt:"Región del ejemplo 1",
  rectas:[{a:1,b:3,c:3,s:">=",nom:"r₁",pos:.02,dx:4,dy:-10},{a:-1,b:1,c:1,s:"<=",nom:"r₂",pos:.75,dx:-12,ta:"end"},{a:1,b:0,c:2,s:"<=",nom:"x = 2",pos:.97,dx:8},{a:0,b:1,c:0,s:">=",col:"#94a3b8",flecha:false}]};
const V1 = o => [{x:0,y:1,t:"A(0, 1)",o,lado:"w"},{x:2,y:1/3,t:"B(2, 1/3)",o,lado:"se"},{x:2,y:3,t:"C(2, 3)",o,lado:"e"}];
// recinto R
const ER = {x:[-4,3], y:[-1,7], alt:"Recinto R",
  rectas:[{a:-1,b:1,c:5,s:"<=",nom:"r₁",pos:.92,dx:-10,ta:"end"},{a:2,b:1,c:-4,s:">=",nom:"r₂",pos:.08,dx:10},{a:4,b:1,c:10,s:"<=",nom:"r₃",pos:.12,dx:8},{a:0,b:1,c:0,s:">=",col:"#94a3b8",flecha:false}]};
const VR = o => [{x:-2,y:0,t:"A(−2, 0)",o,lado:"s"},{x:2.5,y:0,t:"B(5/2, 0)",o,lado:"s"},{x:1,y:6,t:"C(1, 6)",o,lado:"e"},{x:-3,y:2,t:"D(−3, 2)",o,lado:"w"}];
// pañuelos y corbatas (Andalucía, modelo 2026)
const EP = {x:[-2,32], y:[-2,30], paso:2, etq:10, alt:"Región de pañuelos y corbatas",
  rectas:[{a:2,b:3,c:60,s:"<=",nom:"horas",pos:.85,dx:-6,dy:-14,ta:"end"},{a:2,b:1,c:28,s:">=",nom:"compromiso",pos:.04,dx:10,dy:4},{a:1,b:0,c:0,s:">=",flecha:false,col:"#94a3b8"},{a:0,b:1,c:0,s:">=",flecha:false,col:"#94a3b8"}]};

TEMA.registrar({
  num: 3,
  titulo: "Función objetivo: el método de los vértices",
  videos: [
    {t:"Vídeos en YouTube: Programación lineal: máximo y mínimo en los vértices", url:"https://www.youtube.com/results?search_query=programacion+lineal+2+bachillerato+ccss+metodo+de+los+vertices"}
  ],

  laminas: [
    { portada:true, cuerpo:[
      {nota:[{lista:[
        "Los <b>elementos</b> de un problema de programación lineal.",
        "El <b>teorema</b>: dónde están el máximo y el mínimo.",
        "El <b>método de los vértices</b> y las <b>soluciones múltiples</b>.",
        "Las preguntas típicas de la PAU: ¿pertenece un punto?, ¿puede valer $F$ tanto?, ¿cuánto vale $k$?"
      ]}], etq:"🎯 En este apartado vas a aprender"}
    ]},

    { titulo:"Elementos de un problema de programación lineal", cuerpo:[
      {cols:[
        [{def:["<b>Función objetivo</b>: $F(x, y) = ax + by + c$, la que hay que <b>optimizar</b> (calcular su máximo o su mínimo).",
               "$x$ e $y$ son las <b>variables de decisión</b>; $a$, $b$ y $c$ son números."]},
         {def:["<b>Restricciones</b>: las inecuaciones lineales que deben cumplir $x$ e $y$."]}],
        [{def:["<b>Región factible</b>: los puntos que cumplen todas las restricciones. Cada uno es una <b>solución factible</b>.",
               "<b>Solución óptima</b>: el punto (o los puntos) donde $F$ alcanza el valor óptimo.",
               "<b>Bordes</b>: las rectas que limitan la región. <b>Vértice</b>: el corte de dos bordes."]}]
      ]}
    ]},

    { titulo:"El teorema fundamental", cuerpo:[
      {prop:["Si la región factible es un recinto <b>cerrado y acotado</b>, el problema <b>siempre tiene solución óptima</b> (máximo y mínimo), y se encuentra en los <b>vértices</b> o en <b>todos los puntos de un borde</b>."], etq:"Teorema"},
      {cols:[
        [{nota:["<b>Solución única</b>: el óptimo está en <b>un vértice</b>."]}],
        [{nota:["<b>Solución múltiple</b>: el óptimo está en <b>dos vértices</b> y en <b>todos los puntos del segmento</b> que los une."]}]
      ]},
      {truco:["No hace falta probar los infinitos puntos de la región: basta con <b>calcular $F$ en los vértices</b>."]}
    ]},

    { titulo:"¿Por qué en los vértices?", cuerpo:[
      {html: duo(
        "Dibujo las rectas $3x + 2y = k$ para distintos valores de $k$: son <b>paralelas</b> (rectas de nivel). Cuanto más arriba, mayor es $k$." +
        P([[1,"Región del ejemplo 1 con sus vértices."],
           [2,"$3x + 2y = 2$: toca la región <b>solo en</b> $A$ → es el valor <b>más pequeño</b>."],
           [3,"$3x + 2y = 6$: atraviesa la región; hay valores mayores."],
           [4,"$3x + 2y = 12$: el <b>último</b> punto que toca es $C$ → valor <b>máximo</b>."]]),
        F(Object.assign({}, E1, {region:1, pts:V1(1),
          nivel:[{a:3,b:2,k:2,et:"F = 2",o:2,pos:.85,dx:8,dy:4,col:"#be123c"},{a:3,b:2,k:6,et:"F = 6",o:3,pos:.55,dx:6,col:"#6b7280"},{a:3,b:2,k:12,et:"F = 12",o:4,pos:.7,dx:8,col:"#15803d"}]}))
      )}
    ]},

    { titulo:"El método de los vértices", cuerpo:[
      {prop:[{lista:[
        "<b>1.</b> Dibujar la <b>región factible</b>.",
        "<b>2.</b> Calcular sus <b>vértices</b> (sistemas de dos rectas).",
        "<b>3.</b> Calcular el <b>valor de $F$</b> en cada vértice (en una tabla).",
        "<b>4.</b> <b>Responder</b>: el valor máximo (o mínimo) y <b>dónde</b> se alcanza. Si sale el mismo valor en dos vértices, es todo el <b>segmento</b>."
      ]}], etq:"Método"},
      {aviso:["El óptimo es un <b>valor</b> de $F$ (un número: 12) y se alcanza en un <b>punto</b> ($C(2, 3)$). En la respuesta hay que dar <b>los dos</b>."]}
    ]},

    { titulo:"Ejemplo 1: la región y sus vértices", cuerpo:[
      {html: duo(
        "Calcula el máximo y el mínimo de $F(x, y) = 3x + 2y$ sujeta a:" + TEMA.tx(sis(["x + 3y \\ge 3","y - x \\le 1","x \\le 2","y \\ge 0"])) +
        P([[1,"$r_1$: $x + 3y = 3$ → $(0, 1)$, $(3, 0)$. $\\;r_2$: $y - x = 1$ → $(0, 1)$, $(-1, 0)$. Rectas $x = 2$ e $y = 0$."],
           [2,"La región es el triángulo $ABC$ (la restricción $y \\ge 0$ no llega a tocarlo)."],
           [3,R`$A = r_1 \cap r_2$: $y = x + 1 \Rightarrow x + 3x + 3 = 3 \Rightarrow x = 0,\ y = 1$`],
           [4,R`$B$: $x = 2 \Rightarrow 3y = 1,\ y = \tfrac13$. $\;C$: $x = 2 \Rightarrow y = 3$`]]),
        F(Object.assign({}, E1, {region:2, pts:[{x:0,y:1,t:"A(0, 1)",o:3,lado:"w"},{x:2,y:1/3,t:"B(2, 1/3)",o:4,lado:"se"},{x:2,y:3,t:"C(2, 3)",o:4,lado:"e"}]}))
      )}
    ]},

    { titulo:"Ejemplo 1: el valor de F en los vértices", cuerpo:[
      {html: duo(
        tablaF("F(x, y) = 3x + 2y", [["$A(0, 1)$","$0 + 2 = 2$","","min"],["$B\\left(2, \\tfrac13\\right)$","$6 + \\tfrac23 = \\tfrac{20}{3} \\approx 6{,}67$",""],["$C(2, 3)$","$6 + 6 = 12$","","max"]]) +
        P([[1,"El valor más grande es 12, en $C(2, 3)$."],[2,"El más pequeño es 2, en $A(0, 1)$."]]) +
        res(3,"Máximo: $F = 12$ en $C(2, 3)$. &nbsp;Mínimo: $F = 2$ en $A(0, 1)$."),
        F(Object.assign({}, E1, {region:0, pts:[{x:0,y:1,t:"F = 2",lado:"w",col:"#be123c"},{x:2,y:1/3,t:"F ≈ 6,67",lado:"se"},{x:2,y:3,t:"F = 12",lado:"e",col:"#15803d"}]}))
      )}
    ]},

    { titulo:"Solución múltiple: todo un segmento", cuerpo:[
      {html: duo(
        "<b>PAU 2026</b> (pañuelos y corbatas): máximo de $F(x, y) = 4x + 6y$ en la región $2x + 3y \\le 60$, $2x + y \\ge 28$, $x, y \\ge 0$." +
        tablaF("F = 4x + 6y", [["$A(14, 0)$","$56$",""],["$B(30, 0)$","$120$","","max"],["$C(6, 16)$","$24 + 96 = 120$","","max"]]) +
        P([[1,"El máximo, 120, sale en <b>dos</b> vértices: $B$ y $C$."],
           [2,"Entonces lo alcanzan <b>todos los puntos del segmento</b> $BC$."],
           [3,"¿Por qué? $4x + 6y = 2(2x + 3y)$: la función es <b>paralela</b> al borde $2x + 3y = 60$."]]),
        F(Object.assign({}, EP, {region:0, pts:[{x:14,y:0,t:"A",lado:"s"},{x:30,y:0,t:"B",lado:"s"},{x:6,y:16,t:"C",lado:"ne"}],
          tramos:[{p:[30,0],q:[6,16],o:2}], nivel:[{a:2,b:3,k:60,o:3,et:"",col:"#f59e0b"}]}))
      )},
      {nota:["Si $x$ e $y$ son <b>unidades</b> (prendas), solo valen los puntos del segmento con coordenadas enteras: $(6, 16)$, $(9, 14)$, $(12, 12)$, … , $(30, 0)$."]}
    ]},

    { titulo:"Ejemplo 3: el recinto R", cuerpo:[
      {html: duo(
        "Sean las inecuaciones" + TEMA.tx(sis(["y \\le x + 5","2x + y \\ge -4","4x \\le 10 - y","y \\ge 0"])) + "Representa el recinto $R$ y calcula sus vértices." +
        P([[1,"Las cuatro rectas y sus semiplanos (prueba con $O$: cumple las cuatro)."],
           [2,"El recinto $R$ es un cuadrilátero."],
           [3,R`$A$: $y = 0,\ 2x = -4 \to (-2, 0)$. $\;B$: $y = 0,\ 4x = 10 \to \left(\tfrac52, 0\right)$`],
           [4,R`$C$: $4x + x + 5 = 10 \to (1, 6)$. $\;D$: $2x + x + 5 = -4 \to (-3, 2)$`]]),
        F(Object.assign({}, ER, {rectas:ER.rectas.map(r=>Object.assign({o:1},r)), region:2, pts:[...VR(3).slice(0,2), ...VR(4).slice(2)]}))
      )}
    ]},

    { titulo:"Ejemplo 3: máximo y mínimo de F(x, y) = x + y/2", cuerpo:[
      {html: duo(
        tablaF("F(x, y) = x + y/2", [["$A(-2, 0)$","$-2$","","min"],["$B\\left(\\tfrac52, 0\\right)$","$\\tfrac52 = 2{,}5$",""],["$C(1, 6)$","$1 + 3 = 4$","","max"],["$D(-3, 2)$","$-3 + 1 = -2$","","min"]]) +
        P([[1,"Máximo: $F = 4$ en $C(1, 6)$ (solución única)."],
           [2,"Mínimo: $F = -2$ en $A$ y en $D$ → en <b>todo el segmento</b> $AD$."]]),
        F(Object.assign({}, ER, {region:0, pts:VR(0), tramos:[{p:[-2,0],q:[-3,2],o:2,col:"#be123c"}]}))
      )}
    ]},

    { titulo:"Preguntas típicas de la PAU", cuerpo:[
      {ej:{etq:"¿Pertenece P(2, 4) al recinto R?", enun:"Sustituyo en <b>todas</b> las restricciones:",
        pasos:[R`$4 \le 2 + 5$ ✓ · $\;2 \cdot 2 + 4 = 8 \ge -4$ ✓ · $\;4 \cdot 2 = 8 \le 10 - 4 = 6$ ✗`], res:"No pertenece: falla la tercera"}},
      {ej:{etq:"¿Hay algún punto de R donde F valga 7? ¿Y −1,5?", enun:"En $R$, $F$ toma <b>todos los valores</b> entre el mínimo ($-2$) y el máximo ($4$).",
        pasos:["$7 > 4$: <b>no</b>, ningún punto de $R$ da 7.", "$-2 \\le -1{,}5 \\le 4$: <b>sí</b>, hay puntos donde $F = -1{,}5$."], res:"7 no; −1,5 sí"}}
    ]},

    { titulo:"Pregunta tipo PAU: el parámetro k", cuerpo:[
      {ej:{enun:"La región factible es el polígono de vértices $A(2, -1)$, $B(-1, 2)$, $C(1, 4)$ y $D(5, 0)$. La función $f(x, y) = 2x + 3y + k$ tiene máximo 19. Calcula $k$ y di dónde se alcanzan el máximo y el mínimo.",
        pasos:[R`Sin la $k$: $\;A: 4 - 3 = 1$ · $B: -2 + 6 = 4$ · $C: 2 + 12 = 14$ · $D: 10 + 0 = 10$`,
               "El máximo está donde $2x + 3y$ es mayor: en $C$.",
               R`$14 + k = 19 \Rightarrow k = 5$`,
               R`El mínimo, en $A$: $f(A) = 1 + 5 = 6$`],
        res:"$k = 5$; máximo 19 en $C(1, 4)$; mínimo 6 en $A(2, -1)$"}},
      {truco:["La $k$ suma lo mismo en todos los vértices: <b>no cambia dónde</b> están el máximo y el mínimo, solo su valor."]}
    ]},

    { titulo:"Resumen", cuerpo:[
      {resumen:[{lista:[
        "Región <b>acotada</b> → siempre hay máximo y mínimo, en los <b>vértices</b>.",
        "Método: región → vértices → tabla con $F$ en cada vértice → respuesta (valor y punto).",
        "Mismo valor óptimo en dos vértices → <b>solución múltiple</b>: todo el segmento.",
        "¿Pertenece un punto? → todas las restricciones. ¿Puede valer $F$ tanto? → mira si está entre el mínimo y el máximo."
      ]}]},
      {comp:{q:"En una región acotada, $F$ vale 3, 8, 8 y 5 en sus cuatro vértices. ¿Cuántos puntos dan el máximo?", opciones:["Uno","Dos","Infinitos"], ok:2, explic:"El máximo (8) sale en dos vértices: lo alcanza todo el segmento que los une, que tiene infinitos puntos."}},
      {comp:{q:"Si en los vértices $F$ vale −2, 4 y 6, ¿hay algún punto de la región con $F = 5$?", opciones:["Sí","No"], ok:0, explic:"5 está entre el mínimo (−2) y el máximo (6)."}}
    ]}
  ],

  clase: [
    { nivel:"Aplicación", min:4,
      enun:"Los vértices de una región factible son $A(0, 0)$, $B(4, 0)$, $C(3, 2)$ y $D(0, 3)$. Halla el máximo y el mínimo de $F(x, y) = 2x + 5y$.",
      pasos:[tablaF("F = 2x + 5y", [["$A(0, 0)$","$0$","","min"],["$B(4, 0)$","$8$",""],["$C(3, 2)$","$6 + 10 = 16$","","max"],["$D(0, 3)$","$15$",""]])],
      res:"Máximo 16 en $C(3, 2)$; mínimo 0 en $A(0, 0)$" },
    { nivel:"Aplicación", min:6,
      enun:"En el recinto $5x - 4y \\le 20,\\ x + 8y \\le 48,\\ x \\ge 2,\\ y \\ge 0$ (vértices $(2, 0)$, $(4, 0)$, $(8, 5)$, $\\left(2, \\tfrac{23}{4}\\right)$): <b>a)</b> máximo y mínimo de $F = 2x + 12y$. <b>b)</b> ¿Hay puntos con $F = 100$?",
      pasos:[tablaF("F = 2x + 12y", [["$(2, 0)$","$4$","","min"],["$(4, 0)$","$8$",""],["$(8, 5)$","$16 + 60 = 76$","","max"],["$\\left(2, \\tfrac{23}{4}\\right)$","$4 + 69 = 73$",""]]),
             "<b>b)</b> $100 > 76$ (el máximo): no."],
      res:"a) Máx. 76 en $(8, 5)$; mín. 4 en $(2, 0)$ · b) No" },
    { nivel:"Práctica", min:6,
      enun:"$R$: $\\;x \\ge 3y,\\; x \\le 5,\\; y \\ge 1$ (vértices $(3, 1)$, $(5, 1)$, $\\left(5, \\tfrac53\\right)$). <b>a)</b> Valores extremos de $F = 2x - 3y$. <b>b)</b> ¿Puede valer 3,5? ¿Y 7,5?",
      pasos:[tablaF("F = 2x − 3y", [["$(3, 1)$","$6 - 3 = 3$","","min"],["$(5, 1)$","$10 - 3 = 7$","","max"],["$\\left(5, \\tfrac53\\right)$","$10 - 5 = 5$",""]]),
             "<b>b)</b> $3 \\le 3{,}5 \\le 7$ → sí. $\\;7{,}5 > 7$ → no."],
      res:"Máx. 7 en $(5, 1)$; mín. 3 en $(3, 1)$ · 3,5 sí; 7,5 no" },
    { nivel:"Práctica", min:5,
      enun:"Región de vértices $A(2, -1)$, $B(-1, 2)$, $C(1, 4)$, $D(5, 0)$. El máximo de $f(x, y) = 2x + 3y + k$ es 19. Calcula $k$ e indica dónde están el máximo y el mínimo.",
      pasos:[R`Sin $k$: $A: 1$ · $B: 4$ · $C: 14$ · $D: 10$`, R`Máximo en $C$: $14 + k = 19 \Rightarrow k = 5$`, R`Mínimo en $A$: $1 + 5 = 6$`],
      res:"$k = 5$; máx. 19 en $C$; mín. 6 en $A$" },
    { nivel:"Problema", min:8,
      enun:"(Examen) En la región de vértices $(0, 20)$, $(9, 8)$, $(20, 30)$ y $(0, 30)$: <b>a)</b> maximiza $F(x, y) = x + 3y$. <b>b)</b> ¿Pertenece $(11, 10)$ a la región? (restricciones: $4x + 3y \\ge 60,\\ y \\le 30,\\ 2x \\le 10 + y,\\ x \\ge 0$)",
      pasos:[tablaF("F = x + 3y", [["$(0, 20)$","$60$",""],["$(9, 8)$","$33$",""],["$(20, 30)$","$20 + 90 = 110$","","max"],["$(0, 30)$","$90$",""]]),
             R`<b>b)</b> $44 + 30 = 74 \ge 60$ ✓ · $10 \le 30$ ✓ · $22 \le 10 + 10 = 20$ ✗ → no`],
      res:"a) Máximo 110 en $(20, 30)$ · b) No pertenece" },
    { nivel:"Reto", min:6,
      enun:"En la región de vértices $(0, 0)$, $(2, 0)$, $(4, 2)$ y $(0, 4)$, halla el máximo de $F(x, y) = x + 2y$. ¿Dónde se alcanza?",
      pasos:[tablaF("F = x + 2y", [["$(0, 0)$","$0$",""],["$(2, 0)$","$2$",""],["$(4, 2)$","$8$","","max"],["$(0, 4)$","$8$","","max"]]),
             "Mismo máximo en dos vértices → <b>solución múltiple</b>.",
             "$F$ es paralela al borde $x + 2y = 8$."],
      res:"Máximo 8 en todo el segmento de $(4, 2)$ a $(0, 4)$" }
  ],

  casa: [
    { nivel:"Básico", enun:"En el triángulo de vértices $A(0, 1)$, $B\\left(2, \\tfrac13\\right)$, $C(2, 3)$, halla el máximo y el mínimo de $F(x, y) = x + y$.",
      pasos:[tablaF("F = x + y", [["$A$","$1$","","min"],["$B$","$\\tfrac73 \\approx 2{,}33$",""],["$C$","$5$","","max"]])],
      res:"Máx. 5 en $C(2, 3)$; mín. 1 en $A(0, 1)$" },
    { nivel:"Básico", enun:"Vértices $(0, 0)$, $(4, 0)$, $(3, 2)$, $(0, 5)$. Máximo y mínimo de $F(x, y) = 3x + 2y$.",
      pasos:[tablaF("F = 3x + 2y", [["$(0, 0)$","$0$","","min"],["$(4, 0)$","$12$",""],["$(3, 2)$","$13$","","max"],["$(0, 5)$","$10$",""]])],
      res:"Máx. 13 en $(3, 2)$; mín. 0 en $(0, 0)$" },
    { nivel:"Consolidación", enun:"Con los mismos vértices, máximo de $G(x, y) = 2x + y$.",
      pasos:[tablaF("G = 2x + y", [["$(0, 0)$","$0$",""],["$(4, 0)$","$8$","","max"],["$(3, 2)$","$8$","","max"],["$(0, 5)$","$5$",""]]), "Sale 8 en dos vértices."],
      res:"Máximo 8 en todo el segmento de $(4, 0)$ a $(3, 2)$" },
    { nivel:"Consolidación", enun:"$R$ es el triángulo de vértices $A(12, 1)$, $B(10, 9)$, $C(6, 7)$. El máximo de $f(x, y) = 3x - 4y + \\alpha$ es 44. Calcula $\\alpha$ y el mínimo.",
      pasos:[R`Sin $\alpha$: $A: 36 - 4 = 32$ · $B: 30 - 36 = -6$ · $C: 18 - 28 = -10$`, R`Máximo en $A$: $32 + \alpha = 44 \Rightarrow \alpha = 12$`, R`Mínimo en $C$: $-10 + 12 = 2$`],
      res:"$\\alpha = 12$; máx. 44 en $A$; mín. 2 en $C$" },
    { nivel:"Problema", enun:"Recinto $R$ del ejemplo 3 (vértices $(-2, 0)$, $\\left(\\tfrac52, 0\\right)$, $(1, 6)$, $(-3, 2)$). Máximo y mínimo de $G(x, y) = y - x$.",
      pasos:[tablaF("G = y − x", [["$(-2, 0)$","$2$",""],["$\\left(\\tfrac52, 0\\right)$","$-\\tfrac52$","","min"],["$(1, 6)$","$5$","","max"],["$(-3, 2)$","$5$","","max"]]),
             "El máximo sale en dos vértices: es el borde $y = x + 5$ entero."],
      res:"Máx. 5 en el segmento de $(1, 6)$ a $(-3, 2)$; mín. −2,5 en $\\left(\\tfrac52, 0\\right)$" },
    { nivel:"Para pensar", enun:"En una región acotada, $F$ vale 4 en el vértice $A$, 10 en $B$ y 7 en $C$. ¿Puede haber un punto de la región con $F = 11$? ¿Y con $F = 5$? Razónalo.",
      pasos:["El máximo es 10 y el mínimo es 4, y $F$ toma todos los valores intermedios.", "11 no está entre 4 y 10: no. 5 sí."],
      res:"$F = 11$ no; $F = 5$ sí" }
  ]
});
})();

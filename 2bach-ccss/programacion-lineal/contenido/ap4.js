/* 2.º Bach CCSS · Programación lineal · Apartado 4: Regiones no acotadas y rectas de nivel
   Nota de los apuntes de la profesora: desde 2018/2019 la PAU propone regiones NO acotadas (aseguran que el
   óptimo pedido existe). Sus ejemplos: {2y ≤ −3x + 3, y ≥ x − 6, 2x ≤ 7y + 37} con mín. de H = −3x + 3y + 2,
   y el problema de los abonos A y B (coste mínimo). */
(function(){
const R = String.raw, F = PL.fig, P = PL.pasos;
const duo = (a, b) => `<div class="pl-duo"><div>${a}</div><div>${b}</div></div>`;
const res = (o, t) => `<div class="res paso" data-o="${o}">${t}</div>`;
const sis = l => `$$\\left\\{\\begin{array}{l}${l.join("\\\\")}\\end{array}\\right.$$`;
const tablaF = (f, filas, o) => `<table class="pl-tab${o?" paso":""}"${o?` data-o="${o}"`:""}><tr><th>Vértice</th><th>${TEMA.tx(f)}</th></tr>${filas.map(r=>`<tr><td>${TEMA.tx(r[0])}</td><td class="${r[2]||""}">${TEMA.tx(r[1])}${r[2]==="max"?" ← máx.":r[2]==="min"?" ← mín.":""}</td></tr>`).join("")}</table>`;
const ejes = () => [{a:1,b:0,c:0,s:">=",flecha:false,col:"#94a3b8"},{a:0,b:1,c:0,s:">=",flecha:false,col:"#94a3b8"}];

// región x + 2y ≥ 8, 3x + y ≥ 9, x, y ≥ 0
const EN = {x:[-1,10], y:[-1,10], alt:"Región no acotada",
  rectas:[{a:1,b:2,c:8,s:">=",nom:"r₁",pos:.9,dy:-10},{a:3,b:1,c:9,s:">=",nom:"r₂",pos:.08,dx:10},...ejes()]};
// ejemplo de los apuntes
const EH = {x:[-7,6], y:[-7,6], alt:"Recinto no acotado del ejemplo",
  rectas:[{a:3,b:2,c:3,s:"<=",nom:"r₁",pos:.1,dx:10},{a:-1,b:1,c:-6,s:">=",nom:"r₂",pos:.92,dx:-8,ta:"end"},{a:2,b:-7,c:37,s:"<=",nom:"r₃",pos:.05,dy:-10}]};
// abonos
const EA = {x:[-1,13], y:[-1,11], alt:"Región de los abonos",
  rectas:[{a:3,b:1,c:10,s:">=",nom:"N",pos:.06,dx:10},{a:1,b:1,c:6,s:">=",nom:"K",pos:.55,dx:8},{a:1,b:4,c:12,s:">=",nom:"P",pos:.85,dy:-10},...ejes()]};

TEMA.registrar({
  num: 4,
  titulo: "Regiones no acotadas y rectas de nivel",
  videos: [
    {t:"Vídeos en YouTube: Programación lineal con región no acotada", url:"https://www.youtube.com/results?search_query=programacion+lineal+region+no+acotada+rectas+de+nivel"}
  ],

  laminas: [
    { portada:true, cuerpo:[
      {nota:[{lista:[
        "Qué pasa cuando la región factible <b>no está acotada</b>.",
        "Las <b>rectas de nivel</b> $ax + by = k$ para ver dónde está el óptimo.",
        "Cómo saber si <b>existe</b> el máximo o el mínimo.",
        "Un problema real: la mezcla de abonos más barata."
      ]}], etq:"🎯 En este apartado vas a aprender"}
    ]},

    { titulo:"Regiones no acotadas en la PAU", cuerpo:[
      {nota:["Desde el curso 2018/2019 la PAU propone problemas en los que la región factible <b>no es acotada</b>. Eso sí, aseguran que se alcanza el óptimo que piden."]},
      {aviso:["En una región <b>no acotada</b> el teorema ya no garantiza nada: puede que <b>no haya máximo</b>, que <b>no haya mínimo</b>, o que no haya ninguno de los dos."]},
      {prop:["Si existe, el óptimo sigue estando en un <b>vértice</b> (o en un borde). Lo que hay que <b>comprobar</b> es que existe."], etq:"Lo importante"}
    ]},

    { titulo:"Las rectas de nivel", cuerpo:[
      {html: duo(
        `<div class="b-def"><span class="etq">Rectas de nivel</span><p>Para $F(x, y) = ax + by$, las rectas $ax + by = k$ son todas <b>paralelas</b>. Al desplazarlas en un sentido, $k$ (el valor de $F$) <b>aumenta</b>.</p></div>` +
        P([[1,"Región $x + 2y \\ge 8$, $3x + y \\ge 9$, $x, y \\ge 0$, y $F(x, y) = x + y$."],
           [2,"$x + y = 3$: no toca la región."],
           [3,"$x + y = 5$: la toca <b>por primera vez</b> en $(2, 3)$ → <b>mínimo</b>."],
           [4,"$x + y = 8,\\ 12, \\dots$ siguen cortando la región: $F$ crece sin límite → <b>no hay máximo</b>."]]),
        F(Object.assign({}, EN, {region:1, pts:[{x:0,y:9,t:"(0, 9)",o:1,lado:"e"},{x:2,y:3,t:"(2, 3)",o:1,lado:"sw"},{x:8,y:0,t:"(8, 0)",o:1,lado:"n"}],
          nivel:[{a:1,b:1,k:3,et:"F = 3",o:2,pos:.5,dx:-8,dy:16,col:"#9ca3af"},{a:1,b:1,k:5,et:"F = 5",o:3,pos:.62,dx:-4,dy:18,col:"#be123c"},{a:1,b:1,k:8,o:4,col:"#6b7280"},{a:1,b:1,k:12,et:"F = 12",o:4,pos:.3,dx:8,col:"#6b7280"}]}))
      )}
    ]},

    { titulo:"Cómo saber si hay óptimo", cuerpo:[
      {prop:[{lista:[
        "<b>1.</b> Región, vértices y $F$ en cada vértice (como siempre).",
        "<b>2.</b> Tomo un <b>punto de la región lejos de los vértices</b> (en la dirección en que la región no se cierra) y calculo $F$.",
        "<b>3.</b> Si $F$ ahí es <b>mayor</b> que en todos los vértices → <b>no hay máximo</b>. Si es <b>menor</b> → <b>no hay mínimo</b>."
      ]}], etq:"Método"},
      {ej:{enun:"Región anterior, $F(x, y) = x + y$:", pasos:[R`Vértices: $F(0, 9) = 9$, $\;F(2, 3) = 5$, $\;F(8, 0) = 8$`, R`Punto lejano $(20, 20)$ (cumple todo): $F = 40$, mayor que todos`],
        res:"Mínimo 5 en $(2, 3)$; no hay máximo"}},
      {truco:["Si en un problema de <b>costes</b> (todo positivo) piden el <b>mínimo</b> en una región abierta hacia arriba, el mínimo existe: cuanto más fabricas, más gastas."]}
    ]},

    { titulo:"Ejemplo de los apuntes: la región", cuerpo:[
      {html: duo(
        "Consideremos el recinto" + TEMA.tx(sis(["2y \\le -3x + 3","y \\ge x - 6","2x \\le 7y + 37"])) + "<b>a)</b> Represéntalo y calcula sus vértices." +
        P([[1,"$r_1$: $3x + 2y = 3$ → $(1, 0)$, $(-1, 3)$. $\\;r_2$: $y = x - 6$ → $(0, -6)$, $(6, 0)$. $\\;r_3$: $2x - 7y = 37$ → $(1, -5)$, $(-6, -7)$."],
           [2,"Prueba con $O$: $0 \\le 3$ ✓, $0 \\ge -6$ ✓, $0 \\le 37$ ✓. La región <b>no está acotada</b>: se abre hacia la izquierda."],
           [3,R`$r_2 \cap r_3$: $2x - 7(x - 6) = 37 \Rightarrow x = 1,\ y = -5$. $\;r_1 \cap r_2$: $3x + 2x - 12 = 3 \Rightarrow x = 3,\ y = -3$`]]),
        F(Object.assign({}, EH, {rectas:EH.rectas.map(r=>Object.assign({o:1},r)), region:2, pts:[{x:1,y:-5,t:"A(1, −5)",o:3,lado:"se"},{x:3,y:-3,t:"B(3, −3)",o:3,lado:"e"}]}))
      )}
    ]},

    { titulo:"Ejemplo de los apuntes: mínimo de H", cuerpo:[
      {html: duo(
        "<b>b)</b> ¿En qué punto se alcanza el mínimo de $H(x, y) = -3x + 3y + 2$ y cuál es su valor?" +
        tablaF("H = −3x + 3y + 2", [["$A(1, -5)$","$-3 - 15 + 2 = -16$","min"],["$B(3, -3)$","$-9 - 9 + 2 = -16$","min"]]) +
        P([[1,"Sale $-16$ en los dos vértices → todo el segmento $AB$."],
           [2,R`¿Seguro que es el mínimo? $H = 3(y - x) + 2$ y en la región $y \ge x - 6$, o sea $y - x \ge -6$: $\;H \ge 3(-6) + 2 = -16$ ✓`],
           [3,"Punto lejano $(-10, 10)$: $H = 30 + 30 + 2 = 62$. Hacia la izquierda $H$ crece: <b>no hay máximo</b>."]]) +
        res(4,"Mínimo $H = -16$ en todo el segmento de $A(1, -5)$ a $B(3, -3)$"),
        F(Object.assign({}, EH, {region:0, pts:[{x:1,y:-5,t:"A",lado:"se"},{x:3,y:-3,t:"B",lado:"e"}], tramos:[{p:[1,-5],q:[3,-3],o:1,col:"#be123c"}]}))
      )}
    ]},

    { titulo:"Problema de los abonos: plantear", cuerpo:[
      {ej:{etq:"🌱 Ejemplo de los apuntes", enun:"Un agricultor mezcla dos abonos, A y B. Cada kg de A aporta 3 unidades de nitrógeno, 1 de potasio y 1 de fósforo; cada kg de B, 1 de nitrógeno, 1 de potasio y 4 de fósforo. El terreno necesita <b>al menos</b> 10 de nitrógeno, 6 de potasio y 12 de fósforo. A cuesta 5 €/kg y B, 2 €/kg. ¿Cuántos kg de cada abono para que el coste sea <b>mínimo</b>?"}},
      {html: `<table class="pl-tab"><tr><th></th><th>A ($x$ kg)</th><th>B ($y$ kg)</th><th>Condición</th></tr>
        <tr><td><b>Coste (€)</b></td><td>5</td><td>2</td><td>MINIMIZAR</td></tr><tr><td>Nitrógeno</td><td>3</td><td>1</td><td>al menos 10</td></tr>
        <tr><td>Potasio</td><td>1</td><td>1</td><td>al menos 6</td></tr><tr><td>Fósforo</td><td>1</td><td>4</td><td>al menos 12</td></tr></table>`},
      {formula:R`C(x, y) = 5x + 2y \to \text{MÍN} \qquad \left\{\begin{array}{l}3x + y \ge 10\\ x + y \ge 6\\ x + 4y \ge 12\\ x \ge 0,\ y \ge 0\end{array}\right.`}
    ]},

    { titulo:"Problema de los abonos: resolver", cuerpo:[
      {html: duo(
        P([[1,"Región <b>no acotada</b> (abierta hacia arriba y a la derecha)."],
           [2,R`Vértices: $(0, 10)$; $\;3x + y = 10,\ x + y = 6 \to (2, 4)$; $\;x + y = 6,\ x + 4y = 12 \to (4, 2)$; $\;(12, 0)$`],
           [3,"$C$ en los vértices: $20$, $\\;10 + 8 = 18$, $\\;20 + 4 = 24$, $\\;60$."],
           [4,"Es un coste: alejándose de los vértices solo aumenta. El mínimo existe: 18 €."]]) +
        res(5,"Mezclar <b>2 kg de A y 4 kg de B</b>: coste mínimo de <b>18 €</b>"),
        F(Object.assign({}, EA, {region:1, pts:[{x:0,y:10,t:"(0, 10)",o:2,lado:"e"},{x:2,y:4,t:"(2, 4)",o:2,lado:"sw"},{x:4,y:2,t:"(4, 2)",o:2,lado:"sw"},{x:12,y:0,t:"(12, 0)",o:2,lado:"n"}],
          nivel:[{a:5,b:2,k:18,et:"C = 18",o:4,pos:.05,dx:8,col:"#be123c"}]}))
      )}
    ]},

    { titulo:"Resumen", cuerpo:[
      {resumen:[{lista:[
        "Región <b>acotada</b>: siempre hay máximo y mínimo.",
        "Región <b>no acotada</b>: puede faltar el máximo, el mínimo o los dos. Si existen, están en los vértices.",
        "Para comprobarlo: <b>rectas de nivel</b> o un <b>punto lejano</b> de la región.",
        "Mismo valor en dos vértices → todo el segmento (también aquí)."
      ]}]},
      {comp:{q:"Región no acotada; $F$ vale 4 y 9 en los vértices y 30 en un punto lejano de la región. ¿Tiene máximo?", opciones:["Sí, 9","Sí, 30","No"], ok:2, explic:"En un punto vale más que en todos los vértices: crece sin límite, no hay máximo."}}
    ]}
  ],

  clase: [
    { nivel:"Aplicación", min:6,
      enun:"Región $x + 2y \\ge 8,\\ 3x + y \\ge 9,\\ x, y \\ge 0$. Halla, si existen, el máximo y el mínimo de $F(x, y) = x + y$.",
      pasos:[R`Vértices: $(0, 9)$, $(2, 3)$, $(8, 0)$ → $F$: 9, 5, 8`, R`Punto lejano $(20, 20)$: $F = 40$ → no hay máximo`,
             F(Object.assign({}, EN, {W:420,H:380,ancho:14,region:0,pts:[{x:0,y:9,t:"(0, 9)",lado:"e"},{x:2,y:3,t:"(2, 3)",lado:"sw"},{x:8,y:0,t:"(8, 0)",lado:"n"}],nivel:[{a:1,b:1,k:5,col:"#be123c",et:"F = 5",pos:.15,dx:8}]}))],
      res:"Mínimo 5 en $(2, 3)$; no hay máximo" },
    { nivel:"Aplicación", min:6,
      enun:"Región $2x + y \\ge 6,\\ x + y \\ge 4,\\ x, y \\ge 0$. Halla el mínimo de $F(x, y) = 3x + 4y$.",
      pasos:[R`Vértices: $(0, 6)$; $\;2x + y = 6,\ x + y = 4 \to (2, 2)$; $\;(4, 0)$`, tablaF("F = 3x + 4y", [["$(0, 6)$","$24$"],["$(2, 2)$","$14$"],["$(4, 0)$","$12$","min"]]),
             "Es abierta hacia arriba con coeficientes positivos: el mínimo existe."],
      res:"Mínimo 12 en $(4, 0)$" },
    { nivel:"Práctica", min:7,
      enun:"Calcula, si existen, el máximo y el mínimo de $F(x, y) = y - x$ en la región $x + y \\ge 3,\\ y \\le 2,\\ x \\ge 0,\\ y \\ge 0$.",
      pasos:[R`Vértices: $x + y = 3$ con $y = 0 \to (3, 0)$; con $y = 2 \to (1, 2)$. La región se abre hacia la derecha.`,
             R`$F(3, 0) = -3$, $\;F(1, 2) = 1$. Punto lejano $(50, 1)$: $F = -49$ → no hay mínimo.`,
             "Hacia la derecha $x$ crece y $F$ baja: el máximo sí existe.",
             F({x:[-1,8],y:[-1,4],W:440,H:280,ancho:15,rectas:[{a:1,b:1,c:3,s:">=",nom:"x + y = 3",pos:.15,dx:8},{a:0,b:1,c:2,s:"<=",fpos:.8},...ejes()],region:0,pts:[{x:3,y:0,t:"(3, 0)",lado:"n"},{x:1,y:2,t:"(1, 2)",lado:"nw"}]})],
      res:"Máximo 1 en $(1, 2)$; no hay mínimo" },
    { nivel:"Práctica", min:8,
      enun:"Una tienda online anuncia en radio ($x$ anuncios) y TV ($y$). Quiere $2x + y \\ge 8$ (clientes de electrónica), $2x + 5y \\ge 5$ (moda), $y \\le 2x$, $x, y \\ge 0$. Cada anuncio cuesta 5000 € en radio y 12 000 € en TV. ¿Cuántos de cada para que el coste sea mínimo?",
      pasos:[R`$C = 5000x + 12\,000y$ → MÍNIMO`, R`Vértices: $y = 2x$ con $2x + y = 8 \to (2, 4)$; $\;2x + y = 8$ con $y = 0 \to (4, 0)$`,
             R`$2x + 5y \ge 5$ no limita: si $2x + y \ge 8$ e $y \ge 0$, ya se cumple.`,
             R`$C(2, 4) = 10\,000 + 48\,000 = 58\,000$ · $\;C(4, 0) = 20\,000$`],
      res:"4 anuncios en radio y ninguno en TV: <b>20 000 €</b>" },
    { nivel:"Problema", min:5,
      enun:"En una región no acotada, $F$ vale 6 y 10 en sus dos vértices, y en el punto $(50, 50)$ de la región vale 2. ¿Tiene mínimo? Razónalo.",
      pasos:["Si existiera, el mínimo estaría en un vértice y valdría 6.", "Pero en $(50, 50)$ vale 2 < 6: hay valores más pequeños."],
      res:"No tiene mínimo" },
    { nivel:"Reto", min:7,
      enun:"Recinto $2y \\le -3x + 3,\\ y \\ge x - 6,\\ 2x \\le 7y + 37$ (vértices $A(1, -5)$, $B(3, -3)$). ¿Tiene máximo $G(x, y) = x - y$? ¿Y mínimo?",
      pasos:[R`$G(A) = 6$, $\;G(B) = 6$`, R`$G = x - y$ y en la región $y \ge x - 6$ → $x - y \le 6$: <b>máximo 6</b> en todo el segmento $AB$.`,
             R`Punto lejano $(-10, 10)$: $G = -20$ → no hay mínimo.`],
      res:"Máximo 6 en el segmento $AB$; no hay mínimo" }
  ],

  casa: [
    { nivel:"Básico", enun:"Región $x + y \\ge 5,\\ x + 3y \\ge 9,\\ x, y \\ge 0$. Halla el mínimo de $F(x, y) = 2x + 3y$.",
      pasos:[R`Vértices: $(0, 5)$; $\;x + y = 5,\ x + 3y = 9 \to (3, 2)$; $\;(9, 0)$`, tablaF("F = 2x + 3y", [["$(0, 5)$","$15$"],["$(3, 2)$","$12$","min"],["$(9, 0)$","$18$"]])],
      res:"Mínimo 12 en $(3, 2)$" },
    { nivel:"Básico", enun:"¿Tiene máximo $F(x, y) = 2x + 3y$ en la región del ejercicio anterior? Razónalo.",
      pasos:["Punto lejano $(20, 20)$ (cumple todo): $F = 100$, mayor que en los vértices."],
      res:"No hay máximo" },
    { nivel:"Consolidación", enun:"Región $x \\ge 2,\\ y \\ge 1,\\ x - y \\le 3$. Mínimo y máximo (si existen) de $F(x, y) = x + 2y$.",
      pasos:[R`Vértices: $(2, 1)$ y $x - y = 3$ con $y = 1 \to (4, 1)$`, R`$F(2, 1) = 4$, $\;F(4, 1) = 6$. Punto lejano $(10, 20)$: $F = 50$`],
      res:"Mínimo 4 en $(2, 1)$; no hay máximo" },
    { nivel:"Consolidación", enun:"En el recinto del ejemplo ($2y \\le -3x + 3$, $y \\ge x - 6$, $2x \\le 7y + 37$), ¿tiene máximo $H = -3x + 3y + 2$?",
      pasos:[R`En $(-10, 10)$, que es de la región: $H = 30 + 30 + 2 = 62 > -16$.`, "Hacia la izquierda $H$ crece sin límite."],
      res:"No tiene máximo" },
    { nivel:"Problema", enun:"Un ganadero mezcla dos piensos. Cada kg de P1 tiene 2 unidades de proteína y 1 de grasa; cada kg de P2, 1 de proteína y 2 de grasa. Necesita al menos 8 de proteína y 7 de grasa. P1 cuesta 3 €/kg y P2, 2 €/kg. ¿Qué mezcla es la más barata?",
      pasos:[R`$x$ kg de P1, $y$ kg de P2: $\;C = 3x + 2y$ → MÍN; $\;2x + y \ge 8$, $\;x + 2y \ge 7$, $\;x, y \ge 0$`,
             R`Vértices: $(0, 8)$; $\;2x + y = 8,\ x + 2y = 7 \to (3, 2)$; $\;(7, 0)$`,
             tablaF("C = 3x + 2y", [["$(0, 8)$","$16$"],["$(3, 2)$","$13$","min"],["$(7, 0)$","$21$"]])],
      res:"3 kg de P1 y 2 kg de P2: <b>13 €</b>" },
    { nivel:"Para pensar", enun:"Pon un ejemplo de región no acotada y una función que <b>no</b> tenga ni máximo ni mínimo en ella.",
      pasos:["Por ejemplo, la región $y \\ge 0$ (todo el semiplano superior) y $F(x, y) = x$.", "Hacia la derecha $x$ crece sin límite y hacia la izquierda decrece sin límite."],
      res:"Región $y \\ge 0$ y $F = x$ (hay muchas respuestas)" }
  ]
});
})();

/* PL · Apartado 3: el recinto R de los apuntes de la profesora y las preguntas tipo PAU. */
(function(){
const R = String.raw;
TEMA.registrar({
  num: 3,
  titulo: "El recinto R y las preguntas tipo PAU",
  videos: [{t:"Vídeos en YouTube: programación lineal, preguntas de selectividad", url:"https://www.youtube.com/results?search_query=programacion+lineal+selectividad+andalucia+recinto+vertices"}],
  laminas: [
    ...PL.problema({
      etq:"📘 Ejemplo de los apuntes",
      enun:"Sean las inecuaciones $$\\left\\{\\begin{array}{l}y \\le x + 5\\\\ 2x + y \\ge -4\\\\ 4x \\le 10 - y\\\\ y \\ge 0\\end{array}\\right.$$ <b>a)</b> Representa el recinto $R$ y calcula sus vértices. <b>b)</b> Máximo y mínimo de $F(x, y) = x + \\frac{y}{2}$ en $R$. <b>c)</b> ¿Pertenece $P(2, 4)$ a $R$? <b>d)</b> ¿Hay puntos de $R$ donde $F$ valga 7? ¿Y $-1{,}5$?",
      F:"F(x, y) = x + y/2",
      ejes:false,
      rectas:[
        {nom:"r_1", nomFig:"r₁", ecu:"y = x + 5", pts:"$(0, 5)$ y $(-3, 2)$", prueba:"$O$: $0 \\le 5$ ✓ → hacia el origen", a:-1,b:1,c:5,s:"<=", pos:.92,dx:-10,ta:"end"},
        {nom:"r_2", nomFig:"r₂", ecu:"2x + y = -4", pts:"$(-2, 0)$ y $(-3, 2)$", prueba:"$O$: $0 \\ge -4$ ✓ → hacia el origen", a:2,b:1,c:-4,s:">=", pos:.08,dx:10},
        {nom:"r_3", nomFig:"r₃", ecu:"4x + y = 10", pts:"$\\left(\\tfrac52, 0\\right)$ y $(1, 6)$", prueba:"$O$: $0 \\le 10$ ✓ → hacia el origen", a:4,b:1,c:10,s:"<=", pos:.12,dx:8},
        {nom:"r_4", nomFig:"", ecu:"y = 0", pts:"el eje $X$", prueba:"$y \\ge 0$ → por encima", a:0,b:1,c:0,s:">=", col:"#94a3b8", flecha:false}
      ],
      fig:{x:[-4,3], y:[-1,7]},
      cierre:"La parte común es el <b>cuadrilátero</b> $ABCD$: el recinto $R$.",
      verts:[
        {n:"A", x:-2, y:0, t:"A(−2, 0)", lado:"s", sis:["2x + y = -4","y = 0"], res:"$2x = -4 \\Rightarrow x = -2$"},
        {n:"B", x:2.5, y:0, t:"B(5/2, 0)", lado:"s", sis:["4x + y = 10","y = 0"], res:"$4x = 10 \\Rightarrow x = \\tfrac52$"},
        {n:"C", x:1, y:6, t:"C(1, 6)", lado:"e", sis:["y = x + 5","4x + y = 10"], res:"$4x + x + 5 = 10 \\Rightarrow x = 1,\\ y = 6$"},
        {n:"D", x:-3, y:2, t:"D(−3, 2)", lado:"w", sis:["y = x + 5","2x + y = -4"], res:"$2x + x + 5 = -4 \\Rightarrow x = -3,\\ y = 2$"}
      ],
      valores:[["$A(-2, 0)$","$-2$","min"],["$B\\left(\\tfrac52, 0\\right)$","$\\tfrac52 = 2{,}5$"],["$C(1, 6)$","$1 + 3 = 4$","max"],["$D(-3, 2)$","$-3 + 1 = -2$","min"]],
      tramos:[{p:[-2,0],q:[-3,2],col:"#be123c"}],
      p5:[[1,"Máximo: 4, solo en $C$ (solución única)."],[2,"Mínimo: $-2$ en $A$ y en $D$ → en todo el segmento $AD$."]],
      respuesta:"Máximo $F = 4$ en $C(1, 6)$. Mínimo $F = -2$ en todo el segmento de $A(-2, 0)$ a $D(-3, 2)$.",
      extra:[
        { titulo:"c) ¿Pertenece P(2, 4) al recinto R?", cuerpo:[
          {prop:["Un punto pertenece a la región si cumple <b>todas</b> las restricciones. Basta con que falle una para que no pertenezca."], etq:"Cómo se hace"},
          {ej:{enun:"Sustituyo $P(2, 4)$ en cada inecuación:", pasos:[R`$4 \le 2 + 5 = 7$ ✓`, R`$2 \cdot 2 + 4 = 8 \ge -4$ ✓`, R`$4 \cdot 2 = 8 \le 10 - 4 = 6$ ✗`], res:"$P$ <b>no</b> pertenece a $R$"}}
        ]},
        { titulo:"d) ¿Puede valer F 7? ¿Y −1,5?", cuerpo:[
          {prop:["En una región como $R$, $F$ toma <b>todos los valores</b> entre el mínimo y el máximo."], etq:"La idea"},
          {ej:{enun:"En $R$ el mínimo es $-2$ y el máximo es $4$.", pasos:["$7 > 4$: <b>no</b> hay ningún punto de $R$ con $F = 7$.", "$-2 \\le -1{,}5 \\le 4$: <b>sí</b> hay puntos de $R$ con $F = -1{,}5$."], res:"7 no; −1,5 sí"}}
        ]},
        { titulo:"Otra pregunta de la PAU: el parámetro k", cuerpo:[
          {ej:{enun:"La región factible es el polígono de vértices $A(2, -1)$, $B(-1, 2)$, $C(1, 4)$ y $D(5, 0)$. La función $f(x, y) = 2x + 3y + k$ tiene máximo 19. Calcula $k$ y di dónde se alcanzan el máximo y el mínimo.",
            pasos:[R`Sin la $k$: $\;A: 4 - 3 = 1$ · $B: -2 + 6 = 4$ · $C: 2 + 12 = 14$ · $D: 10$`, "El máximo está en $C$.", R`$14 + k = 19 \Rightarrow k = 5$`, R`El mínimo, en $A$: $1 + 5 = 6$`],
            res:"$k = 5$; máximo 19 en $C(1, 4)$; mínimo 6 en $A(2, -1)$"}},
          {truco:["La $k$ suma lo mismo en todos los vértices: <b>no cambia dónde</b> están el máximo y el mínimo, solo su valor."]}
        ]}
      ]
    })
  ]
});
})();

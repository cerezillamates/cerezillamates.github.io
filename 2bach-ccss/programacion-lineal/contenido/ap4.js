/* PL · Apartado 4: región no acotada (ejemplo de los apuntes de la profesora: mínimo de H = −3x + 3y + 2).
   Nota de sus apuntes: desde 2018/2019 la PAU propone regiones no acotadas, asegurando que el óptimo pedido existe. */
(function(){
const R = String.raw;
TEMA.registrar({
  num: 4,
  titulo: "Región no acotada",
  videos: [{t:"Vídeos en YouTube: programación lineal con región no acotada", url:"https://www.youtube.com/results?search_query=programacion+lineal+region+no+acotada"}],
  laminas: [
    ...PL.problema({
      etq:"📘 Ejemplo de los apuntes",
      enun:"Consideremos el recinto $$\\left\\{\\begin{array}{l}2y \\le -3x + 3\\\\ y \\ge x - 6\\\\ 2x \\le 7y + 37\\end{array}\\right.$$ <b>a)</b> Represéntalo y calcula sus vértices. <b>b)</b> ¿En qué punto se alcanza el mínimo de $H(x, y) = -3x + 3y + 2$ y cuál es su valor?",
      F:"H(x, y) = -3x + 3y + 2",
      ejes:false,
      rectas:[
        {nom:"r_1", nomFig:"r₁", ecu:"3x + 2y = 3", pts:"$(1, 0)$ y $(-1, 3)$", prueba:"$O$: $0 \\le 3$ ✓ → hacia el origen", a:3,b:2,c:3,s:"<=", pos:.1,dx:10},
        {nom:"r_2", nomFig:"r₂", ecu:"y = x - 6", pts:"$(0, -6)$ y $(6, 0)$", prueba:"$O$: $0 \\ge -6$ ✓ → hacia el origen", a:-1,b:1,c:-6,s:">=", pos:.92,dx:-8,ta:"end"},
        {nom:"r_3", nomFig:"r₃", ecu:"2x - 7y = 37", pts:"$(1, -5)$ y $(-6, -7)$", prueba:"$O$: $0 \\le 37$ ✓ → hacia el origen", a:2,b:-7,c:37,s:"<=", pos:.05,dy:-10}
      ],
      fig:{x:[-7,6], y:[-7,6]},
      cierre:"La parte común <b>no se cierra</b>: se abre hacia la izquierda.",
      acotada:false,
      p2:"Desde 2018/2019 la PAU propone regiones no acotadas, pero aseguran que el óptimo que piden existe.",
      verts:[
        {n:"A", x:1, y:-5, t:"A(1, −5)", lado:"se", sis:["y = x - 6","2x - 7y = 37"], res:"$2x - 7x + 42 = 37 \\Rightarrow x = 1,\\ y = -5$"},
        {n:"B", x:3, y:-3, t:"B(3, −3)", lado:"e", sis:["3x + 2y = 3","y = x - 6"], res:"$3x + 2x - 12 = 3 \\Rightarrow x = 3,\\ y = -3$"}
      ],
      p3:"$r_1$ y $r_3$ se cortan en $(3{,}8;\\ -4{,}2)$, que no cumple $y \\ge x - 6$: no es un vértice.",
      valores:[["$A(1, -5)$","$-3 - 15 + 2 = -16$","min"],["$B(3, -3)$","$-9 - 9 + 2 = -16$","min"]],
      p4:"¿Es de verdad el mínimo? $H = 3(y - x) + 2$ y en la región $y - x \\ge -6$, así que $H \\ge -16$ ✓. Hacia la izquierda $H$ crece: <b>no hay máximo</b>.",
      tramos:[{p:[1,-5],q:[3,-3],col:"#be123c"}],
      p5:[[1,"Sale $-16$ en los dos vértices → todo el segmento $AB$."]],
      respuesta:"El mínimo de $H$ es <b>$-16$</b> y se alcanza en todo el segmento de $A(1, -5)$ a $B(3, -3)$. No hay máximo.",
      extra:[
        { titulo:"¿Cómo sé si hay óptimo? Las rectas de nivel", cuerpo:[
          {html:`<div class="pl-duo"><div>${PL.pasos([[1,"Región $x + 2y \\ge 8$, $3x + y \\ge 9$, $x, y \\ge 0$ y $F(x, y) = x + y$."],[2,"$x + y = 3$: no toca la región."],[3,"$x + y = 5$: la toca por primera vez en $(2, 3)$ → <b>mínimo</b> 5."],[4,"$x + y = 8,\\ 12, \\dots$ siguen cortándola: $F$ crece sin límite → <b>no hay máximo</b>."]])}</div><div>${PL.fig({x:[-1,10],y:[-1,10],
            rectas:[{a:1,b:2,c:8,s:">=",flecha:false},{a:3,b:1,c:9,s:">=",flecha:false},{a:1,b:0,c:0,s:">=",flecha:false,col:"#94a3b8"},{a:0,b:1,c:0,s:">=",flecha:false,col:"#94a3b8"}],region:1,
            pts:[{x:0,y:9,t:"(0, 9)",lado:"e",o:1},{x:2,y:3,t:"(2, 3)",lado:"sw",o:1},{x:8,y:0,t:"(8, 0)",lado:"n",o:1}],
            nivel:[{a:1,b:1,k:3,et:"F = 3",o:2,pos:.5,dx:-8,dy:16,col:"#9ca3af"},{a:1,b:1,k:5,et:"F = 5",o:3,pos:.62,dx:-4,dy:18,col:"#be123c"},{a:1,b:1,k:8,o:4},{a:1,b:1,k:12,et:"F = 12",o:4,pos:.3,dx:8}]})}</div></div>`},
          {truco:["Otra forma: tomo un punto de la región <b>muy lejos</b> de los vértices. Si $F$ ahí es mayor que en todos los vértices, no hay máximo; si es menor, no hay mínimo."]}
        ]}
      ]
    })
  ]
});
})();

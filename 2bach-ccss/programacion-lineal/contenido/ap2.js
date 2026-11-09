/* PL · Apartado 2: ejemplo 1 de los apuntes de la profesora (recinto acotado sin enunciado). */
(function(){
TEMA.registrar({
  num: 2,
  titulo: "Máximo y mínimo en un recinto acotado",
  videos: [{t:"Vídeos en YouTube: rectas de nivel en programación lineal", url:"https://www.youtube.com/results?search_query=programacion+lineal+rectas+de+nivel"}],
  laminas: [
    ...PL.problema({
      etq:"📘 Ejemplo de los apuntes",
      enun:"Calcula el máximo y el mínimo de la función $F(x, y) = 3x + 2y$ sujeta a las restricciones $$\\left\\{\\begin{array}{l}x + 3y \\ge 3\\\\ y - x \\le 1\\\\ x \\le 2\\\\ y \\ge 0\\end{array}\\right.$$",
      F:"F(x, y) = 3x + 2y",
      ejes:false,
      rectas:[
        {nom:"r_1", nomFig:"r₁", ecu:"x + 3y = 3", ineq:"x + 3y \\ge 3", tab:[[0,1],[3,0]], calc:["x = 0 \\Rightarrow 3y = 3 \\Rightarrow y = 1","y = 0 \\Rightarrow x = 3"], pr:{c:"0 + 3 \\cdot 0 = 0 \\ge 3", ok:false}, semi:"Por encima de $r_1$", a:1,b:3,c:3,s:">=", pos:.02,dx:4,dy:-10},
        {nom:"r_2", nomFig:"r₂", ecu:"y - x = 1", ineq:"y - x \\le 1", tab:[[0,1],[-1,0]], calc:["x = 0 \\Rightarrow y = 1","y = 0 \\Rightarrow -x = 1 \\Rightarrow x = -1"], pr:{c:"0 - 0 = 0 \\le 1", ok:true}, semi:"Por debajo de $r_2$", a:-1,b:1,c:1,s:"<=", pos:.75,dx:-12,ta:"end"},
        {nom:"r_3", nomFig:"x = 2", ecu:"x = 2", ineq:"x \\le 2", tab:[[2,0],[2,3]], calc:["\\text{recta vertical por } (2, 0)"], examen:"Recta vertical: $x \\le 2$ es el semiplano de la <b>izquierda</b>.", semi:"A la izquierda de $x = 2$", a:1,b:0,c:2,s:"<=", pos:.97,dx:8},
        {nom:"r_4", nomFig:"", ecu:"y = 0", ineq:"y \\ge 0", examen:"Es el eje $X$: $y \\ge 0$ es el semiplano de <b>arriba</b>.", semi:"Por encima del eje $X$", a:0,b:1,c:0,s:">=", col:"#94a3b8", flecha:false}
      ],
      fig:{x:[-1,3], y:[-1,4]},
      cierre:"La parte común es el <b>triángulo</b> $ABC$. La restricción $y \\ge 0$ no llega a tocarlo.",
      verts:[
        {n:"A", x:0, y:1, t:"A(0, 1)", lado:"w", sis:["\\mathbf{r_1}: & x + 3y = 3","\\mathbf{r_2}: & y - x = 1"], res:"$y = x + 1 \\Rightarrow 4x + 3 = 3 \\Rightarrow x = 0,\\ y = 1$"},
        {n:"B", x:2, y:1/3, t:"B(2, 1/3)", lado:"se", sis:["\\mathbf{r_1}: & x + 3y = 3","\\mathbf{r_3}: & x = 2"], res:"$3y = 1 \\Rightarrow y = \\tfrac13$"},
        {n:"C", x:2, y:3, t:"C(2, 3)", lado:"e", sis:["\\mathbf{r_2}: & y - x = 1","\\mathbf{r_3}: & x = 2"], res:"$y = 3$"}
      ],
      cortes:["$(3, 0)$ (corte de $r_1$ con el eje $X$): $3 \\le 2$ ✗ → <b>no es vértice</b>.","$(-1, 0)$ (corte de $r_2$ con el eje $X$): $-1 + 0 = -1 \\ge 3$ ✗ → <b>no es vértice</b>."],
      cortesPts:[[3,0,"","n"],[-1,0,"","n"]],
      valores:[["$A(0, 1)$","$0 + 2 = 2$","min"],["$B\\left(2, \\tfrac13\\right)$","$6 + \\tfrac23 = \\tfrac{20}{3} \\approx 6{,}67$"],["$C(2, 3)$","$6 + 6 = 12$","max"]],
      nivel:[{a:3,b:2,k:2,et:"F = 2",pos:.85,dx:8,dy:4,col:"#be123c"},{a:3,b:2,k:12,et:"F = 12",pos:.7,dx:8,col:"#15803d"}],
      respuesta:"Máximo: $F = 12$ en $C(2, 3)$. &nbsp; Mínimo: $F = 2$ en $A(0, 1)$.",
      extra:[
        { titulo:"¿Por qué en los vértices? Las rectas de nivel", cuerpo:[
          {html:`<div class="pl-duo"><div>${PL.pasos([[1,"Las rectas $3x + 2y = k$ son paralelas: cuanto más arriba, mayor es $k$."],[2,"$3x + 2y = 2$ toca la región <b>solo en</b> $A$: es el mínimo."],[3,"$3x + 2y = 6$ la atraviesa."],[4,"$3x + 2y = 12$ es la <b>última</b> que la toca, en $C$: es el máximo."]])}</div><div>${PL.fig({x:[-1,3],y:[-1,4],
            rectas:[{a:1,b:3,c:3,s:">=",flecha:false},{a:-1,b:1,c:1,s:"<=",flecha:false},{a:1,b:0,c:2,s:"<=",flecha:false},{a:0,b:1,c:0,s:">=",flecha:false,col:"#94a3b8"}],region:0,
            pts:[{x:0,y:1,t:"A",lado:"w"},{x:2,y:1/3,t:"B",lado:"se"},{x:2,y:3,t:"C",lado:"e"}],
            nivel:[{a:3,b:2,k:2,et:"F = 2",o:2,pos:.85,dx:8,dy:4,col:"#be123c"},{a:3,b:2,k:6,et:"F = 6",o:3,pos:.55,dx:6},{a:3,b:2,k:12,et:"F = 12",o:4,pos:.7,dx:8,col:"#15803d"}]})}</div></div>`}
        ]}
      ]
    })
  ]
});
})();

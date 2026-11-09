/* PL · Apartado 6: problema de mínimo de los apuntes de la profesora (abonos A y B), región no acotada. */
(function(){
TEMA.registrar({
  num: 6,
  titulo: "Problema de mínimo: los abonos",
  videos: [{t:"Vídeos en YouTube: programación lineal, minimizar el coste", url:"https://www.youtube.com/results?search_query=programacion+lineal+minimizar+coste+mezcla+resuelto"}],
  laminas: [
    ...PL.problema({
      etq:"🌱 Ejemplo de los apuntes",
      enun:"Un agricultor mezcla dos abonos, A y B. Cada kg de A aporta 3 unidades de nitrógeno, 1 de potasio y 1 de fósforo; cada kg de B, 1 de nitrógeno, 1 de potasio y 4 de fósforo. El terreno necesita <b>al menos</b> 10 unidades de nitrógeno, 6 de potasio y 12 de fósforo. A cuesta 5 €/kg y B, 2 €/kg. ¿Cuántos kg de cada abono debe usar para que el coste sea <b>mínimo</b>?",
      datos:{cab:["","A ($x$ kg)","B ($y$ kg)","Condición"], filas:[["Coste (€)",5,2,"MINIMIZAR"],["Nitrógeno",3,1,"al menos 10"],["Potasio",1,1,"al menos 6"],["Fósforo",1,4,"al menos 12"]]},
      incog:"$x$ = kg de abono A; $\\;y$ = kg de abono B.",
      F:"C(x, y) = 5x + 2y", obj:"MÍN",
      traduce:"«al menos» → $\\ge$",
      sis:["3x + y \\ge 10 \\quad \\text{(nitrógeno)}","x + y \\ge 6 \\quad \\text{(potasio)}","x + 4y \\ge 12 \\quad \\text{(fósforo)}","x \\ge 0,\\ y \\ge 0"],
      rectas:[
        {nom:"r_1", nomFig:"r₁", ecu:"3x + y = 10", ineq:"3x + y \\ge 10", tab:[[0,10],["3,33",0]], calc:["x = 0 \\Rightarrow y = 10","y = 0 \\Rightarrow 3x = 10 \\Rightarrow x = \\tfrac{10}{3} \\approx 3{,}33"], pr:{c:"3 \\cdot 0 + 0 = 0 \\ge 10", ok:false}, semi:"Por encima de $r_1$", a:3,b:1,c:10,s:">=", pos:.06,dx:10},
        {nom:"r_2", nomFig:"r₂", ecu:"x + y = 6", ineq:"x + y \\ge 6", tab:[[0,6],[6,0]], calc:["x = 0 \\Rightarrow y = 6","y = 0 \\Rightarrow x = 6"], pr:{c:"0 + 0 = 0 \\ge 6", ok:false}, semi:"Por encima de $r_2$", a:1,b:1,c:6,s:">=", pos:.55,dx:8},
        {nom:"r_3", nomFig:"r₃", ecu:"x + 4y = 12", ineq:"x + 4y \\ge 12", tab:[[0,3],[12,0]], calc:["x = 0 \\Rightarrow 4y = 12 \\Rightarrow y = 3","y = 0 \\Rightarrow x = 12"], pr:{c:"0 + 4 \\cdot 0 = 0 \\ge 12", ok:false}, semi:"Por encima de $r_3$", a:1,b:4,c:12,s:">=", pos:.85,dy:-10}
      ],
      fig:{x:[-1,13], y:[-1,11]},
      cierre:"Con $x, y \\ge 0$ la parte común <b>no se cierra</b>: está abierta hacia arriba y a la derecha.",
      acotada:false,
      p2:"Pero es un <b>coste</b> con coeficientes positivos: cuanto más abono, más caro. El mínimo existe y está en un vértice.",
      verts:[
        {n:"A", x:0, y:10, t:"A(0, 10)", lado:"e", sis:["\\mathbf{r_1}: & 3x + y = 10","\\text{eje } Y: & x = 0"], res:"$y = 10$"},
        {n:"B", x:2, y:4, t:"B(2, 4)", lado:"sw", sis:["\\mathbf{r_1}: & 3x + y = 10","\\mathbf{r_2}: & x + y = 6"], res:"Restando: $2x = 4 \\Rightarrow x = 2,\\ y = 4$"},
        {n:"C", x:4, y:2, t:"C(4, 2)", lado:"sw", sis:["\\mathbf{r_2}: & x + y = 6","\\mathbf{r_3}: & x + 4y = 12"], res:"Restando: $3y = 6 \\Rightarrow y = 2,\\ x = 4$"},
        {n:"D", x:12, y:0, t:"D(12, 0)", lado:"n", sis:["\\mathbf{r_3}: & x + 4y = 12","\\text{eje } X: & y = 0"], res:"$x = 12$"}
      ],
      cortes:["$(0, 6)$ y $(0, 3)$: no cumplen $3x + y \\ge 10$ → <b>no son vértices</b>.","$\\left(\\tfrac{10}{3}, 0\\right)$ y $(6, 0)$: no cumplen $x + 4y \\ge 12$ → <b>no son vértices</b>."],
      cortesPts:[[0,6,"","e"],[0,3,"","e"],[3.333,0,"","n"],[6,0,"","n"]],
      valores:[["$A(0, 10)$","$20$"],["$B(2, 4)$","$10 + 8 = 18$","min"],["$C(4, 2)$","$20 + 4 = 24$"],["$D(12, 0)$","$60$"]],
      nivel:[{a:5,b:2,k:18,et:"C = 18",pos:.05,dx:8,col:"#be123c"}],
      p4:"La recta $5x + 2y = 18$ toca la región solo en $B$: el resto de la región queda por encima (más caro).",
      respuesta:"Hay que mezclar <b>2 kg de abono A y 4 kg de abono B</b>: el coste mínimo es de <b>18 €</b>."
    })
  ]
});
})();

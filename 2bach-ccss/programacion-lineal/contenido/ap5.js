/* PL · Apartado 5: problema de máximo de los apuntes de la profesora (la joyería). */
(function(){
TEMA.registrar({
  num: 5,
  titulo: "Problema de máximo: la joyería",
  videos: [{t:"Vídeos en YouTube: problemas de programación lineal resueltos", url:"https://www.youtube.com/results?search_query=problema+programacion+lineal+maximizar+beneficio+resuelto"}],
  laminas: [
    ...PL.problema({
      etq:"💎 Ejemplo de los apuntes",
      enun:"Una joyería elabora dos tipos de collares con perlas blancas, grises y negras. Un collar <b>A</b> lleva 20 blancas, 20 grises y 30 negras; un collar <b>B</b>, 10 blancas, 20 grises y 60 negras. Dispone de un <b>máximo</b> de 900 perlas blancas y 1400 grises, y tiene que usar <b>al menos</b> 1800 negras. Cada collar A da 600 € de beneficio y cada B, 500 €. <b>a)</b> ¿Qué producción da el máximo beneficio? ¿A cuánto asciende? <b>b)</b> ¿Es posible fabricar 40 collares A y 20 B?",
      datos:{cab:["","A ($x$)","B ($y$)","Condición"], filas:[["Beneficio (€)",600,500,"MAXIMIZAR"],["Perlas blancas",20,10,"máximo 900"],["Perlas grises",20,20,"máximo 1400"],["Perlas negras",30,60,"al menos 1800"]]},
      incog:"$x$ = n.º de collares del tipo A; $\\;y$ = n.º de collares del tipo B.",
      F:"B(x, y) = 600x + 500y", obj:"MÁX",
      traduce:"simplifico dividiendo: $20x + 10y \\le 900 \\to 2x + y \\le 90$; $\\;20x + 20y \\le 1400 \\to x + y \\le 70$; $\\;30x + 60y \\ge 1800 \\to x + 2y \\ge 60$",
      sis:["2x + y \\le 90 \\quad \\text{(blancas)}","x + y \\le 70 \\quad \\text{(grises)}","x + 2y \\ge 60 \\quad \\text{(negras)}","x \\ge 0,\\ y \\ge 0"],
      rectas:[
        {nom:"r_1", nomFig:"r₁", ecu:"2x + y = 90", ineq:"2x + y \\le 90", tab:[[0,90],[45,0]], calc:["x = 0 \\Rightarrow y = 90","y = 0 \\Rightarrow 2x = 90 \\Rightarrow x = 45"], pr:{c:"2 \\cdot 0 + 0 = 0 \\le 90", ok:true}, semi:"Por debajo de $r_1$", a:2,b:1,c:90,s:"<=", pos:.12,dx:10},
        {nom:"r_2", nomFig:"r₂", ecu:"x + y = 70", ineq:"x + y \\le 70", tab:[[0,70],[70,0]], calc:["x = 0 \\Rightarrow y = 70","y = 0 \\Rightarrow x = 70"], pr:{c:"0 + 0 = 0 \\le 70", ok:true}, semi:"Por debajo de $r_2$", a:1,b:1,c:70,s:"<=", pos:.93,dx:-6,dy:-12,ta:"end"},
        {nom:"r_3", nomFig:"r₃", ecu:"x + 2y = 60", ineq:"x + 2y \\ge 60", tab:[[0,30],[60,0]], calc:["x = 0 \\Rightarrow 2y = 60 \\Rightarrow y = 30","y = 0 \\Rightarrow x = 60"], pr:{c:"0 + 2 \\cdot 0 = 0 \\ge 60", ok:false}, semi:"Por encima de $r_3$", a:1,b:2,c:60,s:">=", pos:.15,dx:6,dy:22}
      ],
      fig:{x:[-4,74], y:[-4,94], paso:10, etq:20},
      cierre:"Con $x, y \\ge 0$ la parte común es el <b>cuadrilátero</b> $ABCD$.",
      verts:[
        {n:"A", x:0, y:30, t:"A(0, 30)", lado:"ne", sis:["\\mathbf{r_3}: & x + 2y = 60","\\text{eje } Y: & x = 0"], res:"$2y = 60 \\Rightarrow y = 30$"},
        {n:"B", x:40, y:10, t:"B(40, 10)", lado:"ne", sis:["\\mathbf{r_1}: & 2x + y = 90","\\mathbf{r_3}: & x + 2y = 60"], res:"$y = 90 - 2x \\Rightarrow x + 180 - 4x = 60 \\Rightarrow x = 40,\\ y = 10$"},
        {n:"C", x:20, y:50, t:"C(20, 50)", lado:"e", sis:["\\mathbf{r_1}: & 2x + y = 90","\\mathbf{r_2}: & x + y = 70"], res:"Restando: $x = 20$; $\;y = 50$"},
        {n:"D", x:0, y:70, t:"D(0, 70)", lado:"ne", sis:["\\mathbf{r_2}: & x + y = 70","\\text{eje } Y: & x = 0"], res:"$y = 70$"}
      ],
      cortes:["$(45, 0)$: $45 + 2 \\cdot 0 = 45 \\ge 60$ ✗ → <b>no es vértice</b>.","$(60, 0)$: $2 \\cdot 60 = 120 \\le 90$ ✗ → <b>no es vértice</b>.","$(0, 90)$: $0 + 90 = 90 \\le 70$ ✗ → <b>no es vértice</b>."],
      cortesPts:[[45,0,"","n"],[60,0,"","n"],[0,90,"","e"]],
      valores:[["$A(0, 30)$","$15\\,000$"],["$B(40, 10)$","$24\\,000 + 5000 = 29\\,000$"],["$C(20, 50)$","$12\\,000 + 25\\,000 = 37\\,000$","max"],["$D(0, 70)$","$35\\,000$"]],
      nivel:[{a:6,b:5,k:370,et:"B = 37 000",col:"#15803d",pos:.25,dx:8}],
      p5:[[1,"<b>a)</b> El máximo, 37 000 €, está en $C(20, 50)$."],[2,"<b>b)</b> $(40, 20)$ en blancas: $2 \\cdot 40 + 20 = 100 \\le 90$ ✗ → <b>no</b> es posible (harían falta 1000 perlas blancas y solo hay 900)."]],
      respuesta:"a) Hay que fabricar <b>20 collares A y 50 collares B</b>: beneficio máximo de <b>37 000 €</b>. b) No."
    })
  ]
});
})();

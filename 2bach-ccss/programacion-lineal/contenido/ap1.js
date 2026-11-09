/* PL · Apartado 1: el método paso a paso con el ejemplo guía de la página de selectividad
   (Andalucía, Modelo 2026 nº 38: pañuelos y corbatas). */
(function(){
TEMA.registrar({
  num: 1,
  titulo: "El método paso a paso: pañuelos y corbatas",
  videos: [{t:"Vídeos en YouTube: problema de programación lineal resuelto", url:"https://www.youtube.com/results?search_query=programacion+lineal+2+bachillerato+ccss+problema+resuelto+paso+a+paso"}],
  laminas: [
    { portada:true, cuerpo:[
      {nota:["Resolvemos un problema de la PAU <b>como en el examen</b>, con un paso en cada pantalla:"], etq:"🎯 El método"},
      {html:`<table class="pl-tab"><tr><th>Paso</th><th>Qué hago</th></tr>
        <tr><td>0</td><td style="text-align:left">Plantear: tabla de datos, incógnitas, función objetivo y restricciones</td></tr>
        <tr><td>1</td><td style="text-align:left">Representar la región factible (rectas, semiplanos y región)</td></tr>
        <tr><td>2</td><td style="text-align:left">¿La región es acotada o no acotada?</td></tr>
        <tr><td>3</td><td style="text-align:left">Calcular los vértices</td></tr>
        <tr><td>4</td><td style="text-align:left">Valor de la función objetivo en cada vértice</td></tr>
        <tr><td>5</td><td style="text-align:left">Responder: cuánto vale, dónde se alcanza y qué significa</td></tr></table>`}
    ]},
    ...PL.problema({
      etq:"🧵 Andalucía · Modelo 2026",
      enun:"Un taller confecciona pañuelos y corbatas. Dispone <b>como máximo</b> de 60 horas semanales. Cada pañuelo necesita 2 h y da 4 € de beneficio; cada corbata, 3 h y 6 €. El número de corbatas más el doble del de pañuelos debe ser, <b>como mínimo</b>, 28. ¿Cuántas unidades de cada prenda hay que confeccionar para obtener el <b>máximo beneficio</b>?",
      datos:{cab:["","Pañuelos ($x$)","Corbatas ($y$)","Condición"], filas:[["Beneficio (€)",4,6,"MAXIMIZAR"],["Horas",2,3,"como máximo 60"],["Compromiso",2,1,"como mínimo 28"]]},
      incog:"$x$ = n.º de pañuelos a la semana; $\\;y$ = n.º de corbatas a la semana.",
      F:"F(x, y) = 4x + 6y", obj:"MÁX",
      traduce:"«como máximo» → $\\le$ · «como mínimo» → $\\ge$ · son cantidades → $x, y \\ge 0$",
      sis:["2x + 3y \\le 60","2x + y \\ge 28","x \\ge 0,\\ y \\ge 0"],
      rectas:[
        {nom:"r_1", nomFig:"r₁", ecu:"2x + 3y = 60", ineq:"2x + 3y \\le 60", tab:[[0,20],[30,0]], calc:["x = 0 \\Rightarrow 3y = 60 \\Rightarrow y = 20","y = 0 \\Rightarrow 2x = 60 \\Rightarrow x = 30"], pr:{c:"2 \\cdot 0 + 3 \\cdot 0 = 0 \\le 60", ok:true}, semi:"Por debajo de $r_1$", a:2,b:3,c:60,s:"<=", pos:.85,dx:-6,dy:-14,ta:"end"},
        {nom:"r_2", nomFig:"r₂", ecu:"2x + y = 28", ineq:"2x + y \\ge 28", tab:[[0,28],[14,0]], calc:["x = 0 \\Rightarrow y = 28","y = 0 \\Rightarrow 2x = 28 \\Rightarrow x = 14"], pr:{c:"2 \\cdot 0 + 0 = 0 \\ge 28", ok:false}, semi:"Por encima de $r_2$", a:2,b:1,c:28,s:">=", pos:.04,dx:10,dy:4}
      ],
      fig:{x:[-2,32], y:[-2,30], paso:2, etq:10},
      notaTabla:"Con la calculadora (Casio ClassWiz): menú → Tabla → escribo la recta despejada, por ejemplo $f(x) = \\dfrac{60 - 2x}{3}$ → rango: inicio, final y paso → ejecutar.",
      cierre:"Con $x \\ge 0$, $y \\ge 0$ la parte común es el <b>triángulo</b> $ABC$: la región factible.",
      verts:[
        {n:"A", x:14, y:0, t:"A(14, 0)", lado:"s", sis:["\\mathbf{r_2}: & 2x + y = 28","\\text{eje } X: & y = 0"], res:"$2x = 28 \\Rightarrow x = 14$"},
        {n:"B", x:30, y:0, t:"B(30, 0)", lado:"s", sis:["\\mathbf{r_1}: & 2x + 3y = 60","\\text{eje } X: & y = 0"], res:"$2x = 60 \\Rightarrow x = 30$"},
        {n:"C", x:6, y:16, t:"C(6, 16)", lado:"ne", sis:["\\mathbf{r_1}: & 2x + 3y = 60","\\mathbf{r_2}: & 2x + y = 28"], res:"Restando: $2y = 32 \\Rightarrow y = 16$; $\;2x + 16 = 28 \\Rightarrow x = 6$"}
      ],
      cortes:["$(0, 20)$: $2 \\cdot 0 + 20 = 20 \\ge 28$ ✗ → fuera: <b>no es vértice</b>.","$(0, 28)$: $3 \\cdot 28 = 84 \\le 60$ ✗ → fuera: <b>no es vértice</b>.","$C(6, 16)$: $12 + 48 = 60 \\le 60$ ✓ y $12 + 16 = 28 \\ge 28$ ✓ → <b>sí es vértice</b>."],
      cortesPts:[[0,20,"(0, 20)","e"],[0,28,"(0, 28)","e"]],
      valores:[["$A(14, 0)$","$4 \\cdot 14 + 0 = 56$"],["$B(30, 0)$","$4 \\cdot 30 + 0 = 120$","max"],["$C(6, 16)$","$24 + 96 = 120$","max"]],
      p4:"Sale <b>120 en dos vértices</b>: $4x + 6y = 2(2x + 3y)$ es paralela a $r_1$.",
      tramos:[{p:[30,0],q:[6,16]}],
      p5:[[1,"$F(B) = F(C) = 120$. La recta $4x + 6y = 120$, dividiendo entre 2, es $2x + 3y = 60$: la misma recta $r_1$. Por eso el máximo está en <b>todo el lado</b> $BC$."],
          [2,"Puntos enteros de $BC$ con la tabla de la calculadora: $f(x) = \\dfrac{60 - 2x}{3}$, inicio 6, final 30, paso 1 → $(6, 16),\\ (9, 14),\\ (12, 12),\\ (15, 10),\\ (18, 8),\\ (21, 6),\\ (24, 4),\\ (27, 2),\\ (30, 0)$."]],
      respuesta:"«El beneficio máximo es de <b>120 €</b> y se alcanza en todos los puntos del segmento $BC$ con coordenadas enteras; por ejemplo, confeccionando <b>6 pañuelos y 16 corbatas</b> a la semana.»",
      extra:[
        { titulo:"📝 Resumen del método", cuerpo:[
          {resumen:[{lista:[
            "<b>0.</b> Tabla de datos → incógnitas (con unidades) → $F$ y si es MÁX o MÍN → restricciones (y $x, y \\ge 0$).",
            "<b>1.</b> Cada recta con su tabla de valores; punto de prueba y flecha; la parte común es la región.",
            "<b>2.</b> ¿Acotada? Sí → hay máximo y mínimo en los vértices. No → hay que comprobar que existe.",
            "<b>3.</b> Vértices: el sistema de las dos rectas que se cortan en cada esquina.",
            "<b>4.</b> $F$ en cada vértice, en una tabla. <b>5.</b> Respuesta: valor, punto y frase con unidades."
          ]}]}
        ]}
      ]
    })
  ]
});
})();

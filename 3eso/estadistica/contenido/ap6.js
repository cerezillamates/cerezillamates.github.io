/* 3.º ESO · Estadística · Apartado 6: Cuartiles y diagrama de caja
   Método de clase (el de la web, la plantilla de Excel y los exámenes): lugar N · 0,25 (Q₁), N · 0,5 (Me) y N · 0,75 (Q₃);
   si sale entero, media de ese dato y el siguiente; si no, se sube al lugar siguiente. */
(function(){
const lugares = `<div class="est-fr">
  <div><b>$Q_1$</b><span>deja por debajo el 25 %</span><i>lugar $N \\cdot 0,25$</i></div>
  <div><b>$Q_2 = Me$</b><span>deja por debajo el 50 %</span><i>lugar $N \\cdot 0,5$</i></div>
  <div><b>$Q_3$</b><span>deja por debajo el 75 %</span><i>lugar $N \\cdot 0,75$</i></div>
  <div><b>¿Sale entero?</b><span>SÍ → media de ese lugar y el siguiente</span><i>NO → subo al lugar siguiente</i></div></div>`;

TEMA.registrar({
  num: 6,
  titulo: "Cuartiles y diagrama de caja",
  videos: [],

  clase: [
    { nivel:"Aplicación", min:6,
      enun:"Notas de 11 alumnos en un examen: 3, 4, 5, 5, 6, 6, 7, 7, 8, 9, 10. Calcula los cuartiles, el rango intercuartílico y dibuja el diagrama de caja.",
      pasos:["Ya están ordenados. $N = 11$.",
             "$Q_1$: $11 \\cdot 0,25 = 2,75$ → no es entero → subo al lugar 3 → $Q_1 = 5$",
             "$Me$: $11 \\cdot 0,5 = 5,5$ → subo al lugar 6 → $Me = 6$",
             "$Q_3$: $11 \\cdot 0,75 = 8,25$ → subo al lugar 9 → $Q_3 = 8$",
             "Rango intercuartílico: $Q_3 - Q_1 = 8 - 5 = 3$",
             EST.caja(3,5,6,8,10,{titulo:"notas"})],
      res:"$Q_1 = 5$, $Me = 6$, $Q_3 = 8$ y rango intercuartílico 3." },
    { nivel:"Aplicación", min:6,
      enun:"Libros leídos el año pasado por 16 alumnos: 0, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8, 10. Calcula los cuartiles, el rango intercuartílico y dibuja el diagrama de caja.",
      pasos:["$N = 16$.",
             "$Q_1$: $16 \\cdot 0,25 = 4$ → entero → media de los lugares 4.º y 5.º: $\\dfrac{2 + 2}{2} = 2$",
             "$Me$: $16 \\cdot 0,5 = 8$ → media de los lugares 8.º y 9.º: $\\dfrac{3 + 4}{2} = 3,5$",
             "$Q_3$: $16 \\cdot 0,75 = 12$ → media de los lugares 12.º y 13.º: $\\dfrac{5 + 6}{2} = 5,5$",
             "Rango intercuartílico: $5,5 - 2 = 3,5$",
             EST.caja(0,2,3.5,5.5,10,{titulo:"libros"})],
      res:"$Q_1 = 2$, $Me = 3,5$, $Q_3 = 5,5$ y rango intercuartílico 3,5." },
    { nivel:"Práctica", min:6,
      enun:"Días a la semana que vienen andando 20 compañeros: 0 (3 alumnos), 1 (2), 2 (4), 3 (3), 4 (2), 5 (6). Calcula los cuartiles con la columna $N_i$ y dibuja la caja.",
      pasos:[EST.tabla(["$x_i$","$n_i$","$N_i$"],[[0,3,3],[1,2,5],[2,4,9],[3,3,12],[4,2,14],[5,6,20]],["Total",20,""]),
             "$Q_1$: $20 \\cdot 0,25 = 5$ → lugares 5.º y 6.º. El 5.º es 1 (lugares 4 y 5) y el 6.º es 2 → $Q_1 = \\dfrac{1 + 2}{2} = 1,5$",
             "$Me$: lugares 10.º y 11.º, los dos son 3 → $Me = 3$",
             "$Q_3$: $20 \\cdot 0,75 = 15$ → lugares 15.º y 16.º, los dos son 5 → $Q_3 = 5$",
             EST.caja(0,1.5,3,5,5,{titulo:"días andando"})],
      res:"$Q_1 = 1,5$, $Me = 3$ y $Q_3 = 5$. La caja es: 0, 1,5, 3, 5, 5." },
    { nivel:"Problema", min:5,
      enun:"Este diagrama de caja resume los minutos de deporte al día de una clase."+EST.caja(0,25,52.5,67.5,120,{titulo:"minutos de deporte"})+"<b>a)</b> ¿Qué porcentaje hace menos de 25 minutos? <b>b)</b> ¿Entre qué valores está el 50 % central? <b>c)</b> ¿Hace la mitad de la clase más de 50 minutos?",
      pasos:["<b>a)</b> Por debajo de $Q_1$ está el 25 %.", "<b>b)</b> Entre $Q_1 = 25$ y $Q_3 = 67,5$ (la caja).", "<b>c)</b> La mediana es 52,5: la mitad hace más de 52,5 minutos, así que sí."],
      res:"a) El 25 %. b) Entre 25 y 67,5 minutos. c) Sí." }
  ],

  casa: [
    { nivel:"Básico", enun:"Minutos de deporte al día de 12 alumnos: 0, 15, 20, 30, 30, 45, 60, 60, 60, 75, 90, 120. Calcula los cuartiles, el rango intercuartílico y dibuja la caja.",
      pasos:["$Q_1$: $12 \\cdot 0,25 = 3$ → lugares 3.º y 4.º: $\\dfrac{20 + 30}{2} = 25$", "$Me$: lugares 6.º y 7.º: $\\dfrac{45 + 60}{2} = 52,5$", "$Q_3$: $12 \\cdot 0,75 = 9$ → lugares 9.º y 10.º: $\\dfrac{60 + 75}{2} = 67,5$", "Rango intercuartílico: $67,5 - 25 = 42,5$", EST.caja(0,25,52.5,67.5,120)],
      res:"$Q_1 = 25$, $Me = 52,5$, $Q_3 = 67,5$ y rango intercuartílico 42,5." },
    { nivel:"Básico", enun:"Edad de 10 jugadores de voleibol: 15, 16, 16, 17, 17, 18, 18, 19, 21, 23. Calcula los cuartiles y el rango intercuartílico.",
      pasos:["$Q_1$: $10 \\cdot 0,25 = 2,5$ → subo al lugar 3 → $Q_1 = 16$", "$Me$: $10 \\cdot 0,5 = 5$ → lugares 5.º y 6.º: $\\dfrac{17 + 18}{2} = 17,5$", "$Q_3$: $10 \\cdot 0,75 = 7,5$ → subo al lugar 8 → $Q_3 = 19$", "Rango intercuartílico: $19 - 16 = 3$", EST.caja(15,16,17.5,19,23)],
      res:"$Q_1 = 16$, $Me = 17,5$, $Q_3 = 19$ y rango intercuartílico 3." },
    { nivel:"Consolidación", enun:"Horas de pantalla al día de 14 alumnos: 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 6, 8. Calcula los cuartiles y dibuja la caja.",
      pasos:["$Q_1$: $14 \\cdot 0,25 = 3,5$ → lugar 4 → $Q_1 = 2$", "$Me$: $14 \\cdot 0,5 = 7$ → lugares 7.º y 8.º: $\\dfrac{3 + 3}{2} = 3$", "$Q_3$: $14 \\cdot 0,75 = 10,5$ → lugar 11 → $Q_3 = 5$", EST.caja(1,2,3,5,8)],
      res:"$Q_1 = 2$, $Me = 3$ y $Q_3 = 5$." },
    { nivel:"Consolidación", enun:"Datos ordenados: 1, 2, 3, 4, 5, 6, 7, 8. Calcula $Q_1$, la mediana y $Q_3$.",
      pasos:["$Q_1$: $8 \\cdot 0,25 = 2$ → lugares 2.º y 3.º: $\\dfrac{2 + 3}{2} = 2,5$", "$Me$: lugares 4.º y 5.º: 4,5", "$Q_3$: $8 \\cdot 0,75 = 6$ → lugares 6.º y 7.º: 6,5"],
      res:"$Q_1 = 2,5$, $Me = 4,5$ y $Q_3 = 6,5$." },
    { nivel:"Problema", enun:"Dos clases hacen el mismo examen. Clase A: mín 2, $Q_1 = 5$, $Me = 6$, $Q_3 = 7$, máx 9. Clase B: mín 1, $Q_1 = 3$, $Me = 6$, $Q_3 = 8$, máx 10. Dibuja las dos cajas. ¿Qué clase tiene las notas más parecidas entre sí?",
      pasos:[EST.caja(2,5,6,7,9,{titulo:"clase A"}), EST.caja(1,3,6,8,10,{titulo:"clase B"}),
             "Rango intercuartílico: A $7 - 5 = 2$ y B $8 - 3 = 5$.", "Las dos tienen la misma mediana, pero la caja de A es mucho más estrecha."],
      res:"La <b>clase A</b>: su 50 % central está más junto." },
    { nivel:"Para pensar", enun:"¿Puede coincidir $Q_3$ con el máximo? Pon un ejemplo.",
      pasos:["Sí: si el valor más alto se repite mucho.", "Ejemplo de los días andando: 0, 1,5, 3, 5, 5. La cuarta parte de arriba vale 5."],
      res:"Sí; entonces el bigote de la derecha no se ve." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">La mediana parte los datos en dos mitades. ¿Y si los parto en cuatro?</p>`}
    ]},
    { titulo:"Los cuartiles", cuerpo:[ {html:lugares}, {nota:["Primero, los datos <b>ordenados</b> de menor a mayor."]} ]},
    { titulo:"N · 0,25 no es entero", cuerpo:[
      {ej:{enun:"Notas de 11 alumnos: 3, 4, 5, 5, 6, 6, 7, 7, 8, 9, 10.",
        pasos:["$Q_1$: $11 \\cdot 0,25 = 2,75$ → subo al lugar 3 → $Q_1 = 5$", "$Me$: $5,5$ → lugar 6 → $Me = 6$", "$Q_3$: $8,25$ → lugar 9 → $Q_3 = 8$"],
        res:"$Q_1 = 5$, $Me = 6$ y $Q_3 = 8$."}}
    ]},
    { titulo:"N · 0,25 es entero", cuerpo:[
      {ej:{enun:"Libros de 16 alumnos: 0, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8, 10.",
        pasos:["$Q_1$: $16 \\cdot 0,25 = 4$ → media de los lugares 4.º y 5.º: 2", "$Me$: 8 → media del 8.º y el 9.º: $\\dfrac{3 + 4}{2} = 3,5$", "$Q_3$: 12 → media del 12.º y el 13.º: $\\dfrac{5 + 6}{2} = 5,5$"],
        res:"$Q_1 = 2$, $Me = 3,5$ y $Q_3 = 5,5$."}}
    ]},
    { titulo:"El diagrama de caja y bigotes", cuerpo:[
      {html:EST.caja(0,2,3.5,5.5,10,{titulo:"libros leídos"})},
      {prop:["Cinco números: <b>mínimo</b>, $Q_1$, $Me$, $Q_3$ y <b>máximo</b>.", "La <b>caja</b> va de $Q_1$ a $Q_3$: ahí está el 50 % central. Los <b>bigotes</b> llegan al mínimo y al máximo."], etq:"Caja"},
      {def:["<b>Rango intercuartílico</b> $= Q_3 - Q_1$: lo ancha que es la caja."], etq:"Rango intercuartílico"}
    ]},
    { titulo:"Leer una caja", cuerpo:[
      {prop:[{lista:["Cada trozo (bigote, media caja, media caja, bigote) tiene el <b>25 %</b> de los datos.", "Un trozo <b>largo</b> no tiene más datos: tiene los datos más <b>separados</b>.", "Caja estrecha: datos parecidos. Caja ancha: datos dispersos."]}], etq:"Interpretar"}
    ]},
    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:["<b>No ordenar los datos</b> antes de buscar los lugares."], etq:"⚠️ Error 1"},
      {aviso:["<b>Dar el lugar en vez del dato</b>: el lugar 3 no es $Q_1 = 3$; $Q_1$ es el dato que está en el lugar 3."], etq:"⚠️ Error 2"},
      {aviso:["<b>Confiar en la calculadora o en CUARTIL.INC</b>: usan otro criterio y a veces dan otro número. En clase usamos el nuestro."], etq:"⚠️ Error 3"}
    ]},
    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{lista:["Lugar: $N \\cdot 0,25$, $N \\cdot 0,5$ y $N \\cdot 0,75$.", "Entero: media de ese dato y el siguiente. No entero: subo al lugar siguiente.", "Caja: mín, $Q_1$, $Me$, $Q_3$, máx. Rango intercuartílico: $Q_3 - Q_1$."]}]},
      {estudio:[
        {comp:{q:"Datos ordenados: 1, 2, 3, 4, 5, 6, 7, 8. $Q_1 =$", sol:2.5, explic:"$8 \\cdot 0,25 = 2$ → media del 2.º y el 3.º: 2,5", pista:"¿El lugar sale entero?"}},
        {comp:{q:"$Q_1 = 4$ y $Q_3 = 11$. Rango intercuartílico =", sol:7, explic:"$11 - 4 = 7$", pista:"$Q_3 - Q_1$"}},
        {comp:{q:"Con 15 datos ordenados, ¿en qué lugar está $Q_3$?", sol:12, explic:"$15 \\cdot 0,75 = 11,25$ → subo al lugar 12", pista:"$N \\cdot 0,75$ y, si no es entero, subo."}}
      ]}
    ]}
  ]
});
})();

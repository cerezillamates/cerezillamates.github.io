/* 3.º ESO · Estadística · Apartado 4: Media, mediana y moda (medidas de centralización)
   Datos sueltos y en tabla; mediana con N impar (lugar (N+1)/2) y N par (media de los dos del centro);
   media ponderada y el dato que falta para una media. */
(function(){
const F = EST.F;
function tm(xs, ns){ // tabla con xᵢ·nᵢ y Nᵢ
  let acc = 0, S = 0; const N = ns.reduce((a,b)=>a+b,0);
  const filas = xs.map((x,i)=>{ acc += ns[i]; S += x*ns[i]; return [x, ns[i], acc, F(x*ns[i])]; });
  return EST.tabla(["$x_i$","$n_i$","$N_i$","$x_i \\cdot n_i$"], filas, ["Total", N, "", F(S)]);
}
const tres = `<div class="est-fr">
  <div><b>⚖ Media $\\bar{x}$</b><span>reparto a partes iguales</span><i>sumo y divido entre $N$</i></div>
  <div><b>🎯 Mediana $Me$</b><span>el del centro</span><i>con los datos ordenados</i></div>
  <div><b>👑 Moda $Mo$</b><span>el que más se repite</span><i>puede haber dos (bimodal)</i></div></div>`;

TEMA.registrar({
  num: 4,
  titulo: "Media, mediana y moda",
  videos: [
    {t:"Media, moda y mediana súper fácil", url:"https://www.youtube.com/watch?v=0DA7Wtz1ddg"},
    {t:"Medidas de tendencia central", url:"https://www.youtube.com/watch?v=dfxCsCZ1c3A"}
  ],

  clase: [
    { nivel:"Aplicación", min:5,
      enun:"Notas de Lucía en los exámenes de este trimestre: 6, 8, 5, 9, 7, 8, 6. Calcula la media, la mediana, la moda y el rango.",
      pasos:["Media: $\\bar{x} = \\dfrac{6 + 8 + 5 + 9 + 7 + 8 + 6}{7} = \\dfrac{49}{7} = 7$",
             "Ordeno: 5, 6, 6, 7, 8, 8, 9. $N = 7$ es impar: la mediana ocupa el lugar $\\dfrac{N + 1}{2} = 4$ → $Me = 7$",
             "Moda: el 6 y el 8 salen 2 veces → es <b>bimodal</b>: $Mo = 6$ y $Mo = 8$",
             "Rango: $9 - 5 = 4$"],
      res:"Media 7, mediana 7, modas 6 y 8, y rango 4." },
    { nivel:"Aplicación", min:5,
      enun:"Edades de los jugadores de un equipo de fútbol sala: 14, 15, 13, 14, 16, 15, 14, 13. Calcula la media, la mediana, la moda y el rango.",
      pasos:["Media: $\\bar{x} = \\dfrac{114}{8} = 14,25$ años",
             "Ordeno: 13, 13, 14, 14, 14, 15, 15, 16. $N = 8$ es par: la mediana es la media de los lugares 4.º y 5.º → $Me = \\dfrac{14 + 14}{2} = 14$",
             "Moda: el 14 sale 3 veces → $Mo = 14$", "Rango: $16 - 13 = 3$"],
      res:"Media 14,25 años, mediana 14, moda 14 y rango 3." },
    { nivel:"Práctica", min:6,
      enun:"Número de calzado de los alumnos de una clase: 36 (3 alumnos), 37 (5), 38 (8), 39 (6), 40 (3). Calcula la media, la mediana y la moda.",
      pasos:[tm([36,37,38,39,40],[3,5,8,6,3]),
             "Media: $\\bar{x} = \\dfrac{\\sum x_i \\cdot n_i}{N} = \\dfrac{951}{25} = 38,04$",
             "Mediana: $N = 25$, lugar $\\dfrac{25 + 1}{2} = 13$. En la columna $N_i$, el 13 cae en el 38 (los lugares 9 al 16) → $Me = 38$",
             "Moda: la $n_i$ más grande (8) → $Mo = 38$"],
      res:"Media 38,04, mediana 38 y moda 38." },
    { nivel:"Práctica", min:4,
      enun:"Ana tiene un 6, un 7, un 5 y un 8 en los cuatro primeros exámenes. ¿Qué nota tiene que sacar en el quinto para que su media sea 7?",
      pasos:["Para una media de 7 con 5 notas, la suma tiene que ser $7 \\cdot 5 = 35$.", "Ya tiene $6 + 7 + 5 + 8 = 26$.", "Le falta: $35 - 26 = 9$"],
      res:"Necesita un <b>9</b>." },
    { nivel:"Problema", min:5,
      enun:"La nota de Matemáticas se calcula así: exámenes 60 %, trabajos 30 % y actitud 10 %. Lucía tiene un 7 en exámenes, un 9 en trabajos y un 10 en actitud. ¿Cuál es su nota?",
      pasos:["Es una <b>media ponderada</b>: cada nota cuenta lo que dice su %. Paso el % a decimal y multiplico.",
             "$0,6 \\cdot 7 + 0,3 \\cdot 9 + 0,1 \\cdot 10 = 4,2 + 2,7 + 1 = 7,9$",
             "Compruebo: los % suman $60 + 30 + 10 = 100$ ✓"],
      res:"Su nota es un <b>7,9</b>." }
  ],

  casa: [
    { nivel:"Básico", enun:"Horas que ha dormido Pablo cada noche de la semana: 8, 7, 9, 6, 8, 7, 8. Calcula la media (con dos decimales), la mediana, la moda y el rango.",
      pasos:["$\\bar{x} = \\dfrac{53}{7} \\approx 7,57$ h", "Ordeno: 6, 7, 7, 8, 8, 8, 9 → lugar 4 → $Me = 8$", "$Mo = 8$ (3 veces)", "Rango: $9 - 6 = 3$"],
      res:"Media 7,57 h, mediana 8, moda 8 y rango 3." },
    { nivel:"Básico", enun:"Puntos de Marta en sus partidos de baloncesto: 12, 8, 15, 10, 8, 14, 9, 12, 8, 14. Calcula la media, la mediana, la moda y el rango.",
      pasos:["$\\bar{x} = \\dfrac{110}{10} = 11$", "Ordeno: 8, 8, 8, 9, 10, 12, 12, 14, 14, 15 → lugares 5.º y 6.º → $Me = \\dfrac{10 + 12}{2} = 11$", "$Mo = 8$", "Rango: $15 - 8 = 7$"],
      res:"Media 11, mediana 11, moda 8 y rango 7." },
    { nivel:"Consolidación", enun:"Veces que van al cine al mes los alumnos de 2.º B: 0 (6 alumnos), 1 (9), 2 (7), 3 (3), 4 (1). Calcula la media, la mediana y la moda.",
      pasos:[tm([0,1,2,3,4],[6,9,7,3,1]), "$\\bar{x} = \\dfrac{36}{26} \\approx 1,38$", "$N = 26$ es par: lugares 13.º y 14.º. Los dos están en el 1 (lugares 7 al 15) → $Me = 1$", "$Mo = 1$"],
      res:"Media 1,38, mediana 1 y moda 1." },
    { nivel:"Consolidación", enun:"Un equipo ha marcado 3, 1, 2 y 2 goles en cuatro partidos. ¿Cuántos goles tiene que marcar en el quinto para que su media sea 2,4?",
      pasos:["Suma necesaria: $2,4 \\cdot 5 = 12$", "Ya tiene $3 + 1 + 2 + 2 = 8$", "Le faltan $12 - 8 = 4$"],
      res:"Tiene que marcar <b>4 goles</b>." },
    { nivel:"Consolidación", enun:"Carmen ha sacado un 7, un 6, un 8 y un 9, que cuentan un 40 %, un 35 %, un 10 % y un 15 % de la nota. ¿Cuál es su nota?",
      pasos:["$0,4 \\cdot 7 + 0,35 \\cdot 6 + 0,1 \\cdot 8 + 0,15 \\cdot 9$", "$= 2,8 + 2,1 + 0,8 + 1,35 = 7,05$"],
      res:"Su nota es un <b>7,05</b>." },
    { nivel:"Problema", enun:"Con el diagrama de barras de los goles del apartado 3 (0 goles: 2 partidos; 1: 5; 2: 6; 3: 4; 4: 3), calcula la media, la mediana y la moda.",
      pasos:[tm([0,1,2,3,4],[2,5,6,4,3]), "$\\bar{x} = \\dfrac{41}{20} = 2,05$ goles", "$N = 20$: lugares 10.º y 11.º, los dos en el 2 → $Me = 2$", "$Mo = 2$"],
      res:"Media 2,05 goles, mediana 2 y moda 2." },
    { nivel:"Para pensar", enun:"En una empresa, 9 empleados cobran 1200 € y el jefe cobra 10 200 €. Calcula la media y la mediana. ¿Cuál representa mejor lo que se cobra?",
      pasos:["Media: $\\dfrac{9 \\cdot 1200 + 10\\,200}{10} = \\dfrac{21\\,000}{10} = 2100$ €", "Mediana: los lugares 5.º y 6.º son 1200 → $Me = 1200$ €", "Un dato muy grande sube mucho la media, pero no la mediana."],
      res:"Representa mejor la <b>mediana</b> (1200 €): casi todos cobran eso." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">Si tuviera que resumir todos los datos en un solo número, ¿cuál elijo?</p>`}
    ]},
    { titulo:"Las medidas de centralización", cuerpo:[ {html:tres} ]},
    { titulo:"La media", cuerpo:[
      {cols:[
        [{formula:"\\bar{x} = \\dfrac{\\text{suma de los datos}}{N}"}],
        [{formula:"\\bar{x} = \\dfrac{\\sum x_i \\cdot n_i}{N}"}]
      ]},
      {ej:{enun:"Notas de Lucía: 6, 8, 5, 9, 7, 8, 6.", pasos:["$\\bar{x} = \\dfrac{49}{7} = 7$"], res:"La media es 7."}},
      {nota:["La media siempre está entre el dato menor y el mayor."]}
    ]},
    { titulo:"La mediana", cuerpo:[
      {prop:["Primero <b>ordeno</b> los datos de menor a mayor."], etq:"Lo primero"},
      {cols:[
        [{ej:{etq:"N impar", enun:"5, 6, 6, 7, 8, 8, 9 ($N = 7$)", pasos:["Lugar $\\dfrac{N + 1}{2} = 4$"], res:"$Me = 7$"}}],
        [{ej:{etq:"N par", enun:"13, 13, 14, 14, 15, 15, 16, 16 ($N = 8$)", pasos:["Los del centro: lugares 4.º y 5.º", "$Me = \\dfrac{14 + 15}{2} = 14,5$"], res:"$Me = 14,5$"}}]
      ]}
    ]},
    { titulo:"La moda", cuerpo:[
      {def:["La <b>moda</b> es el valor que más se repite. Si hay dos, la distribución es <b>bimodal</b>. En un cualitativo, la moda es lo único que se puede calcular de las tres."], etq:"Moda"},
      {ej:{enun:"Medio de transporte: a pie 9, bus 5, coche 4 y bici 2.", pasos:["No se puede sumar «bus» con «bici»: no hay media ni mediana."], res:"$Mo$ = a pie."}}
    ]},
    { titulo:"Con una tabla de frecuencias", cuerpo:[
      {ej:{enun:"Número de calzado: 36 (3), 37 (5), 38 (8), 39 (6), 40 (3).",
        pasos:[tm([36,37,38,39,40],[3,5,8,6,3]), "$\\bar{x} = \\dfrac{951}{25} = 38,04$", "$Me$: lugar 13. Miro la columna $N_i$: el 13 está en el 38."],
        res:"$\\bar{x} = 38,04$, $Me = 38$ y $Mo = 38$."}}
    ]},
    { titulo:"Media ponderada y el dato que falta", cuerpo:[
      {cols:[
        [{ej:{etq:"⚖ Ponderada", enun:"Exámenes 60 %, trabajos 30 %, actitud 10 %. Notas: 7, 9 y 10.", pasos:["$0,6 \\cdot 7 + 0,3 \\cdot 9 + 0,1 \\cdot 10 = 7,9$"], res:"Nota: 7,9"}}],
        [{ej:{etq:"❓ El dato que falta", enun:"6, 7, 5 y 8. ¿Qué nota hace falta para tener de media 7?", pasos:["Suma necesaria: $7 \\cdot 5 = 35$", "Falta: $35 - 26 = 9$"], res:"Un 9"}}]
      ]}
    ]},
    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:["<b>Calcular la mediana sin ordenar</b> los datos."], etq:"⚠️ Error 1"},
      {aviso:["<b>Con tabla, dividir entre el número de filas</b>: se divide entre $N$, el total de datos."], etq:"⚠️ Error 2"},
      {aviso:["<b>Decir que la moda es su frecuencia</b>: si el 38 sale 8 veces, la moda es 38, no 8."], etq:"⚠️ Error 3"}
    ]},
    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{lista:["Media: suma entre $N$ (con tabla, $\\sum x_i \\cdot n_i$ entre $N$).",
        "Mediana: ordeno; $N$ impar, lugar $\\dfrac{N + 1}{2}$; $N$ par, la media de los dos del centro.",
        "Moda: el que más se repite. Rango: mayor menos menor.",
        "Media ponderada: cada dato por su % en decimal, y sumo."]}]},
      {estudio:[
        {comp:{q:"Datos: 4, 6, 8, 10. Media =", sol:7, explic:"$\\dfrac{28}{4} = 7$", pista:"Suma y divide entre 4."}},
        {comp:{q:"Datos: 3, 9, 5, 1, 7. Mediana =", sol:5, explic:"Ordenados: 1, 3, 5, 7, 9 → el del centro es 5.", pista:"¡Ordena primero!"}},
        {comp:{q:"Datos: 2, 4, 6, 10. Mediana =", sol:5, explic:"$\\dfrac{4 + 6}{2} = 5$", pista:"Con $N$ par, la media de los dos del centro."}},
        {comp:{q:"Examen 8 (70 %) y trabajo 6 (30 %). Nota =", sol:7.4, explic:"$0,7 \\cdot 8 + 0,3 \\cdot 6 = 5,6 + 1,8 = 7,4$", pista:"Cada nota por su % en decimal."}}
      ]}
    ]}
  ]
});
})();

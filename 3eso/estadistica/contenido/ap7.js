/* 3.º ESO · Estadística · Apartado 7: Medidas de dispersión
   Rango, varianza σ² = Σxᵢ²·nᵢ/N − x̄², desviación típica σ = √σ² y coeficiente de variación CV = σ/x̄
   (< 30 %: dispersión pequeña). σ de la población: σx en la calculadora, DESVESTP en Excel. */
(function(){
const F = EST.F;
function td(xs, ns, o={}){ // tabla para la varianza
  let S = 0, S2 = 0; const N = ns.reduce((a,b)=>a+b,0);
  const filas = xs.map((x,i)=>{ S += x*ns[i]; S2 += x*x*ns[i]; return (o.int?[o.int[i]]:[]).concat([F(x), ns[i], F(x*ns[i]), F(x*x*ns[i])]); });
  const cab = (o.int?["Intervalo"]:[]).concat(["$x_i$","$n_i$","$x_i \\cdot n_i$","$x_i^2 \\cdot n_i$"]);
  return EST.tabla(cab, filas, (o.int?["Total"]:[]).concat([o.int?"":"Total", N, F(S), F(S2)]));
}
const cuatro = `<div class="est-fr">
  <div><b>Rango</b><span>mayor − menor</span><i>lo que ocupan los datos</i></div>
  <div><b>$\\sigma^2 = \\dfrac{\\sum x_i^2 \\cdot n_i}{N} - \\bar{x}^2$</b><span>varianza</span><i>se escribe sigma al cuadrado</i></div>
  <div><b>$\\sigma = \\sqrt{\\sigma^2}$</b><span>desviación típica</span><i>cuánto se separan de la media</i></div>
  <div><b>$CV = \\dfrac{\\sigma}{\\bar{x}}$</b><span>coeficiente de variación</span><i>menos del 30 %: dispersión pequeña</i></div></div>`;

TEMA.registrar({
  num: 7,
  titulo: "Medidas de dispersión",
  videos: [
    {t:"Varianza y desviación típica", url:"https://www.youtube.com/watch?v=oZRaDwnpXkY"}
  ],

  clase: [
    { nivel:"Aplicación", min:8,
      enun:"Número de hermanos de 20 alumnos: 0 (3 alumnos), 1 (9), 2 (5), 3 (2), 4 (1). Calcula la media, el rango, la varianza, la desviación típica y el coeficiente de variación.",
      pasos:[td([0,1,2,3,4],[3,9,5,2,1]),
             "Media: $\\bar{x} = \\dfrac{29}{20} = 1,45$",
             "Rango: $4 - 0 = 4$",
             "Varianza: $\\sigma^2 = \\dfrac{63}{20} - 1,45^2 = 3,15 - 2,1025 = 1,0475$",
             "Desviación típica: $\\sigma = \\sqrt{1,0475} \\approx 1,02$",
             "$CV = \\dfrac{1,02}{1,45} \\approx 0,70$ → 70 %: más del 30 %, <b>dispersión grande</b>."],
      res:"$\\bar{x} = 1,45$, rango 4, $\\sigma^2 \\approx 1,05$, $\\sigma \\approx 1,02$ y CV ≈ 70 %." },
    { nivel:"Práctica", min:8,
      enun:"Puntos de dos jugadoras de baloncesto en sus últimos 6 partidos. Ana: 12, 14, 15, 16, 13, 14. Bea: 6, 20, 10, 22, 8, 18. <b>a)</b> Calcula la media y la desviación típica de cada una. <b>b)</b> Calcula los coeficientes de variación. <b>c)</b> ¿Quién es más regular?",
      pasos:["Ana: $\\bar{x} = \\dfrac{84}{6} = 14$. $\\sigma^2 = \\dfrac{1186}{6} - 14^2 \\approx 1,67$ → $\\sigma \\approx 1,29$",
             "Bea: $\\bar{x} = \\dfrac{84}{6} = 14$. $\\sigma^2 = \\dfrac{1408}{6} - 14^2 \\approx 38,67$ → $\\sigma \\approx 6,22$",
             "<b>b)</b> Ana: $CV = \\dfrac{1,29}{14} \\approx 0,09$. Bea: $CV = \\dfrac{6,22}{14} \\approx 0,44$",
             "<b>c)</b> Es más regular quien tiene el <b>CV menor</b>: sus puntos se separan menos de la media."],
      res:"Las dos tienen media 14, pero <b>Ana</b> es mucho más regular (CV 9 % frente a 44 %)." },
    { nivel:"Práctica", min:8,
      enun:"Temperaturas máximas (°C) de 20 días de primavera: [8, 10) 2 días, [10, 12) 5, [12, 14) 8, [14, 16) 4 y [16, 18) 1. Calcula la media, la desviación típica y el CV, e interpreta el resultado.",
      pasos:["Con intervalos uso las marcas de clase $x_i$.",
             td([9,11,13,15,17],[2,5,8,4,1],{int:["[8, 10)","[10, 12)","[12, 14)","[14, 16)","[16, 18)"]}),
             "$\\bar{x} = \\dfrac{254}{20} = 12,7$ °C",
             "$\\sigma^2 = \\dfrac{3308}{20} - 12,7^2 = 165,4 - 161,29 = 4,11$",
             "$\\sigma = \\sqrt{4,11} \\approx 2,03$ °C",
             "$CV = \\dfrac{2,03}{12,7} \\approx 0,16$ → 16 %: <b>dispersión pequeña</b>."],
      res:"Media 12,7 °C, $\\sigma \\approx 2,03$ °C y CV ≈ 16 %: temperaturas bastante parecidas." },
    { nivel:"Problema", min:6,
      enun:"Puntos de un jugador en 4 partidos: 2, 4, 6, 8. <b>a)</b> Calcula la media y la desviación típica. <b>b)</b> Suma 5 a todos los datos y vuelve a calcularlas. <b>c)</b> Multiplica todos los datos por 3 y vuelve a calcularlas. <b>d)</b> ¿Qué ocurre?",
      pasos:["<b>a)</b> $\\bar{x} = 5$. $\\sigma^2 = \\dfrac{120}{4} - 25 = 5$ → $\\sigma \\approx 2,24$",
             "<b>b)</b> 7, 9, 11, 13: $\\bar{x} = 10$ y $\\sigma \\approx 2,24$",
             "<b>c)</b> 6, 12, 18, 24: $\\bar{x} = 15$ y $\\sigma \\approx 6,71$",
             "<b>d)</b> Al <b>sumar</b>, la media sube lo mismo y $\\sigma$ no cambia (los datos se mueven juntos). Al <b>multiplicar</b>, la media y $\\sigma$ se multiplican por 3."],
      res:"Sumar no cambia $\\sigma$; multiplicar la multiplica." }
  ],

  casa: [
    { nivel:"Básico", enun:"Veces que van al cine al mes 26 alumnos: 0 (6), 1 (9), 2 (7), 3 (3), 4 (1). Calcula la media, el rango, la varianza, la desviación típica y el CV.",
      pasos:[td([0,1,2,3,4],[6,9,7,3,1]), "$\\bar{x} = \\dfrac{36}{26} \\approx 1,38$", "Rango: 4", "$\\sigma^2 = \\dfrac{80}{26} - 1,3846^2 \\approx 1,16$", "$\\sigma \\approx 1,08$", "$CV = \\dfrac{1,08}{1,38} \\approx 0,78$ → dispersión grande"],
      res:"$\\bar{x} \\approx 1,38$, rango 4, $\\sigma^2 \\approx 1,16$, $\\sigma \\approx 1,08$ y CV ≈ 78 %." },
    { nivel:"Básico", enun:"Goles de un equipo en 5 partidos: 1, 2, 2, 3, 2. Calcula la media, la varianza y la desviación típica.",
      pasos:["$\\bar{x} = \\dfrac{10}{5} = 2$", "$\\sigma^2 = \\dfrac{1 + 4 + 4 + 9 + 4}{5} - 2^2 = \\dfrac{22}{5} - 4 = 0,4$", "$\\sigma = \\sqrt{0,4} \\approx 0,63$"],
      res:"$\\bar{x} = 2$, $\\sigma^2 = 0,4$ y $\\sigma \\approx 0,63$." },
    { nivel:"Consolidación", enun:"Temperaturas máximas (°C) de una semana. Málaga: 18, 19, 20, 19, 18, 20, 19. Madrid: 12, 15, 20, 24, 22, 16, 17. ¿Dónde son más regulares?",
      pasos:["Málaga: $\\bar{x} = 19$, $\\sigma \\approx 0,76$, $CV = \\dfrac{0,76}{19} = 0,04$", "Madrid: $\\bar{x} = 18$, $\\sigma \\approx 3,89$, $CV = \\dfrac{3,89}{18} \\approx 0,22$", "Menor CV → más regular."],
      res:"En <b>Málaga</b> las temperaturas son mucho más regulares." },
    { nivel:"Consolidación", enun:"Edades de los 28 socios de un club de ajedrez: [15, 19) 4, [19, 23) 7, [23, 27) 9, [27, 31) 6 y [31, 35) 2. Calcula la media, la desviación típica y el CV.",
      pasos:[td([17,21,25,29,33],[4,7,9,6,2],{int:["[15, 19)","[19, 23)","[23, 27)","[27, 31)","[31, 35)"]}), "$\\bar{x} = \\dfrac{680}{28} \\approx 24,29$ años", "$\\sigma^2 = \\dfrac{17\\,092}{28} - 24,2857^2 \\approx 20,63$", "$\\sigma \\approx 4,54$ años", "$CV = \\dfrac{4,54}{24,29} \\approx 0,19$ → dispersión pequeña"],
      res:"Media 24,29 años, $\\sigma \\approx 4,54$ y CV ≈ 19 %." },
    { nivel:"Problema", enun:"Las notas de Ana son 5, 6, 7, 6 ($\\bar{x} = 6$, $\\sigma \\approx 0,71$). Si el profesor sube 2 puntos a todos, ¿cuáles son la nueva media y la nueva $\\sigma$? ¿Y si multiplica todas las notas por 1,5?",
      pasos:["Sumar 2: la media sube 2 → 8. La $\\sigma$ no cambia → 0,71.", "Multiplicar por 1,5: la media → $6 \\cdot 1,5 = 9$ y $\\sigma$ → $0,71 \\cdot 1,5 \\approx 1,06$."],
      res:"+2: media 8 y σ 0,71. ×1,5: media 9 y σ ≈ 1,06." },
    { nivel:"Para pensar", enun:"¿Puede la desviación típica ser 0? ¿Y negativa?",
      pasos:["Es 0 cuando todos los datos son <b>iguales</b>: no se separan nada de la media.", "Nunca es negativa: es una raíz cuadrada."],
      res:"Puede ser 0 (todos los datos iguales), pero nunca negativa." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">Ana y Bea tienen de media 14 puntos. ¿Juegan igual?</p>`}
    ]},
    { titulo:"Las medidas de dispersión", cuerpo:[ {html:cuatro} ]},
    { titulo:"Misma media, distinta dispersión", cuerpo:[
      {cols:[
        [{html:EST.barras(["1","2","3","4","5","6"],[12,14,15,16,13,14],{eje:"puntos",titulo:"Ana",color:"var(--ok)"})}],
        [{html:EST.barras(["1","2","3","4","5","6"],[6,20,10,22,8,18],{eje:"puntos",titulo:"Bea",color:"var(--rose)"})}]
      ]},
      {nota:["Las dos tienen media 14, pero los puntos de Bea se separan mucho más de la media."]}
    ]},
    { titulo:"Calculamos la varianza", cuerpo:[
      {ej:{enun:"Número de hermanos de 20 alumnos: 0 (3), 1 (9), 2 (5), 3 (2), 4 (1).",
        pasos:[td([0,1,2,3,4],[3,9,5,2,1]), "$\\bar{x} = \\dfrac{29}{20} = 1,45$", "$\\sigma^2 = \\dfrac{63}{20} - 1,45^2 = 1,0475$", "$\\sigma = \\sqrt{1,0475} \\approx 1,02$"],
        res:"$\\sigma^2 \\approx 1,05$ y $\\sigma \\approx 1,02$."}}
    ]},
    { titulo:"El coeficiente de variación", cuerpo:[
      {formula:"CV = \\dfrac{\\sigma}{\\bar{x}}"},
      {prop:["Menos del 30 %: <b>dispersión pequeña</b>. Más: <b>grande</b>.", "Para comparar dos grupos: el de <b>menor CV</b> es el más <b>regular</b>."], etq:"Interpretar"},
      {ej:{enun:"Ana: $\\sigma = 1,29$. Bea: $\\sigma = 6,22$. Las dos con media 14.", pasos:["Ana: $\\dfrac{1,29}{14} \\approx 0,09$", "Bea: $\\dfrac{6,22}{14} \\approx 0,44$"], res:"Ana es más regular."}}
    ]},
    { titulo:"¿Y si sumo o multiplico todos los datos?", cuerpo:[
      {cols:[
        [{prop:["<b>Sumo</b> un número: la media sube eso y $\\sigma$ <b>no cambia</b>."], etq:"➕ Sumar"}],
        [{prop:["<b>Multiplico</b> por un número: la media y $\\sigma$ <b>se multiplican</b> por él."], etq:"✖️ Multiplicar"}]
      ]},
      {html:EST.tabla(["Datos","$\\bar{x}$","$\\sigma$"],[["2, 4, 6, 8","5","2,24"],["7, 9, 11, 13 (+5)","10","2,24"],["6, 12, 18, 24 (·3)","15","6,71"]])}
    ]},
    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:["<b>Elevar al cuadrado $x_i \\cdot n_i$</b>: se eleva solo $x_i$ y después se multiplica por $n_i$."], etq:"⚠️ Error 1"},
      {aviso:["<b>Olvidar restar $\\bar{x}^2$</b> en la varianza."], etq:"⚠️ Error 2"},
      {aviso:["<b>Usar $s_x$</b> en la calculadora: la nuestra es $\\sigma_x$."], etq:"⚠️ Error 3"}
    ]},
    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{lista:["Rango: mayor − menor.", "Varianza: $\\sigma^2 = \\dfrac{\\sum x_i^2 \\cdot n_i}{N} - \\bar{x}^2$.", "Desviación típica: $\\sigma = \\sqrt{\\sigma^2}$.", "$CV = \\dfrac{\\sigma}{\\bar{x}}$: menos del 30 %, dispersión pequeña. Menor CV, más regular."]}]},
      {estudio:[
        {comp:{q:"Datos: 2, 4, 6, 8. $\\sigma$ = (con dos decimales)", sol:2.24, tol:0.011, explic:"$\\bar{x} = 5$; $\\sigma^2 = \\dfrac{120}{4} - 25 = 5$; $\\sigma = \\sqrt5 \\approx 2,24$", pista:"Primero la media y la suma de los cuadrados."}},
        {comp:{q:"$\\bar{x} = 20$ y $\\sigma = 5$. $CV =$", sol:0.25, explic:"$\\dfrac{5}{20} = 0,25$", pista:"$\\sigma$ entre la media."}},
        {comp:{q:"$CV = 0,45$. La dispersión es…", opciones:["pequeña","grande"], ok:1, explic:"45 % es más del 30 %.", pista:"Compara con el 30 %."}},
        {comp:{q:"$\\sigma = 2$. Sumo 5 a todos los datos. Nueva $\\sigma$ =", sol:2, explic:"Al sumar, $\\sigma$ no cambia.", pista:"¿Se separan más los datos?"}}
      ]}
    ]}
  ]
});
})();

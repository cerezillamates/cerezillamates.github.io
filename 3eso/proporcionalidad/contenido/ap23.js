/* 3.º ESO · Tema 3 · SITUACIÓN DE APRENDIZAJE «El mercadillo solidario»
   Contexto real del centro: 3.º organiza un mercadillo solidario. Se usan todos los contenidos del tema:
   proporcionalidad directa e inversa, compuesta, porcentajes (descuento, ganancia), repartos, interés y móviles. */
(function(){
const R = String.raw;
TEMA.registrar({
  num: "SA", pref: "SA", seccion: "Situación de aprendizaje",
  titulo: "El mercadillo solidario",

  clase: [
    { nivel:"Directa", min:5,
      enun:"🍪 La receta de las galletas de la abuela de Irene es para 24 galletas: 300 g de harina, 150 g de mantequilla, 100 g de azúcar y 2 huevos. Queremos hacer 180 galletas. ¿Cuánto necesitamos de cada ingrediente?",
      pasos:[R`Más galletas → más ingredientes: <b>D</b>. Factor: $180 : 24 = 7,5$`, R`Harina $300 \cdot 7,5 = 2250$ g · mantequilla $1125$ g · azúcar $750$ g · huevos $15$`],
      res:"2,25 kg de harina, 1,125 kg de mantequilla, 750 g de azúcar y 15 huevos" },
    { nivel:"Inversa y compuesta", min:7,
      enun:"<b>a)</b> Con 3 hornos se hornean todas las galletas en 5 horas. ¿Cuánto se tardaría con 5 hornos?<br><b>b)</b> 4 voluntarios empaquetan 180 galletas en 45 minutos. ¿Cuánto tardarán 6 voluntarios en empaquetar 300 galletas?",
      pasos:[R`<b>a)</b> I: $3 \cdot 5 = 5 \cdot x \Rightarrow x = 3$ h`, R`<b>b)</b> 1 voluntario en 1 minuto: $180 : (4 \cdot 45) = 1$ galleta`, "6 voluntarios: 6 galletas por minuto → 300 : 6 = 50 min"],
      res:"a) 3 horas&ensp;·&ensp;b) 50 minutos" },
    { nivel:"Porcentajes", min:5,
      enun:"🛒 Los ingredientes cuestan 64 €, pero el súper nos hace un 15 % de descuento por ser para una ONG. Además compramos 30 bolsas a 0,52 € cada una. ¿Cuánto nos gastamos en total?",
      pasos:[R`Ingredientes: $64 \cdot 0,85 = 54,40$ €`, R`Bolsas: $30 \cdot 0,52 = 15,60$ €`, R`Total: $54,40 + 15,60 = 70$ €`],
      res:"<b>70 €</b>" },
    { nivel:"Porcentajes", min:6,
      enun:"💶 Hacemos 30 bolsas de 6 galletas. <b>a)</b> ¿Cuánto nos cuesta cada bolsa? <b>b)</b> Si vendemos cada bolsa a 3,50 €, ¿qué porcentaje ganamos? <b>c)</b> Vendemos 26 de las 30 bolsas: ¿qué porcentaje es?",
      pasos:[R`<b>a)</b> $70 : 30 \approx 2,33$ €`, R`<b>b)</b> Índice: $3,50 : \tfrac{70}{30} = 3,50 \cdot \tfrac{30}{70} = 1,5$ → ganamos un 50 %`, R`<b>c)</b> $26 : 30 \approx 0,8667$ → 86,67 %`],
      res:"a) ≈ 2,33 €&ensp;·&ensp;b) 50 %&ensp;·&ensp;c) ≈ 86,67 %" },
    { nivel:"Repartos", min:6,
      enun:"🤝 Entre todos los puestos del mercadillo se recaudan 1260 €. Se reparten entre tres ONG de forma proporcional a los votos del alumnado: 210, 140 y 70 votos. ¿Cuánto recibe cada una? ¿Qué porcentaje es?",
      pasos:["420 votos → 1260 : 420 = 3 € por voto", "630 €, 420 € y 210 €", R`En %: $\tfrac{630}{1260} = 50\,\%$ · $\tfrac{420}{1260} \approx 33,33\,\%$ · $\tfrac{210}{1260} \approx 16,67\,\%$`],
      res:"630 €, 420 € y 210 € (50 %, 33,33 % y 16,67 %)" },
    { nivel:"Interés", min:4,
      enun:"🏦 Antes de entregar el dinero, el AMPA guarda 600 € en una cuenta al 2 % anual durante 6 meses. ¿Cuánto dinero tendrá al final?",
      pasos:[R`$I = \dfrac{600 \cdot 0,02 \cdot 6}{12} = 6$ €`, "600 + 6 = 606 €"],
      res:"<b>606 €</b>" },
    { nivel:"Móviles", min:6,
      enun:"🚐 La furgoneta de una ONG sale de Granada a las 9:00 hacia el instituto, que está a 160 km, a 80 km/h. A las 9:30 un profesor sale del instituto hacia Granada, también a 80 km/h, para encontrarse con ella. ¿A qué hora se encuentran? ¿A cuántos km de Granada?",
      pasos:[R`A las 9:30 la furgoneta lleva $80 \cdot 0,5 = 40$ km: quedan $120$ km`, R`Se acercan a $160$ km/h: $t = \dfrac{120}{160} = 0,75$ h $= 45$ min → 10:15`, R`Distancia a Granada: $40 + 80 \cdot 0,75 = 100$ km`],
      res:"A las <b>10:15</b>, a <b>100 km</b> de Granada" },
    { nivel:"Conclusión", min:5,
      enun:"📝 Escribe un pequeño informe para la web del instituto: cuánto se gastó, cuánto se ganó con las galletas, cuánto recibió cada ONG y qué herramientas matemáticas habéis usado en cada paso.",
      pasos:["Gasto en galletas: 70 €; ingresos: 26 · 3,50 = 91 €; beneficio: 21 €.", "Reparto total: 630 €, 420 € y 210 €.", "Herramientas: proporcionalidad directa (receta), inversa (hornos), compuesta (empaquetar), porcentajes (descuento, ganancia), repartos, interés y móviles."],
      res:"Informe con datos y herramientas" }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {nota:["3.º de ESO organiza un <b>mercadillo solidario</b> en el instituto: un puesto de galletas caseras, sorteos y manualidades. Lo recaudado se reparte entre tres ONG elegidas por votación."], etq:"🌍 El contexto"}
    ]},
    { titulo:"El reto", cuerpo:[
      {prop:["Planificar el puesto de galletas (ingredientes, tiempos, costes y precio de venta) y repartir lo recaudado de forma justa, justificando cada cálculo."], etq:"🎯 Reto"},
      {cols:[
        [{nota:["Receta, hornos y voluntarios: <b>proporcionalidad</b> directa, inversa y compuesta."], etq:"Parte 1"}],
        [{nota:["Compras, precio y ventas: <b>porcentajes</b>."], etq:"Parte 2"}],
        [{nota:["Reparto, banco y transporte: <b>repartos</b>, <b>interés</b> y <b>móviles</b>."], etq:"Parte 3"}]
      ]}
    ]},
    { titulo:"Los datos", cuerpo:[
      {html:`<table class="t tprop"><tr><th>Receta (24 galletas)</th><td>300 g harina · 150 g mantequilla · 100 g azúcar · 2 huevos</td></tr>
        <tr><th>Hornos</th><td>3 hornos → 5 horas</td></tr><tr><th>Empaquetar</th><td>4 voluntarios → 180 galletas en 45 min</td></tr>
        <tr><th>Compras</th><td>ingredientes 64 € (−15 %) · bolsas 0,52 € cada una</td></tr><tr><th>Venta</th><td>bolsas de 6 galletas a 3,50 €</td></tr>
        <tr><th>Votos a las ONG</th><td>210 · 140 · 70</td></tr><tr><th>Banco</th><td>600 € al 2 % anual, 6 meses</td></tr></table>`},
      {nota:["Pulsa ▶ para ir a las actividades: primero todas juntas con el cronómetro y después la corrección."]}
    ]}
  ]
});
})();

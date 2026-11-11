/* 2.º ESO · Tema 3 · SITUACIÓN DE APRENDIZAJE «Organizamos un viaje»
   Basada en la SdA de la profesora (dos niveles, N1 y N2). Se ha aclarado el ejercicio 1 del N1
   («10 alumnos pagan 50 € cada uno; ¿cuánto pagarán 20?» → ahora se dice que el autobús cuesta 500 € en total). */
(function(){
const R = String.raw;
TEMA.registrar({
  num: "SA", pref: "SA", seccion: "Situación de aprendizaje",
  titulo: "Organizamos un viaje",

  clase: [
    { nivel:"N1", min:5,
      enun:"🚌 El autobús para la excursión cuesta 500 € en total. <b>a)</b> Si van 10 alumnos, ¿cuánto paga cada uno? <b>b)</b> ¿Y si van 20? <b>c)</b> ¿Y si van 25? <b>d)</b> ¿Son D o I?",
      pasos:["<b>a)</b> 500 : 10 = 50 €", "<b>b)</b> 500 : 20 = 25 € · <b>c)</b> 500 : 25 = 20 €", "<b>d)</b> Doble de alumnos → la mitad cada uno: <b>I</b> (el producto, 500 €, es constante)"],
      res:"Cada uno paga <b>50 €</b>, <b>25 €</b> o <b>20 €</b>: son inversamente proporcionales." },
    { nivel:"N1", min:5,
      enun:"🥪 En la panadería, 3 bocadillos cuestan 7,50 €. Van 28 alumnos y cada uno quiere 2 bocadillos. ¿Cuánto cuestan todos?",
      pasos:["28 · 2 = 56 bocadillos", "1 bocadillo: 7,50 : 3 = 2,50 €", "56 · 2,50 = 140 €. Es <b>D</b>: más bocadillos, más dinero."],
      res:"Todos los bocadillos cuestan <b>140 €</b>." },
    { nivel:"N1", min:4,
      enun:"🧹 Al irnos, hay que recoger el albergue. 4 alumnos tardan 30 minutos. ¿Cuánto tardarán 6 alumnos?",
      pasos:["Más alumnos → menos tiempo: <b>I</b>", R`Le damos la vuelta: $\dfrac{4}{6} = \dfrac{x}{30}$`, R`En cruz: $6 \cdot x = 4 \cdot 30 \Rightarrow x = 20$ min`],
      res:"6 alumnos tardarán <b>20 minutos</b>." },
    { nivel:"N1", min:5,
      enun:"🧗 La entrada al parque de aventura cuesta 18 € por persona, pero a los grupos les hacen un 20 % de descuento. ¿Cuánto paga cada alumno? ¿Cuánto pagan los 28?",
      pasos:[R`$18 \cdot 0,80 = 14,40$ € cada uno`, R`$28 \cdot 14,40 = 403,20$ €`],
      res:"Cada alumno paga <b>14,40 €</b> y entre todos, <b>403,20 €</b>." },
    { nivel:"N1", min:4,
      enun:"🗺️ En un mapa a escala 1 : 200 000, el albergue está a 7,5 cm del instituto. ¿A cuántos km está?",
      pasos:[R`$7,5 \cdot 200\,000 = 1\,500\,000$ cm`, "1 500 000 cm = 15 km"],
      res:"El albergue está a <b>15 km</b> del instituto." },
    { nivel:"N2", min:5,
      enun:"🏨 El albergue cobra 1200 € por el grupo. <b>a)</b> ¿Cuánto paga cada uno si van 30? ¿Y si van 40? <b>b)</b> Este año el albergue sube un 15 %. Si van 30, ¿cuánto paga cada uno?",
      pasos:["<b>a)</b> 1200 : 30 = 40 € · 1200 : 40 = 30 € (I)", R`<b>b)</b> $1200 \cdot 1,15 = 1380$ € → $1380 : 30 = 46$ €`],
      res:"a) Si van 30 paga cada uno <b>40 €</b> y si van 40, <b>30 €</b>.<br>b) Con la subida, cada uno paga <b>46 €</b>." },
    { nivel:"N2", min:5,
      enun:"🎟️ La rifa de todo el curso ha dado 360 € para las excursiones. Se reparten entre los tres grupos de forma proporcional a los alumnos que se apuntan de cada uno: 2.º A (24), 2.º B (26) y 2.º C (22). ¿Cuánto le toca a cada grupo?",
      pasos:["Directo: 24 + 26 + 22 = 72 alumnos → 360 : 72 = 5 € por alumno", "2.º A: 120 € · 2.º B: 130 € · 2.º C: 110 €"],
      res:"Los grupos reciben <b>120 €</b>, <b>130 €</b> y <b>110 €</b>." },
    { nivel:"N2 · reto", min:7,
      enun:"🧳 Iban 25 alumnos y cada uno pagaba 60 €. La agencia hace un 10 % de descuento sobre el total y, además, se apuntan 5 alumnos más que pagan lo mismo que los demás. ¿Cuánto paga ahora cada alumno?",
      pasos:[R`Total: $25 \cdot 60 = 1500$ €`, R`Con el descuento: $1500 \cdot 0,90 = 1350$ €`, R`Entre $25 + 5 = 30$ alumnos: $1350 : 30 = 45$ €`],
      res:"Cada uno paga <b>45 €</b>." },
    { nivel:"Conclusión", min:4,
      enun:"🤔 Repasa las actividades: ¿en cuáles las magnitudes son directamente proporcionales y en cuáles inversamente? Explica la diferencia con tus palabras.",
      pasos:["<b>D</b>: bocadillos y dinero, mapa y realidad, alumnos y dinero de la rifa: doble → doble.", "<b>I</b>: alumnos y lo que paga cada uno del autobús o del albergue, alumnos y tiempo de recoger: doble → mitad.", "En las D el cociente es constante; en las I, el producto."],
      res:"En las <b>D</b>, el doble da el doble. En las <b>I</b>, el doble da la mitad." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {nota:["2.º de ESO prepara una excursión de dos días a la sierra: autobús, albergue, comida, actividades… Hay que hacer las cuentas para que salga lo más barato posible y que todo el mundo pague lo justo."], etq:"🌄 El contexto"}
    ]},
    { titulo:"El reto", cuerpo:[
      {prop:["Calcular cuánto cuesta el viaje y cuánto paga cada alumno, decidiendo en cada caso si las magnitudes son <b>directa</b> o <b>inversamente proporcionales</b>."], etq:"🎯 Reto"},
      {cols:[
        [{nota:["<b>Nivel 1</b>: autobús, bocadillos, limpieza, descuento de grupo, mapa."], etq:"N1"}],
        [{nota:["<b>Nivel 2</b>: albergue con subida, reparto de la rifa y el problema final."], etq:"N2"}]
      ]}
    ]},
    { titulo:"Los datos", cuerpo:[
      {html:`<table class="t tprop"><tr><th>Autobús</th><td>500 € en total</td></tr><tr><th>Bocadillos</th><td>3 por 7,50 € · 2 por alumno</td></tr>
        <tr><th>Parque de aventura</th><td>18 € por persona · grupos −20 %</td></tr><tr><th>Albergue</th><td>1200 € por el grupo (este año +15 %)</td></tr>
        <tr><th>Mapa</th><td>escala 1 : 200 000</td></tr><tr><th>Rifa del curso</th><td>360 € · apuntados: 2.º A 24, 2.º B 26, 2.º C 22</td></tr></table>`},
      {nota:["Pulsa ▶ para ir a las actividades: primero todas juntas con el cronómetro y después la corrección."]}
    ]}
  ]
});
})();

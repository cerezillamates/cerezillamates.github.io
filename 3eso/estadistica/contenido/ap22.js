/* 3.º ESO · Estadística · AUTOEVALUACIÓN
   Test, verdadero/falso y respuesta numérica con corrección automática. Basada en la de la página anterior
   (con la notación de clase: nᵢ, Nᵢ, fᵢ) y alguna pregunta más de razonar. */
(function(){
const VF = ["Verdadero","Falso"];
TEMA.registrar({
  num: "A", pref: "A", seccion: "Autoevaluación", autoeval: true,
  titulo: "Autoevaluación",
  laminas: [
    { portada:true, cuerpo:[
      {nota:["Responde cada pregunta. Si fallas, lee la pista y vuelve a intentarlo: el marcador cuenta lo que aciertas <b>a la primera</b>. Al terminar verás tu nota. Puedes repetir cuantas veces quieras."], etq:"✅ ¿Cómo funciona?"}
    ]},
    { titulo:"Recoger y ordenar los datos", cuerpo:[
      {comp:{q:"Preguntamos a 50 de los 400 alumnos. Los 50 son la…", opciones:["población","muestra"], ok:1, explic:"La muestra es la parte a la que preguntamos.", pista:"¿Son todos o una parte?"}},
      {comp:{q:"«El número de hermanos» es un carácter…", opciones:["cualitativo","cuantitativo discreto","cuantitativo continuo"], ok:1, explic:"Se cuenta.", pista:"¿Se cuenta o se mide?"}},
      {comp:{q:"Preguntar en un gimnasio cuánto deporte hacen los jóvenes da una muestra representativa.", opciones:VF, ok:1, explic:"Tiene sesgo: solo hay gente que ya hace deporte.", pista:"¿Se parece a todos los jóvenes?"}},
      {comp:{q:"Datos: 2, 3, 2, 1, 2, 3. ¿Cuántas veces sale el 2 ($n_i$)?", sol:3, explic:"El 2 sale 3 veces.", pista:"Cuéntalos."}},
      {comp:{q:"Un valor sale 6 veces de 24 datos. $f_i =$", sol:0.25, explic:"$\\dfrac{6}{24} = 0,25$", pista:"$n_i$ entre $N$."}},
      {comp:{q:"$f_i = 0,35$. ¿Qué porcentaje es?", sol:35, unidad:"%", explic:"$0,35 \\cdot 100 = 35\\,\\%$", pista:"Por 100."}},
      {comp:{q:"Las $n_i$ son 3, 5 y 4. $N_i$ del tercer valor =", sol:12, explic:"$3 + 5 + 4 = 12$", pista:"Ve sumando."}}
    ]},
    { titulo:"Gráficos", cuerpo:[
      {comp:{q:"10 de 40 alumnos. ¿Cuántos grados tiene su sector?", sol:90, unidad:"°", explic:"$\\dfrac{10}{40} \\cdot 360° = 90°$", pista:"La parte del total por 360°."}},
      {comp:{q:"Para el deporte favorito uso un diagrama de…", opciones:["sectores","histograma"], ok:0, explic:"Es cualitativo.", pista:"El histograma es para intervalos."}},
      {comp:{q:"En un histograma las barras van separadas.", opciones:VF, ok:1, explic:"Van pegadas: los intervalos están seguidos.", pista:"¿Hay huecos entre [10, 20) y [20, 30)?"}}
    ]},
    { titulo:"Media, mediana y moda", cuerpo:[
      {comp:{q:"Datos: 4, 6, 8, 10. Media =", sol:7, explic:"$\\dfrac{28}{4} = 7$", pista:"Suma y divide."}},
      {comp:{q:"Datos: 3, 9, 5, 1, 7. Mediana =", sol:5, explic:"Ordenados: 1, 3, 5, 7, 9.", pista:"¡Ordena!"}},
      {comp:{q:"Datos: 2, 4, 6, 10. Mediana =", sol:5, explic:"$\\dfrac{4 + 6}{2} = 5$", pista:"$N$ par: media de los dos del centro."}},
      {comp:{q:"Datos: 1, 3, 3, 5, 3, 2. Moda =", sol:3, explic:"El 3 sale 3 veces.", pista:"El que más se repite."}},
      {comp:{q:"Datos: 12, 5, 20, 8. Rango =", sol:15, explic:"$20 - 5 = 15$", pista:"Mayor menos menor."}},
      {comp:{q:"Examen 8 (70 %) y trabajo 6 (30 %). Nota =", sol:7.4, explic:"$0,7 \\cdot 8 + 0,3 \\cdot 6 = 7,4$", pista:"Cada nota por su % en decimal."}},
      {comp:{q:"9 personas cobran 1200 € y una cobra 10 200 €. ¿Qué representa mejor el sueldo de la mayoría?", opciones:["la media","la mediana"], ok:1, explic:"La media sale 2100 €, empujada por un dato muy grande; la mediana es 1200 €.", pista:"¿A cuál le afecta un dato muy grande?"}}
    ]},
    { titulo:"Intervalos y cuartiles", cuerpo:[
      {comp:{q:"Intervalo [20, 30). Marca de clase =", sol:25, explic:"$\\dfrac{20 + 30}{2} = 25$", pista:"El centro."}},
      {comp:{q:"Marcas 5 y 15, frecuencias 2 y 2. Media =", sol:10, explic:"$\\dfrac{10 + 30}{4} = 10$", pista:"$\\sum x_i \\cdot n_i$ entre $N$."}},
      {comp:{q:"Datos ordenados: 1, 2, 3, 4, 5, 6, 7, 8. $Q_1 =$", sol:2.5, explic:"$8 \\cdot 0,25 = 2$ → media del 2.º y el 3.º.", pista:"¿Sale entero el lugar?"}},
      {comp:{q:"$Q_1 = 4$ y $Q_3 = 11$. Rango intercuartílico =", sol:7, explic:"$11 - 4 = 7$", pista:"$Q_3 - Q_1$"}},
      {comp:{q:"Entre $Q_1$ y $Q_3$ está el … % de los datos.", sol:50, unidad:"%", explic:"La caja tiene el 50 % central.", pista:"25 % + 25 %."}}
    ]},
    { titulo:"Dispersión", cuerpo:[
      {comp:{q:"Datos: 2, 4, 6, 8. $\\sigma$ = (con dos decimales)", sol:2.24, tol:0.011, explic:"$\\sigma^2 = \\dfrac{120}{4} - 25 = 5$ → $\\sqrt5 \\approx 2,24$", pista:"Media 5; suma de cuadrados 120."}},
      {comp:{q:"$\\bar{x} = 20$ y $\\sigma = 5$. $CV =$", sol:0.25, explic:"$\\dfrac{5}{20} = 0,25$", pista:"$\\sigma$ entre la media."}},
      {comp:{q:"A: CV = 0,10. B: CV = 0,30. Es más regular…", opciones:["A","B"], ok:0, explic:"Menor CV, más regular.", pista:"¿Quién se separa menos de su media?"}},
      {comp:{q:"$CV = 0,45$. La dispersión es…", opciones:["pequeña","grande"], ok:1, explic:"Más del 30 %.", pista:"Compara con el 30 %."}},
      {comp:{q:"$\\sigma = 2$. Sumo 5 a todos los datos. Nueva $\\sigma$ =", sol:2, explic:"Al sumar, $\\sigma$ no cambia.", pista:"¿Se separan más?"}},
      {comp:{q:"$\\sigma = 2$. Multiplico todos los datos por 3. Nueva $\\sigma$ =", sol:6, explic:"Al multiplicar, $\\sigma$ se multiplica: $2 \\cdot 3 = 6$.", pista:"¿Se separan más?"}}
    ]}
  ]
});
})();

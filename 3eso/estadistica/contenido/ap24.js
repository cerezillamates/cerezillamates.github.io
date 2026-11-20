/* 3.º ESO · Estadística · AMPLIACIÓN Y RETOS
   Problemas para pensar con la media, la mediana, la moda y la dispersión. */
(function(){
TEMA.registrar({
  num: "★", pref: "★", seccion: "Ampliación y retos",
  titulo: "Ampliación y razonamiento",

  clase: [
    { nivel:"Reto", min:6, enun:"🧩 Cinco números enteros positivos tienen media 6, mediana 7 y moda 8. ¿Cuáles pueden ser?",
      pasos:["Suma: $6 \\cdot 5 = 30$.", "Ordenados: _ , _ , 7, _ , _. La moda 8 tiene que salir al menos dos veces: 7, 8, 8 en los lugares 3.º, 4.º y 5.º.", "Los dos primeros suman $30 - 23 = 7$ y tienen que ser distintos y menores que 7 (si no, habría otra moda): 1 y 6, 2 y 5 o 3 y 4."],
      res:"Por ejemplo, <b>1, 6, 7, 8, 8</b> (también 2, 5, 7, 8, 8 o 3, 4, 7, 8, 8)." },
    { nivel:"Reto", min:5, enun:"📉 La media de 10 notas es 6. Si quitamos la nota más alta, la media de las otras 9 es 5,8. ¿Cuál era la nota más alta?",
      pasos:["Suma de las 10: $6 \\cdot 10 = 60$.", "Suma de las 9: $5,8 \\cdot 9 = 52,2$.", "La que falta: $60 - 52,2 = 7,8$"],
      res:"La nota más alta era un <b>7,8</b>." },
    { nivel:"Reto", min:5, enun:"🏀 En un equipo de 12 jugadores la altura media es 1,80 m. Se va un jugador de 1,91 m y llega otro de 2,03 m. ¿Cuál es la nueva media?",
      pasos:["La suma sube $2,03 - 1,91 = 0,12$ m.", "La media sube $\\dfrac{0,12}{12} = 0,01$ m."],
      res:"La nueva media es <b>1,81 m</b>." },
    { nivel:"Reto", min:6, enun:"⚖️ ¿Puede la media de un grupo ser mayor que la de cada una de sus dos mitades? Clase A: media 6 con 10 alumnos. Clase B: media 8 con 30 alumnos. ¿Cuál es la media de los 40?",
      pasos:["No es $\\dfrac{6 + 8}{2} = 7$: B tiene más alumnos y pesa más.", "$\\dfrac{6 \\cdot 10 + 8 \\cdot 30}{40} = \\dfrac{60 + 240}{40} = 7,5$", "La media total siempre está entre 6 y 8: nunca puede ser mayor que las dos."],
      res:"La media de los 40 es <b>7,5</b>." },
    { nivel:"Reto", min:6, enun:"📏 Inventa 5 datos con media 10 y desviación típica 0. ¿Y 4 datos con media 10 y rango 0? ¿Y 2 datos con media 10 y desviación típica 3?",
      pasos:["$\\sigma = 0$: todos iguales → 10, 10, 10, 10, 10.", "Rango 0: también todos iguales → 10, 10, 10, 10.", "Dos datos simétricos: $10 - 3$ y $10 + 3$ → 7 y 13. Media 10 y $\\sigma = \\sqrt{\\dfrac{49 + 169}{2} - 100} = \\sqrt9 = 3$ ✓"],
      res:"10, 10, 10, 10, 10; 10, 10, 10, 10; y 7 y 13." }
  ],

  casa: [
    { nivel:"Reto", enun:"🎂 La media de edad de 4 hermanos es 12 años. ¿Cuál será dentro de 3 años? ¿Y su desviación típica?",
      pasos:["Todos suman 3: la media sube 3 → 15 años.", "Sumar lo mismo a todos no cambia la desviación típica."], res:"Media 15 años; la $\\sigma$ es la misma." },
    { nivel:"Reto", enun:"🔢 Siete números tienen mediana 10. Si al mayor le sumamos 100, ¿cambia la mediana? ¿Y la media?",
      pasos:["La mediana es el del lugar 4: no cambia.", "La media sube $\\dfrac{100}{7} \\approx 14,29$."], res:"La mediana no cambia; la media sube unos 14,29." },
    { nivel:"Reto", enun:"📝 En un examen la media fue 5 y la desviación típica 2. El profesor decide multiplicar todas las notas por 1,2. ¿Qué media y qué σ quedan? ¿Cambia el CV?",
      pasos:["Media: $5 \\cdot 1,2 = 6$. $\\sigma$: $2 \\cdot 1,2 = 2,4$.", "CV antes: $\\dfrac{2}{5} = 0,4$. CV después: $\\dfrac{2,4}{6} = 0,4$."], res:"Media 6, σ = 2,4 y el CV no cambia (0,4)." },
    { nivel:"Reto", enun:"🎲 Lanza un dado 20 veces y apunta los resultados. Calcula la media. ¿A qué número se acercará si lo lanzas muchísimas veces?",
      pasos:["Cada cara sale más o menos igual.", "Media de 1, 2, 3, 4, 5, 6: $\\dfrac{21}{6} = 3,5$."], res:"Se acercará a <b>3,5</b>." },
    { nivel:"Reto", enun:"🗳 En un diagrama de sectores, el sector de «sí» mide 126° y el de «no» 198°. El resto son «no sabe» y son 8 personas. ¿Cuántas personas hay en total?",
      pasos:["«No sabe»: $360° - 126° - 198° = 36°$.", "36° son 8 personas → $360°$ son $8 \\cdot 10 = 80$ personas."], res:"Hay <b>80 personas</b>." }
  ],

  laminas: [
    { portada:true, cuerpo:[ {html:`<p class="gancho">Problemas para pensar: la estadística también es razonar.</p>`} ]},
    { titulo:"Estrategias", cuerpo:[
      {prop:[{lista:["<b>Media → suma</b>: si conoces la media y cuántos datos hay, conoces la suma ($\\bar{x} \\cdot N$).",
        "<b>Mediana → lugar</b>: piensa qué dato ocupa el centro; los extremos no le afectan.",
        "<b>Sumar o multiplicar todos</b>: la media sigue el cambio; σ solo cambia al multiplicar.",
        "<b>Prueba con ejemplos sencillos</b> (todos iguales, dos datos simétricos…)."]}], etq:"🧠 Para pensar"}
    ]}
  ]
});
})();

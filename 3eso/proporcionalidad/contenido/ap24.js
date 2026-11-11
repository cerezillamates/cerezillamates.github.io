/* 3.º ESO · Tema 3 · AMPLIACIÓN Y RAZONAMIENTO MATEMÁTICO
   Retos de mayor dificultad y estilo olimpiada: relojes, velocidad media, diluciones, porcentajes inversos… */
(function(){
const R = String.raw;
TEMA.registrar({
  num: "★", pref: "★", seccion: "Ampliación y retos",
  titulo: "Ampliación y razonamiento",

  clase: [
    { nivel:"Reto", min:7,
      enun:"🚰 El grifo A llena un depósito en 2 h y el B en 3 h; el desagüe C lo vacía en 6 h. Se abren A y B y, una hora después, alguien abre C sin darse cuenta. ¿Cuánto tarda en total en llenarse?",
      pasos:[R`En la 1.ª hora: $\tfrac12 + \tfrac13 = \tfrac56$ → falta $\tfrac16$`, R`Con los tres: $\tfrac12 + \tfrac13 - \tfrac16 = \tfrac{3 + 2 - 1}{6} = \tfrac23$ por hora`, R`$\tfrac16 : \tfrac23 = \tfrac14$ h $= 15$ min`],
      res:"<b>1 h 15 min</b>" },
    { nivel:"Reto", min:6,
      enun:"🚗 Voy al pueblo a 60 km/h y vuelvo por el mismo camino a 40 km/h. ¿Cuál ha sido mi velocidad media? (¡No es 50 km/h!)",
      pasos:["Supongo que el pueblo está a 120 km (vale cualquier distancia).", "Ida: 120 : 60 = 2 h · vuelta: 120 : 40 = 3 h", R`Media: $\dfrac{240 \text{ km}}{5 \text{ h}} = 48$ km/h`],
      res:"<b>48 km/h</b>" },
    { nivel:"Reto", min:6,
      enun:"🧪 Tenemos 10 L de alcohol al 90 %. ¿Cuánta agua hay que añadir para que quede al 60 %?",
      pasos:["Alcohol puro: 10 · 0,90 = 9 L (no cambia al añadir agua)", R`9 L tienen que ser el 60 % del total: $9 : 0,60 = 15$ L`, "Hay que añadir 15 − 10 = 5 L de agua"],
      res:"<b>5 litros de agua</b>" },
    { nivel:"Reto", min:5,
      enun:"⛽ La gasolina sube un 10 %. ¿En qué porcentaje tengo que reducir lo que consumo para gastar el mismo dinero?",
      pasos:[R`Precio × consumo = gasto (inversa). Nuevo consumo: $1 : 1,10 \approx 0,909$`, "Consumo el 90,9 %: reduzco un 9,09 % (no un 10 %)"],
      res:"Un <b>9,09 %</b>" },
    { nivel:"Reto", min:7,
      enun:"💼 Tres socios ponen 2000 € durante 6 meses, 3000 € durante 4 meses y 1000 € durante 12 meses. Ganan 3600 €. ¿Cómo se reparte el beneficio de forma justa?",
      pasos:["Lo justo es repartir según capital × tiempo (cuánto dinero y cuánto tiempo).", "2000 · 6 = 12 000 · 3000 · 4 = 12 000 · 1000 · 12 = 12 000", "¡Las tres partes son iguales!"],
      res:"<b>1200 € cada uno</b>" }
  ],

  casa: [
    { nivel:"Reto", enun:"Si 5 máquinas hacen 5 piezas en 5 minutos, ¿cuánto tardan 100 máquinas en hacer 100 piezas?",
      pasos:["Cada máquina hace 1 pieza en 5 minutos.", "100 máquinas hacen 100 piezas a la vez: también en 5 minutos."], res:"5 minutos" },
    { nivel:"Reto", enun:"Un capital al 4 % de interés simple se ha convertido en 5400 € en 2 años. ¿Cuál era el capital inicial?",
      pasos:[R`En 2 años gana el 8 %: capital final $= c \cdot 1,08$`, R`$c = 5400 : 1,08 = 5000$ €`], res:"5000 €" },
    { nivel:"Reto", enun:"Un grifo llena un depósito en 6 horas. A las 2 horas de abrirlo, abrimos otro grifo igual. ¿Cuánto tarda en total en llenarse?",
      pasos:[R`En 2 horas llena $\dfrac26 = \dfrac13$ → queda $\dfrac23$`, R`Los dos juntos: $\dfrac16 + \dfrac16 = \dfrac13$ por hora → $\dfrac23 : \dfrac13 = 2$ h`, "Total: 2 + 2 = 4 horas"], res:"4 horas" },
    { nivel:"Reto", enun:"Un comerciante sube un 20 % sus precios y después anuncia: «¡Rebaja del 20 %!». ¿Los precios quedan como al principio?",
      pasos:[R`$1,20 \cdot 0,80 = 0,96$`], res:"No: quedan un 4 % más baratos que al principio" },
    { nivel:"Reto", enun:"En una clase, el 40 % son chicos. Se van 3 chicas y entonces los chicos pasan a ser el 50 %. ¿Cuántos alumnos había?",
      pasos:[R`Chicos $0,4n$ y chicas $0,6n$; tras irse 3 chicas, chicas = chicos: $0,6n - 3 = 0,4n$`, R`$0,2n = 3 \Rightarrow n = 15$`], res:"15 alumnos (6 chicos y 9 chicas)" },
    { nivel:"Reto", enun:"Un caracol sube por un pozo de 10 m: de día sube 3 m y de noche resbala 2 m. ¿Cuántos días tarda en salir?",
      pasos:["Cada día completo avanza 1 m, pero el último día sale antes de resbalar.", "Tras 7 días completos está a 7 m; el 8.º día sube 3 m y llega a 10 m."], res:"8 días (¡no 10!)" }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {nota:["Problemas para pensar: algunos tienen trampa, otros necesitan una buena idea. Lee despacio, haz un dibujo y comprueba que la respuesta tiene sentido."], etq:"🧠 Ampliación"}
    ]},
    { titulo:"Estrategias de resolución", cuerpo:[
      {cols:[
        [{truco:["<b>Pon un número</b> cuando falte un dato: 100 € para los porcentajes; 120 km para la velocidad media."], etq:"💯 Inventa un valor"}],
        [{truco:["<b>Busca lo que no cambia</b>: el alcohol puro al añadir agua; el gasto al subir el precio."], etq:"🔒 Lo invariante"}],
        [{truco:["<b>Reconoce el modelo</b>: una aleación es lo mismo que una mezcla: total de oro entre total de metal."], etq:"🔁 Es como…"}]
      ]},
      {aviso:["La media de las velocidades, la suma de porcentajes o «10 días para el caracol» suelen ser <b>trampas</b>."]}
    ]}
  ]
});
})();

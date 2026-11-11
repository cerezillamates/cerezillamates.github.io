/* 2.º ESO · Tema 3 · AMPLIACIÓN Y RAZONAMIENTO MATEMÁTICO
   Estrategias de resolución y retos de ingenio con proporcionalidad y porcentajes (estilo olimpiada). */
(function(){
const R = String.raw;
TEMA.registrar({
  num: "★", pref: "★", seccion: "Ampliación y retos",
  titulo: "Ampliación y razonamiento",

  clase: [
    { nivel:"Reto", min:6,
      enun:"🐔 Si gallina y media pone huevo y medio en día y medio, ¿cuántos huevos pone una gallina en 6 días?",
      pasos:["Gallina y media → huevo y medio en día y medio: <b>1 gallina</b> pone <b>1 huevo</b> en día y medio.", "6 días son 4 veces día y medio.", "1 gallina en 6 días: 4 huevos."],
      res:"Una gallina pone <b>4 huevos</b> en 6 días." },
    { nivel:"Reto", min:5,
      enun:"🏷️ ¿Qué es mejor: un descuento del 30 %, o un descuento del 20 % y después otro del 10 %?",
      pasos:[R`Descuento del 30 %: $I_V = 1 - 0,30 = 0,70$`, R`20 % y después 10 %: $I_V = 0,80 \cdot 0,90 = 0,72$`, "0,70 es menor que 0,72: con el 30 % se paga menos."],
      res:"Es mejor el <b>30 %</b>: el índice es 0,70 y no 0,72." },
    { nivel:"Reto", min:6,
      enun:"🕯️ Una vela de 30 cm se consume en 10 horas y otra de 20 cm en 20 horas. Se encienden a la vez. ¿Cuándo miden lo mismo? ¿Cuánto miden entonces?",
      pasos:["La primera baja 3 cm cada hora; la segunda, 1 cm cada hora.", "Al principio se llevan 10 cm y cada hora la diferencia se reduce 3 − 1 = 2 cm.", "10 : 2 = 5 horas → 30 − 15 = 15 cm y 20 − 5 = 15 cm ✓"],
      res:"A las <b>5 horas</b> las dos velas miden <b>15 cm</b>." },
    { nivel:"Reto", min:6,
      enun:"👩‍🎓 En una clase el 60 % son chicas. Si llegan 5 chicos nuevos, los chicos pasan a ser la mitad. ¿Cuántos alumnos había al principio?",
      pasos:["Al principio: chicas = 60 %, chicos = 40 % → se llevan un 20 % de diferencia.", "Con 5 chicos más se igualan: ese 20 % son 5 alumnos.", "20 % → 5 · 100 % → 25 alumnos"],
      res:"Al principio había <b>25 alumnos</b> (15 chicas y 10 chicos)." },
    { nivel:"Reto", min:6,
      enun:"🧱 Si 3 albañiles levantan 3 muros en 3 días, ¿cuántos muros levantan 9 albañiles en 9 días?",
      pasos:["Con el triple de albañiles, en 3 días hacen el triple de muros: 9 muros.", "En el triple de días, otra vez el triple: 9 · 3 = 27 muros.", "¡No son 9! Las dos magnitudes multiplican."],
      res:"9 albañiles levantan <b>27 muros</b> en 9 días." },
    { nivel:"Reto", min:7,
      enun:"🍞 Dos pastores comparten la comida con un viajero: uno pone 5 panes y el otro 3. Los tres comen lo mismo. El viajero les deja 8 monedas. ¿Cómo deben repartirlas de forma justa?",
      pasos:[R`8 panes entre 3: cada uno come $\dfrac83$ de pan`, R`El primero da al viajero $5 - \dfrac83 = \dfrac73$; el segundo, $3 - \dfrac83 = \dfrac13$`, "El viajero comió 7/3 del primero y 1/3 del segundo: reparto directo a 7 y 1."],
      res:"Deben darle <b>7 monedas</b> al primero y <b>1 moneda</b> al segundo (¡no 5 y 3!)." }
  ],

  casa: [
    { nivel:"Reto", enun:"Un precio sube un 25 %. ¿Qué porcentaje tiene que bajar para volver al precio de antes?",
      pasos:[R`Con 100 €: sube a 125 €. Para volver a 100: $100 : 125 = 0,80$ → baja un 20 %`], res:"Tiene que bajar un <b>20 %</b> (no un 25 %)." },
    { nivel:"Reto", enun:"¿Qué es mayor: el 50 % del 50 % de una cantidad o el 25 % de esa cantidad?",
      pasos:[R`$0,5 \cdot 0,5 = 0,25$`], res:"Son <b>iguales</b>." },
    { nivel:"Reto", enun:"Un grifo llena una bañera en 6 minutos y el desagüe la vacía en 9 minutos. Si dejamos los dos abiertos, ¿cuánto tarda en llenarse?",
      pasos:[R`$\dfrac16 - \dfrac19 = \dfrac{3}{18} - \dfrac{2}{18} = \dfrac{1}{18}$`], res:"La bañera tarda <b>18 minutos</b> en llenarse." },
    { nivel:"Reto", enun:"Un taxi cobra 3 € por bajar la bandera y 1,20 € por km. ¿Es el precio proporcional a los km? ¿Cuánto cuesta un viaje de 10 km? ¿Y uno de 20?",
      pasos:["10 km: 3 + 12 = 15 €; 20 km: 3 + 24 = 27 €", "Doble de km pero no doble de precio (27 ≠ 30): no es proporcional."], res:"<b>No</b> es proporcional: 10 km cuestan <b>15 €</b> y 20 km, <b>27 €</b>." },
    { nivel:"Reto", enun:"Tres amigos tardan 6 horas en montar un escenario. ¿Cuánto tardarían 9 amigos? ¿Y 180 amigos? ¿Tiene sentido la última respuesta?",
      pasos:["Inversa: 3 · 6 = 18 → 9 amigos: 2 h; 180 amigos: 0,1 h = 6 minutos.", "No tiene sentido: con tanta gente se estorbarían. La proporcionalidad es un modelo que vale solo dentro de unos límites."], res:"9 amigos tardarían <b>2 horas</b>; 180 amigos, 6 minutos, pero no es realista." },
    { nivel:"Reto", enun:"En un concurso, un premio se reparte de forma inversa al tiempo empleado: Lara tardó 2 min, Iker 3 min y Noa 6 min. Lara recibió 30 € más que Noa. ¿Cuánto era el premio?",
      pasos:[R`$\dfrac12, \dfrac13, \dfrac16$ → partes 3, 2 y 1`, "Lara tiene 2 partes más que Noa: 2 partes = 30 € → 1 parte = 15 €", "Premio: 6 partes · 15 = 90 €"], res:"El premio era de <b>90 €</b>." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {nota:["Problemas para pensar con calma: no se resuelven con una fórmula, sino buscando una <b>estrategia</b>. ¡Trabaja en equipo!"], etq:"🧠 Ampliación"}
    ]},
    { titulo:"Estrategias para resolver problemas", cuerpo:[
      {cols:[
        [{truco:["<b>Haz un dibujo</b> o un esquema: una carretera, un depósito, unas casillas."], etq:"✏️ Dibuja"}],
        [{truco:["<b>Prueba con números fáciles</b>: si no sabes el precio, imagina que es 100 €."], etq:"💯 Usa el 100"}],
        [{truco:["<b>Reduce a la unidad</b>: ¿qué pasa con 1 gallina, 1 grifo, 1 hora?"], etq:"1️⃣ Ve a 1"}]
      ]},
      {cols:[
        [{truco:["<b>Empieza por el final</b> si conoces el resultado."], etq:"🔙 Hacia atrás"}],
        [{truco:["<b>Comprueba</b> si la respuesta tiene sentido en la vida real."], etq:"🤔 ¿Tiene sentido?"}]
      ]}
    ]}
  ]
});
})();

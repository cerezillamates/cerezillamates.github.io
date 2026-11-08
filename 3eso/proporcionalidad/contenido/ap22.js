/* 3.º ESO · Tema 3 · AUTOEVALUACIÓN
   Test, verdadero/falso y respuesta numérica con corrección automática, explicación de los errores,
   marcador con la nota final y opción de repetir. Más exigente que la de 2.º. */
(function(){
const VF = ["Verdadero","Falso"];
TEMA.registrar({
  num: "A", pref: "A", seccion: "Autoevaluación", autoeval: true,
  titulo: "Autoevaluación",
  laminas: [
    { portada:true, cuerpo:[
      {nota:["Responde cada pregunta. Si fallas, lee la pista y vuelve a intentarlo: el marcador cuenta lo que aciertas <b>a la primera</b>. Al terminar verás tu nota. Puedes repetir cuantas veces quieras."], etq:"✅ ¿Cómo funciona?"}
    ]},
    { titulo:"Razones y proporcionalidad", cuerpo:[
      {comp:{q:"Medio proporcional positivo de 4 y 25: $\\;\\dfrac{4}{x} = \\dfrac{x}{25}$", sol:10, explic:"$x^2 = 100 \\Rightarrow x = 10$ (o −10)", pista:"En cruz queda $x \\cdot x$."}},
      {comp:{q:"5 libretas cuestan 6,50 €. ¿Cuánto cuestan 12?", sol:15.6, unidad:"€", explic:"1 libreta: 1,30 € → 12 · 1,30 = 15,60 €", pista:"Reducción a la unidad."}},
      {comp:{q:"Una rueda de 30 dientes gira a 100 vueltas por minuto y engrana con otra de 75 dientes. ¿Cuántas vueltas da la segunda?", sol:40, unidad:"vueltas/min", explic:"Inversa: 30 · 100 = 75 · x → x = 40", pista:"Más dientes, menos vueltas."}},
      {comp:{q:"En una proporcionalidad inversa, el cociente de las cantidades correspondientes es constante.", opciones:VF, ok:1, explic:"En la inversa es constante el <b>producto</b>; el cociente es constante en la directa.", pista:"Piensa en 2 obreros · 12 días y 4 obreros · 6 días."}}
    ]},
    { titulo:"Compuesta e interés", cuerpo:[
      {comp:{q:"8 máquinas, 6 horas al día, hacen un pedido en 9 días. ¿Cuántos días tardan 12 máquinas a 8 horas al día?", sol:4.5, unidad:"días", explic:"I e I: $\\tfrac{12}{8} \\cdot \\tfrac86 = \\tfrac{9}{x}$ → $2 = \\tfrac9x$ → 4,5 días", pista:"Las dos son inversas: a las dos les das la vuelta."}},
      {comp:{q:"¿Qué interés dan 3600 € al 2 % durante 5 meses?", sol:30, unidad:"€", explic:"3600 · 0,02 · 5 : 12 = 30 €", pista:"Con meses, divide entre 12."}},
      {comp:{q:"¿Cuántos años hay que depositar 4000 € al 2,5 % para ganar 500 €?", sol:5, unidad:"años", explic:"t = 500 : (4000 · 0,025) = 5", pista:"Tapa la t en el triángulo."}},
      {comp:{q:"En el interés simple, el capital crece lo mismo cada año.", opciones:VF, ok:0, explic:"Sí: cada año se gana $c \\cdot r$, siempre igual.", pista:"¿Sobre qué se calcula el interés cada año?"}}
    ]},
    { titulo:"Repartos y porcentajes", cuerpo:[
      {comp:{q:"Reparte 1300 € de forma inversamente proporcional a 2, 3 y 4. ¿Cuánto le toca al que tiene 4?", sol:300, unidad:"€", explic:"6, 4 y 3 partes (13) → 100 € cada parte → 3 · 100 = 300 €", pista:"Da la vuelta y pon denominador 12."}},
      {comp:{q:"He pagado 27 € de señal, que son el 45 % del precio. ¿Cuánto cuesta?", sol:60, unidad:"€", explic:"TOTAL = PARTE : decimal = 27 : 0,45 = 60 €", pista:"Tapa el TOTAL en el triángulo."}},
      {comp:{q:"Un portátil cuesta 605 € con el 21 % de IVA. ¿Y sin IVA?", sol:500, unidad:"€", explic:"Hacia atrás: 605 : 1,21 = 500 €", pista:"Divide entre el índice."}},
      {comp:{q:"Un precio sube un 20 % y luego baja un 25 %. En total…", opciones:["baja un 5 %","baja un 10 %","no cambia"], ok:1, explic:"1,20 · 0,75 = 0,90 → baja un 10 %", pista:"Multiplica los índices."}},
      {comp:{q:"Una bici de 500 € se vende por 325 €. ¿Qué porcentaje ha bajado?", sol:35, unidad:"%", explic:"325 : 500 = 0,65 → 65 % → baja un 35 %", pista:"Divide FINAL : INICIAL."}},
      {comp:{q:"Con una rebaja del 20 % y un 21 % de IVA pagas 242 €. ¿Precio inicial?", sol:250, unidad:"€", explic:"Índice total 0,80 · 1,21 = 0,968 → 242 : 0,968 = 250 €", pista:"Multiplica los índices y divide."}}
    ]},
    { titulo:"Grifos, móviles y mezclas", cuerpo:[
      {comp:{q:"Un grifo llena un depósito en 4 h y una fuga lo vacía en 12 h. ¿Cuántas horas tarda en llenarse?", sol:6, unidad:"h", explic:"1/4 − 1/12 = 2/12 = 1/6 → 6 h", pista:"La fuga resta."}},
      {comp:{q:"Un ciclista sale a 15 km/h; 2 h después sale una moto a 45 km/h. ¿Cuántas horas tarda la moto en alcanzarlo?", sol:1, unidad:"h", explic:"Ventaja 30 km; recorta 30 km/h → 1 h", pista:"Primero la ventaja; después resta las velocidades."}},
      {comp:{q:"Se mezclan 10 kg de café de 6 €/kg con 30 kg de 10 €/kg. ¿Precio del kilo de mezcla?", sol:9, unidad:"€/kg", explic:"(60 + 300) : 40 = 9 €/kg", pista:"Coste total entre kilos totales."}},
      {comp:{q:"Dos grifos juntos pueden tardar más que el más rápido de los dos.", opciones:VF, ok:1, explic:"Juntos siempre tardan menos que cualquiera de ellos solo.", pista:"Si abres otro grifo, ¿entra más o menos agua cada hora?"}}
    ]}
  ]
});
})();

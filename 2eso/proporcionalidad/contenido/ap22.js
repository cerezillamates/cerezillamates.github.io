/* 2.º ESO · Tema 3 · AUTOEVALUACIÓN
   Test, verdadero/falso y respuesta numérica con corrección automática, explicación de los errores,
   marcador con el resultado final y botón para repetir. */
(function(){
const VF = ["Verdadero","Falso"];
TEMA.registrar({
  num: "A", pref: "A", seccion: "Autoevaluación", autoeval: true,
  titulo: "Autoevaluación",
  laminas: [
    { portada:true, cuerpo:[
      {nota:["Responde cada pregunta. Si fallas, lee la pista y vuelve a intentarlo: en el marcador cuenta lo que aciertas <b>a la primera</b>. Al final verás tu nota. Puedes repetir cuantas veces quieras."], etq:"✅ ¿Cómo funciona?"}
    ]},
    { titulo:"Razón, proporción y magnitudes", cuerpo:[
      {comp:{q:"En una clase hay 15 chicas y 25 alumnos en total. La razón entre chicas y alumnos es:", opciones:["$\\dfrac35$","$\\dfrac53$","$\\dfrac38$"], ok:0, explic:"$\\dfrac{15}{25} = \\dfrac35$: 3 de cada 5 alumnos son chicas.", pista:"Chicas arriba, total abajo, y simplifica."}},
      {comp:{q:"Halla $x$: $\\;\\dfrac69 = \\dfrac{x}{12}$", sol:8, explic:"$9 \\cdot x = 6 \\cdot 12 = 72 \\Rightarrow x = 8$", pista:"Multiplica en cruz."}},
      {comp:{q:"La velocidad de un coche y el tiempo que tarda en un viaje son directamente proporcionales.", opciones:VF, ok:1, explic:"Al doble de velocidad, la mitad de tiempo: son <b>inversamente</b> proporcionales.", pista:"¿Qué pasa con el tiempo si vas el doble de rápido?"}},
      {comp:{q:"La edad de una persona y su peso son:", opciones:["Directamente proporcionales","Inversamente proporcionales","Ninguna de las dos"], ok:2, explic:"Al doble de edad no se pesa el doble ni la mitad.", pista:"Piensa en un niño de 5 años y otro de 10."}}
    ]},
    { titulo:"Regla de tres y compuesta", cuerpo:[
      {comp:{q:"3 kg de manzanas cuestan 7,50 €. ¿Cuánto cuestan 5 kg?", sol:12.5, unidad:"€", explic:"1 kg = 2,50 € → 5 · 2,50 = 12,50 €", pista:"Calcula lo que cuesta 1 kg."}},
      {comp:{q:"4 obreros tardan 15 días en una obra. ¿Cuántos días tardan 6 obreros?", sol:10, unidad:"días", explic:"Inversa: le damos la vuelta, 4/6 = x/15 → 6 · x = 60 → x = 10 días", pista:"Más obreros, menos días: el producto se mantiene."}},
      {comp:{q:"2 máquinas hacen 100 piezas en 5 h. ¿Cuántas piezas hacen 4 máquinas en 4 h?", sol:160, unidad:"piezas", explic:"1 máquina en 1 h: 100 : 10 = 10 piezas → 4 · 4 · 10 = 160", pista:"¿Cuántas piezas hace 1 máquina en 1 hora?"}},
      {comp:{q:"En un mapa a escala 1 : 50 000, dos pueblos están a 4 cm. ¿Cuántos km hay?", sol:2, unidad:"km", explic:"4 · 50 000 = 200 000 cm = 2 km", pista:"Multiplica y pasa los cm a km (100 000 cm = 1 km)."}}
    ]},
    { titulo:"Repartos", cuerpo:[
      {comp:{q:"Reparte 600 € de forma directamente proporcional a 1, 2 y 3. ¿Cuánto le toca al tercero?", sol:300, unidad:"€", explic:"6 partes → 100 € cada una → 3 · 100 = 300 €", pista:"Suma las partes y divide."}},
      {comp:{q:"Reparte 70 € de forma inversamente proporcional a 2 y 5. ¿Cuánto le toca al que tiene 2?", sol:50, unidad:"€", explic:"$\\tfrac12, \\tfrac15$ → $\\tfrac{5}{10}, \\tfrac{2}{10}$ → partes 5 y 2 → 70 : 7 = 10 → 50 €", pista:"Da la vuelta y pon el mismo denominador."}},
      {comp:{q:"En un reparto inverso, quien tiene el número más grande recibe más.", opciones:VF, ok:1, explic:"En el inverso, quien tiene más (faltas, tiempo…) recibe <b>menos</b>.", pista:"Piensa en un reparto según las faltas."}}
    ]},
    { titulo:"Porcentajes", cuerpo:[
      {comp:{q:"¿Cuánto es el 30 % de 250?", sol:75, explic:"C_F = 250 · 0,30 = 75", pista:"Escribe el 30 % en decimal y multiplica."}},
      {comp:{q:"¿Qué porcentaje es 18 de 72?", sol:25, unidad:"%", explic:"18 = x · 72 → x = 18 : 72 = 0,25 → 25 %", pista:"C_F = I_V · C_I: pon x en lo que buscas."}},
      {comp:{q:"45 es el 15 % de una cantidad. ¿Cuál es?", sol:300, explic:"45 = 0,15 · x → x = 45 : 0,15 = 300", pista:"C_F = I_V · C_I: pon x en lo que buscas."}},
      {comp:{q:"El índice de variación de una bajada del 8 % es:", opciones:["0,92","1,08","0,08"], ok:0, explic:"Baja: I_V = 1 − 0,08 = 0,92", pista:"¿Qué porcentaje pagas si te descuentan un 8 %?"}},
      {comp:{q:"¿Cuánto cuesta con el 21 % de IVA algo de 200 €?", sol:242, unidad:"€", explic:"200 · 1,21 = 242 €", pista:"Multiplica por 1,21."}},
      {comp:{q:"Con un 25 % de rebaja he pagado 60 €. ¿Cuánto costaba?", sol:80, unidad:"€", explic:"I_V = 1 − 0,25 = 0,75 → 60 = 0,75 · x → x = 60 : 0,75 = 80 €", pista:"C_F = I_V · C_I con I_V = 0,75: pon x en lo que buscas."}},
      {comp:{q:"Subir un 10 % y después bajar un 10 % deja el precio igual.", opciones:VF, ok:1, explic:"1,10 · 0,90 = 0,99: queda un 1 % más barato.", pista:"Prueba con 100 €."}}
    ]},
    { titulo:"Interés y grifos", cuerpo:[
      {comp:{q:"¿Qué interés dan 1000 € al 3 % durante 2 años?", sol:60, unidad:"€", explic:"1000 · 0,03 · 2 = 60 €", pista:"I = c · r · t con r = 0,03."}},
      {comp:{q:"Dos grifos iguales tardan cada uno 2 h en llenar un depósito. ¿Cuántas horas tardan juntos?", sol:1, unidad:"h", explic:"½ + ½ = 1 → 1 hora", pista:"Suma lo que llena cada uno en 1 hora."}},
      {comp:{q:"Un grifo llena un depósito en 2 h y el desagüe lo vacía en 6 h. ¿Cuántas horas tarda en llenarse?", sol:3, unidad:"h", explic:"1/2 − 1/6 = 2/6 = 1/3 → 3 horas", pista:"El desagüe resta; después, la vuelta."}}
    ]}
  ]
});
})();

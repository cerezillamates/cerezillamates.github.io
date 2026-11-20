/* 3.º ESO · Estadística · Apartado 2: Tablas de frecuencias
   nᵢ (absoluta), Nᵢ (absoluta acumulada), fᵢ = nᵢ/N (relativa) y % = fᵢ · 100. */
(function(){
const F = EST.F;
// tabla de frecuencias completa: xs valores, ns frecuencias; acum: con columna Nᵢ; frac: fᵢ como fracción
function tf(xs, ns, o={}){
  const N = ns.reduce((a,b)=>a+b,0); let acc = 0;
  const cab = ["$x_i$","$n_i$"].concat(o.acum?["$N_i$"]:[], ["$f_i$","%"]);
  const filas = xs.map((x,i)=>{ acc += ns[i]; const f = ns[i]/N;
    return [x, ns[i]].concat(o.acum?[acc]:[], [o.frac?`$\\frac{${ns[i]}}{${N}} = ${F(f,4)}$`:F(f,4), F(f*100,2)+" %"]); });
  const tot = ["Total", N].concat(o.acum?[""]:[], ["1","100 %"]);
  return EST.tabla(cab, filas, tot);
}
const cuatro = `<div class="est-fr">
  <div><b>$n_i$</b><span>frecuencia absoluta</span><i>cuántas veces sale</i></div>
  <div><b>$N_i$</b><span>absoluta acumulada</span><i>voy sumando las $n_i$</i></div>
  <div><b>$f_i = \\dfrac{n_i}{N}$</b><span>frecuencia relativa</span><i>la parte del total</i></div>
  <div><b>$\\% = f_i \\cdot 100$</b><span>porcentaje</span><i>de cada 100</i></div></div>`;

TEMA.registrar({
  num: 2,
  titulo: "Tablas de frecuencias",
  videos: [
    {t:"Tabla de frecuencias: ejercicios resueltos", url:"https://www.youtube.com/watch?v=iPEt789ewVM"}
  ],

  clase: [
    { nivel:"Aplicación", min:6,
      enun:"Hemos preguntado a los alumnos de 2.º A cuántos hermanos tienen: 1, 2, 0, 1, 3, 1, 2, 1, 0, 2, 1, 1, 4, 2, 1, 0, 1, 2, 3, 1. Haz la tabla de frecuencias (absoluta, absoluta acumulada, relativa y porcentaje).",
      pasos:["Cuento cuántas veces sale cada valor ($n_i$). Hay $N = 20$ datos.",
             tf([0,1,2,3,4],[3,9,5,2,1],{acum:true,frac:true}),
             "Compruebo: las $n_i$ suman 20, las $f_i$ suman 1 y los % suman 100 ✓"],
      res:"La tabla de arriba: el valor más frecuente es 1 hermano (45 %)." },
    { nivel:"Aplicación", min:5,
      enun:"Deporte favorito de 20 alumnos: fútbol 7, baloncesto 5, natación 4 y pádel 4. Haz la tabla de frecuencias (absoluta, relativa y porcentaje). ¿Tiene sentido la columna $N_i$?",
      pasos:[tf(["Fútbol","Baloncesto","Natación","Pádel"],[7,5,4,4],{frac:true}),
             "Es <b>cualitativo y no se puede ordenar</b>: no tiene sentido acumular (¿«hasta baloncesto»?)."],
      res:"Fútbol 35 %, baloncesto 25 %, natación 20 % y pádel 20 %. Sin columna $N_i$." },
    { nivel:"Práctica", min:5,
      enun:"En una encuesta sobre cuántas veces van al cine al mes hay $N = 40$ datos. Completa la tabla: $x_i$: 0, 1, 2, 3. $n_i$: 8, ?, 14, ?. %: 20 %, 30 %, 35 %, 15 %.",
      pasos:["Cada $n_i$ es <b>el % de 40</b>: paso el % a decimal y multiplico.",
             "$x = 1$: el 30 % de 40 $= 0,30 \\cdot 40 = 12$",
             "$x = 3$: el 15 % de 40 $= 0,15 \\cdot 40 = 6$",
             "Compruebo: $8 + 12 + 14 + 6 = 40$ ✓"],
      res:"Faltan $n_i = 12$ (para 1 vez) y $n_i = 6$ (para 3 veces)." },
    { nivel:"Problema", min:6,
      enun:"Opinión de 30 vecinos sobre el autobús: muy mal 3, mal 6, normal 11, bien 7 y muy bien 3. Haz la tabla con $N_i$. ¿Cuántos vecinos opinan «normal» o peor? ¿Qué porcentaje?",
      pasos:["Es cualitativo pero <b>ordenable</b> (de peor a mejor): sí se acumula.",
             tf(["Muy mal","Mal","Normal","Bien","Muy bien"],[3,6,11,7,3],{acum:true}),
             "«Normal» o peor: lo dice la columna $N_i$ en «normal» → 20 vecinos.",
             "$\\dfrac{20}{30} \\cdot 100 \\approx 66,67\\,\\%$"],
      res:"<b>20 vecinos</b> opinan «normal» o peor: el <b>66,67 %</b>." }
  ],

  casa: [
    { nivel:"Básico", enun:"Número de mascotas de 16 familias: 0, 1, 1, 2, 0, 3, 1, 0, 1, 2, 1, 0, 4, 1, 2, 1. Haz la tabla de frecuencias completa.",
      pasos:["$N = 16$", tf([0,1,2,3,4],[4,7,3,1,1],{acum:true,frac:true})],
      res:"Lo más frecuente es 1 mascota (43,75 %)." },
    { nivel:"Básico", enun:"Medio de transporte de 25 alumnos: andando 10, autobús 8, coche 5 y bici 2. Haz la tabla (absoluta, relativa y porcentaje).",
      pasos:[tf(["Andando","Autobús","Coche","Bici"],[10,8,5,2],{frac:true}), "Cualitativo no ordenable: no se acumula."],
      res:"Andando 40 %, autobús 32 %, coche 20 % y bici 8 %." },
    { nivel:"Consolidación", enun:"Libros leídos en vacaciones ($N = 50$). $x_i$: 0, 1, 2, 3, 4. $n_i$: 5, ?, 15, ?, 10. %: 10 %, 20 %, 30 %, 20 %, 20 %. Completa la tabla.",
      pasos:["$x = 1$: el 20 % de 50 $= 0,20 \\cdot 50 = 10$", "$x = 3$: el 20 % de 50 $= 0,20 \\cdot 50 = 10$", "Compruebo: $5 + 10 + 15 + 10 + 10 = 50$ ✓"],
      res:"Faltan $n_i = 10$ y $n_i = 10$." },
    { nivel:"Consolidación", enun:"Satisfacción de 40 clientes: nada 4, poco 8, bastante 18, mucho 10. Haz la tabla con $N_i$.",
      pasos:["Cualitativo ordenable: se acumula.", tf(["Nada","Poco","Bastante","Mucho"],[4,8,18,10],{acum:true})],
      res:"El 45 % está «bastante» satisfecho y 12 clientes (30 %) poco o nada." },
    { nivel:"Problema", enun:"De una tabla solo sabemos la columna $N_i$: 2, 7, 15, 18, 20 para los valores 1, 2, 3, 4, 5. Calcula las $n_i$ y el porcentaje de cada valor.",
      pasos:["Cada $n_i$ es lo que <b>sube</b> la acumulada: 2, $7 - 2 = 5$, $15 - 7 = 8$, $18 - 15 = 3$, $20 - 18 = 2$.",
             tf([1,2,3,4,5],[2,5,8,3,2],{acum:true})],
      res:"$n_i$: 2, 5, 8, 3 y 2. Porcentajes: 10 %, 25 %, 40 %, 15 % y 10 %." },
    { nivel:"Para pensar", enun:"Lucía dice que en su tabla los porcentajes suman 101 %. ¿Está mal hecha?",
      pasos:["Puede estar bien: al <b>redondear</b> cada % se pierde o se gana un poco.", "Por ejemplo, con 3 datos iguales: 33,3 % + 33,3 % + 33,3 % = 99,9 %.", "Si la diferencia es grande (110 %), sí hay un error."],
      res:"Un 101 % puede ser solo del redondeo." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">Tengo 20 respuestas desordenadas. ¿Cómo las resumo?</p>`}
    ]},
    { titulo:"Las cuatro frecuencias", cuerpo:[
      {html:cuatro},
      {nota:["$N$ es el número total de datos."]}
    ]},
    { titulo:"Hacemos la tabla", cuerpo:[
      {ej:{enun:"¿Cuántos hermanos tienes? Respuestas de 20 alumnos: 1, 2, 0, 1, 3, 1, 2, 1, 0, 2, 1, 1, 4, 2, 1, 0, 1, 2, 3, 1.",
        pasos:["Ordeno los valores y cuento cuántas veces sale cada uno.", tf([0,1,2,3,4],[3,9,5,2,1],{acum:true,frac:true})],
        res:"El 45 % tiene 1 hermano y 17 alumnos tienen 2 hermanos o menos."}}
    ]},
    { titulo:"✅ Comprueba siempre", cuerpo:[
      {prop:[{lista:["Las $n_i$ suman $N$.", "La última $N_i$ es $N$.", "Las $f_i$ suman 1.", "Los % suman 100 (con el redondeo, puede salir 99,9 o 100,1)."]}], etq:"Comprobación"}
    ]},
    { titulo:"¿Y si es cualitativo?", cuerpo:[
      {cols:[
        [{prop:["<b>No ordenable</b> (deporte, color): $n_i$, $f_i$ y %. <b>No se acumula</b>."], etq:"⚽ Deporte"}],
        [{prop:["<b>Ordenable</b> (muy mal, mal, normal…): <b>sí se acumula</b>: «normal o peor»."], etq:"😊 Opinión"}]
      ]},
      {html:tf(["Fútbol","Baloncesto","Natación","Pádel"],[7,5,4,4])}
    ]},
    { titulo:"Tablas con huecos", cuerpo:[
      {ej:{enun:"Hay $N = 40$ datos y el valor 1 tiene el 30 %. ¿Cuál es su $n_i$?",
        pasos:["$n_i$ es <b>el 30 % de 40</b>: paso el % a decimal y multiplico.", "$0,30 \\cdot 40 = 12$"], res:"$n_i = 12$."}},
      {truco:["Si me dan la $N_i$, la $n_i$ es lo que <b>sube</b> respecto a la fila de arriba."], etq:"🪄 Truco"}
    ]},
    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:["<b>Olvidar un dato al contar</b>: tacha cada dato cuando lo cuentes y comprueba que las $n_i$ suman $N$."], etq:"⚠️ Error 1"},
      {aviso:["<b>Acumular un cualitativo no ordenable</b>: «hasta baloncesto» no significa nada."], etq:"⚠️ Error 2"},
      {aviso:["<b>Dar $f_i$ como porcentaje</b>: 0,45 es el 45 %."], etq:"⚠️ Error 3"}
    ]},
    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{lista:["$n_i$: cuántas veces. $N_i$: voy sumando. $f_i = \\dfrac{n_i}{N}$. % $= f_i \\cdot 100$.",
        "Las $n_i$ suman $N$, las $f_i$ suman 1 y los % suman 100.",
        "Solo se acumula si los valores se pueden ordenar."]}]},
      {estudio:[
        {comp:{q:"Datos: 2, 3, 2, 1, 2, 3. ¿Cuál es la $n_i$ del 2?", sol:3, explic:"El 2 sale 3 veces.", pista:"Cuenta cuántas veces sale el 2."}},
        {comp:{q:"Un valor sale 6 veces de 24 datos. $f_i =$", sol:0.25, explic:"$f_i = \\dfrac{6}{24} = 0,25$", pista:"Divide $n_i$ entre $N$."}},
        {comp:{q:"$f_i = 0,35$. ¿Qué porcentaje es?", sol:35, unidad:"%", explic:"$0,35 \\cdot 100 = 35\\,\\%$", pista:"Multiplica por 100."}},
        {comp:{q:"Las $n_i$ son 3, 5 y 4. ¿Cuánto vale la $N_i$ del tercer valor?", sol:12, explic:"$3 + 5 + 4 = 12$", pista:"Suma las $n_i$ hasta ese valor."}}
      ]}
    ]}
  ]
});
})();

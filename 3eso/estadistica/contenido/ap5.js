/* 3.º ESO · Estadística · Apartado 5: Datos agrupados en intervalos
   Intervalos [a, b): entra a, no entra b. Marca de clase, media con las marcas, intervalo modal e intervalo mediano. */
(function(){
const F = EST.F;
// tabla agrupada: e extremos, ns frecuencias
function tg(e, ns, o={}){
  let acc = 0, S = 0; const N = ns.reduce((a,b)=>a+b,0), sep = e.some(x=>x%1) ? "; " : ", ";
  const filas = ns.map((n,i)=>{ const m = (e[i]+e[i+1])/2; acc += n; S += m*n;
    return [`[${F(e[i])}${sep}${F(e[i+1])})`, F(m), n].concat(o.sinN?[]:[acc], o.sinX?[]:[F(m*n)]); });
  const cab = ["Intervalo","$x_i$","$n_i$"].concat(o.sinN?[]:["$N_i$"], o.sinX?[]:["$x_i \\cdot n_i$"]);
  return EST.tabla(cab, filas, ["Total","",N].concat(o.sinN?[]:[""], o.sinX?[]:[F(S)]));
}
const ideas = `<div class="est-fr">
  <div><b>$[a, b)$</b><span>entra $a$, no entra $b$</span><i>[10, 20): el 10 sí, el 20 no</i></div>
  <div><b>$x_i = \\dfrac{a + b}{2}$</b><span>marca de clase</span><i>el centro del intervalo</i></div>
  <div><b>Intervalo modal</b><span>el de la $n_i$ más grande</span><i>la barra más alta</i></div>
  <div><b>Intervalo mediano</b><span>donde $N_i$ llega a $\\dfrac{N}{2}$</span><i>el que tiene el dato del centro</i></div></div>`;

TEMA.registrar({
  num: 5,
  titulo: "Datos agrupados en intervalos",
  videos: [
    {t:"Tabla de frecuencias con datos agrupados", url:"https://www.youtube.com/watch?v=Xf79KM86qoQ"}
  ],

  clase: [
    { nivel:"Aplicación", min:6,
      enun:"Alturas (en cm) de los alumnos de 3.º B: [140, 150) 3 alumnos, [150, 160) 8, [160, 170) 11, [170, 180) 6 y [180, 190) 2. <b>a)</b> Calcula las marcas de clase. <b>b)</b> Calcula la media. <b>c)</b> ¿Cuál es el intervalo modal? <b>d)</b> ¿Y el intervalo mediano?",
      pasos:["<b>a)</b> La marca de clase es el centro: $\\dfrac{140 + 150}{2} = 145$, y así 155, 165, 175 y 185.",
             tg([140,150,160,170,180,190],[3,8,11,6,2]),
             "<b>b)</b> $\\bar{x} = \\dfrac{4910}{30} \\approx 163,67$ cm",
             "<b>c)</b> La $n_i$ más grande es 11: intervalo modal [160, 170).",
             "<b>d)</b> $\\dfrac{N}{2} = 15$. La $N_i$ llega a 15 en [160, 170) (pasa de 11 a 22)."],
      res:"Media 163,67 cm. Intervalo modal y mediano: [160, 170)." },
    { nivel:"Aplicación", min:5,
      enun:"Peso (en kg) de las mochilas de 30 alumnos: [2, 4) 4, [4, 6) 9, [6, 8) 12 y [8, 10) 5. Calcula las marcas de clase, la media, el intervalo modal y el intervalo mediano.",
      pasos:[tg([2,4,6,8,10],[4,9,12,5]), "$\\bar{x} = \\dfrac{186}{30} = 6,2$ kg", "Modal: [6, 8) (12 alumnos).", "$\\dfrac{N}{2} = 15$: la $N_i$ pasa de 13 a 25 en [6, 8)."],
      res:"Media 6,2 kg. Intervalo modal y mediano: [6, 8)." },
    { nivel:"Práctica", min:5,
      enun:"El histograma recoge el tiempo de lectura a la semana de un grupo de alumnos."+EST.histo(["0","30","60","90","120","150"],[4,10,14,8,4],{titulo:"minutos"})+"Construye la tabla con los intervalos, las marcas de clase y las $n_i$. ¿Cuántos alumnos hay? ¿Cuál es el intervalo modal?",
      pasos:["Leo la altura de cada barra: es su $n_i$.", tg([0,30,60,90,120,150],[4,10,14,8,4],{sinN:true,sinX:true}), "$N = 4 + 10 + 14 + 8 + 4 = 40$", "Modal: la barra más alta, [60, 90)."],
      res:"Hay 40 alumnos y el intervalo modal es [60, 90)." },
    { nivel:"Problema", min:7,
      enun:"Minutos que tardan 20 compañeros en llegar al instituto: 5, 7, 8, 10, 10, 12, 12, 12, 15, 15, 18, 20, 20, 22, 25, 25, 28, 30, 32, 34. Agrúpalos en intervalos de 10 en 10 empezando en 0 y calcula la media con las marcas. ¿Qué porcentaje tarda menos de 20 minutos?",
      pasos:["[0, 10): 5, 7, 8 → 3. [10, 20): del 10 al 18 → 8. [20, 30): del 20 al 28 → 6. [30, 40): 30, 32, 34 → 3. (El 10 va en [10, 20) y el 20 en [20, 30).)",
             tg([0,10,20,30,40],[3,8,6,3]),
             "$\\bar{x} = \\dfrac{390}{20} = 19,5$ min",
             "Menos de 20: $3 + 8 = 11$ → $\\dfrac{11}{20} \\cdot 100 = 55\\,\\%$",
             "Con los datos sueltos la media es $\\dfrac{360}{20} = 18$: al agrupar se pierde algo de precisión."],
      res:"Media 19,5 minutos. Tarda menos de 20 minutos el 55 %." }
  ],

  casa: [
    { nivel:"Básico", enun:"Minutos que tardan 25 alumnos en llegar al instituto: [0, 10) 6, [10, 20) 10, [20, 30) 5, [30, 40) 3 y [40, 50) 1. Calcula las marcas de clase, la media, el intervalo modal y el intervalo mediano.",
      pasos:[tg([0,10,20,30,40,50],[6,10,5,3,1]), "$\\bar{x} = \\dfrac{455}{25} = 18,2$ min", "Modal: [10, 20).", "$\\dfrac{N}{2} = 12,5$: la $N_i$ pasa de 6 a 16 en [10, 20)."],
      res:"Media 18,2 min. Intervalo modal y mediano: [10, 20)." },
    { nivel:"Básico", enun:"Minutos de móvil al día de 40 alumnos: [0, 30) 5, [30, 60) 12, [60, 90) 14, [90, 120) 6 y [120, 150) 3. Calcula la media, el intervalo modal y el intervalo mediano.",
      pasos:[tg([0,30,60,90,120,150],[5,12,14,6,3]), "$\\bar{x} = \\dfrac{2700}{40} = 67,5$ min", "Modal: [60, 90).", "$\\dfrac{N}{2} = 20$: la $N_i$ pasa de 17 a 31 en [60, 90)."],
      res:"Media 67,5 min. Intervalo modal y mediano: [60, 90)." },
    { nivel:"Consolidación", enun:"El histograma recoge el peso (en kg) de los recién nacidos de un hospital en una semana."+EST.histo(["2","2,5","3","3,5","4","4,5"],[3,7,12,9,4],{titulo:"kg"})+"Construye la tabla. ¿Cuántos bebés hay? ¿Cuál es el intervalo modal?",
      pasos:[tg([2,2.5,3,3.5,4,4.5],[3,7,12,9,4],{sinN:true,sinX:true}), "$N = 3 + 7 + 12 + 9 + 4 = 35$", "Modal: [3; 3,5)."],
      res:"Hay 35 bebés y el intervalo modal es [3; 3,5)." },
    { nivel:"Consolidación", enun:"Duración en minutos de 24 llamadas: 1, 2, 3, 3, 4, 5, 5, 6, 6, 7, 7, 7, 8, 8, 9, 10, 11, 12, 12, 13, 14, 15, 17, 19. Agrúpalas en intervalos de 4 minutos empezando en 0 y calcula la media y el intervalo modal.",
      pasos:["[0, 4): 4 llamadas. [4, 8): 8. [8, 12): 5. [12, 16): 5. [16, 20): 2.", tg([0,4,8,12,16,20],[4,8,5,5,2]), "$\\bar{x} = \\dfrac{212}{24} \\approx 8,83$ min", "Modal: [4, 8)."],
      res:"Media 8,83 minutos. Intervalo modal [4, 8)." },
    { nivel:"Problema", enun:"De una tabla agrupada solo sabemos que las marcas de clase son 15, 25, 35 y 45 y que la amplitud es igual en todos. ¿Cuáles son los intervalos?",
      pasos:["De una marca a la siguiente hay 10: la amplitud es 10.", "Cada intervalo va 5 por debajo y 5 por encima de su marca."],
      res:"[10, 20), [20, 30), [30, 40) y [40, 50)." },
    { nivel:"Para pensar", enun:"Pablo pone los intervalos [0, 10], [10, 20], [20, 30]. ¿Qué problema tiene?",
      pasos:["El 10 y el 20 están en dos intervalos a la vez: se contarían dos veces.", "Por eso se usan intervalos $[a, b)$: el extremo de la derecha no entra."],
      res:"Hay datos que entrarían en dos intervalos; hay que usar [0, 10), [10, 20), [20, 30)." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">Tengo 30 alturas distintas. ¿Hago una tabla de 30 filas?</p>`}
    ]},
    { titulo:"¿Por qué agrupar?", cuerpo:[
      {prop:["Si hay <b>muchos valores distintos</b> (alturas, tiempos, pesos), los agrupamos en <b>intervalos</b> de la misma amplitud."], etq:"Agrupar"},
      {html:ideas}
    ]},
    { titulo:"La tabla con intervalos", cuerpo:[
      {ej:{enun:"Alturas de 30 alumnos: [140, 150) 3, [150, 160) 8, [160, 170) 11, [170, 180) 6, [180, 190) 2.",
        pasos:[tg([140,150,160,170,180,190],[3,8,11,6,2]), "$\\bar{x} = \\dfrac{\\sum x_i \\cdot n_i}{N} = \\dfrac{4910}{30} \\approx 163,67$ cm"],
        res:"La media es 163,67 cm."}}
    ]},
    { titulo:"Intervalo modal e intervalo mediano", cuerpo:[
      {cols:[
        [{prop:["<b>Modal</b>: el de la $n_i$ más grande → [160, 170), con 11."], etq:"👑 Modal"}],
        [{prop:["<b>Mediano</b>: $\\dfrac{N}{2} = 15$. La $N_i$ va 3, 11, 22… El 15 está en [160, 170)."], etq:"🎯 Mediano"}]
      ]},
      {html:EST.histo(["140","150","160","170","180","190"],[3,8,11,6,2],{titulo:"altura (cm)"})}
    ]},
    { titulo:"Hacer los intervalos", cuerpo:[
      {ej:{enun:"Minutos hasta el instituto de 20 compañeros: 5, 7, 8, 10, 10, 12, 12, 12, 15, 15, 18, 20, 20, 22, 25, 25, 28, 30, 32, 34.",
        pasos:["Del 5 al 34: intervalos de 10 desde 0.", "Cuento: [0, 10) 3, [10, 20) 8, [20, 30) 6, [30, 40) 3. El 10 va en [10, 20).", tg([0,10,20,30,40],[3,8,6,3],{sinN:true})],
        res:"Media con las marcas: $\\dfrac{390}{20} = 19,5$ min."}},
      {nota:["Con los datos sueltos la media es 18: al agrupar hacemos como si todos valieran la marca de clase. Es una aproximación."]}
    ]},
    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:["<b>Meter el extremo derecho</b>: el 20 no va en [10, 20), va en [20, 30)."], etq:"⚠️ Error 1"},
      {aviso:["<b>Multiplicar por el extremo</b> en vez de por la marca de clase."], etq:"⚠️ Error 2"},
      {aviso:["<b>Dar como intervalo mediano el del centro de la tabla</b>: hay que mirar la $N_i$."], etq:"⚠️ Error 3"}
    ]},
    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{lista:["Intervalos $[a, b)$: entra $a$, no entra $b$.",
        "Marca de clase: $x_i = \\dfrac{a + b}{2}$. Con ella se calcula la media.",
        "Modal: la $n_i$ mayor. Mediano: donde $N_i$ llega a $\\dfrac{N}{2}$.",
        "Se dibuja con un histograma."]}]},
      {estudio:[
        {comp:{q:"Intervalo [20, 30). Marca de clase =", sol:25, explic:"$\\dfrac{20 + 30}{2} = 25$", pista:"El centro del intervalo."}},
        {comp:{q:"Marcas 5 y 15, con frecuencias 2 y 2. Media =", sol:10, explic:"$\\dfrac{5 \\cdot 2 + 15 \\cdot 2}{4} = \\dfrac{40}{4} = 10$", pista:"$\\sum x_i \\cdot n_i$ entre $N$."}},
        {comp:{q:"¿En qué intervalo va el dato 30?", opciones:["[20, 30)","[30, 40)"], ok:1, explic:"En $[a, b)$ el extremo derecho no entra.", pista:"¿Entra el 30 en [20, 30)?"}}
      ]}
    ]}
  ]
});
})();

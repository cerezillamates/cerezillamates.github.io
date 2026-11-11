/* 2.º ESO · Tema 3 · Apartado 9: Grifos y trabajo en común
   Apuntes de la web de la profesora: ¿qué parte llena cada uno en 1 hora? 1/a + 1/b (el desagüe resta)
   y al final se le da la vuelta. Decisión de la profesora (11-nov-2026): los MÓVILES se dejan para el tema de álgebra. */
(function(){
const R = String.raw;
// depósito dividido en n partes; llenas = [nº partes de A, nº partes de B]
const deposito = (n, llenas, pie) => {
  const h = 200 / n; let s = "";
  for(let k=0;k<n;k++){ const y = 210 - (k+1)*h; const c = k < llenas[0] ? "#93c5fd" : k < llenas[0]+llenas[1] ? "#fdba74" : "#fff";
    s += `<rect x="30" y="${y}" width="120" height="${h}" fill="${c}" stroke="#4338ca" stroke-width="1.5"/>`; }
  return `<figure class="dib"><svg viewBox="0 0 180 230" role="img" aria-label="Depósito dividido en ${n} partes">${s}<rect x="30" y="10" width="120" height="200" fill="none" stroke="#1e1b3a" stroke-width="4"/></svg>${pie?`<figcaption>${pie}</figcaption>`:""}</figure>`;
};
TEMA.registrar({
  num: 9,
  titulo: "Grifos y trabajo en común",
  videos: [
    {t:"Problema de grifos: dos grifos llenando un depósito", url:"https://www.youtube.com/results?search_query=problema+de+grifos+dos+grifos+llenan+deposito"}
  ],

  clase: [
    { nivel:"Aplicación", min:5,
      enun:"Un grifo llena un depósito en 4 horas y otro en 12 horas. ¿Cuánto tardan los dos juntos?",
      pasos:[R`En 1 hora: $\dfrac14 + \dfrac{1}{12} = \dfrac{3}{12} + \dfrac{1}{12} = \dfrac{4}{12} = \dfrac13$ del depósito`, R`Le doy la vuelta: $3$ horas`, "Comprueba: tardan menos que el más rápido (4 h) ✓"],
      res:"Los dos juntos tardan <b>3 horas</b>." },
    { nivel:"Aplicación", min:5,
      enun:"Un grifo llena un depósito en 3 horas y el desagüe lo vacía en 6 horas. Si están abiertos los dos, ¿cuánto tarda en llenarse?",
      pasos:[R`El desagüe resta: $\dfrac13 - \dfrac16 = \dfrac26 - \dfrac16 = \dfrac16$`, "Le doy la vuelta: 6 horas"],
      res:"El depósito tarda <b>6 horas</b> en llenarse." },
    { nivel:"Práctica", min:5,
      enun:"Para imprimir los apuntes del tema, una impresora tarda 20 minutos y otra 30 minutos. ¿Cuánto tardan si imprimen a la vez?",
      pasos:[R`En 1 minuto: $\dfrac{1}{20} + \dfrac{1}{30} = \dfrac{3}{60} + \dfrac{2}{60} = \dfrac{5}{60} = \dfrac{1}{12}$`, "Le doy la vuelta: 12 minutos"],
      res:"Imprimiendo a la vez tardan <b>12 minutos</b>." },
    { nivel:"Práctica", min:5,
      enun:"Para ordenar la biblioteca del aula, Lucía tarda 3 horas y Marcos 6 horas. ¿Cuánto tardan si la ordenan juntos?",
      pasos:[R`En 1 hora: Lucía hace $\dfrac13$ y Marcos $\dfrac16$`, R`Juntos: $\dfrac13 + \dfrac16 = \dfrac26 + \dfrac16 = \dfrac36 = \dfrac12$`, "Le doy la vuelta: 2 horas"],
      res:"Juntos tardan <b>2 horas</b> en ordenar la biblioteca." },
    { nivel:"Problema", min:6,
      enun:"Un grifo llena un aljibe en 6 horas, pero tiene una fuga que lo vacía en 12 horas. ¿Cuánto tarda en llenarse?",
      pasos:[R`El grifo llena $\dfrac16$ cada hora; la fuga vacía $\dfrac{1}{12}$: <b>resta</b>`, R`$\dfrac16 - \dfrac{1}{12} = \dfrac{2}{12} - \dfrac{1}{12} = \dfrac{1}{12}$`, "Le doy la vuelta: 12 horas", "¿Tiene sentido? Con la fuga tarda más que las 6 horas del grifo solo ✓"],
      res:"El aljibe tarda <b>12 horas</b> en llenarse." },
    { nivel:"Reto", min:7,
      enun:"Un grifo llena un depósito en 4 horas y otro en 12 horas. Primero se abre solo el primero durante 1 hora y después se abren los dos. ¿Cuánto tarda en llenarse en total?",
      pasos:[R`En 1 hora el primero llena $\dfrac14$. Queda $1 - \dfrac14 = \dfrac34$ del depósito`,
             R`Juntos, en 1 hora: $\dfrac14 + \dfrac{1}{12} = \dfrac{3}{12} + \dfrac{1}{12} = \dfrac{4}{12} = \dfrac13$`,
             R`Para lo que queda: $\dfrac34 : \dfrac13 = \dfrac34 \cdot 3 = \dfrac94 = 2,25$ h`, "2,25 h = 2 h 15 min. En total: 1 h + 2 h 15 min"],
      res:"El depósito tarda <b>3 h 15 min</b> en llenarse." }
  ],

  casa: [
    { nivel:"Básico", enun:"Un grifo llena una bañera en 2 horas y otro en 6 horas. ¿Cuánto tardan juntos?",
      pasos:[R`$\dfrac12 + \dfrac16 = \dfrac36 + \dfrac16 = \dfrac46 = \dfrac23$`, R`Le doy la vuelta: $\dfrac32$ h $= 1,5$ h`], res:"Juntos tardan <b>1 h 30 min</b>." },
    { nivel:"Básico", enun:"Tres grifos llenan un depósito en 2, 3 y 6 horas. ¿Cuánto tardan los tres juntos?",
      pasos:[R`$\dfrac12 + \dfrac13 + \dfrac16 = \dfrac36 + \dfrac26 + \dfrac16 = \dfrac66 = 1$`], res:"Los tres juntos tardan <b>1 hora</b>." },
    { nivel:"Consolidación", enun:"Ana pinta su habitación en 6 horas y Luis en 3 horas. ¿Cuánto tardan si la pintan juntos?",
      pasos:[R`$\dfrac16 + \dfrac13 = \dfrac16 + \dfrac26 = \dfrac36 = \dfrac12$`, "Le doy la vuelta: 2 horas"], res:"Juntos tardan <b>2 horas</b>." },
    { nivel:"Consolidación", enun:"Un grifo llena un depósito en 4 horas, pero el desagüe está abierto y lo vacía en 12 horas. ¿Cuánto tarda en llenarse?",
      pasos:[R`$\dfrac14 - \dfrac{1}{12} = \dfrac{3}{12} - \dfrac{1}{12} = \dfrac{2}{12} = \dfrac16$`], res:"El depósito tarda <b>6 horas</b> en llenarse." },
    { nivel:"Consolidación", enun:"Una bomba vacía una piscina en 8 horas y otra en 24 horas. ¿Cuánto tardan si funcionan las dos a la vez?",
      pasos:[R`$\dfrac18 + \dfrac{1}{24} = \dfrac{3}{24} + \dfrac{1}{24} = \dfrac{4}{24} = \dfrac16$`, "Le doy la vuelta: 6 horas"], res:"Las dos bombas juntas tardan <b>6 horas</b> en vaciar la piscina." },
    { nivel:"Problema", enun:"Tres pintores pintan la valla del patio: el primero solo tardaría 6 horas, el segundo 12 horas y el tercero 4 horas. ¿Cuánto tardan los tres juntos?",
      pasos:[R`$\dfrac16 + \dfrac{1}{12} + \dfrac14 = \dfrac{2}{12} + \dfrac{1}{12} + \dfrac{3}{12} = \dfrac{6}{12} = \dfrac12$`, "Le doy la vuelta: 2 horas"], res:"Los tres pintores juntos tardan <b>2 horas</b>." },
    { nivel:"Para pensar", enun:"Un grifo tarda 4 horas en llenar un depósito. ¿Cuánto tardan dos grifos iguales? ¿Y sumando los tiempos (4 + 4 = 8 h)? ¿Qué está mal?",
      pasos:[R`$\dfrac14 + \dfrac14 = \dfrac24 = \dfrac12$ → 2 horas`, "Si sumas los tiempos, te sale que con dos grifos tardas más que con uno: ¡no tiene sentido!"], res:"Dos grifos tardan <b>2 horas</b>: los tiempos no se suman." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">Si dos grifos llenan juntos, ¿tardan más o menos?</p>`}
    ]},

    { titulo:"Dos grifos juntos", cuerpo:[
      {cols2:true, cols:[
        [{ej:{enun:"Un grifo llena un depósito en 4 horas y otro en 12 horas. ¿Cuánto tardan juntos?",
          pasos:[R`En 1 hora: $\dfrac14 + \dfrac{1}{12} = \dfrac{3}{12} + \dfrac{1}{12} = \dfrac{4}{12} = \dfrac13$`, "Si en 1 hora llenan 1/3, el depósito entero en <b>3 horas</b>: <b>le doy la vuelta</b>."], res:"Juntos tardan <b>3 horas</b>."}}],
        [{html:deposito(12,[3,1],"Juntos llenan 4 de 12 partes cada hora")}]
      ]}
    ]},

    { titulo:"La clave (lo que hemos hecho): ¿qué parte se hace en 1 hora?", cuerpo:[
      {cols2:true, cols:[
        [{prop:["Si un grifo tarda <b>4 horas</b> en llenar un depósito, en 1 hora llena $\\dfrac14$ del depósito.", "Si tarda <b>12 horas</b>, en 1 hora llena $\\dfrac{1}{12}$."], etq:"La idea"},
         {aviso:["Los tiempos <b>no se suman</b>: dos grifos juntos tardan <b>menos</b> que cada uno."]}],
        [{html:deposito(12,[3,1],"En 1 hora: A llena 3/12 y B 1/12")}]
      ]}
    ]},

    { titulo:"Con desagüe", cuerpo:[
      {ej:{enun:"Un grifo llena un depósito en 3 horas y el desagüe lo vacía en 6 horas. Si están abiertos los dos, ¿cuánto tarda en llenarse?",
        pasos:[R`El grifo llena $\dfrac13$ cada hora; el desagüe vacía $\dfrac16$: <b>resta</b>`, R`$\dfrac13 - \dfrac16 = \dfrac26 - \dfrac16 = \dfrac16$`, "Le doy la vuelta: 6 horas"], res:"El depósito tarda <b>6 horas</b> en llenarse."}},
      {nota:["Sirve igual para cualquier <b>trabajo en común</b>: dos pintores, dos impresoras, dos amigos ordenando la clase…"]}
    ]},

    { titulo:"🪄 Trucos y ⚠️ errores", cuerpo:[
      {truco:["<b>Grifos</b>: sumo lo que hacen en 1 hora y <b>le doy la vuelta</b>. Juntos, siempre menos que el más rápido."], etq:"🪄 Truco"},
      {aviso:["Sumar los tiempos de los grifos o hacer la media."], etq:"⚠️ Error"},
      {aviso:["Olvidar que el desagüe <b>resta</b>."], etq:"⚠️ Error"}
    ]},

    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{lista:[
        "Grifos y trabajos: $\\dfrac1a + \\dfrac1b$ (el desagüe resta) y le doy la vuelta.",
        "Juntos tardan siempre menos que el más rápido.",
        "Horas en decimal a minutos: multiplico por 60 (0,25 h = 15 min)."
      ]}]},
      {estudio:[
        {comp:{q:"Dos grifos llenan un depósito en 3 h y en 6 h. ¿Cuántas horas tardan juntos?", sol:2, unidad:"h", explic:"1/3 + 1/6 = 1/2 → 2 h", pista:"Suma lo que llenan en 1 hora."}},
        {comp:{q:"Un grifo llena un depósito en 4 h y el desagüe lo vacía en 12 h. ¿Cuántas horas tarda en llenarse?", sol:6, unidad:"h", explic:"1/4 − 1/12 = 2/12 = 1/6 → 6 h", pista:"El desagüe resta."}}
      ]}
    ]}
  ]
});
})();

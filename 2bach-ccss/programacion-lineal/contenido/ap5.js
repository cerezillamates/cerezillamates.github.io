/* 2.º Bach CCSS · Programación lineal · Apartado 5: Problemas de enunciado
   Ejemplo de los apuntes de la profesora: la joyería (collares A y B con perlas blancas, grises y negras).
   Ejercicios de sus relaciones y exámenes (palas de pádel, sofás, dieta, colonias, tapices, café) y de la PAU 2026. */
(function(){
const R = String.raw, F = PL.fig, P = PL.pasos;
const duo = (a, b) => `<div class="pl-duo"><div>${a}</div><div>${b}</div></div>`;
const res = (o, t) => `<div class="res paso" data-o="${o}">${t}</div>`;
const tablaF = (f, filas) => `<table class="pl-tab"><tr><th>Vértice</th><th>${TEMA.tx(f)}</th></tr>${filas.map(r=>`<tr><td>${TEMA.tx(r[0])}</td><td class="${r[2]||""}">${TEMA.tx(r[1])}${r[2]==="max"?" ← máx.":r[2]==="min"?" ← mín.":""}</td></tr>`).join("")}</table>`;
const datos = (cab, filas) => `<table class="pl-tab"><tr>${cab.map(c=>`<th>${TEMA.tx(c)}</th>`).join("")}</tr>${filas.map(f=>`<tr>${f.map((c,k)=>`<td${k===0?' style="font-weight:800;text-align:left"':""}>${TEMA.tx(String(c))}</td>`).join("")}</tr>`).join("")}</table>`;
const ejes = () => [{a:1,b:0,c:0,s:">=",flecha:false,col:"#94a3b8"},{a:0,b:1,c:0,s:">=",flecha:false,col:"#94a3b8"}];
const plan = (f, l) => `$$${f}\\qquad\\left\\{\\begin{array}{l}${l.join("\\\\")}\\end{array}\\right.$$`;

const EJ = {x:[-4,74], y:[-4,94], paso:10, etq:20, alt:"Región de la joyería",
  rectas:[{a:2,b:1,c:90,s:"<=",nom:"blancas",pos:.12,dx:10},{a:1,b:1,c:70,s:"<=",nom:"grises",pos:.93,dx:-6,dy:-12,ta:"end"},{a:1,b:2,c:60,s:">=",nom:"negras",pos:.15,dx:6,dy:22},...ejes()]};

TEMA.registrar({
  num: 5,
  titulo: "Problemas de enunciado",
  videos: [
    {t:"Vídeos en YouTube: Problemas de programación lineal de la PAU resueltos", url:"https://www.youtube.com/results?search_query=problema+programacion+lineal+selectividad+andalucia+resuelto"}
  ],

  laminas: [
    { portada:true, cuerpo:[
      {nota:[{lista:[
        "Leer el enunciado y ordenar los datos en una <b>tabla</b>.",
        "<b>Traducir</b> las frases («como máximo», «al menos»…) a inecuaciones.",
        "Resolver un problema completo: la <b>joyería</b>.",
        "Escribirlo como en el <b>examen</b> y evitar los errores típicos."
      ]}], etq:"🎯 En este apartado vas a aprender"}
    ]},

    { titulo:"Paso 0: ordenar los datos en una tabla", cuerpo:[
      {prop:[{lista:[
        "<b>Incógnitas</b>: lo que hay que decidir, con sus <b>unidades</b>: $x$ = n.º de…, $y$ = n.º de…",
        "<b>Columnas</b>: las dos incógnitas y la condición. <b>Primera fila</b>: lo que se maximiza o minimiza.",
        "<b>Una fila por cada recurso o condición</b> (horas, material, mínimo exigido…): cada fila es una restricción."
      ]}], etq:"Cómo se hace"},
      {html: datos(["","Pañuelos ($x$)","Corbatas ($y$)","Condición"], [["Beneficio (€)",4,6,"MAXIMIZAR"],["Horas",2,3,"como máximo 60"],["Compromiso",2,1,"como mínimo 28"]])},
      {formula:R`F(x, y) = 4x + 6y \to \text{MÁX} \qquad 2x + 3y \le 60 \qquad 2x + y \ge 28 \qquad x \ge 0,\ y \ge 0`}
    ]},

    { titulo:"Traducir el enunciado", cuerpo:[
      {html: datos(["Si el enunciado dice…","Se escribe"], [
        ["como máximo, no más de, a lo sumo, dispone de, capacidad","$\\le$"],
        ["como mínimo, al menos, por lo menos","$\\ge$"],
        ["entre 10 y 25 unidades de A","$10 \\le x \\le 25$ (dos restricciones)"],
        ["al menos tantos de A como de B","$x \\ge y$"],
        ["B no puede superar el doble de A","$y \\le 2x$"],
        ["A no supera en más de 6 a B","$x - y \\le 6$"],
        ["A debe ser al menos la mitad de B","$x \\ge \\dfrac{y}{2}$, es decir, $2x \\ge y$"]])},
      {aviso:["«El doble»: piensa con números. «B ($y$) no puede superar el doble de A ($x$)»: si $x = 3$, $y$ puede ser como mucho 6 → $y \\le 2x$."]},
      {nota:["<b>¿Maximizar o minimizar?</b> Beneficio, ingresos, ganancias → MÁX. Coste, gasto, tiempo → MÍN."]}
    ]},

    { titulo:"La joyería: el enunciado", cuerpo:[
      {ej:{etq:"💎 Ejemplo de los apuntes", enun:"Una joyería elabora dos tipos de collares con perlas blancas, grises y negras. Un collar <b>A</b> lleva 20 blancas, 20 grises y 30 negras; un collar <b>B</b>, 10 blancas, 20 grises y 60 negras. Dispone de un <b>máximo</b> de 900 perlas blancas y 1400 grises, y tiene que usar <b>al menos</b> 1800 negras. Cada collar A da 600 € de beneficio y cada B, 500 €. <br><b>a)</b> ¿Qué producción da el máximo beneficio? ¿A cuánto asciende? <br><b>b)</b> ¿Es posible fabricar 40 collares A y 20 B?"}},
      {html: `<div class="paso" data-o="1">${datos(["","A ($x$)","B ($y$)","Condición"], [["Beneficio (€)",600,500,"MAXIMIZAR"],["Perlas blancas",20,10,"máximo 900"],["Perlas grises",20,20,"máximo 1400"],["Perlas negras",30,60,"al menos 1800"]])}</div>`}
    ]},

    { titulo:"La joyería: el planteamiento", cuerpo:[
      {html: P([[1,"$x$ = n.º de collares del tipo A; $\\;y$ = n.º de collares del tipo B."],
                [2,"Función objetivo: $\\;B(x, y) = 600x + 500y$ → <b>MAXIMIZAR</b>."],
                [3,R`Restricciones (y simplifico dividiendo): $\;20x + 10y \le 900 \to 2x + y \le 90$; $\;20x + 20y \le 1400 \to x + y \le 70$; $\;30x + 60y \ge 1800 \to x + 2y \ge 60$; $\;x \ge 0,\ y \ge 0$`]])},
      {html:`<div class="paso" data-o="4">${TEMA.tx(plan("B(x, y) = 600x + 500y \\to \\text{MÁX}", ["2x + y \\le 90 & \\text{(blancas)}","x + y \\le 70 & \\text{(grises)}","x + 2y \\ge 60 & \\text{(negras)}","x \\ge 0,\\ y \\ge 0"]).replace("{l}","{ll}"))}</div>`},
      {truco:["Divide cada restricción por un número común: las rectas son las mismas y las cuentas, más fáciles."]}
    ]},

    { titulo:"La joyería: región y vértices", cuerpo:[
      {html: duo(
        P([[1,"Blancas $2x + y = 90$: $(0, 90)$, $(45, 0)$. Grises $x + y = 70$: $(0, 70)$, $(70, 0)$. Negras $x + 2y = 60$: $(0, 30)$, $(60, 0)$."],
           [2,"Prueba con $O$: cumple las dos primeras, no la tercera. Con $x, y \\ge 0$ sale un cuadrilátero."],
           [3,R`$2x + y = 90,\ x + y = 70$: restando, $x = 20,\ y = 50$`],
           [4,R`$2x + y = 90,\ x + 2y = 60$: $x = 40,\ y = 10$. Y en el eje $Y$: $(0, 30)$, $(0, 70)$`]]),
        F(Object.assign({}, EJ, {rectas:EJ.rectas.map(r=>Object.assign({o:1},r)), region:2, pts:[{x:20,y:50,t:"(20, 50)",o:3,lado:"e"},{x:40,y:10,t:"(40, 10)",o:4,lado:"ne"},{x:0,y:30,t:"(0, 30)",o:4,lado:"ne"},{x:0,y:70,t:"(0, 70)",o:4,lado:"ne"}]}))
      )}
    ]},

    { titulo:"La joyería: solución", cuerpo:[
      {html: duo(
        tablaF("B = 600x + 500y", [["$(0, 30)$","$15\\,000$"],["$(40, 10)$","$24\\,000 + 5000 = 29\\,000$"],["$(20, 50)$","$12\\,000 + 25\\,000 = 37\\,000$","max"],["$(0, 70)$","$35\\,000$"]]) +
        P([[1,"<b>a)</b> El máximo está en $(20, 50)$."],
           [2,R`<b>b)</b> $(40, 20)$: blancas $2 \cdot 40 + 20 = 100 \le 90$ ✗ → <b>no</b> es posible (harían falta 1000 perlas blancas y solo hay 900).`]]) +
        res(3,"a) <b>20 collares A y 50 collares B</b>: beneficio máximo de <b>37 000 €</b>. b) No."),
        F(Object.assign({}, EJ, {region:0, pts:[{x:20,y:50,t:"máx.",lado:"e",col:"#15803d"},{x:40,y:10},{x:0,y:30},{x:0,y:70},{x:40,y:20,t:"(40, 20) ✗",o:2,col:"#c0392b",lado:"e"}],
          nivel:[{a:6,b:5,k:370,o:1,et:"B = 37 000",col:"#15803d",pos:.25,dx:8}]}))
      )}
    ]},

    { titulo:"Un problema de mínimo (PAU 2026)", cuerpo:[
      {ej:{etq:"🚚 Castilla y León 2026", enun:"Una ONG organiza un convoy de, como máximo, 27 camiones. Para agua dedica un mínimo de 12 camiones, y para medicinas, un número mayor o igual que la mitad de los de agua. Un camión de agua cuesta 9000 € y uno de medicinas, 6000 €. ¿Cómo organizar el convoy con el mínimo coste?",
        pasos:[R`$x$ = camiones de agua, $y$ = de medicinas. $\;C = 9000x + 6000y$ → MÍN.`,
               R`$x + y \le 27$, $\;x \ge 12$, $\;y \ge \tfrac{x}{2}$ (o $x - 2y \le 0$)`,
               R`Vértices: $(12, 6)$, $(12, 15)$ y $x + y = 27,\ y = \tfrac{x}{2} \to (18, 9)$`,
               R`$C$: $(12, 6) \to 144\,000$; $\;(12, 15) \to 198\,000$; $\;(18, 9) \to 216\,000$`],
        res:"12 camiones de agua y 6 de medicinas: <b>144 000 €</b>"}}
    ]},

    { titulo:"Cómo se escribe en el examen", cuerpo:[
      {prop:[{lista:[
        "✅ Las <b>incógnitas</b> con su significado y unidades.",
        "✅ La <b>función objetivo</b> y si se maximiza o se minimiza.",
        "✅ Las <b>restricciones</b> (con $x \\ge 0$, $y \\ge 0$ si son cantidades).",
        "✅ El <b>dibujo</b>: ejes con escala, rectas con su nombre y la región sombreada.",
        "✅ Los <b>vértices</b> calculados (el sistema que se resuelve).",
        "✅ La <b>tabla</b> con $F$ en cada vértice.",
        "✅ La <b>respuesta</b> en una frase, con unidades: cuántos de cada y cuánto se gana o se gasta."
      ]}], etq:"Lista de comprobación"},
      {aviso:["Errores típicos: olvidar $x, y \\ge 0$; mezclar unidades (7,5 kg = 7500 g); dar solo el punto sin el valor (o al revés); soluciones con decimales cuando son unidades."]}
    ]},

    { titulo:"Resumen", cuerpo:[
      {resumen:[{lista:[
        "<b>Plantear</b>: incógnitas → tabla de datos → función objetivo → restricciones.",
        "<b>Resolver</b>: región → vértices → $F$ en los vértices.",
        "<b>Responder</b> en el contexto del problema: cuántos, cuánto y con unidades.",
        "Para «¿es posible fabricar…?», se sustituye el punto en <b>todas</b> las restricciones."
      ]}]},
      {comp:{q:"«Las corbatas ($y$) no pueden superar el triple de los pañuelos ($x$)». ¿Qué inecuación es?", opciones:["$x \\le 3y$","$y \\le 3x$","$3y \\le x$"], ok:1, explic:"Si $x = 2$, $y$ puede ser como mucho 6: $y \\le 3x$."}}
    ]}
  ],

  clase: [
    { nivel:"Aplicación", min:8,
      enun:"(Examen) Una fábrica de palas de pádel gana 30 € por cada pala A y 20 € por cada B. Una pala A necesita 90 g de fibra de carbono y 100 g de goma EVA; una B, 100 g de fibra y 50 g de goma. Cada día dispone de 7,5 kg de fibra y 6,5 kg de goma, y quiere producir como máximo 60 palas A. <b>a)</b> ¿Cuántas de cada para el máximo beneficio? <b>b)</b> ¿Es posible fabricar 49 A y 32 B?",
      pasos:[R`$B = 30x + 20y$ → MÁX. En gramos: $90x + 100y \le 7500 \to 9x + 10y \le 750$; $\;100x + 50y \le 6500 \to 2x + y \le 130$; $\;x \le 60$; $\;x, y \ge 0$`,
             R`Vértices: $(0, 0)$, $(60, 0)$, $(60, 10)$, $\;9x + 10y = 750,\ 2x + y = 130 \to (50, 30)$, $\;(0, 75)$`,
             tablaF("B = 30x + 20y", [["$(60, 0)$","$1800$"],["$(60, 10)$","$2000$"],["$(50, 30)$","$2100$","max"],["$(0, 75)$","$1500$"]]),
             R`<b>b)</b> Fibra: $9 \cdot 49 + 10 \cdot 32 = 761 \le 750$ ✗ → no`],
      res:"a) 50 palas A y 30 B: <b>2100 €</b> · b) No" },
    { nivel:"Aplicación", min:8,
      enun:"(Examen) Una empresa fabrica sofás A y B y gana 1500 € y 2000 € por unidad. Cada semana debe fabricar al menos 6 sofás A y 10 B; los A no pueden superar en más de 6 a los B, y no puede fabricar más de 30 sofás. ¿Cuántos de cada para el máximo beneficio?",
      pasos:[R`$B = 1500x + 2000y$ → MÁX; $\;x \ge 6$, $\;y \ge 10$, $\;x - y \le 6$, $\;x + y \le 30$`,
             R`Vértices: $(6, 10)$, $(16, 10)$, $\;x - y = 6,\ x + y = 30 \to (18, 12)$, $\;(6, 24)$`,
             tablaF("B", [["$(6, 10)$","$29\\,000$"],["$(16, 10)$","$44\\,000$"],["$(18, 12)$","$51\\,000$"],["$(6, 24)$","$57\\,000$","max"]])],
      res:"6 sofás A y 24 B: <b>57 000 €</b>" },
    { nivel:"Práctica", min:9,
      enun:"(Examen) Una dieta semanal de lácteos y pescado: cada kg de lácteos cuesta 6 € y da 3 unidades de proteínas y 1 de calorías; cada kg de pescado cuesta 12 € y da 1 de proteínas y 2 de calorías. No se pueden tomar más de 4 kg entre los dos y hacen falta al menos 4 unidades de proteínas y 3 de calorías. ¿Qué combinación es la más barata?",
      pasos:[R`$C = 6x + 12y$ → MÍN; $\;x + y \le 4$, $\;3x + y \ge 4$, $\;x + 2y \ge 3$, $\;x, y \ge 0$`,
             R`Vértices: $(0, 4)$; $\;3x + y = 4,\ x + 2y = 3 \to (1, 1)$; $\;(3, 0)$; $\;(4, 0)$`,
             tablaF("C = 6x + 12y", [["$(0, 4)$","$48$"],["$(1, 1)$","$18$","min"],["$(3, 0)$","$18$","min"],["$(4, 0)$","$24$"]]),
             R`Mínimo en dos vértices: $C = 6(x + 2y)$ es paralela al borde $x + 2y = 3$.`],
      res:"Coste mínimo <b>18 €</b> en todo el segmento de $(1, 1)$ a $(3, 0)$ (por ejemplo, 1 kg de cada)" },
    { nivel:"Práctica", min:8,
      enun:"Una empresa fabrica colonias A y B. La A lleva un 5 % de extracto de rosas y un 10 % de alcohol; la B, un 10 % de extracto y un 15 % de alcohol. Se venden a 24 €/L y 40 €/L. Hay 70 L de extracto y 120 L de alcohol. ¿Cuántos litros de cada para el máximo importe?",
      pasos:[R`$I = 24x + 40y$ → MÁX; $\;0{,}05x + 0{,}10y \le 70 \to x + 2y \le 1400$; $\;0{,}10x + 0{,}15y \le 120 \to 2x + 3y \le 2400$`,
             R`Vértices: $(0, 0)$, $(1200, 0)$, $\;x + 2y = 1400,\ 2x + 3y = 2400 \to (600, 400)$, $\;(0, 700)$`,
             tablaF("I = 24x + 40y", [["$(1200, 0)$","$28\\,800$"],["$(600, 400)$","$30\\,400$","max"],["$(0, 700)$","$28\\,000$"]])],
      res:"600 L de A y 400 L de B: <b>30 400 €</b>" },
    { nivel:"Problema", min:9,
      enun:"Un fabricante de tapices tiene 500 kg de hilo de seda, 400 kg de plata y 225 kg de oro. Un tapiz A lleva 1 kg de seda y 2 de plata; uno B, 2 de seda, 1 de plata y 1 de oro. A se vende a 2000 € y B a 3000 €. <b>a)</b> ¿Cuántos de cada para el máximo beneficio? <b>b)</b> ¿Cuánto hilo sobra?",
      pasos:[R`$B = 2000x + 3000y$; $\;x + 2y \le 500$, $\;2x + y \le 400$, $\;y \le 225$, $\;x, y \ge 0$`,
             R`Vértices: $(0, 0)$, $(200, 0)$, $(100, 200)$, $(50, 225)$, $(0, 225)$`,
             tablaF("B", [["$(200, 0)$","$400\\,000$"],["$(100, 200)$","$800\\,000$","max"],["$(50, 225)$","$775\\,000$"],["$(0, 225)$","$675\\,000$"]]),
             R`<b>b)</b> Seda: $500 - 500 = 0$; plata: $400 - 400 = 0$; oro: $225 - 200 = 25$ kg`],
      res:"a) 100 A y 200 B: <b>800 000 €</b> · b) Sobran 25 kg de oro" },
    { nivel:"Reto", min:10,
      enun:"(Galicia 2026) Una empresa de alquiler comprará como máximo 150 coches: al menos 20 de gama alta, como máximo 120 de gama media, y los de gama media serán al menos el doble que los de alta. Cada coche de alta da 3000 € al año y cada uno de media, 2000 €. <b>a)</b> ¿Cuántos de cada para el máximo beneficio? <b>b)</b> Si compra 35 de alta y 110 de media, recibe 150 € más por cada coche de gama media. ¿Cumple las condiciones? ¿Compensa?",
      pasos:[R`$x$ alta, $y$ media: $\;B = 3000x + 2000y$; $\;x + y \le 150$, $\;x \ge 20$, $\;y \le 120$, $\;y \ge 2x$`,
             R`Vértices: $(20, 40)$, $(20, 120)$, $(30, 120)$, $\;x + y = 150,\ y = 2x \to (50, 100)$`,
             tablaF("B", [["$(20, 40)$","$140\\,000$"],["$(20, 120)$","$300\\,000$"],["$(30, 120)$","$330\\,000$"],["$(50, 100)$","$350\\,000$","max"]]),
             R`<b>b)</b> $(35, 110)$: $145 \le 150$ ✓, $35 \ge 20$ ✓, $110 \le 120$ ✓, $110 \ge 70$ ✓. Beneficio: $105\,000 + 220\,000 + 150 \cdot 110 = 341\,500 < 350\,000$`],
      res:"a) 50 de alta y 100 de media: <b>350 000 €</b> · b) Cumple, pero <b>no compensa</b> (8500 € menos)" }
  ],

  casa: [
    { nivel:"Básico", enun:"(Castilla-La Mancha 2026) Una cooperativa guarda botellas de 0,75 L ($x$) y de 1 L ($y$). Caben como máximo 1000 envases; debe tener al menos 200 pequeñas y 100 de litro, y las pequeñas no pueden ser menos que las de litro. Almacenar cuesta 0,20 € cada pequeña y 0,10 € cada una de litro. ¿Cuántas de cada para el mínimo gasto?",
      pasos:[R`$C = 0{,}20x + 0{,}10y$ → MÍN; $\;x + y \le 1000$, $\;x \ge 200$, $\;y \ge 100$, $\;x \ge y$`,
             R`Vértices: $(200, 100)$, $(900, 100)$, $(500, 500)$, $(200, 200)$`,
             tablaF("C", [["$(200, 100)$","$50$","min"],["$(900, 100)$","$190$"],["$(500, 500)$","$150$"],["$(200, 200)$","$60$"]])],
      res:"200 pequeñas y 100 de litro: <b>50 €</b>" },
    { nivel:"Consolidación", enun:"Un concentrado de café A necesita por kg 4,5 kg de grano de Colombia y 3 kg de Etiopía; uno B, 7,5 kg de Colombia y 1,5 kg de Costa Rica. Hay 67,5 kg de Colombia, 30 de Etiopía y 9 de Costa Rica, y los kg de A deben ser al menos la mitad de los de B. <b>a)</b> ¿Se pueden producir 7 kg de A y 5 de B? <b>b)</b> Si cada kg de A da 2 € y cada kg de B, 4 €, ¿qué producción da el máximo beneficio?",
      pasos:[R`$4{,}5x + 7{,}5y \le 67{,}5 \to 3x + 5y \le 45$; $\;3x \le 30 \to x \le 10$; $\;1{,}5y \le 9 \to y \le 6$; $\;2x \ge y$; $\;x, y \ge 0$`,
             R`<b>a)</b> $3 \cdot 7 + 5 \cdot 5 = 46 \le 45$ ✗ → no`,
             R`Vértices: $(0, 0)$, $(10, 0)$, $(10, 3)$, $(5, 6)$, $(3, 6)$`,
             tablaF("B = 2x + 4y", [["$(10, 0)$","$20$"],["$(10, 3)$","$32$"],["$(5, 6)$","$34$","max"],["$(3, 6)$","$30$"]])],
      res:"a) No · b) 5 kg de A y 6 kg de B: <b>34 €</b>" },
    { nivel:"Consolidación", enun:"Plantea (sin resolver): un taller hace mesas ($x$) y sillas ($y$). Cada mesa necesita 4 h de carpintería y 2 de barnizado; cada silla, 1 h y 1 h. Hay como máximo 60 h de carpintería y 40 de barnizado, y se quieren al menos tantas sillas como mesas. Una mesa da 70 € y una silla 20 €.",
      pasos:[R`$B(x, y) = 70x + 20y$ → MÁX`, R`$4x + y \le 60$; $\;2x + y \le 40$; $\;y \ge x$; $\;x \ge 0,\ y \ge 0$`],
      res:"$B = 70x + 20y$ MÁX con $4x + y \\le 60,\\ 2x + y \\le 40,\\ y \\ge x,\\ x, y \\ge 0$" },
    { nivel:"Problema", enun:"Resuelve el problema de las mesas y las sillas.",
      pasos:[R`Vértices: $(0, 0)$; $\;y = x,\ 4x + y = 60 \to (12, 12)$; $\;4x + y = 60,\ 2x + y = 40 \to (10, 20)$; $\;(0, 40)$`,
             R`Cuidado: $y = x$ y $2x + y = 40$ se cortan en $\left(\tfrac{40}{3}, \tfrac{40}{3}\right)$, que no cumple $4x + y \le 60$: no es vértice.`,
             tablaF("B = 70x + 20y", [["$(0, 0)$","$0$"],["$(12, 12)$","$840 + 240 = 1080$"],["$(10, 20)$","$700 + 400 = 1100$","max"],["$(0, 40)$","$800$"]])],
      res:"<b>10 mesas y 20 sillas</b>: beneficio máximo de 1100 €" },
    { nivel:"Para pensar", enun:"En el problema de la joyería, ¿cuántas perlas de cada color sobran con la producción óptima (20 A y 50 B)?",
      pasos:[R`Blancas: $20 \cdot 20 + 10 \cdot 50 = 900$ → sobran 0`, R`Grises: $20 \cdot 20 + 20 \cdot 50 = 1400$ → sobran 0`, R`Negras: $30 \cdot 20 + 60 \cdot 50 = 3600$ → se usan 3600 (al menos 1800 ✓)`],
      res:"No sobran blancas ni grises; se usan 3600 negras" }
  ]
});
})();

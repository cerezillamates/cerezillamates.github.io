/* 3.º ESO · Estadística · Apartado 8: Con la calculadora y con Excel
   De la página anterior de la profesora: CASIO fx-991 SP CW (la nueva) y fx-570/991 SP X II (la antigua),
   qué significa cada letra, el ejemplo entero, y las fórmulas de Excel (la plantilla del concurso ya las lleva). */
(function(){
const K = t => `<span class="est-kbd">${t}</span>`, X = t => `<span class="est-xl">${t.replace(/\$/g,"&#36;")}</span>`;
const pasos = filas => `<div class="est-cal">${filas.map((f,i)=>`<b>${i+1}</b><div><b>${f[0]}</b><br>${f[1]}</div>`).join("")}</div>`;
const nueva = pasos([
  ["Entrar en Estadística", `Tecla ${K("🏠 HOME")} → el icono Estadística → ${K("OK")}.`],
  ["Elegir 1-Variable", `Elige [1-Variable] y ${K("OK")}: aparece la tabla con la columna x.`],
  ["Si los datos vienen con frecuencias", `${K("TOOLS")} → [Frecuencia] → On. Ahora hay dos columnas: x y Frec.`],
  ["Escribir los datos", `Cada valor y ${K("=")} (u ${K("OK")}). Con las flechas te mueves y corriges.`],
  ["Ver los resultados", `Confirma y elige [Parámetros 1-Var]. Baja con la flecha para verlos todos.`]]);
const antigua = pasos([
  ["Entrar en Estadística", `${K("MENU")} → icono Estadística (el 6) → ${K("=")}.`],
  ["Elegir 1-Variable", `En «Selección tipo», pulsa ${K("1")}.`],
  ["La columna de frecuencias", `${K("SHIFT")} ${K("MENU")} (SET UP) → Estadística → Frecuencia: Activar o Desactivar. Al cambiarlo se borran los datos: decídelo antes.`],
  ["Escribir los datos", `Cada valor y ${K("=")}. Si está la columna Frec, al lado cuántas veces se repite.`],
  ["Ver los resultados", `${K("OPTN")} → Cálc 1-variable: n, x̄, σx, sx, min, Q₁, Med, Q₃, max.`]]);
const letras = EST.tabla(["En la pantalla","Significa"],[
  ["$n$","cuántos datos hay"],["$\\bar{x}$","la media"],["$\\sigma_x$","la desviación típica (la nuestra)"],["$s_x$","❌ otra desviación (la de una muestra): no la usamos"],
  ["min, max","el dato más pequeño y el más grande"],["$Q_1$, Med, $Q_3$","los cuartiles y la mediana"]], null, "tw");
const excel = EST.tabla(["Para calcular…","Se escribe"],[
  ["Cuántos datos ($n$)", X("=CONTAR(A2:A31)")],["Media", X("=PROMEDIO(A2:A31)")],["Mediana", X("=MEDIANA(A2:A31)")],["Moda", X("=MODA(A2:A31)")],
  ["Rango", X("=MAX(A2:A31)-MIN(A2:A31)")],["Desviación típica $\\sigma$", X("=DESVESTP(A2:A31)")],["Coeficiente de variación", X("=DESVESTP(A2:A31)/PROMEDIO(A2:A31)")],
  ["Cuántos valen «bus»", X('=CONTAR.SI(B2:B31;"bus")')],["Cuántos son 15 o más", X('=CONTAR.SI(A2:A31;">=15")')],
  ["Cuántos caen en [10, 15)", X('=CONTAR.SI.CONJUNTO(A2:A31;">=10";A2:A31;"<15")')],["El dato del lugar 8", X("=K.ESIMO.MENOR(A2:A31;8)")]]);

TEMA.registrar({
  num: 8,
  titulo: "Con la calculadora y con Excel",
  videos: [],

  clase: [
    { nivel:"Aplicación", min:5,
      enun:"Con la calculadora (sin frecuencias): minutos que tardan 10 alumnos en llegar al instituto: 5, 5, 8, 10, 10, 10, 12, 15, 20, 25. Escribe $n$, $\\bar{x}$, $\\sigma_x$, el mínimo, $Q_1$, la mediana, $Q_3$ y el máximo. Calcula el CV.",
      pasos:["Estadística → 1-Variable, sin columna de frecuencias. Escribo los diez datos.",
             "$n = 10$, $\\bar{x} = 12$, $\\sigma_x \\approx 6,07$",
             "mín = 5, $Q_1 = 8$, Med = 10, $Q_3 = 15$, máx = 25",
             "El CV no sale: lo calculo a mano. $CV = \\dfrac{6,07}{12} \\approx 0,51$",
             "Compruebo $Q_1$ con nuestro método: $10 \\cdot 0,25 = 2,5$ → subo al lugar 3 → 8 ✓"],
      res:"Media 12 min, $\\sigma \\approx 6,07$ min, CV ≈ 51 %. Caja: 5, 8, 10, 15, 25." },
    { nivel:"Práctica", min:5,
      enun:"Con la calculadora, usando la columna de frecuencias: hermanos de 20 alumnos: 0 (3), 1 (9), 2 (5), 3 (2), 4 (1). Calcula la media y la desviación típica.",
      pasos:["Activo la columna Frec. En x: 0, 1, 2, 3, 4. En Frec: 3, 9, 5, 2, 1.", "$n = 20$ (si no sale 20, falta algún dato)", "$\\bar{x} = 1,45$ y $\\sigma_x \\approx 1,02$"],
      res:"$\\bar{x} = 1,45$ y $\\sigma \\approx 1,02$, igual que a mano." },
    { nivel:"Práctica", min:4,
      enun:"Tenemos 25 datos en la columna A de Excel, de A2 a A26. Escribe las fórmulas para calcular: <b>a)</b> la media <b>b)</b> la desviación típica <b>c)</b> cuántos datos son mayores o iguales que 30 <b>d)</b> el CV.",
      pasos:["<b>a)</b> "+X("=PROMEDIO(A2:A26)"), "<b>b)</b> "+X("=DESVESTP(A2:A26)")+" (la P: la de la población)", "<b>c)</b> "+X('=CONTAR.SI(A2:A26;">=30")'), "<b>d)</b> "+X("=DESVESTP(A2:A26)/PROMEDIO(A2:A26)")],
      res:"Fórmulas escritas con = al principio y el rango A2:A26." }
  ],

  casa: [
    { nivel:"Básico", enun:"Con la calculadora: notas de 8 alumnos: 3, 5, 5, 6, 7, 7, 8, 9. Escribe $\\bar{x}$, $\\sigma_x$ y la mediana.",
      pasos:["$n = 8$", "$\\bar{x} = \\dfrac{50}{8} = 6,25$", "$\\sigma_x \\approx 1,79$", "Med $= \\dfrac{6 + 7}{2} = 6,5$"],
      res:"$\\bar{x} = 6,25$, $\\sigma \\approx 1,79$ y $Me = 6,5$." },
    { nivel:"Consolidación", enun:"Con la calculadora y frecuencias: número de calzado: 36 (3), 37 (5), 38 (8), 39 (6), 40 (3). Comprueba la media del apartado 4 y calcula $\\sigma$ y el CV.",
      pasos:["En x: 36…40; en Frec: 3, 5, 8, 6, 3.", "$\\bar{x} = 38,04$", "$\\sigma_x \\approx 1,18$", "$CV = \\dfrac{1,18}{38,04} \\approx 0,03$: dispersión muy pequeña"],
      res:"$\\bar{x} = 38,04$, $\\sigma \\approx 1,18$ y CV ≈ 3 %." },
    { nivel:"Problema", enun:"Un compañero escribe en Excel «=DESVEST(A2:A31)» y le sale 6,39, pero a ti te sale 6,07. ¿Quién tiene razón?",
      pasos:["DESVEST es la desviación de una muestra (como $s_x$): sale un poco mayor.", "La nuestra es DESVESTP (como $\\sigma_x$)."],
      res:"Tú: hay que usar <b>DESVESTP</b>." },
    { nivel:"Para pensar", enun:"Con la calculadora, $Q_1$ de 1, 2, 3, 4, 5, 6, 7, 8 puede salir 2,5 y con CUARTIL.INC de Excel sale 2,75. ¿Cuál ponemos en el examen?",
      pasos:["Hay varios criterios para los cuartiles.", "El nuestro: $8 \\cdot 0,25 = 2$ → entero → media del 2.º y el 3.º → 2,5."],
      res:"En el examen, el método de clase: <b>2,5</b>." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">Lo mismo de tres formas: a mano para entenderlo, con la calculadora para el examen y con Excel para muchos datos.</p>`}
    ]},
    { titulo:"CASIO: la nueva (fx-991 SP CW)", cuerpo:[ {html:nueva}, {nota:["Es la de pantalla con iconos."]} ]},
    { titulo:"CASIO: la antigua (fx-570 / 991 SP X II)", cuerpo:[ {html:antigua} ]},
    { titulo:"Qué significa cada letra", cuerpo:[
      {html:letras},
      {aviso:["El <b>CV no aparece</b>: se calcula a mano, $CV = \\dfrac{\\sigma}{\\bar{x}}$."], etq:"⚠️ Cuidado"}
    ]},
    { titulo:"Un ejemplo entero", cuerpo:[
      {ej:{enun:"Minutos de 10 alumnos: 5, 5, 8, 10, 10, 10, 12, 15, 20, 25.",
        pasos:["$n = 10$, $\\bar{x} = 12$, $\\sigma_x \\approx 6,07$", "mín 5, $Q_1 = 8$, Med 10, $Q_3 = 15$, máx 25", "$CV = \\dfrac{6,07}{12} \\approx 0,51$", EST.caja(5,8,10,15,25,{titulo:"minutos"})],
        res:"La mitad tarda 10 minutos o menos; el 25 % que peor lo tiene, más de 15."}}
    ]},
    { titulo:"Los cuartiles: nuestro método", cuerpo:[
      {prop:["Lugar $N \\cdot 0,25$ (o $N \\cdot 0,75$). Si sale entero, media de ese dato y el siguiente; si no, subo al lugar siguiente."], etq:"Método de clase"},
      {nota:["La calculadora y CUARTIL.INC de Excel usan otros criterios y a veces dan otro número. No está mal, pero en clase y en el examen usamos el nuestro. La plantilla de Excel del concurso ya lo lleva."]}
    ]},
    { titulo:"Excel: las fórmulas", cuerpo:[
      {html:excel},
      {nota:["Siempre empiezan por =. A2:A31 es «desde A2 hasta A31». Decimales con coma."]}
    ]},
    { titulo:"Excel: la tabla y el gráfico", cuerpo:[
      {html:pasos([["La columna de los valores","Escribe los valores distintos y al lado "+X("=CONTAR.SI(…)")+": esa es la $n_i$."],
        ["Las demás columnas","$f_i$: "+X("=B2/$B$10")+". El % con formato de porcentaje. $N_i$: "+X("=C1+B2")+" y arrastrar."],
        ["El gráfico","Selecciona los valores y las $n_i$ → Insertar → Columnas (cuantitativa) o Sectores (cualitativa)."],
        ["Dejarlo bien","Título y nombre de los dos ejes."]])}
    ]},
    { titulo:"⚠️ Errores que se repiten", cuerpo:[
      {aviso:["Decimales con <b>punto</b>: en Excel en español van con coma (12,5)."], etq:"⚠️ Error 1"},
      {aviso:["<b>DESVEST</b> en vez de <b>DESVESTP</b>, o $s_x$ en vez de $\\sigma_x$."], etq:"⚠️ Error 2"},
      {aviso:["<b>Olvidar el =</b> o dejar fuera del rango los últimos datos."], etq:"⚠️ Error 3"},
      {aviso:["<b>Fiarse sin pensar</b>: una media de 400 minutos para ir al instituto es un dato mal escrito."], etq:"⚠️ Error 4"}
    ]},
    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{lista:["Calculadora: Estadística → 1-Variable (con Frec si hay tabla).", "Nuestra desviación: $\\sigma_x$ en la calculadora y DESVESTP en Excel.", "El CV, a mano. Los cuartiles, con el método de clase."]}]},
      {estudio:[
        {comp:{q:"En la calculadora, nuestra desviación típica es…", opciones:["σx","sx"], ok:0, explic:"$\\sigma_x$ es la de la población, la de 3.º.", pista:"La de la letra griega."}},
        {comp:{q:"La fórmula de Excel para la desviación típica es…", opciones:["=DESVEST(A2:A31)","=DESVESTP(A2:A31)"], ok:1, explic:"La P es la de la población.", pista:"La que termina en P."}}
      ]}
    ]}
  ]
});
})();

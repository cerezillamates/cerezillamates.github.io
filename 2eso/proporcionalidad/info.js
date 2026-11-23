/* Datos generales del tema de 2.º ESO: curso, título y lista de apartados.
   Para activar un apartado nuevo: crear contenido/apN.js y poner listo:true */
window.TEMA = window.TEMA || {};
TEMA.info = {
  curso: "2.º ESO", cursoUrl: "2eso.html",
  tema: "Tema 3 · Proporcionalidad y problemas aritméticos",
  apartados: [
    {num:1, ico:"⚖️", corto:"Razón", titulo:"Razón y proporción", desc:"Razón, proporción, propiedad fundamental, cuarto y medio proporcional.", listo:true},
    {num:2, ico:"📈", corto:"Directa", titulo:"Proporcionalidad directa", desc:"Constante, regla de tres, reducción a la unidad, escalas y divisas.", listo:true},
    {num:3, ico:"📉", corto:"Inversa", titulo:"Proporcionalidad inversa", desc:"Constante (el producto), regla de tres inversa, reducción a la unidad y D, I o ninguna.", listo:true},
    {num:4, ico:"🧮", corto:"Compuesta", titulo:"Proporcionalidad compuesta", desc:"Tres magnitudes: cuadro con flechas D o I y reducción a la unidad.", listo:true},
    {num:5, ico:"🍰", corto:"Repartos", titulo:"Repartos proporcionales", desc:"Reparto directo e inverso.", listo:true},
    {num:"6.1", ico:"✖️", corto:"Tipo 1", grupo:"6. Porcentajes", grupoDesc:"Cuatro tipos de problemas. Tipo 1: con la fórmula C<sub>F</sub> = I<sub>V</sub> · C<sub>I</sub>. Tipo 2: con regla de tres. Tipo 3: la parte entre el total, por 100. Tipo 4 (encadenados): con flechas.", tipo:"Tipo 1", titulo:"Calcular un %, un descuento o un incremento", desc:"Conozco lo que había y el %: multiplico.", listo:true},
    {num:"6.2", ico:"➗", corto:"Tipo 2", grupo:"6. Porcentajes", tipo:"Tipo 2", titulo:"Calcular el total", desc:"Dado el precio rebajado, el descuento, el IVA o el precio con IVA: regla de tres, porque el total es el 100 %.", listo:true},
    {num:"6.3", ico:"🔍", corto:"Tipo 3", grupo:"6. Porcentajes", tipo:"Tipo 3", titulo:"Calcular el %", desc:"Qué % es una parte, o cuánto ha subido o bajado: la parte entre el total, por 100 (o regla de tres).", listo:true},
    {num:"6.4", ico:"🔗", corto:"Tipo 4", grupo:"6. Porcentajes", tipo:"Tipo 4", titulo:"Porcentajes encadenados", desc:"Varios descuentos o incrementos seguidos: el precio final y el % de variación final, con flechas. Los % no se suman ni se restan: se multiplican los índices.", listo:true},
    {num:7, ico:"🏦", corto:"Interés", titulo:"Interés simple", desc:"El interés de 1 año es el % del capital (multiplico) y después lo multiplico por el tiempo.", listo:true},
    {num:8, ico:"🚰", corto:"Grifos", titulo:"Grifos y trabajo en común", desc:"Grifos, desagües y trabajos que se hacen entre varios.", listo:true}
  ]
};

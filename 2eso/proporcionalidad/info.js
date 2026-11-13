/* Datos generales del tema de 2.º ESO: curso, título y lista de apartados.
   Para activar un apartado nuevo: crear contenido/apN.js y poner listo:true */
window.TEMA = window.TEMA || {};
TEMA.info = {
  curso: "2.º ESO", cursoUrl: "2eso.html",
  tema: "Tema 3 · Proporcionalidad y problemas aritméticos",
  apartados: [
    {num:1, titulo:"Razón y proporción", desc:"Razón, proporción, propiedad fundamental, cuarto y medio proporcional.", listo:true},
    {num:2, titulo:"Proporcionalidad directa", desc:"Constante, regla de tres, reducción a la unidad, escalas y divisas.", listo:true},
    {num:3, titulo:"Proporcionalidad inversa", desc:"Constante (el producto), regla de tres inversa, reducción a la unidad y D, I o ninguna.", listo:true},
    {num:4, titulo:"Proporcionalidad compuesta", desc:"Tres magnitudes: cuadro con flechas D o I y reducción a la unidad.", listo:true},
    {num:5, titulo:"Repartos proporcionales", desc:"Reparto directo e inverso.", listo:true},
    {num:"6.1", grupo:"6. Porcentajes", titulo:"Tipo 1: calcular un %, un descuento o un incremento", desc:"Conozco el total y el %: multiplico. De cabeza, IVA, rebajas y encadenados.", listo:true},
    {num:"6.2", grupo:"6. Porcentajes", titulo:"Tipo 2: calcular el total", desc:"Dado el precio rebajado, el descuento, el IVA o el precio con IVA: divido.", listo:true},
    {num:"6.3", grupo:"6. Porcentajes", titulo:"Tipo 3: calcular el % dadas la cantidad inicial y la final", desc:"Qué porcentaje es, cuánto ha subido o bajado y las ofertas.", listo:true},
    {num:7, titulo:"Interés simple", desc:"Capital, rédito y tiempo. Años, meses y días.", listo:true},
    {num:8, titulo:"Grifos y trabajo en común", desc:"Grifos, desagües y trabajos que se hacen entre varios.", listo:true}
  ]
};

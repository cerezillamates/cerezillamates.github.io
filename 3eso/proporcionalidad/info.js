/* Datos generales del tema: curso, título y lista de apartados.
   Para activar un apartado nuevo: crear contenido/apN.js y poner listo:true */
window.TEMA = window.TEMA || {};
TEMA.info = {
  curso: "3.º ESO", cursoUrl: "3eso.html",
  tema: "Tema 3 · Proporcionalidad y problemas aritméticos",
  apartados: [
    {num:1, ico:"⚖️", corto:"Razones", titulo:"Razones y proporciones", desc:"Razón, proporción, propiedad fundamental, cuarto y medio proporcional.", listo:true},
    {num:2, ico:"🔁", corto:"Simple", titulo:"Proporcionalidad simple", desc:"Magnitudes D, I y no proporcionales, constante, regla de tres, escalas y divisas.", listo:true},
    {num:3, ico:"🍰", corto:"Repartos", titulo:"Repartos proporcionales", desc:"Reparto directo e inverso.", listo:true},
    {num:4, ico:"🧮", corto:"Compuesta", titulo:"Proporcionalidad compuesta", desc:"Tres o más magnitudes: flechas D o I hacia la x.", listo:true},
    {num:"5.1", ico:"✖️", corto:"Tipo 1", grupo:"5. Porcentajes", grupoDesc:"Tres tipos de problemas y los encadenados, siempre con la misma fórmula: C<sub>F</sub> = I<sub>V</sub> · C<sub>I</sub>.", tipo:"Tipo 1", titulo:"Calcular un %, un descuento o un incremento", desc:"Conozco lo que había y el %: multiplico.", listo:true},
    {num:"5.2", ico:"➗", corto:"Tipo 2", grupo:"5. Porcentajes", tipo:"Tipo 2", titulo:"Calcular el total", desc:"Dado el precio rebajado, el descuento, el IVA o el precio con IVA: divido.", listo:true},
    {num:"5.3", ico:"🔍", corto:"Tipo 3", grupo:"5. Porcentajes", tipo:"Tipo 3", titulo:"Calcular el %", desc:"Dadas la cantidad inicial y la final: cuánto ha subido o bajado.", listo:true},
    {num:"5.4", ico:"🔗", corto:"Encadenados", grupo:"5. Porcentajes", tipo:"Varios cambios", titulo:"Encadenados y ofertas", desc:"Subidas y bajadas seguidas: se multiplican los índices. Ofertas 3x2, 2.ª unidad…", listo:true},
    {num:6, ico:"🏦", corto:"Interés", titulo:"Interés simple", desc:"Capital, rédito y tiempo. Años, meses y días.", listo:true},
    {num:7, ico:"🚰", corto:"Grifos y mezclas", titulo:"Grifos y mezclas", desc:"Trabajo en común, precio de una mezcla y aleaciones.", listo:true}
  ]
};

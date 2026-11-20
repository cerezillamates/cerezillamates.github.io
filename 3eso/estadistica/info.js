/* Datos generales del tema: curso, título y lista de apartados.
   Para activar un apartado nuevo: crear contenido/apN.js y poner listo:true
   Estadística de 3.º ESO (20-nov-2026), montado a partir de la página anterior de la profesora (Estadistica_3ESO.html):
   varianza escrita σ², intervalos [a, b), cuartiles con el método de clase (posición N : 4; si es entera, media de ese
   dato y el siguiente; si no, se sube al lugar siguiente) y σ de la población (σx en la calculadora, DESVESTP en Excel). */
window.TEMA = window.TEMA || {};
TEMA.info = {
  curso: "3.º ESO", cursoUrl: "3eso.html",
  tema: "Estadística",
  apartados: [
    {num:1, ico:"📋", corto:"Variables", titulo:"Población, muestra y caracteres", desc:"Población, muestra e individuo. Caracteres cualitativos y cuantitativos (discretos y continuos). ¿Es representativa la muestra?", listo:true},
    {num:2, ico:"🧮", corto:"Tablas", titulo:"Tablas de frecuencias", desc:"Frecuencia absoluta nᵢ, acumulada Nᵢ, relativa fᵢ y porcentaje. Tablas con huecos.", listo:true},
    {num:3, ico:"📊", corto:"Gráficos", titulo:"Gráficos estadísticos", desc:"Barras, polígono de frecuencias, sectores (el ángulo) e histograma. Cuál elegir y cómo leerlos.", listo:true},
    {num:4, ico:"🎯", corto:"Centralización", titulo:"Media, mediana y moda", desc:"Datos sueltos y en tabla. Mediana con N par e impar. Media ponderada y el dato que falta.", listo:true},
    {num:5, ico:"📦", corto:"Intervalos", titulo:"Datos agrupados en intervalos", desc:"Intervalos [a, b), marca de clase, media, intervalo modal e intervalo mediano. Del histograma a la tabla.", listo:true},
    {num:6, ico:"📐", corto:"Cuartiles", titulo:"Cuartiles y diagrama de caja", desc:"Q₁, Me y Q₃ con el método de clase, rango intercuartílico y diagrama de caja y bigotes.", listo:true},
    {num:7, ico:"📏", corto:"Dispersión", titulo:"Medidas de dispersión", desc:"Rango, varianza σ², desviación típica σ y coeficiente de variación. ¿Quién es más regular?", listo:true},
    {num:8, ico:"🔢", corto:"Calculadora", titulo:"Con la calculadora y con Excel", desc:"El modo Estadística de la CASIO (la nueva y la antigua), qué significa cada letra y las fórmulas de Excel.", listo:true}
  ]
};

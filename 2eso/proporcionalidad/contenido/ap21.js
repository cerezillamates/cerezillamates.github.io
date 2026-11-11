/* 2.º ESO · Tema 3 · MODELO DE CONTROL 2
   Examen «Tema 8 · Proporcionalidad numérica» de la profesora (IES Al-Baytar, 2021-22), con el IVA actualizado
   al 21 % (en el original del ejercicio 7 era el 16 %). Puntuación original entre paréntesis. */
(function(){
const R = String.raw;
const cuadro = (m1, m2, a, b, t) => `<table class="t cuadro"><tr><th>${m1}</th><th class="fl">(${t}) ⟶</th><th>${m2}</th></tr><tr><td>${a[0]}</td><td></td><td>${a[1]}</td></tr><tr><td>${b[0]}</td><td></td><td class="x">${b[1]}</td></tr></table>`;

TEMA.registrar({
  num: "C2", pref: "C2", seccion: "Modelo de control 2",
  titulo: "Modelo de control 2",

  clase: [
    { nivel:"1 punto", min:5,
      enun:"En un mapa, 5 cm representan 600 m. Un parque está a 8 cm del hotel en el mapa. ¿A qué distancia real está?",
      pasos:[cuadro("Mapa (cm)","Realidad (m)",["5","600"],["8","x"],"D"), R`$\dfrac58 = \dfrac{600}{x} \Rightarrow x = \dfrac{8 \cdot 600}{5} = 960$ m`, "Por la unidad: 1 cm = 120 m → 8 · 120 = 960 m"],
      res:"El parque está a <b>960 m</b> del hotel." },
    { nivel:"1 punto", min:5,
      enun:"Una piscina portátil se llena en 6 horas con 4 grifos iguales. ¿Cuántos grifos hacen falta para llenarla en 3 horas?",
      pasos:[cuadro("Horas","Grifos",["6","4"],["3","x"],"I"), "Menos horas → más grifos: <b>I</b>", R`Le damos la vuelta: $\dfrac{6}{3} = \dfrac{x}{4}$`, R`En cruz: $3 \cdot x = 6 \cdot 4 \Rightarrow x = 8$`],
      res:"Hacen falta <b>8 grifos</b>." },
    { nivel:"1,25 puntos", min:6,
      enun:"Cuatro amigos invierten 20 €, 30 €, 45 € y 25 € en un negocio y obtienen 300 € de beneficio. ¿Cuánto le corresponde a cada uno?",
      pasos:["Directo: 20 + 30 + 45 + 25 = 120 partes", "300 : 120 = 2,50 € por cada euro puesto", "20 · 2,50 = 50 € · 30 · 2,50 = 75 € · 45 · 2,50 = 112,50 € · 25 · 2,50 = 62,50 €", "Comprueba: 50 + 75 + 112,50 + 62,50 = 300 ✓"],
      res:"Les corresponden <b>50 €</b>, <b>75 €</b>, <b>112,50 €</b> y <b>62,50 €</b>." },
    { nivel:"1,25 puntos", min:6,
      enun:"Hay que repartir 23 positivos entre tres alumnos de forma inversamente proporcional a sus retrasos: 8, 4 y 5. ¿Cuántos le tocan a cada uno?",
      pasos:[R`$\dfrac18,\ \dfrac14,\ \dfrac15$ → con denominador 40: $\dfrac{5}{40},\ \dfrac{10}{40},\ \dfrac{8}{40}$`, "5 + 10 + 8 = 23 partes → 1 positivo cada parte"],
      res:"Les tocan <b>5</b>, <b>10</b> y <b>8 positivos</b>." },
    { nivel:"2 puntos", min:7,
      enun:"<b>a)</b> Había ahorrado para un abrigo de 90 €. Al llegar a la tienda tenía una rebaja del 20 %. ¿Cuánto pagué?<br><b>b)</b> En la misma tienda compré una bufanda con un 35 % de descuento y pagué 9,75 €. ¿Cuánto costaba antes?",
      pasos:[R`<b>a)</b> $90 \cdot 0,80 = 72$ €`, R`<b>b)</b> $I_V = 1 - 0,35 = 0,65$ → $C_I = 9,75 : 0,65 = 15$ €`],
      res:"a) Pagué <b>72 €</b> por el abrigo.<br>b) La bufanda me costó <b>15 €</b>." },
    { nivel:"1,25 puntos", min:5,
      enun:"Un pantalón costaba 70 € y lo he pagado a 56 €. ¿Qué porcentaje de descuento me han hecho?",
      pasos:[R`$I_V = C_F : C_I = 56 : 70 = 0,80$`, R`Descuento: $1 - 0,80 = 0,20$ → $20\,\%$`],
      res:"Me han hecho un descuento del <b>20 %</b>." },
    { nivel:"1 punto", min:4,
      enun:"Un ordenador cuesta 1200 € sin IVA. ¿Cuánto cuesta con el 21 % de IVA?",
      pasos:[R`$1200 \cdot 1,21 = 1452$ €`],
      res:"Con IVA, el ordenador cuesta <b>1452 €</b>." },
    { nivel:"1,25 puntos", min:6,
      enun:"Un televisor de 325 € está rebajado un 25 %. Al pagar en caja nos añaden el 21 % de IVA. ¿Cuál es el precio final?",
      pasos:[R`Rebaja: $325 \cdot 0,75 = 243,75$ €`, R`IVA: $243,75 \cdot 1,21 \approx 294,94$ €`, R`O de una vez: $325 \cdot 0,75 \cdot 1,21 = 325 \cdot 0,9075 \approx 294,94$ €`],
      res:"El precio final del televisor es <b>294,94 €</b>." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {nota:[{lista:["8 ejercicios · unos 45 minutos · 10 puntos.", "Escribe el cuadro con las magnitudes y si es D o I.", "Da cada solución en una frase y con su unidad."]}], etq:"📝 Modelo de control 2"},
      {nota:["Pulsa ▶ para ir a los enunciados con cronómetro y, después, a la corrección paso a paso."]}
    ]}
  ]
});
})();

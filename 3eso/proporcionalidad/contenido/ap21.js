/* 3.º ESO · Tema 3 · MODELO DE CONTROL 2
   Ejercicios de preparación del control de la página anterior de la profesora, organizados como un examen. */
(function(){
const R = String.raw;
const cmp = (nombres, datos, preg, rel) => `<table class="t cuadro cmp"><tr>${nombres.map(n=>`<th>${n}</th>`).join("")}</tr>
  <tr class="rel">${rel.map(r=>`<td><span class="r${r}">${r} ⟶</span></td>`).join("")}<td><span class="rx">x</span></td></tr>
  <tr>${datos.map(d=>`<td>${d}</td>`).join("")}</tr><tr>${preg.map(d=>`<td class="${d==="x"?"x":""}">${d}</td>`).join("")}</tr></table>`;

TEMA.registrar({
  num: "C2", pref: "C2", seccion: "Modelo de control 2",
  titulo: "Modelo de control 2",

  clase: [
    { nivel:"1 p", min:5,
      enun:"<b>a)</b> Juan mide 150 cm y su hermana 1,65 m. Calcula la razón entre la altura de la hermana y la de Juan e interprétala.<br><b>b)</b> La razón entre dos números es $\\tfrac35$ (el menor entre el mayor). Si el mayor es 45, ¿cuál es el menor?",
      pasos:[R`<b>a)</b> En cm: $\dfrac{165}{150} = 1,1$ → la hermana mide 1,1 veces lo que Juan`, R`<b>b)</b> $\dfrac35 = \dfrac{x}{45} \Rightarrow x = \dfrac{3 \cdot 45}{5} = 27$`],
      res:"a) La hermana mide <b>1,1 veces</b> lo que mide Juan.<br>b) El otro número es <b>27</b>." },
    { nivel:"1 p", min:4,
      enun:"Escribe D, I o N razonadamente: <b>a)</b> horas que está abierto un grifo y litros que echa; <b>b)</b> velocidad de un coche y tiempo de un viaje; <b>c)</b> pintores y días en pintar una casa; <b>d)</b> edad de una persona y su peso.",
      pasos:["<b>a)</b> doble → doble: D", "<b>b)</b> doble → mitad: I", "<b>c)</b> doble → mitad: I", "<b>d)</b> ni doble ni mitad: N"],
      res:"a) Son <b>D</b>.<br>b) Son <b>I</b>.<br>c) Son <b>I</b>.<br>d) Son <b>N</b>." },
    { nivel:"1,25 p", min:6,
      enun:"Seis obreros trabajan 10 días en una obra y cobran 4500 €. ¿Cuánto cobrarán nueve obreros si trabajan 8 días al mismo precio?",
      pasos:[cmp(["Obreros","Días","€"],["6","10","4500"],["9","8","x"],["D","D"]), R`$\dfrac69 \cdot \dfrac{10}{8} = \dfrac{4500}{x} \Rightarrow \dfrac{60}{72} = \dfrac{4500}{x} \Rightarrow x = 5400$ €`],
      res:"Nueve obreros cobrarán <b>5400 €</b>." },
    { nivel:"1,25 p", min:6,
      enun:"Cuatro pintores pintan 3 aulas en 6 días. ¿Cuántos días tardarán 6 pintores en pintar 6 aulas?",
      pasos:[cmp(["Pintores","Aulas","Días"],["4","3","6"],["6","6","x"],["I","D"]), R`$\dfrac64 \cdot \dfrac36 = \dfrac{6}{x} \Rightarrow \dfrac{18}{24} = \dfrac{6}{x} \Rightarrow x = 8$`],
      res:"6 pintores tardarán <b>8 días</b> en pintar 6 aulas." },
    { nivel:"1,25 p", min:6,
      enun:"<b>a)</b> ¿A qué rédito hay que depositar 8000 € durante 90 días para obtener 60 €?<br><b>b)</b> ¿Qué capital hay que depositar al 2 % durante 15 meses para obtener 75 €?",
      pasos:[R`<b>a)</b> $\dfrac{8000 \cdot r \cdot 90}{360} = 60 \Rightarrow 2000r = 60 \Rightarrow r = 0,03$ → 3 %`, R`<b>b)</b> $\dfrac{c \cdot 0,02 \cdot 15}{12} = 75 \Rightarrow 0,025c = 75 \Rightarrow c = 3000$ €`],
      res:"a) Hay que depositarlos al <b>3 %</b>.<br>b) Hay que depositar <b>3000 €</b>." },
    { nivel:"1,25 p", min:6,
      enun:"<b>a)</b> Reparte 2400 € en partes directamente proporcionales a 3, 4 y 5.<br><b>b)</b> Reparte 1950 € en partes inversamente proporcionales a 2, 3 y 4.",
      pasos:["<b>a)</b> 12 partes → 200 € → 600 €, 800 € y 1000 €", R`<b>b)</b> $\tfrac12, \tfrac13, \tfrac14$ → $\tfrac{6}{12}, \tfrac{4}{12}, \tfrac{3}{12}$ → 13 partes → 150 € → 900 €, 600 € y 450 €`],
      res:"a) Las partes son <b>600 €</b>, <b>800 €</b> y <b>1000 €</b>.<br>b) Las partes son <b>900 €</b>, <b>600 €</b> y <b>450 €</b>." },
    { nivel:"1,25 p", min:5,
      enun:"<b>a)</b> Tras subir un 8 %, un abono de transporte cuesta 54 €. ¿Cuánto costaba antes?<br><b>b)</b> Un móvil ha pasado de 250 € a 210 €. ¿Qué porcentaje ha variado? ¿Ha subido o bajado?",
      pasos:[R`<b>a)</b> $54 : 1,08 = 50$ €`, R`<b>b)</b> $210 : 250 = 0,84$ → 84 %: ha bajado un 16 %`],
      res:"a) El abono costaba <b>50 €</b> antes.<br>b) El móvil ha <b>bajado</b> un <b>16 %</b>." },
    { nivel:"1,25 p", min:5,
      enun:"En una factura de 200 € aplican un 15 % de descuento y un 21 % de IVA. ¿Cuánto pagas si primero se hace el descuento y después el IVA? ¿Y al revés? ¿Da lo mismo?",
      pasos:[R`$200 \cdot 0,85 \cdot 1,21 = 205,70$ €`, R`$200 \cdot 1,21 \cdot 0,85 = 205,70$ €`, "Da lo mismo: se multiplican los índices y el orden no cambia el producto."],
      res:"En los dos casos pagas <b>205,70 €</b>: da lo mismo." },
    { nivel:"0,5 p", min:4,
      enun:"¿Qué descuento real supone la oferta «2.ª unidad al 50 %» si compras dos unidades? ¿Y la oferta 5 × 4?",
      pasos:[R`Pagas $1,5$ de $2$: $1,5 : 2 = 0,75$ → descuento del 25 %`, R`5 × 4: pagas 4 de 5: $0,80$ → descuento del 20 %`],
      res:"La 2.ª unidad al 50 % es un descuento del <b>25 %</b> y el 5 × 4, del <b>20 %</b>." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {nota:[{lista:["9 ejercicios · unos 50 minutos · 10 puntos.", "Escribe los cuadros con D o I (y las flechas en la compuesta).", "Da cada solución con su unidad."]}], etq:"📝 Modelo de control 2"},
      {nota:["Pulsa ▶ para ir a los enunciados con cronómetro y, después, a la corrección paso a paso."]}
    ]}
  ]
});
})();

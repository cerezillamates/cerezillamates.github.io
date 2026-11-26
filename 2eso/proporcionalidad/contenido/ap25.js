/* 2.º ESO · Tema 3 · AMPLIACIÓN: Interés simple — buscar el rédito, el capital o el tiempo
   Decisión de la profesora (26-11-2026): el apartado 7 solo calcula el interés y el capital final.
   Estos problemas no se quitan: pasan aquí como ampliación (no entran en el control).
   Para buscar el rédito: el interés de 1 año y el % con la fórmula del tipo 3 (parte : total · 100).
   Para buscar el capital: el interés de 1 año es el r % del capital → tipo 2 (regla de tres con el 100 %).
   Para buscar el tiempo: cuántas veces cabe el interés de 1 año. */
(function(){
const R = String.raw;
const cuadro = (m1, m2, a, b, t) => `<table class="t cuadro"><tr><th>${m1}</th><th class="fl">(${t||"D"}) ⟶</th><th>${m2}</th></tr><tr><td>${a[0]}</td><td></td><td>${a[1]}</td></tr><tr><td>${b[0]}</td><td></td><td class="x">${b[1]}</td></tr></table>`;

TEMA.registrar({
  num: "★", pref: "★", seccion: "Ampliación",
  titulo: "Interés simple: buscar el rédito, el capital o el tiempo",
  videos: [],

  clase: [
    { nivel:"Ampliación", min:6,
      enun:"Unos ahorros de 5000 € han producido 450 € en 3 años. ¿A qué rédito (porcentaje anual) estaban?",
      pasos:[R`<b>Paso 1. El interés de 1 año</b>: en 3 años, 450 € → en 1 año $450 : 3 = 150$ €`,
             "<b>Paso 2. ¿Qué % de 5000 € son 150 €?</b> Es un tipo 3:",
             R`$\% = \dfrac{\text{parte}}{\text{total}} \cdot 100 = \dfrac{150}{5000} \cdot 100 = 3\,\%$`],
      res:"Estaban al <b>3 %</b> anual." },
    { nivel:"Ampliación", min:6,
      enun:"¿Cuántos años tengo que dejar 1500 € al 4 % para ganar 180 € de intereses?",
      pasos:["<b>Paso 1. El interés de 1 año</b>: el 4 % de 1500 €.",
             R`$0,04 \cdot 1500 = 60$ € cada año`,
             R`<b>Paso 2. ¿Cuántos años para 180 €?</b> Cada año gano 60 €: $180 : 60 = 3$ años`,
             R`Compruebo: $60 \cdot 3 = 180$ € ✓`],
      res:"Tengo que dejarlos <b>3 años</b>." },
    { nivel:"Ampliación", min:6,
      enun:"Quiero ganar 300 € de intereses en 2 años y el banco me paga un 2,5 % anual. ¿Cuánto dinero tengo que depositar?",
      pasos:[R`<b>Paso 1. El interés de 1 año</b>: $300 : 2 = 150$ € cada año`,
             "<b>Paso 2.</b> Esos 150 € son el 2,5 % del dinero que deposito. Busco el total (tipo 2): el dinero es el 100 %.",
             cuadro("Porcentaje (%)", "Dinero (€)", ["2,5","150"], ["100","x"]),
             R`$\dfrac{2,5}{100} = \dfrac{150}{x} \;\Rightarrow\; x = \dfrac{100 \cdot 150}{2,5} = \dfrac{15\,000}{2,5} = 6000$ €`,
             R`Compruebo: $0,025 \cdot 6000 = 150$ € al año → $150 \cdot 2 = 300$ € ✓`],
      res:"Tengo que depositar <b>6000 €</b>." }
  ],

  casa: [
    { nivel:"Ampliación", enun:"Unos ahorros de 3000 € han producido 360 € en 4 años. ¿A qué rédito?",
      pasos:[R`1 año: $360 : 4 = 90$ €`,
             R`¿Qué % de 3000 son 90? $\dfrac{90}{3000} \cdot 100 = 3\,\%$`],
      res:"Estaban al <b>3 %</b>." },
    { nivel:"Ampliación", enun:"¿Cuánto tiempo deben estar 8000 € al 5 % para ganar 600 €? Da el resultado en años y en meses.",
      pasos:[R`1 año: $0,05 \cdot 8000 = 400$ €`,
             R`¿Cuántos años para 600 €? $600 : 400 = 1,5$ años`, "1,5 años = 12 + 6 = 18 meses"],
      res:"Deben estar <b>1,5 años</b>, es decir, <b>18 meses</b>." },
    { nivel:"Ampliación", enun:"¿Qué dinero hay que depositar al 2 % para ganar 150 € de intereses en 3 años?",
      pasos:[R`1 año: $150 : 3 = 50$ €`, "50 € son el 2 % del dinero: busco el total (tipo 2), el dinero es el 100 %.", cuadro("Porcentaje (%)","Dinero (€)",["2","50"],["100","x"],"D"), R`$x = \dfrac{100 \cdot 50}{2} = 2500$ €`],
      res:"Hay que depositar <b>2500 €</b>." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">⭐ Ampliación: ¿y si lo que no sé es el %, el dinero o el tiempo?</p>`}
    ]},

    { titulo:"Busco el rédito (el %)", cuerpo:[
      {ej:{enun:"5000 € han producido 450 € en 3 años. ¿A qué rédito estaban?",
        pasos:[R`<b>1 año:</b> $450 : 3 = 150$ €`, "¿Qué % de 5000 € son 150 €? Es un <b>tipo 3</b>:", R`$\dfrac{150}{5000} \cdot 100 = 3\,\%$`],
        res:"Estaban al <b>3 %</b>."}},
      {nota:["El rédito es el % que da el banco en <b>1 año</b>: primero saco el interés de 1 año."]}
    ]},

    { titulo:"Busco el capital o el tiempo", cuerpo:[
      {cols:[
        [{ej:{etq:"Capital", enun:"¿Cuánto hay que depositar al 2 % para ganar 90 € en 3 años?",
          pasos:[R`1 año: $90 : 3 = 30$ €`, "30 € son el 2 % del capital: busco el total (<b>tipo 2</b>).", cuadro("Porcentaje (%)", "Dinero (€)", ["2","30"], ["100","x"]), R`$x = \dfrac{100 \cdot 30}{2} = 1500$ €`], res:"Hay que depositar <b>1500 €</b>."}}],
        [{ej:{etq:"Tiempo", enun:"¿Cuántos años hay que dejar 2500 € al 4 % para ganar 300 €?",
          pasos:[R`1 año: $0,04 \cdot 2500 = 100$ €`, R`Cada año 100 €: $300 : 100 = 3$ años`], res:"Hay que dejarlos <b>3 años</b>."}}]
      ]}
    ]},

    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[{lista:[
        "Siempre empiezo por el <b>interés de 1 año</b>.",
        "Rédito: el % con el tipo 3, la parte entre el total, por 100.",
        "Capital: regla de tres con el 100 % (tipo 2).",
        "Tiempo: cuántas veces cabe el interés de 1 año."
      ]}]},
      {nota:["Esto es <b>ampliación</b>: no entra en el control."], etq:"⭐ Ampliación"}
    ]}
  ]
});
})();

/* 3.º ESO · Tema 3 · Apartado 5.1: Porcentajes. Tipo 1: calcular un %, un descuento o un incremento (MULTIPLICANDO)
   Organización de la profesora (13-nov-2026): el apartado de porcentajes tiene 3 subapartados:
   5.1 multiplicando (conozco C_I y el %), 5.2 dividiendo (busco el total, C_I), 5.3 busco el % (conozco C_I y C_F).
   Siempre la fórmula C_F = I_V · C_I, con el % en decimal; se pone x en lo que se busca y se despeja. */
(function(){
const R = String.raw;
// triángulo (solo como truco): C_F arriba; I_V × C_I abajo; tapa: "F", "I", "V" o ""
const tri = (tapa, pie) => {
  const v = (k,t) => tapa===k ? `<tspan fill="#f59e0b">?</tspan>` : t;
  return `<figure class="dib tri"><svg viewBox="0 0 260 170" role="img" aria-label="Triángulo: C F arriba; I V por C I abajo">
    <polygon points="130,8 252,160 8,160" fill="#eef0ff" stroke="#4338ca" stroke-width="4" stroke-linejoin="round"/>
    <line x1="70" y1="86" x2="190" y2="86" stroke="#4338ca" stroke-width="3"/>
    <text x="130" y="72" text-anchor="middle" font-size="30" font-weight="800" fill="#1e1b3a">${v("F","C<tspan font-size=\"16\" dy=\"6\">F</tspan>")}</text>
    <text x="130" y="136" text-anchor="middle" font-size="28" font-weight="800" fill="#1e1b3a">${v("V","I<tspan font-size=\"15\" dy=\"5\">V</tspan>")}<tspan dy="-5"> × </tspan>${v("I","C<tspan font-size=\"15\" dy=\"5\">I</tspan>")}</text>
  </svg>${pie?`<figcaption>${pie}</figcaption>`:""}</figure>`;
};
// barra de porcentajes: trozos [ancho %, texto, clase]
const barra = (trozos, pie) => `<figure class="dib"><div class="barra-pct">${trozos.map(t=>`<span class="${t[2]||""}" style="flex:${t[0]}">${t[1]}</span>`).join("")}</div>${pie?`<figcaption>${pie}</figcaption>`:""}</figure>`;
// flecha de un cambio: [antes, operación, después]
const flecha = (pasos) => `<div class="cadena">${pasos.map((p,k)=>k%2 ? `<div class="op">${p}<i>━━━►</i></div>` : `<div class="caja">${p}</div>`).join("")}</div>`;
TEMA.registrar({
  num: "5.1",
  titulo: "Porcentajes · Tipo 1: calcular un %, un descuento o un incremento",
  videos: [
    {t:"Problemas con porcentajes (3.º ESO)", url:"https://www.youtube.com/watch?v=9T7w7iaMrjQ"},
    {t:"Aumentos y disminuciones porcentuales", url:"https://www.youtube.com/watch?v=sh0ytvn8Y4M"}
  ],

  clase: [
    { nivel:"Aplicación", min:5,
      enun:"Usa la fórmula $C_F = I_V \\cdot C_I$.<br><b>a)</b> De los 2350 alumnos de un instituto, el 16 % viene en bici. ¿Cuántos alumnos son?<br><b>b)</b> Un abrigo de 120 € tiene un 35 % de descuento. ¿Cuánto se paga?<br><b>c)</b> La factura de la luz es de 64,50 € más el 21 % de IVA. ¿Cuánto se paga?",
      pasos:[R`<b>a)</b> El 16 %: $I_V = 0,16$ ⇒ $C_F = 0,16 \cdot 2350 = 376$`,
             R`<b>b)</b> Baja: $I_V = 1 - 0,35 = 0,65$ ⇒ $C_F = 0,65 \cdot 120 = 78$ €`,
             R`<b>c)</b> Sube: $I_V = 1 + 0,21 = 1,21$ ⇒ $C_F = 1,21 \cdot 64,50 = 78,045 \approx 78,05$ €`],
      res:"a) Vienen en bici <b>376 alumnos</b>.<br>b) Por el abrigo se pagan <b>78 €</b>.<br>c) Por la luz se pagan <b>78,05 €</b>." },
    { nivel:"Práctica", min:5,
      enun:"Una empresa tiene 1250 trabajadores.<br><b>a)</b> El 8 % trabaja desde casa. ¿Cuántos trabajadores son?<br><b>b)</b> El año que viene la plantilla aumentará un 12 %. ¿Cuántos trabajadores tendrá?",
      pasos:[R`<b>a)</b> El 8 %: $I_V = 0,08$`, R`$C_F = I_V \cdot C_I = 0,08 \cdot 1250 = 100$`,
             R`<b>b)</b> Sube un 12 %: $I_V = 1 + 0,12 = 1,12$`, R`$C_F = 1,12 \cdot 1250 = 1400$`],
      res:"a) Trabajan desde casa <b>100 trabajadores</b>.<br>b) La empresa tendrá <b>1400 trabajadores</b>." },
    { nivel:"Práctica", min:6,
      enun:"Un pantano tiene una capacidad de 2300 hm³ y está al 43 % de su capacidad.<br><b>a)</b> ¿Cuántos hm³ de agua tiene?<br><b>b)</b> Con las lluvias de la primavera, la cantidad de agua del pantano aumenta un 40 %. ¿Cuántos hm³ de agua tiene ahora?",
      pasos:[R`<b>a)</b> El 43 %: $I_V = 0,43$`, R`$C_F = I_V \cdot C_I = 0,43 \cdot 2300 = 989$ hm³`,
             R`<b>b)</b> Sube un 40 %: $I_V = 1 + 0,40 = 1,40$`, R`Lo que había son 989 hm³: $C_F = 1,40 \cdot 989 = 1384,6$ hm³`,
             "El 40 % se calcula sobre el agua que tenía (989 hm³), no sobre la capacidad."],
      res:"a) El pantano tiene <b>989 hm³</b> de agua.<br>b) Después de las lluvias tiene <b>1384,6 hm³</b>." },
    { nivel:"Problema", min:6,
      enun:"Un móvil cuesta 329 € sin IVA en la tienda A.<br><b>a)</b> ¿Cuánto cuesta con el 21 % de IVA?<br><b>b)</b> En la tienda B el mismo móvil cuesta 410 € con el IVA incluido, pero tiene un 5 % de descuento. ¿En qué tienda es más barato?",
      pasos:[R`<b>a)</b> Sube un 21 %: $I_V = 1 + 0,21 = 1,21$`, R`$C_F = I_V \cdot C_I = 1,21 \cdot 329 = 398,09$ €`,
             R`<b>b)</b> Baja un 5 %: $I_V = 1 - 0,05 = 0,95$`, R`$C_F = 0,95 \cdot 410 = 389,50$ €`,
             R`$389,50 < 398,09$`],
      res:"a) En la tienda A el móvil cuesta <b>398,09 €</b>.<br>b) Es más barato en la <b>tienda B</b>, que cuesta <b>389,50 €</b>." },
    { nivel:"Reto", min:7,
      enun:"En un instituto de 800 alumnos, el 45 % son chicos. El 30 % de los chicos y el 25 % de las chicas vienen en bici. ¿Cuántos alumnos vienen en bici?",
      pasos:[R`Chicos: $C_F = 0,45 \cdot 800 = 360$`, R`Chicas: $800 - 360 = 440$`,
             R`Chicos en bici: $0,30 \cdot 360 = 108$`, R`Chicas en bici: $0,25 \cdot 440 = 110$`, R`En total: $108 + 110 = 218$`,
             "Cada % se calcula sobre su grupo: el 30 % de los chicos, no de todo el instituto."],
      res:"Vienen en bici <b>218 alumnos</b>." }
  ],

  casa: [
    { nivel:"Básico",
      enun:"Calcula con la fórmula $C_F = I_V \\cdot C_I$: <b>a)</b> el 7 % de 3200 &nbsp; <b>b)</b> el 120 % de 45 &nbsp; <b>c)</b> el 0,5 % de 18&nbsp;000",
      pasos:[R`<b>a)</b> $C_F = 0,07 \cdot 3200 = 224$`, R`<b>b)</b> $C_F = 1,20 \cdot 45 = 54$`, R`<b>c)</b> $0,5\,\% = 0,005$ ⇒ $C_F = 0,005 \cdot 18\,000 = 90$`],
      res:"a) 224<br>b) 54<br>c) 90" },
    { nivel:"Consolidación",
      enun:"<b>a)</b> Arreglar la bici en el taller cuesta 180 € más el 21 % de IVA. ¿Cuánto pagas?<br><b>b)</b> Un pantalón de 55 € tiene un 35 % de descuento. ¿Cuánto pagas?",
      pasos:[R`<b>a)</b> $I_V = 1 + 0,21 = 1,21$ → $C_F = 1,21 \cdot 180 = 217,80$ €`, R`<b>b)</b> $I_V = 1 - 0,35 = 0,65$ → $C_F = 0,65 \cdot 55 = 35,75$ €`],
      res:"a) Pagas <b>217,80 €</b> por arreglar la bici.<br>b) Pagas <b>35,75 €</b> por el pantalón." },
    { nivel:"Consolidación",
      enun:"A una trabajadora que cobra 1450 € al mes le suben el sueldo un 3,5 %.<br><b>a)</b> ¿Cuánto cobra ahora al mes?<br><b>b)</b> ¿Cuánto dinero más cobrará en un año de 12 pagas?",
      pasos:[R`Sube: $I_V = 1 + 0,035 = 1,035$`, R`<b>a)</b> $C_F = 1,035 \cdot 1450 = 1500,75$ €`,
             R`<b>b)</b> Cada mes cobra $1500,75 - 1450 = 50,75$ € más ⇒ $50,75 \cdot 12 = 609$ €`],
      res:"a) Ahora cobra <b>1500,75 €</b> al mes.<br>b) En un año cobrará <b>609 €</b> más." },
    { nivel:"Consolidación",
      enun:"Una tienda compra una chaqueta por 45 € y la vende ganando un 40 %. ¿A qué precio la vende?",
      pasos:[R`Ganar un 40 %: sube, $I_V = 1 + 0,40 = 1,40$`, R`$C_F = I_V \cdot C_I = 1,40 \cdot 45 = 63$ €`],
      res:"La tienda vende la chaqueta a <b>63 €</b>." },
    { nivel:"Problema",
      enun:"En una clase de 40 alumnos, el 60 % son chicas. El 25 % de las chicas y el 50 % de los chicos llevan gafas. ¿Cuántos alumnos llevan gafas?",
      pasos:[R`Chicas: $C_F = 0,60 \cdot 40 = 24$. Chicos: $40 - 24 = 16$`,
             R`Chicas con gafas: $24 \cdot 0,25 = 6$`, R`Chicos con gafas: $16 \cdot 0,50 = 8$`, R`En total: $6 + 8 = 14$`],
      res:"Llevan gafas <b>14 alumnos</b>." },
    { nivel:"Problema",
      enun:"Para un concierto se ponen a la venta 12&nbsp;500 entradas. El primer día se vende el 38 %. ¿Cuántas entradas quedan por vender?",
      pasos:[R`Las entradas que quedan bajan un 38 %: $I_V = 1 - 0,38 = 0,62$`, R`$C_F = I_V \cdot C_I = 0,62 \cdot 12\,500 = 7750$`,
             R`Comprueba: se venden $0,38 \cdot 12\,500 = 4750$ y $4750 + 7750 = 12\,500$ ✓`],
      res:"Quedan por vender <b>7750 entradas</b>." },
    { nivel:"Para pensar",
      enun:"Calcula el 125 % de 64. ¿Sale más o menos que 64? ¿Cuándo un porcentaje de una cantidad da más que la cantidad?",
      pasos:[R`$125\,\% = 1,25$ ⇒ $C_F = 1,25 \cdot 64 = 80$`, "80 es más que 64: el índice es mayor que 1.", "Un porcentaje mayor que el 100 % da más que la cantidad."],
      res:"El 125 % de 64 es <b>80</b>, más que 64: pasa siempre que el porcentaje es <b>mayor que el 100 %</b>." }
  ],

  laminas: [
    { portada:true, cuerpo:[
      {html:`<p class="gancho">Sé lo que había y el porcentaje: multiplico.</p>`}
    ]},
    { titulo:"El porcentaje en forma decimal", cuerpo:[
      {def:[R`$35\,\% = \dfrac{35}{100} = 0,35$`, "Para calcular, el % se escribe en <b>decimal</b>: se divide entre 100."], etq:"Porcentaje"},
      {html:`<div class="dec-cards">${[["50 %","0,50","la mitad"],["25 %","0,25","la cuarta parte"],["21 %","0,21","el IVA"],["5 %","0,05","¡ojo con el 0!"],["120 %","1,20","más que el total"]].map(c=>`<div><b>${c[0]}</b><i>▼</i><span>${c[1]}</span><small>${c[2]}</small></div>`).join("")}</div>`},
      {nota:["La coma se mueve <b>dos lugares</b> a la izquierda: 5 % es 0,05, no 0,5."]}
    ]},
    { titulo:"🍕 Porcentaje de una cantidad", cuerpo:[
      {ej:{enun:"En una clase de 25 alumnos, al 40 % le gusta la pizza. ¿A cuántos?",
        pasos:[R`Lo que había: $C_{\text{inicial}} = 25$. El % en decimal: $I_{\text{variación}} = 0,40$`, R`$C_{\text{final}} = 0,40 \cdot 25 = 10$`], res:"A <b>10 alumnos</b> les gusta la pizza."}},
      {html:barra([[40,"40 % → 10 alumnos 🍕","pct-a"],[60,"60 % → 15 alumnos",""]])}
    ]},
    { titulo:"La fórmula (lo que hemos usado)", cuerpo:[
      {prop:[{formula:R`C_{\text{final}} = I_{\text{variación}} \cdot C_{\text{inicial}}`}, R`Abreviado: $C_F = I_V \cdot C_I$`], etq:"La fórmula"},
      {html:despeje([R`C_F = I_V \cdot C_I`, R`Busco $C_F$: pongo una $x$ y multiplico`, R`x = I_V \cdot C_I`])},
      {estudio:[{html:`<div class="cfiv"><div><b>$C_I$</b><span>cantidad inicial</span><small>lo que había: el 100 %</small></div><div><b>$I_V$</b><span>índice de variación</span><small>el % en decimal</small></div><div><b>$C_F$</b><span>cantidad final</span><small>lo que queda o lo que me piden</small></div></div>`}]},
      {nota:["<b>Tipo 1:</b> conozco lo que había y el %: <b>multiplico</b>."]}
    ]},
    { titulo:"¿Sube o baja? El índice de variación $I_V$", cuerpo:[
      {html:R`<div class="ivs"><div><b class="t">📊 El % de una cantidad</b><span class="f">$I_V = $ el % en decimal</span><small>El 40 %: $I_V = 0,40$</small></div><div class="sube"><b class="t">📈 Sube</b><span class="f">$I_V = 1 + $ el %</span><small>IVA del 21 %: $I_V = 1 + 0,21 = 1,21$</small></div><div class="baja"><b class="t">📉 Baja</b><span class="f">$I_V = 1 - $ el %</span><small>Descuento del 20 %: $I_V = 1 - 0,20 = 0,80$</small></div></div>`},
      {nota:["Sube: aumento, IVA, ganancia, se apuntan más. Baja: descuento, rebaja, pérdida, se van."]}
    ]},
    { titulo:"👟 Un descuento", cuerpo:[
      {ej:{enun:"Unas zapatillas cuestan 60 € y tienen un 20 % de descuento. ¿Cuánto pagas?",
        pasos:[R`Baja: $I_V = 1 - 0,20 = 0,80$`, R`$C_F = 0,80 \cdot 60 = 48$ €`], res:"Pagas <b>48 €</b> por las zapatillas."}},
      {nota:[R`Comprueba: te ahorras $60 - 48 = 12$ € y el 20 % de 60 es $12$ ✓`]}
    ]},
    { titulo:"🔧 El IVA y 🛴 la ganancia", cuerpo:[
      {cols:[
        [{ej:{etq:"🔧 IVA", enun:"Arreglar la moto cuesta 168 € más un 21 % de IVA. ¿Cuánto se paga?",
          pasos:[R`$I_V = 1 + 0,21 = 1,21$`, R`$C_F = 1,21 \cdot 168 = 203,28$`], res:"Arreglar la moto cuesta <b>203,28 €</b>."}}],
        [{ej:{etq:"🛴 Ganancia", enun:"Una tienda compra un patinete por 145 € y lo vende ganando un 30 %. ¿A qué precio?",
          pasos:[R`$I_V = 1 + 0,30 = 1,30$`, R`$C_F = 1,30 \cdot 145 = 188,50$`], res:"La tienda vende el patinete a <b>188,50 €</b>."}}]
      ]}
    ]},
    { titulo:"🪄 Trucos para ir más rápido", cuerpo:[
      {truco:["<b>Porcentajes de cabeza:</b> 50 %, la mitad; 25 %, la cuarta parte; 10 %, quita un cero; 5 %, la mitad del 10 %."], etq:"🪄 Truco 1"},
      {truco:[R`<b>Descuento del 30 %:</b> $I_V = 1 - 0,30 = 0,70$. <b>Subida del 30 %:</b> $I_V = 1 + 0,30 = 1,30$.`], etq:"🪄 Truco 2"},
      {truco:[R`<b>El 15 % de propina, de cabeza:</b> el 10 % de 40 € son 4 €, la mitad son 2 € → $4 + 2 = 6$ €.`], etq:"🪄 Truco 3"}
    ]},
    { titulo:"⚠️ Errores típicos", cuerpo:[
      {aviso:["<b>Escribir 5 % como 0,5</b> (es 0,05)."], etq:"⚠️ Error 1"},
      {aviso:[R`<b>En un descuento del 20 %, multiplicar por 0,20</b>: eso es lo que te ahorras. Lo que pagas es $I_V = 1 - 0,20 = 0,80$.`], etq:"⚠️ Error 2"},
      {aviso:["<b>Sumar los porcentajes encadenados</b>: se multiplican los índices."], etq:"⚠️ Error 3"}
    ]},
    { titulo:"📝 Resumen", cuerpo:[
      {resumen:[
        {formula:R`C_F = I_V \cdot C_I`},
        {lista:[R`Tipo 1: conozco $C_I$ y el %: <b>multiplico</b>.`,
                R`Un % de una cantidad: $I_V$ = el % en decimal.`,
                R`Sube (IVA, ganancia, aumento): $I_V = 1 + $ el %. Baja (descuento, rebaja): $I_V = 1 - $ el %.`,
                "Encadenados: se multiplican los índices (los % no se suman)."]}
      ]},
      {estudio:[
        {comp:{q:"Calcula el 15 % de 320.", sol:48, explic:R`$C_F = 0,15 \cdot 320 = 48$`, pista:"C_F = I_V · C_I con I_V = 0,15."}},
        {comp:{q:"El índice de variación de una rebaja del 30 % es…", opciones:["0,30","0,70","1,30"], ok:1, explic:"1 − 0,30 = 0,70.", pista:"¿Qué parte pagas?"}},
        {comp:{q:"Una consola de 300 € con el 21 % de IVA. ¿Cuánto se paga?", sol:363, unidad:"€", explic:R`$C_F = 1,21 \cdot 300 = 363$ €`, pista:"Sube un 21 %: I_V = 1,21."}},
        {comp:{q:"Un precio de 80 € baja un 10 % y después otro 10 %. ¿Precio final?", sol:64.8, unidad:"€", explic:R`$80 \cdot 0,90 \cdot 0,90 = 64,80$ €`, pista:"Multiplica los índices."}}
      ]}
    ]}
  ]
});
})();

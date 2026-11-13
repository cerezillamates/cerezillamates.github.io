/* 3.º ESO · Tema 3 · Apartado 5.1: Porcentajes. Tipo 1: calcular un %, un descuento o un incremento (MULTIPLICANDO)
   Organización de la profesora (13-nov-2026): el apartado de porcentajes tiene 3 subapartados:
   5.1 multiplicando (conozco C_I y el %), 5.2 dividiendo (busco el total, C_I), 5.3 busco el % (conozco C_I y C_F).
   Siempre la fórmula C_F = C_I · I_V, con el % en decimal; se pone x en lo que se busca y se despeja. */
(function(){
const R = String.raw;
// triángulo (solo como truco): C_F arriba; C_I × I_V abajo; tapa: "F", "I", "V" o ""
const tri = (tapa, pie) => {
  const v = (k,t) => tapa===k ? `<tspan fill="#f59e0b">?</tspan>` : t;
  return `<figure class="dib tri"><svg viewBox="0 0 260 170" role="img" aria-label="Triángulo: C F arriba; C I por I V abajo">
    <polygon points="130,8 252,160 8,160" fill="#eef0ff" stroke="#4338ca" stroke-width="4" stroke-linejoin="round"/>
    <line x1="70" y1="86" x2="190" y2="86" stroke="#4338ca" stroke-width="3"/>
    <text x="130" y="72" text-anchor="middle" font-size="30" font-weight="800" fill="#1e1b3a">${v("F","C<tspan font-size=\"16\" dy=\"6\">F</tspan>")}</text>
    <text x="130" y="136" text-anchor="middle" font-size="28" font-weight="800" fill="#1e1b3a">${v("I","C<tspan font-size=\"15\" dy=\"5\">I</tspan>")}<tspan dy="-5"> × </tspan>${v("V","I<tspan font-size=\"15\" dy=\"5\">V</tspan>")}</text>
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
      enun:"Usa la fórmula $C_F = C_I \\cdot I_V$.<br><b>a)</b> De los 2350 alumnos de un instituto, el 16 % viene en bici. ¿Cuántos alumnos son?<br><b>b)</b> Un abrigo de 120 € tiene un 35 % de descuento. ¿Cuánto se paga?<br><b>c)</b> La factura de la luz es de 64,50 € más el 21 % de IVA. ¿Cuánto se paga?",
      pasos:[R`<b>a)</b> $I_V = 0,16$ ⇒ $C_F = 2350 \cdot 0,16 = 376$`,
             R`<b>b)</b> Baja: $I_V = 1 - 0,35 = 0,65$ ⇒ $C_F = 120 \cdot 0,65 = 78$ €`,
             R`<b>c)</b> Sube: $I_V = 1 + 0,21 = 1,21$ ⇒ $C_F = 64,50 \cdot 1,21 = 78,045 \approx 78,05$ €`],
      res:"a) Vienen en bici <b>376 alumnos</b>.<br>b) Por el abrigo se pagan <b>78 €</b>.<br>c) Por la luz se pagan <b>78,05 €</b>." },
    { nivel:"Práctica", min:6,
      enun:"Un pantano tiene una capacidad de 2300 hm³ y está al 43 %. Con las lluvias de la primavera, el agua que tiene aumenta un 40 %.<br><b>a)</b> ¿Cuántos hm³ tenía antes de las lluvias?<br><b>b)</b> ¿Cuántos hm³ tiene ahora?",
      pasos:[R`<b>a)</b> $C_F = C_I \cdot I_V = 2300 \cdot 0,43 = 989$ hm³`,
             R`<b>b)</b> Ahora lo que había es 989 y sube un 40 %: $I_V = 1 + 0,40 = 1,40$`,
             R`$C_F = 989 \cdot 1,40 = 1384,6$ hm³`,
             "El 40 % se calcula sobre el agua que tenía (989), no sobre la capacidad."],
      res:"a) Antes de las lluvias tenía <b>989 hm³</b>.<br>b) Ahora tiene <b>1384,6 hm³</b>." },
    { nivel:"Práctica", min:6,
      enun:"Una tienda compra una bici por 240 €. Quiere ganar un 35 % y, además, al venderla tiene que cobrar el 21 % de IVA. ¿A qué precio vende la bici?",
      pasos:[R`Ganar un 35 %: sube, $I_V = 1,35$. IVA: sube, $I_V = 1,21$`,
             R`Índice total: $I_V = 1,35 \cdot 1,21 = 1,6335$`,
             R`$C_F = C_I \cdot I_V = 240 \cdot 1,6335 = 392,04$ €`,
             R`Comprueba: $240 \cdot 1,35 = 324$ ⇒ $324 \cdot 1,21 = 392,04$ ✓`],
      res:"La tienda vende la bici a <b>392,04 €</b>." },
    { nivel:"Problema", min:7,
      enun:"Unas zapatillas cuestan 89,90 €. En enero tienen un 30 % de descuento y en febrero, sobre el precio rebajado, otro 20 %.<br><b>a)</b> ¿Cuánto cuestan en febrero?<br><b>b)</b> Marta dice que es lo mismo que un 50 % de descuento. ¿Tiene razón?",
      pasos:[R`Índices: baja 30 % → $0,70$; baja 20 % → $0,80$`,
             R`Índice total: $I_V = 0,70 \cdot 0,80 = 0,56$`,
             R`<b>a)</b> $C_F = 89,90 \cdot 0,56 = 50,344 \approx 50,34$ €`,
             R`<b>b)</b> Con un 50 %: $C_F = 89,90 \cdot 0,50 = 44,95$ €. No es lo mismo`,
             R`El índice $0,56$ es una rebaja de $1 - 0,56 = 0,44$ → $44\,\%$`],
      res:"a) En febrero las zapatillas cuestan <b>50,34 €</b>.<br>b) Marta <b>no</b> tiene razón: las dos rebajas equivalen a un <b>44 %</b>, no a un 50 %." },
    { nivel:"Reto", min:8,
      enun:"Una ciudad tiene 85 000 habitantes y su población crece un 4 % cada año.<br><b>a)</b> ¿Cuántos habitantes tendrá dentro de 3 años?<br><b>b)</b> ¿Es lo mismo que crecer un 12 % de golpe?",
      pasos:[R`Cada año: $I_V = 1 + 0,04 = 1,04$`,
             R`Tres años: $I_V = 1,04 \cdot 1,04 \cdot 1,04 = 1,124864$`,
             R`<b>a)</b> $C_F = 85\,000 \cdot 1,124864 = 95\,613,44 \approx 95\,613$`,
             R`<b>b)</b> Con un 12 %: $C_F = 85\,000 \cdot 1,12 = 95\,200$. Cada año el 4 % se calcula sobre más habitantes`],
      res:"a) Dentro de 3 años tendrá unos <b>95 613 habitantes</b>.<br>b) <b>No</b> es lo mismo: con un 12 % de golpe serían 95 200; crece algo más, un 12,49 %." }
  ],

  casa: [
    { nivel:"Básico",
      enun:"Calcula con la fórmula $C_F = C_I \\cdot I_V$: <b>a)</b> el 7 % de 3200 &nbsp; <b>b)</b> el 120 % de 45 &nbsp; <b>c)</b> el 0,5 % de 18 000",
      pasos:[R`<b>a)</b> $C_F = 3200 \cdot 0,07 = 224$`, R`<b>b)</b> $C_F = 45 \cdot 1,20 = 54$`, R`<b>c)</b> $0,5\,\% = 0,005$ ⇒ $C_F = 18\,000 \cdot 0,005 = 90$`],
      res:"a) 224<br>b) 54<br>c) 90" },
    { nivel:"Consolidación",
      enun:"<b>a)</b> Arreglar la bici en el taller cuesta 180 € más el 21 % de IVA. ¿Cuánto pagas?<br><b>b)</b> Un pantalón de 55 € tiene un 35 % de descuento. ¿Cuánto pagas?",
      pasos:[R`<b>a)</b> $I_V = 1,21$ → $C_F = 180 \cdot 1,21 = 217,80$ €`, R`<b>b)</b> $I_V = 1 - 0,35 = 0,65$ → $C_F = 55 \cdot 0,65 = 35,75$ €`],
      res:"a) Pagas <b>217,80 €</b> por arreglar la bici.<br>b) Pagas <b>35,75 €</b> por el pantalón." },
    { nivel:"Consolidación",
      enun:"A una trabajadora que cobra 1450 € al mes le suben el sueldo un 3,5 %.<br><b>a)</b> ¿Cuánto cobra ahora al mes?<br><b>b)</b> ¿Cuánto dinero más cobrará en un año de 12 pagas?",
      pasos:[R`Sube: $I_V = 1 + 0,035 = 1,035$`, R`<b>a)</b> $C_F = 1450 \cdot 1,035 = 1500,75$ €`,
             R`<b>b)</b> Cada mes cobra $1500,75 - 1450 = 50,75$ € más ⇒ $50,75 \cdot 12 = 609$ €`],
      res:"a) Ahora cobra <b>1500,75 €</b> al mes.<br>b) En un año cobrará <b>609 €</b> más." },
    { nivel:"Consolidación",
      enun:"Un coche nuevo cuesta 18 500 € y pierde un 15 % de su valor cada año. ¿Cuánto valdrá dentro de 2 años?",
      pasos:[R`Cada año baja: $I_V = 1 - 0,15 = 0,85$`, R`Dos años: $I_V = 0,85 \cdot 0,85 = 0,7225$`, R`$C_F = 18\,500 \cdot 0,7225 = 13\,366,25$ €`],
      res:"Dentro de 2 años el coche valdrá <b>13 366,25 €</b>." },
    { nivel:"Problema",
      enun:"En el taller cobran 160 € de piezas y 2,5 horas de trabajo a 38 € la hora. Por ser cliente nos hacen un 10 % de descuento y después añaden el 21 % de IVA. ¿Cuánto pagamos?",
      pasos:[R`Lo primero, cuánto cuesta el arreglo: $2,5 \cdot 38 = 95$ € ⇒ $160 + 95 = 255$ €`,
             R`Índices: descuento $0,90$; IVA $1,21$ ⇒ $I_V = 0,90 \cdot 1,21 = 1,089$`,
             R`$C_F = 255 \cdot 1,089 = 277,695 \approx 277,70$ €`],
      res:"Pagamos <b>277,70 €</b> en el taller." },
    { nivel:"Problema",
      enun:"En una clase de 40 alumnos, el 60 % son chicas. El 25 % de las chicas y el 50 % de los chicos llevan gafas. ¿Cuántos alumnos llevan gafas?",
      pasos:[R`Chicas: $C_F = 40 \cdot 0,60 = 24$. Chicos: $40 - 24 = 16$`,
             R`Chicas con gafas: $24 \cdot 0,25 = 6$`, R`Chicos con gafas: $16 \cdot 0,50 = 8$`, R`En total: $6 + 8 = 14$`],
      res:"Llevan gafas <b>14 alumnos</b>." },
    { nivel:"Para pensar",
      enun:"Una tele cuesta 450 €. ¿Da igual hacer primero un descuento del 10 % y después añadir el 21 % de IVA, o primero el IVA y después el descuento?",
      pasos:[R`Primero descuento: $450 \cdot 0,90 = 405$ ⇒ $405 \cdot 1,21 = 490,05$ €`,
             R`Primero IVA: $450 \cdot 1,21 = 544,50$ ⇒ $544,50 \cdot 0,90 = 490,05$ €`,
             R`Es lo mismo porque se multiplica por los mismos índices: $0,90 \cdot 1,21 = 1,21 \cdot 0,90 = 1,089$`],
      res:"<b>Da igual</b>: en los dos casos se pagan <b>490,05 €</b>." }
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
        pasos:[R`Lo que había: $C_{\text{inicial}} = 25$. El % en decimal: $I_{\text{variación}} = 0,40$`, R`$C_{\text{final}} = 25 \cdot 0,40 = 10$`], res:"A <b>10 alumnos</b> les gusta la pizza."}},
      {html:barra([[40,"40 % → 10 alumnos 🍕","pct-a"],[60,"60 % → 15 alumnos",""]])}
    ]},
    { titulo:"La fórmula (lo que hemos usado)", cuerpo:[
      {prop:[{formula:R`C_{\text{final}} = C_{\text{inicial}} \cdot I_{\text{variación}}`}, R`Abreviado: $C_F = C_I \cdot I_V$`], etq:"La fórmula"},
      {html:`<div class="cfiv"><div><b>$C_I$</b><span>cantidad inicial</span><small>lo que había: el 100 %</small></div><div><b>$I_V$</b><span>índice de variación</span><small>el % en decimal</small></div><div><b>$C_F$</b><span>cantidad final</span><small>lo que queda o lo que me piden</small></div></div>`},
      {nota:["<b>Tipo 1:</b> conozco lo que había y el %. La $x$ es $C_F$: <b>multiplico</b>."]}
    ]},
    { titulo:"¿Sube o baja? El índice de variación", cuerpo:[
      {cols:[
        [{def:[R`<b>$I_V = 1 + $ el %</b>`, "+25 % → <b>1,25</b>", "IVA +21 % → <b>1,21</b>"], etq:"📈 SUBE"}],
        [{aviso:[R`<b>$I_V = 1 - $ el %</b>`, "−20 % → <b>0,80</b>", "−5 % → <b>0,95</b>"], etq:"📉 BAJA"}]
      ]},
      {nota:["Sube: aumento, IVA, ganancia, recargo. Baja: descuento, rebaja, pérdida."]}
    ]},
    { titulo:"👟 Un descuento", cuerpo:[
      {ej:{enun:"Unas zapatillas cuestan 60 € y tienen un 20 % de descuento. ¿Cuánto pagas?",
        pasos:[R`Baja: $I_V = 1 - 0,20 = 0,80$`, R`$C_F = 60 \cdot 0,80 = 48$ €`], res:"Pagas <b>48 €</b> por las zapatillas."}},
      {nota:[R`Comprueba: te ahorras $60 - 48 = 12$ € y el 20 % de 60 es $12$ ✓`]}
    ]},
    { titulo:"🔧 El IVA y 🛴 la ganancia", cuerpo:[
      {cols:[
        [{ej:{etq:"🔧 IVA", enun:"Arreglar la moto cuesta 168 € más un 21 % de IVA. ¿Cuánto se paga?",
          pasos:[R`$I_V = 1,21$`, R`$C_F = 168 \cdot 1,21 = 203,28$`], res:"Arreglar la moto cuesta <b>203,28 €</b>."}}],
        [{ej:{etq:"🛴 Ganancia", enun:"Una tienda compra un patinete por 145 € y lo vende ganando un 30 %. ¿A qué precio?",
          pasos:[R`$I_V = 1,30$`, R`$C_F = 145 \cdot 1,30 = 188,50$`], res:"La tienda vende el patinete a <b>188,50 €</b>."}}]
      ]}
    ]},
    { titulo:"Porcentajes encadenados", cuerpo:[
      {ej:{etq:"🎒", enun:"Una mochila cuesta 50 €. En septiembre sube un 20 % y en enero la rebajan un 25 %. ¿Cuánto cuesta al final?",
        pasos:[R`Índices: sube 20 % → $1,20$; baja 25 % → $0,75$`, R`$I_V$ total $= 1,20 \cdot 0,75 = 0,90$`, R`$C_F = 50 \cdot 0,90 = 45$ €`],
        res:"Al final la mochila cuesta <b>45 €</b>."}},
      {html:flecha(["50 €","× 1,20","60 €","× 0,75","45 €"])},
      {aviso:["<b>Los porcentajes NO se suman</b>: se multiplican los índices. Subir un 20 % y bajar un 25 % no es bajar un 5 %."]}
    ]},
    { titulo:"Encadenados con IVA", cuerpo:[
      {ej:{etq:"🧾", enun:"Una factura de 350 € tiene un 20 % de descuento y después hay que añadir el 21 % de IVA. ¿Cuánto se paga?",
        pasos:[R`Índices: descuento $0,80$; IVA $1,21$`, R`$I_V = 0,80 \cdot 1,21 = 0,968$`, R`$C_F = 350 \cdot 0,968 = 338,80$ €`], res:"Hay que pagar <b>338,80 €</b>."}},
      {nota:["Da igual el orden: primero el descuento y luego el IVA, o al revés. Se multiplica por los mismos índices."]}
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
        {formula:R`C_F = C_I \cdot I_V`},
        {lista:[R`Tipo 1: conozco $C_I$ y el %: <b>multiplico</b>.`,
                R`Un % de una cantidad: $I_V$ = el % en decimal.`,
                R`Sube (IVA, ganancia, aumento): $I_V = 1 + $ el %. Baja (descuento, rebaja): $I_V = 1 - $ el %.`,
                "Encadenados: se multiplican los índices (los % no se suman)."]}
      ]},
      {estudio:[
        {comp:{q:"Calcula el 15 % de 320.", sol:48, explic:R`$C_F = 320 \cdot 0,15 = 48$`, pista:"C_F = C_I · I_V con I_V = 0,15."}},
        {comp:{q:"El índice de variación de una rebaja del 30 % es…", opciones:["0,30","0,70","1,30"], ok:1, explic:"1 − 0,30 = 0,70.", pista:"¿Qué parte pagas?"}},
        {comp:{q:"Una consola de 300 € con el 21 % de IVA. ¿Cuánto se paga?", sol:363, unidad:"€", explic:R`$C_F = 300 \cdot 1,21 = 363$ €`, pista:"Sube un 21 %: I_V = 1,21."}},
        {comp:{q:"Un precio de 80 € baja un 10 % y después otro 10 %. ¿Precio final?", sol:64.8, unidad:"€", explic:R`$80 \cdot 0,90 \cdot 0,90 = 64,80$ €`, pista:"Multiplica los índices."}}
      ]}
    ]}
  ]
});
})();

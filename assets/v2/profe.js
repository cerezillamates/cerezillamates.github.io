/* Modo profesora: solo en el navegador de la profesora se puede imprimir y se ven los enlaces de descarga
   de los apuntes propios (PDF y Word de la web). Las soluciones de otros profes (enlaces externos) se ven siempre.
   Se activa una vez abriendo cualquier página con ?profe=FRASE (y se desactiva con ?profe=salir).
   La frase no está aquí: solo su huella SHA-256. En su navegador se guarda la frase y en cada visita
   se comprueba su huella, así que no basta con copiar la huella del código.
   Es una barrera para el alumnado, no una protección total. */
(function(){
  var H = "f7e6daeb0dae4f1b74c7a526fc04c7e1917ec55a8e7b9343f9b5291f1d3887f3", K = "mates:profe", d = document.documentElement;
  var css = 'html:not(.profe) [data-imprimir],html:not(.profe) .solo-profe,html:not(.profe) button[onclick="print()"],html:not(.profe) a[href$="apuntes.pdf"],html:not(.profe) a[href*="Apuntes_"],html:not(.profe) a[href$=".pdf"]:not([href^="http"]),html:not(.profe) a[href$=".docx"]:not([href^="http"]),html:not(.profe) a[download],html:not(.profe) [data-descarga]{display:none!important}'
    + '@media print{html:not(.profe) body>*{display:none!important}html:not(.profe) body::before{content:"Estos materiales no se pueden imprimir desde la web. Puedes estudiarlos en cerezillamates.github.io.";display:block;font:16pt/1.5 sans-serif;padding:2cm;color:#1b2130}}';
  var st = document.createElement("style"); st.textContent = css; (document.head || d).appendChild(st);
  function huella(frase){
    return crypto.subtle.digest("SHA-256", new TextEncoder().encode("cerezillamates:" + frase)).then(function(b){
      return Array.from(new Uint8Array(b)).map(function(x){ return x.toString(16).padStart(2,"0"); }).join("");
    });
  }
  if(!(window.crypto && crypto.subtle)) return;
  var q, guardada = null;
  try{ q = new URLSearchParams(location.search).get("profe"); }catch(e){}
  try{ guardada = localStorage.getItem(K); }catch(e){}
  if(q === "salir"){ try{ localStorage.removeItem(K); }catch(e){} d.classList.remove("profe"); return; }
  var frase = q || guardada;
  if(!frase) return;
  huella(frase).then(function(h){
    if(h === H){ d.classList.add("profe"); try{ localStorage.setItem(K, frase); }catch(e){} }
    else if(!q){ try{ localStorage.removeItem(K); }catch(e){} }
    if(q){ try{ history.replaceState(null, "", location.pathname + location.hash); }catch(e){} }
  });
})();

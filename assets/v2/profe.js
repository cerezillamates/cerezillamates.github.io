/* Modo profesora: solo en el navegador de la profesora se puede imprimir.
   Se activa una vez abriendo cualquier página con ?profe=FRASE (y se desactiva con ?profe=salir).
   La frase no está aquí: solo su huella SHA-256. Es una barrera para el alumnado, no una protección total. */
(function(){
  var H = "f7e6daeb0dae4f1b74c7a526fc04c7e1917ec55a8e7b9343f9b5291f1d3887f3", K = "mates:profe", d = document.documentElement;
  var css = 'html:not(.profe) [data-imprimir],html:not(.profe) .solo-profe,html:not(.profe) button[onclick="print()"],html:not(.profe) a[href$="apuntes.pdf"],html:not(.profe) a[href*="Apuntes_"]{display:none!important}'
    + '@media print{html:not(.profe) body>*{display:none!important}html:not(.profe) body::before{content:"Estos materiales no se pueden imprimir desde la web. Puedes estudiarlos en cerezillamates.github.io.";display:block;font:16pt/1.5 sans-serif;padding:2cm;color:#1b2130}}';
  var st = document.createElement("style"); st.textContent = css; (document.head || d).appendChild(st);
  function marca(){ try{ if(localStorage.getItem(K) === H) d.classList.add("profe"); }catch(e){} }
  marca();
  var q; try{ q = new URLSearchParams(location.search).get("profe"); }catch(e){}
  if(q === "salir"){ try{ localStorage.removeItem(K); }catch(e){} d.classList.remove("profe"); }
  else if(q && window.crypto && crypto.subtle){
    crypto.subtle.digest("SHA-256", new TextEncoder().encode("cerezillamates:" + q)).then(function(b){
      var h = Array.from(new Uint8Array(b)).map(function(x){ return x.toString(16).padStart(2,"0"); }).join("");
      if(h === H){ try{ localStorage.setItem(K, H); }catch(e){} d.classList.add("profe"); }
      try{ history.replaceState(null, "", location.pathname + location.hash); }catch(e){}
    });
  }
})();

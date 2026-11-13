/* Portada del tema con «apps» (como la pantalla del móvil).
   1.º se elige EN CLASE o EN CASA; después salen los apartados como iconos.
   Al pinchar un icono se abre una tarjeta con lo que se puede hacer (2 o 3 botones).
   Los subapartados (5.1, 5.2…) van dentro de una CARPETA, como en el móvil.
   «Todo el tema» enseña la vista completa de antes (pestañas). Necesita TEMA.info y EXTRA (index.html). */
(function(){
  const raiz = document.getElementById("inicio"), todo = document.getElementById("todo");
  if(!raiz) return;
  const L = (TEMA.info.apartados || []).filter(a=>a.listo);
  const CLAVE = "modo-tema";
  const guarda = m => { try{ localStorage.setItem(CLAVE, m); }catch(e){} };
  const lee = () => { try{ return localStorage.getItem(CLAVE); }catch(e){ return null; } };
  const btnsExtra = id => ((EXTRA[id]||[])[0]||[])[3] || [];

  // acciones de cada apartado según el modo
  const accAp = (a, modo) => modo==="clase"
    ? [["🖥", "Explicación", `apuntes.html?ap=${a.num}&modo=proyectar`, "main"], ["✏️", "Ejercicios de clase", `clase.html?ap=${a.num}`, "verde"]]
    : [["📖", "Estudiar los apuntes", `apuntes.html?ap=${a.num}`, "main"], ["🏠", "Tareas para casa", `tareas.html?ap=${a.num}`, "verde"]];

  // apps especiales (repaso, situación, retos, autoevaluación)
  const especiales = modo => {
    const sit = btnsExtra("situacion");
    const calc = sit.find(b=>/🧮/.test(b[0]));
    const L2 = [];
    if(modo==="clase"){
      L2.push({ico:"📋", corto:"Control", titulo:"Repaso y modelos de control", acc:[["🖥","Repaso del tema","apuntes.html?ap=20&modo=proyectar","main"],["✏️","Modelo de control 1","clase.html?ap=20","verde"],["✏️","Modelo de control 2","clase.html?ap=21","verde"]]});
      L2.push({ico:"🌍", corto:"Situación", titulo:(EXTRA.situacion||[[0,""]])[0][1], acc:[["🖥","Presentar el reto","apuntes.html?ap=23&modo=proyectar","main"],["📋","Dosier del grupo","apuntes.html?ap=23","verde"]].concat(calc?[["🧮","Calculadora",calc[1],""]]:[])});
      L2.push({ico:"🧠", corto:"Retos", titulo:"Retos y estrategias", acc:[["🖥","Estrategias","apuntes.html?ap=24&modo=proyectar","main"],["✏️","Retos en clase","clase.html?ap=24","verde"]]});
    } else {
      L2.push({ico:"📋", corto:"Repaso", titulo:"Repaso para el control", acc:[["🏠","Ejercicios de repaso (la batería del control)","tareas.html?ap=20","main"],["📝","Modelo de control 2","tareas.html?ap=21","verde"],["📖","Qué entra y el mapa del tema","apuntes.html?ap=20",""]]});
      L2.push({ico:"✅", corto:"Autoevaluación", href:"apuntes.html?ap=22"});
      L2.push({ico:"🎬", corto:"Vídeos", href:"#videos", todo:true});
      L2.push({ico:"🌍", corto:"Situación", titulo:(EXTRA.situacion||[[0,""]])[0][1], acc:[["📋","Dosier del grupo","apuntes.html?ap=23","main"]].concat(calc?[["🧮","Calculadora",calc[1],"verde"]]:[])});
      L2.push({ico:"🧠", corto:"Retos", titulo:"Retos para pensar", acc:[["🏠","Retos para casa","tareas.html?ap=24","main"]]});
    }
    return L2;
  };

  let MODO = null;
  const app = (ico, corto, num, data, clase) => `<button class="app ${clase||""}" data-k="${data}"><span class="app-i">${ico}${num?`<b>${num}</b>`:""}</span><span class="app-t">${corto}</span></button>`;

  function pinta(modo){
    MODO = modo; guarda(modo);
    const items = [];  // [html]
    const reg = [];    // datos de cada app
    for(let k=0; k<L.length; k++){
      const a = L[k];
      if(a.grupo){
        const subs = []; while(k<L.length && L[k].grupo===a.grupo) subs.push(L[k++]); k--;
        const m = a.grupo.match(/^(\S+?)\.?\s+(.*)$/) || [0,"",a.grupo];
        reg.push({carpeta:true, titulo:m[2], num:m[1], desc:a.grupoDesc||"", subs});
        items.push(`<button class="app carpeta" data-k="${reg.length-1}"><span class="app-i">${subs.slice(0,4).map(s=>`<i>${s.ico||"•"}</i>`).join("")}<b>${m[1]}</b></span><span class="app-t">${m[2]}</span></button>`);
      } else {
        reg.push({ap:a});
        items.push(app(a.ico||"📘", a.corto||a.titulo, a.num, reg.length-1));
      }
    }
    const esp = especiales(modo);
    esp.forEach(e=>{ reg.push({esp:e}); items.push(app(e.ico, e.corto, "", reg.length-1, "esp")); });
    raiz.innerHTML = `
      <div class="modo-sel" role="tablist">
        <button data-m="clase" aria-selected="${modo==="clase"}">🧑‍🏫 En clase</button>
        <button data-m="casa" aria-selected="${modo==="casa"}">🏠 En casa</button>
      </div>
      <p class="apps-guia">${modo==="clase" ? "Pincha en un apartado para la <b>explicación</b> o los <b>ejercicios de clase</b>." : "Pincha en un apartado para <b>estudiar</b> o hacer las <b>tareas</b>."}</p>
      <div class="apps">${items.join("")}</div>
      <p class="apps-todo"><a href="#todo" data-todo>☰ Ver todo el tema en una lista</a></p>
      <div class="hoja" hidden><div class="hoja-c" role="dialog" aria-modal="true"></div></div>`;
    raiz.hidden = false; if(todo) todo.hidden = true;
    raiz.querySelectorAll(".apps .app").forEach(b=>b.onclick = () => abre(reg[+b.dataset.k], reg));
    raiz.querySelectorAll(".modo-sel button").forEach(b=>b.onclick = () => { history.replaceState(null,"","#"+b.dataset.m); pinta(b.dataset.m); });
    raiz.querySelector("[data-todo]").onclick = e => { e.preventDefault(); verTodo(); };
  }

  function hoja(html){
    const h = raiz.querySelector(".hoja"), c = h.querySelector(".hoja-c");
    c.innerHTML = `<button class="hoja-x" aria-label="Cerrar">✕</button>` + html;
    h.hidden = false;
    c.querySelector(".hoja-x").onclick = () => h.hidden = true;
    h.onclick = e => { if(e.target===h) h.hidden = true; };
    return c;
  }
  const botones = acc => `<div class="hoja-acc">${acc.map(b=>`<a class="btn ${b[3]||""}" href="${b[2]}">${b[0]} ${b[1]}</a>`).join("")}</div>`;

  function abre(r){
    if(r.ap){
      const a = r.ap;
      hoja(`<div class="hoja-cab"><span class="app-i">${a.ico||"📘"}<b>${a.num}</b></span><div><h3>${a.tipo?`<span class="tipo-p">${a.tipo}</span> `:""}${a.titulo}</h3><p>${a.desc||""}</p></div></div>${botones(accAp(a, MODO))}`);
    } else if(r.carpeta){
      const c = hoja(`<div class="hoja-cab carp"><div><h3>${r.num}. ${r.titulo}</h3><p>${r.desc}</p></div></div><div class="apps mini">${r.subs.map((s,i)=>app(s.ico||"•", s.corto||s.titulo, s.num, i)).join("")}</div>`);
      c.querySelectorAll(".app").forEach(b=>b.onclick = () => abre({ap:r.subs[+b.dataset.k]}));
    } else if(r.esp){
      const e = r.esp;
      if(e.todo){ verTodo(e.href.slice(1)); return; }
      if(e.href){ location.href = e.href; return; }
      hoja(`<div class="hoja-cab"><span class="app-i">${e.ico}</span><div><h3>${e.titulo}</h3></div></div>${botones(e.acc)}`);
    }
  }

  function elige(){
    raiz.hidden = false; if(todo) todo.hidden = true;
    raiz.innerHTML = `<div class="elige">
      <button data-m="clase"><span>🧑‍🏫</span><b>En clase</b><small>Explicaciones y ejercicios para la pizarra</small></button>
      <button data-m="casa"><span>🏠</span><b>En casa</b><small>Estudiar, tareas, repaso y autoevaluación</small></button>
    </div><p class="apps-todo"><a href="#todo" data-todo>☰ Ver todo el tema en una lista</a></p>`;
    raiz.querySelectorAll(".elige button").forEach(b=>b.onclick = () => { history.replaceState(null,"","#"+b.dataset.m); pinta(b.dataset.m); });
    raiz.querySelector("[data-todo]").onclick = e => { e.preventDefault(); verTodo(); };
  }

  function verTodo(pestana){
    raiz.hidden = true; if(todo) todo.hidden = false;
    if(window.abrir) abrir(pestana || "apuntes");
    if(!pestana) history.replaceState(null,"","#todo");
    window.scrollTo(0,0);
  }
  window.volverApps = () => { history.replaceState(null,"", MODO ? "#"+MODO : location.pathname); MODO ? pinta(MODO) : elige(); window.scrollTo(0,0); };

  const h = location.hash.slice(1);
  if(h==="clase" || h==="casa") pinta(h);
  else if(h==="todo" || (typeof SECC!=="undefined" && SECC.some(s=>s.id===h))) { verTodo(h==="todo"?null:h); }
  else { const m = lee(); m ? pinta(m) : elige(); }
  document.addEventListener("keydown", e => { if(e.key==="Escape"){ const x = raiz.querySelector(".hoja"); if(x) x.hidden = true; } });
})();

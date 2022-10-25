
var URLactual = window.location.href;

    export function paginaActualIndicador(claseActive,idNodoDesktop1,idNodoDesktop2,idNodoDesktop3,idNodoDesktop4,idNodo1,idNodo2,idNodo3,idNodo4,idPanel){
        const $nodoDesktop1 = document.querySelector(idNodoDesktop1);
        const $nodoDesktop2 = document.querySelector(idNodoDesktop2);
        const $nodoDesktop3 = document.querySelector(idNodoDesktop3);
        const $nodoDesktop4 = document.querySelector(idNodoDesktop4);
        
        const $nodo1 = document.querySelector(idNodo1);
        const $nodo2 = document.querySelector(idNodo2);
        const $nodo3 = document.querySelector(idNodo3);
        const $nodo4 = document.querySelector(idNodo4);
        const $panel = document.querySelector(idPanel)

        function cambiaStylesPanel(nodo){
            nodo.style.color = "#a0d995";
            // nodo.style.fontWeight = "600";
            // nodo.style.letterSpacing= "1.5px";
        }

        if(URLactual === "http://127.0.0.1:5500/index.html" || 
            URLactual === "https://jean-pi.github.io/index.html" || 
            URLactual === "https://jean-pi.github.io/" ||
            URLactual === "https://muestraweb.github.io/" || 
            URLactual === "https://muestraweb.github.io/index.html"){
            $nodoDesktop1.classList.add(claseActive)
            cambiaStylesPanel($nodo1)
             
            document.addEventListener("click", (e)=>{
                if(e.target.matches(idNodo3) || e.target.matches(idNodoDesktop3)){
                    //activo el nodo 3 
                    cambiaStylesPanel($nodo3)
                    $nodoDesktop3.classList.add(claseActive)

                    //desabilito el nodo 1
                    $nodo1.style.color = "rgb(0, 0, 0)"
                    $nodoDesktop1.classList.remove(claseActive)
                    
                    document.querySelector("#panel").classList.remove("panelMenu_isActive")
                    document.documentElement.classList.remove("panelMenu_bodyIsActive")
                    console.log("qq")
                }
            })
            
        } 
        if(URLactual === "http://127.0.0.1:5500/pages/menuvirtual.html" || 
            URLactual === "https://jean-pi.github.io/pages/menuvirtual.html" || 
            URLactual === "https://muestraweb.github.io/pages/menuvirtual.html"){
            $nodoDesktop2.classList.add(claseActive)
            cambiaStylesPanel($nodo2)
        }
        if(URLactual === "https://jean-pi.github.io//#quienessomos" || 
        URLactual === "https://jean-pi.github.io/index.html#quienessomos" ||
        URLactual === "http://127.0.0.1:5500/index.html#quienessomos" || 
        URLactual === "https://muestraweb.github.io/index.html#quienessomos" ||
        URLactual === "https://muestraweb.github.io//#quienessomos"){
        $nodoDesktop3.classList.add(claseActive)
        cambiaStylesPanel($nodo3)

        document.addEventListener("click", (e)=>{
            if(e.target.matches(idNodo3) ){
                document.querySelector("#panel").classList.remove("panelMenu_isActive")
                document.documentElement.classList.remove("panelMenu_bodyIsActive")
                // // esta esta muy feo la verdad
            }
        })
        
        }
        if(URLactual === "http://127.0.0.1:5500/pages/contacto.html" || 
            URLactual === "https://jean-pi.github.io/pages/contacto.html" || 
            URLactual === "https://muestraweb.github.io/pages/contacto.html"){
            $nodoDesktop4.classList.add(claseActive)
            cambiaStylesPanel($nodo4)
            console.log("Aaa contacto")
        }
    }
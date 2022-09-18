
export function ventanaReseñaActivadora(claseActivadora,idNodoVentana,idNodoCierraVentanaCalificacion){

    const $ventanaNodo = document.querySelector(idNodoVentana)
    const $body = document.querySelector("body")

    if($ventanaNodo === null) return;

    setTimeout(()=>{
        $ventanaNodo.classList.add(claseActivadora)
        $body.style.overflow = "hidden"
    },9000)

    document.addEventListener("click",(e)=>{
        if(e.target.matches(idNodoCierraVentanaCalificacion)){
            $ventanaNodo.classList.remove(claseActivadora)
            $body.style.overflow = "initial"
        }
    })
}

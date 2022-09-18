
export function headerStickyFunction(idNodoHeaderSticky,claseActiveHeaderSticky){
	const $NodoHeaderSticky = document.querySelector(idNodoHeaderSticky)
    document.addEventListener("scroll", (e)=>{
        if(window.scrollY > 150){
            $NodoHeaderSticky.classList.add(claseActiveHeaderSticky)
        }else{
            $NodoHeaderSticky.classList.remove(claseActiveHeaderSticky)
        }
    })
}

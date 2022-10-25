

export function menuHamburguer(idOpenCLose,idPanel,clasePanelIsActive){
    const $panel = document.querySelector(idPanel);

        document.addEventListener("click", (e)=>{
            if(e.target.matches(idOpenCLose)){
                manejadorPanelLateral();
            }
        })

        const manejadorPanelLateral = () =>{
            $panel.classList.toggle(clasePanelIsActive[0])
            document.documentElement.classList.toggle(clasePanelIsActive[1])
        }
}

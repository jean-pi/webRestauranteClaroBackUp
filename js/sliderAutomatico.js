
export function sliderAutomatico(idSlider,idBtnRight,idBtnLeft,idSliderItems){


const $slider = document.querySelector(idSlider);
const $sliderItems = document.querySelectorAll(idSliderItems);
const $sliderItemLast = $sliderItems[$sliderItems.length -1];

    if($slider === null) return;

$slider.insertAdjacentElement(`afterbegin`,$sliderItemLast)

const next = ()=>{
    // se seleeciona el primer nodo recien porque se actualiza a cada click
    let $sliderItenFirst = document.querySelectorAll(idSliderItems)[0];
    $slider.style.marginLeft = "-200vw";
    $slider.style.transition = "all 0.5s";
    setTimeout(()=>{
        $slider.style.transition = "none"
        $slider.style.marginLeft = "-100vw"
        $slider.insertAdjacentElement(`beforeend`, $sliderItenFirst)
    },500)
}
const prev = () =>{
    let $sliderItems = document.querySelectorAll(idSliderItems);
    let $sliderItenLast = $sliderItems[$sliderItems.length -1];
    $slider.style.marginLeft = "0vw";
    $slider.style.transition = "all 0.5s";
    setTimeout(()=>{
        $slider.style.transition = "none"
        $slider.style.marginLeft = "-100vw"
        $slider.insertAdjacentElement(`afterbegin`, $sliderItenLast)
    },500)
}
document.addEventListener("click", (e)=>{
    if(e.target.matches(idBtnLeft)){
        prev();
    }
    if(e.target.matches(idBtnRight)){
        next();
    }
})

setInterval( ()=>{
    next();
},7000)
}
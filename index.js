
import {menuHamburguer} from "./js/menuHamburguer.js";
import {paginaActualIndicador} from "./js/paginaActualIndicador.js";
import {ventanaRese├▒aActivadora} from "./js/ventanaRese├▒a.js";
import {sliderAutomatico} from "./js/sliderAutomatico.js";
import {headerStickyFunction} from "./js/headerSticky.js";


menuHamburguer("#btn-panelMobile","#panel",["panelMenu_isActive","panelMenu_bodyIsActive"]);
paginaActualIndicador("headerDesktop-nav-ul-li-a_isActive","#idinicio","#idmenuVirtual","#idquienesSomos","#idcontacto","#panel-inicio","#panel-menuVirtual","#panel-quienesSomos","#panel-contacto","#panel");
ventanaRese├▒aActivadora("calificacionMaps_isActive","#calificacionMaps","#NodoCierraVentanaCalificacion");
sliderAutomatico("#slider","#btn-right","#btn-left","#slider-items");
headerStickyFunction("#headerSticky","headerSticky_isActive")


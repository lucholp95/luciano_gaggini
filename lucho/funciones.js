//Menu lateral

var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}

//ocultar el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales para aluego manipularlas
let tangoc = document.getElementById("tangoc");
crearBarra(tangoc);
let jtangog = document.getElementById("tangog");
crearBarra(tangog);
let bejerman = document.getElementById("bejerman");
crearBarra(bejerman);
let ingles = document.getElementById("ingles");
crearBarra(ingles);
let mo = document.getElementById("mo");
crearBarra(mo);
let bs = document.getElementById("bs");
crearBarra(bs);

//guardar la cantidad de barras que se van a ir pintando
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1];
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalTangoc = setInterval(function(){
            pintarBarra(tangoc, 16, 0, intervalTangoc);
        },100);
        const intervalTangog = setInterval(function(){
            pintarBarra(tangog, 11, 1, intervalTangog);
        },100);
        const intervalBejerman = setInterval(function(){
            pintarBarra(bejerman, 11, 2, intervalBejerman);
        },100);
        const intervalIngles = setInterval(function(){
            pintarBarra(ingles, 15, 3, intervalIngles);
        },100);
        const intervalMo = setInterval(function(){
            pintarBarra(mo, 16, 4, intervalMo);
        },100);
        const intervalBs = setInterval(function(){
            pintarBarra(bs, 11, 5, intervalBs);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}
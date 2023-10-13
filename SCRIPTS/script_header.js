

function click_flecha () {
    var flecha = document.getElementById("flecha");
    flecha.style.visibility ="hidden";
    var flecha_up = document.getElementById("flecha_up");
    flecha_up.style.visibility ="visible";
    var desplegable = document.getElementById("panel");
    desplegable.style.visibility ="visible";
    
}

function click_flecha_up () {
    var flecha_up = document.getElementById("flecha_up");
    flecha_up.style.visibility ="hidden";
    var flecha = document.getElementById("flecha");
    flecha.style.visibility ="visible";
    var desplegable = document.getElementById("panel");
    desplegable.style.visibility ="hidden";    
    

    
}

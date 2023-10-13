

function activ_mn  (ide) {
    // alert("hola");
    var padre = document.getElementById("mod_negocio");
    var elementosHijosDiv = padre.children;

    for (var i = 0; i < elementosHijosDiv.length; i++) {
        elementosHijosDiv[i].style.display = "none";
    }
    var elemento = document.getElementById(ide);
    elemento.style.display="block"
}


function deactiv_mn  (ide) {
     var elemento = document.getElementById(ide);
    elemento.style.display="none"
    var padre = document.getElementById("mod_negocio");
    var elementosHijosDiv = padre.children;

    for (var i = 0; i < 18; i++) {
        elementosHijosDiv[i].style.display = "block";
    }
   
}


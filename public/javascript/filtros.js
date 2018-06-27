/* --------------------------        Mostrar/Ocultar Filtros     -------------------------- */

var btn = document.querySelector("#mostrarfiltro");

console.log(btn);
console.log(filtros);

btn.addEventListener("click", function () {

    switch (btn.value) {

        case "mostrar":
            console.log("Elimina");
            $("#filtros").addClass("hidden");
          
            $("#fle_filtros").addClass("fa-angle-down");
            $("#fle_filtros").removeClass("fa-angle-up");
            btn.value = "ocultar";
            break;

        case "ocultar":
            console.log("se empieza a mostrar");
            $("#filtros").removeClass("hidden");

            $("#fle_filtros").addClass("fa-angle-up");
            $("#fle_filtros").removeClass("fa-angle-down");
            btn.value = "mostrar";
            break;
    }   

});

/* --------------------------        Mostrar/Ocultar Filtros x Tipo     -------------------------- */

var btn_tipo = document.querySelector("#tipo");

console.log(btn_tipo);
console.log(filtro_tipo);

btn_tipo.addEventListener("click", function () {

    switch (btn_tipo.value) {

        case "mostrar":
            console.log("Elimina");
            $("#filtro_tipo").addClass("hidden");

            $("#fle_tipo").addClass("fa-angle-down");
            $("#fle_tipo").removeClass("fa-angle-up");
            btn_tipo.value = "ocultar";
            break;

        case "ocultar":
            console.log("se empieza a mostrar");
            $("#filtro_tipo").removeClass("hidden");

            $("#fle_tipo").addClass("fa-angle-up");
            $("#fle_tipo").removeClass("fa-angle-down");
            btn_tipo.value = "mostrar";
            break;
    }   
});

/* --------------------------        Mostrar/Ocultar Filtros x Edad     -------------------------- */

var btn_edad = document.querySelector("#edad");

console.log(btn_edad);
console.log(filtro_edad);

btn_edad.addEventListener("click", function () {

    switch (btn_edad.value) {

        case "mostrar":
            console.log("Elimina");
            $("#filtro_edad").addClass("hidden");

            $("#fle_edad").addClass("fa-angle-down");
            $("#fle_edad").removeClass("fa-angle-up");
            btn_edad.value = "ocultar";
            break;

        case "ocultar":
            console.log("se empieza a mostrar");
            $("#filtro_edad").removeClass("hidden");

            $("#fle_edad").addClass("fa-angle-up");
            $("#fle_edad").removeClass("fa-angle-down");
            btn_edad.value = "mostrar";
            break;
    }   
});

/* --------------------------        Mostrar/Ocultar Filtros x precio     -------------------------- */

var btn_precio = document.querySelector("#precio");
var filtro_precio = document.querySelector("#filtro_precio");

console.log(btn_precio);
console.log(filtro_precio);

btn_precio.addEventListener("click", function () {

    switch (btn_precio.value) {

        case "mostrar":
            console.log("Elimina");
            $("#filtro_precio").addClass("hidden");

            $("#fle_precio").addClass("fa-angle-down");
            $("#fle_precio").removeClass("fa-angle-up");
            btn_precio.value = "ocultar";
            break;

        case "ocultar":
            console.log("se empieza a mostrar");
            $("#filtro_precio").removeClass("hidden");

            $("#fle_precio").addClass("fa-angle-up");
            $("#fle_precio").removeClass("fa-angle-down");
            btn_precio.value = "mostrar";
            break;
    }   
});



/* --------------------------        Filtro por tipo     -------------------------- */

$



/* --------------------------        Filtro por edad     -------------------------- */
/* Valor del rango desde*/

var sliderDesde_edad = document.getElementById("desde_edad");

var outputDesde_edad = document.getElementById("desdeValor_edad");
outputDesde_edad.innerHTML = sliderDesde_edad.value;

sliderDesde_edad.oninput = function () {
    a = this.value;
    outputDesde_edad.innerHTML = a;
}


/* Valor del rango hasta*/
var sliderHasta_edad = document.getElementById("hasta_edad");
var outputHasta_edad = document.getElementById("hastaValor_edad");
outputHasta_edad.innerHTML = sliderHasta_edad.value;

sliderHasta_edad.oninput = function () {
    a = this.value;
    outputHasta_edad.innerHTML = a;
}

var boton_edad = document.querySelector(".filtroRango_edad");
var borrar_edad = document.querySelector(".borrarFiltros_edad");
boton_edad.addEventListener("click", function (e) {
    e.preventDefault;
    location.href = "/genetica/terneras/?min_ed=" + sliderDesde_edad.value + "&max_ed=" + sliderHasta_edad.value;
    console.log("Hola");
});

borrar_edad.addEventListener("click", function (e) {
    e.preventDefault;
    location.href = "/genetica/terneras";
});

/* --------------------------        Filtro por precio     -------------------------- */
/* Valor del rango desde*/

var sliderDesde = document.getElementById("desde");

var outputDesde = document.getElementById("desdeValor");
outputDesde.innerHTML = sliderDesde.value;

sliderDesde.oninput = function () {
    a = this.value;
    outputDesde.innerHTML = a;
}


/* Valor del rango hasta*/
var sliderHasta = document.getElementById("hasta");
var outputHasta = document.getElementById("hastaValor");
outputHasta.innerHTML = sliderHasta.value;

sliderHasta.oninput = function () {
    a = this.value;
    outputHasta.innerHTML = a;
}

var boton = document.querySelector(".filtroRango");
var borrar = document.querySelector(".borrarFiltros");
console.log(boton);
boton.addEventListener("click", function (e) {
    e.preventDefault;
    location.href = "/genetica/terneras/?min=" + sliderDesde.value + "&max=" + sliderHasta.value;
    console.log("Hola");
});

borrar.addEventListener("click", function (e) {
    e.preventDefault;
    location.href = "/genetica/terneras";
});
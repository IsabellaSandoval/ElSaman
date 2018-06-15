  var boton = document.querySelector(".cerrarConstruccion");
        var construccion = document.querySelector(".construccion");
        console.log(boton);

        function cerrarMensaje() {

            if (!boton) {
                alert("no existe");
            } else {
                padre = construccion.parentNode;
                padre.removeChild(construccion);
            }
        }
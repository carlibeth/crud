function activar() {
    let activar = document.querySelectorAll(".agregar");

    activar.forEach(function (e) {
        e.addEventListener("click", function (event) {
            mostrarModal();

        })
    })
}

activar();

let enviar = document.getElementById("formulario");
enviar.addEventListener("submit", function (event) {
    event.preventDefault();
    const datos = new FormData(enviar);
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "html/card.html", true);

    xhr.onload = function () {
        if (this.status === 200) {
            const respuesta = this.responseText;
            const div = document.createElement('div');
            div.innerHTML = respuesta.trim();


            div.querySelector(".nombre").innerHTML = datos.get("name");
            div.querySelector(".contacto").innerHTML = datos.get("contact");
            div.querySelector(".pais").innerHTML = datos.get("dress");
            div.querySelector(".descripcion").innerHTML = datos.get("description");


            const borrar = div.querySelector(".borrar")

            borrar.addEventListener("click", function () {
                borrar.closest(".tarjeta").remove();
            });

            const abrirModalborrar = div.querySelector(".abrirModalborrar");

            abrirModalborrar.addEventListener("click", function () {
                abrirModalborrar.closest(".tarjeta").querySelector(".modalborrar").classList.replace("oculto", "mostrar");
            });

            const editar = div.querySelector(".editar")

            editar.addEventListener("click", function () {
                document.querySelector('input[name="name"]').value = datos.get("name");
                document.querySelector('input[name="contact"]').value = datos.get("contact");
                document.querySelector('input[name="dress"]').value = datos.get("dress");
                document.querySelector('textarea[name="description"]').value = datos.get("description");
                document.querySelector('input[name="lastname"]').value = datos.get("lastname");
                document.querySelector('input[name="race"]').value = datos.get("race");
                document.querySelector('input[name="img"]').value = datos.get("img");
                mostrarModal();


            });



            document.getElementById("main").appendChild(div.firstChild);
            document.getElementById("active").classList.replace("mostrar", "oculto");
            ocultarModal();
            enviar.reset();
        }
    }

    xhr.send();


})

function ocultarModal() {
    document.getElementById("agregar").classList.replace("mostrar", "oculto");
}
function mostrarModal() {
    document.getElementById("agregar").classList.replace("oculto", "mostrar");
}



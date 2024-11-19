let paso = 0;
let contadorNo = 0;

function siguientePaso() {
    const mensaje = document.getElementById("mensaje");
    const botonContinuar = document.getElementById("botonContinuar");
    const musica = document.getElementById("musica");

    paso++;

    switch (paso) {
        case 1:
            mensaje.textContent = "Esta es la segunda etapa. Presiona continuar.";
            musica.play();
            break;
        case 2:
            mensaje.textContent = "Esta es la tercera etapa. Disfruta la música.";
            break;
        case 3:
            mensaje.textContent = "Esta es la cuarta etapa. Presiona continuar.";
            break;
        case 4:
            mensaje.innerHTML = "¿Te gustaría continuar?";
            botonContinuar.style.display = "none";
            crearBotonesDecision();
            break;
    }
}

function crearBotonesDecision() {
    const contenedor = document.getElementById("contenedor");

    const botonSi = document.createElement("button");
    botonSi.id = "botonSi";
    botonSi.textContent = "Sí";
    botonSi.onclick = aceptar;

    const botonNo = document.createElement("button");
    botonNo.id = "botonNo";
    botonNo.textContent = "No";
    botonNo.onclick = escapar;

    contenedor.appendChild(botonSi);
    contenedor.appendChild(botonNo);
}

function aceptar() {
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "¡Gracias por aceptar! Este es el mensaje final.";
    document.getElementById("musica").pause();

    // Oculta todos los botones
    document.querySelectorAll("button").forEach(boton => {
        boton.style.display = "none";
    });
}

function escapar() {
    const botonSi = document.getElementById("botonSi");

    contadorNo++;

    if (contadorNo <= 5) {
        const incremento = 1 + (contadorNo * 0.2);
        botonSi.style.transform = `scale(${incremento})`;
    }
}

let paso = 0;
let contadorNo = 0;

function siguientePaso() {
    const mensaje = document.getElementById("mensaje");
    const botonContinuar = document.getElementById("botonContinuar");
    const musica = document.getElementById("musica");

    paso++;

    if (paso === 1) {
        mensaje.textContent = "Esta es la segunda etapa. Presiona continuar.";
    } else if (paso === 2) {
        mensaje.textContent = "Esta es la tercera etapa. Disfruta la música.";
        musica.play();
    } else if (paso === 3) {
        mensaje.innerHTML = "¿Te gustaría continuar?";
        botonContinuar.style.display = "none";
        
        const botonSi = document.createElement("button");
        botonSi.id = "botonSi";
        botonSi.textContent = "Sí";
        botonSi.onclick = aceptar;

        const botonNo = document.createElement("button");
        botonNo.id = "botonNo";
        botonNo.textContent = "No";
        botonNo.onclick = escapar;

        document.getElementById("contenedor").appendChild(botonSi);
        document.getElementById("contenedor").appendChild(botonNo);
    }
}

function aceptar() {
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "¡Gracias por aceptar! Este es el mensaje final.";
    
    // Oculta todos los botones
    document.getElementById("botonSi").style.display = "none";
    document.getElementById("botonNo").style.display = "none";
}

function escapar() {
    const botonSi = document.getElementById("botonSi");

    // Incrementa el contador cada vez que se hace clic en el botón "No"
    contadorNo++;

    // Cada vez que se da clic en "No", se aumenta el tamaño del botón "Sí"
    if (contadorNo <= 5) {
        const incremento = 1 + (contadorNo * 0.2); // Aumenta el tamaño un 20% en cada clic
        botonSi.style.transform = `scale(${incremento})`;
    }
}

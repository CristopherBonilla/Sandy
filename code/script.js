let paso = 0;
let contadorNo = 0;

function siguientePaso() {
    const mensaje = document.getElementById("mensaje");
    const botonContinuar = document.getElementById("botonContinuar");
    const musica = document.getElementById("musica");

    paso++;

    switch (paso) {
        case 1:
            mensaje.textContent = "Sube el volumen, quiza te guste.";
            musica.play();
            break;
        case 2:
            mensaje.textContent = "Ahora si, a lo que vamos.";
            break;
        case 3:
            mensaje.textContent = "He pensado mucho en qué escribir en esta parte.";
            break;
        case 4:
            mensaje.textContent = "Pero si escribiera todo lo que quiero, nos quedaríamos aquí hasta la noche.";
            break;
        case 5:
            mensaje.textContent = "Así que seré lo más puntual posible.";
            break;
        case 6:
            mensaje.textContent = "Como te habrás dado cuenta, un día como hoy, hace exactamente cuatro meses, nos conocimos.";
            break;
        case 7:
            mensaje.textContent = "Y en ese momento no imaginaba lo que llegaría a pasar a día de hoy.";
            break;
        case 8:
            mensaje.textContent = "Pues, en este tiempo que hemos salido, me he ido enamorando de la personita que está leyendo esto.";
            break;
        case 9:
            mensaje.textContent = "Al principio, cuando llegaste, mi corazón estaba de vacaciones, sin querer saber nada.";
            break;
        case 10:
            mensaje.textContent = "Pero poco a poco lo convenciste de que regresara y sintiera cariño de nuevo.";
            break;
        case 11:
            mensaje.textContent = "Porque pasar tiempo contigo, verte reír, estudiar juntos, salir a comer y ver cómo disfrutas cada bocado…";
            break;
        case 12:
            mensaje.textContent = "El solo hecho de existir contigo ha hecho que no quiera alejarme y que desee pasar el mayor tiempo posible a tu lado.";
            break;
        case 13:
            mensaje.textContent = "No sé si estaremos juntos para siempre, pero sí quiero y lucharé por estar contigo tanto tiempo como sea posible.";
            break;
        case 14:
            mensaje.textContent = "Entonces para concluir y en vista de que dije que sería lo mas puntual posible… quería preguntarte";
            break;
        case 15:
            mensaje.innerHTML = "¿Quieres ser mi novia?";
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
    mensaje.textContent = "¡Estoy muy feliz de que aceptaras 😘!";
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

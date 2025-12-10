// Botón 1 -> Ejecuta Exercise1.js
document.getElementById("btn1").addEventListener("click", function() {
    ejecutarEjercicio("js/Exercise1.js");
});

// Botón 2 -> Ejecuta Exercise2.js
document.getElementById("btn2").addEventListener("click", function() {
    ejecutarEjercicio("js/Exercise2.js");
});

// Botón 3 -> Ejecuta Exercise3.js
document.getElementById("btn3").addEventListener("click", function() {
    ejecutarEjercicio("js/Exercise3.js");
});

// Botón 4 -> Ejecuta Exercise4.js
document.getElementById("btn4").addEventListener("click", function() {
    ejecutarEjercicio("js/Exercise4.js");
});

// Botón 5 -> Ejecuta Exercise5.js
document.getElementById("btn5").addEventListener("click", function() {
    ejecutarEjercicio("js/Exercise5.js");
});

// Botón 6 -> Ejecuta Exercise6.js
document.getElementById("btn6").addEventListener("click", function() {
    ejecutarEjercicio("js/Exercise6.js");
});


// Función que carga dinámicamente el archivo JS
function ejecutarEjercicio(ruta) {
    const script = document.createElement("script");
    script.src = ruta + "?v=" + Date.now();  // evita caché ✔
    document.body.appendChild(script);
}
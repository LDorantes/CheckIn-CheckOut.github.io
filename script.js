function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Asegurar que siempre haya dos dígitos para horas, minutos y segundos
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    var time = hours + ":" + minutes + ":" + seconds;

    document.getElementById("clock").innerHTML = time;

    setTimeout(updateClock, 1000); // Actualizar cada segundo
}

updateClock(); // Iniciar el reloj

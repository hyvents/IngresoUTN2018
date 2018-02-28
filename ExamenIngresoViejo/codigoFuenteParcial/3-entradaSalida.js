//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var largo;
    var ancho;
    var perimetro;
    var hilos;
    largo=parseInt(document.getElementById("largo").value);
    ancho=parseInt(document.getElementById("ancho").value);
    perimetro=ancho*2+largo*2;
    hilos=perimetro*6;
    alert(hilos);
}


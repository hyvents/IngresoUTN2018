//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var precio;
    var preciof;
    var imp;
    precio=parseInt(prompt("ingrese el precio"));
    imp=precio*0.21;
    preciof=precio+imp;
    document.getElementById("importe").value=preciof;

}


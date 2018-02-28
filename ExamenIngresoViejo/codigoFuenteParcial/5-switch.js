//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var mes;
    mes=prompt("ingrese mes del año");
    switch(mes)
    {
        case "enero":
        alert("verano");
        break;
        case "febrero":
        alert("verano");
        break;
        case "marzo":
        case "abril":
        case "mayo":
        case "junio":
        case "julio":
        case "agosto":
        case "septiembre":
        case "octubre":
        case "noviembre":
        case "diciembre":
        alert("falta para el verano");
        break;

    }
}


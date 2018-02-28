//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var base;
    var perimetro;
    base=parseInt(document.getElementById("lado").value);
    perimetro=base+base+base;
    alert(perimetro);
	
}


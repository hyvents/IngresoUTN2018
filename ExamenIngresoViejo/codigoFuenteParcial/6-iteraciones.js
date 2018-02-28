//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var i=1;
    var contador;
    var precio;
    var menor=0;
    var mayor=0;

    for(i=1;i<=7;i++)
    {
        precio=prompt("ingrese el precio");
        if(precio>i || i==1)
        {
            mayor=precio;
        }
        if(precio<i || i==1)
        {
            menor=precio;
        }

    }
    alert("mayor es :"+mayor+"menor es :" +menor );
	
}


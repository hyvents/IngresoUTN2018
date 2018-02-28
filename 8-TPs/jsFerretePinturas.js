/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperatura;
    var temp2;
    temperatura=parseInt(document.getElementById("Temperatura").value);
    temp2=(temperatura-32)/1.8;
    alert(temp2);

	
}

function CentigradosFahrenheit () 
{
	var temperatura;
    var temp2;
    temperatura=parseInt(document.getElementById("Temperatura").value);
    temp2=(temperatura*1.8)+32;
    alert(temp2);
}

/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var num1;
    var num2;
    var num3;
    var suma;
    num1=parseInt(document.getElementById("PrecioUno").value);
    num2=parseInt(document.getElementById("PrecioDos").value);
    num3=parseInt(document.getElementById("PrecioTres").value);
    suma=num1+num2+num3;
    alert(suma);
    
}
function Promedio () 
{
    var num1;
    var num2;
    var num3;
    var suma;
    var prom;
    var suma;
    num1=parseInt(document.getElementById("PrecioUno").value);
    num2=parseInt(document.getElementById("PrecioDos").value);
    num3=parseInt(document.getElementById("PrecioTres").value);
    suma=num1+num2+num3;
    prom=suma/3;	
    alert(prom);
}
function PrecioFinal () 
{
    var num1;
    var num2;
    var num3;
    var suma;
    var ive;
    var ivee;
    var suma;
    num1=parseInt(document.getElementById("PrecioUno").value);
    num2=parseInt(document.getElementById("PrecioDos").value);
    num3=parseInt(document.getElementById("PrecioTres").value);
    suma=num1+num2+num3;
    ive=suma/100*21
    ivee=suma+ive;
    alert(ivee);
	
}
function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	while(contador<=4)
	{
		numero=prompt("ingrese un numero");
		numero = parseInt(numero);
		
		acumulador=numero+acumulador;
		contador++;


	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
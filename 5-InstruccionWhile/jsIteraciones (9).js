function Mostrar()
{

	var contador=0;
	var numero;
	var min;
	var max;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		numero=prompt("ingrese numeros");
		numero=parseInt(numero);
		contador++;
		if(contador==1)
		{
			min=numero;
			max=numero;
		}
		else
		{
			if(numero>max)
			{
				max=numero;
			}
			if(numero<min)
			{
				min=numero;
			}
		}
		respuesta=prompt("ingrese no para terminar");
		
	
	}
	document.getElementById("minimo").value=min;
	document.getElementById("maximo").value=max;




}//FIN DE LA FUNCIÓN
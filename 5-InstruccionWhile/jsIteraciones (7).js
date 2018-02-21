function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	var f;
	f=0;

	while(f==0)
	{
		numero=prompt("ingrese un numero, ponga Si si quiere terminar");
		if(numero=='si')
		{
			f=1;
		}
		else
		{
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		contador++;
		}
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
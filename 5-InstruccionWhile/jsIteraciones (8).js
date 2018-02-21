function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var flag=0;
	
	

	while(flag==0)
	{
		numero=prompt("ingrese si para salir");
		if(numero=="s")
		{
			flag=1;
		}
		else
		{
			numero=parseInt(numero);
			if(numero>=0)
			{
				positivo=positivo+numero;
			}
            else
			{
				
				negativo=negativo*numero;
			}
		}
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}
//FIN DE LA FUNCIÓN
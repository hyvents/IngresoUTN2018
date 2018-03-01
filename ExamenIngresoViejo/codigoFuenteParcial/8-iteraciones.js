//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var numero;
    var contador=0;
    var contador2=0;
    var par=0;
    var suma=0;
    var maximo=0;
    var minimo=0;
    var i=1;
    var flag=1;
    var x;
    var promedio;

    while(flag==1)
    {
        numero=parseInt(prompt("ingrese un numero"));
        if(numero<0)
        {
            continue;
        }
        else
        {
            contador++;
            suma=suma+numero;
            if(numero%2 ==0)
            {
                par++;
            }
            if(numero>maximo)
            {
                maximo=numero;
            }
            if(numero<minimo || contador==1)
            {
                minimo=numero;
            }

        }
        x=prompt("presione si para seguir , no para salir");
        if(x=="no")
        {
            flag=0;
        }
        
    }
    promedio=suma/contador;
    document.write("cantidad de numeros pares :"+par);
    document.write("el promedio es :"+promedio);
    document.write("la suma de todos los numeros es : "+suma);
    document.write("el numero maximo es :"+maximo+"y el minimo :"+minimo);

    
	
}


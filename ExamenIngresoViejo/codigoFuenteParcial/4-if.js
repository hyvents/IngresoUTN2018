//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var num1;
    var num2;
    var cuenta;

    num1=parseInt(prompt("ingrese numero 1"));
    num2=parseInt(prompt("ingrese numero 2"));
    if(num1==num2)
    {
        cuenta=num1*num2;
    }
    else if(num1>num2)
    {
        cuenta=num1-num2;

    }
    else
    {
        cuenta=num1+num2;


    }
    document.write(cuenta);
		
}


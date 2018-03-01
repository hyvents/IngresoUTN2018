//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var nota;
    var minima=0;
    var suma=0;
    var sexo;
    var cantvar=0;
    var i=0;
    var promedio;

    while(i<=6)
    {
        i++
        nota=parseInt(prompt("ingrese nota"));
        if(nota<0 || nota>11)
        {
            i--;
            alert("error volver a ingresar numero");
            continue;

        }
        sexo=prompt("ingrese sexo");
        if(sexo!="m" && sexo!="f")
        {
            i--;
            alert("error, volver a ingresar numero y sexo");
            continue;
        }
        suma=suma+nota;
        if(nota<minima || i==1)
        {
            minima=nota;
        }
        if(nota>=6 && sexo=="m")
        {
            cantvar++;
        }
    }
    promedio=suma/i;
    alert("el promedio es: "+promedio);
    alert("la nota es mas baja :" +minima);
    alert("cantidad de varones aprobados :" +cantvar);


    
	
}


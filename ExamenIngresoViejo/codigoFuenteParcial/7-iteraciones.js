//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var nota;
    var sexo;
    var promedio;
    var notamenor=0;
    var cantvaro=0;
    var i=1;
    var acum=0;

    for(i=1;i<=6;i++)
    {
        nota=parseInt(prompt("ingrese nota"));
        if(nota<0 || nota>10)
        {
            i-1;
            continue;
        }
        sexo=prompt("ingresar sexo f o m");
        if(sexo != "m" && sexo!="f")
        {
            i-1;
            continue;
        }
        if(nota<notamenor || i==1)
        {
            notamenor=nota;
        }
        if(nota>=6 && sexo=="m")
        {
            cantvaro++;
        }
        acum=acum+nota;
    }
    promedio=acum/i;
    document.write(notamenor);
    document.write(cantvaro);
    document.write(promedio);
	
}


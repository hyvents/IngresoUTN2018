function Mostrar()
{
//tomo la edad  
var edad;
edad=parseInt(document.getElementById("edad").value);
if(edad>=13 && edad<=17)
{
     alert(" es adolescente"); 
    
}
else{

if(edad>=18)
{
    alert("es mayor de edad");
}
if(edad<=12)
{
    alert("es un niño");
}
}



}//FIN DE LA FUNCIÓN
let diaSemana = prompt("¿Qué día es hoy?");

switch (diaSemana) {
    case "lunes":
        alert("Hoy es lunes.");
    break;
    case "martes":
        alert("Hoy es martes.");
    break;
    case "miércoles":
        alert("Hoy es miércoles.");
    break;
    case "jueves":
        alert("Hoy es jueves.");
    break;
    case "viernes":
        alert("Hoy es viernes.");
    break;
    case "sábado":
        alert("Hoy es sábado.");
    break;
    case "domingo":
        alert("Hoy es domingo.");
    break;
    default:
       alert("Escribe el día de la semana en minúsculas.");
}

if (diaSemana == "lunes"){
    document.write("Correr 10km." + "<br>" + "<br>");
 }
 
 if (diaSemana == "martes"){
    document.write("100 sentadillas" + "<br>" + "<br>");
 }
 if (diaSemana == "miercoles"){
    document.write("100 zancadas" + "<br>" + "<br>");
 }
 if (diaSemana == "jueves"){
    document.write("200 saltos con soga" + "<br>" + "<br>");
 }
 if (diaSemana == "viernes"){
    document.write("Bicileta 20km." + "<br>" + "<br>");
 }
 if (diaSemana == "sabado"){
    document.write("200 abdominales" + "<br>" + "<br>");
 }
 if (diaSemana == "domingo"){
    document.write("Descansar" + "<br>" + "<br>");
 }


 for(i=20; i<=70; i++){
    document.write("El número es: " + i + "<br>");
}

document.write("<br>");

var mensaje = prompt("¿Cuántas veces queres que aparezca el mensaje 'Hola Mundo'?");

for(i=1; i<=mensaje; i++){
    document.write("Hola Mundo" + "<br>");
}

var diaSemana = prompt("Elige un dia de la semana")

switch (diaSemana.toLowerCase()){

    case "lunes": 
    alert("Dia lunes")
    break;
    case "viernes":
    alert("Dia Viernes")
    break;    
    case "sabado":
    case "domingo":    
    alert("Fin de semana")
    break;
    default:
    alert("Dia no valido")
}



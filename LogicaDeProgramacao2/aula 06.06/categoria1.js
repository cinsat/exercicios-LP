
const idade = 17;

switch (idade) {
    case 5:
    case 6:
    case 7:
    /*podemos colocar os cases considerando as variaveis*/
        console.log ("Você é Infantil A");
        break;
    case 8:
        console.log ("Voce é Infantil B");
        break;
    case 12:
        console.log ("Voce é Juvenil A");
        break;
    case 14:
        console.log ("Voce é Juvenil B");
        break;
    default:
        console.log ("Voce não pode competir");
}

/*const idade = 17;

switch (true) {
    case (idade >=5 && idade<= 7):
    uma gambiarra para forçar a usar o switch case ao inves do if else pq o true "força"
        console.log ("Você é Infantil A");
        break;
    case 8:
        console.log ("Voce é Infantil B");
        break;
    case 12:
        console.log ("Voce é Juvenil A");
        break;
    case 14:
        console.log ("Voce é Juvenil B");
        break;
    default:
        console.log ("Voce não pode competir");
}*/ 
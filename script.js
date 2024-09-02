const valueInMeters = 2.5;
const unitOption = 3; 

let convertedValue;

switch (unitOption) {
    case 1:
        convertedValue = valueInMeters * 1000;
        console.log(`${valueInMeters}m equivale à ${convertedValue}mm`);
        break;
    case 2:
        convertedValue = valueInMeters * 100;
        console.log(`${valueInMeters}m equivale à ${convertedValue}cm`);
        break;
    case 3:
        convertedValue = valueInMeters * 10;
        console.log(`${valueInMeters}m equivale à ${convertedValue}dm`);
        break;
    case 4:
        convertedValue = valueInMeters / 10;
        console.log(`${valueInMeters}m equivale à ${convertedValue}dam`);
        break;
    case 5:
        convertedValue = valueInMeters / 100;
        console.log(`${valueInMeters}m equivale à ${convertedValue}hm`);
        break;
    case 6:
        convertedValue = valueInMeters / 1000;
        console.log(`${valueInMeters}m equivale à ${convertedValue}km`);
        break;
    default:
        console.log("Opção inválida! Escolha um número de 1 a 6.");
        break;
}

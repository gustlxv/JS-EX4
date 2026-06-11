let temp1 = Number(
    prompt("Digite a temperatura em Fahrenheit:")
);
let temp2 =
    (temp1 - 32) * 5 / 9;

alert(`${temp2.toFixed(2)} °C`);
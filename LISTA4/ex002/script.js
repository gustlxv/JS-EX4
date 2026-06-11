let num1 = Number(prompt("Digite um número:"));
let num2 = Number(prompt("Digite um segundo número:"));
let num3 = Number(prompt("Digite um terceiro número:"));
let maiorNumero = num1;
if (num2 > maiorNumero) {
    maiorNumero = num2;
}
if (num3 > maiorNumero) {
    maiorNumero = num3;
}
alert(`O maior número dos três é: ${maiorNumero}`);
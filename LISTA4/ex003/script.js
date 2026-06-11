let valorCompra = Number(prompt("Digite o valor da compra:"));
let valorFinal =
    valorCompra > 100
        ? valorCompra * 0.9
        : valorCompra;

alert(`Valor final: R$ ${valorFinal.toFixed(2)}`);